((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,B,A6,Z,A_,A7,E,N,A8,S,A0,A9,I,Aa,O,Ab,A1,Ac,Q,Ad,Ae,R,T,Af,W,U,M,Ag,V,Ah,Ai,P,K,F,A={
zv(d,e,f){var w=d.a,v=d.b,u=d.c
return new A.ad(w+(e.a-w)*f,v+(e.b-v)*f,u+(e.c-u)*f)},
fxL(d,e){var w=Math.cos(e),v=Math.sin(e),u=d.a,t=d.c
return new A.ad(u*w+t*v,d.b,-u*v+t*w)},
hdU(d,e,f){var w,v,u,t,s,r,q,p,o=new A.fFO(Math.cos(e),Math.sin(e)),n=new A.fFM(0),m=new A.fFN(n,e,o,f),l=new A.fFL(n,e,o),k=C.a([],x.B)
for(w=d.length,v=x.o,u=0;u<d.length;d.length===w||(0,C.K)(d),++u){t=d[u]
s=C.a([],v)
for(r=t.a,q=r.length,p=0;p<r.length;r.length===q||(0,C.K)(r),++p)s.push(m.$1(r[p]))
k.push(new A.t8(s,l.$1(t.b),t.c,t.d,t.e,t.f,t.r,t.w,t.x))}return k},
FX(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length<3)return d
w=C.a([B.d.gK(d)],x.o)
for(v=1;u=v+1,u<d.length;v=u){t=d[v-1]
s=d[v]
r=d[u]
q=s.a
p=s.b
o=s.c
n=new A.ad(q-t.a,p-t.b,o-t.c)
m=new A.ad(r.a-q,r.b-p,r.c-o)
l=Math.min(e,n.gSB()*0.5)
k=Math.min(e,m.gSB()*0.5)
j=n.gqn(0)
i=new A.ad(q-j.a*l,p-j.b*l,o-j.c*l)
j=m.gqn(0)
h=new A.ad(q+j.a*k,p+j.b*k,o+j.c*k)
for(g=0;g<=a0;++g){f=g/a0
w.push(A.zv(A.zv(i,s,f),A.zv(s,h,f),f))}}w.push(B.d.gam(d))
return w},
agb(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
if(a3.length<3)return a3
w=C.a([],x.o)
for(v=0;u=v+1,t=a3.length,u<t;v=u){s=v===0?a3[v]:a3[v-1]
r=a3[v]
q=a3[u]
p=v+2
o=p<t?a3[p]:q
for(t=s.a,p=r.a,n=q.a,m=o.a,l=s.b,k=r.b,j=q.b,i=o.b,h=s.c,g=r.c,f=q.c,e=o.c,d=0;d<a4;++d){a0=d/a4
a1=a0*a0
a2=new A.fFF(a0,a1,a1*a0)
w.push(new A.ad(a2.$4(t,p,n,m),a2.$4(l,k,j,i),a2.$4(h,g,f,e)))}}w.push(B.d.gam(a3))
return w},
hEf(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=!0,u=!0,t=0;t<w;++t)if(d[t].c>=0.5)u=!1
else v=!1
if(v)return d
if(u)return D.cXV
s=C.a([],x.o)
for(r=0;w=d.length,r<w;){q=d[r];++r
p=d[r%w]
w=q.c
o=w>=0.5
n=p.c
if(o)s.push(q)
if(o!==n>=0.5)s.push(A.zv(q,p,(0.5-w)/(n-w)))}return s},
ad:function ad(d,e,f){this.a=d
this.b=e
this.c=f},
t8:function t8(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
dM:function dM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dk:function Dk(d,e,f){this.a=d
this.b=e
this.c=f},
Eo:function Eo(d,e,f){this.a=d
this.b=e
this.c=f},
ua:function ua(d){var _=this
_.a=d
_.c=_.b=0
_.d=1
_.e=0},
bU4:function bU4(d,e){this.a=d
this.b=e},
bU5:function bU5(d){this.a=d},
bU3:function bU3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bU6:function bU6(d,e,f){this.a=d
this.b=e
this.c=f},
bU2:function bU2(d,e){this.a=d
this.b=e},
bU7:function bU7(d,e,f){this.a=d
this.b=e
this.c=f},
fFO:function fFO(d,e){this.a=d
this.b=e},
fFM:function fFM(d){this.a=d},
fFN:function fFN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fFL:function fFL(d,e,f){this.a=d
this.b=e
this.c=f},
fFF:function fFF(d,e,f){this.a=d
this.b=e
this.c=f},
v6:function v6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=160
_.r=0
_.w=1.25
_.x=!1
_.as=_.Q=_.z=_.y=null
_.P$=0
_.S$=h
_.bt$=_.bL$=0},
aTj:function aTj(d){this.a=d},
asW:function asW(d,e,f,g,h,i,j,k,l){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.a=l},
ckC:function ckC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckD:function ckD(d,e){this.a=d
this.b=e},
ckB:function ckB(){},
OI:function OI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
asX:function asX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
boc:function boc(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=40
_.bq$=g
_.a7$=h
_.c=_.a=null},
eNS:function eNS(d){this.a=d},
eNR:function eNR(d){this.a=d},
eNO:function eNO(d){this.a=d},
eNP:function eNP(d){this.a=d},
eNQ:function eNQ(d){this.a=d},
aL6:function aL6(){},
bwV(d){return A.hEI(d)},
hEI(d){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o
var $async$bwV=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.qx(C.mT(""),d,B.hh,null).cL(0,B.Ws),$async$bwV)
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
return C.i($async$bwV,v)},
hQ9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.ON[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(C.dr(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=C.af(y.v,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=B.d.iK(D.ON,new A.flr())
if(w==null)w=B.d.gK(D.ON)
s=C.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,C.K)(r),++u){l=r[u].a
k=l[0]
l=$.pW().h(0,l[1])
l.toString
s.n(0,k,l)}m=C.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,C.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+B.d.gK(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.B:""
return new A.ain(w.a,w.b,m,w,s,!1)},
hJW(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new C.J(D.Pa,new A.fcv(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
hXV(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=B.a.cG(b2,"{")
v=B.a.od(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(B.R.aG(0,B.a.ap(b2,w,v+1),b1))
t=C.a([],x.d)
a5=x.N
s=C.aZ(a5)
r=0
for(a6=x.j,a7=J.aV(a6.a(J.q(u,"parts"))),a8=x.i;a7.C();){q=a7.gU(a7)
p=C.t(J.q(q,"kind"))
o=C.t(J.q(q,"id"))
if(!$.pW().aj(0,p)||J.eY(s,o)||J.ab(t)>=8)continue
J.ce(s,o)
n=C.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.d6u[a9]
l=J.q(q,m)
if(typeof l=="number")J.aG(n,m,l)}k=B.k.D(typeof J.q(q,"x")=="number"?C.f8(J.q(q,"x")):0.2+B.k.F(r,3)*0.3,0.16,0.84)
j=B.k.D(typeof J.q(q,"y")=="number"?C.f8(J.q(q,"y")):0.25+B.k.an(r,3)*0.3,0.1,0.9)
J.ce(t,new C.eW([o,p,k,j,n]));++r}if(J.ab(t)<2)return b1
i=C.a([],x.y)
for(a5=J.aV(a6.a(J.q(u,"wires")));a5.C();){h=a5.gU(a5)
g=a6.a(h)
if(J.ab(g)<4)continue
f=C.t(J.q(g,0))
e=C.t(J.q(g,2))
d=B.o.D(B.k.O(C.f8(J.q(g,1))),0,1)
a0=B.o.D(B.k.O(C.f8(J.q(g,3))),0,1)
if(J.eY(s,f)&&J.eY(s,e)&&!J.y(f,e))J.ce(i,new C.cM([f,d,e,a0]))}if(J.ab(i)<2)return b1
d=x.s
a1=C.a([],d)
a0=x.Q.a(J.q(u,"steps"))
a0=J.aV(a0==null?B.cG:a0)
while(a0.C()){a2=a0.gU(a0)
J.ce(a1,C.t(a2))}a3=a1
a0=J.q(u,"title")
a0=C.t(a0==null?"My invention":a0)
a1=J.q(u,"explain")
a4=new A.mm(a0,C.t(a1==null?"":a1),t,i,B.T)
a0=a4.a
a1=a4.b
d=J.ab(a3)===0?C.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.q(u,"honest")
a5=C.t(a5==null?"":a5)
return new A.ain(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
hOL(d){var w,v,u=A.fVh()
d.B(u)
for(w=0;w<60;++w)u.wD(0,0.03333333333333333)
v=u.a
return B.d.b8(v,new A.fiA(u))&&!B.d.d8(v,new A.fiB())},
hOK(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=C.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,C.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.pW().h(0,t.b).b+" #"+v)}w=x.s
s=C.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,C.K)(l),++u){t=l[u]
q=C.a([],w)
p=t.b
if(p==="battery")q.push(C.t(t.e)+" V")
if(p==="resistor")q.push(""+B.k.V(t.r)+" ohms")
if(B.d.t(D.d4Y,p))q.push("level "+B.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+B.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+B.d.aH(q,", ")+")"
s.push(C.t(p)+n+": "+o+", current "+B.k.aa(Math.abs(t.fr)*1000,0)+" mA")}l=C.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,C.K)(w),++u){m=w[u]
l.push(C.t(k.h(0,m.a.a))+" terminal "+m.b+" to "+C.t(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+B.d.aH(s,"\n")+"\nWires: "+B.d.aH(l,"; ")},
hDf(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=C.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,C.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+B.d.aH(v,"\n")+"\n\n"}v=B.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
hQ8(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.pW().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Pa[u]
if(B.d.b8(w,new A.flo(s)))if(!C.dr(r,s.b.toLowerCase(),0))v=C.dr(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=C.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new C.a1(w,new A.flp(e),C.T(w).k("a1<1>")).gal(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=C.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+B.k.aa(B.d.cI(w,0,new A.flq())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=C.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=B.d.gK(w)
w=$.pW().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ain:function ain(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
flr:function flr(){},
fcv:function fcv(){},
fiA:function fiA(d){this.a=d},
fiB:function fiB(){},
flo:function flo(d){this.a=d},
flp:function flp(d){this.a=d},
flq:function flq(){},
Uj:function Uj(d,e){this.c=d
this.a=e},
bhJ:function bhJ(d,e,f,g,h){var _=this
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
dZV:function dZV(d){this.a=d},
dZW:function dZW(d,e,f){this.a=d
this.b=e
this.c=f},
dZX:function dZX(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_3:function e_3(d){this.a=d},
e_1:function e_1(d,e){this.a=d
this.b=e},
e_2:function e_2(d,e,f){this.a=d
this.b=e
this.c=f},
e_4:function e_4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e__:function e__(d){this.a=d},
e_0:function e_0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_5:function e_5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dZZ:function dZZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_6:function e_6(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e){this.a=d
this.b=e},
e_b:function e_b(d){this.a=d},
e_a:function e_a(d){this.a=d},
e_c:function e_c(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_g:function e_g(d,e){this.a=d
this.b=e},
bxg(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aMS,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p)},
h7D(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),B.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ao,C.d(e,w,w,w,w,w,w,B.yZ,B.L,w,w),B.ay,C.c5(B.fI,g,B.bx,0,8)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new C.o(D.UH,w,u,v,w,w,B.n),w,w,w,w,B.a8,w,w,w),w,w,w)},
Fh:function Fh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uv:function uv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UK:function UK(d){this.a=d},
aCw:function aCw(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fh$=h
_.kM$=i
_.fL$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
eeS:function eeS(){},
efb:function efb(d){this.a=d},
efa:function efa(d,e){this.a=d
this.b=e},
efc:function efc(){},
efd:function efd(){},
eeU:function eeU(d,e,f){this.a=d
this.b=e
this.c=f},
eeT:function eeT(d,e){this.a=d
this.b=e},
eeJ:function eeJ(d){this.a=d},
eeK:function eeK(d){this.a=d},
eeL:function eeL(d){this.a=d},
eeM:function eeM(d){this.a=d},
eeN:function eeN(d){this.a=d},
eeO:function eeO(d){this.a=d},
eeP:function eeP(d){this.a=d},
eeQ:function eeQ(d){this.a=d},
eeR:function eeR(d){this.a=d},
eeH:function eeH(d){this.a=d},
eeI:function eeI(d){this.a=d},
eeG:function eeG(d){this.a=d},
ef4:function ef4(d,e){this.a=d
this.b=e},
ef_:function ef_(d){this.a=d},
ef0:function ef0(d){this.a=d},
eeX:function eeX(d){this.a=d},
ef1:function ef1(d){this.a=d},
eeW:function eeW(d){this.a=d},
ef2:function ef2(d){this.a=d},
ef3:function ef3(d){this.a=d},
eeV:function eeV(d){this.a=d},
ef5:function ef5(d,e){this.a=d
this.b=e},
eeZ:function eeZ(d,e){this.a=d
this.b=e},
ef6:function ef6(d){this.a=d},
ef7:function ef7(d){this.a=d},
ef8:function ef8(d){this.a=d},
ef9:function ef9(d){this.a=d},
eeY:function eeY(d){this.a=d},
beM:function beM(d,e){this.b=d
this.a=e},
aKm:function aKm(){},
buT:function buT(){},
cBV(){var w=0,v=C.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cBV=C.e(function(a0,a1){if(a0===1)return C.f(a1,v)
for(;;)switch(w){case 0:w=3
return C.b($.tL().k7(0,"assets/data/body3d.bin"),$async$cBV)
case 3:d=a1
$.h31=J.eU(B.dD.gaP(d),d.byteOffset,d.byteLength)
t=C.bFh(d)
s=t.getUint32(4,!0)
r=C.a([],x.fq)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=C.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=C.jj(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.cVZ[i]
g=C.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new A.a1R(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.aTQ))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new A.b7Y(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cBV,v)},
aQd:function aQd(d,e,f){this.a=d
this.b=e
this.c=f},
a1R:function a1R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
b7Y:function b7Y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Tb:function Tb(d){this.a=d},
aAX:function aAX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fh$=s
_.kM$=t
_.fL$=u
_.fi$=v
_.bq$=w
_.a7$=a0
_.c=_.a=null},
dBi:function dBi(d){this.a=d},
dBh:function dBh(d,e){this.a=d
this.b=e},
dAV:function dAV(d,e){this.a=d
this.b=e},
dAW:function dAW(){},
dBj:function dBj(){},
dAX:function dAX(d,e){this.a=d
this.b=e},
dAY:function dAY(d){this.a=d},
dAZ:function dAZ(){},
dB_:function dB_(d){this.a=d},
dB1:function dB1(d,e){this.a=d
this.b=e},
dB0:function dB0(d){this.a=d},
dAS:function dAS(d,e,f){this.a=d
this.b=e
this.c=f},
dAT:function dAT(d){this.a=d},
dAU:function dAU(d){this.a=d},
dB8:function dB8(d){this.a=d},
dB9:function dB9(d,e){this.a=d
this.b=e},
dBa:function dBa(d,e){this.a=d
this.b=e},
dBb:function dBb(d){this.a=d},
dB7:function dB7(d,e){this.a=d
this.b=e},
dBc:function dBc(d,e){this.a=d
this.b=e},
dB6:function dB6(d,e){this.a=d
this.b=e},
dBd:function dBd(d){this.a=d},
dB5:function dB5(d){this.a=d},
dBe:function dBe(d){this.a=d},
dB4:function dB4(d){this.a=d},
dBf:function dBf(d){this.a=d},
dB3:function dB3(d){this.a=d},
dBg:function dBg(d){this.a=d},
dB2:function dB2(d){this.a=d},
aJo:function aJo(){},
aJp:function aJp(){},
bYq:function bYq(d){var _=this
_.a=d
_.d=_.c=_.b=null},
bYr:function bYr(d,e){this.a=d
this.b=e},
bYs:function bYs(d){this.a=d},
aS4(d,e,f,g,h,i,j){return new A.a37(g,i,h,e,f,j)},
JU(d){return B.d.iK($.hi_(),new A.fiI(d))},
bBm(d,e){var w,v,u=d.e,t=new C.J(u,new A.fG2(),C.T(u).k("J<1,n>")).fF(0)
u=e.b
w=C.a2(u).k("bc<2>")
v=C.d8(new C.bc(u,w),w.k("G.E"))
return t.d8(0,v.gkn(v))},
hdV(d,e,f,g){var w,v
if(e.a&&e.c===0){if(e.r)return"SHOCK! The breaker was still ON and you touched a live wire. Always turn the power OFF and test the wires first."
return"STOP! The breaker is still ON, so these wires are live (120 volts). Turn the breaker OFF first. This can shock you badly."}if(e.c!==0)return"The device is already in the box. Pull it out again to change the wires."
if(!e.r&&!g.c.t(0,f))return d.r.$2(f,g)
w=e.b
v=g.a
if(w.h(0,v)!=null)return"That place already has a wire. Tap the wire to take it off first."
if(new C.bc(w,C.a2(w).k("bc<2>")).t(0,f))return"That wire is already fastened. Tap it to take it off if you want to move it."
w.n(0,v,f)
return null},
fPv(b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.fiO(b1),b0=new A.fiM(b1)
for(w=b2.b,w=new C.cI(w,C.a2(w).k("cI<1,2>")).gah(0),v=0,u=0,t=0,s=0,r=0,q=0,p=0,o=0,n=0,m=0;w.C();){l=w.d
k=a9.$1(l.a)
j=b0.$1(l.b)
if(k==="load"){++m
continue}A:{i="hot"===j
h=i
g=a8
if(h){g="hot"===k
h=g
f=k
e=!0
d=!0}else{f=a8
e=!1
d=!1
h=!1}if(h){++v
break A}a0=a8
if(i){if(d)h=f
else{h=k
f=h
d=!0}a0="neutral"===h
h=a0
a1=!0}else{a1=!1
h=!1}if(h){++u
break A}a2=a8
if(i){if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2
a3=!0}else{a3=!1
h=!1}if(h){++t
break A}a4="neutral"===j
h=a4
if(h)if(a1)h=a0
else{if(d)h=f
else{h=k
f=h
d=!0}a0="neutral"===h
h=a0
a1=!0}else h=!1
if(h){++s
break A}if(a4)if(e)h=g
else{if(d)h=f
else{h=k
f=h
d=!0}g="hot"===h
h=g
e=!0}else h=!1
if(h){++r
break A}if(a4)if(a3)h=a2
else{if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2
a3=!0}else h=!1
if(h){++q
break A}a5="ground"===j
h=a5
if(h)if(a3)h=a2
else{if(d)h=f
else{h=k
f=h
d=!0}a2="ground"===h
h=a2}else h=!1
if(h){++p
break A}if(a5)if(e)h=g
else{if(d)h=f
else{h=k
f=h
d=!0}g="hot"===h
h=g}else h=!1
if(h){++o
break A}if(a5)if(a1)h=a0
else{a0="neutral"===(d?f:k)
h=a0}else h=!1
if(h)++n}}w=b1.e
h=C.T(w).k("a1<1>")
a6=new C.a1(w,new A.fiK(),h).gM(0)
a7=new C.a1(w,new A.fiL(),h).gM(0)
if(t>0||o>0)return D.fvF
w=u>0
if(!(w&&s>0))h=r>0&&v>0
else h=!0
if(h)return D.fvM
if(w&&r>0)return D.fvG
if(q>0||n>0)return D.fvJ
if(m>0&&v<a6)return D.fvL
if(v<a6)return D.fvH
if(a7>0&&s<a7)return D.fvK
if(p===0)return D.fvE
return D.fvI},
bwY(d,e){var w
if(d==="light"||d==="fan")w=e.c===0?6.4:0.6
else w=e.c===0?4.7:-0.25
return w},
bz5(d,e,f){var w,v
if(d==="light"||d==="fan"){w=A.bwY(d,f)
v=f.c===0?w-3.2:w
switch(e){case 51:return new A.ad(-1.5,-0.3,v)
case 52:return new A.ad(0,-0.3,v)
default:return new A.ad(1.5,-0.3,v)}}w=A.bwY(d,f)
switch(e){case 21:return new A.ad(0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 22:return new A.ad(0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
case 23:return new A.ad(-0.98,-0.2+(d==="gfci"?0.95:0.85),w-0.45)
case 24:return new A.ad(-0.98,-0.2+(d==="gfci"?-0.75:-0.55),w-0.45)
default:return new A.ad(0,-1.98,w+0.52)}},
fgY(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=C.a([],x.B),a6=new A.ua(a5),a7=a9.a,a8=a7==="light"||a7==="fan"
if(b1){a6.b=1
a6.lQ(D.fsE,D.aPI,D.uu,3)
a6.lQ(D.ftl,D.aPI,D.uu,3)
a6.lQ(D.fub,D.aPW,D.uu,2)
a6.lQ(D.ftF,D.aPW,D.uu,2)
a6.b=2
a6.r4(D.fsm,D.aPF,D.lV,0.05,3)
a6.r4(D.fs5,D.aPF,D.lV,0.05,3)
a6.r4(D.fs0,D.fuu,D.lV,0.05,2)}w=A.h4S(a6,a7,!0)
v=new A.fgZ(a6,b0,a7,a8)
u=B.d.gK(w)
t=a7==="switch"
if(t){s=B.d.gam(w)
v.$5(10,u.ae(0,D.fpO),D.fud,"blackLine",D.JL)
v.$5(13,s.ae(0,D.fui),D.fri,"blackLoad",D.JL)
v.$5(12,u.ae(0,D.ft6),D.fr_,"ground",D.wF)
a6.b=6
r=x.o
a6.kg(C.a([u.ae(0,D.aPE),D.fpX,D.SX],r),0.075,D.wo,!1,0.3,8)
a6.kg(C.a([s.ae(0,D.aPE),D.fsJ,D.SX],r),0.075,D.wo,!1,0.3,8)
a6.a2c(D.SX,D.fu8,0.28,D.aaJ,0.18,0.3,10)}else{v.$5(10,u.ae(0,D.frl),D.fpU,"black",D.JL)
v.$5(11,u.ae(0,D.frY),D.fsO,"white",D.wo)
v.$5(12,u.ae(0,D.fsb),D.fs6,"ground",D.wF)}if(a8)A.h5Q(a6,a7,b0)
else A.h5w(a6,a7,A.bwY(a7,b0),b0.w,!1)
if(b0.e&&b0.c===0){a6.b=0
a6.d=0.5
for(r=a9.f,q=r.length,p=0;p<q;++p){o=r[p]
n=A.bz5(a7,o.a,b0)
if(o.e)m=B.cr
else{l=o.f
if(l==="ground")m=B.bl
else{l=l==="neutral"?B.c:D.V3
m=l}}if(a8)l=0
else{l=n.a
if(l>0.4)l=0.12
else l=l<-0.4?-0.12:0}if(a8)k=0.6
else k=Math.abs(n.a)<0.4?0.2:0
a6.j9(new A.ad(n.a+l,n.b+0,n.c+k),0.36,m,4,8,0.1)}a6.d=1}if(b0.c>=2&&!a8)A.h7S(a6,b0.w)
r=!1
if(b0.c>=2)if(b0.d)r=a7==="outlet"||a7==="gfci"
if(r)A.hMt(a6,b0.a&&!b0.w)
r=a8?"Ceiling box":"Electrical box"
q=a7==="fan"
l=q?' A fan needs a box that says "fan rated".':""
k=t?"Cable from the breaker panel (LINE)":"NM-B cable (Romex)"
j=a8?"It joins the fixture black wire with a wire nut.":"It goes on a brass screw."
i=a8?"It joins the fixture white wire.":"It goes on a silver screw."
h=a8?"It joins the green fixture ground wire.":"It goes on the green screw."
g=a7==="gfci"
if(g)f="GFCI outlet"
else f=t?"Light switch":"Receptacle (outlet)"
if(g)t="It checks that the current going out equals the current coming back. If some leaks (through water or a person) it shuts off in a fraction of a second."
else t=t?"A rocker that opens and closes the black wire to the light.":"The outlet. Each side has two slots and a ground hole. The short slot is hot, the long slot is neutral."
g=A.bwY(a7,b0)
e=q?"Ceiling fan":"Ceiling light"
q=q?"The motor housing with blades. It has three wires: black (motor), white (neutral) and green (ground).":"The light fixture with a frosted dome. It has three wires: black, white and green."
d=C.E([1,D.dR2,2,D.dRf,3,new A.dM(r,"A box that holds the wire connections. Every connection must be inside a box, never loose in the wall or the ceiling."+l,new A.ad(0,0,-1.2),9),4,new A.dM(k,"The yellow jacket holds three wires: black (hot), white (neutral) and bare copper (ground). Yellow means 12 gauge wire for a 20 amp circuit. White jackets are 14 gauge for 15 amps.",new A.ad(-0.4,1.5,-1.8),8),5,D.dRB,10,new A.dM("Black wire: hot","The hot wire brings the power from the breaker. It is the dangerous one. "+j,new A.ad(-0.8,-0.8,1.2),7),13,D.dQS,11,new A.dM("White wire: neutral","The neutral wire carries the power back to the panel. "+i,new A.ad(0,-0.8,1.2),7),12,new A.dM("Bare copper wire: ground","The ground wire is a safety path. If a wire touches metal, the current runs down the ground instead of through you. "+h,new A.ad(0.5,-0.8,1.2),7),6,D.dRd,20,new A.dM(f,t,new A.ad(0,-0.2,g),9),21,D.dRi,22,D.dRA,23,D.dRb,24,D.dRg,25,D.dR4,26,D.dRj,27,D.dRv,28,D.dR0,30,D.dQN,31,D.dQL,51,D.dRe,52,D.dQP,53,D.dRn,54,new A.dM(e,q,new A.ad(0,0,6.4),9),55,D.dRx],x.S,x.q)
a0=C.a([],x.Z)
if(b0.f&&b0.c===0)for(t=a9.f,r=t.length,p=0;p<r;++p){o=t[p]
n=A.bz5(a7,o.a,b0)
a1=o.f
A:{q="hot"===a1
if(q){l=D.eqc
break A}if("neutral"===a1){l=D.ehD
break A}if("ground"===a1){l=D.ek7
break A}l=D.e7T
break A}a2=l.a
if(a8){B:{if(q){q="BLACK NUT \xb7 HOT"
break B}if("neutral"===a1){q="WHITE NUT \xb7 NEUTRAL"
break B}q="GROUND"
break B}a3=q}else a3=a2
if(a8)a4=D.fpR
else{q=n.a
if(q>0.4)k=1.9
else k=q<-0.4?-2.1:0
a4=new A.ad(k,Math.abs(q)<0.4?-1.5:0.1,0.4)}a0.push(new A.Dk(new A.ad(n.a+a4.a,n.b+a4.b,n.c+a4.c),a3,l.b))}if(b0.a&&b0.c===0)a0.push(D.bM2)
return new A.Eo(a5,d,a0)},
h4S(d,e,f){var w,v,u=e==="light"||e==="fan"
d.b=3
if(u){d.f_(D.aPY,D.aPH,2.2,D.wE,0.3,18)
d.aiY(D.aPH,D.It,2.2,D.wE,!1,!0,0.3,18)}else{d.eb(D.aPY,D.fst,D.wE,0.3)
d.eb(D.fra,D.aPy,D.wE,0.3)
d.eb(D.fq7,D.aPy,D.wE,0.3)
d.eb(D.fs2,D.aPM,D.wE,0.3)
d.eb(D.frN,D.aPM,D.wE,0.3)}w=C.a([],x.o)
v=new A.f3s(d,f,w)
if(e==="switch"){v.$2(4,D.cLu)
v.$2(5,D.cJN)}else v.$2(4,D.cWC)
return w},
hdZ(d,e){var w
A:{if(10===e){w=d==="switch"?"blackLine":"black"
break A}if(13===e){w="blackLoad"
break A}if(11===e){w="white"
break A}if(12===e){w="ground"
break A}w=null
break A}return w},
h5w(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.ad(0,-0.2,f),j=e==="switch",i=e==="gfci"
if(g)w=D.wz
else w=j?D.b9n:D.VD
v=i?3.1:2.95
d.e=0
d.b=20
if(!h){d.eb(k.ae(0,D.fqB),new A.ad(1.5,v,1.3),w,0.25)
d.e=0.15
d.b=26
u=k.ae(0,D.fqy)
d.eb(u,D.fu9,g?D.b6F:D.K3,0.8)
d.ja(k.ae(0,D.ft3),D.fv4,D.Du)}d.e=0.3
d.b=27
u=k.ae(0,D.frA)
d.eb(u,new A.ad(1.3,i?2.85:2.7,0.16),w,0.3)
if(j){d.e=0.7
d.b=28
u=k.ae(0,D.fsI)
d.eb(u,D.frk,g?D.wz:E.VM,0.35)
u=k.ae(0,D.ftY)
d.eb(u,D.ftE,g?D.wz:D.abo,0.35)}else{d.e=0.6
u=i?D.aqd:D.d7h
t=u.length
s=f+0.47
r=f+0.46
q=f+0.5
p=0
for(;p<t;++p){o=u[p]
d.b=27
n=-0.2+(o+0.04)
d.ja(new A.ad(-0.28,n,s),D.fss,D.DC)
d.ja(new A.ad(0.28,n,s),D.frE,D.DC)
n=-0.2+(o-0.32)
d.AP(new A.ad(0,n,r),new A.ad(0,n,q),0.11,D.DC,10)}if(i){d.e=0.7
d.b=28
d.eb(k.ae(0,D.fsV),D.aPA,D.bct,0.3)
d.eb(k.ae(0,D.fuj),D.aPA,D.adK,0.3)}}if(h){d.e=0
return}m=i?0.95:0.85
l=i?-0.75:-0.55
u=new A.f4N(d,k)
if(!j){u.$6$taped(23,-1,m,D.abH,D.ac6,i)
u.$5(24,-1,l,D.abH,D.ac6)}u.$6$taped(21,1,m,D.V3,D.adi,i)
u.$5(22,1,l,D.V3,D.adi)
d.e=0.9
d.b=25
d.f_(k.ae(0,D.fs1),k.ae(0,D.fuD),0.18,D.beg,0.7,12)
d.ja(k.ae(0,D.frQ),D.fs3,B.e7)
d.eb(k.ae(0,D.fqF),D.fsX,D.b3D,0.6)
d.e=0},
h5Q(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e==="fan",j=A.bwY(e,f)
d.e=0
d.b=55
w=j-0.3
v=j+0.3
u=k?3.3:3.5
t=f.w?D.wz:D.b9R
d.f_(new A.ad(0,0,w),new A.ad(0,0,v),u,t,0.45,20)
d.b=54
if(k){u=j+4.2
d.f_(new A.ad(0,0,v),new A.ad(0,0,u),0.45,D.b6B,0.5,10)
v=j+7.4
d.f_(new A.ad(0,0,u),new A.ad(0,0,v),3.6,D.aaC,0.5,18)
d.f_(new A.ad(0,0,v),new A.ad(0,0,j+8.6),1.6,D.bdD,0.7,14)}else{d.d=0.92
v=f.w?D.wz:D.b7r
d.j9(new A.ad(0,0,j+1.2),3.6,v,6,14,0.7)
d.d=1}d.b=54
s=[D.ehM,D.e5c,D.eo3]
for(v=x.o,r=j-3.2,q=0;q<3;++q){u=s[q]
p=f.c===0?r:j
t=u.b.a
d.kg(C.a([new A.ad(t,-0.3,w),new A.ad(t,-0.3,p+0.4)],v),0.07,u.a,!1,0.3,6)}if(f.c===0)for(w=[D.eb9,D.ejf,D.eqF],v=f.b,q=0;q<3;++q){o=w[q]
u=o.a
n=A.bz5(e,u,f)
d.b=u
d.e=0.8
t=n.a+0
m=n.b+0
l=n.c
d.f_(new A.ad(t,m,l+-0.2),new A.ad(t,m,l+0.3),0.09,D.wF,0.6,6)
if(v.aj(0,u))d.a2c(new A.ad(t,m,l+-0.5),new A.ad(t,m,l+0.9),0.4,o.b,0.26,0.4,8)
d.e=0}},
h7S(d,e){var w
d.e=0.4
d.b=30
w=e?D.wz:D.b2T
d.eb(D.fsT,D.aPN,w,0.3)
d.eb(D.fsl,D.aPN,w,0.3)
d.eb(D.fq6,D.aPS,w,0.3)
d.eb(D.fql,D.fqL,w,0.3)
d.eb(D.fuA,D.aPS,w,0.3)
d.f_(D.frH,D.fsj,0.1,D.K3,0.8,10)
d.e=0},
hMt(d,e){var w,v
d.b=31
for(w=0;w<2;++w){v=D.cNW[w]
d.f_(new A.ad(v,0.52,0.2),new A.ad(v,0.52,1.9),0.04,D.K3,0.8,6)}d.eb(D.fpz,D.fu2,D.b7a,0.35)
d.b70(D.aPJ,0.2,e?B.V5:D.bav,0.9)
if(e){d.d=0.35
d.j9(D.aPJ,0.5,B.V5,4,8,0)
d.d=1}},
ma:function ma(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.e=g
_.f=h},
aa0:function aa0(d){var _=this
_.a=!0
_.b=d
_.c=0
_.w=_.r=_.f=_.e=_.d=!1},
zB:function zB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a37:function a37(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.d=f
_.e=g
_.f=h
_.r=i},
fjM:function fjM(){},
fjN:function fjN(){},
fjO:function fjO(){},
fjP:function fjP(){},
fjQ:function fjQ(){},
fiI:function fiI(d){this.a=d},
fG2:function fG2(){},
BB:function BB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiO:function fiO(d){this.a=d},
fiP:function fiP(d){this.a=d},
fiM:function fiM(d){this.a=d},
fiN:function fiN(d){this.a=d},
fiK:function fiK(){},
fiL:function fiL(){},
fgZ:function fgZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fh_:function fh_(d){this.a=d},
f3s:function f3s(d,e,f){this.a=d
this.b=e
this.c=f},
f4N:function f4N(d,e){this.a=d
this.b=e},
fId(){var w=x.S
return new A.bOk(C.et([72],w),C.aZ(w),C.aZ(w),C.aZ(w))},
hPx(d){var w
A:{if(81===d){w="outlet"
break A}if(82===d){w="switch"
break A}if(84===d){w="gfci"
break A}if(86===d||87===d){w="ptrap"
break A}if(85===d){w="faucet"
break A}w=null
break A}return w},
a0s(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=C.a([],x.B),a0=new A.ua(d)
a0.b=70
a0.lQ(D.ftk,D.fua,D.b9C,4)
a0.c=1
a0.b=91
w=new A.fh5(a0)
w.$3(D.fr3,D.fqJ,15)
w.$4$alongX(D.ftZ,D.fsA,11,!1)
w.$4$alongX(D.fq9,D.fqP,11,!1)
w.$4$alongX(D.ftR,D.frd,6,!1)
w.$4$alongX(D.fqs,D.fsB,6,!1)
for(v=0;v<=12;++v)a0.aAt(new A.ad(-12+v*2,8.4,0),D.fsY,D.Vo,!1,0.05)
a0.c=2
a0.b=92
u=new A.fh2(a0)
u.$2(D.c9p,D.rQ)
u.$2(D.cZw,D.nn)
u.$2(D.d2G,D.nn)
t=new A.fh1(a0)
t.$1(D.cIm)
t.$1(D.cNL)
a0.c=3
a0.b=93
s=new A.fh4(a0)
s.$1(D.cHn)
s.$2$col(D.cFT,D.wo)
s.$2$col(D.cF8,D.wo)
s.$1(D.cWI)
a0.c=4
a0.b=0
a0.d=0.22
a0.lQ(D.fqO,D.fs9,D.zG,4)
a0.lQ(D.fs7,D.aPK,D.zG,4)
a0.lQ(D.fr4,D.aPK,D.zG,4)
a0.lQ(D.frv,D.aPO,D.zG,3)
a0.lQ(D.fuS,D.aPO,D.zG,3)
a0.d=1
a0.c=5
a0.e=0.3
a0.b=0
a0.r4(D.ftQ,D.fqM,D.b7A,0.1,4)
a0.b=71
a0.eb(D.fto,D.fsZ,D.aaL,0.5)
a0.ja(D.fuF,D.fro,D.Du)
r=[72,73,74,75,76]
for(q=a1.d,p=a1.e,v=0;v<5;++v){o=B.o.F(v,2)
n=B.o.an(v,2)
m=r[v]
l=q.t(0,m)
k=p.t(0,m)
a0.b=m
m=9.55+o*0.5
j=5.7-n*0.5
a0.eb(new A.ad(m,j,-7.5),D.fqA,D.adR,0.3)
if(l)i=0
else i=k?-0.07:0.07
if(l)h=B.cb
else h=k?B.bo:B.bX
a0.eb(new A.ad(m+0,j+i,-7.42),D.frg,h,0.4)}a0.b=90
a0.eb(D.fsC,D.fqc,D.bfU,0.1)
a0.eb(D.fu_,D.fqY,D.VR,0.1)
a0.eb(D.fv5,D.aPZ,D.VR,0.1)
a0.eb(D.fqU,D.aPZ,D.VR,0.1)
g=new A.fh3(a0)
g.$3(81,D.fqv,a1.x?D.wz:D.VD)
a0.b=81
a0.ja(D.fsD,D.aPU,D.DC)
a0.ja(D.frO,D.aPU,D.DC)
g.$5$h$w(82,D.fuI,E.VM,0.65,0.4)
a0.b=82
a0.eb(D.ftD,D.fqb,D.abo,0.4)
f=!q.t(0,72)
a0.b=83
a0.f_(D.ftx,D.aPB,0.5,D.bdV,0.4,14)
a0.b70(D.fum,0.3,f?P.VF:D.b9l,0.7)
if(f){a0.b=0
a0.d=0.22
a0.j9(D.aPv,1.5,D.V0,4,10,0)
a0.d=1}a0.b=94
a0.eb(D.fug,D.aQ0,D.lV,0.1)
a0.eb(D.fsL,D.aQ0,D.lV,0.1)
a0.eb(D.fuG,D.fr6,D.lV,0.1)
a0.r4(D.fsh,D.fuo,D.K0,0.5,2)
a0.eb(D.ftm,D.fv1,D.JS,0.7)
a0.b=85
a0.kg(A.FX(D.cR3,0.2,6),0.055,D.nk,!1,0.9,8)
a0.b=84
a0.eb(D.fuv,D.ftL,D.VD,0.3)
a0.ja(D.frC,D.fuE,a1.y?D.abV:D.adK)
a0.b=86
a0.kg(A.FX(D.cIO,0.35,3),0.11,D.p7,!1,0.3,8)
a0.b=87
a0.f_(D.frX,D.ftq,0.19,a1.c?D.UP:D.bc7,0.3,8)
a0.b=88
a0.eb(D.fq3,D.fqD,D.JV,0.7)
a0.a2c(D.ftj,D.aPV,0.72,D.JV,0.55,0.7,16)
a0.f_(D.aPV,D.fsp,0.78,D.bdy,0.7,16)
a0.b=89
a0.f_(D.fu1,D.aPx,0.85,D.b3w,0.6,18)
a0.f_(D.aPx,D.fs8,0.5,D.b3x,0.5,12)
a0.ja(D.fsR,D.fuY,D.bc1)
a0.b=95
for(p=a1.f,m=a1.r,v=0;v<3;++v){e=D.cpn[v]
if(m.t(0,v)){j=e.a
i=e.b
a0.ja(new A.ad(j,i,-7.82),D.ftz,D.zG)
a0.ja(new A.ad(j,i,-7.79),D.fsc,D.b6k)}else if(p.t(0,v)){j=e.a
i=e.b
a0.ja(new A.ad(j,i,-7.82),D.fpJ,D.acR)
a0.ja(new A.ad(j,i,-7.8),D.fsK,D.bg7)}}if(a1.w){a0.b=96
a0.f_(D.fsd,D.frW,0.1,B.dm,0.7,8)}a0.e=0
a0.c=6
a0.b=0
a0.d=0.4
a0.bdP(D.aPr,D.aPT,D.a78,D.a76,D.aaR,D.fsx,!0)
a0.bdP(D.aPR,D.aPX,D.a76,D.a78,D.aaR,D.ftC,!0)
a0.beU(D.aPr,D.aPX,D.a76,D.ab4)
a0.beU(D.aPT,D.aPR,D.a78,D.ab4)
a0.d=1
p=q.t(0,72)?"This breaker has TRIPPED (it is in the middle, orange). The living room has no power. Tap it to flip it off and on again.":"This breaker is ON. The living room has power."
q=q.t(0,72)?"The light is off because the living room breaker has tripped.":"The ceiling light is on."
m=a1.b
j=m&&!a1.c?"Water is dripping from the slip nut here. Pick the wrench, then tap the nut to tighten it.":"The P-trap holds a water seal that blocks sewer gas. Tap Open lesson to build one."
m=m&&!a1.c?"This slip nut is loose and the trap is dripping. Pick the wrench and tap here to tighten it.":"The slip nut is tight."
return new A.Eo(d,C.E([70,D.dRy,91,D.dR_,92,D.dRh,93,D.dRp,71,D.dRC,72,new A.dM("Living room breaker",p,D.fuV,3.5),73,D.dR9,74,D.dRr,75,D.dQT,76,D.dRk,81,D.dRm,82,D.dQK,83,new A.dM("Ceiling light",q,D.aPB,7),84,D.dRs,85,D.dQU,86,new A.dM("P-trap under the sink",j,D.fti,4.5),87,new A.dM("Slip nut (leaking?)",m,D.aPD,3.5),88,D.dQH,89,D.dRq,90,D.dRu,94,D.dR8,95,D.dRw,96,D.dQM],x.S,x.q),D.Gh)},
h9P(d,e){var w,v,u,t,s,r,q,p=C.a([],x.B),o=new A.ua(p)
o.c=5
o.e=0.8
if(d.w)for(w=e*1.5,v=0;v<6;++v){u=B.k.F(w+v/6,1)
o.j9(new A.ad(3.4+Math.sin(v*2)*0.12,3.3-u*u*2.8,-7.7),0.05,B.JJ,3,6,0.9)}if(d.as){u=B.k.F(e*1.1,1)
o.j9(new A.ad(3,3.9-u*u*0.7,-6.95),0.05,D.UY,3,6,0.9)}if(d.Q)for(w=e*1.6,v=0;v<6;++v){u=B.k.F(w+v/6,1)
o.j9(new A.ad(8.2+Math.sin(v*1.7)*0.15,2.2-u*1.5,-7.2),0.05,D.UY,3,6,0.9)}if(d.at){o.d=0.55
o.eb(D.fqT,D.frz,D.bdL,0.8)
o.d=1}if(d.x)for(w=e*2,t=e*6,v=0;v<8;++v){u=B.k.F(w+v*0.13,1)
s=v*2.4+t
r=Math.cos(s)
s=Math.sin(s)
q=C.ar(D.VT,D.VY,1-u)
q.toString
o.j9(new A.ad(-3.2+r*u*0.7,1.3+s*u*0.7,-7.6+u*0.3),0.05,q,3,5,0)}if(d.z&&!d.d.t(0,72)){o.b=0
o.d=B.k.D((Math.sin(e*17)+Math.sin(e*29)+2)/4*0.5,0,0.6)
o.j9(D.aPv,1.5,D.V0,4,10,0)
o.d=1}if(d.b&&!d.c){for(w=e*1.3,v=0;v<5;++v){u=B.k.F(w+v*0.2,1)
o.j9(new A.ad(3.05,1.45-u*u*1.4,-6.95),0.05,D.Km,3,6,0.9)}o.d=0.5
o.eb(D.fqI,new A.ad(0.7+0.3*Math.sin(e),0.02,0.5),D.Km,0.9)
o.d=1}return p},
bOk:function bOk(d,e,f,g){var _=this
_.a=5
_.b=!0
_.c=!1
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=!1},
fh5:function fh5(d){this.a=d},
fh2:function fh2(d){this.a=d},
fh1:function fh1(d){this.a=d},
fh4:function fh4(d){this.a=d},
fh3:function fh3(d){this.a=d},
ru(d,e,f,g){var w
try{A.dD(d,"",e,0,f,g)}catch(w){}},
y0(){A.ru(880,80,0.25,"tri")
C.bN(M.aez,new A.fhZ(),x.H)},
a8Y(d,e,f,g,h,i,j,k,l,m,n,o,p){return new A.b4u(n,d,m,l,g,e,j,k,f,h,o,p,i,null)},
PY(d,e,f,g,h){var w=null,v=g?e.j(0.25):B.w.j(0.5),u=C.m(18),t=C.I(g?e:B.b7,B.r,1),s=x.p,r=C.a([],s)
B.d.v(r,C.a([C.V(f,g?e:B.ad,w,w,w,16),B.ea],s))
r.push(C.d(d,w,w,w,w,w,w,C.l(w,w,g?e:B.ad,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w))
return C.aE(w,C.p(w,C.A(r,B.m,w,B.e,B.Q,0,w,w),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.h2,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,B.aa)},
y_(d,e,f,g){var w=null,v=f==null,u=v?B.dt:g.j(0.9),t=C.m(14),s=C.V(e,v?B.bZ:B.w,w,w,w,18)
return C.D(C.aE(w,C.p(w,C.A(C.a([s,B.bp,new C.dl(1,B.ch,C.d(d,w,w,w,w,w,w,C.l(w,w,v?B.bZ:B.w,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),w)],x.p),B.m,w,B.b9,B.j,0,w,w),B.f,w,w,new C.o(u,w,w,t,w,w,B.n),w,w,w,w,B.uI,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,B.aa),1)},
fyb(d,e,f,g){return C.c_(D.uz,null,new A.fyd(e,g,f),d,!0,!0,!0,B.pQ,!1,!1,x.H)},
fhZ:function fhZ(){},
BM:function BM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Mm:function Mm(d){this.a=d},
c47:function c47(d){this.a=d},
c4a:function c4a(d){this.a=d},
c4b:function c4b(){},
c4c:function c4c(){},
c4d:function c4d(){},
c4e:function c4e(){},
c4f:function c4f(d){this.a=d},
c46:function c46(d,e){this.a=d
this.b=e},
c45:function c45(d){this.a=d},
c49:function c49(d,e){this.a=d
this.b=e},
c48:function c48(d){this.a=d},
c44:function c44(d,e,f){this.a=d
this.b=e
this.c=f},
brq:function brq(d,e){this.c=d
this.a=e},
eWt:function eWt(){},
eWu:function eWu(){},
b4u:function b4u(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
cof:function cof(d){this.a=d},
cog:function cog(d){this.a=d},
fyd:function fyd(d,e,f){this.a=d
this.b=e
this.c=f},
fyc:function fyc(){},
Dl:function Dl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bQp:function bQp(d){this.a=d},
aaX:function aaX(d,e){this.c=d
this.a=e},
axN:function axN(d){var _=this
_.d=$
_.e=d
_.r=_.f=$
_.w=""
_.x=0
_.y=null
_.z=!1
_.Q=0
_.c=_.a=_.as=null},
d0U:function d0U(d,e,f){this.a=d
this.b=e
this.c=f},
d0V:function d0V(d){this.a=d},
d0T:function d0T(d){this.a=d},
d0N:function d0N(d){this.a=d},
d0M:function d0M(d){this.a=d},
d0O:function d0O(d){this.a=d},
d0P:function d0P(d){this.a=d},
d0Q:function d0Q(d,e){this.a=d
this.b=e},
d0R:function d0R(d,e){this.a=d
this.b=e},
d0S:function d0S(d){this.a=d},
d0W:function d0W(d){this.a=d},
d13:function d13(){},
d1d:function d1d(d,e,f){this.a=d
this.b=e
this.c=f},
d14:function d14(d){this.a=d},
d12:function d12(d){this.a=d},
d15:function d15(d){this.a=d},
d11:function d11(d){this.a=d},
d16:function d16(d){this.a=d},
d17:function d17(d){this.a=d},
d18:function d18(d,e){this.a=d
this.b=e},
d10:function d10(d,e){this.a=d
this.b=e},
d19:function d19(d){this.a=d},
d1_:function d1_(d){this.a=d},
d1a:function d1a(d){this.a=d},
d0Z:function d0Z(d){this.a=d},
d1b:function d1b(d){this.a=d},
d0Y:function d0Y(d){this.a=d},
d1c:function d1c(d){this.a=d},
d0X:function d0X(d){this.a=d},
aDI:function aDI(d){this.a=d},
aDJ:function aDJ(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
eHy:function eHy(d,e,f){this.a=d
this.b=e
this.c=f},
eHz:function eHz(d){this.a=d},
eHx:function eHx(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHu:function eHu(d,e){this.a=d
this.b=e},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHD:function eHD(){},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHG:function eHG(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHA:function eHA(){},
ay1:function ay1(d){this.a=d},
ay2:function ay2(d){var _=this
_.d=d
_.f=_.e=$
_.r=""
_.w=0
_.x=null
_.y=!1
_.c=_.a=_.z=null},
d3O:function d3O(d,e,f){this.a=d
this.b=e
this.c=f},
d3P:function d3P(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3G:function d3G(d){this.a=d},
d3J:function d3J(d){this.a=d},
d3K:function d3K(d,e){this.a=d
this.b=e},
d3L:function d3L(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3M:function d3M(d,e){this.a=d
this.b=e},
d3H:function d3H(d){this.a=d},
d3T:function d3T(){},
d3Z:function d3Z(d,e){this.a=d
this.b=e},
d3U:function d3U(d){this.a=d},
d3V:function d3V(d){this.a=d},
d3S:function d3S(d){this.a=d},
d3X:function d3X(d,e){this.a=d
this.b=e},
d3R:function d3R(d,e){this.a=d
this.b=e},
d3W:function d3W(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
ayV:function ayV(d){this.a=d},
ayW:function ayW(d){var _=this
_.d=d
_.f=_.e=$
_.r=0
_.w=""
_.x=null
_.y=!1
_.c=_.a=_.z=null},
daS:function daS(d,e,f){this.a=d
this.b=e
this.c=f},
daT:function daT(d){this.a=d},
daR:function daR(d){this.a=d},
daM:function daM(d){this.a=d},
daO:function daO(d,e){this.a=d
this.b=e},
daP:function daP(d,e){this.a=d
this.b=e},
daQ:function daQ(d,e){this.a=d
this.b=e},
daN:function daN(d){this.a=d},
db0:function db0(d,e){this.a=d
this.b=e},
daW:function daW(d,e){this.a=d
this.b=e},
daY:function daY(d){this.a=d},
daX:function daX(d){this.a=d},
daZ:function daZ(d){this.a=d},
daV:function daV(d){this.a=d},
db_:function db_(d){this.a=d},
daU:function daU(d,e){this.a=d
this.b=e},
cf2(){var w=x.N
return new A.cf1(C.aZ(w),C.E(["n1",!1,"n2",!1],w,x.D),C.U(x.S,w))},
i_8(d,e,f){var w,v
if(!f.c.t(0,e)){w=f.d
return e==="hot"?"The red (hot) hose goes on the LEFT side only. "+w:"The blue (cold) hose goes on the RIGHT side only. "+w}w=d.e
v=f.a
if(w.h(0,v)!=null)return"That connection already has a hose."
w.n(0,v,e)
return null},
fxz(){var w,v,u=C.a([D.aPp,D.frT],x.o)
for(w=1;w<=12;++w){v=3.141592653589793+3.141592653589793*w/12
u.push(new A.ad(3+3*Math.cos(v),0.2+3*Math.sin(v),0))}B.d.v(u,A.FX(D.cSg,1,6))
return u},
aMY(d){var w,v,u,t,s="trap",r=C.a([],x.B),q=new A.ua(r)
q.b=49
q.r4(D.fpE,D.fq0,D.lV,0.1,2)
q.r4(D.fuQ,D.fpG,D.lV,0.1,2)
q.b=47
q.lQ(D.fsw,D.fq1,D.uu,3)
q.lQ(D.fpS,D.fpH,D.uu,3)
q.b=46
q.r4(D.fqd,D.ft0,D.K0,0.5,3)
q.b8W(D.ftP,D.fpi,6.5,D.JS,!0,0.7,20)
q.f_(D.ftf,D.frK,1.5,D.nk,0.85,14)
q.b=48
q.aiY(D.a79,D.fr2,0.92,D.p7,!1,!0,0.3,14)
q.cOK(D.a79,D.fur,1,0.72,D.p7,0.3)
w=new A.fhG(d,q)
w.$5(41,D.a0L,D.nk,0.85,"tail")
w.$5(42,A.fxz(),D.p7,0.3,s)
w.$5(43,D.a1B,D.p7,0.3,"arm")
w=new A.fhF(d,q)
v=d.a
w.$6(44,"n1",D.a75,D.CF,D.frb,v.t(0,"tail")&&v.t(0,s))
w.$6(45,"n2",D.a77,D.SW,D.ftK,v.t(0,s)&&v.t(0,"arm"))
if(v.t(0,s)){q.b=0
q.d=0.55
q.e=0.4
u=A.fxz()
w=C.T(u).k("a1<1>")
t=C.B(new C.a1(u,new A.fhE(),w),w.k("G.E"))
if(t.length>1)q.aFU(t,0.4092,D.bfV,!1,!0,0.6,8)
q.d=1
q.e=0}return new A.Eo(r,C.E([41,D.dQW,42,D.dQX,43,D.dRo,44,D.dRc,45,D.dRz,46,D.dR1,47,D.dR6,48,D.dQF,49,D.dQZ],x.S,x.q),D.Gh)},
hY6(d,e){var w,v,u,t,s,r,q,p=C.a([],x.B),o=new A.ua(p),n=d.d
if(n.length!==0){w=n==="n1"?D.fuZ:D.fu7
for(n=e*1.4,v=w.a+0,u=w.b,t=w.c+0,s=0;s<5;++s){r=B.k.F(n+s*0.2,1)
o.j9(new A.ad(v,u+(-r*6*r-r*1.5),t),0.22*(1-r*0.3),D.Km,3,6,0.9)}}else if(d.c){n=x.cv
v=C.B(D.a0L,n)
u=A.fxz()
B.d.v(v,C.d9(u,1,null,C.T(u).c))
B.d.v(v,C.d9(D.a1B,1,null,n))
for(n=e*0.45,s=0;s<18;++s){r=B.k.F(n+s/18,1)
q=B.o.D(B.k.bw(r*(v.length-1)),0,v.length-2)
u=v.length
o.j9(A.zv(v[q],v[q+1],r*(u-1)-q),0.38,D.bfo,3,6,0.9)}for(n=e*2.2,s=0;s<6;++s)o.j9(new A.ad(0,14-B.k.F(n+s/6,1)*5.4,0),0.3,D.UY,3,6,0.9)}return p},
aeZ(d){switch(d){case 61:return D.fpD
case 62:return D.fu5
case 63:return D.fs4
default:return D.frZ}},
fPD(d){var w=d==="hot",v=A.aeZ(w?61:62),u=A.aeZ(w?63:64),t=w?-1:1
return A.agb(C.a([v,v.ae(0,new A.ad(t*0.6,2.2,1.2)),A.zv(v,u,0.5).ae(0,new A.ad(t*1.4,0,2.6)),u.ae(0,new A.ad(-t*0.2,-2,1)),u],x.o),6)},
aeN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.B),e=new A.ua(f)
e.b=67
e.lQ(D.fpC,D.fpV,D.uu,3)
e.b=66
e.r4(D.frS,D.fuq,D.K0,0.5,3)
e.AP(D.fty,D.fsG,5.5,D.V9,16)
e.b=65
e.f_(D.fuh,D.aPQ,3.4,D.nk,0.9,20)
e.kg(A.FX(D.cXf,1.4,6),0.5,D.nk,!0,0.9,12)
for(w=0;w<2;++w){v=D.cSX[w]
u=v*1.2
e.f_(new A.ad(u,15.5,-3.6),new A.ad(u,17.7,-3.6),0.38,D.nk,0.9,10)
t=v<0?D.rQ:D.nn
e.f_(new A.ad(u,17.7,-3.6),new A.ad(u,18.6,-3.6),0.6,t,0.6,12)}for(u=[D.eaq,D.e6m],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.f_(new A.ad(v,15.3,-3.6),new A.ad(v,11.4,-3.6),0.45,D.nk,0.9,10)
e.f_(new A.ad(v,11.4,-3.6),new A.ad(v,10.7,-3.6),0.3,D.bbM,0.6,8)
e.yF(new A.ad(v,11.3,-3.6),new A.ad(v,11.9,-3.6),0.78,0.48,D.bdw,0.7,8)}for(u=[D.erh,D.et_],w=0;w<2;++w){t=u[w]
v=t.b
e.b=t.a
e.f_(new A.ad(v,-1.5,-6),new A.ad(v,-1.5,-3.6),0.4,D.UE,0.7,12)
e.f_(new A.ad(v,-1.5,-4.4),new A.ad(v,0.7,-4.4),0.78,D.rH,0.8,12)
e.f_(new A.ad(v,0.7,-4.4),new A.ad(v,1.5,-3.6),0.38,D.rH,0.8,10)
e.f_(new A.ad(v,-0.2,-4.4),new A.ad(v,-0.2,-3.1),0.2,D.aaw,0.7,8)
e.f_(new A.ad(v,-0.2,-3.1),new A.ad(v,-0.2,-2.8),0.95,t.c,0.5,12)
e.yF(new A.ad(v,1.2,-3.6),new A.ad(v,1.9,-3.6),0.78,0.4,D.rH,0.8,8)}for(u=x.o,w=0;w<2;++w){s=D.cZA[w]
t=s==="hot"
r=t?D.cqi:D.cqv
q=C.T(r).k("a1<1>")
p=C.B(new C.a1(r,new A.fh0(d,s),q),q.k("G.E"))
e.b=t?68:69
o=t?D.rQ:D.nn
t=p.length
if(t===2){n=A.fPD(s)
e.kg(n,0.34,D.Ke,!1,0.7,8)
m=n.length/2|0
e.kg(C.a([n[m-1],n[m],n[m+1]],u),0.4,o,!1,0.4,8)
for(t=r.length,l=0;l<t;++l){k=A.aeZ(r[l])
q=k.a+0
j=k.b
i=k.c+0
e.yF(new A.ad(q,j+-0.2,i),new A.ad(q,j+0.6,i),0.62,0.3,D.rH,0.8,8)}}else if(t===1){k=A.aeZ(B.d.gK(p))
h=B.d.gK(p)===B.d.gK(r)?1:-1
t=k.a+0
q=k.b
j=k.c
e.kg(C.a([k,new A.ad(t,q+h*1.4,j+1),new A.ad(t,q+h*3,j+2.4)],u),0.34,D.Ke,!1,0.7,8)
j+=0
e.yF(new A.ad(t,q+-0.2,j),new A.ad(t,q+0.6,j),0.62,0.3,D.rH,0.8,8)}}if(d.r){e.b=0
e.d=0.5
for(u=d.e,w=0;w<4;++w){g=D.a1w[w]
t=g.a
if(u.h(0,t)!=null)continue
t=A.aeZ(t)
q=g.c.t(0,"hot")?D.rQ:D.nn
e.j9(new A.ad(t.a+0,t.b+0,t.c+0.9),0.65,q,4,8,0.1)}e.d=1}return new A.Eo(f,C.E([61,D.dQO,62,D.dQQ,63,D.dQJ,64,D.dQR,65,D.dR7,66,D.dR3,67,D.dQG,68,D.dRD,69,D.dRa],x.S,x.q),D.Gh)},
hP5(d,e){var w,v,u,t,s,r,q,p,o,n=C.a([],x.B),m=new A.ua(n)
if(!d.f)return n
w=d.e
v=w.h(0,61)==="hot"&&w.h(0,63)==="hot"
u=w.h(0,62)==="cold"&&w.h(0,64)==="cold"
t=new A.fj5(e,m)
if(v){s=A.fPD("hot")
for(r=e*0.5,q=0;q<10;++q){p=B.k.F(r+q/10,1)
o=B.o.D(B.k.bw(p*(s.length-1)),0,s.length-2)
m.j9(A.zv(s[o],s[o+1],p*(s.length-1)-o),0.2,B.JJ,3,6,0.9)}}else if(w.h(0,61)==null)t.$2(61,B.JJ)
if(u){s=A.fPD("cold")
for(w=e*0.5,q=0;q<10;++q){p=B.k.F(w+q/10,1)
o=B.o.D(B.k.bw(p*(s.length-1)),0,s.length-2)
m.j9(A.zv(s[o],s[o+1],p*(s.length-1)-o),0.2,D.Vs,3,6,0.9)}}else if(w.h(0,62)==null)t.$2(62,D.Vs)
if(v&&u)for(w=e*2,q=0;q<8;++q){p=B.k.F(w+q/8,1)
r=C.ar(D.bfs,D.Vs,0.5)
r.toString
m.j9(new A.ad(0,21-p*6.5,1.6),0.26,r,3,6,0.9)}return n},
fPw(d){return B.d.d8(D.a1w,new A.fj4(d))},
cf1:function cf1(d,e,f){var _=this
_.a=d
_.b=e
_.c=!1
_.d=""
_.e=f
_.r=_.f=!1},
Ea:function Ea(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhG:function fhG(d,e){this.a=d
this.b=e},
fhF:function fhF(d,e){this.a=d
this.b=e},
fhE:function fhE(){},
fh0:function fh0(d,e){this.a=d
this.b=e},
fj5:function fj5(d,e){this.a=d
this.b=e},
fj4:function fj4(d){this.a=d},
h0R(d,e){var w,v=x.N
v=new A.ceT(e,d,C.aZ(v),C.U(v,x.S),C.aZ(v))
w=new C.eT()
w.dI(e)
v.c=D.cMV[w.aD(2)]
w=new C.eT()
w.dI(e+7)
v.d=w.hc()
return v},
h9a(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=C.a([],x.B),b5=new A.ua(b4),b6=C.U(x.S,x.q),b7=C.a([],x.Z),b8=b9.c
b8===$&&C.c()
w=b8.a==="bathroom"
v=w?28:0
b5.b=9199
b5.lQ(D.ftU,D.fuP,D.b5Y,4)
b5.lQ(D.ft_,D.fu4,D.b6P,4)
b5.lQ(new A.ad(v+19.8+0.6,24,16),D.frJ,D.uu,2)
b6.n(0,9199,D.dQY)
b5.b=9198
b5.eb(new A.ad(v,0.6,10),D.fuf,D.lV,0.1)
b5.eb(new A.ad(v,29.4,18.6),D.fry,D.lV,0.1)
b5.eb(new A.ad(v-19.4,13.6,10.5),D.fuH,D.lV,0.1)
b5.r4(new A.ad(v,33,9),D.fso,D.K0,0.5,2)
b5.AP(new A.ad(v,34.2,8),new A.ad(v,34.4,8),7,D.b3Z,18)
b5.aiY(new A.ad(v+15,23.6,8),new A.ad(v+19.4,23.6,8),0.92,D.p7,!1,!0,0.3,12)
b6.n(0,9198,D.dRl)
u=b9.d
u===$&&C.c()
t=-62*(u?-1:1)
b5.b=9400
b5.f_(new A.ad(t,18,0),new A.ad(t,18,6),1.5,D.rH,0.8,12)
u=b9.r?D.nn:B.bo
b5.f_(new A.ad(t-1,18,6),new A.ad(t+1,18,6.5),4,u,0.5,14)
b5.f_(new A.ad(t,16,0),new A.ad(t,20,0),1,D.UE,0.7,10)
u=b9.r?"The water is ON. Turn it OFF with your hand before you cut into any pipe, and turn it ON to test your work.":"The water is OFF. Turn it ON to test your work."
b6.n(0,9400,new A.dM("Main water valve",u,new A.ad(t,18,4),22))
u=b9.r
s=u?"MAIN WATER: ON":"MAIN WATER: OFF"
u=u?B.dW:B.bo
b7.push(new A.Dk(new A.ad(t,24,6),s,u))
r=new A.fhD(b5)
u=v-8
r.$1(u)
s=v+8
r.$1(s)
if(w)r.$1(-40)
q=new A.ad(v,21,8)
p=new A.fhB(q)
o=new A.fhv(b5,b9)
n=new A.fhw(b5,b9)
m=new A.fhC(b9,b6,c1,c0,b7)
l=b8.c
for(b8=l.length,k=b9.x,j=b9.e,i=b9.f,h=x.o,g=0;g<b8;++g){f=l[g]
e=f.a
d=j.t(0,e)
if(d){a0=b9.wD(0,e)
a1=i.h(0,e)
if(a1==null)a1=0
a2=a0.r-a1>0}else a2=!1
a3=B.d.cG(l,f)
a4=9100+a3
k.t(0,e)
switch(e){case"flange":a5=new A.ad(-30,0.3,14)
if(d){b5.b=a4
b5.f_(a5,new A.ad(-30,0.8999999999999999,14),5.5,D.p7,0.4,18)
b5.yF(new A.ad(-30,0.8,14),new A.ad(-30,1.2,14),5.5,3.2,D.rH,0.8,18)}else n.$3(e,new A.ad(-30,0.8,14),D.fpw)
m.$3(f,a5,"Flange spot")
break
case"wax":a5=new A.ad(-30,1.2,14)
if(d){b5.b=a4
b5.yF(a5,new A.ad(-30,2.3,14),4.2,2.4,D.bge,0.2,18)}else if(j.t(0,"flange"))n.$3(e,new A.ad(-30,1.7,14),D.ft8)
m.$3(f,a5,"Wax ring spot")
break
case"toilet":if(d){b5.b=a4
b5.a2c(new A.ad(-30,0.5,14),new A.ad(-30,16,14),8.5,D.JV,6,0.8,20)
b5.f_(new A.ad(-30,16,14),new A.ad(-30,17,14),9.5,D.ado,0.8,20)
b5.eb(new A.ad(-30,22,4.5),D.aPo,D.JV,0.8)
b5.eb(new A.ad(-30,29.2,4.5),D.fqR,D.ado,0.8)}else if(j.t(0,"wax")){b5.b=a4
b5.d=0.32
b5.AP(new A.ad(-30,0.5,14),new A.ad(-30,17,14),8.5,B.b4,16)
b5.ja(new A.ad(-30,22,4.5),D.aPo,B.b4)
b5.d=1}m.$3(f,new A.ad(-30,12,12),"Toilet spot")
break
case"bolts":if(d){for(e=9200+a3*2,a6=0;a6<2;++a6){a7=D.av7[a6]
b5.b=e+(a7<0?0:1)
a0=-30+a7
b5.f_(new A.ad(a0,0.5,17),new A.ad(a0,3.6,17),0.45,D.JS,0.8,8)
a1=a2?B.cy:D.JS
b5.f_(new A.ad(a0,3.4,17),new A.ad(a0,4.6,17),1.2,a1,0.8,6)}e=a2?"The nuts are loose. Tighten them with the wrench, a little at a time so the porcelain does not crack.":"The toilet is bolted down."
b6.n(0,a4,new A.dM(f.c,e,new A.ad(-30,3,17),20))}else if(j.t(0,"toilet"))for(a6=0;a6<2;++a6){a7=D.av7[a6]
b5.b=a4
b5.d=0.4
e=-30+a7
b5.AP(new A.ad(e,0.5,17),new A.ad(e,4.6,17),1.2,B.b4,8)
b5.d=1}m.$3(f,new A.ad(-30,3,17),"Bolts")
break
case"tvalve":A.fP5(b5,a4,new A.ad(-40,8,1.6),d,D.nn,new A.fhs(n,f,-30))
m.$3(f,new A.ad(-40,8,2),"Valve")
break
case"those":if(d){b5.b=a4
b5.kg(A.agb(C.a([new A.ad(-40,10,1.6),new A.ad(-42,14,3.5),new A.ad(-36,17,3.6),new A.ad(-32,21,2.5)],h),6),0.55,D.Ke,!1,0.7,8)
b5.kg(C.a([new A.ad(-36.8,15.5,3.6),new A.ad(-35,16.4,3.6)],h),0.62,D.nn,!1,0.4,8)
if(a2)b5.AP(new A.ad(-40,10,1.6),new A.ad(-40,11.2,1.6),0.9,B.cy,8)}else if(j.t(0,"tvalve")&&j.t(0,"toilet"))o.$3$r(e,A.agb(C.a([new A.ad(-40,10,1.6),new A.ad(-42,14,3.5),new A.ad(-36,17,3.6),new A.ad(-32,21,2.5)],h),6),0.9)
m.$3(f,new A.ad(-36,15,3),"Toilet hose")
break
case"faucet":if(d){b5.b=a4
b5.f_(new A.ad(v,34.2,8),new A.ad(v,34.6,8),3.6,D.nk,0.9,20)
b5.kg(A.FX(C.a([new A.ad(v,34.6,8),new A.ad(v,40,8),new A.ad(v,43,10),new A.ad(v,43,14),new A.ad(v,41.2,14.6)],h),1.4,6),0.5,D.nk,!0,0.9,10)
for(a6=0;a6<2;++a6){a7=D.av5[a6]
e=v+a7
b5.f_(new A.ad(e,34.6,8),new A.ad(e,36.6,8),0.5,D.nk,0.9,8)
a0=a7<0?D.rQ:D.nn
b5.f_(new A.ad(e,36.6,8),new A.ad(e,37.6,8),0.8,a0,0.6,10)}for(a6=0;a6<2;++a6){e=v+D.d17[a6]
b5.f_(new A.ad(e,34,8),new A.ad(e,28.4,8),0.45,D.nk,0.9,8)}}else n.$3(e,new A.ad(v,38,9),D.fpv)
m.$3(f,new A.ad(v,38,8),"Faucet spot")
break
case"vhot":A.fP5(b5,a4,new A.ad(u,8,1.6),d,D.rQ,new A.fht(n,f,v))
m.$3(f,new A.ad(u,8,2),"Hot valve")
break
case"vcold":A.fP5(b5,a4,new A.ad(s,8,1.6),d,D.nn,new A.fhu(n,f,v))
m.$3(f,new A.ad(s,8,2),"Cold valve")
break
case"hhot":case"hcold":a8=e==="hhot"
a9=a8?-1:1
a0=v+a9*3
b0=A.agb(C.a([new A.ad(v+a9*8,10.5,1.8),new A.ad(v+a9*9,16,3.5),new A.ad(v+a9*6,22,4.2),new A.ad(a0,27.5,6),new A.ad(a0,28.6,8)],h),6)
b1=j.t(0,a8?"vhot":"vcold")&&j.t(0,"faucet")
if(d){b5.b=a4
b5.kg(b0,0.5,D.Ke,!1,0.7,8)
b2=b0.length/2|0
e=C.a([b0[b2-1],b0[b2],b0[b2+1]],h)
b5.kg(e,0.58,a8?D.rQ:D.nn,!1,0.4,8)
if(a2){e=B.d.gK(b0)
a0=B.d.gK(b0)
b5.AP(e,new A.ad(a0.a+0,a0.b+1.4,a0.c+0),0.9,B.cy,8)
a0=B.d.gam(b0)
b5.AP(new A.ad(a0.a,a0.b-1.4,a0.c),B.d.gam(b0),0.9,B.cy,8)}}else if(b1)o.$3$r(e,b0,0.9)
e=b0[b0.length/2|0]
m.$3(f,e,a8?"Hot hose":"Cold hose")
break
case"tail":case"trap":case"arm":a0=e==="tail"
if(a0)a1=D.a0L
else a1=e==="trap"?A.fxz():D.a1B
b3=p.$1(a1)
b1=B.d.d8(f.d,j.gkn(j))
if(d){b5.b=a4
a1=a0?D.nk:D.p7
b5.amf(b3,0.66,a1,!1,!0,!0,a0?0.85:0.3,12)}else if(b1)o.$3$r(e,b3,0.78)
a1=J.a7(b3)
a1=a1.h(b3,a1.gM(b3)/2|0)
if(a0)e="Tailpiece"
else e=e==="trap"?"P-trap":"Trap arm"
m.$3(f,a1,e)
break}}b8=new A.fhz(l,b9,b5,b6)
b8.$4("trap",q.ae(0,D.a75),D.CF,0)
b8.$4("arm",q.ae(0,D.a77),D.SW,1)
return new A.Eo(b4,b6,b7)},
fP5(d,e,f,g,h,i){if(!g){i.$0()
return}d.b=e
d.f_(f.ae(0,D.ft9),f.ae(0,D.aPP),0.9,D.rH,0.8,12)
d.f_(f.ae(0,D.aPP),f.ae(0,D.frt),0.45,D.rH,0.8,10)
d.f_(f.ae(0,D.fuc),f.ae(0,D.aQ1),0.3,D.aaw,0.7,8)
d.f_(f.ae(0,D.aQ1),f.ae(0,D.fuw),1.2,h,0.5,12)},
hY0(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=C.a([],x.B),e=new A.ua(f),d=a0.x
if(d.a===0)return f
w=a0.c
w===$&&C.c()
v=new A.fxo(w.a==="bathroom"?28:0,-30)
for(d=C.ea(d,d.r,C.a2(d).c),u=d.$ti.c,t=a0.e;d.C();){s=d.d
if(s==null)s=u.a(s)
r=v.$1(s)
q=B.d.iK(w.c,new A.fxn(s)).b==="valve"||!t.t(0,s)
s=r.a
p=r.b
o=r.c
n=0
for(;;){if(!(n<(q?10:5)))break
m=q?1.8:1.2
l=q?10:5
k=B.k.F(a1*m+n/l,1)
l=Math.sin(n*2.1)
m=q?3:0.6
j=q?4:-0.5
i=q?14:8
h=q?6:0.8
g=q?0.5:0.35
e.j9(new A.ad(s+l*k*m,p+(k*j-k*k*i),o+(1.5+k*h)),g,D.Km,3,6,0.9);++n}}return f},
n5:function n5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aru:function aru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceT:function ceT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=f
_.f=g
_.r=!0
_.w=0
_.x=h
_.y=!1},
ceX:function ceX(d){this.a=d},
ceU:function ceU(d){this.a=d},
ceY:function ceY(d){this.a=d},
ceZ:function ceZ(d){this.a=d},
cf_:function cf_(){},
cf0:function cf0(){},
ceV:function ceV(d){this.a=d},
ceW:function ceW(d){this.a=d},
fhD:function fhD(d){this.a=d},
fhB:function fhB(d){this.a=d},
fhv:function fhv(d,e){this.a=d
this.b=e},
fhy:function fhy(d){this.a=d},
fhw:function fhw(d,e){this.a=d
this.b=e},
fhx:function fhx(d){this.a=d},
fhC:function fhC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhs:function fhs(d,e,f){this.a=d
this.b=e
this.c=f},
fht:function fht(d,e,f){this.a=d
this.b=e
this.c=f},
fhu:function fhu(d,e,f){this.a=d
this.b=e
this.c=f},
fhz:function fhz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhA:function fhA(d){this.a=d},
fxo:function fxo(d,e){this.a=d
this.b=e},
fxn:function fxn(d){this.a=d},
MV:function MV(d,e){this.d=d
this.a=e},
aCq:function aCq(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=""
_.y=0
_.z=null
_.as=_.Q=!1
_.c=_.a=_.at=null},
ebG:function ebG(d,e,f){this.a=d
this.b=e
this.c=f},
ebH:function ebH(d){this.a=d},
ebF:function ebF(d){this.a=d},
ebw:function ebw(d){this.a=d},
ebC:function ebC(d,e){this.a=d
this.b=e},
ebD:function ebD(d,e){this.a=d
this.b=e},
ebE:function ebE(d){this.a=d},
ebv:function ebv(d){this.a=d},
ebt:function ebt(d){this.a=d},
ebu:function ebu(d,e){this.a=d
this.b=e},
ebB:function ebB(d){this.a=d},
ebs:function ebs(d,e,f){this.a=d
this.b=e
this.c=f},
ebr:function ebr(d,e,f){this.a=d
this.b=e
this.c=f},
ebI:function ebI(d){this.a=d},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebK:function ebK(){},
ebJ:function ebJ(d){this.a=d},
ebA:function ebA(d){this.a=d},
eby:function eby(d,e){this.a=d
this.b=e},
ebx:function ebx(d,e){this.a=d
this.b=e},
ebz:function ebz(d,e){this.a=d
this.b=e},
lJ(d){return B.d.iK(D.vh,new A.fFE(d))},
h1p(d,e){var w=x.S,v=x.N
w=new A.b2Z(e,d,C.U(w,v),C.aZ(w),C.aZ(w),C.U(w,x.cH),C.a([new A.Wl(),new A.Wl()],x.gD),C.U(w,x.eT),C.aZ(w),C.U(w,v),C.aZ(w),C.a([],x.s))
w.cdC()
return w},
hxm(d){var w
A:{if("tv"===d){w="The TV"
break A}if("lamp"===d){w="The lamp"
break A}if("toaster"===d){w="The toaster"
break A}w="The hair dryer"
break A}return w},
yj:function yj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fFE:function fFE(d){this.a=d},
pB:function pB(d,e,f){this.a=d
this.b=e
this.c=f},
Wl:function Wl(){var _=this
_.a=!1
_.b=0
_.c=!0
_.d=!1},
b3N:function b3N(d,e){var _=this
_.a=!1
_.b=d
_.c=e
_.e=!1},
aRJ:function aRJ(d,e){this.a=d
this.b=e
this.c=!1},
eM:function eM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2Z:function b2Z(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.d=_.c=$
_.e=3
_.r=_.f=0
_.w=!1
_.x=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.ay=_.ax=!1
_.ch=l
_.CW=m
_.cx=n
_.cy=o},
cjV:function cjV(d){this.a=d},
cjW:function cjW(d){this.a=d},
cjX:function cjX(d,e){this.a=d
this.b=e},
cjY:function cjY(d,e){this.a=d
this.b=e},
ck_:function ck_(d){this.a=d},
cjZ:function cjZ(d,e){this.a=d
this.b=e},
cjO:function cjO(d){this.a=d},
cjM:function cjM(){},
cjN:function cjN(d){this.a=d},
cjT:function cjT(){},
cjU:function cjU(){},
cjP:function cjP(){},
cjQ:function cjQ(d){this.a=d},
cjR:function cjR(d){this.a=d},
ck0:function ck0(d){this.a=d},
cjS:function cjS(d){this.a=d},
lY:function lY(d,e,f){this.a=d
this.b=e
this.c=f},
UL:function UL(d,e){this.d=d
this.a=e},
aCx:function aCx(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x=f
_.y=0
_.z=""
_.Q=-1
_.as=0
_.at=""
_.ax=null
_.cx=_.CW=_.ch=_.ay=!1
_.c=_.a=_.cy=null},
eg_:function eg_(d,e,f){this.a=d
this.b=e
this.c=f},
eg0:function eg0(d){this.a=d},
efZ:function efZ(d){this.a=d},
eff:function eff(d){this.a=d},
efg:function efg(d){this.a=d},
efe:function efe(d){this.a=d},
efh:function efh(d){this.a=d},
efi:function efi(d){this.a=d},
efq:function efq(d){this.a=d},
efj:function efj(d){this.a=d},
efI:function efI(d,e){this.a=d
this.b=e},
efr:function efr(d){this.a=d},
efX:function efX(d){this.a=d},
efY:function efY(d,e){this.a=d
this.b=e},
efW:function efW(d,e){this.a=d
this.b=e},
efU:function efU(d){this.a=d},
efV:function efV(d,e){this.a=d
this.b=e},
efQ:function efQ(d){this.a=d},
efR:function efR(d,e,f){this.a=d
this.b=e
this.c=f},
efS:function efS(d){this.a=d},
efT:function efT(d,e,f){this.a=d
this.b=e
this.c=f},
efp:function efp(d){this.a=d},
efn:function efn(d){this.a=d},
efo:function efo(d,e){this.a=d
this.b=e},
efm:function efm(d){this.a=d},
efk:function efk(d){this.a=d},
efl:function efl(d,e){this.a=d
this.b=e},
efs:function efs(d,e){this.a=d
this.b=e},
efG:function efG(){},
efH:function efH(){},
eft:function eft(d){this.a=d},
efu:function efu(d){this.a=d},
efv:function efv(d){this.a=d},
efy:function efy(){},
efz:function efz(){},
efA:function efA(){},
efB:function efB(){},
efC:function efC(){},
efD:function efD(d){this.a=d},
efE:function efE(){},
efF:function efF(d){this.a=d},
efw:function efw(d){this.a=d},
efx:function efx(){},
egc:function egc(d,e){this.a=d
this.b=e},
ege:function ege(d){this.a=d},
eg4:function eg4(d){this.a=d},
egd:function egd(d){this.a=d},
eg7:function eg7(d){this.a=d},
eg8:function eg8(d,e){this.a=d
this.b=e},
eg6:function eg6(d,e){this.a=d
this.b=e},
eg9:function eg9(d,e){this.a=d
this.b=e},
eg5:function eg5(d,e){this.a=d
this.b=e},
egf:function egf(d,e){this.a=d
this.b=e},
eg3:function eg3(d,e){this.a=d
this.b=e},
egg:function egg(d,e){this.a=d
this.b=e},
eg2:function eg2(d,e){this.a=d
this.b=e},
egh:function egh(d){this.a=d},
egi:function egi(d,e,f){this.a=d
this.b=e
this.c=f},
eg1:function eg1(d,e,f){this.a=d
this.b=e
this.c=f},
egj:function egj(d){this.a=d},
egk:function egk(d){this.a=d},
ega:function ega(d){this.a=d},
egb:function egb(d){this.a=d},
efP:function efP(d){this.a=d},
efO:function efO(d){this.a=d},
efL:function efL(d,e){this.a=d
this.b=e},
efJ:function efJ(){},
efK:function efK(){},
efM:function efM(d,e){this.a=d
this.b=e},
efN:function efN(d,e){this.a=d
this.b=e},
a1o(d,e){var w=d.d,v=e.a,u=e.c,t=e.b,s=w.a,r=w.b
w=w.c
return d.c?new A.ad(s+v,r-u,w+t):new A.ad(s+v,r+t,w+u)},
fOo(d,e,f){var w,v,u,t,s,r=d.a,q=e.d,p=e.c?A.hdU(r,1.5707963267948966,q):A.hdU(r,0,q)
r=C.a([],x.B)
for(q=p.length,w=0;w<p.length;p.length===q||(0,C.K)(p),++w){v=p[w]
u=v.d
u=u===0?0:f.$1(u)
r.push(new A.t8(v.a,v.b,v.c,u,v.e,v.f,v.r,v.w,v.x))}q=C.U(x.S,x.q)
for(u=d.b,u=u.gdK(u),u=u.gah(u);u.C();){t=u.gU(u)
s=f.$1(t.a)
t=t.b
q.n(0,s,new A.dM(t.a,t.b,A.a1o(e,t.c),t.d))}return new C.z(r,q)},
hJ1(a3,a4,a5,a6,a7,a8,a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=x.i,a2=C.et([a4,a5],a1)
for(w=b1.length,v=0;v<b1.length;b1.length===w||(0,C.K)(b1),++v){u=b1[v].a
a2.J(0,B.k.D(u[0],a4,a5))
a2.J(0,B.k.D(u[1],a4,a5))}t=C.B(a2,a2.$ti.k("cl.E"))
B.d.fe(t)
for(w=C.T(b1).k("a1<1>"),u=w.k("G.E"),s=0;r=s+1,r<t.length;s=r){q=t[s]
p=t[r]
o=p-q
if(o<0.01)continue
n=(q+p)/2
m=C.B(new C.a1(b1,new A.fbs(n),w),u)
l=C.et([a6,a7],a1)
for(k=m.length,v=0;v<m.length;m.length===k||(0,C.K)(m),++v){j=m[v].a
l.J(0,B.k.D(j[2],a6,a7))
l.J(0,B.k.D(j[3],a6,a7))}i=C.B(l,l.$ti.k("cl.E"))
B.d.fe(i)
for(k=!(o>30),h=0;g=h+1,g<i.length;h=g){f=i[h]
e=i[g]
j=e-f
if(j<0.01)continue
d=(f+e)/2
if(B.d.b8(m,new A.fbt(d)))continue
a0=!k||j>60?2:1
a3.lQ(new A.ad(n,d,a8),new A.ad(o,j,a9),b0,a0)}}},
FE(c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=x.B,c0=C.a([],b9),c1=new A.ua(c0),c2=x.Z,c3=C.a([],c2),c4=x.S,c5=C.U(c4,x.q)
c1.b=8001
c1.r4(D.fqw,D.frV,D.adP,0.15,4)
c1.lQ(D.fqq,D.fqC,D.b3O,3)
c1.eb(D.ftV,D.fuB,D.bfR,0.5)
c1.ja(D.aPz,D.fqn,D.ac4)
c1.ja(D.aPz,D.fuJ,D.ac4)
c1.b=0
c1.d=0.1
c1.lQ(D.fpY,D.ft4,D.b2I,3)
c1.d=1
c1.b=8001
for(w=0;w<10;++w)c1.aAt(new A.ad(-72+w*16,51.3,55),D.ftp,D.lV,!1,0.05)
if(c6.ga2A())c1.eb(D.fqX,D.frh,D.baF,0.2)
c1.b=8001
c1.lQ(D.fut,D.fuR,D.b92,2)
c1.eb(D.ftX,D.fqe,D.bag,0.1)
c1.eb(D.ftW,D.fqf,D.UX,0.1)
c1.eb(D.ftT,D.aPs,D.UX,0.1)
c1.eb(D.fpM,D.aPs,D.UX,0.1)
c5.n(0,8001,D.dQI)
c1.b=8002
c1.r4(D.fuX,D.aPu,D.lV,0.05,3)
c1.r4(D.fq5,D.aPu,D.lV,0.05,3)
c5.n(0,8002,D.dR5)
for(v=c6.y,w=0;u=$.Kq(),w<u.length;++w){t=1000+w
c1.b=t
c1.czi(new A.ad(u[w],0,-2.25),D.fte,D.lV,!1,0.05,2)
s=v.t(0,w)?"This one has a hole for the cable.":"Tap it with the drill to put a hole through it."
c5.n(0,t,new A.dM("Wall stud","A 2x4 stud, one of the vertical posts in the wall. They stand 16 inches apart. "+s,new A.ad(u[w],20,-2),60))
if(v.t(0,w)){c1.b=0
c1.e=0.6
c1.ja(new A.ad(u[w],40,-2.25),D.fqo,D.acR)
c1.e=0}}c1.b=8000
c1.eb(D.fpQ,D.fpy,D.aaL,0.5)
c1.e=0.4
c1.ja(D.frP,D.fue,D.Du)
for(r=0;r<6;++r)for(v=19.5-r*3.6,q=0;q<2;++q)c1.eb(new A.ad(61.6+q*4.8,v,0.5),D.fpa,D.adR,0.3)
p=c6.ax&&!c6.ay
v=p?0.6:0
if(c6.ay)u=B.cb
else u=p?B.bL:B.k7
c1.eb(new A.ad(64,-2.5+v,0.9),D.frf,u,0.4)
c1.e=0
if(c6.ay)v="The main breaker has TRIPPED (orange). Tap it to flip it fully OFF, fix the problem, then turn it ON."
else v=c6.ax?"The power is ON. Tap to turn it OFF. Always turn it OFF before you touch any wire.":"The power is OFF. Tap to turn it ON."
c5.n(0,8000,new A.dM("Breaker panel",v,D.fqg,60))
c1.b=8003
for(v=c6.z,u=C.ea(v,v.r,C.a2(v).c),t=x.o,s=u.$ti.c;u.C();){o=u.d
n=A.lJ(o==null?s.a(o):o)
o=n.d
m=o.a-0.35
l=C.a([D.ftO,D.fsu,new A.ad(m,40,-3.2)],t)
if(n.c)B.d.v(l,C.a([new A.ad(m,51.4,-3.2),new A.ad(m,51.4,o.c+11)],t))
else l.push(new A.ad(m,o.b+11,-3.4))
c1.kg(A.FX(l,3,6),0.2,D.Vv,!1,0.35,6)}c5.n(0,8003,D.dRt)
for(u=x.eV,s=c6.Q,k=0;k<3;++k){j=D.oA[k]
i=s.h(0,j)
if(i==null||!i.a)continue
if(i.e)h=D.be8
else h=D.beR
o=C.a([],u)
for(m=i.b,l=C.a2(m),g=new C.p3(m,m.r,l.k("p3<1>")),g.c=m.e,l=l.c;g.C();){m=g.d
if(m==null)m=l.a(m)
o.push(new C.cM([A.lJ(m).d.a-1.15,A.lJ(m).d.a+1.15,A.lJ(m).d.b-2,A.lJ(m).d.b+2]))}m=6100+k
c1.b=m
A.hJ1(c1,j,j+48,-47,47,-0.25,0.5,h,o)
o=i.e?"Painted and finished.":"A 4 by 8 foot sheet of drywall (gypsum between two layers of paper). It is screwed to the studs."
c5.n(0,m,new A.dM("Drywall sheet",o,new A.ad(j+24,0,0),90))
c1.b=0
c1.e=0.3
for(o=i.c,m=C.a2(o),l=new C.p3(o,o.r,m.k("p3<1>")),l.c=o.e,m=m.c;l.C();){o=l.d
if(o==null)o=m.a(o)
f=B.o.an(o,10)
e=B.o.F(o,10)
c1.j9(new A.ad($.Kq()[f],-40+e*16,0.1),0.34,D.Du,3,5,0.3)}c1.e=0}for(u=c7.a,o=u!=="tape",m=c6.as,l=u!=="mud",g=u==="sand",w=0;w<2;w=a1){d=-24+48*w
a0=s.h(0,D.oA[w])
a0=a0==null?null:a0.a
a1=w+1
a2=s.h(0,D.oA[a1])
a2=a2==null?null:a2.a
if(a0!==!0||a2!==!0)continue
a3=m[w]
a0=6200+w
c1.b=a0
if(a3.a&&!a3.d){a2=a3.b
if(a2===0)h=D.beb
else h=a3.c?D.baO:D.b6M
c1.e=0.5
c1.ja(new A.ad(d,0,0.08+0.02*a2),new A.ad(2.2+a2*1.4,94,0.12),h)
c1.e=0}else if(!o||!l||g){c1.d=0.45
c1.e=0.6
c1.ja(new A.ad(d,0,0.12),D.frn,B.b4)
c1.e=0
c1.d=1}if(a3.d)a2="Smooth and ready for paint."
else if(!a3.a)a2="The joint between two sheets. It needs tape and three coats of joint compound."
else{a2=a3.b
a4=a2===1?"":"s"
a4="Taped, with "+a2+" coat"+a4+" of mud."
a2=a4}c5.n(0,a0,new A.dM("Seam",a2,new A.ad(d,0,0),70))}for(o=c7.b,m=c6.x,l=c6.at,g=x.N,a5=0;a5<7;++a5){n=D.vh[a5]
a0=n.a
a6=m.aj(0,a0)
a7=l.h(0,a0)
a8=o===a0&&a7!=null
if(!a6)continue
a2=n.c
if(a2)a9=n.e==="fan"?"fan":"light"
else{a4=a7==null?null:a7.a
a9=a4==null?"outlet":a4}if(a8){b0=A.JU(a7.a)
a0=a7.b
b1=A.fgY(b0,a0,!1)
b2=A.fOo(b1,n,new A.fhH(n))
B.d.v(c0,b2.a)
c5.v(0,b2.b)
if(a0.f&&a0.c===0){a0=C.a([],c2)
for(a2=b1.c,a4=a2.length,b3=0;b3<a2.length;a2.length===a4||(0,C.K)(a2),++b3){b4=a2[b3]
a0.push(new A.Dk(A.a1o(n,b4.a),b4.b,b4.c))}B.d.v(c3,a0)}}else if(a7!=null&&a7.b.c>=2){a2=a7.a
a4=a7.b.w
b5=C.a([],b9)
b6=new A.ua(b5)
b7=new A.aa0(C.U(c4,g))
b7.c=2
b7.w=a4
if(a2==="light"||a2==="fan")A.h5Q(b6,a2,b7)
else{A.h5w(b6,a2,-0.25,a4,!0)
A.h7S(b6,a4)}B.d.v(c0,A.fOo(new A.Eo(b5,D.dcK,D.Gh),n,new A.fhI(n)).a)
c5.n(0,3000+a0,new A.dM(A.hEX(a2),A.hEW(c6,a0),A.a1o(n,D.a70),22))}else{a4=C.a([],b9)
A.h4S(new A.ua(a4),a9,!1)
B.d.v(c0,A.fOo(new A.Eo(a4,D.ddm,D.Gh),n,new A.fhJ(n)).a)
a2=a2?"Ceiling box":"Electrical box"
a4=v.t(0,a0)?"The box is mounted and the cable is in. A device can be wired here.":"The box is mounted. Pull the cable to it."
c5.n(0,2000+a0,new A.dM(a2,a4,A.a1o(n,D.a70),24))}}b8=new A.fhL(c1)
if(u==="wall"||u==="ceiling"||u==="fanbox")for(a5=0;a5<7;++a5){n=D.vh[a5]
b9=n.a
if(m.aj(0,b9))continue
c2=n.c
c4=n.d
s=c4.a
o=c4.b
a0=c2?new A.ad(s,o-1,c4.c):new A.ad(s,o,1.5)
a2=c2?D.fqt:D.fr9
b8.$4$round(2000+b9,a0,a2,c2)
b9=c2?new A.ad(s,o-8,c4.c):new A.ad(s,o+7,3)
c3.push(new A.Dk(b9,n.b,B.hc))}else if(u==="cable")for(a5=0;a5<7;++a5){n=D.vh[a5]
b9=n.a
if(!m.aj(0,b9)||v.t(0,b9))continue
c2=n.c
c4=n.d
s=c4.a
o=c4.b
c4=c2?new A.ad(s,o-1,c4.c):new A.ad(s,o,1.5)
s=c2?D.aPw:D.fqx
b8.$5$col$round(2000+b9,c4,s,B.cr,c2)}else if(u==="knife")for(a5=0;a5<7;++a5){n=D.vh[a5]
if(n.c||!m.aj(0,n.a))continue
b9=n.d
c2=b9.a
i=c6.ang(c2)
if(i==null||i.b.t(0,n.a))continue
b8.$4$col(2000+n.a,new A.ad(c2,b9.b,0.5),D.fre,B.cy)}else if(u==="sheet")for(w=0;w<5;){j=D.a1y[w]
b8.$3(6000+w,new A.ad(j,0,0.3),D.fth);++w
c3.push(new A.Dk(new A.ad(j,50,1),"edge "+w,B.hc))}else if(u==="screw")for(a5=0;a5<3;++a5){j=D.oA[a5]
i=s.h(0,j)
if(i==null||!i.a)continue
for(b9=c6.aI8(j),c2=b9.length,c4=i.c,o=j+48,b3=0;b3<b9.length;b9.length===c2||(0,C.K)(b9),++b3){f=b9[b3]
for(a0=f*10,a2=7000+a0,r=0;r<6;++r){if(c4.t(0,a0+r))continue
b8.$3(a2+r,new A.ad($.Kq()[f],-40+r*16,0.5),D.aPq)}a2=$.Kq()
if(f+1<a2.length&&a2[f]+16<=o)for(a0=7500+a0,r=0;r<6;r+=2)b8.$4$col(a0+r,new A.ad(a2[f]+8,-40+r*16+8,0.5),D.aPq,B.dx)}}if(!C.et(["wall","ceiling","fanbox","cable","knife","sheet","screw",""],g).t(0,u))b9=B.d.t(D.a1F,u)||C.et(["outlet","gfci","switch","light","fan"],g).t(0,u)
else b9=!1
if(b9)for(b9=c6.CW,a5=0;a5<7;++a5){n=D.vh[a5]
if(B.d.t(D.a1F,u)){c2=n.a
a7=l.h(0,c2)
if(a7!=null){c4=a7.a
c4=(c4==="outlet"||c4==="gfci")&&a7.b.c>=2&&!b9.aj(0,c2)}else c4=!1
if(c4){c4=n.d
b8.$4$col(3000+c2,new A.ad(c4.a,c4.b,1.2),D.frq,B.bb)}}else{c2=n.a
if(m.aj(0,c2)&&v.t(0,c2)&&!l.aj(0,c2)){c4=n.c
s=n.d
o=s.a
g=s.b
s=c4?new A.ad(o,g-1,s.c):new A.ad(o,g,1.2)
o=c4?D.aPw:D.ftc
b8.$4$round(2000+c2,s,o,c4)}}}for(b9=c6.CW,b9=new C.cI(b9,C.a2(b9).k("cI<1,2>")).gah(0);b9.C();){j=b9.d
c2=j.a
n=A.lJ(c2)
c2=8100+c2
c1.b=c2
c4=n.d
d=c4.a
c4=c4.b
c1.kg(A.FX(C.a([new A.ad(d,c4,2.5),new A.ad(d,-46,3.5),new A.ad(d,-46,22)],t),4,6),0.28,D.bbo,!1,0.2,6)
c1.eb(new A.ad(d,c4,1.6),D.fqW,D.b4a,0.3)
c4=j.b
switch(c4){case"tv":c1.eb(new A.ad(d,-45,24),D.fpW,D.ach,0.2)
c1.eb(new A.ad(d,-30,24),D.fq4,D.V9,0.4)
break
case"lamp":c1.f_(new A.ad(d,-47.5,24),new A.ad(d,-46.5,24),6,D.aaC,0.4,14)
c1.f_(new A.ad(d,-46.5,24),new A.ad(d,-22,24),1,D.adP,0.5,8)
c1.RC(new A.ad(d,-26,24),new A.ad(d,-12,24),9,G.acV,!1,!0,5.5,0.2,16)
break
case"toaster":c1.eb(new A.ad(d,-42.5,24),D.fpB,D.nk,0.8)
c1.ja(new A.ad(d,-38,24),D.ftN,D.bdX)
break
default:c1.eb(new A.ad(d,-43.5,24),D.fpL,D.ach,0.2)
c1.a2c(new A.ad(d-6,-38,24),new A.ad(d+8,-38,24),3.4,D.acU,3,0.6,12)
c1.b77(new A.ad(d-8,-43,24),D.fpF,D.acU,0.6,0)}c5.n(0,c2,new A.dM(A.hD7(c4),"Plugged into "+n.b+". Tap it to unplug.",new A.ad(d,-35,20),60))}for(a5=0;a5<7;++a5){n=D.vh[a5]
c5.cf(0,2000+n.a,new A.fhK(n))}return new A.Eo(c0,c5,c3)},
hEX(d){var w
A:{if("gfci"===d){w="GFCI outlet"
break A}if("switch"===d){w="Light switch"
break A}if("light"===d){w="Ceiling light"
break A}if("fan"===d){w="Ceiling fan"
break A}w="Outlet"
break A}return w},
hD7(d){var w
A:{if("tv"===d){w="TV"
break A}if("lamp"===d){w="Lamp"
break A}if("toaster"===d){w="Toaster"
break A}w="Hair dryer"
break A}return w},
hEW(d,e){var w,v=d.at.h(0,e)
if(v==null)return""
if(v.b.w)return"BURNT. It was wired wrong and it burnt out. Pull it out and put in a new one."
w=v.a
if(w==="switch")return d.ch.t(0,e)?"The switch is ON. Tap to turn it off.":"The switch is OFF. Tap to flip it on."
if(w==="light"||w==="fan")return d.akw(e)?"It is running.":"It is off. Flip its switch (breaker on)."
w=d.CW.h(0,e)
return"Tap with a TV, lamp, toaster or hair dryer in your hand to plug it in. Plugged: "+(w==null?"nothing":w)+"."},
hYf(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=C.a([],x.B),a2=new A.ua(a1)
for(w=B.d.gah(D.vh),v=new C.hc(w,new A.fxI()),u=a3.at,t=a4*7;v.C();){s=w.gU(0)
r=s.a
q=u.h(0,r)
if(q==null||q.b.c<1)continue
p=a3.akw(r)?t:0.4
a2.b=3000+r
s=s.d
r=s.a
o=s.b-6.6
s=s.c
for(n=0;n<4;++n){m=p+n*3.141592653589793/2
l=A.fxL(D.fpx,m)
a2.b77(new A.ad(r+l.a,o+l.b,s+l.c),D.fuM,D.b56,0.3,m)}}w=a3.d
w===$&&C.c()
w=B.d.gah(w)
v=new C.hc(w,new A.fxJ())
u=a4*5
while(v.C()){s=w.gU(0).a
if(a3.akw(s)){k=A.lJ(s)
a2.b=0
a2.d=0.25+0.05*Math.sin(u)
s=k.d
a2.j9(new A.ad(s.a,s.b-5,s.c),11,D.V0,4,10,0)
a2.d=1}}for(w=a3.CW,v=new C.cI(w,C.a2(w).k("cI<1,2>")).gah(0),u=a4*1.6,s=a4*6,r=a4*60,o=a4*0.6,l=a4*3;v.C();){j=v.d
i=j.a
if(w.aj(0,i))h=a3.ax&&!a3.ay&&a3.aj4(i)
else h=!1
if(!h)continue
g=A.lJ(i).d.a
a2.b=8100+i
switch(j.b){case"tv":a2.e=0.8
a2.ja(new A.ad(g,-30,25.7),D.fv6,new H.m9(1,B.k.F(r,360),0.5,0.95).im())
a2.ja(new A.ad(g-10+20*B.k.F(o,1),-26+6*Math.sin(l),26),D.fqi,B.c)
a2.e=0
break
case"lamp":a2.b=0
a2.d=0.3+0.05*Math.sin(s)
a2.j9(new A.ad(g,-19,24),11,E.UI,4,10,0)
a2.d=1
break
case"toaster":a2.e=0.8
i=C.ar(D.abV,E.VI,(Math.sin(s)+1)/2)
i.toString
a2.ja(new A.ad(g,-38.2,24),new A.ad(13,0.3,6),i)
a2.e=0
break
default:for(i=g+9,f=0;f<6;++f)a2.j9(new A.ad(i+B.k.F(u+f/6,1)*22,-38+Math.sin(f*2)*2,24),0.6,D.bb9,3,5,0.2)}}for(w=new C.cI(a5,C.a2(a5).k("cI<1,2>")).gah(0),v=a4*0.7,u=a4*2.2;w.C();){j=w.d
s=j.b
if(a4>s)continue
k=A.lJ(j.a)
e=B.k.D(s-a4,0,3)
a2.b=0
for(f=0;f<14;++f){d=B.k.F(u+f*0.137,1)
m=f*2.4+t
a0=A.a1o(k,new A.ad(Math.cos(m)*d*7,Math.sin(m)*d*7-d*d*6,3+d*4))
s=B.k.D(e,0.3,1)
r=C.ar(D.VT,D.VY,1-d)
r.toString
a2.j9(a0,0.35*s,r,3,5,0)}a2.d=0.35
for(f=0;f<5;++f){d=B.k.F(v+f*0.2,1)
s=d*3
a2.j9(A.a1o(k,new A.ad(Math.sin(f*1.7)*2,d*10,5+s)),1.2+s,D.bg2,3,6,0)}a2.d=1}return a1},
xq:function xq(d,e,f){this.a=d
this.b=e
this.c=f},
fbs:function fbs(d){this.a=d},
fbt:function fbt(d){this.a=d},
fhH:function fhH(d){this.a=d},
fhI:function fhI(d){this.a=d},
fhJ:function fhJ(d){this.a=d},
fhL:function fhL(d){this.a=d},
fhK:function fhK(d){this.a=d},
fxI:function fxI(){},
fxJ:function fxJ(){},
h1z(d,e){var w=new A.cn2(e,d,A.fId())
w.bue(4,d,e)
return w},
qK:function qK(d,e){this.a=d
this.b=e},
tV:function tV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
Ld:function Ld(d,e){this.a=d
this.b=e
this.c=!1},
cn2:function cn2(d,e,f){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=3
_.r=_.f=0
_.w=!1},
cn7:function cn7(d){this.a=d},
cn3:function cn3(){},
cn5:function cn5(){},
cn6:function cn6(){},
cn4:function cn4(d){this.a=d},
MY:function MY(d,e){this.d=d
this.a=e},
aCB:function aCB(d,e){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.x="inspect"
_.y=0
_.z=null
_.at=_.as=_.Q=!1
_.c=_.a=_.ax=null},
ehH:function ehH(d,e,f){this.a=d
this.b=e
this.c=f},
ehI:function ehI(d){this.a=d},
ehG:function ehG(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehB:function ehB(d){this.a=d},
ehC:function ehC(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehD:function ehD(d,e){this.a=d
this.b=e},
ehE:function ehE(d){this.a=d},
ehF:function ehF(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehy:function ehy(d,e){this.a=d
this.b=e},
ehv:function ehv(d){this.a=d},
eht:function eht(d){this.a=d},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehx:function ehx(d){this.a=d},
ehU:function ehU(d,e){this.a=d
this.b=e},
ehQ:function ehQ(){},
ehP:function ehP(d){this.a=d},
ehR:function ehR(){},
ehS:function ehS(){},
ehT:function ehT(d,e){this.a=d
this.b=e},
ehO:function ehO(d,e){this.a=d
this.b=e},
ehN:function ehN(d){this.a=d},
ehM:function ehM(d){this.a=d},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehJ:function ehJ(){},
ehL:function ehL(d,e){this.a=d
this.b=e},
awq(d,e,f,g,h){return new A.b8G(d,e,f,g,h)},
fMj(d,e,f,g,h,i){return $.hAF.cf(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.cIH(d,e,f,i,g,h))},
xC:function xC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
BE:function BE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n7:function n7(d,e,f){this.a=d
this.b=e
this.c=f},
b8G:function b8G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f71:function f71(){},
f72:function f72(){},
f73:function f73(){},
f7a:function f7a(){},
f7b:function f7b(){},
f7c:function f7c(){},
Tg:function Tg(d){this.a=d},
aB_:function aB_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fh$=m
_.kM$=n
_.fL$=o
_.fi$=p
_.bq$=q
_.a7$=r
_.c=_.a=null},
dDt:function dDt(d){this.a=d},
dD7:function dD7(d,e){this.a=d
this.b=e},
dDa:function dDa(){},
dDu:function dDu(){},
dD5:function dD5(d,e){this.a=d
this.b=e},
dD6:function dD6(d,e){this.a=d
this.b=e},
dDb:function dDb(d,e,f){this.a=d
this.b=e
this.c=f},
dD0:function dD0(){},
dD1:function dD1(){},
dD2:function dD2(d){this.a=d},
dD3:function dD3(d,e){this.a=d
this.b=e},
dD4:function dD4(d,e,f){this.a=d
this.b=e
this.c=f},
dDc:function dDc(){},
dDd:function dDd(d,e){this.a=d
this.b=e},
dDe:function dDe(d){this.a=d},
dD9:function dD9(d,e){this.a=d
this.b=e},
dD8:function dD8(d){this.a=d},
dD_:function dD_(d,e,f){this.a=d
this.b=e
this.c=f},
dDn:function dDn(d){this.a=d},
dDm:function dDm(d){this.a=d},
dDo:function dDo(d){this.a=d},
dDl:function dDl(d){this.a=d},
dDj:function dDj(d){this.a=d},
dDk:function dDk(d){this.a=d},
dDi:function dDi(d){this.a=d},
dDf:function dDf(d){this.a=d},
dDh:function dDh(d){this.a=d},
dDp:function dDp(d,e){this.a=d
this.b=e},
dDq:function dDq(d,e){this.a=d
this.b=e},
dDr:function dDr(d){this.a=d},
dDg:function dDg(d){this.a=d},
dDs:function dDs(d,e){this.a=d
this.b=e},
b8Y:function b8Y(d,e){this.b=d
this.a=e},
cIH:function cIH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aJu:function aJu(){},
buC:function buC(){},
hrx(){return new A.Mn(null)},
nG(d,e,f,g,h){return new A.bqd(d,e,f,g,h)},
boF(d,e,f){return B.k.D((d-e)/(f-e),0,1)},
fMP(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Mn:function Mn(d){this.a=d},
Ju:function Ju(d,e){this.a=d
this.b=e},
zV:function zV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aBg:function aBg(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dIG:function dIG(d,e){this.a=d
this.b=e},
dIF:function dIF(d){this.a=d},
dII:function dII(d,e){this.a=d
this.b=e},
dIH:function dIH(d){this.a=d},
bqd:function bqd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7s:function f7s(){},
f7t:function f7t(){},
f7u:function f7u(){},
f7F:function f7F(){},
f7I:function f7I(){},
f7J:function f7J(){},
f7K:function f7K(){},
f7L:function f7L(){},
f7M:function f7M(){},
f7N:function f7N(){},
f7O:function f7O(){},
f7v:function f7v(){},
f7w:function f7w(){},
f7x:function f7x(){},
f7y:function f7y(){},
f7z:function f7z(){},
f7A:function f7A(){},
f7B:function f7B(){},
f7C:function f7C(){},
f7D:function f7D(){},
f7E:function f7E(){},
f7G:function f7G(){},
f7H:function f7H(){},
boG:function boG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eOU:function eOU(d){this.a=d},
eOT:function eOT(d,e){this.a=d
this.b=e},
eOR:function eOR(d){this.a=d},
eOV:function eOV(d){this.a=d},
eOS:function eOS(d,e){this.a=d
this.b=e},
ads:function ads(d,e,f){this.c=d
this.d=e
this.a=f},
acm:function acm(d,e,f){this.c=d
this.d=e
this.a=f},
P3:function P3(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpE:function bpE(d,e){this.b=d
this.a=e},
bp9:function bp9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7F:function b7F(d,e){this.b=d
this.a=e},
aFv:function aFv(d,e){this.c=d
this.a=e},
aFw:function aFw(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cQ$=e
_.b2$=f
_.c=_.a=null},
eOA:function eOA(d){this.a=d},
eOz:function eOz(d){this.a=d},
eOy:function eOy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOx:function eOx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOv:function eOv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOu:function eOu(d,e,f){this.a=d
this.b=e
this.c=f},
eOw:function eOw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eOt:function eOt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eOI:function eOI(d){this.a=d},
eOH:function eOH(d){this.a=d},
eOJ:function eOJ(d,e){this.a=d
this.b=e},
eOK:function eOK(d,e){this.a=d
this.b=e},
eOL:function eOL(d,e){this.a=d
this.b=e},
eOG:function eOG(d,e,f){this.a=d
this.b=e
this.c=f},
eOM:function eOM(d,e,f){this.a=d
this.b=e
this.c=f},
eOF:function eOF(d){this.a=d},
eOB:function eOB(d){this.a=d},
eON:function eON(d){this.a=d},
eOO:function eOO(d){this.a=d},
eOE:function eOE(d,e){this.a=d
this.b=e},
eOP:function eOP(d,e){this.a=d
this.b=e},
eOD:function eOD(d,e){this.a=d
this.b=e},
eOQ:function eOQ(d,e){this.a=d
this.b=e},
eOC:function eOC(d,e){this.a=d
this.b=e},
eOr:function eOr(){},
eOs:function eOs(){},
bok:function bok(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnM:function bnM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8k:function b8k(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bnO:function bnO(d,e,f){this.b=d
this.c=e
this.a=f},
brI:function brI(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aLb:function aLb(){},
h90(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.ae(0,new C.u(w,0)),u=e.aB(0,new C.u(w,0)),t=1-f,s=3*t
return d.aK(0,t*t*t).ae(0,v.aK(0,s*t*f)).ae(0,u.aK(0,s*f*f)).ae(0,e.aK(0,f*f*f))},
beL(d,e,f,g,h,i){return $.hBf.cf(0,d+"|"+C.t(e)+"|"+f.l()+"|"+C.t(g),new A.dda(d,e,f,i,g,h))},
a_3:function a_3(d,e){this.a=d
this.b=e},
pK:function pK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qr:function qr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
BI:function BI(d,e){this.a=d
this.b=e},
Y3:function Y3(d,e){this.a=d
this.b=e},
adi:function adi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_g:function a_g(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
BT:function BT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aae:function aae(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aav:function aav(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acq:function acq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
beJ:function beJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bt$=_.bL$=0},
dde:function dde(d){this.a=d},
ddf:function ddf(d){this.a=d},
ddb:function ddb(d,e){this.a=d
this.b=e},
ddc:function ddc(d){this.a=d},
ddd:function ddd(d){this.a=d},
ddg:function ddg(d){this.a=d},
ddh:function ddh(d){this.a=d},
ddi:function ddi(d){this.a=d},
ddj:function ddj(d){this.a=d},
ddk:function ddk(d){this.a=d},
ddl:function ddl(d){this.a=d},
ddm:function ddm(d){this.a=d},
ddn:function ddn(d){this.a=d},
ddo:function ddo(d){this.a=d},
F4:function F4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
UJ:function UJ(d){this.a=d},
aCv:function aCv(d,e,f,g,h,i,j){var _=this
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
_.a7$=j
_.c=_.a=null},
eec:function eec(d){this.a=d},
ee1:function ee1(d){this.a=d},
ee3:function ee3(){},
ee4:function ee4(){},
ee7:function ee7(){},
ee8:function ee8(d,e,f){this.a=d
this.b=e
this.c=f},
ee9:function ee9(d){this.a=d},
eea:function eea(d){this.a=d},
ee5:function ee5(){},
ee6:function ee6(d){this.a=d},
eeC:function eeC(d){this.a=d},
eeb:function eeb(){},
edY:function edY(d){this.a=d},
eee:function eee(d){this.a=d},
eed:function eed(d){this.a=d},
eeg:function eeg(){},
eef:function eef(d,e){this.a=d
this.b=e},
ee0:function ee0(){},
edZ:function edZ(d){this.a=d},
ee_:function ee_(d){this.a=d},
eeA:function eeA(d){this.a=d},
eez:function eez(d){this.a=d},
eeB:function eeB(d){this.a=d},
eeq:function eeq(d,e){this.a=d
this.b=e},
eey:function eey(d){this.a=d},
eew:function eew(d){this.a=d},
eex:function eex(d){this.a=d},
eev:function eev(d){this.a=d},
eeu:function eeu(d){this.a=d},
eer:function eer(d){this.a=d},
ees:function ees(d){this.a=d},
eet:function eet(d){this.a=d},
ee2:function ee2(){},
eem:function eem(d){this.a=d},
een:function een(d){this.a=d},
eel:function eel(d){this.a=d},
eeo:function eeo(d){this.a=d},
eek:function eek(d){this.a=d},
eep:function eep(d){this.a=d},
eej:function eej(d){this.a=d},
eei:function eei(d){this.a=d},
eeh:function eeh(d,e){this.a=d
this.b=e},
beK:function beK(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dda:function dda(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aKk:function aKk(){},
bje:function bje(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
OV:function OV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
UZ:function UZ(d){this.a=d},
bij:function bij(d,e,f,g,h,i,j,k){var _=this
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
_.a7$=k
_.c=_.a=null},
epW:function epW(d){this.a=d},
epU:function epU(d){this.a=d},
epV:function epV(){},
epx:function epx(){},
epw:function epw(){},
epG:function epG(d,e){this.a=d
this.b=e},
epI:function epI(d){this.a=d},
epM:function epM(d){this.a=d},
epH:function epH(d){this.a=d},
epN:function epN(d){this.a=d},
epO:function epO(d){this.a=d},
epP:function epP(d,e){this.a=d
this.b=e},
epF:function epF(d,e){this.a=d
this.b=e},
epQ:function epQ(d){this.a=d},
epE:function epE(d){this.a=d},
epR:function epR(d,e){this.a=d
this.b=e},
epD:function epD(d,e){this.a=d
this.b=e},
epS:function epS(d){this.a=d},
epC:function epC(d,e){this.a=d
this.b=e},
epT:function epT(d){this.a=d},
epB:function epB(d){this.a=d},
epJ:function epJ(d){this.a=d},
epA:function epA(d){this.a=d},
epK:function epK(d){this.a=d},
epz:function epz(d){this.a=d},
epL:function epL(d,e){this.a=d
this.b=e},
epy:function epy(d,e){this.a=d
this.b=e},
bpz:function bpz(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
Va:function Va(d){this.a=d},
aCL:function aCL(d,e,f,g){var _=this
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
_.a7$=g
_.c=_.a=null},
ewv:function ewv(d,e){this.a=d
this.b=e},
eww:function eww(d,e,f){this.a=d
this.b=e
this.c=f},
ewx:function ewx(d){this.a=d},
ewu:function ewu(){},
ewy:function ewy(d,e){this.a=d
this.b=e},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewz:function ewz(d,e){this.a=d
this.b=e},
ews:function ews(d,e){this.a=d
this.b=e},
ewA:function ewA(d){this.a=d},
ewr:function ewr(d){this.a=d},
ewB:function ewB(d,e){this.a=d
this.b=e},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewC:function ewC(d){this.a=d},
ewD:function ewD(d){this.a=d},
ewp:function ewp(d,e){this.a=d
this.b=e},
aKt:function aKt(){},
aKz:function aKz(){},
ZA:function ZA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=0
_.r=-1000},
UH:function UH(d){this.a=d},
aCn:function aCn(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fh$=h
_.kM$=i
_.fL$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
eaS:function eaS(d){this.a=d},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaG:function eaG(d,e){this.a=d
this.b=e},
eaH:function eaH(d){this.a=d},
eaE:function eaE(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaD:function eaD(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaC:function eaC(d,e){this.a=d
this.b=e},
eaK:function eaK(d){this.a=d},
eaB:function eaB(d,e){this.a=d
this.b=e},
eaL:function eaL(d){this.a=d},
eaA:function eaA(d,e){this.a=d
this.b=e},
eaM:function eaM(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaN:function eaN(d){this.a=d},
eay:function eay(d){this.a=d},
eaO:function eaO(d){this.a=d},
eax:function eax(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaQ:function eaQ(d){this.a=d},
eaR:function eaR(d){this.a=d},
eaw:function eaw(d){this.a=d},
eaJ:function eaJ(d){this.a=d},
bj1:function bj1(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aal:function aal(d,e,f){this.a=d
this.b=e
this.c=f},
V5:function V5(d){this.a=d},
bio:function bio(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fh$=i
_.kM$=j
_.fL$=k
_.fi$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
evX:function evX(d){this.a=d},
evY:function evY(d){this.a=d},
evW:function evW(d){this.a=d},
evM:function evM(d,e){this.a=d
this.b=e},
evN:function evN(d){this.a=d},
evK:function evK(d){this.a=d},
evL:function evL(d){this.a=d},
evJ:function evJ(d){this.a=d},
evC:function evC(d){this.a=d},
evD:function evD(d){this.a=d},
evB:function evB(d){this.a=d},
evO:function evO(d,e){this.a=d
this.b=e},
evI:function evI(d,e){this.a=d
this.b=e},
evP:function evP(d,e){this.a=d
this.b=e},
evH:function evH(d,e){this.a=d
this.b=e},
evQ:function evQ(d){this.a=d},
evG:function evG(d){this.a=d},
evR:function evR(d){this.a=d},
evF:function evF(d,e){this.a=d
this.b=e},
evS:function evS(d){this.a=d},
evE:function evE(d,e){this.a=d
this.b=e},
evT:function evT(d){this.a=d},
evA:function evA(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
evz:function evz(d,e){this.a=d
this.b=e},
evV:function evV(d){this.a=d},
evy:function evy(d,e){this.a=d
this.b=e},
bqp:function bqp(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aaO:function aaO(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
Te:function Te(d){this.a=d},
aAZ:function aAZ(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=f
_.w=_.r=1
_.x=g
_.Q=_.z=_.y=!1
_.as=0
_.at=null
_.ax=0
_.fh$=h
_.kM$=i
_.fL$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
dCC:function dCC(d){this.a=d},
dCB:function dCB(d,e){this.a=d
this.b=e},
dCD:function dCD(){},
dCE:function dCE(d){this.a=d},
dCs:function dCs(d,e){this.a=d
this.b=e},
dCv:function dCv(d){this.a=d},
dCu:function dCu(d,e){this.a=d
this.b=e},
dCt:function dCt(d,e){this.a=d
this.b=e},
dCz:function dCz(d,e,f){this.a=d
this.b=e
this.c=f},
dCy:function dCy(d){this.a=d},
dCw:function dCw(d){this.a=d},
dCx:function dCx(d){this.a=d},
dCA:function dCA(d){this.a=d},
b8F:function b8F(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.r=g
_.a=h},
cIe:function cIe(d){this.a=d},
aJs:function aJs(){},
buB:function buB(){},
aKh:function aKh(){},
buS:function buS(){},
aKw:function aKw(){},
bv_:function bv_(){},
F0:function F0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=-1000},
abD:function abD(d,e,f){this.a=d
this.b=e
this.c=f},
UB:function UB(d){this.a=d},
bhY:function bhY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fh$=i
_.kM$=j
_.fL$=k
_.fi$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6K:function e6K(d){this.a=d},
e6z:function e6z(d){this.a=d},
e6q:function e6q(d){this.a=d},
e6A:function e6A(d,e){this.a=d
this.b=e},
e6B:function e6B(d){this.a=d},
e6p:function e6p(d){this.a=d},
e6x:function e6x(d){this.a=d},
e6y:function e6y(d){this.a=d},
e6w:function e6w(d){this.a=d},
e6C:function e6C(d,e){this.a=d
this.b=e},
e6v:function e6v(d,e){this.a=d
this.b=e},
e6D:function e6D(d,e){this.a=d
this.b=e},
e6u:function e6u(d,e){this.a=d
this.b=e},
e6E:function e6E(d,e){this.a=d
this.b=e},
e6t:function e6t(d,e){this.a=d
this.b=e},
e6F:function e6F(d){this.a=d},
e6s:function e6s(d,e){this.a=d
this.b=e},
e6G:function e6G(d){this.a=d},
e6r:function e6r(d){this.a=d},
e6H:function e6H(d){this.a=d},
e6o:function e6o(d){this.a=d},
e6I:function e6I(d){this.a=d},
e6n:function e6n(d){this.a=d},
e6J:function e6J(d){this.a=d},
e6m:function e6m(d){this.a=d},
bfD:function bfD(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
ac7:function ac7(d,e){this.a=d
this.b=e
this.c=-1000},
UG:function UG(d){this.a=d},
aCm:function aCm(d,e,f,g,h,i,j,k,l,m){var _=this
_.d=d
_.e=e
_.f=!1
_.r=f
_.w=g
_.x=80
_.y="Pentatonic"
_.z="bell"
_.Q=!0
_.fh$=h
_.kM$=i
_.fL$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
eaf:function eaf(d,e){this.a=d
this.b=e},
eag:function eag(d,e,f){this.a=d
this.b=e
this.c=f},
ean:function ean(d){this.a=d},
eam:function eam(d){this.a=d},
eao:function eao(d,e){this.a=d
this.b=e},
eap:function eap(d){this.a=d},
eal:function eal(d){this.a=d},
eaq:function eaq(d){this.a=d},
eak:function eak(d,e){this.a=d
this.b=e},
ear:function ear(d,e){this.a=d
this.b=e},
eaj:function eaj(d,e){this.a=d
this.b=e},
eas:function eas(d,e){this.a=d
this.b=e},
eai:function eai(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
eau:function eau(d){this.a=d},
eah:function eah(d){this.a=d},
eav:function eav(d){this.a=d},
bj2:function bj2(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
aKf:function aKf(){},
buQ:function buQ(){},
aKg:function aKg(){},
buR:function buR(){},
f3j(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),B.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a6x,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.ab,f],s))
return C.p(w,C.A(r,B.m,w,B.e,B.j,0,w,w),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.j4,w,w,1/0)},
hQy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.length
if(j===0)return!1
w=x.S
v=C.U(x.N,w)
for(u=0;u<d.length;d.length===j||(0,C.K)(d),++u){t=d[u]
s=v.h(0,t)
v.n(0,t,(s==null?0:s)+1)}j=f.c
if(v.a!==j.gM(j))return!1
for(j=j.gdK(j),j=j.gah(j);j.C();){s=j.gU(j)
if(v.h(0,s.a)!==s.b)return!1}r=C.c1(d.length,0,!1,w)
q=d.length
p=J.e0(q,x.bW)
for(j=x.t,o=0;o<q;++o)p[o]=C.a([],j)
e.bH(0,new A.flI(r,p))
for(n=0;n<d.length;++n)if(r[n]!==D.vq.h(0,d[n]).a)return!1
m=C.et([0],w)
l=C.a([0],j)
while(l.length!==0)for(j=p[l.pop()],w=j.length,u=0;u<j.length;j.length===w||(0,C.K)(j),++u){k=j[u]
if(m.J(0,k))l.push(k)}return m.a===d.length},
fPh(d){var w="TCAG",v=C.aJ(d,"U","T")
return"FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG"[B.a.cG(w,v[0])*16+B.a.cG(w,v[1])*4+B.a.cG(w,v[2])]},
rT:function rT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7y:function b7y(d,e){this.a=d
this.b=e},
flI:function flI(d,e){this.a=d
this.b=e},
UE:function UE(d){this.a=d},
aCk:function aCk(d,e,f,g){var _=this
_.d=0
_.e=d
_.f=e
_.w=_.r=null
_.x=f
_.y=g
_.c=_.a=null},
e9K:function e9K(d){this.a=d},
e9J:function e9J(d,e){this.a=d
this.b=e},
e9w:function e9w(d,e){this.a=d
this.b=e},
e9q:function e9q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9r:function e9r(d){this.a=d},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9u:function e9u(d,e){this.a=d
this.b=e},
e9s:function e9s(d){this.a=d},
e9t:function e9t(d,e){this.a=d
this.b=e},
e9E:function e9E(){},
e9F:function e9F(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9A:function e9A(d){this.a=d},
e9B:function e9B(d,e){this.a=d
this.b=e},
e9x:function e9x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9z:function e9z(d){this.a=d},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9y:function e9y(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e){this.a=d
this.b=e},
bgj:function bgj(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dlh:function dlh(d,e){this.a=d
this.b=e},
TC:function TC(d){this.a=d},
bhd:function bhd(d,e){var _=this
_.e=_.d=0
_.f=""
_.r=d
_.w=""
_.y=_.x=0
_.z=e
_.c=_.a=null},
dKK:function dKK(d){this.a=d},
dKJ:function dKJ(d,e){this.a=d
this.b=e},
dKz:function dKz(d){this.a=d},
dKy:function dKy(){},
dKA:function dKA(d){this.a=d},
dKx:function dKx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKI:function dKI(){},
dKD:function dKD(){},
dKE:function dKE(d,e){this.a=d
this.b=e},
dKC:function dKC(d,e){this.a=d
this.b=e},
dKF:function dKF(d){this.a=d},
dKB:function dKB(d){this.a=d},
dKG:function dKG(d,e){this.a=d
this.b=e},
dKH:function dKH(d,e){this.a=d
this.b=e},
TS:function TS(d){this.a=d},
aBs:function aBs(d,e,f,g,h){var _=this
_.d=$
_.e=d
_.f=e
_.r=f
_.w=0
_.z=_.y=_.x=1
_.as=_.Q=0
_.at="Grass feeds rabbits, rabbits feed foxes. Keep all three alive!"
_.bq$=g
_.a7$=h
_.c=_.a=null},
dNz:function dNz(d){this.a=d},
dNy:function dNy(d,e){this.a=d
this.b=e},
dNm:function dNm(){},
dNl:function dNl(d,e){this.a=d
this.b=e},
dNn:function dNn(d){this.a=d},
dNr:function dNr(d){this.a=d},
dNq:function dNq(d,e){this.a=d
this.b=e},
dNs:function dNs(d){this.a=d},
dNp:function dNp(d,e){this.a=d
this.b=e},
dNt:function dNt(d){this.a=d},
dNo:function dNo(d,e){this.a=d
this.b=e},
dNu:function dNu(d){this.a=d},
dNv:function dNv(d){this.a=d},
dNw:function dNw(d){this.a=d},
dNx:function dNx(d){this.a=d},
bbH:function bbH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d0J:function d0J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d0L:function d0L(d,e,f){this.a=d
this.b=e
this.c=f},
d0K:function d0K(d,e){this.a=d
this.b=e},
aJG:function aJG(){},
bxM(d,e,f){var w=null,v=e.j(0.12),u=C.m(16),t=C.I(e.j(0.4),B.r,1),s=x.p,r=C.a([C.D(C.d(d,w,w,w,w,w,w,D.a6x,w,w,w),1)],s)
if(f!=null)B.d.v(r,C.a([B.ab,f],s))
return C.p(w,C.A(r,B.m,w,B.e,B.j,0,w,w),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,B.j4,w,w,1/0)},
ffV(d,e,f,g,h){var w,v,u=null,t=C.ih(u,u,u,u,C.dn(u,u,u,u,u,u,u,u,u,C.l(u,u,g,u,u,u,u,u,u,u,u,h,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),e),B.a5,B.ci,u,B.eq,B.cg)
t.eR()
w=t.b
v=w.c
w=w.a.c
w=f.aB(0,new C.u(v/2,w.gbc(w)/2))
t.a6(d,w)},
hNE(){var w,v,u,t,s,r,q,p,o=new C.eT()
o.dI(42)
w=C.a([],x.gh)
for(v=x.S,u=x.C,t=0;t<12;++t){s=1+B.o.an(t,4)
r=C.aZ(v)
q=C.a([],u)
while(q.length<s){p=1+o.aD(5)
if(r.J(0,p))q.push(new C.z(p,1+o.aD(2+B.o.an(t,3))))}B.d.b1(q,new A.fgR())
w.push(new A.aQ3(q))}return w},
a0t(d,e){var w,v,u,t
for(w=new C.Wa(d),v="";w.C();){u=C.jA(w.d)
t=u.toUpperCase().charCodeAt(0)
v=t>=65&&t<=90?v+C.jA(65+B.o.F(B.o.F(t-65+e,26)+26,26)):v+u}return v.charCodeAt(0)==0?v:v},
i_d(d,e){var w,v,u,t,s,r,q,p=C.af("[^A-Z]",!0,!1,!1,!1),o=C.aJ(e.toUpperCase(),p,"")
p=o.length
if(p===0)return d.toUpperCase()
for(w=new C.Wa(d),v=0,u="";w.C();){t=C.jA(w.d)
s=t.toUpperCase().charCodeAt(0)
if(s>=65&&s<=90){r=v+1
q=B.o.F(v,p)
u+=C.jA(65+B.o.F(B.o.F(s-65+(o.charCodeAt(q)-65),26)+26,26))
v=r}else u+=t}return u.charCodeAt(0)==0?u:u},
aQ3:function aQ3(d){this.a=d},
bDL:function bDL(){},
fgR:function fgR(){},
T6:function T6(d){this.a=d},
bgU:function bgU(d,e,f,g,h,i){var _=this
_.d=d
_.e=0
_.f=e
_.r=f
_.w=0
_.x=$
_.y=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dyN:function dyN(){},
dz_:function dz_(d){this.a=d},
dyZ:function dyZ(d,e,f){this.a=d
this.b=e
this.c=f},
dz0:function dz0(d){this.a=d},
dyY:function dyY(d,e){this.a=d
this.b=e},
dyO:function dyO(d,e){this.a=d
this.b=e},
dyT:function dyT(){},
dyU:function dyU(d){this.a=d},
dyS:function dyS(d){this.a=d},
dyV:function dyV(d,e){this.a=d
this.b=e},
dyR:function dyR(d,e){this.a=d
this.b=e},
dyW:function dyW(d,e){this.a=d
this.b=e},
dyQ:function dyQ(d,e){this.a=d
this.b=e},
dyX:function dyX(d){this.a=d},
dyP:function dyP(d){this.a=d},
b7K:function b7K(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cAM:function cAM(d,e){this.a=d
this.b=e},
U5:function U5(d){this.a=d},
bhp:function bhp(d,e,f,g,h){var _=this
_.d=d
_.e=40
_.r=_.f=0
_.w=e
_.x=$
_.y=f
_.bq$=g
_.a7$=h
_.c=_.a=null},
dRC:function dRC(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRD:function dRD(d){this.a=d},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRs:function dRs(d,e,f){this.a=d
this.b=e
this.c=f},
dRw:function dRw(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRu:function dRu(d,e){this.a=d
this.b=e},
dRy:function dRy(d){this.a=d},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRz:function dRz(d,e){this.a=d
this.b=e},
bd9:function bd9(d,e,f){this.b=d
this.c=e
this.a=f},
d8t:function d8t(d,e){this.a=d
this.b=e},
d8u:function d8u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Tf:function Tf(d){this.a=d},
bh6:function bh6(d,e,f){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=3
_.z=_.y=_.x=0
_.Q=f
_.c=_.a=null},
dCZ:function dCZ(d){this.a=d},
dCY:function dCY(d,e){this.a=d
this.b=e},
dCH:function dCH(){},
dCQ:function dCQ(d){this.a=d},
dCP:function dCP(){},
dCR:function dCR(d){this.a=d},
dCO:function dCO(){},
dCS:function dCS(d){this.a=d},
dCN:function dCN(d){this.a=d},
dCT:function dCT(d){this.a=d},
dCM:function dCM(d){this.a=d},
dCU:function dCU(d){this.a=d},
dCL:function dCL(d){this.a=d},
dCV:function dCV(d,e){this.a=d
this.b=e},
dCK:function dCK(d,e){this.a=d
this.b=e},
dCW:function dCW(d){this.a=d},
dCJ:function dCJ(d,e){this.a=d
this.b=e},
dCX:function dCX(d){this.a=d},
dCI:function dCI(d,e){this.a=d
this.b=e},
aJk:function aJk(){},
aJO:function aJO(){},
he_(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aB(0,e).gcl()*0.1
return new C.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
fVh(){var w=C.a([],x.bz),v=C.a([],x.bL),u=C.a([],x.fQ)
return new A.a38(w,v,u,B.cH,C.U(x.N,x.D))},
hlu(d,e,f){var w=d.c,v=e===0?-1:1
return new C.u(w*f.a+v*A.fVi(d),d.d*f.b)},
fVi(d){return 42+(D.lE.aj(0,d.b)?(d.ch-1)*38:0)},
e7:function e7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
t5:function t5(d,e,f,g){var _=this
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
a8V:function a8V(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aa_:function aa_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a38:function a38(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bJv:function bJv(){},
bJG:function bJG(d){this.a=d},
bJB:function bJB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJH:function bJH(d){this.a=d},
bJI:function bJI(d){this.a=d},
bJK:function bJK(d){this.a=d},
bJL:function bJL(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJM:function bJM(d,e,f){this.a=d
this.b=e
this.c=f},
bJN:function bJN(d){this.a=d},
bJx:function bJx(d){this.a=d},
bJy:function bJy(d){this.a=d},
bJw:function bJw(d){this.a=d},
bJz:function bJz(d,e,f){this.a=d
this.b=e
this.c=f},
bJA:function bJA(d){this.a=d},
bJu:function bJu(d){this.a=d},
bJO:function bJO(d,e){this.a=d
this.b=e},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJF:function bJF(d){this.a=d},
bJE:function bJE(d){this.a=d},
bJD:function bJD(d){this.a=d},
aha:function aha(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bEX:function bEX(){},
bEY:function bEY(){},
mm:function mm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chS:function chS(d){this.a=d},
A3(d,e){var w
$.W()
w=C.L()
w.b=B.af
w.c=e
w.r=d.gp(0)
w.d=B.bO
return w},
qw(d,e,f,g,h,i){var w=new A.ffP(e,h,!0),v=w.$1(g),u=v.b.c
if(u>i&&u>0)v=w.$1(Math.max(2,g*i/u))
w=v.b
u=w.c
w=w.a.c
v.a6(d,f.aB(0,new C.u(u/2,w.gbc(w)/2)))},
A5(a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=a7.a
J.bA(a6.save())
a6.translate(a8.a,a8.b-b2)
w=C.cr(new C.u(0,b2+a9*0.005),a9*0.06,a9*0.45)
v=B.w.j(0.22)
$.W()
u=C.L()
u.r=v.gp(0)
a7.hY(w,u)
for(w=a9*0.05,v=-a9,u=v*0.24,t=a9*0.1,s=u+a9*0.2,r=a9*0.04,q=a9*0.065,p=v*0.05,o=a9*0.14,n=p+w,m=a9*0.025,l=0;l<2;++l){k=D.vn[l]*a9*0.075
j=k-w
j=C.by(new C.a9(j,u,j+t,s),new C.aX(r,r))
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=B.dn.gp(0)
h=i.H()
a6.drawRRect(C.ew(j),h)
h.delete()
k-=q
k=C.by(new C.a9(k,p,k+o,n),new C.aX(m,m))
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=B.c.gp(0)
h=j.H()
a6.drawRRect(C.ew(k),h)
h.delete()}w=v*0.16
u=v*0.52
t=a9*0.32
s=w+t
q=a9*0.09
g=C.by(new C.a9(w,u,s,u+t),new C.aX(q,q))
q=C.L()
q.r=b4.gp(0)
a7.aC(g,q)
q=v*0.27
t=a9*0.02
t=C.by(new C.a9(w,q,s,q+a9*0.045),new C.aX(t,t))
q=B.c.j(0.35)
s=C.L()
s.r=q.gp(0)
a7.aC(t,s)
s=v*0.47
f=new C.u(v*0.15,s)
e=new C.u(a9*0.15,s)
s=v*0.06
t=a9*0.07
a7.bA(f,f.ae(0,new C.u(s,a9*0.17)),A.A3(b5,t))
s=f.ae(0,new C.u(s,a9*0.18))
q=C.L()
q.r=b5.gp(0)
a7.ag(s,r,q)
d=b1?-2.5+b7*0.5:0.5-b7*2.2
a0=e.ae(0,new C.u(Math.sin(d)*a9*0.2,Math.cos(d)*a9*0.2))
a7.bA(e,a0,A.A3(b5,t))
w=C.L()
w.r=b5.gp(0)
a7.ag(a0,r,w)
v*=0.7
a1=new C.u(0,v)
a2=a9*0.22
if(b3===1){w=a1.ae(0,new C.u(0,-a2*0.12))
u=C.L()
u.r=D.Dm.gp(0)
a7.ag(w,a2*1.18,u)}w=C.L()
w.r=b5.gp(0)
a7.ag(a1,a2,w)
if(b3===0){w=C.bT(a1,a2)
u=C.L()
u.r=D.Dm.gp(0)
a7.ff(w,3.141592653589793,3.141592653589793,!0,u)}else if(b3===2){w=C.bT(a1,a2)
u=C.L()
u.r=D.Dm.gp(0)
a7.ff(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a2*0.3,u=a2*0.2,l=0;l<2;++l){a3=D.vn[l]
t=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
t.r=D.Dm.gp(0)
h=t.H()
a6.drawCircle(0+a3*a2*1.05,w,u,h)
h.delete()}}a4=B.k.F(b0*0.8,3)>2.85
for(w=v+a2*0.42,u=a2*0.12,t=a2*0.25,s=b0*0.7,r=a2*0.13,v+=a2*0.05,q=-a2*0.15,p=v+0,o=a2*0.15,l=0;l<2;++l){n=D.vn[l]*a2
m=0+n*0.4
if(a4){k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.b=B.af
k.c=1.6
k.r=B.bh.gp(0)
k.d=B.bO
h=k.H()
a6.drawLine.apply(a6,[m+q,p,m+o,p,h])
h.delete()}else{k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=B.c.gp(0)
h=k.H()
a6.drawCircle(m,v,t,h)
h.delete()
k=Math.sin(s)
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=B.w.gp(0)
h=j.H()
a6.drawCircle(m+k*a2*0.06,p,r,h)
h.delete()}m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=B.ji.j(0.5).gp(0)
h=m.H()
a6.drawCircle(0+n*0.62,w,u,h)
h.delete()}w=a2*0.5
a5=a1.ae(0,new C.u(0,w))
v=a2*0.4
if(b6){w=C.cr(a5,v*(0.35+0.65*((Math.sin(b0*12)+1)/2)),w)
v=C.L()
v.r=B.eF.gp(0)
a7.hY(w,v)}else a7.ff(C.cr(a5.aB(0,new C.u(0,a2*0.1)),v,a2*0.65),0.2,2.741592653589793,!1,A.A3(B.bh,1.8))
a6.restore()},
aMH(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null
if(h<=0)return
w=d.a
J.bA(w.save())
w.translate(e.a,e.b)
d.bV(0,B.k.D(B.lP.av(0,B.k.D(h,0,1)),0.01,1.3))
v=C.ih(p,p,p,p,C.dn(p,p,p,p,p,p,p,p,p,C.l(p,p,B.az,p,p,p,p,p,p,p,p,g,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),f),B.a5,B.ci,p,B.eq,B.cg)
v.eR()
u=v.b
t=u.c
u=u.a.c
s=g*0.8
r=C.by(C.cr(B.J,u.gbc(u)+g*0.7,t+g*1.1),new C.aX(s,s))
s=$.W()
t=C.L()
t.r=i.gp(0)
d.aC(r,t)
s=new C.aP(s.r,B.aq,p,p,C.a([],x.v))
t=-g
u=r.d
q=u-1
s.E(new C.b5(t*0.3,q))
s.E(new C.ap(t*0.7,u+g*0.6))
s.E(new C.ap(g*0.2,q))
s.E(new C.bE())
q=C.L()
q.r=i.gp(0)
d.aN(s,q)
q=v.b
s=q.c
q=q.a.c
v.a6(d,new C.u(-s/2,-q.gbc(q)/2))
w.restore()},
f4b(d,e,f,g){var w,v=B.k.D(Math.abs(Math.cos(g)),0.15,1),u=f*2,t=u*v,s=C.cr(e,u,t)
$.W()
w=C.L()
w.r=B.cr.gp(0)
d.hY(s,w)
d.hY(C.cr(e,u,t),A.A3(B.p8,f*0.18))
if(v>0.5)A.qw(d,"$",e,f*1.2,B.p8,9999)},
hEu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=new C.eT()
j.dI(4)
for(w=e.a,v=f-g,u=e.b,t=d.a,s=f*3,r=u*0.025,q=u*0.012,p=0;p<18;++p){o=j.ai()
n=B.k.F(v*(40+j.ai()*60)+j.ai()*u,u)
J.bA(t.save())
t.translate(o*w,n)
t.rotate((s+p)*180/3.141592653589793,0,0)
o=C.cr(B.J,q,r)
m=D.as2[B.o.F(p,5)]
$.W()
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=m.gp(0)
k=l.H()
t.drawRect(C.c4(o),k)
k.delete()
t.restore()}},
hNZ(d,e,f,g){switch(B.o.F(f,12)){case 0:A.hE6(d,e,g)
break
case 1:A.hGZ(d,e,g)
break
case 2:A.hGd(d,e,g)
break
case 3:A.hM7(d,e,g)
break
case 4:A.hMm(d,e,g)
break
case 5:A.hLh(d,e,g)
break
case 6:A.hGF(d,e,g)
break
case 7:A.hDt(d,e,g)
break
case 8:A.hN3(d,e,g)
break
case 9:A.hFI(d,e,g)
break
case 10:A.hH2(d,e,g)
break
default:A.hGh(d,e,g)}},
hE6(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=a1*0.94
for(w=a3.a,v=a0*0.12,u=a0*0.06,t=a1*0.06,s=x.v,r=0;r<6;++r){q=a0*(0.04+r*0.17)
p=a1*(0.18+0.08*B.o.F(r,3))
o=a2-p
n=q+v
m=B.c.j(0.2)
l=$.W()
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=m.gp(0)
j=k.H()
w.drawRect(C.c4(new C.a9(q,o,n,o+p)),j)
j.delete()
k=C.a([],s)
l=new C.aP(l.r,B.aq,d,d,k)
k.push(new C.b5(q-3,o))
k.push(new C.ap(q+u,o-t))
k.push(new C.ap(n+3,o))
k.push(new C.bE())
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.c.j(0.3).gp(0)
j=o.H()
o=l.gbI().a.snapshot()
w.drawPath((l.e=new C.cE(o)).a,j)
j.delete()}v=B.w.j(0.18)
$.W()
u=C.L()
u.r=v.gp(0)
a3.aX(new C.a9(0,a2,0+a0,a2+(a1-a2)),u)
i=Math.cos(a5*1.6)
h=Math.min(a0*0.46,a1*0.95)
g=h*0.62
J.bA(w.save())
u=a0*0.58
w.translate(u,a1*0.45)
a3.rK(0,Math.max(0.08,Math.abs(i)),1)
v=g*0.1
f=C.by(C.cr(B.J,g,h),new C.aX(v,v))
t=C.L()
s=i>=0
t.sau(new C.a6(B.a3,B.a7,B.x,s?D.d7v:D.cZP,d,d).aw(0,new C.a9(f.a,f.b,f.c,f.d)))
a3.aC(f,t)
a3.aC(f,A.A3(B.dn,2))
if(s){t=-h
s=t*0.28
o=-g
n=o*0.05
m=g*0.22
l=C.L()
l.r=D.qr.gp(0)
a3.ag(new C.u(s,n),m,l)
m=C.bT(new C.u(s,n),m)
n=C.L()
n.r=D.Dm.gp(0)
a3.ff(m,3.141592653589793,3.141592653589793,!0,n)
for(t*=0.05,s=o*0.25,n=g*0.07,r=0;r<3;++r){m=s+r*g*0.16
m=C.by(new C.a9(t,m,t+h*(0.42-r*0.06),m+n),B.i1)
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.dx.gp(0)
j=l.H()
w.drawRRect(C.ew(m),j)
j.delete()}A.qw(a3,"COMMUNITY ID",new C.u(0,o*0.4),v,B.dn,h*0.8)}else A.qw(a3,"\u2605 NGMY \u2605",B.J,g*0.16,B.c,h*0.8)
w.restore()
v=a5>2.6
if(v){r=B.k.D((a5-2.6)/0.35,0,1)
J.bA(w.save())
w.translate(u,a1*0.52)
a3.j_(0,-0.25)
a3.bV(0,2.2-1.2*B.et.av(0,r))
e=C.cr(B.J,g*0.3,h*0.7)
a3.aC(C.by(e,B.h8),A.A3(B.d2.j(r),3))
A.qw(a3,"\u2713 REGISTERED",B.J,g*0.13,B.d2.j(r),(e.c-e.a)*0.9)
w.restore()}w=a5*5
u=Math.sin(w)
w=Math.sin(w)
v=v&&a5<4
A.A5(a3,new C.u(a0*0.2,a2),a1*0.7,a5,!1,Math.abs(w)*a1*0.015,0,B.d2,D.qr,v,(u+1)/2)
if(a5>3)A.hEu(a3,new C.at(a0,a1*0.9),a5,3)},
hGZ(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a8.a,a4=a8.b,a5=a4*0.94,a6=B.w.j(0.2)
$.W()
w=C.L()
w.r=a6.gp(0)
a7.aX(new C.a9(0,a5,0+a3,a5+(a4-a5)),w)
v=a3*0.62
u=a3*0.3
t=a4*0.62
w=a5-t
a6=v+u
s=C.L()
s.r=B.bj.gp(0)
a7.aX(new C.a9(v,w,a6,w+t),s)
for(s=a7.a,r=a9*1.5,q=u*0.2,p=t*0.1,o=0;o<4;++o)for(n=w+t*(0.1+o*0.17),m=n+p,l=0;l<3;++l){k=v+u*(0.12+l*0.3)
j=B.o.F(o+l+B.k.bw(r),3)===0?B.dM:B.aV.j(0.6)
$.W()
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=j.gp(0)
h=i.H()
s.drawRect(C.c4(new C.a9(k,n,k+q,m)),h)
h.delete()}r=v+u*0.38
q=t*0.16
p=a5-q
$.W()
n=C.L()
n.r=B.fk.gp(0)
a7.aX(new C.a9(r,p,r+u*0.24,p+q),n)
n=w-a4*0.09
q=a4*0.02
n=C.by(new C.a9(v,n,a6,n+a4*0.08),new C.aX(q,q))
a6=C.L()
a6.r=B.aL.gp(0)
a7.aC(n,a6)
a6=a4*0.05
n=a4*0.06
A.qw(a7,"JOBS",new C.u(v+u/2,w-a6),n,B.c,9999)
g=B.k.D(a9/2.8,0,1)
w=a3*0.12
f=w+(v+u*0.3-w)*B.dH.av(0,g)
w=g<1
e=w?Math.abs(Math.sin(a9*12))*a4*0.02:0
r=g>=1
p=r?(Math.sin(a9*6)+1)/2:0
A.A5(a7,new C.u(f,a5),a4*0.6,a9,!1,e,2,B.b2,B.Kg,r,p)
if(w){w=C.by(C.cr(new C.u(f-a4*0.12,a5-a4*0.17-e),a4*0.075,a4*0.1),B.i1)
p=C.L()
p.r=B.fk.gp(0)
a7.aC(w,p)}if(r){w=a9-2.8
A.aMH(a7,new C.u(f+a6,a5-a4*0.78),"Hired! \ud83c\udf89",a4*0.07,w/0.4,B.c)
for(a6=w*0.8,w=a5-a4*0.5,r=a4*0.03,p=a9*8,d=0;d<6;++d){a0=B.k.F(a6+d*0.17,1)
A.f4b(a7,new C.u(f+Math.sin(d*2.1)*a4*0.2,w-a0*a4*0.25),r,p+d)}}a6=a3*0.04
w=a6+u
r=n+a4*0.3
q=C.by(new C.a9(a6,n,w,r),new C.aX(q,q))
$.W()
p=C.L()
p.r=B.io.gp(0)
a7.aC(q,p)
for(w-=a6,q=a6+w*0.08,r-=n,p=w*0.84,m=r*0.24,a6+=w*0.14,w*=0.5,k=r*0.05,d=0;d<3;++d){j=(1-B.k.D((a9-d*0.5)/0.5,0,1))*a3*0.3
i=q+j
a1=d*0.3
a2=n+r*(0.08+a1)
a2=C.by(new C.a9(i,a2,i+p,a2+m),B.i1)
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=B.c.gp(0)
h=i.H()
s.drawRRect(C.ew(a2),h)
h.delete()
j=a6+j
a1=n+r*(0.14+a1)
a2=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a2.r=B.bI.gp(0)
h=a2.H()
s.drawRect(C.c4(new C.a9(j,a1,j+w,a1+k)),h)
h.delete()}},
hGd(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b0.a,a7=b0.b,a8=a7*0.94
$.W()
w=C.L()
w.r=B.e7.gp(0)
a9.aX(new C.a9(0,a8,0+a6,a8+(a7-a8)),w)
v=a6*0.62
u=B.k.D(b1/2.5,0,1)
w=v-a7*0.03
t=a7*0.4*u
s=a8-t
r=a7*0.06
t=C.by(new C.a9(w,s,w+r,s+t),B.hN)
s=C.L()
s.r=B.fk.gp(0)
a9.aC(t,s)
s=a8-a7*0.45*u
q=new C.u(v,s)
t=a7*0.3
w=C.L()
w.r=B.d2.gp(0)
a9.ag(q,t*u,w)
w=-a7
p=a7*0.07*u
o=q.ae(0,new C.u(w*0.16*u,p))
n=a7*0.2
m=n*u
l=C.L()
l.r=B.bl.gp(0)
a9.ag(o,m,l)
p=q.ae(0,new C.u(a7*0.16*u,p))
l=C.L()
l.r=B.ft.gp(0)
a9.ag(p,m,l)
if(u>=1)for(p=b1-2.5,o=a7*0.035,m=b1*4,k=0;k<7;++k){j=k*0.9+0.3
i=B.k.D((p-k*0.2)/0.4,0,1)
if(i>0)A.f4b(a9,new C.u(v+Math.cos(j)*a7*0.2,s+Math.sin(j)*a7*0.17),o*B.lP.av(0,i),m+k)}s=a6*0.06
p=a7*0.08
o=a6*0.3
m=s+o
l=p+t
h=a7*0.02
h=C.by(new C.a9(s,p,m,l),new C.aX(h,h))
g=B.w.j(0.3)
f=$.W()
e=C.L()
e.r=g.gp(0)
a9.aC(h,e)
e=C.a([],x.v)
d=new C.aP(f.r,B.aq,null,null,e)
f=s+6
h=l-8
d.E(new C.b5(f,h))
a0=[0.1,0.25,0.2,0.45,0.5,0.75,0.9]
a1=B.k.bw(B.k.D(b1/3,0,1)*6)
for(s=m-s-12,l=l-p-16,k=0;k<=a1;++k){g=new C.ap(f+s*k/6,h-l*a0[k])
e.push(g)
a2=d.f
if(a2!=null)g.bx(a2)
g=d.e
if(g!=null)g.a.delete()
d.e=null}a9.aN(d,A.A3(B.bb,3))
s=a7*0.05
A.qw(a9,"+$",new C.u(m-s,p+s),r,B.bb,9999)
r=b1*3
s=Math.sin(r)
A.A5(a9,new C.u(o,a8),a7*0.62,b1,!1,Math.abs(Math.sin(r))*a7*0.01,0,B.aL,D.qr,!1,(s+1)/2)
n=o+n
t=a8-t
a3=new C.u(n,t)
p=C.by(C.cr(a3,p,a7*0.1),B.hN)
$.W()
o=C.L()
o.r=B.d6.gp(0)
a9.aC(p,o)
o=w*0.05
a9.bA(a3.ae(0,new C.u(a7*0.04,w*0.01)),a3.ae(0,new C.u(a7*0.12,o)),A.A3(B.d6,4))
for(w=b1*1.4,s=a7*0.13,r=a7*0.008,p=a9.a,k=0;k<8;++k){a4=B.k.F(w+k*0.125,1)
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=B.fZ.gp(0)
a5=m.H()
p.drawCircle(n+(s+a4*a7*0.12),t+(o+a4*a4*a7*0.3),r,a5)
a5.delete()}},
hM7(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=d*0.94,a1=B.fk.j(0.6)
$.W()
w=C.L()
w.r=a1.gp(0)
a2.aX(new C.a9(0,a0,0+e,a0+(d-a0)),w)
v=e*0.3
u=e*0.66
for(a1=u/12,w=d*0.14,t=a1+1,s=w+d*0.12,r=a2.a,q=0;q<12;++q){p=v+a1*q
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=D.auZ[B.o.F(q,4)].gp(0)
n=o.H()
r.drawRect(C.c4(new C.a9(p,w,p+t,s)),n)
n.delete()}for(t=d*0.2,s=d*0.1,p=t+s,q=0;q<12;++q){o=v+a1*q
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=D.auZ[B.o.F(q,4)].gp(0)
n=m.H()
r.drawArc.apply(r,[C.c4(new C.a9(o,t,o+a1,p)),0,180,!0,n])
n.delete()}a1=v+4
t=d*0.3
p=t+(a0-t)
o=C.L()
o.r=B.fk.gp(0)
a2.aX(new C.a9(a1,t,a1+4,p),o)
o=v+u
a1=o-8
m=C.L()
m.r=B.fk.gp(0)
a2.aX(new C.a9(a1,t,a1+4,p),m)
m=d*0.68
p=m+d*0.26
a1=C.by(new C.a9(v,m,o,p),B.hN)
t=C.L()
t.r=B.io.gp(0)
a2.aC(a1,t)
for(a1=o-v,t=a1/6,o=m+2,a1/=12,p=o+(p-m-4),q=0;q<6;++q){l=v+t*q
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=((q&1)===0?B.bL:B.cr).j(0.9).gp(0)
n=k.H()
r.drawRect(C.c4(new C.a9(l,o,l+a1,p)),n)
n.delete()}a1=v+u*0.2
t=d*0.62
j=new C.u(a1,t)
p=d*0.17
o=d*0.03
l=C.by(C.cr(j,d*0.11,p),new C.aX(o,o))
k=C.L()
k.r=B.cC.gp(0)
a2.aC(l,k)
k=-d
p=C.cr(j.ae(0,new C.u(0,k*0.05)),d*0.04,p)
l=C.L()
l.r=B.fA.gp(0)
a2.hY(p,l)
for(p=a4*0.8,k*=0.08,l=d*0.015,q=0;q<3;++q){i=B.k.F(p+q*0.33,1)
h=Math.sin(i*6+q)
g=i*d
f=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
f.r=B.c.j(0.6*(1-i)).gp(0)
n=f.H()
r.drawCircle(a1+h*5,t+(k-g*0.14),l+g*0.02,n)
n.delete()}for(a1=v+u*0.5,p=d*0.018,q=0;q<5;++q){l=C.cr(new C.u(a1,t),w,d*(0.1+q*0.01))
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.b=B.af
k.c=p
k.r=B.cr.gp(0)
k.d=B.bO
n=k.H()
r.drawArc.apply(r,[C.c4(l),(0.4+q*0.1)*57.29577951308232,108.8619810748564,!1,n])
n.delete()}for(a1=d*0.63,w=d*0.032,q=0;q<4;++q){t=B.o.F(q,2)
p=B.o.an(q,2)
l=(q&1)===0?B.cb:B.zR
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=l.gp(0)
n=k.H()
r.drawCircle(v+u*(0.72+0.06*t)+q*d*0.02,a1+p*d*0.035,w,n)
n.delete()}A.A5(a2,new C.u(e*0.14,a0),m,a4,!1,0,1,B.cr,E.abX,!0,(Math.sin(a4*5)+1)/2)
for(a1=a4*0.45,w=e*0.16,t=d*0.45,r=d*0.06,q=0;q<5;++q){i=B.k.F(a1+q*0.2,1)
A.qw(a2,"\u2665",new C.u(w+Math.sin(i*5+q)*d*0.08+q*d*0.03,t-i*d*0.4),r,B.aE.j(1-i),9999)}a1=v+u/2
w=d*0.08
o=C.by(C.cr(new C.u(a1,w),s,u*0.7),new C.aX(o,o))
$.W()
s=C.L()
s.r=B.az.gp(0)
a2.aC(o,s)
A.qw(a2,"NGMY STORE \xb7 African food",new C.u(a1,w),d*0.05,B.dM,u*0.64)},
hMm(d,e,f){var w,v,u,t,s,r,q=e.a,p=e.b,o=p*0.94,n=B.w.j(0.2)
$.W()
w=C.L()
w.r=n.gp(0)
d.aX(new C.a9(0,o,0+q,o+(p-o)),w)
v=B.o.F(B.k.bw(f/1.5),4)
u=B.k.F(f,1.5)
t=u<0.75
w=p*0.68
n=t?(Math.sin(f*8)+1)/2:0
s=t?Math.abs(Math.sin(f*8))*p*0.01:0
A.A5(d,new C.u(q*0.25,o),w,f,!1,s,2,B.d2,D.qr,t,n)
n=t?0:(Math.sin(f*8)+1)/2
s=t?0:Math.abs(Math.sin(f*8))*p*0.01
A.A5(d,new C.u(q*0.75,o),w,f,!1,s,0,B.bk,D.b6x,!t,n)
n=p*0.15
w=p*0.085
if(t)A.aMH(d,new C.u(q*0.26,n),D.arY[v].a,w,u/0.25,B.ob)
else A.aMH(d,new C.u(q*0.74,n),D.arY[v].b,w,(u-0.75)/0.25,B.er)
for(n=q*0.5,w=p*0.07,s=f*2,r=0;r<3;++r)A.qw(d,"\u2192",new C.u(n,p*(0.35+r*0.1)),w,B.c.j(0.3+0.5*B.k.F(s+r,1)),9999)},
hLh(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=d*0.94,a1=B.w.j(0.2)
$.W()
w=C.L()
w.r=a1.gp(0)
a2.aX(new C.a9(0,a0,0+e,a0+(d-a0)),w)
w=e*0.3
v=C.cr(new C.u(e*0.6,d*0.45),d*0.7,Math.min(w,d*0.55))
a1=C.by(v,B.hN)
u=C.L()
u.r=B.c.gp(0)
a2.aC(a1,u)
for(a1=v.d,u=v.b,t=a1-u,s=t*0.03,r=a2.a,q=v.a,p=v.c,o=p-q,n=q+o*0.1,m=0;m<9;++m){l=u+t*(0.1+m*0.095)
k=B.o.F(m,3)===2?0.5:0.8
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=B.cm.gp(0)
i=j.H()
r.drawRect(C.c4(new C.a9(n,l,n+o*k,l+s)),i)
i.delete()}h=B.k.D(a4/3,0,1)
g=u+t*h
if(h<1){a1=q-8
t=g-2
o=a1+(o+16)
s=C.L()
s.r=B.bb.gp(0)
a2.aX(new C.a9(a1,t,o,t+4),s)
s=B.bb.j(0.18)
t=C.L()
t.r=s.gp(0)
a2.aX(new C.a9(a1,u,o,u+(g-u)),t)}else{m=B.k.D((a4-3)/0.4,0,1)
t=B.lP.av(0,m)
s=C.L()
s.r=B.bL.gp(0)
a2.ag(new C.u(p,u),d*0.08*t,s)
A.qw(a2,"PDF",new C.u(p,u),d*0.045*m,B.c,9999)
u=d*0.06
A.qw(a2,"\u2713 Saved",new C.u(v.gbP().a,a1+u),u,B.c.j(m),9999)}a1=a4*4
u=Math.sin(a1)
A.A5(a2,new C.u(e*0.2,a0),d*0.66,a4,!0,Math.abs(Math.sin(a1))*d*0.01,0,B.cu,D.qr,!1,(u+1)/2)
f=C.cr(new C.u(w,d*0.3),d*0.18,d*0.1)
w=d*0.02
w=C.by(f,new C.aX(w,w))
u=C.L()
u.r=B.az.gp(0)
a2.aC(w,u)
u=d*0.015
u=C.by(f.cE(-3),new C.aX(u,u))
w=B.bb.j(0.35+0.3*Math.sin(a4*6))
a1=C.L()
a1.r=w.gp(0)
a2.aC(u,a1)},
hGF(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a8.a,a4=a8.b,a5=a4*0.94,a6=B.w.j(0.2)
$.W()
w=C.L()
w.r=a6.gp(0)
a7.aX(new C.a9(0,a5,0+a3,a5+(a4-a5)),w)
v=C.cr(new C.u(a3*0.62,a4*0.47),a4*0.8,Math.min(a3*0.4,a4*0.75))
w=C.by(v,B.r8)
a6=C.L()
a6.r=B.c.gp(0)
a7.aC(w,a6)
a6=v.a
w=v.c
u=w-a6
t=v.b
s=v.d-t
A.qw(a7,"INVOICE",new C.u(a6+u*0.3,t+s*0.09),s*0.07,B.dn,9999)
for(r=a7.a,q=u*0.08,p=a6+q,o=s*0.045,n=p+u*0.5,m=w-u*0.17,l=s*0.02,k=s*0.06,j=a9-0.5,i=0,h=0;h<3;++h){g=B.k.D((j-h*0.6)/0.4,0,1)
if(g<=0)continue
i+=D.atj[h].b
f=t+s*(0.24+h*0.14)
J.bA(r.save())
r.translate((1-g)*30,0)
e=B.cm.j(g)
$.W()
d=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
d.r=e.gp(0)
a0=d.H()
r.drawRect(C.c4(new C.a9(p,f,n,f+o)),a0)
a0.delete()
A.qw(a7,"$"+D.atj[h].b,new C.u(m,f+l),k,B.az.j(g),9999)
r.restore()}o=t+s*0.7
a7.bA(new C.u(p,o),new C.u(w-q,o),A.A3(B.dl,1.4))
A.qw(a7,"TOTAL  $"+i,new C.u(v.gbP().a,t+s*0.78),s*0.075,B.az,u*0.8)
w=a9>2.8
if(w){q=a9-2.8
h=B.k.D(q/0.3,0,1)
J.bA(r.save())
r.translate(v.gbP().a,t+s*0.55)
a7.j_(0,-0.3)
a7.bV(0,2-B.et.av(0,h))
a7.aC(C.by(C.cr(B.J,s*0.17,u*0.6),B.h8),A.A3(B.d2.j(h),3.5))
A.qw(a7,"PAID",B.J,s*0.11,B.d2.j(h),9999)
r.restore()
for(u=q*0.7,a6-=a4*0.05,t=a4*0.7,s=a4*0.03,r=a9*8,a1=0;a1<6;++a1){a2=B.k.F(u+a1*0.17,1)
A.f4b(a7,new C.u(a6+Math.sin(a1*2)*a4*0.1,t-a2*a4*0.5),s,r+a1)}}a6=w?(Math.sin(a9*6)+1)/2:0
A.A5(a7,new C.u(a3*0.2,a5),a4*0.66,a9,!0,0,1,B.bA,B.Kg,w,a6)},
hDt(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=g*0.94,e=B.e7.j(0.7)
$.W()
w=C.L()
w.r=e.gp(0)
d.aX(new C.a9(0,f,0+h,f+(g-f)),w)
w=h*0.6
e=g*0.62
v=new C.u(w,e)
u=Math.min(h*0.3,g*0.6)
t=C.by(C.cr(v,u*1.3,u*2.1),B.h8)
s=C.L()
s.r=B.hq.gp(0)
d.aC(t,s)
s=u*0.5
t=u*1.2
r=C.cr(v.aB(0,new C.u(s,0)),t,u)
q=C.L()
q.r=B.fW.gp(0)
d.aX(r,q)
s=C.cr(v.ae(0,new C.u(s,0)),t,u)
q=C.L()
q.r=B.fW.gp(0)
d.aX(s,q)
q=B.k.F(a1,2)
s=d.a
J.bA(s.save())
s.translate(w,e)
d.rK(0,Math.cos(q/2*3.141592653589793),1)
q=-u*0.6
r=C.L()
r.r=B.bJ.gp(0)
d.aX(new C.a9(0,q,0+u,q+t),r)
s.restore()
p=B.k.D(a1/3,0,1)
e-=u*0.6
r=e-g*0.28*p
d.bA(new C.u(w,e),new C.u(w,r),A.A3(B.fk,g*0.025))
for(e=p-0.4,t=g*0.05,q=g*0.04,o=0;o<5;++o){n=B.k.D(e-o*0.1,0,1)
m=o*1.3
l=Math.cos(m)
k=Math.sin(m)
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=B.bl.gp(0)
i=j.H()
s.drawCircle(w+l*g*0.14*n,r+k*g*0.08*n,t*n,i)
i.delete()
if(n>0.6)A.qw(d,"\u2665",new C.u(w+Math.cos(m)*g*0.14,r+Math.sin(m)*g*0.08),q,B.bA,9999)}e=a1*4
w=Math.sin(e)
A.A5(d,new C.u(h*0.2,f),g*0.66,a1,!1,Math.abs(Math.sin(e))*g*0.01,2,B.aD,D.qr,!1,(w+1)/2)},
hN3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=l*0.94,j=B.w.j(0.2)
$.W()
w=C.L()
w.r=j.gp(0)
d.aX(new C.a9(0,k,0+m,k+(l-k)),w)
v=B.k.bw(B.k.D(f/5.5,0,1)*9)+1
for(u=m*0.62,j=k-l*0.03,w=l*0.26,t=l*0.07,s=d.a,r=0;r<v;++r){q=j-r*l*0.055
p=C.cr(new C.u(u,q),t,w)
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.cr.gp(0)
n=o.H()
s.drawOval(C.c4(p),n)
n.delete()
q=C.cr(new C.u(u,q),t,w)
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.b=B.af
p.c=2
p.r=B.p8.gp(0)
p.d=B.bO
n=p.H()
s.drawOval(C.c4(q),n)
n.delete()}j=l*0.1
A.f4b(d,new C.u(u,j+B.k.F(f*1.6,1)*(k-t-v*l*0.055-j)),l*0.05,f*8)
j=l*0.08
A.qw(d,"$"+v*25,new C.u(u,j),j,B.dM,9999)
j=f*5
t=Math.sin(j)
A.A5(d,new C.u(m*0.25,k),l*0.66,f,!1,Math.abs(Math.sin(j))*l*0.012,1,B.cu,D.qr,!0,(t+1)/2)},
hFI(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a1.a,f=a1.b,e=f*0.94,d=B.w.j(0.2)
$.W()
w=C.L()
w.r=d.gp(0)
a0.aX(new C.a9(0,e,0+g,e+(f-e)),w)
for(d=a0.a,w=f*0.012,v=f*0.55,u=a2*4,t=a2*2,s=f*0.15,r=f*0.03,q=0;q<3;q=m){p=Math.sin(u+q*1.7)
J.bA(d.save())
d.translate(g*(0.5+0.14*q),v-Math.abs(p)*f*0.3)
d.rotate((t+q)*180/3.141592653589793,0,0)
p=C.by(C.cr(B.J,s,s),new C.aX(r,r))
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.c.gp(0)
n=o.H()
d.drawRRect(C.ew(p),n)
n.delete()
m=q+1
p=m*2
o=q===0
l=0
for(;;){if(!(l<p-(o?1:0)))break
k=l*2.1
j=Math.cos(k)
k=Math.sin(k)
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=B.bh.gp(0)
n=i.H()
d.drawCircle(j*f*0.04,k*f*0.04,w,n)
n.delete();++l}d.restore()}for(d=a2*0.6,v=f*0.25,u=f*0.06,q=0;q<5;++q){h=B.k.F(d+q*0.2,1)
A.qw(a0,"\u2605",new C.u(g*(0.45+q*0.1),v-h*f*0.2),u,B.dM.j(1-h),9999)}d=g*0.22
v=a2*6
u=Math.sin(v)
A.A5(a0,new C.u(d,e),f*0.66,a2,!0,Math.abs(Math.sin(v))*f*0.015,0,B.cb,D.qr,!0,(u+1)/2)
u=e-f*0.28
r=C.by(C.cr(new C.u(d,u),f*0.07,f*0.16),new C.aX(r,r))
$.W()
v=C.L()
v.r=B.cC.gp(0)
a0.aC(r,v)
v=C.L()
v.r=B.aE.gp(0)
a0.ag(new C.u(d+f*0.05,u),w,v)},
hH2(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a0.a,i=a0.b,h=i*0.94,g=B.w.j(0.2),f=$.W(),e=C.L()
e.r=g.gp(0)
d.aX(new C.a9(0,h,0+j,h+(i-h)),e)
e=j*0.42
g=i*0.18
w=i*0.08
v=C.by(new C.a9(e,g,e+j*0.5,g+i*0.5),new C.aX(w,w))
u=new C.aP(f.r,B.aq,null,null,C.a([],x.v))
u.E(new C.iS(v))
d.aN(u,A.A3(B.c.j(0.5),4))
t=new C.Rw(new C.vd(C.wF(u),!1,C.a([],x.T))).gK(0)
for(g=a1*0.18,f=t.a,w=t.b,s=f.e,r=i*0.016,q=d.a,p=0;p<10;++p){o=B.k.F(g+p/10,1)
f.jb()
n=s[w].b
n===$&&C.c()
n=n.a.length()
f.jb()
n=s[w].LM(o*n).a
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.dM.gp(0)
m=o.H()
q.drawCircle(n.a,n.b,r,m)
m.delete()}l=a1>1.5
g=i*0.43
k=new C.u(j*0.92,g)
if(l){f=B.dM.j(0.4+0.2*Math.sin(a1*8))
w=C.L()
w.r=f.gp(0)
w.z=B.yj
d.ag(k,i*0.2,w)}f=i*0.07
w=l?B.ob:B.bI
s=C.L()
s.r=w.gp(0)
d.ag(k,f,s)
g=C.by(C.cr(new C.u(e,g),i*0.2,i*0.1),B.hN)
s=C.L()
s.r=B.d2.gp(0)
d.aC(g,s)
A.qw(d,"+",new C.u(e,i*0.36),f,B.c,9999)
g=l?(Math.sin(a1*6)+1)/2:0
e=l?Math.abs(Math.sin(a1*6))*i*0.012:0
A.A5(d,new C.u(j*0.2,h),i*0.68,a1,!1,e,0,B.bT,D.qr,l,g)
if(l)A.aMH(d,new C.u(j*0.24,i*0.16),"It works!",f,(a1-1.5)/0.4,B.c)},
hGh(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a1.a,f=a1.b,e=f*0.94,d=B.w.j(0.2)
$.W()
w=C.L()
w.r=d.gp(0)
a0.aX(new C.a9(0,e,0+g,e+(f-e)),w)
v=B.k.D((a2-0.3)/0.4,0,1)
u=B.k.D((a2-1.8)/0.4,0,1)
w=f*0.2
d=f*0.065
A.aMH(a0,new C.u(g*0.3,w),"How do I enroll?",d,v,B.ob)
if(a2>1&&a2<1.8)for(t=g*0.72,s=f*0.38,r=a2*9,q=f*0.015,p=a0.a,o=0;o<3;++o){n=Math.sin(r+o)
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=B.c.gp(0)
l=m.H()
p.drawCircle(t+o*f*0.05,s-Math.abs(n)*f*0.02,q,l)
l.delete()}A.aMH(a0,new C.u(g*0.7,f*0.38),"Tap Civic Registry!",d,u,B.er)
A.A5(a0,new C.u(g*0.2,e),f*0.62,a2,!1,0,2,B.aE,D.qr,a2<1,0)
k=g*0.78
j=e-f*0.28
d=f*0.04
w=C.by(C.cr(new C.u(k,j),f*0.22,w),new C.aX(d,d))
t=C.L()
t.r=B.aK.gp(0)
a0.aC(w,t)
t=f*0.18
w=j-t
d=C.by(C.cr(new C.u(k,w),f*0.14,t),new C.aX(d,d))
t=C.L()
t.r=B.cm.gp(0)
a0.aC(d,t)
for(d=a0.a,t=a2*1.1,s=f*0.02,i=0;i<2;++i){h=D.vn[i]
r=B.k.F(t,1)>0.08?B.ba:B.hc
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=r.gp(0)
l=q.H()
d.drawCircle(k+h*f*0.04,w,s,l)
l.delete()}a0.bA(new C.u(k,j-f*0.25),new C.u(k,j-f*0.3),A.A3(B.ad,3))
d=C.L()
d.r=B.aE.gp(0)
a0.ag(new C.u(k,j-f*0.31),f*0.015,d)},
ffP:function ffP(d,e,f){this.a=d
this.b=e
this.c=f},
hXT(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new A.fx7(),c9=new A.fx9(),d0=new A.fxa(),d1=new A.fx8(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aC(w,d1.$3(new C.a9(w.a,w.b,w.c,w.d),B.bN,B.bI))
d3.bA(D.dWw,D.dUk,c9.$2(B.dy,1.4))
d3.bA(D.dUa,D.dU9,c9.$2(B.bv,2.4))
d3.bA(D.dUb,Q.aDV,c9.$2(B.bv,2.4))
if(c7){d2=c8.$1(B.ff.j(0.5))
d2.z=B.PV
d3.ag(D.dTV,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=B.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new C.u(-12+v*9,4+u*16),B.c.j(1-u),9)}}return!0
case"washer":d3.aC(d0.$4(-22,-26,44,50),d1.$3(D.aJH,B.aP,B.cm))
d3.ag(B.cI,16,c8.$1(B.bv))
d3.ag(B.cI,13,c8.$1(c7?B.aV.j(0.85):B.M))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(0,4)
d3.j_(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(B.ad,3).H()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=B.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(B.c.j(0.8*(1-u))).H()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ag(D.dWs,2.4,c8.$1(c7?B.bl:B.ak))
d3.ag(D.dX9,2.4,c8.$1(B.ak))
return!0
case"blender":d3.aC(d0.$5(-14,14,28,12,4),c8.$1(B.es))
d2=$.W().r
t=x.v
q=new C.aP(d2,B.aq,c6,c6,C.a([],t))
q.E(new C.b5(-16,-26))
q.E(new C.ap(16,-26))
q.E(new C.ap(12,14))
q.E(new C.ap(-12,14))
q.E(new C.bE())
d3.aN(q,c8.$1(B.ff.j(0.35)))
if(c7){d2=new C.aP(d2,B.aq,c6,c6,C.a([],t))
d2.E(new C.b5(-14,-10))
d2.E(new C.ap(14,-10))
d2.E(new C.ap(12,14))
d2.E(new C.ap(-12,14))
d2.E(new C.bE())
d3.aN(d2,c8.$1(B.aE.j(0.7)))}d3.aN(q,c9.$2(B.ad,1.6))
d2=d3.a
J.bA(d2.save())
d2.translate(0,10)
d3.j_(0,d4.y)
d3.bA(D.a3B,D.aEa,c9.$2(B.bX,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=B.k.F(s+v*0.33,1)
r=c8.$1(B.f9).H()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.aC(d0.$5(-10,-4,20,10,4),c8.$1(B.aJ))
d3.ag(B.ib,3,c8.$1(c7?B.bl:B.ak))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=D.av3[m]
r=c9.$2(B.bv,3).H()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bA(d2.save())
d2.translate(l,s)
r=c9.$2(B.c.j(c7?0.35:0.9),3).H()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=C.cr(B.J,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(B.c.j(0.25)).H()
d2.drawOval(C.c4(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
w.E(new C.b5(-24,-12))
w.E(new C.ap(10,-12))
w.E(new C.ap(10,2))
w.E(new C.ap(-2,2))
w.E(new C.ap(-6,22))
w.E(new C.ap(-16,22))
w.E(new C.ap(-14,2))
w.E(new C.ap(-24,2))
w.E(new C.bE())
d3.aN(w,d1.$3(D.exf,B.aM,B.dm))
d3.aX(D.ewF,c8.$1(B.e0))
d2=d3.a
J.bA(d2.save())
d2.translate(18,-5)
d3.j_(0,d4.y*2)
d3.bA(B.J,D.dUe,c9.$2(B.bX,2.4))
d3.bA(B.a3A,D.dUd,c9.$2(B.hD,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=B.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(B.dM.j(1-u)).H()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=B.k.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
d2.E(new C.b5(16,-6))
d2.E(new C.ap(52,-26))
d2.E(new C.ap(52,18))
d2.E(new C.ap(16,4))
d2.E(new C.bE())
d3.aN(d2,c8.$1(B.bJ.j(0.35*v)))}d3.aC(d0.$5(-26,-6,30,12,3),d1.$3(D.exl,B.bo,B.cC))
k=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
k.E(new C.b5(4,-6))
k.E(new C.ap(18,-12))
k.E(new C.ap(18,12))
k.E(new C.ap(4,6))
k.E(new C.bE())
d3.aN(k,c8.$1(B.es))
d3.ag(D.dUi,7,c8.$1(c7?B.c:B.e0))
return!0
case"neon":d3.aC(d0.$5(-30,-14,60,28,6),c8.$1(G.o9))
if(c7)j=d4.ax>0.5||B.o.F(B.k.bw(d5*17),3)!==0
else j=!1
i=j?B.bY:D.bcy
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(B.bY.j(0.35))
t.z=B.lc
d3.aC(d2,t)}d3.aC(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.dWC,i,17)
return!0
case"microwave":d3.aC(d0.$4(-30,-18,60,38),d1.$3(D.exr,B.bX,B.bo))
d2=d0.$5(-26,-14,38,30,3)
d3.aC(d2,c8.$1(c7?B.bJ.j(0.75):B.az))
if(c7){d2=d3.a
J.bA(d2.save())
d2.translate(-7,8)
d3.j_(0,d4.y*0.5)
d3.hY(C.cr(B.J,7,22),c8.$1(B.dm))
d2.restore()}d3.aC(d0.$5(15,-14,12,12,2),c8.$1(G.o9))
if(c7)d6.$5(d3,"0:"+B.a.aV(B.o.u(59-B.o.F(B.k.bw(d5),60)),2,"0"),D.dUj,B.bb,6.5)
d3.ag(D.dUv,4,c8.$1(B.e0))
return!0
case"doorbell":d3.aC(d0.$5(-16,-26,32,52,8),c8.$1(B.aK))
d3.ag(B.QJ,10,c8.$1(c7?B.cr:B.bv))
d2=d3.a
J.bA(d2.save())
d2.translate(0,-8)
d3.j_(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.dXb,B.c,16)
d2.restore()
d3.ag(B.jT,6,c8.$1(B.d6))
d3.ag(B.jT,6,c9.$2(B.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=C.bT(B.QJ,14+v*6+B.k.F(t,6))
r=c9.$2(B.cr.j(0.9-v*0.3),1.8).H()
d2.drawArc.apply(d2,[C.c4(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bA(D.dWB,D.dX7,c9.$2(B.bv,4))
d2=d3.a
J.bA(d2.save())
d3.j_(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aC(d0.$5(-24,-14,46,22,5),d1.$3(D.exg,B.bX,B.ak))
d3.ag(D.aDX,8,c8.$1(B.az))
d3.ag(D.aDX,4.5,c8.$1(c7?B.aV:B.cC))
d3.ag(D.dWz,2.2,c8.$1(c7&&B.o.F(B.k.bw(d5*1.6),2)===0?B.aE:B.k5))
d2.restore()
if(c7)d6.$5(d3,"REC",D.dWK,B.aE,9)
return!0
case"console":d3.aC(d0.$5(-28,-22,56,44,8),d1.$3(D.exo,B.j1,B.f5))
d3.aC(d0.$5(-20,-17,40,22,3),c8.$1(B.dJ))
if(c7){d2=d5*2.3
d3.ag(new C.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(B.c))
t=-9+Math.sin(d2+0.4)*6
d3.aX(new C.a9(-18,t,-15.6,t+8),c8.$1(B.bb))
d2=-9+Math.sin(d2-0.4)*6
d3.aX(new C.a9(15.6,d2,18,d2+8),c8.$1(B.bY))}d3.ag(D.dWv,4,c8.$1(B.aW))
d3.ag(D.dUf,2.4,c8.$1(B.aE))
d3.ag(D.dUs,2.4,c8.$1(B.bl))
return!0
case"heartmon":d3.aC(d0.$5(-30,-22,60,44,6),c8.$1(B.az))
d3.aC(d0.$5(-26,-18,52,28,3),c8.$1(B.dJ))
if(c7){d2=$.W()
t=C.a([],x.v)
h=new C.aP(d2.r,B.aq,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=B.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new C.b5(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new C.ap(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aN(h,c9.$2(B.bb,1.8))
d6.$5(d3,"72",D.dUg,B.fU,11)
d2=d5*9
d6.$5(d3,"\u2665",D.dWO,B.fU.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ag(D.dWE,3,c8.$1(c7?B.bl:B.bv))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aC(d2,c8.$1(B.cu.j(c7?0.5:0.3)))
d3.aC(d0.$5(-26,-20,52,40,4),c9.$2(B.ad,1.6))
d3.aX(D.exi,c8.$1(D.JO))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bA(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.rK(0,-1,1)
d3.hY(C.cr(B.J,8,14),c8.$1(B.cy))
d2=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,0))
d2.E(new C.ap(-12,-4))
d2.E(new C.ap(-12,4))
d2.E(new C.bE())
d3.aN(d2,c8.$1(B.cb))
d3.ag(D.dUX,1.2,c8.$1(B.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=B.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=B.o.F(v,2)
r=c9.$2(B.ad,1).H()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.W().r
t=x.v
e=new C.aP(d2,B.aq,c6,c6,C.a([],t))
e.E(new C.b5(-9,22))
e.E(new C.ap(-5,-16))
e.E(new C.ap(5,-16))
e.E(new C.ap(9,22))
e.E(new C.bE())
d3.aN(e,d1.$3(D.exM,B.c,B.bL))
d3.aX(D.exL,c8.$1(c7?B.dM:B.bv))
s=new C.aP(d2,B.aq,c6,c6,C.a([],t))
s.E(new C.b5(-7,-22))
s.E(new C.ap(0,-29))
s.E(new C.ap(7,-22))
s.E(new C.bE())
d3.aN(s,c8.$1(B.eF))
if(c7){d=Math.sin(d4.y*0.3)
d2=new C.aP(d2,B.aq,c6,c6,C.a([],t))
d2.E(new C.b5(0,-19))
t=d*34
d2.E(new C.ap(t,-26))
d2.E(new C.ap(t,-12))
d2.E(new C.bE())
d3.aN(d2,c8.$1(B.dM.j(0.45)))
d2=c8.$1(B.dM.j(0.35))
d2.z=B.PV
d3.ag(D.dTW,14,d2)}return!0
case"discoball":d3.bA(D.dU0,F.aDT,c9.$2(B.e0,1.4))
d3.ag(B.J,16,d1.$3(D.ex3,B.aP,B.ak))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(B.dl,0.7).H()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(B.dl,0.7).H()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+B.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.cWU[B.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).H()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.aC(d0.$5(-14,-4,28,24,5),d1.$3(D.ex1,B.cm,B.ak))
d3.aC(d0.$5(-12,-26,24,20,5),d1.$3(D.ewV,B.aK,B.bI))
d3.bA(D.dU_,D.dU1,c9.$2(B.bv,1.6))
d3.ag(D.dU2,2.2,c8.$1(c7?B.aE:B.bv))
a1=c7&&B.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=D.av5[m]
if(c7)t=a1?B.ba:B.hc
else t=B.cC
r=c8.$1(t).H()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bA(d2.save())
d2.translate(14,0)
d3.j_(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bA(B.J,D.a3x,c9.$2(B.bI,4))
d2.restore()
d3.bA(D.dWo,D.dWI,c9.$2(B.bI,4))
d3.aX(D.exK,c8.$1(c7?B.ba.j(0.7):B.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.av1[m]+1,d2,10,14,2)
p=C.ar(B.bJ,B.dm,a2)
p.toString
r=c8.$1(p).H()
t.drawRRect(C.ew(s),r)
r.delete()}d3.aC(d0.$5(-24,-6,48,26,8),d1.$3(D.exh,B.bX,B.bo))
for(m=0;m<2;++m){l=D.av1[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?B.fA:B.az).H()
t.drawRRect(C.ew(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(B.cy.j(0.5))
s.z=I.mj
r=s.H()
t.drawRRect(C.ew(d2),r)
r.delete()}}d3.bA(D.dUz,D.dUQ,c9.$2(B.az,3))
return!0
case"ledstrip":d3.aC(d0.$5(-34,-4,68,10,4),c8.$1(B.cC))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=B.k.F(t+v*40,360)
i=c7?new H.m9(1,a3,0.8,1).im():B.es
if(c7){s=c8.$1(i.j(0.45))
s.z=I.mj
r=s.H()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).H()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.aC(d0.$5(-40,-2,6,6,1),c8.$1(B.e0))
return!0
case"pump":d3.aC(d0.$5(-16,-2,32,22,6),d1.$3(D.ex6,B.cu,B.JW))
d3.ag(D.dWP,8,c8.$1(B.qn))
d2=d3.a
J.bA(d2.save())
d2.translate(-2,9)
d3.j_(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(B.ff,2.4).H()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
t.E(new C.b5(16,6))
t.E(new C.ap(26,6))
t.E(new C.ap(26,-20))
t.E(new C.ap(10,-20))
d3.aN(t,c9.$2(B.bI,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=B.k.F(t+v*0.2,1)
r=c8.$1(B.fZ).H()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ag(D.dVn,3.2,c8.$1(B.fZ.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bA(d2.save())
d3.j_(0,-0.15)
d3.aC(d0.$5(-26,-14,40,22,10),d1.$3(D.exj,B.ji,B.rN))
d3.aC(d0.$5(14,-10,12,14,3),c8.$1(B.cC))
d3.aC(d0.$5(-10,6,12,22,4),c8.$1(B.es))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=B.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(B.c.j(1-u),1.8).H()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(B.cy.j(0.4))
d2.z=I.mj
d3.ag(D.dUu,8,d2)}return!0
case"headphones":d3.ff(C.cr(B.dz,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(B.bv,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=D.av2[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new C.a9(s,0,s+14,20),B.bz,B.p6).H()
d2.drawRRect(C.ew(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=C.bT(new C.u(l,10),10+v*5+B.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(B.ex.j(0.9-v*0.3),1.6).H()
d2.drawArc.apply(d2,[C.c4(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new C.u(-4,-8-B.k.F(d5*14,8)),B.k2,12)
return!0
case"smartwatch":d3.aC(d0.$5(-8,-30,16,14,3),c8.$1(B.cC))
d3.aC(d0.$5(-8,14,16,14,3),c8.$1(B.cC))
d3.aC(d0.$5(-14,-17,28,32,8),d1.$3(D.ex_,B.e0,B.es))
d3.aC(d0.$5(-11,-14,22,26,6),c8.$1(B.dJ))
if(c7){a4=new C.Q(Date.now(),0,!1)
d6.$5(d3,B.a.aV(B.o.u(C.dk(a4)),2,"0")+":"+B.a.aV(B.o.u(C.h0(a4)),2,"0"),D.dU6,B.bb,9.5)
g=(Math.sin(d5*9)+1)/2
d2=C.ar(B.Dn,B.fU,g)
d2.toString
d6.$5(d3,"\u2665",new C.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+B.o.F(B.k.bw(d5*2),6)),B.dz,B.c,7)}return!0
case"tablet":d3.aC(d0.$5(-30,-22,60,44,6),c8.$1(G.o9))
d3.aC(d0.$5(-30,-22,60,44,6),c9.$2(B.bI,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ew(a5),$.pc(),!0)
d2.translate(-27,-19)
A.Kj(d3,D.eCT,d5,c6)
d2.restore()}else d3.aC(a5,c8.$1(D.uB))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.aC(a6,d1.$3(new C.a9(a6.a,a6.b,a6.c,a6.d),B.dW,B.dn))
d3.aC(a6,c9.$2(B.b7,1.2))
d3.ag(D.aEh,9,c8.$1(B.az))
d3.ag(D.aEh,6,c9.$2(B.dm,2))
d3.aC(d0.$5(4,-2,14,10,2),c8.$1(B.az))
d3.aC(d0.$5(-22,-19,44,12,2),c8.$1(B.dJ))
d2=B.k.aa(d4.db,1)
t=B.k.aa(c7?d4.dx:d4.e,1)
s=c7?B.bb:B.ak
d6.$5(d3,d2+"\u2192"+t+"V",D.dVr,s,8.2)
d3.ag(D.dUl,2.4,c8.$1(c7?B.bl:B.aJ))
d6.$5(d3,"IN",D.dWJ,B.ad,6)
d6.$5(d3,"OUT",D.dVf,B.ad,6)
return!0
case"regulator":a7=c7?B.k.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=C.ar(B.bI,B.aE,a7)
t.toString
d3.aC(d2,c8.$1(t))
d3.ag(D.dTX,3,c8.$1(B.aJ))
d3.aC(d0.$5(-12,-4,24,18,3),d1.$3(D.ewW,B.es,B.hz))
d6.$5(d3,"7805",D.a3B,B.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.d19[m]-1
r=c8.$1(B.e2).H()
d2.drawRect(C.c4(new C.a9(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=B.k.F(t+v*0.33,1)
r=c8.$1(B.c.j(0.5*(1-u))).H()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.dXa,B.bh,9)
return!0
case"diode":d3.bA(D.aEl,D.aE5,c9.$2(B.e2,2.4))
d3.aC(d0.$5(-14,-7,28,14,6),c8.$1(B.aL.j(0.85)))
d3.aX(D.ewL,c8.$1(B.bh))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(B.dM.j(0.4))
t.z=B.ja
d3.aC(d2,t)}d2=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,-4))
d2.E(new C.ap(-8,4))
d2.E(new C.ap(-1,0))
d2.E(new C.bE())
d3.aN(d2,c8.$1(B.aW))
d6.$5(d3,"one way",D.dWx,B.aA,8)
return!0
case"ldr":d3.bA(D.aEl,D.a3B,c9.$2(B.e2,2.4))
d3.bA(D.aEa,D.aE5,c9.$2(B.e2,2.4))
d3.ag(B.J,12,c8.$1(B.dm))
d3.ag(B.J,12,c9.$2(B.rX,1.6))
d2=$.W()
t=C.a([],x.v)
a8=new C.aP(d2.r,B.aq,c6,c6,t)
a8.E(new C.b5(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new C.ap(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aN(a8,c9.$2(B.bJ,1.4))
d2=C.ar(B.bv,B.dM,d4.f)
d2.toString
d6.$5(d3,"\u2600",new C.u(-6,-26),d2,14)
d6.$5(d3,""+B.k.V(20+980*(1-d4.f))+"\u03a9",D.dWp,B.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=B.eg
break A}if("sonytv"===d2){t=B.qg
break A}if("appletv"===d2){t=B.e2
break A}t=D.aaE
break A}a9=d2==="lgtv"||d2==="appletv"
d3.aC(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bA(p.save())
p.clipRRect(C.ew(a5),$.pc(),!0)
p.translate(t,s)
A.fRB(d3,new C.at(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ag(D.dUR,1.6,c8.$1(B.bb))}else{d3.aC(a5,c8.$1(D.uB))
p=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
p.E(new C.b5(t,s))
p.E(new C.ap(t+24,s))
p.E(new C.ap(t,s+22))
p.E(new C.bE())
d3.aN(p,c8.$1(B.c.j(0.05)))}switch(d2){case"lgtv":d3.aC(d0.$5(-22,19,44,3,1.5),c8.$1(B.e0))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=D.vn[m]
s=$.W()
p=C.a([],t)
s=new C.aP(s.r,B.aq,c6,c6,p)
p.push(new C.b5(l*30,20))
p.push(new C.ap(l*22,20))
p.push(new C.ap(l*26,26))
p.push(new C.bE())
r=c8.$1(B.e0).H()
p=s.gbI().a.snapshot()
d2.drawPath((s.e=new C.cE(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.dW2,B.bX,5.5)
break
case"appletv":d2=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
d2.E(new C.b5(-8,18))
d2.E(new C.ap(8,18))
d2.E(new C.ap(12,25))
d2.E(new C.ap(-12,25))
d2.E(new C.bE())
d3.aN(d2,c8.$1(D.Vq))
d6.$5(d3,"Apple TV",D.dVs,B.bv,4.8)
break
default:d3.aC(d0.$5(-34,19,68,7,3),c8.$1(D.bbe))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(B.dl,0.6).H()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.dX6,D.JO,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.lE.h(0,d2)
b1=b0.b===D.vF
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
b7=C.ar(b6,B.c,0.35)
b7.toString
d3.aC(w,d1.$3(new C.a9(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bA(t.save())
t.clipRRect(C.ew(a5),$.pc(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
A.Kj(d3,new C.at(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.aC(a5,c8.$1(D.uB))
if(b1){t=a5.b
s=a5.d
d3.bA(new C.u(0,t),new C.u(0,s),c9.$2(B.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aC(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(B.w))
else{d2=b1?b2/2-7:0
d3.ag(new C.u(d2,a5.b+3),1.3,c8.$1(B.w))}return!0
case"ereader":d3.aC(d0.$5(-17,-28,34,52,4),c8.$1(B.es))
d3.aC(d0.$5(-14.5,-25.5,29,45,2),c8.$1(B.bX))
if(c7){d6.$5(d3,"NGMY",D.dXd,B.az,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=B.o.F(v,4)===3?14:22
r=c8.$1(B.bo).H()
d2.drawRect(C.c4(new C.a9(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ag(B.aDR,1.6,c8.$1(B.az))}return!0
case"laptop":d3.aC(d0.$5(-30,-28,60,42,4),d1.$3(D.exs,B.cm,B.bo))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ew(b8),$.pc(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
A.Kj(d3,new C.at(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.aC(b8,c8.$1(D.uB))
d2=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
d2.E(new C.b5(-38,16))
d2.E(new C.ap(38,16))
d2.E(new C.ap(34,21))
d2.E(new C.ap(-34,21))
d2.E(new C.bE())
d3.aN(d2,c8.$1(D.Vq))
d3.aC(d0.$5(-7,16,14,2,1),c8.$1(B.bo))
return!0
case"imac":d3.aC(d0.$5(-32,-28,64,46,5),d1.$3(D.exw,B.bN,B.cm))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ew(b9),$.pc(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
A.Kj(d3,new C.at(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.aC(b9,c8.$1(D.uB))
d3.ag(D.aDM,2,c8.$1(B.bI))
d2=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
d2.E(new C.b5(-6,18))
d2.E(new C.ap(6,18))
d2.E(new C.ap(10,26))
d2.E(new C.ap(-10,26))
d2.E(new C.bE())
d3.aN(d2,c8.$1(D.Vq))
return!0
case"monitor":d3.aC(d0.$5(-34,-28,68,40,3),c8.$1(B.eg))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ew(c0),$.pc(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
A.Kj(d3,new C.at(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.aC(c0,c8.$1(D.uB))
d3.aX(D.exC,c8.$1(B.bo))
d3.aC(d0.$5(-14,22,28,3.5,1.5),c8.$1(B.e0))
return!0
case"projector":if(c7){d2=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
d2.E(new C.b5(14,4))
d2.E(new C.ap(-32,-42))
d2.E(new C.ap(34,-42))
d2.E(new C.bE())
d3.aN(d2,c8.$1(B.dM.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ew(c1),$.pc(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
A.Kj(d3,new C.at(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.aC(d0.$5(-26,-4,52,24,6),d1.$3(D.exk,B.iH,B.e0))
d3.ag(D.aDW,7,c8.$1(B.az))
d3.ag(D.aDW,4,c8.$1(c7?B.dM:B.cC))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(B.dl,1).H()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.aC(d0.$5(-34,-10,68,32,12),c8.$1(B.az))
c2=d0.$5(-30,-20,60,28,8)
d3.aC(c2,c8.$1(G.o9))
d3.aC(c2,c9.$2(B.bv,1.2))
if(c7){c3=new C.aP($.W().r,B.aq,c6,c6,C.a([],x.v))
c3.E(new C.b5(-26,4))
c3.E(new C.cR(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new C.ap(22,-16))
d3.aN(c3,c9.$2(B.aV,2.2))
d2=B.k.F(d5*6,48)
d3.ag(new C.u(-26+d2,4-d2*0.1),2.4,c8.$1(B.bb))
d6.$5(d3,""+(88+B.o.F(B.k.bw(d5*2),5)),D.dVo,B.c,10)
d6.$5(d3,"km/h",D.dVl,B.aA,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aC(c4,d1.$3(new C.a9(c4.a,c4.b,c4.c,c4.d),B.e0,B.es))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bA(d2.save())
d2.clipRRect(C.ew(c5),$.pc(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
A.Kj(d3,new C.at(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(B.bz.j(0.2))
d2.z=B.lc
d3.ag(B.J,26,d2)}else d3.aC(c5,c8.$1(B.M))
d3.bA(D.dWT,D.dWY,c9.$2(B.bo,4))
d3.bA(D.dUS,D.dV_,c9.$2(B.bo,4))
return!0}return!1},
fx7:function fx7(){},
fx9:function fx9(){},
fxa:function fxa(){},
fx8:function fx8(){},
fUc(d,e,f,g){return new A.ah8(d,g,f,e)},
EQ(d,e,f){return new A.b8H(d,e,f)},
ah8:function ah8(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ah9:function ah9(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.fh$=h
_.kM$=i
_.fL$=j
_.fi$=k
_.bq$=l
_.a7$=m
_.c=_.a=null},
bEB:function bEB(d,e){this.a=d
this.b=e},
bEC:function bEC(d){this.a=d},
bEA:function bEA(d){this.a=d},
bED:function bED(){},
bEE:function bEE(d){this.a=d},
bEF:function bEF(d,e,f){this.a=d
this.b=e
this.c=f},
bEz:function bEz(d,e){this.a=d
this.b=e},
bEx:function bEx(d,e){this.a=d
this.b=e},
bEy:function bEy(d,e,f){this.a=d
this.b=e
this.c=f},
bEr:function bEr(d,e){this.a=d
this.b=e},
bEs:function bEs(){},
bEt:function bEt(d,e){this.a=d
this.b=e},
bEu:function bEu(d,e){this.a=d
this.b=e},
bEv:function bEv(d){this.a=d},
bEw:function bEw(d){this.a=d},
bEU:function bEU(d){this.a=d},
bEV:function bEV(){},
bE4:function bE4(){},
bEW:function bEW(d,e){this.a=d
this.b=e},
bET:function bET(d,e,f){this.a=d
this.b=e
this.c=f},
bEO:function bEO(d){this.a=d},
bEL:function bEL(d,e,f){this.a=d
this.b=e
this.c=f},
bEM:function bEM(d,e){this.a=d
this.b=e},
bEP:function bEP(d){this.a=d},
bEJ:function bEJ(d,e){this.a=d
this.b=e},
bEK:function bEK(d,e){this.a=d
this.b=e},
bEN:function bEN(d){this.a=d},
bEQ:function bEQ(d){this.a=d},
bEH:function bEH(d,e){this.a=d
this.b=e},
bEI:function bEI(d,e){this.a=d
this.b=e},
bER:function bER(d){this.a=d},
bEG:function bEG(d){this.a=d},
bES:function bES(d){this.a=d},
bE5:function bE5(d,e){this.a=d
this.b=e},
bEo:function bEo(d,e){this.a=d
this.b=e},
bEq:function bEq(d,e){this.a=d
this.b=e},
bEp:function bEp(d,e){this.a=d
this.b=e},
bEb:function bEb(d,e){this.a=d
this.b=e},
bEc:function bEc(d){this.a=d},
bEa:function bEa(d){this.a=d},
bEd:function bEd(d,e,f){this.a=d
this.b=e
this.c=f},
bE9:function bE9(d,e){this.a=d
this.b=e},
bEg:function bEg(d,e){this.a=d
this.b=e},
bEh:function bEh(d,e){this.a=d
this.b=e},
bEi:function bEi(d,e){this.a=d
this.b=e},
bEj:function bEj(d,e,f){this.a=d
this.b=e
this.c=f},
bE8:function bE8(d,e){this.a=d
this.b=e},
bEk:function bEk(d,e,f){this.a=d
this.b=e
this.c=f},
bE7:function bE7(d,e){this.a=d
this.b=e},
bEl:function bEl(d,e,f){this.a=d
this.b=e
this.c=f},
bE6:function bE6(d,e){this.a=d
this.b=e},
bEm:function bEm(d){this.a=d},
bEn:function bEn(d){this.a=d},
bEe:function bEe(d){this.a=d},
bEf:function bEf(d){this.a=d},
b8H:function b8H(d,e,f){this.a=d
this.b=e
this.c=f},
f7d:function f7d(){},
f7e:function f7e(){},
f7f:function f7f(){},
f70:function f70(){},
f7g:function f7g(){},
f7_:function f7_(){},
f7h:function f7h(){},
f74:function f74(){},
f6Z:function f6Z(){},
f75:function f75(){},
f6Y:function f6Y(){},
f76:function f76(){},
f6X:function f6X(){},
f77:function f77(){},
f6V:function f6V(){},
f6W:function f6W(){},
f78:function f78(){},
f6T:function f6T(){},
f6U:function f6U(){},
f79:function f79(){},
f6S:function f6S(){},
TT:function TT(d){this.a=d},
aBt:function aBt(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dNH:function dNH(d,e){this.a=d
this.b=e},
dNQ:function dNQ(d){this.a=d},
dNR:function dNR(){},
dNS:function dNS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dNT:function dNT(){},
dNG:function dNG(d){this.a=d},
dNF:function dNF(d,e,f){this.a=d
this.b=e
this.c=f},
dNE:function dNE(d,e){this.a=d
this.b=e},
dNC:function dNC(d){this.a=d},
dND:function dND(){},
dNP:function dNP(d){this.a=d},
dNO:function dNO(d){this.a=d},
dNM:function dNM(d,e){this.a=d
this.b=e},
dNK:function dNK(d){this.a=d},
dNL:function dNL(){},
dNN:function dNN(d,e,f){this.a=d
this.b=e
this.c=f},
dNI:function dNI(d,e){this.a=d
this.b=e},
dNJ:function dNJ(){},
dNV:function dNV(d){this.a=d},
dNW:function dNW(d){this.a=d},
dNU:function dNU(){},
dNX:function dNX(d,e){this.a=d
this.b=e},
dNY:function dNY(d){this.a=d},
dNZ:function dNZ(d){this.a=d},
avz:function avz(d,e){this.c=d
this.a=e},
b6T:function b6T(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
cyj:function cyj(d){this.a=d},
b6S:function b6S(d,e){this.b=d
this.a=e},
cyi:function cyi(d){this.a=d},
avS:function avS(){},
avT:function avT(){},
aHR:function aHR(){},
buE:function buE(){},
hXU(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=C.bT(B.vx,23)
$.W()
b8=C.L()
b8.r=B.az.gp(0)
b9.ag(B.vx,25,b8)
b8=C.L()
b8.sau(D.e3Y.aw(0,v))
b9.ag(B.vx,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.bh.gp(0)
o.c=B.o.F(u,5)===0?1.8:1
n=o.H()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+B.k.D(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=C.L()
r.r=B.bL.gp(0)
r.c=2
r.d=B.bO
b9.bA(B.vx,new C.u(b8*18,s*18-2),r)
r=C.L()
r.r=B.bh.gp(0)
b9.ag(B.vx,3,r)
c2.$5(b9,w?"V":"A",D.dX0,B.bh,12)
c2.$5(b9,w?B.k.aa(m,1)+" V":""+B.k.V(m*1000)+" mA",D.dWu,B.az,9.5)
return!0
case"fan":b8=C.by(D.ewS,B.i1)
$.W()
s=C.L()
s.r=B.bv.gp(0)
b9.aC(b8,s)
s=C.L()
s.r=B.ak.gp(0)
b9.aX(D.exD,s)
s=C.L()
s.r=B.M.j(0.6).gp(0)
b9.ag(D.vy,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bA(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=C.cr(B.aDQ,18,10)
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.fZ.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.H()
b8.drawOval(C.c4(s),n)
n.delete()
b8.restore()}b8=C.L()
b8.r=B.bj.gp(0)
b9.ag(D.vy,4,b8)
b8=C.L()
b8.b=B.af
b8.c=2
b8.r=B.cm.gp(0)
b9.ag(D.vy,22,b8)
b8=C.L()
b8.b=B.af
b8.c=0.8
b8.r=B.j2.gp(0)
b9.ag(D.vy,14,b8)
return!0
case"speaker":l=C.by(D.aJH,B.u_)
$.W()
b8=C.L()
b8.sau(D.am5.aw(0,new C.a9(l.a,l.b,l.c,l.d)))
b9.aC(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=C.L()
b8.sau(D.e4j.aw(0,C.bT(B.cw,15)))
b9.ag(B.cw,14+k,b8)
b8=C.L()
b8.r=B.e0.gp(0)
b9.ag(B.cw,5,b8)
b8=C.L()
b8.r=B.bo.gp(0)
b9.ag(D.aDS,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=C.bT(D.dUy,6+u*6+B.k.F(b8,6))
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.c=1.8
q.r=B.bY.j(0.9-u*0.2).gp(0)
n=q.H()
s.drawArc.apply(s,[C.c4(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=C.by(D.exv,B.u_)
$.W()
b8=C.L()
b8.sau(D.bO6.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aC(j,b8)
b8=C.by(D.aJJ,B.hN)
s=C.L()
s.r=B.hz.gp(0)
b9.aC(b8,s)
if(b7){i=new C.Q(Date.now(),0,!1)
h=C.Bf(i)<500?":":" "
g=B.a.aV(B.o.u(C.dk(i)),2,"0")
f=B.a.aV(B.o.u(C.h0(i)),2,"0")
b8=C.L()
b8.r=B.bb.j(0.12).gp(0)
b9.aX(D.aJJ,b8)
c2.$5(b9,g+h+f,D.dWM,B.bb,21)}b8=C.L()
b8.r=B.cm.gp(0)
b9.ag(D.dWL,2.4,b8)
b8=C.L()
b8.r=B.cm.gp(0)
b9.ag(D.dUC,2.4,b8)
return!0
case"calculator":j=C.by(D.exb,B.h8)
$.W()
b8=C.L()
b8.sau(D.bNR.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aC(j,b8)
b8=C.by(D.ex5,B.h7)
s=C.L()
s.r=(b7?B.VB:D.bd2).gp(0)
b9.aC(b8,s)
if(b7)c2.$5(b9,"3.14159",D.dWt,B.Uz,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=C.by(new C.a9(q,s,q+6,r),B.Rb)
$.W()
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=(d===3?B.cb:B.bX).gp(0)
n=p.H()
b8.drawRRect(C.ew(q),n)
n.delete()}return!0
case"phone":j=C.by(D.ex2,B.h8)
$.W()
b8=C.L()
b8.r=G.o9.gp(0)
b9.aC(j,b8)
b8=C.L()
b8.b=B.af
b8.c=1.9
b8.r=D.adL.gp(0)
b9.aC(j,b8)
a0=C.by(D.ewU,B.i1)
if(b7){b8=C.L()
b8.sau(D.bPn.aw(0,new C.a9(a0.a,a0.b,a0.c,a0.d)))
b9.aC(a0,b8)
b8=b9.a
J.bA(b8.save())
b8.clipRRect(C.ew(a0),$.pc(),!0)
b8.translate(-12,-25)
A.Kj(b9,D.eCu,c1,b6)
b8.restore()
a1=B.k.F(c1*0.12,1)
b8=C.by(D.ewR,B.h7)
s=C.L()
s.r=B.aW.gp(0)
b9.aC(b8,s)
s=C.L()
s.r=B.bb.gp(0)
b9.aX(new C.a9(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+B.k.V(a1*100)+"%",D.dVL,B.c,6)}else{b8=C.L()
b8.r=D.uB.gp(0)
b9.aC(a0,b8)}b8=C.by(D.exN,D.e4r)
s=C.L()
s.r=B.w.gp(0)
b9.aC(b8,s)
return!0
case"router":j=C.by(D.exu,B.r8)
$.W()
b8=C.L()
b8.sau(D.bOm.aw(0,new C.a9(j.a,j.b,j.c,j.d)))
b9.aC(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=D.av2[a2]
s=a3<0?-4:4
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.cC.gp(0)
r.c=4
r.d=B.bO
n=r.H()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=B.o.F(B.k.bw(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
s.r=(a4?B.bl:B.aJ).gp(0)
n=s.H()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=C.bT(D.vy,8+u*6+B.k.F(s,6))
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.c=1.8
q.r=B.hr.j(0.9-u*0.2).gp(0)
n=q.H()
b8.drawArc.apply(b8,[C.c4(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=C.by(D.exa,B.i1)
s=$.W()
r=C.L()
r.r=B.es.gp(0)
b9.aC(b8,r)
if(b7){b8=C.L()
b8.r=B.aE.j(0.5*a5).gp(0)
b8.z=B.yj
b9.ag(B.vx,34,b8)}a6=new C.aP(s.r,B.aq,b6,b6,C.a([],x.v))
a6.E(new C.b5(-16,12))
a6.E(new C.ap(-16,-2))
a6.E(new C.cR(0,-30,16,-2))
a6.E(new C.ap(16,12))
a6.E(new C.bE())
b8=C.L()
b8.r=C.ar(B.eF,D.b5X,a5).gp(0)
b9.aN(a6,b8)
b8=C.L()
b8.b=B.af
b8.c=1.4
b8.r=B.bZ.gp(0)
b9.aN(a6,b8)
if(b7){b8=b9.a
J.bA(b8.save())
b8.translate(0,-2)
b9.j_(0,c1*7)
s=C.L()
s.r=B.c.j(0.7).gp(0)
s.c=3
b9.bA(B.J,D.aDS,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bA(b8.save())
b8.translate(0,a7)
s=$.W().r
r=x.v
j=new C.aP(s,B.aq,b6,b6,C.a([],r))
j.E(new C.b5(-28,8))
j.E(new C.ap(-28,-2))
j.E(new C.ap(-16,-4))
j.E(new C.ap(-10,-16))
j.E(new C.ap(10,-16))
j.E(new C.ap(18,-4))
j.E(new C.ap(28,-2))
j.E(new C.ap(28,8))
j.E(new C.bE())
q=C.L()
q.sau(D.bMw.aw(0,D.exn))
b9.aN(j,q)
q=new C.aP(s,B.aq,b6,b6,C.a([],r))
q.E(new C.b5(-8,-4))
q.E(new C.ap(-4,-13))
q.E(new C.ap(4,-13))
q.E(new C.ap(4,-4))
q.E(new C.bE())
p=C.L()
p.r=B.ff.gp(0)
b9.aN(q,p)
r=new C.aP(s,B.aq,b6,b6,C.a([],r))
r.E(new C.b5(8,-4))
r.E(new C.ap(8,-13))
r.E(new C.ap(11,-13))
r.E(new C.ap(15,-4))
r.E(new C.bE())
s=C.L()
s.r=B.ff.gp(0)
b9.aN(r,s)
for(a2=0;a2<2;++a2){a3=D.d14[a2]
s=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
s.r=B.az.gp(0)
n=s.H()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bA(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.bX.gp(0)
q.c=1.6
n=q.H()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=B.k.F(s+u*8,14)
q=-4+u*5
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.aA.gp(0)
p.c=1.6
n=p.H()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.W().r
s=x.v
j=new C.aP(b8,B.aq,b6,b6,C.a([],s))
j.E(new C.b5(-18,20))
j.E(new C.ap(-14,-12))
j.E(new C.cR(0,-20,14,-12))
j.E(new C.ap(18,20))
j.E(new C.bE())
r=C.L()
r.sau(D.bNy.aw(0,D.ex9))
b9.aN(j,r)
r=new C.aP(b8,B.aq,b6,b6,C.a([],s))
r.E(new C.b5(14,-10))
r.E(new C.ap(30,-22))
r.E(new C.ap(32,-18))
r.E(new C.ap(16,-4))
r.E(new C.bE())
q=C.L()
q.r=B.e2.gp(0)
b9.aN(r,q)
s=new C.aP(b8,B.aq,b6,b6,C.a([],s))
s.E(new C.b5(-14,-8))
s.E(new C.cR(-34,-6,-18,12))
b8=C.L()
b8.b=B.af
b8.c=5
b8.r=B.az.gp(0)
b9.aN(s,b8)
b8=C.L()
if(b7){s=C.ar(B.cy,B.uA,(Math.sin(c1*6)+1)/2)
s.toString}else s=B.es
b8.r=s.gp(0)
b9.aX(D.ex8,b8)
if(b7){b8=C.L()
b8.r=B.cy.j(0.3).gp(0)
b8.z=B.lc
b9.ag(B.aDO,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=B.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.6*(1-a8)).gp(0)
n=q.H()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=C.L()
b8.r=B.az.gp(0)
b9.ag(D.dTU,3,b8)
return!0
case"lamp":if(b7){u=B.k.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new C.aP($.W().r,B.aq,b6,b6,C.a([],x.v))
b8.E(new C.b5(-10,-14))
b8.E(new C.ap(-30,24))
b8.E(new C.ap(10,24))
b8.E(new C.ap(8,-14))
b8.E(new C.bE())
s=C.L()
s.r=B.dM.j(0.28*u).gp(0)
b9.aN(b8,s)
s=C.L()
s.r=B.dM.j(0.5*u).gp(0)
s.z=U.GD
b9.ag(D.dWQ,24,s)}b8=C.by(D.exJ,B.i1)
s=$.W()
r=C.L()
r.r=B.es.gp(0)
b9.aC(b8,r)
r=C.L()
r.r=B.e0.gp(0)
r.c=3
r.d=B.bO
b9.bA(D.dU7,D.aDY,r)
r=C.L()
r.r=B.e0.gp(0)
r.c=3
r.d=B.bO
b9.bA(D.aDY,D.dWR,r)
a9=new C.aP(s.r,B.aq,b6,b6,C.a([],x.v))
a9.E(new C.b5(-14,-16))
a9.E(new C.ap(6,-26))
a9.E(new C.ap(10,-12))
a9.E(new C.ap(-10,-6))
a9.E(new C.bE())
s=C.L()
s.r=(b7?B.aM:B.jH).gp(0)
b9.aN(a9,s)
b8=C.L()
b8.r=(b7?B.c:B.bo).gp(0)
b9.ag(D.dWS,4,b8)
return!0
case"lights":b8=$.W().r
s=x.v
b0=new C.aP(b8,B.aq,b6,b6,C.a([],s))
b0.E(new C.b5(-34,-6))
b0.E(new C.cR(0,22,34,-6))
r=C.L()
r.b=B.af
r.c=2
r.r=B.fX.gp(0)
b9.aN(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&B.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
b3.r=D.a0v[u].j(0.6).gp(0)
b3.z=B.PV
n=b3.H()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=C.a([],s)
b4=new C.aP(b8,B.aq,b6,b6,b3)
b3.push(new C.b5(p-3,o))
b3.push(new C.ap(p+3,o))
b5=o+11
b3.push(new C.ap(p+5,b5))
b3.push(new C.cR(p,o+17,p-5,b5))
b3.push(new C.bE())
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
if(b2)o=D.a0v[u]
else{o=C.ar(D.a0v[u],B.w,0.65)
o.toString}p.r=o.gp(0)
n=p.H()
p=b4.gbI().a.snapshot()
r.drawPath((b4.e=new C.cE(p)).a,n)
n.delete()}return!0}return A.hXT(b9,c0,c1,c2)},
fI:function fI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aM5(d,e,f,g,h,i,j,k){var w=new A.f84(e,h,i,k),v=w.$1(g),u=v.b.c
if(u>j&&u>0)v=w.$1(Math.max(2,g*j/u))
w=v.b
u=w.c
w=w.a.c
v.a6(d,f.aB(0,new C.u(u/2,w.gbc(w)/2)))},
Kj(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=B.o.F(a1==null?B.k.bw(a0/6):a1,12),k=B.k.F(a0,6),j=D.d29[l],i=e.a,h=e.b,g=0+i,f=0+h
$.W()
w=C.L()
w.sau(new C.a6(B.ax,B.aC,B.x,C.a([j.c,j.d],x.O),null,null).aw(0,new C.a9(0,0,g,f)))
d.aX(new C.a9(0,0,g,f),w)
v=h*(i>=h?0.7:0.6)
f=d.a
J.bA(f.save())
f.clipRect(C.c4(new C.a9(0,0,g,0+v)),$.rB()[1],!0)
A.hNZ(d,new C.at(i,v),l,k)
f.restore()
u=h-v
w=B.w.j(0.3)
t=C.L()
t.r=w.gp(0)
d.aX(new C.a9(0,v,g,v+u),t)
s=B.cp.av(0,B.k.D((k-0.2)/0.5,0,1))
J.bA(f.save())
f.translate((1-s)*i*0.25,0)
t=i/2
g=i*0.94
A.aM5(d,j.a,new C.u(t,v+u*0.3),u*0.36,B.c.j(s),!0,g,0)
A.aM5(d,j.b,new C.u(t,v+u*0.64),u*0.2,B.c.j(0.92*s),!1,g,0)
f.restore()
for(g=h*0.965,w=h*0.009,r=h*0.004,q=0;q<12;++q){p=q===l
o=p?r:0
n=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
n.r=B.c.j(p?0.95:0.35).gp(0)
m=n.H()
f.drawCircle(t+(q-5.5)*h*0.035,g,w+o,m)
m.delete()}g=i-h*0.07
f=h*0.06
A.aM5(d,"AD",new C.u(g,f),h*0.045,B.c.j(0.85),!0,9999,1)
w=h*0.02
w=C.by(C.cr(new C.u(g,f),h*0.065,h*0.1),new C.aX(w,w))
f=C.L()
f.b=B.af
f.c=1
f.r=B.ad.gp(0)
f.d=B.bO
d.aC(w,f)},
hd2(d,e,f,g){var w,v=d.a
J.bA(v.save())
v.clipRect(C.c4(new C.a9(0,0,0+e.a,0+e.b)),$.rB()[1],!0)
w=D.nL[B.o.F(f,9)].e
if(w===-2)A.hDB(d,e,g)
else if(w===-1)A.Kj(d,e,g,null)
else A.Kj(d,e,g,w)
v.restore()},
hDB(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a1.a,g=a1.b,f=new C.Q(Date.now(),0,!1),e=0+h,d=0+g
$.W()
w=C.L()
w.sau(D.bMx.aw(0,new C.a9(0,0,e,d)))
a0.aX(new C.a9(0,0,e,d),w)
w=C.L()
w.r=B.bL.gp(0)
a0.aX(new C.a9(0,0,e,0+g*0.15),w)
A.aM5(a0,B.oy[C.bF(f)-1]+" "+C.bx(f),new C.u(h/2,g*0.075),g*0.08,B.c,!0,h*0.9,0)
v=h/7
for(e=g*0.21,d=g*0.05,u=0;u<7;++u)A.aM5(a0,D.d6r[u],new C.u(v*(u+0.5),e),d,B.aA,!0,9999,0)
t=C.bZ(C.bx(f),C.bF(f),1,0,0,0,0,0)
s=C.bP(C.bZ(C.bx(f),C.bF(f)+1,0,0,0,0,0,0))
r=C.ml(t)-1
q=g*0.74/B.k.dG((r+s)/7)
for(e=g*0.26,d=a2*3,w=a0.a,p=1;p<=s;++p){o=r+p-1
n=v*(B.o.F(o,7)+0.5)
m=e+q*(B.o.an(o,7)+0.5)
if(p===C.bP(f)){l=Math.min(v,q)
k=B.aV.j(0.5+0.2*Math.sin(d))
$.W()
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=k.gp(0)
i=j.H()
w.drawCircle(n,m,l*0.42,i)
i.delete()}l=Math.min(v,q)
k=p===C.bP(f)?B.c:B.ad
A.aM5(a0,""+p,new C.u(n,m),l*0.42,k,!0,9999,0)}},
fPJ(d){var w=D.lE.h(0,d)
return(w==null?null:w.b)===D.yI},
hZ_(d,e,f){return C.a4(d,!1).ci(C.uo(null,!1,!0,!0,new A.fBI(e,f),B.eM,null,B.pj,new A.fBJ(),x.H))},
f84:function f84(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uK:function uK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wZ:function wZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Iq:function Iq(d,e){this.a=d
this.b=e},
lU:function lU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBI:function fBI(d,e){this.a=d
this.b=e},
fBJ:function fBJ(){},
TA:function TA(d,e,f){this.c=d
this.d=e
this.a=f},
bhb:function bhb(d,e){var _=this
_.d=$
_.e=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
dJD:function dJD(d){this.a=d},
dJC:function dJC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJA:function dJA(){},
dJB:function dJB(d){this.a=d},
dJz:function dJz(d){this.a=d},
dJy:function dJy(d,e){this.a=d
this.b=e},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJw:function dJw(d){this.a=d},
dJv:function dJv(d){this.a=d},
dJr:function dJr(d){this.a=d},
dJq:function dJq(d){this.a=d},
dJu:function dJu(d,e,f){this.a=d
this.b=e
this.c=f},
dJt:function dJt(d){this.a=d},
dJs:function dJs(d){this.a=d},
bsJ:function bsJ(d,e,f){this.b=d
this.c=e
this.a=f},
adb:function adb(d,e,f){this.b=d
this.c=e
this.a=f},
aJD:function aJD(){},
fRB(d,e,f,g,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.a
J.bA(h.save())
w=e.a
v=e.b
u=0+w
t=0+v
h.clipRect(C.c4(new C.a9(0,0,u,t)),$.rB()[1],!0)
if(a0<3){$.W()
s=C.L()
s.r=D.b3i.gp(0)
d.aX(new C.a9(0,0,u,t),s)
if(a0<0.5)t=a0/0.5
else t=a0>2.4?(3-a0)/0.6:1
r=B.k.D(t,0,1)
t=e.ec(B.J)
s=e.gea()
q=C.L()
q.sau(new C.bS(B.A,0.5,B.x,i,0,C.a([B.aV.j(0.35*r),B.K],x.O),i,i).aw(0,C.bT(e.ec(B.J),e.gea()*0.5)))
d.ag(t,s*0.5,q)
A.Fx(d,"NGMY",new C.u(0,v*0.36),v*0.2,B.c.j(r),B.L,v*0.03,w)
A.Fx(d,"T V",new C.u(0,v*0.6),v*0.08,B.aV.j(r),B.L,v*0.05,w)
q=w*0.3
s=v*0.78
t=C.L()
t.r=B.aV.j(r).gp(0)
d.aX(new C.a9(q,s,q+w*0.4*(a0/3),s+3),t)}else if(a1>=0)A.hd2(d,e,a1,g)
else{p=B.k.D((a0-3)/0.5,0,1)
o=B.o.F(f,10)
switch(o){case 0:A.hME(d,e,g)
break
case 1:A.hEi(d,e,g)
break
case 2:A.hLY(d,e,g)
break
case 3:A.hIU(d,e,g)
break
case 4:A.hK6(d,e,g)
break
case 5:A.hLZ(d,e,g)
break
case 6:A.hFy(d,e,g)
break
case 7:A.hMD(d,e,g)
break
case 8:A.hKS(d,e,g)
break
default:A.hFJ(d,e,g)}s=w-v*0.34
q=v*0.04
n=v*0.03
m=C.by(new C.a9(s,q,s+v*0.3,q+v*0.1),new C.aX(n,n))
$.W()
n=C.L()
n.r=B.w.j(0.55).gp(0)
d.aC(m,n)
A.Fx(d,"NGMY",new C.u(m.a+v*0.025,m.b+v*0.012),v*0.07,B.c,B.bg,1,i)
n=v*0.86
s=C.L()
s.r=B.w.j(0.6).gp(0)
d.aX(new C.a9(0,n,u,n+v*0.14),s)
A.Fx(d,"CH "+(f+1)+"  \xb7  "+D.OO[o].a,new C.u(q,v*0.885),v*0.075,B.c,B.bg,0,w-v*0.08)
if(p<1){s=C.L()
s.r=B.c.j(0.6*(1-p)).gp(0)
d.aX(new C.a9(0,0,u,t),s)}}$.W()
l=C.L()
l.r=B.w.j(0.07).gp(0)
for(k=0;k<v;k+=3){j=l.H()
h.drawRect(C.c4(new C.a9(0,k,u,k+1)),j)
j.delete()}u=new C.aP($.W().r,B.aq,i,i,C.a([],x.v))
u.E(new C.b5(0,0))
u.E(new C.ap(w*0.45,0))
u.E(new C.ap(0,v*0.5))
u.E(new C.bE())
v=C.L()
v.r=B.c.j(0.04).gp(0)
d.aN(u,v)
h.restore()},
Fx(d,e,f,g,h,i,j,k){var w=null,v=C.ih(w,w,1,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,h,w,w,w,w,w,w,w,w,g,w,w,B.u,w,w,!0,w,j,w,w,w,w,w,w),e),i,B.ci,w,B.eq,B.cg),u=k==null
v.Bd(u?9999:k)
v.a6(d,f.ae(0,new C.u(i===B.L&&!u?(k-v.b.c)/2:0,0)))},
hME(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=B.k.F(f,14),i=0+l,h=0+k
$.W()
w=C.L()
w.sau(D.amb.aw(0,new C.a9(0,0,i,h)))
d.aX(new C.a9(0,0,i,h),w)
w=C.L()
w.r=B.dM.gp(0)
d.ag(new C.u(l*0.85,k*0.18),k*0.08,w)
w=k*0.78
h=C.L()
h.r=B.zI.gp(0)
d.aX(new C.a9(0,w,i,w+k*0.22),h)
new A.fg0(d,f,k).$5(new C.u(l*0.5,k*0.8),1.5707963267948966,k*0.24,5,B.k.D(j/5,0,1)*1.4)
for(i=k*0.26,h=k*0.11,w=k*0.05,v=d.a,u=-k,t=u*0.1,u*=0.04,s=k*0.065,r=0;r<6;++r){q=B.k.D((j-(5+r*1.3))/0.5,0,1)
if(q<=0)continue
p=(r&1)===1?0.04:0
o=B.o.F(r,3)
n=B.lP.av(0,q)
J.bA(v.save())
v.translate(l*(0.2+0.12*r+p),k*(0.16+0.14*o))
v.scale(n,n)
p=C.by(C.cr(B.J,h,i),new C.aX(w,w))
$.W()
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.c.gp(0)
m=o.H()
v.drawRRect(C.ew(p),m)
m.delete()
p=C.by(C.cr(B.J,h,i),new C.aX(w,w))
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.b=B.af
o.c=2
o.r=B.bA.gp(0)
m=o.H()
v.drawRRect(C.ew(p),m)
m.delete()
A.Fx(d,"\u2665 "+D.cJy[r],new C.u(t,u),s,B.rF,B.bg,0,null)
v.restore()}if(j>11.5)A.Fx(d,"Family is everything",new C.u(0,k*0.62),k*0.09,B.hq,B.L,0,l)},
hEi(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=0+j,g=0+i,f=$.W(),e=C.L()
e.sau(D.bMK.aw(0,new C.a9(0,0,h,g)))
d.aX(new C.a9(0,0,h,g),e)
w=a1*40
for(h=d.a,g=x.v,v=0;v<2;++v,f=e){e=C.a([],g)
u=new C.aP(f.r,B.aq,k,k,e)
e.push(new C.b5(0,i))
for(f=v===0,t=0;t<=j;t+=6){s=f?0.4:1
r=f?0.62:0.78
q=f?40:28
q=new C.ap(t,i*r+Math.sin((t+w*s)/q)*i*0.05)
e.push(q)
s=u.f
if(s!=null)q.bx(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ap(j,i)
e.push(s)
e=u.f
if(e!=null)s.bx(e)
e=u.e
if(e!=null)e.a.delete()
u.e=null
e=$.W()
s=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
s.r=(f?B.jg:B.e7).gp(0)
p=s.H()
f=u.e
h.drawPath((f==null?u.e=new C.cE(u.gbI().a.snapshot()):f).a,p)
p.delete()}for(h=i*0.04,g=w*1.3,f=j+60,e=j*0.3,o=0,n=0;n<6;++n){t=B.k.F(n*90-g,f)-30
s=Math.sin(n*1.7+a1)
if(Math.abs(t-e)<12)++o
A.hM2(d,new C.u(t,i*(0.35+0.08*s)),h,B.dM)}m=Math.abs(Math.sin(a1*5))
l=new C.u(e,i*0.72-m*i*0.22)
h=C.cr(new C.u(e,i*0.82),i*0.025,i*0.14*(1-m*0.4))
$.W()
g=C.L()
g.r=B.dl.gp(0)
d.hY(h,g)
g=i*0.085
h=C.L()
h.sau(D.e42.aw(0,C.bT(l,g)))
d.ag(l,g,h)
h=C.L()
h.b=B.af
h.c=2
h.r=B.p8.gp(0)
d.ag(l,g,h)
h=-i
A.Fx(d,"$",l.ae(0,new C.u(h*0.03,h*0.045)),i*0.09,B.p8,B.bg,0,k)
g=h*0.01
h=l.ae(0,new C.u(h*0.028,g))
f=C.L()
f.r=B.w.gp(0)
d.ag(h,2.4,f)
g=l.ae(0,new C.u(i*0.028,g))
f=C.L()
f.r=B.w.gp(0)
d.ag(g,2.4,f)
A.Fx(d,"Saved: $"+(B.o.F(B.k.bw(a1*3),1000)+o),new C.u(i*0.05,i*0.06),i*0.08,B.c,B.bg,0,k)},
hM2(d,e,f,g){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aP(p.r,B.aq,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?f:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.W()
p=C.L()
p.r=g.gp(0)
d.aN(n,p)},
hLY(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a3.a,d=a3.b,a0=$.W(),a1=C.L()
a1.r=D.b9I.gp(0)
a2.aX(new C.a9(0,0,0+e,0+d),a1)
w=new C.eT()
w.dI(7)
for(a1=a4*3,v=a2.a,u=0;u<60;++u){t=B.k.F(B.k.F(w.ai()*e-a4*(10+w.ai()*60),e)+e,e)
s=w.ai()
r=w.ai()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.5+0.5*Math.sin(a1+u)).gp(0)
p=q.H()
v.drawCircle(t,s*d*0.85,0.6+r*1.4,p)
p.delete()}o=e*1.2-B.k.F(a4*22,e*1.6)
a1=d*0.3
s=d*0.2
r=C.L()
r.sau(D.e40.aw(0,C.bT(new C.u(o,a1),s)))
a2.ag(new C.u(o,a1),s,r)
a1=C.cr(new C.u(o,a1),d*0.07,d*0.6)
r=C.L()
r.b=B.af
r.c=3
r.r=B.bJ.j(0.7).gp(0)
a2.hY(a1,r)
r=Math.sin(a4*2)
J.bA(v.save())
v.translate(e*0.42,d*0.52+r*d*0.04)
a2.j_(0,-0.25)
a0=a0.r
r=x.v
n=new C.aP(a0,B.aq,f,f,C.a([],r))
a1=-d
s=a1*0.04
q=d*0.1
n.E(new C.b5(s,q))
m=d*0.04
n.E(new C.cR(0,d*(0.2+0.05*Math.sin(a4*30)),m,q))
n.E(new C.bE())
l=C.L()
k=d*0.12
l.sau(D.bNp.aw(0,new C.a9(s,q,s+d*0.08,q+k)))
a2.aN(n,l)
j=new C.aP(a0,B.aq,f,f,C.a([],r))
l=a1*0.17
j.E(new C.b5(0,l))
s=a1*0.05
i=d*0.05
j.E(new C.cR(d*0.09,s,i,q))
j.E(new C.ap(s,q))
j.E(new C.cR(a1*0.09,s,0,l))
j.E(new C.bE())
h=C.L()
g=a1*0.08
h.sau(D.bNC.aw(0,new C.a9(g,l,g+d*0.16,l+d*0.27)))
a2.aN(j,h)
h=C.L()
h.r=B.aV.gp(0)
a2.ag(new C.u(0,s),d*0.035,h)
h=new C.aP(a0,B.aq,f,f,C.a([],r))
h.E(new C.b5(s,m))
h.E(new C.ap(a1*0.1,k))
h.E(new C.ap(s,q))
h.E(new C.bE())
s=C.L()
s.r=B.aE.gp(0)
a2.aN(h,s)
r=new C.aP(a0,B.aq,f,f,C.a([],r))
r.E(new C.b5(i,m))
r.E(new C.ap(q,k))
r.E(new C.ap(i,q))
r.E(new C.bE())
q=C.L()
q.r=B.aE.gp(0)
a2.aN(r,q)
v.restore()},
hIU(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=0+g,d=0+f,a0=$.W(),a1=C.L()
a1.sau(D.bMr.aw(0,new C.a9(0,0,e,d)))
a2.aX(new C.a9(0,0,e,d),a1)
for(e=a2.a,d=f*0.85,a1=f*0.7,w=x.v,a0=a0.r,v=0;v<4;++v){u=g*(0.1+0.25*v)
t=C.a([],w)
s=new C.aP(a0,B.aq,h,h,t)
t.push(new C.b5(u,f))
t.push(new C.cR(u+Math.sin(a4+v)*10,d,u+4,a1+v*6))
t=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
t.b=B.af
t.c=5
t.r=B.d2.gp(0)
r=t.H()
t=s.gbI().a.snapshot()
e.drawPath((s.e=new C.cE(t)).a,r)
r.delete()}d=B.k.F(a4*18,g*1.5)
J.bA(e.save())
e.translate(d-g*0.25,f*0.35+Math.sin(a4)*6)
d=C.cr(B.J,f*0.22,f*0.5)
a1=C.L()
a1.r=B.bv.gp(0)
a2.hY(d,a1)
a1=new C.aP(a0,B.aq,h,h,C.a([],w))
d=-f
t=d*0.22
a1.E(new C.b5(t,0))
a1.E(new C.cR(d*0.36,d*0.12+Math.sin(a4*3)*5,d*0.34,d*0.16))
s=d*0.02
a1.E(new C.cR(d*0.28,s,t,0))
t=C.L()
t.r=B.bv.gp(0)
a2.aN(a1,t)
t=f*0.03
a1=f*0.1
q=C.cr(new C.u(0,t),a1,f*0.34)
p=C.L()
p.r=B.aK.gp(0)
a2.hY(q,p)
p=C.L()
p.r=B.c.gp(0)
a2.ag(new C.u(f*0.15,s),3,p)
p=C.L()
p.r=B.w.gp(0)
a2.ag(new C.u(f*0.155,s),1.5,p)
e.restore()
for(s=d*0.005,q=d*0.08,p=d*0.03,o=f*0.06,d*=0.04,n=g+40,m=a4*2,v=0;v<6;++v){l=(v&1)===0?1:-1
k=B.k.F(B.k.F(a4*(24+v*7)*l+v*80,n)+g+40,n)
j=Math.sin(m+v)
J.bA(e.save())
e.translate(k-20,f*(0.52+0.06*v)+j*6)
e.scale(l,1)
k=C.cr(B.J,o,a1)
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i=B.o.F(v,4)
j.r=D.asZ[i].gp(0)
r=j.H()
e.drawOval(C.c4(k),r)
r.delete()
k=C.a([],w)
j=new C.aP(a0,B.aq,h,h,k)
k.push(new C.b5(d,0))
k.push(new C.ap(q,p))
k.push(new C.ap(q,t))
k.push(new C.bE())
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=D.asZ[i].gp(0)
r=k.H()
k=j.gbI().a.snapshot()
e.drawPath((j.e=new C.cE(k)).a,r)
r.delete()
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=B.w.gp(0)
r=k.H()
e.drawCircle(t,s,1.8,r)
r.delete()
e.restore()}for(v=0;v<14;++v){d=B.k.F(v*0.071+0.05,1)
a0=B.k.F(a4*(14+v*3)+v*40,f)
a1=Math.sin(m+v)
w=B.o.F(v,3)
t=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
t.b=B.af
t.c=1.2
t.r=B.c.j(0.7).gp(0)
r=t.H()
e.drawCircle(g*d+a1*4,f-a0,2+w,r)
r.delete()}},
hK6(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a9.a,a1=a9.b,a2=B.k.F(b0,12),a3=a2<7,a4=0+a0,a5=0+a1,a6=$.W(),a7=C.L()
a7.sau(new C.a6(B.b1,B.b3,B.x,a3?D.d1J:D.cR7,d,d).aw(0,new C.a9(0,0,a4,a5)))
a8.aX(new C.a9(0,0,a4,a5),a7)
a7=a1*0.74
w=C.L()
w.r=(a3?D.bdv:B.zI).gp(0)
a8.aX(new C.a9(0,a7,a4,a7+a1*0.26),w)
for(w=a8.a,v=a1*0.07,u=a1*0.06,t=a1*0.2,s=a1*0.1,r=a1*0.09,q=x.v,p=b0*2,a6=a6.r,o=0;o<4;++o){n=a0*(0.08+0.24*o)
m=a1*(0.14+0.03*B.o.F(o,2))
l=a7-m
k=n+t
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=D.cEx[o].gp(0)
i=j.H()
w.drawRect(C.c4(new C.a9(n,l,k,l+m)),i)
i.delete()
j=C.a([],q)
h=new C.aP(a6,B.aq,d,d,j)
j.push(new C.b5(n-4,l))
j.push(new C.ap(n+s,l-r))
j.push(new C.ap(k+4,l))
j.push(new C.bE())
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.eF.gp(0)
i=l.H()
l=h.gbI().a.snapshot()
w.drawPath((h.e=new C.cE(l)).a,i)
i.delete()
l=n+v
k=m*0.55
j=a7-k
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.r=(a3&&B.o.F(B.k.bw(p),2)===0?B.lq:B.fk).gp(0)
i=h.H()
w.drawRect(C.c4(new C.a9(l,j,l+u,j+k)),i)
i.delete()}if(a3){for(a7=b0*20,u=b0*260,t=a1*0.8,o=0;o<70;++o){n=B.k.F(o*37+a7,a0)
g=B.k.F(o*53+u,t)
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.ff.gp(0)
r.c=1.4
i=r.H()
w.drawLine.apply(w,[n,g,n-3,g+9,i])
i.delete()}a7=b0*3
if(B.o.F(B.k.bw(a7),7)===0&&B.k.F(a7,1)<0.3){a7=C.L()
a7.r=B.c.j(0.5).gp(0)
a8.aX(new C.a9(0,0,a4,a5),a7)
q=new C.aP(a6,B.aq,d,d,C.a([],q))
q.E(new C.b5(a0*0.6,s))
s=a0*0.55
a6=a1*0.3
q.E(new C.ap(s,a6))
q.E(new C.ap(a0*0.62,a6))
q.E(new C.ap(s,a1*0.55))
s=C.L()
s.b=B.af
s.c=4
s.r=B.lq.gp(0)
a8.aN(q,s)}}else{for(a4=a0*0.5,a5=a1*0.035,a6=3.141592653589793*B.k.D((a2-7)/2,0,1)*57.29577951308232,o=0;o<6;++o){u=a0*(0.9-o*0.07)
u=C.cr(new C.u(a4,a7),u,u)
t=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
t.b=B.af
t.c=a5
t.r=D.d5B[o].j(0.9).gp(0)
i=t.H()
w.drawArc.apply(w,[C.c4(u),180,a6,!1,i])
i.delete()}a4=C.L()
a4.r=B.dM.gp(0)
a8.ag(new C.u(a0*0.86,a1*0.16),a1*0.08,a4)}for(a4=a0+120,o=0;o<3;++o){n=B.k.F(b0*(8+o*4)+o*120,a4)-60
for(a5=a1*(0.12+0.1*o),f=0;f<4;++f){e=D.c9T[f]
$.W()
a6=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a6.r=(a3?B.bj:B.c.j(0.95)).gp(0)
i=a6.H()
w.drawCircle(n+e.a,a5+e.b,v,i)
i.delete()}}},
hLZ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a3.a,a1=a3.b
$.W()
w=C.L()
w.r=B.db.gp(0)
a2.aX(new C.a9(0,0,0+a0,0+a1),w)
v=C.L()
v.r=B.c.j(0.05).gp(0)
for(w=a2.a,u=0;u<a0;u+=16){t=v.H()
w.drawLine.apply(w,[u,0,u,a1,t])
t.delete()}for(s=0;s<a1;s+=16){t=v.H()
w.drawLine.apply(w,[0,s,a0,s,t])
t.delete()}r=a0*0.14
q=a1*0.2
p=a1*0.08
o=C.by(new C.a9(r,q,r+a0*0.72,q+a1*0.5),new C.aX(p,p))
n=new C.aP($.W().r,B.aq,null,null,C.a([],x.v))
n.E(new C.iS(o))
q=C.L()
q.b=B.af
q.c=5
q.r=B.bv.gp(0)
a2.aN(n,q)
m=new C.Rw(new C.vd(C.wF(n),!1,C.a([],x.T))).gK(0)
q=m.a
l=m.b
q.jb()
k=q.e
j=k[l].b
j===$&&C.c()
j=j.a.length()
q.jb()
i=k[l].b
i===$&&C.c()
h=B.k.F(a4*j/5,i.a.length())
for(g=0;g<10;++g){q.jb()
j=k[l].b
j===$&&C.c()
j=B.k.F(h-g*9,j.a.length())
q.jb()
f=k[l].LM(j).a
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=B.dM.j(1-g*0.09).gp(0)
j.z=F.PT
t=j.H()
w.drawCircle(f.a,f.b,6-g*0.5,t)
t.delete()}w=a1*0.45
q=C.by(C.cr(new C.u(r,w),a1*0.22,a1*0.12),B.hN)
l=C.L()
l.r=B.d2.gp(0)
a2.aC(q,l)
A.Fx(a2,"+",new C.u(r-5,a1*0.33),a1*0.07,B.c,B.bg,0,null)
e=(Math.sin(a4*2)+1)/2
d=new C.u(a0*0.86,w)
w=C.L()
w.r=B.dM.j(0.25+0.5*e).gp(0)
w.z=U.GD
a2.ag(d,a1*0.16,w)
w=C.L()
w.r=C.ar(B.bI,B.ob,e).gp(0)
a2.ag(d,p,w)
A.Fx(a2,"Electricity needs a full loop!",new C.u(0,a1*0.74),a1*0.075,B.fZ,B.L,0,a0)},
hFy(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=C.L()
w.sau(D.bPv.aw(0,new C.a9(0,0,a3,a4)))
a5.aX(new C.a9(0,0,a3,a4),w)
w=a2*0.82
a4=C.L()
a4.r=B.db.gp(0)
a5.aX(new C.a9(0,w,a3,w+a2*0.18),a4)
for(a3=a1*0.1,a4=a5.a,v=0;v<7;++v){u=a1*(0.05+v*0.15)
t=a2*(0.1+0.07*B.o.F(v*5,4))
s=w-t
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.az.gp(0)
q=r.H()
a4.drawRect(C.c4(new C.a9(u,s,u+a3,s+t)),q)
q.delete()}for(a3=a2*0.2,s=a7*0.55,p=0;p<4;++p){r=s+p*0.27
o=B.k.F(r,1)
n=B.k.bw(r)*7+p*3
m=a1*(0.15+0.7*B.k.F(n*0.37,1))
l=a2*(0.2+0.25*B.k.F(n*0.53,1))
k=D.as2[B.o.F(Math.abs(n),5)]
if(o<0.3){$.W()
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.gp(0)
q=r.H()
a4.drawCircle(m,w-(w-l)*(o/0.3),2.5,q)
q.delete()}else{v=(o-0.3)/0.7
for(r=v*v*a2*0.08,j=1-v,i=2.4*j+0.4,h=0;h<28;++h){g=h*3.141592653589793*2/28
f=a3*B.dU.av(0,v)
e=Math.cos(g)
d=Math.sin(g)
$.W()
a0=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=k.j(B.k.D(j,0,1)).gp(0)
a0.z=D.ddB
q=a0.H()
a4.drawCircle(m+e*f,l+d*f+r,i,q)
q.delete()}}}},
hMD(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a6.a,a0=a6.b,a1=0+d,a2=0+a0,a3=$.W(),a4=C.L()
a4.sau(D.amb.aw(0,new C.a9(0,0,a1,a2)))
a5.aX(new C.a9(0,0,a1,a2),a4)
for(a2=a5.a,a4=x.v,w=0;w<2;++w,a3=v){v=C.a([],a4)
u=new C.aP(a3.r,B.aq,null,null,v)
v.push(new C.b5(0,a0))
for(a3=w===0,t=0;t<=d;t+=6){s=a3?8:20
r=a3?0.55:0.68
q=a3?50:34
q=new C.ap(t,a0*r+Math.sin((t+a7*s)/q)*a0*0.06)
v.push(q)
s=u.f
if(s!=null)q.bx(s)
s=u.e
if(s!=null)s.a.delete()
u.e=null}s=new C.ap(d,a0)
v.push(s)
v=u.f
if(v!=null)s.bx(v)
v=u.e
if(v!=null)v.a.delete()
u.e=null
v=$.W()
s=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
s.r=(a3?B.Dy:B.zI).gp(0)
p=s.H()
a3=u.e
a2.drawPath((a3==null?u.e=new C.cE(u.gbI().a.snapshot()):a3).a,p)
p.delete()}a3=a0*0.8
a4=C.L()
a4.r=B.bv.gp(0)
a5.aX(new C.a9(0,a3,a1,a3+a0*0.04),a4)
for(t=-B.k.F(a7*80,24),a1=a0*0.84,a4=a0*0.03,v=a1+a4;t<d;t+=24){s=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
s.r=B.fk.gp(0)
p=s.H()
a2.drawRect(C.c4(new C.a9(t,a1,t+8,v)),p)
p.delete()}o=Math.sin(a7*14)*1.2
n=d*0.12
for(a1=a3+o,a3=a0*0.025,v=d*0.012,s=a0*0.02,r=a0*0.62+o,a4=r+a4,q=a4+a0*0.06,m=r+a0*0.18,l=0;l<4;++l){k=l===0
j=n+d*(k?0.16:0.15)
i=C.by(new C.a9(n,r,j,m),new C.aX(s,s))
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.r=(k?B.bL:D.cR9[l-1]).gp(0)
p=h.H()
a2.drawRRect(C.ew(i),p)
p.delete()
for(j-=n,i=j*0.18,g=0;g<3;++g){h=n+j*(0.12+g*0.28)
f=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
f.r=B.ff.gp(0)
p=f.H()
a2.drawRect(C.c4(new C.a9(h,a4,h+i,q)),p)
p.delete()}i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=B.bh.gp(0)
p=i.H()
a2.drawCircle(n+j*0.25,a1,a3,p)
p.delete()
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=B.bh.gp(0)
p=i.H()
a2.drawCircle(n+j*0.75,a1,a3,p)
p.delete()
n+=j+v}for(a1=a7*0.8,a3=d*0.2,a4=a0*0.6,l=0;l<5;++l){e=B.k.F(a1+l*0.2,1)
v=e*a0
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.7*(1-e)).gp(0)
p=r.H()
a2.drawCircle(a3-e*d*0.12,a4-v*0.25,s+v*0.04,p)
p.delete()}},
hKS(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a4.a,a0=a4.b,a1=0+d,a2=0+a0
$.W()
w=C.L()
v=a5*2
u=C.ar(B.jg,B.hc,(Math.sin(v)+1)/2)
u.toString
w.sau(new C.a6(B.ax,B.aC,B.x,C.a([u,B.az],x.O),null,null).aw(0,new C.a9(0,0,a1,a2)))
a3.aX(new C.a9(0,0,a1,a2),w)
for(a1=a3.a,a2=a0*0.86,w=d/8-2,u=a0*0.14,t=a2+u,s=0;s<8;++s){r=d*s/8
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=(B.k.F(v+s,2)<1?B.bY:B.aV).j(0.5).gp(0)
p=q.H()
a1.drawRect(C.c4(new C.a9(r,a2,r+w,t)),p)
p.delete()}a2=a5*6
o=Math.sin(a2)
J.bA(a1.save())
w=-a0
a1.translate(d*0.5,a0*0.55+Math.abs(o)*w*0.03)
a3.j_(0,o*0.06)
t=a0*0.26
r=a0*0.3
q=a0*0.04
n=C.by(C.cr(B.J,r,t),new C.aX(q,q))
m=C.L()
m.sau(D.bPT.aw(0,C.cr(B.J,r,t)))
a3.aC(n,m)
m=a0*0.08
u=C.cr(new C.u(0,a0*0.02),m,u)
n=C.L()
n.r=B.ba.j(0.7).gp(0)
a3.aX(u,n)
n=C.by(C.cr(new C.u(0,w*0.25),a0*0.17,a0*0.22),new C.aX(q,q))
u=C.L()
u.r=B.cm.gp(0)
a3.aC(n,u)
l=B.k.F(a5*1.3,1)>0.08
for(u=w*0.26,t=a0*0.025,k=0;k<2;++k){j=D.c9w[k]
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=(l?B.ba:B.hc).gp(0)
p=r.H()
a1.drawCircle(j*a0,u,t,p)
p.delete()}u=C.L()
u.r=B.ad.gp(0)
u.c=3
a3.bA(new C.u(0,w*0.335),new C.u(0,w*0.38),u)
u=C.L()
u.r=B.aE.gp(0)
a3.ag(new C.u(0,w*0.39),a0*0.015,u)
for(u=-o,t=a0*0.035,r=a0*0.15,n=a0*0.28,w*=0.08,k=0;k<2;++k){i=D.vn[k]
J.bA(a1.save())
h=i*a0
a1.translate(h*0.14,w)
g=i>0
a1.rotate(i*(0.7+Math.sin(a2+(g?0:3.141592653589793))*0.8)*180/3.141592653589793,0,0)
f=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
f.r=B.bI.gp(0)
f.c=t
f.d=B.bO
p=f.H()
a1.drawLine.apply(a1,[0,0,h*0.16,0,p])
p.delete()
a1.restore()
g=g?o:u
f=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
f.r=B.bI.gp(0)
f.c=q
f.d=B.bO
p=f.H()
a1.drawLine.apply(a1,[h*0.06,r,h*0.08,n+g*a0*0.02,p])
p.delete()}a1.restore()
for(a1=a5*0.7,a2=a0*0.7,s=0;s<4;++s){e=B.k.F(a1+s*0.25,1)
A.Fx(a3,"\u266a",new C.u(d*(0.2+0.18*s)+Math.sin(v+s)*8,a2-e*a0*0.5),m,B.c.j(1-e),B.bg,0,null)}},
hFJ(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a3.a,d=a3.b,a0=0+e,a1=0+d
$.W()
w=C.L()
w.sau(D.bOw.aw(0,new C.a9(0,0,a0,a1)))
a2.aX(new C.a9(0,0,a0,a1),w)
w=C.L()
w.r=B.dM.gp(0)
a2.ag(new C.u(e*0.12,d*0.16),d*0.07,w)
w=d*0.72
a1=C.L()
a1.r=B.Dy.gp(0)
a2.aX(new C.a9(0,w,a0,w+d*0.28),a1)
for(a0=a4*0.25,a1=d*0.78,w=a2.a,v=d*0.016,u=a4*0.3,t=d*0.022,s=0;s<9;++s){r=e*(0.07+s*0.105)
q=B.k.D(B.k.F(a0-s*0.12,3),0,1)
p=B.o.F(s,3)
o=r+Math.sin(a4+s)*3
p=a1-d*(0.12+0.05*p)*q
n=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
n.r=B.fX.gp(0)
n.c=3
m=n.H()
w.drawLine.apply(w,[r,a1,o,p,m])
m.delete()
if(q>0.7){for(l=0;l<6;++l){k=l*3.141592653589793/3+u
n=Math.cos(k)
j=Math.sin(k)
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=D.atZ[B.o.F(s,5)].gp(0)
m=i.H()
w.drawCircle(o+n*d*0.028,p+j*d*0.028,t,m)
m.delete()}n=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
n.r=B.dM.gp(0)
m=n.H()
w.drawCircle(o,p,v,m)
m.delete()}}for(a0=d*0.03,a1=d*0.05,v=d*0.06,u=a4*0.9,t=a4*1.3,p=a4*18,s=0;s<3;++s){r=e*(0.2+0.28*s)+Math.sin(u+s*2)*e*0.12
h=d*(0.3+0.1*s)+Math.cos(t+s)*d*0.06
g=Math.abs(Math.sin(p+s))
for(o=a1*g+2,n=(s+2)%5,f=0;f<2;++f){j=C.cr(new C.u(r+D.vn[f]*d*0.025*g,h),v,o)
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=D.atZ[n].gp(0)
m=i.H()
w.drawOval(C.c4(j),m)
m.delete()}o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.bh.gp(0)
o.c=2
m=o.H()
w.drawLine.apply(w,[r,h-a0,r,h+a0,m])
m.delete()}},
hZD(d,e,f,g,h){return C.a4(d,!1).ci(C.uo(null,!1,!0,!0,new A.fF6(e,g,f,h),B.eM,null,B.pj,new A.fF7(),x.S))},
xd:function xd(d,e){this.a=d
this.b=e},
fg0:function fg0(d,e,f){this.a=d
this.b=e
this.c=f},
fF6:function fF6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fF7:function fF7(){},
Vb:function Vb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCM:function aCM(d,e){var _=this
_.e=_.d=$
_.f=-1
_.r=!1
_.w=null
_.x=0
_.y=!0
_.z=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
ewK:function ewK(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewI:function ewI(d,e){this.a=d
this.b=e},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewU:function ewU(d){this.a=d},
ewT:function ewT(d){this.a=d},
ewS:function ewS(){},
ewN:function ewN(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ewM:function ewM(d){this.a=d},
ewR:function ewR(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewF:function ewF(d,e){this.a=d
this.b=e},
bs9:function bs9(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aKA:function aKA(){},
fbr(d,e,f,g){var w=null,v=C.m(24),u=C.I(f.j(0.6),B.r,1)
return C.av(C.p(w,C.v(C.a([C.d(d,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),B.ao,C.d(e,w,w,w,w,w,w,B.yZ,B.L,w,w),B.ay,C.c5(B.fI,g,B.bx,0,8)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new C.o(D.UH,w,u,v,w,w,B.n),w,w,w,B.ey,B.a8,w,w,w),w,w,w)},
fPP(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=new C.eT()
b4.dI(b5*977+13)
w=B.o.D(1+B.o.an(b5,5),1,5)
for(v=x.t,u=x.S,t=x.N,s=0;s<200;++s){r=1+b4.aD(5)
q=r*7
p=C.a([],v)
o=C.a([],v)
n=C.U(u,t)
m=w
l=0
k=O.pP
j=!0
i=0
for(;;){if(!(j&&i<12))break
A:{++i
h=2+b4.aD(4)
for(g=k.a,f=k.b,e=0;e<h;r=a0,l=d){d=l+g
a0=r+f
if(d<0||a0<0||d>=7||a0>=7){e=99
break}a1=a0*7+d
if(B.d.t(p,a1)||a1===q){j=!1
break}p.push(a1);++e}if(!j||e>=99||m===0)break
a2=b4.hc()?new C.z(f,-g):new C.z(-f,g)
a3=new C.z(-f,-g).A(0,a2)
a4=l+a2.a
a5=r+a2.b
if(a4<0||a5<0||a4>=7||a5>=7)break A
o.push(r*7+l);--m
g=B.d.gam(o)
n.n(0,g,a3?"/":"\\")
k=a2}}if(!j||o.length<w||p.length<5)continue
g=C.a([],v)
for(f=p.length,a6=0;a6<p.length;p.length===f||(0,C.K)(p),++a6){a7=p[a6]
if(!B.d.t(o,a7))g.push(a7)}if(g.length<3)continue
a8=B.o.D(2+B.o.an(b5,8),2,4)
a9=C.et([B.d.gam(g)],u)
B.d.fn(g,b4)
for(v=g.length,a6=0;a6<g.length;g.length===v||(0,C.K)(g),++a6){a7=g[a6]
if(a9.a>=a8)break
a9.J(0,a7)}b0=C.aZ(u)
b1=3+B.o.an(b5,3)
v=q+1
b2=0
for(;;){if(b0.a<b1){b3=b2+1
g=b2<200
b2=b3}else g=!1
if(!g)break
B:{a7=b4.aD(49)
if(B.d.t(p,a7)||a7===q||a9.t(0,a7)||B.d.t(o,a7))break B
if(a7===v)break B
b0.J(0,a7)}}v=b5>=10?1:0
return new A.aUx(b0,a9,C.U(u,t),q,O.pP,w+v)}return new A.aUx(C.aZ(u),C.et([25],u),C.U(u,t),21,O.pP,1)},
hdS(d,e){var w,v,u,t,s,r,q,p=C.a([],x.t),o=C.aZ(x.S),n=d.e,m=B.o.F(n,7),l=B.o.an(n,7),k=d.f
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
if(q==="/")k=new C.z(-s,-t)
if(q==="\\")k=new C.z(k.b,k.a)}return new C.bm1(p,o)},
h9f(d,e){return Math.sqrt(Math.pow(d[0]-e[0],2)+Math.pow(d[1]-e[1],2)+Math.pow(d[2]-e[2],2))/Math.sqrt(3)},
aUx:function aUx(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Uo:function Uo(d){this.a=d},
bhL:function bhL(d,e,f,g,h,i,j,k,l){var _=this
_.e=_.d=0
_.f=$
_.r=d
_.w=0
_.x=!1
_.y=e
_.z=f
_.fh$=g
_.kM$=h
_.fL$=i
_.fi$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e1V:function e1V(d){this.a=d},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1W:function e1W(){},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1N:function e1N(d){this.a=d},
e1O:function e1O(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1S:function e1S(d){this.a=d},
e1T:function e1T(d,e){this.a=d
this.b=e},
beP:function beP(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
ddx:function ddx(d,e,f){this.a=d
this.b=e
this.c=f},
ddA:function ddA(d,e,f){this.a=d
this.b=e
this.c=f},
ddy:function ddy(d){this.a=d},
ddz:function ddz(d){this.a=d},
Uq:function Uq(d){this.a=d},
aC6:function aC6(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.e=e
_.f=f
_.x=_.w=_.r=0
_.y=20
_.z="ready"
_.Q=""
_.fh$=g
_.kM$=h
_.fL$=i
_.fi$=j
_.bq$=k
_.a7$=l
_.c=_.a=null},
e2d:function e2d(d){this.a=d},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2e:function e2e(){},
e1Z:function e1Z(){},
e27:function e27(d,e){this.a=d
this.b=e},
e24:function e24(d){this.a=d},
e20:function e20(d){this.a=d},
e25:function e25(d){this.a=d},
e26:function e26(d){this.a=d},
e2_:function e2_(d){this.a=d},
e28:function e28(d){this.a=d},
e23:function e23(d,e){this.a=d
this.b=e},
e29:function e29(d){this.a=d},
e22:function e22(d,e){this.a=d
this.b=e},
e2a:function e2a(d){this.a=d},
e21:function e21(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
bf3:function bf3(d,e){this.b=d
this.a=e},
aK4:function aK4(){},
buJ:function buJ(){},
aK5:function aK5(){},
buK:function buK(){},
a_y(d,e,f,g,h,i){return new A.bry(d,e,f,g,h,i)},
bry:function bry(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7W:function f7W(){},
f7X:function f7X(){},
f7Y:function f7Y(){},
f7Z:function f7Z(){},
f8_:function f8_(){},
f80:function f80(){},
f81:function f81(){},
f82:function f82(){},
a7_:function a7_(d){this.a=d},
ccw:function ccw(d){this.a=d},
ccx:function ccx(){},
ccv:function ccv(d,e){this.a=d
this.b=e},
ccu:function ccu(d){this.a=d},
Vg:function Vg(d){this.a=d},
aCY:function aCY(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.fh$=f
_.kM$=g
_.fL$=h
_.fi$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
eAS:function eAS(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAN:function eAN(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d,e){this.a=d
this.b=e},
eAP:function eAP(d,e){this.a=d
this.b=e},
eAR:function eAR(d){this.a=d},
bsV:function bsV(d,e,f){this.b=d
this.c=e
this.a=f},
U_:function U_(d){this.a=d},
bhk:function bhk(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.fh$=d
_.kM$=e
_.fL$=f
_.fi$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dPV:function dPV(){},
dPW:function dPW(){},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPT:function dPT(d){this.a=d},
dPR:function dPR(d){this.a=d},
dPU:function dPU(d){this.a=d},
bnN:function bnN(d,e,f){this.b=d
this.c=e
this.a=f},
Tc:function Tc(d){this.a=d},
bgZ:function bgZ(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.fh$=d
_.kM$=e
_.fL$=f
_.fi$=g
_.bq$=h
_.a7$=i
_.c=_.a=null},
dBp:function dBp(){},
dBq:function dBq(){},
dBk:function dBk(){},
dBn:function dBn(d,e){this.a=d
this.b=e},
dBm:function dBm(d,e){this.a=d
this.b=e},
dBo:function dBo(d){this.a=d},
dBl:function dBl(d){this.a=d},
aGl:function aGl(d,e,f){this.a=d
this.b=e
this.c=f},
TR:function TR(d){this.a=d},
bhe:function bhe(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dNb:function dNb(d,e){this.a=d
this.b=e},
dNc:function dNc(d){this.a=d},
dNa:function dNa(d,e){this.a=d
this.b=e},
dNd:function dNd(d){this.a=d},
dN9:function dN9(d,e){this.a=d
this.b=e},
dNe:function dNe(d){this.a=d},
dN8:function dN8(d,e){this.a=d
this.b=e},
dNf:function dNf(d,e){this.a=d
this.b=e},
dN7:function dN7(d,e){this.a=d
this.b=e},
dNg:function dNg(d){this.a=d},
dN6:function dN6(d,e){this.a=d
this.b=e},
dNh:function dNh(d){this.a=d},
dN5:function dN5(d){this.a=d},
dNi:function dNi(d){this.a=d},
dN4:function dN4(d){this.a=d},
dNj:function dNj(d){this.a=d},
dNk:function dNk(d){this.a=d},
dN3:function dN3(d){this.a=d},
bjf:function bjf(d,e,f){this.b=d
this.c=e
this.a=f},
UC:function UC(d){this.a=d},
aCg:function aCg(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7B:function e7B(d,e,f){this.a=d
this.b=e
this.c=f},
e7z:function e7z(d,e,f){this.a=d
this.b=e
this.c=f},
e7C:function e7C(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7G:function e7G(d){this.a=d},
e7F:function e7F(d,e){this.a=d
this.b=e},
e7E:function e7E(d,e){this.a=d
this.b=e},
e7H:function e7H(d,e){this.a=d
this.b=e},
e7D:function e7D(d,e){this.a=d
this.b=e},
e7I:function e7I(d){this.a=d},
UP:function UP(d){this.a=d},
aCC:function aCC(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ehY:function ehY(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
ehW:function ehW(d,e){this.a=d
this.b=e},
ehX:function ehX(d){this.a=d},
ehV:function ehV(d){this.a=d},
ei_:function ei_(d){this.a=d},
ei0:function ei0(d){this.a=d},
ei1:function ei1(d){this.a=d},
ei2:function ei2(d,e){this.a=d
this.b=e},
V9:function V9(d){this.a=d},
bis:function bis(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
ewf:function ewf(){},
ewo:function ewo(){},
ewk:function ewk(d){this.a=d},
ewj:function ewj(){},
ewl:function ewl(d,e){this.a=d
this.b=e},
ewi:function ewi(d,e){this.a=d
this.b=e},
ewm:function ewm(d){this.a=d},
ewh:function ewh(d,e){this.a=d
this.b=e},
ewn:function ewn(d){this.a=d},
ewg:function ewg(d){this.a=d},
UA:function UA(d){this.a=d},
bhW:function bhW(d,e,f,g,h,i,j,k){var _=this
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
_.fh$=f
_.kM$=g
_.fL$=h
_.fi$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
e6f:function e6f(){},
e6g:function e6g(){},
e68:function e68(d){this.a=d},
e67:function e67(d){this.a=d},
e69:function e69(d){this.a=d},
e66:function e66(d){this.a=d},
e6a:function e6a(d){this.a=d},
e65:function e65(d){this.a=d},
e6b:function e6b(d,e){this.a=d
this.b=e},
e64:function e64(d,e){this.a=d
this.b=e},
e6c:function e6c(d){this.a=d},
e63:function e63(d,e){this.a=d
this.b=e},
e6d:function e6d(d){this.a=d},
e62:function e62(d,e){this.a=d
this.b=e},
e6e:function e6e(d){this.a=d},
e61:function e61(d,e){this.a=d
this.b=e},
bb2:function bb2(d,e,f){this.c=d
this.d=e
this.a=f},
aJq:function aJq(){},
buA:function buA(){},
aJJ:function aJJ(){},
buF:function buF(){},
aKd:function aKd(){},
buP:function buP(){},
aKH:function aKH(){},
bv0:function bv0(){},
jB(d,e,f,g,h,i){return new A.b4I(h,d,f,g,i,e,null)},
hdJ(d,e,f,g){var w=null
return C.c9(w,w,!0,w,new A.fFx(g,e,f),d,w,!0,!0,x.H)},
hw(d,e,f,g,h,i,j){return new A.atZ(f,j,i,h,g,d,e,null)},
qz(d,e,f){return A.hZQ(d,e,f)},
hZQ(d,e,f){var w=0,v=C.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$qz=C.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aU.ak$.x.h(0,e)
n=n==null?null:n.gb7()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return C.b(r.m0(2),$async$qz)
case 7:q=h
w=8
return C.b(q.hj(B.fQ),$async$qz)
case 8:p=h
if(p==null){w=1
break}o=J.fa(B.dD.gaP(p))
w=9
return C.b(A.cng(C.a([A.h2N(o,"image/png",f+".png")],x.fH),"Made in NGMY Core Protocol"),$async$qz)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.I(x.gV).f.R(D.aLJ)
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$qz,v)},
hvk(b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=B.o.an(22050*b5,1000),b1=b0*2,b2=new DataView(new ArrayBuffer(44+b1)),b3=new A.ccr(b2)
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
w=new C.eT()
w.dI(3)
v=3
u=0.006
t=!1
s=0
switch(b8){case"piano":r=D.cKM
q=D.cPJ
v=3.4
break
case"organ":r=D.cOI
q=D.d1N
u=0.02
t=!0
break
case"bell":r=D.cGI
q=D.cFE
v=2.4
break
case"pluck":r=D.cKL
q=D.crF
v=7
break
case"synth":r=D.d2C
q=D.d4f
u=0.012
t=!0
break
case"flute":r=D.d8b
q=D.c2j
u=0.07
t=!0
s=0.035
break
default:r=D.amA
q=D.amA}b1=r.length
p=C.c1(b1,0,!1,x.i)
for(o="saw"===b6,n="tri"===b6,m="noise"===b6,l="square"===b6,k=b8.length!==0,j=-v,i=j*0.12,h=s>0,g=b8!=="bell",f=b8!=="piano",e=b8==="pluck",d=0,a0=0;a0<b0;++a0){a1=a0/22050
a2=1-a0/b0
a3=b4*(1+b7*a2)
if(k){for(a2=6.283185307179586*a3,a4=j*a1,a5=0,a6=0;a6<b1;++a6){a7=p[a6]+a2*q[a6]/22050
p[a6]=a7
a8=!g||!f||e?Math.exp(a4*(1+a6*0.35)):1
a5+=Math.sin(a7)*r[a6]*a8}a5/=1.9
if(h)a5+=(w.ai()*2-1)*s
a9=Math.min(1,a1/u)*Math.min(1,(b0-a0)/1984.5)
a5*=t?a9:a9*Math.exp(i*a1)}else{d+=6.283185307179586*a3/22050
A:{if(l){a4=Math.sin(d)>=0?0.6:-0.6
break A}if(m){a4=(w.ai()*2-1)*0.8
break A}if(n){a4=0.6366197723675814*Math.asin(Math.sin(d))
break A}if(o){a4=B.k.F(d/6.283185307179586,1)*1.2-0.6
break A}a4=Math.sin(d)
break A}a5=a4*(Math.min(1,a0/120)*Math.pow(a2,1.6))}b2.setInt16(44+a0*2,B.o.D(B.k.V(a5*0.8*32e3),-32768,32767),!0)}return J.fa(B.dD.gaP(b2))},
dD(d,e,f,g,h,i){return A.hvl(d,e,f,g,h,i)},
hvl(d,e,f,g,h,i){var w=0,v=C.j(x.H),u=1,t=[],s,r,q,p,o,n
var $async$dD=C.e(function(j,k){if(j===1){t.push(k)
w=u}for(;;)switch(w){case 0:u=3
s=""+B.k.V(d)+"|"+f+"|"+i+"|"+C.t(g)+"|"+e
r=$.hvj.cf(0,s,new A.cct(d,f,i,g,e))
if($.ccq.length<12){p=C.agW()
p.LW(B.aJK)
$.ccq.push(p)}p=$.h02
$.h02=p+1
q=$.ccq[B.o.F(p,$.ccq.length)]
w=6
return C.b(J.hiF(q,new C.a1X(r,null),h),$async$dD)
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
l6(d,e,f,g){var w,v=$.aq8
if(v==="music")return A.dD(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return A.dD(261.63*v,w,f,0,g,"sine")}return A.vA(v,e,f,g)},
vA(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,B.o.D(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return A.dD(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return A.dD(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return A.dD(140+B.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return A.dD(260+B.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":A.dD(t,"",160,-0.7,g*0.4,w)
return A.dD(900,"",90,0,g*0.45,u)
case"zap":return A.dD(t*3,"",150,1.6,g*0.4,"square")
case"click":return A.dD(2600+B.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":A.dD(320,"",220,-0.7,g*0.35,v)
return A.dD(1500,"",200,0,g*0.22,u)
case"organic":return A.dD(85+B.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return A.dD(t*1.6,"",140,-0.3,g*0.55,w)
default:return A.dD(t,"",s,0,g*0.5,w)}},
B2(d,e,f,g){var w,v,u,t,s,r,q,p=$.aq8
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,C.K)(e),++w)A.l6(d,e[w],f,g)
return}for(p=C.d9(e,0,C.dJ(4,"count",x.S),C.T(e).c),v=p.$ti,p=new C.bW(p,p.gM(0),v.k("bW<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)A.l6(d,s,f,g)
else C.bN(new C.b9(1000*q),new A.ccs(d,s,f,g),u)}},
a6Z(d,e){var w="sine",v="noise"
switch(d){case"kick":A.dD(95,"",200,1.8,e,w)
break
case"snare":A.dD(220,"",140,0,e*0.65,v)
break
case"hat":A.dD(5000,"",50,0,e*0.35,v)
break
case"open":A.dD(5200,"",220,0,e*0.35,v)
break
case"clap":A.dD(1100,"",100,0,e*0.5,v)
break
case"tom":A.dD(150,"",230,1,e,w)
break
case"low":A.dD(100,"",260,0.9,e,w)
break
case"rim":A.dD(1700,"",60,0,e*0.4,"square")
break
case"cow":A.dD(820,"",240,0,e*0.3,"square")
break
case"crash":A.dD(3200,"",650,0,e*0.4,v)
break
case"shake":A.dD(7000,"",90,0,e*0.3,v)
break
default:A.dD(60,"",300,0,e,w)}},
yY(d){return A.huz(d)},
huz(d){var w=0,v=C.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yY=C.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return C.b(C.ay(),$async$yY)
case 7:r=f
q=C.aT(J.q(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=C.U(x.N,x.z)
w=1
break}p=B.R.aG(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?C.a0(p,o,n):C.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=C.U(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return C.h(u,v)
case 2:return C.f(s.at(-1),v)}})
return C.i($async$yY,v)},
vx(d,e){return A.huA(d,e)},
huA(d,e){var w=0,v=C.j(x.H),u=1,t=[],s,r,q
var $async$vx=C.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$vx)
case 6:s=g
w=7
return C.b(s.aq("String","ngmy_play_progress_v1_"+d,B.R.ao(e,null)),$async$vx)
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
return C.i($async$vx,v)},
b4I:function b4I(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cpc:function cpc(d){this.a=d},
cpd:function cpd(d,e){this.a=d
this.b=e},
fFx:function fFx(d,e,f){this.a=d
this.b=e
this.c=f},
fFw:function fFw(d){this.a=d},
dx:function dx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cp8:function cp8(d){this.a=d},
eJ:function eJ(d,e,f){this.c=d
this.d=e
this.a=f},
atZ:function atZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fg:function fg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cp7:function cp7(d){this.a=d},
Ey:function Ey(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cpe:function cpe(d){this.a=d},
mp:function mp(){},
cp9:function cp9(d,e,f){this.a=d
this.b=e
this.c=f},
cpb:function cpb(d){this.a=d},
cpa:function cpa(){},
ccr:function ccr(d){this.a=d},
cct:function cct(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ccs:function ccs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crJ(){var w=0,v=C.j(x.cL),u,t
var $async$crJ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=A
w=3
return C.b($.tL().bcl("assets/data/world110.json"),$async$crJ)
case 3:u=t.hz6(e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$crJ,v)},
hz6(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(B.R.aG(0,a2,null)),a1=C.a([],x.dO)
for(w=J.aV(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gU(w))
q=C.a([],s)
for(p=J.a7(r),o=J.aV(d.a(p.h(r,"r")));o.C();){n=o.gU(o)
m=C.a([],u)
for(l=J.aV(d.a(n));l.C();){k=l.gU(l)
j=J.a7(k)
m.push(C.a([C.f8(j.h(k,0)),C.f8(j.h(k,1))],v))}q.push(m)}o=C.cO(p.h(r,"n"))
m=C.cO(p.h(r,"a"))
l=C.cO(p.h(r,"ct"))
j=C.cO(p.h(r,"sr"))
i=C.f8(p.h(r,"pop"))
h=C.f8(p.h(r,"gdp"))
g=C.cO(p.h(r,"inc"))
f=C.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=C.aOy(g,f,"",0)
f=C.f8(J.q(p.h(r,"c"),0))
p=C.f8(J.q(p.h(r,"c"),1))
e=new A.a9G(o,m,l,j,i,h,g,f,p,q)
e.bul(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new A.a9H(a1)},
fjk(d){if(d>=1e12)return B.k.aa(d/1e12,1)+" trillion"
if(d>=1e9)return B.k.aa(d/1e9,2)+" billion"
if(d>=1e6)return B.k.aa(d/1e6,1)+" million"
if(d>=1000)return B.k.aa(d/1000,1)+" thousand"
return B.k.aa(d,0)},
G0(d){var w,v,u,t=B.o.u(B.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&B.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
a9G:function a9G(d,e,f,g,h,i,j,k,l,m){var _=this
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
a9H:function a9H(d){this.a=d},
uI:function uI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Ob:function Ob(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xA:function xA(d,e,f){this.a=d
this.b=e
this.c=f},
Oa:function Oa(d){this.a=0
this.b=d
this.c=0},
hB_(d,e,f){return $.hB0.cf(0,d+"|"+C.t(e)+"|"+f.l(),new A.d9h(d,e,f))},
U6:function U6(d){this.a=d},
aBE:function aBE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fh$=j
_.kM$=k
_.fL$=l
_.fi$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
dSD:function dSD(d){this.a=d},
dSC:function dSC(d,e){this.a=d
this.b=e},
dS5:function dS5(d){this.a=d},
dS3:function dS3(d){this.a=d},
dS4:function dS4(d,e,f){this.a=d
this.b=e
this.c=f},
dS2:function dS2(d){this.a=d},
dS1:function dS1(){},
dS0:function dS0(d){this.a=d},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSd:function dSd(d){this.a=d},
dSe:function dSe(d){this.a=d},
dSc:function dSc(d){this.a=d},
dSf:function dSf(d){this.a=d},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS7:function dS7(d){this.a=d},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSu:function dSu(d){this.a=d},
dSn:function dSn(d){this.a=d},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSm:function dSm(d,e){this.a=d
this.b=e},
dSw:function dSw(d){this.a=d},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSx:function dSx(d){this.a=d},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSy:function dSy(d){this.a=d},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSz:function dSz(d){this.a=d},
dSi:function dSi(d,e){this.a=d
this.b=e},
dSA:function dSA(d){this.a=d},
dSh:function dSh(d){this.a=d},
dSB:function dSB(d){this.a=d},
dSg:function dSg(d){this.a=d},
dSr:function dSr(d){this.a=d},
dSa:function dSa(d){this.a=d},
dSs:function dSs(d){this.a=d},
dS9:function dS9(d){this.a=d},
dSt:function dSt(d){this.a=d},
dS8:function dS8(d){this.a=d},
dS_:function dS_(){},
dRZ:function dRZ(d){this.a=d},
dRY:function dRY(d){this.a=d},
bdg:function bdg(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d9h:function d9h(d,e,f){this.a=d
this.b=e
this.c=f},
d9i:function d9i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aJP:function aJP(){},
aJQ:function aJQ(){},
adJ(d,e,f,g,h){return new A.brt(d,e,f,g,h)},
brt:function brt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7P:function f7P(){},
f7Q:function f7Q(){},
f7R:function f7R(){},
f7S:function f7S(){},
f7T:function f7T(){},
f7U:function f7U(){},
f7V:function f7V(){},
Vc:function Vc(d){this.a=d},
biv:function biv(){this.d=$
this.c=this.a=null},
ex2:function ex2(d){this.a=d},
ex3:function ex3(d){this.a=d},
ex1:function ex1(d){this.a=d},
ex4:function ex4(){},
ex0:function ex0(d,e){this.a=d
this.b=e},
ex_:function ex_(d){this.a=d},
hBr(){var w,v,u=x.n,t=C.a([],u)
for(w=0;w<260;++w){v=new C.eT()
v.dI(w)
t.push(v.ai()*3.141592653589793*2)}u=C.a([],u)
for(w=0;w<260;++w){v=new C.eT()
v.dI(w+900)
u.push(2.2+v.ai())}return new A.bii(new C.cq(null,x.A),new A.Oa(B.cH),B.J,B.at,t,u,$,B.bw,0,C.a([],x.X),null,null)},
hBt(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hBs(d){return 1.5+1.6*Math.log(d.d/1000+1)},
h3Z(d,e,f){return $.hC2.cf(0,d+"|"+C.t(e)+"|"+f.l(),new A.eRc(d,e,f))},
UY:function UY(d){this.a=d},
bii:function bii(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.fh$=j
_.kM$=k
_.fL$=l
_.fi$=m
_.bq$=n
_.a7$=o
_.c=_.a=null},
epb:function epb(d,e){this.a=d
this.b=e},
epm:function epm(d,e){this.a=d
this.b=e},
epn:function epn(d,e){this.a=d
this.b=e},
epj:function epj(d){this.a=d},
epk:function epk(d){this.a=d},
epl:function epl(d){this.a=d},
epo:function epo(d){this.a=d},
epi:function epi(d){this.a=d},
epp:function epp(d,e){this.a=d
this.b=e},
epq:function epq(d){this.a=d},
eph:function eph(d,e){this.a=d
this.b=e},
epr:function epr(d){this.a=d},
epg:function epg(d,e){this.a=d
this.b=e},
eps:function eps(d){this.a=d},
epf:function epf(d){this.a=d},
ept:function ept(d){this.a=d},
epe:function epe(d){this.a=d},
epu:function epu(d){this.a=d},
epd:function epd(d){this.a=d},
epv:function epv(d){this.a=d},
epc:function epc(d){this.a=d},
epa:function epa(){},
ep9:function ep9(){},
ep8:function ep8(d){this.a=d},
ep7:function ep7(d){this.a=d},
bpx:function bpx(d,e){this.b=d
this.a=e},
eRc:function eRc(d,e,f){this.a=d
this.b=e
this.c=f},
eRd:function eRd(){},
eRe:function eRe(){},
U7:function U7(d){this.a=d},
aBF:function aBF(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fh$=k
_.kM$=l
_.fL$=m
_.fi$=n
_.bq$=o
_.a7$=p
_.c=_.a=null},
dSH:function dSH(){},
dT9:function dT9(){},
dSW:function dSW(d,e){this.a=d
this.b=e},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSX:function dSX(d){this.a=d},
dSM:function dSM(d){this.a=d},
dSY:function dSY(d){this.a=d},
dSV:function dSV(d){this.a=d},
dT1:function dT1(d){this.a=d},
dSU:function dSU(d){this.a=d},
dT2:function dT2(d){this.a=d},
dST:function dST(d,e){this.a=d
this.b=e},
dT3:function dT3(d){this.a=d},
dT4:function dT4(d){this.a=d},
dSS:function dSS(d,e){this.a=d
this.b=e},
dT5:function dT5(d){this.a=d},
dSR:function dSR(d,e){this.a=d
this.b=e},
dT6:function dT6(d){this.a=d},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dT7:function dT7(d){this.a=d},
dSP:function dSP(d,e){this.a=d
this.b=e},
dT8:function dT8(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dSL:function dSL(d){this.a=d},
dT_:function dT_(d){this.a=d},
dSK:function dSK(d){this.a=d},
dT0:function dT0(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSG:function dSG(d){this.a=d},
dSF:function dSF(){},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSE:function dSE(d){this.a=d},
b8w:function b8w(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
UQ:function UQ(d){this.a=d},
bif:function bif(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.fh$=e
_.kM$=f
_.fL$=g
_.fi$=h
_.bq$=i
_.a7$=j
_.c=_.a=null},
ei5:function ei5(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e){this.a=d
this.b=e},
ei4:function ei4(d,e){this.a=d
this.b=e},
ei7:function ei7(d,e){this.a=d
this.b=e},
ei3:function ei3(d,e){this.a=d
this.b=e},
bp5:function bp5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ePm:function ePm(d){this.a=d},
aJR:function aJR(){},
buH:function buH(){},
aKp:function aKp(){},
buV:function buV(){},
aKs:function aKs(){},
buX:function buX(){},
hBp(){var w,v,u,t=C.a([],x.d9),s=C.a([],x.g)
for(w=0;w<150;++w){v=new C.eT()
v.dI(w)
v=v.ai()
u=new C.eT()
u.dI(w+500)
s.push(new C.u(v,u.ai()))}return new A.bgY(new C.cq(null,x.A),new A.Oa(B.cH),t,B.at,s,$,B.bw,0,C.a([],x.X),null,null)},
OD:function OD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Ta:function Ta(d){this.a=d},
bgY:function bgY(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.fh$=i
_.kM$=j
_.fL$=k
_.fi$=l
_.bq$=m
_.a7$=n
_.c=_.a=null},
dAR:function dAR(){},
dAF:function dAF(){},
dAG:function dAG(d,e){this.a=d
this.b=e},
dAH:function dAH(d,e){this.a=d
this.b=e},
dAE:function dAE(d){this.a=d},
dAD:function dAD(d){this.a=d},
dAJ:function dAJ(d){this.a=d},
dAC:function dAC(d,e){this.a=d
this.b=e},
dAK:function dAK(d){this.a=d},
dAB:function dAB(d){this.a=d},
dAL:function dAL(d){this.a=d},
dAA:function dAA(d){this.a=d},
dAM:function dAM(d){this.a=d},
dAz:function dAz(d){this.a=d},
dAN:function dAN(d){this.a=d},
dAy:function dAy(d){this.a=d},
dAO:function dAO(d){this.a=d},
dAx:function dAx(d){this.a=d},
dAP:function dAP(d){this.a=d},
dAw:function dAw(d){this.a=d},
dAQ:function dAQ(d){this.a=d},
dAv:function dAv(d){this.a=d},
dAI:function dAI(d){this.a=d},
dAu:function dAu(d){this.a=d},
b7V:function b7V(d,e){this.b=d
this.a=e},
adn:function adn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U3:function U3(d){this.a=d},
bhn:function bhn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.fh$=p
_.kM$=q
_.fL$=r
_.fi$=s
_.bq$=t
_.a7$=u
_.c=_.a=null},
dRe:function dRe(d){this.a=d},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR5:function dR5(d,e){this.a=d
this.b=e},
dR3:function dR3(d,e){this.a=d
this.b=e},
dR6:function dR6(d){this.a=d},
dR2:function dR2(d){this.a=d},
dR7:function dR7(d){this.a=d},
dR1:function dR1(d,e){this.a=d
this.b=e},
dR8:function dR8(d){this.a=d},
dR0:function dR0(d,e){this.a=d
this.b=e},
dR9:function dR9(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dRa:function dRa(d){this.a=d},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dRb:function dRb(d){this.a=d},
dQY:function dQY(d){this.a=d},
dRc:function dRc(d){this.a=d},
dQX:function dQX(d){this.a=d},
dRd:function dRd(d){this.a=d},
dQW:function dQW(d){this.a=d},
bd6:function bd6(d,e){this.b=d
this.a=e},
d6q:function d6q(d){this.a=d},
UM:function UM(d){this.a=d},
bie:function bie(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.fh$=f
_.kM$=g
_.fL$=h
_.fi$=i
_.bq$=j
_.a7$=k
_.c=_.a=null},
ehk:function ehk(d,e){this.a=d
this.b=e},
ehl:function ehl(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehm:function ehm(d){this.a=d},
ehi:function ehi(d){this.a=d},
ehn:function ehn(d){this.a=d},
ehh:function ehh(d){this.a=d},
eho:function eho(d){this.a=d},
ehg:function ehg(d){this.a=d},
ehp:function ehp(d){this.a=d},
ehf:function ehf(d,e){this.a=d
this.b=e},
ehq:function ehq(d){this.a=d},
ehe:function ehe(d,e){this.a=d
this.b=e},
ehr:function ehr(d){this.a=d},
ehd:function ehd(d,e){this.a=d
this.b=e},
ehs:function ehs(d){this.a=d},
ehc:function ehc(d,e){this.a=d
this.b=e},
bon:function bon(d,e){this.b=d
this.a=e},
aJn:function aJn(){},
buz:function buz(){},
aJM:function aJM(){},
buG:function buG(){},
aKo:function aKo(){},
buU:function buU(){},
h2N(d,e,f){var w,v
C.fP(0,0,!1)
w=new C.l9(e,f,$,null)
v=w.bEi(d,e)
w.f=v
w.c=b.G.URL.createObjectURL(v)
return w},
hOT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=C.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=C.a([],x.ez)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,C.K)(w),++q){p=w[q]
u.push(C.E(["k",p.b,"x",C.nK(B.k.aa(p.c,4)),"y",C.nK(B.k.aa(p.d,4)),"v",p.e,"l",C.nK(B.k.aa(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",C.nK(B.k.aa(p.as,3)),"ch",p.at,"vc",C.nK(B.k.aa(p.z,3)),"s",C.nK(B.k.aa(p.ch,2))],s,r))}w=C.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,C.K)(t),++q){m=t[q]
w.push(C.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=C.B(f,C.a2(f).k("cl.E"))
B.d.fe(l)
return B.R.ao(C.E(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
hYc(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=B.R.aG(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
B.d.a8(h)
B.d.a8(a6.b)
v=C.a([],x.fs)
g=x.Q
f=g.a(J.q(w,"parts"))
f=J.aV(f==null?B.cG:f)
while(f.C()){u=f.gU(f)
t=i.a(u)
e=C.aT(J.q(t,"k"))
s=e==null?"":e
if(!$.pW().aj(0,s)){J.ce(v,null)
continue}d=s
a0=C.aN(J.q(t,"x"))
if(a0==null)a0=0.5
a1=C.aN(J.q(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new A.t5(a2,d,a0,a1)
a3.anZ(a2,d,a0,a1)
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
d=C.k8(J.q(t,"on"))
if(d==null)d=r.w
r.w=d
d=C.k8(J.q(t,"b"))
r.x=d===!0
d=C.aT(J.q(t,"bw"))
if(d==null)d=""
r.ay=d
d=C.aN(J.q(t,"c"))
if(d==null)d=r.as
r.as=d
d=C.aN(J.q(t,"ch"))
r.at=B.k.O(d==null?0:d)
d=C.aN(J.q(t,"vc"))
if(d==null)d=0
r.z=d
d=C.aN(J.q(t,"s"))
r.ch=B.k.D(d==null?1:d,1,2.6)
J.ce(v,r)}i=g.a(J.q(w,"wires"))
i=J.aV(i==null?B.cG:i)
h=x.j
while(i.C()){q=i.gU(i)
p=h.a(q)
f=C.aN(J.q(p,0))
o=f==null?a5:B.k.O(f)
f=C.aN(J.q(p,2))
n=f==null?a5:B.k.O(f)
if(o==null||n==null||o<0||n<0||o>=J.ab(v)||n>=J.ab(v))continue
m=J.q(v,o)
l=J.q(v,n)
if(m!=null&&l!=null)a6.aix(m,B.k.O(C.f8(J.q(p,1))),l,B.k.O(C.f8(J.q(p,3))))}i=C.aN(J.q(w,"challenge"))
i=B.k.O(i==null?0:i)
k=C.aZ(x.S)
h=g.a(J.q(w,"done"))
h=J.aV(h==null?B.cG:h)
while(h.C()){j=h.gU(h)
J.ce(k,B.k.O(C.f8(j)))}return new C.bm2(i,k)}catch(a4){return a5}},
fl3(){var w=0,v=C.j(x.dk),u,t=2,s=[],r,q,p,o,n
var $async$fl3=C.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=C
n=J
w=7
return C.b(C.ay(),$async$fl3)
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
return C.i($async$fl3,v)},
bBk(d){return A.hZM(d)},
hZM(d){var w=0,v=C.j(x.H),u=1,t=[],s,r
var $async$bBk=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return C.b(C.ay(),$async$bBk)
case 7:w=6
return C.b(f.aq("String","ngmy_electronics_lab_v1",d),$async$bBk)
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
return C.i($async$bBk,v)},
cng(d,e){var w=0,v=C.j(x.g7),u
var $async$cng=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:u=$.fSq().wB(d,null,null,null,e)
w=1
break
case 1:return C.h(u,v)}})
return C.i($async$cng,v)}},D,G,H,L,X,A2,A3,Y,Aj,A4,A5
J=c[1]
C=c[0]
B=c[2]
A6=c[114]
Z=c[104]
A_=c[101]
A7=c[27]
E=c[88]
N=c[98]
A8=c[106]
S=c[110]
A0=c[112]
A9=c[115]
I=c[96]
Aa=c[86]
O=c[118]
Ab=c[105]
A1=c[111]
Ac=c[65]
Q=c[74]
Ad=c[81]
Ae=c[78]
R=c[84]
T=c[92]
Af=c[119]
W=c[109]
U=c[87]
M=c[94]
Ag=c[116]
V=c[113]
Ah=c[69]
Ai=c[108]
P=c[93]
K=c[107]
F=c[89]
A=a.updateHolder(c[17],A)
D=c[85]
G=c[100]
H=c[40]
L=c[90]
X=c[97]
A2=c[102]
A3=c[95]
Y=c[91]
Aj=c[99]
A4=c[103]
A5=c[117]
A.ad.prototype={
ae(d,e){return new A.ad(this.a+e.a,this.b+e.b,this.c+e.c)},
aB(d,e){return new A.ad(this.a-e.a,this.b-e.b,this.c-e.c)},
aK(d,e){return new A.ad(this.a*e,this.b*e,this.c*e)},
a29(d){var w=this.b,v=d.c,u=this.c,t=d.b,s=d.a,r=this.a
return new A.ad(w*v-u*t,u*s-r*v,r*t-w*s)},
gSB(){var w=this.a,v=this.b,u=this.c
return Math.sqrt(w*w+v*v+u*u)},
gqn(d){var w=this,v=w.gSB()
return v<1e-9?w:new A.ad(w.a/v,w.b/v,w.c/v)}}
A.t8.prototype={}
A.dM.prototype={}
A.Dk.prototype={}
A.Eo.prototype={}
A.ua.prototype={
bdP(d,e,f,g,h,i,j){var w=this,v=i.gqn(0)
w.a.push(new A.t8(C.a([d,e,f,g],x.o),v,h,w.b,0,w.d,!0,w.c,w.e))},
beU(d,e,f,g){var w=this,v=e.aB(0,d).a29(f.aB(0,d)),u=v.gqn(0)
w.a.push(new A.t8(C.a([d,e,f],x.o),u,g,w.b,0,w.d,!0,w.c,w.e))},
Jx(d,e,f,g,h,i,j){var w,v,u,t=e.a/2,s=e.b/2,r=e.c/2,q=new A.bU3(this,i,new A.bU4(j,d),new A.bU5(j),f,h),p=-t,o=-s,n=2*t,m=2*s
q.$4(new A.ad(0,0,1),new A.ad(p,o,r),new A.ad(n,0,0),new A.ad(0,m,0))
w=-r
q.$4(new A.ad(0,0,-1),new A.ad(t,o,w),new A.ad(-2*t,0,0),new A.ad(0,m,0))
v=-2*r
q.$4(new A.ad(1,0,0),new A.ad(t,o,r),new A.ad(0,0,v),new A.ad(0,m,0))
u=2*r
q.$4(new A.ad(-1,0,0),new A.ad(p,o,w),new A.ad(0,0,u),new A.ad(0,m,0))
if(g){q.$4(new A.ad(0,1,0),new A.ad(p,s,r),new A.ad(n,0,0),new A.ad(0,0,v))
q.$4(new A.ad(0,-1,0),new A.ad(p,o,w),new A.ad(n,0,0),new A.ad(0,0,u))}},
lQ(d,e,f,g){return this.Jx(d,e,f,!0,0,g,0)},
r4(d,e,f,g,h){return this.Jx(d,e,f,!0,g,h,0)},
eb(d,e,f,g){return this.Jx(d,e,f,!0,g,1,0)},
ja(d,e,f){return this.Jx(d,e,f,!0,0,1,0)},
aAt(d,e,f,g,h){return this.Jx(d,e,f,g,h,1,0)},
czi(d,e,f,g,h,i){return this.Jx(d,e,f,g,h,i,0)},
b77(d,e,f,g,h){return this.Jx(d,e,f,!0,g,1,h)},
RC(b3,b4,b5,b6,b7,b8,b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b4.aB(0,b3).gqn(0),a8=a7.b,a9=a7.a29(Math.abs(a8)<0.9?D.CF:D.SW).gqn(0),b0=a7.a29(a9).gqn(0),b1=b9<0?b5:b9,b2=new A.bU6(a9,c1,b0)
for(w=a6.a,v=b3.a,u=b3.b,t=b3.c,s=b4.a,r=b4.b,q=b4.c,p=x.o,o=a7.a*-1,a8*=-1,n=a7.c*-1,m=0;m<c1;){l=b2.$1(m);++m
k=b2.$1(m)
j=l.a
i=k.a
h=l.b
g=k.b
f=l.c
e=k.c
d=new A.ad(j+i,h+g,f+e).gqn(0)
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
w.push(new A.t8(C.a([new A.ad(a0,a1,a2),new A.ad(a3,a4,a5),new A.ad(i,g,e),new A.ad(j,h,f)],p),d,b6,a6.b,c0,a6.d,b8,a6.c,a6.e))
if(b7){w.push(new A.t8(C.a([b3,new A.ad(a3,a4,a5),new A.ad(a0,a1,a2)],p),new A.ad(o,a8,n),b6,a6.b,c0,a6.d,!1,a6.c,a6.e))
w.push(new A.t8(C.a([b4,new A.ad(j,h,f),new A.ad(i,g,e)],p),a7,b6,a6.b,c0,a6.d,!1,a6.c,a6.e))}}},
a2c(d,e,f,g,h,i,j){return this.RC(d,e,f,g,!0,!1,h,i,j)},
aiY(d,e,f,g,h,i,j,k){return this.RC(d,e,f,g,h,i,-1,j,k)},
f_(d,e,f,g,h,i){return this.RC(d,e,f,g,!0,!1,-1,h,i)},
AP(d,e,f,g,h){return this.RC(d,e,f,g,!0,!1,-1,0,h)},
b8W(d,e,f,g,h,i,j){return this.RC(d,e,f,g,h,!1,-1,i,j)},
j9(a7,a8,a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=new A.bU2(b0,b1)
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
w.push(new A.t8(C.a([new A.ad(v+j*a8,u+i*a8,t+h*a8),new A.ad(v+g*a8,u+f*a8,t+e*a8),new A.ad(v+d*a8,u+a0*a8,t+a1*a8),new A.ad(v+a2*a8,u+a3*a8,t+a4*a8)],s),new A.ad(j+g+d+a2,i+f+a0+a3,h+e+a1+a4).gqn(0),a9,a5.b,b2,a5.d,!1,a5.c,a5.e))}},
b70(d,e,f,g){return this.j9(d,e,f,6,10,g)},
amf(d,e,f,g,h,i,j,k){var w,v,u,t,s
for(w=0;v=w+1,v<d.length;w=v){u=d[v]
t=d[w]
if(new A.ad(u.a-t.a,u.b-t.b,u.c-t.c).gSB()<0.000001)continue
u=d[w]
t=d[v]
if(g)s=w===0||w===d.length-2
else s=!1
this.aiY(u,t,e,f,s,h,j,k)}if(i)for(u=e*0.98,w=1;v=w+1,v<d.length;w=v)this.j9(d[w],u,f,4,k,j)},
kg(d,e,f,g,h,i){return this.amf(d,e,f,!0,!1,g,h,i)},
aFU(d,e,f,g,h,i,j){return this.amf(d,e,f,g,!1,h,i,j)},
yF(a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this
a3.b8W(a4,a5,a6,a8,!1,a9,b0)
w=a5.aB(0,a4).gqn(0)
v=w.a29(Math.abs(w.b)<0.9?D.CF:D.SW).gqn(0)
u=new A.bU7(v,b0,w.a29(v).gqn(0))
for(t=[new C.z(a4,w.aK(0,-1)),new C.z(a5,w)],s=a3.a,r=x.o,q=0;q<2;++q){p=t[q]
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
s.push(new A.t8(C.a([new A.ad(p+i*a7,m+h*a7,l+j*a7),new A.ad(p+f*a6,m+e*a6,l+g*a6),new A.ad(p+a0*a6,m+a1*a6,l+d*a6),new A.ad(p+a2.a*a7,m+a2.b*a7,l+a2.c*a7)],r),n,a8,a3.b,a9,a3.d,!1,a3.c,a3.e))}}},
cOK(d,e,f,g,h,i){return this.yF(d,e,f,g,h,i,16)}}
A.v6.prototype={
ana(d){var w,v,u,t=this
t.x=d
if(!d){w=t.a
v=t.r
u=t.w
t.a=B.k.D(w,v-u,v+u)}t.aZ()},
n0(d,e,f,g){var w=this
w.y=f
w.z=d
w.Q=g
w.as=e
w.aZ()},
or(d,e){return this.n0(d,null,e,null)},
biE(d,e){return this.n0(d,null,null,e)},
aFJ(d){var w,v,u,t=this
if(!(t.y!=null||t.z!=null||t.Q!=null||t.as!=null))return
w=1-Math.exp(-d*7)
v=t.y
if(v!=null){u=A.zv(t.d,v,w)
t.d=u
if(u.aB(0,v).gSB()<0.02){v=t.y
v.toString
t.d=v
t.y=null}}v=t.z
if(v!=null){u=t.c
u+=(v-u)*w
t.c=u
if(Math.abs(u-v)<0.05){t.c=v
t.z=null}}v=t.Q
if(v!=null){u=t.a
u+=(v-u)*w
t.a=u
if(Math.abs(u-v)<0.003){t.a=v
t.Q=null}}v=t.as
if(v!=null){u=t.b
u+=(v-u)*w
t.b=u
if(Math.abs(u-v)<0.003){t.b=v
t.as=null}}t.aZ()},
amx(d){var w=this
w.z=null
w.c=B.k.D(w.c*d,6,w.f)
w.aZ()}}
A.aTj.prototype={
cMB(d){var w,v,u,t
for(w=this.a,v=w.length-1,u=d.a,t=d.b;v>=0;--v)if(w[v].a.gbI().a.contains(u,t))return w[v].b
return 0}}
A.asW.prototype={
gbeG(d){var w=this.r
w=w==null?null:w.a
return w==null?0:w},
a6(d6,d7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=0+d2,d5=0+d3
$.W()
w=C.L()
v=d0.x
u=C.ar(v,B.c,0.06)
u.toString
w.sau(new C.a6(B.b1,B.b3,B.x,C.a([u,v],x.O),d1,d1).aw(0,new C.a9(0,0,d4,d5)))
d6.aX(new C.a9(0,0,d4,d5),w)
t=Math.min(d2,d3)*1.15
s=d2/2
r=d3/2
d3=d0.c
q=new A.ckC(Math.cos(d3.a),Math.sin(d3.a),Math.cos(d3.b),Math.sin(d3.b))
p=new A.ckD(d0,q)
o=D.fsi.gqn(0)
n=o.ae(0,D.fpf).gqn(0)
m=C.a([],x.bl)
d2=d0.w
d3=d0.b
l=d3.a
if(!(d2==null)){d4=C.B(l,x.fX)
B.d.v(d4,d2.$1(d0.gbeG(0)))
l=d4}for(d2=l.length,d4=d0.e,d5=x.v,w=d4!==0,v=o.a,u=o.b,k=o.c,j=x.o,i=d0.f,h=i!=null,g=n.a,f=n.b,e=n.c,d=d0.r,a0=d==null,a1=0;a1<l.length;l.length===d2||(0,C.K)(l),++a1){a2=l[a1]
if(h&&!i.$1(a2.w))continue
a3=C.a([],j)
for(a4=a2.a,a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,C.K)(a4),++a6)a3.push(p.$1(a4[a6]))
a7=A.hEf(a3)
a3=a7.length
if(a3<3)continue
for(a8=0,a9=D.It,a6=0;a6<a3;++a6){b0=a7[a6]
a4=b0.c
a8+=a4
a9=new A.ad(a9.a+b0.a,a9.b+b0.b,a9.c+a4)}a3=1/a3
b1=q.$1(a2.b)
a4=b1.a
a5=b1.b
b2=b1.c
if(a4*(a9.a*a3)+a5*(a9.b*a3)+b2*(a9.c*a3)>0){if(!a2.r)continue
b1=new A.ad(a4*-1,a5*-1,b2*-1)}a3=b1.a
a4=b1.b
a5=b1.c
b3=0.56+0.58*Math.max(0,a3*v+a4*u+a5*k)
b2=a2.e
b4=b2>0?Math.pow(Math.max(0,a3*g+a4*f+a5*e),28)*b2:0
b5=a2.c
if(w&&a2.d===d4){a3=a0?d1:d.a
a3=C.ar(b5,B.b4,0.28+0.14*Math.sin((a3==null?0:a3)*6))
a3.toString
b3+=0.12
b5=a3}a3=255*b4*0.55
b6=B.k.V(B.k.D(b5.gb6(b5)*255*b3+a3,0,255))
b7=B.k.V(B.k.D(b5.gbe()*255*b3+a3,0,255))
b8=B.k.V(B.k.D(b5.gbg(b5)*255*b3+a3,0,255))
a3=$.W()
a4=C.a([],d5)
b9=new C.aP(a3.r,B.aq,d1,d1,a4)
for(c0=0;c0<a7.length;++c0){b0=a7[c0]
a3=b0.c
c1=s+b0.a*t/a3
c2=r-b0.b*t/a3
if(c0===0){a3=new C.b5(c1,c2)
a4.push(a3)
a5=b9.f
if(a5!=null)a3.bx(a5)
a3=b9.e
if(a3!=null)a3.a.delete()
b9.e=null}else{a3=new C.ap(c1,c2)
a4.push(a3)
a5=b9.f
if(a5!=null)a3.bx(a5)
a3=b9.e
if(a3!=null)a3.a.delete()
b9.e=null}}a3=new C.bE()
a4.push(a3)
a4=b9.f
if(a4!=null)a3.bx(a4)
a3=b9.e
if(a3!=null)a3.a.delete()
b9.e=null
a3=a2.f
a4=a7.length
a5=a2.d
b2=a5===d4&&w
m.push(new A.OI(b9,new C.w(a3,(b6&255)/255,(b7&255)/255,(b8&255)/255,B.t),a8/a4-a2.x,a5,a3<0.99,b2))}B.d.b1(m,new A.ckB())
d2=d0.d.a
B.d.a8(d2)
$.W()
c3=C.L()
c3.b=B.V
c4=C.L()
c4.b=B.af
c4.c=0.8
for(d4=m.length,d5=d6.a,a1=0;a1<m.length;m.length===d4||(0,C.K)(m),++a1){c5=m[a1]
v=c5.b
c3.r=v.gp(0)
u=c5.a
c6=c3.H()
k=u.e
d5.drawPath((k==null?u.e=new C.cE(u.gbI().a.snapshot()):k).a,c6)
c6.delete()
if(!c5.e){c4.r=v.gp(0)
c6=c4.H()
v=u.e
d5.drawPath((v==null?u.e=new C.cE(u.gbI().a.snapshot()):v).a,c6)
c6.delete()}v=c5.d
if(v!==0)d2.push(new C.z(u,v))}if(w){$.W()
c7=C.L()
c7.b=B.af
c7.c=1.4
c7.r=B.c.j(0.35+0.25*Math.sin(d0.gbeG(0)*6)).gp(0)
for(d2=m.length,a1=0;a1<m.length;m.length===d2||(0,C.K)(m),++a1){c5=m[a1]
if(c5.f){d4=c5.a
c6=c7.H()
w=d4.e
d5.drawPath((w==null?d4.e=new C.cE(d4.gbI().a.snapshot()):w).a,c6)
c6.delete()}}}for(d2=d3.c,d3=d2.length,a1=0;a1<d2.length;d2.length===d3||(0,C.K)(d2),++a1){c8=d2[a1]
b0=p.$1(c8.a)
d4=b0.c
if(d4<1)continue
w=s+b0.a*t/d4
d4=r-b0.b*t/d4
c9=new C.ku(new C.es(c8.b,d1,d1,B.cQ,d1,d1,d1,d1,d1,d1,new C.F(!0,B.c,d1,d1,d1,d1,11,B.u,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1,d1)),B.a5,B.ci,new C.jC(1),d1,d1,d1,d1,B.cg,d1)
c9.eR()
v=c9.b
u=v.c
v=v.a.c
b6=C.by(C.cr(new C.u(w,d4),v.gbc(v)+8,u+14),B.iA)
$.W()
u=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
u.r=c8.c.j(0.92).gp(0)
c6=u.H()
d5.drawRRect(C.ew(b6),c6)
c6.delete()
u=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
u.b=B.af
u.c=1
u.r=B.ad.gp(0)
c6=u.H()
d5.drawRRect(C.ew(b6),c6)
c6.delete()
u=c9.b
v=u.c
u=u.a.c
c9.a6(d6,new C.u(w-v/2,d4-u.gbc(u)/2))}},
ar(d){return!0}}
A.OI.prototype={}
A.asX.prototype={
T(){return new A.boc(new A.aTj(C.a([],x.a6)),new C.eK(0,$.aw()),B.bw,null,null)}}
A.boc.prototype={
a_(){var w,v=this
v.a1()
w=v.q3(new A.eNS(v))
w.j1(0)
v.d!==$&&C.aQ()
v.d=w},
q(){var w=this.d
w===$&&C.c()
w.q()
w=this.f
w.S$=$.aw()
w.P$=0
this.bsN()},
B(d){var w,v=this,u=null,t=v.a,s=t.c,r=t.d,q=t.e,p=t.r,o=v.f
t=t.w
w=C.a([r,o],x.U)
w=C.a([C.jp(new C.eq(C.b3(u,u,u,new A.asW(s,r,v.e,q,p,o,t,v.a.x,new C.h2(w)),B.eS),u),B.q,u)],x.p)
v.a.toString
return C.oE(B.jp,C.aE(B.c5,new C.an(B.W,u,B.b_,B.q,w,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.eNO(v),new A.eNP(v),u,u,u,u,u,u,u,new A.eNQ(v),u,u,u,!1,B.aa),u,u,u,u,u,u,new A.eNR(v),u)}}
A.aL6.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.ain.prototype={}
A.Uj.prototype={
T(){return new A.bhJ(C.U(x.N,x.i),new C.aq(B.as,$.aw()),C.a([],x.X),C.a([],x.L),C.mn(0,null,null))}}
A.bhJ.prototype={
gUO(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
this.ch.q()
this.a2()},
Mr(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o
var $async$Mr=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=B.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ak$.d.c
if(s!=null)s.jp()
p.bM(0,B.c3)
t.m(new A.dZV(t))
t.a.toString
p=t.gUO()
w=3
return C.b(A.bwV(A.hDf(q,A.hOK(p),o,t.ay)),$async$Mr)
case 3:s=e
r=s==null?null:J.iR(s)
if(r==null||r.length===0||B.a.a0(r,"{"))r=A.hQ8(q,p,o)
if(t.c==null){w=1
break}t.m(new A.dZW(t,o,r))
$.aU.x1$.push(new A.dZX(t))
case 1:return C.h(u,v)}})
return C.i($async$Mr,v)},
WN(d){return this.bUO(d)},
aSP(){return this.WN(null)},
bUO(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$WN=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:p={}
o=B.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ak$.d.c
if(s!=null)s.jp()
t.f.saU(0,o)
t.m(new A.e_7(t))
A.dD(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=A
w=3
return C.b(A.bwV(A.hJW(o)),$async$WN)
case 3:r=n.a=m.hXV(f)
p.b=""
if(r!=null&&!A.hOL(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=A.hQ9(o)
q=C.af(y.v,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new A.ain(s.a,s.b,s.c,s.d,y.B,s.f)
if(t.c==null){w=1
break}t.m(new A.e_8(p,t))
t.bZY(p.a)
case 1:return C.h(u,v)}})
return C.i($async$WN,v)},
bZY(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
B.d.a8(w)
w=++m.as
v=m.gUO()
B.d.a8(v.a)
B.d.a8(v.b)
m.e.a8(0)
m.m(new A.e_3(m))
t=d.d
s=C.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new A.e_1(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new A.e_4(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,C.K)(r),++u){p.$2(o,new A.e_5(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new A.e_6(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=B.bz.j(0.1),g=C.m(16),f=C.I(B.bz.j(0.35),B.r,1)
if(m.x)j=C.A(C.a([D.eDW,B.bd,C.D(C.d(m.Q,l,l,l,l,l,l,B.S1,l,l,l),1)],x.p),B.m,l,B.e,B.j,0,l,l)
else if(k==null)j=D.f1M
else{w=C.D(C.d(k.a,l,l,l,l,l,l,Aa.St,l,l,l),1)
v=x.p
w=C.a([C.A(C.a([w,C.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.eOj,l,l,l)],v),B.m,l,B.e,B.j,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new C.C(B.uJ,C.d(u,l,l,l,l,l,l,D.eQR,l,l,l),l))
w.push(B.d_)
w.push(C.d(k.b,l,l,l,l,l,l,D.Id,l,l,l))
u=k.e
if(u.length!==0){t=B.aM.j(0.12)
s=C.m(10)
w.push(C.p(l,C.d(u,l,l,l,l,l,l,D.eTa,l,l,l),B.f,l,l,new C.o(t,l,l,s,l,l,B.n),l,l,l,B.it,B.cl,l,l,l))}w.push(B.ao)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?B.c:B.aA
w.push(new C.C(B.KS,new C.cs(B.aX,B.e,B.j,B.F,l,B.p,l,0,C.a([new C.x(t,l,B.mr,l,l,l,l,l,l,l,l,l),B.bp,new C.bG(1,B.bn,new C.x(q,l,new C.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,C.K)(j),++p){o=j[p]
t=new C.aX(12,12)
s=new C.aX(12,12)
B.d.v(w,C.a([B.P,new C.bK(B.a7,l,l,C.p(l,new C.x(o.a,l,B.a5T,l,l,l,l,l,l,l,l,l),B.f,l,l,new C.o(B.bz.j(0.3),l,l,new C.bt(t,t,t,t),l,l,B.n),l,l,l,l,B.fN,l,l,l),l),B.au,C.p(l,new C.x(o.b,l,D.eYl,l,l,l,l,l,l,l,l,l),B.f,l,l,new C.o(B.c.j(0.07),l,l,new C.bt(s,s,s,s),l,l,B.n),l,l,l,l,B.bR,l,l,l)],v))}if(m.ax)w.push(D.dY9)
j=C.ci(C.v(w,B.F,l,B.e,B.j,0,B.p),B.q,m.ch,B.y,l,l,l,l,B.ai)}w=x.p
g=C.v(C.a([C.agC(C.p(l,j,B.f,l,new C.aY(0,1/0,0,i),new C.o(h,l,f,g,l,l,B.n),l,l,l,D.blo,B.eu,l,l,1/0),B.bc,B.i6),C.D(A.fUc(m.gUO(),l,l,m.e),1)],w),B.m,l,B.e,B.j,0,B.p)
f=C.a([],w)
j=k!=null
if(j){i=m.at
i=C.a([new A.dx("Ask about it",i,new A.e_b(m),l,B.bz,l),new A.dx("Invent something new",!i,new A.e_c(m),l,B.bz,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.d3a[p]
i.push(new A.dx(n,!1,new A.e_d(m,n),l,B.bz,l))}f.push(new A.eJ(i,l,l))}if(!j||!m.at){i=C.a([],w)
for(p=0;p<8;++p){r=D.cOW[p]
i.push(new A.dx(r,!1,new A.e_e(m,r),l,B.bz,l))}f.push(new A.eJ(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=B.c.j(0.07)
i=C.D(C.aL(l,B.T,!1,l,!0,B.q,l,C.aM(),m.f,l,l,l,l,l,2,C.bo(l,new C.b4(4,C.m(16),B.Z),l,B.eN,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,B.ko,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.y,!0,l,!0,l,!1,l,B.ag,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new A.e_f(m,k),l,!1,l,l,!1,l,!0,l,B.a8,l,l,l,l,l,l,l,l,l,l,l,B.dj,!0,B.a5,l,B.am,l,B.aMq,l,l),1)
h=m.at
v=h&&j?D.byj:B.dS
j=h&&j?"Ask":"Invent"
f.push(C.A(C.a([i,B.ab,new A.fg(v,j,new A.e_g(m,k),B.bz,l)],w),B.m,l,B.e,B.j,0,l,l))
return A.jB(B.bz,B.h5,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",C.v(f,B.m,l,B.e,B.Q,0,B.p))}}
A.Fh.prototype={}
A.uv.prototype={}
A.UK.prototype={
T(){return new A.aCw(B.J,B.J,B.at,C.aZ(x.S),$,B.bw,0,C.a([],x.X),null,null)}}
A.aCw.prototype={
gaTX(){var w,v,u,t=this,s=D.G7[t.cx],r=D.Pn[t.cy],q=D.Bn[t.db],p=C.a([],x.n)
for(w=t.dx,w=C.ea(w,w.r,C.a2(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.atx[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+B.d.cI(p,0,new A.eeS())},
ga0S(){return D.G7[this.cx].d/this.gaTX()},
gaLz(){return 0.1*(D.G7[this.cx].d/0.9)/D.Pn[this.cy].d},
a_(){this.a1()
this.kZ()
A.yY("rocket_lander").bz(new A.efb(this),x.P)},
c_6(){var w=this
w.ay=B.k.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+B.cH.ai()*0.6
w.f=new C.u(0.15+B.cH.ai()*0.7,0.08)
w.r=new C.u((B.cH.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
lf(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new A.efc())
return}w=D.qS[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=B.k.D(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new C.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga0S()
v=v.ae(0,new C.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaLz())}if(m.dy){t=m.r
v=v.aB(0,t.aK(0,t.gcl()*6*D.avg[m.d]))}t=m.r=m.r.ae(0,v.aK(0,d))
s=m.f=m.f.ae(0,t.aK(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new C.u(-t.a*0.4,t.b)
t=new C.u(B.k.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new C.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Bn[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
A.vx("rocket_lander",C.E(["unlocked",t],x.N,x.z))
A.B2("bell",C.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga0S()/(D.qS[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+B.k.aa(m.ga0S()/(D.qS[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
A.dD(80,"",500,0,0.6,"noise")
C.fJ()}}if(m.Q&&m.x>0&&B.o.F(B.k.bw(m.CW*20),2)===0)A.dD(90,"",70,0,0.12,"noise")
m.m(new A.efd())},
adO(d,e,f,g,h){var w,v=null,u=C.d(d,v,v,v,v,v,v,D.eQo,v,v,v),t=x.p,s=C.a([],t)
for(w=0;w<3;++w)s.push(new A.dx(e[w].a,f.$1(w),new A.eeU(this,g,w),v,h,v))
return new C.C(B.f2,C.v(C.a([u,B.d_,C.c5(B.bG,s,B.bx,6,6)],t),B.F,v,B.e,B.j,0,B.p),v)},
bzB(d){var w,v,u,t,s=this,r=null,q=s.ga0S()/(D.qS[s.d].b/9.81*0.28)>=1,p=B.k.V(1/s.gaLz()),o=D.avg[s.d],n=C.m(24),m=d.c,l=C.I(m.j(0.6),B.r,1)
m=C.a([C.d("Build a rocket for "+d.a,r,r,r,r,r,r,C.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),B.au,C.d(d.d+" Gravity here: "+C.t(d.b)+" m/s\xb2.",r,r,r,r,r,r,D.a6e,r,r,r),B.S,s.adO("ENGINE: "+D.G7[s.cx].b,D.G7,new A.eeJ(s),new A.eeK(s),B.cy),s.adO("FUEL TANK: "+D.Pn[s.cy].b,D.Pn,new A.eeL(s),new A.eeM(s),B.bb),s.adO("LANDING GEAR: "+D.Bn[s.db].b,D.Bn,new A.eeN(s),new A.eeO(s),B.aV),s.adO("EXTRAS (tap to add)",D.atx,new A.eeP(s),new A.eeQ(s),B.bz)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fj_)
o=(q?B.bb:B.cq).j(0.14)
w=C.m(12)
v=B.k.aa(s.gaTX(),2)
u=B.k.aa(s.ga0S()/(D.qS[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(C.p(r,C.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+B.k.V(D.Bn[s.db].d*100)+".",r,r,r,r,r,r,D.eQZ,r,r,r),B.f,r,r,new C.o(o,r,r,w,r,r,B.n),r,r,r,B.it,B.bR,r,r,r))
m.push(B.S)
m.push(new C.bK(B.A,r,r,new A.fg(B.mU,"Launch",new A.eeR(s),B.bb,r),r))
return C.av(C.p(r,C.ci(C.v(m,B.F,r,B.e,B.Q,0,B.p),B.q,r,B.y,r,B.c0,r,r,B.ai),B.f,r,B.lm,new C.o(D.bcG,r,l,n,r,r,B.n),r,r,r,B.bR,r,r,r,r),r,r,r)},
aV3(d,e,f,g){var w=null,v=f?B.cy:B.c.j(0.1),u=C.m(18),t=C.I(B.b7,B.r,1)
return C.oE(B.jp,C.p(w,C.V(d,B.c,w,w,w,30),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,62,w,w,w,w,w,g),w,new A.eeG(e),new A.eeH(e),w,w,w,w,new A.eeI(e))},
aV2(d,e,f){return this.aV3(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=C.cm(new A.ef4(s,D.qS[s.d])),p=x.p,o=C.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.qS[w].a:"\ud83d\udd12"
o.push(new A.dx(v,s.d===w,new A.ef5(s,w),r,D.qS[w].c,r))}v=C.a([s.aV2(D.ajr,new A.ef6(s),s.y),B.bd,s.aV3(B.v4,new A.ef7(s),s.Q,130),B.bd,s.aV2(B.MB,new A.ef8(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?B.aV:B.c.j(0.1)
t=C.m(18)
B.d.v(v,C.a([B.bd,C.aE(r,C.p(r,D.bCv,B.f,r,r,new C.o(u,r,C.I(B.b7,B.r,1),t,r,r,B.n),r,62,r,r,r,r,r,62),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ef9(s),r,r,r,r,r,r,!1,B.aa)],p))}return A.jB(B.cy,B.h5,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",C.v(C.a([new A.eJ(o,"WORLD",r),C.A(v,B.m,r,B.b9,B.j,0,r,r)],p),B.m,r,B.e,B.Q,0,B.p))}}
A.beM.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.qS[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.W(),d=C.L(),a0=j.c,a1=C.ar(D.bf7,a0,0.25)
a1.toString
d.sau(new C.a6(B.b1,B.b3,B.x,C.a([D.b7v,a1],x.O),l,l).aw(0,new C.a9(0,0,g,f)))
a2.aX(new C.a9(0,0,g,f),d)
w=new C.eT()
w.dI(5)
for(g=a2.a,v=0;v<70;++v){f=w.ai()
d=w.ai()
a1=w.ai()
u=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
u.r=B.c.j(0.2+w.ai()*0.5).gp(0)
t=u.H()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=C.a([],f)
r=new C.aP(e.r,B.aq,l,l,d)
r.E(new C.b5(0,s+14))
q=new C.eT()
q.dI(2)
for(p=0;p<=i;p+=18){e=new C.ap(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ai()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.E(new C.ap(i,h))
r.E(new C.ap(0,h))
r.E(new C.bE())
e=$.W()
d=C.L()
d.r=C.ar(a0,B.w,0.6).gp(0)
a2.aN(r,d)
o=C.cr(new C.u(k.ax*i,s+10),8,k.ay*i)
d=C.by(o,B.hN)
a0=C.L()
a0.r=B.bl.gp(0)
a2.aC(d,a0)
a0=C.by(o.cE(2),B.r8)
d=C.L()
d.b=B.af
d.c=2
d.r=B.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.aC(a0,d)
if(k.as==="ready")return
d=k.f
J.bA(g.save())
g.translate(d.a*i,d.b*h)
a2.j_(0,k.w)
i=k.as
if(i==="crashed"){k=C.L()
k.r=B.cy.j(0.6).gp(0)
k.z=U.GD
a2.ag(B.J,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new C.aP(i,B.aq,l,l,C.a([],f))
n.E(new C.b5(-8,18))
n.E(new C.ap(0,44+Math.sin(k.CW*40)*8))
n.E(new C.ap(8,18))
n.E(new C.bE())
k=C.L()
k.r=B.aM.gp(0)
a2.aN(n,k)
i=new C.aP(i,B.aq,l,l,C.a([],f))
i.E(new C.b5(-4,18))
i.E(new C.ap(0,32))
i.E(new C.ap(4,18))
i.E(new C.bE())
k=C.L()
k.r=B.c.gp(0)
a2.aN(i,k)}k=e.r
m=new C.aP(k,B.aq,l,l,C.a([],f))
m.E(new C.b5(0,-26))
m.E(new C.cR(14,-10,11,18))
m.E(new C.ap(-11,18))
m.E(new C.cR(-14,-10,0,-26))
m.E(new C.bE())
i=C.L()
i.sau(D.bO_.aw(0,D.ex0))
a2.aN(m,i)
i=C.L()
i.r=B.aV.gp(0)
a2.ag(D.vy,5,i)
i=new C.aP(k,B.aq,l,l,C.a([],f))
i.E(new C.b5(-11,6))
i.E(new C.ap(-20,20))
i.E(new C.ap(-11,18))
i.E(new C.bE())
h=C.L()
h.r=B.aE.gp(0)
a2.aN(i,h)
f=new C.aP(k,B.aq,l,l,C.a([],f))
f.E(new C.b5(11,6))
f.E(new C.ap(20,20))
f.E(new C.ap(11,18))
f.E(new C.bE())
k=C.L()
k.r=B.aE.gp(0)
a2.aN(f,k)
g.restore()},
ar(d){return!0}}
A.aKm.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buT.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brX()}}
A.aQd.prototype={}
A.a1R.prototype={}
A.b7Y.prototype={}
A.Tb.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=C.et(["skin"],x.N),o=new Float32Array(0)
return new A.aAX(w,v,u,t,s,r,q,new C.cq(null,x.A),p,D.J8,D.J8,B.at,B.cH,o,new Int32Array(0),$,B.bw,0,C.a([],x.X),null,null)}}
A.aAX.prototype={
a_(){var w=this
w.a1()
w.kZ()
w.as=new A.bYq(w.gc7_())
new A.dBi(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a9(0)
v.d=null}this.bqY()},
c70(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.eO(0,C.E(["t","init","data",$.h31],x.N,x.z))
v.at=!0
v.ax=""
v.awo()
break
case"pick":v.m(new A.dAV(v,d))
break
case"shot":v.afF(C.t(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+C.t(w.h(d,"text")))
break}},
awo(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.arw[q.CW]
v=new A.dAW()
u=q.ay
u=C.B(u,C.a2(u).k("cl.E"))
B.d.fe(u)
t=x.N
s=C.E(["layers",u,"skinMode",q.ch,"tone","#"+C.t(v.$1(w.b))+C.t(v.$1(w.c))+C.t(v.$1(w.d)),"sel",q.cx,"bpm",B.k.V(q.k3),"spin",q.fy],t,x.cK)
r=B.R.ao(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=C.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.eO(0,u)}},
afF(d){return this.cns(d)},
cns(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afF=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=B.cB.aI(B.a.b_(d,B.a.cG(d,",")+1))
w=6
return C.b(A.cng(C.a([A.h2N(r,"image/png","body.png")],x.fH),"Made in NGMY Core Protocol"),$async$afF)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.I(x.gV).f.R(D.aLJ)
w=5
break
case 2:w=1
break
case 5:return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$afF,v)},
avS(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
lf(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&B.k.bw(w)!==B.k.bw(v.ok)){A.a6Z("kick",0.4)
v.a3r(170,new A.dBj())}v.ok=w
return},
afu(d){var w,v,u,t,s=this
s.m(new A.dAX(s,d))
if(d==null){s.fx=D.J8
s.dy=1
w=s.as
if(w!=null)w.eO(0,C.E(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=C.T(w).k("a1<1>")
u=C.B(new C.a1(w,new A.dAY(d),v),v.k("G.E"))
t=B.d.gK(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.awo()
w=s.as
if(w!=null)w.eO(0,C.E(["t","focus","group",d],x.N,x.z))
s.go=0
s.cpP(t,d)
return},
cpP(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){A.a6Z("kick",0.8)
this.a3r(260,new A.dAZ())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")A.dD(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a3r(w*70,new A.dB_(this))
else if(B.a.t(e,"intestine")||e==="Stomach")A.dD(110,"",360,0.7,0.3,"saw")
else A.vA("organic",6+B.o.F(e.length,8),200,0.6)
break
case"bone":A.dD(210+e.length*4,"",80,0.6,0.55,"tri")
A.dD(2400,"",20,0,0.3,v)
break
case"muscle":A.dD(70,"",150,1,0.6,"sine")
break
case"vessel":A.dD(300,"",380,0.4,0.22,v)
A.a6Z("kick",0.3)
break
default:A.vA("organic",2+B.o.F(e.length,6),200,0.4)}},
cuc(d){this.m(new A.dB1(this,d))},
aVl(){var w,v,u,t,s,r,q,p=this,o=C.aZ(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(p.avS(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=C.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aD(w)]
p.p4=""},
bQt(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new A.dAS(u,w,d))
v=x.t
A.B2("bell",w?C.a([0,4,7,12],v):C.a([0,1],v),600,0.45)
if(w)u.a3r(1100,new A.dAT(u))
return}if(d==null){if(u.cx!=null)u.afu(null)
return}u.afu(d)},
bU7(d,e){var w,v=this,u=null,t=C.m(18),s=C.I(B.bY.j(0.5),B.r,1)
if(v.p1){w=v.p2
w=C.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.eMX,u,u,u)}else if(d==null||e==null)w=D.f_m
else{w=x.p
w=C.A(C.a([C.D(C.v(C.a([C.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,B.iU,u,u,u),B.d_,C.d(e.b,u,u,u,u,u,u,D.Id,u,u,u)],w),B.F,u,B.e,B.Q,0,B.p),1),C.aH(u,u,u,u,D.bET,u,u,u,new A.dAU(v),u,u,u,u,"Back to the whole body",B.c7)],w),B.F,u,B.e,B.j,0,u,u)}return C.p(u,w,B.f,u,u,new C.o(D.UG,u,s,t,u,u,B.n),u,u,u,u,E.afd,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dds.h(0,g)
i.awo()
w=C.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.cXO
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(i.avS(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!B.d.t(w,q))w.push(q)}v=x.p
u=C.a([C.aH(h,h,h,h,D.mf,h,h,h,new A.dB8(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?B.bH:C.D9(h,B.pN,q)}else q=B.kk
q=C.v(C.a([C.D(q,1),new C.C(D.blp,i.bU7(g,f),h)],v),B.m,h,B.e,B.j,0,B.p)
p=C.a([],v)
for(s=0;s<5;++s){o=D.cQg[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new A.dx(l,n,new A.dB9(i,o),o.c,B.bY,h))}p=C.a([new A.eJ(p,h,h)],v)
if(!i.p1&&w.length!==0){n=C.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,C.K)(w),++s){k=w[s]
n.push(new A.dx(k,k===i.cx,new A.dBa(i,k),h,B.aM,h))}p.push(new A.eJ(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(A.hw(B.cq,""+B.k.V(n)+" beats/min","Heart rate",180,40,new A.dBb(i),n))}if(i.ch>0&&t.a===0){n=C.a([],v)
for(j=0;j<5;++j)n.push(new A.Ey(D.arw[j],i.CW===j,new A.dBc(i,j),!1,h))
p.push(new A.eJ(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=C.a([new A.dx("Spin",n,new A.dBd(i),D.aih,B.aV,h),new A.fg(B.jP,"Reset view",new A.dBe(i),B.c,h),new A.dx(l,m,new A.dBf(i),B.Fm,B.aM,h)],v)
if(t.t(0,"organ"))v.push(new A.dx("Heartbeat sound",i.k4,new A.dBg(i),B.nF,B.cq,h))
p.push(new A.eJ(v,h,h))
return A.jB(B.bY,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",C.v(p,B.m,h,B.e,B.Q,0,B.p))}}
A.aJo.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.aJp.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bqX()}}
A.bYq.prototype={
kj(d,e){var w,v,u,t=this
if(t.b!=null)return
w=C.aJ(e,"</script","<\\/script")
v=$.h9_
$.h9_=v+1
u="ngmy-body-viewer-"+v
$.ya()
$.pV().pq(u,new A.bYr(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=C.fG(v,"message",new A.bYs(t),!1,x.gA)
t.b=u},
eO(d,e){var w,v
try{w=this.c
if(w!=null){w=C.bwS(w.contentWindow)
if(w!=null)J.fH1(w,e,"*")}}catch(v){}}}
A.ma.prototype={}
A.aa0.prototype={}
A.zB.prototype={}
A.a37.prototype={}
A.BB.prototype={
giZ(){return this.a==="ok"}}
A.bOk.prototype={}
A.BM.prototype={}
A.Mm.prototype={
c0C(d,e,f){var w
A:{if("ptrap"===f){w=D.aRf
break A}if("faucet"===f){w=D.aQJ
break A}if("house"===f){w=D.fyt
break A}w=new A.aaX(f,null)
break A}C.a4(e,!1).ci(C.eo(new A.c47(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
$.aq8="tech"
w=C.a([],x.s)
for(v=0;v<6;++v){u=D.au5[v].b
if(!B.d.t(w,u))w.push(u)}u=C.aH(m,m,m,m,F.ov,m,m,m,new A.c4a(d),m,m,m,m,m,m)
t=B.aL.j(0.16)
s=C.m(13)
r=x.p
s=C.A(C.a([u,C.p(m,D.b13,B.f,m,m,new C.o(t,m,C.I(B.aL.j(0.6),B.r,1),s,m,m,B.n),m,40,m,m,m,m,m,40),B.aw,D.bsu],r),B.m,m,B.e,B.j,0,m,m)
t=C.m(18)
t=C.a([s,B.ac,C.p(m,D.f6K,B.f,m,m,new C.o(D.DK,m,C.I(B.bE,B.r,1),t,m,m,B.n),m,m,m,m,B.by,m,m,m),D.dYk,n.aZx(d,!1),n.aZx(d,!0),D.dYq,n.abN(d,"\ud83d\udd27","Fix a house (learn)","A customer rings with a list of problems: a tripped breaker, a leaking nut, a dead outlet, a running toilet, a hole in the wall and more. A different list every time. Look and test, pick the right tool, and I explain every wrong move.",B.aV,new A.c4b()),n.abN(d,"\u26a1","Fix a house (practice)","The same, but with no explanations. Touch a live wire and you get shocked. Three shocks and the call is over.",B.cq,new A.c4c()),D.dYh,n.abN(d,"\ud83d\udebd","Plumb a room (learn)","A bathroom or a kitchen, a different one each time. Fit the flange, wax ring, toilet, valves, hoses, faucet and drain piece by piece. Put something in the wrong order and I tell you why. Then turn the water on and find the leaks.",B.aV,new A.c4d()),n.abN(d,"\ud83d\udca7","Plumb a room (practice)","The same job with no hints and no labels. Cut a pipe with the water on and the room floods.",B.cq,new A.c4e())],r)
for(u=w.length,v=0;v<w.length;w.length===u||(0,C.K)(w),++v){q=w[v]
s=C.a([new C.C(D.Li,new C.x(q.toUpperCase(),m,D.S3,m,m,m,m,m,m,m,m,m),m)],r)
for(p=B.d.gah(D.au5),o=new C.hc(p,new A.c4f(q));o.C();)s.push(n.c0y(d,p.gU(0)))
B.d.v(t,s)}return C.cc(m,B.bW,C.bq(!0,C.cK(t,m,D.bmH,m,m,B.ai,!1),!0,!1,B.ah,!0,!0),m,!1,!1,m,m)},
abN(d,e,f,g,h,i){var w=null,v=C.m(18),u=C.I(h.j(0.6),B.r,1.5),t=h.j(0.15),s=C.m(16),r=x.p
return C.aE(w,C.p(w,C.A(C.a([C.p(w,C.av(C.d(e,w,w,w,w,w,w,B.Sw,w,w,w),w,w,w),B.f,w,w,new C.o(t,w,w,s,w,w,B.n),w,52,w,w,w,w,w,52),B.bd,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,C.l(w,w,h,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d_,C.d(g,w,w,w,w,w,w,D.Sp,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1),C.V(B.ed,h,w,w,w,w)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new C.o(D.DK,w,u,v,w,w,B.n),w,w,w,B.d8,B.by,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.c46(d,i),w,w,w,w,w,w,!1,B.aa)},
aZx(d,e){var w,v=null,u=e?B.cq:B.bb,t=C.m(18),s=C.I(u.j(0.6),B.r,1.5),r=u.j(0.15),q=C.m(16)
r=C.p(v,C.av(C.d(e?"\ud83d\udd25":"\ud83c\udfd7\ufe0f",v,v,v,v,v,v,B.Sw,v,v,v),v,v,v),B.f,v,v,new C.o(r,v,v,q,v,v,B.n),v,52,v,v,v,v,v,52)
q=e?"Practice mode":"Learn mode"
q=C.d(q,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,15,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
w=x.p
return C.aE(v,C.p(v,C.A(C.a([r,B.bd,C.D(C.v(C.a([q,B.d_,C.d(e?"A new room job every time. No hints: I only speak up when you get something wrong. Touch a live wire and you get shocked. Wire it wrong and it burns.":"A new room job every time: mount the boxes, pull the cable, hang the drywall, then wire outlets, switches, a light or fan and plug in a TV to test. I tell you what to do next and why a move is wrong.",v,v,v,v,v,v,D.Sp,v,v,v)],w),B.F,v,B.e,B.j,0,B.p),1),C.V(B.ed,u,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new C.o(D.DK,v,s,t,v,v,B.n),v,v,v,B.d8,B.by,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.c49(d,e),v,v,v,v,v,v,!1,B.aa)},
c0y(d,e){var w=null,v=C.m(18),u=e.f,t=C.I(u.j(0.45),B.r,1),s=x.p
return C.aE(w,C.p(w,C.A(C.a([C.bv(C.m(14),new C.a5(116,92,new A.brq(e.a,w),w),B.ap),B.bd,C.D(C.v(C.a([C.A(C.a([C.V(e.e,u,w,w,w,18),B.bp,C.D(C.d(e.c,w,w,w,w,w,w,B.iU,w,w,w),1)],s),B.m,w,B.e,B.j,0,w,w),B.au,C.d(e.d,w,3,B.a2,w,w,w,D.Sp,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1),C.V(B.ed,u,w,w,w,w)],s),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new C.o(D.DK,w,t,v,w,w,B.n),w,w,w,B.d8,B.bR,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.c44(this,d,e),w,w,w,w,w,w,!1,B.aa)}}
A.brq.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c
switch(q){case"ptrap":w=A.cf2()
w.a.v(0,C.et(["tail","trap","arm"],x.N))
v=w.b
v.aml(v,new A.eWt())
u=A.aMY(w)
t=new A.v6(-0.4,0.2,40,D.fqz,$.aw())
break
case"faucet":w=A.cf2()
w.e.v(0,C.E([61,"hot",63,"hot",62,"cold",64,"cold"],x.S,x.N))
u=A.aeN(w)
t=new A.v6(-0.3,0.22,42,D.a72,$.aw())
break
case"house":w=A.fId()
w.a=6
u=A.a0s(w)
t=new A.v6(-0.3,0.5,50,D.frp,$.aw())
break
default:w=A.JU(q)
v=C.U(x.S,x.N)
s=new A.aa0(v)
s.a=!1
v.v(0,q==="gfci"?D.ddp:D.dd0)
u=A.fgY(w,s,!0)
t=new A.v6(0.45,0.25,12.5,D.frw,$.aw())}w=C.a([],x.a6)
q=q==="house"?new A.eWu():r
return new C.eq(C.b3(r,r,r,new A.asW(u,t,new A.aTj(w),0,q,r,r,D.K1,r),B.eS),r)}}
A.b4u.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.bY(0,new A.asX(r.c,r.d,r.r,r.e,r.x,r.w,D.K1,q),0,0,0)],p),n=r.as,m=n!=null
if(m)o.push(C.ao(q,C.v(n,B.F,q,B.e,B.j,0,B.p),q,q,8,q,8,q))
n=C.a([],p)
w=r.at
if(w!=null)B.d.v(n,w)
n.push(r.auu(B.hu,"Zoom in",new A.cof(r)))
n.push(r.auu(B.xC,"Zoom out",new A.cog(r)))
w=r.f
n.push(r.auu(D.bwA,"Back to the whole view",w))
o.push(C.ao(q,C.v(n,B.m,q,B.e,B.j,0,B.p),q,q,q,8,8,q))
n=r.y
if(n!=null){m=m?60:10
v=r.z
u=(v?B.e7:B.eF).j(0.95)
t=C.m(14)
s=C.I(v?B.bb:B.cq,B.r,1)
o.push(C.ao(q,C.p(q,C.d(n,q,q,q,q,q,q,D.eOE,q,q,q),B.f,q,q,new C.o(u,q,s,t,q,q,B.n),q,q,q,q,B.oh,q,q,q),q,q,10,62,m,q))}n=r.Q
if(n!=null){m=C.m(16)
v=C.I(B.b7,B.r,1)
n=C.a([C.d(n.a,q,q,q,q,q,q,D.eZo,q,q,q),B.d_,C.d(n.b,q,q,q,q,q,q,D.a6e,q,q,q)],p)
u=r.ax
if(u!=null)B.d.v(n,C.a([B.ao,u],p))
o.push(C.ao(8,C.p(q,C.A(C.a([C.D(C.v(n,B.F,q,B.e,B.j,0,B.p),1),C.aH(q,q,q,q,B.FC,q,q,q,w,q,q,q,q,q,B.c7)],p),B.F,q,B.e,B.j,0,q,q),B.f,q,q,new C.o(D.aae,q,v,m,q,q,B.n),q,q,q,q,D.af8,q,q,q),q,q,10,10,q,q))}return new C.an(B.W,q,B.a9,B.q,o,q)},
auu(d,e,f){var w=null,v=B.w.j(0.55),u=C.I(B.b7,B.r,1)
return new C.C(B.f2,C.hn(C.aE(w,C.p(w,C.V(d,B.c,w,w,w,20),B.f,w,w,new C.o(v,w,u,w,w,w,B.a6),w,38,w,w,w,w,w,38),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,B.aa),w,e,w,w),w)}}
A.Dl.prototype={
B(d){var w=this,v=null,u=C.aH(v,v,v,v,F.ov,v,v,v,new A.bQp(d),v,v,v,v,v,v),t=w.d,s=C.D(C.d(w.c,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),1),r=t.j(0.15),q=C.m(16),p=C.I(t.j(0.6),B.r,1),o=x.p
return C.cc(v,B.bW,C.bq(!0,C.v(C.a([new C.C(D.bqe,C.A(C.a([u,s,C.aE(v,C.p(v,C.A(C.a([C.V(L.aiw,t,v,v,v,17),B.ea,C.d(w.w,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new C.o(r,v,p,q,v,v,B.n),v,v,v,v,B.ta,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,!1,B.aa)],o),B.m,v,B.e,B.j,0,v,v),v),C.D(C.bv(B.Jb,w.e,B.ap),1),C.p(v,w.f,B.f,v,v,D.aWT,v,v,v,v,B.Ah,v,v,1/0)],o),B.m,v,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),v,!1,!1,v,v)}}
A.aaX.prototype={
T(){return new A.axN(new A.aa0(C.U(x.S,x.N)))}}
A.axN.prototype={
gFi(){var w,v=this,u=v.d
if(u===$){w=A.JU(v.a.c)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gkJ(){var w=this.f
return w===$?this.f=new A.v6(0.42,0.26,12,D.fr0,$.aw()):w},
got(){var w=this,v=w.r
return v===$?w.r=A.fgY(w.gFi(),w.e,!0):v},
q(){var w=this.as
if(w!=null)w.a9(0)
this.a2()},
kl(d,e){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.d0U(w,d,e))
w.as=C.cL(B.l1,new A.d0V(w))},
oN(d){return this.kl(d,!1)},
xb(){var w=this.e
w.d=w.d&&w.a&&w.c>=2
this.r=A.fgY(this.gFi(),w,!0)},
nK(){var w=this,v=w.gkJ(),u=w.e.c===0,t=u?2.8:0.4
u=u?12:10
v.n0(u,0.26,new A.ad(0,0.1,t),0.42)
w.m(new A.d0N(w))},
c0z(){var w,v,u,t="ground",s=this.e,r=!s.a||s.c>0,q=new A.d0M(this)
switch(this.gFi().a){case"switch":w=q.$1(t)
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
HV(d){var w,v,u,t,s,r,q,p=this
if(d===0){p.nK()
return}w=p.gFi()
v=w.f
u=C.T(v).k("a1<1>")
t=C.B(new C.a1(v,new A.d0O(d),u),u.k("G.E"))
v=w.a
s=A.hdZ(v,d)
if(s!=null){u=p.e
u=u.c===0&&u.b.jd(0,s)}else u=!1
if(u){w=p.e
if(w.a){A.ru(180,220,0.25,"square")
p.oN(y.C)
return}w=w.b
w.bn(w,new A.d0P(s))
p.m(p.gc0D())
p.kl("Wire taken off the screw.",!0)
return}if(t.length!==0&&p.w.length!==0&&p.e.c===0){u=p.e
r=A.hdV(w,u,p.w,B.d.gK(t))
if(r!=null){++p.Q
A.ru(180,220,0.25,"square")
p.oN(r)}else{A.y0()
p.m(new A.d0Q(p,d))
if(A.bBm(w,u))p.kl("Every wire is on the right screw. Now push the device into the box.",!0)
else p.kl(B.d.gK(t).b+": fastened correctly.",!0)
p.gkJ().or(7,A.bz5(v,d,u))
p.w=""}return}q=p.got().b.h(0,d)
if(q!=null){p.m(new A.d0R(p,d))
w=p.gkJ()
v=q.c
w.or(q.d,v)}},
ceb(){var w,v=this
v.m(new A.d0S(v))
w=v.e
if(w.a){A.ru(120,200,0.25,"saw")
if(w.c===0)v.oN("The breaker is ON. The wires are LIVE at 120 volts. Turn it OFF before you touch anything.")}else{A.ru(600,100,0.25,"tri")
v.kl("Breaker OFF. It is safe to work on the wires. (In real life, always test them with a tester first.)",!0)}},
csT(){var w,v,u=this
u.m(new A.d0W(u))
A.y0()
w=u.gFi().a
A:{if("switch"===w){v="Power on. Flip the switch and the light turns on: both black wires are on brass screws, so the switch opens and closes the hot wire. The lesson is complete! Mistakes: "+u.Q+"."
break A}if("gfci"===w){v="Power on. Press RESET (it clicks), then TEST: it must shut the outlet off. Wired on LINE, it protects the whole circuit. The lesson is complete! Mistakes: "+u.Q+"."
break A}v="The tester glows: this outlet has 120 volts and is wired correctly. The lesson is complete! Mistakes: "+u.Q+"."
break A}u.kl(v,!0)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c0z(),a2=B.d.bf(a1,new A.d13())
if(a2<0)w="All done"
else{d.gFi()
w="Step "+(a2+1)+"/7"}v=d.gFi()
u=d.e
t=A.bBm(v,u)&&!u.a
s=d.got()
r=d.gkJ()
q=d.x
p=d.y
o=d.z
n=q!==0?d.got().b.h(0,d.x):a0
m=(u.a?B.eF:B.e7).j(0.95)
l=C.m(18)
k=u.a
j=C.I(k?B.cq:B.bb,B.r,1.5)
i=C.V(k?B.h3:D.byg,B.c,a0,a0,a0,18)
h=x.p
l=A.a8Y(r,a0,o,q,n,a0,a0,p,d.gHr(),d.gHU(),s,C.a([C.aE(a0,C.p(a0,C.A(C.a([i,B.ea,C.d(k?"Breaker ON (live)":"Breaker OFF (safe)",a0,a0,a0,a0,a0,a0,B.nU,a0,a0,a0)],h),B.m,a0,B.e,B.Q,0,a0,a0),B.f,a0,a0,new C.o(m,a0,j,l,a0,a0,B.n),a0,a0,a0,a0,B.h2,a0,a0,a0),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.gcea(),a0,a0,a0,a0,a0,a0,!1,B.aa)],h),C.a([A.PY("Hints",B.aL,B.qJ,u.e,new A.d14(d)),B.ao,A.PY("Labels",B.aV,L.Mv,u.f,new A.d15(d)),B.ao,A.PY("Brass side",D.bei,D.ajr,!1,new A.d16(d)),B.ao,A.PY("Silver side",D.K3,B.MB,!1,new A.d17(d)),B.P],h))
j=C.a([],h)
s=u.c
if(s===0){s=C.a([],h)
for(r=v.e,q=u.b,g=0;g<3;++g){f=r[g]
p=new C.aX(14,14)
o=f.a
n=d.w===o
m=n?B.b4:B.b7
e=new C.aA(m,n?3:1,B.r,-1)
m=C.a([],h)
if(q.jd(0,o))m.push(new C.C(B.fM,C.V(B.ec,f.d,a0,a0,a0,18),a0))
m.push(new C.x(f.b,a0,new C.F(!0,f.d,a0,a0,a0,a0,13,B.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0))
s.push(new C.C(B.jn,C.aE(a0,C.p(a0,new C.cs(B.aX,B.e,B.j,B.m,a0,B.p,a0,0,m,a0),B.f,a0,a0,new C.o(f.c,a0,new C.bU(e,e,e,e),new C.bt(p,p,p,p),a0,a0,B.n),a0,a0,a0,a0,B.hG,a0,a0,a0),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.d18(d,f),a0,a0,a0,a0,a0,a0,!1,B.aa),a0))}s=C.c5(B.bG,s,B.bx,6,8)
if(t)u="Push it into the box"
else u=u.a?"Turn the breaker OFF first":"Fasten every wire first"
B.d.v(j,C.a([s,B.P,C.A(C.a([A.y_(u,D.ak0,t?new A.d19(d):a0,B.aL)],h),B.m,a0,B.e,B.j,0,a0,a0)],h))}else if(s===1)B.d.v(j,C.a([C.A(C.a([A.y_("Pull it back out",B.qN,new A.d1a(d),B.ad),B.ab,A.y_("Put the cover plate on",Y.v1,new A.d1b(d),B.aL)],h),B.m,a0,B.e,B.j,0,a0,a0)],h))
else{s=A.y_("Start over",B.l6,new A.d1c(d),B.ad)
u=u.d
r=u?"Tested \u2713":"Power on and test"
B.d.v(j,C.a([C.A(C.a([s,B.ab,A.y_(r,B.h3,u?a0:d.gcsS(),B.aL)],h),B.m,a0,B.e,B.j,0,a0,a0)],h))}return new A.Dl(v.b,B.aL,l,C.v(j,B.m,a0,B.e,B.Q,0,B.p),new A.d1d(d,a3,a1),w,a0)}}
A.aDI.prototype={
T(){return new A.aDJ(A.cf2())}}
A.aDJ.prototype={
gkJ(){var w=this.e
return w===$?this.e=new A.v6(-0.3,0.18,40,D.aPt,$.aw()):w},
got(){var w=this.f
return w===$?this.f=A.aMY(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kl(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.eHy(w,d,e))
w.z=C.cL(B.l1,new A.eHz(w))},
oN(d){return this.kl(d,!1)},
nK(){this.gkJ().n0(40,0.18,D.aPt,-0.3)
this.m(new A.eHr(this))},
HV(d){var w,v,u,t,s,r,q=this,p="square"
if(d===0){q.nK()
return}w=C.E([41,"tail",42,"trap",43,"arm"],x.S,x.N).h(0,d)
if(w!=null&&!q.d.a.t(0,w)){v=q.r
if(v.length===0){if(w==="tail")v="tailpiece"
else v=w==="trap"?"P-trap":"trap arm"
q.oN("Pick the "+v+" from the buttons below first, then tap its glowing outline.")
return}if(v!==w){A.ru(180,220,0.25,p)
u=q.r
A:{if("tail"===u){v="The tailpiece is the straight pipe that hangs from the sink. It goes at the very top, under the drain."
break A}if("trap"===u){v="The P-trap is the U-shaped bend. It goes right under the tailpiece, in the middle."
break A}v="The trap arm is the long straight pipe that goes into the wall. It goes last, on the right."
break A}q.oN(v)
return}if(w==="trap"&&!q.d.a.t(0,"tail")){A.ru(180,220,0.25,p)
q.oN("Start from the top: put the tailpiece on first, then the trap under it.")
return}if(w==="arm"&&!q.d.a.t(0,"trap")){A.ru(180,220,0.25,p)
q.oN("The trap arm joins the trap. Put the P-trap on first.")
return}q.m(new A.eHs(q,w))
A.y0()
q.kl("Piece in place. "+(q.d.a.a===3?"Now tighten the two slip nuts: tap each nut.":"Pick the next piece."),!0)
return}v=d===44
if(v||d===45){t=v?"n1":"n2"
if(q.d.b.h(0,t)!==!0){q.m(new A.eHt(q,t))
A.y0()
q.kl("Slip nut hand tightened. In real life give it a quarter turn more with pliers, but never over-tighten plastic.",!0)
return}}s=q.got().b.h(0,d)
if(s!=null){q.m(new A.eHu(q,d))
v=q.gkJ()
r=s.c
v.or(s.d,r)}},
c0F(){var w=this,v=x.cc,u=C.B(new C.a1(C.a(["n1","n2"],x.s),new A.eHv(w),v),v.k("G.E"))
w.m(new A.eHw(w,u))
if(u.length!==0){A.ru(180,220,0.25,"square")
w.oN("It is dripping from a loose slip nut! Tap the nut and tighten it, then run the water again.")}else{A.y0()
w.kl("No leaks. The water flows through the trap and into the wall. The little pool in the U-bend stays there and blocks sewer gas. The lesson is complete!",!0)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.a,h=i.t(0,"tail"),g=i.t(0,"trap"),f=i.t(0,"arm"),e=j.b
e=e.h(0,"n1")===!0&&e.h(0,"n2")===!0
w=C.a([h,g,f,e,j.c&&j.d.length===0],x.u)
v=B.d.bf(w,new A.eHD())
u=i.a===3
j=v<0?"All done":"Step "+(v+1)+"/5"
h=l.got()
g=l.gkJ()
f=l.w
e=l.x
t=l.y
s=f!==0?l.got().b.h(0,l.w):k
h=A.a8Y(g,new A.eHE(l),t,f,s,k,k,e,l.gHr(),l.gHU(),h,k,k)
e=x.p
s=C.a([],e)
for(r=0;r<3;++r){q=D.d5m[r]
g=i.t(0,q)?k:new A.eHF(l,q)
f=i.t(0,q)?B.dt:B.fs
t=new C.aX(14,14)
p=l.r===q
o=p?B.b4:B.b7
n=new C.aA(o,p?3:1,B.r,-1)
o=C.a([],e)
if(i.t(0,q))o.push(D.dYG)
p=D.dcZ.h(0,q)
p.toString
m=i.t(0,q)?B.bZ:B.c
o.push(new C.x(p,k,new C.F(!0,m,k,k,k,k,13,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k))
s.push(new C.C(B.jn,C.aE(k,C.p(k,new C.cs(B.aX,B.e,B.j,B.m,k,B.p,k,0,o,k),B.f,k,k,new C.o(f,k,new C.bU(n,n,n,n),new C.bt(t,t,t,t),k,k,B.n),k,k,k,k,B.hG,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,g,k,k,k,k,k,k,!1,B.aa),k))}i=C.c5(B.bG,s,B.bx,6,8)
g=A.y_("Start over",B.l6,new A.eHG(l),B.ad)
f=u?"Run the water":"Build the drain first"
return new A.Dl("Sink drain (P-trap)",B.cx,h,C.v(C.a([i,B.P,C.A(C.a([g,B.ab,A.y_(f,B.ot,u?l.gc0E():k,B.cx)],e),B.m,k,B.e,B.j,0,k,k)],e),B.m,k,B.e,B.Q,0,B.p),new A.eHH(d,w),j,k)}}
A.ay1.prototype={
T(){return new A.ay2(A.cf2())}}
A.ay2.prototype={
gkJ(){var w=this.e
return w===$?this.e=new A.v6(-0.25,0.2,36,D.a72,$.aw()):w},
got(){var w=this.f
return w===$?this.f=A.aeN(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kl(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.d3O(w,d,e))
w.z=C.cL(B.l1,new A.d3P(w))},
oN(d){return this.kl(d,!1)},
nK(){this.gkJ().n0(36,0.2,D.a72,-0.25)
this.m(new A.d3G(this))},
HV(d){var w,v,u,t,s,r,q=this
if(d===0){q.nK()
return}w=x.fZ
v=C.B(new C.a1(D.a1w,new A.d3J(d),w),w.k("G.E"))
if(v.length!==0&&q.r.length!==0){w=q.d
u=A.i_8(w,q.r,B.d.gK(v))
if(u!=null){A.ru(180,220,0.25,"square")
q.oN(u)}else{A.y0()
q.m(new A.d3K(q,d))
q.gkJ().or(12,A.aeZ(d))
q.kl(A.fPw(w)?"All four ends are connected. Now open the valves.":B.d.gK(v).b+": connected.",!0)}return}w=d===68
if(w||d===69){t=w?"hot":"cold"
if(q.d.e.jd(0,t)){q.m(new A.d3L(q,t))
q.kl("Hose taken off.",!0)
return}}s=q.got().b.h(0,d)
if(s!=null){q.m(new A.d3M(q,d))
w=q.gkJ()
r=s.c
w.or(s.d,r)}},
c0B(d){var w,v=this
v.m(new A.d3H(v))
w=v.d
if(!w.f){v.kl("Valves closed.",!0)
return}if(A.fPw(w)){A.y0()
v.kl("Hot and cold flow through the hoses and out of the faucet. No leaks. The lesson is complete!",!0)}else{A.ru(180,220,0.25,"square")
v.oN("Water is spraying out of a valve that has no hose! Close the valves and finish connecting the hoses first.")}},
B(a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d,i=j.r||j.e.a!==0,h=j.e,g=h.h(0,61)==="hot"&&h.h(0,63)==="hot",f=h.h(0,62)==="cold"&&h.h(0,64)==="cold",e=C.a([i,g,f,j.f&&A.fPw(j)],x.u),d=B.d.bf(e,new A.d3T())
i=d<0?"All done":"Step "+(d+1)+"/4"
g=l.got()
f=l.gkJ()
w=l.w
v=l.x
u=l.y
t=w!==0?l.got().b.h(0,l.w):k
s=x.p
g=A.a8Y(f,new A.d3U(l),u,w,t,k,k,v,l.gHr(),l.gHU(),g,k,C.a([A.PY("Hints",B.aL,B.qJ,j.r,new A.d3V(l)),B.P],s))
v=C.a([],s)
for(f=C.a2(h).k("bc<2>"),w=f.k("a1<G.E>"),r=0;r<2;++r){u={}
t=D.d4S[r]
u.a=null
q=t.a
u.a=q
p=new C.aX(14,14)
o=l.r===q
n=o?B.b4:B.b7
m=new C.aA(n,o?3:1,B.r,-1)
n=C.a([],s)
if(new C.a1(new C.bc(h,f),new A.d3W(u),w).gM(0)===2)n.push(D.dYI)
n.push(new C.x(t.b,k,B.ua,k,k,k,k,k,k,k,k,k))
v.push(new C.C(B.jn,C.aE(k,C.p(k,new C.cs(B.aX,B.e,B.j,B.m,k,B.p,k,0,n,k),B.f,k,k,new C.o(t.c,k,new C.bU(m,m,m,m),new C.bt(p,p,p,p),k,k,B.n),k,k,k,k,B.hG,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.d3X(u,l),k,k,k,k,k,k,!1,B.aa),k))}h=C.c5(B.bG,v,B.bx,6,8)
f=A.y_("Start over",B.l6,new A.d3Y(l),B.ad)
j=j.f?"Close the valves":"Open the valves"
return new A.Dl("Faucet supply lines",B.cq,g,C.v(C.a([h,B.P,C.A(C.a([f,B.ab,A.y_(j,B.ot,l.gc0A(l),B.cq)],s),B.m,k,B.e,B.j,0,k,k)],s),B.m,k,B.e,B.Q,0,B.p),new A.d3Z(a0,e),i,k)}}
A.ayV.prototype={
T(){return new A.ayW(A.fId())}}
A.ayW.prototype={
gkJ(){var w,v=this.e
if(v===$){w=new A.v6(-0.3,0.48,46,D.SV,$.aw())
w.f=80
this.e=w
v=w}return v},
got(){var w=this.f
return w===$?this.f=A.a0s(this.d):w},
q(){var w=this.z
if(w!=null)w.a9(0)
this.a2()},
kl(d,e){var w=this,v=w.z
if(v!=null)v.a9(0)
w.m(new A.daS(w,d,e))
w.z=C.cL(B.l1,new A.daT(w))},
oN(d){return this.kl(d,!1)},
nK(){this.gkJ().n0(46,0.48,D.SV,-0.3)
this.m(new A.daM(this))},
HV(d){var w,v,u,t=this
if(d===0){t.nK()
return}if(d===72){w=t.d
w=w.d.t(0,72)&&w.a>=5}else w=!1
if(w){t.m(new A.daO(t,d))
A.y0()
t.kl("You flipped the breaker fully OFF and then ON. The living room light is back on. A breaker trips when a circuit is overloaded: find out why before it trips again.",!0)
t.gkJ().or(22,D.ftA)
return}w=d===87
if(w||d===86){v=t.d
v=v.b&&!v.c&&v.a>=5}else v=!1
if(v){if(t.w==="wrench"&&w){t.m(new A.daP(t,d))
A.y0()
t.kl("You tightened the slip nut with the wrench. The drip has stopped.",!0)
return}A.ru(180,220,0.25,"square")
t.oN(w?"Hand tightening is not enough here. Pick the wrench first, then tap the nut.":"The water is dripping from the slip nut on the trap. Pick the wrench, then tap the nut.")}u=t.got().b.h(0,d)
if(u!=null){t.m(new A.daQ(t,d))
w=t.gkJ()
v=u.c
w.or(u.d,v)}},
c8i(d){var w,v
A:{if("ptrap"===d){w=D.aRf
break A}if("faucet"===d){w=D.aQJ
break A}w=new A.aaX(d,null)
break A}v=this.c
v.toString
C.a4(v,!1).ci(C.eo(new A.daN(w),!1,null,x.H))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=D.d0q[m.a],k=o.r,j=k===0?n:A.hPx(k)
k=m.d.t(0,72)
w=!m.b||m.c
v=C.a([!k,w],x.u)
w=m.a
k=o.got()
u=o.gkJ()
t=o.r
s=o.x
r=o.y
q=t!==0?o.got().b.h(0,o.r):n
p=j==null?n:C.aE(n,C.p(n,D.f_A,B.f,n,n,new C.o(B.aL,n,n,C.m(12),n,n,B.n),n,n,n,n,B.ta,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.daW(o,j),n,n,n,n,n,n,!1,B.aa)
k=A.a8Y(u,new A.daX(o),r,t,q,p,new A.daY(o),s,o.gHr(),o.gHU(),k,n,n)
s=l.a
p=x.p
q=C.A(C.a([C.D(C.d(""+(m.a+1)+". "+s,n,n,n,n,n,n,D.eTh,n,n,n),1),A.PY("Wrench",B.aV,B.qE,o.w==="wrench",new A.daZ(o))],p),B.m,n,B.e,B.j,0,n,n)
t=C.d(l.b,n,3,B.a2,n,n,n,D.Sp,n,n,n)
m=C.kQ(B.bz,6,s,6,0,new A.db_(o),m.a)
u=v[0]
s=u?"\u2705 Living room power fixed":"\u26a0 Living room has no power"
s=C.D(C.d(s,n,n,n,n,n,n,C.l(n,n,u?B.ew:B.f9,n,n,n,n,n,n,n,n,11.5,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)
u=v[1]
r=u?"\u2705 Sink leak fixed":"\u26a0 Kitchen sink drips"
return new A.Dl("Build and fix a house",B.bz,k,C.v(C.a([q,B.bB,t,m,C.A(C.a([s,C.D(C.d(r,n,n,n,n,n,n,C.l(n,n,u?B.ew:B.f9,n,n,n,n,n,n,n,n,11.5,n,n,B.I,n,n,!0,n,n,n,n,n,n,n,n),B.dK,n,n),1)],p),B.m,n,B.e,B.j,0,n,n)],p),B.m,n,B.e,B.Q,0,B.p),new A.db0(d,v),"Stage "+(w+1)+"/7",n)}}
A.cf1.prototype={}
A.Ea.prototype={}
A.n5.prototype={}
A.aru.prototype={}
A.ceT.prototype={
wD(d,e){var w=this.c
w===$&&C.c()
return B.d.iK(w.c,new A.ceX(e))},
NZ(d){++this.w
return new A.eM(!1,d,!1,"")},
bZi(d){var w=d.d
return new C.J(w,new A.ceU(this),C.T(w).k("J<1,n>")).aH(0," and ")},
cMI(d,e){var w,v,u,t,s=this,r=s.wD(0,e),q=s.e
if(q.t(0,e))return s.NZ("The "+r.c.toLowerCase()+" is already there.")
if(d!==r.b)return s.NZ(s.b?"That does not go here.":"That does not go here. This spot is for the "+r.c.toLowerCase()+".")
for(w=r.d,v=w.length,u=0;u<v;++u)if(!q.t(0,w[u])){q=s.b?"Not yet: something has to go in first.":"Not yet. "+r.e+" Put in the "+s.bZi(r)+" first.";++s.w
return new A.eM(!1,q,!1,"")}if(r.f&&s.r)return s.NZ(s.b?"The water is still on!":"Stop! The water is still on. Cutting into a pipe with the water on floods the room. Turn the water off at the main valve first (pick the hand and tap the main valve).")
q.J(0,e)
s.y=!1
s.x.a8(0)
if(r.r>0)t=s.b?"":" It is only loose. Pick the wrench and tap it to tighten the joints."
else t=""
return new A.eM(!0,r.c+" fitted."+t,!1,"")},
cP2(d){var w,v,u,t,s=this,r=s.wD(0,d)
if(!s.e.t(0,d))return s.NZ(s.b?"Nothing to tighten yet.":"There is nothing to tighten yet: the "+r.c.toLowerCase()+" is not fitted.")
w=r.r
if(w===0)return s.NZ(s.b?"That does not need tightening.":"The "+r.c.toLowerCase()+" does not have joints to tighten. It just sits in place.")
v=s.f
u=v.h(0,d)
if(u==null)u=0
if(u>=w)return s.NZ("Already tight. More force would crack it.")
t=u+1
v.n(0,d,t)
s.x.a8(0)
s.y=!1
v=r.c
return new A.eM(!0,t>=w?v+": every joint is tight now.":v+": one joint tightened, one to go.",!1,"")},
bcr(d){var w=this.wD(0,d),v=this.f.h(0,d)
if(v==null)v=0
return w.r-v},
cPg(){var w,v,u,t,s,r,q=this
q.r=!q.r
w=q.x
w.a8(0)
if(!q.r)return D.aSb
v=q.c
v===$&&C.c()
u=v.c
t=C.T(u).k("a1<1>")
s=C.B(new C.a1(u,new A.ceY(q),t),t.k("G.E"))
v=v.c
u=C.T(v).k("a1<1>")
r=C.B(new C.a1(v,new A.ceZ(q),u),u.k("G.E"))
q.y=!0
if(s.length!==0){w.v(0,new C.J(s,new A.cf_(),C.T(s).k("J<1,n>")));++q.w
return new A.eM(!1,"Water is spraying from an open pipe where the "+B.d.gK(s).c.toLowerCase()+" should be! Turn the water off and finish the job.",!0,"")}if(r.length!==0){w.v(0,new C.J(r,new A.cf0(),C.T(r).k("J<1,n>")));++q.w
return new A.eM(!1,"The "+B.d.gK(r).c.toLowerCase()+" is leaking from a loose joint. Turn the water off, tighten it with the wrench, then test again.",!0,"")}if(!q.gaAa())return D.aS1
return D.aRP},
gaAa(){var w=this.c
w===$&&C.c()
return B.d.d8(w.c,new A.ceV(this))},
gcyC(){var w=this.c
w===$&&C.c()
return B.d.d8(w.c,new A.ceW(this))}}
A.MV.prototype={
T(){var w,v=new A.v6(-0.25,0.4,175,D.a71,$.aw())
v.f=200
w=new C.Ew()
$.G3()
w.j1(0)
return new A.aCq(v,w)}}
A.aCq.prototype={
gC0(d){var w=this.d
if(w===$){this.a.toString
w=B.o.F(Date.now(),1e5)
this.d=w}return w},
a_(){var w,v=this
v.a1()
w=v.gC0(0)
w=v.e=A.h0R(v.a.d,w)
v.r=A.h9a(w,v.x,!w.b)},
q(){var w=this.at
if(w!=null)w.a9(0)
this.a2()},
abO(){var w=this.e
w===$&&C.c()
return this.r=A.h9a(w,this.x,!w.b)},
aVG(d,e){var w=this,v=w.at
if(v!=null)v.a9(0)
w.m(new A.ebG(w,d,e))
w.at=C.cL(B.jk,new A.ebH(w))},
auw(){this.f.n0(175,0.4,D.a71,-0.25)
this.m(new A.ebw(this))},
cqE(d){var w,v,u=this.e
u===$&&C.c()
u=u.c
u===$&&C.c()
u=u.c
w=u.length
if(d>=9100&&d<9100+w)return u[d-9100].a
if(d>=9200&&d<9260){v=B.o.an(d-9200,2)
if(v<w)return u[v].a}if(d===9260)return"trap"
if(d===9261)return"arm"
return null},
avn(d){var w=this.e
w===$&&C.c();++w.w
return new A.eM(!1,d,!1,"")},
c0J(d){var w,v,u,t,s,r=this
if(d===0){r.auw()
return}w=r.r
w===$&&C.c()
v=w.b.h(0,d)
if(r.x.length===0){r.m(new A.ebC(r,d))
if(v!=null){r.aVG(v.a+": "+v.b,!0)
w=v.c
r.f.or(v.d,w)}return}u=r.cqE(d)
w=r.x
if(w==="hand")if(d===9400){w=r.e
w===$&&C.c()
t=w.cPg()}else{w=r.e
w===$&&C.c()
t=r.avn(w.b?"Your hand is only for the main water valve.":"Your hand is for the main water valve. Parts are placed by picking them from the tray.")}else if(w==="wrench")if(u==null){w=r.e
w===$&&C.c()
t=r.avn(w.b?"Nothing to tighten.":"There is nothing to tighten there.")}else{w=r.e
w===$&&C.c()
t=w.cP2(u)}else if(u==null){w=r.e
w===$&&C.c()
t=r.avn(w.b?"Not there.":"That does not go there. Tap one of the glowing spots.")}else{s=r.e
s===$&&C.c()
t=s.cMI(w,u)}w=t.a
if(w)A.y0()
else A.ru(180,220,0.25,"square")
r.m(new A.ebD(r,d))
w=w&&!t.c
r.aVG(t.b,w)
if(v!=null){w=v.c
r.f.or(B.k.D(v.d,30,90),w)}w=r.e
w===$&&C.c()
if(w.gaAa()&&w.gcyC()&&w.r&&w.y&&w.x.a===0&&!r.as){r.as=!0
$.aU.x1$.push(new A.ebE(r))}},
c0G(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ebv(this),v,w,!0,!0,x.H)},
aUI(){this.m(new A.ebB(this))
this.auw()},
auv(d,e,f){var w,v=null,u=this.x===d,t=u?B.aL.j(0.25):B.c.j(0.07),s=C.m(14),r=u?B.aL:B.b7
r=C.I(r,B.r,u?2:1)
w=C.V(f,u?B.aL:B.ad,v,v,v,19)
return new C.C(D.wU,C.aE(v,C.p(v,C.A(C.a([w,B.bp,C.d(e,v,v,v,v,v,v,C.l(v,v,u?B.aL:B.c,v,v,v,v,v,v,v,v,12.5,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new C.o(t,v,r,s,v,v,B.n),v,v,v,v,B.hs,v,v,v),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.ebs(this,u,d),v,v,v,v,v,v,!1,B.aa),v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.e
m===$&&C.c()
m=m.c
m===$&&C.c()
m=m.c
w=new C.a1(m,new A.ebI(o),C.T(m).k("a1<1>")).gM(0)
m=o.e.c
m===$&&C.c()
v=o.r
v===$&&C.c()
u=o.y
t=o.z
s=o.Q
r=u!==0?v.b.h(0,u):n
v=A.a8Y(o.f,new A.ebJ(o),s,u,r,n,new A.ebK(),t,o.gc0H(),o.gc0I(),v,n,n)
u=o.e
if(u.b)u="Practice mode: no hints. Build it in the right order."
else if(u.gaAa())u="Everything is fitted. Tighten every joint, then turn the main water on to test."
else{u=o.e.c
u===$&&C.c()
u="Job: "+u.d}u=C.d(u,n,2,B.a2,n,n,n,D.aMT,n,n,n)
t=x.p
s=C.a([o.auv("hand","Hand",D.ajV),o.auv("wrench","Wrench",B.qE)],t)
for(q=0;q<11;++q){p=D.bQb[q]
r=D.daV.h(0,p)
r.toString
s.push(o.auv(p,r,T.ZD))}return new A.Dl("Plumbing job: "+m.b,B.aV,v,C.v(C.a([new C.bK(B.a3,n,n,u,n),B.P,new C.a5(n,52,C.cK(s,n,n,n,n,B.aX,!1),n)],t),B.m,n,B.e,B.Q,0,B.p),new A.ebL(o,d),""+w+"/"+m.c.length+" fitted",n)},
bWc(d){return C.c_(D.uz,null,new A.ebA(this),d,!0,!0,!0,B.pQ,!1,!1,x.H)}}
A.yj.prototype={}
A.pB.prototype={}
A.Wl.prototype={}
A.b3N.prototype={}
A.aRJ.prototype={}
A.eM.prototype={
giZ(){return this.a}}
A.b2Z.prototype={
cdC(){var w,v,u,t,s,r=this,q=null,p="outlet",o="switch",n=new C.eT()
n.dI(r.a)
w=n.aD(3)
v=C.a([0,1,2],x.t)
B.d.fn(v,n)
u=3+n.aD(2)
t=x.dL
s=r.c
switch(w){case 0:s!==$&&C.aQ()
r.c="Living room"
t=C.a([new A.pB(v[0],p,q),new A.pB(v[1],p,q),new A.pB(5,"light",u),new A.pB(u,o,q)],t)
r.d!==$&&C.aQ()
r.d=t
break
case 1:s!==$&&C.aQ()
r.c="Bedroom"
t=C.a([new A.pB(v[0],p,q),new A.pB(v[1],p,q),new A.pB(6,"fan",u),new A.pB(u,o,q)],t)
r.d!==$&&C.aQ()
r.d=t
break
default:s!==$&&C.aQ()
r.c="Kitchen"
t=C.a([new A.pB(v[0],"gfci",q),new A.pB(v[1],"gfci",q),new A.pB(5,"light",u),new A.pB(u,o,q)],t)
r.d!==$&&C.aQ()
r.d=t}},
gbcJ(){var w,v=C.aZ(x.S),u=this.d
u===$&&C.c()
w=0
for(;w<4;++w)v.J(0,u[w].a)
return v},
cM5(d){var w,v,u=this.d
u===$&&C.c()
w=0
for(;w<4;++w){v=u[w]
if(v.a===d)return v}return null},
f8(d){++this.f
return new A.eM(!1,d,!1,"")},
aI7(d){var w,v,u=A.lJ(d).d.a,t=C.a([],x.t)
for(w=0;v=$.Kq(),w<v.length;++w){v=v[w]
if(v>u&&v<64)t.push(w)}return t},
cJZ(d,e){var w,v,u=this,t=u.x
if(t.aj(0,d))return u.f8("There is already a box at "+A.lJ(d).b+".")
w=A.lJ(d)
v=w.c
if(!v&&e!=="wall")return u.f8("That is a ceiling box. On the wall you use a plain wall box (the blue one with ears).")
if(v&&e==="wall")return u.f8("A wall box cannot go in the ceiling. Use a round ceiling box.")
if(w.e==="fan"&&e!=="fan"){if(!u.b)return u.f8('A fan is heavy and it shakes. It needs a box that says "fan rated". A plain ceiling box can let the fan fall.')
t.n(0,d,e);++u.f
return D.aSo}t.n(0,d,e)
t=v?"ceiling joist":"side of the stud"
return new A.eM(!0,w.b+": box fixed to the "+t+".",!1,"")},
cEH(d){var w,v=this
if(d<0||d>=$.Kq().length)return D.aSi
w=v.y
if(w.t(0,d))return v.f8("That stud already has a hole.")
if(v.x.a===0)return v.f8("Mount the boxes first. Then you know where the cable has to go and which studs need a hole.")
w.J(0,d)
return D.aS3},
cN6(d){var w,v,u,t,s=this,r=A.lJ(d)
if(!s.x.aj(0,d))return s.f8("There is no box at "+r.b+". Mount the box first, then pull the cable to it.")
w=s.z
if(w.t(0,d))return s.f8("The cable is already there.")
v=s.aI7(d)
u=C.T(v).k("a1<1>")
t=C.B(new C.a1(v,new A.cjV(s),u),u.k("G.E"))
if(t.length!==0){w=B.o.V($.Kq()[B.d.gK(t)])
v=t.length
u=v===1?"it":"the studs"
return s.f8("The cable is stuck: the stud at "+w+" inches has no hole. Drill "+u+" first ("+v+" left on the way).")}w.J(0,d)
return new A.eM(!0,"Cable pulled from the panel to "+r.b+", through the studs and along the ceiling.",!1,"")},
gaFF(){return this.gbcJ().d8(0,new A.cjW(this))},
ang(d){var w,v,u,t
for(w=this.Q,w=new C.cI(w,C.a2(w).k("cI<1,2>")).gah(0);w.C();){v=w.d
u=v.b
if(u.a){t=v.a
t=d>=t&&d<=t+48}else t=!1
if(t)return u}return null},
cHo(d){var w,v,u=this
if(!u.gaFF())return u.f8("Finish the rough-in first. The cable and the boxes must be in before the drywall hides the studs.")
if(!B.d.t(D.a1y,d))return D.aRS
if(!B.d.t(D.oA,d))return u.f8("The edge of the sheet would land between two studs. The sheet needs a stud under every edge, so there is nothing to screw it to. Start at the left corner (a stud) and move one sheet width (48 inches) at a time.")
w=u.Q
v=w.h(0,d)
if((v==null?null:v.a)===!0)return u.f8("There is already a sheet there.")
v=w.h(0,d)
if(v==null){v=x.S
v=new A.b3N(C.aZ(v),C.aZ(v))}v.a=!0
w.n(0,d,v)
return D.aS2},
aI8(d){var w,v,u,t=C.a([],x.t)
for(w=d+48,v=0;u=$.Kq(),v<u.length;++v){u=u[v]
if(u>=d&&u<=w)t.push(v)}return t},
cDD(d){var w,v,u=this,t=A.lJ(d)
if(t.c)return u.f8("Ceiling fixtures do not need an opening in the wall.")
if(!u.x.aj(0,d))return u.f8("There is no box at "+t.b+".")
w=u.ang(t.d.a)
if(w==null)return u.f8("There is no sheet over this box yet. Hang the sheet first, then cut the opening.")
v=w.b
if(v.t(0,d))return u.f8("The opening is already cut.")
v.J(0,d)
return D.aSc},
aHo(d,e,f){var w,v,u,t,s,r=this
if(f)return r.f8("Missed the stud! There is only air behind the sheet here. The screw would pull through the paper. Screw only where a stud is behind the sheet (every 16 inches).")
w=x.dD
v=C.B(new C.a1(D.oA,new A.cjX(r,d),w),w.k("G.E"))
if(v.length===0)return r.f8("There is no sheet here yet.")
u=d*10+e
if(B.d.d8(v,new A.cjY(r,u)))return r.f8("There is already a screw there.")
for(w=v.length,t=r.Q,s=0;s<v.length;v.length===w||(0,C.K)(v),++s)t.h(0,v[s]).c.J(0,u)
return D.aSe},
biU(d,e){return this.aHo(d,e,!1)},
bkq(d){var w=this.Q.h(0,d)
if(w==null||!w.a)return!1
return B.d.d8(this.aI8(d),new A.ck_(w))},
gaA9(){return B.d.d8(D.oA,new A.cjO(this))},
gaA8(){var w=this.gbcJ()
return new C.a1(w,new A.cjM(),C.a2(w).k("a1<cl.E>")).d8(0,new A.cjN(this))},
cOY(d){var w,v=this
if(!v.gaA9())return v.f8("Hang all the sheets first.")
if(!B.d.d8(D.oA,v.ganh()))return v.f8("Finish screwing every sheet to the studs first. Tape goes on a solid wall.")
w=v.as[d]
if(w.a)return v.f8("This seam already has tape.")
w.c=w.a=!0
return D.aRW},
cK1(d){var w,v=this,u=v.as[d]
if(!u.a)return v.f8("Tape first. The mud goes over the tape.")
if(!u.c)return v.f8("The last coat is still wet. Let it dry before the next coat.")
w=u.b
if(w>=3)return v.f8("Three coats are enough. Now sand it.");++w
u.b=w
u.c=!1
return new A.eM(!0,"Coat "+w+" of joint compound spread. Let it dry.",!1,"")},
cIY(){var w,v=this.as
if(B.d.d8(v,new A.cjT()))return D.aS9
for(w=0;w<2;++w)v[w].c=!0
return D.aSm},
biI(d){var w=this,v=w.as[d]
if(v.b<3)return w.f8("Put on all three coats of mud first. Sanding now would just rub off the tape.")
if(!v.c)return w.f8("The mud is still wet. Let it dry first.")
if(v.d)return w.f8("Already sanded.")
v.d=!0
return D.aRT},
cMk(d){var w=this,v=w.Q.h(0,d)
if(v==null||!v.a)return w.f8("There is no sheet there.")
if(!w.gaA8())return w.f8("Cut the openings for the boxes before you paint. Otherwise the paint covers the boxes.")
if(!B.d.d8(w.as,new A.cjU()))return w.f8("Sand the seams first. Paint shows every bump.")
if(v.e)return w.f8("This sheet is already painted.")
v.e=!0
return D.aRQ},
ga2A(){var w=this
return w.gaA9()&&B.d.d8(D.oA,w.ganh())&&w.gaA8()&&B.d.d8(w.as,new A.cjP())&&B.d.d8(D.oA,new A.cjQ(w))},
Md(){var w,v
for(w=this.at,w=new C.ds(w,w.r,w.e);w.C();){v=w.d.b
v.a=this.ax&&!this.ay}},
bVt(d,e){if(d.c)return e==="light"||e==="fan"?"":"A ceiling box holds a light or a fan, not an outlet or a switch."
return e==="outlet"||e==="gfci"||e==="switch"?"":"A light or a fan hangs from the ceiling. A wall box holds an outlet, a GFCI or a switch."},
cI4(d,e){var w,v,u,t,s,r=this,q=A.lJ(d)
if(!r.ga2A())return r.f8("Finish the drywall first. Devices go in after the walls are painted.")
w=r.x
if(!w.aj(0,d)||!r.z.t(0,d))return r.f8("There is no box with cable at "+q.b+".")
v=r.at
if(v.aj(0,d))return r.f8("There is already a device there. Pull it out first if you want to move it.")
u=r.bVt(q,e)
if(u.length!==0)return r.f8(u)
t=e==="switch"
if(!(t&&q.e==="low"))s=!t&&!q.c&&q.e==="switch"
else s=!0
if(s){if(!r.b)return r.f8(t?"A switch goes about 48 inches from the floor, where a hand falls naturally. This box is down at outlet height.":"Outlets go low, about 16 inches from the floor. This box is up at switch height.");++r.f
r.cy.push("Wrong height at "+q.b+".")}s=e==="fan"
if(s&&w.h(0,d)!=="fan")if(!r.b)return r.f8("This box is not fan rated. A fan on it can fall. Take the box out and put in a fan-rated one.")
w=new A.aa0(C.U(x.S,x.N))
w.r=r.b
w.a=r.ax&&!r.ay
v.n(0,d,new A.aRJ(e,w))
if(e==="light")w="Light fixture"
else if(s)w="Ceiling fan"
else if(e==="gfci")w="GFCI outlet"
else w=t?"Switch":"Outlet"
return new A.eM(!0,w+" is held up to "+q.b+". Turn the breaker OFF, then wire it.",!1,"")},
cO8(d){var w=this,v=w.at,u=v.h(0,d)
if(u==null)return D.aS_
if(w.ax&&!w.ay&&!u.b.w){if(w.b)return w.Y0()
return w.f8("STOP! The breaker is ON. Turn it OFF before you take a device out.")}v.W(0,d)
w.CW.W(0,d)
w.cx.W(0,d)
w.ch.W(0,d)
return D.aSg},
Y0(){var w,v,u=this;++u.r;--u.e
u.ax=!1
u.Md()
w=u.e
if(w<=0){u.w=!0
return D.aRZ}v=w===1?"life":"lives"
return new A.eM(!1,"ZAP! You touched a live wire and got a shock. The breaker is now off. "+w+" "+v+" left. Always turn the breaker OFF and test the wires first.",!0,"shock")},
cFn(d,e,f){var w,v,u,t=this,s=t.at.h(0,d)
if(s==null)return D.a8_
t.Md()
w=A.JU(s.a)
v=B.d.iK(w.f,new A.cjR(f))
u=A.hdV(w,s.b,e,v)
if(u==null)return new A.eM(!0,v.b+": wire fastened.",!1,"")
if(B.a.a0(u,"SHOCK"))return t.Y0();++t.f
return new A.eM(!1,u,B.a.a0(u,"STOP"),"")},
cPu(d,e){var w,v=this,u=v.at.h(0,d)
if(u==null)return D.TK
v.Md()
w=u.b
if(w.a&&w.c===0){if(v.b)return v.Y0()
return v.f8(y.C)}w=w.b
w.bn(w,new A.ck0(e))
return D.aSl},
cNd(d){var w,v,u=this,t=u.at.h(0,d)
if(t==null)return D.a8_
w=A.JU(t.a)
v=t.b
if(!A.bBm(w,v))return u.f8("Every wire must be fastened first.")
if(u.ax&&!u.ay){if(u.b)return u.Y0()
return u.f8("Turn the breaker OFF before you push the device into the box.")}v.c=1
return D.aS7},
cN7(d){var w,v=this,u=v.at.h(0,d)
if(u==null)return D.TK
if(v.ax&&!v.ay){if(v.b)return v.Y0()
return v.f8("Turn the breaker OFF before you pull the device out.")}w=u.b
w.c=0
w.d=!1
return D.aSd},
cDe(d){var w=this.at.h(0,d)
if(w==null||w.b.c!==1)return this.f8("Push the device into the box first.")
w.b.c=2
return D.aSf},
aGc(d){var w=this.at
return A.fPv(A.JU(w.h(0,d).a),w.h(0,d).b)},
beP(){var w=this
if(w.ay){w.ax=w.ay=!1
w.Md()
return D.aS5}w.ax=!w.ax
w.Md()
if(!w.ax)return D.aRY
return w.c0K()},
c0K(){var w,v,u,t,s,r,q,p,o,n=this,m=C.a([],x.s)
for(w=n.at,v=new C.cI(w,C.a2(w).k("cI<1,2>")).gah(0),u=n.cx,t=!1,s=!1;v.C();){r=v.d
q=r.b.b
if(q.c===0)continue
p=r.a
o=A.fPv(A.JU(w.h(0,p).a),w.h(0,p).b)
q.d=q.c>=2
if(o.d)t=!0
if(o.e){q.w=!0
u.J(0,p)
s=!0}if(o.a!=="ok")m.push(A.lJ(p).b+": "+o.b)}if(t){n.ay=!0
n.Md()
w=s?"BANG! Sparks and smoke. ":""
v=B.d.aH(m," ")
u=s?"burn":"trip"
return new A.eM(!1,w+"The breaker tripped. "+v+" Fix it, then flip the breaker OFF and ON again.",!0,u)}if(m.length!==0)return new A.eM(!0,"Power is on. "+B.d.aH(m," "),!0,"")
return D.aSa},
cFN(d){var w,v,u,t,s,r,q=this,p=q.at,o=p.h(0,d)
if(o==null||o.a!=="switch"||o.b.c<2)return D.aSk
w=q.ch
if(w.t(0,d))w.W(0,d)
else w.J(0,d)
v=q.d
v===$&&C.c()
u=C.T(v).k("a1<1>")
t=C.B(new C.a1(v,new A.cjS(d),u),u.k("G.E"))
if(t.length===0)return D.aS6
s=B.d.gK(t)
v=s.a
r=q.akw(v)
if(w.t(0,d)&&r){p=p.h(0,v)
if(p!=null)p.c=!0
return new A.eM(!0,(s.b==="fan"?"The fan spins":"The light turns on")+". The switch works.",!1,"")}if(w.t(0,d)){p=s.b
return new A.eM(!1,(p==="fan"?"The fan":"The light")+" did not come on. Check the breaker and the wires on the switch and on the "+p+".",!1,"")}return D.aSj},
aj4(d){var w,v=this.at.h(0,d)
if(v!=null){w=v.b
w=w.c<2||w.w}else w=!0
if(w)return!1
return this.aGc(d).c},
akw(d){var w=this,v=w.cM5(d),u=v==null,t=u?null:v.c,s=!0
if(!u)if(t!=null)u=!(w.ax&&!w.ay)||!w.aj4(d)||!w.aj4(t)
else u=s
else u=s
if(u)return!1
return w.ch.t(0,t)},
cMP(d,e){var w,v,u=this,t=u.at.h(0,d)
if(t!=null){w=t.a
w=w!=="outlet"&&w!=="gfci"||t.b.c<2}else w=!0
if(w)return u.f8("There is no finished outlet there to plug into.")
w=u.CW
if(w.aj(0,d))return u.f8("Something is already plugged in.")
w.n(0,d,e)
if(t.b.w)return D.aS0
if(u.ax&&!u.ay&&u.aj4(d)){t.c=!0
v=u.aGc(d)
w=v.a
if(w==="reversed"||w==="noGround")return new A.eM(!0,"It runs, but be careful: "+v.b,!0,"")
return new A.eM(!0,A.hxm(e)+" runs. The outlet works.",!1,"")}if(!(u.ax&&!u.ay))return D.aS4
return new A.eM(!1,"Nothing happens. "+u.aGc(d).b,!0,"")},
cPw(d){if(this.CW.W(0,d)==null)return D.TK
return D.aRX},
gb9b(){var w,v,u,t,s,r=this.d
r===$&&C.c()
w=this.at
v=0
for(;v<4;++v){u=r[v]
t=u.a
s=w.h(0,t)
if(s==null||s.a!==u.b||s.b.c<2)return!1
if(A.fPv(A.JU(w.h(0,t).a),w.h(0,t).b).a!=="ok")return!1
t=u.b
if(t==="outlet"||t==="gfci"){if(!s.c)return!1}else if(t!=="switch"&&!s.c)return!1}return!0}}
A.lY.prototype={}
A.UL.prototype={
T(){var w,v=new A.v6(-0.12,0.4,205,D.a73,$.aw())
v.f=300
w=new C.Ew()
$.G3()
w.j1(0)
return new A.aCx(v,w,C.U(x.S,x.i))}}
A.aCx.prototype={
gC0(d){var w=this.e
if(w===$){this.a.toString
w=B.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gC0(0)
w=A.h1p(v.a.d,w)
v.d=w
v.r=A.FE(w,new A.xq(v.z,v.Q,!1))
w=v.f
w.r=0
w.w=1.1},
q(){var w=this.cy
if(w!=null)w.a9(0)
this.a2()},
Y1(d,e){var w=this,v=w.cy
if(v!=null)v.a9(0)
w.m(new A.eg_(w,d,e))
w.cy=C.cL(B.jk,new A.eg0(w))},
aVJ(d){return this.Y1(d,!1)},
km(d){var w,v,u,t,s,r=this,q=d.a
if(q)A.y0()
else A.ru(180,220,0.25,"square")
w=d.d
if(w==="shock"){C.fJ()
r.m(new A.eff(r))
C.bN(B.nw,new A.efg(r),x.P)}if(w==="burn"||w==="trip"){w=r.d
w===$&&C.c()
w=w.cx
w=C.ea(w,w.r,C.a2(w).c)
v=r.x
u=r.w
t=w.$ti.c
while(w.C()){s=w.d
if(s==null)s=t.a(s)
v.n(0,s,u.gF4()/1000+3.5)}C.fJ()
A.ru(150,300,0.5,"noise")}w=r.d
w===$&&C.c()
r.r=A.FE(w,new A.xq(r.z,r.Q,!1))
q=q&&!d.c
r.Y1(d.b,q)
if(r.d.w&&r.c!=null)$.aU.x1$.push(new A.efh(r))
if(r.d.gb9b()&&!r.cx){r.cx=!0
$.aU.x1$.push(new A.efi(r))}},
ax6(){var w=this.ch?3.141592653589793:-0.12
this.f.n0(205,0.4,D.a73,w)},
aQh(){var w,v,u=this
u.ch=!1
w=u.f
w.ana(!1)
w.r=0
u.m(new A.efq(u))
v=u.d
v===$&&C.c()
u.r=A.FE(v,new A.xq(u.z,u.Q,!1))
w.n0(205,0.4,D.a73,-0.12)},
by9(){var w,v,u=this
u.ch=!0
w=u.f
w.ana(!0)
u.m(new A.efj(u))
v=u.d
v===$&&C.c()
u.r=A.FE(v,new A.xq(u.z,u.Q,!1))
w.n0(190,0.3,D.fps,3.141592653589793)},
aVI(d,e){var w,v,u,t=this,s=A.lJ(e),r=t.f
r.ana(!1)
r.r=0
t.m(new A.efI(t,e))
w=t.d
w===$&&C.c()
t.r=A.FE(w,new A.xq(t.z,t.Q,!1))
v=A.a1o(s,D.fpd)
w=s.c
u=w?22:15
r.n0(u,w?-0.8:0.26,v,0.3)},
abP(){var w,v=this
v.m(new A.efr(v))
w=v.d
w===$&&C.c()
v.r=A.FE(w,new A.xq(v.z,v.Q,!1))
v.ax6()},
c0P(d){var w,v,u,t,s,r=this
if(d===0){if(r.Q>=0)r.abP()
else{r.m(new A.efX(r))
r.ax6()}return}if(d>=5000&&d<5700){w=d-5000
r.ccN(B.o.an(w,100),B.o.F(w,100))
return}if(d>=1000&&d<1010)if(r.z==="drill"){w=r.d
w===$&&C.c()
r.km(w.cEH(d-1000))
return}if(d>=2000&&d<2007){r.cdj(d-2000)
return}if(d>=3000&&d<3007){r.ccZ(d-3000)
return}if(d>=6000&&d<6005){if(r.z==="sheet"){w=r.d
w===$&&C.c()
r.km(w.cHo(D.a1y[d-6000]))}return}if(d>=6100&&d<6103){v=D.oA[d-6100]
if(r.z==="paint"){w=r.d
w===$&&C.c()
r.km(w.cMk(v))
return}}if(d>=6200&&d<6202){u=d-6200
switch(r.z){case"tape":w=r.d
w===$&&C.c()
r.km(w.cOY(u))
return
case"mud":w=r.d
w===$&&C.c()
r.km(w.cK1(u))
return
case"sand":w=r.d
w===$&&C.c()
r.km(w.biI(u))
return}}if(d>=7000&&d<7100){if(r.z==="screw"){w=r.d
w===$&&C.c()
t=d-7000
r.km(w.biU(B.o.an(t,10),B.o.F(t,10)))}return}if(d>=7500&&d<7600){if(r.z==="screw"){w=r.d
w===$&&C.c()
t=d-7500
r.km(w.aHo(B.o.an(t,10),B.o.F(t,10),!0))}return}if(d===8000){w=r.d
w===$&&C.c()
r.km(w.beP())
return}if(d>=8100&&d<8107){w=r.d
w===$&&C.c()
r.km(w.cPw(d-8100))
return}w=r.r
w===$&&C.c()
s=w.b.h(0,d)
if(s!=null){r.m(new A.efY(r,d))
w=s.c
r.f.or(s.d,w)}},
cdj(d){var w,v,u,t=this,s=t.z
switch(s){case"wall":case"ceiling":case"fanbox":w=t.d
w===$&&C.c()
t.km(w.cJZ(d,s==="fanbox"?"fan":s))
return
case"cable":s=t.d
s===$&&C.c()
t.km(s.cN6(d))
return
case"knife":s=t.d
s===$&&C.c()
t.km(s.cDD(d))
return
case"outlet":case"gfci":case"switch":case"light":case"fan":w=t.d
w===$&&C.c()
v=w.cI4(d,s)
t.km(v)
if(v.a){t.d.at.h(0,d).b.f=!t.d.b
t.z=""
t.aVI(0,d)}return
case"tester":t.b3E(d)
return}s=t.d
s===$&&C.c()
if(s.at.aj(0,d)){t.aVI(0,d)
return}s=t.r
s===$&&C.c()
u=s.b.h(0,2000+d)
if(u!=null){t.m(new A.efW(t,d))
s=u.c
t.f.or(u.d,s)}},
b3E(d){var w,v=this.d
v===$&&C.c()
w=v.ax&&!v.ay&&v.x.aj(0,d)&&this.d.z.t(0,d)
v=w?"The tester glows: this box is LIVE (120 volts). Turn the breaker OFF before you touch any wire.":"The tester stays dark: no power here. It is safe to work. (Test again after you turn the breaker off, every time.)"
this.Y1(v,!w)
A.ru(w?1400:500,120,0.25,"tri")},
ccZ(d){var w,v,u=this,t=u.d
t===$&&C.c()
w=t.at.h(0,d)
if(w==null)return
if(B.d.t(D.a1F,u.z)){u.km(u.d.cMP(d,u.z))
return}if(u.z==="tester"){u.b3E(d)
return}if(w.a==="switch"&&w.b.c>=2){u.km(u.d.cFN(d))
u.m(new A.efU(u))
return}u.m(new A.efV(u,d))
t=u.r
t===$&&C.c()
v=t.b.h(0,3000+d)
if(v!=null){t=v.c
u.f.or(v.d,t)}},
ccN(d,e){var w,v,u,t,s,r,q,p=this,o=p.d
o===$&&C.c()
w=o.at.h(0,d)
if(w==null)return
o=w.a
v=A.JU(o).f
u=C.T(v).k("a1<1>")
t=C.B(new C.a1(v,new A.efQ(e),u),u.k("G.E"))
s=A.hdZ(o,e)
if(s!=null){o=w.b
o=o.b.jd(0,s)&&o.c===0}else o=!1
if(o){p.km(p.d.cPu(d,s))
return}if(t.length!==0&&w.b.c===0){o=p.at
if(o.length===0){p.aVJ("Pick a wire below first, then tap "+B.d.gK(t).b+".")
o=p.r
o===$&&C.c()
r=o.b.h(0,5000+d*100+e)
if(r!=null){p.m(new A.efR(p,d,e))
o=r.c
p.f.or(r.d,o)}return}q=p.d.cFn(d,o,e)
p.km(q)
if(q.a)p.m(new A.efS(p))
return}o=p.r
o===$&&C.c()
r=o.b.h(0,5000+d*100+e)
if(r!=null){p.m(new A.efT(p,d,e))
o=r.c
p.f.or(r.d,o)}},
bK_(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.efp(this),v,w,!0,!0,x.H)},
c0L(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.efm(this),v,w,!0,!0,x.H)},
aux(d){this.m(new A.efs(this,d))
this.aQh()},
aVH(){return this.aux(!1)},
c0N(){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
m===$&&C.c()
if(m.w)return"The job is over."
switch(n.y){case 0:m=m.d
m===$&&C.c()
w=C.T(m).k("a1<1>")
v=C.B(new C.a1(m,new A.eft(n),w),w.k("G.E"))
if(v.length!==0){u=B.d.gK(v)
t=A.lJ(u.a)
m=u.b
if(m==="gfci")m="a GFCI"
if(t.c)w=t.e==="fan"?"fan box":"ceiling box"
else w="wall box"
return"Mount a box at "+t.b+" ("+m+" goes here): pick a "+w+", then tap the glowing spot."}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a1<1>")
s=C.B(new C.a1(m,new A.efu(n),w),w.k("G.E"))
if(s.length!==0){t=B.d.gK(s).a
m=n.d.aI7(t)
r=new C.a1(m,new A.efv(n),C.T(m).k("a1<1>")).gM(0)
return r>0?"The cable comes from the panel on the right. Pick the drill and tap each stud on the way to "+A.lJ(t).b+" ("+r+" left).":"Pick the cable roll and tap "+A.lJ(t).b+"."}return"Rough-in done! Open 2 Drywall."
case 1:if(!m.gaFF())return"Finish the rough-in first (tab 1). Drywall hides the wires."
if(!n.d.gaA9())return"Pick a drywall sheet and tap a stud edge to hang it. Three sheets cover the wall."
if(!n.d.gaA8())return"Pick the drywall saw and tap each box to cut its opening."
if(!B.d.d8(D.oA,n.d.ganh()))return"Pick the screw gun and put a screw in every glowing spot on the studs."
if(B.d.b8(n.d.as,new A.efy()))return"Pick the tape and tap each seam between two sheets."
if(B.d.b8(n.d.as,new A.efz()))return B.d.b8(n.d.as,new A.efA())?'The mud is wet. Press "Let it dry", then the next coat.':"Pick the mud and tap each seam. It needs three coats, with drying in between."
if(B.d.b8(n.d.as,new A.efB()))return B.d.b8(n.d.as,new A.efC())?'Press "Let it dry", then sand.':"Pick the sander and tap each seam."
if(!n.d.ga2A())return"Pick the roller and paint each sheet."
return"Drywall done! Open 3 Devices."
default:if(!m.ga2A())return"Finish the drywall first (tab 2)."
m=n.d.d
m===$&&C.c()
w=C.T(m).k("a1<1>")
q=C.B(new C.a1(m,new A.efD(n),w),w.k("G.E"))
if(q.length!==0){u=B.d.gK(q)
m=u.b
if(m==="gfci")m="GFCI"
return"Pick the "+m+" and tap "+A.lJ(u.a).b+". ("+C.t(new A.efG().$1(new C.J(q,new A.efE(),C.T(q).k("J<1,H>"))))+" still need a device.)"}m=n.d.d
m===$&&C.c()
w=C.T(m).k("a1<1>")
p=C.B(new C.a1(m,new A.efF(n),w),w.k("G.E"))
if(p.length!==0)return"Tap "+A.lJ(B.d.gK(p).a).b+" to work on it: breaker OFF, wires, push in, cover on."
m=n.d
if(!m.ax)return"Turn the breaker ON (tap the panel or the breaker button) and test."
m=m.d
m===$&&C.c()
w=C.T(m).k("a1<1>")
o=C.B(new C.a1(m,new A.efw(n),w),w.k("G.E"))
if(o.length!==0)return"Pick the TV or the lamp and plug it into "+A.lJ(B.d.gK(o).a).b+" to test it."
m=n.d.d
m===$&&C.c()
return"Flip the wall switch to test the "+(B.d.b8(m,new A.efx())?"fan":"light")+"."}},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=D.d7e[a1.y],a4=a1.Q
if(a4>=0){w=a1.d
w===$&&C.c()
v=w.at.h(0,a4)}else v=a2
a4=v==null
u=a4?a2:A.JU(v.a)
w=a1.y
t=a1.d
t===$&&C.c()
t=t.c
t===$&&C.c()
s=a1.r
s===$&&C.c()
r=a1.as
q=a1.ax
p=a1.ay
o=r!==0?s.b.h(0,r):a2
n=x.p
m=C.a([],n)
for(l=0;l<3;++l)m.push(new C.C(B.KU,new C.x(l<a1.d.e?"\u2764\ufe0f":"\ud83d\udda4",a2,B.yX,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2))
m.push(B.bp)
k=a1.d
if(k.ay)k=B.jH
else{k=k.ax
k=k?B.eF:B.e7}k=k.j(0.95)
j=C.m(16)
i=a1.d
h=i.ay
if(h)g=B.cy
else{g=i.ax
g=g?B.cq:B.bb}g=C.I(g,B.r,1.4)
if(h)i="TRIPPED: tap to reset"
else{i=i.ax
i=i?"Breaker ON":"Breaker OFF"}m.push(C.aE(a2,C.p(a2,C.d(i,a2,a2,a2,a2,a2,a2,D.eRO,a2,a2,a2),B.f,a2,a2,new C.o(k,a2,g,j,a2,a2,B.n),a2,a2,a2,a2,B.qy,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.eg7(a1),a2,a2,a2,a2,a2,a2,!1,B.aa))
m=C.a([C.A(m,B.m,a2,B.e,B.Q,0,a2,a2)],n)
k=a1.ch
j=k?"In front":"Behind the wall"
i=k?E.aiT:E.aiS
k=C.a([A.PY(j,B.bz,i,k,k?a1.gbLt():a1.gby8()),B.ao],n)
if(!a4){j=v.b
B.d.v(k,C.a([A.PY("Labels",B.aV,L.Mv,j.f,new A.eg8(a1,v)),B.ao,A.PY("Hints",B.aL,B.qJ,j.e,new A.eg9(a1,v)),B.P],n))}s=A.a8Y(a1.f,new A.egd(a1),p,r,o,a2,a2,q,new A.ege(a1),a1.gc0O(),s,m,k)
r=C.a([],n)
if(a4){a4=C.a([],n)
for(l=0;l<3;++l){q=l<2?6:0
p=a1.y===l?B.aL.j(0.2):B.dt
o=new C.aX(12,12)
f=new C.aA(a1.y===l?B.aL:B.bE,1,B.r,-1)
if(l===0)m=a1.d.gaFF()
else{m=a1.d
m=l===1?m.ga2A():m.gb9b()}m=m?"\u2705 ":""
k=D.d3Z[l]
j=a1.y===l?B.aL:B.ad
a4.push(new C.bG(1,B.bn,C.aE(a2,C.p(a2,new C.ct(B.A,a2,a2,new C.x(m+k,a2,new C.F(!0,j,a2,a2,a2,a2,12,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2),a2),B.f,a2,a2,new C.o(p,a2,new C.bU(f,f,f,f),new C.bt(o,o,o,o),a2,a2,B.n),a2,a2,a2,new C.N(0,0,q,0),P.KW,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.egf(a1,l),a2,a2,a2,a2,a2,a2,!1,B.aa),a2))}a4=C.a([C.A(a4,B.m,a2,B.e,B.j,0,a2,a2),B.ao],n)
if(!a1.d.b){q=B.aV.j(0.1)
p=C.m(10)
o=C.I(B.aV.j(0.4),B.r,1)
a4.push(C.p(a2,C.d("\ud83d\udc49 "+a1.c0N(),a2,3,B.a2,a2,a2,a2,D.eZN,a2,a2,a2),B.f,a2,a2,new C.o(q,a2,o,p,a2,a2,B.n),a2,a2,a2,a2,B.cl,a2,a2,1/0))}else a4.push(D.f9w)
a4.push(B.ao)
q=C.a([],n)
for(p=a3.length,e=0;e<p;++e){d=a3[e]
o=d.a
m=a1.z===o?B.aL.j(0.25):B.c.j(0.07)
k=new C.aX(14,14)
o=a1.z===o
j=o?B.aL:B.b7
f=new C.aA(j,o?2:1,B.r,-1)
j=o?B.aL:B.ad
j=C.V(d.c,j,a2,a2,a2,19)
o=o?B.aL:B.c
q.push(new C.C(D.wU,C.aE(a2,C.p(a2,new C.cs(B.aX,B.e,B.j,B.m,a2,B.p,a2,0,C.a([j,B.bp,new C.x(d.b,a2,new C.F(!0,o,a2,a2,a2,a2,12.5,B.I,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2)],n),a2),B.f,a2,a2,new C.o(m,a2,new C.bU(f,f,f,f),new C.bt(k,k,k,k),a2,a2,B.n),a2,a2,a2,a2,B.hs,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.egg(a1,d),a2,a2,a2,a2,a2,a2,!1,B.aa),a2))}if(a1.y===1)q.push(new C.C(D.wU,C.aE(a2,C.p(a2,D.b0I,B.f,a2,a2,new C.o(B.e7,a2,a2,C.m(14),a2,a2,B.n),a2,a2,a2,a2,B.hs,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.egh(a1),a2,a2,a2,a2,a2,a2,!1,B.aa),a2))
a4.push(new C.a5(a2,52,C.cK(q,a2,a2,a2,a2,B.aX,!1),a2))
B.d.v(r,a4)}else{a4=C.a([],n)
q=v.b
if(q.c===0)for(p=u.e,o=q.b,e=0;e<3;++e){a0=p[e]
m=new C.aX(14,14)
k=a0.a
j=a1.at===k
i=j?B.b4:B.b7
f=new C.aA(i,j?3:1,B.r,-1)
i=C.a([],n)
if(o.jd(0,k))i.push(new C.C(B.aeH,C.V(B.ec,a0.d,a2,a2,a2,17),a2))
i.push(new C.x(a0.b,a2,new C.F(!0,a0.d,a2,a2,a2,a2,12.5,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
a4.push(C.aE(a2,C.p(a2,new C.cs(B.aX,B.e,B.Q,B.m,a2,B.p,a2,0,i,a2),B.f,a2,a2,new C.o(a0.c,a2,new C.bU(f,f,f,f),new C.bt(m,m,m,m),a2,a2,B.n),a2,a2,a2,a2,B.wX,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new A.egi(a1,v,a0),a2,a2,a2,a2,a2,a2,!1,B.aa))}a4=C.c5(B.bG,a4,B.bx,6,8)
p=C.a([A.y_("Back to the room",B.qD,a1.gc0M(),B.ad),B.ab],n)
if(q.c===0){u.toString
o=A.bBm(u,q)?"Push it into the box":"Fasten every wire"
p.push(A.y_(o,D.ak0,A.bBm(u,q)?new A.egj(a1):a2,B.aL))}if(q.c===1)B.d.v(p,C.a([A.y_("Pull it out",B.qN,new A.egk(a1),B.ad),B.ab,A.y_("Cover on",Y.v1,new A.ega(a1),B.aL)],n))
if(q.c>=2){q=q.w
o=q?"Take out the burnt one":"Pull it out again"
q=q?B.cq:B.ad
p.push(A.y_(o,D.bx3,new A.egb(a1),q))}B.d.v(r,C.a([a4,B.P,C.A(p,B.m,a2,B.e,B.j,0,a2,a2)],n))}a4=C.a([new A.Dl(t+" job",B.aL,s,C.v(r,B.m,a2,B.e,B.Q,0,B.p),new A.egc(a1,a5),"Phase "+(w+1)+"/3",a2)],n)
if(a1.CW)a4.push(C.bY(0,C.e2(C.p(a2,a2,B.f,D.adq,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),!0,a2),0,0,0))
return new C.an(B.W,a2,B.a9,B.q,a4,a2)},
cjT(d){var w=this.d
w===$&&C.c()
if(w.b)return
A:{if("wall"===d||"ceiling"===d||"fanbox"===d){w="Tap one of the glowing spots to mount the box there."
break A}if("drill"===d){w="Tap a stud to drill a hole through it."
break A}if("cable"===d){w="Tap a box that has no cable yet. The cable runs from the panel on the right."
break A}if("sheet"===d){w="Tap a glowing stud edge to hang the sheet there."
break A}if("knife"===d){w="Tap an orange box outline to cut the opening."
break A}if("screw"===d){w="Tap the glowing dots on the studs. The lighter dots between studs are a trap."
break A}if("tape"===d||"mud"===d||"sand"===d){w="Tap a seam between two sheets."
break A}if("paint"===d){w="Tap a sheet to paint it."
break A}if("tester"===d){w="Tap a box or a device to test it for power."
break A}if("tv"===d||"lamp"===d||"toaster"===d||"hairdryer"===d){w="Tap a finished outlet to plug it in."
break A}w="Tap a glowing box to put it there."
break A}this.Y1(w,!0)},
c9i(d){return C.c_(D.uz,null,new A.efP(this),d,!0,!0,!0,B.pQ,!1,!1,x.H)}}
A.xq.prototype={}
A.qK.prototype={
a4(){return"FaultKind."+this.b}}
A.tV.prototype={}
A.Ld.prototype={}
A.cn2.prototype={
bue(d,e,f){var w,v,u,t,s,r,q,p=this,o=new C.eT()
o.dI(p.a)
w=C.B(D.cVo,x.eP)
B.d.fn(w,o)
v=C.aZ(x.S)
u=C.a([],x.gw)
for(t=w.length,s=0;s<w.length;w.length===t||(0,C.K)(w),++s){r=w[s]
q=D.vp.h(0,r).e
if(v.t(0,q))continue
v.J(0,q)
u.push(new A.Ld(r,o.aD(3)))
if(u.length>=d)break}p.c!==$&&C.aQ()
p.c=u
p.auy()},
pi(d,e){var w=this.c
w===$&&C.c()
return B.d.b8(w,new A.cn7(e))},
auy(){var w,v,u,t,s=this,r=s.d,q=r.d
q.a8(0)
if(s.pi(0,D.Yb))q.J(0,72)
if(s.pi(0,D.Yc))q.J(0,75)
q=s.pi(0,D.Lz)
r.b=q
r.c=!q
r.w=s.pi(0,D.LA)
r.x=s.pi(0,D.Yg)
r.y=s.pi(0,D.Yh)
r.z=s.pi(0,D.Yf)
r.Q=s.pi(0,D.Yi)
r.as=s.pi(0,D.Yj)
r.at=s.pi(0,D.Ye)
q=r.f
q.a8(0)
r=r.r
r.a8(0)
w=s.c
w===$&&C.c()
w=B.d.gah(w)
v=new C.hc(w,new A.cn3())
while(v.C()){u=w.gU(0)
t=u.c
u=u.b
if(t)r.J(0,u)
else q.J(0,u)}},
gcyA(){var w=this.c
w===$&&C.c()
return B.d.d8(w,new A.cn5())},
gcFK(){var w=this.c
w===$&&C.c()
return new C.a1(w,new A.cn6(),C.T(w).k("a1<1>")).gM(0)},
cFo(d){var w,v,u,t,s,r,q,p=this.c
p===$&&C.c()
w=p.length
v=d===86
u=d===92
t=0
for(;t<p.length;p.length===w||(0,C.K)(p),++t){s=p[t]
r=s.a
q=!0
if(D.vp.h(0,r).e!==d)if(!(r===D.Lz&&v))r=r===D.LA&&u
else r=q
else r=q
if(r)return s}return null},
aVK(d){++this.f
return new A.eM(!1,d,!1,"")},
cnB(){var w,v,u,t,s=this;++s.r;--s.e
for(w=s.d,v=w.d,w=w.e,u=0;u<4;++u){t=D.ash[u]
if(!v.t(0,t))w.J(0,t)}w=s.e
if(w<=0){s.w=!0
return D.aRV}v=w===1?"life":"lives"
return new A.eM(!1,"ZAP! You touched a live wire and got a shock. All the breakers were knocked off. "+w+" "+v+" left. Turn the breaker OFF first.",!0,"shock")},
cPL(d,e){var w,v,u,t,s=this
if(s.w)return D.aRR
if(B.d.t(D.ash,e))return s.byC(d,e)
w=s.cFo(e)
if(d==="inspect"){if(w==null||w.c)return D.aRU
return new A.eM(!0,"You look and test: "+D.vp.h(0,w.a).b,!1,"")}if(w==null||w.c)return new A.eM(!1,s.b?"Nothing needs fixing there.":"There is nothing wrong with this, so the "+C.t(D.PR.h(0,d))+' is not needed. Use "Look and test" on things to find the problem.',!1,"")
v=D.vp.h(0,w.a)
if(d!==v.c){++s.f
return new A.eM(!1,s.b?"That is not the right tool for this problem.":"The "+C.t(D.PR.h(0,d))+" does not fix this. "+v.b,!1,"")}u=v.f
if(u!==0){t=s.d
u=!t.d.t(0,u)&&!t.e.t(0,u)}else u=!1
if(u){if(s.b)return s.cnB()
return s.aVK("STOP! "+v.r+" The wires here are live (120 volts). Tap the breaker in the panel (with your hand) to switch it off.")}w.c=!0
s.auy()
return new A.eM(!0,v.d,!1,"")},
byC(d,e){var w,v,u,t,s=this
if(d==="inspect"){w=s.d
if(w.d.t(0,e))w="This breaker has tripped: it sits in the middle (orange)."
else w=w.e.t(0,e)?"This breaker is switched OFF.":"This breaker is ON."
return new A.eM(!0,w,!1,"")}if(d!=="hand")return s.aVK(s.b?"Use your hand on a breaker.":"A breaker is switched with your hand, not with a "+C.t(D.PR.h(0,d))+".")
w=s.d
v=w.d
if(v.t(0,e)){w=s.c
w===$&&C.c()
u=C.T(w).k("a1<1>")
t=C.B(new C.a1(w,new A.cn4(e),u),u.k("G.E"))
if(t.length!==0){B.d.gK(t).c=!0
s.auy()
return new A.eM(!0,D.vp.h(0,B.d.gK(t).a).d,!1,"")}v.W(0,e)
return D.aSn}w=w.e
if(w.t(0,e)){w.W(0,e)
return D.aSh}w.J(0,e)
return D.aS8}}
A.MY.prototype={
T(){var w,v=new A.v6(-0.3,0.48,46,D.SV,$.aw())
v.f=80
w=new C.Ew()
$.G3()
w.j1(0)
return new A.aCB(v,w)}}
A.aCB.prototype={
gL(){var w=this.d
w===$&&C.c()
return w},
gC0(d){var w=this.e
if(w===$){this.a.toString
w=B.o.F(Date.now(),1e5)
this.e=w}return w},
a_(){var w,v=this
v.a1()
w=v.gC0(0)
w=A.h1z(v.a.d,w)
v.d=w
v.r=A.a0s(w.d)},
q(){var w=this.ax
if(w!=null)w.a9(0)
this.a2()},
c0U(d,e){var w=this,v=w.ax
if(v!=null)v.a9(0)
w.m(new A.ehH(w,d,e))
w.ax=C.cL(B.jk,new A.ehI(w))},
auz(){this.f.n0(46,0.48,D.SV,-0.3)
this.m(new A.ehw(this))},
c0T(d){var w,v,u,t=this
if(d===0){t.auz()
return}w=t.r
w===$&&C.c()
v=w.b.h(0,d)
w=t.d
w===$&&C.c()
u=w.cPL(t.x,d)
w=u.a
if(w)A.y0()
else A.ru(180,220,0.25,"square")
if(u.d==="shock"){C.fJ()
t.m(new A.ehB(t))
C.bN(B.nw,new A.ehC(t),x.P)}t.m(new A.ehD(t,d))
w=w&&!u.c
t.c0U(u.b,w)
if(v!=null){w=v.c
t.f.or(v.d,w)}w=t.d
if(w.w)$.aU.x1$.push(new A.ehE(t))
else if(w.gcyA()&&!t.at){t.at=!0
$.aU.x1$.push(new A.ehF(t))}},
c9p(){var w=null,v=this.c
v.toString
C.c9(w,w,!1,w,new A.ehz(this),v,w,!0,!0,x.H)},
c0Q(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.ehv(this),v,w,!0,!0,x.H)},
atZ(){this.m(new A.ehx(this))
this.auz()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&C.c()
g=g.gcFK()
w=i.d.c
w===$&&C.c()
w=w.length
v=i.r
v===$&&C.c()
u=i.y
t=i.z
s=i.Q
r=u!==0?v.b.h(0,u):h
q=x.p
p=C.a([],q)
for(o=0;o<3;++o)p.push(new C.C(B.KU,new C.x(o<i.d.e?"\u2764\ufe0f":"\ud83d\udda4",h,B.yX,h,h,h,h,h,h,h,h,h),h))
v=A.a8Y(i.f,new A.ehP(i),s,u,r,h,new A.ehQ(),t,i.gc0R(),i.gc0S(),v,C.a([C.A(p,B.m,h,B.e,B.Q,0,h,h)],q),h)
u=i.d.c
u===$&&C.c()
t=C.T(u)
t=new C.cS(new C.a1(u,new A.ehR(),t.k("a1<1>")),new A.ehS(),t.k("cS<1,n>")).aH(0,"  \xb7  ")
u=C.d("Customer: "+(t.length===0?"All fixed!":t),h,2,B.a2,h,h,h,D.aMT,h,h,h)
t=C.a([],q)
for(n=0;n<10;++n){m=D.d7I[n]
s=i.x===m?B.aL.j(0.25):B.c.j(0.07)
r=new C.aX(14,14)
p=i.x===m
l=p?B.aL:B.b7
k=new C.aA(l,p?2:1,B.r,-1)
l=D.ddr.h(0,m)
p=C.V(l,i.x===m?B.aL:B.ad,h,h,h,19)
l=D.PR.h(0,m)
l.toString
j=i.x===m?B.aL:B.c
t.push(new C.C(D.wU,C.aE(h,C.p(h,new C.cs(B.aX,B.e,B.j,B.m,h,B.p,h,0,C.a([p,B.bp,new C.x(l,h,new C.F(!0,j,h,h,h,h,12.5,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h)],q),h),B.f,h,h,new C.o(s,h,new C.bU(k,k,k,k),new C.bt(r,r,r,r),h,h,B.n),h,h,h,h,B.hs,h,h,h),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.ehT(i,m),h,h,h,h,h,h,!1,B.aa),h))}g=C.a([new A.Dl("Service call",B.aV,v,C.v(C.a([new C.bK(B.a3,h,h,u,h),B.P,new C.a5(h,52,C.cK(t,h,h,h,h,B.aX,!1),h)],q),B.m,h,B.e,B.Q,0,B.p),new A.ehU(i,d),""+g+"/"+w+" fixed",h)],q)
if(i.as)g.push(C.bY(0,C.e2(C.p(h,h,B.f,D.adq,h,h,h,h,h,h,h,h,h,h),!0,h),0,0,0))
return new C.an(B.W,h,B.a9,B.q,g,h)},
ctr(d){return C.c_(D.uz,null,new A.ehN(this),d,!0,!0,!0,B.pQ,!1,!1,x.H)},
$0(){return this.gL().$0()},
$1(d){return this.gL().$1(d)},
$2(d,e){return this.gL().$2(d,e)},
$3$1(d,e,f,g){return this.gL().$3$1(d,e,f,g)},
$1$2$onError(d,e,f){return this.gL().$1$2$onError(d,e,f)},
$2$1(d,e,f){return this.gL().$2$1(d,e,f)},
$1$1(d,e){return this.gL().$1$1(d,e)},
$3(d,e,f){return this.gL().$3(d,e,f)},
$4(d,e,f,g){return this.gL().$4(d,e,f,g)},
$3$3(d,e,f,g,h,i){return this.gL().$3$3(d,e,f,g,h,i)},
$2$2(d,e,f,g){return this.gL().$2$2(d,e,f,g)},
$1$2(d,e,f){return this.gL().$1$2(d,e,f)},
$4$cancelOnError$onDone$onError(d,e,f,g){return this.gL().$4$cancelOnError$onDone$onError(d,e,f,g)},
$1$growable(d){return this.gL().$1$growable(d)},
$1$highContrast(d){return this.gL().$1$highContrast(d)},
$1$accessibilityFeatures(d){return this.gL().$1$accessibilityFeatures(d)},
$2$disableAnimations$reduceMotion(d,e){return this.gL().$2$disableAnimations$reduceMotion(d,e)},
$1$platformBrightness(d){return this.gL().$1$platformBrightness(d)},
$1$accessibleNavigation(d){return this.gL().$1$accessibleNavigation(d)},
$1$semanticsEnabled(d){return this.gL().$1$semanticsEnabled(d)},
$1$locales(d){return this.gL().$1$locales(d)},
$1$paragraphSpacingOverride(d){return this.gL().$1$paragraphSpacingOverride(d)},
$1$wordSpacingOverride(d){return this.gL().$1$wordSpacingOverride(d)},
$1$letterSpacingOverride(d){return this.gL().$1$letterSpacingOverride(d)},
$1$lineHeightScaleFactorOverride(d){return this.gL().$1$lineHeightScaleFactorOverride(d)},
$1$textScaleFactor(d){return this.gL().$1$textScaleFactor(d)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gL().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$scale$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gL().$15$buttons$change$device$kind$onRespond$physicalX$physicalY$pressure$pressureMax$scrollDeltaX$scrollDeltaY$signalKind$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){return this.gL().$26$buttons$change$device$distance$distanceMax$kind$obscured$orientation$physicalX$physicalY$platformData$pressure$pressureMax$pressureMin$radiusMajor$radiusMax$radiusMin$radiusMinor$scale$scrollDeltaX$scrollDeltaY$signalKind$size$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5)},
$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i){return this.gL().$6$device$pressureMax$signalKind$timeStamp$viewId(d,e,f,g,h,i)},
$3$data$details$event(d,e,f){return this.gL().$3$data$details$event(d,e,f)},
$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gL().$13$buttons$change$device$kind$physicalX$physicalY$pressure$pressureMax$signalKind$tilt$timeStamp$viewId(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$2$specification$zoneValues(d,e){return this.gL().$2$specification$zoneValues(d,e)},
$5(d,e,f,g,h){return this.gL().$5(d,e,f,g,h)},
$3$4(d,e,f,g,h,i,j){return this.gL().$3$4(d,e,f,g,h,i,j)},
$2$4(d,e,f,g,h,i){return this.gL().$2$4(d,e,f,g,h,i)},
$1$4(d,e,f,g,h){return this.gL().$1$4(d,e,f,g,h)},
$3$6(d,e,f,g,h,i,j,k,l){return this.gL().$3$6(d,e,f,g,h,i,j,k,l)},
$2$5(d,e,f,g,h,i,j){return this.gL().$2$5(d,e,f,g,h,i,j)},
$1$style(d){return this.gL().$1$style(d)},
$2$priority$scheduler(d,e){return this.gL().$2$priority$scheduler(d,e)},
$1$allowPlatformDefault(d){return this.gL().$1$allowPlatformDefault(d)},
$2$position(d,e){return this.gL().$2$position(d,e)},
$1$debugBuildRoot(d){return this.gL().$1$debugBuildRoot(d)},
$2$defaultBlurTileMode(d,e){return this.gL().$2$defaultBlurTileMode(d,e)},
$2$aspect(d,e){return this.gL().$2$aspect(d,e)},
$1$isLiveRegion(d){return this.gL().$1$isLiveRegion(d)},
$1$namesRoute(d){return this.gL().$1$namesRoute(d)},
$1$scopesRoute(d){return this.gL().$1$scopesRoute(d)},
$1$isImage(d){return this.gL().$1$isImage(d)},
$1$isInMutuallyExclusiveGroup(d){return this.gL().$1$isInMutuallyExclusiveGroup(d)},
$1$isAccessibilityFocusBlocked(d){return this.gL().$1$isAccessibilityFocusBlocked(d)},
$1$isFocused(d){return this.gL().$1$isFocused(d)},
$1$isHeader(d){return this.gL().$1$isHeader(d)},
$1$isExpanded(d){return this.gL().$1$isExpanded(d)},
$1$isButton(d){return this.gL().$1$isButton(d)},
$1$isSelected(d){return this.gL().$1$isSelected(d)},
$1$isToggled(d){return this.gL().$1$isToggled(d)},
$1$isChecked(d){return this.gL().$1$isChecked(d)},
$1$isEnabled(d){return this.gL().$1$isEnabled(d)},
$1$findFirstFocus(d){return this.gL().$1$findFirstFocus(d)},
$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(d,e,f,g,h,i){return this.gL().$6$alignment$alignmentPolicy$curve$duration$targetRenderObject(d,e,f,g,h,i)},
$1$alpha(d){return this.gL().$1$alpha(d)},
$1$2$retryIf(d,e,f){return this.gL().$1$2$retryIf(d,e,f)},
$1$end(d){return this.gL().$1$end(d)},
$1$text(d){return this.gL().$1$text(d)},
$1$line(d){return this.gL().$1$line(d)},
$2$color(d,e){return this.gL().$2$color(d,e)},
$2$withDrive(d,e){return this.gL().$2$withDrive(d,e)},
$1$scheme(d){return this.gL().$1$scheme(d)},
$1$2$arguments(d,e,f){return this.gL().$1$2$arguments(d,e,f)},
$1$0(d){return this.gL().$1$0(d)},
$3$replace$state(d,e,f){return this.gL().$3$replace$state(d,e,f)},
$2$params(d,e){return this.gL().$2$params(d,e)},
$3$onAction$onChange(d,e,f){return this.gL().$3$onAction$onChange(d,e,f)},
$2$composingBaseOffset$composingExtentOffset(d,e){return this.gL().$2$composingBaseOffset$composingExtentOffset(d,e)},
$2$baseOffset$extentOffset(d,e){return this.gL().$2$baseOffset$extentOffset(d,e)},
$2$imperativeRemoval(d,e){return this.gL().$2$imperativeRemoval(d,e)},
$1$range(d){return this.gL().$1$range(d)},
$1$colorSpace(d){return this.gL().$1$colorSpace(d)},
$3$forgottenChildren(d,e,f){return this.gL().$3$forgottenChildren(d,e,f)},
$2$after(d,e){return this.gL().$2$after(d,e)},
$1$reversed(d){return this.gL().$1$reversed(d)},
$3$imperativeRemoval$isReplaced(d,e,f){return this.gL().$3$imperativeRemoval$isReplaced(d,e,f)},
$2$alignmentPolicy(d,e){return this.gL().$2$alignmentPolicy(d,e)},
$2$ignoreCurrentFocus(d,e){return this.gL().$2$ignoreCurrentFocus(d,e)},
$3$alignmentPolicy$forward(d,e,f){return this.gL().$3$alignmentPolicy$forward(d,e,f)},
$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h){return this.gL().$5$alignment$alignmentPolicy$curve$duration(d,e,f,g,h)},
$1$5(d,e,f,g,h,i){return this.gL().$1$5(d,e,f,g,h,i)},
$3$textDirection(d,e,f){return this.gL().$3$textDirection(d,e,f)},
$3$debugReport(d,e,f){return this.gL().$3$debugReport(d,e,f)},
$1$padding(d){return this.gL().$1$padding(d)},
$2$3(d,e,f,g,h){return this.gL().$2$3(d,e,f,g,h)},
$3$onDone$onError(d,e,f){return this.gL().$3$onDone$onError(d,e,f)},
$2$0(d,e){return this.gL().$2$0(d,e)},
$1$queryParameters(d){return this.gL().$1$queryParameters(d)},
$2$headers(d,e){return this.gL().$2$headers(d,e)},
$3$body$headers(d,e,f){return this.gL().$3$body$headers(d,e,f)},
$4$isLocal$mimeType(d,e,f,g){return this.gL().$4$isLocal$mimeType(d,e,f,g)},
$2$onError(d,e){return this.gL().$2$onError(d,e)},
$13$blRadiusX$blRadiusY$bottom$brRadiusX$brRadiusY$left$right$tlRadiusX$tlRadiusY$top$trRadiusX$trRadiusY$uniformRadii(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gL().$13$blRadiusX$blRadiusY$bottom$brRadiusX$brRadiusY$left$right$tlRadiusX$tlRadiusY$top$trRadiusX$trRadiusY$uniformRadii(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$1$minimum(d){return this.gL().$1$minimum(d)},
$2$reversed(d,e){return this.gL().$2$reversed(d,e)},
$1$reverse(d){return this.gL().$1$reverse(d)},
$2$textDirection(d,e){return this.gL().$2$textDirection(d,e)},
$4$borderRadius$circularity$eccentricity$side(d,e,f,g){return this.gL().$4$borderRadius$circularity$eccentricity$side(d,e,f,g)},
$3$context$exception$stack(d,e,f){return this.gL().$3$context$exception$stack(d,e,f)},
$2$exception$stack(d,e){return this.gL().$2$exception$stack(d,e)},
$2$getTargetSize(d,e){return this.gL().$2$getTargetSize(d,e)},
$4$allowUpscaling$cacheHeight$cacheWidth(d,e,f,g){return this.gL().$4$allowUpscaling$cacheHeight$cacheWidth(d,e,f,g)},
$5$constraints$delegate$parent$resizable$title(d,e,f,g,h){return this.gL().$5$constraints$delegate$parent$resizable$title(d,e,f,g,h)},
$2$maxWidth$minWidth(d,e){return this.gL().$2$maxWidth$minWidth(d,e)},
$2$maxHeight$minHeight(d,e){return this.gL().$2$maxHeight$minHeight(d,e)},
$1$iconTheme(d){return this.gL().$1$iconTheme(d)},
$1$side(d){return this.gL().$1$side(d)},
$1$color(d){return this.gL().$1$color(d)},
$2$color$fontSize(d,e){return this.gL().$2$color$fontSize(d,e)},
$3$padding$viewInsets$viewPadding(d,e,f){return this.gL().$3$padding$viewInsets$viewPadding(d,e,f)},
$1$withDelay(d){return this.gL().$1$withDelay(d)},
$3$cancel$down$reason(d,e,f){return this.gL().$3$cancel$down$reason(d,e,f)},
$2$down$up(d,e){return this.gL().$2$down$up(d,e)},
$1$down(d){return this.gL().$1$down(d)},
$1$move(d){return this.gL().$1$move(d)},
$1$brightness(d){return this.gL().$1$brightness(d)},
$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight(d,e,f,g,h,i,j,k,l){return this.gL().$9$applyTextScaling$color$fill$grade$opacity$opticalSize$shadows$size$weight(d,e,f,g,h,i,j,k,l)},
$2$minHeight$minWidth(d,e){return this.gL().$2$minHeight$minWidth(d,e)},
$2$isPrivate$localRole(d,e){return this.gL().$2$isPrivate$localRole(d,e)},
$7$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail(d,e,f,g,h,i,j){return this.gL().$7$code$collaboratorEmails$isPrivate$localRole$members$name$ownerEmail(d,e,f,g,h,i,j)},
$2$localRole$ownerEmail(d,e){return this.gL().$2$localRole$ownerEmail(d,e)},
$1$opacity(d){return this.gL().$1$opacity(d)},
$3$foregroundColor$iconSize$overlayColor(d,e,f){return this.gL().$3$foregroundColor$iconSize$overlayColor(d,e,f)},
$2$maxScaleFactor$minScaleFactor(d,e){return this.gL().$2$maxScaleFactor$minScaleFactor(d,e)},
$1$textScaler(d){return this.gL().$1$textScaler(d)},
$1$velocity(d){return this.gL().$1$velocity(d)},
$3$dimensions$textScaler(d,e,f){return this.gL().$3$dimensions$textScaler(d,e,f)},
$3$allowedExtensions$type$withData(d,e,f){return this.gL().$3$allowedExtensions$type$withData(d,e,f)},
$1$ownerEmail(d){return this.gL().$1$ownerEmail(d)},
$3$cancelOnError$onError(d,e,f){return this.gL().$3$cancelOnError$onError(d,e,f)},
$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i){return this.gL().$6$availableCameras$cameraDirection$isInitialized$isRunning$size$torchState(d,e,f,g,h,i)},
$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j){return this.gL().$7$cameraDirection$error$isInitialized$isRunning$size$torchState$zoomScale(d,e,f,g,h,i,j)},
$3$cancelOnError$onDone(d,e,f){return this.gL().$3$cancelOnError$onDone(d,e,f)},
$1$zoomScale(d){return this.gL().$1$zoomScale(d)},
$1$torchState(d){return this.gL().$1$torchState(d)},
$1$visibleChildrenPerParent(d){return this.gL().$1$visibleChildrenPerParent(d)},
$1$contentPadding(d){return this.gL().$1$contentPadding(d)},
$3$boxHeightStyle(d,e,f){return this.gL().$3$boxHeightStyle(d,e,f)},
$3$includePlaceholders$includeSemanticsLabels(d,e,f){return this.gL().$3$includePlaceholders$includeSemanticsLabels(d,e,f)},
$4$boxHeightStyle$boxWidthStyle(d,e,f,g){return this.gL().$4$boxHeightStyle$boxWidthStyle(d,e,f,g)},
$1$selection(d){return this.gL().$1$selection(d)},
$1$rect(d){return this.gL().$1$rect(d)},
$4$curve$descendant$duration$rect(d,e,f,g){return this.gL().$4$curve$descendant$duration$rect(d,e,f,g)},
$2$cause$from(d,e){return this.gL().$2$cause$from(d,e)},
$1$composing(d){return this.gL().$1$composing(d)},
$1$affinity(d){return this.gL().$1$affinity(d)},
$3$code$details$message(d,e,f){return this.gL().$3$code$details$message(d,e,f)},
$2$code$message(d,e){return this.gL().$2$code$message(d,e)},
$2$composing$selection(d,e){return this.gL().$2$composing$selection(d,e)},
$25$background$backgroundColor$color$debugLabel$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$overflow$package$shadows$textBaseline$wordSpacing(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4){return this.gL().$25$background$backgroundColor$color$debugLabel$decoration$decorationColor$decorationStyle$decorationThickness$fontFamily$fontFamilyFallback$fontFeatures$fontSize$fontStyle$fontVariations$fontWeight$foreground$height$leadingDistribution$letterSpacing$locale$overflow$package$shadows$textBaseline$wordSpacing(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4)},
$3$context$style$withComposing(d,e,f){return this.gL().$3$context$style$withComposing(d,e,f)},
$5$baseline$baselineOffset(d,e,f,g,h){return this.gL().$5$baseline$baselineOffset(d,e,f,g,h)},
$2$above(d,e){return this.gL().$2$above(d,e)},
$2$below(d,e){return this.gL().$2$below(d,e)},
$1$bottom(d){return this.gL().$1$bottom(d)},
$3$curve$duration$rect(d,e,f){return this.gL().$3$curve$duration$rect(d,e,f)},
$2$affinity$extentOffset(d,e){return this.gL().$2$affinity$extentOffset(d,e)},
$5$alpha$blue$colorSpace$green$red(d,e,f,g,h){return this.gL().$5$alpha$blue$colorSpace$green$red(d,e,f,g,h)},
$2$overscroll$scrollbars(d,e){return this.gL().$2$overscroll$scrollbars(d,e)},
$2$initialRestore(d,e){return this.gL().$2$initialRestore(d,e)},
$1$direction(d){return this.gL().$1$direction(d)},
$1$hasImplicitScrolling(d){return this.gL().$1$hasImplicitScrolling(d)},
$4$axis$rect(d,e,f,g){return this.gL().$4$axis$rect(d,e,f,g)},
$1$isReadOnly(d){return this.gL().$1$isReadOnly(d)},
$1$isTextField(d){return this.gL().$1$isTextField(d)},
$1$isMultiline(d){return this.gL().$1$isMultiline(d)},
$1$isObscured(d){return this.gL().$1$isObscured(d)},
$1$spellCheckService(d){return this.gL().$1$spellCheckService(d)},
$1$height(d){return this.gL().$1$height(d)},
$1$borderSide(d){return this.gL().$1$borderSide(d)},
$35$alignLabelWithHint$border$constraints$contentPadding$counterStyle$disabledBorder$enabledBorder$errorBorder$errorMaxLines$errorStyle$fillColor$filled$floatingLabelAlignment$floatingLabelBehavior$floatingLabelStyle$focusColor$focusedBorder$focusedErrorBorder$helperMaxLines$helperStyle$hintFadeDuration$hintMaxLines$hintStyle$hoverColor$iconColor$isCollapsed$isDense$labelStyle$prefixIconColor$prefixIconConstraints$prefixStyle$suffixIconColor$suffixIconConstraints$suffixStyle$visualDensity(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){return this.gL().$35$alignLabelWithHint$border$constraints$contentPadding$counterStyle$disabledBorder$enabledBorder$errorBorder$errorMaxLines$errorStyle$fillColor$filled$floatingLabelAlignment$floatingLabelBehavior$floatingLabelStyle$focusColor$focusedBorder$focusedErrorBorder$helperMaxLines$helperStyle$hintFadeDuration$hintMaxLines$hintStyle$hoverColor$iconColor$isCollapsed$isDense$labelStyle$prefixIconColor$prefixIconConstraints$prefixStyle$suffixIconColor$suffixIconConstraints$suffixStyle$visualDensity(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4)},
$2$enabled$hintMaxLines(d,e){return this.gL().$2$enabled$hintMaxLines(d,e)},
$4$counterStyle$counterText$errorText$semanticCounterText(d,e,f,g){return this.gL().$4$counterStyle$counterText$errorText$semanticCounterText(d,e,f,g)},
$2$counterText$semanticCounterText(d,e){return this.gL().$2$counterText$semanticCounterText(d,e)},
$1$extentOffset(d){return this.gL().$1$extentOffset(d)},
$2$body$title(d,e){return this.gL().$2$body$title(d,e)},
$1$chapters(d){return this.gL().$1$chapters(d)},
$1$picture(d){return this.gL().$1$picture(d)},
$1$photo(d){return this.gL().$1$photo(d)},
$3$composing$selection$text(d,e,f){return this.gL().$3$composing$selection$text(d,e,f)},
$1$scrollbars(d){return this.gL().$1$scrollbars(d)},
$3$rect(d,e,f){return this.gL().$3$rect(d,e,f)},
$2$hitTest$paintTransform(d,e){return this.gL().$2$hitTest$paintTransform(d,e)},
$3$crossAxisPosition$mainAxisPosition(d,e,f){return this.gL().$3$crossAxisPosition$mainAxisPosition(d,e,f)},
$2$padding$viewPadding(d,e){return this.gL().$2$padding$viewPadding(d,e)},
$2$isClosing(d,e){return this.gL().$2$isClosing(d,e)},
$3$parentUsesSize(d,e,f){return this.gL().$3$parentUsesSize(d,e,f)},
$1$inherited(d){return this.gL().$1$inherited(d)},
$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i){return this.gL().$6$font$fontBold$fontBoldItalic$fontFallback$fontItalic$fontNormal(d,e,f,g,h,i)},
$1$lineSpacing(d){return this.gL().$1$lineSpacing(d)},
$1$fontSize(d){return this.gL().$1$fontSize(d)},
$2$fontSize$fontWeight(d,e){return this.gL().$2$fontSize$fontWeight(d,e)},
$2$letterSpacing(d,e){return this.gL().$2$letterSpacing(d,e)},
$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h){return this.gL().$5$font$fontBold$fontBoldItalic$fontItalic$fontNormal(d,e,f,g,h)},
$4$annotation$baseline$style$text(d,e,f,g){return this.gL().$4$annotation$baseline$style$text(d,e,f,g)},
$1$noPixels(d){return this.gL().$1$noPixels(d)},
$6(d,e,f,g,h,i){return this.gL().$6(d,e,f,g,h,i)},
$2$frame(d,e){return this.gL().$2$frame(d,e)},
$2$length$position(d,e){return this.gL().$2$length$position(d,e)},
$1$numChannels(d){return this.gL().$1$numChannels(d)},
$2$offset(d,e){return this.gL().$2$offset(d,e)},
$1$width(d){return this.gL().$1$width(d)},
$2$heading(d,e){return this.gL().$2$heading(d,e)},
$1$advanceWidth(d){return this.gL().$1$advanceWidth(d)},
$1$format(d){return this.gL().$1$format(d)},
$1$includeChildren(d){return this.gL().$1$includeChildren(d)},
$1$cover(d){return this.gL().$1$cover(d)},
$3$imageQuality$maxWidth$source(d,e,f){return this.gL().$3$imageQuality$maxWidth$source(d,e,f)},
$2$options$source(d,e){return this.gL().$2$options$source(d,e)},
$1$font(d){return this.gL().$1$font(d)},
$1$position(d){return this.gL().$1$position(d)},
$1$resetColors(d){return this.gL().$1$resetColors(d)},
$1$bg2(d){return this.gL().$1$bg2(d)},
$1$accent(d){return this.gL().$1$accent(d)},
$1$ink(d){return this.gL().$1$ink(d)},
$1$bg1(d){return this.gL().$1$bg1(d)},
$4$font$position$resetColors$template(d,e,f,g){return this.gL().$4$font$position$resetColors$template(d,e,f,g)},
$1$header(d){return this.gL().$1$header(d)},
$3$author$subtitle$title(d,e,f){return this.gL().$3$author$subtitle$title(d,e,f)},
$1$maxScaleFactor(d){return this.gL().$1$maxScaleFactor(d)},
$1$task(d){return this.gL().$1$task(d)},
$1$oldWidget(d){return this.gL().$1$oldWidget(d)},
$1$isSlider(d){return this.gL().$1$isSlider(d)},
$3$isDiscrete$parentBox$sliderTheme(d,e,f){return this.gL().$3$isDiscrete$parentBox$sliderTheme(d,e,f)},
$1$ribbon(d){return this.gL().$1$ribbon(d)},
$1$texture(d){return this.gL().$1$texture(d)},
$1$frame(d){return this.gL().$1$frame(d)},
$1$titleSize(d){return this.gL().$1$titleSize(d)},
$1$foil(d){return this.gL().$1$foil(d)},
$1$emblem(d){return this.gL().$1$emblem(d)},
$2$backgroundColor$foregroundColor(d,e){return this.gL().$2$backgroundColor$foregroundColor(d,e)},
$11$author$emblem$foil$frame$position$ribbon$style$subtitle$texture$title$titleSize(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$author$emblem$foil$frame$position$ribbon$style$subtitle$texture$title$titleSize(d,e,f,g,h,i,j,k,l,m,n)},
$1$members(d){return this.gL().$1$members(d)},
$3$collaboratorEmails$localRole$ownerEmail(d,e,f){return this.gL().$3$collaboratorEmails$localRole$ownerEmail(d,e,f)},
$1$isPrivate(d){return this.gL().$1$isPrivate(d)},
$2$code$name(d,e){return this.gL().$2$code$name(d,e)},
$2$label$value(d,e){return this.gL().$2$label$value(d,e)},
$3$icon$label$onTap(d,e,f){return this.gL().$3$icon$label$onTap(d,e,f)},
$4$color$icon$label$onTap(d,e,f,g){return this.gL().$4$color$icon$label$onTap(d,e,f,g)},
$2$fallback(d,e){return this.gL().$2$fallback(d,e)},
$1$suffixIcon(d){return this.gL().$1$suffixIcon(d)},
$4$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor(d,e,f,g){return this.gL().$4$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor(d,e,f,g)},
$4$imageQuality$maxHeight$maxWidth$source(d,e,f,g){return this.gL().$4$imageQuality$maxHeight$maxWidth$source(d,e,f,g)},
$1$border(d){return this.gL().$1$border(d)},
$1$errorText(d){return this.gL().$1$errorText(d)},
$2$index(d,e){return this.gL().$2$index(d,e)},
$2$canvas$page(d,e){return this.gL().$2$canvas$page(d,e)},
$4$bold$valueColor(d,e,f,g){return this.gL().$4$bold$valueColor(d,e,f,g)},
$1$items(d){return this.gL().$1$items(d)},
$3$hint(d,e,f){return this.gL().$3$hint(d,e,f)},
$1$thumbnailPath(d){return this.gL().$1$thumbnailPath(d)},
$6$icon$iconColor$onTap$p$subtitle$title(d,e,f,g,h,i){return this.gL().$6$icon$iconColor$onTap$p$subtitle$title(d,e,f,g,h,i)},
$4$copyText(d,e,f,g){return this.gL().$4$copyText(d,e,f,g)},
$5$amount$memberEmail$memberName$registryId$walletDeposit(d,e,f,g,h){return this.gL().$5$amount$memberEmail$memberName$registryId$walletDeposit(d,e,f,g,h)},
$2$icon(d,e){return this.gL().$2$icon(d,e)},
$3$helper$icon(d,e,f){return this.gL().$3$helper$icon(d,e,f)},
$3$fileOptions(d,e,f){return this.gL().$3$fileOptions(d,e,f)},
$2$defaultColor(d,e){return this.gL().$2$defaultColor(d,e)},
$2$child$context(d,e){return this.gL().$2$child$context(d,e)},
$1$2$params(d,e,f){return this.gL().$1$2$params(d,e,f)},
$2$prefer(d,e){return this.gL().$2$prefer(d,e)},
$1$child(d){return this.gL().$1$child(d)},
$3$mimeType(d,e,f){return this.gL().$3$mimeType(d,e,f)},
$3$imageQuality$limit$maxWidth(d,e,f){return this.gL().$3$imageQuality$limit$maxWidth(d,e,f)},
$1$options(d){return this.gL().$1$options(d)},
$3$begin$child$end(d,e,f){return this.gL().$3$begin$child$end(d,e,f)},
$8$enableDomStorage$enableJavaScript$headers$universalLinksOnly$useSafariVC$useWebView$webOnlyWindowName(d,e,f,g,h,i,j,k){return this.gL().$8$enableDomStorage$enableJavaScript$headers$universalLinksOnly$useSafariVC$useWebView$webOnlyWindowName(d,e,f,g,h,i,j,k)},
$5$onChanged$textCapitalization(d,e,f,g,h){return this.gL().$5$onChanged$textCapitalization(d,e,f,g,h)},
$6$hint$onChanged$textCapitalization(d,e,f,g,h,i){return this.gL().$6$hint$onChanged$textCapitalization(d,e,f,g,h,i)},
$5$hint$onChanged(d,e,f,g,h){return this.gL().$5$hint$onChanged(d,e,f,g,h)},
$6$hint$maxLines$onChanged(d,e,f,g,h,i){return this.gL().$6$hint$maxLines$onChanged(d,e,f,g,h,i)},
$5$label$primary(d,e,f,g,h){return this.gL().$5$label$primary(d,e,f,g,h)},
$5$dot$tip(d,e,f,g,h){return this.gL().$5$dot$tip(d,e,f,g,h)},
$5$badge$label(d,e,f,g,h){return this.gL().$5$badge$label(d,e,f,g,h)},
$6$badge$caption$tip(d,e,f,g,h,i){return this.gL().$6$badge$caption$tip(d,e,f,g,h,i)},
$5$caption$tip(d,e,f,g,h){return this.gL().$5$caption$tip(d,e,f,g,h)},
$4$imageQuality$maxWidth$preferredCameraDevice$source(d,e,f,g){return this.gL().$4$imageQuality$maxWidth$preferredCameraDevice$source(d,e,f,g)},
$4$colors(d,e,f,g){return this.gL().$4$colors(d,e,f,g)},
$4$busy(d,e,f,g){return this.gL().$4$busy(d,e,f,g)},
$2$hint(d,e){return this.gL().$2$hint(d,e)},
$6$animation$controller$max$min$target$tween(d,e,f,g,h,i){return this.gL().$6$animation$controller$max$min$target$tween(d,e,f,g,h,i)},
$1$hour(d){return this.gL().$1$hour(d)},
$1$minute(d){return this.gL().$1$minute(d)},
$3$error$errorText$hintText(d,e,f){return this.gL().$3$error$errorText$hintText(d,e,f)},
$2$suffixIcon$suffixIconConstraints(d,e){return this.gL().$2$suffixIcon$suffixIconConstraints(d,e)},
$1$fillColor(d){return this.gL().$1$fillColor(d)},
$4$overscroll$physics$platform$scrollbars(d,e,f,g){return this.gL().$4$overscroll$physics$platform$scrollbars(d,e,f,g)},
$3$colorScheme$dialogTheme$timePickerTheme(d,e,f){return this.gL().$3$colorScheme$dialogTheme$timePickerTheme(d,e,f)},
$2$onTimeout(d,e){return this.gL().$2$onTimeout(d,e)},
$2$test(d,e){return this.gL().$2$test(d,e)},
$1$overscroll(d){return this.gL().$1$overscroll(d)},
$1$inherit(d){return this.gL().$1$inherit(d)},
$2$fit(d,e){return this.gL().$2$fit(d,e)},
$3$weight(d,e,f){return this.gL().$3$weight(d,e,f)},
$3$isDark$label$value(d,e,f){return this.gL().$3$isDark$label$value(d,e,f)},
$6$color$icon$isDark$label$onTap$value(d,e,f,g,h,i){return this.gL().$6$color$icon$isDark$label$onTap$value(d,e,f,g,h,i)},
$1$orderId(d){return this.gL().$1$orderId(d)},
$1$url(d){return this.gL().$1$url(d)},
$2$headers$method(d,e){return this.gL().$2$headers$method(d,e)},
$3$2$method$url(d,e,f,g,h){return this.gL().$3$2$method$url(d,e,f,g,h)},
$3$3$body$method$url(d,e,f,g,h,i){return this.gL().$3$3$body$method$url(d,e,f,g,h,i)},
$1$isPlaying(d){return this.gL().$1$isPlaying(d)},
$3$caption$isCompleted$position(d,e,f){return this.gL().$3$caption$isCompleted$position(d,e,f)},
$1$isLooping(d){return this.gL().$1$isLooping(d)},
$6$duration$errorDescription$isCompleted$isInitialized$rotationCorrection$size(d,e,f,g,h,i){return this.gL().$6$duration$errorDescription$isCompleted$isInitialized$rotationCorrection$size(d,e,f,g,h,i)},
$1$isCompleted(d){return this.gL().$1$isCompleted(d)},
$1$buffered(d){return this.gL().$1$buffered(d)},
$1$isBuffering(d){return this.gL().$1$isBuffering(d)},
$2$isCompleted$isPlaying(d,e){return this.gL().$2$isCompleted$isPlaying(d,e)},
$3$hintText$prefixIcon(d,e,f){return this.gL().$3$hintText$prefixIcon(d,e,f)},
$1$locationSettings(d){return this.gL().$1$locationSettings(d)},
$3$enableHighAccuracy$maximumAge$timeout(d,e,f){return this.gL().$3$enableHighAccuracy$maximumAge$timeout(d,e,f)},
$2$hitTest$paintOffset(d,e){return this.gL().$2$hitTest$paintOffset(d,e)},
$3$height$width(d,e,f){return this.gL().$3$height$width(d,e,f)},
$1$force(d){return this.gL().$1$force(d)},
$3$maxDuration$preferredCameraDevice$source(d,e,f){return this.gL().$3$maxDuration$preferredCameraDevice$source(d,e,f)},
$1$silent(d){return this.gL().$1$silent(d)},
$2$lockFor(d,e){return this.gL().$2$lockFor(d,e)},
$6$helps(d,e,f,g,h,i){return this.gL().$6$helps(d,e,f,g,h,i)},
$1$useStateColumn(d){return this.gL().$1$useStateColumn(d)},
$4$copyable(d,e,f,g){return this.gL().$4$copyable(d,e,f,g)},
$2$child$last(d,e){return this.gL().$2$child$last(d,e)},
$6$accent$date$icon$subtitle$title(d,e,f,g,h,i){return this.gL().$6$accent$date$icon$subtitle$title(d,e,f,g,h,i)},
$5$bg$fg$icon$onPressed$tooltip(d,e,f,g,h){return this.gL().$5$bg$fg$icon$onPressed$tooltip(d,e,f,g,h)},
$4$ageAt(d,e,f,g){return this.gL().$4$ageAt(d,e,f,g)},
$2$prefix(d,e){return this.gL().$2$prefix(d,e)},
$7$accent$child$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j){return this.gL().$7$accent$child$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j)},
$3$phone(d,e,f){return this.gL().$3$phone(d,e,f)},
$5$enableScrollToHighlight$excludeSemantics$useMaterial3(d,e,f,g,h){return this.gL().$5$enableScrollToHighlight$excludeSemantics$useMaterial3(d,e,f,g,h)},
$4$focusedIndex$useMaterial3(d,e,f,g){return this.gL().$4$focusedIndex$useMaterial3(d,e,f,g)},
$1$minimumSize(d){return this.gL().$1$minimumSize(d)},
$4$backgroundColor$foregroundColor$iconColor$overlayColor(d,e,f,g){return this.gL().$4$backgroundColor$foregroundColor$iconColor$overlayColor(d,e,f,g)},
$1$prefixIcon(d){return this.gL().$1$prefixIcon(d)},
$1$relatives(d){return this.gL().$1$relatives(d)},
$1$relation(d){return this.gL().$1$relation(d)},
$1$gender(d){return this.gL().$1$gender(d)},
$5$accent$delayMs$icon$onTap$title(d,e,f,g,h){return this.gL().$5$accent$delayMs$icon$onTap$title(d,e,f,g,h)},
$3$size$weight(d,e,f){return this.gL().$3$size$weight(d,e,f)},
$4$align$size$weight(d,e,f,g){return this.gL().$4$align$size$weight(d,e,f,g)},
$2$label(d,e){return this.gL().$2$label(d,e)},
$1$state(d){return this.gL().$1$state(d)},
$3$amount$description$fund(d,e,f){return this.gL().$3$amount$description$fund(d,e,f)},
$3$amount$description$spendingId(d,e,f){return this.gL().$3$amount$description$spendingId(d,e,f)},
$4$hideBudget$hideSpendings$hideTransactions$state(d,e,f,g){return this.gL().$4$hideBudget$hideSpendings$hideTransactions$state(d,e,f,g)},
$3$label$onChanged$value(d,e,f){return this.gL().$3$label$onChanged$value(d,e,f)},
$2$amount$state(d,e){return this.gL().$2$amount$state(d,e)},
$1$colorScheme(d){return this.gL().$1$colorScheme(d)},
$3$amount$description$direction(d,e,f){return this.gL().$3$amount$description$direction(d,e,f)},
$4$confirmLabel$message$stepNum$title(d,e,f,g){return this.gL().$4$confirmLabel$message$stepNum$title(d,e,f,g)},
$5$confirmLabel$message$requireTypeAllStates$stepNum$title(d,e,f,g,h){return this.gL().$5$confirmLabel$message$requireTypeAllStates$stepNum$title(d,e,f,g,h)},
$4$hint$multiline(d,e,f,g){return this.gL().$4$hint$multiline(d,e,f,g)},
$3$multiline(d,e,f){return this.gL().$3$multiline(d,e,f)},
$2$campaignId$campaignTitle(d,e){return this.gL().$2$campaignId$campaignTitle(d,e)},
$5$color$icon$onCopyTap$title$value(d,e,f,g,h){return this.gL().$5$color$icon$onCopyTap$title$value(d,e,f,g,h)},
$4$big(d,e,f,g){return this.gL().$4$big(d,e,f,g)},
$4$color$icon$onTap$tooltip(d,e,f,g){return this.gL().$4$color$icon$onTap$tooltip(d,e,f,g)},
$3$color(d,e,f){return this.gL().$3$color(d,e,f)},
$3$copied$error$state(d,e,f){return this.gL().$3$copied$error$state(d,e,f)},
$2$spin(d,e){return this.gL().$2$spin(d,e)},
$1$appIcon(d){return this.gL().$1$appIcon(d)},
$3$bold$depth(d,e,f){return this.gL().$3$bold$depth(d,e,f)},
$2$depth(d,e){return this.gL().$2$depth(d,e)},
$4$depth$onTap$selected(d,e,f,g){return this.gL().$4$depth$onTap$selected(d,e,f,g)},
$3$depth$selected(d,e,f){return this.gL().$3$depth$selected(d,e,f)},
$2$data$kind(d,e){return this.gL().$2$data$kind(d,e)},
$1$updatedAt(d){return this.gL().$1$updatedAt(d)},
$1$publicUrl(d){return this.gL().$1$publicUrl(d)},
$8$customCode$database$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i,j,k){return this.gL().$8$customCode$database$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i,j,k)},
$3$appIcon$tagline$themeColor(d,e,f){return this.gL().$3$appIcon$tagline$themeColor(d,e,f)},
$6$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i){return this.gL().$6$id$publicUrl$publishedAt$reviewNote$slug$status(d,e,f,g,h,i)},
$3$maxLines(d,e,f){return this.gL().$3$maxLines(d,e,f)},
$3$keyboard(d,e,f){return this.gL().$3$keyboard(d,e,f)},
$1$amountColor(d){return this.gL().$1$amountColor(d)},
$4$on$tooltip(d,e,f,g){return this.gL().$4$on$tooltip(d,e,f,g)},
$3$tooltip(d,e,f){return this.gL().$3$tooltip(d,e,f)},
$2$ownerEmail$updatedAt(d,e){return this.gL().$2$ownerEmail$updatedAt(d,e)},
$3$allowMultiple$type$withData(d,e,f){return this.gL().$3$allowMultiple$type$withData(d,e,f)},
$1$screens(d){return this.gL().$1$screens(d)},
$3$cancelLeap$leapingIndicator(d,e,f){return this.gL().$3$cancelLeap$leapingIndicator(d,e,f)},
$3$hasGesture$source(d,e,f){return this.gL().$3$hasGesture$source(d,e,f)},
$4$hasGesture$source(d,e,f,g){return this.gL().$4$hasGesture$source(d,e,f,g)},
$1$3$manager$onTick$sum(d,e,f,g){return this.gL().$1$3$manager$onTick$sum(d,e,f,g)},
$2$camera$tileZoom(d,e){return this.gL().$2$camera$tileZoom(d,e)},
$2$fadeIn$instantaneous(d,e){return this.gL().$2$fadeIn$instantaneous(d,e)},
$1$additionalHeaders(d){return this.gL().$1$additionalHeaders(d)},
$2$bytes$headers(d,e){return this.gL().$2$bytes$headers(d,e)},
$1$fadeIn(d){return this.gL().$1$fadeIn(d)},
$2$lat$lng(d,e){return this.gL().$2$lat$lng(d,e)},
$1$address(d){return this.gL().$1$address(d)},
$1$title(d){return this.gL().$1$title(d)},
$1$database(d){return this.gL().$1$database(d)},
$3$reviewNote$status$updatedAt(d,e,f){return this.gL().$3$reviewNote$status$updatedAt(d,e,f)},
$3$publicUrl$seoDescription$slug(d,e,f){return this.gL().$3$publicUrl$seoDescription$slug(d,e,f)},
$4$publishedAt$reviewNote$status$updatedAt(d,e,f,g){return this.gL().$4$publishedAt$reviewNote$status$updatedAt(d,e,f,g)},
$6$joinedAt$onTap(d,e,f,g,h,i){return this.gL().$6$joinedAt$onTap(d,e,f,g,h,i)},
$5$accent(d,e,f,g,h){return this.gL().$5$accent(d,e,f,g,h)},
$5$danger(d,e,f,g,h){return this.gL().$5$danger(d,e,f,g,h)},
$1$r(d){return this.gL().$1$r(d)},
$1$f(d){return this.gL().$1$f(d)},
$7$key(d,e,f,g,h,i,j){return this.gL().$7$key(d,e,f,g,h,i,j)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.gL().$8$fx$key(d,e,f,g,h,i,j,k)},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.gL().$8$anim$delay$key(d,e,f,g,h,i,j,k)},
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){return this.gL().$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.gL().$8$anim$fx$key(d,e,f,g,h,i,j,k)},
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){return this.gL().$9$fx$key$rotation(d,e,f,g,h,i,j,k,l)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.gL().$9$anim$key$weight(d,e,f,g,h,i,j,k,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.gL().$9$color$delay$key(d,e,f,g,h,i,j,k,l)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n)},
$8(d,e,f,g,h,i,j,k){return this.gL().$8(d,e,f,g,h,i,j,k)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.gL().$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o)},
$5$size(d,e,f,g,h){return this.gL().$5$size(d,e,f,g,h)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$anim$delay(d,e,f,g,h,i,j,k,l,m)},
$9(d,e,f,g,h,i,j,k,l){return this.gL().$9(d,e,f,g,h,i,j,k,l)},
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return this.gL().$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p)},
$2$ctx$label(d,e){return this.gL().$2$ctx$label(d,e)},
$6$accent$ctx$icon$subtitle$title$value(d,e,f,g,h,i){return this.gL().$6$accent$ctx$icon$subtitle$title$value(d,e,f,g,h,i)},
$3$sharePositionOrigin$subject(d,e,f){return this.gL().$3$sharePositionOrigin$subject(d,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.gL().$9$align$weight(d,e,f,g,h,i,j,k,l)},
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$align$style$weight(d,e,f,g,h,i,j,k,l,m)},
$8$weight(d,e,f,g,h,i,j,k){return this.gL().$8$weight(d,e,f,g,h,i,j,k)},
$5$doc$history$instruction$photo$template(d,e,f,g,h){return this.gL().$5$doc$history$instruction$photo$template(d,e,f,g,h)},
$4$paper$photo$request$template(d,e,f,g){return this.gL().$4$paper$photo$request$template(d,e,f,g)},
$1$paper(d){return this.gL().$1$paper(d)},
$2$fontFamily(d,e){return this.gL().$2$fontFamily(d,e)},
$6$child$h$label$on$onTap$w(d,e,f,g,h,i){return this.gL().$6$child$h$label$on$onTap$w(d,e,f,g,h,i)},
$6$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$thumbShape$trackHeight(d,e,f,g,h,i){return this.gL().$6$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$thumbShape$trackHeight(d,e,f,g,h,i)},
$2$radius(d,e){return this.gL().$2$radius(d,e)},
$6$shown(d,e,f,g,h,i){return this.gL().$6$shown(d,e,f,g,h,i)},
$3$on$onTap(d,e,f){return this.gL().$3$on$onTap(d,e,f)},
$1$size(d){return this.gL().$1$size(d)},
$2$logo$style(d,e){return this.gL().$2$logo$style(d,e)},
$1$logo(d){return this.gL().$1$logo(d)},
$1$subtitle(d){return this.gL().$1$subtitle(d)},
$3$accent$isDark(d,e,f){return this.gL().$3$accent$isDark(d,e,f)},
$7$color$enabled$icon$isDark$onTap$subtitle$title(d,e,f,g,h,i,j){return this.gL().$7$color$enabled$icon$isDark$onTap$subtitle$title(d,e,f,g,h,i,j)},
$8$color$enabled$icon$isDark$isPro$onTap$subtitle$title(d,e,f,g,h,i,j,k){return this.gL().$8$color$enabled$icon$isDark$isPro$onTap$subtitle$title(d,e,f,g,h,i,j,k)},
$2$selection$text(d,e){return this.gL().$2$selection$text(d,e)},
$2$orElse(d,e){return this.gL().$2$orElse(d,e)},
$11$colors$onTap$orbit$phase$preview$pulse$scan$subtitle$t$thumbHeight$title(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$colors$onTap$orbit$phase$preview$pulse$scan$subtitle$t$thumbHeight$title(d,e,f,g,h,i,j,k,l,m,n)},
$1$imageQuality(d){return this.gL().$1$imageQuality(d)},
$2$height$offsetLeft(d,e){return this.gL().$2$height$offsetLeft(d,e)},
$3$size(d,e,f){return this.gL().$3$size(d,e,f)},
$2$size(d,e){return this.gL().$2$size(d,e)},
$1$existing(d){return this.gL().$1$existing(d)},
$1$fromTemplate(d){return this.gL().$1$fromTemplate(d)},
$1$lastContacted(d){return this.gL().$1$lastContacted(d)},
$1$favorite(d){return this.gL().$1$favorite(d)},
$4$hint(d,e,f,g){return this.gL().$4$hint(d,e,f,g)},
$4$count(d,e,f,g){return this.gL().$4$count(d,e,f,g)},
$5$color$count(d,e,f,g,h){return this.gL().$5$color$count(d,e,f,g,h)},
$3$tip(d,e,f){return this.gL().$3$tip(d,e,f)},
$4$color$tip(d,e,f,g){return this.gL().$4$color$tip(d,e,f,g)},
$1$note(d){return this.gL().$1$note(d)},
$1$letterSpacing(d){return this.gL().$1$letterSpacing(d)},
$4$glyph$label$onTap$selected(d,e,f,g){return this.gL().$4$glyph$label$onTap$selected(d,e,f,g)},
$2$imageQuality$source(d,e){return this.gL().$2$imageQuality$source(d,e)},
$1$fontWeight(d){return this.gL().$1$fontWeight(d)},
$5$cardAddress$cardHours$cardPhone$cardWebsite$centerLabel(d,e,f,g,h){return this.gL().$5$cardAddress$cardHours$cardPhone$cardWebsite$centerLabel(d,e,f,g,h)},
$3$child$title(d,e,f){return this.gL().$3$child$title(d,e,f)},
$2$logoBase64$showCardLogo(d,e){return this.gL().$2$logoBase64$showCardLogo(d,e)},
$1$moduleShape(d){return this.gL().$1$moduleShape(d)},
$1$eyeShape(d){return this.gL().$1$eyeShape(d)},
$3$accent$background$foreground(d,e,f){return this.gL().$3$accent$background$foreground(d,e,f)},
$1$cornerStyle(d){return this.gL().$1$cornerStyle(d)},
$1$centerLabel(d){return this.gL().$1$centerLabel(d)},
$1$cardWebsite(d){return this.gL().$1$cardWebsite(d)},
$1$cardHours(d){return this.gL().$1$cardHours(d)},
$1$cardAddress(d){return this.gL().$1$cardAddress(d)},
$1$cardPhone(d){return this.gL().$1$cardPhone(d)},
$1$cardTemplate(d){return this.gL().$1$cardTemplate(d)},
$1$displayMode(d){return this.gL().$1$displayMode(d)},
$5$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h){return this.gL().$5$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h)},
$4$onChanged(d,e,f,g){return this.gL().$4$onChanged(d,e,f,g)},
$6$bioNote$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h,i){return this.gL().$6$bioNote$candidateName$ctaText$headline$marqueeText$supportLine(d,e,f,g,h,i)},
$9$active$candidateName$ctaText$durationDays$endsAt$headline$publishedBy$startsAt$updatedAt(d,e,f,g,h,i,j,k,l){return this.gL().$9$active$candidateName$ctaText$durationDays$endsAt$headline$publishedBy$startsAt$updatedAt(d,e,f,g,h,i,j,k,l)},
$1$photoUrl(d){return this.gL().$1$photoUrl(d)},
$1$backgroundUrl(d){return this.gL().$1$backgroundUrl(d)},
$2$accentArgb$slideStyle(d,e){return this.gL().$2$accentArgb$slideStyle(d,e)},
$1$accentArgb(d){return this.gL().$1$accentArgb(d)},
$1$showMarquee(d){return this.gL().$1$showMarquee(d)},
$1$showCirclePhoto(d){return this.gL().$1$showCirclePhoto(d)},
$9$backgroundUrl$bioNote$candidateId$candidateName$ctaText$headline$marqueeText$photoUrl$supportLine(d,e,f,g,h,i,j,k,l){return this.gL().$9$backgroundUrl$bioNote$candidateId$candidateName$ctaText$headline$marqueeText$photoUrl$supportLine(d,e,f,g,h,i,j,k,l)},
$3$onTap$selected(d,e,f){return this.gL().$3$onTap$selected(d,e,f)},
$1$period(d){return this.gL().$1$period(d)},
$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g){return this.gL().$4$activeTrackColor$inactiveTrackColor$thumbColor$trackHeight(d,e,f,g)},
$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h){return this.gL().$5$fileNameOverrides$sharePositionOrigin$subject$text(d,e,f,g,h)},
$2$volume(d,e){return this.gL().$2$volume(d,e)},
$2$coinsDelta$won(d,e){return this.gL().$2$coinsDelta$won(d,e)},
$4$isFront$revealDates(d,e,f,g){return this.gL().$4$isFront$revealDates(d,e,f,g)},
$2$dy$opacity(d,e){return this.gL().$2$dy$opacity(d,e)},
$2$dx$opacity(d,e){return this.gL().$2$dx$opacity(d,e)},
$2$opacity$scale(d,e){return this.gL().$2$opacity$scale(d,e)},
$3$angle$opacity$scale(d,e,f){return this.gL().$3$angle$opacity$scale(d,e,f)},
$3$dy$opacity$scale(d,e,f){return this.gL().$3$dy$opacity$scale(d,e,f)},
$1$frontSpendingId(d){return this.gL().$1$frontSpendingId(d)},
$1$imageBase64(d){return this.gL().$1$imageBase64(d)},
$1$civicIdJson(d){return this.gL().$1$civicIdJson(d)},
$2$businessCardJson$description(d,e){return this.gL().$2$businessCardJson$description(d,e)},
$2$autoPlay$style(d,e){return this.gL().$2$autoPlay$style(d,e)},
$6$amount$date$description$note$receiptItems$receiptMerchant(d,e,f,g,h,i){return this.gL().$6$amount$date$description$note$receiptItems$receiptMerchant(d,e,f,g,h,i)},
$4$bold$color(d,e,f,g){return this.gL().$4$bold$color(d,e,f,g)},
$2$cloudRequest(d,e){return this.gL().$2$cloudRequest(d,e)},
$1$source(d){return this.gL().$1$source(d)},
$1$reason(d){return this.gL().$1$reason(d)},
$1$complete(d){return this.gL().$1$complete(d)},
$3$bonus(d,e,f){return this.gL().$3$bonus(d,e,f)},
$2$allowDecrease$syncBalance(d,e){return this.gL().$2$allowDecrease$syncBalance(d,e)},
$2$allowDecrease(d,e){return this.gL().$2$allowDecrease(d,e)},
$2$isFinal(d,e){return this.gL().$2$isFinal(d,e)},
$1$sortOrder(d){return this.gL().$1$sortOrder(d)},
$3$colorValue$icon$title(d,e,f){return this.gL().$3$colorValue$icon$title(d,e,f)},
$1$questions(d){return this.gL().$1$questions(d)},
$2$id$sortOrder(d,e){return this.gL().$2$id$sortOrder(d,e)},
$1$bumpWalletRevision(d){return this.gL().$1$bumpWalletRevision(d)},
$2$bumpWalletRevision(d,e){return this.gL().$2$bumpWalletRevision(d,e)},
$2$fromCloudRelay(d,e){return this.gL().$2$fromCloudRelay(d,e)},
$4$body$cooldown$tag$title(d,e,f,g){return this.gL().$4$body$cooldown$tag$title(d,e,f,g)},
$6$animDelayMs(d,e,f,g,h,i){return this.gL().$6$animDelayMs(d,e,f,g,h,i)},
$3$backgroundColor$foregroundColor$overlayColor(d,e,f){return this.gL().$3$backgroundColor$foregroundColor$overlayColor(d,e,f)},
$7$accent$children$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j){return this.gL().$7$accent$children$expanded$icon$onToggle$subtitle$title(d,e,f,g,h,i,j)},
$2$suffix(d,e){return this.gL().$2$suffix(d,e)},
$3$hint$suffix(d,e,f){return this.gL().$3$hint$suffix(d,e,f)},
$7$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j){return this.gL().$7$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j)},
$8$amount$giftName$pending$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k){return this.gL().$8$amount$giftName$pending$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k)},
$3$fromState$member$toState(d,e,f){return this.gL().$3$fromState$member$toState(d,e,f)},
$3$showActions(d,e,f){return this.gL().$3$showActions(d,e,f)},
$4$type(d,e,f,g){return this.gL().$4$type(d,e,f,g)},
$5$fmt$type(d,e,f,g,h){return this.gL().$5$fmt$type(d,e,f,g,h)},
$8$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k){return this.gL().$8$amount$giftName$storeAddress$storeListingId$storeSellerEmail$storeSellerName$styleId(d,e,f,g,h,i,j,k)},
$1$stashToken(d){return this.gL().$1$stashToken(d)},
$1$shortCode(d){return this.gL().$1$shortCode(d)},
$1$preselectedCode(d){return this.gL().$1$preselectedCode(d)},
$2$type$withData(d,e){return this.gL().$2$type$withData(d,e)},
$2$isLuxury(d,e){return this.gL().$2$isLuxury(d,e)},
$3$onChanged(d,e,f){return this.gL().$3$onChanged(d,e,f)},
$4$hint$onChanged(d,e,f,g){return this.gL().$4$hint$onChanged(d,e,f,g)},
$4$keyboard$onChanged(d,e,f,g){return this.gL().$4$keyboard$onChanged(d,e,f,g)},
$5$hint$keyboard$onChanged(d,e,f,g,h){return this.gL().$5$hint$keyboard$onChanged(d,e,f,g,h)},
$4$maxLines$onChanged(d,e,f,g){return this.gL().$4$maxLines$onChanged(d,e,f,g)},
$1$record(d){return this.gL().$1$record(d)},
$2$clearPendingDelete$stock(d,e){return this.gL().$2$clearPendingDelete$stock(d,e)},
$2$pendingDeleteAt$stock(d,e){return this.gL().$2$pendingDeleteAt$stock(d,e)},
$1$barcode(d){return this.gL().$1$barcode(d)},
$4$controller$hint$icon$label(d,e,f,g){return this.gL().$4$controller$hint$icon$label(d,e,f,g)},
$5$controller$hint$icon$label$onChanged(d,e,f,g,h){return this.gL().$5$controller$hint$icon$label$onChanged(d,e,f,g,h)},
$5$controller$hint$icon$label$maxLines(d,e,f,g,h){return this.gL().$5$controller$hint$icon$label$maxLines(d,e,f,g,h)},
$5$controller$hint$icon$label$obscure(d,e,f,g,h){return this.gL().$5$controller$hint$icon$label$obscure(d,e,f,g,h)},
$3$async(d,e,f){return this.gL().$3$async(d,e,f)},
$3$icon$onTap$tooltip(d,e,f){return this.gL().$3$icon$onTap$tooltip(d,e,f)},
$3$aspect$facingMode$pipEnabled(d,e,f){return this.gL().$3$aspect$facingMode$pipEnabled(d,e,f)},
$1$restoreHost(d){return this.gL().$1$restoreHost(d)},
$1$hostStream(d){return this.gL().$1$hostStream(d)},
$2$withAudio(d,e){return this.gL().$2$withAudio(d,e)},
$6$align(d,e,f,g,h,i){return this.gL().$6$align(d,e,f,g,h,i)},
$7(d,e,f,g,h,i,j){return this.gL().$7(d,e,f,g,h,i,j)},
$4$triangles(d,e,f,g){return this.gL().$4$triangles(d,e,f,g)},
$4$angledTop(d,e,f,g){return this.gL().$4$angledTop(d,e,f,g)},
$10$accent$badge$bannerColors$brandBg$brandFg$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$accent$badge$bannerColors$brandBg$brandFg$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m)},
$9$accent$badge$bannerColors$brandBg$brandFg$footerBg$textColor(d,e,f,g,h,i,j,k,l){return this.gL().$9$accent$badge$bannerColors$brandBg$brandFg$footerBg$textColor(d,e,f,g,h,i,j,k,l)},
$11$accent$badge$bannerColors$brandBg$brandFg$crimsonVelvet$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$accent$badge$bannerColors$brandBg$brandFg$crimsonVelvet$crown$footerBg$textColor(d,e,f,g,h,i,j,k,l,m,n)},
$10$accent$badge$bannerColors$brandBg$brandFg$footerBg$marble$textColor(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$accent$badge$bannerColors$brandBg$brandFg$footerBg$marble$textColor(d,e,f,g,h,i,j,k,l,m)},
$1$maxWidth(d){return this.gL().$1$maxWidth(d)},
$1$dividerColor(d){return this.gL().$1$dividerColor(d)},
$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k){return this.gL().$8$removeBottomInset$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k)},
$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j){return this.gL().$7$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j)},
$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k){return this.gL().$8$maintainBottomViewPadding$removeBottomPadding$removeLeftPadding$removeRightPadding$removeTopPadding(d,e,f,g,h,i,j,k)},
$1$floatingActionButtonScale(d){return this.gL().$1$floatingActionButtonScale(d)},
$1$removeBottom(d){return this.gL().$1$removeBottom(d)},
$2$viewInsets$viewPadding(d,e){return this.gL().$2$viewInsets$viewPadding(d,e)},
$3$2$headers$maybeSingle(d,e,f,g,h){return this.gL().$3$2$headers$maybeSingle(d,e,f,g,h)},
$2$boldText$textScaler(d,e){return this.gL().$2$boldText$textScaler(d,e)},
$1$viewInsets(d){return this.gL().$1$viewInsets(d)},
$6$banner$body$incomeTransaction$sound$tag$title(d,e,f,g,h,i){return this.gL().$6$banner$body$incomeTransaction$sound$tag$title(d,e,f,g,h,i)},
$5$adminDashboardAlert$body$cooldown$tag$title(d,e,f,g,h){return this.gL().$5$adminDashboardAlert$body$cooldown$tag$title(d,e,f,g,h)},
$2$where(d,e){return this.gL().$2$where(d,e)},
$3$tag(d,e,f){return this.gL().$3$tag(d,e,f)},
$6$adminDashboardAlert$body$cooldown$showInAppBanner$tag$title(d,e,f,g,h,i){return this.gL().$6$adminDashboardAlert$body$cooldown$showInAppBanner$tag$title(d,e,f,g,h,i)},
$5$body$cooldown$important$tag$title(d,e,f,g,h){return this.gL().$5$body$cooldown$important$tag$title(d,e,f,g,h)},
$4$body$important$tag$title(d,e,f,g){return this.gL().$4$body$important$tag$title(d,e,f,g)},
$3$body$tag$title(d,e,f){return this.gL().$3$body$tag$title(d,e,f)},
$5$body$incomeAmount$sound$tag$title(d,e,f,g,h){return this.gL().$5$body$incomeAmount$sound$tag$title(d,e,f,g,h)},
$2$primaryTextTheme$textTheme(d,e){return this.gL().$2$primaryTextTheme$textTheme(d,e)},
$3$bodyColor$decorationColor$displayColor(d,e,f){return this.gL().$3$bodyColor$decorationColor$displayColor(d,e,f)},
$1$fontFamily(d){return this.gL().$1$fontFamily(d)},
$1$fontFamilyFallback(d){return this.gL().$1$fontFamilyFallback(d)},
$2$bottom$top(d,e){return this.gL().$2$bottom$top(d,e)},
$3$icon$isDark$onTap(d,e,f){return this.gL().$3$icon$isDark$onTap(d,e,f)},
$3$isDark$onReply(d,e,f){return this.gL().$3$isDark$onReply(d,e,f)},
$3$canvasColor$dialogBackgroundColor$scaffoldBackgroundColor(d,e,f){return this.gL().$3$canvasColor$dialogBackgroundColor$scaffoldBackgroundColor(d,e,f)},
$2$body$overlay(d,e){return this.gL().$2$body$overlay(d,e)},
$2$body$paidStampOnLeft(d,e){return this.gL().$2$body$paidStampOnLeft(d,e)},
$1$body(d){return this.gL().$1$body(d)},
$3$body$overlay$paidStampOnLeft(d,e,f){return this.gL().$3$body$overlay$paidStampOnLeft(d,e,f)},
$4$body$paidStampOnLeft$showCrownBand$topBand(d,e,f,g){return this.gL().$4$body$paidStampOnLeft$showCrownBand$topBand(d,e,f,g)},
$3$body$showCrownBand$topBand(d,e,f){return this.gL().$3$body$showCrownBand$topBand(d,e,f)},
$3$controller$hint$icon(d,e,f){return this.gL().$3$controller$hint$icon(d,e,f)},
$5$autofocus$focusNode$mouseCursor$painter$size(d,e,f,g,h){return this.gL().$5$autofocus$focusNode$mouseCursor$painter$size(d,e,f,g,h)},
$4$icon$rows$title(d,e,f,g){return this.gL().$4$icon$rows$title(d,e,f,g)},
$3$strong(d,e,f){return this.gL().$3$strong(d,e,f)},
$4$color$strong(d,e,f,g){return this.gL().$4$color$strong(d,e,f,g)},
$1$removeTop(d){return this.gL().$1$removeTop(d)},
$3$card(d,e,f){return this.gL().$3$card(d,e,f)},
$4$child$glow$glowAt$radius(d,e,f,g){return this.gL().$4$child$glow$glowAt$radius(d,e,f,g)},
$5$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$trackHeight(d,e,f,g,h){return this.gL().$5$activeTrackColor$inactiveTrackColor$overlayColor$thumbColor$trackHeight(d,e,f,g,h)},
$3$eccentric(d,e,f){return this.gL().$3$eccentric(d,e,f)},
$4$vol(d,e,f,g){return this.gL().$4$vol(d,e,f,g)},
$4$sweep(d,e,f,g){return this.gL().$4$sweep(d,e,f,g)},
$4$iconOnly(d,e,f,g){return this.gL().$4$iconOnly(d,e,f,g)},
$3$ghost(d,e,f){return this.gL().$3$ghost(d,e,f)},
$3$big(d,e,f){return this.gL().$3$big(d,e,f)},
$4$split(d,e,f,g){return this.gL().$4$split(d,e,f,g)},
$5$shine$split(d,e,f,g,h){return this.gL().$5$shine$split(d,e,f,g,h)},
$6$joints$shine$sides(d,e,f,g,h,i){return this.gL().$6$joints$shine$sides(d,e,f,g,h,i)},
$7$r1$shine$sides(d,e,f,g,h,i,j){return this.gL().$7$r1$shine$sides(d,e,f,g,h,i,j)},
$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k){return this.gL().$8$caps$inner$shine$sides(d,e,f,g,h,i,j,k)},
$6$shine$sides(d,e,f,g,h,i){return this.gL().$6$shine$sides(d,e,f,g,h,i)},
$4$shine(d,e,f,g){return this.gL().$4$shine(d,e,f,g)},
$5$sides(d,e,f,g,h){return this.gL().$5$sides(d,e,f,g,h)},
$6$taped(d,e,f,g,h,i){return this.gL().$6$taped(d,e,f,g,h,i)},
$4$alongX(d,e,f,g){return this.gL().$4$alongX(d,e,f,g)},
$5$ends$shine(d,e,f,g,h){return this.gL().$5$ends$shine(d,e,f,g,h)},
$2$col(d,e){return this.gL().$2$col(d,e)},
$5$h$w(d,e,f,g,h){return this.gL().$5$h$w(d,e,f,g,h)},
$7$caps$shine$sides(d,e,f,g,h,i,j){return this.gL().$7$caps$shine$sides(d,e,f,g,h,i,j)},
$6$shine(d,e,f,g,h,i){return this.gL().$6$shine(d,e,f,g,h,i)},
$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j){return this.gL().$7$endCaps$joints$shine$sides(d,e,f,g,h,i,j)},
$2$dist$target(d,e){return this.gL().$2$dist$target(d,e)},
$3$r(d,e,f){return this.gL().$3$r(d,e,f)},
$6$ends$shine$split(d,e,f,g,h,i){return this.gL().$6$ends$shine$split(d,e,f,g,h,i)},
$4$round(d,e,f,g){return this.gL().$4$round(d,e,f,g)},
$5$col$round(d,e,f,g,h){return this.gL().$5$col$round(d,e,f,g,h)},
$4$col(d,e,f,g){return this.gL().$4$col(d,e,f,g)},
$5$shine$yaw(d,e,f,g,h){return this.gL().$5$shine$yaw(d,e,f,g,h)},
$2$dist$yaw(d,e){return this.gL().$2$dist$yaw(d,e)},
$5$color$on(d,e,f,g,h){return this.gL().$5$color$on(d,e,f,g,h)},
$2$flip(d,e){return this.gL().$2$flip(d,e)},
$4$left$top(d,e,f,g){return this.gL().$4$left$top(d,e,f,g)},
$3$color$size(d,e,f){return this.gL().$3$color$size(d,e,f)},
$4$color$size$weight(d,e,f,g){return this.gL().$4$color$size$weight(d,e,f,g)},
$4$bottom$left(d,e,f,g){return this.gL().$4$bottom$left(d,e,f,g)},
$4$right$top(d,e,f,g){return this.gL().$4$right$top(d,e,f,g)},
$4$letterSpacing$size$weight(d,e,f,g){return this.gL().$4$letterSpacing$size$weight(d,e,f,g)},
$4$color$letterSpacing$size(d,e,f,g){return this.gL().$4$color$letterSpacing$size(d,e,f,g)},
$4$bottom$right(d,e,f,g){return this.gL().$4$bottom$right(d,e,f,g)},
$5$left$right$top(d,e,f,g,h){return this.gL().$5$left$right$top(d,e,f,g,h)},
$5$bottom$left$right(d,e,f,g,h){return this.gL().$5$bottom$left$right(d,e,f,g,h)},
$5$color$letterSpacing$size$weight(d,e,f,g,h){return this.gL().$5$color$letterSpacing$size$weight(d,e,f,g,h)},
$4$color$maxLines$size(d,e,f,g){return this.gL().$4$color$maxLines$size(d,e,f,g)},
$5$color$maxLines$size$weight(d,e,f,g,h){return this.gL().$5$color$maxLines$size$weight(d,e,f,g,h)},
$3$fill(d,e,f){return this.gL().$3$fill(d,e,f)},
$3$color$defaultColor$disabledColor(d,e,f){return this.gL().$3$color$defaultColor$disabledColor(d,e,f)},
$3$backgroundColor$color$defaultColor(d,e,f){return this.gL().$3$backgroundColor$color$defaultColor(d,e,f)},
$3$color$defaultColor$selectedColor(d,e,f){return this.gL().$3$color$defaultColor$selectedColor(d,e,f)},
$2$color$size(d,e){return this.gL().$2$color$size(d,e)},
$3$color$fontStyle$fontWeight(d,e,f){return this.gL().$3$color$fontStyle$fontWeight(d,e,f)},
$4$alignment$downsample$fit(d,e,f,g){return this.gL().$4$alignment$downsample$fit(d,e,f,g)},
$8$minPageHeight(d,e,f,g,h,i,j,k){return this.gL().$8$minPageHeight(d,e,f,g,h,i,j,k)},
$9$headerH$panel(d,e,f,g,h,i,j,k,l){return this.gL().$9$headerH$panel(d,e,f,g,h,i,j,k,l)},
$9$headerH$softPanel(d,e,f,g,h,i,j,k,l){return this.gL().$9$headerH$softPanel(d,e,f,g,h,i,j,k,l)},
$9$minPageHeight$nameOverride$topGap(d,e,f,g,h,i,j,k,l){return this.gL().$9$minPageHeight$nameOverride$topGap(d,e,f,g,h,i,j,k,l)},
$7$minPageHeight(d,e,f,g,h,i,j){return this.gL().$7$minPageHeight(d,e,f,g,h,i,j)},
$8$minPageHeight$topGap(d,e,f,g,h,i,j,k){return this.gL().$8$minPageHeight$topGap(d,e,f,g,h,i,j,k)},
$4$fit$height$width(d,e,f,g){return this.gL().$4$fit$height$width(d,e,f,g)},
$8$minPageHeight$nameOverride(d,e,f,g,h,i,j,k){return this.gL().$8$minPageHeight$nameOverride(d,e,f,g,h,i,j,k)},
$5$bg$fg(d,e,f,g,h){return this.gL().$5$bg$fg(d,e,f,g,h)},
$3$radius(d,e,f){return this.gL().$3$radius(d,e,f)},
$2$letterSpacing$shadows(d,e){return this.gL().$2$letterSpacing$shadows(d,e)},
$5$background(d,e,f,g,h){return this.gL().$5$background(d,e,f,g,h)},
$1$shadows(d){return this.gL().$1$shadows(d)},
$4$radius(d,e,f,g){return this.gL().$4$radius(d,e,f,g)},
$5$header(d,e,f,g,h){return this.gL().$5$header(d,e,f,g,h)},
$3$gap(d,e,f){return this.gL().$3$gap(d,e,f)},
$9$minPageHeight$nameOverride$wrapLink(d,e,f,g,h,i,j,k,l){return this.gL().$9$minPageHeight$nameOverride$wrapLink(d,e,f,g,h,i,j,k,l)},
$9$minPageHeight$topGap$wrapLink(d,e,f,g,h,i,j,k,l){return this.gL().$9$minPageHeight$topGap$wrapLink(d,e,f,g,h,i,j,k,l)},
$8$minPageHeight$wrapLink(d,e,f,g,h,i,j,k){return this.gL().$8$minPageHeight$wrapLink(d,e,f,g,h,i,j,k)},
$3$alignment$fit(d,e,f){return this.gL().$3$alignment$fit(d,e,f)},
$2$front(d,e){return this.gL().$2$front(d,e)},
$9$avatarSize$belowAvatar$curveH$curvePainter$headerH$minPageHeight$pad$ring$tpl(d,e,f,g,h,i,j,k,l){return this.gL().$9$avatarSize$belowAvatar$curveH$curvePainter$headerH$minPageHeight$pad$ring$tpl(d,e,f,g,h,i,j,k,l)},
$6$minPageHeight(d,e,f,g,h,i){return this.gL().$6$minPageHeight(d,e,f,g,h,i)},
$4$spacing$weight(d,e,f,g){return this.gL().$4$spacing$weight(d,e,f,g)},
$5$color$spacing$weight(d,e,f,g,h){return this.gL().$5$color$spacing$weight(d,e,f,g,h)},
$5$height$spacing$weight(d,e,f,g,h){return this.gL().$5$height$spacing$weight(d,e,f,g,h)},
$5$align$lines$max$min(d,e,f,g,h){return this.gL().$5$align$lines$max$min(d,e,f,g,h)},
$4$align$lines$max(d,e,f,g){return this.gL().$4$align$lines$max(d,e,f,g)},
$1$thick(d){return this.gL().$1$thick(d)},
$5$color$lines$max$min(d,e,f,g,h){return this.gL().$5$color$lines$max$min(d,e,f,g,h)},
$3$color$max(d,e,f){return this.gL().$3$color$max(d,e,f)},
$5$color$height$weight(d,e,f,g,h){return this.gL().$5$color$height$weight(d,e,f,g,h)},
$2$startSize(d,e){return this.gL().$2$startSize(d,e)},
$2$align(d,e){return this.gL().$2$align(d,e)},
$1$lines(d){return this.gL().$1$lines(d)},
$3$lines$max(d,e,f){return this.gL().$3$lines$max(d,e,f)},
$2$max(d,e){return this.gL().$2$max(d,e)},
$5$height$style$weight(d,e,f,g,h){return this.gL().$5$height$style$weight(d,e,f,g,h)},
$3$align$max(d,e,f){return this.gL().$3$align$max(d,e,f)},
$3$sidebar$startSize(d,e,f){return this.gL().$3$sidebar$startSize(d,e,f)},
$6$color$height$style$weight(d,e,f,g,h,i){return this.gL().$6$color$height$style$weight(d,e,f,g,h,i)},
$2$lines(d,e){return this.gL().$2$lines(d,e)},
$4$height$weight(d,e,f,g){return this.gL().$4$height$weight(d,e,f,g)},
$3$gap$startSize(d,e,f){return this.gL().$3$gap$startSize(d,e,f)},
$3$height(d,e,f){return this.gL().$3$height(d,e,f)},
$5$color$height$style(d,e,f,g,h){return this.gL().$5$color$height$style(d,e,f,g,h)},
$4$height$style(d,e,f,g){return this.gL().$4$height$style(d,e,f,g)},
$4$color$height(d,e,f,g){return this.gL().$4$color$height(d,e,f,g)},
$8$height(d,e,f,g,h,i,j,k){return this.gL().$8$height(d,e,f,g,h,i,j,k)},
$6$color$height$spacing$weight(d,e,f,g,h,i){return this.gL().$6$color$height$spacing$weight(d,e,f,g,h,i)},
$2$double_$thick(d,e){return this.gL().$2$double_$thick(d,e)},
$2$color$thick(d,e){return this.gL().$2$color$thick(d,e)},
$4$child$label$onTap$selected(d,e,f,g){return this.gL().$4$child$label$onTap$selected(d,e,f,g)},
$2$color$fontStyle(d,e){return this.gL().$2$color$fontStyle(d,e)},
$4$stroke(d,e,f,g){return this.gL().$4$stroke(d,e,f,g)},
$4$clipSingleLine(d,e,f,g){return this.gL().$4$clipSingleLine(d,e,f,g)},
$2$padding$size(d,e){return this.gL().$2$padding$size(d,e)},
$1$female(d){return this.gL().$1$female(d)},
$1$w(d){return this.gL().$1$w(d)},
$1$h(d){return this.gL().$1$h(d)},
$1$visualDensity(d){return this.gL().$1$visualDensity(d)},
$3$overscroll$physics$scrollbars(d,e,f){return this.gL().$3$overscroll$physics$scrollbars(d,e,f)},
$3$bold(d,e,f){return this.gL().$3$bold(d,e,f)},
$1$borderRadius(d){return this.gL().$1$borderRadius(d)},
$2$color$height(d,e){return this.gL().$2$color$height(d,e)},
$2$fillColor$hintText(d,e){return this.gL().$2$fillColor$hintText(d,e)},
$2$force(d,e){return this.gL().$2$force(d,e)},
$2$sendGen$text(d,e){return this.gL().$2$sendGen$text(d,e)},
$4$framed$options$sendGen$text(d,e,f,g){return this.gL().$4$framed$options$sendGen$text(d,e,f,g)},
$4$options$parseExtrasForUserText$sendGen$text(d,e,f,g){return this.gL().$4$options$parseExtrasForUserText$sendGen$text(d,e,f,g)},
$4$applicantDetails$recentUserMessages$startUrl$task(d,e,f,g){return this.gL().$4$applicantDetails$recentUserMessages$startUrl$task(d,e,f,g)},
$3$parseExtrasForUserText$sendGen$text(d,e,f){return this.gL().$3$parseExtrasForUserText$sendGen$text(d,e,f)},
$3$creds$prompt$userText(d,e,f){return this.gL().$3$creds$prompt$userText(d,e,f)},
$3$imageB64$sendGen$text(d,e,f){return this.gL().$3$imageB64$sendGen$text(d,e,f)},
$3$options$sendGen$text(d,e,f){return this.gL().$3$options$sendGen$text(d,e,f)},
$3$adultMode$seed(d,e,f){return this.gL().$3$adultMode$seed(d,e,f)},
$1$baseUrl(d){return this.gL().$1$baseUrl(d)},
$3$adultGeneration$sceneText$varietySeed(d,e,f){return this.gL().$3$adultGeneration$sceneText$varietySeed(d,e,f)},
$6$checked$context$onCheckboxChanged$onRowTap$overlayColor$tristate(d,e,f,g,h,i){return this.gL().$6$checked$context$onCheckboxChanged$onRowTap$overlayColor$tristate(d,e,f,g,h,i)},
$7$icon$iconBg$iconColor$onTap$subtitle$title(d,e,f,g,h,i,j){return this.gL().$7$icon$iconBg$iconColor$onTap$subtitle$title(d,e,f,g,h,i,j)},
$1$foregroundColor(d){return this.gL().$1$foregroundColor(d)},
$2$reverse(d,e){return this.gL().$2$reverse(d,e)},
$2$left$right(d,e){return this.gL().$2$left$right(d,e)},
$4$displayFeatures$padding$viewInsets$viewPadding(d,e,f,g){return this.gL().$4$displayFeatures$padding$viewInsets$viewPadding(d,e,f,g)},
$1$iconColor(d){return this.gL().$1$iconColor(d)},
$1$selectable(d){return this.gL().$1$selectable(d)},
$2$value(d,e){return this.gL().$2$value(d,e)},
$1$details(d){return this.gL().$1$details(d)},
$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m,n){return this.gL().$11$borderRadius$color$containedInkWell$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m,n)},
$10$borderRadius$color$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$borderRadius$color$controller$customBorder$onRemoved$position$radius$rectCallback$referenceBox$textDirection(d,e,f,g,h,i,j,k,l,m)},
$1$context(d){return this.gL().$1$context(d)},
$1$textTheme(d){return this.gL().$1$textTheme(d)},
$1$hintText(d){return this.gL().$1$hintText(d)},
$2$fragment$queryParameters(d,e){return this.gL().$2$fragment$queryParameters(d,e)},
$1$pkceAsyncStorage(d){return this.gL().$1$pkceAsyncStorage(d)},
$1$localStorage(d){return this.gL().$1$localStorage(d)},
$2$onDone(d,e){return this.gL().$2$onDone(d,e)},
$2$isRunning$torchState(d,e){return this.gL().$2$isRunning$torchState(d,e)},
$1$onlyDirtyChildren(d){return this.gL().$1$onlyDirtyChildren(d)},
$1$usedSemanticsIds(d){return this.gL().$1$usedSemanticsIds(d)},
$2$descendant$rect(d,e){return this.gL().$2$descendant$rect(d,e)},
$1$isHidden(d){return this.gL().$1$isHidden(d)},
$1$config(d){return this.gL().$1$config(d)},
$1$isRequired(d){return this.gL().$1$isRequired(d)},
$1$isKeyboardKey(d){return this.gL().$1$isKeyboardKey(d)},
$1$isLink(d){return this.gL().$1$isLink(d)},
$1$3$onlyFirst(d,e,f,g){return this.gL().$1$3$onlyFirst(d,e,f,g)},
$1$oldLayer(d){return this.gL().$1$oldLayer(d)},
$6$oldLayer(d,e,f,g,h,i){return this.gL().$6$oldLayer(d,e,f,g,h,i)},
$4$textDirection(d,e,f,g){return this.gL().$4$textDirection(d,e,f,g)},
$1$maximum(d){return this.gL().$1$maximum(d)},
$1$strokeAlign(d){return this.gL().$1$strokeAlign(d)},
$6$blend$blendMode(d,e,f,g,h,i){return this.gL().$6$blend$blendMode(d,e,f,g,h,i)},
$5$borderRadius$shape$textDirection(d,e,f,g,h){return this.gL().$5$borderRadius$shape$textDirection(d,e,f,g,h)},
$4$isDiscrete$offset$parentBox$sliderTheme(d,e,f,g){return this.gL().$4$isDiscrete$offset$parentBox$sliderTheme(d,e,f,g)},
$1$trackGap(d){return this.gL().$1$trackGap(d)},
$10$enableAnimation$isDiscrete$isEnabled$parentBox$secondaryOffset$sliderTheme$textDirection$thumbCenter(d,e,f,g,h,i,j,k,l,m){return this.gL().$10$enableAnimation$isDiscrete$isEnabled$parentBox$secondaryOffset$sliderTheme$textDirection$thumbCenter(d,e,f,g,h,i,j,k,l,m)},
$12$activationAnimation$enableAnimation$isDiscrete$labelPainter$parentBox$sizeWithOverflow$sliderTheme$textDirection$textScaleFactor$value(d,e,f,g,h,i,j,k,l,m,n,o){return this.gL().$12$activationAnimation$enableAnimation$isDiscrete$labelPainter$parentBox$sizeWithOverflow$sliderTheme$textDirection$textScaleFactor$value(d,e,f,g,h,i,j,k,l,m,n,o)},
$1$thumbSize(d){return this.gL().$1$thumbSize(d)},
$5$alpha$glow$step(d,e,f,g,h){return this.gL().$5$alpha$glow$step(d,e,f,g,h)},
$3$a$b(d,e,f){return this.gL().$3$a$b(d,e,f)},
$2$vertical(d,e){return this.gL().$2$vertical(d,e)},
$6$back(d,e,f,g,h,i){return this.gL().$6$back(d,e,f,g,h,i)},
$4$bottomLeft$topRight(d,e,f,g){return this.gL().$4$bottomLeft$topRight(d,e,f,g)},
$2$selected(d,e){return this.gL().$2$selected(d,e)},
$3$color$endFraction$startFraction(d,e,f){return this.gL().$3$color$endFraction$startFraction(d,e,f)},
$6$gapExtent$gapPercentage$gapStart$textDirection(d,e,f,g,h,i){return this.gL().$6$gapExtent$gapPercentage$gapStart$textDirection(d,e,f,g,h,i)},
$2$parentUsesSize(d,e){return this.gL().$2$parentUsesSize(d,e)},
$1$maxHeight(d){return this.gL().$1$maxHeight(d)},
$4$isScrolling$newPosition$oldPosition$velocity(d,e,f,g){return this.gL().$4$isScrolling$newPosition$oldPosition$velocity(d,e,f,g)},
$2$maxExtent$minExtent(d,e){return this.gL().$2$maxExtent$minExtent(d,e)},
$1$maxExtent(d){return this.gL().$1$maxExtent(d)},
$2$bottomNavigationBarTop$floatingActionButtonArea(d,e){return this.gL().$2$bottomNavigationBarTop$floatingActionButtonArea(d,e)},
$2$from$to(d,e){return this.gL().$2$from$to(d,e)},
$2$scheduleNewFrame(d,e){return this.gL().$2$scheduleNewFrame(d,e)},
$2$accept$capture(d,e){return this.gL().$2$accept$capture(d,e)},
$2$accept$multiple(d,e){return this.gL().$2$accept$multiple(d,e)},
$2$female$size(d,e){return this.gL().$2$female$size(d,e)},
$2$h$w(d,e){return this.gL().$2$h$w(d,e)},
$5$max$min(d,e,f,g,h){return this.gL().$5$max$min(d,e,f,g,h)},
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return this.gL().$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
$2$f$r(d,e){return this.gL().$2$f$r(d,e)},
$1$radius(d){return this.gL().$1$radius(d)},
$4$gender$phone(d,e,f,g){return this.gL().$4$gender$phone(d,e,f,g)},
$3$hint$prefix(d,e,f){return this.gL().$3$hint$prefix(d,e,f)},
$3$helperText$prefixText(d,e,f){return this.gL().$3$helperText$prefixText(d,e,f)},
$1$verifyUrls(d){return this.gL().$1$verifyUrls(d)},
$2$wrapWidth(d,e){return this.gL().$2$wrapWidth(d,e)}}
A.xC.prototype={}
A.BE.prototype={}
A.n7.prototype={}
A.b8G.prototype={}
A.Tg.prototype={
T(){var w=x.N,v=x.D,u=x.S
return new A.aB_(C.U(w,x.a2),C.a([],x.cB),C.U(w,v),C.U(w,v),C.U(w,u),B.at,B.J,B.J,C.aZ(u),$,B.bw,0,C.a([],x.X),null,null)}}
A.aB_.prototype={
a_(){var w=this
w.a1()
w.kZ()
w.aaz()
$.aU.x1$.push(new A.dDt(w))},
aaz(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aaz=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$aaz)
case 6:q=e.rI("ngmy_circuit_passed_v1")
r=q==null?B.T:q
if(s.c!=null)s.m(new A.dD7(s,r))
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
return C.i($async$aaz,v)},
aaT(d){return this.bXL(d)},
bXL(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aaT=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return C.b(C.ay(),$async$aaT)
case 6:r=f
q=s.cx
p=C.a2(q).k("jH<cl.E,n>")
q=C.B(new C.jH(q,new A.dDa(),p),p.k("G.E"))
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
return C.i($async$aaT,v)},
auA(d,e,f,g){var w="c"+this.y++,v=new A.BE(w,e,f,g)
this.d.n(0,w,v)
return v},
md(d,e,f){return this.auA(0,e,f,0)},
a9W(d,e){var w
if(D.yh.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.ae(0,new C.u(-36,w))},
t7(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aPt(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fL$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new C.ds(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(B.o.eg(m,D.cB0[B.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.t7(p,0)&&n.t7(p,1)
break
case"or":p=q.a
o=n.t7(p,0)||n.t7(p,1)
break
case"xor":p=q.a
o=n.t7(p,0)!==n.t7(p,1)
break
case"nand":p=q.a
o=!(n.t7(p,0)&&n.t7(p,1))
break
case"nor":p=q.a
o=!(n.t7(p,0)||n.t7(p,1))
break
case"not":o=!n.t7(q.a,0)
break
default:o=n.t7(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bJo(){return this.aPt(null)},
lf(d){var w,v,u,t,s,r,q,p,o,n=this
n.bJo()
if(!n.ax)return
for(w=n.d,w=new C.bc(w,C.a2(w).k("bc<2>")).gah(0),v=new C.hc(w,new A.dDu()),u=n.f,t=n.w,s=0;v.C();){r=w.gU(0).a
if(u.h(0,r)===!0){q=n.fL$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fL$)
o=s+1
A.dD(520+90*B.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
auB(d){var w=this
w.d.a8(0)
B.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
lG(d,e){var w=this.x
return new C.u(d*w.a,e*w.b)},
aqV(d){var w=this
if(w.x.A(0,B.at)){$.aU.x1$.push(new A.dD5(w,d))
return}w.m(new A.dD6(w,d))},
cq4(d){this.m(new A.dDb(this,d,$.bBG()[d]))},
c0W(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bBG()[a0]
v=d.d
u=C.a2(v).k("bc<2>")
t=u.k("a1<G.E>")
s=t.k("G.E")
r=C.B(new C.a1(new C.bc(v,u),new A.dD0(),t),s)
B.d.b1(r,new A.dD1())
q=C.B(new C.a1(new C.bc(v,u),new A.dD2(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new A.dD3(d,w))
return}u=d.r
p=C.dV(u,x.N,x.D)
t=x.s
o=C.a([],t)
for(s=B.o.dt(1,v),n=w.d,m=d.f,l=x.u,k=0;k<s;++k){j=C.a([],l)
for(i=0;i<v;++i)j.push((B.o.fU(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aPt(0)
h=m.h(0,B.d.gK(q).a)
g=h===!0
if(g!==n.$1(j)){h=C.a([],t)
for(i=0;i<v;++i){f=C.jA(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=B.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new A.dD4(d,o,a0))},
avo(d){var w,v,u,t,s=this.d,r=C.a2(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("G.E"))
r=C.T(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bW(s,s.gM(0),r.k("bW<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c9k(d){var w,v,u,t,s,r=this.d,q=C.a2(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("G.E"))
q=C.T(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bW(r,r.gM(0),q.k("bW<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bU0(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new C.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.yh.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.a9W(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new C.z(p,o)
s=l}}}return t},
bIl(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.a9W(p,o)
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
c0Y(d){var w,v,u,t=this,s=t.avo(d)
if(s!=null){w=t.d.h(0,s)
w.toString
C.eO()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
A.dD(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new A.dDc())
return}u=t.bIl(d)
if(u!=null)t.m(new A.dDd(t,u))
else t.m(new A.dDe(t))},
ats(d){return this.bWQ(d)},
bWQ(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$ats=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:s=t.avo(d)
if(s==null){w=1
break}C.jc()
t.m(new A.dD9(t,s))
case 1:return C.h(u,v)}})
return C.i($async$ats,v)},
bvy(d){if(this.x.A(0,B.at))return
this.m(new A.dD_(this,d,B.cH))
C.eO()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bBG()[g]
g=x.p
v=C.a([C.aH(h,h,h,h,C.V(i.ax?B.nF:M.qO,B.ad,h,h,h,21),h,h,h,new A.dDn(i),h,h,h,h,"Sound",h)],g)
u=C.a([],g)
if(w!=null){t=C.m(16)
s=B.cx.j(0.14)
r=C.I(B.cx.j(0.5),B.r,1)
q=C.a([C.d("Challenge: "+w.a,h,h,h,h,h,h,D.eM7,h,h,h),C.d(w.b,h,h,h,h,h,h,D.eU4,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new C.C(B.m2,C.d(p,h,h,h,h,h,h,C.l(h,h,i.CW?B.bb:B.f9,h,h,h,h,h,h,h,h,12,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(C.p(h,C.A(C.a([C.D(C.v(q,B.F,h,B.e,B.j,0,B.p),1),C.bI(D.f9U,i.gc0V(),C.bk(B.cx,h,h,h,h,h,h,h,h,h,h,B.c7))],g),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new C.o(s,h,r,t,h,h,B.n),h,h,h,Q.L_,D.bm3,h,h,1/0))}u.push(C.D(C.cm(new A.dDo(i)),1))
if(f!=null){t=C.m(14)
s=B.c.j(0.06)
r=f.b
u.push(C.p(h,C.d(D.yh.h(0,r).a+": "+D.yh.h(0,r).e,h,h,h,h,h,h,B.vN,h,h,h),B.f,h,h,new C.o(s,h,h,t,h,h,B.n),h,h,h,A3.aeW,B.bR,h,h,1/0))}u=C.v(u,B.m,h,B.e,B.j,0,B.p)
t=C.a([],g)
for(s=D.yh.gdK(D.yh),s=s.gah(s);s.C();){r=s.gU(s)
q=new C.aX(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new C.aA(o.j(0.5),1,B.r,-1)
t.push(C.aE(h,C.p(h,C.v(C.a([C.V(p.b,o,h,h,h,20),B.bB,new C.x(p.a,h,D.a6i,h,h,h,h,h,h,h,h,h)],g),B.m,h,B.e,B.Q,0,B.p),B.f,h,h,new C.o(n,h,new C.bU(m,m,m,m),new C.bt(q,q,q,q),h,h,B.n),h,h,h,B.fM,P.KW,h,h,58),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.dDp(i,r),h,h,h,h,h,h,!1,B.aa))}s=C.a([],g)
for(l=0;l<4;++l){k=D.d0E[l]
s.push(new A.fg(B.MC,k.b,new A.dDq(i,k),B.cx,h))}s.push(new A.fg(D.xp,"Clear",new A.dDr(i),B.cq,h))
r=C.a([],g)
for(j=0;q=$.bBG(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?B.ec:B.l4
o=i.ay
n=i.cx.t(0,j)?B.bb:B.cr
r.push(new A.dx(q.a,o===j,new A.dDs(i,j),p,n,h))}return A.jB(B.cx,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",C.v(C.a([new A.eJ(t,"PARTS",h),new A.eJ(s,"TRY",h),new A.eJ(r,"TASKS",h)],g),B.m,h,B.e,B.Q,0,B.p))}}
A.b8Y.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.L()
w.r=D.aab.gp(0)
a7.aX(new C.a9(0,0,0+a5,0+a6),w)
v=C.L()
v.r=B.c.j(0.05).gp(0)
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
g=a5.a9W(j,m.c)
f=q.h(0,l)===!0
l=$.W()
e=C.a([],p)
d=new C.aP(l.r,B.aq,a4,a4,e)
e.push(new C.b5(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new C.pl(h+a0,i,l-a0,a1,l,a1))
if(f){l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.b=B.af
l.c=9
l.r=B.cr.j(0.28).gp(0)
l.z=I.mj
s=l.H()
l=d.gbI().a.snapshot()
w.drawPath((d.e=new C.cE(l)).a,s)
s.delete()}l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.b=B.af
l.c=3.2
l.d=B.bO
l.r=(f?B.dM:B.bv).gp(0)
s=l.H()
l=d.e
w.drawPath((l==null?d.e=new C.cE(d.gbI().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.ae(0,D.H9)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new C.aP($.W().r,B.aq,a4,a4,C.a([],p))
w=a3.b
p.E(new C.b5(a6,w))
r=g.b
p.E(new C.pl(a6+a0,w,a5-a0,r,a5,r))
r=C.L()
r.b=B.af
r.c=3
r.r=B.ad.gp(0)
a7.aN(p,r)}for(a5=new C.ds(o,o.r,o.e);a5.C();)this.c0X(a7,a5.d)},
c0X(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.yh.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=C.cr(a0.c,64,64)
s=C.by(t,B.kR)
r=w.cy===v
q=s.eJ(B.cw)
$.W()
p=C.L()
p.r=B.w.j(0.55).gp(0)
p.z=B.lc
d.aC(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=C.L()
p.sau(new C.bS(B.A,0.5,B.x,g,0,C.a([e.c.j(0.6),B.K],x.O),g,g).aw(0,C.bT(a0.c,52)))
d.ag(q,52,p)}q=s.eJ(B.cI)
p=C.L()
o=e.c
p.r=C.ar(o,B.w,0.65).gp(0)
d.aC(q,p)
n=u?0.35:0
q=C.L()
p=C.ar(o,B.c,0.1+n)
p.toString
m=C.ar(o,B.w,u?0.2:0.45)
m.toString
q.sau(new C.a6(B.b1,B.b3,B.x,C.a([p,m],x.O),g,g).aw(0,t))
d.aC(s,q)
q=C.L()
q.b=B.af
q.c=r?2.6:1.2
q.r=(r?B.c:B.c.j(0.35)).gp(0)
d.aC(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?D.MH:D.byP}else l=e.b
k=A.fMj(C.jA(l.a),30,B.c,l.b,g,B.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a6(d,v.aB(0,new C.u(p/2,q.gbc(q)/2)))
j=A.fMj(e.a,10.5,B.c,g,g,B.I)
j.a6(d,a0.c.ae(0,new C.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=A.fMj(f,9,u?B.dM:B.bZ,g,g,B.u)
i.a6(d,a0.c.ae(0,new C.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aVL(d,w.a9W(a0,h),o)
this.aVL(d,a0.c.ae(0,D.H9),o)},
aVL(d,e,f){var w
$.W()
w=C.L()
w.r=D.aab.gp(0)
d.ag(e,8.5,w)
w=C.L()
w.b=B.af
w.c=2.2
w.r=f.gp(0)
d.ag(e,8.5,w)
w=C.L()
w.r=B.c.gp(0)
d.ag(e,3.2,w)},
ar(d){return!0}}
A.aJu.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buC.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.br2()}}
A.Mn.prototype={
T(){return new A.aBg(C.mn(0,null,null))}}
A.Ju.prototype={
a4(){return"_UnfoldStyle."+this.b}}
A.zV.prototype={}
A.aBg.prototype={
c11(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcq(0).at
v.toString
w.f=v}w.m(new A.dIG(w,e))},
bVN(){var w=this
w.e.q()
w.e=C.mn(w.f,null,null)
w.m(new A.dIF(w))},
q(){this.e.q()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return C.o7(t,C.cc(v,B.bW,t?new A.boG(w.e,w.gc10(w),new A.dIH(d),v):new A.aFv(u,new C.cz(u.b,x.gj)),v,!1,!1,v,!1),new A.dII(w,u),x.K)}}
A.bqd.prototype={}
A.boG.prototype={
aVM(d,e){var w=null
return new C.C(E.Xd,C.v(C.a([C.d(d,w,w,w,w,w,w,D.eMH,w,w,w),B.bB,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),w)},
B(d){var w=this,v=null,u=x.p,t=C.A(C.a([C.aH(v,v,v,v,F.ov,v,v,v,w.e,v,v,v,v,v,v),B.re,D.brS],u),B.m,v,B.e,B.j,0,v,v),s=w.aVM("STUDIOS","Play, make things, and keep what you make")
$.bBH()
return C.bq(!0,C.v(C.a([new C.C(D.bqZ,t,v),C.D(C.va(0,v,B.q,w.c,B.y,v,v,v,v,v,!1,v,B.ai,!1,C.a([new C.lW(s,v),new C.nB(B.hG,C.NX(new C.oa(new A.eOU(d),23,!0,!0,!0,0,C.rz(),v),D.aLy),v),new C.lW(w.aVM("SCENES","Each one is a studio too: change the style, colours and words"),v),new C.nB(D.bma,C.NX(new C.oa(new A.eOV(w),6,!0,!0,!0,0,C.rz(),v),D.aLy),v)],u)),1)],u),B.m,v,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)}}
A.ads.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=C.m(20),n=C.m(20),m=C.ar(D.mH,p,0.3)
m.toString
w=x.O
m=C.a([m,D.acA],w)
v=C.I(p.j(0.6),B.r,1.2)
u=x.V
t=C.a([new C.ac(-4,B.G,p.j(0.22),B.J,14)],u)
s=C.ar(p,B.w,0.45)
s.toString
w=C.a([p,s],w)
u=C.a([new C.ac(0,B.G,p.j(0.5),B.J,12)],u)
return C.aF(!1,B.a1,!0,r,C.aK(!1,o,!0,C.ex(C.v(C.a([C.p(r,C.V(q.c,B.c,r,r,r,24),B.f,r,r,new C.o(r,r,r,r,u,new C.a6(B.ax,B.aC,B.x,w,r,r),B.a6),r,44,r,r,r,r,r,44),B.P,C.d(q.a,r,2,B.a2,r,r,r,C.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,B.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),B.L,r,r),B.d_,C.d(q.b,r,2,B.a2,r,r,r,C.l(r,r,B.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),B.L,r,r)],x.p),B.m,r,B.b9,B.j,0,B.p),r,new C.o(r,r,v,n,t,new C.a6(B.ax,B.aC,B.x,m,r,r),B.n),r,B.EE,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae)}}
A.acm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=C.m(20),g=C.m(20),f=C.ar(D.mH,B.d.gK(i),0.24)
f.toString
w=x.O
f=C.a([f,D.acA],w)
v=C.I(B.d.gK(i).j(0.35),B.r,1)
u=x.V
t=C.a([new C.ac(0,B.G,B.w.j(0.4),B.cw,12)],u)
s=x.p
r=C.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new C.aX(6,6)
m=C.a([B.d.gK(i),B.d.gam(i)],w)
l=C.a([new C.ac(0,B.G,B.w.j(0.45),E.aEg,0)],u)
r.push(C.p(k,C.V(q[p],B.c,k,k,k,11),B.f,k,k,new C.o(k,k,k,new C.bt(n,n,n,n),l,new C.a6(B.a3,B.a7,B.x,m,k,k),B.n),k,17,k,new C.N(p*4,0,(2-p)*4,o),k,k,k,k))}w=C.v(r,B.m,k,B.e,B.Q,0,B.p)
u=C.ar(B.d.gK(i),B.d.gam(i),0.4)
u.toString
return C.aF(!1,B.a1,!0,k,C.aK(!1,h,!0,C.ex(C.v(C.a([new C.a5(58,k,w,k),B.S,C.d(j.b,k,2,B.a2,k,k,k,C.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,B.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),B.L,k,k),B.au,C.V(B.B2,B.d.gK(i),k,k,k,18)],s),B.m,k,B.b9,B.j,0,B.p),k,new C.o(k,k,v,g,t,new C.a6(B.ax,B.aC,B.x,f,k,k),B.n),k,B.EE,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),B.f,B.K,0,k,k,k,k,k,B.ae)}}
A.P3.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=C.ar(B.d.gam(i),B.w,0.62)
h.toString
w=k.c
v=k.d
h=C.ao(-8,C.bX(j,new C.o(h,j,j,C.m(22),j,j,B.n),B.be),j,j,2,2,8,j)
u=C.m(22)
t=k.y
s=x.V
r=C.a([new C.ac(0,B.G,B.w.j(0.55),B.QH,26),new C.ac(-6,B.G,B.d.gK(i).j(0.1+0.4*t),B.J,30)],s)
q=C.m(22)
p=C.ar(B.d.gK(i),B.c,0.14)
p.toString
o=B.d.gK(i)
n=B.d.gam(i)
i=C.ar(B.d.gam(i),B.w,0.45)
i.toString
m=x.O
l=x.p
m=C.a([C.bY(0,C.bX(j,new C.o(j,j,j,j,j,new C.a6(B.ax,B.aC,B.x,C.a([p,o,n,i],m),D.d5n,j),B.n),B.be),0,0,0),C.ao(j,C.bX(j,new C.o(j,j,j,j,j,new C.a6(B.b1,B.b3,B.x,C.a([B.c.j(0.28),B.c.j(0)],m),j,j),B.n),B.be),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(C.bY(0,C.b3(j,j,j,new A.bpE(i,j),B.at),0,0,0))
i=B.c.j(0.16)
p=C.I(B.c.j(0.5),B.r,1.4)
s=C.a([new C.ac(0,B.G,B.c.j(0.25*t),B.J,14)],s)
s=C.p(j,C.V(k.f,B.c,j,j,j,28),B.f,j,j,new C.o(i,j,p,j,s,j,B.a6),j,54,j,j,j,j,j,54)
p=C.a([C.d(k.r,j,j,j,j,j,j,D.eOb,j,j,j)],l)
i=k.w
if(i.length!==0)B.d.v(p,C.a([B.au,C.d(i,j,1,B.a2,j,j,j,C.l(j,j,B.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,B.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(B.RN)
p.push(C.p(j,j,B.f,j,j,new C.o(B.c.j(0.28),j,j,C.m(3),j,j,B.n),j,5,j,j,j,j,j,w*0.42))
m.push(new C.C(B.fD,C.A(C.a([s,B.eA,C.D(C.v(p,B.F,j,B.e,B.Q,0,B.p),1)],l),B.m,j,B.e,B.j,0,j,j),j))
i=k.x
if(i>0)m.push(C.bY(0,C.e2(C.ei(j,B.w.j(B.k.D(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=C.m(22)
m.push(C.bY(0,C.e2(C.bX(j,new C.o(j,j,C.I(B.c.j(0.3),B.r,1.2),i,j,j,B.n),B.be),!0,j),0,0,0))
return new C.a5(w,v,new C.an(B.W,j,B.a9,B.f,C.a([h,C.bY(0,C.bX(C.bv(q,new C.an(B.W,j,B.a9,B.q,m,j),B.ap),new C.o(j,j,j,u,r,j,B.n),B.be),0,0,0)],l),j),j)}}
A.bpE.prototype={
a6(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new C.a9(r,-10,s,w)
u=d.a
J.bA(u.save())
u.translate(v.gbP().a,v.gbP().b)
d.j_(0,0.35)
t=C.cr(B.J,(w- -10)*1.6,s-r)
$.W()
s=C.L()
s.sau(new C.a6(B.a3,B.a7,B.x,C.a([B.K,B.c.j(0.3),B.K],x.O),null,null).aw(0,t))
d.aX(t,s)
u.restore()},
ar(d){return d.b!==this.b}}
A.bp9.prototype={
B(d){var w=null,v=C.m(22),u=C.a([D.bb0,D.abU],x.O),t=this.e,s=C.I(B.d.gK(t).j(0.4),B.r,1.2),r=C.a([new C.ac(0,B.G,B.w.j(0.5),B.jT,24)],x.V),q=C.m(22),p=B.d.gK(t)
return new C.a5(this.c,this.d,C.bX(C.bv(q,C.b3(C.av(C.V(B.j7,B.d.gK(t).j(0.7),w,w,w,34),w,w,w),w,w,new A.b7F(p,w),B.at),B.ap),new C.o(w,w,s,v,r,new C.a6(B.ax,B.aC,B.x,u,w,w),B.n),B.be),w)}}
A.b7F.prototype={
a6(d,e){var w,v,u,t,s,r,q,p
$.W()
w=C.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.H()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.H()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ec(B.J)
$.W()
t=C.L()
t.b=B.af
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ag(u,30,t)},
ar(d){return!1}}
A.aFv.prototype={
T(){return new A.aFw(new C.cq(null,x.A),null,null)}}
A.aFw.prototype={
gtt(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,D.bjw,null,1,null,v)
w.cF(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gY2(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,B.fL,null,1,null,v)
w.f5(0,!0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
gauC(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc0Z(){var w=this.w
if(w===$){w=C.B(this.a.c.d,x.G)
this.w=w}return w},
gaSy(){var w=this.x
if(w===$){w=C.B(this.a.c.e,x.a)
this.x=w}return w},
gaTc(){var w=this.y
if(w===$){w=C.B(this.a.c.f,x.N)
this.y=w}return w},
gb37(){var w=this.z
if(w===$){w=C.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a1()
var w=this.gtt()
w.d6()
w.dP$.J(0,this.gcpQ())},
cpR(){var w,v,u,t,s,r,q,p=this,o=p.gtt().x
o===$&&C.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gauC().a){case 0:w=D.mX
break
case 1:w=D.tD
break
case 2:w=D.a0z
break
case 3:w=D.mX
break
case 4:w=D.cUV
break
case 5:w=D.tD
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.a7W)r=0.09
else r=s===D.a7X?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){A.dD(260+90*v,"",260,1.6,0.18,"tri")
u=D.bQr[v]
A.l6("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
A.B2("bell",D.bZa,1400,0.35)}}p.ax=o},
q(){this.gtt().q()
this.gY2().q()
this.bsS()},
aee(){var w=this
w.gtt().cOn(0,C.dA(0,0,0,B.k.V(11e3/w.Q),0,0))
w.m(new A.eOA(w))},
cbk(){this.gtt().bW(0)
this.m(new A.eOz(this))},
abQ(){var w=0,v=C.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$abQ=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=C.a([],m)
for(t=u.gaTc(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){q=t[r]
l.push(new C.aq(new C.bb(q,B.b0,B.aN),$.aw()))}m=C.a([],m)
for(t=u.gb37(),s=t.length,r=0;r<t.length;t.length===s||(0,C.K)(t),++r){p=t[r]
m.push(new C.aq(new C.bb(p,B.b0,B.aN),$.aw()))}o=C.B(u.gaSy(),x.a)
t=u.c
t.toString
w=2
return C.b(C.c_(D.mH,null,new A.eOy(u,l,m,o),t,!0,!0,!0,B.le,!1,!1,x.H),$async$abQ)
case 2:l=C.B(l,x.bO)
B.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return C.h(null,v)}})
return C.i($async$abQ,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gauC(),f=i.a.c,e=f.b,d=i.gc0Z(),a0=new A.zV(g,e,f.c,d,i.gaSy(),i.gaTc(),i.gb37())
f=C.ar(B.d.gK(d),B.d.gam(d),0.4)
f.toString
g=x.p
w=C.a([C.aH(h,h,h,h,C.V(i.at?B.nF:M.qO,B.ad,h,h,h,21),h,h,h,new A.eOI(i),h,h,h,h,"Sound",h),C.aH(h,h,h,h,D.bIh,h,h,h,i.gc1_(),h,h,h,h,"Edit words and pictures",h),C.aH(h,h,h,h,D.mf,h,h,h,new A.eOJ(i,a1),h,h,h,h,"Share",h)],g)
v=C.a([C.c6(i.gY2(),new A.eOK(i,a0),h),C.cm(new A.eOL(i,a0))],g)
u=i.as
t=u?i.gcbj():i.gcdF()
u=u?D.by4:B.tt
s=C.ar(B.d.gK(d),B.d.gam(d),0.4)
s.toString
t=C.A(C.a([C.aH(h,h,h,h,C.V(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,B.c7),C.D(C.c6(i.gtt(),new A.eOM(i,a1,a0),h),1),C.aH(h,h,h,h,D.bEJ,h,h,h,new A.eON(i),h,h,h,h,"Replay",B.c7)],g),B.m,h,B.e,B.j,0,h,h)
s=i.Q
u=B.k.aa(s,1)
r=C.ar(B.d.gK(d),B.d.gam(d),0.4)
r.toString
s=A.hw(r,u+"x","Speed",2.5,0.4,new A.eOO(i),s)
u=C.a([],g)
for(q=0;q<6;++q){p=D.d2O[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=C.ar(B.d.gK(d),B.d.gam(d),0.4)
r.toString
u.push(new A.dx(p.b,o===p.a,new A.eOP(i,p),p.c,r,h))}d=C.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.bQM[q]
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}m=B.d.gK(o).A(0,B.d.gK(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}l=B.d.gK(o).A(0,B.d.gK(n))?34:28
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}k=B.d.gK(o).A(0,B.d.gK(n))?B.c:B.b7
o=i.w
if(o===$){o=C.B(i.a.c.d,r)
i.w=o}j=new C.aA(k,B.d.gK(o).A(0,B.d.gK(n))?2.5:1,B.r,-1)
d.push(C.aE(h,C.p(h,h,B.f,h,h,new C.o(h,h,new C.bU(j,j,j,j),h,h,new C.a6(B.ax,B.aC,B.x,n,h,h),B.a6),h,l,h,D.aeJ,h,h,h,m),B.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.eOQ(i,n),h,h,h,h,h,h,!1,B.aa))}return A.jB(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new C.eq(new C.an(B.W,h,B.b_,B.q,v,h),i.f),e,C.v(C.a([t,s,new A.eJ(u,"STYLE",h),new A.eJ(d,"THEME",h)],g),B.m,h,B.e,B.Q,0,B.p))},
buM(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.mX[r]
p=B.k.D((1-B.et.av(0,B.k.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=B.k.D(p/1.5707963267948966,0,1)
q=D.mX[r]
n=q+0.12
m=B.k.D((a0-n)/(q+0.2-n),0,1)
n=D.mX[r]
q=n-0.01
q=B.k.D((a0-q)/(n+0.03-q),0,1)
n=C.dj()
l=n.a
l.$flags&2&&C.ai(l)
l[11]=0.0013
n.jI(p)
l=v[r]
k=u[r]
j=t[r]
i=D.mX[r]
h=i+0.1
if(B.k.D((a0-h)/(i+0.3-h),0,1)>0){i=D.mX[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.mX[r]
h=i+0.1
h=B.k.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new C.cJ(0,r*118,0,f,f,f,new C.kM(q,new C.iC(n,f,B.b1,!0,f,new A.P3(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.mX[r]
u=v-0.02
g=B.k.D((a0-u)/(v+0.1-u),0,1)
u=B.d.gK(w)
v=D.mX[r]
t=v+0.12
e.push(new C.cJ(0,r*118-3-2,0,f,f,4,new C.m4(new A.bok(u,g,1-B.k.D((a0-t)/(v+0.22-t),0,1),f),f,B.at,f,f),f))}return new C.a5(a2,358,new C.an(B.W,f,B.a9,B.f,e,f),f)},
bKN(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=C.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.tD[r]
p=B.pg.av(0,B.k.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.tD[r]
m=q+0.15
l=B.k.D((a0-m)/(q+0.25-m),0,1)
m=D.tD[r]
q=m-0.03
q=B.k.D((a0-q)/(m+0.01-q),0,1)
m=C.dj()
k=m.a
k.$flags&2&&C.ai(k)
k[11]=0.0011
m.js(n,n,n,1)
m.ft(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new A.P3(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=C.dj()
k.ft(3.141592653589793)
k=new C.iC(k,f,B.A,!0,f,new A.bp9(a2,108,w,f),f)}e.push(new C.cJ(0,r*130,0,f,f,f,new C.kM(q,new C.iC(m,f,B.A,!0,f,k,f),f),f))}return new C.a5(a2,378,new C.an(B.W,f,B.a9,B.f,e,f),f)},
cuF(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=C.a([],x.n)
for(w=0;w<3;++w){v=D.a0z[w]
l.push(B.cp.av(0,B.k.D((e-v)/(v+0.2-v),0,1)))}v=C.a([C.bY(0,C.b3(n,n,n,new A.brI(d.d,l,D.ata,m,A.boF(e,0.4,0.62),f,A.boF(e,0.45,0.7),n),B.at),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=A.fMP(g,w)
q=D.ata[w]
p=l[w]
o=p>0.85?1:0
v.push(new C.cJ(r,s-q*m*p+12,n,n,t,n,new C.kM(o,C.V(u[w],B.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=A.fMP(g,w)
r=D.a0z[w]
q=r+0.15
v.push(new C.cJ(s,l,n,n,t,n,new C.kM(B.k.D((e-q)/(r+0.25-q),0,1),new C.x(u[w],n,B.a6q,n,B.L,n,n,n,n,n,n,n),n),n))}return new C.a5(g,m+90,new C.an(B.W,n,B.a9,B.f,v,n),n)},
bAO(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-B.cp.av(0,A.boF(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=C.a([],x.p),a1=a2.d
a0.push(C.bY(0,C.av(C.dT(C.b3(f,f,f,new A.bnM(B.d.gK(a1),A.boF(a3,0,0.2),a4,f),new C.at(a5*0.95,70)),D.dTM),f,f,f),0,0,0))
w=C.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=B.k.D((a3-l)/(0.12+m-l),0,1)
j=B.dH.av(0,B.k.D((o-0.7)/0.3,0,1))
l=C.dj()
m=l.a
m.$flags&2&&C.ai(m)
m[11]=0.001
l.ft(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.js(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?B.k.F(r,1):-1
w.push(new C.z(o,new C.cJ(0,0,0,0,f,f,new C.ct(B.A,f,f,new C.kM(k*(0.45+0.55*o),C.dT(new C.iC(l,f,B.A,!0,f,new A.P3(e,100,a1,m,i,h,1-o,j*s,g,f),f),new C.u(n*a5*0.34,-o*18)),f),f),f)))}B.d.b1(w,new A.eOr())
B.d.v(a0,new C.J(w,new A.eOs(),x.fR))
return new C.a5(a5,330,new C.an(B.W,f,B.a9,B.f,a0,f),f)},
bA1(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=C.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.tD[q]
o=B.k.D((a2-p)/(p+0.22-p),0,1)
n=B.lP.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.tD[q]
m=B.k.D((a2-m)/(m+0.02-m),0,1)
l=D.av0[q]
k=C.dj()
k.mr(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.js(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.tD[q]
g=h+0.1
g=B.k.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new C.cJ(0,0,0,0,e,e,new C.ct(B.A,e,e,new C.kM(m,C.dT(new C.iC(k,e,B.A,!0,e,new A.P3(d,92,w,p,j,i,0,g*s,h,e),e),new C.u(0,l)),e),e),e))
l=D.tD[q]
h=l+0.02
f=B.k.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new C.cJ(0,0,0,0,e,e,new C.ct(B.A,e,e,C.dT(new C.m4(new A.b8k(w,f,q,e),e,new C.at(r,212),e,e),new C.u(0,D.av0[q])),e),e))}return new C.a5(a4,330,new C.an(B.W,e,B.a9,B.f,a0,e),e)},
bxE(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new C.u(-b0,-150),new C.u(b0,-40),D.dTQ],a6=C.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.mX[r]
p=B.k.D((a8-q)/(q+0.2-q),0,1)
o=B.cp.av(0,p)
q=D.av6[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.mX[r]
f=g+0.2
e=B.k.D((a8-f)/(g+0.3-f),0,1)
f=D.mX[r]
g=f-0.01
g=B.k.D((a8-g)/(f+0.03-g),0,1)
f=C.dj()
d=f.a
d.$flags&2&&C.ai(d)
d[11]=0.001
f.mr(l*h+D.cYF[r]*o)
f.ft(l*0.9)
h=0.55+0.45*o
f.js(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new C.cJ(0,0,0,0,a3,a3,new C.ct(B.A,a3,a3,new C.kM(g,C.dT(new C.iC(f,a3,B.A,!0,a3,new A.P3(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new C.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.mX[r]
i=q+0.17
a2=B.k.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.av6[r]
a6.push(new C.cJ(0,0,0,0,a3,a3,new C.ct(B.A,a3,a3,C.dT(new C.m4(new A.bnO(B.d.gK(w),a2,a3),a3,new C.at(a4,30),a3,a3),new C.u(0,q+48-4)),a3),a3))}}return new C.a5(b0,330,new C.an(B.W,a3,B.a9,B.f,a6,a3),a3)}}
A.bok.prototype={
a6(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new C.a9(w-v,0,w+v,e.b)
q=C.by(u,B.h7)
$.W()
t=C.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=I.mj
d.aC(q,t)
t=C.by(u,B.h7)
q=C.L()
q.r=B.c.j(s).gp(0)
d.aC(t,q)},
ar(d){return d.c!==this.c||d.d!==this.d}}
A.bnM.prototype={
a6(d,e){var w,v,u=this.c,t=C.cr(e.ec(B.J),e.b*u,e.a*u)
$.W()
u=C.L()
u.b=B.af
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=U.GD
d.hY(t,u)
u=C.L()
u.b=B.af
u.c=2.5
u.r=w.j(0.7).gp(0)
d.hY(t,u)
u=t.cE(-14)
v=C.L()
v.b=B.af
v.c=1
v.r=w.j(0.3).gp(0)
d.hY(u,v)},
ar(d){return!0}}
A.b8k.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ec(B.J),f=this.c,e=B.cp.av(0,f)
$.W()
w=C.L()
w.b=B.af
v=1-f
w.c=5*v
u=this.b
w.r=B.d.gK(u).j(0.6*v).gp(0)
d.ag(g,40+e*a0.a*0.42,w)
t=new C.eT()
t.dI(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ai()*3.141592653589793*2
n=(40+t.ai()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ai()
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i=(p&1)===0?B.d.gK(u):B.c
j.r=i.j(B.k.D(v,0,1)).gp(0)
h=j.H()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
ar(d){return!0}}
A.bnO.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ec(B.J)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=B.k.D(s-r*0.18,0,1)
if(q<=0)continue
p=C.cr(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.W()
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.b=B.af
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.H()
t.drawOval(C.c4(p),n)
n.delete()}},
ar(d){return d.c!==this.c}}
A.brI.prototype={
a6(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new C.a9(0,d0,0+c5,d0+60)
$.W()
d0=C.L()
w=c1.b
v=x.O
d0.sau(new C.a6(B.b1,B.b3,B.x,C.a([B.d.gK(w).j(0.18),B.K],v),c2,c2).aw(0,d1))
d2.aX(d1,d0)
d0=C.L()
d0.r=B.c.j(0.18).gp(0)
d0.c=1
d2.bA(new C.u(0,c4),new C.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=A.fMP(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.W()
a3=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a3.r=B.w.j(0.5).gp(0)
a3.z=B.lc
a4=a3.H()
t.drawOval(C.c4(new C.a9(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new C.a9(d,a1,a3,a1+a0)
a6=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a7=C.ar(B.d.gK(w),B.c,0.1)
a7.toString
a6.sau(new C.a6(B.b1,B.b3,B.x,C.a([a7,B.d.gam(w)],v),c2,c2).aw(0,a5))
a4=a6.H()
t.drawRect(C.c4(a5),a4)
a4.delete()
a2=a2.r
a6=C.a([],n)
a8=new C.aP(a2,B.aq,c2,c2,a6)
a6.push(new C.b5(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a7,m))
a6.push(new C.ap(a3,c4))
a6.push(new C.bE())
a6=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a6.r=C.ar(B.d.gam(w),B.w,0.5).gp(0)
a4=a6.H()
a6=a8.gbI().a.snapshot()
t.drawPath((a8.e=new C.cE(a6)).a,a4)
a4.delete()
a6=C.a([],n)
b0=new C.aP(a2,B.aq,c2,c2,a6)
a6.push(new C.b5(d,a1))
a6.push(new C.ap(d+c8,a9))
a6.push(new C.ap(a7,a9))
a6.push(new C.ap(a3,a1))
a6.push(new C.bE())
a2=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a2.r=C.ar(B.d.gK(w),B.c,0.45).gp(0)
a4=a2.H()
a2=b0.gbI().a.snapshot()
t.drawPath((b0.e=new C.cE(a2)).a,a4)
a4.delete()
b1=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
b1.b=B.af
b1.c=1
b1.r=B.c.j(0.28).gp(0)
a4=b1.H()
t.drawRect(C.c4(a5),a4)
a4.delete()
a4=b1.H()
a2=a8.e
t.drawPath((a2==null?a8.e=new C.cE(a8.gbI().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.H()
a2=b0.e
t.drawPath((a2==null?b0.e=new C.cE(b0.gbI().a.snapshot()):a2).a,a4)
a4.delete()
b2=B.k.bw(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=C.by(new C.a9(b7,a7,b7+r,b5),B.h7)
$.W()
b9=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
b9.r=(b4?B.c.j(q):B.w.j(0.22)).gp(0)
a4=b9.H()
t.drawRRect(C.ew(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new C.a9(d,a1,a3,a1+28)
J.bA(t.save())
t.clipRect(C.c4(a5),$.rB()[1],!0)
$.W()
a1=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a1.sau(new C.a6(B.b1,B.b3,B.x,C.a([B.K,B.c.j(0.4),B.K],v),c2,c2).aw(0,c0))
a4=a1.H()
t.drawRect(C.c4(c0),a4)
a4.delete()
t.restore()}}},
ar(d){return!0}}
A.aLb.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
A.a_3.prototype={
a4(){return"_Role."+this.b}}
A.pK.prototype={}
A.qr.prototype={}
A.BI.prototype={}
A.Y3.prototype={}
A.adi.prototype={}
A.a_g.prototype={
gY(d){return this.d}}
A.BT.prototype={}
A.aae.prototype={}
A.aav.prototype={}
A.acq.prototype={}
A.beJ.prototype={
a10(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
A.dD(d,"",e,g,h,f)},
b46(d,e,f){return this.a10(d,e,f,0,0.55)},
az2(d,e,f,g){return this.a10(d,e,f,0,g)},
b47(d,e,f,g){return this.a10(d,e,f,g,0.55)},
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
w.aZ()},
ahN(d,e,f,g){var w="n"+this.ay++,v=new A.qr(w,e,f,g)
this.a.n(0,w,v)
this.aZ()
return v},
Aq(d,e,f){return this.ahN(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
B.d.bn(w.b,new A.dde(e))
B.d.bn(w.c,new A.ddf(e))
w.aZ()},
b7T(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mi.h(0,v.b).c===D.w3)return!1
w=this.b
if(B.d.b8(w,new A.ddb(d,e)))return!1
w.push(new A.BI(d,e))
this.aZ()
return!0},
bUL(d){var w
if(d.b==="beat")return D.bZj[B.o.F(d.d,4)]
w=this.at
switch(B.o.F(d.d,3)){case 1:return 350+w.aD(500)
case 2:return 1400+w.aD(2200)
default:return 450+w.aD(2000)}},
aCr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=B.o.F(w,6)
t=D.avl[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new A.BT(u,t,j.ax,90))
w.push(new A.BT(u,B.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new A.a_g(u,new C.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b46(261.63*Math.pow(2,([0,4,7,12,16,19][B.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=C.ar(t,B.c,w.ai()*0.5)
m.toString
v.push(new A.a_g(u,new C.u(o*p,n*p),m,3+w.ai()*4.5,1000+w.aD(700),j.ax))}j.f.push(new A.BT(u,t,j.ax,120))
j.az2(120,200,"noise",0.5)
j.b46(261.63*Math.pow(2,([7,12,16,19][w.aD(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new A.BT(u,t,j.ax,230))
w.push(new A.BT(u,t,j.ax+160,160))
w.push(new A.BT(u,t,j.ax+320,100))
j.b47(180+j.at.aD(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new A.aae(u,new C.u((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.b47(300+w.aD(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new A.aav(u,u.ae(0,new C.u(Math.cos(q),Math.sin(q)).aK(0,260+w.ai()*200)),t,j.ax))
j.a10(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
C.fJ()
j.a10(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new A.acq(u,D.auO[v],t,j.ax))
j.az2(261.63*Math.pow(2,([0,5,9,12][j.at.aD(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.az2(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.bVq[B.o.F(w,3)]
for(k=1;k<=3;++k)j.cl6(d,j.ax+l*k,!0)
break
case"delay":for(w=B.d.gah(j.b),v=new C.hc(w,new A.ddc(d));v.C();)j.axD(w.gU(0),j.ax+D.c6C[B.o.F(g.d,4)])
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
case"chance":s=j.at.aD(100)<D.cnm[B.o.F(g.d,3)]
break
default:break}if(s)for(w=B.d.gah(j.b),v=new C.hc(w,new A.ddd(d));v.C();)j.axD(w.gU(0),j.ax)
w=j.e
v=w.length
if(v>700)B.d.yE(w,0,v-700)},
cl6(d,e,f){var w=this.c
if(w.length>260)return
w.push(new A.Y3(e,"~"+d))},
axD(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new A.adi(d.a,v,e,w))
u.push(new A.Y3(w,v))},
aFJ(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aCr(r)
u.n(0,r,o.ax+o.bUL(s))}}w=o.c
v=C.T(w).k("a1<1>")
q=C.B(new C.a1(w,new A.ddg(o),v),v.k("G.E"))
if(q.length!==0){B.d.bn(w,new A.ddh(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,C.K)(q),++t){u=q[t].b
if(B.a.a0(u,"~")){p=B.a.b_(u,1)
for(u=B.d.gah(v),r=new C.hc(u,new A.ddi(p));r.C();)o.axD(u.gU(0),o.ax)}else o.aCr(u)}}B.d.bn(o.d,new A.ddj(o))
B.d.bn(o.e,new A.ddk(o))
B.d.bn(o.f,new A.ddl(o))
B.d.bn(o.w,new A.ddm(o))
B.d.bn(o.x,new A.ddn(o))
B.d.bn(o.r,new A.ddo(o))
o.aZ()},
wD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
ad(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=C.a([],x.ez)
for(v=this.a,v=new C.ds(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(C.E(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=C.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,C.K)(t),++o){n=t[o]
v.push(C.a([n.a,n.b],r))}return B.R.ao(C.E(["nodes",m,"edges",v],u,x.ew),null)},
cG8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(B.R.aG(0,d,null))
k.a8(0)
for(o=x.j,n=J.aV(o.a(J.q(w,"nodes"))),m=k.a;n.C();){v=n.gU(n)
u=C.t(J.q(v,"k"))
if(!D.mi.aj(0,u))continue
t=C.t(J.q(v,"id"))
m.n(0,t,new A.qr(t,u,new C.u(C.f8(J.q(v,"x"))*k.cy.a,C.f8(J.q(v,"y"))*k.cy.b),B.k.O(C.f8(J.q(v,"p")))))
s=C.c7(C.aJ(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aV(o.a(J.q(w,"edges"))),n=k.b;o.C();){r=o.gU(o)
q=C.t(J.q(r,0))
p=C.t(J.q(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new A.BI(q,p))}k.aZ()
return!0}catch(l){return!1}},
cJ8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=C.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new A.qr(n,r,new C.u(q*p.a,o*p.b),s))
l.aZ()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.b7T(w[m.a],w[m.b])}},
gY(d){return this.cy}}
A.F4.prototype={}
A.UJ.prototype={
T(){var w=x.N,v=C.a([],x.eW),u=C.a([],x.fY),t=C.a([],x.fr),s=C.a([],x.e4),r=C.a([],x.cd),q=C.a([],x.a_),p=C.a([],x.ba),o=C.a([],x.ac),n=x.S
return new A.aCv(new A.beJ(C.U(w,x.f3),v,u,t,s,r,q,p,o,C.U(w,n),C.U(w,n),C.U(w,n),C.U(w,n),B.cH,B.K,B.at,$.aw()),B.bw,B.J,B.J,B.T,null,null)}}
A.aCv.prototype={
aas(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aas=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=C
m=J
w=6
return C.b(C.ay(),$async$aas)
case 6:q=n.k8(m.q(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new A.eec(s))
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
return C.i($async$aas,v)},
a7u(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$a7u=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new A.ee1(s))
u=3
w=6
return C.b(C.ay(),$async$a7u)
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
return C.i($async$a7u,v)},
bGH(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=C.a2(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new C.bc(n,w).cI(0,0,new A.ee3())+"|"+B.d.cI(o,0,new A.ee4())
if(v===p.ch)return p.CW
u=new A.ee7()
t=x.s
s=C.a([],t)
r=new A.ee8(p,s,u)
for(n=new C.bc(n,w).gah(0),w=new C.hc(n,new A.ee5());w.C();){q=n.gU(0)
if(!B.d.b8(o,new A.ee6(q)))s.push(C.t(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,C.a([u.$1(q)],t),0)}p.ch=v
return p.CW=C.d9(s,0,C.dJ(5,"count",x.S),x.N).dC(0)},
a_(){var w,v=this
v.a1()
v.aas()
v.d.db=v.ay
w=v.q3(new A.eeC(v))
w.j1(0)
v.e!==$&&C.aQ()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a9(0)
v=w.e
v===$&&C.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.brV()},
aa_(d){return this.bUd(d)},
bUd(d){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aa_=C.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=C
l=J
w=6
return C.b(C.ay(),$async$aa_)
case 6:q=m.aT(l.q(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.cG8(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aTC(B.d.gK(D.aul))
if(s.c!=null)s.m(new A.eeb())
return C.h(null,v)
case 1:return C.f(t.at(-1),v)}})
return C.i($async$aa_,v)},
aTC(d){this.d.cJ8(0,d.c,d.d)
this.Do()},
Do(){var w=this.as
if(w!=null)w.a9(0)
this.as=C.cL(B.lu,new A.edY(this))},
auD(d){var w,v,u,t,s=this.d.a,r=C.a2(s).k("bc<2>")
s=C.B(new C.bc(s,r),r.k("G.E"))
r=C.T(s).k("dz<1>")
s=new C.dz(s,r)
s=new C.bW(s,s.gM(0),r.k("bW<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
c9l(d){var w,v,u,t,s,r=this.d.a,q=C.a2(r).k("bc<2>")
r=C.B(new C.bc(r,q),q.k("G.E"))
q=C.T(r).k("dz<1>")
r=new C.dz(r,q)
r=new C.bW(r,r.gM(0),q.k("bW<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
bU1(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new C.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mi.h(0,r.b).c===D.w3)continue
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
c14(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=A.h90(new C.u(n.a+36,n.b+0),new C.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cst(d){var w,v,u,t,s,r,q=this,p=q.auD(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
C.eO()
u=v.b
if(u==="button"){w.aCr(p)
return}if(q.r)return
t=D.mi.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.q4)s=6
else s=1
v.d=B.o.F(v.d+1,s)
w.aZ()
q.Do()
return}if(q.r)return
r=q.c14(d)
if(r!=null){w=q.d
B.d.cw(w.b,r)
w.aZ()
q.Do()}},
caC(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.c9l(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.auD(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aB(0,d)}},
caD(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aZ()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new C.u(B.k.D(d.a+s.y.a,46,t.a-46),B.k.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aZ()}}},
aYq(){var w,v,u=this
if(u.z!=null){w=u.bU1(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.b7T(v,w)}else v=!1
if(v){C.jJ()
u.Do()}u.z=null
u.d.aZ()}else if(u.x!=null){if(u.at)u.Do()
u.x=null}},
aaF(d){return this.bWR(d)},
bWR(d){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$aaF=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.auD(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
C.jc()
p=t.c
p.toString
w=3
return C.b(C.c_(D.mH,null,new A.eee(q),p,!0,!0,!1,B.le,!1,!1,x.D),$async$aaF)
case 3:if(f===!0){r.W(0,s)
t.Do()}case 1:return C.h(u,v)}})
return C.i($async$aaF,v)},
c12(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.Aq(0,d,new C.u(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
C.eO()
this.Do()},
aem(){var w=0,v=C.j(x.H),u=this,t,s
var $async$aem=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c_(D.mH,null,new A.eeg(),s,!0,!0,!0,B.le,!1,!1,x.es),$async$aem)
case 2:t=e
if(t!=null)u.aTC(t)
return C.h(null,v)}})
return C.i($async$aem,v)},
abR(d){var w=0,v=C.j(x.H),u=this,t
var $async$abR=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new A.ee0(),t,null,!0,!0,x.D),$async$abR)
case 2:if(f===!0){u.d.a8(0)
u.Do()}return C.h(null,v)}})
return C.i($async$abR,v)},
B(d){var w=this,v=null,u=C.a([C.agC(w.r?new C.bK(B.a3,v,v,new C.C(B.EG,C.hb(D.bCL,D.f3b,new A.eeA(w),v),v),v):w.c15(),B.bc,B.iq),C.D(C.cm(new A.eeB(w)),1)],x.p)
if(!w.r)u.push(w.cnv())
return C.cc(v,B.bW,C.bq(!0,C.v(u,B.m,v,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),v,!1,!1,v,v)},
bCs(){var w=null,v=new A.ee2(),u=B.w.j(0.7),t=C.m(26),s=C.I(B.bs.j(0.5),B.r,1)
return C.bY(0,C.ei(C.av(C.p(w,C.ci(C.v(C.a([D.fdL,B.au,D.fkO,B.ay,v.$4(B.op,B.bs,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(X.Fs,B.cx,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(B.l3,B.bY,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(D.aiu,B.cr,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fk9,new C.bK(B.a7,w,w,C.bJ(!1,D.fb2,w,w,!0,w,w,this.gbCl(),w,w),w)],x.p),B.F,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ai),B.f,w,B.U2,new C.o(D.mH,w,s,t,w,w,B.n),w,w,w,B.fv,A3.afW,w,w,w),w,w,w),u,!0),0,0,0)},
c15(){var w=this,v=null,u=C.aH(v,v,v,v,F.ov,v,v,v,new A.eem(w),v,v,v,v,v,v),t=w.a6X(B.Mr,"How it works",new A.een(w),!0),s=w.ay?B.nF:M.qO
return new C.C(D.bqd,C.A(C.a([u,D.brG,t,w.a6X(s,"Sound",new A.eeo(w),!0),w.a6X(B.dS,"Ideas",w.gcem(),!0),w.a6X(D.xp,"Clear",w.gc13(w),!0),w.aKS(B.iN,"Show",new A.eep(w),!0,!0)],x.p),B.m,v,B.e,B.j,0,v,v),v)},
aKS(d,e,f,g,h){var w=null,v=h?B.bs:B.c.j(0.08),u=C.m(14),t=C.m(14),s=C.a([C.V(d,h?B.w:B.c,w,w,w,20)],x.p)
return new C.C(Ac.uS,C.aF(!1,B.a1,!0,u,C.aK(!1,t,!0,C.hn(new C.C(new C.N(8,8,8,8),C.A(s,B.m,w,B.e,B.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ae),w)},
a6X(d,e,f,g){return this.aKS(d,e,f,g,!1)},
cnv(){var w=null,v=new A.eei(this),u=B.c.j(0.08)
return C.p(w,C.ci(C.A(C.a([v.$2("START",D.w3),v.$2("CHANGE",D.CV),v.$2("REACT",D.q4)],x.p),B.F,w,B.e,B.j,0,w,w),B.q,w,B.y,w,w,w,w,B.aX),B.f,w,w,new C.o(D.DJ,w,new C.bU(new C.aA(u,1,B.r,-1),B.Z,B.Z,B.Z),w,w,w,B.n),w,w,w,w,D.blr,w,w,w)},
cnw(d){var w,v,u,t,s=null,r=D.mi.h(0,d)
r.toString
w=C.m(14)
v=r.d
u=C.a([v.j(0.32),v.j(0.1)],x.O)
t=C.I(v.j(0.5),B.r,1)
return new C.C(B.fM,C.aE(s,C.p(s,C.v(C.a([C.V(r.b,v,s,s,s,22),B.d_,C.d(r.a,s,1,B.a2,s,s,s,D.a6i,s,s,s)],x.p),B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new C.o(s,s,t,w,s,new C.a6(B.b1,B.b3,B.x,u,s,s),B.n),s,s,s,s,B.hF,s,s,62),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.eeh(this,d),s,s,s,s,s,s,!1,B.aa),s)}}
A.beK.prototype={
a6(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bA(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.W()
u=C.L()
u.r=B.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.H()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.W()
o=C.L()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aX(new C.a9(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){l=w[m]
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
d=C.a([],o)
a0=new C.aP(e.r,B.aq,b4,b4,d)
d.push(new C.b5(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new C.pl(h+a1,i,f-a1,g,f,g))
a2=D.mi.h(0,k.b).d
a3=D.mi.h(0,j.b).d
e=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
e.b=B.af
e.c=3
e.d=B.bO
d=C.a([a2.j(0.55),a3.j(0.55)],p)
g=C.ra(new C.u(h,i),new C.u(f,g))
e.sau(new C.a6(B.a3,B.a7,B.x,d,b4,b4).aw(0,new C.a9(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.H()
i=a0.gbI().a.snapshot()
b7.drawPath((a0.e=new C.cE(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=B.k.D((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=A.h90(new C.u(i.a+36,i.b+0),new C.u(h.a-36,h.b),a5)
$.W()
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.r=B.c.j(0.35).gp(0)
h.z=I.mj
q=h.H()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
g.r=B.c.gp(0)
q=g.H()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.ae(0,D.H9)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new C.aP($.W().r,B.aq,b4,b4,C.a([],o))
o=a8.b
a0.E(new C.b5(t,o))
i=a9.b
a0.E(new C.pl(t+a1,o,w-a1,i,w,i))
i=C.L()
i.b=B.af
i.c=3
i.r=B.c.j(0.7).gp(0)
b8.aN(a0,i)
i=C.L()
i.r=B.c.gp(0)
b8.ag(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b0=w[m]
o=b0.c
v=B.k.D((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=B.dU.av(0,v)
$.W()
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.b=B.af
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.H()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){b1=w[m]
v=B.k.D((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=C.l7(o,i,B.dU.av(0,v))
h.toString
i=C.l7(o,i,B.dU.av(0,B.k.D(v-0.35,0,1)))
i.toString
$.W()
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.c=5
o.d=B.bO
g=b1.c
f=C.a([g.j(0),g],p)
e=C.ra(i,h)
o.sau(new C.a6(B.a3,B.a7,B.x,f,b4,b4).aw(0,new C.a9(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.H()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=B.c.gp(0)
q=i.H()
b7.drawCircle(o,h,6,q)
q.delete()
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=B.ja
q=i.H()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){a4=w[m]
v=B.k.D((b6-a4.f)/a4.e,0,1)
o=a4.a
$.W()
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=a4.c.j(1-v).gp(0)
q=i.H()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,C.K)(w),++m){j=w[m]
o=j.a
$.W()
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=B.ja
q=i.H()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.sau(new C.bS(N.q5,0.5,B.x,b4,0,C.a([B.c,h],p),b4,b4).aw(0,C.bT(j.a,8)))
q=i.H()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,C.K)(b5),++m){a6=b5[m]
v=B.k.D((b6-a6.d)/1000,0,1)
t=1-v
b2=A.beL(a6.b,26+8*t,a6.c.j(t),b4,b4,B.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a6(b8,new C.u(t.a-o/2,t.b-(40+60*v+p.gbc(p)/2)))}for(b5=new C.ds(n,n.r,n.e);b5.C();)b3.cab(b8,b5.d,b6)
b7.restore()},
cab(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mi.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:B.k.D(1-(f-w)/520,0,1)
u=C.cr(e.c,64,64)
t=C.by(u,B.jV)
s=t.eJ(B.cw)
$.W()
r=C.L()
r.r=B.w.j(0.55).gp(0)
r.z=B.lc
d.aC(s,r)
if(v>0){s=t.cE(6)
r=C.L()
r.r=h.d.j(0.6*v).gp(0)
r.z=B.yj
d.aC(s,r)}s=t.eJ(B.cI)
r=C.L()
q=h.d
r.r=C.ar(q,B.w,0.65).gp(0)
d.aC(s,r)
r=C.L()
s=C.ar(q,B.c,0.18+0.4*v)
s.toString
p=C.ar(q,B.w,0.35)
p.toString
r.sau(new C.a6(B.b1,B.b3,B.x,C.a([s,p],x.O),j,j).aw(0,u))
d.aC(t,r)
r=C.L()
r.b=B.af
r.c=1.2
r.r=B.c.j(0.35).gp(0)
d.aC(t,r)
r=h.b
p=e.c
o=A.beL(C.jA(r.a),30,B.c,r.b,j,B.I)
r=o.b
s=r.c
r=r.a.c
o.a6(d,p.aB(0,new C.u(s/2,r.gbc(r)/2)))
n=A.beL(h.a,11,B.c,j,j,B.I)
n.a6(d,e.c.ae(0,new C.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[B.o.F(e.d,r)]
else m=i==="pop"?D.auO[B.o.F(e.d,6)]:j
h=h.c
if(h===D.q4){s=e.c.ae(0,new C.u(0,62))
r=C.L()
r.r=D.avl[B.o.F(e.d,6)].gp(0)
d.ag(s,5,r)}else if(m!=null){l=A.beL(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.ae(0,new C.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=A.beL(m,9.5,B.aA,j,j,B.O)
l.a6(d,e.c.ae(0,new C.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.w3)k.aZc(d,e.c.aB(0,D.H9),q)
k.aZc(d,e.c.ae(0,D.H9),q)},
aZc(d,e,f){var w
$.W()
w=C.L()
w.r=B.bW.gp(0)
d.ag(e,9,w)
w=C.L()
w.b=B.af
w.c=2.2
w.r=f.gp(0)
d.ag(e,9,w)
w=C.L()
w.r=B.c.gp(0)
d.ag(e,3.5,w)},
ar(d){return!0}}
A.aKk.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.bje.prototype={}
A.OV.prototype={
gY(d){return this.d}}
A.UZ.prototype={
T(){var w=C.a([],x.g4),v=C.a([],x.ed)
return new A.bij(new C.cq(null,x.A),w,v,B.cH,B.bw,D.DS,null,null)}}
A.bij.prototype={
aWZ(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=B.o.D(B.k.bw((1-d.b/(C.aI(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.atO[B.o.F(v,5)]+12*B.o.an(v,5)+12
switch(t.z){case"glow":A.l6("synth",u,420,0.3)
break
case"rainbow":A.l6("bell",u,700,0.35)
break
case"stars":A.l6("pluck",u+12,400,0.4)
break
case"sparks":A.dD(2400+t.r.aD(2000),"",60,0,0.18,"noise")
break
default:A.dD(110+t.r.aD(60),"",140,0,0.22,"noise")}},
c42(d){return this.aWZ(d,!1)},
a_(){var w,v=this
v.a1()
w=v.q3(new A.epW(v))
w.j1(0)
v.w!==$&&C.aQ()
v.w=w},
q(){var w=this.w
w===$&&C.c()
w.q()
this.bs3()},
gaYK(){var w=this.Q
return w<0?new H.m9(1,B.k.F(this.y*0.18,360),0.85,1).im():D.Pp[w]},
aP8(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gaYK(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ai()*3.141592653589793*2
switch(l.z){case"fire":q=v.ai()
p=l.as
o=v.ai()
n=v.ai()
m=C.ar(B.cr,B.aE,v.ai())
m.toString
j.push(new A.OV(new C.u(u+(q-0.5)*p,t),new C.u((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ai()*0.4),l.y,700+v.aD(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ai()*200
n=C.ar(k,B.c,v.ai()*0.6)
n.toString
j.push(new A.OV(d,new C.u(q*o,p*o),n,1.5+v.ai()*3,l.y,600+v.aD(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ai()*40
j.push(new A.OV(d,new C.u(q*o,p*o),k,1.2+v.ai()*1.8,l.y,500))}}},
aVO(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gaYK()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=C.a([],x.g)
r.ax=new A.bje(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aP8(e)
r.aWZ(e,!0)
r.m(new A.epx())},
aVN(){this.ax=null
this.m(new A.epw())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=C.a([C.aH(n,n,n,n,D.mf,n,n,n,new A.epG(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=C.a([C.b3(n,n,n,new A.bpz(k,o.f,o.y,o.at,n),B.at)],m)
if(!o.ay&&k.length===0)j.push(D.b0W)
k=C.aE(B.c5,new C.an(B.W,n,B.b_,B.q,j,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,new A.epH(o),new A.epI(o),new A.epM(o),n,n,n,n,n,n,n,n,n,new A.epN(o),new A.epO(o),n,n,n,!1,B.aa)
j=C.a([],m)
for(w=0;w<5;++w){v=D.cKY[w]
j.push(new A.dx(v.b,o.z===v.a,new A.epP(o,v),v.c,B.bY,n))}u=C.a([new A.Ey(B.c,o.Q<0,new A.epQ(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new A.Ey(D.Pp[t],o.Q===t,new A.epR(o,t),!1,n))
s=o.as
s=A.hw(B.bY,B.o.u(B.k.V(s)),"Size",36,4,new A.epS(o),s)
r=o.ch
q=r?B.nF:M.qO
q=C.a([new A.dx("Sound",r,new A.epT(o),q,B.bY,n),new A.fg(B.qN,"Undo",new A.epJ(o),B.c,n),new A.fg(D.xp,"Clear",new A.epK(o),B.cq,n)],m)
for(w=0;w<4;++w){p=D.d_6[w]
q.push(new A.Ey(p,o.at.A(0,p),new A.epL(o,p),!1,n))}return A.jB(B.bY,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.eq(k,o.d),"SPARK PAINTER",C.v(C.a([new A.eJ(j,"BRUSH",n),new A.eJ(u,"COLOUR",n),s,new A.eJ(q,n,n)],m),B.m,n,B.e,B.Q,0,B.p))}}
A.bpz.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.W()
w=C.L()
v=a4.e
w.r=v.gp(v)
a6.aX(new C.a9(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.W()
o=C.a([],t)
n=new C.aP(p.r,B.aq,a5,a5,o)
o.push(new C.b5(B.d.gK(q).a,B.d.gK(q).b))
for(p=C.T(q),m=p.k("pG<1>"),l=new C.pG(q,1,a5,m),l.Gp(q,1,a5,p.c),l=new C.bW(l,l.gM(0),m.k("bW<aj.E>")),m=m.k("aj.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new C.ap(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.bx(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=B.d.gK(q)
$.W()
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=r.c.gp(0)
j=p.H()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.W()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.d=B.bO
q.e=B.fx
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new C.hr(B.G,p)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.d=B.bO
q.e=B.fx
q.c=p
q.r=o.gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbI().a.snapshot()):q).a,j)
j.delete()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.d=B.bO
q.e=B.fx
q.c=p*0.35
q.r=B.c.j(0.85).gp(0)
j=q.H()
q=n.e
u.drawPath((q==null?n.e=new C.cE(n.gbI().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new H.m9(1,B.o.F(i*5,360),0.85,1).im()
o=q[i-1]
m=q[i]
$.W()
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.c=p
l.d=B.bO
l.r=h.gp(0)
j=l.H()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,C.K)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=B.d.gK(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new H.m9(1,B.o.F(a3*23,360),0.7,1).im():l
a4.c16(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){a0=w[s]
e=B.k.D((t-a0.e)/a0.f,0,1)
q=a0.a
$.W()
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=F.PT
j=p.H()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c16(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.W(),o=C.a([],x.v),n=new C.aP(p.r,B.aq,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new C.b5(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new C.ap(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.E(new C.bE())
$.W()
p=C.L()
p.r=h.j(0.4).gp(0)
p.z=B.ja
d.aN(n,p)
p=C.L()
p.r=h.gp(0)
d.aN(n,p)},
ar(d){return!0}}
A.Va.prototype={
T(){return new A.aCL(new C.cq(null,x.A),new C.aq(new C.bb("NGMY",B.b0,B.aN),$.aw()),null,null)}}
A.aCL.prototype={
gHW(){var w,v=this,u=v.e
if(u===$){w=C.bj(null,B.t7,null,1,null,v)
w.cF(0)
v.e!==$&&C.bM()
v.e=w
u=w}return u},
a_(){this.a1()
var w=this.gHW()
w.d6()
w.dP$.J(0,this.gbTc())},
bTd(){var w,v,u,t,s,r,q,p=this,o=p.gHW().x
o===$&&C.c()
w=p.f.a.a
v=Math.max(1,(w.length===0?B.lI:new C.lX(w)).gM(0))
if(p.z&&o>=p.Q)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.r
r=s==="type"
if(r)q=t/v/1.6
else q=u?0:t/w*0.45
if(p.Q<q&&o>=q)if(r)A.dD(1500,"",35,0,0.18,"square")
else if(s==="glitch")A.dD(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
A.l6(s,D.asN[B.o.F(t,8)]+12,450,0.35)}}p.Q=o},
q(){this.gHW().q()
var w=this.f
w.S$=$.aw()
w.P$=0
this.bs9()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.f,h=i.a.a
if(h.length===0)w=C.a(["\u2026"],x.s)
else{h=new C.lX(h)
w=C.B(h,C.a2(h).k("G.E"))}v=D.Pp[k.w]
h=x.p
u=C.a([C.aH(j,j,j,j,D.mf,j,j,j,new A.ewv(k,d),j,j,j,j,"Share",j)],h)
t=C.m(26)
s=D.auP[k.y]
s=C.bv(t,C.bX(C.av(C.c6(k.gHW(),new A.eww(k,w,v),j),j,j,j),new C.o(j,j,j,j,j,new C.a6(B.ax,B.aC,B.x,s,j,j),B.n),B.be),B.ap)
t=B.c.j(0.06)
t=C.aL(j,B.T,!1,j,!0,B.q,j,C.aM(),i,j,j,j,j,j,2,C.bo(j,new C.b4(4,C.m(14),B.Z),j,j,j,j,"",j,!0,j,j,j,j,j,j,t,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,I.Cz,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),B.y,!0,j,!0,j,!1,j,B.ag,j,j,j,j,j,j,j,24,j,1,j,j,!1,"\u2022",j,new A.ewx(k),j,j,j,!1,j,j,!1,j,!0,j,B.a8,j,j,j,j,j,j,j,j,j,j,j,B.hk,!0,B.a5,j,B.am,j,j,j,j)
i=C.a([],h)
for(r=0;r<7;++r){q=D.cna[r]
i.push(new A.dx(q.b,k.r===q.a,new A.ewy(k,q),j,B.cr,j))}p=C.a([],h)
for(o=0;o<8;++o)p.push(new A.Ey(D.Pp[o],k.w===o,new A.ewz(k,o),!1,j))
n=k.z
m=n?"On":"Off"
l=n?B.nF:M.qO
l=C.a([new A.dx(m,n,new A.ewA(k),l,B.cr,j)],h)
n=C.a([],h)
for(o=0;o<5;++o)n.push(new A.Ey(D.auP[o][0],k.y===o,new A.ewB(k,o),!1,j))
n.push(B.bp)
n.push(new A.fg(B.mb,"Replay",new A.ewC(k),B.c,j))
m=k.x
return A.jB(B.cr,u,"Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.",new C.C(B.by,new C.eq(s,k.d),j),"TITLE ANIMATOR",C.v(C.a([t,B.P,new A.eJ(i,"MOVE",j),new A.eJ(p,"COLOUR",j),new A.eJ(l,"SOUND",j),new A.eJ(n,"BACK",j),A.hw(B.cr,B.o.u(B.k.V(m)),"Size",96,28,new A.ewD(k),m)],h),B.m,j,B.e,B.Q,0,B.p))},
bVW(d,e,f,g,h){var w,v,u,t,s=this,r=null,q=f<=1?0:e/(f-1),p=C.a([new C.cP(h.j(0.7),B.J,18)],x.E),o=0,n=1,m=1,l=0
switch(s.r){case"type":m=e<B.k.bw(g*1.6*f)?1:0
w=h
break
case"bounce":o=-Math.abs(Math.sin(B.k.F(g*2-q*0.5,1)*3.141592653589793))*s.x*0.5
w=h
break
case"wave":o=Math.sin(g*3.141592653589793*2-q*3)*s.x*0.28
w=h
break
case"neon":v=Math.sin(g*40+e*7)>0.92?0.25:1
B.d.a8(p)
p.push(new C.cP(h,B.J,30*v))
p.push(new C.cP(h.j(0.8),B.J,60*v))
w=h
m=v
break
case"glitch":u=B.o.F(B.k.bw(g*12),6)===0
l=u?Math.sin(e*12.9898+g*100)*s.x*0.14:0
if(u&&(e&1)===0)w=B.ba
else w=u?B.bY:h
break
case"zoom":t=B.k.D(g*1.4-q*0.5,0,1)
n=B.lP.av(0,t)
w=h
m=t
break
case"rainbow":w=new H.m9(1,B.k.F(g*360+e*40,360),0.75,1).im()
B.d.a8(p)
p.push(new C.cP(w.j(0.7),B.J,18))
break
default:w=h}return C.db(C.dT(C.e9(B.A,C.d(d,r,r,r,r,r,r,C.l(r,r,w,r,r,r,r,r,r,r,r,s.x,r,r,B.u,r,1.15,!0,r,r,r,r,r,p,r,r),r,r,r),n,r,r),new C.u(l,o)),m)}}
A.aKt.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.aKz.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.ZA.prototype={}
A.UH.prototype={
T(){var w=C.a([],x.aS)
return new A.aCn(new C.cq(null,x.A),w,B.cH,B.at,$,B.bw,0,C.a([],x.X),null,null)}}
A.aCn.prototype={
gabS(){var w=this.r
return new C.u(w.a/2,w.b/2)},
aZT(){return new H.m9(1,this.f.ai()*360,0.6,1).im()},
ape(d,e,f,g){var w=this,v=w.gabS().ae(0,new C.u(Math.cos(e),Math.sin(e)).aK(0,d)),u=Math.sqrt(1e6*w.w/d),t=Math.sin(e),s=Math.cos(e),r=g?-1:1
w.e.push(new A.ZA(v,new C.u(-t,s).aK(0,r).aK(0,u*f),w.Q*(0.6+w.f.ai()*0.9),w.aZT(),C.a([],x.g)))},
bBP(d,e,f){return this.ape(d,e,f,!1)},
bBO(d,e){return this.ape(d,e,1,!1)},
cpM(){var w,v,u,t=this
B.d.a8(t.e)
w=t.r
for(w=Math.min(w.a,w.b)/2-16-40,v=t.f,u=0;u<6;++u)t.bBO(40+w*u/5,v.ai()*3.141592653589793*2)},
bCH(){var w=this.r
this.bBP(Math.min(w.a,w.b)*0.42,this.f.ai()*3.141592653589793*2,0.45)},
a_(){this.a1()
this.kZ()},
lf(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.r.A(0,B.at))return
w=a2.e
v=w.length
if(v===0&&a2.fL$<300)return
u=a2.gabS()
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
if(o.length!==0){m=B.d.gam(o)
j=n.a
f=m.a-j.a
j=m.b-j.b
j=Math.sqrt(f*f+j*j)>3
m=j}else m=!0
if(m)o.push(n.a)
if(o.length>260)B.d.cw(o,0)}else B.d.a8(n.e)}for(p=0;p<w.length;w.length===o||(0,C.K)(w),++p){n=w[p]
v=n.a
a1=!1
if(v.b<r)if(J.lK(v.a-s)!==J.lK(n.f-s)){v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
m=v<Math.min(Math.abs(m.a),Math.abs(m.b))
a1=m}if(a1&&a2.ax&&a2.fL$-n.r>250){n.r=a2.fL$
v=n.a
m=v.a-s
v=v.b-r
v=Math.sqrt(m*m+v*v)
m=a2.r
A.l6("bell",D.asN[B.k.V((1-B.k.D(v/(Math.min(Math.abs(m.a),Math.abs(m.b))/2),0,1))*7)]+12,900,0.4)}n.f=n.a.a}if(new C.a1(w,new A.eaS(u),C.T(w).k("a1<1>")).gM(0)>0&&a2.ax)A.dD(70,"",300,0.6,0.8,"sine")
B.d.bn(w,new A.eaT(a2,u))},
cef(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=C.a([],x.g),j=this.gabS()
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
if(B.o.F(s,3)===0)k.push(t)
if(m<16)break}return k},
gaTh(){var w,v=this.as
if(v==null||this.at==null)v=B.J
else{w=this.at
w.toString
w=v.aB(0,w).aK(0,2.2)
v=w}return v},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mf,r,r,r,new A.eaG(s,d),r,r,r,r,"Share",r)],q),o=C.cm(new A.eaH(s)),n=s.w
n=A.hw(B.cy,B.k.aa(n,1)+"x","Sun mass",2.5,0.3,new A.eaI(s),n)
w=s.x
w=A.hw(B.cy,B.k.aa(w,1)+"x","Time",3,0.2,new A.eaK(s),w)
v=s.Q
v=A.hw(B.cy,B.o.u(B.k.V(v)),"Planet size",16,3,new A.eaL(s),v)
u=s.ax
t=u?B.nF:M.qO
return A.jB(B.cy,p,"A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.",o,"ORBIT STUDIO",C.v(C.a([n,w,v,new A.eJ(C.a([new A.dx("Sound",u,new A.eaM(s),t,B.cy,r),new A.dx("Trails",s.z,new A.eaN(s),B.MG,B.cy,r),new A.dx("Planets pull each other",s.y,new A.eaO(s),B.xP,B.cy,r)],q),r,r),new A.eJ(C.a([new A.fg(B.ma,"Solar system",new A.eaP(s),B.cy,r),new A.fg(B.mU,"Comet",new A.eaQ(s),B.c,r),new A.fg(B.m7,"Cluster",new A.eaR(s),B.c,r),new A.fg(D.xp,"Clear",new A.eaJ(s),B.cq,r)],q),r,r)],q),B.m,r,B.e,B.Q,0,B.p))}}
A.bj1.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=e.a,f=e.b
$.W()
w=C.L()
w.r=D.Vg.gp(0)
d.aX(new C.a9(0,0,0+g,0+f),w)
v=new C.eT()
v.dI(5)
for(w=d.a,u=0;u<70;++u){t=v.ai()
s=v.ai()
r=v.ai()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.25+v.ai()*0.4).gp(0)
p=q.H()
w.drawCircle(t*g,s*f,r*1.2+0.3,p)
p.delete()}o=16+i.d*6
g=i.c
f=o*3.2
t=C.L()
s=x.O
t.sau(new C.bS(B.A,0.5,B.x,h,0,C.a([B.cy.j(0.45),B.K],s),h,h).aw(0,C.bT(g,f)))
d.ag(g,f,t)
t=C.L()
t.sau(D.e4g.aw(0,C.bT(g,o)))
d.ag(g,o,t)
for(g=i.b,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=m.e
if(t.length>1)for(r=m.d,u=1;q=t.length,u<q;++u){l=u/q
q=t[u-1]
k=t[u]
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.c=2.2*l+0.4
j.d=B.bO
j.r=r.j(l*0.8).gp(0)
p=j.H()
w.drawLine.apply(w,[q.a,q.b,k.a,k.b,p])
p.delete()}t=m.a
r=m.c
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k=m.d
q.r=k.j(0.3).gp(0)
q.z=I.mj
p=q.H()
w.drawCircle(t.a,t.b,r+4,p)
p.delete()
t=m.a
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j=C.ar(k,B.w,0.5)
j.toString
q.sau(new C.bS(N.q5,0.5,B.x,h,0,C.a([B.c,k,j],s),h,h).aw(0,C.bT(m.a,r)))
p=q.H()
w.drawCircle(t.a,t.b,r,p)
p.delete()}g=i.e
if(g!=null&&i.f!=null){f=i.f
f.toString
t=C.L()
t.c=2
t.r=B.j2.gp(0)
d.bA(g,f,t)
t=C.L()
t.r=B.c.gp(0)
d.ag(g,6,t)
for(g=i.r,f=g.length,n=0;n<g.length;g.length===f||(0,C.K)(g),++n){m=g[n]
t=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
t.r=B.c.j(0.7).gp(0)
p=t.H()
w.drawCircle(m.a,m.b,2.2,p)
p.delete()}}},
ar(d){return!0}}
A.aal.prototype={}
A.V5.prototype={
T(){var w=C.a([],x.cS),v=C.a([],x.ev)
return new A.bio(new C.cq(null,x.A),w,v,B.cH,B.at,$,B.bw,0,C.a([],x.X),null,null)}}
A.bio.prototype={
a_(){this.a1()
this.kZ()},
c17(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
for(w=k.e,v=k.r;w.length<B.k.V(k.x);){u=v.ai()*3.141592653589793*2
t=k.w
s=v.ai()
r=k.w
q=v.ai()
p=Math.cos(u)
o=Math.sin(u)
n=k.as
m=v.ai()
l=k.ax
if(l==="fish")l=170
else l=l==="fly"?50:300
w.push(new A.aal(new C.u(t.a*(0.2+s*0.6),r.b*(0.2+q*0.6)),new C.u(p*n,o*n),B.k.F(m*60+l,360)))}while(w.length>B.k.V(k.x))w.pop()},
lf(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.at))return
a2.c17()
w=a2.f
B.d.bn(w,new A.evX(a2))
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
f=new C.u(0+(r.a/o-l.a)*k+(q.a/o-j.a)*i+p.a*g,0+(r.b/o-l.b)*k+(q.b/o-j.b)*i+p.b*g)}else f=B.J
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
k=B.k.D(a0,l*0.5,l*k)
s.b=new C.u(j.a/a0*k,j.b/a0*k)}l=s.a
k=s.b
s.a=new C.u(l.a+k.a*a3,l.b+k.b*a3)}a1=w.length
B.d.bn(w,new A.evY(a2))
if(w.length<a1&&a2.ch)A.l6("bell",12+a2.r.aD(8)*2,700,0.45)
if(a2.ay!=null){w=a2.at
w=(w==="scare"||w==="hunt")&&a2.ch&&a2.fL$-a2.CW>420}else w=!1
if(w){a2.CW=a2.fL$
A.l6("pluck",a2.at==="hunt"?-12:-5,400,0.45)}},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=C.a([C.aH(l,l,l,l,D.mf,l,l,l,new A.evM(m,d),l,l,l,l,"Share",l)],k),i=C.cm(new A.evN(m)),h=C.a([],k)
for(w=0;w<4;++w){v=D.cMv[w]
h.push(new A.dx(v.b,m.at===v.a,new A.evO(m,v),v.c,B.bb,l))}u=C.a([],k)
for(w=0;w<3;++w){t=D.cwX[w]
u.push(new A.dx(t.b,m.ax===t.a,new A.evP(m,t),l,B.bb,l))}s=m.ch
r=s?B.nF:M.qO
r=C.a([new A.dx("Sound",s,new A.evQ(m),r,B.bb,l)],k)
s=m.x
s=A.hw(B.bb,B.o.u(B.k.V(s)),"How many",150,15,new A.evR(m),s)
q=A.hw(B.bb,l,"Together",2.5,0,new A.evS(m),m.y)
p=A.hw(B.bb,l,"Apart",2.5,0,new A.evT(m),m.z)
o=A.hw(B.bb,l,"Same way",2.5,0,new A.evU(m),m.Q)
n=m.as
return A.jB(B.bb,j,"A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.",i,"SWARM STUDIO",C.v(C.a([new A.eJ(h,"TOUCH",l),new A.eJ(u,"LOOK",l),new A.eJ(r,l,l),s,q,p,o,A.hw(B.bb,B.o.u(B.k.V(n)),"Speed",280,50,new A.evV(m),n)],k),B.m,l,B.e,B.Q,0,B.p))}}
A.bqp.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4=a2.d
if(a4==="fish")w=C.a([D.abJ,D.bft],x.O)
else{v=x.O
w=a4==="fly"?C.a([B.db,L.Ki],v):C.a([D.bcJ,D.b4E],v)}v=0+a6.a
u=0+a6.b
t=$.W()
s=C.L()
s.sau(new C.a6(B.b1,B.b3,B.x,w,a3,a3).aw(0,new C.a9(0,0,v,u)))
a5.aX(new C.a9(0,0,v,u),s)
for(v=a2.c,u=v.length,s=a5.a,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){q=v[r].a
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.cr.gp(0)
o=p.H()
p=q.a
q=q.b
s.drawCircle(p,q,6,o)
o.delete()
n=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
n.r=B.cr.j(0.25).gp(0)
n.z=I.mj
o=n.H()
s.drawCircle(p,q,12,o)
o.delete()}for(v=a2.b,u=v.length,q=x.O,p=a2.r,n=p*0.012,m=x.v,l=p*0.02,p*=0.004,t=t.r,r=0;r<v.length;v.length===u||(0,C.K)(v),++r){k=v[r]
j=k.b
i=Math.atan2(j.b,j.a)
j=k.c
h=new H.m9(1,j,0.7,1).im()
switch(a4){case"fly":g=0.4+0.6*Math.abs(Math.sin(p+j))
j=k.a
f=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
f.r=h.j(0.35*g).gp(0)
f.z=B.ja
o=f.H()
s.drawCircle(j.a,j.b,9,o)
o.delete()
j=k.a
f=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
f.r=B.c.j(g).gp(0)
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
d=new C.aP(t,B.aq,a3,a3,j)
j.push(new C.b5(8,0))
j.push(new C.ap(-6,-7-e))
j.push(new C.ap(-2,0))
j.push(new C.ap(-6,7+e))
j.push(new C.bE())
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=h.gp(0)
o=j.H()
j=d.gbI().a.snapshot()
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
d=new C.aP(t,B.aq,a3,a3,j)
j.push(new C.b5(9,0))
j.push(new C.cR(0,-6,-7,a0))
j.push(new C.ap(-12,-4+a0))
j.push(new C.ap(-12,4+a0))
j.push(new C.ap(-7,a0))
j.push(new C.cR(0,6,9,0))
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
f=C.ar(h,B.cu,0.6)
f.toString
j.sau(new C.a6(B.a3,B.a7,B.x,C.a([h,f],q),a3,a3).aw(0,D.ewX))
o=j.H()
j=d.gbI().a.snapshot()
s.drawPath((d.e=new C.cE(j)).a,o)
o.delete()
s.restore()}}a4=a2.f
if(a4!=null){v=a2.e
u=v==="hunt"
if(u)a1=B.cq
else a1=v==="scare"?B.cr:B.bb
v=u?12:22
u=C.L()
u.b=B.af
u.c=2.5
u.r=a1.j(0.8).gp(0)
a5.ag(a4,v,u)}},
ar(d){return!0}}
A.aaO.prototype={}
A.Te.prototype={
T(){var w=C.a([],x.bi)
return new A.aAZ(w,B.cH,B.at,C.U(x.N,x.S),$,B.bw,0,C.a([],x.X),null,null)}}
A.aAZ.prototype={
gHl(){var w=this.r,v=18+B.k.V(w*0.85)
return B.o.D(B.k.V(v*(0.12+0.45*(w-1)/99)),3,v-2)},
gaaW(){return 54-8*(this.r/100)},
a_(){this.a1()
this.kZ()
A.yY("chain_burst").bz(new A.dCC(this),x.P)},
aVQ(){return A.vx("chain_burst",C.E(["unlocked",this.w,"level",this.r,"stars",this.x],x.N,x.z))},
axG(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
B.d.a8(k)
l.z=l.y=!1
w=l.as=0
l.at=null
v=18+B.k.V(l.r*0.85)
for(u=l.e;w<v;++w){t=u.ai()*3.141592653589793*2
s=u.ai()
r=l.f
q=u.ai()
p=l.f
o=Math.cos(t)
n=Math.sin(t)
m=(30+l.r*0.45)*(0.6+u.ai()*0.8)
k.push(new A.aaO(new C.u(20+s*(r.a-40),20+q*(p.b-40)),new C.u(o*m,n*m),new H.m9(1,u.ai()*360,0.6,1).im()))}},
Y3(d){var w,v=this
if(d==null)return 0
w=(v.fL$-d)/1000
if(w<0.4)return v.gaaW()*B.dU.av(0,w/0.4)
if(w<1.1)return v.gaaW()
if(w<1.5)return v.gaaW()*(1-(w-1.1)/0.4)
return 0},
lf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(j.f.A(0,B.at)||!j.Q)return
w=j.d
if(w.length===0)j.axG()
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
if(s<8||s>j.f.b-8)t.b=new C.u(r.a,-r.b)}if(j.y){n=C.a([],x.dm)
v=j.at
if(v!=null)n.push(new C.z(v,j.Y3(j.ax)))
for(v=B.d.gah(w),s=new C.hc(v,new A.dCD());s.C();){r=v.gU(0)
n.push(new C.z(r.a,j.Y3(r.d)))}for(v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
if(t.d!=null)continue
for(s=n.length,m=0;m<n.length;n.length===s||(0,C.K)(n),++m){l=n[m]
r=l.b
if(r>0){q=t.a
p=l.a
o=q.a-p.a
p=q.b-p.b
r=Math.sqrt(o*o+p*p)<r+8}else r=!1
if(r){t.d=j.fL$
A.dD(261.63*Math.pow(2,2*Math.min(++j.as,14)/12),"",140,0,0.35,"tri")
C.eO()
break}}}if(!(j.at!=null&&j.Y3(j.ax)>0||B.d.b8(w,new A.dCE(j)))&&j.fL$-j.ax>400&&!j.z){j.z=!0
if(j.as>=j.gHl()){if(j.as>=j.gHl()*1.5)k=3
else k=j.as>=j.gHl()*1.25?2:1
w=j.x.h(0,""+j.r)
if(k>(w==null?0:w))j.x.n(0,""+j.r,k)
w=j.r
if(w<100)j.w=Math.max(j.w,w+1)
A.B2("bell",C.a([0,4,7,12],x.t),600,0.45)
j.aVQ()}else A.dD(120,"",300,0,0.3,"saw")}}},
aVP(d){this.m(new A.dCs(this,d))
this.aVQ()},
abT(){var w=0,v=C.j(x.H),u=this,t,s
var $async$abT=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return C.b(C.c9(null,null,!0,null,new A.dCv(u),s,null,!0,!0,x.S),$async$abT)
case 2:t=e
if(t!=null)u.aVP(t)
return C.h(null,v)}})
return C.i($async$abT,v)},
B(d){var w=this,v=null,u=w.z&&w.as>=w.gHl(),t=w.x.h(0,""+w.r)
return A.jB(B.bY,B.h5,"You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level and unlock the next one. There are 100 levels, and each has more dots and a higher goal. Blast more than the goal for 2 or 3 stars.\n\nYour progress is saved on this phone automatically: you can close the app or log out and you will still be on the same level. Tap Levels to jump to any level you have unlocked.",C.cm(new A.dCz(w,t==null?0:t,u)),"CHAIN BURST",C.A(C.a([new A.fg(B.qI,"Levels",w.gc18(),B.bY,v),new A.fg(B.jP,"New board",new A.dCA(w),B.c,v)],x.p),B.m,v,B.e,B.j,0,v,v))},
asI(d,e,f){var w=null
return C.v(C.a([C.d(d,w,w,w,w,w,w,D.aMS,w,w,w),C.d(e,w,w,w,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p)},
bTE(d,e){return this.asI(d,e,B.c)}}
A.b8F.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
$.W()
w=C.L()
w.r=D.DS.gp(0)
d.aX(new C.a9(0,0,0+e.a,0+e.b),w)
v=new A.cIe(d)
w=l.c
if(w!=null)v.$3(w,l.r.$1(l.d),B.c)
for(w=l.b,u=w.length,t=d.a,s=l.r,r=0;r<w.length;w.length===u||(0,C.K)(w),++r){q=w[r]
p=q.d
o=q.a
n=q.c
if(p!=null)v.$3(o,s.$1(p),n)
else{$.W()
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=n.j(0.25).gp(0)
p.z=I.mj
m=p.H()
t.drawCircle(o.a,o.b,12,m)
m.delete()
o=q.a
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=n.gp(0)
m=p.H()
t.drawCircle(o.a,o.b,8,m)
m.delete()}}},
ar(d){return!0}}
A.aJs.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buB.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.br0()}}
A.aKh.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buS.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brS()}}
A.aKw.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.bv_.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bs6()}}
A.F0.prototype={
gcIp(){return this.a.aB(0,this.b).gcl()>4}}
A.abD.prototype={}
A.UB.prototype={
T(){var w=C.a([],x.aX),v=C.a([],x.ea)
return new A.bhY(new C.cq(null,x.A),w,v,B.cH,B.at,$,B.bw,0,C.a([],x.X),null,null)}}
A.bhY.prototype={
aMS(d){return new H.m9(1,B.o.F(d*29,360),0.6,1).im()},
YN(d){var w,v=D.Bz.h(0,this.y),u=v.length,t=u*2,s=this.w.a
if(s<=0)s=1
w=B.o.D(B.k.bw(d.a/s*t),0,t-1)
return v[B.o.F(w,u)]+12*B.o.eg(w,u)},
aPo(d){B.d.bn(this.e,new A.e6l(this,d))},
clY(d,e,f){var w=f.aB(0,e),v=w.a,u=w.b,t=v*v+u*u
if(t<1)return d.aB(0,e).gcl()
return d.aB(0,e.ae(0,w.aK(0,B.k.D((d.aB(0,e).a*v+d.aB(0,e).b*u)/t,0,1)))).gcl()},
awe(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
B.d.a8(f)
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
k=g.YN(new C.u((q+n)/2,(p+m)/2))
p=r?o:new C.u(n,p)
r=r?l:new C.u(q,m)
f.push(new A.F0(p,r,k,new H.m9(1,B.o.F(k*29,360),0.6,1).im()))}break
case"pinball":for(j=0;j<7;++j)for(w=u*(0.22+j*0.095),t=(j&1)===1,i=0;i<6;++i){r=t?0.08:0
h=new C.u(v*(0.1+i*0.16+r),w)
k=g.YN(h)
f.push(new A.F0(h,h,k,new H.m9(1,B.o.F(k*29,360),0.6,1).im()))}break
default:for(w=g.r,s=0;s<28;++s){h=new C.u(v*(0.08+w.ai()*0.84),u*(0.2+w.ai()*0.65))
k=g.YN(h)
f.push(new A.F0(h,h,k,new H.m9(1,B.o.F(k*29,360),0.6,1).im()))}}},
a_(){this.a1()
this.kZ()},
c1a(d,e){var w,v=this.fL$
if(v-d.f<90||e<40)return
d.e=d.f=v
if(this.ay){v=this.z
w=v==="bell"||v==="piano"?1000:500
A.l6(v,d.c+12,w,B.k.D(0.25+e/900,0.25,0.8))}},
lf(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a2.w.A(0,B.at))return
a2.as=a2.as+a3*a2.Q
w=a2.f
v=a2.r
for(;;){u=a2.as
if(!(u>=1&&w.length<70))break
a2.as=u-1
w.push(new A.abD(new C.u(a2.w.a*(0.2+v.ai()*0.6),6),new C.u((v.ai()-0.5)*40,0),new H.m9(1,v.ai()*360,0.5,1).im()))}if(u>3)a2.as=0
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
e=B.k.D(((k.a-m)*l+(k.b-j)*n)/(l*l+n*n),0,1)
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
if(a1<0){a2.c1a(h,-a1)
m=q.b
k=a1*1.55
q.b=new C.u(m.a-l*k,m.b-n*k)}}}}}B.d.bn(w,new A.e6K(a2))},
B(d){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=C.a([C.aH(p,p,p,p,C.V(q.ay?B.nF:M.qO,B.ad,p,p,p,21),p,p,p,new A.e6z(q),p,p,p,p,"Sound",p),C.aH(p,p,p,p,D.mf,p,p,p,new A.e6A(q,d),p,p,p,p,"Share",p)],o),m=C.cm(new A.e6B(q)),l=C.a([],o)
for(w=0;w<3;++w){v=D.cPK[w]
l.push(new A.dx(v.b,q.x===v.a,new A.e6C(q,v),v.c,B.ba,p))}u=C.a([],o)
for(t=J.aV(D.Bz.gee(D.Bz));t.C();){s=t.gU(t)
u.push(new A.dx(s,q.y===s,new A.e6D(q,s),p,B.ba,p))}t=C.a([],o)
for(w=0;w<6;++w){r=D.avH[w]
t.push(new A.dx(r.b,q.z===r.a,new A.e6E(q,r),p,B.ba,p))}s=q.Q
return A.jB(B.ba,n,"Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.",m,"MARBLE MUSIC",C.v(C.a([new A.eJ(l,"TOOL",p),new A.eJ(u,"SCALE",p),new A.eJ(t,"SOUND",p),A.hw(B.ba,B.k.aa(s,1)+"/s","Marbles",4,0.3,new A.e6F(q),s),new A.eJ(C.a([new A.fg(D.byE,"Stairs",new A.e6G(q),B.ba,p),new A.fg(Aj.Mq,"Pinball",new A.e6H(q),B.c,p),new A.fg(B.m7,"Random",new A.e6I(q),B.c,p),new A.fg(D.xp,"Clear",new A.e6J(q),B.cq,p)],o),p,p)],o),B.m,p,B.e,B.Q,0,B.p))}}
A.bfD.prototype={
a6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=0+a3.a,a1=0+a3.b
$.W()
w=C.L()
w.sau(D.bOz.aw(0,new C.a9(0,0,a0,a1)))
a2.aX(new C.a9(0,0,a0,a1),w)
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
if(Math.sqrt(m*m+k*k)>4){q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.d=B.bO
q.c=12+j
q.r=i.j(0.2+h).gp(0)
q.z=B.ja
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.d=B.bO
q.c=6
q.r=C.ar(i,B.c,r*0.7).gp(0)
g=q.H()
w.drawLine.apply(w,[o,l,n,p,g])
g.delete()}else{p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=i.j(0.25+h).gp(0)
p.z=B.ja
g=p.H()
w.drawCircle(o,l,10+j,g)
g.delete()
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p=C.ar(i,B.w,0.4)
p.toString
j.sau(new C.bS(N.q5,0.5,B.x,d,0,C.a([B.c,i,p],v),d,d).aw(0,C.bT(q,9)))
g=j.H()
w.drawCircle(o,l,9,g)
g.delete()}}a0=e.d
if(a0!=null&&e.e!=null){a1=e.e
a1.toString
u=C.L()
u.c=5
u.d=B.bO
u.r=B.aA.gp(0)
a2.bA(a0,a1,u)}for(a0=e.c,a1=a0.length,t=0;t<a0.length;a0.length===a1||(0,C.K)(a0),++t){f=a0[t]
u=f.a
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p=f.c
q.r=p.j(0.3).gp(0)
q.z=B.qX
g=q.H()
w.drawCircle(u.a,u.b,10,g)
g.delete()
u=f.a
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.sau(new C.bS(N.q5,0.5,B.x,d,0,C.a([B.c,p],v),d,d).aw(0,C.bT(f.a,7)))
g=q.H()
w.drawCircle(u.a,u.b,7,g)
g.delete()}},
ar(d){return!0}}
A.ac7.prototype={}
A.UG.prototype={
T(){var w=C.a([],x.gB)
return new A.aCm(new C.cq(null,x.A),w,B.cH,B.at,$,B.bw,0,C.a([],x.X),null,null)}}
A.aCm.prototype={
gaVR(){var w=this.w
return new C.u(w.a/2,w.b/2)},
awp(d){var w=this.w
return 36+(Math.min(w.a,w.b)/2-18-36)*d/5},
axC(d){var w=D.Bz.h(0,this.y),v=5-d,u=w.length
return w[B.o.F(v,u)]+12*B.o.eg(v,u)},
a_(){this.a1()
this.kZ()},
aOd(){var w,v,u,t,s=this.e
B.d.a8(s)
for(w=0;w<6;++w){v=(w&1)===0?2:1
for(u=w*0.13,t=0;t<v;++t)s.push(new A.ac7(w,B.k.F(t/v+u,1)))}},
lf(d){var w,v,u,t,s,r,q,p=this
if(p.w.A(0,B.at))return
for(w=p.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
s=t.a
r=t.b=t.b+d/(60/p.x*(2+s)*2)
if(r>=1){t.b=r-1
t.c=p.fL$
if(p.Q){r=p.z
s=p.axC(s)
q=p.z
q=q==="bell"||q==="piano"?1100:600
A.l6(r,s+12,q,0.55)}}}},
c1b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g={},f=d.aB(0,h.gaVR()),e=f.gcl()
g.a=0
for(w=1e9,v=0;v<6;++v){u=Math.abs(h.awp(v)-e)
if(u<w){g.a=v
w=u}}if(w>28)return
t=B.k.F((Math.atan2(f.b,f.a)+1.5707963267948966)/6.283185307179586+1,1)
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
m=h.awp(m)
j=k.a/2+j*m-q
m=k.b/2+i*m-p
if(Math.sqrt(j*j+m*m)<24){new A.eaf(h,n).$0()
h.c.e4()
return}}h.m(new A.eag(g,h,t))
if(h.Q)A.l6(h.z,h.axC(g.a)+12,700,0.5)
C.eO()},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,C.V(r.Q?B.nF:M.qO,B.ad,q,q,q,21),q,q,q,new A.ean(r),q,q,q,q,"Sound",q),C.aH(q,q,q,q,D.mf,q,q,q,new A.eao(r,d),q,q,q,q,"Share",q)],p),n=C.cm(new A.eap(r)),m=r.x
m=A.hw(B.bz,""+B.k.V(m),"Tempo",180,40,new A.eaq(r),m)
w=C.a([],p)
for(v=J.aV(D.Bz.gee(D.Bz));v.C();){u=v.gU(v)
w.push(new A.dx(u,r.y===u,new A.ear(r,u),q,B.bz,q))}v=C.a([],p)
for(t=0;t<6;++t){s=D.avH[t]
v.push(new A.dx(s.b,r.z===s.a,new A.eas(r,s),q,B.bz,q))}return A.jB(B.bz,o,"Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.",n,"ORBIT SEQUENCER",C.v(C.a([m,new A.eJ(w,"SCALE",q),new A.eJ(v,"SOUND",q),new A.eJ(C.a([new A.fg(B.dS,"Demo",new A.eat(r),B.bz,q),new A.fg(B.m7,"Random",new A.eau(r),B.c,q),new A.fg(D.xp,"Clear",new A.eav(r),B.cq,q)],p),q,q)],p),B.m,q,B.e,B.Q,0,B.p))}}
A.bj2.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null
$.W()
w=C.L()
w.r=D.Vg.gp(0)
a5.aX(new C.a9(0,0,0+a6.a,0+a6.b),w)
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
r.sau(new C.a6(B.b3,B.b1,B.x,C.a([B.c.j(0.05),B.c.j(0.5)],q),a4,a4).aw(0,new C.a9(o,m,o+2,m+u)))
a5.bA(t,s,r)
for(s=a3.f,r=a5.a,l=0;l<w;++l){k=new H.m9(1,B.k.F(s.$1(l)*23,360),0.55,1).im()
o=v.$1(l)
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.b=B.af
m.c=1.6
m.r=k.j(0.35).gp(0)
j=m.H()
r.drawCircle(p,n,o,j)
j.delete()
o=D.d5h[B.o.F(B.o.F(s.$1(l),12)+12,12)]
m=k.j(0.8)
i=new C.ku(new C.es(o,a4,a4,B.cQ,a4,a4,a4,a4,a4,a4,new C.F(!0,m,a4,a4,a4,a4,9.5,B.u,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4,a4)),B.a5,B.ci,new C.jC(1),a4,a4,a4,a4,B.cg,a4)
i.eR()
o=i.b.c
m=J.fGJ(v.$1(l))
h=i.b.a.c
i.a6(a5,new C.u(p+-o/2,n+(m-h.gbc(h)-2)))}w=C.L()
w.sau(D.e3U.aw(0,C.bT(t,16)))
a5.ag(t,16,w)
for(w=a3.b,t=w.length,o=a3.r,m=p+0,g=0;g<w.length;w.length===t||(0,C.K)(w),++g){f=w[g]
e=f.b*2*3.141592653589793-1.5707963267948966
h=Math.cos(e)
d=Math.sin(e)
a0=f.a
a1=v.$1(a0)
h=p+h*a1
a1=n+d*a1
k=new H.m9(1,B.k.F(s.$1(a0)*23,360),0.55,1).im()
a2=B.k.D(1-(o-f.c)/450,0,1)
if(a2>0){d=J.fGJ(v.$1(a0))
a0=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a0.b=B.af
a0.c=3*a2
a0.r=k.j(a2).gp(0)
j=a0.H()
r.drawCircle(m,n+d,10+26*(1-a2),j)
j.delete()}d=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
d.r=k.j(0.35).gp(0)
d.z=B.ja
j=d.H()
r.drawCircle(h,a1,12,j)
j.delete()
d=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
d.sau(new C.bS(N.q5,0.5,B.x,a4,0,C.a([B.c,k],q),a4,a4).aw(0,C.bT(new C.u(h,a1),8.5)))
j=d.H()
r.drawCircle(h,a1,8.5,j)
j.delete()}},
ar(d){return!0}}
A.aKf.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buQ.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brQ()}}
A.aKg.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buR.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brR()}}
A.rT.prototype={}
A.b7y.prototype={}
A.UE.prototype={
T(){var w=x.S
return new A.aCk(C.a([],x.aq),C.U(w,w),C.aZ(w),D.eCz)}}
A.aCk.prototype={
a_(){this.a1()
A.yY("molecule_maker").bz(new A.e9K(this),x.P)},
ahm(d){var w={}
w.a=0
this.f.bH(0,new A.e9w(w,d))
return w.a},
gaVX(){var w,v,u,t=C.a([],x.s)
for(w=this.e,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)t.push(w[u].a)
return A.hQy(t,this.f,D.a13[this.d])},
c1s(d,e){var w,v=this,u=v.e,t=u.length
if(t>=12)return
w=new C.eT()
w.dI(t*7+3)
t=v.y
v.m(new A.e9q(v,e,t.a,w,t.b))
A.vA("pop",u.length,90,0.35)},
auH(d){return this.m(new A.e9r(this))},
aVY(d){var w,v,u,t,s,r
for(w=this.e,v=w.length-1,u=d.a,t=d.b;v>=0;--v){s=w[v].b
r=s.a-u
s=s.b-t
if(Math.sqrt(r*r+s*s)<30)return v}return null},
c1y(d){this.m(new A.e9v(this,this.aVY(d)))},
ciw(){var w=this.r
if(w==null)return
this.m(new A.e9u(this,w))},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=D.a13[k.d],h=k.gaVX()
for(w=k.e,v=0,u=0;u<w.length;++u)v+=D.vq.h(0,w[u].a).a-k.ahm(u)
w=i.c
w=w.gdK(w)
t=w.dr(w,new A.e9E(),x.N).aH(0," + ")
w=i.a
s=i.b
w=h?"\ud83c\udf89 "+w+" ("+s+") built! "+i.d:"Build "+w+" ("+s+"): "+t+". Open bonds left: "+v+"."
s=h?B.bb:B.hr
r=x.p
s=C.v(C.a([new C.C(B.fN,A.f3j(w,s,h&&k.d<12?new A.fg(B.js,"Next",new A.e9F(k),B.bb,j):j),j),C.D(C.cm(new A.e9G(k)),1)],r),B.m,j,B.e,B.j,0,B.p)
w=C.a([],r)
for(q=k.x,u=0;u<13;++u){p=q.t(0,u)?"\u2713 ":""
w.push(new A.dx(p+D.a13[u].b,k.d===u,new A.e9H(k,u),j,B.hr,j))}q=C.a([],r)
for(p=D.vq.gdK(D.vq),p=p.gah(p);p.C();){o=p.gU(p)
n=o.a
m=o.b
l=n==="H"||n==="C"?B.e0:m.b
q.push(new A.dx(n+" \xb7 "+m.a,!1,new A.e9I(k,o),j,l,j))}return A.jB(B.hr,B.h5,"Everything around you is made of molecules: atoms joined by bonds. Each kind of atom can make a fixed number of bonds (shown on its button): hydrogen 1, oxygen 2, nitrogen 3, carbon 4.\n\nPick a molecule, add its atoms from the buttons, then tap one atom and then another to join them. Tap the same pair again for a double or triple bond. Drag atoms to move them. The number on an atom is how many bonds it still needs. When every atom is happy and the molecule is the right one, you win!",s,"MOLECULE MAKER",C.v(C.a([new A.eJ(w,"GOAL",j),new A.eJ(q,"ADD",j),new A.eJ(C.a([new A.dx("Remove selected atom",!1,k.gciv(),B.e9,B.cq,j),new A.dx("Clear all",!1,k.gc1t(k),B.jP,B.aM,j)],r),j,j)],r),B.m,j,B.e,B.Q,0,B.p))}}
A.bgj.prototype={
a6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null
for(w=a5.a,v=a5.b,u=a4.a,t=0;t<6;++t){s=B.o.F(t*37,10)
r=B.o.F(t*53,10)
$.W()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.hr.j(0.03).gp(0)
p=q.H()
u.drawCircle(w*(0.15+0.7*s/10),v*(0.1+0.8*r/10),60+t*12,p)
p.delete()}a2.c.bH(0,new A.dlh(a2,a4))
for(s=a2.b,r=x.O,q=a2.d,o=a2.e,t=0;n=s.length,t<n;++t){m=s[t]
n=m.a
l=D.vq.h(0,n)
k=l.a-o.$1(t)
j=m.b
i=C.bT(j,26)
if(q===t){$.W()
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.r=B.aM.j(0.4).gp(0)
h.z=B.ja
p=h.H()
u.drawCircle(j.a,j.b,34,p)
p.delete()}j=m.b
$.W()
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
g=l.b
f=C.ar(g,B.c,0.5)
f.toString
e=C.ar(g,B.w,0.5)
e.toString
h.sau(new C.bS(B.IR,0.5,B.x,a3,0,C.a([f,g,e],r),E.atW,a3).aw(0,i))
p=h.H()
u.drawCircle(j.a,j.b,26,p)
p.delete()
j=n==="H"||n==="S"?B.az:B.c
d=new C.ku(new C.es(n,a3,a3,B.cQ,a3,a3,a3,a3,a3,a3,new C.F(!0,j,a3,a3,a3,a3,19,B.u,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3,a3)),B.a5,B.ci,new C.jC(1),a3,a3,a3,a3,B.cg,a3)
d.eR()
n=m.b
j=d.b
h=j.c
j=j.a.c
d.a6(a4,new C.u(n.a-h/2,n.b-j.gbc(j)/2))
n=k===0
a0=n?B.bl:B.aL
j=m.b
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.r=a0.gp(0)
p=h.H()
u.drawCircle(j.a+20,j.b+-20,10,p)
p.delete()
n=n?"\u2713":C.t(k)
a1=new C.ku(new C.es(n,a3,a3,B.cQ,a3,a3,a3,a3,a3,a3,B.nU),B.a5,B.ci,new C.jC(1),a3,a3,a3,a3,B.cg,a3)
a1.eR()
n=m.b
j=a1.b
h=j.c
j=j.a.c
a1.a6(a4,new C.u(n.a+(20-h/2),n.b+(-20-j.gbc(j)/2)))}if(n===0){d=C.ih(a3,a3,a3,a3,D.eL3,B.a5,B.ci,a3,B.eq,B.cg)
d.eR()
d.a6(a4,new C.u((w-d.b.c)/2,v/2))}},
ar(d){return!0}}
A.TC.prototype={
T(){var w=x.s
return new A.bhd(C.a([],w),C.a([],w))}}
A.bhd.prototype={
a_(){this.a1()
this.au1()
A.yY("dna_lab").bz(new A.dKK(this),x.P)},
gb05(){var w,v,u,t,s=C.a([],x.s)
for(w=this.f.split(""),v=w.length,u=0;u<v;++u){t=D.a25.h(0,w[u])
t.toString
s.push(t)}return B.d.fS(s)},
ga7v(){var w,v,u=C.a([],x.s)
for(w=0;w<9;w=v){v=w+3
u.push(B.a.ap(this.gb05(),w,v))}return u},
au1(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=new C.eT()
k.dI(l.e*31+l.d*7+C.Bf(new C.Q(Date.now(),0,!1)))
w=new A.dKz(k)
v=w.$0()
if(l.d===2)for(u=x.s;;){v="TAC"+J.mu(w.$0(),3)
t=C.a([],u)
for(s=0;s<9;s=q){r=C.a([],u)
for(q=s+3,p=B.a.ap(v,s,q).split(""),o=p.length,n=0;n<o;++n){m=D.a25.h(0,p[n])
m.toString
r.push(m)}t.push(B.d.fS(r))}if(!B.d.b8(t,new A.dKy()))break}l.f=v
B.d.a8(l.r)
l.w=""
l.z=C.a([],x.s)
if(l.d===2)l.aYV()},
aYV(){var w,v,u,t,s=this,r=s.r.length
if(r>=3){s.z=C.a([],x.s)
return}w=A.fPh(s.ga7v()[r])
v=J.dG(D.BA.gee(D.BA),new A.dKA(w)).dC(0)
u=new C.eT()
u.dI(r+s.e)
B.d.fn(v,u)
u=C.a([w],x.s)
B.d.v(u,C.d9(v,0,C.dJ(3,"count",x.S),C.T(v).c))
t=new C.eT()
t.dI(s.e*3+r)
B.d.fn(u,t)
s.z=u},
aVW(d){var w=this,v=w.r.length,u=w.d
if(v>=(u===2?3:9))return
A:{if(0===u){u=D.db8.h(0,w.f[v])
u.toString
break A}if(1===u){u=D.a25.h(0,w.f[v])
u.toString
break A}u=A.fPh(w.ga7v()[v])
break A}w.m(new A.dKx(w,d,u,v))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=new A.dKI(),e=new A.dKD(),d=h.d===2?h.gb05():h.f,a0=h.d,a1=a0===2?"RNA (read three letters at a time)":"DNA strand"
if(a0===0)w="Your copy (the other strand)"
else w=a0===1?"Your RNA":"Your protein"
a0=x.p
v=C.a([C.d(a1,g,g,g,g,g,g,R.mq,g,g,g),B.au],a0)
if(h.d===2){u=C.a([],a0)
for(t=h.r,s=0;s<3;++s){r=t.length===s?B.bY.j(0.18):B.K
q=new C.aX(10,10)
p=new C.aA(t.length===s?B.bY:B.bE,1,B.r,-1)
o=C.a([],a0)
for(n=h.ga7v()[s].split(""),m=n.length,l=0;l<m;++l){k=n[l]
o.push(f.$2(k,e.$1(k)))}u.push(C.p(g,new C.cs(B.aX,B.e,B.Q,B.m,g,B.p,g,0,o,g),B.f,g,g,new C.o(r,g,new C.bU(p,p,p,p),new C.bt(q,q,q,q),g,g,B.n),g,g,g,D.bkw,B.en,g,g,g))}v.push(C.c5(B.bG,u,B.bx,0,0))}else{u=C.a([],a0)
for(t=d.split(""),r=t.length,l=0;l<r;++l){k=t[l]
u.push(f.$2(k,e.$1(k)))}v.push(C.c5(B.bG,u,B.bx,0,0))}if(h.d!==2){u=C.a([],a0)
for(t=h.r,j=0;j<9;++j)u.push(new C.a5(34,g,new C.ct(B.A,g,g,C.V(Ah.Mx,j<t.length?B.aA:B.bE,g,g,g,14),g),g))
B.d.v(v,C.a([new C.C(B.KV,C.c5(B.bG,u,B.bx,0,0),g)],a0))}v.push(B.ao)
v.push(C.d(w,g,g,g,g,g,g,R.mq,g,g,g))
v.push(B.au)
if(h.d===2){u=C.a([],a0)
for(t=h.r,j=0;j<3;++j){r=j<t.length?B.bb.j(0.25):B.dt
q=new C.aX(12,12)
o=j<t.length
p=new C.aA(o?B.bb:B.b7,1,B.r,-1)
if(o){o=D.BA.h(0,t[j])
o.toString}else o="?"
n=j<t.length?B.c:B.bZ
u.push(C.p(g,new C.x(o,g,new C.F(!0,n,g,g,g,g,g,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),B.f,g,g,new C.o(r,g,new C.bU(p,p,p,p),new C.bt(q,q,q,q),g,g,B.n),g,g,g,g,B.eu,g,g,g))}v.push(C.c5(B.bG,u,B.bx,6,8))}else{u=C.a([],a0)
for(t=h.r,j=0;j<9;++j){if(j<t.length){r=t[j]
r=f.$2(r,e.$1(r))}else r=f.$3$ghost("?",B.c,!0)
u.push(r)}v.push(C.c5(B.bG,u,B.bx,0,0))}v.push(B.ay)
u=h.w
if(u.length!==0){t=h.r.length
v.push(A.f3j(u,t>=(h.d===2?3:9)?B.bb:B.bY,g))}else{u=h.d
if(u===0)u="Tap the letter that pairs with the first letter of the strand."
else u=u===1?"Turn each DNA letter into its RNA partner.":"Choose the amino acid that this codon codes for. AUG is the START codon."
v.push(A.f3j(u,B.bY,g))}v.push(B.S)
v.push(C.d("In a row: "+h.x+"    Best: "+h.y,g,g,g,g,g,g,F.Sr,g,g,g))
v=C.ci(C.v(v,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,B.by,g,g,B.ai)
u=C.a([],a0)
for(j=0;j<3;++j)u.push(new A.dx(D.cV8[j],h.d===j,new A.dKE(h,j),g,B.bY,g))
u=C.a([new A.eJ(u,g,g)],a0)
t=h.r.length
r=h.d===2
if(t>=(r?3:9))u.push(new C.bK(B.a3,g,g,new A.fg(B.jP,"New strand",new A.dKF(h),B.bb,g),g))
else if(r){a0=C.a([],a0)
for(t=h.z,r=t.length,l=0;l<t.length;t.length===r||(0,C.K)(t),++l){i=t[l]
q=D.BA.h(0,i)
q.toString
a0.push(new A.fg(D.Z3,q,new A.dKG(h,i),B.bY,g))}u.push(C.c5(B.bG,a0,B.bx,8,8))}else{a0=C.a([],a0)
t=h.d===0?D.asS:D.cF5
r=t.length
l=0
for(;l<r;++l){k=t[l]
q=new C.aX(14,14)
a0.push(C.aE(g,C.p(B.A,new C.x(k,g,D.eLi,g,g,g,g,g,g,g,g,g),B.f,g,g,new C.o(e.$1(k),g,g,new C.bt(q,q,q,q),g,g,B.n),g,54,g,g,g,g,g,64),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.dKH(h,k),g,g,g,g,g,g,!1,B.aa))}u.push(C.A(a0,B.m,g,B.pE,B.j,0,g,g))}return A.jB(B.bY,B.h5,"DNA is the instruction book inside every cell. It is written with four letters: A, T, C and G.\n\n1 \xb7 Copy DNA: DNA is a double strand. A always pairs with T, and C with G. Build the missing strand.\n2 \xb7 Make RNA: before a cell reads a gene, it copies it into RNA. RNA uses U instead of T.\n3 \xb7 Build a protein: the cell reads RNA three letters at a time (a codon). Each codon is one amino acid, and a chain of amino acids folds into a protein. Pick the right amino acid for each codon.",v,"DNA LAB",C.v(u,B.m,g,B.e,B.Q,0,B.p))}}
A.TS.prototype={
T(){return new A.aBs(B.bw,C.a([80,30,6],x.n),C.a([],x.b),null,null)}}
A.aBs.prototype={
a_(){var w,v=this
v.a1()
w=v.q3(v.gc1u())
w.j1(0)
v.d!==$&&C.aQ()
v.d=w
A.yY("ecosystem").bz(new A.dNz(v),x.P)},
q(){var w=this.d
w===$&&C.c()
w.q()
this.brf()},
gaKc(){var w=this.f
return w[1]>=1&&w[2]>=0.5},
c1v(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=Math.min((d.a-m.e.a)/1e6,0.05)
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
if(v.length===0||w-B.d.gam(v)[3]>0.25){w=C.B(m.f,x.i)
w.push(m.w)
v.push(w)
if(v.length>160)B.d.cw(v,0)}if(m.gaKc()){w=m.Q+=l
if(w>m.as){m.as=w
if(B.o.F(B.k.bw(w),5)===0)A.vx("ecosystem",C.E(["best",m.as],x.N,x.z))}}w=m.f
p=w[0]
o=w[1]
n=w[2]
if(o<1)m.at="The rabbits are gone! With nothing to eat, the foxes will starve too. Press Reset."
else if(n<0.5)m.at="The foxes died out. With no predators, rabbits breed freely and will eat all the grass."
else if(p<15)m.at="The grass is nearly eaten. Too many rabbits, so soon many will starve."
else if(o>120)m.at="Rabbit boom! More rabbits means more food for foxes, so the foxes will soon grow in number."
else if(n>18)m.at="Lots of foxes. They are eating the rabbits faster than they breed, so the rabbits will drop."
else m.at="A balanced ecosystem. Notice the populations rise and fall in turn: more prey \u2192 more predators \u2192 less prey \u2192 fewer predators."
m.m(new A.dNm())},
a8H(d){this.m(new A.dNl(this,d))
A.vA("pop",3,120,0.4)},
c1x(){return this.m(new A.dNn(this))},
B(d){var w,v,u,t=this,s=null,r=t.at,q=x.p
r=C.v(C.a([new C.C(D.WM,A.f3j(r,t.gaKc()?B.bb:B.cq,s),s),C.D(new C.C(D.bl3,C.bv(C.m(18),C.b3(s,s,s,new A.bbH(t.f,t.r,t.w,s),B.eS),B.ap),s),1),new C.C(B.f2,C.d("Alive together: "+B.k.V(t.Q)+" s     Best: "+B.k.V(t.as)+" s",s,s,s,s,s,s,D.eS6,s,s,s),s)],q),B.m,s,B.e,B.j,0,B.p)
w=t.x
w=A.hw(B.bb,B.k.aa(w,1)+"\xd7","Grass growth",2,0.2,new A.dNr(t),w)
v=t.y
v=A.hw(B.bX,B.k.aa(v,1)+"\xd7","Rabbit breeding",2,0.3,new A.dNs(t),v)
u=t.z
return A.jB(B.bb,B.h5,"A food web in a box: grass feeds rabbits, and rabbits feed foxes. Nature stays in balance because each group controls the next: more rabbits means more food for foxes, but then more rabbits get eaten.\n\nChange how fast the grass grows, how fast the rabbits breed and how good the foxes are at hunting. Cause a drought or a disease, or add animals, and see how the whole web reacts. The goal is to keep all three alive for as long as you can.",r,"ECOSYSTEM LAB",C.v(C.a([w,v,A.hw(B.cy,B.k.aa(u,1)+"\xd7","Fox hunting",2,0.3,new A.dNt(t),u),new A.eJ(C.a([new A.dx("Drought",!1,new A.dNu(t),B.xN,B.aM,s),new A.dx("Disease",!1,new A.dNv(t),D.byw,B.bz,s),new A.dx("+ Foxes",!1,new A.dNw(t),s,B.cy,s),new A.dx("+ Rabbits",!1,new A.dNx(t),s,B.bX,s),new A.dx("Reset",!1,t.gc1w(),B.jP,B.aV,s)],q),s,s)],q),B.m,s,B.e,B.Q,0,B.p))}}
A.bbH.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=a2.b,f=g*0.5,e=a2.a,d=0+e,a0=0+f
$.W()
w=C.L()
w.sau(D.bMF.aw(0,new C.a9(0,0,d,a0)))
a1.aX(new C.a9(0,0,d,a0),w)
w=h.b
a0=C.ar(B.uq,B.bl,B.k.D(w[0]/100,0,1))
a0.toString
v=f*0.55
u=f*0.45
t=C.L()
t.r=a0.gp(0)
a1.aX(new C.a9(0,v,d,v+u),t)
s=B.k.V(w[0]*0.9)
r=new C.eT()
r.dI(5)
for(a0=h.d*2,v=a1.a,q=0;q<s;++q){p=r.ai()*e
o=f*(0.6+0.4*r.ai())
t=Math.sin(a0+q)
n=r.ai()
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=B.fX.gp(0)
m.c=1.6
l=m.H()
v.drawLine.apply(v,[p,o,p+t*2,o-8-n*8,l])
l.delete()}k=new A.d0J(h,a2,f,a1)
k.$5(Math.min(B.k.V(w[1]),40),"\ud83d\udc07",17,1,f*0.5)
k.$5(Math.min(B.k.V(w[2]),20),"\ud83e\udd8a",22,2,u)
a0=f+10
g-=f
e=10+(e-20)
u=a0+(g-20)
j=new C.a9(10,a0,e,u)
t=C.L()
t.r=D.b8O.gp(0)
a1.aX(new C.a9(0,f,d,f+g),t)
i=C.L()
i.r=B.dt.gp(0)
for(g=u-a0,q=0;q<=4;++q){d=a0+g*q/4
l=i.H()
v.drawLine.apply(v,[10,d,e,d,l])
l.delete()}g=new A.d0L(h,j,a1)
g.$3(0,100,B.bl)
g.$3(1,120,B.bX)
g.$3(2,24,B.cy)
g=new A.d0K(a1,j)
g.$3("Grass "+B.k.V(w[0]),B.bl,16)
g.$3("Rabbits "+B.k.V(w[1]),B.bX,102)
g.$3("Foxes "+B.k.V(w[2]),B.cy,200)},
ar(d){return!0}}
A.aJG.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.aQ3.prototype={
guv(){return B.d.cI(this.a,0,new A.bDL())}}
A.T6.prototype={
T(){var w=x.S
return new A.bgU(A.hNE(),C.c1(5,0,!1,w),C.aZ(w),B.bw,null,null)}}
A.bgU.prototype={
gvq(){var w,v,u,t=C.a([],x.t)
for(w=this.f,v=0;v<5;v=u){u=v+1
t.push(w[v]*u)}return B.d.cI(t,0,new A.dyN())},
a_(){var w,v=this
v.a1()
w=v.q3(new A.dz_(v))
w.j1(0)
v.x!==$&&C.aQ()
v.x=w
A.yY("balance_lab").bz(new A.dz0(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.bqT()},
csG(d){var w,v=this
v.m(new A.dyO(v,d))
A.vA("click",v.f[d],60,0.4)
if(v.gvq()===v.d[v.e].guv()&&v.r.J(0,v.e)){A.vA("zap",10,260,0.5)
w=v.r
w=C.B(w,C.a2(w).k("cl.E"))
A.vx("balance_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m[o.e],k=l.a,j=new C.J(k,new A.dyT(),C.T(k).k("J<1,n>")).aH(0," + ")
k=C.a([],x.s)
for(w=o.f,v=0;v<5;++v){u=w[v]
if(u>0)k.push(""+u+" kg \xd7 "+(v+1))}t=B.d.aH(k," + ")
if(o.gvq()===m[o.e].guv())s="\u2696\ufe0f Balanced! "+m[o.e].guv()+" = "+o.gvq()+". The torques are equal, so the seesaw stays level."
else s=o.gvq()>m[o.e].guv()?"The right side is too strong ("+o.gvq()+" vs "+m[o.e].guv()+"). Remove some weight or slide it nearer the middle.":"The left side wins ("+m[o.e].guv()+" vs "+o.gvq()+"). Add weight to the right, or place it further from the middle."
k=o.gvq()===m[o.e].guv()?B.bb:B.aM
k=A.bxM(s,k,o.gvq()===m[o.e].guv()&&o.e<m.length-1?new A.fg(B.js,"Next",new A.dyU(o),B.bb,n):n)
w=C.D(C.cm(new A.dyV(o,l)),1)
u=j.length===0?"0":j
u=C.D(C.d("Left torque\n"+u+" = "+m[o.e].guv(),n,n,n,n,n,n,D.aO_,n,n,n),1)
r=t.length===0?"0":t
q=x.p
r=C.v(C.a([new C.C(D.WM,k,n),w,new C.C(D.af7,C.A(C.a([u,C.D(C.d("Right torque\n"+r+" = "+o.gvq(),n,n,n,n,n,n,D.aO_,B.dK,n,n),1)],q),B.m,n,B.e,B.j,0,n,n),n)],q),B.m,n,B.e,B.j,0,B.p)
u=C.a([],q)
for(k=o.r,v=0;v<m.length;v=p){w=k.t(0,v)?"\u2713 ":""
p=v+1
u.push(new A.dx(w+p,o.e===v,new A.dyW(o,v),n,B.aM,n))}return A.jB(B.aM,B.h5,"A lever turns when one side has more TORQUE than the other. Torque = weight \xd7 distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.",r,"BALANCE LAB",C.v(C.a([new A.eJ(u,"LEVEL",n),new A.eJ(C.a([new A.dx("Clear right side",!1,new A.dyX(o),B.jP,B.cq,n)],q),n,n)],q),B.m,n,B.e,B.Q,0,B.p))}}
A.b7K.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=e.a,h=i/2,g=(i-40)/12,f=e.b*0.62
i=new C.aP($.W().r,B.aq,null,null,C.a([],x.v))
i.E(new C.b5(h,f))
w=f+70
i.E(new C.ap(h-30,w))
i.E(new C.ap(h+30,w))
i.E(new C.bE())
v=C.L()
v.r=B.ak.gp(0)
d.aN(i,v)
v=h-120
i=C.L()
i.r=B.aJ.gp(0)
d.aX(new C.a9(v,w,v+240,w+8),i)
i=d.a
J.bA(i.save())
i.translate(h,f)
d.j_(0,j.b)
u=g*5.8
t=C.by(new C.a9(-u,-9,u,9),B.h8)
w=C.L()
w.sau(D.bPf.aw(0,new C.a9(t.a,t.b,t.c,t.d)))
d.aC(t,w)
for(s=-5;s<=5;++s){if(s===0)continue
w=s*g
$.W()
v=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
v.r=B.hD.gp(0)
v.c=1.5
r=v.H()
i.drawLine.apply(i,[w,-9,w,9,r])
r.delete()
A.ffV(d,""+Math.abs(s),new C.u(w,22),B.bZ,10)}q=new A.cAM(g,d)
for(w=j.c,v=w.length,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
q.$3(-o.a*g,o.b,B.aV)}for(w=j.d,v=g*0.7,s=0;s<5;s=n){n=s+1
m=n*g
q.$3(m,w[s],B.bY)
if(w[s]===0){l=C.by(C.cr(new C.u(m,-22),22,v),B.h8)
$.W()
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.b=B.af
k.c=1.4
k.r=B.b7.gp(0)
r=k.H()
i.drawRRect(C.ew(l),r)
r.delete()
A.ffV(d,"+",new C.u(m,-22),B.bZ,14)}}i.restore()
$.W()
i=C.L()
i.r=(j.e?B.bb:B.aK).gp(0)
d.ag(new C.u(h,f),7,i)},
ar(d){return!0},
giZ(){return this.e}}
A.U5.prototype={
T(){return new A.bhp(C.a([16,32,12,24],x.t),C.aZ(x.S),B.bw,null,null)}}
A.bhp.prototype={
ga_d(){var w=this.d
return w[0]/w[1]*(w[2]/w[3])},
gac1(){var w=this.ga_d(),v=this.r,u=D.avq[v].b
if(Math.abs(w-u)/u<0.02)w=!(v===7&&C.d8(this.d,x.S).a<4)
else w=!1
return w},
a_(){var w,v=this
v.a1()
w=v.q3(new A.dRC(v))
w.j1(0)
v.x!==$&&C.aQ()
v.x=w
A.yY("gear_lab").bz(new A.dRD(v),x.P)},
q(){var w=this.x
w===$&&C.c()
w.q()
this.brn()},
c1z(d,e){var w,v=this
v.m(new A.dRs(v,d,e))
if(v.gac1()&&v.w.J(0,v.r)){A.vA("zap",8,240,0.45)
w=v.w
w=C.B(w,C.a2(w).k("cl.E"))
A.vx("gear_lab",C.E(["done",w],x.N,x.z))}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.e,o=r.ga_d(),n=r.ga_d(),m=D.avq[r.r].a
m=r.gac1()?"\u2705 Done! Ratio "+B.k.aa(r.ga_d(),2)+". "+m:"Challenge "+(r.r+1)+": "+m
w=r.gac1()?B.bb:B.cy
v=r.d
u=x.p
n=C.v(C.a([new C.C(D.WM,A.bxM(m,w,r.gac1()&&r.r<7?new A.fg(B.js,"Next",new A.dRw(r),B.bb,q):q),q),C.D(C.b3(q,q,q,new A.bd9(v,r.f,q),B.eS),1),new C.C(D.af7,C.d("Ratio "+v[0]+"/"+v[1]+" \xd7 "+v[2]+"/"+v[3]+" = "+B.k.aa(r.ga_d(),2)+"   \xb7   Output "+B.k.aa(p*o,1)+" rpm   \xb7   Force \xd7"+B.k.aa(1/n,2),q,q,q,q,q,q,P.a5N,B.L,q,q),q)],u),B.m,q,B.e,B.j,0,B.p)
o=C.a([],u)
for(p=r.w,t=0;t<8;t=s){m=p.t(0,t)?"\u2713 ":""
s=t+1
o.push(new A.dx(m+s,r.r===t,new A.dRx(r,t),q,B.cy,q))}p=r.e
u=C.a([new A.eJ(o,"GOAL",q),A.hw(B.aV,""+B.k.V(p)+" rpm","Input speed",120,10,new A.dRy(r),p)],u)
for(t=0;t<4;t=s){s=t+1
p=v[t]
u.push(new A.atZ("Gear "+s+" teeth",p,new A.dRz(r,t),8,40,D.d2Z[t],""+p,q))}return A.jB(B.cy,B.h5,"Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver \xf7 teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.",n,"GEAR LAB",C.v(u,B.m,q,B.e,B.Q,0,B.p))}}
A.bd9.prototype={
bLJ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.W(),j=C.a([],x.v),i=new C.aP(k.r,B.aq,null,null,j),h=6.283185307179586/f
for(k=d.a,w=d.b,v=0;v<f;++v){u=g+v*h
for(t=[D.e54,D.e9D,D.eoE,D.egr],s=v===0,r=0;r<4;++r){q=t[r]
p=q.a
o=u+p*h
n=e+q.b
m=k+Math.cos(o)*n
l=w+Math.sin(o)*n
if(s&&p===0){p=new C.b5(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
p=i.e
if(p!=null)p.a.delete()
i.e=null}else{p=new C.ap(m,l)
j.push(p)
m=i.f
if(m!=null)p.bx(m)
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
n=B.d.fC(g,B.q9)
m=-n-6
l=n+6
r=e.a
u=e.b
k=Math.min(r/(o-p),u/(l-m))*0.96
s=d.a
J.bA(s.save())
s.translate(r/2-(p+o)/2*k,u/2-(m+l)/2*k)
d.bV(0,k)
j=this.c
u=w[0]
r=w[1]
i=-j*u/r+3.141592653589793/r
r=w[2]
u=w[3]
h=new A.d8t(this,d)
h.$6$back(new C.u(t,0),g[2],r,i,B.dm,!0)
h.$5(new C.u(q,0),g[3],w[3],-i*r/u+3.141592653589793/u,B.d2)
h.$5(new C.u(0,0),g[0],w[0],j,B.mA)
h.$5(new C.u(t,0),g[1],w[1],i,B.fA)
s.restore()
s=new A.d8u(d,e,p,o,k)
s.$3("1 \xb7 input",0,B.aV)
s.$3("2+3 \xb7 shared axle",t,B.cy)
s.$3("4 \xb7 output",q,B.bb)},
ar(d){return!0}}
A.Tf.prototype={
T(){var w=$.aw()
return new A.bh6(new C.aq(new C.bb("Meet me at noon",B.b0,B.aN),w),new C.aq(new C.bb("LEMON",B.b0,B.aN),w),C.aZ(x.S))}}
A.bh6.prototype={
a_(){this.a1()
this.aUN()
A.yY("cipher_lab").bz(new A.dCZ(this),x.P)},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
aUN(){this.y=1+B.cH.aD(25)
this.z=0},
ga7Z(){var w=this
return A.a0t(A.a0t(D.G6[w.x],w.y),-w.z)===D.G6[w.x]},
gavF(){var w,v=this,u=v.d.a.a,t=v.r
A:{if(0===t){w=A.a0t(u,v.w)
break A}if(1===t){w=new C.J(C.a(A.a0t(u,0).split(""),x.s),new A.dCH(),x.dv).fS(0)
break A}w=A.i_d(u,v.e.a.a)
break A}return w},
aQg(d){var w,v,u,t,s,r=null,q=C.c1(26,0,!1,x.S)
for(w=new C.d2(d.toUpperCase()),v=x.e8,w=new C.bW(w,w.gM(0),v.k("bW<bV.E>")),v=v.k("bV.E");w.C();){u=w.d
if(u==null)u=v.a(u)
if(u>=65&&u<=90){u-=65
q[u]=q[u]+1}}t=Math.max(1,B.d.fC(q,B.zs))
w=x.p
v=C.a([],w)
for(s=0;s<26;++s){u=new C.aX(2,2)
v.push(new C.bG(1,B.bn,C.v(C.a([C.p(r,r,B.f,r,r,new C.o(B.aV,r,r,new C.bt(u,u,u,u),r,r,B.n),r,46*q[s]/t,r,B.Ld,r,r,r,r),new C.x(C.jA(65+s),r,D.eTR,r,r,r,r,r,r,r,r,r)],w),B.m,r,B.mh,B.j,0,B.p),r))}return new C.a5(r,70,C.A(v,B.dG,r,B.e,B.j,0,r,r),r)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=["Caesar shift","Atbash (mirror)","Vigen\xe8re (keyword)"]
if(p.f===0){w=B.c.j(0.07)
v=x.p
w=C.a([C.aL(o,B.T,!1,o,!0,B.q,o,C.aM(),p.d,o,o,o,o,o,2,C.bo(o,new C.b4(4,C.m(14),B.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,w,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lg,"Your message",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dCQ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eOh,!0,B.a5,o,B.am,o,o,o,o)],v)
if(p.r===2){u=B.c.j(0.07)
B.d.v(w,C.a([B.S,C.aL(o,B.T,!1,o,!0,B.q,o,C.aM(),p.e,o,o,o,o,o,2,C.bo(o,new C.b4(4,C.m(14),B.Z),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.lg,"Secret keyword",!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new A.dCR(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,B.iC,!0,B.a5,o,B.am,o,o,o,o)],v))}w.push(B.ay)
w.push(D.fiu)
w.push(B.au)
v=B.aV.j(0.12)
u=C.m(14)
t=C.I(B.aV.j(0.4),B.r,1)
w.push(C.p(o,C.zf(p.gavF().length===0?"\u2026":p.gavF(),D.eSS,o),B.f,o,o,new C.o(v,o,t,u,o,o,B.n),o,o,o,o,B.by,o,o,o))
w.push(B.ac)
w.push(A.bxM(["Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army\u2019s messages.","Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.","Vigen\xe8re: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years."][p.r],B.aV,o))
w.push(B.ac)
w.push(D.f_M)
w.push(B.au)
w.push(p.aQg(p.gavF()))
w.push(B.au)
w.push(D.f27)
s=C.cK(w,o,B.by,o,o,B.ai,!1)}else{w=A.bxM("A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.",B.aM,o)
v=C.d(A.a0t(D.G6[p.x],p.y),o,o,o,o,o,o,D.eTo,o,o,o)
u=(p.ga7Z()?B.bb:B.aV).j(0.14)
t=C.m(14)
r=C.I((p.ga7Z()?B.bb:B.aV).j(0.5),B.r,1)
t=C.a([w,B.ac,D.fcr,v,B.S,D.f7_,C.p(o,C.d(A.a0t(A.a0t(D.G6[p.x],p.y),-p.z),o,o,o,o,o,o,D.eUR,o,o,o),B.f,o,o,new C.o(u,o,r,t,o,o,B.n),o,o,o,o,B.by,o,o,o),B.ac,p.aQg(A.a0t(D.G6[p.x],p.y)),B.P],x.p)
if(p.ga7Z())t.push(A.bxM("\ud83d\udd13 Cracked! The shift was "+p.y+". Now you know why a short secret with a simple shift is not safe.",B.bb,new A.fg(B.jP,"Next",new A.dCS(p),B.bb,o)))
s=C.cK(t,o,B.by,o,o,B.ai,!1)}w=p.f
v=x.p
w=C.a([new A.eJ(C.a([new A.dx("Make a secret",w===0,new A.dCT(p),B.j7,B.aV,o),new A.dx("Crack a code",w===1,new A.dCU(p),B.pu,B.aM,o)],v),o,o)],v)
if(p.f===0){u=C.a([],v)
for(q=0;q<3;++q)u.push(new A.dx(n[q],p.r===q,new A.dCV(p,q),o,B.aV,o))
v=C.a([new A.eJ(u,o,o)],v)
if(p.r===0){u=p.w
v.push(A.hw(B.aV,""+u,"Shift",25,1,new A.dCW(p),u))}B.d.v(w,v)}else{v=p.z
w.push(A.hw(B.aM,""+v,"Shift back",25,0,new A.dCX(p),v))}return A.jB(B.aV,B.h5,"A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.",s,"CIPHER LAB",C.v(w,B.m,o,B.e,B.Q,0,B.p))}}
A.aJk.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.aJO.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.e7.prototype={}
A.t5.prototype={
anZ(d,e,f,g){var w=this
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
A.a8V.prototype={}
A.aa_.prototype={}
A.a38.prototype={
b9G(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hc()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new A.a8V(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
bYT(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}B.d.bn(w,new A.bJv())},
ahN(d,e,f,g){var w="p"+this.c++,v=new A.t5(w,e,f,g)
v.anZ(w,e,f,g)
this.a.push(v)
return v},
W(d,e){B.d.W(this.a,e)
B.d.bn(this.b,new A.bJG(e))},
a8(d){B.d.a8(this.a)
B.d.a8(this.b)},
cAl(d,e,f,g,h){return B.d.b8(this.b,new A.bJB(e,f,g,h))},
aix(d,e,f,g){var w
if(d===f||this.cAl(0,d,e,f,g))return null
w=new A.aa_(d,e,f,g)
this.b.push(w)
return w},
ay9(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
z6(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
al6(d){return this.KH(d)&&!d.x&&d.cx>this.z6(d)},
b2t(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
KH(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c1A(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.yi.h(0,v)
if(w!=null)return w.a
return 100},
wD(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.bYT(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=C.T(v).k("a1<1>"),s=0;r=v.length,s<r;v.length===u||(0,C.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new C.a1(v,new A.bJH(a2),t).cI(0,0,new A.bJI(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=C.U(x.N,u)
n=new A.bJK(o)
m=C.a([],x.t)
l=new A.bJJ(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,C.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,C.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=C.U(u,u)
f=new A.bJM(g,l,n)
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
a2.b2p(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.z6(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b2p(e,d,w,!0)
a2.bIM(a4)},
b2p(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=C.U(x.N,b3),b5=new A.bJx(b4),b6=C.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new A.bJw(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,C.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new A.bJz(C.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,C.K)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=C.c1(b7,0,!1,b3)
v=x.W
k=C.U(v,b3)
j=C.U(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)C.ba(C.dH(g,null))
e=C.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=C.c1(b7,0,!1,b3)
a0=C.c1(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,C.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b2t(t)*(1+t.CW))
a4=b2.ay9(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c1A(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bLI(e,a0,b8)
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
bLI(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=C.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return C.c1(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=C.c1(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bIM(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,C.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.ay9(o)/a1.b2t(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.z6(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bB6(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.b9G(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.td(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=B.k.D(o.db-h,0,24)
else o.cy=B.k.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.td(o,"The "+$.pW().h(0,n).b+" got "+B.k.aa(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.td(o,"More than 1.5 amps went through the "+$.pW().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.td(o,"The regulator had to turn "+B.k.aa(o.cy,1)+" V into heat while "+B.k.V(i*1000)+" mA flowed. That is "+B.k.aa(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.td(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.yi.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.pW().h(0,n).b
l=f.b
l=l===B.k.jJ(l)?""+B.k.V(l):C.t(l)
g=f.c
g=g===B.k.jJ(g)?""+B.k.V(g):C.t(g)
a1.td(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+B.k.aa(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.eAy.t(0,n)){m=o.fx>0?B.k.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:B.k.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.td(o,"The bulb got "+B.k.aa(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:B.k.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.td(o,"The LED had "+B.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=B.k.D(j/14,0,1)
break
case"motor":n=B.k.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=B.k.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.td(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:B.k.D(i/1,0,1)
if(!o.x&&i>1)a1.td(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.td(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=B.k.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.td(o,"The capacitor was charged to "+B.k.aa(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bB6(d){return B.d.b8(this.a,new A.bJu(d))},
td(d,e){var w
d.x=!0
d.ay=e
this.b9G(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bec(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aE4(d){var w=d.b
return D.aKz.t(0,w)||D.yi.aj(0,w)||w==="buck"||w==="regulator"},
bb2(d){var w,v=!0
if(!this.KH(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.yi.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Tp(d,e){var w=this.b
return new C.a1(w,new A.bJO(d,e),C.T(w).k("a1<1>")).gM(0)},
BP(d){var w,v
if(d.x)return!1
w=d.b
if(D.yi.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
b9c(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.pW().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aE4(d)||i.BP(d))return null
w=i.Tp(d,0)
v=i.Tp(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=C.T(u).k("a1<1>")
s=C.B(new C.a1(u,i.gcIH(),t),t.k("G.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===B.k.jJ(r)?""+B.k.V(r):C.t(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+B.k.aa(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.yi.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.aE9("battery"),o=J.aV(t.a),t=new C.hc(o,t.b);t.C();){n=o.gU(o)
if(n.e===1.5&&n.as<=0.02&&i.Tp(n,0)+i.Tp(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.aE9("switch"),o=J.aV(t.a),t=new C.hc(o,t.b);t.C();)if(!o.gU(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.pW().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.z6(k))return"The "+$.pW().h(0,o).b+" is overloaded. Everything connected to it asks for "+B.k.aa(k.cx,2)+" amps, but it can only give about "+B.k.aa(i.z6(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=B.d.b8(u,new A.bJC(i,d))
h=q.b
h=h===B.k.jJ(h)?""+B.k.V(h):C.t(h)
u=B.k.aa(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+B.k.aa(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+B.k.aa(Math.abs(d.dy),1)+" V). Try a bigger battery."},
aE9(d){var w=this.a
return new C.a1(w,new A.bJF(d),C.T(w).k("a1<1>"))},
aDJ(d){return this.aE9(d).b8(0,new A.bJE(0.35))},
pi(d,e){return B.d.b8(this.a,new A.bJD(e))}}
A.aha.prototype={
a6(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.W()
w=C.L()
w.r=D.K1.gp(0)
c0.aX(new C.a9(0,0,b8,b9),w)
v=C.L()
v.r=B.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.H()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.lE.aj(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.lE.aj(0,h.b)?(h.ch-1)*38:0
b4.cxt(c0,new C.u(k*b6+j*(42+i),l*b7),new C.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=A.hlu(q.a,q.b,c1)
q=b4.e
q.toString
$.W()
p=C.L()
p.r=B.ad.gp(0)
p.c=3
p.d=B.bO
c0.bA(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,C.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.W()
g=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
g.r=D.abm.j(B.k.D(a0.Q*0.45,0,0.6)).gp(0)
g.z=B.yj
s=g.H()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bA(w.save())
w.translate(j,i)
h=B.k.D(B.lP.av(0,B.k.D(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.cb8(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.z6(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.W().r
a3=C.a([],k)
a4=new C.aP(a2,B.aq,b5,b5,a3)
a5=f-13
a3.push(new C.b5(g,a5))
a6=g+13
a7=f+10
a3.push(new C.ap(a6,a7))
a8=g-13
a3.push(new C.ap(a8,a7))
a3.push(new C.bE())
a3=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a3.r=B.aE.j(0.65+0.35*e).gp(0)
s=a3.H()
e=a4.gbI().a.snapshot()
w.drawPath((a4.e=new C.cE(e)).a,s)
s.delete()
e=C.a([],k)
a2=new C.aP(a2,B.aq,b5,b5,e)
e.push(new C.b5(g,a5))
e.push(new C.ap(a6,a7))
e.push(new C.ap(a8,a7))
e.push(new C.bE())
e=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
e.b=B.af
e.c=1.6
e.r=B.c.gp(0)
s=e.H()
e=a2.gbI().a.snapshot()
w.drawPath((a2.e=new C.cE(e)).a,s)
s.delete()
a9=new C.ku(new C.es("!",b5,b5,B.cQ,b5,b5,b5,b5,b5,b5,new C.F(!0,B.c,b5,b5,b5,b5,14,B.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),B.a5,B.ci,new C.jC(1),b5,b5,b5,b5,B.cg,b5)
a9.eR()
a9.a6(c0,new C.u(g+-3,f+-8))}if(!a0.x)g=(D.aKz.t(0,h)||D.yi.aj(0,h)||h==="buck"||h==="regulator")&&!r.BP(a0)&&r.Tp(a0,0)+r.Tp(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.W()
g=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
g.r=B.aL.gp(0)
s=g.H()
w.drawCircle(j,i,10,s)
s.delete()
a9=new C.ku(new C.es("!",b5,b5,B.cQ,b5,b5,b5,b5,b5,b5,new C.F(!0,B.w,b5,b5,b5,b5,14,B.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),B.a5,B.ci,new C.jC(1),b5,b5,b5,b5,B.cg,b5)
a9.eR()
a9.a6(c0,new C.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.lE.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.W()
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=D.K1.gp(0)
s=j.H()
w.drawCircle(f,g,7,s)
s.delete()
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.b=B.af
j.c=2.4
j.r=(i&&r.bb2(a0)?B.cq:B.ad).gp(0)
s=j.H()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bb2(a0)){a9=new C.ku(new C.es("+",b5,b5,B.cQ,b5,b5,b5,b5,b5,b5,new C.F(!0,B.cq,b5,b5,b5,b5,13,B.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),B.a5,B.ci,new C.jC(1),b5,b5,b5,b5,B.cg,b5)
a9.eR()
a9.a6(c0,new C.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=B.k.D(b1.r/0.8,0,1)
j=C.ar(D.VT,D.VY,b2)
j.toString
i=b1.f
$.W()
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.r=j.gp(0)
h.c=2.4
h.d=B.bO
s=h.H()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
i.r=j.j(0.35*b2).gp(0)
i.z=B.PU
s=i.H()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(B.d.b8(q,new A.bEX())){b3=B.d.cI(q,0,new A.bEY())
$.W()
b7=C.L()
b7.r=D.b4r.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aX(new C.a9(0,0,b8,b9),b7)
a9=C.ih(b5,b5,b5,b5,D.eKX,B.a5,B.ci,b5,B.eq,B.cg)
a9.Bd(b6-24)
a9.a6(c0,new C.u(12,10))}},
pR(d,e,f,g,h){var w=null,v=C.ih(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),e),B.a5,B.ci,w,B.eq,B.cg)
v.eR()
v.a6(d,f)},
cxt(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new C.aP($.W().r,B.aq,null,null,C.a([],x.v))
d.E(new C.b5(a1.a,a1.b))
w=A.he_(a1,a2,a3)
d.E(new C.cR(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=C.ar(B.aM,D.abm,B.k.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=C.ar(B.aV,B.aM,B.k.D(r*1.2,0,1))
u.toString
o=u}else o=B.bo
u=C.L()
u.b=B.af
u.c=a4?7:5
u.d=B.bO
s=a4?B.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aN(d,u)
u=C.L()
u.b=B.af
u.c=2.4
u.d=B.bO
u.r=(a4?B.c:o).gp(0)
a0.aN(d,u)
if(q){n=new C.Rw(new C.vd(C.wF(d),!1,C.a([],x.T))).gK(0)
m=40+B.k.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.jb()
i=t[u].b
i===$&&C.c()
if(!(j<i.a.length()/22))break
i=k.d
v.jb()
h=t[u].b
h===$&&C.c()
h=B.k.F(j*22+i*m*l,h.a.length())
v.jb()
i=t[u].b
i===$&&C.c()
i=i.a.length()
v.jb()
g=t[u].b
g===$&&C.c()
f=B.k.F(h+i,g.a.length())
v.jb()
i=t[u].LM(f).a
h=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
h.r=B.c.gp(0)
e=h.H()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
NX(d,e,f,g){var w,v,u,t
$.W()
w=C.L()
v=g?B.b1:B.a3
u=g?B.b3:B.a7
t=C.ar(e,B.w,0.3)
t.toString
w.sau(new C.a6(v,u,B.x,C.a([e,f,e,t],x.O),B.G8,null).aw(0,d))
return w},
atS(d,e,f){return this.NX(d,e,f,!0)},
bYu(d,e){return this.NX(d,B.bo,B.iH,e)},
afr(d,e){var w,v,u
$.W()
w=C.L()
w.sau(D.aJc.aw(0,C.bT(e,4.2)))
d.ag(e,4.2,w)
w=e.ae(0,D.dVv)
v=e.ae(0,D.dVE)
u=C.L()
u.r=B.es.gp(0)
u.c=1.2
d.bA(w,v,u)},
cb8(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.W(),c0=C.L()
c0.sau(D.bMl.aw(0,D.exG))
c0.c=3.4
c0.d=B.bO
w=C.L()
w.r=B.w.j(0.45).gp(0)
w.z=I.mj
c1.hY(D.exy,w)
if(c3){w=C.by(D.exF,B.ki)
v=C.L()
v.r=B.c.j(0.14).gp(0)
c1.aC(w,v)}u=A.fVi(c2)
c1.bA(new C.u(-u,0),D.dWN,c0)
c1.bA(D.dUE,new C.u(u,0),c0)
t=c2.x
w=c2.b
s=D.lE.aj(0,w)&&c2.ch!==1
if(s){J.bA(c1.a.save())
c1.bV(0,c2.ch)}switch(w){case"battery":b3.by4(c1,c2)
break
case"solar":r=C.by(D.exB,B.hN)
c1.aC(r,b3.NX(new C.a9(r.a,r.b,r.c,r.d),B.e0,B.bX,!1))
b9=C.L()
w=C.ar(D.b7p,B.d6,0.25+0.55*c2.f)
w.toString
v=C.ar(D.beI,B.lY,0.3+0.4*c2.f)
v.toString
b9.sau(new C.a6(B.ax,B.aC,B.x,C.a([w,v],x.O),b4,b4).aw(0,D.a4u))
c1.aX(D.a4u,b9)
q=C.L()
q.r=B.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.H()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.W()
v=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
v.r=B.cm.j(0.5).gp(0)
v.c=0.6
o=v.H()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new C.aP($.W().r,B.aq,b4,b4,C.a([],x.v))
b9.E(new C.b5(-34,18))
b9.E(new C.ap(-6+40*c2.f,-18))
b9.E(new C.ap(4+40*c2.f,-18))
b9.E(new C.ap(-24,18))
b9.E(new C.bE())
w=C.L()
w.r=B.c.j(0.1+0.22*c2.f).gp(0)
c1.aN(b9,w)
w=c2.f
b9=C.L()
b9.r=B.dM.j(0.9).gp(0)
c1.ag(D.dUK,4+4*w,b9)
break
case"crank":n=C.by(D.exm,B.h9)
c1.aC(n,b3.atS(new C.a9(n.a,n.b,n.c,n.d),B.bv,B.bI))
b9=C.L()
b9.sau(D.aJd.aw(0,C.bT(B.J,12)))
c1.ag(B.J,12,b9)
m=new C.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=C.L()
b9.r=B.cm.gp(0)
b9.c=5
b9.d=B.bO
c1.bA(B.J,m,b9)
b9=C.L()
b9.sau(D.e4c.aw(0,C.bT(m,7)))
c1.ag(m,7,b9)
b3.afr(c1,D.dWG)
b3.afr(c1,D.dUx)
break
case"turbine":b9=b9.r
w=x.v
v=new C.aP(b9,B.aq,b4,b4,C.a([],w))
v.E(new C.b5(-3,24))
v.E(new C.ap(3,24))
v.E(new C.ap(1.5,0))
v.E(new C.ap(-1.5,0))
v.E(new C.bE())
l=C.L()
l.r=B.bX.gp(0)
c1.aN(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bA(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=C.a([],w)
j=new C.aP(b9,B.aq,b4,b4,l)
l.push(new C.b5(0,-2))
l.push(new C.cR(6,-14,2,-30))
l.push(new C.cR(-2,-14,0,-2))
l.push(new C.bE())
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.c.gp(0)
o=l.H()
l=j.gbI().a.snapshot()
v.drawPath((j.e=new C.cE(l)).a,o)
o.delete()
v.restore()}b9=C.L()
b9.sau(D.e3T.aw(0,C.bT(B.J,4.5)))
c1.ag(B.J,4.5,b9)
break
case"switch":n=C.by(D.ext,B.r8)
b9=C.L()
b9.sau(D.am5.aw(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aC(n,b9)
b3.afr(c1,D.QM)
b3.afr(c1,D.aE2)
i=c2.w?D.aE2:D.dUh
b9=C.L()
b9.r=B.az.gp(0)
b9.c=6
b9.d=B.bO
c1.bA(D.QM,i,b9)
b9=C.L()
b9.r=(c2.w?B.bb:B.bX).gp(0)
b9.c=4
b9.d=B.bO
c1.bA(D.QM,i,b9)
b9=C.l7(D.QM,i,0.85)
b9.toString
w=C.L()
w.r=B.aE.gp(0)
c1.ag(b9,5,w)
break
case"fuse":h=C.by(D.aJI,D.aJi)
b9=C.L()
b9.r=B.ff.j(0.25).gp(0)
c1.aC(h,b9)
b9=C.L()
b9.b=B.af
b9.c=1.4
b9.r=B.aA.gp(0)
c1.aC(h,b9)
if(!t){b9=C.L()
b9.c=1.6
b9.r=C.ar(B.bX,B.cy,c2.fx).gp(0)
c1.bA(D.aEj,D.aE1,b9)}else{b9=C.L()
b9.c=1.6
b9.r=B.bZ.gp(0)
c1.bA(D.aEj,D.dX3,b9)
b9=C.L()
b9.c=1.6
b9.r=B.bZ.gp(0)
c1.bA(D.dVa,D.aE1,b9)
b9=C.L()
b9.r=B.dy.gp(0)
c1.ag(B.J,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=C.cr(new C.u(D.vn[g]*22,0),20,9)
w=C.by(f,B.i1)
o=b3.NX(f,B.dm,B.o2,!0).H()
b9.drawRRect(C.ew(w),o)
o.delete()}break
case"pot":b9=C.L()
b9.sau(D.e44.aw(0,C.bT(B.J,21)))
c1.ag(B.J,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
d.r=B.aA.gp(0)
d.c=1.2
o=d.H()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=C.L()
b9.sau(D.e3R.aw(0,C.bT(B.J,13)))
c1.ag(B.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=C.L()
j.r=B.aM.gp(0)
j.c=3
j.d=B.bO
c1.bA(new C.u(b9*3,w*3),new C.u(v*12,l*12),j)
break
case"resistor":a1=C.by(D.aJI,D.aJi)
b9=C.L()
b9.sau(D.bPw.aw(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aC(a1,b9)
b9=x.O
a2=C.E([47,C.a([C.b0(b5),C.b0(b6),B.w],b9),100,C.a([C.b0(b7),B.w,C.b0(b7)],b9),220,C.a([C.b0(b8),C.b0(b8),C.b0(b7)],b9),470,C.a([C.b0(b5),C.b0(b6),C.b0(b7)],b9),1000,C.a([C.b0(b7),B.w,C.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
v.r=a3[p].gp(0)
o=v.H()
b9.drawRect(C.c4(new C.a9(w,-9,w+4.5,9)),o)
o.delete()}b9=C.L()
b9.r=B.aM.gp(0)
c1.aX(D.exP,b9)
b9=c2.r
b3.pR(c1,b9>=1000?"1k\u03a9":""+B.k.V(b9)+"\u03a9",D.dWl,B.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=C.L()
v.r=B.dM.j(0.55*w).gp(0)
v.z=B.yj
c1.ag(D.vy,34,v)}n=C.cr(D.dTN,12,18)
c1.aC(C.by(n,B.i1),b3.NX(n,B.bo,B.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.dl.gp(0)
l.c=1
o=l.H()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=C.L()
if(t)v=B.UM
else{v=C.ar(B.e2,B.hS,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=B.DM
else{l=C.ar(B.e0,B.dM,c2.fx)
l.toString}w.sau(new C.bS(B.rt,0.5,B.x,b4,0,C.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aw(0,C.bT(B.r5,17)))
c1.ag(B.r5,17,w)
w=C.L()
w.b=B.af
w.c=1.4
w.r=B.c.j(0.6).gp(0)
c1.ag(B.r5,17,w)
b9=b9.r
w=x.v
l=new C.aP(b9,B.aq,b4,b4,C.a([],w))
l.E(new C.b5(-9,-12))
l.E(new C.cR(-12,-4,-9,0))
v=C.L()
v.b=B.af
v.c=2
v.r=B.c.j(0.45).gp(0)
c1.aN(l,v)
v=C.L()
v.r=B.cU.gp(0)
v.c=1.4
c1.bA(D.dX_,D.dX1,v)
v=C.L()
v.r=B.cU.gp(0)
v.c=1.4
c1.bA(D.dV3,D.dV6,v)
w=C.a([],w)
a4=new C.aP(b9,B.aq,b4,b4,w)
a4.E(new C.b5(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new C.ap(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.W()
b9=C.L()
b9.b=B.af
b9.c=1.8
if(t)w=B.aW
else{w=C.ar(B.e0,D.b86,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aN(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=C.L()
v.r=B.aE.j(0.6*w).gp(0)
v.z=D.ddu
c1.ag(B.r5,30,v)}w=C.L()
w.r=B.e2.gp(0)
w.c=2.4
c1.bA(D.dX5,D.dX4,w)
w=C.L()
w.r=B.e2.gp(0)
w.c=2.4
c1.bA(D.dVc,D.dVb,w)
b9=b9.r
w=x.v
a6=new C.aP(b9,B.aq,b4,b4,C.a([],w))
a6.E(new C.b5(-12,8))
a6.E(new C.ap(-12,-6))
a6.E(new C.cR(0,-26,12,-6))
a6.E(new C.ap(12,8))
a6.E(new C.bE())
v=C.L()
if(t)l=B.Ks
else{l=C.ar(B.eF,D.ac0,c2.fx)
l.toString}if(t)j=B.k9
else{j=C.ar(B.k5,B.aE,c2.fx)
j.toString}v.sau(new C.a6(B.ax,B.aC,B.x,C.a([l,j],x.O),b4,b4).aw(0,D.ewT))
c1.aN(a6,v)
v=C.L()
v.b=B.af
v.c=1.2
v.r=B.j2.gp(0)
c1.aN(a6,v)
v=C.L()
v.r=B.f0.gp(0)
c1.aX(D.ewZ,v)
w=new C.aP(b9,B.aq,b4,b4,C.a([],w))
w.E(new C.b5(-7,-4))
w.E(new C.cR(-6,-12,0,-15))
b9=C.L()
b9.b=B.af
b9.c=2
b9.r=B.c.j(0.5).gp(0)
c1.aN(w,b9)
break
case"motor":a7=new C.a9(-28,-14,20,14)
c1.aC(C.by(a7,B.h8),b3.atS(a7,B.ak,B.aK))
b9=C.L()
b9.r=B.cC.gp(0)
c1.aX(D.ewG,b9)
b9=C.L()
b9.r=B.cm.gp(0)
c1.aX(D.ewH,b9)
b9=c1.a
J.bA(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bA(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=C.cr(D.dU4,15,7)
v=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
v.r=B.cy.j(0.9).gp(0)
o=v.H()
b9.drawOval(C.c4(w),o)
o.delete()
b9.restore()}w=C.L()
w.r=B.az.gp(0)
c1.ag(B.J,3,w)
b9.restore()
b3.pR(c1,"M",D.dWF,B.az,14)
break
case"buzzer":a8=C.cr(B.J,42,42)
b9=C.L()
b9.sau(D.e48.aw(0,a8))
c1.hY(a8,b9)
b9=C.L()
b9.r=B.w.gp(0)
c1.ag(B.J,6,b9)
b9=C.L()
b9.b=B.af
b9.c=1.4
b9.r=B.b7.gp(0)
c1.ag(B.J,6,b9)
b3.pR(c1,"+",D.dWy,B.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?B.k.F(w.d*14,5):0
l=C.bT(B.J,24+k*5+l)
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
j.b=B.af
j.c=2
j.r=B.bY.j(v*(1-k*0.22)).gp(0)
o=j.H()
b9.drawArc.apply(b9,[C.c4(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=C.by(D.exp,B.h8)
w=C.L()
w.sau(D.bNi.aw(0,new C.a9(n.a,n.b,n.c,n.d)))
c1.aC(n,w)
w=C.a([],x.v)
a9=new C.aP(b9.r,B.aq,b4,b4,w)
a9.E(new C.b5(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new C.cR(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bx(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.W()
w=C.L()
w.b=B.af
w.c=10
w.r=D.b8H.j(0.5*b9).gp(0)
w.z=B.ja
c1.aN(a9,w)}$.W()
b9=C.L()
b9.b=B.af
b9.c=3.2
b9.d=B.bO
b9.r=C.ar(B.lr,E.VI,c2.fx).gp(0)
c1.aN(a9,b9)
break
case"capacitor":a7=new C.a9(-16,-22,16,18)
b9=C.by(a7,B.h8)
w=C.L()
w.sau(D.bMd.aw(0,a7))
c1.aC(b9,w)
w=C.L()
w.r=B.bX.gp(0)
c1.aX(D.ex4,w)
for(p=0;p<4;++p){b0=new C.ku(new C.es("\u2212",b4,b4,B.cQ,b4,b4,b4,b4,b4,b4,new C.F(!0,B.az,b4,b4,b4,b4,11,B.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),B.a5,B.ci,new C.jC(1),b4,b4,b4,b4,B.cg,b4)
b0.eR()
b0.a6(c1,new C.u(-14,-18+p*9))}b1=new C.a9(-16,-24,16,-17)
c1.aC(C.by(b1,B.i1),b3.bYu(b1,!1))
b9=38*c2.fx
w=18-b9
$.W()
v=C.L()
v.r=B.bb.j(0.5).gp(0)
c1.aX(new C.a9(-3,w,11,w+b9),v)
b3.pR(c1,"1F",D.vy,B.c,11)
break
case"radio":a1=C.by(D.a4u,B.h9)
b9=C.L()
b9.sau(D.bPL.aw(0,new C.a9(a1.a,a1.b,a1.c,a1.d)))
c1.aC(a1,b9)
b9=C.L()
b9.b=B.af
b9.c=1.4
b9.r=B.o2.j(0.6).gp(0)
c1.aC(a1,b9)
b9=C.by(D.exq,B.hN)
w=C.L()
w.r=B.dB.gp(0)
c1.aC(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
v.r=B.lr.gp(0)
v.c=1.4
o=v.H()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=C.L()
w.r=(c2.fx>0?B.fW:B.nj).gp(0)
c1.aX(D.ewJ,w)
if(c2.fx>0){w=8+B.k.F(b3.b.d*7,18)
v=C.L()
v.r=B.bL.gp(0)
v.c=1.6
c1.bA(new C.u(w,-13),new C.u(w,-3),v)}w=C.L()
w.sau(D.aJd.aw(0,C.bT(D.a3x,6)))
c1.ag(D.a3x,6,w)
w=C.L()
w.r=B.o2.gp(0)
c1.ag(D.dUD,4,w)
w=C.L()
w.r=B.e2.gp(0)
w.c=1.8
c1.bA(D.dUB,D.aE6,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=C.bT(D.aE6,4+k*5+B.k.F(w.d*8,5))
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.b=B.af
l.c=1.4
l.r=B.np.j(0.7).gp(0)
o=l.H()
b9.drawArc.apply(b9,[C.c4(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=C.by(D.exA,B.h8)
v=C.L()
v.r=G.o9.gp(0)
c1.aC(w,v)
b2=C.by(D.exx,B.i1)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bA(b9.save())
b9.clipRRect(C.ew(b2),$.pc(),!0)
b9.translate(-33,-21)
A.fRB(c1,D.eD_,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=C.L()
b9.r=B.bb.gp(0)
c1.ag(D.dUP,1.6,b9)}else{w=C.L()
w.r=D.uB.gp(0)
c1.aC(b2,w)
b9=new C.aP(b9.r,B.aq,b4,b4,C.a([],x.v))
b9.E(new C.b5(-33,-21))
b9.E(new C.ap(-10,-21))
b9.E(new C.ap(-33,0))
b9.E(new C.bE())
w=C.L()
w.r=B.c.j(0.05).gp(0)
c1.aN(b9,w)}b9=C.L()
b9.r=B.bv.gp(0)
c1.aX(D.ewY,b9)
break}A.hXU(c1,c2,b3.b.d,b3.gc1B())
if(t)b3.pR(c1,"\u2716",D.dX8,B.aE,14)
if(s)c1.a.restore()},
by4(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new C.a9(-28,-13,28,13)
d.aC(C.by(w,B.r8),m.atS(w,B.e0,B.iK))
v=new C.a9(-22,-13,22,13)
$.W()
u=C.L()
u.sau(D.alZ.aw(0,v))
d.aX(v,u)
u=C.L()
u.r=B.e1.gp(0)
d.aX(D.exd,u)
t=new C.a9(28,-5,34,5)
d.aC(C.by(t,B.h7),m.NX(t,B.e0,B.iH,!0))
m.pR(d,"+",D.dUm,B.aM,11)
m.pR(d,"\u2212",D.dWH,B.ad,11)
m.pR(d,C.t(l===B.k.jJ(l)?B.k.V(l):l)+"V",D.dWr,B.aM,13)
if(l===1.5){u=C.L()
u.r=B.bE.gp(0)
d.aX(D.exc,u)
u=e.as
s=C.L()
s.r=C.ar(B.aE,B.bb,u).gp(0)
d.aX(new C.a9(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.pR(d,"FLAT",D.dWk,B.cq,9)}if(l>2){u=C.L()
u.r=B.b7.gp(0)
u.c=1
d.bA(D.dTT,D.aDM,u)
m.pR(d,l>3?"3 cells":"2 cells",D.dWq,B.aA,8)}}else if(l<=9){r=new C.a9(-22,-17,22,17)
u=C.by(r,B.r8)
$.W()
s=C.L()
s.sau(D.bPk.aw(0,r))
d.aC(u,s)
s=C.L()
s.r=B.d2.gp(0)
d.aX(D.exe,s)
for(u=d.a,q=0;q<2;++q){p=D.d1a[q]
s=p<0?5:3.6
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.sau(D.aJc.aw(0,C.bT(new C.u(p,-18),5)))
n=o.H()
u.drawCircle(p,-18,s,n)
n.delete()}m.pR(d,"9V",D.dWm,B.c,16)}else{r=new C.a9(-34,-16,34,16)
u=C.by(r,B.hN)
$.W()
s=C.L()
s.sau(D.alZ.aw(0,r))
d.aC(u,s)
s=C.L()
s.r=B.cr.gp(0)
d.aX(D.exz,s)
for(u=d.a,q=0;q<2;++q){s=C.by(C.cr(new C.u(D.av3[q],-20),8,10),B.h7)
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.cm.gp(0)
n=o.H()
u.drawRRect(C.ew(s),n)
n.delete()}m.pR(d,"+",D.dUt,B.aE,10)
m.pR(d,"12V",D.dWn,B.az,15)}},
ar(d){return!0}}
A.mm.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
B.d.a8(k)
B.d.a8(d.b)
w=C.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new A.t5(o,r,q,p)
n.anZ(o,r,q,p)
k.push(n)
J.il(s[4],new A.chS(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,C.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aix(m,u[1],l,u[3])}}}
A.ah8.prototype={
T(){var w=x.N
return new A.ah9(B.J,B.at,C.U(w,x.gl),C.aZ(w),$,B.bw,0,C.a([],x.X),null,null)}}
A.ah9.prototype={
ac4(d){var w=this,v=w.as
if(v!=null)v.a9(0)
w.m(new A.bEB(w,d))
w.as=C.cL(B.l1,new A.bEC(w))},
q(){var w=this.as
if(w!=null)w.a9(0)
w=this.ch
if(w!=null)w.a9(0)
this.bo5()},
Zl(d,e){return this.c98(d,e)},
aXU(d){return this.Zl(d,!1)},
c98(d,e){var w=0,v=C.j(x.H),u,t=this,s,r,q,p
var $async$Zl=C.e(function(f,g){if(f===1)return C.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?B.qw:B.Ej
w=3
return C.b(A.hZD(s,r,d.ax<3.2,q,$.pW().h(0,d.b).b),$async$Zl)
case 3:p=g
t.ay=!1
if(p!=null)d.at=p
case 1:return C.h(u,v)}})
return C.i($async$Zl,v)},
clr(d){var w=this,v=new C.Q(Date.now(),0,!1),u=w.at.cf(0,d.a,new A.bED()),t=J.cD(u)
t.J(u,v)
t.bn(u,new A.bEE(v))
if(t.gM(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a9(0)
w.a_F(d)
return}if(t.gM(u)===3){t=w.ch
if(t!=null)t.a9(0)
w.ch=C.cL(B.ky,new A.bEF(w,u,d))}},
Z2(d){return this.c7x(d)},
c7x(d){var w=0,v=C.j(x.H),u,t=this,s
var $async$Z2=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return C.b(A.hZ_(s,d.b,B.k.V(B.k.F(t.a.c.d*0.12,1)*100)),$async$Z2)
case 3:t.ay=!1
case 1:return C.h(u,v)}})
return C.i($async$Z2,v)},
a_F(d){return this.cj8(d)},
cj8(d){var w=0,v=C.j(x.H),u=this,t
var $async$a_F=C.e(function(e,f){if(e===1)return C.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c_(D.uz,null,new A.bEz(u,d),t,!0,!0,!1,B.pQ,!1,!1,x.H),$async$a_F)
case 2:return C.h(null,v)}})
return C.i($async$a_F,v)},
a_(){this.a1()
this.bbc()
this.kZ()},
bbc(){this.a.c.e=new A.bEU(this)},
lf(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.wD(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
r=D.lE.h(0,s.b)
if((r==null?null:r.b)!==D.yI)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.J(0,s.a)
q.Zl(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)A.dD(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)A.dD(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=B.cH.ai()<0.5
else u=!1
if(u)A.dD(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){A.dD(900+B.cH.aD(800),"",90,0,0.1,o)
if(B.cH.ai()<0.35)A.dD(300+B.cH.aD(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=B.cH.ai()<0.4
else u=!1
if(u)A.dD(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)A.dD(330+B.o.F(110*B.k.bw(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)A.dD((B.k.bw(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)A.dD(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)A.dD(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=B.cH.ai()<0.5
else u=!1
if(u)A.dD(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)A.dD(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)A.dD(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new A.bEV())},
b3C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.lE.aj(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new C.z(p,n)
r=i}}}return s},
aYA(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=C.T(w).k("dz<1>"),w=new C.dz(w,v),w=new C.bW(w,w.gM(0),v.k("bW<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.lE.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cxu(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,C.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.lE.aj(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.lE.aj(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=A.he_(new C.u(k,n),new C.u(i,l),p)
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
ac2(){this.a.toString
this.m(new A.bE4())},
bkU(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.cPz[v]
if(!B.d.b8(p.a.c.a,new A.bEW(u,w))){o=new C.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?F.Hb:o
s=s?F.Hb:o
q=t.ahN(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
A.dD(1200,"",50,0,0.3,"tri")
p.ac2()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=C.a([],x.s)
for(v=0;v<76;++v)w.push(D.Pa[v].a)
u=w.length
t=u>8
s=t?B.d.dl(w,0,B.o.an(u+1,2)):w
r=t?B.d.fG(w,B.o.an(w.length+1,2)):B.T
q=n.a.d
if(q!=null){w=C.a2(q).k("cy<1>")
w=C.B(new C.cy(q,w),w.k("G.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,C.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=C.a([],x.p)
n.a.toString
w.push(n.aYp(s,!0))
n.a.toString
if(t)w.push(n.aYp(r,!0))
w.push(C.D(C.cm(new A.bET(n,q,m)),1))
return C.v(w,B.m,null,B.e,B.j,0,B.p)},
aYp(d,e){var w,v,u,t,s,r,q,p=null,o=B.c.j(0.08),n=x.p,m=C.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,C.K)(d),++v){u=d[v]
t=$.pW()
s=t.h(0,u).d.j(0.14)
r=new C.aX(14,14)
q=new C.aA(t.h(0,u).d.j(0.5),1,B.r,-1)
m.push(C.aE(p,C.p(p,C.v(C.a([new C.x(t.h(0,u).c,p,B.yX,p,p,p,p,p,p,p,p,p),new C.x(t.h(0,u).b,p,B.n3,p,p,p,p,B.a2,p,1,p,p)],n),B.m,p,B.b9,B.j,0,B.p),B.f,p,p,new C.o(s,p,new C.bU(q,q,q,q),new C.bt(r,r,r,r),p,p,B.n),p,p,p,D.wU,p,p,p,62),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.bE5(this,u),p,p,p,p,p,p,!1,B.aa))}return C.p(p,C.cK(m,p,B.h1,p,p,B.aX,!1),B.f,p,p,new C.o(D.DJ,p,new C.bU(B.Z,B.Z,new C.aA(o,1,B.r,-1),B.Z),p,p,p,B.n),p,58,p,p,p,p,p,p)},
aW0(d){var w=null,v=C.m(18)
return C.p(w,d,B.f,w,w,new C.o(D.aae,w,C.I(B.bE,B.r,1),v,w,w,B.n),w,w,w,w,D.af8,w,w,w)},
cb9(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.pW().h(0,o),m=d.dy,l=d.fr,k=new A.bEo(q,n),j=C.d(n.c,p,p,p,p,p,p,B.Sk,p,p,p),i=n.b,h=n.d,g=x.p
i=C.A(C.a([j,B.ab,C.D(C.d(i,p,p,p,p,p,p,C.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),C.aH(p,p,p,p,D.bEu,p,p,p,new A.bEb(q,d),p,p,p,p,"Remove part",B.c7),C.aH(p,p,p,p,B.FC,p,p,p,new A.bEc(q),p,p,p,p,p,B.c7)],g),B.m,p,B.e,B.j,0,p,p)
j=C.d(n.e,p,p,p,p,p,p,D.Id,p,p,p)
w=C.d("How it is made: "+n.f,p,p,p,p,p,p,D.eTe,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+B.k.aa(Math.abs(d.dy),2)+" volts  \xb7  "+B.k.aa(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+B.k.aa(Math.abs(m*l),2)+" watts"
m=C.a([i,j,B.au,w,B.ao,C.d(m,p,p,p,p,p,p,C.l(p,p,d.x?B.cq:B.aM,p,p,p,p,p,p,p,p,12.5,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.b9c(d)
if(v!=null){l=(d.x?B.aE:B.aL).j(0.14)
j=C.m(10)
i=C.I((d.x?B.aE:B.aL).j(0.5),B.r,1)
m.push(new C.C(B.it,C.p(p,C.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.eZu,p,p,p),B.f,p,p,new C.o(l,p,i,j,p,p,B.n),p,p,p,p,B.cl,p,p,p),p))}if(A.fPJ(o)){l=C.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new A.dx("CH "+t,d.at===u,new A.bEd(q,d,u),p,h,p))}l=C.c5(B.bG,l,B.bx,4,6)
l=C.a([B.ao,l,B.au,C.d(q.a.c.BP(d)?"Showing: "+D.OO[B.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,B.hl,p,p,p)],g)
if(q.a.c.BP(d))l.push(new A.fg(B.Fa,"Open big screen",new A.bEg(q,d),h,p))
B.d.v(m,l)}if(D.lE.aj(0,o)&&!A.fPJ(o)){l=C.a([B.ao,C.d(q.a.c.BP(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,B.hl,p,p,p)],g)
if(q.a.c.BP(d))l.push(new A.fg(B.My,"Open the "+$.pW().h(0,o).b,new A.bEh(q,d),h,p))
B.d.v(m,l)}if(D.lE.aj(0,o))B.d.v(m,C.a([B.ao,new A.fg(B.AY,"Make it bigger (or tap it 4 times)",new A.bEi(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=B.k.aa(d.db,1)
if(q.a.c.BP(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=C.a([B.ao,C.d("Volts in: "+j+" V   \u2192   Volts out: "+B.k.aa(i,1)+" V",p,p,p,p,p,p,D.eU3,p,p,p)],g)
if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.d47[s]
j=r===B.k.jJ(r)?B.k.V(r):r
l.push(new A.dx(C.t(j)+" V out",d.e===r,new A.bEj(q,d,r),p,h,p))}i.push(new C.C(B.m2,C.c5(B.bG,l,B.bx,0,6),p))}if(o==="regulator")i.push(D.ffR)
B.d.v(m,i)}if(q.a.c.KH(d)&&!d.x){l=B.k.aa(d.cx,2)
j=B.k.aa(q.a.c.z6(d),2)
i=q.a.c
w=i.al6(d)?"   \u26a0 OVERLOADED":""
l=C.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,C.l(p,p,i.al6(d)?B.cq:B.ew,p,p,p,p,p,p,p,p,12.5,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=C.m(4)
w=B.k.D(d.cx/q.a.c.z6(d),0,1)
i=q.a.c.al6(d)?B.aE:B.bb
m.push(new C.C(B.it,C.v(C.a([l,B.d_,C.bv(j,C.mc(B.bE,p,p,5,p,w,new C.mx(i,x.dw)),B.ap)],g),B.F,p,B.e,B.j,0,B.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=B.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new C.C(B.it,C.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.eOe,p,p,p),p))}if(l){l=C.a([],g)
for(s=0;s<5;++s){r=D.cVM[s]
j=r===1.5?"1.5 V (rechargeable)":C.t(r)+" V"
l.push(new A.dx(j,d.e===r,new A.bEk(q,d,r),p,h,p))}m.push(C.c5(B.bG,l,B.bx,0,6))}if(o==="resistor"){l=C.a([],g)
for(s=0;s<5;++s){r=D.cN9[s]
j=r>=1000?"1 k\u03a9":""+B.o.V(r)+" \u03a9"
l.push(new A.dx(j,d.r===r,new A.bEl(q,d,r),p,h,p))}m.push(C.c5(B.bG,l,B.bx,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new A.bEm(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new A.bEn(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new A.bEe(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new A.bEf(d)))
if(o==="crank")m.push(D.fbB)
if(o==="switch")m.push(C.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,B.hl,p,p,p))
return q.aW0(new C.cW(D.aVN,C.ci(C.v(m,B.F,p,B.e,B.Q,0,B.p),B.q,p,B.y,p,p,p,p,B.ai),p))}}
A.b8H.prototype={}
A.TT.prototype={
T(){return new A.aBt(A.fVh(),new C.cq(null,x.gJ),C.aZ(x.S))}}
A.aBt.prototype={
a_(){this.a1()
$.aU.c0$.push(this)
this.ac3()},
ac3(){var w=0,v=C.j(x.H),u,t=this,s,r
var $async$ac3=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:w=3
return C.b(A.fl3(),$async$ac3)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=A.hYc(t.d,r)
if(s!=null){t.m(new A.dNH(t,s))
t.Q=r}}t.as=!0
case 1:return C.h(u,v)}})
return C.i($async$ac3,v)},
E9(){var w,v=this
if(!v.as)return
w=A.hOT(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
A.bBk(w)},
iI(d){if(d!==B.fp)this.E9()},
q(){$.aU.hz(this)
this.E9()
this.a2()},
c1D(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=C.T(v).k("a1<1>")
t=new C.a1(v,new A.dNQ(q),u).gM(0)
s=new C.a1(v,new A.dNR(),u).gM(0)
r=new C.a1(v,w.gcMc(),u).gM(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new A.dNS(q,t,s,r))}if(B.o.F(q.w,45)===0)q.E9()
if(B.o.F(q.w,10)===0){w=q.f
$.agl()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.agl()[q.f].c.$1(q.d)){w.J(0,q.f)
A.B2("bell",C.a([0,4,7,12],x.t),700,0.45)
q.m(new A.dNT())
q.E9()
w=q.c
w.toString
w=C.Wc(w)
if(w!=null)w.R(C.b2(p,p,p,p,p,B.q,p,C.d("\u2705 Challenge done: "+$.agl()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,B.m_,p,p,p,p,p,p,p,p,p,p))}},
aeI(){var w=0,v=C.j(x.H),u=this,t
var $async$aeI=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c9(null,null,!0,null,new A.dNG(u),t,null,!0,!0,x.H),$async$aeI)
case 2:return C.h(null,v)}})
return C.i($async$aeI,v)},
aW_(d,e,f,g,h){var w=null,v=f.j(0.12),u=C.m(12),t=C.I(f.j(0.45),B.r,1)
u=C.a([C.ao(w,C.p(w,C.V(d,f,w,w,w,18),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(C.ao(w,h,w,w,w,-1,-3,w))
return C.aE(w,C.hn(new C.a5(40,38,new C.an(B.W,w,B.a9,B.f,u,w),w),w,e,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,B.aa)},
aVZ(d,e,f,g){return this.aW_(d,e,f,g,null)},
aoD(d,e,f,g){var w=null,v=f.j(0.1),u=C.m(10),t=C.I(f.j(0.4),B.r,1)
return C.D(C.aE(w,C.p(w,C.A(C.a([C.V(d,f,w,w,w,15),B.ea,new C.dl(1,B.ch,C.d(e,w,1,B.a2,w,w,w,C.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),B.m,w,B.b9,B.j,0,w,w),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,28,w,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,B.aa),1)},
ad0(){var w=0,v=C.j(x.H),u=this,t
var $async$ad0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.a4(t,!1).ci(C.eo(new A.dNC(u),!1,null,x.H)),$async$ad0)
case 2:t=u.e.gbd()
if(t!=null)t.bbc()
if(u.c!=null)u.m(new A.dND())
u.E9()
return C.h(null,v)}})
return C.i($async$ad0,v)},
bB_(){var w,v,u,t,s=null,r=this.f
$.agl()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?B.bl:B.aE
u=C.m(9)
t=C.I(D.DJ,B.r,1.5)
return C.p(s,C.av(C.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,B.yY,s,s,s),s,s,s),B.f,s,D.aVU,new C.o(r,s,t,u,s,s,B.n),s,s,s,s,B.eX,s,s,s)},
afO(){var w=0,v=C.j(x.H),u=this,t
var $async$afO=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return C.b(C.c_(D.uz,null,new A.dNP(u),t,!0,!0,!0,B.pQ,!1,!1,x.H),$async$afO)
case 2:return C.h(null,v)}})
return C.i($async$afO,v)},
c1E(d,e){var w,v,u,t,s=this,r=null,q=B.c.j(0.08),p=C.aE(r,C.p(r,D.bFI,B.f,r,r,new C.o(B.c.j(0.07),r,r,r,r,r,B.a6),r,34,r,r,r,r,r,34),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.dNV(d),r,r,r,r,r,r,!1,B.aa),o=C.m(11)
o=C.p(r,D.b0q,B.f,r,r,new C.o(B.bj,r,C.I(B.aV.j(0.45),B.r,1),o,r,r,B.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return C.p(r,C.v(C.a([C.A(C.a([p,B.ab,o,B.ab,C.D(C.v(C.a([D.fe1,C.d(w,r,1,B.a2,r,r,r,C.l(r,r,s.y>0||s.z>0?B.f9:B.fZ,r,r,r,r,r,r,r,r,11.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),B.F,r,B.e,B.j,0,B.p),1),new A.avz(s.gc7f(),r),B.re,s.aVZ(B.v0,"Construction Lab: real 3D wiring, plumbing and a house",B.cy,new A.dNW(d)),s.aW_(B.l4,"Challenges",B.aM,s.gcnY(),s.bB_()),s.aVZ(B.Mr,"How to play",B.aV,new A.dNX(d,e))],v),B.m,r,B.e,B.j,0,r,r),B.ao,C.A(C.a([s.aoD(B.pv,"Circuits",B.bz,s.gch1()),B.bp,s.aoD(B.qE,"Repair",B.aM,new A.dNY(s)),B.bp,s.aoD(D.xp,"Clear",B.cq,new A.dNZ(s))],v),B.m,r,B.e,B.j,0,r,r)],v),B.m,r,B.e,B.Q,0,B.p),B.f,r,r,new C.o(D.DJ,r,new C.bU(B.Z,B.Z,new C.aA(q,1,B.r,-1),B.Z),r,r,r,B.n),r,r,r,r,D.br_,r,r,r)},
B(d){var w=this,v=null
$.aq8="tech"
return C.cc(v,B.bW,C.bq(!0,C.v(C.a([w.c1E(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),C.D(A.fUc(w.d,w.e,w.gc1C(),v),1)],x.p),B.m,v,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),v,!1,!1,v,v)}}
A.avz.prototype={
T(){return new A.b6T(null,null)}}
A.b6T.prototype={
gauI(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,B.U,null,1,null,v)
w.cF(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.gauI().q()
this.bpl()},
B(d){var w=null,v=this.a.c
return C.aE(w,C.hn(new C.a5(42,42,C.c6(this.gauI(),new A.cyj(this),w),w),w,"AI Inventor: say what you want to make",w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,B.aa)}}
A.b6S.prototype={
a6(d,e){var w,v,u,t=null,s=e.ec(B.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.W()
w=C.L()
w.r=B.b2.j(0.25+0.15*o).gp(0)
w.z=I.mj
d.ag(s,r+2+o*2,w)
w=C.L()
w.sau(D.e43.aw(0,C.bT(s,r)))
d.ag(s,r,w)
v=C.L()
v.b=B.af
v.c=2.2
v.sau(new C.fR(B.A,0,6.283185307179586,B.x,D.cF4,t,new C.m8(p)).aw(0,C.bT(s,r)))
d.ag(s,r,v)
p=new A.cyi(d)
p.$3(s.ae(0,B.r5),8+o*1.5,1)
q*=4
p.$3(s.ae(0,D.dVm),3.2,0.5+0.5*Math.sin(q))
p.$3(s.ae(0,D.dXc),2.6,0.5+0.5*Math.cos(q))
u=C.ih(t,t,t,t,D.eL2,B.a5,B.ci,t,B.eq,B.cg)
u.eR()
u.a6(d,s.ae(0,new C.u(-u.b.c/2,5)))},
ar(d){return d.b!==this.b}}
A.avS.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.avT.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bo4()}}
A.aHR.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buE.prototype={}
A.fI.prototype={}
A.uK.prototype={}
A.wZ.prototype={}
A.Iq.prototype={
a4(){return"ScreenStyle."+this.b}}
A.lU.prototype={}
A.TA.prototype={
T(){return new A.bhb(null,null)}}
A.bhb.prototype={
ga7s(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,B.ny,null,1,null,v)
w.co(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
q(){this.ga7s().q()
this.brb()},
gQB(){var w=this.ga7s().y
w=w==null?null:B.o.an(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.lE.h(0,this.a.c)
if(v==null)v=D.aJZ
return C.cc(w,L.Ki,C.bq(!0,new C.an(B.W,w,B.a9,B.q,C.a([C.av(v.b===D.yJ?this.bD8(v):this.cdX(v),w,w,w),C.ao(w,C.aH(w,w,w,w,B.me,w,w,w,new A.dJD(d),w,w,w,C.nl(w,B.aW,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),C.ao(6,C.av(C.d(v.a,w,w,w,w,w,w,D.eMC,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,B.ah,!0,!0),w,!1,!1,w,w)},
c1F(d){var w
A:{if(D.Hy===d){w=0.46153846153846156
break A}if(D.u1===d){w=0.45
break A}if(D.vF===d){w=0.9259259259259258
break A}if(D.Rh===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cdX(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Hy
A:{if(D.Hy===p){w=44
break A}if(D.u1===p){w=30
break A}if(D.vF===p){w=22
break A}if(D.Rh===p){w=26
break A}w=14
break A}v=C.c6(this.ga7s(),new A.dJC(this,w,d,o),q)
if(p===D.a4C)v=new C.CI(D.brA,v,q)
p=this.c1F(p)
u=o?4:5
t=d.c
s=C.ar(t,B.c,o?0.25:0.08)
s.toString
r=C.ar(t,B.w,0.5)
r.toString
r=C.a([s,t,r],x.O)
t=C.m(w)
s=C.a([new C.ac(0,B.G,d.d.j(0.28),B.J,36)],x.V)
return new C.fF(p,C.p(q,C.p(q,v,B.f,q,q,new C.o(B.w,q,q,C.m(w-3),q,q,B.n),q,q,q,q,A_.EI,q,q,q),B.f,q,q,new C.o(q,q,q,t,s,new C.a6(B.ax,B.aC,B.x,r,q,q),B.n),q,q,q,D.blf,new C.N(u,u,u,u),q,q,q),q)},
b2R(d){var w,v,u,t=null,s=new C.Q(Date.now(),0,!1),r=B.o.D(this.a.d+B.k.bw(this.gQB()*0.4),0,100),q=d.b===D.Hy,p=q?34:20,o=q?28:18,n=C.a([C.d(B.a.aV(B.o.u(C.dk(s)),2,"0")+":"+B.a.aV(B.o.u(C.h0(s)),2,"0"),t,t,t,t,t,t,B.ua,t,t,t),B.b8],x.p)
for(w=0;w<4;++w){v=new C.aX(1,1)
n.push(C.p(t,t,B.f,t,t,new C.o(B.c,t,t,new C.bt(v,v,v,v),t,t,B.n),t,4+w*2,t,D.bri,t,t,t,3))}n.push(B.d9)
n.push(D.f7b)
n.push(B.bp)
v=C.I(B.ad,B.r,1)
u=C.m(4)
n.push(C.p(t,new C.bK(B.a3,t,t,C.D8(B.A,C.p(t,t,B.f,t,t,new C.o(B.bb,t,t,C.m(2),t,t,B.n),t,t,t,A_.EI,t,t,t,t),t,r/100),t),B.f,t,t,new C.o(t,t,v,u,t,t,B.n),t,12,t,t,t,t,t,26))
n.push(B.u3)
n.push(C.d(""+r+"%",t,t,t,t,t,t,D.eZO,t,t,t))
return new C.C(new C.N(p,12,o,2),C.A(n,B.m,t,B.e,B.j,0,t,t),t)},
asK(d,e,f){var w,v=null,u=d.d,t=C.ar(u,B.w,0.5)
t.toString
t=C.a([u,t],x.O)
u=C.m(e*0.26)
w=x.p
t=C.a([C.p(v,C.av(C.d(d.b,v,v,v,v,v,v,C.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),B.f,v,v,new C.o(v,v,v,u,D.d_X,new C.a6(B.ax,B.aC,B.x,t,v,v),B.n),v,e,v,v,v,v,v,e)],w)
if(f)B.d.v(t,C.a([B.au,C.d(d.a,v,1,B.a2,v,v,v,D.eQU,v,v,v)],w))
return C.aE(v,C.v(t,B.m,v,B.e,B.Q,0,B.p),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.dJy(this,d),v,v,v,v,v,v,!1,B.aa)},
bTK(d,e){return this.asK(d,e,!0)},
c1G(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Rh||n===D.vF,l=d.d,k=C.ar(l,B.w,0.55)
k.toString
l=C.ar(l,B.kw,0.5)
l.toString
l=C.a([k,B.du,l],x.O)
k=p.b2R(d)
w=m?190:138
v=C.m(24)
u=C.I(B.b7,B.r,1)
w=C.aE(o,C.p(o,C.bv(C.m(23),C.b3(o,o,o,new A.adb(0,p.gQB(),o),B.eS),B.ap),B.f,o,o,new C.o(o,o,u,v,o,o,B.n),o,w,o,B.hG,o,o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.dJw(p),o,o,o,o,o,o,!1,B.aa)
v=m?5:4
u=x.p
t=C.a([],u)
for(s=0;s<9;++s){r=D.nL[s]
t.push(new C.ct(B.A,o,o,p.bTK(r,m?58:54),o))}k=C.a([k,B.ao,w,B.ac,C.D(C.lP(0.92,t,v,8,12,A2.uP,o,!1),1)],u)
if(n!==D.a4C){n=B.c.j(0.16)
w=C.m(28)
u=C.a([],u)
for(v=C.d9(D.nL,0,C.dJ(4,"count",x.S),x.e5),t=v.$ti,v=new C.bW(v,v.gM(0),t.k("bW<aj.E>")),t=t.k("aj.E");v.C();){q=v.d
u.push(p.asK(q==null?t.a(q):q,50,!1))}k.push(C.p(o,C.A(u,B.m,o,B.pE,B.j,0,o,o),B.f,o,o,new C.o(n,o,o,w,o,o,B.n),o,o,o,D.bm8,G.agw,o,o,o))}return C.p(o,C.v(k,B.m,o,B.e,B.j,0,B.p),B.f,o,o,new C.o(o,o,o,o,o,new C.a6(B.ax,B.aC,B.x,l,o,o),B.n),o,o,o,o,o,o,o,o)},
bwH(d,e){var w=null
return C.p(w,C.v(C.a([this.b2R(d),C.D(C.b3(w,w,w,new A.adb(e,this.gQB(),w),B.eS),1),C.aE(w,C.p(w,C.av(C.d(D.nL[e].a,w,w,w,w,w,w,A4.HZ,w,w,w),w,w,w),B.f,B.w,w,w,w,38,w,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dJr(this),w,w,w,w,w,w,!1,B.aa)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,B.w,w,w,w,w,w,w,w,w,w,w)},
bD8(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=C.ar(w,B.c,0.18)
v.toString
w=C.a([v,w],x.O)
v=C.m(r?26:14)
u=C.a([new C.ac(0,B.G,d.d.j(0.25),B.J,36)],x.V)
return new C.fF(1.5384615384615383,C.p(t,C.c6(this.ga7s(),new A.dJu(this,r,d),t),B.f,t,t,new C.o(t,t,t,v,u,new C.a6(B.ax,B.aC,B.x,w,t,t),B.n),t,t,t,D.bqU,new C.N(8,8,8,s),t,t,t),t)}}
A.bsJ.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.W()
w=C.L()
v=this.c
u=C.ar(v,B.w,0.6)
u.toString
t=C.ar(v,B.kw,0.4)
t.toString
w.sau(new C.a6(B.ax,B.aC,B.x,C.a([u,B.du,t],x.O),null,null).aw(0,new C.a9(0,0,n,m)))
d.aX(new C.a9(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=v.j(0.1).gp(0)
r.z=D.ddz
q=r.H()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
ar(d){return!0}}
A.adb.prototype={
a6(d,e){return A.hd2(d,e,this.b,this.c)},
ar(d){return!0}}
A.aJD.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.xd.prototype={}
A.Vb.prototype={
T(){return new A.aCM(null,null)}}
A.aCM.prototype={
gac5(){var w,v=this,u=v.d
if(u===$){w=C.bj(null,B.ny,null,1,null,v)
w.co(0)
v.d!==$&&C.bM()
v.d=w
u=w}return u},
gCz(){var w=this.e
return w===$?this.e=this.a.d:w},
a_(){var w=this
w.a1()
w.w=C.cL(w.a.f,w.gaW1())
w.aSo()
A.dD(520,"",80,0,0.25,"tri")},
aSo(){var w=this.z
if(w!=null)w.a9(0)
this.z=C.cL(B.jL,new A.ewK(this))},
c1H(){var w=this.c
if(w!=null&&C.a4(w,!1).p9()){w=this.c
w.toString
C.a4(w,!1).N(this.gCz())}},
agZ(){var w=this,v=w.w
if(v!=null)v.a9(0)
w.w=null
w.y=!0
w.aSo()},
auJ(d){this.m(new A.ewI(this,d))
A.dD(900,"",40,0,0.3,"noise")},
aXK(d){this.m(new A.ewL(this,d))
A.dD(700,"",60,0,0.3,"tri")},
q(){var w=this,v=w.w
if(v!=null)v.a9(0)
v=w.z
if(v!=null)v.a9(0)
w.gac5().q()
w.bsa()},
B(d){var w,v,u,t,s=this,r=null,q=C.m(10),p=C.I(B.cC,B.r,6),o=C.a([new C.ac(0,B.G,B.aV.j(0.25),B.J,40)],x.V),n=C.m(4),m=x.p,l=C.a([C.c6(s.gac5(),new A.ewT(s),r)],m)
if(s.r)l.push(s.bxs())
q=C.av(new C.fF(1.7777777777777777,C.p(r,C.bv(n,new C.an(B.W,r,B.b_,B.q,l,r),B.ap),B.f,r,r,new C.o(r,r,p,q,o,r,B.n),r,r,r,r,r,r,r,r),r),r,r,r)
p=s.y
o=p?1:0
n=C.nl(r,B.aW,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
n=C.aH(r,r,r,r,C.V(B.cv,B.c,r,r,r,r),r,r,r,s.gaW1(),r,r,r,n,"Back to the board",r)
l=C.m(20)
w=s.f
v=s.a
n=C.A(C.a([n,B.b8,C.p(r,C.d(w>=0?v.c+" \xb7 "+D.nL[w].a:v.c+" \xb7 CH "+(s.gCz()+1),r,r,r,r,r,r,G.S6,r,r,r),B.f,r,r,new C.o(B.aW,r,r,l,r,r,B.n),r,r,r,r,B.m3,r,r,r)],m),B.m,r,B.e,B.j,0,r,r)
l=s.cig()
w=B.w.j(0.65)
v=C.m(18)
u=s.f
u=C.d(u>=0?D.nL[u].a:D.OO[s.gCz()].a,r,r,r,r,r,r,B.iU,B.L,r,r)
t=s.f
return C.cc(r,B.w,C.bq(!0,C.aE(B.c5,new C.an(B.W,r,B.b_,B.q,C.a([q,C.Ct(C.e2(C.v(C.a([new C.C(D.bl6,n,r),B.ao,l,B.b8,C.p(r,C.v(C.a([u,C.d(t>=0?D.nL[t].c:D.OO[s.gCz()].b,r,r,r,r,r,r,P.aNe,B.L,r,r)],m),B.m,r,B.e,B.Q,0,B.p),B.f,r,r,new C.o(w,r,r,v,r,r,B.n),r,r,r,B.bm,B.bR,r,r,r)],m),B.m,r,B.e,B.j,0,B.p),!p,r),B.bc,B.i6,o)],m),r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ewU(s),r,r,r,r,r,r,!1,B.aa),!0,!1,B.ah,!0,!0),r,!1,!1,r,r)},
cig(){var w=this,v=null,u=new A.ewS(),t=B.w.j(0.72),s=C.m(22),r=C.I(B.aV.j(0.5),B.r,1)
return C.p(v,C.A(C.a([u.$3(B.xC,"CH \u2212",new A.ewN(w)),u.$3(B.hu,"CH +",new A.ewO(w)),u.$5$color$on(B.Ff,"TV",new A.ewP(w),B.aV,w.f<0),u.$5$color$on(B.AN,"APPS",new A.ewQ(w),B.bz,w.r),u.$5$color$on(B.AQ,"ADS",new A.ewR(w),B.bY,w.f===0)],x.p),B.m,v,B.e,B.Q,0,v,v),B.f,v,v,new C.o(t,v,r,s,v,v,B.n),v,v,v,v,B.Xv,v,v,v)},
bxs(){var w=null,v=B.w.j(0.9)
return C.aE(w,C.p(w,C.v(C.a([D.f9P,B.au,C.D(C.ib(!0,w,w,B.y,D.eEH,new A.ewG(this),9,B.ah,w,B.ai,!1),1)],x.p),B.m,w,B.e,B.j,0,B.p),B.f,v,w,w,w,w,w,w,B.kD,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ewH(this),w,w,w,w,w,w,!1,B.aa)}}
A.bs9.prototype={
a6(d,e){var w=this
return A.fRB(d,e,w.b,w.d,w.e,w.c)},
ar(d){return!0}}
A.aKA.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.aUx.prototype={}
A.Uo.prototype={
T(){return new A.bhL(C.U(x.S,x.N),B.at,C.a([],x.dm),$,B.bw,0,C.a([],x.X),null,null)}}
A.bhL.prototype={
gv_(){var w=this.f
return w===$?this.f=A.fPP(0):w},
a_(){this.a1()
this.kZ()
A.yY("laser_maze").bz(new A.e1V(this),x.P)},
lf(d){var w,v,u,t
this.w+=d
for(w=this.z,v=w.length-1;v>=0;--v){u=w[v]
t=u.b+d
w[v]=new C.z(u.a,t)
if(t>0.8)B.d.cw(w,v)}this.m(new A.e1W())},
ac7(d){var w=this
w.m(new A.e1L(w,d))
A.vx("laser_maze",C.E(["best",w.e,"level",w.d],x.N,x.z))},
c1U(d){var w,v,u,t,s,r,q,p,o=this
if(o.x)return
w=o.y
v=w.gea()/7
u=v*7
t=(w.a-u)/2
s=B.k.D((w.b-u)/2,8,300)
r=B.k.bw((d.a-t)/v)
q=B.k.bw((d.b-s)/v)
if(r<0||q<0||r>=7||q>=7)return
p=q*7+r
if(o.gv_().b.t(0,p)||p===o.gv_().e||o.gv_().d.aj(0,p))return
o.m(new A.e1M(o,p,r,q,v,t,s))},
B(d){var w,v,u,t=this,s=null,r=C.cm(new A.e1P(t,A.hdS(t.gv_(),t.r))),q=x.p,p=C.a([new A.dx("Clear mirrors",!1,new A.e1Q(t),B.jP,B.aM,s),new A.dx("Skip",!1,new A.e1R(t),D.byx,B.aV,s)],q)
if(t.d>0)p.push(new A.dx("Back",!1,new A.e1S(t),D.byy,B.aV,s))
w=C.a([],q)
for(v=0;v<=Math.min(t.e,59);v=u){u=v+1
w.push(new A.dx(""+u,v===t.d,new A.e1T(t,v),s,B.aE,s))}return A.jB(B.aE,B.h5,"Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.",r,"LASER MAZE",C.v(C.a([new A.eJ(p,s,s),new A.eJ(w,"LEVEL",s)],q),B.m,s,B.e,B.Q,0,B.p))}}
A.beP.prototype={
a6(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=b0.gea()/7,a4=a3*7,a5=(b0.a-a4)/2,a6=B.k.D((b0.b-a4)/2,8,300),a7=new A.ddx(a5,a3,a6),a8=a5+a4
a4=a6+a4
w=C.by(new C.a9(a5,a6,a8,a4),B.ki)
v=$.W()
u=C.L()
u.r=G.o9.gp(0)
a9.aC(w,u)
for(w=a9.a,t=0;t<=7;++t){u=t*a3
s=a5+u
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.dt.gp(0)
q=r.H()
w.drawLine.apply(w,[s,a6,s,a4,q])
q.delete()
u=a6+u
s=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
s.r=B.dt.gp(0)
q=s.H()
w.drawLine.apply(w,[a5,u,a8,u,q])
q.delete()}for(a4=a1.b,a8=a4.b,a8=C.ea(a8,a8.r,C.a2(a8).c),u=a3*0.88,s=a8.$ti.c;a8.C();){r=a8.d
p=a7.$1(r==null?s.a(r):r)
r=C.by(C.cr(p,u,u),B.h9)
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.sau(D.bPR.aw(0,C.cr(p,a3,a3)))
q=o.H()
w.drawRRect(C.ew(r),q)
q.delete()}a8=a1.d
if(a8.length>1){u=C.a([],x.v)
n=new C.aP(v.r,B.aq,a2,a2,u)
n.E(new C.b5(a7.$1(B.d.gK(a8)).a,a7.$1(B.d.gK(a8)).b))
for(a8=C.d9(a8,1,a2,C.T(a8).c),v=a8.$ti,a8=new C.bW(a8,a8.gM(0),v.k("bW<aj.E>")),v=v.k("aj.E");a8.C();){s=a8.d
if(s==null)s=v.a(s)
s=new C.ap(a7.$1(s).a,a7.$1(s).b)
u.push(s)
r=n.f
if(r!=null)s.bx(r)
s=n.e
if(s!=null)s.a.delete()
n.e=null}$.W()
a8=C.L()
a8.b=B.af
a8.c=14
a8.e=B.fx
a8.r=B.aE.j(0.28+0.08*Math.sin(a1.f*12)).gp(0)
a8.z=B.lc
a9.aN(n,a8)
a8=C.L()
a8.b=B.af
a8.c=4
a8.e=B.fx
a8.r=D.ac0.gp(0)
a9.aN(n,a8)
a8=C.L()
a8.b=B.af
a8.c=1.6
a8.e=B.fx
a8.r=B.c.gp(0)
a9.aN(n,a8)}for(a8=a4.c,a8=C.ea(a8,a8.r,C.a2(a8).c),v=a3*0.4,u=a3*0.3,s=a1.e,r=a8.$ti.c,o=a3*0.5;a8.C();){m=a8.d
if(m==null)m=r.a(m)
p=a7.$1(m)
l=s.t(0,m)
if(l){m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=B.aM.j(0.5).gp(0)
m.z=B.BC
q=m.H()
w.drawCircle(p.a,p.b,o,q)
q.delete()}m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=(l?B.aM:B.bv).gp(0)
q=m.H()
m=p.a
k=p.b
w.drawCircle(m,k,u,q)
q.delete()
j=l?B.c:B.aA
i=new C.ku(new C.es("\u2605",a2,a2,B.cQ,a2,a2,a2,a2,a2,a2,new C.F(!0,j,a2,a2,a2,a2,v,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2)),B.a5,B.ci,new C.jC(1),a2,a2,a2,a2,B.cg,a2)
i.eR()
j=i.b
h=j.c
j=j.a.c
i.a6(a9,new C.u(m-h/2,k-j.gbc(j)/2))}g=new A.ddA(a7,a3,a9)
a1.c.bH(0,new A.ddy(g))
a4.d.bH(0,new A.ddz(g))
f=a7.$1(a4.e)
a4=C.by(C.cr(f,o,a3*0.8),B.h9)
a8=C.L()
a8.r=B.aE.gp(0)
a9.aC(a4,a8)
v=f.ae(0,new C.u(v,0))
a8=C.L()
a8.r=B.c.gp(0)
a9.ag(v,5,a8)
for(a4=a1.r,a8=a4.length,e=0;e<a4.length;a4.length===a8||(0,C.K)(a4),++e){d=a4[e]
a0=d.b/0.8
v=d.a
u=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
u.b=B.af
s=1-a0
u.c=4*s
u.r=B.aM.j(s).gp(0)
q=u.H()
w.drawCircle(v.a,v.b,a3*(0.3+a0),q)
q.delete()}},
ar(d){return!0}}
A.Uq.prototype={
T(){var w=x.n
return new A.aC6(B.cH,C.a([1,0.5,0],w),C.a([0,0,0],w),$,B.bw,0,C.a([],x.X),null,null)}}
A.aC6.prototype={
a_(){this.a1()
this.kZ()
A.yY("light_mixer").bz(new A.e2d(this),x.P)},
lf(d){var w=this
if(w.z==="play")if((w.y-=d)<=0)w.aW2()
w.m(new A.e2e())},
auL(){var w,v,u=this,t=C.a([],x.n)
for(w=u.d,v=0;v<3;++v)t.push(w.aD(5)/4)
u.e=t
if(B.d.d8(t,new A.e1Z()))u.e[w.aD(3)]=1
for(t=u.f,v=0;v<3;++v)t[v]=0
u.y=20
u.z="play"},
aW2(){var w,v,u=this
if(u.z!=="play")return
w=B.k.V(B.k.D(1-A.h9f(u.e,u.f)*2,0,1)*100)
u.w+=w
if(w>=90)v="Perfect match! +"+w
else{v=""+w
v=w>=60?"Close! +"+v:"Not quite. +"+v}u.Q=v
v=w>=60?"zap":"click"
A.vA(v,B.o.an(w,10),200,0.45)
if(++u.r>=8){u.z="done"
v=u.w
if(v>u.x){u.x=v
A.vx("light_mixer",C.E(["best",v],x.N,x.z))}}else u.z="result"},
gcsJ(){var w,v,u,t=this.e,s=t[0],r=t[1],q=t[2]
if(s===r&&r===q){if(s===1)t="White"
else t=s===0?"Black":"Grey"
return t}t=x.N
w=C.E(["100","Red","010","Green","001","Blue","110","Yellow","011","Cyan","101","Magenta"],t,t)
t=s>0.5?1:0
v=r>0.5?1:0
u=q>0.5?1:0
u=w.h(0,""+t+v+u)
return u==null?D.cGW[B.o.F(B.k.V(s*3+r*5+q*7),12)]:u},
B(d){var w,v=this,u=null,t=v.f,s=C.cm(new A.e27(v,A.h9f(v.e,t))),r=t[0]
r=A.hw(B.aE,""+B.k.V(r*100)+"%","Red",1,0,new A.e28(v),r)
w=t[1]
w=A.hw(B.bl,""+B.k.V(w*100)+"%","Green",1,0,new A.e29(v),w)
t=t[2]
return A.jB(B.ba,B.h5,"Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.",s,"LIGHT MIXER",C.v(C.a([r,w,A.hw(B.d6,""+B.k.V(t*100)+"%","Blue",1,0,new A.e2a(v),t),new C.bK(B.a7,u,u,new A.fg(B.hv,"Lock it in",new A.e2b(v),B.bb,u),u)],x.p),B.m,u,B.e,B.Q,0,B.p))}}
A.bf3.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n=0+e.a,m=0+e.b,l=C.by(new C.a9(0,0,n,m),B.pO)
$.W()
w=C.L()
w.r=B.w.gp(0)
d.aC(l,w)
w=d.a
J.bA(w.save())
w.clipRRect(C.ew(C.by(new C.a9(0,0,n,m),B.pO)),$.pc(),!0)
v=e.gea()*0.3
u=e.ec(B.J)
l=-v*0.55
t=v*0.45
s=[u.ae(0,new C.u(0,l)),u.ae(0,new C.u(l,t)),u.ae(0,new C.u(v*0.55,t))]
r=[B.Dt,E.abb,E.abx]
d.kX(new C.a9(0,0,n,m),C.L())
for(l=this.b,q=0;q<3;++q){t=s[q]
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.a=B.nb
p.r=r[q].j(l[q]).gp(0)
o=p.H()
w.drawCircle(t.a,t.b,v,o)
o.delete()}w.restore()
w.restore()
n=C.by(new C.a9(0,0,n,m),B.pO)
m=C.L()
m.b=B.af
m.c=2
m.r=B.b7.gp(0)
d.aC(n,m)},
ar(d){return!0}}
A.aK4.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buJ.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brF()}}
A.aK5.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buK.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brG()}}
A.bry.prototype={}
A.a7_.prototype={
B(d){var w=null
return C.cc(C.eC(w,w,w,!0,!0,D.aca,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.akY,w,w,w,new A.ccw(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fm6,w,w,w,1,w,!0),D.aca,C.cK(C.a([D.dYu,C.cm(new A.ccx())],x.p),w,D.bn9,w,w,B.ai,!1),w,!1,!1,w,w)}}
A.Vg.prototype={
T(){var w=C.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new A.aCY(w,new C.aq(B.as,$.aw()),$,B.bw,0,C.a([],x.X),null,null)}}
A.aCY.prototype={
a_(){this.a1()
this.kZ()},
b0W(d){var w=this.d.length
return B.o.F(B.k.bw(B.k.F(B.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
lf(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b0W(v.f)
if(w!==v.x){v.x=w
A.l6("bell",24+B.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new A.eAS(v))
A.B2("bell",C.a([0,4,7,12],x.t),1100,0.55)}},
c2Q(){if(this.d.length<2)return
this.m(new A.eAO(this))},
aWo(d){var w=this,v=B.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new A.eAN(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gc2P(),p=s.d,o=C.D(C.aE(r,C.b3(r,r,r,new A.bsV(p,s.f,r),B.eS),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,B.aa),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=C.v(C.a([o,new C.a5(r,40,C.av(C.d(n,r,r,r,r,r,r,D.eY0,r,r,r),r,r,r),r)],w),B.m,r,B.e,B.j,0,B.p)
o=C.a([],w)
for(v=0;v<p.length;++v){u=D.aur[B.o.F(v,8)].j(0.9)
t=new C.aX(20,20)
o.push(C.aE(r,C.p(r,new C.x(p[v],r,D.eXi,r,r,r,r,r,r,r,r,r),B.f,r,r,new C.o(u,r,r,new C.bt(t,t,t,t),r,r,B.n),r,r,r,B.fM,B.h2,r,r,r),B.y,!1,r,r,r,r,r,r,r,new A.eAQ(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.aa))}p=B.c.j(0.07)
return A.jB(B.aM,B.h5,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",C.v(C.a([new A.eJ(o,r,r),C.A(C.a([C.D(C.aL(r,B.T,!1,r,!0,B.q,r,C.aM(),s.e,r,r,r,r,r,2,C.bo(r,new C.b4(4,C.m(14),B.Z),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ko,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),B.y,!0,r,!0,r,!1,r,B.ag,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new A.eAR(s),r,!1,r,r,!1,r,!0,r,B.a8,r,r,r,r,r,r,r,r,r,r,r,B.dj,!0,B.a5,r,B.am,r,r,r,r),1),B.ab,new A.fg(B.hu,"Add",s.gc2N(s),B.c,r),B.bp,new A.fg(B.m7,"Spin",q,B.bb,r)],w),B.m,r,B.e,B.j,0,r,r)],w),B.m,r,B.e,B.Q,0,B.p))}}
A.bsV.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new C.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.W()
w=C.L()
w.r=D.b5H.gp(0)
a1.ag(d,f,w)
w=C.L()
w.b=B.af
w.c=3
w.r=B.aM.gp(0)
a1.ag(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=C.bT(d,a0)
n=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
n.r=D.aur[B.o.F(q,8)].gp(0)
m=n.H()
n=p*57.29577951308232
f.drawArc.apply(f,[C.c4(o),n,s,!0,m])
m.delete()
o=C.bT(d,a0)
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.b=B.af
l.c=2
l.r=B.c.j(0.6).gp(0)
m=l.H()
f.drawArc.apply(f,[C.c4(o),n,s,!0,m])
m.delete()
J.bA(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=B.a.ap(o,0,11)+"\u2026"
k=new C.ku(new C.es(o,i,i,B.cQ,i,i,i,i,i,i,D.eLP),B.a5,B.ci,new C.jC(1),i,i,i,i,B.cg,i)
k.eR()
o=k.b
n=o.c
o=o.a.c
k.a6(a1,new C.u(a0-n-16,-o.gbc(o)/2))
f.restore()}f=C.L()
f.r=D.abU.gp(0)
a1.ag(d,20,f)
f=C.L()
f.b=B.af
f.c=3
f.r=B.aM.gp(0)
a1.ag(d,20,f)
j=new C.aP(h.r,B.aq,i,i,C.a([],x.v))
e-=a0
j.E(new C.b5(g,e+26))
e-=10
j.E(new C.ap(g-14,e))
j.E(new C.ap(g+14,e))
j.E(new C.bE())
e=C.L()
e.r=B.c.gp(0)
a1.aN(j,e)
e=C.L()
e.b=B.af
e.c=2
e.r=B.aW.gp(0)
a1.aN(j,e)},
ar(d){return!0}}
A.U_.prototype={
T(){return new A.bhk($,B.bw,0,C.a([],x.X),null,null)}}
A.bhk.prototype={
a_(){this.a1()
this.kZ()},
lf(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
A.B2("bell",C.a([0,4,7,12],x.t),1500,0.6)
w.a3r(900,new A.dPV())}w.m(new A.dPW())},
aWq(d){return this.m(new A.dPQ(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=B.a.aV(B.o.u(B.k.an(m,60)),2,"0")
v=B.a.aV(B.o.u(B.o.F(B.k.dG(m),60)),2,"0")
m=C.b3(n,n,n,new A.bnN(l,B.cq,n),B.aLc)
u=C.d(w+":"+v,n,n,n,n,n,n,D.ePW,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=C.av(new C.a5(280,280,new C.an(B.A,n,B.a9,B.q,C.a([m,C.v(C.a([u,C.d(t,n,n,n,n,n,n,D.eP1,n,n,n),B.au,C.d("Sessions done: "+o.r,n,n,n,n,n,n,B.Ct,n,n,n)],s),B.m,n,B.e,B.Q,0,B.p)],s),n),n),n,n,n)
u=C.a([],s)
for(r=0;r<6;++r){q=D.cYl[r]
u.push(new A.dx(""+q+" min",o.d===q,new A.dPS(o,q),n,B.cq,n))}m=o.f
p=m?Z.xy:B.iN
m=m?"Pause":"Start"
return A.jB(B.cq,B.h5,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",C.v(C.a([new A.eJ(u,n,n),new A.eJ(C.a([new A.fg(p,m,new A.dPT(o),B.bb,n),new A.fg(B.jP,"Reset",new A.dPU(o),B.c,n)],s),n,n)],s),B.m,n,B.e,B.Q,0,B.p))}}
A.bnN.prototype={
a6(d,e){var w,v,u,t,s=e.ec(B.J),r=e.a/2-14
$.W()
w=C.L()
w.b=B.af
w.c=16
w.r=B.c.j(0.08).gp(0)
d.ag(s,r,w)
w=C.bT(s,r)
v=C.L()
v.b=B.af
v.c=16
v.d=B.bO
u=this.c
t=C.ar(u,B.c,0.4)
t.toString
v.sau(new C.fR(B.A,-1.5707963267948966,4.71238898038469,B.x,C.a([u,t,u],x.O),null,null).aw(0,C.bT(s,r)))
d.ff(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
ar(d){return d.b!==this.b}}
A.Tc.prototype={
T(){return new A.bgZ($,B.bw,0,C.a([],x.X),null,null)}}
A.bgZ.prototype={
a_(){this.a1()
this.kZ()},
lf(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.PO.h(0,p.d)
w.toString
v=B.d.fC(w,new A.dBp())
u=B.k.F(p.f,v)
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
A.l6("flute",D.bQs[t]+5,1400,0.35)}p.m(new A.dBq())},
gc2T(){var w,v,u,t,s,r,q,p
if(!this.e)return new C.Jh("Press Start",0.5)
w=D.PO.h(0,this.d)
w.toString
v=B.d.fC(w,new A.dBk())
u=B.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new C.Jh("Breathe in",0.5+0.5*B.dH.av(0,p))
case 1:return new C.Jh("Hold",1)
case 2:return new C.Jh("Breathe out",1-0.5*B.dH.av(0,p))
default:return new C.Jh("Hold",0.5)}}}return new C.Jh("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gc2T(),o=x.p,n=C.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=B.hr.j(0.12+(3-u)*0.05)
n.push(C.p(q,q,B.f,q,q,new C.o(s,q,q,q,u===0?C.a([new C.ac(0,B.G,B.hr.j(0.35),B.J,40)],v):q,q,B.a6),q,t,q,q,q,q,q,t))}n.push(C.d(p.a,q,q,q,q,q,q,B.CB,q,q,q))
n.push(C.ao(0,C.d("Breaths: "+r.w,q,q,q,q,q,q,B.ko,q,q,q),q,q,q,q,q,q))
n=C.av(new C.a5(300,340,new C.an(B.A,q,B.a9,B.q,n,q),q),q,q,q)
o=C.a([],o)
for(w=J.aV(D.PO.gee(D.PO));w.C();){v=w.gU(w)
o.push(new A.dx(v,r.d===v,new A.dBn(r,v),q,B.hr,q))}w=r.e
v=w?B.ZN:B.iN
w=w?"Stop":"Start"
o.push(new A.fg(v,w,new A.dBo(r),B.bb,q))
return A.jB(B.hr,B.h5,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new A.eJ(o,q,q))}}
A.aGl.prototype={}
A.TR.prototype={
T(){return new A.bhe(new C.cq(null,x.A),C.a([],x.au),B.az,B.c)}}
A.bhe.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=C.a([C.aH(s,s,s,s,D.mf,s,s,s,new A.dNb(t,d),s,s,s,s,"Share",s)],r),p=C.bv(C.m(18),new C.eq(C.aE(s,C.b3(s,s,s,new A.bjf(t.e,t.x,s),B.eS),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dNc(t),new A.dNd(t),s,s,s,s,s,s,s,s,s,new A.dNe(t),s,s,s,s,!1,B.aa),t.d),B.ap),o=C.a([],r)
for(w=0;w<9;++w){v=D.cGl[w]
u=!t.w&&t.f.A(0,v)
o.push(new A.Ey(v,u,new A.dNf(t,v),!1,s))}u=t.r
return A.jB(B.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new C.C(B.bR,p,s),"DRAW PAD",C.v(C.a([new A.eJ(o,s,s),A.hw(B.bA,""+B.k.V(u),"Brush",30,2,new A.dNg(t),u),new A.eJ(C.a([new A.dx("Eraser",t.w,new A.dNh(t),B.F2,B.bA,s),new A.fg(B.qN,"Undo",new A.dNi(t),B.c,s),new A.fg(B.e9,"Clear",new A.dNj(t),B.c,s),new A.fg(B.Mn,"Paper",new A.dNk(t),B.c,s)],r),s,s)],r),B.m,s,B.e,B.Q,0,B.p))}}
A.bjf.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.W()
w=C.L()
w.r=this.c.gp(0)
d.aX(new C.a9(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,C.K)(w),++s){r=w[s]
q=$.W()
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=B.bO
p.e=B.fx
p.b=B.af
m=r.c
if(m.length===1){q=B.d.gK(m)
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=o.gp(o)
l=m.H()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=C.a([],t)
k=new C.aP(q.r,B.aq,null,null,o)
o.push(new C.b5(B.d.gK(m).a,B.d.gK(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new C.cR(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bx(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new C.ap(B.d.gam(m).a,B.d.gam(m).b)
o.push(q)
o=k.f
if(o!=null)q.bx(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.H()
q=k.e
u.drawPath((q==null?k.e=new C.cE(k.gbI().a.snapshot()):q).a,l)
l.delete()}}},
ar(d){return!0}}
A.UC.prototype={
T(){var w=x.S
return new A.aCg(C.aZ(w),C.aZ(w))}}
A.aCg.prototype={
a_(){this.a1()
this.aq5()},
aq5(){var w,v,u=this,t=x.N,s=C.bl(D.d1u,!0,t)
B.d.C6(s)
w=x.S
v=C.T(s).c
t=C.B(C.d9(s,0,C.dJ(u.d,"count",w),v),t)
B.d.v(t,C.d9(s,0,C.dJ(u.d,"count",w),v))
B.d.C6(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
c2O(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
A.l6("bell",12+B.o.F(d,9),150,0.35)
s.m(new A.e7A(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gK(0)
u=w.gam(0)
w=s.e
w===$&&C.c()
t=x.H
if(w[v]===w[u])C.bN(B.mM,new A.e7B(s,v,u),t)
else{s.x=!0
C.bN(Ab.El,new A.e7C(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&C.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=C.d("Moves: "+r.w,q,q,q,q,q,q,B.a6a,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+B.o.an(p,2)+" / "+o
o=x.p
p=C.v(C.a([new C.C(B.x_,C.A(C.a([u,C.d(p,q,q,q,q,q,q,C.l(q,q,w?B.aM:B.ad,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),B.m,q,B.hJ,B.j,0,q,q),q),C.D(C.ib(!0,q,q,B.y,new C.hN(v,8,8,1,q),new A.e7G(r),r.e.length,B.bm,q,B.ai,!1),1)],o),B.m,q,B.e,B.j,0,B.p)
o=C.a([],o)
for(t=0;t<3;++t){s=D.cHK[t]
o.push(new A.dx(s.b,r.d===s.a,new A.e7H(r,s),q,B.aV,q))}o.push(new A.fg(D.byv,"New game",new A.e7I(r),B.bb,q))
return A.jB(B.aV,B.h5,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new A.eJ(o,q,q))}}
A.UP.prototype={
T(){return new A.aCC(C.a([],x.t))}}
A.aCC.prototype={
c2S(d){B.d.a8(this.d)
this.w=!0
this.aWp()},
aWp(){this.d.push(B.cH.aD(4))
this.e=0
this.Ys()},
Ys(){var w=0,v=C.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ys=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:t.m(new A.ehY(t))
s=x.H
w=3
return C.b(C.bN(B.lu,null,s),$async$Ys)
case 3:r=t.d,q=C.bl(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aQ0(n)
w=7
return C.b(C.bN(new C.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$Ys)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new A.ehZ(t))
case 1:return C.h(u,v)}})
return C.i($async$Ys,v)},
aQ0(d){this.m(new A.ehW(this,d))
A.l6("marimba",D.amx[d]+5,450,0.55)
C.bN(B.Ei,new A.ehX(this),x.H)},
c2U(d){var w,v,u=this
if(!u.w||u.r)return
u.aQ0(d)
w=u.d
v=u.e
if(w[v]!==d){A.dD(90,"",600,0,0.5,"saw")
u.m(new A.ei_(u))
return}++v
u.e=v
if(v===w.length){u.m(new A.ei0(u))
C.bN(B.is,new A.ei1(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=C.d("Best: "+q.x,p,p,p,p,p,p,F.Sr,p,p,p),n=C.d(q.y,p,p,p,p,p,p,D.eYo,B.L,p,p),m=x.p,l=C.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.atp[v]
u=u.j(q.f===v?1:0.35)
t=new C.aX(28,28)
s=q.f===v?C.a([new C.ac(0,B.G,D.atp[v].j(0.8),B.J,30)],w):p
r=new C.aA(B.c.j(q.f===v?0.9:0.15),2,B.r,-1)
l.push(C.aE(p,C.dh(p,p,p,p,B.bc,new C.o(u,p,new C.bU(r,r,r,r),new C.bt(t,t,t,t),s,p,B.n),B.jl,p,p,p,p,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ei2(q,v),p,p,p,p,p,p,!1,B.aa))}o=C.av(new C.C(B.a8,C.v(C.a([o,B.ao,n,B.d5,new C.fF(1,C.lP(1,l,2,12,12,p,B.dP,!1),p)],m),B.m,p,B.b9,B.j,0,B.p),p),p,p,p)
n=q.w?"Restart":"Start"
return A.jB(B.cr,B.h5,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new A.eJ(C.a([new A.fg(B.iN,n,q.gc2R(q),B.bb,p)],m),p,p))}}
A.V9.prototype={
T(){return new A.bis(new C.aq(B.as,$.aw()))}}
A.bis.prototype={
atz(d){return C.oq(B.k.aa(d,2),C.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new A.ewf(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=C.d3(C.aJ(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new A.ewo()
l=C.aL(m,B.T,!1,m,!0,B.q,m,C.aM(),l,m,m,m,m,m,2,C.bo(m,m,m,m,m,m,m,m,!0,new C.b4(4,C.m(16),A8.w9),m,m,m,m,m,m,m,m,m,m,m,new C.b4(4,C.m(16),D.aUn),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.lg,"Bill amount",!0,!0,!1,m,m,m,m,D.eW0,"$ ",m,m,m,m,m,m,m,m),B.y,!0,m,!0,m,!1,m,B.ag,m,m,m,m,m,B.dR,m,m,m,1,m,m,!1,"\u2022",m,new A.ewk(n),m,m,m,!1,m,m,!1,m,!0,m,B.a8,m,m,m,m,m,m,m,m,m,m,m,B.aME,!0,B.a5,m,B.am,m,m,m,m)
k=B.bb.j(0.1)
s=C.m(20)
r=C.I(B.bb.j(0.35),B.r,1)
q=x.p
s=C.cK(C.a([l,B.bu,C.p(m,C.v(C.a([t.$2("Tip ("+B.k.V(n.e)+"%)","$"+n.atz(w)),t.$2("Total","$"+n.atz(v)),L.Wn,t.$3$big("Each of "+n.f+" pays","$"+n.atz(u),!0)],q),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new C.o(k,m,r,s,m,m,B.n),m,m,m,m,B.c0,m,m,m)],q),m,B.fv,m,m,B.ai,!1)
r=C.a([],q)
for(p=0;p<7;++p){o=D.csQ[p]
r.push(new A.dx(""+o+"%",B.k.V(n.e)===o,new A.ewl(n,o),m,B.bb,m))}l=n.f
return A.jB(B.bb,B.h5,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",C.v(C.a([new A.eJ(r,"TIP",m),A.hw(B.aV,""+l,"People",20,1,new A.ewm(n),l),new A.eJ(C.a([new A.dx("Round up",n.r,new A.ewn(n),m,B.aM,m)],q),m,m)],q),B.m,m,B.e,B.Q,0,B.p))}}
A.UA.prototype={
T(){var w=C.a([3,5],x.t)
return new A.bhW(w,B.cH,$,B.bw,0,C.a([],x.X),null,null)}}
A.bhW.prototype={
a_(){this.a1()
this.kZ()},
lf(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(B.o.F(B.k.bw(t*14),2)===0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aD(6)+1)
u.f=t}if(u.r<=0){t=C.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aD(6)+1)
u.f=t
A.a6Z("snare",0.5)}u.m(new A.e6f())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hc()
u.w=t
u.x=t?0:3.141592653589793
A.l6("bell",24,400,0.5)}u.m(new A.e6g())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=C.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new A.bb2(v,o.r>0,n))}u=C.aE(n,C.av(C.c5(B.fI,m,B.bx,18,18),n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e68(o),n,n,n,n,n,n,!1,B.aa)}else if(m==="coin"){t=B.k.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=C.I(B.dm,B.r,6)
s=C.a([new C.ac(0,B.G,B.aM.j(0.4),B.J,30)],x.V)
u=C.aE(n,C.av(C.e9(B.A,C.p(B.A,C.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.eVg,n,n,n),B.f,n,n,new C.o(n,n,v,n,s,D.e47,B.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e69(o),n,n,n,n,n,n,!1,B.aa)}else{m=o.as
u=C.aE(n,C.av(C.v(C.a([C.d(m===0?"?":""+m,n,n,n,n,n,n,D.eLk,n,n,n),C.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,B.ko,n,n,n)],x.p),B.m,n,B.e,B.Q,0,B.p),n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e6a(o),n,n,n,n,n,n,!1,B.aa)}m=x.p
v=C.a([],m)
for(r=0;r<3;++r){q=D.cVW[r]
v.push(new A.dx(q.b,o.d===q.a,new A.e6b(o,q),q.c,B.bz,n))}v=C.a([new A.eJ(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(A.hw(B.bz,""+s,"Dice",4,1,new A.e6c(o),s))}if(o.d==="num"){s=o.z
s=A.hw(B.bz,""+s,"From",100,1,new A.e6d(o),s)
p=o.Q
B.d.v(v,C.a([s,A.hw(B.bz,""+p,"To",1000,2,new A.e6e(o),p)],m))}return A.jB(B.bz,B.h5,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",C.v(v,B.m,n,B.e,B.Q,0,B.p))}}
A.bb2.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(B.cH.ai()-0.5)*0.6
else w=0
v=C.m(22)
u=C.a([new C.ac(0,B.G,B.w.j(0.4),B.cw,14)],x.V)
t=C.a([],x.p)
for(s=D.dci.h(0,B.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new C.bK(s[q],p,p,C.p(p,p,B.f,p,p,K.a9h,p,18,p,p,p,p,p,18),p))
return C.eA(B.A,w,C.p(p,new C.an(B.W,p,B.a9,B.q,t,p),B.f,p,p,new C.o(B.c,p,p,v,u,p,B.n),p,100,p,p,B.by,p,p,100),p)}}
A.aJq.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buA.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bqZ()}}
A.aJJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buF.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bri()}}
A.aKd.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buP.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brO()}}
A.aKH.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.bv0.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bsh()}}
A.b4I.prototype={
B(d){var w,v=this,u=null,t=v.c,s=D.aB8.h(0,t)
$.aq8=s==null?"music":s
s=v.d
w=x.p
t=C.a([C.aH(u,u,u,u,F.ov,u,u,u,new A.cpc(d),u,u,u,u,u,u),C.D(C.d(t,u,1,B.a2,u,u,u,C.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,B.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
B.d.v(t,v.w)
t.push(C.aH(u,u,u,u,C.V(B.Mr,s,u,u,u,22),u,u,u,new A.cpd(v,d),u,u,u,u,"How to play",u))
w=C.a([new C.C(D.bqb,C.A(t,B.m,u,B.e,B.j,0,u,u),u),C.D(v.f,1)],w)
w.push(C.p(u,v.r,B.f,u,u,new C.o(D.DJ,u,new C.bU(new C.aA(B.c.j(0.08),1,B.r,-1),B.Z,B.Z,B.Z),u,u,u,B.n),u,u,u,u,B.Ah,u,u,1/0))
return C.cc(u,B.bW,C.bq(!0,C.v(w,B.m,u,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),u,!1,!1,u,u)}}
A.dx.prototype={
B(d){var w,v,u,t=this,s=null,r=C.m(999),q=t.d,p=q?t.r.j(0.22):B.c.j(0.06),o=q?t.r:B.c.j(0.12)
o=C.I(o,B.r,q?1.6:1)
w=x.p
v=C.a([],w)
u=t.f
if(u!=null)B.d.v(v,C.a([C.V(u,q?t.r:B.aQ,s,s,s,16),B.ea],w))
v.push(C.d(t.c,s,s,s,s,s,s,C.l(s,s,q?B.c:B.ad,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new C.C(D.wU,C.aE(s,C.dh(s,C.A(v,B.m,s,B.e,B.Q,0,s,s),s,s,B.bc,new C.o(p,s,o,r,s,s,B.n),B.eL,s,s,s,B.h2,s,s,s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.cp8(t),s,s,s,s,s,s,!1,B.aa),s)}}
A.eJ.prototype={
B(d){var w=null,v=C.a([],x.p),u=this.d
if(u!=null)v.push(new C.a5(54,w,C.d(u,w,w,w,w,w,w,C.l(w,w,B.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,B.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(C.D(C.ci(C.A(this.c,B.m,w,B.e,B.j,0,w,w),B.q,w,B.y,w,w,w,w,B.aX),1))
return new C.C(B.cK,C.A(v,B.m,w,B.e,B.j,0,w,w),w)}}
A.atZ.prototype={
B(d){var w,v,u,t=this,s=null,r=C.d(t.c,s,s,s,s,s,s,C.l(s,s,B.c.j(0.7),s,s,s,s,s,s,s,s,11.5,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),q=t.w
q=C.aty(d).cCV(q,B.bE,q.j(0.2),q,3.5)
w=t.d
v=t.f
u=t.r
q=C.D(C.a8H(C.kQ(s,s,s,u,v,t.e,B.k.D(w,v,u)),q),1)
u=t.x
return new C.a5(s,34,C.A(C.a([new C.a5(78,s,r,s),q,new C.a5(38,s,C.d(u==null?B.k.aa(w,1):u,s,s,s,s,s,s,A4.HZ,B.dK,s,s),s)],x.p),B.m,s,B.e,B.j,0,s,s),s)}}
A.fg.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new C.C(D.wU,C.aF(!1,B.a1,!0,C.m(12),C.aK(!1,C.m(12),!0,new C.C(Ai.aeV,C.A(C.a([C.V(w.c,u,v,v,v,17),B.ea,C.d(w.d,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new A.cp7(w),v,v,v,v,v,v,v),B.f,t,0,v,v,v,v,v,B.ae),v)}}
A.Ey.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.eJP:u
w=t?B.c:B.b7
w=C.I(w,B.r,t?2.5:1)
return C.aE(u,C.dh(u,u,u,u,B.bc,new C.o(p,u,w,u,t?C.a([new C.ac(0,B.G,v.c.j(0.6),B.J,10)],x.V):u,q,B.a6),B.hV,u,r,D.aeJ,u,u,u,s),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.cpe(v),u,u,u,u,u,u,!1,B.aa)}}
A.mp.prototype={
a3r(d,e){var w=C.de()
w.sez(C.cL(C.dA(0,0,0,d,0,0),new A.cp9(this,w,e)))
this.fi$.push(w.bb())},
kZ(){var w=this,v=w.q3(new A.cpb(w))
v.j1(0)
w.fh$!==$&&C.aQ()
w.fh$=v}}
A.a9G.prototype={
bul(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,C.K)(w),++q)for(p=B.d.gah(w[q]);p.C();){o=p.gU(0)
n=J.a7(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&C.aQ()
g.z=s
g.Q!==$&&C.aQ()
g.Q=t
g.as!==$&&C.aQ()
g.as=r
g.at!==$&&C.aQ()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,C.K)(w),++q){for(v=B.d.gah(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gU(0)
n=J.a7(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&C.aQ()
g.ax=m
w=g.bxu()
g.ay!==$&&C.aQ()
g.ay=w},
bxu(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,C.K)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.q(s[q],1)+J.q(s[p],1))/2*3.141592653589793/180
n=J.q(s[q],0)
m=Math.cos(o)
l=J.q(s[q],1)
k=J.q(s[p],0)
j=Math.cos(o)
r+=n*m*J.q(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
EN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
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
A.a9H.prototype={
cz_(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
if(r.EN(0,w,e)){if(t!=null){q=r.ax
q===$&&C.c()
p=t.ax
p===$&&C.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
A.uI.prototype={}
A.Ob.prototype={}
A.xA.prototype={}
A.Oa.prototype={
fd(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.amt[w.aD(7)]
w=w.hc()?0:12
u=B.o.F(t.c++,3)===0?"flute":"bell"
A.l6(u,v+w-12,2200,0.1)}}
A.U6.prototype={
T(){var w=$.aw()
return new A.aBE(new C.cq(null,x.A),new C.aq(B.as,w),new A.Oa(B.cH),D.cXP,B.at,D.a1d,$,B.bw,0,C.a([],x.X),null,null)}}
A.aBE.prototype={
a_(){var w,v=this
v.a1()
v.kZ()
v.a.toString
w=$.h2n
if(w==null)w=$.h2n=A.crJ()
w.bz(new A.dSD(v),x.P)},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.brq()},
cn8(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=C.a([],x.gm)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,C.K)(v),++s){r=v[s]
q=C.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,C.K)(p),++n)q.push(new A.dS5(p[n]).$0())
w.push(q)}this.w=w},
gUM(){var w=this.fy
return w.A(0,B.at)?100:Math.min(w.a,w.b)*0.43},
arg(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=B.k.D(f,1,16)
w.Q=w.as=0},
avf(d){var w
this.fx=d
w=d.ax
w===$&&C.c()
this.arg(d.x,d.w,105/Math.max(w,3))
C.eO()
A.l6("bell",(B.d.cG(D.a0O,d.c)+1)*3+12,900,0.45)
A.dD(300,"",280,1.4,0.15,"tri")},
lf(d){var w,v,u,t,s,r,q,p=this
p.f.fd(0,d,p.db)
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
c3y(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,B.at))return null
w=n.fy
v=n.gUM()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gUM()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(B.k.D(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cz_((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
c3x(d){var w=this,v=w.r
if(v==null||B.a.i(d).length===0){w.m(new A.dS3(w))
return}w.m(new A.dS4(w,v,B.a.i(d).toLowerCase()))},
bJY(){var w=null,v=this.c
v.toString
C.c9(w,w,!0,w,new A.dS1(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=C.a([C.aH(n,n,n,n,D.bBa,n,n,n,o.gbJX(),n,n,n,n,"Earth facts",n),C.aH(n,n,n,n,D.mf,n,n,n,new A.dSo(o,d),n,n,n,n,"Share",n)],l),j=C.cm(new A.dSp(o,m)),i=B.c.j(0.06)
i=C.a([C.aL(n,B.T,!1,n,!0,B.q,n,C.aM(),o.e,n,n,n,n,n,2,C.bo(n,new C.b4(4,C.m(14),B.Z),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,I.Cz,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bJ6,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gc3w(),n,n,n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,B.iC,!0,B.a5,n,B.am,n,n,n,n)],l)
if(o.id.length!==0){w=C.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
w.push(new A.dx(s.a,!1,new A.dSq(o,s),B.mT,B.aV,n))}i.push(new C.C(B.it,new C.a5(n,38,C.cK(w,n,n,n,n,B.aX,!1),n),n))}i.push(B.ao)
w=C.a([new A.dx("Whole Earth",!1,new A.dSu(o),B.hf,B.aV,n)],l)
for(v=D.aB7.gdK(D.aB7),v=v.gah(v);v.C();){u=v.gU(v)
w.push(new A.dx(u.a,!1,new A.dSv(o,u),n,B.aV,n))}w.push(new A.dx("Random",!1,new A.dSw(o),B.m7,B.aV,n))
i.push(new A.eJ(w,"GO TO",n))
w=o.z
i.push(A.hw(B.aV,B.k.aa(w,1)+"x","Zoom",16,0.8,new A.dSx(o),w))
w=o.dy
i.push(A.hw(B.cr,B.a.aV(B.o.u(B.k.bw(w)),2,"0")+":00","Time",24,0,new A.dSy(o),w))
w=o.fr
i.push(A.hw(B.bb,o.clV(),"Season",365,0,new A.dSz(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?B.ly:D.Fj
i.push(new A.eJ(C.a([new A.dx("Spin",w,new A.dSA(o),D.bwn,B.aV,n),new A.dx("Night",v,new A.dSB(o),B.uX,B.aV,n),new A.dx("Borders",u,new A.dSr(o),D.bwr,B.aV,n),new A.dx("Names",r,new A.dSs(o),L.Mv,B.aV,n),new A.dx("Music",q,new A.dSt(o),p,B.aV,n)],l),n,n))
return A.jB(B.aV,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",C.v(i,B.m,n,B.e,B.Q,0,B.p))},
clV(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.au1[u])v=u
return B.i7[v]+" "+(B.k.bw(w-D.au1[v])+1)},
c3v(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&C.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new H.m9(1,B.o.F((B.d.cG(D.a0O,t)+1)*47,360),0.55,1).im()
r=new A.dS_()
q=C.m(20)
p=C.I(s.j(0.6),B.r,1)
o=x.p
n=C.A(C.a([C.p(j,j,B.f,j,j,new C.o(s,j,j,j,j,j,B.a6),j,10,j,j,j,j,j,10),B.ab,C.D(C.d(d.a,j,1,B.a2,j,j,j,B.dI,j,j,j),1),C.aH(j,j,j,j,B.FC,j,j,j,new A.dRZ(this),j,j,j,j,j,B.c7)],o),B.m,j,B.e,B.j,0,j,j)
m=d.d
t=C.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,B.hl,j,j,j)
m=D.db0.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=C.A(C.a([m,B.ab,r.$2("PEOPLE",l?A.fjk(v):"\u2014")],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("SIZE",A.G0(i)+" km\xb2")
if(l)m=(w<10?B.k.aa(w,1):A.G0(w))+" per km\xb2"
else m="\u2014"
m=C.A(C.a([i,B.ab,r.$2("CROWDING",m)],o),B.m,j,B.e,B.j,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?B.k.aa(u,3):B.k.aa(u,1))+"% of people")
l=d.f
k=d.r
return C.p(j,C.v(C.a([n,t,B.P,v,B.P,m,B.P,C.A(C.a([i,B.ab,r.$2("ECONOMY",l>0?"$"+A.fjk(l*1e6)+" \xb7 "+k:k)],o),B.m,j,B.e,B.j,0,j,j)],o),B.F,j,B.e,B.Q,0,B.p),B.f,j,j,new C.o(D.UG,j,p,q,j,j,B.n),j,j,j,j,D.afe,j,j,j)}}
A.bdg.prototype={
a6(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.W(),d7=C.L()
d7.r=D.zN.gp(0)
d8.aX(new C.a9(0,0,0+d4,0+d5),d7)
w=new C.eT()
w.dI(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ai()
t=w.ai()
s=w.ai()
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.25+w.ai()*0.5).gp(0)
q=r.H()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new C.u(d4,d5)
o=d2.f
u=C.L()
t=x.O
u.sau(new C.bS(B.A,0.5,B.x,d3,0,C.a([B.K,B.aV.j(0.35),B.K],t),D.cJf,d3).aw(0,C.bT(p,o*1.1)))
d8.ag(p,o*1.05,u)
n=C.bT(p,o)
u=C.L()
u.sau(D.e4b.aw(0,n))
d8.ag(p,o,u)
J.bA(d7.save())
u=x.v
d6=new C.aP(d6.r,B.aq,d3,d3,C.a([],u))
d6.E(new C.kC(n))
d8.tG(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=C.L()
g.b=B.af
m=g.c=0.7
g.r=B.c.j(0.1).gp(0)
f=new A.d9i(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbI().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aP(a2.r,B.aq,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbI().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.W()
a3=C.a([],u)
d=new C.aP(a2.r,B.aq,d3,d3,a3)
a3.push(new C.b5(s,r))}else{s=new C.ap(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.bx(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.H()
d6=d.e
d7.drawPath((d6==null?d.e=new C.cE(d.gbI().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=C.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=B.o.F((B.d.cG(D.a0O,a7.c)+1)*47,360)
$.W()
b0=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a3=a8?0.35:0.5
b0.r=new H.m9(1,a9,a3,a8?1:0.62).im().gp(0)
b1=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
b1.b=B.af
b1.c=a8?2.2:m
b1.e=B.fx
b1.r=(a8?B.c:B.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,C.K)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.W()
b7=C.a([],u)
b8=new C.aP(b6.r,B.aq,d3,d3,b7)
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
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new C.ap(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.bx(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new C.bE()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.bx(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbI().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.H()
b6=b8.e
d7.drawPath((b6==null?b8.e=new C.cE(b8.gbI().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,C.K)(a5),++b3){d=a5[b3]
$.W()
s=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
s.b=B.af
s.c=5
s.r=B.c.j(0.25).gp(0)
s.z=B.qX
q=s.H()
s=d.e
d7.drawPath((s==null?d.e=new C.cE(d.gbI().a.snapshot()):s).a,q)
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
c9=A.hB_(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbc(b2)
c9.a6(d8,new C.u(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=B.k.D(k*c0+j*c1*c4,-1,1)
$.W()
u=C.L()
u.sau(new C.bS(B.A,0.5,B.x,d3,0,C.a([B.K,B.K,D.b3C.j(0.78)],t),D.cYa,d3).aw(0,C.bT(new C.u(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ag(p,o,u)}$.W()
d4=C.L()
d4.sau(new C.bS(B.A,0.5,B.x,d3,0,C.a([B.K,B.w.j(0.4)],t),D.d8z,d3).aw(0,n))
d8.ag(p,o,d4)
d7.restore()
d7=C.L()
d7.b=B.af
d7.c=1.4
d7.r=B.fZ.j(0.5).gp(0)
d8.ag(p,o,d7)},
ar(d){return!0}}
A.aJP.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.aJQ.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brp()}}
A.brt.prototype={}
A.Vc.prototype={
T(){return new A.biv()}}
A.biv.prototype={
gaPB(){var w=this.d
if(w===$)w=this.d=B.cH.aD(16)
return w},
B(d){var w=null,v=C.eC(w,w,w,!0,!0,D.zN,w,1,!0,w,0,!1,w,!1,w,w,C.aH(w,w,w,w,D.akY,w,w,w,new A.ex2(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fg8,w,w,w,1,w,!0),u=C.m(18),t=B.aV.j(0.1),s=C.I(B.aV.j(0.35),B.r,1),r=x.p
return C.cc(v,D.zN,C.cK(C.a([C.p(w,C.A(C.a([D.bzT,B.aw,C.D(C.d(D.cMU[this.gaPB()],w,w,w,w,w,w,D.a6x,w,w,w),1),C.aH(w,w,w,w,D.bK6,w,w,w,new A.ex3(this),w,w,w,w,"Another fact",w)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new C.o(t,w,s,u,w,w,B.n),w,w,w,w,B.by,w,w,w),B.ay,C.cm(new A.ex4())],r),w,B.WZ,w,w,B.ai,!1),w,!1,!1,w,w)}}
A.UY.prototype={
T(){return A.hBr()}}
A.bii.prototype={
cdY(d){var w=d.c,v=A.hBt(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new C.u(Math.cos(t)*v,Math.sin(t)*v)},
a_(){this.a1()
this.kZ()},
lf(d){var w,v,u,t=this
t.e.fd(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cdY(w)
u=new C.u(-v.a,-v.b).aK(0,t.w)
v=C.l7(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gc3z(){var w=this.ch
return new C.u(w.a/2,w.b/2).ae(0,this.x)},
c3D(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.Bt[s]
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
aWL(d){this.m(new A.epb(this,d))
C.eO()
A.l6("bell",D.d8K[B.o.F(B.d.cG(D.Bt,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=C.a([C.aH(m,m,m,m,D.mf,m,m,m,new A.epm(n,d),m,m,m,m,"Share",m)],k),i=C.cm(new A.epn(n,l)),h=C.a([new A.dx("All",!1,new A.epo(n),B.ZW,B.aM,m)],k)
for(w=0;w<10;++w){v=D.Bt[w]
h.push(new A.dx(v.a,n.z===v,new A.epp(n,v),m,C.b0(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?B.k.aa(s,0)+" d/s":""+B.k.V(s)+" d/s"
t=A.hw(B.aM,s,"Time",1,0,new A.epq(n),u/t)
u=n.w
u=A.hw(B.aM,B.k.aa(u,1)+"x","Zoom",9,0.5,new A.epr(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?B.ly:D.Fj
return A.jB(B.aM,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",C.v(C.a([new A.eJ(h,"GO TO",m),t,u,new A.eJ(C.a([new A.dx("Orbits",s,new A.eps(n),m,B.aM,m),new A.dx("Names",r,new A.ept(n),m,B.aM,m),new A.dx("Asteroids",q,new A.epu(n),m,B.aM,m),new A.dx("Music",p,new A.epv(n),o,B.aM,m)],k),m,m)],k),B.m,m,B.e,B.Q,0,B.p))},
c3A(d){var w,v,u,t,s,r=null,q=C.b0(d.z),p=d.c,o=p*8.317,n=new A.ep9(),m=C.m(20),l=C.I(q.j(0.6),B.r,1),k=C.p(r,r,B.f,r,r,new C.o(q,r,r,r,r,r,B.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=C.A(C.a([k,B.ab,C.D(C.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,B.kS,r,r,r),1),C.aH(r,r,r,r,B.FC,r,r,r,new A.ep8(this),r,r,r,r,r,B.c7)],w),B.m,r,B.e,B.j,0,r,r)
k=C.d(d.y,r,r,r,r,r,r,D.Id,r,r,r)
v=n.$2("WIDTH",A.G0(d.d*2)+" km")
u=p===0
p=C.A(C.a([v,B.ab,n.$2("FROM THE SUN",u?"\u2014":C.t(p)+" AU ("+A.G0(p*149.6)+" million km)")],w),B.m,r,B.e,B.j,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new A.epa().$1(v))
t=d.f
v=C.A(C.a([v,B.ab,n.$2("ONE DAY",t>=48?B.k.aa(t/24,0)+" Earth days":B.k.aa(t,1)+" hours")],w),B.m,r,B.e,B.j,0,r,r)
t=d.r
s=t>50?0:1
s=C.A(C.a([n.$2("GRAVITY",C.t(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+B.k.aa(50*t/9.81,s)+" kg"),B.ab,n.$2("TEMPERATURE",""+B.o.V(d.x)+"\xb0C")],w),B.m,r,B.e,B.j,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?B.k.aa(o,1)+" minutes":B.k.aa(o/60,1)+" hours"
return C.p(r,C.v(C.a([j,B.au,k,B.P,p,B.P,v,B.P,s,B.P,C.A(C.a([t,B.ab,n.$2("SUNLIGHT TAKES",i)],w),B.m,r,B.e,B.j,0,r,r)],w),B.F,r,B.e,B.Q,0,B.p),B.f,r,r,new C.o(D.UG,r,l,m,r,r,B.n),r,r,r,r,D.afe,r,r,r)}}
A.bpx.prototype={
a6(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.W()
w=C.L()
w.r=D.zN.gp(0)
a7.aX(new C.a9(0,0,0+a5,0+a6),w)
v=new C.eT()
v.dI(8)
for(w=a7.a,u=0;u<110;++u){t=v.ai()
s=v.ai()
r=v.ai()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.2+v.ai()*0.5).gp(0)
p=q.H()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gc3z()
n=a5.w
if(a5.as)for(a6=B.d.gah(D.Bt),t=new C.hc(a6,new A.eRd()),s=o.a,r=o.b;t.C();){q=a6.gU(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.b=B.af
m.c=1
m.r=B.c.j(0.12).gp(0)
p=m.H()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.c.j(0.5).gp(0)
p=l.H()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=A.hBs(B.d.gK(D.Bt))*Math.sqrt(n)*1.4
a6=i*3.2
t=C.L()
s=x.O
t.sau(new C.bS(B.A,0.5,B.x,a4,0,C.a([B.aM.j(0.5),B.K],s),a4,a4).aw(0,C.bT(o,a6)))
a7.ag(o,a6,t)
t=C.L()
t.sau(D.e45.aw(0,C.bT(o,i)))
a7.ag(o,i,t)
if(a5.at){h=A.h3Z("Sun",10.5,B.ad)
h.a6(a7,o.ae(0,new C.u(-h.b.c/2,i+4)))}for(a6=B.d.gah(D.Bt),t=new C.hc(a6,new A.eRe()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gU(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=C.b0(l.z)
d=l.a
if(d==="Saturn"){J.bA(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=C.cr(B.J,j*1.3,j*4.2)
a1=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a1.b=B.af
a1.c=j*0.45
a1.r=B.bJ.j(0.55).gp(0)
p=a1.H()
w.drawOval(C.c4(a0),p)
p.delete()
w.restore()}a0=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=e.j(0.3).gp(0)
a0.z=B.qX
p=a0.H()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a1=C.ar(e,B.w,0.55)
a1.toString
a0.sau(new C.bS(N.q5,0.5,B.x,a4,0,C.a([B.c,e,a1],s),E.a0r,a4).aw(0,C.bT(new C.u(g,f),j)))
p=a0.H()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
l.b=B.af
l.c=2
l.r=B.c.gp(0)
p=l.H()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a3.r=B.c.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.cRQ[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a3.r=B.ad.gp(0)
p=a3.H()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=A.h3Z(d,10.5,B.ad)
h.a6(a7,new C.u(g+-h.b.c/2,f+(j+4)))}}},
ar(d){return!0}}
A.U7.prototype={
T(){var w=x.i
return new A.aBF(new A.Oa(B.cH),C.c1(5,0,!1,w),C.c1(5,0,!1,w),C.c1(5,null,!1,x.cD),B.J,B.J,C.a([],x.g),$,B.bw,0,C.a([],x.X),null,null)}}
A.aBF.prototype={
cqg(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
c3C(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.dU3
s.cy=new C.u(s.ay,0)
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
A.dD(150,"",400,0,0.5,"noise")
A.dD(90,"",300,1.5,0.6,"sine")
s.m(new A.dSH())},
a_(){this.a1()
this.kZ()},
lf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fd(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.y5[r]
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
if(q.a!=="Sun")A.dD(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(B.d.d8(s,new A.dT9()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
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
A.dD(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||B.d.gam(v).aB(0,i.cx).gcl()>120)v.push(i.cx)
if(v.length>700)B.d.cw(v,0)
if(i.cx.gcl()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bIg()
else n=n==="weight"?p.cxj():p.bAC()
w=x.p
v=C.a([],w)
for(u=0;u<3;++u){t=D.d6_[u]
v.push(new A.dx(t.b,p.d===t.a,new A.dSW(p,t),t.c,B.cy,o))}v=C.a([new A.eJ(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=C.a([new A.dx("Hammer",!s,new A.dSX(p),W.Fe,B.cy,o),new A.dx("Feather",s,new A.dSY(p),L.M4,B.cy,o),new A.dx(q,r,new A.dT1(p),B.F3,B.aV,o)],w)
q=p.w
B.d.v(v,C.a([new A.eJ(r,o,o),A.hw(B.cy,""+B.k.V(q*100)+"%","Slow motion",1,0.05,new A.dT2(p),q),new A.eJ(C.a([new A.fg(B.v_,"Drop!",new A.dT3(p),B.bb,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=A.hw(B.cy,""+B.k.V(s)+" kg","Your weight",120,20,new A.dT4(p),s)
r=p.ax
B.d.v(v,C.a([s,A.hw(B.cy,""+B.k.V(r*100)+" cm","Your jump",1.2,0.1,new A.dT5(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=A.hw(B.cy,B.k.aa(s,1)+" km/s","Speed",13,0,new A.dT6(p),s)
r=p.ch
B.d.v(v,C.a([s,A.hw(B.cy,B.k.aa(r,1)+"x out","View",8,0.5,new A.dT7(p),r),new A.eJ(C.a([new A.fg(B.mU,"Fire!",p.gc3B(),B.bb,o),new A.fg(B.v_,"Falls",new A.dT8(p),B.c,o),new A.fg(B.qC,"Orbit 7.7",new A.dSZ(p),B.c,o),new A.fg(D.bzi,"Oval 9",new A.dT_(p),B.c,o),new A.fg(B.AY,"Escape",new A.dT0(p),B.c,o)],w),o,o)],w))}return A.jB(B.cy,B.h5,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",C.v(v,B.m,o,B.e,B.Q,0,B.p))},
bIg(){return new C.C(D.bl8,C.cm(new A.dSG(this)),null)},
cxj(){var w,v,u,t=null,s=[D.erc,D.esy,D.esG,D.esZ,D.esE,D.et3,D.erK,D.etn,D.esj],r=x.p,q=C.a([D.f4B,B.S],r)
for(w=0;w<9;++w){v=s[w]
u=C.b0(v.c)
q.push(new C.C(B.cK,new C.cs(B.aX,B.e,B.j,B.m,t,B.p,t,0,C.a([new C.a5(62,t,new C.x(v.a,t,new C.F(!0,u,t,t,t,t,12.5,B.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new C.bG(1,B.bn,new C.AJ(new A.dSI(this,v),t),t)],r),t),t))}q.push(B.au)
q.push(D.f6L)
return C.cK(q,t,B.j4,t,t,B.ai,!1)},
bAC(){return C.cm(new A.dSE(this))}}
A.b8w.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.W(),e=C.L()
e.r=D.zN.gp(0)
d.aX(new C.a9(0,0,0+h,0+g),e)
w=new C.eT()
w.dI(2)
for(e=d.a,v=0;v<80;++v){u=w.ai()
t=w.ai()
s=w.ai()
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.2+w.ai()*0.5).gp(0)
q=r.H()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=C.L()
e.sau(new C.bS(B.A,0.5,B.x,i,0,C.a([B.K,B.aV.j(0.35),B.K],x.O),D.cZ1,i).aw(0,C.bT(g,p*1.1)))
d.ag(g,p*1.06,e)
e=C.L()
e.sau(D.e4_.aw(0,C.bT(g,p)))
d.ag(g,p,e)
o=g.ae(0,new C.u(0,-p))
f=f.r
e=x.v
n=new C.aP(f,B.aq,i,i,C.a([],e))
u=o.a
t=o.b
s=t+3
n.E(new C.b5(u-16,s))
n.E(new C.ap(u,t-400*h-4))
n.E(new C.ap(u+16,s))
n.E(new C.bE())
s=C.L()
s.r=B.ak.gp(0)
d.aN(n,s)
s=o.ae(0,new C.u(0,-400*h-6))
u=C.L()
u.r=B.c.gp(0)
d.ag(s,4,u)
u=j.e
if(u.length>1){e=C.a([],e)
m=new C.aP(f,B.aq,i,i,e)
f=g.a
t=g.b
m.E(new C.b5(f+B.d.gK(u).a*h,t+B.d.gK(u).b*h))
for(u=C.d9(u,1,i,C.T(u).c),s=u.$ti,u=new C.bW(u,u.gM(0),s.k("bW<aj.E>")),s=s.k("aj.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new C.ap(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.bx(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.W()
f=C.L()
f.b=B.af
f.c=2.4
f.d=B.bO
f.r=B.cy.j(0.9).gp(0)
d.aN(m,f)}if(j.f){f=j.d
k=g.ae(0,new C.u(f.a*h,f.b*h))
h=C.L()
h.r=B.cy.j(0.4).gp(0)
h.z=I.mj
d.ag(k,7,h)
h=C.L()
h.r=B.c.gp(0)
d.ag(k,4,h)}},
ar(d){return!0}}
A.UQ.prototype={
T(){return new A.bif(new C.cq(null,x.A),$,B.bw,0,C.a([],x.X),null,null)}}
A.bif.prototype={
a_(){this.a1()
this.kZ()},
lf(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.OK[l.e],i=D.OK[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=C.a([C.aH(k,k,k,k,D.mf,k,k,k,new A.ei5(l,d),k,k,k,k,"Share",k)],u)
s=C.D(C.b3(k,k,k,new A.bp5(f,g,v,k),B.eS),1)
r=g.a
q=v<10?B.k.aa(v,1):A.G0(v)
p=f.a
q=C.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,B.iU,B.L,k,k)
o=A.G0(v*v*v)
n=B.a.c8(p,"s")?"":"s"
h=C.v(C.a([s,C.p(k,C.v(C.a([q,B.au,C.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,S.a5V,B.L,k,k),B.bB,C.d(p+": "+A.G0(w*2)+" km wide. "+r+": "+A.G0(h*2)+" km wide.",k,k,k,k,k,k,S.Si,B.L,k,k)],u),B.m,k,B.e,B.j,0,B.p),B.f,k,k,k,k,k,k,k,D.bnj,k,k,1/0)],u),B.m,k,B.e,B.j,0,B.p)
r=C.a([],u)
for(m=0;m<10;++m){w=D.OK[m]
r.push(new A.dx(w.a,l.e===m,new A.ei6(l,m),k,C.b0(w.c),k))}w=C.a([],u)
for(m=0;m<10;++m){s=D.OK[m]
w.push(new A.dx(s.a,l.f===m,new A.ei7(l,m),k,C.b0(s.c),k))}return A.jB(B.bY,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.eq(h,l.d),"SIZE COMPARE",C.v(C.a([new A.eJ(r,"FIRST",k),new A.eJ(w,"SECOND",k)],u),B.m,k,B.e,B.Q,0,B.p))}}
A.bp5.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.W()
w=C.L()
w.r=D.Vg.gp(0)
d.aX(new C.a9(0,0,0+h,0+g),w)
v=new C.eT()
v.dI(6)
for(w=d.a,u=0;u<70;++u){t=v.ai()
s=v.ai()
r=v.ai()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.2+v.ai()*0.4).gp(0)
p=q.H()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new C.u(h,g)
w=new A.ePm(d)
t=this.c
w.$3(m,o,C.b0(t.c))
s=o-n
l=new C.u(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,C.b0(s.c))
w=C.L()
w.b=B.af
w.c=1.4
w.r=B.ad.gp(0)
d.ag(l,n+3,w)
k=C.ih(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.eRE,s.a),B.a5,B.ci,i,B.eq,B.cg)
k.eR()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbc(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbc(g)-6
h=g}k.a6(d,l.ae(0,new C.u(-w/2,h)))
j=C.ih(i,i,i,i,C.dn(i,i,i,i,i,i,i,i,i,D.eUS,t.a),B.a5,B.ci,i,B.eq,B.cg)
j.eR()
t=j.b
h=t.c
t=t.a.c
j.a6(d,m.ae(0,new C.u(-h/2,-t.gbc(t)/2)))},
ar(d){return!0}}
A.aJR.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buH.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brr()}}
A.aKp.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buV.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bs_()}}
A.aKs.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buX.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bs2()}}
A.OD.prototype={}
A.Ta.prototype={
T(){return A.hBp()}}
A.bgY.prototype={
a_(){this.a1()
this.kZ()},
lf(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fd(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
A.dD(70,"",500,0.3,0.5,"sine")}}B.d.bn(w,new A.dAR())},
aWM(d){var w,v,u,t=this.Q
if(t.A(0,B.at))return
w=this.gb4p()
v=d.aB(0,new C.u(t.a/2,t.b*0.42))
u=B.k.D(v.gcl()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new A.OD(t,u,1.2,new C.wK(1,30+B.cH.ai()*40,0.9,0.7).im()))
A.l6("bell",60+B.k.V(12-u)*2,400,0.35)},
gb4p(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/B.k.D(m.length===0?3:new C.J(m,new A.dAF(),C.T(m).k("J<1,O>")).fC(0,B.wf),1.0001,99))
m=x.p
w=C.a([C.aH(n,n,n,n,D.mf,n,n,n,new A.dAG(o,d),n,n,n,n,"Share",n)],m)
v=C.cm(new A.dAH(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?B.k.aa(s,0)+" Suns":A.fjk(s)+" Suns"
t=A.hw(B.bz,s,"Mass",1,0,new A.dAJ(o),u/t)
u=C.a([new A.dx("Star (10)",!1,new A.dAK(o),n,B.bz,n),new A.dx("Cygnus X-1 (21)",!1,new A.dAL(o),n,B.bz,n),new A.dx("Milky Way core (4 million)",!1,new A.dAM(o),n,B.bz,n),new A.dx("M87 (6.5 billion)",!1,new A.dAN(o),n,B.bz,n)],m)
s=o.w
r=o.x
q=o.y
p=q?B.ly:D.Fj
return A.jB(B.bz,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",C.v(C.a([t,new A.eJ(u,"LIKE",n),new A.eJ(C.a([new A.dx("Glowing ring",s,new A.dAO(o),n,B.bz,n),new A.dx("Bent light",r,new A.dAP(o),n,B.bz,n),new A.dx("Music",q,new A.dAQ(o),p,B.bz,n),new A.fg(B.jP,"Clear",new A.dAI(o),B.c,n)],m),n,n)],m),B.m,n,B.e,B.Q,0,B.p))},
acO(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.eNJ,w,w,w),B.bB,C.d(e,w,2,w,w,w,w,G.S6,B.L,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)}}
A.b7V.prototype={
a6(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.W()
w=C.L()
w.r=D.bb6.gp(0)
b2.aX(new C.a9(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new C.u(w,v)
t=this.b
s=t.gb4p()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,C.K)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new C.u(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+B.k.D(o/h,0,n)
i=new C.u(w+k/h*g,v+j/h*g)}}k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=B.c.j(0.6).gp(0)
f=k.H()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=C.L()
b0.b=B.af
b0.c=2
b0.r=B.c.j(0.25).gp(0)
b0.z=F.PT
b2.ag(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=C.ar(B.ww,B.fA,d)
n.toString
k=Math.cos(a4)
$.W()
j=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.H()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=n.j(b1).gp(0)
f=k.H()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.W()
b1=C.L()
b1.sau(new C.bS(B.A,0.5,B.x,null,0,C.a([B.w,B.w.j(0)],x.O),D.cEy,null).aw(0,C.bT(u,b0)))
b2.ag(u,b0,b1)
b1=C.L()
b1.r=B.w.gp(0)
b2.ag(u,s,b1)
b1=C.L()
b1.b=B.af
b1.c=1
b1.r=B.bz.j(0.55).gp(0)
b2.ag(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,C.K)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+B.k.D(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
n.c=4.2/Math.sqrt(a8)
n.d=B.bO
k=a7.d
n.r=k.j(B.k.D(a7.b/2,0.2,1)).gp(0)
f=n.H()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=k.j(0.2).gp(0)
o.z=I.mj
f=o.H()
p.drawCircle(t,r,6,f)
f.delete()}},
ar(d){return!0}}
A.adn.prototype={}
A.U3.prototype={
T(){var w=x.F,v=x.g
return new A.bhn(new C.cq(null,x.A),new A.Oa(B.cH),C.a([],w),B.J,B.J,C.a([],w),C.a([],v),C.a([],v),C.a([],v),C.a([],v),B.J,B.J,$,B.bw,0,C.a([],x.X),null,null)}}
A.bhn.prototype={
a_(){this.a1()
this.YF()
this.kZ()},
YF(){var w,v,u,t,s,r,q,p,o=this,n=new C.eT()
n.dI(5)
w=C.a([],x.F)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ai(),1.6)
w.push(new A.adn(t,n.ai()*3.141592653589793*2,(n.ai()-0.5)*0.5*t,25+n.ai()*20))}else{t=Math.pow(n.ai(),0.8)
s=n.aD(o.f)
r=n.ai()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hc()?0:3.141592653589793
q=r+(n.ai()-0.5)*0.25}r=n.ai()
p=t<0.25?35+n.ai()*15:205+n.ai()*50
w.push(new A.adn(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cq7(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.dVw
k.cx=D.dVz
w=new C.eT()
w.dI(9)
v=k.cy
B.d.a8(v)
u=C.a([],x.F)
for(t=0;t<900;++t)u.push(new A.adn(Math.pow(w.ai(),0.8)*0.7,w.ai()*3.141592653589793*2,0,320+w.ai()*30))
B.d.v(v,u)
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
for(s=k.ay,r=x.S,s=C.d9(s,0,C.dJ(900,"count",r),C.T(s).c),o=s.$ti,s=new C.bW(s,s.gM(0),o.k("bW<aj.E>")),o=o.k("aj.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new C.u(l*n,Math.sin(m)*n))}k.db=v
v=C.a([],u)
for(u=k.ay,u=C.d9(u,0,C.dJ(900,"count",r),C.T(u).c),r=u.$ti,u=new C.bW(u,u.gM(0),r.k("bW<aj.E>")),r=r.k("aj.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new C.u(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=B.J
A.dD(110,"",900,0.5,0.45,"sine")},
lf(d){var w,v,u,t,s,r,q,p=this
p.e.fd(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aB(0,p.fx)
s=Math.max(0.25,t.gcl())
r=t.eB(0,s).aK(0,0.9/(s*s))
w=p.fy.ae(0,r.aK(0,u))
p.fy=w
v=p.cx.aB(0,r.aK(0,u))
p.cx=v
w=p.fx.ae(0,w.aK(0,u))
p.fx=w
v=p.CW.ae(0,v.aK(0,u))
p.CW=v
q=new A.dRe(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=C.a([C.aH(r,r,r,r,D.mf,r,r,r,new A.dR4(s,d),r,r,r,r,"Share",r)],q),o=C.b3(r,r,r,new A.bd6(s,r),B.at),n=B.w.j(0.5),m=C.m(14),l=C.I(B.bE,B.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=C.a([o,C.ao(8,C.p(r,C.d(w,r,r,r,r,r,r,Ad.a5I,r,r,r),B.f,r,r,new C.o(n,r,l,m,r,r,B.n),r,r,r,r,B.bR,r,r,r),r,r,10,10,r,r)],q)
l=C.a([],q)
for(v=0;v<3;++v){u=D.cUM[v]
o=s.Q===u.a&&!s.ch
l.push(new A.dx(u.b,o,new A.dR5(s,u),r,B.fV,r))}l.push(new A.dx("Collide",s.ch,new A.dR6(s),B.xn,B.bY,r))
o=C.a([new A.eJ(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=A.hw(B.fV,""+n,"Arms",6,2,new A.dR7(s),n)
l=s.r
B.d.v(o,C.a([n,A.hw(B.fV,B.k.aa(l,1),"Winding",6,0.8,new A.dR8(s),l)],q))}n=s.as
o.push(A.hw(B.fV,""+B.k.V(n*90)+"\xb0","Tilt",1,0.15,new A.dR9(s),n))
n=s.ax
o.push(A.hw(B.fV,B.k.aa(n,1)+"x","Speed",4,0,new A.dRa(s),n))
n=s.x
l=s.z
w=s.y
t=w?B.ly:D.Fj
o.push(new A.eJ(C.a([new A.dx("Dark matter",n,new A.dRb(s),r,B.bz,r),new A.dx("You are here",l,new A.dRc(s),r,B.aM,r),new A.dx("Music",w,new A.dRd(s),t,B.fV,r)],q),r,r))
return A.jB(B.fV,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.eq(new C.an(B.W,r,B.b_,B.q,m,r),s.d),"GALAXY",C.v(o,B.m,r,B.e,B.Q,0,B.p))}}
A.bd6.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.W()
w=C.L()
w.r=D.bcW.gp(0)
a3.aX(new C.a9(0,0,0+a1,0+a2),w)
v=new C.eT()
v.dI(3)
for(w=a3.a,u=0;u<90;++u){t=v.ai()
s=v.ai()
r=v.ai()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.15+v.ai()*0.4).gp(0)
p=q.H()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new C.u(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=C.L()
t.sau(new C.bS(B.A,0.5,B.x,a0,0,C.a([B.aD.j(0.32),B.aD.j(0.12),B.K],x.O),D.c2u,a0).aw(0,C.bT(o,a2)))
a3.ag(o,a2,t)}m=new A.d6q(a1.as)
a2=n*0.3
t=C.L()
t.sau(new C.bS(B.A,0.5,B.x,a0,0,C.a([B.fW.j(0.85),B.aL.j(0.3),B.K],x.O),a0,a0).aw(0,C.bT(o,a2)))
a3.ag(o,a2,t)
if(!a1.ch){l=C.L()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=B.k.F(q,360)
l.r=new H.m9(1,r,q>200?0.45:0.55,1).im().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.H()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.W()
a2=C.L()
a2.b=B.af
a2.c=1.6
a2.r=B.aM.gp(0)
a3.ag(g,9,a2)
f=C.ih(a0,a0,a0,a0,D.eKT,B.a5,B.ci,a0,B.eq,B.cg)
f.eR()
f.a6(a3,g.ae(0,new C.u(-f.b.c/2,12)))}}else{e=n*0.8
l=C.L()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.be2.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,C.K)(a2),++k){d=a2[k]
l.r=D.b9i.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.H()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.W()
w=C.L()
w.r=B.fW.gp(0)
a3.ag(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=C.L()
w.r=B.ii.gp(0)
a3.ag(a1,5,w)}},
ar(d){return!0}}
A.UM.prototype={
T(){return new A.bie(new C.cq(null,x.A),new A.Oa(B.cH),$,B.bw,0,C.a([],x.X),null,null)}}
A.bie.prototype={
a_(){this.a1()
this.kZ()},
lf(d){var w,v,u,t=this
t.e.fd(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=B.k.F(t.r+d*0.04*v,1)
else{w=B.k.F(t.w+d*0.05*v,1)
t.w=w
u=B.k.bw(w*4)
if(u!==B.k.bw(t.as))A.l6("bell",60+u*4,500,0.35)
t.as=u}},
gclU(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gccx(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=C.a([C.aH(q,q,q,q,D.mf,q,q,q,new A.ehk(r,d),q,q,q,q,"Share",q)],p),n=C.D(new C.eq(C.b3(q,q,q,new A.bon(r,q),B.eS),r.d),1)
if(r.f==="seasons")w=r.gclU()
else{w=r.gccx()
v=B.k.an(B.k.D(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=C.v(C.a([n,C.p(q,C.d(w,q,q,q,q,q,q,A1.Sh,B.L,q,q),B.f,q,q,q,q,q,q,q,F.afo,q,q,1/0)],p),B.m,q,B.e,B.j,0,B.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?Z.xy:B.iN
t=r.Q
s=t?B.ly:D.Fj
s=C.a([new A.eJ(C.a([new A.dx("Seasons",n==="seasons",new A.ehl(r),B.xN,B.bs,q),new A.dx("Moon phases",n==="moon",new A.ehm(r),B.uX,B.bs,q),new A.dx(u,!1,new A.ehn(r),v,B.bs,q),new A.dx("Music",t,new A.eho(r),s,B.bs,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=A.hw(B.bs,D.cU8[B.o.F(B.k.bw(n*12),12)],"Month",1,0,new A.ehp(r),n)
v=r.z
B.d.v(s,C.a([n,A.hw(B.bs,B.k.aa(v,1)+"\xb0","Tilt",90,0,new A.ehq(r),v)],p))}else{p=r.w
s.push(A.hw(B.bs,""+(B.k.bw(p*29.5)+1),"Day of month",1,0,new A.ehr(r),p))}p=r.y
s.push(A.hw(B.bs,B.k.aa(p,1)+"x","Speed",4,0.2,new A.ehs(r),p))
return A.jB(B.bs,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",C.v(s,B.m,q,B.e,B.Q,0,B.p))}}
A.bon.prototype={
a6(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.W(),b8=C.L()
b8.r=D.zN.gp(0)
b9.aX(new C.a9(0,0,0+b5,0+b6),b8)
w=new C.eT()
w.dI(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ai()
t=w.ai()
s=w.ai()
r=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.2+w.ai()*0.4).gp(0)
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
t.b=B.af
t.c=1
t.r=B.b7.gp(0)
b9.hY(u,t)
t=C.L()
t.sau(D.e41.aw(0,C.bT(p,34)))
b9.ag(p,22,t)
m=s.r*2*3.141592653589793
l=p.ae(0,new C.u(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aB(0,l).eB(0,p.aB(0,l).gcl())
J.bA(b8.save())
b8.translate(l.a,l.b)
s=C.L()
s.r=D.bb2.gp(0)
b9.ag(B.J,k,s)
J.bA(b8.save())
b7=new C.aP(b7.r,B.aq,b4,b4,C.a([],x.v))
b7.E(new C.kC(C.bT(B.J,k)))
b9.tG(0,b7)
b7=i.aK(0,k).aK(0,0.35)
s=k*1.1
b6=C.L()
b6.sau(D.e4a.aw(0,C.bT(B.J,s)))
b9.ag(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new C.u(s,b6)
b7=new C.u(-s,-b6).aK(0,k).aK(0,1.7)
b5=h.aK(0,k).aK(0,1.7)
t=C.L()
t.c=2
t.r=B.cq.gp(0)
b9.bA(b7,b5,t)
t=h.aK(0,k).aK(0,1.7)
b5=C.L()
b5.r=B.cq.gp(0)
b9.ag(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=C.ih(b4,b4,b4,b4,C.dn(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aO2,b5),B.a5,B.ci,b4,B.eq,B.cg)
f.eR()
f.a6(b9,l.ae(0,new C.u(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=C.L()
r.b=B.af
r.c=1
r.r=B.b7.gp(0)
b9.ag(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a0.r=B.aM.j(0.6).gp(0)
a0.c=2
q=a0.H()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=C.L()
r.sau(new C.bS(new C.da(-0.5,0),1.1,B.x,b4,0,C.a([D.b7_,D.adn],x.O),D.cLU,b4).aw(0,C.bT(p,k)))
b9.ag(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.ae(0,new C.u(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=C.L()
r.r=D.b4A.gp(0)
b9.ag(a1,a2,r)
J.bA(b8.save())
b7=b7.r
r=x.v
d=new C.aP(b7,B.aq,b4,b4,C.a([],r))
d.E(new C.kC(C.bT(a1,a2)))
b9.tG(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=C.L()
a3.r=B.bX.gp(0)
b9.aX(new C.a9(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aB(0,p).eB(0,a1.aB(0,p).gcl())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=D.aqd[a5]
a7=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
a7.r=B.aV.j(0.45).gp(0)
a7.z=B.ja
q=a7.H()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new C.u(u,t)
a9=Math.min(b5,b6)*0.1
b6=C.L()
b6.r=D.b4w.gp(0)
b9.ag(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bA(b8.save())
b6=new C.aP(b7,B.aq,b4,b4,C.a([],r))
b6.E(new C.kC(C.bT(a8,a9)))
b9.tG(0,b6)
s=s.w
b1=new C.aP(b7,B.aq,b4,b4,C.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.E(new C.b5(u,b5))
b6=b2>0
b1.aAj(new C.u(u,t+a9),b6,new C.aX(a9,a9))
if(b0<0.5)b6=b2<0
b1.aAj(new C.u(u,b5),b6,new C.aX(a9*Math.abs(1-2*b0),a9))
b6=C.L()
b6.r=B.bX.gp(0)
b9.aN(b1,b6)
b8.restore()
b8=C.L()
b8.b=B.af
b8.c=1
b8.r=B.b7.gp(0)
b9.ag(a8,a9,b8)
b3=C.ih(b4,b4,b4,b4,D.eKU,B.a5,B.ci,b4,B.eq,B.cg)
b3.eR()
b3.a6(b9,a8.ae(0,new C.u(-b3.b.c/2,a9+6)))}},
ar(d){return!0}}
A.aJn.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buz.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.bqW()}}
A.aJM.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buG.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brl()}}
A.aKo.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
A.buU.prototype={
q(){var w,v,u
for(w=this.fi$,v=w.length,u=0;u<w.length;w.length===v||(0,C.K)(w),++u)w[u].a9(0)
w=this.fh$
w===$&&C.c()
w.q()
this.brZ()}}
var z=a.updateTypes(["~()","R(t5)","R(a38)","R(n5)","R(Wl)","R(pB)","ad(ad)","ax<~>()","~(H)","R(BI)","ak<t8>(O)","R(Ld)","n(n,ma)","R(ma)","H(t5,H)","O(O,t5)","R(zB)","R(BE)","R(Y3)","R(aa_)","R(uI)","ad(H)","R(a1R)","MY()","MV()","R(Ea)","n(n5)","R(yj)","R(n7)","R(ZA)","R(aaO)","H(H)","H(pB)","R(ad)","n(zB)","~(ad,ad,ad,ad)","ak<ad>(ak<ad>)","~(n,ak<ad>{r:O})","~(n,ad,ad)","~(n5,ad,n)","~(n,ad,ad,H)","ad(n)","ad(H,H)","R(H)","~(H,ad,ad,n,w)","~(H,ak<ad>)","~(ad,ad,H{alongX:R})","~(H,ad,ad{col:w,round:R})","dM()","~(ak<ad>,w)","n(Ld)","~(ak<ad>)","H(BE,BE)","~(ak<ad>{col:w})","~(zV)","Vc()","TT()","Mm()","Tb()","a7_()","UE()","TC()","TS()","T6()","U5()","Uo()","Uq()","Tf()","UJ()","UZ()","UK()","UH()","V5()","Te()","Va()","Tg()","UB()","UG()","ads(X,H)","acm(X,H)","~(H,ad,w{h:O,w:O})","H(OI,OI)","~(a3<@,@>)","R(adi)","R(a_g)","R(BT)","R(aav)","R(acq)","R(aae)","H(H,qr)","O(OD)","n(qr)","~(qr,ak<n>,H)","qr?(BI)","R(qr)","r(n,a_3)","R(OV)","R(BM)","R(aal)","O(H?)","UL(X)","R(F0)","R(abD)","O(H)","R(mm)","~(b9)","R(a8V)","n(e7)","R(a37)","~(ahn,n,u,w,O)","~(n,t5)","~(H,ak<ad>,w,O,n)","Uj(X)","Mm(X)","TA(X,bn<O>,bn<O>)","Vb(X,bn<O>,bn<O>)","Vg()","U_()","Tc()","TR()","UC()","UP()","V9()","UA()","~(n)","cn(a9H)","R(a9G)","U6()","UY()","U7()","Ta()","U3()","UQ()","UM()","~(H,n,ad,ad,ad,R)","R(OD)","H(H,BI)"])
A.bU4.prototype={
$1(d){var w=this.a
w=w===0?d:A.fxL(d,w)
return w.ae(0,this.b)},
$S:z+6}
A.bU5.prototype={
$1(d){var w=this.a
return w===0?d:A.fxL(d,w)},
$S:z+6}
A.bU3.prototype={
$4(b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this
for(w=b4.b,v=b7.a,u=b7.b,t=b7.c,s=b6.a,r=b6.b,q=b6.c,p=b8.a,o=b8.b,n=b8.c,m=1/w,l=v*m,k=u*m,j=t*m,i=p*m,h=o*m,m=n*m,g=b4.a,f=g.a,e=b4.c,d=x.o,a0=b4.d,a1=b4.e,a2=b4.f,a3=0;a3<w;++a3)for(a4=a3/w,a5=s+v*a4,a6=r+u*a4,a4=q+t*a4,a7=0;a7<w;++a7){a8=a7/w
a9=a5+p*a8
b0=a6+o*a8
a8=a4+n*a8
b1=a9+l
b2=b0+k
b3=a8+j
f.push(new A.t8(C.a([e.$1(new A.ad(a9,b0,a8)),e.$1(new A.ad(b1,b2,b3)),e.$1(new A.ad(b1+i,b2+h,b3+m)),e.$1(new A.ad(a9+i,b0+h,a8+m))],d),a0.$1(b5),a1,g.b,a2,g.d,!1,g.c,g.e))}},
$S:z+35}
A.bU6.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+21}
A.bU2.prototype={
$2(d,e){var w=3.141592653589793*d/this.a,v=6.283185307179586*e/this.b
return new A.ad(Math.sin(w)*Math.cos(v),Math.cos(w),Math.sin(w)*Math.sin(v))},
$S:z+42}
A.bU7.prototype={
$1(d){var w=d*2*3.141592653589793/this.b
return this.a.aK(0,Math.cos(w)).ae(0,this.c.aK(0,Math.sin(w)))},
$S:z+21}
A.fFO.prototype={
$1(d){var w=d.b,v=this.a,u=d.c,t=this.b
return new A.ad(d.a,w*v-u*t,w*t+u*v)},
$S:z+6}
A.fFM.prototype={
$1(d){var w=this.a
return w===0?d:A.fxL(d,w)},
$S:z+6}
A.fFN.prototype={
$1(d){var w=this,v=w.b===0?d:w.c.$1(d)
return J.fGI(w.a.$1(v),w.d)},
$S:z+6}
A.fFL.prototype={
$1(d){var w=this.b===0?d:this.c.$1(d)
return this.a.$1(w)},
$S:z+6}
A.fFF.prototype={
$4(d,e,f,g){var w=-d
return 0.5*(2*e+(w+f)*this.a+(2*d-5*e+4*f-g)*this.b+(w+3*e-3*f+g)*this.c)},
$S:1783}
A.ckC.prototype={
$1(d){var w=this,v=d.a,u=w.a,t=d.c,s=w.b,r=-v*s+t*u,q=d.b,p=w.c,o=w.d
return new A.ad(v*u+t*s,q*p-r*o,-(q*o+r*p))},
$S:z+6}
A.ckD.prototype={
$1(d){var w=this.a.c,v=this.b.$1(d.aB(0,w.d))
return new A.ad(v.a,v.b,v.c+w.c)},
$S:z+6}
A.ckB.prototype={
$2(d,e){return B.k.aL(e.c,d.c)},
$S:z+81}
A.eNS.prototype={
$1(d){var w=this.a,v=w.r,u=d.a
w.r=d
w.a.d.aFJ(B.k.D((u-v.a)/1e6,0,0.1))
w.f.sp(0,u/1e6)},
$S:8}
A.eNR.prototype={
$1(d){if(x.ej.b(d))this.a.a.d.amx(1+d.grL().b*0.0012)},
$S:251}
A.eNO.prototype={
$1(d){var w=this.a
return w.w=w.a.d.c},
$S:252}
A.eNP.prototype={
$1(d){var w,v,u,t=this.a,s=t.a
if(d.w>=2){s=s.d
s.amx(t.w/d.d/s.c)}else{t=s.d
s=d.a
t.as=t.Q=null
w=t.a+=-s.a*0.009
if(!t.x){v=t.r
u=t.w
t.a=B.k.D(w,v-u,v+u)}t.b=B.k.D(t.b+s.b*0.009,-1.25,1.35)
t.aZ()}},
$S:223}
A.eNQ.prototype={
$1(d){var w=this.a
w=w.a.f.$1(w.e.cMB(d.b))
return w},
$S:50}
A.flr.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+104}
A.fcv.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+B.d.gK(d.e.split(". "))+"."},
$S:z+107}
A.fiA.prototype={
$1(d){var w
if(!this.a.KH(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+1}
A.fiB.prototype={
$1(d){return d.x},
$S:z+1}
A.flo.prototype={
$1(d){return d.b===this.a.a},
$S:z+1}
A.flp.prototype={
$1(d){var w
if(!this.a.KH(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+1}
A.flq.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+15}
A.dZV.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.dZW.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new C.z(this.b,this.c))},
$S:0}
A.dZX.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=B.d.gcX(v).Q
v.toString
w.lP(v,B.dU,B.i6)}},
$S:8}
A.e_7.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
B.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
A.e_8.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
A.e_3.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
A.e_1.prototype={
$2(d,e){var w=this.a
w.r.push(C.cL(C.dA(0,0,0,d,0,0),new A.e_2(w,this.b,e)))},
$S:1784}
A.e_2.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
A.e_4.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gUO().ahN(0,u[1],u[2],u[3])
u[4].bH(0,new A.e__(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
A.dD(700+w.e*120,"",80,0,0.25,"square")
v.m(new A.e_0(w.a,v,w.f,w.r))},
$S:0}
A.e__.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:187}
A.e_0.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.e_5.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gUO().aix(t,u[1],s,u[3])
A.dD(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new A.dZZ(w.a,v,w.e,w.f))},
$S:0}
A.dZZ.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=B.o.D(B.k.bw(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
A.e_6.prototype={
$0(){A.dD(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new A.dZY(w,this.b))},
$S:0}
A.dZY.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
A.e_b.prototype={
$0(){var w=this.a
return w.m(new A.e_a(w))},
$S:0}
A.e_a.prototype={
$0(){return this.a.at=!0},
$S:0}
A.e_c.prototype={
$0(){var w=this.a
return w.m(new A.e_9(w))},
$S:0}
A.e_9.prototype={
$0(){return this.a.at=!1},
$S:0}
A.e_d.prototype={
$0(){var w=this.a
w.f.saU(0,this.b)
w.Mr()},
$S:0}
A.e_e.prototype={
$0(){return this.a.WN(this.b)},
$S:0}
A.e_f.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Mr():w.aSP()},
$S:2}
A.e_g.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Mr():w.aSP()},
$S:0}
A.eeS.prototype={
$2(d,e){return d+e},
$S:1785}
A.efb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.efa(w,d))},
$S:133}
A.efa.prototype={
$0(){var w=C.aN(J.q(this.b,"unlocked"))
w=w==null?null:B.k.O(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
A.efc.prototype={
$0(){},
$S:0}
A.efd.prototype={
$0(){},
$S:0}
A.eeU.prototype={
$0(){return this.a.m(new A.eeT(this.b,this.c))},
$S:0}
A.eeT.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.eeJ.prototype={
$1(d){return this.a.cx===d},
$S:31}
A.eeK.prototype={
$1(d){return this.a.cx=d},
$S:28}
A.eeL.prototype={
$1(d){return this.a.cy===d},
$S:31}
A.eeM.prototype={
$1(d){return this.a.cy=d},
$S:28}
A.eeN.prototype={
$1(d){return this.a.db===d},
$S:31}
A.eeO.prototype={
$1(d){return this.a.db=d},
$S:28}
A.eeP.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:31}
A.eeQ.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.J(0,d)},
$S:28}
A.eeR.prototype={
$0(){var w=this.a
return w.m(w.gaua())},
$S:0}
A.eeH.prototype={
$1(d){return this.a.$1(!0)},
$S:84}
A.eeI.prototype={
$1(d){return this.a.$1(!1)},
$S:146}
A.eeG.prototype={
$1(d){return this.a.$1(!1)},
$S:214}
A.ef4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.ch=n
n=C.b3(p,p,p,new A.beM(o,p),n)
w=this.b
v=A.bxg("WORLD",w.a,w.c)
u=A.bxg("GRAVITY",C.t(w.b)+" m/s\xb2",B.c)
t=o.x
s=B.k.V(t*100)
t=t<0.25?B.cq:B.bb
t=A.bxg("FUEL",""+s+"%",t)
s=o.r.b
r=B.k.V(s*100)
s=s>D.Bn[o.db].d?B.cq:B.c
q=x.p
s=C.a([v,u,t,A.bxg("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(A.bxg("HEIGHT",""+B.k.V(B.k.D(0.86-o.f.b,0,1)*1000)+" m",B.c))
n=C.a([n,C.ao(p,C.A(s,B.m,p,B.hJ,B.j,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bzB(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.qS[w].a+".":"You landed on every world!"
v=C.a([new A.fg(B.mb,"Again",new A.ef_(o),B.c,p),new A.fg(B.qE,"Rebuild",new A.ef0(o),B.aM,p)],q)
if(o.d+1<7)v.push(new A.fg(B.js,"Next world",new A.ef1(o),B.bb,p))
n.push(A.h7D("Perfect landing!",w,B.bb,v))}if(o.as==="crashed")n.push(A.h7D("Crash!",o.at,B.cq,C.a([new A.fg(B.mb,"Try again",new A.ef2(o),B.bb,p),new A.fg(B.qE,"Rebuild",new A.ef3(o),B.aM,p)],q)))
return new C.an(B.W,p,B.b_,B.q,n,p)},
$S:64}
A.ef_.prototype={
$0(){var w=this.a
return w.m(w.gaua())},
$S:0}
A.ef0.prototype={
$0(){var w=this.a
return w.m(new A.eeX(w))},
$S:0}
A.eeX.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.ef1.prototype={
$0(){var w=this.a
return w.m(new A.eeW(w))},
$S:0}
A.eeW.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
A.ef2.prototype={
$0(){var w=this.a
return w.m(w.gaua())},
$S:0}
A.ef3.prototype={
$0(){var w=this.a
return w.m(new A.eeV(w))},
$S:0}
A.eeV.prototype={
$0(){return this.a.as="ready"},
$S:0}
A.ef5.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new A.eeZ(v,w))},
$S:0}
A.eeZ.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
A.ef6.prototype={
$1(d){return this.a.y=d},
$S:9}
A.ef7.prototype={
$1(d){return this.a.Q=d},
$S:9}
A.ef8.prototype={
$1(d){return this.a.z=d},
$S:9}
A.ef9.prototype={
$0(){var w=this.a
return w.m(new A.eeY(w))},
$S:0}
A.eeY.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
A.dBi.prototype={
$0(){var w=0,v=C.j(x.P),u,t=this,s,r,q
var $async$$0=C.e(function(d,e){if(d===1)return C.f(e,v)
for(;;)switch(w){case 0:q=$.h30
if(q==null)q=$.h30=A.cBV()
w=3
return C.b(C.iH(C.a([q,$.tL().bcl("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kj(0,C.cO(J.q(s,1)))
q.m(new A.dBh(q,s))
case 1:return C.h(u,v)}})
return C.i($async$$0,v)},
$S:53}
A.dBh.prototype={
$0(){return this.a.d=x.e3.a(J.q(this.b,0))},
$S:0}
A.dAV.prototype={
$0(){return this.a.bQt(C.aT(J.q(this.b,"group")))},
$S:0}
A.dAW.prototype={
$1(d){return B.a.aV(B.o.fM(B.o.D(B.k.V(d*255),0,255),16),2,"0")},
$S:328}
A.dBj.prototype={
$0(){return A.a6Z("kick",0.25)},
$S:0}
A.dAX.prototype={
$0(){return this.a.cx=this.b},
$S:0}
A.dAY.prototype={
$1(d){return d.a===this.a},
$S:z+22}
A.dAZ.prototype={
$0(){return A.a6Z("kick",0.5)},
$S:0}
A.dB_.prototype={
$0(){return A.dD(1300+this.a.R8.aD(900),"",40,0,0.2,"square")},
$S:0}
A.dB1.prototype={
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
u=w}if(u.cx!=null&&!B.d.b8(u.d.e,new A.dB0(u)))u.cx=null
u.go=0},
$S:0}
A.dB0.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.avS(d)},
$S:z+22}
A.dAS.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
A.dAT.prototype={
$0(){var w=this.a
return w.m(w.gc_C())},
$S:0}
A.dAU.prototype={
$0(){return this.a.afu(null)},
$S:0}
A.dB8.prototype={
$0(){var w=this.a.as
return w==null?null:w.eO(0,C.E(["t","shot"],x.N,x.z))},
$S:0}
A.dB9.prototype={
$0(){return this.a.cuc(this.b.a)},
$S:0}
A.dBa.prototype={
$0(){return this.a.afu(this.b)},
$S:0}
A.dBb.prototype={
$1(d){var w=this.a
return w.m(new A.dB7(w,d))},
$S:6}
A.dB7.prototype={
$0(){return this.a.k3=this.b},
$S:0}
A.dBc.prototype={
$0(){var w=this.a
return w.m(new A.dB6(w,this.b))},
$S:0}
A.dB6.prototype={
$0(){return this.a.CW=this.b},
$S:0}
A.dBd.prototype={
$0(){var w=this.a
return w.m(new A.dB5(w))},
$S:0}
A.dB5.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
A.dBe.prototype={
$0(){var w=this.a
return w.m(new A.dB4(w))},
$S:0}
A.dB4.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.eO(0,C.E(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.J8},
$S:0}
A.dBf.prototype={
$0(){var w=this.a
return w.m(new A.dB3(w))},
$S:0}
A.dB3.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aVl()
else w.p2=null},
$S:0}
A.dBg.prototype={
$0(){var w=this.a
return w.m(new A.dB2(w))},
$S:0}
A.dB2.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
A.bYr.prototype={
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
$S:276}
A.bYs.prototype={
$1(d){var w=new C.ro([],[]).pc(d.data,!0)
if(x.f.b(w)&&J.q(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:545}
A.fjM.prototype={
$2(d,e){var w
A:{if("black"===d){w=e.a===25?"The black wire carries the power (hot). It never goes on the green ground screw. Hot goes to a BRASS screw.":"The black (hot) wire goes on a BRASS screw, not on the silver one. Silver is for white (neutral)."
break A}if("white"===d){w=e.a===25?"The white wire is the neutral. The green screw is only for the ground wire. Neutral goes to a SILVER screw.":"The white (neutral) wire goes on a SILVER screw, not on brass. Brass is for the black (hot) wire."
break A}w="The bare copper ground wire only goes on the GREEN screw. It keeps you safe if something goes wrong."
break A}return w},
$S:z+12}
A.fjN.prototype={
$2(d,e){return d==="ground"?y.j:"A black (hot) wire never goes on the green ground screw. The two black wires go on the two BRASS screws."},
$S:z+12}
A.fjO.prototype={
$2(d,e){var w
if(e.e)w="Those are the LOAD screws. They are covered with tape because power must come in on the LINE side. If you wire the LOAD side the GFCI will not protect you."
else A:{if("black"===d){w="The black (hot) wire goes on the BRASS LINE screw."
break A}if("white"===d){w="The white (neutral) wire goes on the SILVER LINE screw."
break A}w=y.j
break A}return w},
$S:z+12}
A.fjP.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fixture BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fixture WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fixture GREEN ground wire only."
break A}return w},
$S:z+12}
A.fjQ.prototype={
$2(d,e){var w
A:{if("black"===d){w="The black (hot) wire joins the fan BLACK wire. Not the white one, and never the green ground."
break A}if("white"===d){w="The white (neutral) wire joins the fan WHITE wire. Not the black one, and never the green ground."
break A}w="The bare copper ground wire joins the fan GREEN ground wire only."
break A}return w},
$S:z+12}
A.fiI.prototype={
$1(d){return d.a===this.a},
$S:z+108}
A.fG2.prototype={
$1(d){return d.a},
$S:z+34}
A.fiO.prototype={
$1(d){return B.d.iK(this.a.f,new A.fiP(d)).f},
$S:77}
A.fiP.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.fiM.prototype={
$1(d){return B.d.iK(this.a.e,new A.fiN(d)).e},
$S:13}
A.fiN.prototype={
$1(d){return d.a===this.a},
$S:z+16}
A.fiK.prototype={
$1(d){return d.e==="hot"},
$S:z+16}
A.fiL.prototype={
$1(d){return d.e==="neutral"},
$S:z+16}
A.fgZ.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a
i.b=d
w=j.b
v=w.b
u=C.a2(v).k("cI<1,2>")
t=u.k("a1<G.E>")
s=C.B(new C.a1(new C.cI(v,u),new A.fh_(g),t),t.k("G.E"))
r=g==="ground"
q=r?D.wF:h
p=r?0.6:0.3
if(w.c>0){o=e.ae(0,D.fsn)
i.kg(A.agb(C.a([e,e.ae(0,D.frr),o],x.o),4),0.085,q,!1,p,8)
return}if(s.length!==0){n=A.bz5(j.c,B.d.gK(s).a,w)
w=A.zv(e,n,0.5)
v=n.a>0
m=w.ae(0,new A.ad(v?0.5:-0.5,0.2,0.9))
w=e.ae(0,D.fu6)
if(j.d)v=0
else v=v?0.06:-0.06
l=A.agb(C.a([e,w,m,n.ae(0,new A.ad(v,0,0.08)),n],x.o),5)
k=B.d.dl(l,0,B.k.bw(l.length*0.8))
i.kg(k,0.085,q,!1,p,8)
if(!r)i.kg(B.d.fG(l,k.length-1),0.061200000000000004,D.wF,!1,0.6,8)}else{l=A.agb(C.a([e,e.ae(0,D.fq8),A.zv(e,f,0.6),f],x.o),5)
k=r?l:B.d.dl(l,0,B.k.bw(l.length*0.86))
i.kg(k,0.085,q,!1,p,8)
if(!r)i.kg(B.d.fG(l,k.length-1),0.061200000000000004,D.wF,!1,0.6,8)}},
$S:z+44}
A.fh_.prototype={
$1(d){return d.b===this.a},
$S:1787}
A.f3s.prototype={
$2(d,e){var w,v=this.a
v.b=d
w=A.FX(e,0.9,6)
if(this.b)v.kg(w,0.2,D.Vv,!1,0.35,10)
this.c.push(B.d.gam(w))},
$S:z+45}
A.f4N.prototype={
$6$taped(d,e,f,g,h,i){var w,v,u,t=this.a
t.e=0.9
t.b=d
w=this.b
v=w.a+e*0.75
u=w.b+f
w=w.c-0.45
t.eb(new A.ad(v,u,w),D.fuT,h,0.7)
t.f_(new A.ad(v,u,w),new A.ad(v+e*0.22,u,w),0.17,g,0.9,12)
t.ja(new A.ad(v+e*0.23,u,w),D.ftB,D.Du)
if(i)t.eb(new A.ad(v+e*0.05,u,w),D.ftv,B.cr,0.2)},
$5(d,e,f,g,h){return this.$6$taped(d,e,f,g,h,!1)},
$S:1788}
A.fh5.prototype={
$4$alongX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n
for(w=this.a,v=0;v<=f;++v){u=A.zv(d,e,v/f)
w.aAt(new A.ad(u.a,4,u.c),D.fv0,D.Vo,!1,0.05)}t=A.zv(d,e,0.5)
for(s=e.aB(0,d).gSB()+0.15,r=t.a,q=t.c,p=0;p<2;++p){o=D.cWo[p]
n=g?new A.ad(s,0.16,0.3):new A.ad(0.3,0.16,s)
w.eb(new A.ad(r,o,q),n,D.Vo,0.05)}},
$3(d,e,f){return this.$4$alongX(d,e,f,!0)},
$S:z+46}
A.fh2.prototype={
$2(d,e){return this.a.kg(A.FX(d,0.35,3),0.06,e,!1,0.4,6)},
$S:z+49}
A.fh1.prototype={
$1(d){return this.a.kg(A.FX(d,0.5,3),0.14,D.p7,!1,0.3,8)},
$S:z+51}
A.fh4.prototype={
$2$col(d,e){return this.a.kg(A.FX(d,0.4,3),0.055,e,!1,0.35,6)},
$1(d){return this.$2$col(d,D.Vv)},
$S:z+53}
A.fh3.prototype={
$5$h$w(d,e,f,g,h){var w=this.a
w.b=d
w.eb(e,new A.ad(h,g,0.06),f,0.3)},
$3(d,e,f){return this.$5$h$w(d,e,f,0.7,0.45)},
$S:z+80}
A.fhZ.prototype={
$0(){return A.ru(1320,120,0.25,"tri")},
$S:0}
A.c47.prototype={
$1(d){return this.a},
$S:39}
A.c4a.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.c4b.prototype={
$0(){return D.dMl},
$S:z+23}
A.c4c.prototype={
$0(){return D.dMm},
$S:z+23}
A.c4d.prototype={
$0(){return D.dv7},
$S:z+24}
A.c4e.prototype={
$0(){return D.dv8},
$S:z+24}
A.c4f.prototype={
$1(d){return d.b===this.a},
$S:z+97}
A.c46.prototype={
$0(){return C.a4(this.a,!1).ci(C.eo(new A.c45(this.b),!1,null,x.H))},
$S:0}
A.c45.prototype={
$1(d){return this.a.$0()},
$S:39}
A.c49.prototype={
$0(){return C.a4(this.a,!1).ci(C.eo(new A.c48(this.b),!1,null,x.H))},
$S:0}
A.c48.prototype={
$1(d){return new A.UL(this.a,null)},
$S:z+100}
A.c44.prototype={
$0(){return this.a.c0C(0,this.b,this.c.a)},
$S:0}
A.eWt.prototype={
$2(d,e){return!0},
$S:710}
A.eWu.prototype={
$1(d){return!0},
$S:31}
A.cof.prototype={
$0(){return this.a.d.amx(0.8)},
$S:0}
A.cog.prototype={
$0(){return this.a.d.amx(1.25)},
$S:0}
A.fyd.prototype={
$1(d){var w,v,u,t,s,r,q,p,o=null,n=C.aI(d,o,x.l).w,m=this.b,l=this.c,k=l.length,j=x.p,i=C.a([C.d(this.a,o,o,o,o,o,o,B.dI,o,o,o),B.au,C.d(""+new C.a1(m,new A.fyc(),C.T(m).k("a1<1>")).gM(0)+" of "+k+" steps done",o,o,o,o,o,o,D.Sd,o,o,o),B.S],j)
for(w=0;w<k;++w){v=B.c.j(0.05)
u=new C.aX(14,14)
t=new C.aA(m[w]?B.bb.j(0.6):B.bE,1,B.r,-1)
s=m[w]
r=s?"\u2705":""+(w+1)+"."
q=s?B.c:B.aL
p=l[w]
s=s?B.aA:B.c
i.push(C.p(o,new C.cs(B.aX,B.e,B.j,B.F,o,B.p,o,0,C.a([new C.x(r,o,new C.F(!0,q,o,o,o,o,14,B.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),B.aw,new C.bG(1,B.bn,new C.x(p,o,new C.F(!0,s,o,o,o,o,13,o,o,o,o,o,1.4,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o)],j),o),B.f,o,o,new C.o(v,o,new C.bU(t,t,t,t),new C.bt(u,u,u,u),o,o,B.n),o,o,o,B.cK,B.bm,o,o,o))}return C.bq(!0,new C.cW(new C.aY(0,1/0,0,n.a.b*0.75),C.cK(i,o,B.c0,o,o,B.ai,!0),o),!0,!1,B.ah,!0,!0)},
$S:32}
A.fyc.prototype={
$1(d){return d},
$S:172}
A.bQp.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.d0U.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c},
$S:0}
A.d0V.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d0T(w))},
$S:0}
A.d0T.prototype={
$0(){return this.a.y=null},
$S:0}
A.d0N.prototype={
$0(){return this.a.x=0},
$S:0}
A.d0M.prototype={
$1(d){var w=this.a.e.b
return new C.bc(w,C.a2(w).k("bc<2>")).t(0,d)},
$S:3}
A.d0O.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.d0P.prototype={
$2(d,e){return e===this.a},
$S:390}
A.d0Q.prototype={
$0(){var w=this.a
w.xb()
w.x=this.b},
$S:0}
A.d0R.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.d0S.prototype={
$0(){var w=this.a,v=w.e,u=v.a
v.a=!u
if(u)v.d=!1
w.xb()},
$S:0}
A.d0W.prototype={
$0(){var w=this.a,v=w.e
v.d=v.a=!0
w.xb()},
$S:0}
A.d13.prototype={
$1(d){return!d},
$S:172}
A.d1d.prototype={
$0(){var w=this.a.gFi()
return A.fyb(this.b,w.b,w.d,this.c)},
$S:0}
A.d14.prototype={
$0(){var w=this.a
return w.m(new A.d12(w))},
$S:0}
A.d12.prototype={
$0(){var w=this.a,v=w.e
v.e=!v.e
w.xb()},
$S:0}
A.d15.prototype={
$0(){var w=this.a
return w.m(new A.d11(w))},
$S:0}
A.d11.prototype={
$0(){var w=this.a,v=w.e
v.f=!v.f
w.xb()},
$S:0}
A.d16.prototype={
$0(){var w=this.a,v=w.gkJ()
return v.n0(10,0.2,new A.ad(0.6,0,w.e.c===0?4.2:0.4),-0.95)},
$S:0}
A.d17.prototype={
$0(){var w=this.a,v=w.gkJ()
return v.n0(10,0.2,new A.ad(-0.6,0,w.e.c===0?4.2:0.4),0.95)},
$S:0}
A.d18.prototype={
$0(){var w=this.a,v=this.b,u=v.a
if(w.e.b.jd(0,u)){w.oN("That wire is already fastened. Tap the wire in the 3D view to take it off if you want to move it.")
return}w.m(new A.d10(w,v))
if(w.w.length!==0){if(u==="ground")w.gkJ().n0(8,0.55,D.fsM,0.15)
else if(u==="white")w.gkJ().n0(8.5,0.2,D.ful,0.95)
else w.gkJ().n0(8.5,0.2,D.fq2,-0.95)
w.kl(v.b+": now tap the screw it belongs on.",!0)}},
$S:0}
A.d10.prototype={
$0(){var w=this.a,v=this.b.a
return w.w=w.w===v?"":v},
$S:0}
A.d19.prototype={
$0(){var w=this.a
w.m(new A.d1_(w))
A.y0()
w.kl("The wires are folded back and the device is pushed into the box. Now put the cover plate on.",!0)
w.nK()},
$S:0}
A.d1_.prototype={
$0(){var w=this.a
w.e.c=1
w.xb()},
$S:0}
A.d1a.prototype={
$0(){var w=this.a
w.m(new A.d0Z(w))
w.nK()},
$S:0}
A.d0Z.prototype={
$0(){var w=this.a
w.e.c=0
w.xb()},
$S:0}
A.d1b.prototype={
$0(){var w=this.a
w.m(new A.d0Y(w))
A.y0()
w.kl("Cover plate on. Now turn the power on and test.",!0)},
$S:0}
A.d0Y.prototype={
$0(){var w=this.a
w.e.c=2
w.xb()},
$S:0}
A.d1c.prototype={
$0(){var w=this.a
w.m(new A.d0X(w))
w.nK()},
$S:0}
A.d0X.prototype={
$0(){var w=this.a,v=w.e
v.c=0
v.b.a8(0)
v.a=!0
v.d=!1
w.Q=0
w.w=""
w.x=0
w.xb()},
$S:0}
A.eHy.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.eHz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.eHx(w))},
$S:0}
A.eHx.prototype={
$0(){return this.a.x=null},
$S:0}
A.eHr.prototype={
$0(){return this.a.w=0},
$S:0}
A.eHs.prototype={
$0(){var w=this.a,v=w.d
v.a.J(0,this.b)
v.c=!1
v.d=""
w.f=A.aMY(v)
w.r=""},
$S:0}
A.eHt.prototype={
$0(){var w=this.a,v=w.d
v.b.n(0,this.b,!0)
v.d=""
w.f=A.aMY(v)},
$S:0}
A.eHu.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eHv.prototype={
$1(d){return this.a.d.b.h(0,d)!==!0},
$S:3}
A.eHw.prototype={
$0(){var w,v=this.a,u=v.d
u.c=!0
w=this.b
u.d=w.length===0?"":B.d.gK(w)
v.f=A.aMY(u)},
$S:0}
A.eHD.prototype={
$1(d){return!d},
$S:172}
A.eHH.prototype={
$0(){return A.fyb(this.a,"Sink drain (P-trap)",D.cYO,this.b)},
$S:0}
A.eHE.prototype={
$1(d){return A.hY6(this.a.d,d)},
$S:z+10}
A.eHF.prototype={
$0(){var w=this.a
return w.m(new A.eHC(w,this.b))},
$S:0}
A.eHC.prototype={
$0(){var w=this.a,v=this.b
return w.r=w.r===v?"":v},
$S:0}
A.eHG.prototype={
$0(){var w=this.a
w.m(new A.eHB(w))
w.nK()},
$S:0}
A.eHB.prototype={
$0(){var w,v=this.a,u=v.d
u.a.a8(0)
w=u.b
w.aml(w,new A.eHA())
u.c=!1
v.r=u.d=""
v.w=0
v.f=A.aMY(u)},
$S:0}
A.eHA.prototype={
$2(d,e){return!1},
$S:710}
A.d3O.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.d3P.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.d3N(w))},
$S:0}
A.d3N.prototype={
$0(){return this.a.x=null},
$S:0}
A.d3G.prototype={
$0(){return this.a.w=0},
$S:0}
A.d3J.prototype={
$1(d){return d.a===this.a},
$S:z+25}
A.d3K.prototype={
$0(){var w=this.a,v=w.d
v.f=!1
w.f=A.aeN(v)
w.w=this.b},
$S:0}
A.d3L.prototype={
$0(){var w=this.a,v=w.d,u=v.e
u.bn(u,new A.d3I(this.b))
v.f=!1
w.f=A.aeN(v)},
$S:0}
A.d3I.prototype={
$2(d,e){return e===this.a},
$S:390}
A.d3M.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.d3H.prototype={
$0(){var w=this.a,v=w.d
v.f=!v.f
w.f=A.aeN(v)},
$S:0}
A.d3T.prototype={
$1(d){return!d},
$S:172}
A.d3Z.prototype={
$0(){return A.fyb(this.a,"Faucet supply lines",D.d8H,this.b)},
$S:0}
A.d3U.prototype={
$1(d){return A.hP5(this.a.d,d)},
$S:z+10}
A.d3V.prototype={
$0(){var w=this.a
return w.m(new A.d3S(w))},
$S:0}
A.d3S.prototype={
$0(){var w=this.a,v=w.d
v.r=!v.r
w.f=A.aeN(v)},
$S:0}
A.d3X.prototype={
$0(){var w=this.b
return w.m(new A.d3R(this.a,w))},
$S:0}
A.d3R.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
return w.r=v===u?"":u},
$S:0}
A.d3W.prototype={
$1(d){return d===this.a.a},
$S:3}
A.d3Y.prototype={
$0(){var w=this.a
w.m(new A.d3Q(w))
w.nK()},
$S:0}
A.d3Q.prototype={
$0(){var w=this.a,v=w.d
v.e.a8(0)
v.f=!1
w.r=""
w.w=0
w.f=A.aeN(v)},
$S:0}
A.daS.prototype={
$0(){var w=this.a
w.x=this.b
w.y=this.c},
$S:0}
A.daT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.daR(w))},
$S:0}
A.daR.prototype={
$0(){return this.a.x=null},
$S:0}
A.daM.prototype={
$0(){return this.a.r=0},
$S:0}
A.daO.prototype={
$0(){var w=this.a,v=w.d
v.d.W(0,72)
w.f=A.a0s(v)
w.r=this.b},
$S:0}
A.daP.prototype={
$0(){var w=this.a,v=w.d
v.c=!0
v.b=!1
w.f=A.a0s(v)
w.r=this.b},
$S:0}
A.daQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.daN.prototype={
$1(d){return this.a},
$S:39}
A.db0.prototype={
$0(){return A.fyb(this.a,"Fix the house",D.c9n,this.b)},
$S:0}
A.daW.prototype={
$0(){return this.a.c8i(this.b)},
$S:0}
A.daY.prototype={
$1(d){return d<=this.a.d.a},
$S:31}
A.daX.prototype={
$1(d){return A.h9P(this.a.d,d)},
$S:z+10}
A.daZ.prototype={
$0(){var w=this.a
return w.m(new A.daV(w))},
$S:0}
A.daV.prototype={
$0(){var w=this.a
return w.w=w.w==="wrench"?"":"wrench"},
$S:0}
A.db_.prototype={
$1(d){var w=this.a
return w.m(new A.daU(w,d))},
$S:6}
A.daU.prototype={
$0(){var w=this.a,v=w.d,u=B.k.V(this.b)
v.a=u
if(u<5)w.r=0
w.f=A.a0s(v)},
$S:0}
A.fhG.prototype={
$5(d,e,f,g,h){var w=this.a.a.t(0,h),v=this.b
v.b=d
if(w)v.amf(e,0.66,f,!1,!0,!0,g,14)
else{v.d=0.3
v.aFU(e,0.74,B.b4,!1,!0,0,8)
v.d=1}},
$S:z+111}
A.fhF.prototype={
$6(d,e,f,g,h,i){var w,v
if(!i)return
w=this.a.b.h(0,e)
v=w===!0?f:f.ae(0,h)
w=this.b
w.e=0.5
w.b=d
w.f_(v.aB(0,g.aK(0,0.6)),v.ae(0,g.aK(0,0.6)),1.12,D.p7,0.35,8)
w.yF(v.aB(0,g.aK(0,0.62)),v.aB(0,g.aK(0,0.5)),1.2,0.5,D.UP,0.2,8)
w.b=0
w.yF(f.aB(0,g.aK(0,0.05)),f.ae(0,g.aK(0,0.08)),0.82,0.55,D.bdr,0.1,12)
w.e=0},
$S:z+134}
A.fhE.prototype={
$1(d){return d.b<-0.6},
$S:z+33}
A.fh0.prototype={
$1(d){return this.a.e.h(0,d)===this.b},
$S:31}
A.fj5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=A.aeZ(d)
for(w=this.a*1.6,v=this.b,u=p.a,t=p.b,s=p.c,r=0;r<7;++r){q=B.k.F(w+r/7,1)
v.j9(new A.ad(u+Math.sin(r*2.1)*q*1.4,t+(q*2.4-q*q*6.5),s+(1+q*2.5)),0.2,e,3,6,0.9)}},
$S:1791}
A.fj4.prototype={
$1(d){return this.a.e.h(0,d.a)!=null},
$S:z+25}
A.ceX.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.ceU.prototype={
$1(d){return this.a.wD(0,d).c.toLowerCase()},
$S:13}
A.ceY.prototype={
$1(d){var w
if(!this.a.e.t(0,d.a)){w=d.b
w=w==="valve"||B.a.a0(w,"hose")}else w=!1
return w},
$S:z+3}
A.ceZ.prototype={
$1(d){var w=this.a,v=d.a
return w.e.t(0,v)&&w.bcr(v)>0},
$S:z+3}
A.cf_.prototype={
$1(d){return d.a},
$S:z+26}
A.cf0.prototype={
$1(d){return d.a},
$S:z+26}
A.ceV.prototype={
$1(d){return this.a.e.t(0,d.a)},
$S:z+3}
A.ceW.prototype={
$1(d){var w=this.a,v=d.a
return w.bcr(v)<=0||!w.e.t(0,v)},
$S:z+3}
A.fhD.prototype={
$1(d){var w=this.a
w.b=0
w.f_(new A.ad(d,8,0),new A.ad(d,8,1.6),0.5,D.UE,0.7,10)},
$S:6}
A.fhB.prototype={
$1(d){var w,v,u,t,s,r,q=C.a([],x.o)
for(w=d.length,v=this.a,u=v.a,t=v.b,v=v.c,s=0;s<d.length;d.length===w||(0,C.K)(d),++s){r=d[s]
q.push(new A.ad(r.a+u,r.b+t,r.c+v))}return q},
$S:z+36}
A.fhv.prototype={
$3$r(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+B.d.bf(v.c,new A.fhy(d))
w.d=0.32
w.aFU(e,f,B.b4,!1,!0,0,8)
w.d=1},
$2(d,e){return this.$3$r(d,e,1.2)},
$S:z+37}
A.fhy.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fhw.prototype={
$3(d,e,f){var w=this.a,v=this.b.c
v===$&&C.c()
w.b=9100+B.d.bf(v.c,new A.fhx(d))
w.d=0.32
w.ja(e,f,B.b4)
w.d=1},
$S:z+38}
A.fhx.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fhC.prototype={
$3(d,e,f){var w,v,u,t=this,s=t.a,r=s.c
r===$&&C.c()
w=B.d.cG(r.c,d)
r=d.c
v=s.e
u=d.a
if(v.t(0,u))s="Fitted."
else{s=s.b?"":d.e
s="A spot for the "+r.toLowerCase()+". "+s}t.b.n(0,9100+w,new A.dM(r,s,e,26))
if(t.c&&!v.t(0,u)&&t.d.length!==0)t.e.push(new A.Dk(e.ae(0,D.fpq),f,B.hc))},
$S:z+39}
A.fhs.prototype={
$0(){return this.a.$3(this.b.a,new A.ad(this.c-10,9,2.4),D.a74)},
$S:0}
A.fht.prototype={
$0(){return this.a.$3(this.b.a,new A.ad(this.c-8,9,2.4),D.a74)},
$S:0}
A.fhu.prototype={
$0(){return this.a.$3(this.b.a,new A.ad(this.c+8,9,2.4),D.a74)},
$S:0}
A.fhz.prototype={
$4(d,e,f,g){var w,v,u,t,s=this
if(B.d.bf(s.a,new A.fhA(d))<0||!s.b.e.t(0,d))return
w=s.b.f.h(0,d)
v=(w==null?0:w)>=1
w=s.c
u=9260+g
w.b=u
t=v?e:e.ae(0,f.aK(0,1.7))
w.f_(t.aB(0,f.aK(0,0.6)),t.ae(0,f.aK(0,0.6)),1.12,D.p7,0.35,8)
w.yF(t.aB(0,f.aK(0,0.62)),t.aB(0,f.aK(0,0.5)),1.2,0.5,D.UP,0.2,8)
w=v?"Tight.":"Loose. Tap it with the wrench to tighten it."
s.d.n(0,u,new A.dM("Slip nut",w,e,10))},
$S:z+40}
A.fhA.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.fxo.prototype={
$1(d){var w,v=this
A:{if("vhot"===d||"hhot"===d){w=new A.ad(v.a-8,9,2)
break A}if("vcold"===d||"hcold"===d){w=new A.ad(v.a+8,9,2)
break A}if("tvalve"===d||"those"===d){w=new A.ad(v.b-10,9,2)
break A}if("bolts"===d){w=new A.ad(v.b,2,17)
break A}if("faucet"===d){w=new A.ad(v.a,30,8)
break A}if("tail"===d){w=new A.ad(v.a,22,8)
break A}if("trap"===d){w=new A.ad(v.a,24.7,8)
break A}w=new A.ad(v.a+8.9,23.6,8)
break A}return w},
$S:z+41}
A.fxn.prototype={
$1(d){return d.a===this.a},
$S:z+3}
A.ebG.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ebH.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ebF(w))},
$S:0}
A.ebF.prototype={
$0(){return this.a.z=null},
$S:0}
A.ebw.prototype={
$0(){return this.a.y=0},
$S:0}
A.ebC.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ebD.prototype={
$0(){var w=this.a
w.abO()
w.y=this.b},
$S:0}
A.ebE.prototype={
$1(d){return this.a.c0G()},
$S:8}
A.ebv.prototype={
$1(d){var w,v=null,u=this.a,t=u.e
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.b.toLowerCase()+" is finished and nothing leaks.\n\nMistakes: "+t.w+"\n\nThe next job is different.",v,v,v,v,v,v,D.a60,v,v,v)
return C.eh(C.a([C.bJ(!1,D.aOA,v,v,!0,v,v,new A.ebt(d),v,v),C.bI(D.f8f,new A.ebu(u,d),v)],x.p),v,v,D.mH,t,v,v,v,v,D.f9O,v)},
$S:19}
A.ebt.prototype={
$0(){C.a4(this.a,!1).N(null)
return null},
$S:0}
A.ebu.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.aUI()},
$S:0}
A.ebB.prototype={
$0(){var w,v,u=this.a
u.d=B.o.F(Date.now(),1e5)
w=u.gC0(0)
v=u.e
v===$&&C.c()
u.e=A.h0R(v.b,w)
u.x=""
u.as=!1
u.z=null
u.y=0
u.abO()},
$S:0}
A.ebs.prototype={
$0(){var w=this.a
return w.m(new A.ebr(w,this.b,this.c))},
$S:0}
A.ebr.prototype={
$0(){var w=this.a
w.x=this.b?"":this.c
w.abO()},
$S:0}
A.ebI.prototype={
$1(d){var w=this.a.e
w===$&&C.c()
return w.e.t(0,d.a)},
$S:z+3}
A.ebL.prototype={
$0(){return this.a.bWc(this.b)},
$S:0}
A.ebK.prototype={
$1(d){return d<=5},
$S:31}
A.ebJ.prototype={
$1(d){var w=this.a,v=w.e
v===$&&C.c()
return A.hY0(v,w.w.gF4()/1000)},
$S:z+10}
A.ebA.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.e
n===$&&C.c()
w=x.p
n=C.a([D.fkQ,B.au,C.d("Mistakes "+n.w,p,p,p,p,p,p,D.Sd,p,p,p),B.S],w)
v=o.e.c
v===$&&C.c()
v=v.c
u=v.length
t=0
for(;t<u;++t){s=v[t]
r=B.c.j(0.05)
q=new C.aX(12,12)
n.push(C.p(p,new C.x((o.e.e.t(0,s.a)?"\u2705":"\ud83d\udd27")+" "+s.c,p,D.eLW,p,p,p,p,p,p,p,p,p),B.f,p,p,new C.o(r,p,p,new C.bt(q,q,q,q),p,p,B.n),p,p,p,B.f2,B.bR,p,p,p))}n.push(B.ao)
n.push(D.f0n)
n.push(B.P)
n.push(C.A(C.a([D.brE,C.au3(p,p,p,p,!1,B.y,p,p,p,p,p,p,new A.eby(o,d),p,p,p,p,p,p,p,p,o.e.b)],w),B.m,p,B.e,B.j,0,p,p))
n.push(C.bI(D.aOC,new A.ebz(o,d),p))
return C.bq(!0,C.cK(n,p,B.c0,p,p,B.ai,!0),!0,!1,B.ah,!0,!0)},
$S:32}
A.eby.prototype={
$1(d){var w=this.a
w.m(new A.ebx(w,d))
C.a4(this.b,!1).N(null)},
$S:9}
A.ebx.prototype={
$0(){var w=this.a,v=w.e
v===$&&C.c()
v.b=this.b
w.abO()},
$S:0}
A.ebz.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.aUI()},
$S:0}
A.fFE.prototype={
$1(d){return d.a===this.a},
$S:z+27}
A.cjV.prototype={
$1(d){return!this.a.y.t(0,d)},
$S:31}
A.cjW.prototype={
$1(d){var w=this.a
return w.x.aj(0,d)&&w.z.t(0,d)},
$S:31}
A.cjX.prototype={
$1(d){var w=$.Kq()[this.b],v=!1
if(w>=d)if(w<=d+48){w=this.a.Q.h(0,d)
w=(w==null?null:w.a)===!0}else w=v
else w=v
return w},
$S:31}
A.cjY.prototype={
$1(d){return this.a.Q.h(0,d).c.t(0,this.b)},
$S:31}
A.ck_.prototype={
$1(d){var w,v=J.e0(6,x.S)
for(w=0;w<6;++w)v[w]=w
return B.d.d8(v,new A.cjZ(this.a,d))},
$S:31}
A.cjZ.prototype={
$1(d){return this.a.c.t(0,this.b*10+d)},
$S:31}
A.cjO.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.a)===!0},
$S:31}
A.cjM.prototype={
$1(d){return!A.lJ(d).c},
$S:31}
A.cjN.prototype={
$1(d){var w=this.a.ang(A.lJ(d).d.a)
return(w==null?null:w.b.t(0,d))===!0},
$S:31}
A.cjT.prototype={
$1(d){return d.c},
$S:z+4}
A.cjU.prototype={
$1(d){return d.d},
$S:z+4}
A.cjP.prototype={
$1(d){return d.d},
$S:z+4}
A.cjQ.prototype={
$1(d){var w=this.a.Q.h(0,d)
return(w==null?null:w.e)===!0},
$S:31}
A.cjR.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.ck0.prototype={
$2(d,e){return e===this.a},
$S:390}
A.cjS.prototype={
$1(d){return d.c===this.a},
$S:z+5}
A.eg_.prototype={
$0(){var w=this.a
w.ax=this.b
w.ay=this.c},
$S:0}
A.eg0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.efZ(w))},
$S:0}
A.efZ.prototype={
$0(){return this.a.ax=null},
$S:0}
A.eff.prototype={
$0(){return this.a.CW=!0},
$S:0}
A.efg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.efe(w))},
$S:11}
A.efe.prototype={
$0(){return this.a.CW=!1},
$S:0}
A.efh.prototype={
$1(d){return this.a.bK_()},
$S:8}
A.efi.prototype={
$1(d){return this.a.c0L()},
$S:8}
A.efq.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.efj.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.efI.prototype={
$0(){var w=this.a
w.Q=this.b
w.z=w.at=""
w.ch=!1},
$S:0}
A.efr.prototype={
$0(){var w=this.a
w.Q=-1
w.at=""},
$S:0}
A.efX.prototype={
$0(){return this.a.as=0},
$S:0}
A.efY.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.efW.prototype={
$0(){return this.a.as=2000+this.b},
$S:0}
A.efU.prototype={
$0(){return this.a.as=0},
$S:0}
A.efV.prototype={
$0(){return this.a.as=3000+this.b},
$S:0}
A.efQ.prototype={
$1(d){return d.a===this.a},
$S:z+13}
A.efR.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.efS.prototype={
$0(){var w=this.a
w.at=""
w.as=0},
$S:0}
A.efT.prototype={
$0(){return this.a.as=5000+this.b*100+this.c},
$S:0}
A.efp.prototype={
$1(d){var w=null
return C.eh(C.a([C.bJ(!1,D.fbJ,w,w,!0,w,w,new A.efn(d),w,w),C.bI(B.Ih,new A.efo(this.a,d),w)],x.p),w,w,D.mH,D.f1v,w,w,w,w,D.f8D,w)},
$S:19}
A.efn.prototype={
$0(){C.a4(this.a,!1).N(null)
return null},
$S:0}
A.efo.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.aux(!0)},
$S:0}
A.efm.prototype={
$1(d){var w,v=null,u=this.a,t=u.d
t===$&&C.c()
w=t.c
w===$&&C.c()
t=C.d("The "+w.toLowerCase()+" is built, wired, painted and tested.\n\nMistakes: "+t.f+"\nShocks: "+t.r+"\nLives left: "+t.e+"\n\nEvery job is a little different. Ready for another one?",v,v,v,v,v,v,D.a60,v,v,v)
return C.eh(C.a([C.bJ(!1,D.flE,v,v,!0,v,v,new A.efk(d),v,v),C.bI(D.f8w,new A.efl(u,d),v)],x.p),v,v,D.mH,t,v,v,v,v,D.fg2,v)},
$S:19}
A.efk.prototype={
$0(){C.a4(this.a,!1).N(null)
return null},
$S:0}
A.efl.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.aVH()},
$S:0}
A.efs.prototype={
$0(){var w,v,u
if(!this.b)this.a.e=B.o.F(Date.now(),1e5)
w=this.a
v=w.gC0(0)
u=w.d
u===$&&C.c()
w.d=A.h1p(u.b,v)
w.y=0
w.z=""
w.Q=-1
w.at=""
w.as=0
w.cx=!1
w.x.a8(0)
w.ax=null
w.r=A.FE(w.d,new A.xq(w.z,w.Q,!1))},
$S:0}
A.efG.prototype={
$1(d){return new C.J(d,new A.efH(),d.$ti.k("J<aj.E,n>")).aH(0,", ")},
$S:1792}
A.efH.prototype={
$1(d){return A.lJ(d).b},
$S:77}
A.eft.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.x.aj(0,d.a)},
$S:z+5}
A.efu.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.z.t(0,d.a)},
$S:z+5}
A.efv.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
return!w.y.t(0,d)},
$S:31}
A.efy.prototype={
$1(d){return!d.a},
$S:z+4}
A.efz.prototype={
$1(d){return d.b<3},
$S:z+4}
A.efA.prototype={
$1(d){return!d.c},
$S:z+4}
A.efB.prototype={
$1(d){return!d.d},
$S:z+4}
A.efC.prototype={
$1(d){return!d.c},
$S:z+4}
A.efD.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.a
return w!==d.b},
$S:z+5}
A.efE.prototype={
$1(d){return d.a},
$S:z+32}
A.efF.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=w==null?null:w.b.c
return(w==null?0:w)<2},
$S:z+5}
A.efw.prototype={
$1(d){var w=d.b
if(w==="outlet"||w==="gfci"){w=this.a.d
w===$&&C.c()
w=w.at.h(0,d.a)
w=(w==null?null:w.c)!==!0}else w=!1
return w},
$S:z+5}
A.efx.prototype={
$1(d){return d.b==="fan"},
$S:z+5}
A.egc.prototype={
$0(){return this.a.c9i(this.b)},
$S:0}
A.ege.prototype={
$0(){var w=this.a
if(w.Q>=0)w.abP()
else{w.m(new A.eg4(w))
w.ax6()}},
$S:0}
A.eg4.prototype={
$0(){return this.a.as=0},
$S:0}
A.egd.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.hYf(v,w.w.gF4()/1000,w.x)},
$S:z+10}
A.eg7.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.km(v.beP())},
$S:0}
A.eg8.prototype={
$0(){var w=this.a
return w.m(new A.eg6(w,this.b))},
$S:0}
A.eg6.prototype={
$0(){var w,v=this.b.b
v.f=!v.f
v=this.a
w=v.d
w===$&&C.c()
v.r=A.FE(w,new A.xq(v.z,v.Q,!1))},
$S:0}
A.eg9.prototype={
$0(){var w=this.a
return w.m(new A.eg5(w,this.b))},
$S:0}
A.eg5.prototype={
$0(){var w,v=this.b.b
v.e=!v.e
v=this.a
w=v.d
w===$&&C.c()
v.r=A.FE(w,new A.xq(v.z,v.Q,!1))},
$S:0}
A.egf.prototype={
$0(){var w=this.a
return w.m(new A.eg3(w,this.b))},
$S:0}
A.eg3.prototype={
$0(){var w,v=this.a
v.y=this.b
v.z=""
w=v.d
w===$&&C.c()
v.r=A.FE(w,new A.xq("",v.Q,!1))},
$S:0}
A.egg.prototype={
$0(){var w=this.a
return w.m(new A.eg2(w,this.b))},
$S:0}
A.eg2.prototype={
$0(){var w,v=this.a,u=this.b.a,t=v.z===u?"":u
v.z=t
v.as=0
w=v.d
w===$&&C.c()
v.r=A.FE(w,new A.xq(t,v.Q,!1))
if(v.z.length!==0)v.cjT(u)},
$S:0}
A.egh.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.km(v.cIY())},
$S:0}
A.egi.prototype={
$0(){var w=this.a
return w.m(new A.eg1(w,this.b,this.c))},
$S:0}
A.eg1.prototype={
$0(){var w,v=this,u=v.c,t=u.a
if(v.b.b.b.jd(0,t)){v.a.aVJ("That wire is already fastened. Tap the wire in the 3D view to take it off.")
return}w=v.a
if(w.at===t)t=""
w.at=t
if(t.length!==0){t=u.e
if(t==="neutral")t=0.85
else t=t==="hot"?-0.85:0.1
w.f.biE(9,t)
w.Y1(u.b+": now tap the place it belongs on.",!0)}},
$S:0}
A.egj.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.km(v.cNd(w.Q))},
$S:0}
A.egk.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.km(v.cN7(w.Q))},
$S:0}
A.ega.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
return w.km(v.cDe(w.Q))},
$S:0}
A.egb.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&C.c()
w=u.cO8(v.Q)
v.km(w)
if(w.a)v.abP()},
$S:0}
A.efP.prototype={
$1(d){return new C.e5(new A.efO(this.a),null)},
$S:20}
A.efO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.aI(d,l,x.l).w,j=this.a,i=j.d
i===$&&C.c()
w=i.c
w===$&&C.c()
v=x.p
i=C.a([C.d("Job: "+w,l,l,l,l,l,l,B.dI,l,l,l),B.au,C.d("Mistakes "+i.f+" \xb7 Shocks "+i.r+" \xb7 Lives "+i.e,l,l,l,l,l,l,D.Sd,l,l,l),B.S,D.fcg,B.ao],v)
w=j.d.d
w===$&&C.c()
u=0
for(;u<4;++u){t=w[u]
s=B.c.j(0.05)
r=new C.aX(12,12)
q=new C.aA(B.bE,1,B.r,-1)
p=t.a
o=j.d.at.h(0,p)
o=(o==null?l:o.b.c)===2?"\u2705":"\u2b1c"
n=t.b
if(n==="gfci")n="A GFCI outlet"
else if(n==="outlet")n="An outlet"
else if(n==="switch")n="A light switch"
else n=n==="light"?"A ceiling light":"A ceiling fan"
p=A.lJ(p)
m=t.c
m=m!=null?", turned on by "+A.lJ(m).b:""
i.push(C.p(l,new C.x(o+" "+n+" at "+p.b+m,l,B.rj,l,l,l,l,l,l,l,l,l),B.f,l,l,new C.o(s,l,new C.bU(q,q,q,q),new C.bt(r,r,r,r),l,l,B.n),l,l,l,B.f2,B.bR,l,l,l))}i.push(B.S)
i.push(C.A(C.a([D.bsC,C.au3(l,l,l,l,!1,B.y,l,l,l,l,l,l,new A.efL(j,e),l,l,l,l,l,l,l,l,j.d.b)],v),B.m,l,B.e,B.j,0,l,l))
i.push(B.ao)
i.push(C.A(C.a([C.D(C.dW(D.f2C,new A.efM(j,d),l),1),B.ab,C.D(C.bI(D.aOC,new A.efN(j,d),l),1)],v),B.m,l,B.e,B.j,0,l,l))
return C.bq(!0,new C.cW(new C.aY(0,1/0,0,k.a.b*0.8),C.cK(i,l,B.c0,l,l,B.ai,!0),l),!0,!1,B.ah,!0,!0)},
$S:96}
A.efL.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
v.b=d
for(v=v.at,v=new C.ds(v,v.r,v.e);v.C();)v.d.b.r=d
this.b.$1(new A.efJ())
w.m(new A.efK())},
$S:9}
A.efJ.prototype={
$0(){},
$S:0}
A.efK.prototype={
$0(){},
$S:0}
A.efM.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.aux(!0)},
$S:0}
A.efN.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.aVH()},
$S:0}
A.fbs.prototype={
$1(d){var w=this.a,v=d.a
return w>v[0]&&w<v[1]},
$S:712}
A.fbt.prototype={
$1(d){var w=this.a,v=d.a
return w>v[2]&&w<v[3]},
$S:712}
A.fhH.prototype={
$1(d){return 5000+this.a.a*100+d},
$S:75}
A.fhI.prototype={
$1(d){return 3000+this.a.a},
$S:75}
A.fhJ.prototype={
$1(d){return 2000+this.a.a},
$S:75}
A.fhL.prototype={
$5$col$round(d,e,f,g,h){var w=this.a
w.b=d
w.d=0.5
w.e=0.9
if(h)w.AP(e.aB(0,D.CF),e.ae(0,D.CF),f.a/2,g,14)
else w.ja(e,f,g)
w.e=0
w.d=1},
$3(d,e,f){return this.$5$col$round(d,e,f,B.b4,!1)},
$4$round(d,e,f,g){return this.$5$col$round(d,e,f,B.b4,g)},
$4$col(d,e,f,g){return this.$5$col$round(d,e,f,g,!1)},
$S:z+47}
A.fhK.prototype={
$0(){var w,v=this.a
if(v.c)w="A place in the ceiling for a "+(v.e==="fan"?"fan (needs a fan-rated box)":"light")+"."
else w="A place on the wall at "+(v.e==="switch"?"switch height, about 48 inches from the floor":"outlet height, about 16 inches from the floor")+"."
return new A.dM(v.b,w,A.a1o(v,D.a70),26)},
$S:z+48}
A.fxI.prototype={
$1(d){return d.e==="fan"},
$S:z+27}
A.fxJ.prototype={
$1(d){return d.b==="light"},
$S:z+5}
A.cn7.prototype={
$1(d){return d.a===this.a&&!d.c},
$S:z+11}
A.cn3.prototype={
$1(d){return d.a===D.Yd},
$S:z+11}
A.cn5.prototype={
$1(d){return d.c},
$S:z+11}
A.cn6.prototype={
$1(d){return d.c},
$S:z+11}
A.cn4.prototype={
$1(d){return D.vp.h(0,d.a).e===this.a&&!d.c},
$S:z+11}
A.ehH.prototype={
$0(){var w=this.a
w.z=this.b
w.Q=this.c},
$S:0}
A.ehI.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ehG(w))},
$S:0}
A.ehG.prototype={
$0(){return this.a.z=null},
$S:0}
A.ehw.prototype={
$0(){return this.a.y=0},
$S:0}
A.ehB.prototype={
$0(){return this.a.as=!0},
$S:0}
A.ehC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ehA(w))},
$S:11}
A.ehA.prototype={
$0(){return this.a.as=!1},
$S:0}
A.ehD.prototype={
$0(){var w=this.a,v=w.d
v===$&&C.c()
w.r=A.a0s(v.d)
w.y=this.b},
$S:0}
A.ehE.prototype={
$1(d){return this.a.c9p()},
$S:8}
A.ehF.prototype={
$1(d){return this.a.c0Q()},
$S:8}
A.ehz.prototype={
$1(d){var w=null
return C.eh(C.a([C.bI(D.f9J,new A.ehy(this.a,d),w)],x.p),w,w,D.mH,D.f8T,w,w,w,w,D.feP,w)},
$S:19}
A.ehy.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.atZ()},
$S:0}
A.ehv.prototype={
$1(d){var w=null,v=this.a,u=v.d
u===$&&C.c()
u=C.d("Every problem on the customer's list is fixed.\n\nMistakes: "+u.f+"\nShocks: "+u.r+"\nLives left: "+u.e+"\n\nThe next call will have different problems.",w,w,w,w,w,w,D.a60,w,w,w)
return C.eh(C.a([C.bJ(!1,D.aOA,w,w,!0,w,w,new A.eht(d),w,w),C.bI(D.faX,new A.ehu(v,d),w)],x.p),w,w,D.mH,u,w,w,w,w,D.fh2,w)},
$S:19}
A.eht.prototype={
$0(){C.a4(this.a,!1).N(null)
return null},
$S:0}
A.ehu.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.atZ()},
$S:0}
A.ehx.prototype={
$0(){var w,v,u=this.a
u.e=B.o.F(Date.now(),1e5)
w=u.gC0(0)
v=u.d
v===$&&C.c()
w=A.h1z(v.b,w)
u.d=w
u.r=A.a0s(w.d)
u.at=!1
u.z=null
u.y=0},
$S:0}
A.ehU.prototype={
$0(){return this.a.ctr(this.b)},
$S:0}
A.ehQ.prototype={
$1(d){return d<=5},
$S:31}
A.ehP.prototype={
$1(d){var w=this.a,v=w.d
v===$&&C.c()
return A.h9P(v.d,w.w.gF4()/1000)},
$S:z+10}
A.ehR.prototype={
$1(d){return!d.c},
$S:z+11}
A.ehS.prototype={
$1(d){return D.vp.h(0,d.a).a},
$S:z+50}
A.ehT.prototype={
$0(){var w=this.a
return w.m(new A.ehO(w,this.b))},
$S:0}
A.ehO.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ehN.prototype={
$1(d){return new C.e5(new A.ehM(this.a),null)},
$S:20}
A.ehM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.a,j=k.d
j===$&&C.c()
w=x.p
j=C.a([D.f7o,B.au,C.d("Mistakes "+j.f+" \xb7 Shocks "+j.r+" \xb7 Lives "+j.e,l,l,l,l,l,l,D.Sd,l,l,l),B.S],w)
v=k.d.c
v===$&&C.c()
u=v.length
t=0
for(;t<v.length;v.length===u||(0,C.K)(v),++t){s=v[t]
r=B.c.j(0.05)
q=new C.aX(14,14)
p=new C.aA(s.c?B.bb.j(0.6):B.bE,1,B.r,-1)
o=s.c?"\u2705":"\ud83d\udd27"
n=D.vp.h(0,s.a).a
m=s.c?B.aA:B.c
j.push(C.p(l,new C.x(o+" "+n,l,new C.F(!0,m,l,l,l,l,13.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),B.f,l,l,new C.o(r,l,new C.bU(p,p,p,p),new C.bt(q,q,q,q),l,l,B.n),l,l,l,B.cK,B.bm,l,l,l))}j.push(B.ao)
j.push(D.fcq)
j.push(B.P)
j.push(C.A(C.a([D.brD,C.au3(l,l,l,l,!1,B.y,l,l,l,l,l,l,new A.ehK(k,e),l,l,l,l,l,l,l,l,k.d.b)],w),B.m,l,B.e,B.j,0,l,l))
j.push(C.bI(D.ffe,new A.ehL(k,d),l))
return C.bq(!0,C.cK(j,l,B.c0,l,l,B.ai,!0),!0,!1,B.ah,!0,!0)},
$S:96}
A.ehK.prototype={
$1(d){var w=this.a.d
w===$&&C.c()
w.b=d
this.b.$1(new A.ehJ())},
$S:9}
A.ehJ.prototype={
$0(){},
$S:0}
A.ehL.prototype={
$0(){C.a4(this.b,!1).N(null)
this.a.atZ()},
$S:0}
A.f71.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:217}
A.f72.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:217}
A.f73.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:217}
A.f7a.prototype={
$1(d){return!J.q(d,0)},
$S:217}
A.f7b.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:217}
A.f7c.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:217}
A.dDt.prototype={
$1(d){return this.a.aqV(0)},
$S:8}
A.dD7.prototype={
$0(){var w=this.b
return this.a.cx=new C.J(w,C.hOo(),C.T(w).k("J<1,H>")).fF(0)},
$S:0}
A.dDa.prototype={
$1(d){return""+d},
$S:77}
A.dDu.prototype={
$1(d){return d.b==="buzzer"},
$S:z+17}
A.dD5.prototype={
$1(d){return this.a.aqV(this.b)},
$S:8}
A.dD6.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.auB(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.md(0,d,a1.lG(0.15,0.3))
u=a1.md(0,d,a1.lG(0.15,0.62))
t=a1.md(0,"and",a1.lG(0.48,0.46))
s=a1.md(0,a0,a1.lG(0.82,0.46))
a1=t.a
w.push(new A.n7(v.a,a1,0))
w.push(new A.n7(u.a,a1,1))
w.push(new A.n7(a1,s.a,0))
break
case 1:v=a1.md(0,d,a1.lG(0.12,0.25))
u=a1.md(0,d,a1.lG(0.12,0.65))
r=a1.md(0,"xor",a1.lG(0.46,0.25))
q=a1.md(0,"and",a1.lG(0.46,0.65))
p=a1.auA(0,a0,a1.lG(0.82,0.25),0)
o=a1.auA(0,a0,a1.lG(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new A.n7(a1,n,0))
m=u.a
w.push(new A.n7(m,n,1))
l=q.a
w.push(new A.n7(a1,l,0))
w.push(new A.n7(m,l,1))
w.push(new A.n7(n,p.a,0))
w.push(new A.n7(l,o.a,0))
break
case 2:k=a1.md(0,"clock",a1.lG(0.15,0.4))
j=a1.md(0,"not",a1.lG(0.45,0.65))
s=a1.md(0,a0,a1.lG(0.82,0.3))
i=a1.md(0,"buzzer",a1.lG(0.82,0.65))
a1=k.a
w.push(new A.n7(a1,s.a,0))
n=j.a
w.push(new A.n7(a1,n,0))
w.push(new A.n7(n,i.a,0))
break
default:h=a1.md(0,d,a1.lG(0.12,0.25))
g=a1.md(0,d,a1.lG(0.12,0.7))
f=a1.md(0,"nor",a1.lG(0.5,0.25))
e=a1.md(0,"nor",a1.lG(0.5,0.7))
s=a1.md(0,a0,a1.lG(0.86,0.25))
a1=f.a
w.push(new A.n7(g.a,a1,0))
n=e.a
w.push(new A.n7(n,a1,1))
w.push(new A.n7(h.a,n,0))
w.push(new A.n7(a1,n,1))
w.push(new A.n7(a1,s.a,0))}},
$S:0}
A.dDb.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.auB(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new A.BE(p,"switch",new C.u(0.14*q.a,r*q.b),0))}o.md(0,w.e,o.lG(0.86,0.5))},
$S:0}
A.dD0.prototype={
$1(d){return d.b==="switch"},
$S:z+17}
A.dD1.prototype={
$2(d,e){return B.k.aL(d.c.b,e.c.b)},
$S:z+52}
A.dD2.prototype={
$1(d){return d.b===this.a.e},
$S:z+17}
A.dD3.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
A.dD4.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aaT(this.c)
if(v.ax)A.B2("bell",C.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+B.d.gK(w)
v.CW=!1
if(v.ax)A.dD(140,"",250,0,0.3,"square")}},
$S:0}
A.dDc.prototype={
$0(){},
$S:0}
A.dDd.prototype={
$0(){return B.d.cw(this.a.e,this.b)},
$S:0}
A.dDe.prototype={
$0(){return this.a.cy=null},
$S:0}
A.dD9.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
B.d.bn(w.e,new A.dD8(v))
w.cy=null},
$S:0}
A.dD8.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+28}
A.dD_.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.md(0,this.b,new C.u(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
A.dDn.prototype={
$0(){var w=this.a
return w.m(new A.dDm(w))},
$S:0}
A.dDm.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.dDo.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.x=u
return C.aE(B.c5,C.jp(C.b3(w,w,w,new A.b8Y(v,w),u),B.q,w),B.y,!1,w,w,w,w,w,w,w,w,new A.dDh(v),w,w,w,new A.dDi(v),new A.dDj(v),new A.dDk(v),w,w,w,w,w,w,w,w,w,w,new A.dDl(v),w,w,w,!1,B.aa)},
$S:35}
A.dDl.prototype={
$1(d){return this.a.c0Y(d.b)},
$S:50}
A.dDj.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.c9k(u)
if(t!=null){v.as=t
v.at=u
return}w=v.avo(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aB(0,u)}},
$S:44}
A.dDk.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new C.u(B.k.D(w.a+u.Q.a,46,u.x.a-46),B.k.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:18}
A.dDi.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.bU0(t.at)
if(w!=null&&w.a!==t.as){v=t.e
B.d.bn(v,new A.dDf(w))
u=t.as
u.toString
v.push(new A.n7(u,w.a,w.b))
C.jJ()}}t.z=t.as=null},
$S:37}
A.dDf.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+28}
A.dDh.prototype={
$1(d){return this.a.ats(d.b)},
$S:302}
A.dDp.prototype={
$0(){return this.a.bvy(this.b.a)},
$S:0}
A.dDq.prototype={
$0(){return this.a.aqV(this.b.a)},
$S:0}
A.dDr.prototype={
$0(){var w=this.a
return w.m(new A.dDg(w))},
$S:0}
A.dDg.prototype={
$0(){var w=this.a
w.auB(0)
w.ay=null},
$S:0}
A.dDs.prototype={
$0(){return this.a.cq4(this.b)},
$S:0}
A.cIH.prototype={
$0(){var w=this,v=null,u=C.ih(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a5,B.ci,v,B.eq,B.cg)
u.eR()
return u},
$S:327}
A.dIG.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.dIF.prototype={
$0(){return this.a.d=null},
$S:0}
A.dII.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.bVN()},
$S:120}
A.dIH.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.f7s.prototype={
$0(){return D.dPb},
$S:z+55}
A.f7t.prototype={
$0(){return D.dnh},
$S:z+56}
A.f7u.prototype={
$0(){return D.aCk},
$S:z+57}
A.f7F.prototype={
$0(){return D.dka},
$S:z+58}
A.f7I.prototype={
$0(){return D.dOB},
$S:z+59}
A.f7J.prototype={
$0(){return D.dtF},
$S:z+60}
A.f7K.prototype={
$0(){return D.dnd},
$S:z+61}
A.f7L.prototype={
$0(){return D.dng},
$S:z+62}
A.f7M.prototype={
$0(){return D.dgl},
$S:z+63}
A.f7N.prototype={
$0(){return D.dpL},
$S:z+64}
A.f7O.prototype={
$0(){return D.drn},
$S:z+65}
A.f7v.prototype={
$0(){return D.drp},
$S:z+66}
A.f7w.prototype={
$0(){return D.dmp},
$S:z+67}
A.f7x.prototype={
$0(){return D.dwq},
$S:z+68}
A.f7y.prototype={
$0(){return D.dOi},
$S:z+69}
A.f7z.prototype={
$0(){return D.dMj},
$S:z+70}
A.f7A.prototype={
$0(){return D.dv3},
$S:z+71}
A.f7B.prototype={
$0(){return D.dOq},
$S:z+72}
A.f7C.prototype={
$0(){return D.dmo},
$S:z+73}
A.f7D.prototype={
$0(){return D.dOA},
$S:z+74}
A.f7E.prototype={
$0(){return D.dmq},
$S:z+75}
A.f7G.prototype={
$0(){return D.drF},
$S:z+76}
A.f7H.prototype={
$0(){return D.dv2},
$S:z+77}
A.eOU.prototype={
$2(d,e){return new A.ads($.bBH()[e],new A.eOT(e,this.a),null)},
$S:z+78}
A.eOT.prototype={
$0(){var w=this.a,v=D.aB8.h(0,$.bBH()[w].a)
$.aq8=v==null?"music":v
C.a4(this.b,!1).ci(C.eo(new A.eOR(w),!1,null,x.H))},
$S:0}
A.eOR.prototype={
$1(d){return $.bBH()[this.a].e.$0()},
$S:39}
A.eOV.prototype={
$2(d,e){return new A.acm(D.au2[e],new A.eOS(this.a,e),null)},
$S:z+79}
A.eOS.prototype={
$0(){return this.a.d.$1(D.au2[this.b])},
$S:0}
A.eOA.prototype={
$0(){return this.a.as=!0},
$S:0}
A.eOz.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eOy.prototype={
$1(d){var w=this
return new C.e5(new A.eOx(w.a,w.b,w.c,w.d),null)},
$S:20}
A.eOx.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=C.aI(a2,d,a0).w
a0=C.aI(a2,d,a0).w
w=x.p
v=C.a([D.f4m,B.au,D.fay,B.ac],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new C.aX(12,12)
m=new C.aX(12,12)
m=C.a([new C.bG(1,B.bn,C.aL(d,B.T,!1,d,!0,B.q,d,C.aM(),r[p],d,d,d,d,d,2,new C.e_(d,d,d,d,d,d,d,d,d,d,"Title",d,I.Cz,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bt(n,n,n,n),B.Z),!0,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.iC,!0,B.a5,d,B.am,d,d,d,d),d),B.ab,new C.bG(2,B.bn,C.aL(d,B.T,!1,d,!0,B.q,d,C.aM(),q[p],d,d,d,d,d,2,new C.e_(d,d,d,d,d,d,d,d,d,d,"Small line",d,I.Cz,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,B.c.j(0.06),d,d,d,d,d,d,d,new C.b4(4,new C.bt(m,m,m,m),B.Z),!0,d,d,d,d),B.y,!0,d,!0,d,!1,d,B.ag,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,B.a8,d,d,d,d,d,d,d,d,d,d,d,B.iC,!0,B.a5,d,B.am,d,d,d,d),d)],w)
n=C.a([],w)
for(l=0;l<30;++l){k=D.d7G[l]
j=new C.aX(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}h=B.d.gK(i).j(0.3)}else h=B.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=C.B(t.a.c.d,s)
t.w=i}g=B.d.gK(i)}else g=B.bE
f=new C.aA(g,u[p].A(0,k)?1.8:1,B.r,-1)
n.push(C.aE(d,C.p(d,C.V(k,u[p].A(0,k)?B.c:B.aQ,d,d,d,22),B.f,d,d,new C.o(h,d,new C.bU(f,f,f,f),new C.bt(j,j,j,j),d,d,B.n),d,d,d,B.fM,d,d,d,42),B.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.eOv(a3,p,u,k),d,d,d,d,d,d,!1,B.aa))}B.d.v(v,C.a([new C.x("SLAB "+o,d,D.eVw,d,d,d,d,d,d,d,d,d),B.ao,new C.cs(B.aX,B.e,B.j,B.m,d,B.p,d,0,m,d),B.P,new C.a5(d,44,C.cK(n,d,d,d,d,B.aX,!1),d),B.ay],w))}v.push(C.bI(B.z0,new A.eOw(t,r,q,u,a2),d))
return new C.C(new C.N(0,0,0,a1.f.d),C.bq(!0,new C.cW(new C.aY(0,1/0,0,a0.a.b*0.86),C.cK(v,d,A0.An,d,d,B.ai,!0),d),!0,!1,B.ah,!0,!0),d)},
$S:107}
A.eOv.prototype={
$0(){var w=this
return w.a.$1(new A.eOu(w.b,w.c,w.d))},
$S:0}
A.eOu.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
A.eOw.prototype={
$0(){var w=this,v=w.a
v.m(new A.eOt(v,w.b,w.c,w.d))
C.a4(w.e,!1).N(null)},
$S:0}
A.eOt.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.a,q=0;q<3;++q){p=u.y
if(p===$){p=C.B(u.a.c.f,s)
u.y=p
o=p}else o=p
n=B.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=C.B(u.a.c.r,s)
u.z=p}p[q]=B.a.i(v[q].a.a)
p=u.x
if(p===$){p=C.B(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
A.eOI.prototype={
$0(){var w=this.a
return w.m(new A.eOH(w))},
$S:0}
A.eOH.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.eOJ.prototype={
$0(){return A.qz(this.b,this.a.f,"scene")},
$S:0}
A.eOK.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=C.ar(B.d.gK(u),B.d.gam(u),0.4)
u.toString
w=this.a.gY2().x
w===$&&C.c()
return C.bX(v,new C.o(v,v,v,v,v,new C.bS(D.aSN,0.9,B.x,v,0,C.a([u.j(0.06+0.03*w),B.bW],x.O),v,v),B.n),B.be)},
$S:273}
A.eOL.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return C.av(C.f4(B.A,C.c6(new C.h2(C.a([u.gtt(),u.gY2()],x.U)),new A.eOG(u,this.b,v),w),B.f,B.ef),w,w,w)},
$S:249}
A.eOG.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gtt().x
r===$&&C.c()
w=r<0.9?1:1-A.boF(r,0.9,0.98)
v=s.gY2().x
v===$&&C.c()
u=B.dH.av(0,v)
switch(s.gauC().a){case 0:s=s.buM(t.b,r,u,t.c)
break
case 1:s=s.bKN(t.b,r,u,t.c)
break
case 2:s=s.cuF(t.b,r,u,t.c)
break
case 3:s=s.bxE(t.b,r,u,t.c)
break
case 4:s=s.bAO(t.b,r,u,t.c)
break
case 5:s=s.bA1(t.b,r,u,t.c)
break
default:s=null}return C.db(s,w)},
$S:211}
A.eOM.prototype={
$2(d,e){var w=C.aty(this.b),v=this.c.d,u=C.ar(B.d.gK(v),B.d.gam(v),0.4)
u.toString
v=C.ar(B.d.gK(v),B.d.gam(v),0.4)
v.toString
v=w.cCP(u,B.bE,v,3.5)
u=this.a
w=u.gtt().x
w===$&&C.c()
return C.a8H(C.kQ(null,null,null,1,0,new A.eOF(u),B.k.D(w,0,1)),v)},
$S:1796}
A.eOF.prototype={
$1(d){var w=this.a
w.gtt().sp(0,d)
if(w.as)w.m(new A.eOB(w))},
$S:6}
A.eOB.prototype={
$0(){return this.a.as=!1},
$S:0}
A.eON.prototype={
$0(){var w=this.a
w.gtt().sp(0,0)
w.aee()},
$S:0}
A.eOO.prototype={
$1(d){var w=this.a
w.m(new A.eOE(w,d))
if(w.as)w.aee()},
$S:6}
A.eOE.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eOP.prototype={
$0(){var w=this.a
w.m(new A.eOD(w,this.b))
w.gtt().sp(0,0)
if(w.as)w.aee()},
$S:0}
A.eOD.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.eOQ.prototype={
$0(){var w=this.a
return w.m(new A.eOC(w,this.b))},
$S:0}
A.eOC.prototype={
$0(){var w=C.B(this.b,x.G)
return this.a.w=w},
$S:0}
A.eOr.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:1797}
A.eOs.prototype={
$1(d){return d.b},
$S:1798}
A.dde.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+9}
A.ddf.prototype={
$1(d){return d.b===this.a},
$S:z+18}
A.ddb.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+9}
A.ddc.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.ddd.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.ddg.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+18}
A.ddh.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+18}
A.ddi.prototype={
$1(d){return d.a===this.a},
$S:z+9}
A.ddj.prototype={
$1(d){return d.d<this.a.ax},
$S:z+83}
A.ddk.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+84}
A.ddl.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+85}
A.ddm.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+86}
A.ddn.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+87}
A.ddo.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+88}
A.eec.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.ee1.prototype={
$0(){return this.a.ax=!1},
$S:0}
A.ee3.prototype={
$2(d,e){return d+e.d*7+B.o.F(B.a.gX(e.b),97)},
$S:z+89}
A.ee4.prototype={
$2(d,e){return d+B.o.F(B.a.gX(e.a),31)+B.o.F(B.a.gX(e.b),17)},
$S:z+136}
A.ee7.prototype={
$1(d){var w=D.mi.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[B.o.F(d.d,u)]+")":t},
$S:z+91}
A.ee8.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=C.T(q),o=x.dg,n=C.B(new C.e6(new C.cS(new C.a1(q,new A.ee9(d),p.k("a1<1>")),new A.eea(r),p.k("cS<1,qr?>")),o),o.k("G.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(B.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,C.K)(n),++v){u=n[v]
if(w.length>=6)return
t=C.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+92}
A.ee9.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
A.eea.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+93}
A.ee5.prototype={
$1(d){return D.mi.h(0,d.b).c===D.w3},
$S:z+94}
A.ee6.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
A.eeC.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.wD(0,u)
w.aFJ(B.o.an(v,1000))},
$S:8}
A.eeb.prototype={
$0(){},
$S:0}
A.edY.prototype={
$0(){var w=0,v=C.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=C.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return C.b(C.ay(),$async$$0)
case 6:e.aq("String","ngmy_core_reaction_lab_v1",s.a.d.ad())
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
A.eee.prototype={
$1(d){var w=null,v=this.a.b
return C.bq(!0,C.v(C.a([B.P,C.dO(!1,w,w,w,!0,w,w,w,!0,w,C.V(D.mi.h(0,v).b,D.mi.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fl9,w,C.d(D.mi.h(0,v).a,w,w,w,w,w,w,B.hk,w,w,w),w,w,w),C.dO(!1,w,w,w,!0,w,w,w,!0,w,V.al1,w,w,w,w,new A.eed(d),!1,w,w,w,w,w,w,w,D.fdf,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ah,!0,!0)},
$S:32}
A.eed.prototype={
$0(){C.a4(this.a,!1).N(!0)
return null},
$S:0}
A.eeg.prototype={
$1(d){var w,v,u=null,t=C.aI(d,u,x.l).w,s=C.a([D.dYl],x.p)
for(w=0;w<6;++w){v=D.aul[w]
s.push(C.dO(!1,u,u,u,!0,u,u,u,!0,u,D.bJM,u,u,u,u,new A.eef(d,v),!1,u,u,u,u,u,new C.x(v.b,u,B.lg,u,u,u,u,u,u,u,u,u),u,new C.x(v.a,u,B.hk,u,u,u,u,u,u,u,u,u),u,u,u))}return C.bq(!0,new C.cW(new C.aY(0,1/0,0,t.a.b*0.7),C.cK(s,u,D.bqN,u,u,B.ai,!0),u),!0,!1,B.ah,!0,!0)},
$S:32}
A.eef.prototype={
$0(){C.a4(this.a,!1).N(this.b)
return null},
$S:0}
A.ee0.prototype={
$1(d){var w=null
return C.eh(C.a([C.bJ(!1,B.dd,w,w,!0,w,w,new A.edZ(d),w,w),C.bJ(!1,B.CD,w,w,!0,w,w,new A.ee_(d),w,w)],x.p),w,w,D.mH,D.faJ,w,w,w,w,D.fdw,w)},
$S:19}
A.edZ.prototype={
$0(){C.a4(this.a,!1).N(!1)
return null},
$S:0}
A.ee_.prototype={
$0(){C.a4(this.a,!1).N(!0)
return null},
$S:0}
A.eeA.prototype={
$0(){var w=this.a
return w.m(new A.eez(w))},
$S:0}
A.eez.prototype={
$0(){return this.a.r=!1},
$S:0}
A.eeB.prototype={
$2(d,e){var w,v,u,t=null,s=new C.at(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
C.m2(new A.eeq(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b1e:t
v=C.a([C.b3(u,t,t,new A.beK(w,v,new A.eer(r),new A.ees(r),w),s)],x.p)
if(!r.r&&r.w)v.push(C.ao(t,C.e2(C.c6(w,new A.eet(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bCs())
return C.aE(B.c5,C.jp(new C.an(B.W,t,B.b_,B.q,v,t),B.q,t),B.y,!1,t,t,t,t,t,t,t,t,new A.eeu(r),t,r.gcaB(),t,new A.eev(r),new A.eew(r),new A.eex(r),t,t,t,t,t,t,t,t,t,t,new A.eey(r),t,t,t,!1,B.aa)},
$S:35}
A.eeq.prototype={
$0(){return this.a.aa_(this.b)},
$S:0}
A.eey.prototype={
$1(d){return this.a.cst(d.b)},
$S:50}
A.eew.prototype={
$1(d){return this.a.caC(d.b)},
$S:44}
A.eex.prototype={
$1(d){return this.a.caD(d.b)},
$S:18}
A.eev.prototype={
$1(d){return this.a.aYq()},
$S:37}
A.eeu.prototype={
$1(d){return this.a.aaF(d.b)},
$S:302}
A.eer.prototype={
$0(){return this.a.z},
$S:665}
A.ees.prototype={
$0(){return this.a.Q},
$S:714}
A.eet.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bGH()
if(p.length===0)return B.bH
w=B.w.j(0.55)
v=C.m(14)
u=C.I(B.bE,B.r,1)
t=C.a([D.f8g,B.d_],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,C.K)(p),++r)t.push(new C.x(p[r],q,D.eUj,q,q,q,q,B.a2,q,2,q,q))
return C.p(q,C.v(t,B.F,q,B.e,B.Q,0,B.p),B.f,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.h2,q,q,q)},
$S:58}
A.ee2.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=C.m(12),t=C.I(e.j(0.6),B.r,1),s=x.p
return new C.C(B.e3,C.A(C.a([C.p(w,C.V(d,e,w,w,w,21),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,38,w,w,w,w,w,38),B.bd,C.D(C.v(C.a([C.d(f,w,w,w,w,w,w,A1.Sh,w,w,w),B.bB,C.d(g,w,w,w,w,w,w,D.a6e,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w),w)},
$S:1800}
A.eem.prototype={
$0(){var w=this.a.c
w.toString
return C.a4(w,!1).mn()},
$S:0}
A.een.prototype={
$0(){var w=this.a
return w.m(new A.eel(w))},
$S:0}
A.eel.prototype={
$0(){return this.a.ax=!0},
$S:0}
A.eeo.prototype={
$0(){var w=this.a
return w.m(new A.eek(w))},
$S:0}
A.eek.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
A.eep.prototype={
$0(){var w=this.a
return w.m(new A.eej(w))},
$S:0}
A.eej.prototype={
$0(){return this.a.r=!0},
$S:0}
A.eei.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=C.a([],x.s)
for(w=D.mi.gdK(D.mi),w=w.gah(w);w.C();){v=w.gU(w)
if(v.b.c===e)p.push(v.a)}w=C.d(d,q,q,q,q,q,q,C.l(q,q,B.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,B.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=C.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,C.K)(p),++r)u.push(s.cnw(p[r]))
return new C.C(E.aeF,C.v(C.a([new C.C(P.agh,w,q),C.A(u,B.m,q,B.e,B.j,0,q,q)],v),B.F,q,B.e,B.j,0,B.p),q)},
$S:z+95}
A.eeh.prototype={
$0(){return this.a.c12(this.b)},
$S:0}
A.dda.prototype={
$0(){var w=this,v=null,u=C.ih(v,v,v,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),B.a5,B.ci,v,B.eq,B.cg)
u.eR()
return u},
$S:327}
A.epW.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=B.k.D((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=B.o.an(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new C.u(s.a+q*n,s.b+r*n)
t.b=new C.u(q*v,r*v)}B.d.bn(o,new A.epU(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new A.epV())},
$S:8}
A.epU.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+96}
A.epV.prototype={
$0(){},
$S:0}
A.epx.prototype={
$0(){},
$S:0}
A.epw.prototype={
$0(){},
$S:0}
A.epG.prototype={
$0(){return A.qz(this.b,this.a.d,"spark-painter")},
$S:0}
A.epI.prototype={
$1(d){return this.a.aVO(0,d.b)},
$S:44}
A.epM.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||B.d.gam(w).aB(0,u).gcl()>2.5}else w=!1
if(w)t.a.push(u)
v.aP8(u)
v.c42(u)
return null},
$S:18}
A.epH.prototype={
$1(d){return this.a.aVN()},
$S:37}
A.epN.prototype={
$1(d){return this.a.aVO(0,d.b)},
$S:23}
A.epO.prototype={
$1(d){return this.a.aVN()},
$S:50}
A.epP.prototype={
$0(){var w=this.a
return w.m(new A.epF(w,this.b))},
$S:0}
A.epF.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.epQ.prototype={
$0(){var w=this.a
return w.m(new A.epE(w))},
$S:0}
A.epE.prototype={
$0(){return this.a.Q=-1},
$S:0}
A.epR.prototype={
$0(){var w=this.a
return w.m(new A.epD(w,this.b))},
$S:0}
A.epD.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.epS.prototype={
$1(d){var w=this.a
return w.m(new A.epC(w,d))},
$S:6}
A.epC.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.epT.prototype={
$0(){var w=this.a
return w.m(new A.epB(w))},
$S:0}
A.epB.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.epJ.prototype={
$0(){var w=this.a
return w.m(new A.epA(w))},
$S:0}
A.epA.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.epK.prototype={
$0(){var w=this.a
return w.m(new A.epz(w))},
$S:0}
A.epz.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.epL.prototype={
$0(){var w=this.a
return w.m(new A.epy(w,this.b))},
$S:0}
A.epy.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.ewv.prototype={
$0(){return A.qz(this.b,this.a.d,"title")},
$S:0}
A.eww.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.gHW().x
q===$&&C.c()
w=C.a([],x.p)
for(v=this.b,u=this.c,t=0;s=v.length,t<s;++t)w.push(r.bVW(v[t],t,s,q,u))
return new C.C(B.fv,C.c5(B.fI,w,B.rq,0,0),null)},
$S:696}
A.ewx.prototype={
$1(d){return this.a.m(new A.ewu())},
$S:2}
A.ewu.prototype={
$0(){},
$S:0}
A.ewy.prototype={
$0(){var w=this.a
w.m(new A.ewt(w,this.b))
w=w.gHW()
w.ik(0,0)
w.cF(0)},
$S:0}
A.ewt.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
A.ewz.prototype={
$0(){var w=this.a
return w.m(new A.ews(w,this.b))},
$S:0}
A.ews.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ewA.prototype={
$0(){var w=this.a
return w.m(new A.ewr(w))},
$S:0}
A.ewr.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.ewB.prototype={
$0(){var w=this.a
return w.m(new A.ewq(w,this.b))},
$S:0}
A.ewq.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ewC.prototype={
$0(){var w=this.a.gHW()
w.ik(0,0)
w.cF(0)},
$S:0}
A.ewD.prototype={
$1(d){var w=this.a
return w.m(new A.ewp(w,d))},
$S:6}
A.ewp.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eaS.prototype={
$1(d){return d.a.aB(0,this.a).gcl()<16},
$S:z+29}
A.eaT.prototype={
$1(d){var w=this.b
return d.a.aB(0,w).gcl()<16||d.a.aB(0,w).gcl()>this.a.r.gakx()*2.2},
$S:z+29}
A.eaG.prototype={
$0(){return A.qz(this.b,this.a.d,"orbits")},
$S:0}
A.eaH.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=new C.at(e.b,e.d)
q.r=p
w=q.gabS()
v=q.w
u=q.as
t=q.at
s=u==null?B.a16:q.cef(u,q.gaTh())
return new C.eq(C.aE(B.c5,C.b3(r,r,r,new A.bj1(q.e,w,v,u,t,s,r),p),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,new A.eaD(q),new A.eaE(q),new A.eaF(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,B.aa),q.d)},
$S:198}
A.eaE.prototype={
$1(d){var w=this.a
w.at=w.as=d.b},
$S:44}
A.eaF.prototype={
$1(d){return this.a.at=d.b},
$S:18}
A.eaD.prototype={
$1(d){var w,v=this.a,u=v.as
if(u!=null){w=v.at
w.toString
w=u.aB(0,w).gcl()>8
u=w}else u=!1
if(u){u=v.as
u.toString
v.e.push(new A.ZA(u,v.gaTh(),v.Q,v.aZT(),C.a([],x.g)))
C.jJ()
if(v.ax)A.dD(200,"",380,2.2,0.35,"tri")}v.at=v.as=null},
$S:37}
A.eaI.prototype={
$1(d){var w=this.a
return w.m(new A.eaC(w,d))},
$S:6}
A.eaC.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eaK.prototype={
$1(d){var w=this.a
return w.m(new A.eaB(w,d))},
$S:6}
A.eaB.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.eaL.prototype={
$1(d){var w=this.a
return w.m(new A.eaA(w,d))},
$S:6}
A.eaA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.eaM.prototype={
$0(){var w=this.a
return w.m(new A.eaz(w))},
$S:0}
A.eaz.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.eaN.prototype={
$0(){var w=this.a
return w.m(new A.eay(w))},
$S:0}
A.eay.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.eaO.prototype={
$0(){var w=this.a
return w.m(new A.eax(w))},
$S:0}
A.eax.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.eaP.prototype={
$0(){var w=this.a
return w.m(w.gcpL())},
$S:0}
A.eaQ.prototype={
$0(){var w=this.a
return w.m(w.gbCG())},
$S:0}
A.eaR.prototype={
$0(){var w=this.a
return w.m(new A.eaw(w))},
$S:0}
A.eaw.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.f,u=0;u<10;++u){t=v.ai()
s=w.r
w.ape(50+t*(Math.min(s.a,s.b)/2-70),v.ai()*3.141592653589793*2,0.7+v.ai()*0.5,v.hc())}},
$S:0}
A.eaJ.prototype={
$0(){var w=this.a
return w.m(B.d.gr6(w.e))},
$S:0}
A.evX.prototype={
$1(d){return this.a.fL$-d.b>6000},
$S:715}
A.evY.prototype={
$1(d){var w=this.a.e
return new C.a1(w,new A.evW(d),C.T(w).k("a1<1>")).gM(0)>=3},
$S:715}
A.evW.prototype={
$1(d){return d.a.aB(0,this.a.a).gcl()<14},
$S:z+98}
A.evM.prototype={
$0(){return A.qz(this.b,this.a.d,"swarm")},
$S:0}
A.evN.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.eq(C.aE(B.c5,C.b3(w,w,w,new A.bqp(v.e,v.f,v.ax,v.at,v.ay,v.fL$,w),u),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.evJ(v),new A.evK(v),new A.evL(v),w,w,w,w,w,w,w,w,new A.evB(v),new A.evC(v),new A.evD(v),w,w,w,!1,B.aa),v.d)},
$S:198}
A.evK.prototype={
$1(d){return this.a.ay=d.b},
$S:44}
A.evL.prototype={
$1(d){return this.a.ay=d.b},
$S:18}
A.evJ.prototype={
$1(d){return this.a.ay=null},
$S:37}
A.evC.prototype={
$1(d){var w=this.a,v=d.b
w.ay=v
if(w.at==="food"){w.f.push(new C.z(v,w.fL$))
if(w.ch)A.dD(520,"",140,-0.5,0.35,"sine")}if(w.at==="attract"&&w.ch)A.l6("flute",7,500,0.3)},
$S:23}
A.evD.prototype={
$1(d){return this.a.ay=null},
$S:50}
A.evB.prototype={
$0(){return this.a.ay=null},
$S:0}
A.evO.prototype={
$0(){var w=this.a
return w.m(new A.evI(w,this.b))},
$S:0}
A.evI.prototype={
$0(){return this.a.at=this.b.a},
$S:0}
A.evP.prototype={
$0(){var w=this.a
return w.m(new A.evH(w,this.b))},
$S:0}
A.evH.prototype={
$0(){var w=this.a
w.ax=this.b.a
B.d.a8(w.e)},
$S:0}
A.evQ.prototype={
$0(){var w=this.a
return w.m(new A.evG(w))},
$S:0}
A.evG.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.evR.prototype={
$1(d){var w=this.a
return w.m(new A.evF(w,d))},
$S:6}
A.evF.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.evS.prototype={
$1(d){var w=this.a
return w.m(new A.evE(w,d))},
$S:6}
A.evE.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.evT.prototype={
$1(d){var w=this.a
return w.m(new A.evA(w,d))},
$S:6}
A.evA.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.evU.prototype={
$1(d){var w=this.a
return w.m(new A.evz(w,d))},
$S:6}
A.evz.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.evV.prototype={
$1(d){var w=this.a
return w.m(new A.evy(w,d))},
$S:6}
A.evy.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dCC.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new A.dCB(w,d))},
$S:133}
A.dCB.prototype={
$0(){var w=this.a,v=this.b,u=J.a7(v),t=C.aN(u.h(v,"unlocked"))
t=t==null?null:B.k.O(t)
w.w=B.o.D(t==null?1:t,1,100)
t=C.aN(u.h(v,"level"))
t=t==null?null:B.k.O(t)
if(t==null)t=w.w
w.r=B.o.D(t,1,w.w)
t=C.U(x.N,x.S)
v=x.fF.a(u.h(v,"stars"))
v=J.jo(v==null?B.vr:v)
v=v.gah(v)
while(v.C()){u=v.gU(v)
t.n(0,C.t(u.a),B.k.O(C.f8(u.b)))}w.x=t
w.Q=!0
B.d.a8(w.d)},
$S:0}
A.dCD.prototype={
$1(d){return d.d!=null},
$S:z+30}
A.dCE.prototype={
$1(d){var w=d.d
return w!=null&&this.a.Y3(w)>0},
$S:z+30}
A.dCs.prototype={
$0(){var w=this.a
w.r=B.o.D(this.b,1,w.w)
w.axG()},
$S:0}
A.dCv.prototype={
$1(d){var w=null,v=C.m(22),u=this.a
return C.eD(w,D.uz,new C.C(B.by,new C.a5(340,480,C.v(C.a([C.d("Pick a level  \xb7  "+u.w+" of 100 unlocked",w,w,w,w,w,w,B.iU,w,w,w),B.S,C.D(C.ib(!0,w,w,B.y,G.aLx,new A.dCu(u,d),100,w,w,B.ai,!1),1)],x.p),B.m,w,B.e,B.j,0,B.p),w),w),w,w,w,w,B.cZ,w,new C.b7(v,B.Z),w)},
$S:47}
A.dCu.prototype={
$2(d,e){var w,v,u,t,s=null,r=e+1,q=this.a,p=r<=q.w,o=""+r,n=q.x.h(0,o)
if(n==null)n=0
w=p?new A.dCt(this.b,r):s
v=C.m(12)
if(p)q=r===q.r?B.bY:B.c.j(0.1)
else q=B.c.j(0.03)
u=C.I(p?B.b7:B.dt,B.r,1)
o=p?o:"\ud83d\udd12"
t=p?B.c:B.j2
o=C.a([C.d(o,s,s,s,s,s,s,C.l(s,s,t,s,s,s,s,s,s,s,s,p?16:14,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p)
if(p)o.push(C.d(B.a.aK("\u2605",n)+B.a.aK("\u2606",3-n),s,s,s,s,s,s,D.eXU,s,s,s))
return C.aE(s,C.p(s,C.v(o,B.m,s,B.b9,B.j,0,B.p),B.f,s,s,new C.o(q,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,w,s,s,s,s,s,s,!1,B.aa)},
$S:72}
A.dCt.prototype={
$0(){C.a4(this.a,!1).N(this.b)
return null},
$S:0}
A.dCz.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.f=o
w=p.at
v=p.ax
p.gaaW()
o=C.b3(q,q,q,new A.b8F(p.d,w,v,p.gc19(),q),o)
v=p.bTE("LEVEL",""+p.r+" / 100")
w=p.as
u=p.gHl()
t=p.as>=p.gHl()?B.bb:B.c
s=this.b
r=x.p
s=C.a([o,C.ao(q,C.A(C.a([v,p.asI("GOAL",""+w+" / "+u,t),p.asI("STARS",B.a.aK("\u2605",s)+B.a.aK("\u2606",3-s),B.aM)],r),B.m,q,B.hJ,B.j,0,q,q),q,q,16,16,8,q)],r)
if(!p.Q)s.push(B.lS)
if(p.Q&&!p.y)s.push(D.aSv)
if(p.z){o=C.m(24)
w=this.c
v=C.I((w?B.bb:B.cq).j(0.6),B.r,1)
if(w)u=p.r>=100?"You beat all 100 levels!":"Level complete!"
else u="So close"
u=C.a([C.d(u,q,q,q,q,q,q,C.l(q,q,w?B.bb:B.cq,q,q,q,q,q,q,q,q,22,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.ao,C.d("You blasted "+p.as+" dots. The goal was "+p.gHl()+".",q,q,q,q,q,q,B.hx,q,q,q)],r)
if(w){t=p.x.h(0,""+p.r)
u.push(C.d(B.a.aK("\u2605",t==null?1:t),q,q,q,q,q,q,D.eOI,q,q,q))}u.push(B.ay)
t=C.a([new A.fg(B.mb,"Try again",new A.dCw(p),B.c,q)],r)
if(w&&p.r<100)t.push(new A.fg(B.js,"Next level",new A.dCx(p),B.bb,q))
u.push(C.A(t,B.m,q,B.e,B.Q,0,q,q))
s.push(C.av(C.p(q,C.v(u,B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new C.o(D.UH,q,v,o,q,q,B.n),q,q,q,q,B.a8,q,q,q),q,q,q))}return C.aE(B.c5,new C.an(B.W,q,B.b_,B.q,s,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dCy(p),q,q,q,q,!1,B.aa)},
$S:35}
A.dCy.prototype={
$1(d){var w=this.a
if(w.y||!w.Q)return
w.y=!0
w.at=d.b
w.ax=w.fL$
A.dD(180,"",200,1,0.4,"sine")
C.jc()},
$S:23}
A.dCw.prototype={
$0(){var w=this.a
return w.m(w.gb1v())},
$S:0}
A.dCx.prototype={
$0(){var w=this.a
return w.aVP(w.r+1)},
$S:0}
A.dCA.prototype={
$0(){var w=this.a
return w.m(w.gb1v())},
$S:0}
A.cIe.prototype={
$3(d,e,f){var w,v
if(e<=0)return
w=this.a
$.W()
v=C.L()
v.r=f.j(0.18).gp(0)
w.ag(d,e,v)
v=C.L()
v.b=B.af
v.c=3
v.r=f.j(0.9).gp(0)
w.ag(d,e,v)
v=C.L()
v.r=f.j(0.25).gp(0)
v.z=B.lc
w.ag(d,e*0.5,v)},
$S:716}
A.e6l.prototype={
$1(d){var w=this.b,v=d.a
return(d.gcIp()?this.a.clY(w,v,d.b):w.aB(0,v).gcl())<24},
$S:z+101}
A.e6K.prototype={
$1(d){return d.a.b>this.a.w.b+30},
$S:z+102}
A.e6z.prototype={
$0(){var w=this.a
return w.m(new A.e6q(w))},
$S:0}
A.e6q.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.e6A.prototype={
$0(){return A.qz(this.b,this.a.d,"marble-music")},
$S:0}
A.e6B.prototype={
$2(d,e){var w=null,v=this.a,u=new C.at(e.b,e.d)
v.w=u
return new C.eq(C.aE(B.c5,C.b3(w,w,w,new A.bfD(v.e,v.f,v.at,v.ax,v.fL$,w),u),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e6w(v),new A.e6x(v),new A.e6y(v),w,w,w,w,w,w,w,w,w,w,new A.e6p(v),w,w,w,!1,B.aa),v.d)},
$S:198}
A.e6p.prototype={
$1(d){var w,v,u=this.a
if(u.x==="peg"){w=d.b
v=u.YN(w)
u.e.push(new A.F0(w,w,v,u.aMS(v)))
if(u.ay)A.l6(u.z,v+12,700,0.5)}if(u.x==="erase")u.aPo(d.b)},
$S:50}
A.e6x.prototype={
$1(d){var w=this.a
if(w.x==="bar")w.ax=w.at=d.b},
$S:44}
A.e6y.prototype={
$1(d){var w=this.a,v=w.x
if(v==="bar")w.ax=d.b
if(v==="erase")w.aPo(d.b)},
$S:18}
A.e6w.prototype={
$1(d){var w,v,u=this.a,t=!1
if(u.x==="bar"){w=u.at
if(w!=null){t=u.ax
t=t!=null&&t.aB(0,w).gcl()>30}}if(t){t=u.at
t.toString
w=u.ax
w.toString
v=u.YN(t.ae(0,w).eB(0,2))
w=u.at
w.toString
t=u.ax
t.toString
u.e.push(new A.F0(w,t,v,u.aMS(v)))
if(u.ay)A.l6(u.z,v+12,700,0.5)}u.ax=u.at=null},
$S:37}
A.e6C.prototype={
$0(){var w=this.a
return w.m(new A.e6v(w,this.b))},
$S:0}
A.e6v.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
A.e6D.prototype={
$0(){var w=this.a
return w.m(new A.e6u(w,this.b))},
$S:0}
A.e6u.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.e6E.prototype={
$0(){var w=this.a
return w.m(new A.e6t(w,this.b))},
$S:0}
A.e6t.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.e6F.prototype={
$1(d){var w=this.a
return w.m(new A.e6s(w,d))},
$S:6}
A.e6s.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.e6G.prototype={
$0(){var w=this.a
return w.m(new A.e6r(w))},
$S:0}
A.e6r.prototype={
$0(){return this.a.awe("stairs")},
$S:0}
A.e6H.prototype={
$0(){var w=this.a
return w.m(new A.e6o(w))},
$S:0}
A.e6o.prototype={
$0(){return this.a.awe("pinball")},
$S:0}
A.e6I.prototype={
$0(){var w=this.a
return w.m(new A.e6n(w))},
$S:0}
A.e6n.prototype={
$0(){return this.a.awe("random")},
$S:0}
A.e6J.prototype={
$0(){var w=this.a
return w.m(new A.e6m(w))},
$S:0}
A.e6m.prototype={
$0(){var w=this.a
B.d.a8(w.e)
B.d.a8(w.f)},
$S:0}
A.eaf.prototype={
$0(){return B.d.W(this.a.e,this.b)},
$S:0}
A.eag.prototype={
$0(){var w=this.b,v=new A.ac7(this.a.a,this.c)
v.c=w.fL$
return w.e.push(v)},
$S:0}
A.ean.prototype={
$0(){var w=this.a
return w.m(new A.eam(w))},
$S:0}
A.eam.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.eao.prototype={
$0(){return A.qz(this.b,this.a.d,"orbit-sequencer")},
$S:0}
A.eap.prototype={
$2(d,e){var w,v=null,u=this.a
u.w=new C.at(e.b,e.d)
if(!u.f){u.f=!0
u.aOd()}w=u.w
return new C.eq(C.aE(B.c5,C.b3(v,v,v,new A.bj2(u.e,u.gaVR(),6,u.gcgg(),u.gcmo(),u.fL$,v),w),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.eal(u),v,v,v,!1,B.aa),u.d)},
$S:198}
A.eal.prototype={
$1(d){return this.a.c1b(d.b)},
$S:50}
A.eaq.prototype={
$1(d){var w=this.a
return w.m(new A.eak(w,d))},
$S:6}
A.eak.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.ear.prototype={
$0(){var w=this.a
return w.m(new A.eaj(w,this.b))},
$S:0}
A.eaj.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.eas.prototype={
$0(){var w=this.a
return w.m(new A.eai(w,this.b))},
$S:0}
A.eai.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
A.eat.prototype={
$0(){var w=this.a
return w.m(w.gbGD())},
$S:0}
A.eau.prototype={
$0(){var w=this.a
return w.m(new A.eah(w))},
$S:0}
A.eah.prototype={
$0(){var w,v=this.a,u=v.e
B.d.a8(u)
for(v=v.r,w=0;w<9;++w)u.push(new A.ac7(v.aD(6),v.ai()))},
$S:0}
A.eav.prototype={
$0(){var w=this.a
return w.m(B.d.gr6(w.e))},
$S:0}
A.flI.prototype={
$2(d,e){var w=B.o.an(d,100),v=B.o.F(d,100),u=this.a
u[w]=u[w]+e
u[v]=u[v]+e
u=this.b
u[w].push(v)
u[v].push(w)},
$S:126}
A.e9K.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new A.e9J(w,d))},
$S:133}
A.e9J.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cG:v)
while(v.C())w.push(B.k.O(C.f8(v.gU(v))))
return this.a.x.v(0,w)},
$S:0}
A.e9w.prototype={
$2(d,e){var w=this.b
if(B.o.an(d,100)===w||B.o.F(d,100)===w)this.a.a+=e},
$S:126}
A.e9q.prototype={
$0(){var w=this,v=w.d
return w.a.e.push(new A.b7y(w.b,new C.u(w.c*(0.2+0.6*v.ai()),w.e*(0.2+0.6*v.ai()))))},
$S:0}
A.e9r.prototype={
$0(){var w=this.a
B.d.a8(w.e)
w.f.a8(0)
w.r=null},
$S:0}
A.e9v.prototype={
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
p=D.vq.h(0,v[u].a).a
o=w.ahm(u)
v=D.vq.h(0,v[t].a).a
n=w.ahm(t)
if(q<=p-o+r&&q<=v-n+r){m.n(0,s,q)
A.vA("click",q*3,70,0.35)}else m.W(0,s)}w.r=null
if(w.gaVX()&&w.x.J(0,w.d)){A.vA("zap",12,300,0.5)
m=w.x
m=C.B(m,C.a2(m).k("cl.E"))
A.vx("molecule_maker",C.E(["done",m],x.N,x.z))}}}},
$S:0}
A.e9u.prototype={
$0(){var w,v,u=this.a,t=u.f,s=C.a2(t).k("cy<1>"),r=this.b,q=s.k("a1<G.E>"),p=C.B(new C.a1(new C.cy(t,s),new A.e9s(r),q),q.k("G.E"))
for(s=p.length,w=0;w<p.length;p.length===s||(0,C.K)(p),++w)t.W(0,p[w])
s=x.S
v=C.U(s,s)
t.bH(0,new A.e9t(r,v))
t.a8(0)
t.v(0,v)
B.d.cw(u.e,r)
u.r=null},
$S:0}
A.e9s.prototype={
$1(d){var w=this.a
return B.o.an(d,100)===w||B.o.F(d,100)===w},
$S:31}
A.e9t.prototype={
$2(d,e){var w=B.o.an(d,100),v=B.o.F(d,100),u=this.a
if(w>u)--w
if(v>u)--v
this.b.n(0,w*100+v,e)},
$S:126}
A.e9E.prototype={
$1(d){return""+d.b+" "+D.vq.h(0,d.a).c.toLowerCase()},
$S:393}
A.e9F.prototype={
$0(){var w=this.a
return w.m(new A.e9D(w))},
$S:0}
A.e9D.prototype={
$0(){var w=this.a;++w.d
w.auH(0)},
$S:0}
A.e9G.prototype={
$2(d,e){var w=null,v=this.a
v.y=new C.at(e.b,e.d)
return C.aE(B.c5,C.b3(w,w,w,new A.bgj(v.e,v.f,v.r,v.gcwH(),w),B.eS),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,new A.e9z(v),new A.e9A(v),new A.e9B(v,e),w,w,w,w,w,w,w,w,w,w,new A.e9C(v),w,w,w,!1,B.aa)},
$S:35}
A.e9C.prototype={
$1(d){return this.a.c1y(d.b)},
$S:50}
A.e9A.prototype={
$1(d){var w=this.a
return w.w=w.aVY(d.b)},
$S:44}
A.e9B.prototype={
$1(d){var w=this.a,v=w.w
if(v==null)return
w.m(new A.e9x(w,v,d,this.b))},
$S:18}
A.e9x.prototype={
$0(){var w=this,v=w.a.e,u=w.b,t=v[u],s=w.c.d,r=w.d
return t.b=new C.u(B.k.D(t.b.a+s.a,26,r.b-26),B.k.D(v[u].b.b+s.b,26,r.d-26))},
$S:0}
A.e9z.prototype={
$1(d){return this.a.w=null},
$S:37}
A.e9H.prototype={
$0(){var w=this.a
return w.m(new A.e9y(w,this.b))},
$S:0}
A.e9y.prototype={
$0(){var w=this.a
w.d=this.b
w.auH(0)},
$S:0}
A.e9I.prototype={
$0(){return this.a.c1s(0,this.b.a)},
$S:0}
A.dlh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.a.b,j=k[B.o.an(d,100)].b,i=k[B.o.F(d,100)].b,h=i.aB(0,j),g=new C.u(-h.b,h.a).eB(0,Math.max(h.gcl(),1))
for(k=(e-1)/2,w=g.a,v=g.b,u=j.a,t=j.b,s=i.a,r=i.b,q=this.b.a,p=0;p<e;++p){o=(p-k)*8
n=w*o
o=v*o
$.W()
m=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
m.r=B.ad.gp(0)
m.c=4
m.d=B.bO
l=m.H()
q.drawLine.apply(q,[u+n,t+o,s+n,r+o,l])
l.delete()}},
$S:126}
A.dKK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.dKJ(w,d))},
$S:133}
A.dKJ.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:B.k.O(w)
if(w==null)w=0
return this.a.y=w},
$S:0}
A.dKz.prototype={
$0(){var w,v,u=J.e0(9,x.N)
for(w=this.a,v=0;v<9;++v)u[v]=D.asS[w.aD(4)]
return B.d.fS(u)},
$S:22}
A.dKy.prototype={
$1(d){return A.fPh(d)==="*"},
$S:3}
A.dKA.prototype={
$1(d){return d!==this.a},
$S:3}
A.dKx.prototype={
$0(){var w,v,u,t,s=this,r=s.b,q=s.c,p=s.a
if(r===q){w=p.r
w.push(r)
r=++p.x
if(r>p.y){p.y=r
A.vx("dna_lab",C.E(["best",r],x.N,x.z))}r=s.d
A.vA("click",4+r,90,0.4)
v=p.d
A:{if(0===v){r=p.f[r]+" always pairs with "+q+"."
break A}if(1===v){r="RNA copies the DNA, but swaps T for U. "+p.f[r]+" \u2192 "+q+"."
break A}r=p.ga7v()[r]+" codes for "+C.t(D.BA.h(0,q))+"."
break A}p.w=r
if(p.d===2)p.aYV()
r=w.length
q=p.d===2
if(r>=(q?3:9)){if(q){r=C.a([],x.d4)
for(q=w.length,u=0;u<w.length;w.length===q||(0,C.K)(w),++u)r.push(D.BA.h(0,w[u]))
r="Protein built: "+B.d.aH(r," \u2013 ")+". Cells do this thousands of times a second."}else r="Perfect copy! Next: try another strand."
p.w=r}}else{p.x=0
A.vA("buzz",0,160,0.35)
t=p.d
B:{if(0===t){r="Not quite. Remember: A pairs with T, and C pairs with G."
break B}if(1===t){r="Not quite. RNA pairs A with U, T with A, C with G and G with C."
break B}r="Not quite. Look the codon up on the codon wheel: the first two letters pick the row."
break B}p.w=r}},
$S:0}
A.dKI.prototype={
$3$ghost(d,e,f){var w=null,v=f?B.dt:e,u=C.m(8),t=f?C.I(B.b7,B.r,1):w
return C.p(B.A,C.d(d,w,w,w,w,w,w,C.l(w,w,f?B.b7:B.w,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,40,w,B.mP,w,w,w,30)},
$2(d,e){return this.$3$ghost(d,e,!1)},
$S:1804}
A.dKD.prototype={
$1(d){var w=D.dbn.h(0,d)
return w==null?B.c:w},
$S:717}
A.dKE.prototype={
$0(){var w=this.a
return w.m(new A.dKC(w,this.b))},
$S:0}
A.dKC.prototype={
$0(){var w=this.a
w.d=this.b;++w.e
w.au1()},
$S:0}
A.dKF.prototype={
$0(){var w=this.a
return w.m(new A.dKB(w))},
$S:0}
A.dKB.prototype={
$0(){var w=this.a;++w.e
w.au1()},
$S:0}
A.dKG.prototype={
$0(){return this.a.aVW(this.b)},
$S:0}
A.dKH.prototype={
$0(){return this.a.aVW(this.b)},
$S:0}
A.dNz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.dNy(w,d))},
$S:133}
A.dNy.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
if(w==null)w=null
if(w==null)w=0
return this.a.as=w},
$S:0}
A.dNm.prototype={
$0(){},
$S:0}
A.dNl.prototype={
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
A.dNn.prototype={
$0(){var w=this.a
w.f=C.a([80,30,6],x.n)
B.d.a8(w.r)
w.Q=w.w=0
w.z=w.y=w.x=1},
$S:0}
A.dNr.prototype={
$1(d){var w=this.a
return w.m(new A.dNq(w,d))},
$S:6}
A.dNq.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.dNs.prototype={
$1(d){var w=this.a
return w.m(new A.dNp(w,d))},
$S:6}
A.dNp.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.dNt.prototype={
$1(d){var w=this.a
return w.m(new A.dNo(w,d))},
$S:6}
A.dNo.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.dNu.prototype={
$0(){return this.a.a8H("drought")},
$S:0}
A.dNv.prototype={
$0(){return this.a.a8H("disease")},
$S:0}
A.dNw.prototype={
$0(){return this.a.a8H("foxes")},
$S:0}
A.dNx.prototype={
$0(){return this.a.a8H("rabbits")},
$S:0}
A.d0J.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=new C.eT()
k.dI(B.o.O(g))
for(w=m.d,v=m.b.a,u=m.c,t=m.a.d,s=t*4,r=0;r<d;++r){q=k.ai()
p=k.ai()
o=(r&1)===0?1:-1
o=B.k.F(p+t*(0.2+q*0.3)*0.05*o,1)
q=k.ai()
p=Math.sin(s+r*2)
n=new C.ku(new C.es(e,l,l,B.cQ,l,l,l,l,l,l,new C.F(!0,l,l,l,l,l,f,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a5,B.ci,new C.jC(1),l,l,l,l,B.cg,l)
n.eR()
n.a6(w,new C.u(o*v-n.b.c/2,h+q*u*0.25+Math.abs(p)*-4))}},
$S:1806}
A.d0L.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this.a.c
if(l.length<2)return
w=$.W()
v=C.a([],x.v)
u=new C.aP(w.r,B.aq,null,null,v)
for(w=this.b,t=w.a,s=w.c-t,r=w.d,w=r-w.b,q=0;q<l.length;++q){p=t+s*q/159
o=r-w*B.k.D(l[q][d]/e,0,1)
if(q===0){n=new C.b5(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}else{n=new C.ap(p,o)
v.push(n)
m=u.f
if(m!=null)n.bx(m)
n=u.e
if(n!=null)n.a.delete()
u.e=null}}$.W()
l=C.L()
l.b=B.af
l.c=2.6
l.r=f.gp(0)
l.e=B.fx
this.c.aN(u,l)},
$S:1807}
A.d0K.prototype={
$3(d,e,f){var w=null,v=C.ih(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,e,w,w,w,w,w,w,w,w,11,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),d),B.a5,B.ci,w,B.eq,B.cg)
v.eR()
v.a6(this.a,new C.u(f,this.b.b+2))},
$S:1808}
A.bDL.prototype={
$2(d,e){return d+e.a*e.b},
$S:1809}
A.fgR.prototype={
$2(d,e){return e.a-d.a},
$S:1810}
A.dyN.prototype={
$2(d,e){return d+e},
$S:74}
A.dz_.prototype={
$1(d){var w,v=this.a,u=Math.min((d.a-v.y.a)/1e6,0.05)
v.y=d
w=v.d
v.m(new A.dyZ(v,B.k.D((v.gvq()-w[v.e].guv())/Math.max(w[v.e].guv(),8),-1,1)*0.32,u))},
$S:8}
A.dyZ.prototype={
$0(){var w=this.a,v=w.w
return w.w=v+(this.b-v)*Math.min(1,this.c*4)},
$S:0}
A.dz0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.dyY(w,d))},
$S:133}
A.dyY.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cG:v)
while(v.C())w.push(B.k.O(C.f8(v.gU(v))))
return this.a.r.v(0,w)},
$S:0}
A.dyO.prototype={
$0(){var w=this.a.f,v=this.b,u=B.o.F(w[v]+1,6)
w[v]=u
return u},
$S:0}
A.dyT.prototype={
$1(d){return""+d.b+" kg \xd7 "+d.a},
$S:1811}
A.dyU.prototype={
$0(){var w=this.a
return w.m(new A.dyS(w))},
$S:0}
A.dyS.prototype={
$0(){var w=this.a;++w.e
B.d.hm(w.f,0,5,0)},
$S:0}
A.dyV.prototype={
$2(d,e){var w=null,v=this.a
return C.aE(B.c5,C.b3(w,w,w,new A.b7K(v.w,this.b.a,v.f,v.gvq()===v.d[v.e].guv(),w),B.eS),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.dyR(v,e),w,w,w,!1,B.aa)},
$S:35}
A.dyR.prototype={
$1(d){var w=this.b.b,v=B.k.V((d.b.a-w/2)/((w-40)/12))
if(v>=1&&v<=5)this.a.csG(v-1)},
$S:50}
A.dyW.prototype={
$0(){var w=this.a
return w.m(new A.dyQ(w,this.b))},
$S:0}
A.dyQ.prototype={
$0(){var w=this.a
w.e=this.b
B.d.hm(w.f,0,5,0)},
$S:0}
A.dyX.prototype={
$0(){var w=this.a
return w.m(new A.dyP(w))},
$S:0}
A.dyP.prototype={
$0(){return B.d.hm(this.a.f,0,5,0)},
$S:0}
A.cAM.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.a*0.78,v=this.b,u=v.a,t=0;t<e;++t){s=-21-t*22
r=C.by(C.cr(new C.u(d,s),20,w),B.r8)
$.W()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=f.gp(0)
p=q.H()
u.drawRRect(C.ew(r),p)
p.delete()
q=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
q.b=B.af
q.c=1.2
q.r=B.dy.gp(0)
p=q.H()
u.drawRRect(C.ew(r),p)
p.delete()
A.ffV(v,"1",new C.u(d,s),B.bh,11)}},
$S:1812}
A.dRC.prototype={
$1(d){var w=this.a,v=Math.min((d.a-w.y.a)/1e6,0.05)
w.y=d
w.m(new A.dRB(w,v))},
$S:8}
A.dRB.prototype={
$0(){var w=this.a
return w.f=w.f+w.e/60*2*3.141592653589793*this.b*0.5},
$S:0}
A.dRD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.dRA(w,d))},
$S:133}
A.dRA.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cG:v)
while(v.C())w.push(B.k.O(C.f8(v.gU(v))))
return this.a.w.v(0,w)},
$S:0}
A.dRs.prototype={
$0(){var w=B.k.V(this.c)
this.a.d[this.b]=w
return w},
$S:0}
A.dRw.prototype={
$0(){var w=this.a
return w.m(new A.dRv(w))},
$S:0}
A.dRv.prototype={
$0(){return this.a.r++},
$S:0}
A.dRx.prototype={
$0(){var w=this.a
return w.m(new A.dRu(w,this.b))},
$S:0}
A.dRu.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dRy.prototype={
$1(d){var w=this.a
return w.m(new A.dRt(w,d))},
$S:6}
A.dRt.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.dRz.prototype={
$1(d){return this.a.c1z(this.b,d)},
$S:6}
A.d8t.prototype={
$6$back(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=this.a.bLJ(d,e,f,g),m=this.b
$.W()
w=C.L()
v=C.ar(h,B.c,i?0.1:0.35)
v.toString
u=C.ar(h,B.w,0.5)
u.toString
w.sau(new C.bS(B.A,0.5,B.x,null,0,C.a([v,h,u],x.O),null,null).aw(0,C.bT(d,e+6)))
m.aN(n,w)
w=C.L()
w.b=B.af
w.c=1.5
w.r=B.aW.gp(0)
m.aN(n,w)
w=C.L()
w.r=B.w.j(0.28).gp(0)
m.ag(d,e*0.55,w)
for(w=d.a,v=d.b,u=m.a,t=0;t<4;++t){s=g+t*3.141592653589793/2
r=Math.cos(s)
q=Math.sin(s)
p=new C.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.hD.gp(0)
p.c=3
o=p.H()
u.drawLine.apply(u,[w,v,w+r*e*0.55,v+q*e*0.55,o])
o.delete()}w=C.L()
w.r=B.aK.gp(0)
m.ag(d,6,w)},
$5(d,e,f,g,h){return this.$6$back(d,e,f,g,h,!1)},
$S:1813}
A.d8u.prototype={
$3(d,e,f){var w=this,v=w.b
return A.ffV(w.a,d,new C.u(v.a/2+(e-(w.c+w.d)/2)*w.e,v.b-10),f,11)},
$S:1814}
A.dCZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.dCY(w,d))},
$S:133}
A.dCY.prototype={
$0(){var w=C.a([],x.t),v=x.Q.a(J.q(this.b,"done"))
v=J.aV(v==null?B.cG:v)
while(v.C())w.push(B.k.O(C.f8(v.gU(v))))
return this.a.Q.v(0,w)},
$S:0}
A.dCH.prototype={
$1(d){var w=d.charCodeAt(0)
return w>=65&&w<=90?C.jA(90-(w-65)):d},
$S:13}
A.dCQ.prototype={
$1(d){return this.a.m(new A.dCP())},
$S:2}
A.dCP.prototype={
$0(){},
$S:0}
A.dCR.prototype={
$1(d){return this.a.m(new A.dCO())},
$S:2}
A.dCO.prototype={
$0(){},
$S:0}
A.dCS.prototype={
$0(){var w=this.a
return w.m(new A.dCN(w))},
$S:0}
A.dCN.prototype={
$0(){var w=this.a
w.x=(w.x+1)%6
w.aUN()},
$S:0}
A.dCT.prototype={
$0(){var w=this.a
return w.m(new A.dCM(w))},
$S:0}
A.dCM.prototype={
$0(){return this.a.f=0},
$S:0}
A.dCU.prototype={
$0(){var w=this.a
return w.m(new A.dCL(w))},
$S:0}
A.dCL.prototype={
$0(){return this.a.f=1},
$S:0}
A.dCV.prototype={
$0(){var w=this.a
return w.m(new A.dCK(w,this.b))},
$S:0}
A.dCK.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dCW.prototype={
$1(d){var w=this.a
return w.m(new A.dCJ(w,d))},
$S:6}
A.dCJ.prototype={
$0(){return this.a.w=B.k.V(this.b)},
$S:0}
A.dCX.prototype={
$1(d){var w=this.a
w.m(new A.dCI(w,d))
if(w.ga7Z()&&w.Q.J(0,w.x)){A.vA("zap",9,220,0.45)
w=w.Q
w=C.B(w,C.a2(w).k("cl.E"))
A.vx("cipher_lab",C.E(["done",w],x.N,x.z))}},
$S:6}
A.dCI.prototype={
$0(){return this.a.z=B.k.V(this.b)},
$S:0}
A.bJv.prototype={
$1(d){return d.r<=0},
$S:z+106}
A.bJG.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+19}
A.bJB.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+19}
A.bJH.prototype={
$1(d){return this.a.KH(d)&&!d.x},
$S:z+1}
A.bJI.prototype={
$2(d,e){return Math.max(d,this.a.ay9(e))},
$S:z+15}
A.bJK.prototype={
$2(d,e){var w=this.a
return w.cf(0,d.a+"."+e,new A.bJL(w))},
$S:z+14}
A.bJL.prototype={
$0(){return this.a.a},
$S:112}
A.bJJ.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
A.bJM.prototype={
$2(d,e){var w=this.a
return w.cf(0,this.b.$1(this.c.$2(d,e)),new A.bJN(w))},
$S:z+14}
A.bJN.prototype={
$0(){return this.a.a},
$S:112}
A.bJx.prototype={
$2(d,e){var w=this.a
return w.cf(0,d.a+"."+e,new A.bJy(w))},
$S:z+14}
A.bJy.prototype={
$0(){return this.a.a},
$S:112}
A.bJw.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:75}
A.bJz.prototype={
$2(d,e){var w=this.a
return w.cf(0,this.b.$1(this.c.$2(d,e)),new A.bJA(w))},
$S:z+14}
A.bJA.prototype={
$0(){return this.a.a},
$S:112}
A.bJu.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+1}
A.bJO.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+19}
A.bJC.prototype={
$1(d){return d!==this.b&&this.a.aE4(d)&&Math.abs(d.fr)>0.0005},
$S:z+1}
A.bJF.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bJE.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+1}
A.bJD.prototype={
$1(d){return d.b===this.a},
$S:z+1}
A.bEX.prototype={
$1(d){return d.Q>0.05},
$S:z+1}
A.bEY.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+15}
A.chS.prototype={
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
$S:187}
A.ffP.prototype={
$1(d){var w=null,v=C.ih(w,w,1,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.b,w,w,w,w,w,w,w,w,d,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),this.a),B.a5,B.ci,w,B.eq,B.cg)
v.eR()
return v},
$S:718}
A.fx7.prototype={
$1(d){var w
$.W()
w=C.L()
w.r=d.gp(0)
return w},
$S:1816}
A.fx9.prototype={
$2(d,e){var w
$.W()
w=C.L()
w.b=B.af
w.c=e
w.r=d.gp(0)
w.d=B.bO
return w},
$S:1817}
A.fxa.prototype={
$5(d,e,f,g,h){return C.by(new C.a9(d,e,d+f,e+g),new C.aX(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1818}
A.fx8.prototype={
$3(d,e,f){var w
$.W()
w=C.L()
w.sau(new C.a6(B.b1,B.b3,B.x,C.a([e,f],x.O),null,null).aw(0,d))
return w},
$S:1819}
A.bEB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
A.bEC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.bEA(w))},
$S:0}
A.bEA.prototype={
$0(){return this.a.Q=null},
$S:0}
A.bED.prototype={
$0(){return C.a([],x.ey)},
$S:1820}
A.bEE.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:451}
A.bEF.prototype={
$0(){var w,v,u
J.bBP(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.BP(v))if(A.fPJ(v.b))w.aXU(v)
else w.Z2(v)
else{u=w.a.c.b9c(v)
w.ac4(u==null?"The "+$.pW().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
A.bEz.prototype={
$1(d){return new C.e5(new A.bEx(this.a,this.b),null)},
$S:20}
A.bEx.prototype={
$2(d,e){var w=null,v=this.b,u=new A.bEy(this.a,v,e),t=$.pW(),s=v.b,r=C.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,B.kS,w,w,w),q=C.aH(w,w,w,w,D.bAD,w,w,w,new A.bEt(u,v),w,w,w,w,w,w),p=B.k.D(v.ch,1,2.6),o=x.p
return C.bq(!0,new C.C(B.x1,C.v(C.a([r,B.au,D.fm4,B.S,C.A(C.a([q,C.D(C.kQ(t.h(0,s).d,w,w,2.6,1,u,p),1),C.aH(w,w,w,w,D.bHa,w,w,w,new A.bEu(u,v),w,w,w,w,w,w)],o),B.m,w,B.e,B.j,0,w,w),C.A(C.a([C.d(""+B.k.V(v.ch*100)+"%",w,w,w,w,w,w,C.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.b8,C.bJ(!1,D.f0Q,w,w,!0,w,w,new A.bEv(u),w,w),C.bJ(!1,B.z0,w,w,!0,w,w,new A.bEw(d),w,w)],o),B.m,w,B.e,B.j,0,w,w)],o),B.F,w,B.e,B.Q,0,B.p),w),!0,!1,B.ah,!0,!0)},
$S:96}
A.bEy.prototype={
$1(d){var w=this.a
w.m(new A.bEr(this.b,d))
this.c.$1(new A.bEs())
w.a.toString},
$S:6}
A.bEr.prototype={
$0(){return this.a.ch=B.k.D(this.b,1,2.6)},
$S:0}
A.bEs.prototype={
$0(){},
$S:0}
A.bEt.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
A.bEu.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
A.bEv.prototype={
$0(){return this.a.$1(1)},
$S:0}
A.bEw.prototype={
$0(){C.a4(this.a,!1).N(null)
return null},
$S:0}
A.bEU.prototype={
$2(d,e){var w
if(d==="short"){A.dD(1800,"",120,0,0.55,"noise")
A.dD(200,"",160,2.2,0.4,"saw")
C.fJ()
w=this.a
if(w.c!=null)w.ac4("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){A.dD(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ac4("\u26a0 Overloaded! The "+$.pW().h(0,e.b).b+" can only give about "+B.k.aa(w.a.c.z6(e),2)+" amps but your gadgets are asking for "+B.k.aa(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ac4("Burnt out! "+e.ay)
A.dD(140,"",320,0,0.6,"noise")
A.dD(900,"",160,1.5,0.35,"square")}},
$S:z+110}
A.bEV.prototype={
$0(){},
$S:0}
A.bE4.prototype={
$0(){},
$S:0}
A.bEW.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+1}
A.bET.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new C.at(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=C.a([C.aE(B.c5,C.b3(p,p,p,new A.aha(w,v,u,t,s,r==null?B.iQ:r,p),n),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,new A.bEN(o),new A.bEO(o),new A.bEP(o),p,p,p,p,p,p,p,p,p,p,new A.bEQ(o),p,p,p,!1,B.aa)],q)
if(o.a.c.a.length===0)n.push(D.b0z)
w=o.Q
if(w!=null){v=C.m(14)
u=C.I(B.cy,B.r,1)
n.push(C.ao(p,C.aE(p,C.p(p,C.A(C.a([D.f_b,C.D(C.d(w,p,p,p,p,p,p,D.eSD,p,p,p),1)],q),B.F,p,B.e,B.j,0,p,p),B.f,p,p,new C.o(D.b5C,p,u,v,p,p,B.n),p,p,p,p,B.oh,p,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.bER(o),p,p,p,p,p,p,!1,B.aa),p,p,10,10,8,p))}if(o.e!=null)n.push(C.ao(8,o.aW0(C.A(C.a([D.bsJ,new A.fg(B.F4,"Cut wire",new A.bES(o),B.cq,p)],q),B.m,p,B.e,B.j,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(C.ao(8,o.cb9(w),p,p,10,10,p,p))}return C.jp(new C.an(B.W,p,B.b_,B.q,n,p),B.q,p)},
$S:391}
A.bEO.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b3C(s)
if(r!=null){t.m(new A.bEL(t,r,d))
return}w=t.aYA(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new C.u(v*u.a,w.d*u.b).aB(0,s)
t.m(new A.bEM(t,w))}},
$S:44}
A.bEL.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
A.bEM.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bEP.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new A.bEJ(w,d))
else if(w.w!=null)w.m(new A.bEK(w,d.b.ae(0,w.x)))},
$S:18}
A.bEJ.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
A.bEK.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=B.k.D(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=B.k.D(w.b/v.y.b,0.08,0.92)},
$S:0}
A.bEN.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b3C(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.aix(u.a,u.b,v.a,v.b)!=null)A.dD(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.ac2()},
$S:37}
A.bEQ.prototype={
$1(d){var w=this.a,v=d.b,u=w.aYA(v)
if(u!=null){w.m(new A.bEH(w,u))
if(D.lE.aj(0,u.b))w.clr(u)
w.a.toString
return}w.m(new A.bEI(w,w.cxu(v)))},
$S:50}
A.bEH.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
A.dD(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
A.dD(200,"",70,0,0.2,"saw")}},
$S:0}
A.bEI.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
A.bER.prototype={
$0(){var w=this.a
return w.m(new A.bEG(w))},
$S:0}
A.bEG.prototype={
$0(){return this.a.Q=null},
$S:0}
A.bES.prototype={
$0(){var w=this.a
B.d.W(w.a.c.b,w.e)
w.e=null
A.dD(300,"",50,0,0.35,"noise")
w.ac2()},
$S:0}
A.bE5.prototype={
$0(){return this.a.bkU(this.b)},
$S:0}
A.bEo.prototype={
$5$max$min(d,e,f,g,h){var w=null
return C.A(C.a([C.d(d,w,w,w,w,w,w,D.eNn,w,w,w),C.D(C.kQ(this.b.d,w,w,g,h,new A.bEq(this.a,f),B.k.D(e,h,g)),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1821}
A.bEq.prototype={
$1(d){var w=this.a
w.m(new A.bEp(this.b,d))
w.a.toString},
$S:6}
A.bEp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.bEb.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
A.dD(260,"",70,0,0.35,"noise")
w.ac2()},
$S:0}
A.bEc.prototype={
$0(){var w=this.a
return w.m(new A.bEa(w))},
$S:0}
A.bEa.prototype={
$0(){return this.a.d=null},
$S:0}
A.bEd.prototype={
$0(){this.a.m(new A.bE9(this.b,this.c))
A.dD(900,"",40,0,0.3,"noise")},
$S:0}
A.bE9.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.bEg.prototype={
$0(){return this.a.aXU(this.b)},
$S:0}
A.bEh.prototype={
$0(){return this.a.Z2(this.b)},
$S:0}
A.bEi.prototype={
$0(){return this.a.a_F(this.b)},
$S:0}
A.bEj.prototype={
$0(){var w=this.a
w.m(new A.bE8(this.b,this.c))
w.a.toString},
$S:0}
A.bE8.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.bEk.prototype={
$0(){var w=this.a
w.m(new A.bE7(this.b,this.c))
w.a.toString},
$S:0}
A.bE7.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
A.bEl.prototype={
$0(){var w=this.a
w.m(new A.bE6(this.b,this.c))
w.a.toString},
$S:0}
A.bE6.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.bEm.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bEn.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bEe.prototype={
$1(d){return this.a.f=d},
$S:6}
A.bEf.prototype={
$1(d){return this.a.f=d},
$S:6}
A.f7d.prototype={
$1(d){return d.aDJ("bulb")},
$S:z+2}
A.f7e.prototype={
$1(d){return d.pi(0,"switch")&&d.aDJ("bulb")},
$S:z+2}
A.f7f.prototype={
$1(d){return B.d.b8(d.a,new A.f70())},
$S:z+2}
A.f70.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+1}
A.f7g.prototype={
$1(d){return d.pi(0,"resistor")&&B.d.b8(d.a,new A.f7_())},
$S:z+2}
A.f7_.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+1}
A.f7h.prototype={
$1(d){return!d.pi(0,"battery")&&d.aDJ("bulb")},
$S:z+2}
A.f74.prototype={
$1(d){return B.d.b8(d.a,new A.f6Z())},
$S:z+2}
A.f6Z.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
A.f75.prototype={
$1(d){return B.d.b8(d.a,new A.f6Y())},
$S:z+2}
A.f6Y.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
A.f76.prototype={
$1(d){return B.d.b8(d.a,new A.f6X())},
$S:z+2}
A.f6X.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+1}
A.f77.prototype={
$1(d){var w=d.a
return B.d.b8(w,new A.f6V())&&B.d.b8(w,new A.f6W())&&d.pi(0,"buck")},
$S:z+2}
A.f6V.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+1}
A.f6W.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+1}
A.f78.prototype={
$1(d){var w=d.a
return B.d.b8(w,new A.f6T())&&B.d.b8(w,new A.f6U())},
$S:z+2}
A.f6T.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+1}
A.f6U.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+1}
A.f79.prototype={
$1(d){return B.d.b8(d.a,new A.f6S())},
$S:z+2}
A.f6S.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+1}
A.dNH.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
A.dNQ.prototype={
$1(d){var w=this.a.d
return w.aE4(d)&&w.BP(d)},
$S:z+1}
A.dNR.prototype={
$1(d){return d.x},
$S:z+1}
A.dNS.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
A.dNT.prototype={
$0(){},
$S:0}
A.dNG.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=C.m(22),o=x.p,n=C.a([D.ffg,B.au,D.f0M,B.S],o)
for(w=this.a,v=0;v<19;++v){u=D.ON[v]
t=B.c.j(0.06)
s=new C.aX(14,14)
r=new C.aA(B.bE,1,B.r,-1)
n.push(C.aE(q,C.p(q,C.v(C.a([new C.x(u.a,q,B.kn,q,q,q,q,q,q,q,q,q),B.bB,new C.x(u.b,q,D.eTi,q,q,q,q,B.a2,q,3,q,q)],o),B.F,q,B.e,B.j,0,B.p),B.f,q,q,new C.o(t,q,new C.bU(r,r,r,r),new C.bt(s,s,s,s),q,q,B.n),q,q,q,B.cK,B.bm,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dNF(w,d,u),q,q,q,q,q,q,!1,B.aa))}return C.eD(q,D.uz,new C.C(B.c0,new C.a5(340,q,C.cK(n,q,q,q,q,B.ai,!0),q),q),q,q,q,q,B.cZ,q,new C.b7(p,B.Z),q)},
$S:47}
A.dNF.prototype={
$0(){C.a4(this.b,!1).N(null)
var w=this.a
w.m(new A.dNE(w,this.c))
A.dD(800,"",120,-0.5,0.3,"square")},
$S:0}
A.dNE.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bec()},
$S:0}
A.dNC.prototype={
$1(d){return new A.Uj(this.a.d,null)},
$S:z+112}
A.dND.prototype={
$0(){},
$S:0}
A.dNP.prototype={
$1(d){return new C.e5(new A.dNO(this.a),null)},
$S:20}
A.dNO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.agl(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?B.bb:B.aV
k=C.aI(d,m,x.l).w
w=l.r
v=x.p
u=C.a([C.A(C.a([D.fcL,B.b8,C.d(""+w.a+" of 11 done",m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),B.m,m,B.e,B.j,0,m,m),B.P,C.bv(C.m(4),C.mc(B.bE,m,m,5,m,w.a/11,new C.mx(f,x.dw)),B.ap),B.ac],v)
if(h)u.push(D.f3K)
else{h=f.j(0.1)
t=C.m(14)
s=C.I(f.j(0.5),B.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=C.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.Se,m,m,m)
q=C.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,D.Id,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(C.p(m,C.v(C.a([r,B.au,q,new C.bK(B.a7,m,m,C.bJ(!1,C.d(p,m,m,m,m,m,m,C.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new A.dNM(l,e),m,m),m)],v),B.F,m,B.e,B.j,0,B.p),B.f,m,m,new C.o(h,m,s,t,m,m,B.n),m,m,m,m,B.bm,m,m,m))}u.push(B.S)
for(o=0;o<11;++o){h=o===l.f?B.c.j(0.09):B.c.j(0.04)
t=new C.aX(12,12)
n=new C.aA(o===l.f?f.j(0.6):B.dt,1,B.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?B.aA:B.c
u.push(C.aE(m,C.p(m,new C.cs(B.aX,B.e,B.j,B.m,m,B.p,m,0,C.a([new C.x(s,m,B.a6d,m,m,m,m,m,m,m,m,m),B.aw,new C.bG(1,B.bn,new C.x(r.a,m,new C.F(!0,q,m,m,m,m,13,B.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),B.f,m,m,new C.o(h,m,new C.bU(n,n,n,n),new C.bt(t,t,t,t),m,m,B.n),m,m,m,B.f2,B.oh,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.dNN(l,o,e),m,m,m,m,m,m,!1,B.aa))}return C.bq(!0,new C.cW(new C.aY(0,1/0,0,k.a.b*0.75),C.cK(u,m,A0.An,m,m,B.ai,!0),m),!0,!1,B.ah,!0,!0)},
$S:96}
A.dNM.prototype={
$0(){var w=this.a
w.m(new A.dNK(w))
this.b.$1(new A.dNL())
w.E9()},
$S:0}
A.dNK.prototype={
$0(){var w=this.a
$.agl()
return w.f=Math.min(11,w.f+1)},
$S:0}
A.dNL.prototype={
$0(){},
$S:0}
A.dNN.prototype={
$0(){var w=this.a
w.m(new A.dNI(w,this.b))
this.c.$1(new A.dNJ())
w.E9()},
$S:0}
A.dNI.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.dNJ.prototype={
$0(){},
$S:0}
A.dNV.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.dNW.prototype={
$0(){return C.a4(this.a,!1).ci(C.eo(new A.dNU(),!1,null,x.H))},
$S:0}
A.dNU.prototype={
$1(d){return D.aCk},
$S:z+113}
A.dNX.prototype={
$0(){return A.hdJ(this.a,"ELECTRONICS LAB",this.b,B.aV)},
$S:0}
A.dNY.prototype={
$0(){var w=this.a
return w.m(w.d.gcOm())},
$S:0}
A.dNZ.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gr6(v))
w.E9()},
$S:0}
A.cyj.prototype={
$2(d,e){var w=null,v=this.a.gauI().x
v===$&&C.c()
return C.b3(w,w,w,new A.b6S(v,w),B.at)},
$S:69}
A.cyi.prototype={
$3(d,e,f){var w=new C.aP($.W().r,B.aq,null,null,C.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new C.b5(v,t))
w.E(new C.cR(v,u,v+e,u))
w.E(new C.cR(v,u,v,u+e))
w.E(new C.cR(v,u,v-e,u))
w.E(new C.cR(v,u,v,t))
w.E(new C.bE())
t=C.L()
t.r=B.c.j(f).gp(0)
this.a.aN(w,t)},
$S:682}
A.f84.prototype={
$1(d){var w=this,v=null,u=w.c?B.u:B.a4
u=C.ih(v,v,1,v,C.dn(v,v,v,v,v,v,v,v,v,C.l(v,v,w.b,v,v,v,v,v,v,v,v,d,v,v,u,v,v,!0,v,w.d,v,v,v,v,v,v),w.a),B.a5,B.ci,v,B.eq,B.cg)
u.eR()
return u},
$S:718}
A.fBI.prototype={
$3(d,e,f){return new A.TA(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+114}
A.fBJ.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cX(e,!1,C.ig(B.A,g,null,new C.bf(C.cH(B.cp,e,null),new C.bm(0.85,1,w),w.k("bf<bH.T>"))),null)},
$C:"$4",
$R:4,
$S:29}
A.dJD.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.dJC.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=C.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1G(o):q.bwH(o,p),m=x.p
p=C.a([C.pZ(new C.n1(n,new C.cz(p,x.aC)),B.pj,C.rt(),B.bc,B.bc,new A.dJA())],m)
n=t.d
if(n){w=B.k.F(q.gQB(),12)<4
v=w?150:96
u=C.m(16)
m=C.a([B.aw],m)
if(w)m.push(D.bsv)
else m.push(B.b8)
m.push(C.p(s,s,B.f,s,s,new C.o(w?B.bb:B.az,s,s,s,s,s,B.a6),s,9,s,s,s,s,s,9))
m.push(B.aw)
p.push(C.ao(s,C.av(C.dh(s,C.A(m,B.m,s,B.e,B.j,0,s,s),s,s,B.et,new C.o(B.w,s,s,u,s,s,B.n),B.mM,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.u1)p.push(C.ao(s,C.av(C.p(s,s,B.f,s,s,B.Je,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.vF)p.push(C.ao(s,C.p(s,s,B.f,s,s,B.Je,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(C.ao(6,C.aE(s,C.av(C.p(s,s,B.f,s,s,new C.o(B.c.j(0.75),s,s,C.m(3),s,s,B.n),s,5,s,s,s,s,s,120),s,s,s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.dJB(q),s,s,s,s,s,s,!1,B.aa),s,s,0,0,s,s))
return C.bv(r,new C.an(B.W,s,B.b_,B.q,p,s),B.ap)},
$S:296}
A.dJA.prototype={
$2(d,e){var w=x.Y
return new C.cX(e,!1,C.ig(B.A,d,null,new C.bf(e,new C.bm(0.92,1,w),w.k("bf<bH.T>"))),null)},
$S:471}
A.dJB.prototype={
$0(){var w=this.a
return w.m(new A.dJz(w))},
$S:0}
A.dJz.prototype={
$0(){return this.a.e=null},
$S:0}
A.dJy.prototype={
$0(){var w=this.a
return w.m(new A.dJx(w,this.b))},
$S:0}
A.dJx.prototype={
$0(){return this.a.e=B.d.cG(D.nL,this.b)},
$S:0}
A.dJw.prototype={
$0(){var w=this.a
return w.m(new A.dJv(w))},
$S:0}
A.dJv.prototype={
$0(){return this.a.e=0},
$S:0}
A.dJr.prototype={
$0(){var w=this.a
return w.m(new A.dJq(w))},
$S:0}
A.dJq.prototype={
$0(){return this.a.e=null},
$S:0}
A.dJu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=C.m(o?20:8),m=B.w.j(0.55),l=x.p
m=C.p(p,C.A(C.a([D.fkC,B.aw,C.D(C.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,B.eB,p,p,p,D.eZ5,p,p,p),1),C.d(B.a.aV(B.o.u(C.dk(new C.Q(Date.now(),0,!1))),2,"0")+":"+B.a.aV(B.o.u(C.h0(new C.Q(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,B.rl,p,p,p)],l),B.m,p,B.e,B.j,0,p,p),B.f,m,p,p,p,24,p,p,B.lv,p,p,p)
w=this.a
v=C.a([C.b3(p,p,p,new A.bsJ(w.gQB(),this.c.d,p),B.at)],l)
o=w.e
if(o!=null){u=C.m(10)
t=C.I(B.b7,B.r,1)
s=C.m(10)
o=C.p(p,C.A(C.a([C.aE(p,C.p(p,p,B.f,p,p,B.a9a,p,12,p,p,p,p,p,12),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.dJt(w),p,p,p,p,p,p,!1,B.aa),B.ea,C.p(p,p,B.f,p,p,B.a9g,p,12,p,p,p,p,p,12),B.ea,C.p(p,p,B.f,p,p,D.aX4,p,12,p,p,p,p,p,12),B.aw,C.D(C.d(D.nL[o].a,p,1,B.a2,p,p,p,B.a64,p,p,p),1)],l),B.m,p,B.e,B.j,0,p,p),B.f,B.cC,p,p,p,24,p,p,B.fl,p,p,p)
r=w.e
r.toString
v.push(C.bY(0,new C.C(D.bpo,C.p(p,C.bv(s,C.v(C.a([o,C.D(C.b3(p,p,p,new A.adb(r,w.gQB(),p),B.eS),1)],l),B.m,p,B.e,B.j,0,B.p),B.ap),B.f,p,p,new C.o(B.w,p,t,u,D.d4y,p,B.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=B.c.j(0.16)
u=C.m(18)
t=C.I(B.b7,B.r,1)
s=C.a([],l)
for(q=0;q<9;++q)s.push(new C.C(B.jo,w.asK(D.nL[q],34,!1),p))
v.push(C.ao(8,C.av(C.p(p,C.A(s,B.m,p,B.e,B.Q,0,p,p),B.f,p,p,new C.o(o,p,t,u,p,p,B.n),p,p,p,p,B.kD,p,p,p),p,p,p),p,p,0,0,p,p))
return C.bv(n,C.p(p,C.v(C.a([m,C.D(new C.an(B.W,p,B.b_,B.q,v,p),1)],l),B.m,p,B.e,B.j,0,B.p),B.f,L.Ki,p,p,p,p,p,p,p,p,p,p),B.ap)},
$S:296}
A.dJt.prototype={
$0(){var w=this.a
return w.m(new A.dJs(w))},
$S:0}
A.dJs.prototype={
$0(){return this.a.e=null},
$S:0}
A.fg0.prototype={
$5(d,e,f,g,h){var w,v,u,t,s,r,q,p=this
if(g===0||h<=0)return
w=f*B.k.D(h,0,1)
v=d.ae(0,new C.u(Math.cos(e)*w,-Math.sin(e)*w))
u=p.a
$.W()
t=C.L()
t.r=B.fk.gp(0)
t.c=g*2.2
t.d=B.bO
u.bA(d,v,t)
if(h>0.95){s=Math.sin(p.b*1.6+g)*0.04
t=f*0.72
r=g-1
q=h*1.6-0.9
p.$5(v,e+0.5+s,t,r,q-(5-g)*0)
p.$5(v,e-0.5+s,t,r,q)}if(g===1&&h>0.5){t=C.L()
t.r=C.ar(B.d2,B.bb,(Math.sin(p.b*2+v.a)+1)/2).gp(0)
u.ag(v,p.c*0.035,t)}},
$S:1822}
A.fF6.prototype={
$3(d,e,f){var w=this
return new A.Vb(w.d,w.a,w.c,w.b,null)},
$C:"$3",
$R:3,
$S:z+115}
A.fF7.prototype={
$4(d,e,f,g){var w=x.Y
return new C.cX(e,!1,C.ig(B.A,g,null,new C.bf(C.cH(B.cp,e,null),new C.bm(0.85,1,w),w.k("bf<bH.T>"))),null)},
$C:"$4",
$R:4,
$S:29}
A.ewK.prototype={
$0(){var w=this.a
if(w.c!=null&&!w.r)w.m(new A.ewJ(w))},
$S:0}
A.ewJ.prototype={
$0(){return this.a.y=!1},
$S:0}
A.ewI.prototype={
$0(){var w,v=this.a
v.f=-1
v.e=B.o.F(v.gCz()+this.b,10)
if(v.gCz()<0)v.e=v.gCz()+10
w=v.gac5().y
w=w==null?null:B.o.an(w.a,1000)
v.x=w==null?0:w
v.agZ()},
$S:0}
A.ewL.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1
w.agZ()},
$S:0}
A.ewU.prototype={
$0(){var w=this.a
return w.m(w.gcuE())},
$S:0}
A.ewT.prototype={
$2(d,e){var w=null,v=this.a,u=v.gac5().y,t=u==null?w:B.o.an(u.a,1000),s=(t==null?0:t)/1000,r=v.x===0&&v.a.e?s:99
return C.b3(w,w,w,new A.bs9(v.gCz(),v.f,s,r,w),B.eS)},
$S:69}
A.ewS.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):B.c.j(0.08),u=C.m(14),t=C.I(h?g:B.b7,B.r,1)
return C.aE(w,C.p(w,C.v(C.a([C.V(d,g,w,w,w,20),B.u5,C.d(e,w,w,w,w,w,w,C.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,B.jo,B.kA,w,w,56),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,B.aa)},
$3(d,e,f){return this.$5$color$on(d,e,f,B.c,!1)},
$S:1823}
A.ewN.prototype={
$0(){return this.a.auJ(-1)},
$S:0}
A.ewO.prototype={
$0(){return this.a.auJ(1)},
$S:0}
A.ewP.prototype={
$0(){return this.a.auJ(0)},
$S:0}
A.ewQ.prototype={
$0(){var w=this.a
return w.m(new A.ewM(w))},
$S:0}
A.ewM.prototype={
$0(){var w=this.a
w.r=!w.r
w.agZ()},
$S:0}
A.ewR.prototype={
$0(){return this.a.aXK(0)},
$S:0}
A.ewH.prototype={
$0(){var w=this.a
return w.m(new A.ewE(w))},
$S:0}
A.ewE.prototype={
$0(){return this.a.r=!1},
$S:0}
A.ewG.prototype={
$2(d,e){var w=null,v=D.nL[e].d.j(0.18),u=C.m(12),t=C.I(D.nL[e].d.j(0.6),B.r,1),s=D.nL[e]
return C.aE(w,C.p(w,C.v(C.a([C.d(s.b,w,w,w,w,w,w,B.SB,w,w,w),C.d(s.a,w,1,B.a2,w,w,w,D.a6i,w,w,w)],x.p),B.m,w,B.b9,B.j,0,B.p),B.f,w,w,new C.o(v,w,t,u,w,w,B.n),w,w,w,w,w,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ewF(this.a,e),w,w,w,w,w,w,!1,B.aa)},
$S:72}
A.ewF.prototype={
$0(){return this.a.aXK(this.b)},
$S:0}
A.e1V.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new A.e1U(w,d))},
$S:133}
A.e1U.prototype={
$0(){var w=this.a,v=this.b,u=J.a7(v),t=C.aN(u.h(v,"best"))
t=t==null?null:B.k.O(t)
w.e=t==null?0:t
v=C.aN(u.h(v,"level"))
v=v==null?null:B.k.O(v)
if(v==null)v=0
w.d=v
w.f=A.fPP(v)},
$S:0}
A.e1W.prototype={
$0(){},
$S:0}
A.e1L.prototype={
$0(){var w=this.a,v=B.o.D(this.b,0,59)
w.d=v
w.f=A.fPP(v)
w.r.a8(0)
w.x=!1},
$S:0}
A.e1M.prototype={
$0(){var w,v,u,t,s=this,r=s.a,q=r.r,p=s.b,o=q.h(0,p)
if(o==null){if(q.a>=r.gv_().r){C.jJ()
return}q.n(0,p,"/")}else if(o==="/")q.n(0,p,"\\")
else q.W(0,p)
A.vA("click",s.c+s.d,60,0.4)
if(A.hdS(r.gv_(),q).b.a===r.gv_().c.a){r.x=!0
q=r.d+1
p=r.e
if(q>p){r.e=q
p=q}A.vx("laser_maze",C.E(["best",p,"level",Math.min(q,59)],x.N,x.z))
A.B2("bell",D.amx,700,0.45)
for(q=r.gv_().c,q=C.ea(q,q.r,C.a2(q).c),r=r.z,p=s.e,w=s.f,v=s.r,u=q.$ti.c;q.C();){t=q.d
if(t==null)t=u.a(t)
r.push(new C.z(new C.u((B.o.F(t,7)+0.5)*p+w,(B.o.an(t,7)+0.5)*p+v),0))}}},
$S:0}
A.e1P.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=new C.at(e.b,e.d)
r.y=q
w=r.r
v=this.b
u=v.b
t=x.p
w=C.a([C.aE(B.c5,C.b3(s,s,s,new A.beP(r.gv_(),w,v.a,u,r.w,r.z,s),q),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e1N(r),s,s,s,!1,B.aa),C.ao(s,C.e2(C.A(C.a([C.d("LEVEL "+(r.d+1),s,s,s,s,s,s,F.aN4,s,s,s),C.d(""+u.a+"/"+r.gv_().c.a+" \u2605   mirrors "+w.a+"/"+r.gv_().r,s,s,s,s,s,s,P.a5L,s,s,s)],t),B.m,s,B.hJ,B.j,0,s,s),!0,s),s,s,14,14,4,s)],t)
if(r.x)w.push(A.fbr("Beam delivered! \u2605","Level "+(r.d+1)+" done.",B.bb,C.a([new A.fg(B.js,"Next level",new A.e1O(r),B.bb,s)],t)))
return new C.an(B.W,s,B.b_,B.q,w,s)},
$S:64}
A.e1N.prototype={
$1(d){return this.a.c1U(d.b)},
$S:50}
A.e1O.prototype={
$0(){var w=this.a
return w.ac7(w.d+1)},
$S:0}
A.e1Q.prototype={
$0(){var w=this.a,v=w.r
return w.m(v.gr6(v))},
$S:0}
A.e1R.prototype={
$0(){var w=this.a
return w.ac7(w.d+1)},
$S:0}
A.e1S.prototype={
$0(){var w=this.a
return w.ac7(w.d-1)},
$S:0}
A.e1T.prototype={
$0(){return this.a.ac7(this.b)},
$S:0}
A.ddx.prototype={
$1(d){var w=this.b
return new C.u(this.a+(B.o.F(d,7)+0.5)*w,this.c+(B.o.an(d,7)+0.5)*w)},
$S:719}
A.ddA.prototype={
$3(d,e,f){var w,v,u,t=this.a.$1(d),s=this.b*0.4,r=-s,q=e==="/"?new C.u(r,s):new C.u(r,r),p=new C.u(-q.a,-q.b)
r=this.c
w=t.ae(0,q)
v=t.ae(0,p)
$.W()
u=C.L()
u.r=(f?B.fZ:B.aK).gp(0)
u.c=7
u.d=B.bO
r.bA(w,v,u)
w=t.ae(0,q)
v=t.ae(0,p)
u=C.L()
u.r=B.c.gp(0)
u.c=2.4
u.d=B.bO
r.bA(w,v,u)},
$S:1825}
A.ddy.prototype={
$2(d,e){return this.a.$3(d,e,!0)},
$S:441}
A.ddz.prototype={
$2(d,e){return this.a.$3(d,e,!1)},
$S:441}
A.e2d.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.e2c(w,d))},
$S:133}
A.e2c.prototype={
$0(){var w=C.aN(J.q(this.b,"best"))
w=w==null?null:B.k.O(w)
if(w==null)w=0
return this.a.x=w},
$S:0}
A.e2e.prototype={
$0(){},
$S:0}
A.e1Z.prototype={
$1(d){return d===0},
$S:139}
A.e27.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.e,p=new C.w(1,q[0],q[1],q[2],B.t)
q=C.d("ROUND "+C.t(Math.min(r.r+1,8))+"/8",s,s,s,s,s,s,F.a5Z,s,s,s)
w=r.z==="play"?B.k.dG(r.y):20
v=x.p
w=C.A(C.a([q,C.d(""+w+" s",s,s,s,s,s,s,C.l(s,s,r.y<6?B.cq:B.c,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),C.d("SCORE "+r.w,s,s,s,s,s,s,P.a5L,s,s,s)],v),B.m,s,B.hJ,B.j,0,s,s)
q=r.z==="ready"
u=q?B.dt:p
t=C.m(22)
t=C.D(C.p(s,s,B.f,s,s,new C.o(u,s,C.I(B.b7,B.r,2),t,s,s,B.n),s,s,s,s,s,s,s,s),1)
w=C.a([C.v(C.a([new C.C(D.bmI,w,s),C.D(C.A(C.a([C.D(new C.C(B.bR,C.v(C.a([t,B.ao,C.d(q?"TARGET":"TARGET: "+r.gcsJ(),s,s,s,s,s,s,D.aNO,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1),C.D(new C.C(B.bR,C.v(C.a([C.D(C.b3(s,s,s,new A.bf3(r.f,s),B.eS),1),B.ao,C.d("YOURS \xb7 "+B.k.V(B.k.D(1-this.b*2,0,1)*100)+"% match",s,s,s,s,s,s,D.aNO,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),1)],v),B.m,s,B.e,B.j,0,s,s),1)],v),B.m,s,B.e,B.j,0,B.p)],v)
if(r.z==="ready"){q=r.x
q=q>0?"\nBest score: "+q:""
w.push(A.fbr("Light Mixer","Match each colour with red, green and blue light."+q,B.ba,C.a([new A.fg(B.iN,"Start",new A.e24(r),B.bb,s)],v)))}if(r.z==="result")w.push(A.fbr(r.Q,"Score so far: "+r.w,B.aM,C.a([new A.fg(B.js,"Next colour",new A.e25(r),B.bb,s)],v)))
if(r.z==="done"){q=r.w
u=r.x
u=q>=u?"New best score!":"Best: "+u
w.push(A.fbr("Finished! "+q,u,B.bb,C.a([new A.fg(B.mb,"Play again",new A.e26(r),B.bb,s)],v)))}return new C.an(B.W,s,B.a9,B.q,w,s)},
$S:64}
A.e24.prototype={
$0(){var w=this.a
return w.m(new A.e20(w))},
$S:0}
A.e20.prototype={
$0(){var w=this.a
w.w=w.r=0
w.auL()},
$S:0}
A.e25.prototype={
$0(){var w=this.a
return w.m(w.gc1S())},
$S:0}
A.e26.prototype={
$0(){var w=this.a
return w.m(new A.e2_(w))},
$S:0}
A.e2_.prototype={
$0(){var w=this.a
w.w=w.r=0
w.auL()},
$S:0}
A.e28.prototype={
$1(d){var w=this.a
return w.m(new A.e23(w,d))},
$S:6}
A.e23.prototype={
$0(){var w=B.k.V(this.b*4)/4
this.a.f[0]=w
return w},
$S:0}
A.e29.prototype={
$1(d){var w=this.a
return w.m(new A.e22(w,d))},
$S:6}
A.e22.prototype={
$0(){var w=B.k.V(this.b*4)/4
this.a.f[1]=w
return w},
$S:0}
A.e2a.prototype={
$1(d){var w=this.a
return w.m(new A.e21(w,d))},
$S:6}
A.e21.prototype={
$0(){var w=B.k.V(this.b*4)/4
this.a.f[2]=w
return w},
$S:0}
A.e2b.prototype={
$0(){var w=this.a
return w.m(w.gc1T())},
$S:0}
A.f7W.prototype={
$0(){return D.dQE},
$S:z+116}
A.f7X.prototype={
$0(){return D.dnP},
$S:z+117}
A.f7Y.prototype={
$0(){return D.dkn},
$S:z+118}
A.f7Z.prototype={
$0(){return D.dnf},
$S:z+119}
A.f8_.prototype={
$0(){return D.dsa},
$S:z+120}
A.f80.prototype={
$0(){return D.dMn},
$S:z+121}
A.f81.prototype={
$0(){return D.dOz},
$S:z+122}
A.f82.prototype={
$0(){return D.dru},
$S:z+123}
A.ccw.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.ccx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=C.a([],k)
for(w=$.hhj(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new C.aX(26,26)
p=r.e
o=C.a([r.d,p],u)
p=C.a([new C.ac(0,B.G,p.j(0.4),B.dp,16)],t)
n=B.c.j(0.85)
j.push(C.aE(m,C.p(m,new C.an(B.W,m,B.a9,B.q,C.a([new C.cJ(m,-6,-6,m,m,m,new C.x(r.c,m,K.Sc,m,m,m,m,m,m,m,m,m),m),new C.bK(B.lk,m,m,C.v(C.a([new C.x(r.a,m,D.eXL,m,m,m,m,m,m,m,m,m),B.d_,new C.x(r.b,m,new C.F(!0,n,m,m,m,m,12,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),B.F,m,B.e,B.Q,0,B.p),m)],k),m),B.f,m,m,new C.o(m,m,m,new C.bt(q,q,q,q),p,new C.a6(B.ax,B.aC,B.x,o,m,m),B.n),m,v,m,m,B.by,m,m,l),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.ccv(d,r),m,m,m,m,m,m,!1,B.aa))}return C.c5(B.bG,j,B.bx,14,14)},
$S:164}
A.ccv.prototype={
$0(){return C.a4(this.a,!1).ci(C.eo(new A.ccu(this.b),!1,null,x.H))},
$S:0}
A.ccu.prototype={
$1(d){return this.a.f.$0()},
$S:39}
A.eAS.prototype={
$0(){var w=this.a
return w.w=w.d[w.b0W(w.f)]},
$S:0}
A.eAO.prototype={
$0(){var w=this.a
w.w=""
w.r=9+B.cH.ai()*7},
$S:0}
A.eAN.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,B.c3)
w.w=""},
$S:0}
A.eAQ.prototype={
$0(){var w=this.a
return w.m(new A.eAP(w,this.b))},
$S:0}
A.eAP.prototype={
$0(){var w=this.a.d
if(w.length>2)B.d.cw(w,this.b)},
$S:0}
A.eAR.prototype={
$1(d){return this.a.aWo(0)},
$S:2}
A.dPV.prototype={
$0(){return A.B2("bell",C.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
A.dPW.prototype={
$0(){},
$S:0}
A.dPQ.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
A.dPS.prototype={
$0(){return this.a.aWq(this.b)},
$S:0}
A.dPT.prototype={
$0(){var w=this.a
return w.m(new A.dPR(w))},
$S:0}
A.dPR.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
A.dPU.prototype={
$0(){var w=this.a
return w.aWq(w.d)},
$S:0}
A.dBp.prototype={
$2(d,e){return d+e},
$S:93}
A.dBq.prototype={
$0(){},
$S:0}
A.dBk.prototype={
$2(d,e){return d+e},
$S:93}
A.dBn.prototype={
$0(){var w=this.a
return w.m(new A.dBm(w,this.b))},
$S:0}
A.dBm.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
A.dBo.prototype={
$0(){var w=this.a
return w.m(new A.dBl(w))},
$S:0}
A.dBl.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
A.dNb.prototype={
$0(){return A.qz(this.b,this.a.d,"drawing")},
$S:0}
A.dNc.prototype={
$1(d){var w=this.a
return w.m(new A.dNa(w,d))},
$S:44}
A.dNa.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aGl(u,v,t))},
$S:0}
A.dNd.prototype={
$1(d){var w=this.a
return w.m(new A.dN9(w,d))},
$S:18}
A.dN9.prototype={
$0(){return B.d.gam(this.a.e).c.push(this.b.b)},
$S:0}
A.dNe.prototype={
$1(d){var w=this.a
return w.m(new A.dN8(w,d))},
$S:23}
A.dN8.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=C.a([],x.g)
t.push(this.b.b)
return w.e.push(new A.aGl(u,v,t))},
$S:0}
A.dNf.prototype={
$0(){var w=this.a
return w.m(new A.dN7(w,this.b))},
$S:0}
A.dN7.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
A.dNg.prototype={
$1(d){var w=this.a
return w.m(new A.dN6(w,d))},
$S:6}
A.dN6.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.dNh.prototype={
$0(){var w=this.a
return w.m(new A.dN5(w))},
$S:0}
A.dN5.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dNi.prototype={
$0(){var w=this.a
return w.m(new A.dN4(w))},
$S:0}
A.dN4.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
A.dNj.prototype={
$0(){var w=this.a
return w.m(B.d.gr6(w.e))},
$S:0}
A.dNk.prototype={
$0(){var w=this.a
return w.m(new A.dN3(w))},
$S:0}
A.dN3.prototype={
$0(){var w=this.a
w.x=D.atl[B.o.F(B.d.cG(D.atl,w.x)+1,4)]},
$S:0}
A.e7A.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
A.e7B.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
A.B2("bell",C.a([0,4,7],w),500,0.45)
u.m(new A.e7z(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&C.c()
if(v===u.length)A.B2("bell",C.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
A.e7z.prototype={
$0(){var w=this.a
w.r.v(0,C.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
A.e7C.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new A.e7y(w))},
$S:11}
A.e7y.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
A.e7G.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return C.aE(w,C.mM(new A.e7E(v,e),w,B.bc,B.pj,w,new C.bm(0,u,x.Y),x.i),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.e7F(v,e),w,w,w,w,w,w,!1,B.aa)},
$S:72}
A.e7F.prototype={
$0(){return this.a.c2O(this.b)},
$S:0}
A.e7E.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=C.dj(),m=n.a
m.$flags&2&&C.ai(m)
m[11]=0.001
n.ft(3.141592653589793*e)
m=C.m(16)
w=o?p:D.bP9
if(o)v=q.a.r.t(0,q.b)?B.bb.j(0.25):B.c.j(0.12)
else v=p
u=q.a
t=q.b
s=C.I(u.r.t(0,t)?B.bb:B.b7,B.r,1)
if(o){r=C.dj()
r.ft(3.141592653589793)
u=u.e
u===$&&C.c()
r=C.fr(B.A,C.d(u[t],p,p,p,p,p,p,D.eVb,p,p,p),p,r,!0)
u=r}else u=D.fe3
return C.fr(B.A,C.p(B.A,u,B.f,p,p,new C.o(v,p,s,m,p,w,B.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:135}
A.e7H.prototype={
$0(){var w=this.a
return w.m(new A.e7D(w,this.b))},
$S:0}
A.e7D.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aq5()},
$S:0}
A.e7I.prototype={
$0(){var w=this.a
return w.m(w.gbFc())},
$S:0}
A.ehY.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
A.ehZ.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
A.ehW.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.ehX.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new A.ehV(w))},
$S:11}
A.ehV.prototype={
$0(){return this.a.f=-1},
$S:0}
A.ei_.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
A.ei0.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
A.ei1.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.aWp()},
$S:11}
A.ei2.prototype={
$0(){return this.a.c2U(this.b)},
$S:0}
A.ewf.prototype={
$1(d){return C.t(d.h(0,1))+","},
$S:67}
A.ewo.prototype={
$3$big(d,e,f){var w=null,v=C.D(C.d(d,w,1,B.a2,w,w,w,C.l(w,w,B.aQ,w,w,w,w,w,w,w,w,f?16:14,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new C.C(B.kA,C.A(C.a([v,B.ab,new C.dl(1,B.ch,C.f4(B.A,C.d(e,w,w,w,w,w,w,C.l(w,w,B.c,w,w,w,w,w,w,w,w,f?30:18,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.f,B.ef),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1827}
A.ewk.prototype={
$1(d){return this.a.m(new A.ewj())},
$S:2}
A.ewj.prototype={
$0(){},
$S:0}
A.ewl.prototype={
$0(){var w=this.a
return w.m(new A.ewi(w,this.b))},
$S:0}
A.ewi.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.ewm.prototype={
$1(d){var w=this.a
return w.m(new A.ewh(w,d))},
$S:6}
A.ewh.prototype={
$0(){return this.a.f=B.k.V(this.b)},
$S:0}
A.ewn.prototype={
$0(){var w=this.a
return w.m(new A.ewg(w))},
$S:0}
A.ewg.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.e6f.prototype={
$0(){},
$S:0}
A.e6g.prototype={
$0(){},
$S:0}
A.e68.prototype={
$0(){var w=this.a
return w.m(new A.e67(w))},
$S:0}
A.e67.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=C.c1(u,1,!1,x.S)
w.r=0.9
A.a6Z("hat",0.6)},
$S:0}
A.e69.prototype={
$0(){var w=this.a
return w.m(new A.e66(w))},
$S:0}
A.e66.prototype={
$0(){this.a.y=1.1
A.l6("bell",36,200,0.4)},
$S:0}
A.e6a.prototype={
$0(){var w=this.a
return w.m(new A.e65(w))},
$S:0}
A.e65.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aD(Math.max(v,u)-t+1)
w.as=u
A.l6("bell",12+B.o.F(u,12),500,0.5)},
$S:0}
A.e6b.prototype={
$0(){var w=this.a
return w.m(new A.e64(w,this.b))},
$S:0}
A.e64.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.e6c.prototype={
$1(d){var w=this.a
return w.m(new A.e63(w,d))},
$S:6}
A.e63.prototype={
$0(){var w,v,u,t=this.a,s=t.e=B.k.V(this.b),r=J.e0(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
A.e6d.prototype={
$1(d){var w=this.a
return w.m(new A.e62(w,d))},
$S:6}
A.e62.prototype={
$0(){return this.a.z=B.k.V(this.b)},
$S:0}
A.e6e.prototype={
$1(d){var w=this.a
return w.m(new A.e61(w,d))},
$S:6}
A.e61.prototype={
$0(){return this.a.Q=B.k.V(this.b)},
$S:0}
A.cpc.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.cpd.prototype={
$0(){var w=this.a
return A.hdJ(this.b,w.c,w.e,w.d)},
$S:0}
A.fFx.prototype={
$1(d){var w,v=null,u=C.m(24),t=this.a,s=t.j(0.4)
t=C.d(this.b,v,v,v,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,B.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=C.d(this.c,v,v,v,v,v,v,D.eNT,v,v,v)
return C.eh(C.a([C.bJ(!1,D.f3P,v,v,!0,v,v,new A.fFw(d),v,v)],x.p),v,v,D.mH,w,v,v,v,new C.b7(u,new C.aA(s,1,B.r,-1)),t,v)},
$S:19}
A.fFw.prototype={
$0(){C.a4(this.a,!1).N(null)
return null},
$S:0}
A.cp8.prototype={
$0(){C.eO()
this.a.e.$0()},
$S:0}
A.cp7.prototype={
$0(){C.eO()
this.a.e.$0()},
$S:0}
A.cpe.prototype={
$0(){C.eO()
this.a.e.$0()},
$S:0}
A.cp9.prototype={
$0(){var w=this.a
B.d.W(w.fi$,this.b.bb())
if(w.c!=null)this.c.$0()},
$S:0}
A.cpb.prototype={
$1(d){var w=this.a,v=d.a,u=B.k.D((v-w.kM$.a)/1e6,0,0.04)
w.kM$=d
w.fL$=B.o.an(v,1000)
w.lf(u)
if(w.c!=null)w.m(new A.cpa())},
$S:8}
A.cpa.prototype={
$0(){},
$S:0}
A.ccr.prototype={
$2(d,e){var w,v,u,t
for(w=e.length,v=this.a,u=v.$flags|0,t=0;t<w;++t){u&2&&C.ai(v,9)
v.setUint8(d+t,e.charCodeAt(t))}},
$S:441}
A.cct.prototype={
$0(){var w=this
return A.hvk(w.a,w.b,w.c,w.d,w.e)},
$S:338}
A.ccs.prototype={
$0(){var w=this
return A.l6(w.a,w.b,w.c,w.d)},
$S:1}
A.dSD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new A.dSC(w,d))},
$S:z+125}
A.dSC.prototype={
$0(){return this.a.cn8(this.b)},
$S:0}
A.dS5.prototype={
$0(){var w,v,u,t=this.a,s=J.a7(t),r=s.gM(t),q=new Float64Array(r*4)
for(w=0;w<s.gM(t);++w){v=J.q(s.h(t,w),0)*3.141592653589793/180
u=J.q(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:1828}
A.dS3.prototype={
$0(){return this.a.id=D.a1d},
$S:0}
A.dS4.prototype={
$0(){var w=this.b.a,v=C.T(w).k("a1<1>")
v=C.oX(new C.a1(w,new A.dS2(this.c),v),6,v.k("G.E"))
w=C.B(v,C.a2(v).k("G.E"))
return this.a.id=w},
$S:0}
A.dS2.prototype={
$1(d){return B.a.t(d.a.toLowerCase(),this.a)},
$S:z+126}
A.dS1.prototype={
$1(d){var w=null,v=C.ci(C.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,C.l(w,w,B.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),B.q,w,B.y,w,w,w,w,B.ai)
return C.eh(C.a([C.bJ(!1,B.pY,w,w,!0,w,w,new A.dS0(d),w,w)],x.p),w,w,D.mH,v,w,w,w,w,D.fe7,w)},
$S:19}
A.dS0.prototype={
$0(){C.a4(this.a,!1).N(null)
return null},
$S:0}
A.dSo.prototype={
$0(){return A.qz(this.b,this.a.d,"earth")},
$S:0}
A.dSp.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.fy=o
w=p.r
v=p.w
u=p.x
t=p.y
s=p.gUM()
r=p.z
o=C.a([C.aE(B.c5,C.b3(q,q,q,new A.bdg(w,v,u,t,s*r,r,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dSc(p),new A.dSd(p),new A.dSe(p),q,q,q,q,q,q,q,new A.dSf(p),q,q,q,!1,B.aa)],x.p)
if(p.r==null)o.push(A6.a9T)
w=this.b
if(w!=null)o.push(C.ao(8,p.c3v(w),q,q,10,10,q,q))
return new C.eq(new C.an(B.W,q,B.b_,B.q,o,q),p.d)},
$S:198}
A.dSd.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:252}
A.dSe.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=B.k.D(u.go*d.d,0.8,16)
else{w=57.2958/(u.gUM()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=B.k.D(u.x+v.b*w,-85,85)}},
$S:223}
A.dSc.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gUM()*u.z)
v=d.a.a
u.Q=B.k.D(-v.a*w,-160,160)
u.as=B.k.D(v.b*w,-100,100)},
$S:575}
A.dSf.prototype={
$1(d){var w=this.a,v=w.c3y(d.b)
if(v!=null)w.m(new A.dS6(w,v))
else w.m(new A.dS7(w))},
$S:50}
A.dS6.prototype={
$0(){return this.a.avf(this.b)},
$S:0}
A.dS7.prototype={
$0(){return this.a.fx=null},
$S:0}
A.dSq.prototype={
$0(){var w=this.a
w.e.bM(0,B.c3)
w.m(new A.dSb(w,this.b))},
$S:0}
A.dSb.prototype={
$0(){var w=this.a
w.id=D.a1d
w.avf(this.b)},
$S:0}
A.dSu.prototype={
$0(){var w=this.a
return w.m(new A.dSn(w))},
$S:0}
A.dSn.prototype={
$0(){var w=this.a
w.fx=null
w.arg(15,w.y,1)},
$S:0}
A.dSv.prototype={
$0(){var w=this.a
return w.m(new A.dSm(w,this.b))},
$S:0}
A.dSm.prototype={
$0(){var w=this.b.b
return this.a.arg(w.a,w.b,w.c)},
$S:0}
A.dSw.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new A.dSl(w,v))},
$S:0}
A.dSl.prototype={
$0(){var w=this.b.a
return this.a.avf(w[B.cH.aD(w.length)])},
$S:0}
A.dSx.prototype={
$1(d){var w=this.a
return w.m(new A.dSk(w,d))},
$S:6}
A.dSk.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
A.dSy.prototype={
$1(d){var w=this.a
return w.m(new A.dSj(w,d))},
$S:6}
A.dSj.prototype={
$0(){return this.a.dy=this.b},
$S:0}
A.dSz.prototype={
$1(d){var w=this.a
return w.m(new A.dSi(w,d))},
$S:6}
A.dSi.prototype={
$0(){return this.a.fr=this.b},
$S:0}
A.dSA.prototype={
$0(){var w=this.a
return w.m(new A.dSh(w))},
$S:0}
A.dSh.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
A.dSB.prototype={
$0(){var w=this.a
return w.m(new A.dSg(w))},
$S:0}
A.dSg.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
A.dSr.prototype={
$0(){var w=this.a
return w.m(new A.dSa(w))},
$S:0}
A.dSa.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
A.dSs.prototype={
$0(){var w=this.a
return w.m(new A.dS9(w))},
$S:0}
A.dS9.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
A.dSt.prototype={
$0(){var w=this.a
return w.m(new A.dS8(w))},
$S:0}
A.dS8.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
A.dS_.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aMw,w,w,w),B.u5,C.d(e,w,2,B.a2,w,w,w,B.Sy,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:138}
A.dRZ.prototype={
$0(){var w=this.a
return w.m(new A.dRY(w))},
$S:0}
A.dRY.prototype={
$0(){return this.a.fx=null},
$S:0}
A.d9h.prototype={
$0(){var w=null,v=C.ih(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,D.cPU,w,w),this.a),B.a5,B.ci,w,B.eq,B.cg)
v.eR()
return v},
$S:327}
A.d9i.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new C.u(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1829}
A.f7P.prototype={
$0(){return D.dpM},
$S:z+127}
A.f7Q.prototype={
$0(){return D.dOh},
$S:z+128}
A.f7R.prototype={
$0(){return D.dpO},
$S:z+129}
A.f7S.prototype={
$0(){return D.dk9},
$S:z+130}
A.f7T.prototype={
$0(){return D.dpK},
$S:z+131}
A.f7U.prototype={
$0(){return D.dMo},
$S:z+132}
A.f7V.prototype={
$0(){return D.dMk},
$S:z+133}
A.ex2.prototype={
$0(){return C.a4(this.a,!1).mn()},
$S:0}
A.ex3.prototype={
$0(){var w=this.a
return w.m(new A.ex1(w))},
$S:0}
A.ex1.prototype={
$0(){var w=this.a
return w.d=B.o.F(w.gaPB()+1,16)},
$S:0}
A.ex4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=C.a([],l)
for(w=$.hhi(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new C.aX(18,18)
q=s.d
p=new C.aA(q.j(0.5),1,B.r,-1)
o=C.a([q.j(0.28),D.bcT],u)
k.push(C.aE(n,C.p(n,C.v(C.a([C.V(s.c,q,n,n,n,30),B.P,new C.x(s.a,n,D.eSe,n,B.L,n,n,n,n,2,n,n),B.d_,new C.x(s.b,n,D.eXa,n,B.L,n,n,n,n,2,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new C.o(n,n,new C.bU(p,p,p,p),new C.bt(r,r,r,r),n,new C.a6(B.ax,B.aC,B.x,o,n,n),B.n),n,v,n,n,B.cl,n,n,m),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.ex0(d,s),n,n,n,n,n,n,!1,B.aa))}return C.c5(B.fI,k,B.bx,10,10)},
$S:164}
A.ex0.prototype={
$0(){return C.a4(this.a,!1).ci(C.eo(new A.ex_(this.b),!1,null,x.H))},
$S:0}
A.ex_.prototype={
$1(d){return this.a.e.$0()},
$S:39}
A.epb.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
A.epm.prototype={
$0(){return A.qz(this.b,this.a.d,"solar-system")},
$S:0}
A.epn.prototype={
$2(d,e){var w,v=null,u=this.a,t=new C.at(e.b,e.d)
u.ch=t
t=C.a([C.aE(B.c5,C.b3(v,v,v,new A.bpx(u,v),t),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new A.epj(u),new A.epk(u),v,v,v,v,v,v,v,new A.epl(u),v,v,v,!1,B.aa)],x.p)
w=this.b
if(w!=null)t.push(C.ao(8,u.c3A(w),v,v,10,10,v,v))
return new C.eq(new C.an(B.W,v,B.b_,B.q,t,v),u.d)},
$S:198}
A.epj.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:252}
A.epk.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=B.k.D(w.y*d.d,0.5,9)
else w.x=w.x.ae(0,d.a)},
$S:223}
A.epl.prototype={
$1(d){var w=this.a,v=w.c3D(d.b)
if(v!=null)w.aWL(v)},
$S:50}
A.epo.prototype={
$0(){var w=this.a
return w.m(new A.epi(w))},
$S:0}
A.epi.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=B.J
w.w=1},
$S:0}
A.epp.prototype={
$0(){return this.a.aWL(this.b)},
$S:0}
A.epq.prototype={
$1(d){var w=this.a
return w.m(new A.eph(w,d))},
$S:6}
A.eph.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
A.epr.prototype={
$1(d){var w=this.a
return w.m(new A.epg(w,d))},
$S:6}
A.epg.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.eps.prototype={
$0(){var w=this.a
return w.m(new A.epf(w))},
$S:0}
A.epf.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
A.ept.prototype={
$0(){var w=this.a
return w.m(new A.epe(w))},
$S:0}
A.epe.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
A.epu.prototype={
$0(){var w=this.a
return w.m(new A.epd(w))},
$S:0}
A.epd.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
A.epv.prototype={
$0(){var w=this.a
return w.m(new A.epc(w))},
$S:0}
A.epc.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
A.epa.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=B.k.aa(d/365.25,w)+" Earth years"}else w=B.k.aa(d,0)+" Earth days"
return w},
$S:328}
A.ep9.prototype={
$2(d,e){var w=null
return C.D(C.v(C.a([C.d(d,w,w,w,w,w,w,D.aMw,w,w,w),B.u5,C.d(e,w,2,B.a2,w,w,w,B.Sy,w,w,w)],x.p),B.F,w,B.e,B.j,0,B.p),1)},
$S:138}
A.ep8.prototype={
$0(){var w=this.a
return w.m(new A.ep7(w))},
$S:0}
A.ep7.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
A.eRc.prototype={
$0(){var w=null,v=C.ih(w,w,w,w,C.dn(w,w,w,w,w,w,w,w,w,C.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,B.I,w,w,!0,w,w,w,w,w,F.OV,w,w),this.a),B.a5,B.ci,w,B.eq,B.cg)
v.eR()
return v},
$S:327}
A.eRd.prototype={
$1(d){return d.c>0},
$S:z+20}
A.eRe.prototype={
$1(d){return d.c>0},
$S:z+20}
A.dSH.prototype={
$0(){},
$S:0}
A.dT9.prototype={
$1(d){return d!=null},
$S:458}
A.dSW.prototype={
$0(){var w=this.a
return w.m(new A.dSN(w,this.b))},
$S:0}
A.dSN.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
A.dSX.prototype={
$0(){var w=this.a
return w.m(new A.dSM(w))},
$S:0}
A.dSM.prototype={
$0(){return this.a.f=!1},
$S:0}
A.dSY.prototype={
$0(){var w=this.a
return w.m(new A.dSV(w))},
$S:0}
A.dSV.prototype={
$0(){return this.a.f=!0},
$S:0}
A.dT1.prototype={
$0(){var w=this.a
return w.m(new A.dSU(w))},
$S:0}
A.dSU.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
A.dT2.prototype={
$1(d){var w=this.a
return w.m(new A.dST(w,d))},
$S:6}
A.dST.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.dT3.prototype={
$0(){var w=this.a
return w.m(w.gcqf())},
$S:0}
A.dT4.prototype={
$1(d){var w=this.a
return w.m(new A.dSS(w,d))},
$S:6}
A.dSS.prototype={
$0(){return this.a.at=this.b},
$S:0}
A.dT5.prototype={
$1(d){var w=this.a
return w.m(new A.dSR(w,d))},
$S:6}
A.dSR.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dT6.prototype={
$1(d){var w=this.a
return w.m(new A.dSQ(w,d))},
$S:6}
A.dSQ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
A.dT7.prototype={
$1(d){var w=this.a
return w.m(new A.dSP(w,d))},
$S:6}
A.dSP.prototype={
$0(){return this.a.ch=this.b},
$S:0}
A.dT8.prototype={
$0(){var w=this.a
return w.m(new A.dSO(w))},
$S:0}
A.dSO.prototype={
$0(){return this.a.ay=4},
$S:0}
A.dSZ.prototype={
$0(){var w=this.a
return w.m(new A.dSL(w))},
$S:0}
A.dSL.prototype={
$0(){return this.a.ay=7.67},
$S:0}
A.dT_.prototype={
$0(){var w=this.a
return w.m(new A.dSK(w))},
$S:0}
A.dSK.prototype={
$0(){return this.a.ay=9},
$S:0}
A.dT0.prototype={
$0(){var w=this.a
return w.m(new A.dSJ(w))},
$S:0}
A.dSJ.prototype={
$0(){return this.a.ay=11.3},
$S:0}
A.dSG.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=C.a([C.bY(0,C.bX(g,new C.o(D.bbz,g,g,C.m(20),g,g,B.n),B.be),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.y5[q]
n=C.b0(o.d)
o=C.v(C.a([new C.x(o.a,g,new C.F(!0,n,g,g,g,g,12.5,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new C.x(C.t(D.y5[q].b)+" m/s\xb2",g,D.eWx,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p)
n=p+t
m=C.p(g,g,B.f,B.dt,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?C.V(L.M4,C.b0(D.y5[q].d),g,g,g,22):C.p(g,g,B.f,g,g,new C.o(C.b0(D.y5[q].d),g,g,g,C.a([new C.ac(0,B.G,C.b0(D.y5[q].d).j(0.6),B.J,10)],u),g,B.a6),g,22,g,g,g,g,g,22)
j=C.p(g,g,B.f,C.b0(D.y5[q].d).j(0.6),g,g,g,3,g,B.fl,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=B.k.aa(i,2)+" s"
h=v[q]==null?"":"to land"
B.d.v(a1,C.a([new C.cJ(p,8,g,g,f,g,o,g),new C.cJ(n-0.5,54,g,e,g,g,m,g),new C.cJ(n-11,54+s*(l/20),g,g,g,g,k,g),new C.cJ(p,g,g,8,f,g,C.v(C.a([j,B.au,new C.x(i,g,B.ua,g,g,g,g,g,g,g,g,g),new C.x(h,g,D.eP2,g,g,g,g,g,g,g,g,g)],a0),B.m,g,B.e,B.j,0,B.p),g)],a0))}if(!w.x&&B.d.d8(v,new A.dSF()))a1.push(D.b0S)
return new C.an(B.W,g,B.a9,B.q,a1,g)},
$S:64}
A.dSF.prototype={
$1(d){return d==null},
$S:458}
A.dSI.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=B.k.D(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=C.m(8)
p=C.p(v,v,B.f,v,v,new C.o(B.c.j(0.05),v,v,p,v,v,B.n),v,26,v,v,v,v,v,v)
t=t.c
t=C.dh(v,v,v,v,B.bc,new C.o(v,v,v,C.m(8),v,new C.a6(B.a3,B.a7,B.x,C.a([C.b0(t).j(0.9),C.b0(t).j(0.4)],x.O),v,v),B.n),B.i6,v,26,v,v,v,v,e.b*q)
w=r<100?B.k.aa(r,1):A.G0(r)
u=u.ax*9.81/s
u=u<10?B.k.aa(u,2):B.k.aa(u,0)
return new C.an(B.W,v,B.a9,B.q,C.a([p,t,C.ao(v,C.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.eUX,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:64}
A.dSE.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=C.b3(v,v,v,new A.b8w(new C.u(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),B.at)
o=B.w.j(0.55)
p=C.m(14)
q=C.I(B.bE,B.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(B.a.t(u,"forever")||B.a.t(u,"again"))u=B.bb
else u=B.a.t(u,"escapes")?B.aV:B.c
u=C.d(t,v,v,v,v,v,v,C.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=B.k.aa(Math.sqrt(58.86870477034412),1)
s=B.k.aa(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+A.G0(B.k.D(r.cx.gcl()-6371,0,9e9))+" km":""
w=x.p
return new C.an(B.W,v,B.b_,B.q,C.a([n,C.ao(v,C.p(v,C.v(C.a([u,B.bB,C.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,E.aO3,v,v,v)],w),B.F,v,B.e,B.Q,0,B.p),B.f,v,v,new C.o(o,v,q,p,v,v,B.n),v,v,v,v,B.bR,v,v,v),v,v,12,12,8,v)],w),v)},
$S:64}
A.ei5.prototype={
$0(){return A.qz(this.b,this.a.d,"size-compare")},
$S:0}
A.ei6.prototype={
$0(){var w=this.a
return w.m(new A.ei4(w,this.b))},
$S:0}
A.ei4.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.ei7.prototype={
$0(){var w=this.a
return w.m(new A.ei3(w,this.b))},
$S:0}
A.ei3.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.ePm.prototype={
$3(d,e,f){var w,v,u=this.a
$.W()
w=C.L()
w.r=f.j(0.2).gp(0)
w.z=new C.hr(B.G,Math.max(2,e*0.18))
u.ag(d,e*1.12,w)
w=C.L()
v=C.ar(f,B.w,0.6)
v.toString
w.sau(new C.bS(N.q5,0.5,B.x,null,0,C.a([B.c,f,v],x.O),E.a0r,null).aw(0,C.bT(d,e)))
u.ag(d,e,w)},
$S:716}
A.dAR.prototype={
$1(d){return d.e<=0},
$S:z+135}
A.dAF.prototype={
$1(d){return d.b},
$S:z+90}
A.dAG.prototype={
$0(){return A.qz(this.b,this.a.d,"black-hole")},
$S:0}
A.dAH.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new C.at(e.b,e.d)
p.Q=o
o=C.aE(B.c5,C.b3(q,q,q,new A.b7V(p,q),o),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.dAD(p),q,q,q,q,q,q,q,q,q,new A.dAE(p),q,q,q,q,!1,B.aa)
w=B.w.j(0.55)
v=C.m(14)
u=C.I(B.bE,B.r,1)
t=p.r
if(t<1000)t=B.k.aa(t,t<10?1:0)+" Suns"
else t=A.fjk(t)+" Suns"
t=p.acO("MASS",t)
s=2.953*p.r
r=x.p
r=C.a([o,C.ao(q,C.p(q,C.A(C.a([t,p.acO("EDGE WIDTH",(s<100?B.k.aa(s,1):A.G0(s))+" km"),p.acO("TIME",B.k.aa(this.b*100,0)+"%"),p.acO("EATEN",""+p.as)],r),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new C.o(w,q,u,v,q,q,B.n),q,q,q,q,B.bR,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.e39)
return new C.eq(new C.an(B.W,q,B.b_,B.q,r,q),p.d)},
$S:198}
A.dAE.prototype={
$1(d){return this.a.aWM(d.b)},
$S:23}
A.dAD.prototype={
$1(d){if(B.cH.ai()<0.12)this.a.aWM(d.b)},
$S:18}
A.dAJ.prototype={
$1(d){var w=this.a
return w.m(new A.dAC(w,d))},
$S:6}
A.dAC.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
A.dAK.prototype={
$0(){var w=this.a
return w.m(new A.dAB(w))},
$S:0}
A.dAB.prototype={
$0(){return this.a.r=10},
$S:0}
A.dAL.prototype={
$0(){var w=this.a
return w.m(new A.dAA(w))},
$S:0}
A.dAA.prototype={
$0(){return this.a.r=21},
$S:0}
A.dAM.prototype={
$0(){var w=this.a
return w.m(new A.dAz(w))},
$S:0}
A.dAz.prototype={
$0(){return this.a.r=43e5},
$S:0}
A.dAN.prototype={
$0(){var w=this.a
return w.m(new A.dAy(w))},
$S:0}
A.dAy.prototype={
$0(){return this.a.r=65e8},
$S:0}
A.dAO.prototype={
$0(){var w=this.a
return w.m(new A.dAx(w))},
$S:0}
A.dAx.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
A.dAP.prototype={
$0(){var w=this.a
return w.m(new A.dAw(w))},
$S:0}
A.dAw.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dAQ.prototype={
$0(){var w=this.a
return w.m(new A.dAv(w))},
$S:0}
A.dAv.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.dAI.prototype={
$0(){var w=this.a
return w.m(new A.dAu(w))},
$S:0}
A.dAu.prototype={
$0(){var w=this.a
B.d.a8(w.z)
w.as=0},
$S:0}
A.dRe.prototype={
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
$S:1830}
A.dR4.prototype={
$0(){return A.qz(this.b,this.a.d,"galaxy")},
$S:0}
A.dR5.prototype={
$0(){var w=this.a
return w.m(new A.dR3(w,this.b))},
$S:0}
A.dR3.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.YF()},
$S:0}
A.dR6.prototype={
$0(){var w=this.a
return w.m(new A.dR2(w))},
$S:0}
A.dR2.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.YF()}w.cq7()},
$S:0}
A.dR7.prototype={
$1(d){var w=this.a
return w.m(new A.dR1(w,d))},
$S:6}
A.dR1.prototype={
$0(){var w=this.a
w.f=B.k.V(this.b)
w.YF()},
$S:0}
A.dR8.prototype={
$1(d){var w=this.a
return w.m(new A.dR0(w,d))},
$S:6}
A.dR0.prototype={
$0(){var w=this.a
w.r=this.b
w.YF()},
$S:0}
A.dR9.prototype={
$1(d){var w=this.a
return w.m(new A.dR_(w,d))},
$S:6}
A.dR_.prototype={
$0(){return this.a.as=this.b},
$S:0}
A.dRa.prototype={
$1(d){var w=this.a
return w.m(new A.dQZ(w,d))},
$S:6}
A.dQZ.prototype={
$0(){return this.a.ax=this.b},
$S:0}
A.dRb.prototype={
$0(){var w=this.a
return w.m(new A.dQY(w))},
$S:0}
A.dQY.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.dRc.prototype={
$0(){var w=this.a
return w.m(new A.dQX(w))},
$S:0}
A.dQX.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
A.dRd.prototype={
$0(){var w=this.a
return w.m(new A.dQW(w))},
$S:0}
A.dQW.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
A.d6q.prototype={
$6(d,e,f,g,h,i){return g.ae(0,new C.u((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1831}
A.ehk.prototype={
$0(){return A.qz(this.b,this.a.d,"seasons-moon")},
$S:0}
A.ehl.prototype={
$0(){var w=this.a
return w.m(new A.ehj(w))},
$S:0}
A.ehj.prototype={
$0(){return this.a.f="seasons"},
$S:0}
A.ehm.prototype={
$0(){var w=this.a
return w.m(new A.ehi(w))},
$S:0}
A.ehi.prototype={
$0(){return this.a.f="moon"},
$S:0}
A.ehn.prototype={
$0(){var w=this.a
return w.m(new A.ehh(w))},
$S:0}
A.ehh.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
A.eho.prototype={
$0(){var w=this.a
return w.m(new A.ehg(w))},
$S:0}
A.ehg.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
A.ehp.prototype={
$1(d){var w=this.a
return w.m(new A.ehf(w,d))},
$S:6}
A.ehf.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.ehq.prototype={
$1(d){var w=this.a
return w.m(new A.ehe(w,d))},
$S:6}
A.ehe.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.ehr.prototype={
$1(d){var w=this.a
return w.m(new A.ehd(w,d))},
$S:6}
A.ehd.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.ehs.prototype={
$1(d){var w=this.a
return w.m(new A.ehc(w,d))},
$S:6}
A.ehc.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=A.aL6.prototype
w.bsN=w.q
w=A.aKm.prototype
w.brX=w.q
w=A.aJo.prototype
w.bqX=w.q
w=A.aJp.prototype
w.bqY=w.q
w=A.aJu.prototype
w.br2=w.q
w=A.aLb.prototype
w.bsS=w.q
w=A.aKk.prototype
w.brV=w.q
w=A.aKt.prototype
w.bs3=w.q
w=A.aKz.prototype
w.bs9=w.q
w=A.aJs.prototype
w.br0=w.q
w=A.aKh.prototype
w.brS=w.q
w=A.aKw.prototype
w.bs6=w.q
w=A.aKf.prototype
w.brQ=w.q
w=A.aKg.prototype
w.brR=w.q
w=A.aJG.prototype
w.brf=w.q
w=A.aJk.prototype
w.bqT=w.q
w=A.aJO.prototype
w.brn=w.q
w=A.avS.prototype
w.bo4=w.q
w=A.avT.prototype
w.bo5=w.q
w=A.aHR.prototype
w.bpl=w.q
w=A.aJD.prototype
w.brb=w.q
w=A.aKA.prototype
w.bsa=w.q
w=A.aK4.prototype
w.brF=w.q
w=A.aK5.prototype
w.brG=w.q
w=A.aJq.prototype
w.bqZ=w.q
w=A.aJJ.prototype
w.bri=w.q
w=A.aKd.prototype
w.brO=w.q
w=A.aKH.prototype
w.bsh=w.q
w=A.aJP.prototype
w.brp=w.q
w=A.aJQ.prototype
w.brq=w.q
w=A.aJR.prototype
w.brr=w.q
w=A.aKp.prototype
w.bs_=w.q
w=A.aKs.prototype
w.bs2=w.q
w=A.aJn.prototype
w.bqW=w.q
w=A.aJM.prototype
w.brl=w.q
w=A.aKo.prototype
w.brZ=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_0i,t=a._instance_1i,s=a.installInstanceTearOff
w(A.aCw.prototype,"gaua","c_6",0)
var r
v(r=A.aAX.prototype,"gc7_","c70",82)
w(r,"gc_C","aVl",0)
w(r=A.axN.prototype,"gc0D","xb",0)
w(r,"gHr","nK",0)
v(r,"gHU","HV",8)
w(r,"gcea","ceb",0)
w(r,"gcsS","csT",0)
w(r=A.aDJ.prototype,"gHr","nK",0)
v(r,"gHU","HV",8)
w(r,"gc0E","c0F",0)
w(r=A.ay2.prototype,"gHr","nK",0)
v(r,"gHU","HV",8)
u(r,"gc0A","c0B",0)
w(r=A.ayW.prototype,"gHr","nK",0)
v(r,"gHU","HV",8)
w(r=A.aCq.prototype,"gc0H","auw",0)
v(r,"gc0I","c0J",8)
v(A.b2Z.prototype,"ganh","bkq",43)
w(r=A.aCx.prototype,"gbLt","aQh",0)
w(r,"gby8","by9",0)
w(r,"gc0M","abP",0)
v(r,"gc0O","c0P",8)
w(r=A.aCB.prototype,"gc0R","auz",0)
v(r,"gc0S","c0T",8)
w(A.aB_.prototype,"gc0V","c0W",0)
t(A.aBg.prototype,"gc10","c11",54)
w(r=A.aFw.prototype,"gcpQ","cpR",0)
w(r,"gcdF","aee",0)
w(r,"gcbj","cbk",0)
w(r,"gc1_","abQ",7)
w(r=A.aCv.prototype,"gbCl","a7u",7)
w(r,"gcaB","aYq",0)
w(r,"gcem","aem",7)
u(r,"gc13","abR",7)
w(A.aCL.prototype,"gbTc","bTd",0)
w(r=A.aCn.prototype,"gcpL","cpM",0)
w(r,"gbCG","bCH",0)
w(r=A.aAZ.prototype,"gb1v","axG",0)
v(r,"gc19","Y3",99)
w(r,"gc18","abT",7)
v(r=A.aCm.prototype,"gcgg","awp",103)
v(r,"gcmo","axC",31)
w(r,"gbGD","aOd",0)
v(r=A.aCk.prototype,"gcwH","ahm",31)
u(r,"gc1t","auH",0)
w(r,"gciv","ciw",0)
v(r=A.aBs.prototype,"gc1u","c1v",105)
w(r,"gc1w","c1x",0)
u(r=A.a38.prototype,"gr6","a8",0)
v(r,"gcMc","al6",1)
v(r,"gcIH","KH",1)
w(r,"gcOm","bec",0)
s(A.aha.prototype,"gc1B",0,5,null,["$5"],["pR"],109,0,0)
w(r=A.aBt.prototype,"gc1C","c1D",0)
w(r,"gch1","aeI",7)
w(r,"gc7f","ad0",7)
w(r,"gcnY","afO",7)
w(r=A.aCM.prototype,"gaW1","c1H",0)
w(r,"gcuE","agZ",0)
w(r=A.aC6.prototype,"gc1S","auL",0)
w(r,"gc1T","aW2",0)
w(r=A.aCY.prototype,"gc2P","c2Q",0)
u(r,"gc2N","aWo",0)
w(A.aCg.prototype,"gbFc","aq5",0)
u(A.aCC.prototype,"gc2R","c2S",0)
v(r=A.aBE.prototype,"gc3w","c3x",124)
w(r,"gbJX","bJY",0)
w(r=A.aBF.prototype,"gcqf","cqg",0)
w(r,"gc3B","c3C",0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(C.aC,[A.ad,A.t8,A.dM,A.Dk,A.Eo,A.ua,A.aTj,A.OI,A.ain,A.Fh,A.uv,A.aQd,A.a1R,A.b7Y,A.bYq,A.ma,A.aa0,A.zB,A.a37,A.BB,A.bOk,A.BM,A.cf1,A.Ea,A.n5,A.aru,A.ceT,A.yj,A.pB,A.Wl,A.b3N,A.aRJ,A.eM,A.b2Z,A.lY,A.xq,A.tV,A.Ld,A.cn2,A.xC,A.BE,A.n7,A.b8G,A.zV,A.bqd,A.pK,A.qr,A.BI,A.Y3,A.adi,A.a_g,A.BT,A.aae,A.aav,A.acq,A.F4,A.bje,A.OV,A.ZA,A.aal,A.aaO,A.F0,A.abD,A.ac7,A.rT,A.b7y,A.aQ3,A.e7,A.t5,A.a8V,A.aa_,A.a38,A.mm,A.b8H,A.fI,A.uK,A.wZ,A.lU,A.xd,A.aUx,A.bry,A.aGl,A.mp,A.a9G,A.a9H,A.uI,A.Ob,A.xA,A.Oa,A.brt,A.OD,A.adn])
u(C.i7,[A.bU4,A.bU5,A.bU3,A.bU6,A.bU7,A.fFO,A.fFM,A.fFN,A.fFL,A.fFF,A.ckC,A.ckD,A.eNS,A.eNR,A.eNO,A.eNP,A.eNQ,A.flr,A.fcv,A.fiA,A.fiB,A.flo,A.flp,A.dZX,A.e_f,A.efb,A.eeJ,A.eeK,A.eeL,A.eeM,A.eeN,A.eeO,A.eeP,A.eeQ,A.eeH,A.eeI,A.eeG,A.ef6,A.ef7,A.ef8,A.dAW,A.dAY,A.dB0,A.dBb,A.bYr,A.bYs,A.fiI,A.fG2,A.fiO,A.fiP,A.fiM,A.fiN,A.fiK,A.fiL,A.fgZ,A.fh_,A.f4N,A.fh5,A.fh1,A.fh4,A.fh3,A.c47,A.c4f,A.c45,A.c48,A.eWu,A.fyd,A.fyc,A.d0M,A.d0O,A.d13,A.eHv,A.eHD,A.eHE,A.d3J,A.d3T,A.d3U,A.d3W,A.daN,A.daY,A.daX,A.db_,A.fhG,A.fhF,A.fhE,A.fh0,A.fj4,A.ceX,A.ceU,A.ceY,A.ceZ,A.cf_,A.cf0,A.ceV,A.ceW,A.fhD,A.fhB,A.fhv,A.fhy,A.fhw,A.fhx,A.fhC,A.fhz,A.fhA,A.fxo,A.fxn,A.ebE,A.ebv,A.ebI,A.ebK,A.ebJ,A.ebA,A.eby,A.fFE,A.cjV,A.cjW,A.cjX,A.cjY,A.ck_,A.cjZ,A.cjO,A.cjM,A.cjN,A.cjT,A.cjU,A.cjP,A.cjQ,A.cjR,A.cjS,A.efh,A.efi,A.efQ,A.efp,A.efm,A.efG,A.efH,A.eft,A.efu,A.efv,A.efy,A.efz,A.efA,A.efB,A.efC,A.efD,A.efE,A.efF,A.efw,A.efx,A.egd,A.efP,A.efL,A.fbs,A.fbt,A.fhH,A.fhI,A.fhJ,A.fhL,A.fxI,A.fxJ,A.cn7,A.cn3,A.cn5,A.cn6,A.cn4,A.ehE,A.ehF,A.ehz,A.ehv,A.ehQ,A.ehP,A.ehR,A.ehS,A.ehN,A.ehK,A.f71,A.f72,A.f73,A.f7a,A.f7b,A.f7c,A.dDt,A.dDa,A.dDu,A.dD5,A.dD0,A.dD2,A.dD8,A.dDl,A.dDj,A.dDk,A.dDi,A.dDf,A.dDh,A.eOR,A.eOy,A.eOF,A.eOO,A.eOs,A.dde,A.ddf,A.ddb,A.ddc,A.ddd,A.ddg,A.ddh,A.ddi,A.ddj,A.ddk,A.ddl,A.ddm,A.ddn,A.ddo,A.ee7,A.ee8,A.ee9,A.eea,A.ee5,A.ee6,A.eeC,A.eee,A.eeg,A.ee0,A.eey,A.eew,A.eex,A.eev,A.eeu,A.ee2,A.epW,A.epU,A.epI,A.epM,A.epH,A.epN,A.epO,A.epS,A.ewx,A.ewD,A.eaS,A.eaT,A.eaE,A.eaF,A.eaD,A.eaI,A.eaK,A.eaL,A.evX,A.evY,A.evW,A.evK,A.evL,A.evJ,A.evC,A.evD,A.evR,A.evS,A.evT,A.evU,A.evV,A.dCC,A.dCD,A.dCE,A.dCv,A.dCy,A.cIe,A.e6l,A.e6K,A.e6p,A.e6x,A.e6y,A.e6w,A.e6F,A.eal,A.eaq,A.e9K,A.e9s,A.e9E,A.e9C,A.e9A,A.e9B,A.e9z,A.dKK,A.dKy,A.dKA,A.dKI,A.dKD,A.dNz,A.dNr,A.dNs,A.dNt,A.d0J,A.d0L,A.d0K,A.dz_,A.dz0,A.dyT,A.dyR,A.cAM,A.dRC,A.dRD,A.dRy,A.dRz,A.d8t,A.d8u,A.dCZ,A.dCH,A.dCQ,A.dCR,A.dCW,A.dCX,A.bJv,A.bJG,A.bJB,A.bJH,A.bJJ,A.bJw,A.bJu,A.bJO,A.bJC,A.bJF,A.bJE,A.bJD,A.bEX,A.ffP,A.fx7,A.fxa,A.fx8,A.bEE,A.bEz,A.bEy,A.bEW,A.bEO,A.bEP,A.bEN,A.bEQ,A.bEo,A.bEq,A.bEm,A.bEn,A.bEe,A.bEf,A.f7d,A.f7e,A.f7f,A.f70,A.f7g,A.f7_,A.f7h,A.f74,A.f6Z,A.f75,A.f6Y,A.f76,A.f6X,A.f77,A.f6V,A.f6W,A.f78,A.f6T,A.f6U,A.f79,A.f6S,A.dNQ,A.dNR,A.dNG,A.dNC,A.dNP,A.dNU,A.cyi,A.f84,A.fBI,A.fBJ,A.fg0,A.fF6,A.fF7,A.ewS,A.e1V,A.e1N,A.ddx,A.ddA,A.e2d,A.e1Z,A.e28,A.e29,A.e2a,A.ccu,A.eAR,A.dNc,A.dNd,A.dNe,A.dNg,A.e7E,A.ewf,A.ewo,A.ewk,A.ewm,A.e6c,A.e6d,A.e6e,A.fFx,A.cpb,A.dSD,A.dS2,A.dS1,A.dSd,A.dSe,A.dSc,A.dSf,A.dSx,A.dSy,A.dSz,A.ex_,A.epj,A.epk,A.epl,A.epq,A.epr,A.epa,A.eRd,A.eRe,A.dT9,A.dT2,A.dT4,A.dT5,A.dT6,A.dT7,A.dSF,A.ePm,A.dAR,A.dAF,A.dAE,A.dAD,A.dAJ,A.dRe,A.dR7,A.dR8,A.dR9,A.dRa,A.d6q,A.ehp,A.ehq,A.ehr,A.ehs])
u(C.kD,[A.bU2,A.ckB,A.flq,A.e_1,A.e__,A.eeS,A.ef4,A.fjM,A.fjN,A.fjO,A.fjP,A.fjQ,A.f3s,A.fh2,A.eWt,A.d0P,A.eHA,A.d3I,A.fj5,A.ck0,A.efO,A.ehM,A.dD1,A.dDo,A.dII,A.eOU,A.eOV,A.eOx,A.eOK,A.eOL,A.eOG,A.eOM,A.eOr,A.ee3,A.ee4,A.eeB,A.eet,A.eei,A.eww,A.eaH,A.evN,A.dCu,A.dCz,A.e6B,A.eap,A.flI,A.e9w,A.e9t,A.e9G,A.dlh,A.bDL,A.fgR,A.dyN,A.dyV,A.bJI,A.bJK,A.bJM,A.bJx,A.bJz,A.bEY,A.chS,A.fx9,A.bEx,A.bEU,A.bET,A.dNO,A.cyj,A.dJC,A.dJA,A.dJu,A.ewT,A.ewG,A.e1P,A.ddy,A.ddz,A.e27,A.ccx,A.dBp,A.dBk,A.e7G,A.ccr,A.dSp,A.dS_,A.d9i,A.ex4,A.epn,A.ep9,A.dSG,A.dSI,A.dSE,A.dAH])
u(C.ph,[A.v6,A.beJ])
u(C.nh,[A.asW,A.beM,A.b8Y,A.bpE,A.b7F,A.bok,A.bnM,A.b8k,A.bnO,A.brI,A.beK,A.bpz,A.bj1,A.bqp,A.b8F,A.bfD,A.bj2,A.bgj,A.bbH,A.b7K,A.bd9,A.aha,A.b6S,A.bsJ,A.adb,A.bs9,A.beP,A.bf3,A.bsV,A.bnN,A.bjf,A.bdg,A.bpx,A.b8w,A.bp5,A.b7V,A.bd6,A.bon])
u(C.ag,[A.asX,A.Uj,A.UK,A.Tb,A.aaX,A.aDI,A.ay1,A.ayV,A.MV,A.UL,A.MY,A.Tg,A.Mn,A.aFv,A.UJ,A.UZ,A.Va,A.UH,A.V5,A.Te,A.UB,A.UG,A.UE,A.TC,A.TS,A.T6,A.U5,A.Tf,A.ah8,A.TT,A.avz,A.TA,A.Vb,A.Uo,A.Uq,A.Vg,A.U_,A.Tc,A.TR,A.UC,A.UP,A.V9,A.UA,A.U6,A.Vc,A.UY,A.U7,A.UQ,A.Ta,A.U3,A.UM])
u(C.ah,[A.aL6,A.bhJ,A.aKm,A.aJo,A.axN,A.aDJ,A.ay2,A.ayW,A.aCq,A.aCx,A.aCB,A.aJu,A.aBg,A.aLb,A.aKk,A.aKt,A.aKz,A.aKh,A.aKw,A.aJs,A.aKf,A.aKg,A.aCk,A.bhd,A.aJG,A.aJk,A.aJO,A.bh6,A.avS,A.buE,A.aHR,A.aJD,A.aKA,A.aK4,A.aK5,A.aKH,A.aJJ,A.aJq,A.bhe,A.aCg,A.aCC,A.bis,A.aKd,A.aJP,A.biv,A.aKs,A.aJR,A.aKp,A.aJn,A.aJM,A.aKo])
t(A.boc,A.aL6)
u(C.jq,[A.dZV,A.dZW,A.e_7,A.e_8,A.e_3,A.e_2,A.e_4,A.e_0,A.e_5,A.dZZ,A.e_6,A.dZY,A.e_b,A.e_a,A.e_c,A.e_9,A.e_d,A.e_e,A.e_g,A.efa,A.efc,A.efd,A.eeU,A.eeT,A.eeR,A.ef_,A.ef0,A.eeX,A.ef1,A.eeW,A.ef2,A.ef3,A.eeV,A.ef5,A.eeZ,A.ef9,A.eeY,A.dBi,A.dBh,A.dAV,A.dBj,A.dAX,A.dAZ,A.dB_,A.dB1,A.dAS,A.dAT,A.dAU,A.dB8,A.dB9,A.dBa,A.dB7,A.dBc,A.dB6,A.dBd,A.dB5,A.dBe,A.dB4,A.dBf,A.dB3,A.dBg,A.dB2,A.fhZ,A.c4a,A.c4b,A.c4c,A.c4d,A.c4e,A.c46,A.c49,A.c44,A.cof,A.cog,A.bQp,A.d0U,A.d0V,A.d0T,A.d0N,A.d0Q,A.d0R,A.d0S,A.d0W,A.d1d,A.d14,A.d12,A.d15,A.d11,A.d16,A.d17,A.d18,A.d10,A.d19,A.d1_,A.d1a,A.d0Z,A.d1b,A.d0Y,A.d1c,A.d0X,A.eHy,A.eHz,A.eHx,A.eHr,A.eHs,A.eHt,A.eHu,A.eHw,A.eHH,A.eHF,A.eHC,A.eHG,A.eHB,A.d3O,A.d3P,A.d3N,A.d3G,A.d3K,A.d3L,A.d3M,A.d3H,A.d3Z,A.d3V,A.d3S,A.d3X,A.d3R,A.d3Y,A.d3Q,A.daS,A.daT,A.daR,A.daM,A.daO,A.daP,A.daQ,A.db0,A.daW,A.daZ,A.daV,A.daU,A.fhs,A.fht,A.fhu,A.ebG,A.ebH,A.ebF,A.ebw,A.ebC,A.ebD,A.ebt,A.ebu,A.ebB,A.ebs,A.ebr,A.ebL,A.ebx,A.ebz,A.eg_,A.eg0,A.efZ,A.eff,A.efg,A.efe,A.efq,A.efj,A.efI,A.efr,A.efX,A.efY,A.efW,A.efU,A.efV,A.efR,A.efS,A.efT,A.efn,A.efo,A.efk,A.efl,A.efs,A.egc,A.ege,A.eg4,A.eg7,A.eg8,A.eg6,A.eg9,A.eg5,A.egf,A.eg3,A.egg,A.eg2,A.egh,A.egi,A.eg1,A.egj,A.egk,A.ega,A.egb,A.efJ,A.efK,A.efM,A.efN,A.fhK,A.ehH,A.ehI,A.ehG,A.ehw,A.ehB,A.ehC,A.ehA,A.ehD,A.ehy,A.eht,A.ehu,A.ehx,A.ehU,A.ehT,A.ehO,A.ehJ,A.ehL,A.dD7,A.dD6,A.dDb,A.dD3,A.dD4,A.dDc,A.dDd,A.dDe,A.dD9,A.dD_,A.dDn,A.dDm,A.dDp,A.dDq,A.dDr,A.dDg,A.dDs,A.cIH,A.dIG,A.dIF,A.dIH,A.f7s,A.f7t,A.f7u,A.f7F,A.f7I,A.f7J,A.f7K,A.f7L,A.f7M,A.f7N,A.f7O,A.f7v,A.f7w,A.f7x,A.f7y,A.f7z,A.f7A,A.f7B,A.f7C,A.f7D,A.f7E,A.f7G,A.f7H,A.eOT,A.eOS,A.eOA,A.eOz,A.eOv,A.eOu,A.eOw,A.eOt,A.eOI,A.eOH,A.eOJ,A.eOB,A.eON,A.eOE,A.eOP,A.eOD,A.eOQ,A.eOC,A.eec,A.ee1,A.eeb,A.edY,A.eed,A.eef,A.edZ,A.ee_,A.eeA,A.eez,A.eeq,A.eer,A.ees,A.eem,A.een,A.eel,A.eeo,A.eek,A.eep,A.eej,A.eeh,A.dda,A.epV,A.epx,A.epw,A.epG,A.epP,A.epF,A.epQ,A.epE,A.epR,A.epD,A.epC,A.epT,A.epB,A.epJ,A.epA,A.epK,A.epz,A.epL,A.epy,A.ewv,A.ewu,A.ewy,A.ewt,A.ewz,A.ews,A.ewA,A.ewr,A.ewB,A.ewq,A.ewC,A.ewp,A.eaG,A.eaC,A.eaB,A.eaA,A.eaM,A.eaz,A.eaN,A.eay,A.eaO,A.eax,A.eaP,A.eaQ,A.eaR,A.eaw,A.eaJ,A.evM,A.evB,A.evO,A.evI,A.evP,A.evH,A.evQ,A.evG,A.evF,A.evE,A.evA,A.evz,A.evy,A.dCB,A.dCs,A.dCt,A.dCw,A.dCx,A.dCA,A.e6z,A.e6q,A.e6A,A.e6C,A.e6v,A.e6D,A.e6u,A.e6E,A.e6t,A.e6s,A.e6G,A.e6r,A.e6H,A.e6o,A.e6I,A.e6n,A.e6J,A.e6m,A.eaf,A.eag,A.ean,A.eam,A.eao,A.eak,A.ear,A.eaj,A.eas,A.eai,A.eat,A.eau,A.eah,A.eav,A.e9J,A.e9q,A.e9r,A.e9v,A.e9u,A.e9F,A.e9D,A.e9x,A.e9H,A.e9y,A.e9I,A.dKJ,A.dKz,A.dKx,A.dKE,A.dKC,A.dKF,A.dKB,A.dKG,A.dKH,A.dNy,A.dNm,A.dNl,A.dNn,A.dNq,A.dNp,A.dNo,A.dNu,A.dNv,A.dNw,A.dNx,A.dyZ,A.dyY,A.dyO,A.dyU,A.dyS,A.dyW,A.dyQ,A.dyX,A.dyP,A.dRB,A.dRA,A.dRs,A.dRw,A.dRv,A.dRx,A.dRu,A.dRt,A.dCY,A.dCP,A.dCO,A.dCS,A.dCN,A.dCT,A.dCM,A.dCU,A.dCL,A.dCV,A.dCK,A.dCJ,A.dCI,A.bJL,A.bJN,A.bJy,A.bJA,A.bEB,A.bEC,A.bEA,A.bED,A.bEF,A.bEr,A.bEs,A.bEt,A.bEu,A.bEv,A.bEw,A.bEV,A.bE4,A.bEL,A.bEM,A.bEJ,A.bEK,A.bEH,A.bEI,A.bER,A.bEG,A.bES,A.bE5,A.bEp,A.bEb,A.bEc,A.bEa,A.bEd,A.bE9,A.bEg,A.bEh,A.bEi,A.bEj,A.bE8,A.bEk,A.bE7,A.bEl,A.bE6,A.dNH,A.dNS,A.dNT,A.dNF,A.dNE,A.dND,A.dNM,A.dNK,A.dNL,A.dNN,A.dNI,A.dNJ,A.dNV,A.dNW,A.dNX,A.dNY,A.dNZ,A.dJD,A.dJB,A.dJz,A.dJy,A.dJx,A.dJw,A.dJv,A.dJr,A.dJq,A.dJt,A.dJs,A.ewK,A.ewJ,A.ewI,A.ewL,A.ewU,A.ewN,A.ewO,A.ewP,A.ewQ,A.ewM,A.ewR,A.ewH,A.ewE,A.ewF,A.e1U,A.e1W,A.e1L,A.e1M,A.e1O,A.e1Q,A.e1R,A.e1S,A.e1T,A.e2c,A.e2e,A.e24,A.e20,A.e25,A.e26,A.e2_,A.e23,A.e22,A.e21,A.e2b,A.f7W,A.f7X,A.f7Y,A.f7Z,A.f8_,A.f80,A.f81,A.f82,A.ccw,A.ccv,A.eAS,A.eAO,A.eAN,A.eAQ,A.eAP,A.dPV,A.dPW,A.dPQ,A.dPS,A.dPT,A.dPR,A.dPU,A.dBq,A.dBn,A.dBm,A.dBo,A.dBl,A.dNb,A.dNa,A.dN9,A.dN8,A.dNf,A.dN7,A.dN6,A.dNh,A.dN5,A.dNi,A.dN4,A.dNj,A.dNk,A.dN3,A.e7A,A.e7B,A.e7z,A.e7C,A.e7y,A.e7F,A.e7H,A.e7D,A.e7I,A.ehY,A.ehZ,A.ehW,A.ehX,A.ehV,A.ei_,A.ei0,A.ei1,A.ei2,A.ewj,A.ewl,A.ewi,A.ewh,A.ewn,A.ewg,A.e6f,A.e6g,A.e68,A.e67,A.e69,A.e66,A.e6a,A.e65,A.e6b,A.e64,A.e63,A.e62,A.e61,A.cpc,A.cpd,A.fFw,A.cp8,A.cp7,A.cpe,A.cp9,A.cpa,A.cct,A.ccs,A.dSC,A.dS5,A.dS3,A.dS4,A.dS0,A.dSo,A.dS6,A.dS7,A.dSq,A.dSb,A.dSu,A.dSn,A.dSv,A.dSm,A.dSw,A.dSl,A.dSk,A.dSj,A.dSi,A.dSA,A.dSh,A.dSB,A.dSg,A.dSr,A.dSa,A.dSs,A.dS9,A.dSt,A.dS8,A.dRZ,A.dRY,A.d9h,A.f7P,A.f7Q,A.f7R,A.f7S,A.f7T,A.f7U,A.f7V,A.ex2,A.ex3,A.ex1,A.ex0,A.epb,A.epm,A.epo,A.epi,A.epp,A.eph,A.epg,A.eps,A.epf,A.ept,A.epe,A.epu,A.epd,A.epv,A.epc,A.ep8,A.ep7,A.eRc,A.dSH,A.dSW,A.dSN,A.dSX,A.dSM,A.dSY,A.dSV,A.dT1,A.dSU,A.dST,A.dT3,A.dSS,A.dSR,A.dSQ,A.dSP,A.dT8,A.dSO,A.dSZ,A.dSL,A.dT_,A.dSK,A.dT0,A.dSJ,A.ei5,A.ei6,A.ei4,A.ei7,A.ei3,A.dAG,A.dAC,A.dAK,A.dAB,A.dAL,A.dAA,A.dAM,A.dAz,A.dAN,A.dAy,A.dAO,A.dAx,A.dAP,A.dAw,A.dAQ,A.dAv,A.dAI,A.dAu,A.dR4,A.dR5,A.dR3,A.dR6,A.dR2,A.dR1,A.dR0,A.dR_,A.dQZ,A.dRb,A.dQY,A.dRc,A.dQX,A.dRd,A.dQW,A.ehk,A.ehl,A.ehj,A.ehm,A.ehi,A.ehn,A.ehh,A.eho,A.ehg,A.ehf,A.ehe,A.ehd,A.ehc])
t(A.buT,A.aKm)
t(A.aCw,A.buT)
t(A.aJp,A.aJo)
t(A.aAX,A.aJp)
u(C.au,[A.Mm,A.brq,A.b4u,A.Dl,A.boG,A.ads,A.acm,A.P3,A.bp9,A.a7_,A.bb2,A.b4I,A.dx,A.eJ,A.atZ,A.fg,A.Ey])
u(C.mq,[A.qK,A.Ju,A.a_3,A.Iq])
t(A.buC,A.aJu)
t(A.aB_,A.buC)
t(A.aFw,A.aLb)
t(A.aCv,A.aKk)
t(A.bij,A.aKt)
t(A.aCL,A.aKz)
t(A.buS,A.aKh)
t(A.aCn,A.buS)
t(A.bv_,A.aKw)
t(A.bio,A.bv_)
t(A.buB,A.aJs)
t(A.aAZ,A.buB)
t(A.buQ,A.aKf)
t(A.bhY,A.buQ)
t(A.buR,A.aKg)
t(A.aCm,A.buR)
t(A.aBs,A.aJG)
t(A.bgU,A.aJk)
t(A.bhp,A.aJO)
t(A.avT,A.avS)
t(A.ah9,A.avT)
t(A.aBt,A.buE)
t(A.b6T,A.aHR)
t(A.bhb,A.aJD)
t(A.aCM,A.aKA)
t(A.buJ,A.aK4)
t(A.bhL,A.buJ)
t(A.buK,A.aK5)
t(A.aC6,A.buK)
t(A.bv0,A.aKH)
t(A.aCY,A.bv0)
t(A.buF,A.aJJ)
t(A.bhk,A.buF)
t(A.buA,A.aJq)
t(A.bgZ,A.buA)
t(A.buP,A.aKd)
t(A.bhW,A.buP)
t(A.aJQ,A.aJP)
t(A.aBE,A.aJQ)
t(A.buX,A.aKs)
t(A.bii,A.buX)
t(A.buH,A.aJR)
t(A.aBF,A.buH)
t(A.buV,A.aKp)
t(A.bif,A.buV)
t(A.buz,A.aJn)
t(A.bgY,A.buz)
t(A.buG,A.aJM)
t(A.bhn,A.buG)
t(A.buU,A.aKo)
t(A.bie,A.buU)
w(A.aL6,C.c8)
w(A.aKm,C.c8)
w(A.buT,A.mp)
w(A.aJo,C.c8)
w(A.aJp,A.mp)
w(A.aJu,C.c8)
w(A.buC,A.mp)
w(A.aLb,C.eQ)
w(A.aKk,C.c8)
w(A.aKt,C.c8)
w(A.aKz,C.c8)
w(A.aJs,C.c8)
w(A.buB,A.mp)
w(A.aKh,C.c8)
w(A.buS,A.mp)
w(A.aKw,C.c8)
w(A.bv_,A.mp)
w(A.aKf,C.c8)
w(A.buQ,A.mp)
w(A.aKg,C.c8)
w(A.buR,A.mp)
w(A.aJG,C.c8)
w(A.aJk,C.c8)
w(A.aJO,C.c8)
w(A.avS,C.c8)
w(A.avT,A.mp)
w(A.aHR,C.c8)
v(A.buE,C.eu)
w(A.aJD,C.c8)
w(A.aKA,C.c8)
w(A.aK4,C.c8)
w(A.buJ,A.mp)
w(A.aK5,C.c8)
w(A.buK,A.mp)
w(A.aJq,C.c8)
w(A.buA,A.mp)
w(A.aJJ,C.c8)
w(A.buF,A.mp)
w(A.aKd,C.c8)
w(A.buP,A.mp)
w(A.aKH,C.c8)
w(A.bv0,A.mp)
w(A.aJP,C.c8)
w(A.aJQ,A.mp)
w(A.aJR,C.c8)
w(A.buH,A.mp)
w(A.aKp,C.c8)
w(A.buV,A.mp)
w(A.aKs,C.c8)
w(A.buX,A.mp)
w(A.aJn,C.c8)
w(A.buz,A.mp)
w(A.aJM,C.c8)
w(A.buG,A.mp)
w(A.aKo,C.c8)
w(A.buU,A.mp)})()
C.kj(b.typeUniverse,JSON.parse('{"asX":{"ag":[],"r":[]},"v6":{"aB":[]},"asW":{"aB":[]},"boc":{"ah":["asX"]},"Uj":{"ag":[],"r":[]},"bhJ":{"ah":["Uj"]},"UK":{"ag":[],"r":[]},"aCw":{"ah":["UK"]},"beM":{"aB":[]},"Tb":{"ag":[],"r":[]},"aAX":{"ah":["Tb"]},"Mm":{"au":[],"r":[]},"aaX":{"ag":[],"r":[]},"aDI":{"ag":[],"r":[]},"ay1":{"ag":[],"r":[]},"ayV":{"ag":[],"r":[]},"brq":{"au":[],"r":[]},"b4u":{"au":[],"r":[]},"Dl":{"au":[],"r":[]},"axN":{"ah":["aaX"]},"aDJ":{"ah":["aDI"]},"ay2":{"ah":["ay1"]},"ayW":{"ah":["ayV"]},"MV":{"ag":[],"r":[]},"aCq":{"ah":["MV"]},"UL":{"ag":[],"r":[]},"aCx":{"ah":["UL"]},"MY":{"ag":[],"r":[]},"aCB":{"ah":["MY"]},"Tg":{"ag":[],"r":[]},"aB_":{"ah":["Tg"]},"b8Y":{"aB":[]},"ads":{"au":[],"r":[]},"acm":{"au":[],"r":[]},"aFv":{"ag":[],"r":[]},"Mn":{"ag":[],"r":[]},"aBg":{"ah":["Mn"]},"boG":{"au":[],"r":[]},"P3":{"au":[],"r":[]},"bpE":{"aB":[]},"bp9":{"au":[],"r":[]},"b7F":{"aB":[]},"aFw":{"ah":["aFv"]},"bok":{"aB":[]},"bnM":{"aB":[]},"b8k":{"aB":[]},"bnO":{"aB":[]},"brI":{"aB":[]},"UJ":{"ag":[],"r":[]},"beJ":{"aB":[]},"aCv":{"ah":["UJ"]},"beK":{"aB":[]},"UZ":{"ag":[],"r":[]},"Va":{"ag":[],"r":[]},"bij":{"ah":["UZ"]},"bpz":{"aB":[]},"aCL":{"ah":["Va"]},"UH":{"ag":[],"r":[]},"V5":{"ag":[],"r":[]},"Te":{"ag":[],"r":[]},"aCn":{"ah":["UH"]},"bj1":{"aB":[]},"bio":{"ah":["V5"]},"bqp":{"aB":[]},"aAZ":{"ah":["Te"]},"b8F":{"aB":[]},"UB":{"ag":[],"r":[]},"UG":{"ag":[],"r":[]},"bhY":{"ah":["UB"]},"bfD":{"aB":[]},"aCm":{"ah":["UG"]},"bj2":{"aB":[]},"UE":{"ag":[],"r":[]},"TC":{"ag":[],"r":[]},"TS":{"ag":[],"r":[]},"aCk":{"ah":["UE"]},"bgj":{"aB":[]},"bhd":{"ah":["TC"]},"aBs":{"ah":["TS"]},"bbH":{"aB":[]},"T6":{"ag":[],"r":[]},"U5":{"ag":[],"r":[]},"Tf":{"ag":[],"r":[]},"bgU":{"ah":["T6"]},"b7K":{"aB":[]},"bhp":{"ah":["U5"]},"bd9":{"aB":[]},"bh6":{"ah":["Tf"]},"aha":{"aB":[]},"ah8":{"ag":[],"r":[]},"ah9":{"ah":["ah8"]},"TT":{"ag":[],"r":[]},"avz":{"ag":[],"r":[]},"aBt":{"ah":["TT"],"eu":[]},"b6T":{"ah":["avz"]},"b6S":{"aB":[]},"TA":{"ag":[],"r":[]},"bhb":{"ah":["TA"]},"bsJ":{"aB":[]},"adb":{"aB":[]},"Vb":{"ag":[],"r":[]},"aCM":{"ah":["Vb"]},"bs9":{"aB":[]},"Uo":{"ag":[],"r":[]},"Uq":{"ag":[],"r":[]},"bhL":{"ah":["Uo"]},"beP":{"aB":[]},"aC6":{"ah":["Uq"]},"bf3":{"aB":[]},"a7_":{"au":[],"r":[]},"Vg":{"ag":[],"r":[]},"U_":{"ag":[],"r":[]},"Tc":{"ag":[],"r":[]},"TR":{"ag":[],"r":[]},"UC":{"ag":[],"r":[]},"UP":{"ag":[],"r":[]},"V9":{"ag":[],"r":[]},"UA":{"ag":[],"r":[]},"aCY":{"ah":["Vg"]},"bsV":{"aB":[]},"bhk":{"ah":["U_"]},"bnN":{"aB":[]},"bgZ":{"ah":["Tc"]},"bhe":{"ah":["TR"]},"bjf":{"aB":[]},"aCg":{"ah":["UC"]},"aCC":{"ah":["UP"]},"bis":{"ah":["V9"]},"bhW":{"ah":["UA"]},"bb2":{"au":[],"r":[]},"b4I":{"au":[],"r":[]},"dx":{"au":[],"r":[]},"eJ":{"au":[],"r":[]},"atZ":{"au":[],"r":[]},"fg":{"au":[],"r":[]},"Ey":{"au":[],"r":[]},"U6":{"ag":[],"r":[]},"aBE":{"ah":["U6"]},"bdg":{"aB":[]},"Vc":{"ag":[],"r":[]},"biv":{"ah":["Vc"]},"UY":{"ag":[],"r":[]},"U7":{"ag":[],"r":[]},"UQ":{"ag":[],"r":[]},"bii":{"ah":["UY"]},"bpx":{"aB":[]},"aBF":{"ah":["U7"]},"b8w":{"aB":[]},"bif":{"ah":["UQ"]},"bp5":{"aB":[]},"Ta":{"ag":[],"r":[]},"U3":{"ag":[],"r":[]},"UM":{"ag":[],"r":[]},"bgY":{"ah":["Ta"]},"b7V":{"aB":[]},"bhn":{"ah":["U3"]},"bd6":{"aB":[]},"bie":{"ah":["UM"]},"bon":{"aB":[]}}'))
C.Pb(b.typeUniverse,JSON.parse('{"mp":1}'))
var y={g:"A shut-off valve goes on the pipe that comes out of the wall.",x:"Fasten the bare copper ground to the GREEN screw.",B:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',C:"STOP! The power is still on. Turn the breaker OFF before you touch any wire.",E:"Switch the power on and flip the wall switch.",j:"The bare copper ground wire only goes on the GREEN screw.",u:"The gold screws are BRASS. They are for the HOT wire (black).",o:"The white-silver screws are NICKEL. They are for the NEUTRAL wire (white).",r:"Turn the breaker OFF and test that the wires are dead.",v:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=C.az
return{dw:w("mx<w?>"),e8:w("d2"),G:w("w"),w:w("br<n,n>"),J:w("br<n,O>"),I:w("br<n,H>"),M:w("eV<n>"),eT:w("aRJ"),eP:w("qK"),gu:w("dI<H,n>"),a:w("a_"),R:w("P<da>"),T:w("P<ah0>"),gh:w("P<aQ3>"),fq:w("P<a1R>"),V:w("P<ac>"),O:w("P<w>"),ey:w("P<Q>"),gw:w("P<Ld>"),dh:w("P<RK>"),aJ:w("P<ax<aC>>"),r:w("P<ma>"),x:w("P<a_>"),Z:w("P<Dk>"),gG:w("P<ak<w>>"),gm:w("P<ak<RK>>"),gO:w("P<ak<ak<O>>>"),bj:w("P<ak<n>>"),b:w("P<ak<O>>"),fA:w("P<ak<H?>>"),ez:w("P<a3<n,aC>>"),g:w("P<u>"),dL:w("P<pB>"),fI:w("P<n5>"),bz:w("P<t5>"),ds:w("P<a7m>"),v:w("P<hD>"),B:w("P<t8>"),dm:w("P<+(u,O)>"),ev:w("P<+(u,H)>"),a6:w("P<+(a7m,H)>"),L:w("P<+(n,n)>"),fT:w("P<+(O,r)>"),ek:w("P<+(H,n)>"),C:w("P<+(H,H)>"),c:w("P<+(n,n,a_)>"),e:w("P<+(n,O,O,H)>"),y:w("P<+(n,H,n,H)>"),eV:w("P<+(O,O,O,O)>"),d:w("P<+(n,n,O,O,a3<n,O>)>"),_:w("P<uv>"),gD:w("P<Wl>"),E:w("P<cP>"),fQ:w("P<a8V>"),s:w("P<n>"),cF:w("P<aq>"),X:w("P<vO>"),dO:w("P<a9G>"),o:w("P<ad>"),p:w("P<r>"),bL:w("P<aa_>"),ak:w("P<zB>"),fH:w("P<l9>"),aq:w("P<b7y>"),a_:w("P<aae>"),cS:w("P<aal>"),cB:w("P<n7>"),ba:w("P<aav>"),d9:w("P<OD>"),bi:w("P<aaO>"),eW:w("P<BI>"),fY:w("P<Y3>"),bl:w("P<OI>"),m:w("P<lY>"),aX:w("P<F0>"),ea:w("P<abD>"),gB:w("P<ac7>"),ed:w("P<OV>"),g4:w("P<bje>"),aS:w("P<ZA>"),ac:w("P<acq>"),cd:w("P<BT>"),fr:w("P<adi>"),e4:w("P<a_g>"),F:w("P<adn>"),au:w("P<aGl>"),u:w("P<R>"),n:w("P<O>"),t:w("P<H>"),U:w("P<aB?>"),fs:w("P<t5?>"),d4:w("P<n?>"),bN:w("P<H?>"),gJ:w("cq<ah9>"),A:w("cq<ah<ag>>"),bF:w("ak<w>"),gl:w("ak<Q>"),ew:w("ak<aC>"),j:w("ak<@>"),bW:w("ak<H>"),h:w("a3<n,@>"),f:w("a3<@,@>"),bd:w("J<e7,n>"),dv:w("J<n,n>"),fR:w("J<+(O,r),r>"),l:w("iI"),gA:w("yE"),e5:w("wZ"),P:w("cn"),q:w("dM"),K:w("aC"),W:w("t5"),dV:w("e7"),ej:w("Ia"),fX:w("t8"),g7:w("Bp"),cH:w("b3N"),N:w("n"),bO:w("aq"),k:w("ku"),Y:w("bm<O>"),cL:w("a9H"),cv:w("ad"),gj:w("cz<n>"),aC:w("cz<H?>"),fZ:w("a1<Ea>"),cc:w("a1<n>"),dD:w("a1<H>"),dg:w("e6<qr>"),e3:w("b7Y"),a2:w("BE"),f3:w("qr"),es:w("F4"),gV:w("mO"),D:w("R"),i:w("O"),z:w("@"),S:w("H"),Q:w("ak<@>?"),fF:w("a3<@,@>?"),cK:w("aC?"),az:w("qg?"),dk:w("n?"),cD:w("O?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aRP=new A.eM(!0,"The water is on and nothing leaks. Perfect job!",!1,"")
D.aRQ=new A.eM(!0,"Primer and paint rolled on.",!1,"")
D.aRR=new A.eM(!1,"This call is over. Start a new one.",!1,"")
D.aRS=new A.eM(!1,"That is not a place for a sheet.",!1,"")
D.aRT=new A.eM(!0,"Sanded smooth. Wear a mask: the dust is bad to breathe.",!1,"")
D.a8_=new A.eM(!1,"There is no device here.",!1,"")
D.aRU=new A.eM(!0,"You look closely. Everything looks fine here.",!1,"")
D.aRV=new A.eM(!1,"ZAP! You were shocked badly and it was your last life. Always turn the breaker OFF and test before you touch wires.",!0,"shock")
D.aRW=new A.eM(!0,"Paper tape pressed into the seam.",!1,"")
D.aRX=new A.eM(!0,"Unplugged.",!1,"")
D.aRY=new A.eM(!0,"Breaker OFF. It is safe to work on the wires.",!1,"")
D.aRZ=new A.eM(!1,"ZAP! You were shocked badly. That was your last life: the job is over. Lesson: ALWAYS turn the breaker OFF and test the wires before you touch them.",!0,"shock")
D.aS_=new A.eM(!1,"There is nothing there.",!1,"")
D.aS0=new A.eM(!1,"The outlet is burnt. Nothing works. Pull it out and put in a new one.",!0,"")
D.aS1=new A.eM(!0,"The water is on and nothing leaks yet, but the job is not finished.",!1,"")
D.aS2=new A.eM(!0,"Sheet hung. Now screw it to the studs.",!1,"")
D.aS3=new A.eM(!0,"Hole drilled through the middle of the stud, at the cable height. Holes go in the center so a nail cannot reach the cable.",!1,"")
D.aS4=new A.eM(!0,"Plugged in. Nothing happens because the breaker is off. Turn it on to test.",!1,"")
D.aS5=new A.eM(!0,"You flipped the tripped breaker fully OFF. Fix the problem before you turn it on again.",!1,"")
D.aS6=new A.eM(!0,"Click.",!1,"")
D.aS7=new A.eM(!0,"The wires are folded back and the device is in the box. Now put the cover on.",!1,"")
D.aS8=new A.eM(!0,"Breaker OFF. The wires on this circuit are dead now. (Always test them to be sure.)",!1,"")
D.aS9=new A.eM(!1,"Nothing is wet.",!1,"")
D.aSa=new A.eM(!0,"Power is on.",!1,"")
D.aSb=new A.eM(!0,"Water OFF at the main valve. You can cut into the pipes safely now.",!1,"")
D.aSc=new A.eM(!0,"Opening cut around the box with the drywall saw. Keep it tight: the plate has to cover the edge.",!1,"")
D.aSd=new A.eM(!0,"Device pulled out of the box.",!1,"")
D.aSe=new A.eM(!0,"Screw set just below the paper, not through it.",!1,"")
D.aSf=new A.eM(!0,"Cover on. Now you can turn the breaker on and test.",!1,"")
D.TK=new A.eM(!1,"",!1,"")
D.aSg=new A.eM(!0,"Device taken out. You can put it somewhere else, or put in a new one.",!1,"")
D.aSh=new A.eM(!0,"Breaker back ON.",!1,"")
D.aSi=new A.eM(!1,"That is not a stud.",!1,"")
D.aSj=new A.eM(!0,"Off.",!1,"")
D.aSk=new A.eM(!1,"Nothing to flip yet.",!1,"")
D.aSl=new A.eM(!0,"Wire taken off.",!1,"")
D.aSm=new A.eM(!0,"The mud is dry.",!1,"")
D.aSn=new A.eM(!0,"Breaker reset.",!1,"")
D.aSo=new A.eM(!0,"Box mounted. (Careful: this is not a fan-rated box. A fan on it could fall.)",!1,"")
D.aSW=new C.da(0,0.85)
D.fjD=new C.x("Tap once to start the chain",null,F.Sr,null,null,null,null,null,null,null,null,null)
D.aSv=new C.bK(D.aSW,null,null,D.fjD,null)
D.aSN=new C.da(0,0.1)
D.aTQ=new A.aQd(0,0,0)
D.J8=new A.aQd(0,0.5,0)
D.aUn=new C.aA(B.bb,1,B.r,-1)
D.aVN=new C.aY(0,1/0,0,290)
D.aVU=new C.aY(16,1/0,16,1/0)
D.DK=new C.w(1,0.08627450980392157,0.10588235294117647,0.1411764705882353,B.t)
D.aWT=new C.o(D.DK,null,E.a8R,null,null,null,B.n)
D.aX4=new C.o(B.bl,null,null,null,null,null,B.a6)
D.eN0=new C.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flU=new C.x("\u26a1",null,D.eN0,null,null,null,null,null,null,null,null,null)
D.b0q=new C.ct(B.A,null,null,D.flU,null)
D.aNr=new C.F(!0,B.bZ,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fci=new C.x("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aNr,null,B.L,null,null,null,null,null,null,null)
D.dY2=new C.C(B.nz,D.fci,null)
D.b0z=new C.ct(B.A,null,null,D.dY2,null)
D.fh9=new C.x("\u2600\ufe0f Let it dry",null,G.S6,null,null,null,null,null,null,null,null,null)
D.b0I=new C.ct(B.A,null,null,D.fh9,null)
D.ffS=new C.x("Press Drop! and watch them fall from 20 metres.",null,B.ko,null,B.L,null,null,null,null,null,null,null)
D.dY6=new C.C(B.nz,D.ffS,null)
D.b0S=new C.ct(B.A,null,null,D.dY6,null)
D.eXu=new C.F(!0,B.j2,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkn=new C.x("Draw anywhere",null,D.eXu,null,null,null,null,null,null,null,null,null)
D.b0W=new C.ct(B.A,null,null,D.fkn,null)
D.f65=new C.x("\ud83c\udfd7\ufe0f",null,B.vM,null,null,null,null,null,null,null,null,null)
D.b13=new C.ct(B.A,null,null,D.f65,null)
D.f2W=new C.x("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aNr,null,B.L,null,null,null,null,null,null,null)
D.dYP=new C.C(B.Ez,D.f2W,null)
D.b1e=new C.ct(B.A,null,null,D.dYP,null)
D.b2I=new C.w(1,0.9294117647058824,0.9098039215686274,0.8627450980392157,B.t)
D.aab=new C.w(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,B.t)
D.b2T=new C.w(1,0.9725490196078431,0.9647058823529412,0.9333333333333333,B.t)
D.aae=new C.w(0.9490196078431372,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.b3i=new C.w(1,0.00784313725490196,0.01568627450980392,0.03529411764705882,B.t)
D.wo=new C.w(1,0.9450980392156862,0.9450980392156862,0.9176470588235294,B.t)
D.b3w=new C.w(1,0.9098039215686274,0.9254901960784314,0.9372549019607843,B.t)
D.b3x=new C.w(1,0.4823529411764706,0.5098039215686274,0.5450980392156862,B.t)
D.b3C=new C.w(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,B.t)
D.b3D=new C.w(1,0.10588235294117647,0.4980392156862745,0.20392156862745098,B.t)
D.b3O=new C.w(1,0.8509803921568627,0.8274509803921568,0.7725490196078432,B.t)
D.aaw=new C.w(1,0.6549019607843137,0.6784313725490196,0.7098039215686275,B.t)
D.b3Z=new C.w(1,0.16862745098039217,0.17647058823529413,0.2,B.t)
D.b4a=new C.w(1,0.13333333333333333,0.13725490196078433,0.14901960784313725,B.t)
D.Dm=new C.w(1,0.12156862745098039,0.07058823529411765,0.03529411764705882,B.t)
D.UE=new C.w(1,0.8156862745098039,0.5098039215686274,0.27450980392156865,B.t)
D.b4r=new C.w(1,1,0.16470588235294117,0.10196078431372549,B.t)
D.UG=new C.w(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,B.t)
D.aaC=new C.w(1,0.5411764705882353,0.41568627450980394,0.2784313725490196,B.t)
D.b4w=new C.w(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,B.t)
D.b4A=new C.w(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,B.t)
D.aaE=new C.w(1,0.7215686274509804,0.6980392156862745,0.6549019607843137,B.t)
D.b4E=new C.w(1,0.050980392156862744,0.08627450980392157,0.14901960784313725,B.t)
D.UH=new C.w(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.rH=new C.w(1,0.788235294117647,0.6274509803921569,0.22745098039215686,B.t)
D.aaJ=new C.w(1,0.9411764705882353,0.5411764705882353,0.1411764705882353,B.t)
D.aaL=new C.w(1,0.5568627450980392,0.5843137254901961,0.6196078431372549,B.t)
D.b56=new C.w(1,0.47843137254901963,0.35294117647058826,0.22745098039215686,B.t)
D.nk=new C.w(1,0.788235294117647,0.807843137254902,0.8392156862745098,B.t)
D.aaR=new C.w(1,0.5568627450980392,0.35294117647058826,0.2901960784313726,B.t)
D.zG=new C.w(1,0.9294117647058824,0.9176470588235294,0.8784313725490196,B.t)
D.b5C=new C.w(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,B.t)
D.b5H=new C.w(1,0.16470588235294117,0.16470588235294117,0.2,B.t)
D.b5X=new C.w(1,1,0.4196078431372549,0.4196078431372549,B.t)
D.b5Y=new C.w(1,0.5490196078431373,0.5764705882352941,0.6078431372549019,B.t)
D.Du=new C.w(1,0.22745098039215686,0.24705882352941178,0.2784313725490196,B.t)
D.UP=new C.w(1,0.8980392156862745,0.8980392156862745,0.8666666666666667,B.t)
D.ab4=new C.w(1,0.8509803921568627,0.803921568627451,0.7215686274509804,B.t)
D.JL=new C.w(1,0.11764705882352941,0.11764705882352941,0.12549019607843137,B.t)
D.b6k=new C.w(1,0.8862745098039215,0.8745098039215686,0.8235294117647058,B.t)
D.b6x=new C.w(1,0.8784313725490196,0.6745098039215687,0.4117647058823529,B.t)
D.b6B=new C.w(1,0.5411764705882353,0.4823529411764706,0.41568627450980394,B.t)
D.b6F=new C.w(1,0.34901960784313724,0.3176470588235294,0.29411764705882354,B.t)
D.b6M=new C.w(1,0.8117647058823529,0.792156862745098,0.7411764705882353,B.t)
D.b6P=new C.w(1,0.8117647058823529,0.8901960784313725,0.9176470588235294,B.t)
D.UX=new C.w(1,0.3333333333333333,0.396078431372549,0.4823529411764706,B.t)
D.UY=new C.w(1,0.5529411764705883,0.7843137254901961,1,B.t)
D.b7_=new C.w(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,B.t)
D.V0=new C.w(1,1,0.9019607843137255,0.5019607843137255,B.t)
D.b7a=new C.w(1,0.9490196078431372,0.7607843137254902,0.10588235294117647,B.t)
D.abm=new C.w(1,1,0.23137254901960785,0.12156862745098039,B.t)
D.JO=new C.w(1,0.8392156862745098,0.7176470588235294,0.4823529411764706,B.t)
D.abo=new C.w(1,0.9490196078431372,0.9411764705882353,0.9019607843137255,B.t)
D.b7p=new C.w(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,B.t)
D.b7r=new C.w(1,0.9686274509803922,0.9607843137254902,0.9333333333333333,B.t)
D.b7v=new C.w(1,0.00784313725490196,0.011764705882352941,0.0392156862745098,B.t)
D.nn=new C.w(1,0.1843137254901961,0.49019607843137253,0.8823529411764706,B.t)
D.b7A=new C.w(1,0.788235294117647,0.7176470588235294,0.6078431372549019,B.t)
D.V3=new C.w(1,0.8901960784313725,0.6627450980392157,0.10980392156862745,B.t)
D.JS=new C.w(1,0.7137254901960784,0.7372549019607844,0.7686274509803922,B.t)
D.uu=new C.w(1,0.9019607843137255,0.8823529411764706,0.8352941176470589,B.t)
D.DC=new C.w(1,0.09019607843137255,0.09411764705882353,0.10588235294117647,B.t)
D.JV=new C.w(1,0.9725490196078431,0.9725490196078431,0.9568627450980393,B.t)
D.zN=new C.w(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,B.t)
D.b86=new C.w(1,1,0.9686274509803922,0.8,B.t)
D.abH=new C.w(1,0.9450980392156862,0.9568627450980393,0.9725490196078431,B.t)
D.abJ=new C.w(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,B.t)
D.V9=new C.w(1,0.06666666666666667,0.0784313725490196,0.09411764705882353,B.t)
D.lV=new C.w(1,0.7686274509803922,0.6039215686274509,0.3843137254901961,B.t)
D.b8H=new C.w(1,1,0.47843137254901963,0.09411764705882353,B.t)
D.b8O=new C.w(1,0.043137254901960784,0.07058823529411765,0.06274509803921569,B.t)
D.abU=new C.w(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,B.t)
D.abV=new C.w(1,1,0.35294117647058826,0.12156862745098039,B.t)
D.Vg=new C.w(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,B.t)
D.b92=new C.w(1,0.5411764705882353,0.29411764705882354,0.29411764705882354,B.t)
D.b9i=new C.w(1,0.984313725490196,0.6509803921568628,0.8509803921568627,B.t)
D.b9l=new C.w(1,0.5411764705882353,0.5411764705882353,0.5176470588235295,B.t)
D.b9n=new C.w(1,0.9647058823529412,0.9568627450980393,0.9254901960784314,B.t)
D.ac0=new C.w(1,1,0.5411764705882353,0.5411764705882353,B.t)
D.b9C=new C.w(1,0.6078431372549019,0.6078431372549019,0.592156862745098,B.t)
D.ac4=new C.w(1,0.9568627450980393,0.9450980392156862,0.9176470588235294,B.t)
D.b9I=new C.w(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,B.t)
D.rQ=new C.w(1,0.8862745098039215,0.23137254901960785,0.23137254901960785,B.t)
D.p7=new C.w(1,0.9490196078431372,0.9490196078431372,0.9254901960784314,B.t)
D.DJ=new C.w(1,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.ac6=new C.w(1,0.788235294117647,0.8117647058823529,0.8392156862745098,B.t)
D.b9R=new C.w(1,0.9294117647058824,0.9215686274509803,0.8941176470588236,B.t)
D.Vo=new C.w(1,0.8392156862745098,0.6823529411764706,0.4470588235294118,B.t)
D.aca=new C.w(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,B.t)
D.K0=new C.w(1,0.2901960784313726,0.2980392156862745,0.32941176470588235,B.t)
D.K1=new C.w(1,0.054901960784313725,0.07058823529411765,0.09411764705882353,B.t)
D.bag=new C.w(1,0.3686274509803922,0.43137254901960786,0.5176470588235295,B.t)
D.Vq=new C.w(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,B.t)
D.bav=new C.w(1,0.3568627450980392,0.10196078431372549,0.09019607843137255,B.t)
D.ach=new C.w(1,0.23137254901960785,0.1843137254901961,0.14901960784313725,B.t)
D.baF=new C.w(1,0.9686274509803922,0.9568627450980393,0.9254901960784314,B.t)
D.Vs=new C.w(1,0.4980392156862745,0.7215686274509804,1,B.t)
D.wz=new C.w(1,0.16470588235294117,0.1450980392156863,0.13725490196078433,B.t)
D.baO=new C.w(1,0.9450980392156862,0.9294117647058824,0.8784313725490196,B.t)
D.K3=new C.w(1,0.796078431372549,0.8156862745098039,0.8392156862745098,B.t)
D.Vv=new C.w(1,0.8980392156862745,0.7254901960784313,0.11764705882352941,B.t)
D.bb0=new C.w(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,B.t)
D.bb2=new C.w(1,0.043137254901960784,0.10588235294117647,0.2,B.t)
D.bb6=new C.w(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,B.t)
D.bb9=new C.w(1,0.7490196078431373,0.8901960784313725,1,B.t)
D.bbe=new C.w(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,B.t)
D.acA=new C.w(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,B.t)
D.bbo=new C.w(1,0.10588235294117647,0.10588235294117647,0.11372549019607843,B.t)
D.bbz=new C.w(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,B.t)
D.bbM=new C.w(1,0.6274509803921569,0.6509803921568628,0.6823529411764706,B.t)
D.bc1=new C.w(1,0.8156862745098039,0.35294117647058826,0.22745098039215686,B.t)
D.bc7=new C.w(1,0.8509803921568627,0.788235294117647,0.6274509803921569,B.t)
D.DS=new C.w(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,B.t)
D.uz=new C.w(1,0.09019607843137255,0.09019607843137255,0.10980392156862745,B.t)
D.VD=new C.w(1,0.9490196078431372,0.9176470588235294,0.8274509803921568,B.t)
D.acR=new C.w(1,0.10588235294117647,0.07058823529411765,0.03529411764705882,B.t)
D.bct=new C.w(1,0.12549019607843137,0.13333333333333333,0.14901960784313725,B.t)
D.acU=new C.w(1,0.8862745098039215,0.27058823529411763,0.35294117647058826,B.t)
D.bcy=new C.w(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,B.t)
D.bcG=new C.w(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,B.t)
D.bcJ=new C.w(1,0.10588235294117647,0.16470588235294117,0.26666666666666666,B.t)
D.wE=new C.w(1,0.17254901960784313,0.4196078431372549,0.8392156862745098,B.t)
D.wF=new C.w(1,0.7607843137254902,0.4627450980392157,0.22745098039215686,B.t)
D.Ke=new C.w(1,0.7254901960784313,0.7450980392156863,0.7764705882352941,B.t)
D.bcT=new C.w(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,B.t)
D.bcW=new C.w(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,B.t)
D.bd2=new C.w(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,B.t)
D.uB=new C.w(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,B.t)
D.bdr=new C.w(1,0.2,0.21176470588235294,0.23137254901960785,B.t)
D.bdv=new C.w(1,0.24705882352941178,0.3843137254901961,0.07058823529411765,B.t)
D.bdw=new C.w(1,0.7098039215686275,0.7333333333333333,0.7647058823529411,B.t)
D.bdy=new C.w(1,0.9294117647058824,0.9294117647058824,0.9098039215686274,B.t)
D.bdD=new C.w(1,0.9098039215686274,0.8941176470588236,0.8549019607843137,B.t)
D.adi=new C.w(1,0.7686274509803922,0.5411764705882353,0.11764705882352941,B.t)
D.bdL=new C.w(1,0.43529411764705883,0.7137254901960784,1,B.t)
D.bdV=new C.w(1,0.9137254901960784,0.8980392156862745,0.8549019607843137,B.t)
D.adn=new C.w(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,B.t)
D.bdX=new C.w(1,0.18823529411764706,0.2,0.22745098039215686,B.t)
D.ado=new C.w(1,0.9372549019607843,0.9372549019607843,0.9176470588235294,B.t)
D.be2=new C.w(1,0.7490196078431373,0.8431372549019608,1,B.t)
D.adq=new C.w(0.6666666666666666,1,0.16470588235294117,0.10196078431372549,B.t)
D.be8=new C.w(1,0.9372549019607843,0.9137254901960784,0.8627450980392157,B.t)
D.beb=new C.w(1,0.9294117647058824,0.9019607843137255,0.8156862745098039,B.t)
D.VR=new C.w(1,0.4196078431372549,0.24705882352941178,0.19215686274509805,B.t)
D.beg=new C.w(1,0.12156862745098039,0.6392156862745098,0.2627450980392157,B.t)
D.bei=new C.w(1,0.803921568627451,0.6274509803921569,0.2,B.t)
D.VT=new C.w(1,1,0.41568627450980394,0,B.t)
D.Km=new C.w(1,0.3607843137254902,0.7019607843137254,1,B.t)
D.beI=new C.w(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,B.t)
D.beR=new C.w(1,0.8431372549019608,0.8,0.6588235294117647,B.t)
D.mH=new C.w(1,0.10588235294117647,0.10588235294117647,0.12156862745098039,B.t)
D.bf7=new C.w(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,B.t)
D.qr=new C.w(1,0.5529411764705883,0.3333333333333333,0.1411764705882353,B.t)
D.VY=new C.w(1,1,0.9529411764705882,0.6274509803921569,B.t)
D.bfo=new C.w(1,0.30980392156862746,0.6588235294117647,1,B.t)
D.bfs=new C.w(1,1,0.6196078431372549,0.6196078431372549,B.t)
D.bft=new C.w(1,0.00784313725490196,0.0392156862745098,0.058823529411764705,B.t)
D.adK=new C.w(1,0.8431372549019608,0.16470588235294117,0.16470588235294117,B.t)
D.adL=new C.w(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,B.t)
D.adP=new C.w(1,0.6901960784313725,0.5411764705882353,0.3568627450980392,B.t)
D.bfR=new C.w(1,0.6078431372549019,0.8274509803921568,0.9607843137254902,B.t)
D.bfU=new C.w(1,0.48627450980392156,0.2901960784313726,0.22745098039215686,B.t)
D.bfV=new C.w(1,0.23137254901960785,0.6078431372549019,1,B.t)
D.bg2=new C.w(1,0.29411764705882354,0.29411764705882354,0.3137254901960784,B.t)
D.adR=new C.w(1,0.13333333333333333,0.14901960784313725,0.17254901960784313,B.t)
D.bg7=new C.w(1,0.8117647058823529,0.788235294117647,0.7215686274509804,B.t)
D.bge=new C.w(1,0.5450980392156862,0.4196078431372549,0.24705882352941178,B.t)
D.bjw=new C.b9(11e6)
D.wU=new C.N(0,0,7,0)
D.bkw=new C.N(0,0,8,6)
D.aeJ=new C.N(0,0,9,0)
D.bl3=new C.N(10,0,10,4)
D.bl6=new C.N(10,10,10,0)
D.bl8=new C.N(10,10,10,6)
D.blf=new C.N(10,34,10,26)
D.blo=new C.N(10,6,10,2)
D.WM=new C.N(10,6,10,4)
D.blp=new C.N(10,6,10,8)
D.blr=new C.N(10,8,0,10)
D.bm3=new C.N(12,8,8,8)
D.bm8=new C.N(14,0,14,22)
D.bma=new C.N(14,0,14,30)
D.af7=new C.N(14,0,14,6)
D.af8=new C.N(14,10,10,10)
D.afe=new C.N(14,10,8,12)
D.bmH=new C.N(14,8,14,24)
D.bmI=new C.N(14,8,14,6)
D.bn9=new C.N(16,4,16,28)
D.bnj=new C.N(16,8,16,12)
D.bpo=new C.N(26,12,26,58)
D.Li=new C.N(4,18,4,8)
D.bqb=new C.N(4,4,6,2)
D.bqd=new C.N(4,4,8,2)
D.bqe=new C.N(4,4,8,4)
D.bqN=new C.N(8,14,8,12)
D.bqU=new C.N(8,40,8,30)
D.bqZ=new C.N(8,6,16,0)
D.br_=new C.N(8,6,8,8)
D.bri=new C.N(0,0,1.5,0)
D.aTC=new C.Gd(26,"saturation")
D.brA=new C.yn(B.cU,D.aTC,null,B.aa9)
D.fm0=new C.x("Practice mode (no explanations, real shocks)",null,B.Sx,null,null,null,null,null,null,null,null,null)
D.brD=new C.bG(1,B.bn,D.fm0,null)
D.fhT=new C.x("Practice mode (no hints, no labels)",null,B.Sx,null,null,null,null,null,null,null,null,null)
D.brE=new C.bG(1,B.bn,D.fhT,null)
D.f24=new C.x("REACTION LAB",null,Q.aNZ,null,null,null,null,B.a2,null,1,null,null)
D.brG=new C.bG(1,B.bn,D.f24,null)
D.eUr=new C.F(!0,B.c,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f52=new C.x("CORE PROTOCOL",null,D.eUr,null,null,null,null,null,null,null,null,null)
D.brS=new C.bG(1,B.bn,D.f52,null)
D.fa8=new C.x("Construction Lab",null,A9.yU,null,null,null,null,null,null,null,null,null)
D.f1m=new C.x("Learn the trades on real looking 3D models",null,B.hl,null,null,null,null,null,null,null,null,null)
D.cpo=w([D.fa8,D.f1m],x.p)
D.bgV=new C.fp(B.ai,B.e,B.j,B.F,null,B.p,null,0,D.cpo,null)
D.bsu=new C.bG(1,B.bn,D.bgV,null)
D.f5J=new C.x("\ud83d\udce2 NGMY Ads",null,B.rl,null,null,null,null,B.eB,null,1,null,null)
D.bsv=new C.bG(1,B.bn,D.f5J,null)
D.fhy=new C.x("Practice mode (no hints, real shocks and fires)",null,B.Sx,null,null,null,null,null,null,null,null,null)
D.bsC=new C.bG(1,B.bn,D.fhy,null)
D.f0N=new C.x("Wire selected",null,B.hk,null,null,null,null,null,null,null,null,null)
D.bsJ=new C.bG(1,B.bn,D.f0N,null)
D.Yb=new A.qK(0,"tripped")
D.Yc=new A.qK(1,"noHotWater")
D.Yd=new A.qK(10,"wallHole")
D.Ye=new A.qK(11,"clogged")
D.Lz=new A.qK(2,"nutLeak")
D.LA=new A.qK(3,"pexLeak")
D.Yf=new A.qK(5,"flicker")
D.Yg=new A.qK(6,"burntOutlet")
D.Yh=new A.qK(7,"gfciTripped")
D.Yi=new A.qK(8,"runningToilet")
D.Yj=new A.qK(9,"dripFaucet")
D.aih=new C.a_(62712,"MaterialIcons",!1)
D.bwn=new C.a_(62878,"MaterialIcons",!1)
D.Z3=new C.a_(62908,"MaterialIcons",!1)
D.bwq=new C.a_(62918,"MaterialIcons",!1)
D.bwr=new C.a_(62931,"MaterialIcons",!1)
D.bwu=new C.a_(62951,"MaterialIcons",!1)
D.aiu=new C.a_(62970,"MaterialIcons",!1)
D.bwA=new C.a_(63015,"MaterialIcons",!1)
D.bwK=new C.a_(63064,"MaterialIcons",!1)
D.bwM=new C.a_(63070,"MaterialIcons",!1)
D.xp=new C.a_(63128,"MaterialIcons",!1)
D.bx3=new C.a_(63228,"MaterialIcons",!1)
D.Fj=new C.a_(63726,"MaterialIcons",!1)
D.by4=new C.a_(983122,"MaterialIcons",!1)
D.byg=new C.a_(983222,"MaterialIcons",!1)
D.byj=new C.a_(983247,"MaterialIcons",!1)
D.ajr=new C.a_(983316,"MaterialIcons",!1)
D.byv=new C.a_(983415,"MaterialIcons",!1)
D.byw=new C.a_(983417,"MaterialIcons",!1)
D.byx=new C.a_(983442,"MaterialIcons",!1)
D.byy=new C.a_(983443,"MaterialIcons",!1)
D.ajB=new C.a_(983467,"MaterialIcons",!1)
D.byE=new C.a_(983501,"MaterialIcons",!1)
D.byP=new C.a_(983616,"MaterialIcons",!1)
D.MH=new C.a_(983617,"MaterialIcons",!1)
D.byQ=new C.a_(983624,"MaterialIcons",!1)
D.ajV=new C.a_(983775,"MaterialIcons",!1)
D.bz0=new C.a_(983776,"MaterialIcons",!1)
D.ak0=new C.a_(983894,"MaterialIcons",!1)
D.bzi=new C.a_(984561,"MaterialIcons",!1)
D.bzT=new C.ae(B.qJ,24,B.aM,null,null,null)
D.bAD=new C.ae(B.MA,null,B.ad,null,null,null)
D.bBa=new C.ae(B.ma,21,B.ad,null,null,null)
D.by3=new C.a_(983117,"MaterialIcons",!1)
D.bCv=new C.ae(D.by3,28,B.c,null,null,null)
D.bCL=new C.ae(B.j6,18,null,null,null,null)
D.bEu=new C.ae(B.e9,21,B.cq,null,null,null)
D.bEJ=new C.ae(B.mb,null,B.ad,null,null,null)
D.bET=new C.ae(B.ZW,21,B.ad,null,null,null)
D.bFI=new C.ae(B.ez,17,B.ad,null,null,null)
D.akY=new C.ae(B.ez,19,null,null,null,null)
D.mf=new C.ae(B.v3,21,B.ad,null,null,null)
D.bHa=new C.ae(B.M1,null,B.ad,null,null,null)
D.bIh=new C.ae(B.j6,21,B.ad,null,null,null)
D.bJ6=new C.ae(B.fw,20,B.aA,null,null,null)
D.bJM=new C.ae(B.dS,null,B.aM,null,null,null)
D.bK6=new C.ae(B.jP,null,B.aA,null,null,null)
D.ftM=new A.ad(-0.4,4.2,-2.4)
D.bM2=new A.Dk(D.ftM,"LIVE 120 V",B.bL)
D.d2D=w([B.dn,B.d6,B.dn],x.O)
D.bMd=new C.a6(B.a3,B.a7,B.x,D.d2D,null,null)
D.cIP=w([B.bX,B.bo],x.O)
D.bMl=new C.a6(B.b1,B.b3,B.x,D.cIP,null,null)
D.csL=w([B.aV,B.k6,B.qn],x.O)
D.bMr=new C.a6(B.b1,B.b3,B.x,D.csL,null,null)
D.bMw=new C.a6(B.b1,B.b3,B.x,B.auW,null,null)
D.bMx=new C.a6(B.b1,B.b3,B.x,Ag.OI,null,null)
D.cJa=w([B.fZ,B.ff],x.O)
D.bMF=new C.a6(B.b1,B.b3,B.x,D.cJa,null,null)
D.alZ=new C.a6(B.b1,B.b3,B.x,K.a0B,null,null)
D.cMQ=w([B.f5,B.dN,B.cy],x.O)
D.bMK=new C.a6(B.b1,B.b3,B.x,D.cMQ,null,null)
D.cGE=w([B.o0,B.i3],x.O)
D.bNi=new C.a6(B.b1,B.b3,B.x,D.cGE,null,null)
D.cLb=w([B.dM,B.aE],x.O)
D.bNp=new C.a6(B.b1,B.b3,B.x,D.cLb,null,null)
D.cIx=w([B.es,B.az],x.O)
D.am5=new C.a6(B.b1,B.b3,B.x,D.cIx,null,null)
D.cYw=w([B.e0,B.iK,B.bo],x.O)
D.bNy=new C.a6(B.a3,B.a7,B.x,D.cYw,null,null)
D.d61=w([B.bX,B.c,B.bI],x.O)
D.bNC=new C.a6(B.a3,B.a7,B.x,D.d61,null,null)
D.cYC=w([B.k7,B.cC],x.O)
D.bNR=new C.a6(B.b1,B.b3,B.x,D.cYC,null,null)
D.cfM=w([B.bX,B.e0],x.O)
D.bO_=new C.a6(B.a3,B.a7,B.x,D.cfM,null,null)
D.avz=w([B.es,G.o9],x.O)
D.bO6=new C.a6(B.b1,B.b3,B.x,D.avz,null,null)
D.bOm=new C.a6(B.b1,B.b3,B.x,E.amr,null,null)
D.d6y=w([B.fZ,B.fW],x.O)
D.amb=new C.a6(B.b1,B.b3,B.x,D.d6y,null,null)
D.cZO=w([B.dx,B.ob],x.O)
D.bOw=new C.a6(B.b1,B.b3,B.x,D.cZO,null,null)
D.b9o=new C.w(1,0.03137254901960784,0.0392156862745098,0.07058823529411765,B.t)
D.b32=new C.w(1,0.054901960784313725,0.0784313725490196,0.12549019607843137,B.t)
D.cE9=w([D.b9o,D.b32],x.O)
D.bOz=new C.a6(B.b1,B.b3,B.x,D.cE9,null,null)
D.bP9=new C.a6(B.ax,B.aC,B.x,B.a0y,null,null)
D.bdx=new C.w(1,0.8392156862745098,0.6352941176470588,0.3686274509803922,B.t)
D.d7N=w([D.bdx,B.JD],x.O)
D.bPf=new C.a6(B.b1,B.b3,B.x,D.d7N,null,null)
D.cRa=w([B.az,B.w],x.O)
D.bPk=new C.a6(B.b1,B.b3,B.x,D.cRa,null,null)
D.bPn=new C.a6(B.b1,B.b3,B.x,G.av_,null,null)
D.bPv=new C.a6(B.b1,B.b3,B.x,K.asf,null,null)
D.bd_=new C.w(1,0.788235294117647,0.6509803921568628,0.4196078431372549,B.t)
D.bdG=new C.w(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,B.t)
D.csk=w([B.Kk,D.bd_,D.bdG],x.O)
D.bPw=new C.a6(B.b1,B.b3,B.x,D.csk,null,null)
D.cg5=w([B.dm,B.fk],x.O)
D.bPL=new C.a6(B.b1,B.b3,B.x,D.cg5,null,null)
D.bPR=new C.a6(B.ax,B.aC,B.x,B.a1l,null,null)
D.cVu=w([B.aK,B.ak],x.O)
D.bPT=new C.a6(B.b1,B.b3,B.x,D.cVu,null,null)
D.bQb=w(["flange","wax","toilet","bolts","valve","hosehot","hosecold","faucet","tail","trap","arm"],x.s)
D.amt=w([0,2,4,6,7,9,11],x.t)
D.bQr=w([0,4,7],x.t)
D.amx=w([0,4,7,12],x.t)
D.bQs=w([0,4,7,4],x.t)
D.auH=w([B.fV,B.pd],x.O)
D.auh=w([B.hr,B.cY],x.O)
D.asM=w([B.bz,B.dN],x.O)
D.cAL=w([B.aM,B.dm],x.O)
D.cH_=w([B.cq,B.f0],x.O)
D.cZF=w([B.bY,B.lp],x.O)
D.asg=w([B.cy,B.jH],x.O)
D.cFF=w([B.bI,B.aJ],x.O)
D.bQM=w([D.auH,D.auh,B.a0F,D.asM,D.cAL,D.cH_,B.atR,D.cZF,D.asg,D.cFF],x.gG)
D.amA=w([1],x.n)
D.bVq=w([120,220,380],x.t)
D.bZa=w([12,16,19,24],x.t)
D.bZj=w([1400,800,450,2400],x.t)
D.c2j=w([1,2,3],x.n)
D.aqd=w([1,-1],x.n)
D.c2u=w([0,0.6,1],x.n)
D.fsH=new A.ad(-57.8,-32,0)
D.aZd=new A.yj(0,"Outlet spot 1",!1,D.fsH,"low")
D.ft5=new A.ad(-9.8,-32,0)
D.aZa=new A.yj(1,"Outlet spot 2",!1,D.ft5,"low")
D.ftn=new A.ad(38.2,-32,0)
D.aZg=new A.yj(2,"Outlet spot 3",!1,D.ftn,"low")
D.fsr=new A.ad(-25.8,0,0)
D.aZe=new A.yj(3,"Switch spot 1",!1,D.fsr,"switch")
D.ft1=new A.ad(22.2,0,0)
D.aZc=new A.yj(4,"Switch spot 2",!1,D.ft1,"switch")
D.ftS=new A.ad(-30,48,40)
D.aZf=new A.yj(5,"Ceiling light spot",!0,D.ftS,"light")
D.fpT=new A.ad(30,48,40)
D.aZb=new A.yj(6,"Ceiling fan spot",!0,D.fpT,"fan")
D.vh=w([D.aZd,D.aZa,D.aZg,D.aZe,D.aZc,D.aZf,D.aZb],C.az("P<yj>"))
D.c6C=w([250,450,900,1500],x.t)
D.c9n=w(["The living room has no power: find the tripped breaker in the panel and reset it.","The kitchen sink drips: pick the wrench and tighten the slip nut under the sink. (Build the house up to Fixtures to see the problems.)"],x.s)
D.ftd=new A.ad(11,4.6,-6)
D.fqH=new A.ad(11,5.4,-7.85)
D.fsS=new A.ad(3.4,5.4,-7.85)
D.aPC=new A.ad(3.4,3.4,-7.85)
D.c9p=w([D.ftd,D.fqH,D.fsS,D.aPC],x.o)
D.c9w=w([-0.05,0.05],x.n)
D.dUH=new C.u(26,-8)
D.dV9=new C.u(52,0)
D.dUG=new C.u(26,8)
D.c9T=w([B.J,D.dUH,D.dV9,D.dUG],x.g)
D.b3Q=new C.w(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,B.t)
D.bdi=new C.w(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,B.t)
D.bbB=new C.w(1,0.7450980392156863,0.5411764705882353,0.4,B.t)
D.bg9=new C.w(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,B.t)
D.baR=new C.w(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,B.t)
D.arw=w([D.b3Q,D.bdi,D.bbB,D.bg9,D.baR],x.O)
D.eqq=new C.z("Jambo!","Hello!")
D.ely=new C.z("Asante","Thank you")
D.ed7=new C.z("Karibu","Welcome")
D.ef8=new C.z("Rafiki","Friend")
D.arY=w([D.eqq,D.ely,D.ed7,D.ef8],x.L)
D.eoV=new C.z("type","Typewriter")
D.eio=new C.z("bounce","Bounce")
D.epE=new C.z("wave","Wave")
D.eqH=new C.z("zoom","Zoom")
D.cna=w([D.eoV,D.eio,D.epE,B.a4q,E.aJr,D.eqH,E.aJt],x.L)
D.cnm=w([50,25,75],x.t)
D.ecT=new C.z(-9.5,4.6)
D.ef7=new C.z(-5.9,2.3)
D.ekO=new C.z(8.8,4.4)
D.cpn=w([D.ecT,D.ef7,D.ekO],C.az("P<+(O,O)>"))
D.as2=w([B.bY,B.aV,B.dM,B.bb,B.cy],x.O)
D.cqi=w([61,63],x.t)
D.cqv=w([62,64],x.t)
D.crF=w([1,2,3,4,5,6,7],x.n)
D.csQ=w([0,5,10,15,18,20,25],x.t)
D.ash=w([72,73,74,75],x.t)
D.ek_=new C.z("fish","Fish")
D.ek1=new C.z("fly","Fireflies")
D.eim=new C.z("bird","Birds")
D.cwX=w([D.ek_,D.ek1,D.eim],x.L)
D.cB0=w([900,500,250,1600],x.t)
D.cEn=w([y.r,"Two cables come into the box: one from the breaker panel (LINE) and one going to the light (LOAD).","Twist the two white wires together with a wire nut. A switch does not cut the neutral.",y.x,"Fasten the black wire from the panel to one BRASS screw.","Fasten the black wire that goes to the light to the other BRASS screw.","Push the switch into the box, put the plate on and test with the power on."],x.s)
D.dST={black:0}
D.HF=new C.eV(D.dST,1,x.M)
D.bui=new A.ma(51,"Black wire nut: HOT",D.HF,!1,"hot")
D.dTE={white:0}
D.HD=new C.eV(D.dTE,1,x.M)
D.bu7=new A.ma(52,"White wire nut: NEUTRAL",D.HD,!1,"neutral")
D.dT8={ground:0}
D.Rw=new C.eV(D.dT8,1,x.M)
D.bu4=new A.ma(53,"Green ground connection",D.Rw,!1,"ground")
D.cEw=w([D.bui,D.bu7,D.bu4],x.r)
D.buj=new A.ma(51,"Black wire nut: HOT",D.HF,!1,"hot")
D.bu8=new A.ma(52,"White wire nut: NEUTRAL",D.HD,!1,"neutral")
D.bu5=new A.ma(53,"Green ground connection",D.Rw,!1,"ground")
D.cEv=w([D.buj,D.bu8,D.bu5],x.r)
D.cEx=w([B.f9,B.bJ,B.Kf,B.ew],x.O)
D.cEy=w([0.78,1],x.n)
D.asN=w([0,2,4,7,9,12,14,16],x.t)
D.cF4=w([B.bz,B.bA,B.ba,B.bz],x.O)
D.asS=w(["A","T","C","G"],x.s)
D.cF5=w(["A","U","C","G"],x.s)
D.frj=new A.ad(-6.5,7.5,-7.85)
D.frm=new A.ad(-6.5,7.8,-3)
D.cF8=w([D.frj,D.frm],x.o)
D.a0v=w([B.aE,B.cr,B.bl,B.aV,B.np],x.O)
D.cFE=w([1,2.76,5.4,8.93,13.3],x.n)
D.cFM=w([y.r,"The cable comes in through the top of the box. Strip about 3/4 inch of insulation from each wire.","Fasten the bare copper ground wire to the GREEN screw.","Fasten the white (neutral) wire to a SILVER screw.","Fasten the black (hot) wire to a BRASS screw. Wrap each wire clockwise under its screw.","Fold the wires back and push the outlet into the box.","Put the cover plate on, then turn the power on and test."],x.s)
D.fuy=new A.ad(-3.6,7.5,-7.85)
D.fr5=new A.ad(-3.6,4.2,-7.85)
D.cFT=w([D.fuy,D.fr5],x.o)
D.asZ=w([B.cy,B.cr,B.bY,B.bb],x.O)
D.cGl=w([B.az,B.aE,B.cy,B.cr,B.bl,B.cu,B.c8,B.bA,B.JD],x.O)
D.dSS={blackLine:0,blackLoad:1}
D.aKs=new C.eV(D.dSS,2,x.M)
D.bug=new A.ma(21,"Brass screw (top)",D.aKs,!1,"hot")
D.buh=new A.ma(22,"Brass screw (bottom)",D.aKs,!1,"hot")
D.aho=new A.ma(25,"Green screw: GROUND",D.Rw,!1,"ground")
D.cGm=w([D.bug,D.buh,D.aho],x.r)
D.a0z=w([0.04,0.17,0.3],x.n)
D.cGI=w([1,0.6,0.38,0.22,0.12],x.n)
D.cGW=w(["Orange","Purple","Teal","Pink","Lime","Sky","Gold","Brown","Mint","Coral","Violet","Olive"],x.s)
D.ftt=new A.ad(9.8,6,-7.85)
D.fqK=new A.ad(9.8,7.5,-7.85)
D.fuK=new A.ad(-8,7.5,-7.85)
D.frU=new A.ad(-8,1.5,-7.85)
D.cHn=w([D.ftt,D.fqK,D.fuK,D.frU],x.o)
D.G6=w(["THE SUN IS A STAR","WATER BOILS AT ONE HUNDRED DEGREES","LIGHT TRAVELS FASTER THAN SOUND","DNA IS THE CODE OF LIFE","THE MOON CAUSES THE TIDES","A PASSWORD SHOULD BE LONG AND UNIQUE"],x.s)
D.ey4=new A.uv("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.eya=new A.uv("Medium engine","A good all-rounder.",0.3,0.9)
D.ey9=new A.uv("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.G7=w([D.ey4,D.eya,D.ey9],x._)
D.e8J=new C.z(6,"Easy")
D.e9g=new C.z(8,"Medium")
D.e5j=new C.z(10,"Hard")
D.cHK=w([D.e8J,D.e9g,D.e5j],x.ek)
D.ata=w([0.55,0.78,1],x.n)
D.aPG=new A.ad(5,1.8,-7.85)
D.fsk=new A.ad(5,-0.1,-7.85)
D.fsW=new A.ad(12.5,-0.1,-7.85)
D.cIm=w([D.aPG,D.fsk,D.fsW],x.o)
D.fpc=new A.ad(3,3.1,-7.1)
D.aPD=new A.ad(3,1.7,-7.1)
D.fsU=new A.ad(3,1,-7.1)
D.fpN=new A.ad(3.65,0.5,-7.1)
D.fqa=new A.ad(4.3,1,-7.1)
D.fsg=new A.ad(4.3,1.8,-7.1)
D.fuL=new A.ad(5,1.8,-7.1)
D.cIO=w([D.fpc,D.aPD,D.fsU,D.fpN,D.fqa,D.fsg,D.fuL,D.aPG],x.o)
D.cJf=w([0.93,0.975,1],x.n)
D.cJy=w(["Mama","Baba","Bibi","Babu","Dada","Kaka"],x.s)
D.eaz=new C.z("Chairs",120)
D.eaC=new C.z("Cloth",80)
D.eaT=new C.z("Delivery",25)
D.atj=w([D.eaz,D.eaC,D.eaT],C.az("P<+(n,H)>"))
D.fuk=new A.ad(0.6,11,-3.4)
D.fqr=new A.ad(0.6,3.2,-3.2)
D.fu3=new A.ad(0.6,2.2,-1.9)
D.fqk=new A.ad(0.6,0.7,-1.5)
D.cJN=w([D.fuk,D.fqr,D.fu3,D.fqk],x.o)
D.atl=w([B.c,B.fW,B.p1,B.az],x.O)
D.cKL=w([1,0.7,0.45,0.28,0.16,0.1,0.06],x.n)
D.cKM=w([1,0.55,0.32,0.2,0.12,0.07],x.n)
D.foS=new A.xA("Moon",1737,4291941851)
D.foP=new A.xA("Earth",6371,4281908728)
D.foT=new A.xA("Neptune",24622,4284524026)
D.foU=new A.xA("Saturn",58232,4294829706)
D.foQ=new A.xA("Jupiter",69911,4294677052)
D.foV=new A.xA("Sun",696340,4294688548)
D.foW=new A.xA("Sirius A",119e4,4290763774)
D.foN=new A.xA("Arcturus",179e5,4294818420)
D.foO=new A.xA("Betelgeuse",531e6,4294472049)
D.foR=new A.xA("UY Scuti",667e6,4293870660)
D.OK=w([D.foS,D.foP,D.foT,D.foU,D.foQ,D.foV,D.foW,D.foN,D.foO,D.foR],C.az("P<xA>"))
D.etX=new C.bz("glow","Glow",B.Z5)
D.erJ=new C.bz("rainbow","Rainbow",B.nE)
D.es3=new C.bz("stars","Stars",B.hY)
D.ert=new C.bz("sparks","Sparks",B.dS)
D.eth=new C.bz("fire","Fire",B.v4)
D.cKY=w([D.etX,D.erJ,D.es3,D.ert,D.eth],x.c)
D.fq_=new A.ad(0,8.3,0)
D.aPp=new A.ad(0,3.9,0)
D.a0L=w([D.fq_,D.aPp],x.o)
D.atp=w([B.bl,B.aE,B.cr,B.d6],x.O)
D.cLc=w([y.r,"Make sure the box is rated for a fan. A plain light box cannot carry the weight and the shaking.","Join the house ground wire to the fan ground.","Join the house white wire to the fan white wire with a wire nut.","Join the house black wire to the fan black wire with a wire nut.","Push the wires up into the box and fasten the canopy to the ceiling.",y.E],x.s)
D.ftG=new A.ad(-0.6,11,-3.4)
D.fqN=new A.ad(-0.6,3.2,-3.2)
D.fta=new A.ad(-0.6,2.2,-1.9)
D.fuU=new A.ad(-0.6,0.7,-1.5)
D.cLu=w([D.ftG,D.fqN,D.fta,D.fuU],x.o)
D.cLU=w([0.2,1],x.n)
D.ey1=new A.uv("Radar","Shows your height above the ground.",0.1,0)
D.ey2=new A.uv("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.ey_=new A.uv("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.atx=w([D.ey1,D.ey2,D.ey_],x._)
D.esB=new C.bz("attract","Attract",B.xI)
D.eso=new C.bz("scare","Scare",B.qH)
D.erC=new C.bz("food","Food",B.tw)
D.by9=new C.a_(983158,"MaterialIcons",!1)
D.esU=new C.bz("hunt","Hunt",D.by9)
D.cMv=w([D.esB,D.eso,D.erC,D.esU],x.c)
D.cMU=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.dXV=new A.n5("flange","flange","Toilet flange",B.T,"The flange is fixed to the floor over the drain. Everything else sits on it.",!1,0)
D.cYv=w(["flange"],x.s)
D.dXT=new A.n5("wax","wax","Wax ring",D.cYv,"The wax ring goes on the flange before the toilet. It makes the seal against sewer gas and water.",!1,0)
D.d6V=w(["wax"],x.s)
D.dXQ=new A.n5("toilet","toilet","Toilet",D.d6V,"The toilet is lowered straight down onto the wax ring. The ring has to be there first.",!1,0)
D.d5s=w(["toilet"],x.s)
D.dXU=new A.n5("bolts","bolts","Toilet bolts",D.d5s,"The two bolts hold the toilet to the flange. Set the toilet first.",!1,2)
D.dXR=new A.n5("tvalve","valve","Toilet shut-off valve",B.T,"The shut-off valve goes on the pipe that comes out of the wall.",!0,0)
D.d5y=w(["tvalve","toilet"],x.s)
D.dXS=new A.n5("those","hosecold","Toilet supply hose",D.d5y,"The hose joins the valve to the toilet tank, so both must be there first.",!1,2)
D.aEy=new A.n5("faucet","faucet","Faucet",B.T,"The faucet goes through the hole in the counter.",!1,0)
D.aEB=new A.n5("vhot","valve","Hot shut-off valve (left)",B.T,y.g,!0,0)
D.aEz=new A.n5("vcold","valve","Cold shut-off valve (right)",B.T,y.g,!0,0)
D.d6n=w(["vhot","faucet"],x.s)
D.aEC=new A.n5("hhot","hosehot","Hot supply hose",D.d6n,"The hose joins the hot valve to the faucet, so the valve and the faucet must be there first.",!1,2)
D.d6k=w(["vcold","faucet"],x.s)
D.aEA=new A.n5("hcold","hosecold","Cold supply hose",D.d6k,"The hose joins the cold valve to the faucet, so the valve and the faucet must be there first.",!1,2)
D.aEx=new A.n5("tail","tail","Tailpiece",B.T,"The tailpiece hangs from the sink drain. It is the first piece of the drain.",!1,0)
D.d5l=w(["tail"],x.s)
D.aED=new A.n5("trap","trap","P-trap",D.d5l,"The P-trap joins the tailpiece. Build the drain from the top down.",!1,1)
D.d5t=w(["trap"],x.s)
D.aEE=new A.n5("arm","arm","Trap arm",D.d5t,"The trap arm joins the trap and goes into the wall.",!1,1)
D.cHU=w([D.dXV,D.dXT,D.dXQ,D.dXU,D.dXR,D.dXS,D.aEy,D.aEB,D.aEz,D.aEC,D.aEA,D.aEx,D.aED,D.aEE],x.fI)
D.e2n=new A.aru("bathroom","Bathroom",D.cHU,"Fit out a bathroom: a toilet and a sink with its faucet, supply hoses and drain.")
D.d_7=w([D.aEy,D.aEB,D.aEz,D.aEC,D.aEA,D.aEx,D.aED,D.aEE],x.fI)
D.e2o=new A.aru("kitchen","Kitchen",D.d_7,"Fit out a kitchen sink: the faucet, the hot and cold supplies and the drain.")
D.cMV=w([D.e2n,D.e2o],C.az("P<aru>"))
D.cN9=w([47,100,220,470,1000],x.n)
D.buc=new A.ma(21,"LOAD hot (brass, taped)",B.HE,!0,"load")
D.bue=new A.ma(22,"LINE hot (brass)",D.HF,!1,"hot")
D.bud=new A.ma(23,"LOAD neutral (silver, taped)",B.HE,!0,"load")
D.bu6=new A.ma(24,"LINE neutral (silver)",D.HD,!1,"neutral")
D.cNs=w([D.buc,D.bue,D.bud,D.bu6,D.aho],x.r)
D.atO=w([0,2,4,7,9],x.t)
D.fpb=new A.ad(8.2,0.9,-6.3)
D.ftg=new A.ad(8.2,-0.1,-6.3)
D.fpK=new A.ad(8.2,-0.1,-7.85)
D.cNL=w([D.fpb,D.ftg,D.fpK],x.o)
D.cNW=w([-0.28,0.28],x.n)
D.H8={volts:0}
D.a2d=new C.br(D.H8,[3],x.J)
D.Hu=new C.eW(["b","battery",0.2,0.3,D.a2d])
D.dTr={on:0}
D.dcr=new C.br(D.dTr,[1],x.J)
D.Cj=new C.eW(["s","switch",0.5,0.3,D.dcr])
D.ewj=new C.eW(["l","bulb",0.8,0.3,B.iQ])
D.cIW=w([D.Hu,D.Cj,D.ewj],x.d)
D.Ci=new C.cM(["b",0,"s",0])
D.evp=new C.cM(["s",1,"l",0])
D.aJx=new C.cM(["l",1,"b",1])
D.cYH=w([D.Ci,D.evp,D.aJx],x.y)
D.cIp=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.e4F=new A.mm("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.cIW,D.cYH,D.cIp)
D.aDH={ohms:0}
D.aBj=new C.br(D.aDH,[220],x.J)
D.evP=new C.eW(["r","resistor",0.5,0.3,D.aBj])
D.eww=new C.eW(["d","led",0.8,0.3,B.iQ])
D.d0t=w([D.Hu,D.evP,D.eww],x.d)
D.euN=new C.cM(["b",0,"r",0])
D.evj=new C.cM(["r",1,"d",0])
D.euT=new C.cM(["d",1,"b",1])
D.d8g=w([D.euN,D.evj,D.euT],x.y)
D.d0S=w(["led","diode","indicator"],x.s)
D.e4M=new A.mm("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.d0t,D.d8g,D.d0S)
D.a3u={level:0}
D.dbQ=new C.br(D.a3u,[0.2],x.J)
D.evV=new C.eW(["p","pot",0.5,0.3,D.dbQ])
D.evX=new C.eW(["m","motor",0.8,0.3,B.iQ])
D.cJd=w([D.Hu,D.evV,D.evX],x.d)
D.euM=new C.cM(["b",0,"p",0])
D.evf=new C.cM(["p",1,"m",0])
D.evc=new C.cM(["m",1,"b",1])
D.d4u=w([D.euM,D.evf,D.evc],x.y)
D.cYq=w(["fan","motor","spin","dimmer"],x.s)
D.e4D=new A.mm("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.cJd,D.d4u,D.cYq)
D.a2a=new C.br(D.a3u,[0.9],x.J)
D.aJE=new C.eW(["s","solar",0.25,0.3,D.a2a])
D.aJD=new C.eW(["l","bulb",0.75,0.3,B.iQ])
D.cLC=w([D.aJE,D.aJD],x.d)
D.evm=new C.cM(["s",0,"l",0])
D.evb=new C.cM(["l",1,"s",1])
D.cJW=w([D.evm,D.evb],x.y)
D.d50=w(["solar","sun","without battery","no battery","free"],x.s)
D.e4G=new A.mm("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.cLC,D.cJW,D.d50)
D.ewz=new C.eW(["c","crank",0.25,0.3,D.a2a])
D.cWS=w([D.ewz,D.aJD],x.d)
D.euQ=new C.cM(["c",0,"l",0])
D.eva=new C.cM(["l",1,"c",1])
D.cXo=w([D.euQ,D.eva],x.y)
D.cX0=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.e4C=new A.mm("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.cWS,D.cXo,D.cX0)
D.dbP=new C.br(D.a3u,[0.7],x.J)
D.ew_=new C.eW(["t","turbine",0.25,0.3,D.dbP])
D.evO=new C.eW(["m","motor",0.75,0.3,B.iQ])
D.cRN=w([D.ew_,D.evO],x.d)
D.evx=new C.cM(["t",0,"m",0])
D.evd=new C.cM(["m",1,"t",1])
D.cQQ=w([D.evx,D.evd],x.y)
D.cVN=w(["wind","turbine","windmill","water","hydro"],x.s)
D.e4z=new A.mm("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.cRN,D.cQQ,D.cVN)
D.aBg=new C.br(D.H8,[9],x.J)
D.a4t=new C.eW(["b","battery",0.2,0.3,D.aBg])
D.aJC=new C.eW(["r","radio",0.8,0.3,B.iQ])
D.d5z=w([D.a4t,D.Cj,D.aJC],x.d)
D.evr=new C.cM(["s",1,"r",0])
D.aJy=new C.cM(["r",1,"b",1])
D.bQa=w([D.Ci,D.evr,D.aJy],x.y)
D.d4h=w(["radio","music","listen"],x.s)
D.e4L=new A.mm("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.d5z,D.bQa,D.d4h)
D.dcT=new C.br(D.H8,[12],x.J)
D.aJB=new C.eW(["b","battery",0.2,0.3,D.dcT])
D.ewk=new C.eW(["t","tv",0.8,0.3,B.iQ])
D.cIX=w([D.aJB,D.Cj,D.ewk],x.d)
D.evs=new C.cM(["s",1,"t",0])
D.aJz=new C.cM(["t",1,"b",1])
D.cZI=w([D.Ci,D.evs,D.aJz],x.y)
D.d5x=w(["tv","television","screen","watch"],x.s)
D.e4w=new A.mm("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.cIX,D.cZI,D.d5x)
D.ewa=new C.eW(["z","buzzer",0.8,0.3,B.iQ])
D.cpG=w([D.Hu,D.Cj,D.ewa],x.d)
D.evt=new C.cM(["s",1,"z",0])
D.evJ=new C.cM(["z",1,"b",1])
D.cEk=w([D.Ci,D.evt,D.evJ],x.y)
D.d2I=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.e4I=new A.mm("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cpG,D.cEk,D.d2I)
D.evW=new C.eW(["h","heater",0.8,0.3,B.iQ])
D.cUw=w([D.a4t,D.Cj,D.evW],x.d)
D.evo=new C.cM(["s",1,"h",0])
D.ev0=new C.cM(["h",1,"b",1])
D.cF0=w([D.Ci,D.evo,D.ev0],x.y)
D.c9S=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.e4x=new A.mm("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.cUw,D.cF0,D.c9S)
D.ewm=new C.eW(["s","solar",0.2,0.25,D.a2a])
D.dcY=new C.br(D.aDH,[100],x.J)
D.ewp=new C.eW(["r","resistor",0.55,0.25,D.dcY])
D.ewv=new C.eW(["c","capacitor",0.85,0.25,B.iQ])
D.evS=new C.eW(["q","resistor",0.55,0.6,D.aBj])
D.ewn=new C.eW(["d","led",0.85,0.6,B.iQ])
D.cZl=w([D.ewm,D.ewp,D.ewv,D.evS,D.ewn],x.d)
D.evn=new C.cM(["s",0,"r",0])
D.evi=new C.cM(["r",1,"c",0])
D.euS=new C.cM(["c",1,"s",1])
D.euR=new C.cM(["c",0,"q",0])
D.evh=new C.cM(["q",1,"d",0])
D.euU=new C.cM(["d",1,"c",1])
D.cOX=w([D.evn,D.evi,D.euS,D.euR,D.evh,D.euU],x.y)
D.cWg=w(["capacitor","store","charge","flash"],x.s)
D.e4K=new A.mm("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.cZl,D.cOX,D.cWg)
D.ew2=new C.eW(["b","battery",0.15,0.3,D.a2d])
D.ewA=new C.eW(["l1","bulb",0.5,0.3,B.iQ])
D.ew8=new C.eW(["l2","bulb",0.85,0.3,B.iQ])
D.cHd=w([D.ew2,D.ewA,D.ew8],x.d)
D.euL=new C.cM(["b",0,"l1",0])
D.ev7=new C.cM(["l1",1,"l2",0])
D.ev8=new C.cM(["l2",1,"b",1])
D.cSq=w([D.euL,D.ev7,D.ev8],x.y)
D.d5j=w(["series","two bulbs","dim"],x.s)
D.e4A=new A.mm("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cHd,D.cSq,D.d5j)
D.dTD={volts:0,charge:1}
D.dd3=new C.br(D.dTD,[1.5,0],x.J)
D.ewt=new C.eW(["b","battery",0.75,0.3,D.dd3])
D.cGF=w([D.aJE,D.ewt],x.d)
D.evl=new C.cM(["s",0,"b",0])
D.euP=new C.cM(["b",1,"s",1])
D.cPc=w([D.evl,D.euP],x.y)
D.cWn=w(["charge","rechargeable","flat","recharge"],x.s)
D.e4y=new A.mm("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cGF,D.cPc,D.cWn)
D.dcS=new C.br(D.H8,[4.5],x.J)
D.evY=new C.eW(["b","battery",0.2,0.3,D.dcS])
D.aJA=new C.eW(["p","phone",0.8,0.3,B.iQ])
D.cRD=w([D.evY,D.Cj,D.aJA],x.d)
D.evq=new C.cM(["s",1,"p",0])
D.a4s=new C.cM(["p",1,"b",1])
D.d1K=w([D.Ci,D.evq,D.a4s],x.y)
D.d35=w(["phone","charger","usb","mobile"],x.s)
D.e4E=new A.mm("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.cRD,D.d1K,D.d35)
D.evL=new C.eW(["f","fan",0.8,0.3,B.iQ])
D.c26=w([D.Hu,D.evL],x.d)
D.euK=new C.cM(["b",0,"f",0])
D.euZ=new C.cM(["f",1,"b",1])
D.cFt=w([D.euK,D.euZ],x.y)
D.cYp=w(["fan","cool","air","wind"],x.s)
D.e4N=new A.mm("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.c26,D.cFt,D.cYp)
D.ewe=new C.eW(["b","battery",0.15,0.2,D.a2d])
D.evM=new C.eW(["a","ammeter",0.5,0.2,B.iQ])
D.evK=new C.eW(["l","bulb",0.85,0.2,B.iQ])
D.ewg=new C.eW(["v","voltmeter",0.5,0.6,B.iQ])
D.cWG=w([D.ewe,D.evM,D.evK,D.ewg],x.d)
D.euI=new C.cM(["b",0,"a",0])
D.euH=new C.cM(["a",1,"l",0])
D.evz=new C.cM(["v",0,"l",0])
D.evA=new C.cM(["v",1,"l",1])
D.cP3=w([D.euI,D.euH,D.aJx,D.evz,D.evA],x.y)
D.d8f=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.e4J=new A.mm("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.cWG,D.cP3,D.d8f)
D.ewD=new C.eW(["b","battery",0.15,0.2,D.aBg])
D.ew1=new C.eW(["t","tv",0.55,0.2,B.iQ])
D.aBh=new C.br(D.H8,[5],x.J)
D.evQ=new C.eW(["c","buck",0.4,0.5,D.aBh])
D.ew3=new C.eW(["p","phone",0.8,0.5,B.iQ])
D.cMX=w([D.ewD,D.ew1,D.evQ,D.ew3],x.d)
D.euO=new C.cM(["b",0,"t",0])
D.aJv=new C.cM(["b",0,"c",0])
D.aJw=new C.cM(["c",1,"p",0])
D.cRA=w([D.euO,D.aJz,D.aJv,D.aJw,D.a4s],x.y)
D.cLd=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.e4B=new A.mm("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.cMX,D.cRA,D.cLd)
D.evR=new C.eW(["c","buck",0.5,0.3,D.aBh])
D.cES=w([D.aJB,D.evR,D.aJA],x.d)
D.cJl=w([D.aJv,D.aJw,D.a4s],x.y)
D.cdf=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.e4v=new A.mm("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cES,D.cJl,D.cdf)
D.ew6=new C.eW(["d","diode",0.5,0.3,B.iQ])
D.cSD=w([D.a4t,D.ew6,D.aJC],x.d)
D.euJ=new C.cM(["b",0,"d",0])
D.euV=new C.cM(["d",1,"r",0])
D.csa=w([D.euJ,D.euV,D.aJy],x.y)
D.cKV=w(["diode","protect","backwards","one way"],x.s)
D.e4H=new A.mm("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.cSD,D.csa,D.cKV)
D.ON=w([D.e4F,D.e4M,D.e4D,D.e4G,D.e4C,D.e4z,D.e4L,D.e4w,D.e4I,D.e4x,D.e4K,D.e4A,D.e4y,D.e4E,D.e4N,D.e4J,D.e4B,D.e4v,D.e4H],C.az("P<mm>"))
D.dP7=new A.xd("NGMY Tree Story","A family grows, one branch at a time")
D.dP2=new A.xd("Coin Hero","A little coin saves up and wins the day")
D.dPa=new A.xd("Space Voyage","The NGMY rocket explores the stars")
D.dP1=new A.xd("Ocean Friends","Fish, bubbles and a friendly whale")
D.dP3=new A.xd("Rainy Village","Storm clouds, then a rainbow")
D.dP5=new A.xd("Spark Adventure","Follow a spark round a circuit")
D.dP4=new A.xd("Fireworks Night","Colour bursts over the city")
D.dP9=new A.xd("Little Train","A train rolls past the hills")
D.dP6=new A.xd("Robot Disco","A robot dances to the beat")
D.dP8=new A.xd("Garden Time","Flowers grow and butterflies fly")
D.OO=w([D.dP7,D.dP2,D.dPa,D.dP1,D.dP3,D.dP5,D.dP4,D.dP9,D.dP6,D.dP8],C.az("P<xd>"))
D.cOI=w([1,0.6,0.45,0.3,0.22,0.15],x.n)
D.fFw=new A.Fh("Moon",1.62,B.e0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.fFu=new A.Fh("Mars",3.71,B.aE,"Mars has about 38 percent of Earth's gravity.")
D.fFx=new A.Fh("Mercury",3.7,B.jG,"Mercury is small, so its gravity is like Mars.")
D.fFr=new A.Fh("Venus",8.87,B.aM,"Venus is almost as heavy as Earth, with strong gravity.")
D.fFt=new A.Fh("Earth",9.81,B.aV,"On Earth gravity is strong, and the air also slows you down.")
D.fFv=new A.Fh("Neptune",11.15,B.d6,"Neptune pulls a little harder than Earth.")
D.fFs=new A.Fh("Jupiter",24.79,B.cy,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.qS=w([D.fFw,D.fFu,D.fFx,D.fFr,D.fFt,D.fFv,D.fFs],C.az("P<Fh>"))
D.atZ=w([B.bY,B.cr,B.aE,B.bz,B.cy],x.O)
D.cOW=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.a0O=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.cPz=w([0.2,0.5,0.8],x.n)
D.cPJ=w([1,2,3,4,5,6],x.n)
D.bwF=new C.a_(63040,"MaterialIcons",!1)
D.ess=new C.bz("peg","Peg",D.bwF)
D.erG=new C.bz("bar","Bar",P.B_)
D.es6=new C.bz("erase","Erase",B.M5)
D.cPK=w([D.ess,D.erG,D.es6],x.c)
D.eAR=new C.cP(B.bh,B.J,4)
D.cPU=w([D.eAR],x.E)
D.au1=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aRF=new A.Ju(0,"accordion")
D.cFL=w([B.j8,B.B0,B.AQ],x.x)
D.cMn=w(["Mail","SMS","Ad"],x.s)
D.cGe=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.fDJ=new A.zV(D.aRF,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.auH,D.cFL,D.cMn,D.cGe)
D.a7W=new A.Ju(1,"flip")
D.cWa=w([B.pu,A5.Fw,B.qM],x.x)
D.cRj=w(["Unlock","Verify","Secure"],x.s)
D.cEP=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.fDI=new A.zV(D.a7W,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.auh,D.cWa,D.cRj,D.cEP)
D.aRG=new A.Ju(2,"towers")
D.cQb=w([B.xD,B.pz,B.hH],x.x)
D.cPQ=w(["Save","Grow","Earn"],x.s)
D.csZ=w(["","",""],x.s)
D.fDK=new A.zV(D.aRG,"GROWTH SKYLINE","Solid towers rise from the floor and light up",B.a0F,D.cQb,D.cPQ,D.csZ)
D.a7X=new A.Ju(3,"assemble")
D.cX3=w([B.mU,B.h3,B.dS],x.x)
D.cLN=w(["Launch","Charge","Shine"],x.s)
D.cTL=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.fDM=new A.zV(D.a7X,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.asM,D.cX3,D.cLN,D.cTL)
D.aRH=new A.Ju(4,"carousel")
D.cWT=w([B.ba,B.hc],x.O)
D.cMx=w([B.ma,B.aiN,B.ZP],x.x)
D.cHA=w(["Explore","Discover","Learn"],x.s)
D.cRI=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.fDH=new A.zV(D.aRH,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.cWT,D.cMx,D.cHA,D.cRI)
D.aRI=new A.Ju(5,"burst")
D.cPM=w([B.ji,B.rN],x.O)
D.cG9=w([B.l3,B.m8,B.hX],x.x)
D.cGt=w(["Cheer","Win","Love"],x.s)
D.cIv=w(["Make some noise","First place","Share the joy"],x.s)
D.fDL=new A.zV(D.aRI,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.cPM,D.cG9,D.cGt,D.cIv)
D.au2=w([D.fDJ,D.fDI,D.fDK,D.fDM,D.fDH,D.fDL],C.az("P<zV>"))
D.esu=new C.bz("skin","Skin",B.aiO)
D.etK=new C.bz("muscle","Muscles",B.Mi)
D.etv=new C.bz("organ","Organs",B.hX)
D.bw6=new C.a_(62747,"MaterialIcons",!1)
D.ety=new C.bz("bone","Skeleton",D.bw6)
D.etQ=new C.bz("vessel","Blood vessels",B.ot)
D.cQg=w([D.esu,D.etK,D.etv,D.ety,D.etQ],x.c)
D.fzt=new A.BM("outlet","Electrical wiring","Wall outlet","Wire a 120 volt receptacle. Black to brass, white to silver, bare copper to green.",T.Md,B.aL)
D.fzs=new A.BM("switch","Electrical wiring","Light switch","Two cables, two black wires and a wire nut. Learn what a switch really cuts.",D.MH,B.aV)
D.fzr=new A.BM("gfci","Electrical wiring","GFCI outlet","LINE and LOAD: the outlet that protects you near water.",B.qM,B.bs)
D.fzv=new A.BM("ptrap","Plumbing","Sink drain (P-trap)","Build the drain under a sink and stop sewer gas with a water seal.",T.ZD,B.cx)
D.fzw=new A.BM("faucet","Plumbing","Faucet supply lines","Hot on the left, cold on the right: connect the hoses and open the valves.",B.ot,B.cq)
D.fzu=new A.BM("house","The whole house","Build and fix a house","Build it stage by stage, look inside the walls and fix a tripped breaker and a leak.",B.tp,B.bz)
D.au5=w([D.fzt,D.fzs,D.fzr,D.fzv,D.fzw,D.fzu],C.az("P<BM>"))
D.ftb=new A.ad(3,3.2,-7.85)
D.fuW=new A.ad(3,4,-7.85)
D.fuz=new A.ad(3,4.2,-7.4)
D.fpu=new A.ad(3,3.95,-7)
D.cR3=w([D.ftb,D.fuW,D.fuz,D.fpu],x.o)
D.cR7=w([B.fZ,B.ob],x.O)
D.cR9=w([B.bk,B.aL,B.d2],x.O)
D.ey3=new A.uv("Simple legs","Light. Land gently.",0.15,0.2)
D.ey5=new A.uv("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.ey8=new A.uv("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Bn=w([D.ey3,D.ey5,D.ey8],x._)
D.cRQ=w([1.77,3.55,7.15,16.7],x.n)
D.ftw=new A.ad(6,0.2,0)
D.fsz=new A.ad(6,2.6,0)
D.aQ_=new A.ad(8.6,2.6,0)
D.cSg=w([D.ftw,D.fsz,D.aQ_],x.o)
D.cSX=w([-2.4,2.4],x.n)
D.ada=new C.w(1,0.14901960784313725,0.14901960784313725,0.16470588235294117,B.t)
D.fw7=new A.zB("blackLine","Black \xb7 from the breaker",D.ada,B.c,"hot")
D.bac=new C.w(1,0.22745098039215686,0.1803921568627451,0.1803921568627451,B.t)
D.fwa=new A.zB("blackLoad","Black \xb7 to the light",D.bac,B.c,"hot")
D.aQf=new A.zB("ground","Bare copper \xb7 ground",D.wF,B.c,"ground")
D.cTe=w([D.fw7,D.fwa,D.aQf],x.ak)
D.cU8=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.eop=new C.z("spiral","Spiral")
D.e8H=new C.z("barred","Barred spiral")
D.ejv=new C.z("elliptical","Elliptical")
D.cUM=w([D.eop,D.e8H,D.ejv],x.L)
D.eus=new C.cM(["beat",0.18,0.28,0])
D.evu=new C.cM(["burst",0.7,0.2,0])
D.evE=new C.cM(["delay",0.45,0.5,1])
D.eve=new C.cM(["ripple",0.75,0.6,3])
D.cLx=w([D.eus,D.evu,D.evE,D.eve],x.e)
D.a4l=new C.z(2,3)
D.cVB=w([O.n0,K.Ht,D.a4l],x.C)
D.fCZ=new A.F4("First spark","A clock lights a burst and a ripple",D.cLx,D.cVB)
D.euY=new C.cM(["beat",0.15,0.3,1])
D.eu7=new C.cM(["ripple",0.62,0.15,0])
D.evB=new C.cM(["delay",0.4,0.45,0])
D.euE=new C.cM(["ripple",0.7,0.45,0])
D.euo=new C.cM(["delay",0.4,0.7,1])
D.evg=new C.cM(["shake",0.75,0.75,0])
D.d6g=w([D.euY,D.eu7,D.evB,D.euE,D.euo,D.evg],x.e)
D.e68=new C.z(2,4)
D.aJl=new C.z(4,5)
D.cON=w([O.n0,K.Ht,D.a4l,D.e68,D.aJl],x.C)
D.fD0=new A.F4("Heartbeat","Two thumps, then a shake",D.d6g,D.cON)
D.eux=new C.cM(["dice",0.15,0.7,1])
D.evG=new C.cM(["echo",0.4,0.7,0])
D.euD=new C.cM(["comet",0.7,0.5,4])
D.evv=new C.cM(["burst",0.72,0.2,1])
D.euW=new C.cM(["burst",0.3,0.25,0])
D.euy=new C.cM(["pop",0.55,0.85,0])
D.c9r=w([D.eux,D.evG,D.euD,D.evv,D.euW,D.euy],x.e)
D.e5B=new C.z(1,3)
D.e5C=new C.z(1,4)
D.aJk=new C.z(0,5)
D.cWO=w([O.n0,K.vC,D.e5B,D.e5C,D.aJk],x.C)
D.fD_=new A.F4("Fireworks","Dice launch comets that burst in colour",D.c9r,D.cWO)
D.euB=new C.cM(["beat",0.15,0.2,2])
D.ev4=new C.cM(["chance",0.4,0.2,0])
D.euu=new C.cM(["ball",0.7,0.12,3])
D.euh=new C.cM(["chance",0.4,0.5,1])
D.evF=new C.cM(["ball",0.3,0.08,1])
D.eua=new C.cM(["ripple",0.7,0.55,3])
D.c2v=w([D.euB,D.ev4,D.euu,D.euh,D.evF,D.eua],x.e)
D.a4m=new C.z(3,4)
D.e69=new C.z(2,5)
D.cpq=w([O.n0,K.vC,K.a4k,D.a4m,D.e69],x.C)
D.fCY=new A.F4("Rain","Balls fall at random and splash",D.c2v,D.cpq)
D.ev5=new C.cM(["beat",0.12,0.45,2])
D.evw=new C.cM(["toggle",0.38,0.2,0])
D.evD=new C.cM(["wash",0.7,0.15,4])
D.euw=new C.cM(["count3",0.38,0.45,0])
D.evy=new C.cM(["burst",0.72,0.4,0])
D.euX=new C.cM(["light",0.55,0.7,1])
D.eui=new C.cM(["pop",0.8,0.8,4])
D.cZj=w([D.ev5,D.evw,D.evD,D.euw,D.evy,D.euX,D.eui],x.e)
D.e6v=new C.z(3,6)
D.c5C=w([O.n0,K.vC,K.a4k,D.a4m,D.aJk,D.e6v],x.C)
D.fCW=new A.F4("Disco","A beat drives lights, washes and bursts",D.cZj,D.c5C)
D.evI=new C.cM(["button",0.12,0.2,0])
D.euc=new C.cM(["delay",0.34,0.2,1])
D.evH=new C.cM(["light",0.56,0.2,1])
D.evC=new C.cM(["delay",0.56,0.45,1])
D.ev6=new C.cM(["ball",0.34,0.6,0])
D.eug=new C.cM(["delay",0.34,0.8,1])
D.eu6=new C.cM(["burst",0.7,0.8,5])
D.bQP=w([D.evI,D.euc,D.evH,D.evC,D.ev6,D.eug,D.eu6],x.e)
D.e8s=new C.z(5,6)
D.d2R=w([O.n0,K.vC,D.a4l,D.a4m,D.aJl,D.e8s],x.C)
D.fCX=new A.F4("Domino","Tap the button and watch it run down the line",D.bQP,D.d2R)
D.aul=w([D.fCZ,D.fD0,D.fD_,D.fCY,D.fCW,D.fCX],C.az("P<F4>"))
D.cUV=w([0.05,0.15,0.25],x.n)
D.cV8=w(["1 \xb7 Copy DNA","2 \xb7 Make RNA","3 \xb7 Build a protein"],x.s)
D.ah9=new A.qK(4,"deadOutlet")
D.cVo=w([D.Yb,D.Yc,D.Lz,D.LA,D.ah9,D.Yf,D.Yg,D.Yh,D.Yi,D.Yj,D.Yd,D.Ye],C.az("P<qK>"))
D.cVM=w([1.5,3,4.5,9,12],x.n)
D.cVQ=w([y.r,"Find the LINE and LOAD screws. LOAD is covered with yellow tape. Leave it covered unless you feed another outlet.",y.x,"Fasten the white wire to the silver LINE screw.","Fasten the black wire to the brass LINE screw.","Push the GFCI into the box and put the plate on.","Turn the power on, press RESET, then press TEST. It must click off."],x.s)
D.ere=new C.bz("dice","Dice",B.m7)
D.esc=new C.bz("coin","Coin",F.xw)
D.etL=new C.bz("num","Number",B.xG)
D.cVW=w([D.ere,D.esc,D.etL],x.c)
D.cVZ=w(["skin","muscle","organ","bone","vessel"],x.s)
D.foX=new A.Ob("Moon",1.62,0,4291941851)
D.foY=new A.Ob("Mars",3.71,0.01,4294472049)
D.foZ=new A.Ob("Earth",9.81,1,4281908728)
D.fp0=new A.Ob("Jupiter",24.79,1.4,4294677052)
D.fp_=new A.Ob("Sun",274,2,4294688548)
D.y5=w([D.foX,D.foY,D.foZ,D.fp0,D.fp_],C.az("P<Ob>"))
D.aur=w([B.cq,B.aM,B.bb,B.aV,B.bz,B.bY,B.cy,B.hr],x.O)
D.cWo=w([0.1,8.05],x.n)
D.frB=new A.ad(-0.35,11,-3.4)
D.fqS=new A.ad(-0.35,3.2,-3.2)
D.fsF=new A.ad(-0.35,2.2,-1.9)
D.fqh=new A.ad(-0.35,0.7,-1.5)
D.cWC=w([D.frB,D.fqS,D.fsF,D.fqh],x.o)
D.fus=new A.ad(5.2,7.5,-7.85)
D.fsv=new A.ad(5.2,4,-7.85)
D.cWI=w([D.fus,D.fsv],x.o)
D.dS6={H:0}
D.dcs=new C.br(D.dS6,[2],x.I)
D.de1=new A.rT("Hydrogen","H\u2082",D.dcs,"The lightest gas there is. Two hydrogen atoms share one bond.")
D.dS7={H:0,Cl:1}
D.dcE=new C.br(D.dS7,[1,1],x.I)
D.de3=new A.rT("Hydrogen chloride","HCl",D.dcE,"Dissolved in water it makes hydrochloric acid, which your stomach also makes to digest food.")
D.dS8={H:0,O:1}
D.dcb=new C.br(D.dS8,[2,1],x.I)
D.de4=new A.rT("Water","H\u2082O",D.dcb,"Oxygen needs 2 bonds, so it holds two hydrogens. The bent shape is why water is so good at dissolving things.")
D.dSl={N:0,H:1}
D.dd2=new C.br(D.dSl,[1,3],x.I)
D.dec=new A.rT("Ammonia","NH\u2083",D.dd2,"Nitrogen needs 3 bonds. Ammonia is used to make fertiliser that grows much of our food.")
D.a3t={C:0,H:1}
D.dcW=new C.br(D.a3t,[1,4],x.I)
D.de5=new A.rT("Methane","CH\u2084",D.dcW,"Carbon needs 4 bonds. Methane is the main gas in natural gas, and cows make it too.")
D.dS9={H:0,S:1}
D.dbk=new C.br(D.dS9,[2,1],x.I)
D.deb=new A.rT("Hydrogen sulfide","H\u2082S",D.dbk,"Sulfur acts like oxygen. This gas smells like rotten eggs.")
D.dSq={O:0}
D.dd_=new C.br(D.dSq,[2],x.I)
D.ded=new A.rT("Oxygen","O\u2082",D.dd_,"Each oxygen needs 2 bonds, so the two atoms share a DOUBLE bond (tap the pair twice). It is the air you breathe.")
D.dSk={N:0}
D.dct=new C.br(D.dSk,[2],x.I)
D.de2=new A.rT("Nitrogen","N\u2082",D.dct,"Each nitrogen needs 3 bonds, so two atoms share a TRIPLE bond. It is very strong, and fills 78% of the air.")
D.dRV={C:0,O:1}
D.dd8=new C.br(D.dRV,[1,2],x.I)
D.de9=new A.rT("Carbon dioxide","CO\u2082",D.dd8,"Carbon has 4 bonds: a double bond to each oxygen. Plants take it in, and you breathe it out.")
D.aDE={C:0,H:1,O:2}
D.db6=new C.br(D.aDE,[1,2,1],x.I)
D.dea=new A.rT("Formaldehyde","CH\u2082O",D.db6,"Carbon bonds to both hydrogens and double-bonds to the oxygen. It is used to preserve specimens.")
D.dcV=new C.br(D.a3t,[2,4],x.I)
D.de7=new A.rT("Ethene","C\u2082H\u2084",D.dcV,"Two carbons share a double bond, and each holds two hydrogens. Fruit gives it off to ripen.")
D.dcU=new C.br(D.a3t,[2,6],x.I)
D.de6=new A.rT("Ethane","C\u2082H\u2086",D.dcU,"Two carbons joined by a single bond, each holding three hydrogens.")
D.db7=new C.br(D.aDE,[1,4,1],x.I)
D.de8=new A.rT("Methanol","CH\u2083OH",D.db7,"The oxygen sits between the carbon and one hydrogen. Methanol is poisonous, and is used as a fuel.")
D.a13=w([D.de1,D.de3,D.de4,D.dec,D.de5,D.deb,D.ded,D.de2,D.de9,D.dea,D.de7,D.de6,D.de8],C.az("P<rT>"))
D.cWU=w([B.bY,B.aV,B.dM,B.bb],x.O)
D.dfH=new A.wZ("NGMY Ads","\ud83d\udce2","Every NGMY promotion, as cartoons",B.bY,-1)
D.dfE=new A.wZ("Civic Registry","\ud83e\udeaa","Enroll your family in your community",B.d6,0)
D.dfI=new A.wZ("Jobs","\ud83d\udcbc","Find work and get hired",B.aL,1)
D.dfF=new A.wZ("Growth Income","\ud83d\udcc8","Make your money grow",B.bl,2)
D.dfK=new A.wZ("NGMY Store","\ud83d\udecd\ufe0f","African food and traditions",B.fA,3)
D.dfG=new A.wZ("Kiswahili","\ud83d\udde3\ufe0f","Learn Swahili and English",B.bT,4)
D.dfJ=new A.wZ("Doc Scanner","\ud83d\udcc4","Scan, save and share",B.c8,5)
D.dfL=new A.wZ("Invoices","\ud83e\uddfe","Professional invoices",B.bA,6)
D.dfD=new A.wZ("Calendar","\ud83d\udcc5","This month, today lit up",B.aE,-2)
D.nL=w([D.dfH,D.dfE,D.dfI,D.dfF,D.dfK,D.dfG,D.dfJ,D.dfL,D.dfD],C.az("P<wZ>"))
D.aPQ=new A.ad(0,15.5,-3.6)
D.frI=new A.ad(0,20,-3.6)
D.fuO=new A.ad(0,22.5,-2)
D.fqE=new A.ad(0,22.5,1.1999999999999997)
D.frM=new A.ad(0,21.1,1.6)
D.cXf=w([D.aPQ,D.frI,D.fuO,D.fqE,D.frM],x.o)
D.cXO=w([],x.fq)
D.Gh=w([],x.Z)
D.cXP=w([],x.gm)
D.a1d=w([],x.dO)
D.cXV=w([],x.o)
D.dZx=new A.e7("battery","Battery","\ud83d\udd0b",B.bb,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.dZD=new A.e7("solar","Solar panel","\u2600\ufe0f",B.cr,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.e_h=new A.e7("crank","Hand crank","\ud83d\udd04",B.cy,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.dZU=new A.e7("turbine","Wind turbine","\ud83c\udf2c\ufe0f",B.aV,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.dZp=new A.e7("buck","Step-down converter","\ud83d\udd3d",B.hr,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.dZS=new A.e7("regulator","5 V regulator","\ud83e\uddca",B.bI,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.e_m=new A.e7("diode","Diode","\u27a1\ufe0f",B.aM,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.e_3=new A.e7("ldr","Light sensor","\ud83c\udf1e",B.dM,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.dZI=new A.e7("switch","Switch","\ud83c\udf9a\ufe0f",B.bz,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.e_j=new A.e7("fuse","Fuse","\ud83e\uddef",B.cq,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.dZh=new A.e7("pot","Dimmer knob","\ud83c\udf9b\ufe0f",B.hr,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.e_4=new A.e7("resistor","Resistor","\u3030\ufe0f",B.aM,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.e_6=new A.e7("bulb","Light bulb","\ud83d\udca1",B.dM,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.dZF=new A.e7("led","LED","\ud83d\udd34",B.aE,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.dZJ=new A.e7("motor","Motor","\u2699\ufe0f",B.bI,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.e_0=new A.e7("buzzer","Buzzer","\ud83d\udd14",B.bY,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.dZy=new A.e7("heater","Heater","\ud83d\udd25",B.cy,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.dZW=new A.e7("capacitor","Capacitor","\ud83e\udeab",B.cx,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.dZO=new A.e7("radio","Radio","\ud83d\udcfb",B.np,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.dZL=new A.e7("tv","Samsung Neo QLED 8K","\ud83d\udcfa",B.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.dZo=new A.e7("voltmeter","Voltmeter","\ud83e\udded",B.bs,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.dZv=new A.e7("ammeter","Ammeter","\ud83d\udcdf",B.aM,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.dZB=new A.e7("fan","Fan","\ud83c\udf00",B.aV,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.e_o=new A.e7("speaker","Speaker","\ud83d\udd0a",B.bY,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.e_d=new A.e7("clock","Digital clock","\u23f0",B.bb,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.dZR=new A.e7("calculator","Calculator","\ud83e\uddee",B.Jy,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.dZu=new A.e7("phone","iPhone 18 Pro Max","\ud83d\udcf1",B.cx,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.e_n=new A.e7("router","WiFi router","\ud83d\udcf6",B.hr,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.e_q=new A.e7("siren","Siren","\ud83d\udea8",B.aE,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.dZk=new A.e7("toycar","Toy car","\ud83d\ude97",B.cy,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.e_r=new A.e7("kettle","Kettle","\ud83e\uded6",B.o8,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.dZs=new A.e7("lamp","Desk lamp","\ud83e\ude94",B.dM,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.dZE=new A.e7("lights","Party lights","\ud83c\udf84",B.np,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.dZP=new A.e7("fridge","Fridge","\ud83e\uddca",B.fZ,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.dZm=new A.e7("washer","Washing machine","\ud83e\udee7",B.cx,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.e_e=new A.e7("blender","Blender","\ud83e\udd64",B.cq,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.dZM=new A.e7("drone","Drone","\ud83d\ude81",B.bI,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.dZr=new A.e7("drill","Power drill","\ud83d\udd29",B.aM,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.dZQ=new A.e7("torch","Torch","\ud83d\udd26",B.bJ,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.e_b=new A.e7("neon","Neon sign","\ud83e\udea7",B.bY,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.dZn=new A.e7("microwave","Microwave","\ud83c\udf72",B.cy,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.e_5=new A.e7("doorbell","Doorbell","\ud83d\udd14",B.cr,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.dZA=new A.e7("camera","Security camera","\ud83d\udcf7",B.ak,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.e__=new A.e7("console","Game console","\ud83c\udfae",B.bz,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.e_g=new A.e7("heartmon","Heart monitor","\ud83e\ude7a",B.fU,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.dZl=new A.e7("aquarium","Aquarium","\ud83d\udc20",B.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.dZV=new A.e7("lighthouse","Lighthouse","\ud83d\uddfc",B.dM,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.e_2=new A.e7("discoball","Disco ball","\ud83e\udea9",B.np,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.e_l=new A.e7("robot","Robot","\ud83e\udd16",B.aV,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.dZj=new A.e7("toaster","Toaster","\ud83c\udf5e",B.e1,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.e_p=new A.e7("ledstrip","LED strip","\ud83c\udf08",B.bY,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.e_a=new A.e7("pump","Water pump","\ud83d\udeb0",B.aV,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.dZX=new A.e7("hairdryer","Hair dryer","\ud83d\udca8",B.ji,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.e_8=new A.e7("headphones","Headphones","\ud83c\udfa7",B.bz,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.dZt=new A.e7("smartwatch","Apple Watch Ultra","\u231a",B.bs,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.e_k=new A.e7("tablet","iPad Pro M5","\ud83d\udcf2",B.cx,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.dZg=new A.e7("lgtv","LG OLED evo G5","\ud83d\udcfa",B.fU,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.dZN=new A.e7("sonytv","Sony Bravia 9","\ud83d\udcfa",B.bq,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.dZG=new A.e7("appletv","Apple TV 4K","\ud83d\udcfa",B.bX,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.e_1=new A.e7("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",D.JO,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.dZi=new A.e7("iphonefold","iPhone Fold","\ud83d\udcf1",B.b2,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.dZw=new A.e7("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",B.d6,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.e_i=new A.e7("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",B.cu,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.dZY=new A.e7("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",B.bl,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.dZT=new A.e7("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",B.cb,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.e_9=new A.e7("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",B.aE,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.dZH=new A.e7("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",B.bb,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.dZZ=new A.e7("honor","Honor Magic V5","\ud83d\udcf1",B.cx,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.e_7=new A.e7("vivo","vivo X300 Pro","\ud83d\udcf1",B.cy,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.e_c=new A.e7("ereader","Kindle Scribe","\ud83d\udcd6",B.bq,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.dZf=new A.e7("laptop","MacBook Pro M5 Max","\ud83d\udcbb",B.c8,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.dZK=new A.e7("imac","iMac 32 inch","\ud83d\udda5\ufe0f",B.cu,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.dZC=new A.e7("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",B.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.dZq=new A.e7("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",B.dM,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.dZz=new A.e7("carscreen","Luxury car touchscreen","\ud83d\ude98",B.aE,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.e_f=new A.e7("vision","Apple Vision Pro","\ud83e\udd7d",B.bz,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Pa=w([D.dZx,D.dZD,D.e_h,D.dZU,D.dZp,D.dZS,D.e_m,D.e_3,D.dZI,D.e_j,D.dZh,D.e_4,D.e_6,D.dZF,D.dZJ,D.e_0,D.dZy,D.dZW,D.dZO,D.dZL,D.dZo,D.dZv,D.dZB,D.e_o,D.e_d,D.dZR,D.dZu,D.e_n,D.e_q,D.dZk,D.e_r,D.dZs,D.dZE,D.dZP,D.dZm,D.e_e,D.dZM,D.dZr,D.dZQ,D.e_b,D.dZn,D.e_5,D.dZA,D.e__,D.e_g,D.dZl,D.dZV,D.e_2,D.e_l,D.dZj,D.e_p,D.e_a,D.dZX,D.e_8,D.dZt,D.e_k,D.dZg,D.dZN,D.dZG,D.e_1,D.dZi,D.dZw,D.e_i,D.dZY,D.dZT,D.e_9,D.dZH,D.dZZ,D.e_7,D.e_c,D.dZf,D.dZK,D.dZC,D.dZq,D.dZz,D.e_f],C.az("P<e7>"))
D.cYa=w([0,0.46,0.82],x.n)
D.cYl=w([5,10,15,25,45,60],x.t)
D.cYF=w([-0.045,0.03,-0.015],x.n)
D.cYO=w(["Look at the pieces: the tailpiece, the P-trap and the trap arm. Pick the tailpiece first and tap its glowing outline under the sink.","Pick the P-trap (the U-shaped bend) and tap its glowing outline. It joins the tailpiece.","Pick the trap arm and tap its outline. It joins the trap to the wall drain.","Slide each slip nut up to its joint and hand tighten it: tap the nuts.","Run the water and look for leaks. The U-bend keeps a plug of water that blocks sewer gas."],x.s)
D.cZ1=w([0.9,0.97,1],x.n)
D.auO=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.tD=w([0.05,0.2,0.35],x.n)
D.cGx=w([D.DS,D.DS],x.O)
D.cLt=w([B.E2,B.M],x.O)
D.cKz=w([B.fA,B.hq],x.O)
D.cEM=w([B.hc,B.no],x.O)
D.c24=w([B.lp,B.du],x.O)
D.auP=w([D.cGx,D.cLt,D.cKz,D.cEM,D.c24],x.gG)
D.fpA=new A.ad(11.4,4.6,-6)
D.frR=new A.ad(11.4,5,-7.85)
D.fqj=new A.ad(2.6,5,-7.85)
D.fqu=new A.ad(2.6,3.4,-7.85)
D.cZw=w([D.fpA,D.frR,D.fqj,D.fqu],x.o)
D.cZA=w(["hot","cold"],x.s)
D.fw9=new A.zB("black","Black \xb7 hot",D.ada,B.c,"hot")
D.fw8=new A.zB("white","White \xb7 neutral",D.wo,B.az,"neutral")
D.Pi=w([D.fw9,D.fw8,D.aQf],x.ak)
D.cZP=w([B.dW,B.f5],x.O)
D.foL=new A.uI("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.foM=new A.uI("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.foD=new A.uI("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.foK=new A.uI("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.foI=new A.uI("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.foE=new A.uI("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.foJ=new A.uI("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.foF=new A.uI("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.foH=new A.uI("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.foG=new A.uI("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Bt=w([D.foL,D.foM,D.foD,D.foK,D.foI,D.foE,D.foJ,D.foF,D.foH,D.foG],C.az("P<uI>"))
D.bax=new C.w(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,B.t)
D.d_6=w([D.DS,D.bax,D.abJ,B.abj],x.O)
D.aYg=new C.ac(0,B.G,B.hD,B.dz,6)
D.d_X=w([D.aYg],x.V)
D.elw=new C.z("Slab","First the concrete slab (the foundation) is poured and left to cure. Every wall sits on it.")
D.ent=new C.z("Framing","The carpenters build the wall frames from 2x4 studs, spaced 16 inches apart, with plates on the top and bottom.")
D.edt=new C.z("Plumbing rough-in","The plumber runs the hot (red) and cold (blue) water lines and the white drain pipes inside the walls and floor before anything is closed up.")
D.ejP=new C.z("Electrical rough-in","The electrician runs the yellow and white cables from the breaker panel to every box, and fixes the boxes to the studs.")
D.ekR=new C.z("Drywall","Drywall covers the frame. Here it is see-through so you can still look at the pipes and wires behind it.")
D.edS=new C.z("Fixtures","Last come the outlets, switches, light, sink, toilet and water heater. This is where most repairs happen.")
D.ef3=new C.z("Roof","The roof goes on to keep everything dry. It is see-through here so you can keep looking inside.")
D.d0q=w([D.elw,D.ent,D.edt,D.ejP,D.ekR,D.edS,D.ef3],x.L)
D.auZ=w([B.bL,B.cr,B.d2,B.az],x.O)
D.e50=new C.z(0,"AND")
D.e5D=new C.z(1,"Adder")
D.e6a=new C.z(2,"Blinker")
D.e6w=new C.z(3,"Memory")
D.d0E=w([D.e50,D.e5D,D.e6a,D.e6w],x.ek)
D.av0=w([-104,0,104],x.n)
D.av1=w([-14,3],x.n)
D.d14=w([-16,16],x.n)
D.vn=w([-1,1],x.n)
D.av2=w([-22,22],x.n)
D.av3=w([-24,24],x.n)
D.d17=w([-3,3],x.n)
D.av5=w([-5,5],x.n)
D.oA=w([-72,-24,24],x.t)
D.d19=w([-8,0,8],x.n)
D.d1a=w([-8,8],x.n)
D.av6=w([-92,0,92],x.n)
D.av7=w([-9,9],x.n)
D.d1u=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.ey0=new A.uv("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.ey7=new A.uv("Medium tank","Balanced.",0.35,1)
D.ey6=new A.uv("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Pn=w([D.ey0,D.ey7,D.ey6],x._)
D.d1J=w([B.aJ,B.ak],x.O)
D.d1N=w([1,2,3,4,6,8],x.n)
D.mX=w([0.04,0.2,0.36],x.n)
D.fwo=new A.uK("NGMY Civic Registry","Enroll your family. Stay counted and helped together.",B.dn,B.aV)
D.fwx=new A.uK("NGMY Jobs","Find work. Get hired. Get paid.",B.dm,B.aM)
D.fwu=new A.uK("Growth Income","Make your money grow every work day.",B.fX,B.ew)
D.fwv=new A.uK("NGMY Store","African food and traditions. Support our Congolese and African community.",B.jH,B.cr)
D.fws=new A.uK("Kiswahili School","Learn Swahili and English, step by step.",B.cY,B.mG)
D.fwr=new A.uK("Document Scanner","Scan, save and share your papers.",B.pd,B.fV)
D.fwp=new A.uK("Invoice Creator","Make professional invoices in minutes.",B.rF,B.o1)
D.fwm=new A.uK("Family Book and Tree","Write your family story. Grow your tree.",B.j1,B.Jv)
D.fwn=new A.uK("NGMY Wallet","Save, send and earn coins.",B.p8,B.dM)
D.fwq=new A.uK("Vault Games","Play, win and learn.",B.dW,B.ba)
D.fww=new A.uK("Electronics Lab","Build real circuits and learn.",B.hc,B.b4)
D.fwt=new A.uK("NGMY Helper and Advisors","Friendly help, any time.",B.lp,B.cy)
D.d29=w([D.fwo,D.fwx,D.fwu,D.fwv,D.fws,D.fwr,D.fwp,D.fwm,D.fwn,D.fwq,D.fww,D.fwt],C.az("P<uK>"))
D.avg=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.d2C=w([1,0.5,0.33,0.25,0.2,0.16,0.14,0.12],x.n)
D.fqm=new A.ad(8.2,5,-7.85)
D.fsy=new A.ad(8.2,1.2,-7.85)
D.ftH=new A.ad(8.2,1,-7.4)
D.d2G=w([D.fqm,D.fsy,D.ftH],x.o)
D.etu=new C.bz(D.aRF,"Fold",F.ajM)
D.esI=new C.bz(D.a7W,"Flip",B.F8)
D.bwp=new C.a_(62889,"MaterialIcons",!1)
D.etJ=new C.bz(D.aRG,"Rise",D.bwp)
D.ak_=new C.a_(983870,"MaterialIcons",!1)
D.eqP=new C.bz(D.a7X,"Assemble",D.ak_)
D.eqY=new C.bz(D.aRH,"Spin",D.aih)
D.eqV=new C.bz(D.aRI,"Pop",B.l3)
D.d2O=w([D.etu,D.esI,D.etJ,D.eqP,D.eqY,D.eqV],C.az("P<+(Ju,n,a_)>"))
D.avl=w([B.bY,B.dM,B.bs,B.aV,B.bz,B.cq],x.O)
D.dT9={hot:0}
D.aKw=new C.eV(D.dT9,1,x.M)
D.e2l=new A.Ea(61,"Hot shut-off valve (left)",D.aKw,"Hot is always on the LEFT. The red hose goes on the left valve.")
D.dSY={cold:0}
D.aKE=new C.eV(D.dSY,1,x.M)
D.e2m=new A.Ea(62,"Cold shut-off valve (right)",D.aKE,"Cold is always on the RIGHT. The blue hose goes on the right valve.")
D.e2j=new A.Ea(63,"Hot faucet inlet (left)",D.aKw,"The left faucet inlet takes the hot (red) hose.")
D.e2k=new A.Ea(64,"Cold faucet inlet (right)",D.aKE,"The right faucet inlet takes the cold (blue) hose.")
D.a1w=w([D.e2l,D.e2m,D.e2j,D.e2k],C.az("P<Ea>"))
D.d2Z=w([B.aV,B.cy,B.cy,B.bb],x.O)
D.d3a=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.epN=new C.z("Make the output turn HALF as fast as the input.",0.5)
D.ebH=new C.z("Make the output turn TWICE as fast.",2)
D.e5N=new C.z("Make the output turn 5 times SLOWER (like a clock reduction).",0.2)
D.eoz=new C.z("Make the output turn 4 times faster.",4)
D.eh6=new C.z("Make the output turn at exactly 1/3 of the speed.",0.3333333333333333)
D.ek5=new C.z("Make the output 10 times slower: a tiny speed, huge force!",0.1)
D.eiD=new C.z("Make the output turn 3 times faster.",3)
D.ejm=new C.z("Make the output spin at the same speed as the input, using four different gears.",1)
D.avq=w([D.epN,D.ebH,D.e5N,D.eoz,D.eh6,D.ek5,D.eiD,D.ejm],C.az("P<+(n,O)>"))
D.a1y=w([-72,-48,-24,0,24],x.t)
D.d3Z=w(["1 Rough-in","2 Drywall","3 Devices"],x.s)
D.d47=w([3,4.5,5,6,9],x.n)
D.d4f=w([1,2,3,4,5,6,7,8],x.n)
D.aYO=new C.ac(0,B.G,B.aW,B.J,16)
D.d4y=w([D.aYO],x.V)
D.Pp=w([B.bY,B.cr,B.bb,B.aV,B.bz,B.cq,B.c,B.cy],x.O)
D.err=new C.bz("hot","Hot hose (red)",D.rQ)
D.es5=new C.bz("cold","Cold hose (blue)",D.nn)
D.d4S=w([D.err,D.es5],C.az("P<+(n,n,w)>"))
D.d4Y=w(["solar","turbine","crank","pot"],x.s)
D.a79=new A.ad(15,2.6,0)
D.a1B=w([D.aQ_,D.a79],x.o)
D.d5h=w(["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],x.s)
D.d5m=w(["tail","trap","arm"],x.s)
D.d5n=w([0,0.35,0.75,1],x.n)
D.a1F=w(["tv","lamp","toaster","hairdryer"],x.s)
D.d5B=w([B.aE,B.cb,B.cr,B.bl,B.d6,B.b2],x.O)
D.er9=new C.bz("drop","Drop",D.ajB)
D.erb=new C.bz("weight","Weight",L.ak2)
D.etE=new C.bz("cannon","Newton's cannon",B.aj0)
D.d6_=w([D.er9,D.erb,D.etE],x.c)
D.d60=w([y.r,"Hold the fixture up to the ceiling box. It has three short wires: black, white and green.","Join the house ground wire to the fixture ground.","Join the house white wire to the fixture white wire with a wire nut.","Join the house black wire to the fixture black wire with a wire nut.","Push the wires into the box and fasten the fixture to the ceiling.",y.E],x.s)
D.end=new C.z("piano","Piano")
D.emU=new C.z("organ","Organ")
D.eik=new C.z("bell","Bell")
D.enf=new C.z("pluck","Pluck")
D.eoy=new C.z("synth","Synth")
D.ek0=new C.z("flute","Flute")
D.avH=w([D.end,D.emU,D.eik,D.enf,D.eoy,D.ek0],x.L)
D.d6r=w(["M","T","W","T","F","S","S"],x.s)
D.d6u=w(["volts","level","ohms","on"],x.s)
D.bua=new A.ma(21,"Brass screw (top): HOT side",D.HF,!1,"hot")
D.bu9=new A.ma(22,"Brass screw (bottom): HOT side",D.HF,!1,"hot")
D.bub=new A.ma(23,"Silver screw (top): NEUTRAL side",D.HD,!1,"neutral")
D.buf=new A.ma(24,"Silver screw (bottom): NEUTRAL side",D.HD,!1,"neutral")
D.bu3=new A.ma(25,"Green screw: GROUND",D.Rw,!1,"ground")
D.d6S=w([D.bua,D.bu9,D.bub,D.buf,D.bu3],x.r)
D.fyU=new A.lY("wall","Wall box",S.aiF)
D.fyT=new A.lY("ceiling","Ceiling box",B.qC)
D.fz1=new A.lY("fanbox","Fan box",L.M4)
D.fz7=new A.lY("drill","Drill",B.v0)
D.fz2=new A.lY("cable","Cable roll",D.aiu)
D.cJH=w([D.fyU,D.fyT,D.fz1,D.fz7,D.fz2],x.m)
D.fz6=new A.lY("sheet","Drywall sheet",B.B3)
D.fyW=new A.lY("knife","Drywall saw",B.F4)
D.fyV=new A.lY("screw","Screw gun",W.Fe)
D.fza=new A.lY("tape","Tape",B.tq)
D.fz5=new A.lY("mud","Mud",Af.Zj)
D.fzd=new A.lY("sand","Sander",B.F2)
D.bzr=new C.a_(985109,"MaterialIcons",!1)
D.fz_=new A.lY("paint","Roller",D.bzr)
D.cXq=w([D.fz6,D.fyW,D.fyV,D.fza,D.fz5,D.fzd,D.fz_],x.m)
D.ajm=new C.a_(983223,"MaterialIcons",!1)
D.fzb=new A.lY("outlet","Outlet",D.ajm)
D.fyY=new A.lY("gfci","GFCI",B.qM)
D.fz8=new A.lY("switch","Switch",D.MH)
D.fz4=new A.lY("light","Light",B.qJ)
D.bzp=new C.a_(985094,"MaterialIcons",!1)
D.fz0=new A.lY("fan","Fan",D.bzp)
D.fz3=new A.lY("tv","TV",M.ajK)
D.bxF=new C.a_(63571,"MaterialIcons",!1)
D.fyZ=new A.lY("lamp","Lamp",D.bxF)
D.bws=new C.a_(62944,"MaterialIcons",!1)
D.fyX=new A.lY("toaster","Toaster",D.bws)
D.bx1=new C.a_(63209,"MaterialIcons",!1)
D.fzc=new A.lY("hairdryer","Hair dryer",D.bx1)
D.fz9=new A.lY("tester","Tester",B.qH)
D.cOe=w([D.fzb,D.fyY,D.fz8,D.fz4,D.fz0,D.fz3,D.fyZ,D.fyX,D.fzc,D.fz9],x.m)
D.d7e=w([D.cJH,D.cXq,D.cOe],C.az("P<ak<lY>>"))
D.d7h=w([0.72,-0.72],x.n)
D.d7v=w([B.c,B.p1],x.O)
D.d7G=w([B.j8,B.B0,B.AQ,B.pu,A5.Fw,B.qM,B.xD,B.pz,B.hH,B.mU,B.h3,B.dS,B.hX,B.hY,B.m8,B.m9,B.xE,B.qP,B.ly,B.F0,B.tw,B.Mk,B.AS,B.ajw,B.M9,B.xz,B.Mi,B.aja,G.ajW,B.l3],x.x)
D.d7I=w(["inspect","hand","screwdriver","pliers","wrench","crimper","plunger","flapper","newoutlet","patch"],x.s)
D.d8b=w([1,0.18,0.06],x.n)
D.d8z=w([0.72,1],x.n)
D.d8H=w(["Look under the sink. The wall has two shut-off valves: hot on the LEFT (red handle) and cold on the RIGHT (blue handle).","Pick the red hot hose. Tap the left shut-off valve, then the left faucet inlet.","Pick the blue cold hose. Tap the right shut-off valve, then the right faucet inlet.","Open the valves slowly and turn on the faucet. Check every connection for drips."],x.s)
D.d8K=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.dT7={flange:0,wax:1,toilet:2,bolts:3,valve:4,hosehot:5,hosecold:6,faucet:7,tail:8,trap:9,arm:10}
D.daV=new C.br(D.dT7,["Flange","Wax ring","Toilet","Bolts","Shut-off valve","Hot hose","Cold hose","Faucet","Tailpiece","P-trap","Trap arm"],x.w)
D.dTw={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.db0=new C.br(D.dTw,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],x.w)
D.aDG={A:0,T:1,C:2,G:3}
D.a25=new C.br(D.aDG,["U","A","G","C"],x.w)
D.db8=new C.br(D.aDG,["T","A","G","C"],x.w)
D.dSh={Pentatonic:0,Major:1,Minor:2,Blues:3,Dreamy:4}
D.cWY=w([0,2,4,5,7,9,11],x.t)
D.cFR=w([0,2,3,5,7,8,10],x.t)
D.d0Q=w([0,3,5,6,7,10],x.t)
D.Bz=new C.br(D.dSh,[D.atO,D.cWY,D.cFR,D.d0Q,D.amt],C.az("br<n,ak<H>>"))
D.dTk={A:0,T:1,U:2,C:3,G:4}
D.dbn=new C.br(D.dTk,[B.cq,B.cx,B.cx,B.aM,B.bb],C.az("br<n,w>"))
D.dRG={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.fwL=new A.xC("Switch",D.MH,B.cr,0,"Tap it to turn it ON or OFF.")
D.fwH=new A.xC("Blinker",B.op,B.bs,0,"Turns itself ON and OFF. Tap to change the speed.")
D.fwI=new A.xC("AND",D.ak_,B.cx,2,"ON only when BOTH inputs are ON.")
D.bxS=new C.a_(63671,"MaterialIcons",!1)
D.fwG=new A.xC("OR",D.bxS,B.bz,2,"ON when EITHER input is ON.")
D.fwJ=new A.xC("XOR",I.Za,B.bY,2,"ON when the inputs are DIFFERENT.")
D.fwD=new A.xC("NAND",B.tl,B.aV,2,"OFF only when BOTH inputs are ON.")
D.bwY=new C.a_(63176,"MaterialIcons",!1)
D.fwE=new A.xC("NOR",D.bwY,B.hr,2,"ON only when BOTH inputs are OFF.")
D.fwF=new A.xC("NOT",X.Fs,B.cy,1,"Flips the signal: ON becomes OFF.")
D.fwK=new A.xC("Light",B.qJ,B.dM,1,"Glows when its input is ON.")
D.fwM=new A.xC("Buzzer",B.nF,B.cq,1,"Beeps while its input is ON.")
D.yh=new C.br(D.dRG,[D.fwL,D.fwH,D.fwI,D.fwG,D.fwJ,D.fwD,D.fwE,D.fwF,D.fwK,D.fwM],C.az("br<n,xC>"))
D.dTi={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.erx=new C.bz(3,20,1.9)
D.er5=new C.bz(33,90,1.6)
D.eu1=new C.bz(52,15,3.2)
D.eu_=new C.bz(45,-100,1.8)
D.esC=new C.bz(-15,-60,1.9)
D.es8=new C.bz(-25,140,2.4)
D.es_=new C.bz(-82,0,2.2)
D.aB7=new C.br(D.dTi,[D.erx,D.er5,D.eu1,D.eu_,D.esC,D.es8,D.es_],C.az("br<n,+(O,O,O)>"))
D.dS5={"SPARK PAINTER":0,"MANDALA MAKER":1,"TITLE ANIMATOR":2,"PALETTE LAB":3,"GRAVITY TOY":4,"ORBIT STUDIO":5,"SWARM STUDIO":6,"FIREWORK DESIGNER":7,"CHAIN BURST":8,"CIRCUIT LAB":9,"PERIODIC TABLE":10,"BODY EXPLORER":11,"SPIN THE WHEEL":12,"FOCUS TIMER":13,"MEMORY MATCH":14,"LUCKY POCKET":15,"ELECTRONICS LAB":16,"CONSTRUCTION LAB":17,"AI INVENTOR":18,"MAGNET LAB":19,"RADIO LAB":20,"POWER PLANT":21,"POWER GRID":22,"INTERNET JOURNEY":23,"ROBOT CODER":24,"BUG SMASHER":25,"ROCKET LANDER":26,"DATA SNAKE":27,"BINARY 2048":28,"SIGNAL BREAKER":29,"PASSWORD LAB":30,"WAVE LAB":31,"BUG HUNT":32,"MOLECULE MAKER":33,"DNA LAB":34,"ECOSYSTEM LAB":35,"BALANCE LAB":36,"GEAR LAB":37,"OPTICS LAB":38,"LASER MAZE":39,"LIGHT MIXER":40,"ATOM BUILDER":41,"CIPHER LAB":42,"PIXEL TV":43}
D.aB8=new C.br(D.dS5,["sparkle","sparkle","whoosh","click","bounce","space","bubble","pop","zap","tech","lab","organic","click","tech","bubble","click","tech","tech","tech","tech","tech","tech","tech","tech","tech","pop","space","bubble","click","zap","click","tech","click","lab","organic","organic","click","tech","sparkle","zap","sparkle","lab","tech","tech"],x.w)
D.cFh=w([B.A],x.R)
D.cFz=w([B.ax,B.aC],x.R)
D.cNX=w([B.ax,B.A,B.aC],x.R)
D.cPi=w([B.ax,B.kV,B.A,B.lk,B.aC],x.R)
D.d0A=w([B.ax,B.kV,B.a3,B.a7,B.lk,B.aC],x.R)
D.dci=new C.dI([1,D.cFh,2,D.cFz,3,D.cNX,4,B.avM,5,D.cPi,6,D.d0A],C.az("dI<H,ak<da>>"))
D.btm=new A.tV("The living room has no power at all.","The living room breaker is sitting in the middle (orange). It has tripped. Flip it fully OFF and ON again, by hand.","hand","Breaker reset. The living room has power again.",72,0,"")
D.btw=new A.tV("There is no hot water.","The water heater breaker has tripped (orange). Reset it by hand.","hand","Breaker reset. The water heater is heating again.",75,0,"")
D.btt=new A.tV("Water is dripping under the kitchen sink.","The slip nut on the P-trap is loose and the joint drips. Tighten it with the wrench.","wrench","Slip nut tightened. The drip stopped.",87,0,"")
D.btl=new A.tV("There is a wet spot on the wall behind the kitchen.","A crimped joint in the hot water line is leaking. A crimp joint is squeezed with a crimping tool, not tightened with a wrench.","crimper","The joint is crimped again and it does not leak.",96,0,"")
D.btq=new A.tV("The outlet by the sofa does not work, but the lights do.","The tester finds power at the box but the outlet is dead: a screw on the outlet has come loose. Turn the breaker off first, then tighten the screws with the screwdriver.","screwdriver","You tightened the loose screw. The outlet works again.",81,72,"Turn the living room breaker OFF first.")
D.btn=new A.tV("The living room light flickers.","A wire nut in the light box has worked loose. Turn the breaker off, then twist the wire nut tight with the pliers.","pliers","You twisted the wire nut tight. The light is steady.",83,72,"Turn the living room breaker OFF first.")
D.bto=new A.tV("The kitchen outlet sparks and smells burnt.","The outlet has burnt. Turn the breaker off and replace it with a new outlet.","newoutlet","New outlet fitted. No more sparks.",84,73,"Turn the kitchen breaker OFF first.")
D.btu=new A.tV("The kitchen outlets are dead.","The GFCI outlet has tripped. Press its RESET button by hand.","hand","You pressed RESET. The kitchen outlets work.",84,0,"")
D.btp=new A.tV("The toilet keeps running.","The rubber flapper in the tank no longer seals, so water leaks into the bowl all the time. Replace the flapper.","flapper","New flapper fitted. The toilet stops running.",88,0,"")
D.bts=new A.tV("The kitchen faucet drips.","The faucet washer is worn. Tighten the packing nut with the wrench, then check.","wrench","The faucet is sealed. No more drips.",85,0,"")
D.btr=new A.tV("There is a hole in the wall.","A hole in the drywall. Stick a drywall patch over it, then tape, mud, sand and paint it.","patch","Patch fitted. Now it only needs mud, sanding and paint.",95,0,"")
D.btv=new A.tV("The kitchen sink drains very slowly.","The drain is clogged. Use the plunger.","plunger","The clog is gone. The sink drains fast.",94,0,"")
D.vp=new C.dI([D.Yb,D.btm,D.Yc,D.btw,D.Lz,D.btt,D.LA,D.btl,D.ah9,D.btq,D.Yf,D.btn,D.Yg,D.bto,D.Yh,D.btu,D.Yi,D.btp,D.Yj,D.bts,D.Yd,D.btr,D.Ye,D.btv],C.az("dI<qK,tV>"))
D.dSi={H:0,C:1,N:2,O:3,S:4,Cl:5}
D.esO=new C.bz(1,B.bX,"Hydrogen")
D.erM=new C.bz(4,B.bo,"Carbon")
D.eqQ=new C.bz(3,B.d6,"Nitrogen")
D.et5=new C.bz(2,B.aE,"Oxygen")
D.esw=new C.bz(2,B.cr,"Sulfur")
D.etB=new C.bz(1,B.bl,"Chlorine")
D.vq=new C.br(D.dSi,[D.esO,D.erM,D.eqQ,D.et5,D.esw,D.etB],C.az("br<n,+(H,w,n)>"))
D.dTB={Calm:0,Box:1,Sleep:2}
D.cmW=w([4,2,6,0],x.n)
D.cn2=w([4,4,4,4],x.n)
D.cn3=w([4,7,8,0],x.n)
D.PO=new C.br(D.dTB,[D.cmW,D.cn2,D.cn3],C.az("br<n,ak<O>>"))
D.dcK=new C.br(B.ia,[],C.az("br<H,dM>"))
D.dRP={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.w3=new A.a_3(0,"source")
D.cOQ=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.fBC=new A.pK("Clock",B.op,D.w3,B.bs,D.cOQ)
D.fBy=new A.pK("Button",B.xI,D.w3,B.aM,B.T)
D.d4j=w(["random","quick","slow"],x.s)
D.fBJ=new A.pK("Dice",B.m7,D.w3,B.bY,D.d4j)
D.bxx=new C.a_(63484,"MaterialIcons",!1)
D.CV=new A.a_3(1,"logic")
D.d8u=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.fBF=new A.pK("Delay",D.bxx,D.CV,B.cx,D.d8u)
D.cYs=w(["fast","mid","slow"],x.s)
D.fBK=new A.pK("Echo",B.ajp,D.CV,B.bz,D.cYs)
D.fBH=new A.pK("Every 2nd",X.Fs,D.CV,B.hr,B.T)
D.bxc=new C.a_(63309,"MaterialIcons",!1)
D.fBE=new A.pK("Every 3rd",D.bxc,D.CV,B.aV,B.T)
D.bz8=new C.a_(983902,"MaterialIcons",!1)
D.bQf=w(["50%","25%","75%"],x.s)
D.fBM=new A.pK("Chance",D.bz8,D.CV,B.cy,D.bQf)
D.q4=new A.a_3(2,"out")
D.fBA=new A.pK("Light",B.qJ,D.q4,B.dM,B.T)
D.fBB=new A.pK("Burst",B.l3,D.q4,B.bY,B.T)
D.fBz=new A.pK("Ripple",B.xM,D.q4,B.ba,B.T)
D.fBI=new A.pK("Ball",B.ajD,D.q4,B.cy,B.T)
D.fBG=new A.pK("Comet",B.mU,D.q4,B.bz,B.T)
D.byU=new C.a_(983669,"MaterialIcons",!1)
D.fBL=new A.pK("Shake",D.byU,D.q4,B.cq,B.T)
D.fBN=new A.pK("Pop",B.F1,D.q4,B.bb,B.T)
D.fBD=new A.pK("Wash",B.Mn,D.q4,B.p4,B.T)
D.mi=new C.br(D.dRP,[D.fBC,D.fBy,D.fBJ,D.fBF,D.fBK,D.fBH,D.fBE,D.fBM,D.fBA,D.fBB,D.fBz,D.fBI,D.fBG,D.fBL,D.fBN,D.fBD],C.az("br<n,pK>"))
D.dT5={tail:0,trap:1,arm:2}
D.dcZ=new C.br(D.dT5,["Tailpiece","P-trap","Trap arm"],x.w)
D.dd0=new C.dI([25,"ground",23,"white"],x.gu)
D.dTl={F:0,L:1,S:2,Y:3,C:4,W:5,P:6,H:7,Q:8,R:9,I:10,M:11,T:12,N:13,K:14,V:15,A:16,D:17,E:18,G:19}
D.BA=new C.br(D.dTl,["Phenylalanine","Leucine","Serine","Tyrosine","Cysteine","Tryptophan","Proline","Histidine","Glutamine","Arginine","Isoleucine","Methionine","Threonine","Asparagine","Lysine","Valine","Alanine","Aspartate","Glutamate","Glycine"],x.w)
D.dS0={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.yI=new A.Iq(0,"tv")
D.ezt=new A.lU("Samsung Neo QLED 8K",D.yI,D.V9,B.aV)
D.ezk=new A.lU("LG OLED evo G5",D.yI,B.eg,B.fU)
D.ezb=new A.lU("Sony Bravia 9",D.yI,B.qg,B.bq)
D.ezf=new A.lU("Apple TV 4K",D.yI,B.e2,B.bX)
D.ezc=new A.lU("Bang and Olufsen Beovision",D.yI,D.aaE,D.JO)
D.Hy=new A.Iq(1,"iphone")
D.aJZ=new A.lU("iPhone 18 Pro Max",D.Hy,D.adL,B.c8)
D.vF=new A.Iq(3,"fold")
D.bfY=new C.w(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,B.t)
D.ezp=new A.lU("iPhone Fold",D.vF,D.bfY,B.b2)
D.u1=new A.Iq(2,"android")
D.b3g=new C.w(1,0.16862745098039217,0.1843137254901961,0.21176470588235294,B.t)
D.ezq=new A.lU("Samsung Galaxy S26 Ultra",D.u1,D.b3g,B.d6)
D.ba6=new C.w(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,B.t)
D.ezi=new A.lU("Samsung Galaxy Z Fold7",D.vF,D.ba6,B.cu)
D.eze=new A.lU("Google Pixel 10 Pro XL",D.u1,B.e0,B.bl)
D.ezm=new A.lU("Xiaomi 16 Ultra",D.u1,B.mJ,B.cb)
D.ezh=new A.lU("Huawei Mate 80 Pro Max",D.u1,B.f0,B.aE)
D.ezd=new A.lU("OPPO Find X9 Ultra",D.u1,B.e7,B.bb)
D.ezv=new A.lU("Honor Magic V5",D.vF,B.dn,B.cx)
D.ezj=new A.lU("vivo X300 Pro",D.u1,B.hq,B.cy)
D.Rh=new A.Iq(4,"tablet")
D.ezo=new A.lU("iPad Pro M5",D.Rh,B.e0,B.aV)
D.a4C=new A.Iq(5,"reader")
D.ezw=new A.lU("Kindle Scribe",D.a4C,B.es,B.bq)
D.yJ=new A.Iq(6,"computer")
D.ezn=new A.lU("MacBook Pro M5 Max",D.yJ,B.e0,B.c8)
D.ezs=new A.lU("iMac 32 inch",D.yJ,B.bX,B.cu)
D.ezl=new A.lU("Pro Display XDR 8K",D.yJ,B.mJ,B.ba)
D.ezg=new A.lU("Sony Laser Projector",D.yJ,B.cC,B.dM)
D.ezr=new A.lU("Luxury car touchscreen",D.yJ,G.o9,B.aE)
D.ezu=new A.lU("Apple Vision Pro",D.yJ,B.k7,B.bz)
D.lE=new C.br(D.dS0,[D.ezt,D.ezk,D.ezb,D.ezf,D.ezc,D.aJZ,D.ezp,D.ezq,D.ezi,D.eze,D.ezm,D.ezh,D.ezd,D.ezv,D.ezj,D.ezo,D.ezw,D.ezn,D.ezs,D.ezl,D.ezg,D.ezr,D.ezu],C.az("br<n,lU>"))
D.dSc={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bic=new A.fI(20,4,13,!1)
D.biD=new A.fI(14,5,13.5,!1)
D.biu=new A.fI(9,2.4,10,!1)
D.biI=new A.fI(7,5,12.5,!1)
D.bix=new A.fI(8,3.5,12,!1)
D.bi8=new A.fI(15,2,6,!1)
D.biG=new A.fI(45,6,13.5,!0)
D.bio=new A.fI(10,8,13.5,!1)
D.big=new A.fI(25,3,12,!0)
D.bim=new A.fI(35,4,12,!0)
D.bin=new A.fI(40,4.5,9.5,!0)
D.bip=new A.fI(55,3,9,!0)
D.bi9=new A.fI(18,3,9,!1)
D.biF=new A.fI(22,4,13.5,!1)
D.biy=new A.fI(16,5,13.5,!1)
D.bik=new A.fI(30,4,9,!0)
D.biR=new A.fI(5,3.5,13,!1)
D.bis=new A.fI(25,3,13.5,!0)
D.biB=new A.fI(14,2.5,9,!1)
D.bir=new A.fI(6,6,13,!1)
D.biJ=new A.fI(30,1.2,5,!0)
D.biQ=new A.fI(35,3,4.5,!0)
D.biM=new A.fI(20,4.5,7.5,!0)
D.biq=new A.fI(55,5.5,13.5,!0)
D.bi7=new A.fI(45,5.5,13.5,!0)
D.biC=new A.fI(40,5.5,13.5,!0)
D.biP=new A.fI(60,6,13.5,!0)
D.aea=new A.fI(28,4,7,!0)
D.Ef=new A.fI(25,4,7,!0)
D.bij=new A.fI(30,4,7,!0)
D.bie=new A.fI(22,4,7,!0)
D.bif=new A.fI(24,4,7,!0)
D.bit=new A.fI(60,3,5.5,!0)
D.bia=new A.fI(18,9,14,!0)
D.bih=new A.fI(25,9,14,!0)
D.aeb=new A.fI(30,8,14,!0)
D.bid=new A.fI(20,8,14,!0)
D.bil=new A.fI(30,9,14,!0)
D.biK=new A.fI(22,5,9.5,!0)
D.bib=new A.fI(30,2.5,10.5,!0)
D.biz=new A.fI(50,5.5,13.5,!0)
D.biO=new A.fI(12,2,9.5,!1)
D.biw=new A.fI(16,1.3,9.5,!0)
D.biH=new A.fI(40,2.5,7,!0)
D.biN=new A.fI(60,1.2,4.8,!0)
D.biL=new A.fI(18,5,13.5,!0)
D.biE=new A.fI(8,2,9.5,!1)
D.biv=new A.fI(12,2.5,8,!1)
D.bii=new A.fI(20,3.5,13.5,!0)
D.biA=new A.fI(3.5,3,13,!1)
D.yi=new C.br(D.dSc,[D.bic,D.biD,D.biu,D.biI,D.bix,D.bi8,D.biG,D.bio,D.big,D.bim,D.bin,D.bip,D.bi9,D.biF,D.biy,D.bik,D.biR,D.bis,D.biB,D.bir,D.biJ,D.biQ,D.biM,D.biq,D.bi7,D.biC,D.biP,D.aea,D.Ef,D.bij,D.Ef,D.bie,D.Ef,D.bif,D.aea,D.Ef,D.bit,D.bia,D.bih,D.aeb,D.bid,D.bil,D.biK,D.bib,D.biz,D.biO,D.biw,D.biH,D.biN,D.Ef,D.aeb,D.biL,D.biE,D.biv,D.bii,D.biA],C.az("br<n,fI>"))
D.fts=new A.ad(0,0,-1.2)
D.dQV=new A.dM("Electrical box","The box is ready. Pull a cable to it, then wire a device.",D.fts,9)
D.ddm=new C.dI([3,D.dQV],C.az("dI<H,dM>"))
D.ddp=new C.dI([25,"ground"],x.gu)
D.aDB={inspect:0,hand:1,screwdriver:2,pliers:3,wrench:4,crimper:5,plunger:6,flapper:7,newoutlet:8,patch:9}
D.PR=new C.br(D.aDB,["Look and test","Hand","Screwdriver","Pliers","Wrench","Crimp tool","Plunger","New flapper","New outlet","Drywall patch"],x.w)
D.bwN=new C.a_(63072,"MaterialIcons",!1)
D.ddr=new C.br(D.aDB,[B.fw,D.ajV,W.Fe,B.F4,B.qE,D.bwN,N.ZQ,B.ot,D.ajm,Y.v1],C.az("br<n,a_>"))
D.dRO={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eqm=new C.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.e8p=new C.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.e8k=new C.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ejl=new C.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.ekh=new C.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ejh=new C.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.e6B=new C.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.ehm=new C.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eqv=new C.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.ekC=new C.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eb8=new C.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.e6l=new C.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ead=new C.z("Movement","They pull your legs together and help you balance.")
D.ec_=new C.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.e8x=new C.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eo9=new C.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.epb=new C.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eh7=new C.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eoW=new C.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.efT=new C.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ekK=new C.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.e6q=new C.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.ecm=new C.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.ekr=new C.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.ega=new C.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.ep3=new C.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eiP=new C.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.e6z=new C.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.elf=new C.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.enN=new C.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.em6=new C.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.e5a=new C.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eix=new C.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eiB=new C.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.ed_=new C.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.e8D=new C.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.ebP=new C.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.ehv=new C.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.emN=new C.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eqs=new C.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.ekH=new C.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.e4Y=new C.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.ehG=new C.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.e5w=new C.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.en2=new C.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eo5=new C.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.ei5=new C.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.enh=new C.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.e6s=new C.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eoB=new C.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.e9G=new C.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.emv=new C.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.ecI=new C.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eg6=new C.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.el_=new C.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eoL=new C.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eoD=new C.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eoH=new C.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.egz=new C.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.elM=new C.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.em3=new C.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eoq=new C.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.ei4=new C.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eey=new C.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.edq=new C.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eis=new C.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.ekT=new C.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ef2=new C.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.efH=new C.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ea_=new C.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eo1=new C.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eaL=new C.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.e5t=new C.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.ecZ=new C.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.e5o=new C.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.e8X=new C.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.ed3=new C.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eaU=new C.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.elb=new C.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.ec2=new C.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eq9=new C.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.edz=new C.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.egt=new C.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eiW=new C.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eb0=new C.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eaN=new C.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dds=new C.br(D.dRO,[D.eqm,D.e8p,D.e8k,D.ejl,D.ekh,D.ejh,D.e6B,D.ehm,D.eqv,D.ekC,D.eb8,D.e6l,D.ead,D.ec_,D.e8x,D.eo9,D.epb,D.eh7,D.eoW,D.efT,D.ekK,D.e6q,D.ecm,D.ekr,D.ega,D.ep3,D.eiP,D.e6z,D.elf,D.enN,D.em6,D.e5a,D.eix,D.eiB,D.ed_,D.e8D,D.ebP,D.ehv,D.emN,D.eqs,D.ekH,D.e4Y,D.ehG,D.e5w,D.en2,D.eo5,D.ei5,D.enh,D.e6s,D.eoB,D.e9G,D.emv,D.ecI,D.eg6,D.el_,D.eoL,D.eoD,D.eoH,D.egz,D.elM,D.em3,D.eoq,D.ei4,D.eey,D.edq,D.eis,D.ekT,D.ef2,D.efH,D.ea_,D.eo1,D.eaL,D.e5t,D.ecZ,D.e5o,D.e8X,D.ed3,D.eaU,D.elb,D.ec2,D.eq9,D.edz,D.egt,D.eiW,D.eb0,D.eaN],C.az("br<n,+(n,n)>"))
D.ddu=new C.hr(B.G,11)
D.ddz=new C.hr(B.G,30)
D.ddB=new C.hr(B.G,1.2)
D.dgl=new A.T6(null)
D.dk9=new A.Ta(null)
D.dka=new A.Tb(null)
D.dkn=new A.Tc(null)
D.dmo=new A.Te(null)
D.dmp=new A.Tf(null)
D.dmq=new A.Tg(null)
D.aCk=new A.Mm(null)
D.dnd=new A.TC(null)
D.dnf=new A.TR(null)
D.dng=new A.TS(null)
D.dnh=new A.TT(null)
D.dnP=new A.U_(null)
D.dpK=new A.U3(null)
D.dpL=new A.U5(null)
D.dpM=new A.U6(null)
D.dpO=new A.U7(null)
D.drn=new A.Uo(null)
D.drp=new A.Uq(null)
D.dru=new A.UA(null)
D.drF=new A.UB(null)
D.dsa=new A.UC(null)
D.dtF=new A.UE(null)
D.dv2=new A.UG(null)
D.dv3=new A.UH(null)
D.dv7=new A.MV(!1,null)
D.dv8=new A.MV(!0,null)
D.dwq=new A.UJ(null)
D.dMj=new A.UK(null)
D.dMk=new A.UM(null)
D.dMl=new A.MY(!1,null)
D.dMm=new A.MY(!0,null)
D.dMn=new A.UP(null)
D.dMo=new A.UQ(null)
D.dOh=new A.UY(null)
D.dOi=new A.UZ(null)
D.dOq=new A.V5(null)
D.dOz=new A.V9(null)
D.dOA=new A.Va(null)
D.dOB=new A.a7_(null)
D.dPb=new A.Vc(null)
D.dQE=new A.Vg(null)
D.fuC=new A.ad(16,2.6,0)
D.dQF=new A.dM("Wall drain","The pipe stub that comes out of the wall. The trap arm slides into it.",D.fuC,8)
D.fpm=new A.ad(0,3,-6)
D.dQG=new A.dM("Wall","The copper supply pipes come out of the wall here.",D.fpm,24)
D.ft7=new A.ad(8.2,1,-7)
D.dQH=new A.dM("Toilet","The tank fills from the cold supply on the wall. The bowl drains into the white pipe in the floor.",D.ft7,7)
D.fpe=new A.ad(0,0,40)
D.dQI=new A.dM("The room","A room to build from bare studs to finished, working electrics. The walls hold the cable, the boxes and the devices.",D.fpe,190)
D.frx=new A.ad(-2.4,11.5,-3.6)
D.dQJ=new A.dM("Hot faucet inlet","The threaded tail under the faucet where the hot supply hose screws on.",D.frx,7)
D.fpP=new A.ad(-3.6,4,-7.8)
D.dQK=new A.dM("Light switch","Controls the ceiling light. Tap Open lesson to wire one.",D.fpP,4.5)
D.fsf=new A.ad(0,0.5,2)
D.dQL=new A.dM("Voltage tester","A tester that glows when it touches live power.",D.fsf,6)
D.dQM=new A.dM("Pipe joint","A crimped joint in the hot water line.",D.aPC,4)
D.frL=new A.ad(0,-0.2,0.2)
D.dQN=new A.dM("Cover plate","The plate covers the box and the edges of the drywall so nobody touches the wires.",D.frL,8)
D.fu0=new A.ad(-4.6,0.5,-3.4)
D.dQO=new A.dM("Hot shut-off valve","The angle stop valve on the hot pipe. Turn the handle to stop the water to the faucet without shutting off the whole house. Hot is always on the left.",D.fu0,8)
D.fsN=new A.ad(0,-0.3,3.2)
D.dQP=new A.dM("White wire nut: NEUTRAL","Twist the house white wire and the fixture white wire together under this cap.",D.fsN,6)
D.fsa=new A.ad(4.6,0.5,-3.4)
D.dQQ=new A.dM("Cold shut-off valve","The angle stop valve on the cold pipe. Cold is always on the right.",D.fsa,8)
D.fpI=new A.ad(2.4,11.5,-3.6)
D.dQR=new A.dM("Cold faucet inlet","The threaded tail under the faucet where the cold supply hose screws on.",D.fpI,7)
D.fv2=new A.ad(0.8,-0.8,1.2)
D.dQS=new A.dM("Black wire to the light","This black wire carries power to the light once the switch is on. It goes on the other brass screw.",D.fv2,7)
D.fru=new A.ad(10.05,5.2,-7.5)
D.dQT=new A.dM("Water heater breaker","A big circuit for the water heater. It is ON.",D.fru,3.5)
D.ft2=new A.ad(3,3.8,-7.4)
D.dQU=new A.dM("Kitchen faucet","Hot on the left, cold on the right. Tap Open lesson to connect the supply hoses.",D.ft2,4.5)
D.fpr=new A.ad(0,6,0)
D.dQW=new A.dM("Tailpiece","The straight pipe that hangs from the sink drain. Its bottom end is smooth so the slip nut can slide on and grip it.",D.fpr,10)
D.fpZ=new A.ad(3,1,0)
D.dQX=new A.dM("P-trap","The U-shaped bend. It always keeps a little water inside, and that water plug blocks sewer gas from coming back up into the house.",D.fpZ,11)
D.fpl=new A.ad(0,20,5)
D.dQY=new A.dM("The room","A bare room with the water supply stubs and the drain stub already in the wall and floor.",D.fpl,120)
D.fpt=new A.ad(0,-8,0)
D.dQZ=new A.dM("Cabinet","The cabinet under the sink where the drain is built.",D.fpt,22)
D.fpp=new A.ad(0,4,-8)
D.dR_=new A.dM("Wall framing","2x4 studs 16 inches apart. Pipes and cables run through holes drilled in the middle of the studs, never along the edge where a nail could hit them.",D.fpp,18)
D.aPL=new A.ad(0,-0.2,5.1)
D.dR0=new A.dM("TEST and RESET buttons","Press TEST to make the GFCI trip. Press RESET to turn it back on. Test it once a month.",D.aPL,5)
D.fph=new A.ad(0,11,0)
D.dR1=new A.dM("Sink","The sink bowl and the counter. The drain flange at the bottom is where the tailpiece starts.",D.fph,16)
D.It=new A.ad(0,0,0)
D.dR2=new A.dM("Drywall","The wall surface. A hole is cut in it for the electrical box.",D.It,22)
D.fpj=new A.ad(0,14,-3)
D.dR3=new A.dM("Counter and sink","The faucet is mounted through a hole in the counter.",D.fpj,20)
D.fqZ=new A.ad(0,-1.9,5)
D.dR4=new A.dM("GREEN screw: GROUND","The green screw is for the bare copper ground wire.",D.fqZ,5)
D.fpo=new A.ad(0,47,-2)
D.dR5=new A.dM("Top and bottom plate","The horizontal 2x4s at the top and the bottom of the wall. The studs stand between them.",D.fpo,70)
D.fpg=new A.ad(0,0,-8)
D.dR6=new A.dM("Wall","Behind the wall the drain pipe goes down to the sewer line.",D.fpg,22)
D.fpk=new A.ad(0,19,-3)
D.dR7=new A.dM("Faucet","The faucet with hot on the left (red) and cold on the right (blue).",D.fpk,14)
D.fqp=new A.ad(3.5,2,-7.2)
D.dR8=new A.dM("Kitchen counter and cabinet","The cabinet under the sink is where the drain and the shut-off valves live.",D.fqp,9)
D.fr8=new A.ad(10.05,5.7,-7.5)
D.dR9=new A.dM("Kitchen breaker","Protects the kitchen outlets. It is ON.",D.fr8,3.5)
D.frD=new A.ad(4,6,-2.5)
D.dRa=new A.dM("Cold supply hose","A braided steel hose with a rubber liner and a blue band.",D.frD,9)
D.fse=new A.ad(-1,0.6,4.3)
D.dRb=new A.dM("SILVER screw: NEUTRAL side",y.o,D.fse,5)
D.a75=new A.ad(0,3.7,0)
D.dRc=new A.dM("Slip nut","A big plastic nut. Slide it on the pipe first, then the washer, then join the pieces and hand tighten. A rubber washer inside makes the seal.",D.a75,7)
D.SX=new A.ad(0,-1,-0.6)
D.dRd=new A.dM("Wire nut","A twist-on cap that joins wires safely. The two white wires are joined here because a switch only cuts the hot wire.",D.SX,5)
D.frG=new A.ad(-1.5,-0.3,3.2)
D.dRe=new A.dM("Black wire nut: HOT","Twist the house black wire and the fixture black wire together under this cap.",D.frG,6)
D.fr7=new A.ad(-1.9,0,-2)
D.dRf=new A.dM("Wood stud","The 2x4 frame inside the wall. The electrical box is nailed or screwed to a stud so it cannot move.",D.fr7,16)
D.ftr=new A.ad(-1,-0.8,4.3)
D.dRg=new A.dM("SILVER screw: NEUTRAL side",y.o,D.ftr,5)
D.fuN=new A.ad(6,3,-7.8)
D.dRh=new A.dM("Water and drain pipes","Red is hot water, blue is cold water (PEX tubing). The white pipes are drains. They slope down so the waste flows away.",D.fuN,14)
D.ftu=new A.ad(1,0.6,4.3)
D.dRi=new A.dM("BRASS screw: HOT side",y.u,D.ftu,5)
D.ftI=new A.ad(0,-0.2,4.9)
D.dRj=new A.dM("Mounting strap (yoke)","The metal strap with two screw slots. Long screws through the ears hold the device in the box.",D.ftI,7)
D.fv_=new A.ad(9.55,4.7,-7.5)
D.dRk=new A.dM("Spare breaker","A spare circuit.",D.fv_,3.5)
D.a71=new A.ad(0,20,8)
D.dRl=new A.dM("Vanity and counter","The cabinet that holds the sink. The pipes live inside it.",D.a71,70)
D.fun=new A.ad(-3.2,1.3,-7.8)
D.dRm=new A.dM("Living room outlet","A standard outlet. Tap Open lesson to wire one in 3D.",D.fun,4.5)
D.ftJ=new A.ad(1.5,-0.3,3.2)
D.dRn=new A.dM("Green ground connection","Join the bare copper house ground wire to the green fixture ground wire.",D.ftJ,6)
D.fr1=new A.ad(12,2.6,0)
D.dRo=new A.dM("Trap arm","The pipe that carries the waste water from the trap into the wall. It must slope down toward the wall, about 1/4 inch per foot.",D.fr1,9)
D.fs_=new A.ad(0,6.5,-7.8)
D.dRp=new A.dM("Electrical cables","Cables run from the breaker panel to every outlet, switch and light. Yellow is 12 gauge for 20 amps. White is 14 gauge for 15 amps.",D.fs_,16)
D.fsq=new A.ad(11.2,2.3,-6)
D.dRq=new A.dM("Water heater","Heats the water. The cold line goes in at the top and the hot line comes out at the top.",D.fsq,9)
D.fsQ=new A.ad(9.55,5.2,-7.5)
D.dRr=new A.dM("Bathroom breaker","Protects the bathroom. It is ON.",D.fsQ,3.5)
D.frc=new A.ad(5.2,3.9,-7.8)
D.dRs=new A.dM("Kitchen GFCI outlet","Outlets near water must be GFCI. Tap Open lesson to wire one.",D.frc,4.5)
D.fpn=new A.ad(0,40,-3)
D.dRt=new A.dM("Electrical cable","Yellow 12/2 cable with ground: it carries power from the breaker panel through the holes in the studs to each box.",D.fpn,80)
D.frs=new A.ad(-8.4,1.2,-6.4)
D.dRu=new A.dM("Sofa","Just furniture, to show the size of the room.",D.frs,10)
D.dRv=new A.dM("Outlet face","Two outlets. The short slot is hot, the long slot is neutral, and the round hole is ground.",D.aPL,6)
D.fqQ=new A.ad(0,4,-7.8)
D.dRw=new A.dM("Wall","The drywall of the back wall.",D.fqQ,16)
D.fup=new A.ad(0,0,0.6)
D.dRx=new A.dM("Canopy","The round cover that hides the box and the wire connections against the ceiling.",D.fup,8)
D.dRy=new A.dM("Concrete slab","The foundation. It carries the whole weight of the house. Plumbing drains are placed before it is poured.",D.It,30)
D.a77=new A.ad(8.9,2.6,0)
D.dRz=new A.dM("Slip nut","Hand tighten it, then about a quarter turn with pliers. Over-tightening cracks the plastic.",D.a77,7)
D.fsP=new A.ad(1,-0.8,4.3)
D.dRA=new A.dM("BRASS screw: HOT side",y.u,D.fsP,5)
D.fqG=new A.ad(0.6,1.5,-1.8)
D.dRB=new A.dM("Cable to the light (LOAD)","This cable carries the switched power on to the light. The black wire here only has power when the switch is on.",D.fqG,8)
D.fqV=new A.ad(9.8,5,-7.5)
D.dRC=new A.dM("Breaker panel","The main electrical panel. Each breaker protects one circuit. A breaker that is in the middle position has TRIPPED. Flip it fully OFF and then ON to reset.",D.fqV,6)
D.frF=new A.ad(-4,6,-2.5)
D.dRD=new A.dM("Hot supply hose","A braided steel hose with a rubber liner and a red band. Hand tighten the nuts, then a quarter turn with a wrench.",D.frF,9)
D.dTM=new C.u(0,118)
D.aDM=new C.u(0,13)
D.dTN=new C.u(0,17)
D.dTQ=new C.u(0,330)
D.dTT=new C.u(0,-13)
D.aDS=new C.u(0,-14)
D.dTU=new C.u(0,-17)
D.dTV=new C.u(0,-18)
D.dTW=new C.u(0,-19)
D.dTX=new C.u(0,-20)
D.dU_=new C.u(0,-26)
D.dU0=new C.u(0,-28)
D.dU1=new C.u(0,-31)
D.dU2=new C.u(0,-32)
D.vy=new C.u(0,-6)
D.dU3=new C.u(0,-6771)
D.dU4=new C.u(0,-9)
D.dU6=new C.u(-9.5,-11)
D.dU7=new C.u(10,20)
D.dU9=new C.u(10,-13)
D.dUa=new C.u(10,-22)
D.dUb=new C.u(10,-4)
D.a3x=new C.u(11,8)
D.dUd=new C.u(12,2)
D.dUe=new C.u(14,0)
D.dUf=new C.u(14,12)
D.aDW=new C.u(14,8)
D.dUg=new C.u(14,-17)
D.dUh=new C.u(14,-18)
D.aDX=new C.u(14,-3)
D.aDY=new C.u(14,-4)
D.dUi=new C.u(15,0)
D.dUj=new C.u(15,-12)
D.dUk=new C.u(16,-8)
D.dUl=new C.u(18,14)
D.dUm=new C.u(18,-12)
D.aE1=new C.u(20,0)
D.dUs=new C.u(20,15)
D.dUt=new C.u(20,-17)
D.dUu=new C.u(20,-3)
D.dUv=new C.u(21,8)
D.dUx=new C.u(22,10)
D.aE2=new C.u(22,8)
D.dUy=new C.u(24,0)
D.dUz=new C.u(24,2)
D.dUB=new C.u(24,-18)
D.dUC=new C.u(24,-22)
D.dUD=new C.u(25,8)
D.dUE=new C.u(26,0)
D.dUK=new C.u(28,-30)
D.dUP=new C.u(30,18)
D.dUQ=new C.u(30,2)
D.dUR=new C.u(31,19)
D.dUS=new C.u(32,0)
D.aE5=new C.u(34,0)
D.aE6=new C.u(34,-32)
D.H9=new C.u(36,0)
D.dUX=new C.u(3,-1)
D.dV_=new C.u(40,3)
D.dV3=new C.u(4,11)
D.dV6=new C.u(4,-2)
D.dVa=new C.u(5,0)
D.dVb=new C.u(5,17)
D.dVc=new C.u(5,6)
D.dVf=new C.u(6,11)
D.dVl=new C.u(8,7)
D.dVm=new C.u(8,-10)
D.dVn=new C.u(8,-14)
D.dVo=new C.u(8,-3)
D.aEa=new C.u(9,0)
D.dVr=new C.u(-20.5,-17.6)
D.dVs=new C.u(-9,18.5)
D.dVv=new C.u(-2.6,-1)
D.dVw=new C.u(1.9,-0.8)
D.dVz=new C.u(-0.22,0.09)
D.dVE=new C.u(2.6,1)
D.dVL=new C.u(-9,12.2)
D.dW2=new C.u(-9,20.5)
D.dWk=new C.u(-10,0)
D.dWl=new C.u(-10,12)
D.aEh=new C.u(-10,4)
D.dWm=new C.u(-11,-2)
D.dWn=new C.u(-13,-5)
D.dWo=new C.u(-14,0)
D.dWp=new C.u(-14,13)
D.dWq=new C.u(-14,2)
D.dWr=new C.u(-14,-12)
D.dWs=new C.u(-14,-19)
D.dWt=new C.u(-14,-23)
D.dWu=new C.u(-15,6)
D.dWv=new C.u(-16,14)
D.dWw=new C.u(-16,-8)
D.dWx=new C.u(-17,10)
D.dWy=new C.u(-17,-18)
D.dWz=new C.u(-17,-8)
D.dWB=new C.u(-18,20)
D.dWC=new C.u(-18,-9)
D.aEj=new C.u(-20,0)
D.dWE=new C.u(-20,16)
D.dWF=new C.u(-20,-9)
D.QM=new C.u(-22,8)
D.dWG=new C.u(-22,-10)
D.dWH=new C.u(-22,-11)
D.dWI=new C.u(-24,10)
D.dWJ=new C.u(-24,11)
D.dWK=new C.u(-24,14)
D.dWL=new C.u(-24,-22)
D.dWM=new C.u(-25,-11)
D.dWN=new C.u(-26,0)
D.dWO=new C.u(-26,-18)
D.dWP=new C.u(-2,9)
D.dWQ=new C.u(-2,-10)
D.dWR=new C.u(-2,-20)
D.dWS=new C.u(-2,-9)
D.dWT=new C.u(-32,0)
D.aEl=new C.u(-34,0)
D.dWY=new C.u(-40,3)
D.dX_=new C.u(-4,11)
D.dX0=new C.u(-4,-17)
D.dX1=new C.u(-4,-2)
D.dX3=new C.u(-5,0)
D.dX4=new C.u(-5,20)
D.dX5=new C.u(-5,6)
D.dX6=new C.u(-6,26)
D.dX7=new C.u(-6,6)
D.dX8=new C.u(-6,-42)
D.dX9=new C.u(-7,-19)
D.dXa=new C.u(-7,-24)
D.dXb=new C.u(-8,-9)
D.a3B=new C.u(-9,0)
D.dXc=new C.u(-9,1)
D.dXd=new C.u(-9,-23)
D.f2G=new C.x("Thinking\u2026",null,B.hl,null,null,null,null,null,null,null,null,null)
D.dY9=new C.C(B.kB,D.f2G,null)
D.S3=new C.F(!0,B.aL,null,null,null,null,12,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new C.x("PLUMBING JOBS",null,D.S3,null,null,null,null,null,null,null,null,null)
D.dYh=new C.C(D.Li,D.ffv,null)
D.ff7=new C.x("BUILD A WHOLE ROOM",null,D.S3,null,null,null,null,null,null,null,null,null)
D.dYk=new C.C(D.Li,D.ff7,null)
D.fhX=new C.x("Start from a ready-made board",null,B.fT,null,null,null,null,null,null,null,null,null)
D.dYl=new C.C(A2.uP,D.fhX,null)
D.f1F=new C.x("SERVICE CALLS",null,D.S3,null,null,null,null,null,null,null,null,null)
D.dYq=new C.C(D.Li,D.f1F,null)
D.bq_=new C.N(4,0,4,14)
D.eZf=new C.F(!0,B.aA,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3z=new C.x("Games and little helpers for a spare minute.",null,D.eZf,null,null,null,null,null,null,null,null,null)
D.dYu=new C.C(D.bq_,D.f3z,null)
D.bCR=new C.ae(B.ec,18,B.bb,null,null,null)
D.dYG=new C.C(B.fM,D.bCR,null)
D.dYI=new C.C(B.fM,E.alp,null)
D.feW=new C.x("Tap to throw in a star",null,B.ko,null,null,null,null,null,null,null,null,null)
D.b0U=new C.ct(B.A,null,null,D.feW,null)
D.e39=new C.cJ(0,null,0,14,null,null,D.b0U,null)
D.cZ_=w([B.iH,B.bo],x.O)
D.aJc=new C.bS(B.A,0.5,B.x,null,0,D.cZ_,null,null)
D.e3R=new C.bS(B.A,0.5,B.x,null,0,D.avz,null,null)
D.cQW=w([B.c,B.bI],x.O)
D.e3T=new C.bS(B.A,0.5,B.x,null,0,D.cQW,null,null)
D.e3U=new C.bS(B.A,0.5,B.x,null,0,K.auG,null,null)
D.d59=w([B.bX,B.k7],x.O)
D.aJd=new C.bS(B.A,0.5,B.x,null,0,D.d59,null,null)
D.cwA=w([B.c,B.bX],x.O)
D.e3Y=new C.bS(B.rt,0.5,B.x,null,0,D.cwA,null,null)
D.b7F=new C.w(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,B.t)
D.bcD=new C.w(1,0.027450980392156862,0.10196078431372549,0.2,B.t)
D.cQ0=w([D.b7F,D.adn,D.bcD],x.O)
D.cX7=w([0,0.7,1],x.n)
D.e4_=new C.bS(B.rt,0.5,B.x,null,0,D.cQ0,D.cX7,null)
D.c9X=w([B.f9,B.f0,B.k5],x.O)
D.e40=new C.bS(N.q5,0.5,B.x,null,0,D.c9X,null,null)
D.cn9=w([B.ob,B.aL,B.K],x.O)
D.d27=w([0.3,0.7,1],x.n)
D.e41=new C.bS(B.A,0.5,B.x,null,0,D.cn9,D.d27,null)
D.cpF=w([B.lq,B.o5],x.O)
D.e42=new C.bS(K.a84,0.5,B.x,null,0,D.cpF,null,null)
D.bg_=new C.w(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,B.t)
D.d3s=w([B.f5,D.bg_],x.O)
D.e43=new C.bS(B.rt,0.5,B.x,null,0,D.d3s,null,null)
D.cpV=w([B.e0,B.cC],x.O)
D.e44=new C.bS(B.A,0.5,B.x,null,0,D.cpV,null,null)
D.cLD=w([B.ob,B.aL,B.fA],x.O)
D.e45=new C.bS(B.A,0.5,B.x,null,0,D.cLD,null,null)
D.cEi=w([B.fW,B.aM,B.dm],x.O)
D.e47=new C.bS(B.rt,0.5,B.x,null,0,D.cEi,null,null)
D.cZv=w([B.k7,G.o9],x.O)
D.e48=new C.bS(B.rt,0.5,B.x,null,0,D.cZv,null,null)
D.b7Q=new C.w(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,B.t)
D.b62=new C.w(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,B.t)
D.cNQ=w([D.b7Q,D.b62],x.O)
D.e4a=new C.bS(B.A,0.5,B.x,null,0,D.cNQ,null,null)
D.bc8=new C.w(1,0.11372549019607843,0.3607843137254902,0.611764705882353,B.t)
D.bad=new C.w(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,B.t)
D.bai=new C.w(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,B.t)
D.d7i=w([D.bc8,D.bad,D.bai],x.O)
D.cKt=w([0,0.65,1],x.n)
D.e4b=new C.bS(K.a86,0.5,B.x,null,0,D.d7i,D.cKt,null)
D.e4c=new C.bS(B.A,0.5,B.x,null,0,D.asg,null,null)
D.d4q=w([B.lq,B.aL,B.fA],x.O)
D.e4g=new C.bS(B.A,0.5,B.x,null,0,D.d4q,null,null)
D.d5V=w([B.k7,B.hz],x.O)
D.e4j=new C.bS(B.A,0.5,B.x,null,0,D.d5V,null,null)
D.aJi=new C.aX(9,9)
D.e4r=new C.aX(1.4,1.4)
D.e54=new C.z(0,-4)
D.e5c=new C.z(D.wo,D.It)
D.e6m=new C.z(64,2.4)
D.e7T=new C.z("LOAD (taped)",B.dm)
D.e9D=new C.z(0.22,4)
D.eaq=new C.z(63,-2.4)
D.eb9=new C.z(51,D.aaJ)
D.egr=new C.z(0.8,-4)
D.baY=new C.w(1,0.3568627450980392,0.39215686274509803,0.4392156862745098,B.t)
D.ehD=new C.z("SILVER \xb7 NEUTRAL",D.baY)
D.fux=new A.ad(-1.5,0,0)
D.ehM=new C.z(D.JL,D.fux)
D.b3G=new C.w(1,0.8196078431372549,0.29411764705882354,0.22745098039215686,B.t)
D.ejf=new C.z(52,D.b3G)
D.b7Z=new C.w(1,0.12156862745098039,0.47843137254901963,0.22745098039215686,B.t)
D.ek7=new C.z("GREEN \xb7 GROUND",D.b7Z)
D.ad_=new C.w(1,0.1843137254901961,0.6352941176470588,0.30980392156862746,B.t)
D.fv3=new A.ad(1.5,0,0)
D.eo3=new C.z(D.ad_,D.fv3)
D.eoE=new C.z(0.58,4)
D.b4J=new C.w(1,0.6039215686274509,0.4196078431372549,0.047058823529411764,B.t)
D.eqc=new C.z("BRASS \xb7 HOT",D.b4J)
D.eqF=new C.z(53,D.ad_)
D.erc=new C.bz("Moon",1.62,4291941851)
D.erh=new C.bz(61,-4.6,D.rQ)
D.erK=new C.bz("Neptune",11.15,4284524026)
D.esj=new C.bz("Sun",274,4294688548)
D.esy=new C.bz("Mercury",3.7,4288455599)
D.esE=new C.bz("Earth",9.81,4281908728)
D.esG=new C.bz("Mars",3.71,4294472049)
D.esZ=new C.bz("Venus",8.87,4294759245)
D.et_=new C.bz(62,4.6,D.nn)
D.et3=new C.bz("Saturn",10.44,4294829706)
D.etn=new C.bz("Jupiter",24.79,4294677052)
D.ewF=new C.a9(10,-8,18,-2)
D.ewG=new C.a9(14,-14,20,14)
D.ewH=new C.a9(20,-2,30,2)
D.ewJ=new C.a9(4,-13,30,-3)
D.ewL=new C.a9(8,-7,12,7)
D.ewR=new C.a9(-12,12,12,19)
D.ewS=new C.a9(-12,14,12,22)
D.ewT=new C.a9(-12,-22,12,8)
D.ewU=new C.a9(-12,-25,12,19)
D.ewV=new C.a9(-12,-26,12,-6)
D.ewW=new C.a9(-12,-4,12,14)
D.ewX=new C.a9(-12,-6,10,6)
D.ewY=new C.a9(-14,20,14,24)
D.ewZ=new C.a9(-14,6,14,10)
D.ex_=new C.a9(-14,-17,14,15)
D.ex0=new C.a9(-14,-26,14,18)
D.ex1=new C.a9(-14,-4,14,20)
D.ex2=new C.a9(-15,-29,15,25)
D.ex3=new C.a9(-16,-16,16,16)
D.ex4=new C.a9(-16,-22,-9,18)
D.ex5=new C.a9(-16,-24,16,-10)
D.ex6=new C.a9(-16,-2,16,20)
D.ex8=new C.a9(-18,20,18,24)
D.ex9=new C.a9(-18,-18,18,20)
D.exa=new C.a9(-20,12,20,22)
D.exb=new C.a9(-20,-28,20,26)
D.exc=new C.a9(-22,14,22,18)
D.aJH=new C.a9(-22,-26,22,24)
D.exd=new C.a9(-22,-3,22,3)
D.exe=new C.a9(-22,-4,22,12)
D.exf=new C.a9(-24,-12,10,22)
D.exg=new C.a9(-24,-14,22,8)
D.exh=new C.a9(-24,-6,24,20)
D.aJI=new C.a9(-24,-9,24,9)
D.exi=new C.a9(-25,14,25,19)
D.exj=new C.a9(-26,-14,14,8)
D.exk=new C.a9(-26,-4,26,20)
D.exl=new C.a9(-26,-6,4,6)
D.aJJ=new C.a9(-28,-13,28,13)
D.exm=new C.a9(-28,-16,28,16)
D.exn=new C.a9(-28,-16,28,8)
D.exo=new C.a9(-28,-22,28,22)
D.exp=new C.a9(-30,-12,30,14)
D.exq=new C.a9(-30,-14,0,14)
D.exr=new C.a9(-30,-18,30,20)
D.exs=new C.a9(-30,-28,30,14)
D.ext=new C.a9(-30,-2,30,18)
D.exu=new C.a9(-30,-4,30,18)
D.exv=new C.a9(-32,-17,32,17)
D.exw=new C.a9(-32,-28,32,18)
D.exx=new C.a9(-33,-21,33,17)
D.exy=new C.a9(-34,14,34,26)
D.a4u=new C.a9(-34,-18,34,18)
D.exz=new C.a9(-34,-4,34,7)
D.exA=new C.a9(-36,-24,36,20)
D.exB=new C.a9(-38,-22,38,22)
D.exC=new C.a9(-3,12,3,22)
D.exD=new C.a9(-3,5,3,15)
D.exF=new C.a9(-46,-34,46,28)
D.exG=new C.a9(-48,-3,48,3)
D.exJ=new C.a9(-6,18,24,24)
D.exK=new C.a9(-6,5,6,12)
D.exL=new C.a9(-6,-22,6,-15)
D.exM=new C.a9(-9,-16,9,22)
D.exN=new C.a9(-4.5,-24,4.5,-21.2)
D.exP=new C.a9(14,-9,17.5,9)
D.dTf={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aKz=new C.eV(D.dTf,5,x.M)
D.dSV={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.eAy=new C.eV(D.dSV,10,x.M)
D.eCu=new C.at(24,44)
D.eCz=new C.at(300,300)
D.eCT=new C.at(54,38)
D.eD_=new C.at(66,38)
D.b27=new C.fh(2,null,null,null,null,B.bz,null,null,null,null)
D.eDW=new C.a5(16,16,D.b27,null)
D.aLy=new C.hN(3,12,12,0.82,null)
D.eEH=new A7.b47(78,6,6,1,56)
D.fjz=new C.x("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aLJ=new C.b1(D.fjz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.cZy=w([B.cq,B.cr,B.bb,B.aV,B.p4,B.cq],x.O)
D.eJP=new C.fR(B.A,0,6.283185307179586,B.x,D.cZy,null,null)
D.eSp=new C.F(!0,B.aM,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,F.OV,null,null,null)
D.eKT=new C.es("You are here (Sun)",null,null,B.cQ,null,null,null,null,null,null,D.eSp)
D.aO2=new C.F(!0,B.aA,null,null,null,null,10.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKU=new C.es("What we see",null,null,B.cQ,null,null,null,null,null,null,D.aO2)
D.ePT=new C.F(!0,E.UI,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKX=new C.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,B.cQ,null,null,null,null,null,null,D.ePT)
D.eUx=new C.F(!0,B.k2,null,null,null,null,9.5,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL2=new C.es("AI",null,null,B.cQ,null,null,null,null,null,null,D.eUx)
D.ePE=new C.F(!0,B.bZ,null,null,null,null,15,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL3=new C.es("Add atoms with the buttons below",null,null,B.cQ,null,null,null,null,null,null,D.ePE)
D.aMw=new C.F(!0,B.bZ,null,null,null,null,9.5,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLi=new C.F(!0,B.w,null,null,null,null,24,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLk=new C.F(!0,B.c,null,null,null,null,110,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLP=new C.F(!0,B.bh,null,null,null,null,15,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLW=new C.F(!0,B.c,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eM7=new C.F(!0,B.cx,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMC=new C.F(!0,B.bZ,null,null,null,null,11,B.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMH=new C.F(!0,B.c,null,null,null,null,12.5,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMX=new C.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNn=new C.F(!0,B.aQ,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNJ=new C.F(!0,B.bZ,null,null,null,null,9,B.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNT=new C.F(!0,B.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB3=new C.cP(B.hD,B.dz,6)
D.cTw=w([D.eB3],x.E)
D.eOb=new C.F(!0,B.c,null,null,null,null,19,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cTw,null,null,null)
D.eOe=new C.F(!0,B.ew,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOh=new C.F(!0,B.c,null,null,null,null,17,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOj=new C.F(!0,B.bZ,null,null,null,null,10.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOE=new C.F(!0,B.c,null,null,null,null,12.5,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOI=new C.F(!0,B.aM,null,null,null,null,26,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMS=new C.F(!0,B.bZ,null,null,null,null,9.5,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aMT=new C.F(!0,B.ad,null,null,null,null,12,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP1=new C.F(!0,B.aA,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP2=new C.F(!0,B.bZ,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a60=new C.F(!0,B.ad,null,null,null,null,null,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePW=new C.F(!0,B.c,null,null,null,null,60,B.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQo=new C.F(!0,B.aA,null,null,null,null,10.5,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQR=new C.F(!0,B.aM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB6=new C.cP(B.aW,B.J,3)
D.avP=w([D.eB6],x.E)
D.eQU=new C.F(!0,B.c,null,null,null,null,10.5,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.avP,null,null,null)
D.eQZ=new C.F(!0,B.c,null,null,null,null,12.5,B.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Sd=new C.F(!0,B.aL,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRE=new C.F(!0,B.c,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,F.OV,null,null,null)
D.eRO=new C.F(!0,B.c,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eS6=new C.F(!0,B.aA,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSe=new C.F(!0,B.c,null,null,null,null,11.5,B.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSD=new C.F(!0,B.uA,null,null,null,null,12.5,B.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSS=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTa=new C.F(!0,B.bJ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTe=new C.F(!0,B.bZ,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTh=new C.F(!0,B.ex,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTi=new C.F(!0,B.aA,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTo=new C.F(!0,B.aA,null,null,null,null,18,B.I,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTR=new C.F(!0,B.bZ,null,null,null,null,8.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU3=new C.F(!0,B.mG,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU4=new C.F(!0,B.ad,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6e=new C.F(!0,B.ad,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUj=new C.F(!0,B.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Sp=new C.F(!0,B.aQ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6i=new C.F(!0,B.c,null,null,null,null,9.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUR=new C.F(!0,B.c,null,null,null,null,20,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAV=new C.cP(B.w,B.J,5)
D.cId=w([D.eAV],x.E)
D.eUS=new C.F(!0,B.c,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cId,null,null,null)
D.eUX=new C.F(!0,B.c,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.avP,null,null,null)
D.eVb=new C.F(!0,null,null,null,null,null,38,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVg=new C.F(!0,B.fk,null,null,null,null,30,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVw=new C.F(!0,B.bZ,null,null,null,null,10.5,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW0=new C.F(!0,B.bb,null,null,null,null,30,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWx=new C.F(!0,B.bZ,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXa=new C.F(!0,B.aA,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXi=new C.F(!0,B.w,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNO=new C.F(!0,B.aA,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXL=new C.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXU=new C.F(!0,B.aM,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY0=new C.F(!0,B.aM,null,null,null,null,26,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Id=new C.F(!0,B.ad,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYl=new C.F(!0,B.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO_=new C.F(!0,B.ad,null,null,null,null,12,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYo=new C.F(!0,B.aM,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new C.F(!0,B.aQ,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6x=new C.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZo=new C.F(!0,B.b4,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZu=new C.F(!0,B.uA,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZN=new C.F(!0,B.ff,null,null,null,null,12,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZO=new C.F(!0,B.bb,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOm=new C.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_b=new C.x("\u26a0\ufe0f ",null,D.eOm,null,null,null,null,null,null,null,null,null)
D.f_m=new C.x("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,B.Ic,null,null,null,null,null,null,null,null,null)
D.eM9=new C.F(!0,B.w,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_A=new C.x("Open the 3D lesson",null,D.eM9,null,null,null,null,null,null,null,null,null)
D.f_M=new C.x("LETTER COUNT OF THE SECRET VERSION",null,R.mq,null,null,null,null,null,null,null,null,null)
D.a5S=new C.F(!0,B.aA,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0n=new C.x("Tip: pick a part, then tap its glowing spot. Joints on hoses, bolts and the drain are only loose: pick the Wrench and tap them. Use your Hand on the main water valve: turn the water OFF before you cut into a pipe, and ON to test for leaks.",null,D.a5S,null,null,null,null,null,null,null,null,null)
D.f0M=new C.x("Pick one, then change it and see what happens.",null,B.Ic,null,null,null,null,null,null,null,null,null)
D.f0Q=new C.x("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.f1v=new C.x("You used all three lives. Electricity does not give second chances, so in real life you turn the breaker OFF and test the wires every single time. Try the job again.",null,B.yZ,null,null,null,null,null,null,null,null,null)
D.ePq=new C.F(!0,B.ad,null,null,null,null,null,B.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1M=new C.x("What do you want to invent? Type it below, or tap an idea.",null,D.ePq,null,null,null,null,null,null,null,null,null)
D.f27=new C.x("Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.",null,V.a5J,null,null,null,null,null,null,null,null,null)
D.f2C=new C.x("Start this job again",null,null,null,null,null,null,null,null,null,null,null)
D.f3b=new C.x("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.f3K=new C.x("\ud83c\udfc6 All challenges done! Keep inventing.",null,B.hk,null,null,null,null,null,null,null,null,null)
D.f3P=new C.x("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.f4m=new C.x("Make it yours",null,B.kS,null,null,null,null,null,null,null,null,null)
D.f4B=new C.x("Your mass never changes. What changes is how hard each world pulls on it.",null,D.a5S,null,null,null,null,null,null,null,null,null)
D.eRQ=new C.F(!0,B.ad,null,null,null,null,13,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6K=new C.x("Turn every model with your finger, pinch to zoom, and tap any part to zoom in and learn what it is. Pick a wire, then tap the screw it belongs on. Wires have their real colours, and every mistake is explained.",null,D.eRQ,null,null,null,null,null,null,null,null,null)
D.eTt=new C.F(!0,B.j2,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6L=new C.x("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.eTt,null,null,null,null,null,null,null,null,null)
D.f7_=new C.x("YOUR DECODING",null,R.mq,null,null,null,null,null,null,null,null,null)
D.f7b=new C.x("5G",null,L.aMV,null,null,null,null,null,null,null,null,null)
D.f7o=new C.x("The customer says\u2026",null,B.dI,null,null,null,null,null,null,null,null,null)
D.f8f=new C.x("Next job",null,null,null,null,null,null,null,null,null,null,null)
D.eVM=new C.F(!0,B.bZ,null,null,null,null,9,B.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8g=new C.x("WHAT HAPPENS",null,D.eVM,null,null,null,null,null,null,null,null,null)
D.f8w=new C.x("New job",null,null,null,null,null,null,null,null,null,null,null)
D.aNd=new C.F(!0,B.cq,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8D=new C.x("Job over",null,D.aNd,null,null,null,null,null,null,null,null,null)
D.f8T=new C.x("Three shocks. In real life you switch the breaker off and test the wires, every time. Try another call.",null,B.yZ,null,null,null,null,null,null,null,null,null)
D.f9w=new C.x("Practice mode: no hints. You will only hear from me when something is wrong.",null,S.Si,null,null,null,null,null,null,null,null,null)
D.f9J=new C.x("New call",null,null,null,null,null,null,null,null,null,null,null)
D.f9O=new C.x("Job done! \ud83c\udf89",null,Q.Sm,null,null,null,null,null,null,null,null,null)
D.eYN=new C.F(!0,B.c,null,null,null,null,13,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9P=new C.x("NGMY Apps",null,D.eYN,null,null,null,null,null,null,null,null,null)
D.f9U=new C.x("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fay=new C.x("Change the words and pictures on the three slabs.",null,B.Ic,null,null,null,null,null,null,null,null,null)
D.faJ=new C.x("All the parts and wires will be removed.",null,B.hx,null,null,null,null,null,null,null,null,null)
D.faX=new C.x("Next call",null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new C.x("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fbB=new C.x("Tap the crank on the board again and again to spin it faster.",null,B.hl,null,null,null,null,null,null,null,null,null)
D.fbJ=new C.x("Look around",null,null,null,null,null,null,null,null,null,null,null)
D.fcg=new C.x("The customer wants:",null,B.a6a,null,null,null,null,null,null,null,null,null)
D.fcq=new C.x('Tip: pick "Look and test" and tap things to find out what is wrong. Then pick the right tool. Turn the breaker off (hand) before you touch any wire.',null,D.a5S,null,null,null,null,null,null,null,null,null)
D.fcr=new C.x("INTERCEPTED",null,R.mq,null,null,null,null,null,null,null,null,null)
D.fcL=new C.x("\ud83c\udfaf Challenges",null,B.dI,null,null,null,null,null,null,null,null,null)
D.fdf=new C.x("Remove this part",null,V.aMz,null,null,null,null,null,null,null,null,null)
D.fdw=new C.x("Clear the board?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.eVh=new C.F(!0,B.bs,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdL=new C.x("How the Lab works",null,D.eVh,null,null,null,null,null,null,null,null,null)
D.eN7=new C.F(!0,B.c,null,null,null,null,16,B.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe1=new C.x("Electronics Lab",null,D.eN7,null,null,null,null,B.a2,null,1,null,null)
D.fe3=new C.x("?",null,K.aNX,null,null,null,null,null,null,null,null,null)
D.eTn=new C.F(!0,B.aV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe7=new C.x("Planet Earth",null,D.eTn,null,null,null,null,null,null,null,null,null)
D.feP=new C.x("Call over",null,D.aNd,null,null,null,null,null,null,null,null,null)
D.ffe=new C.x("A different call",null,null,null,null,null,null,null,null,null,null,null)
D.ffg=new C.x("Ready-made circuits",null,B.dI,null,null,null,null,null,null,null,null,null)
D.ffR=new C.x("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,B.hl,null,null,null,null,null,null,null,null,null)
D.fg2=new C.x("Job complete! \ud83c\udf89",null,Q.Sm,null,null,null,null,null,null,null,null,null)
D.fg8=new C.x("UNIVERSE EXPLORER",null,E.a5Q,null,null,null,null,null,null,null,null,null)
D.fh2=new C.x("All fixed! \ud83c\udf89",null,Q.Sm,null,null,null,null,null,null,null,null,null)
D.aOA=new C.x("Stay",null,null,null,null,null,null,null,null,null,null,null)
D.aOC=new C.x("A different job",null,null,null,null,null,null,null,null,null,null,null)
D.fiu=new C.x("SECRET VERSION",null,R.mq,null,null,null,null,null,null,null,null,null)
D.eY4=new C.F(!0,B.aM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj_=new C.x("\u26a0 There is no air here, so a parachute will not work.",null,D.eY4,null,null,null,null,null,null,null,null,null)
D.fk9=new C.x("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,V.a5J,null,null,null,null,null,null,null,null,null)
D.fkC=new C.x("NGMY",null,B.u9,null,null,null,null,null,null,null,null,null)
D.fkO=new C.x("You build a machine. A little light runs along the wires, and every part it touches does something.",null,B.a6h,null,null,null,null,null,null,null,null,null)
D.fkQ=new C.x("The job",null,B.dI,null,null,null,null,null,null,null,null,null)
D.fl9=new C.x("Tap it to change its setting. Drag from the right dot to connect.",null,B.lg,null,null,null,null,null,null,null,null,null)
D.flE=new C.x("Stay in the room",null,null,null,null,null,null,null,null,null,null,null)
D.fm4=new C.x("Make it bigger to see it better. It can never be smaller than its normal size.",null,B.Ic,null,null,null,null,null,null,null,null,null)
D.fm6=new C.x("TOOLBOX",null,E.a5Q,null,null,null,null,null,null,null,null,null)
D.fpa=new A.ad(3.6,2.6,0.6)
D.fpd=new A.ad(0,0,3)
D.a70=new A.ad(0,0,4)
D.fpf=new A.ad(0,0,-1)
D.fpi=new A.ad(0,14,0)
D.CF=new A.ad(0,1,0)
D.SV=new A.ad(0,4,-2)
D.fpq=new A.ad(0,5,4)
D.a72=new A.ad(0,9,-3)
D.a73=new A.ad(0,-4,28)
D.fps=new A.ad(0,-4,-20)
D.fpv=new A.ad(10,8,10)
D.fpw=new A.ad(11,1,11)
D.fpx=new A.ad(13,0,0)
D.fpy=new A.ad(13,28,3)
D.fpz=new A.ad(0,0.52,2.35)
D.fpB=new A.ad(18,9,11)
D.fpC=new A.ad(0,3,-6.5)
D.fpD=new A.ad(-4.6,1.5,-3.6)
D.fpE=new A.ad(0,-13.5,-1.5)
D.fpF=new A.ad(4,10,3.5)
D.SW=new A.ad(1,0,0)
D.fpG=new A.ad(1,26,14)
D.fpH=new A.ad(1,28,14)
D.fpJ=new A.ad(1,0.9,0.06)
D.aPo=new A.ad(20,14,7)
D.fpL=new A.ad(22,3,10)
D.fpM=new A.ad(26,-34,96)
D.fpO=new A.ad(-0.1,0,0)
D.fpQ=new A.ad(64,10,-1.4)
D.fpR=new A.ad(0,-1.6,0.8)
D.fpS=new A.ad(19.6,0,-1.5)
D.fpU=new A.ad(-1,-1.7,2.3)
D.fpV=new A.ad(36,30,1)
D.fpW=new A.ad(36,5,16)
D.fpX=new A.ad(-0.2,-0.3,-0.4)
D.fpY=new A.ad(0,48.6,55)
D.a74=new A.ad(3,3,3)
D.fq0=new A.ad(40,1,14)
D.fq1=new A.ad(40,28,1)
D.fq2=new A.ad(0.9,0,4.4)
D.fq3=new A.ad(8.2,1.9,-7.55)
D.fq4=new A.ad(46,28,3)
D.fq5=new A.ad(0,-47.25,-2.25)
D.fq6=new A.ad(0,1.59,0.14)
D.fq7=new A.ad(1,0,-1.2)
D.fq8=new A.ad(0,-0.8,0.9)
D.fq9=new A.ad(11.9,0,-8)
D.aPq=new A.ad(1.6,1.6,0.4)
D.fqb=new A.ad(0.16,0.32,0.07)
D.fqc=new A.ad(5,1,2)
D.fqd=new A.ad(0,14.3,-1.5)
D.aPr=new A.ad(-13,8.6,-9.5)
D.fqe=new A.ad(62,18,20)
D.fqf=new A.ad(62,22,6)
D.fqg=new A.ad(64,10,0)
D.fqi=new A.ad(8,8,0.3)
D.aPs=new A.ad(6,14,20)
D.fql=new A.ad(0,-0.2,0.14)
D.fqn=new A.ad(0.3,38,2)
D.fqo=new A.ad(1.6,1.7,3.6)
D.fqq=new A.ad(-72.8,0,55)
D.fqs=new A.ad(7,0,-8)
D.fqt=new A.ad(7,2,7)
D.aPt=new A.ad(7,3,0)
D.fqv=new A.ad(-3.2,1.3,-7.82)
D.aPu=new A.ad(147,1.5,3.5)
D.aPv=new A.ad(-6.5,6.9,-3)
D.fqw=new A.ad(0,-48.6,55)
D.fqx=new A.ad(5.5,8.5,3)
D.fqy=new A.ad(0,0,0.26)
D.aPw=new A.ad(8,2,8)
D.fqz=new A.ad(8,3,0)
D.fqA=new A.ad(0.4,0.38,0.12)
D.fqB=new A.ad(0,0,-0.43)
D.aPx=new A.ad(11.2,4.5,-6)
D.fqC=new A.ad(1.2,96,112)
D.aPy=new A.ad(0.08,3.8,2.4)
D.fqD=new A.ad(1.5,1.3,0.6)
D.fqF=new A.ad(0,-1.78,0.27)
D.fqI=new A.ad(3.2,0.12,-6.7)
D.fqJ=new A.ad(12,0,-8.1)
D.fqL=new A.ad(1.25,0.28,0.1)
D.fqM=new A.ad(24,0.08,16)
D.fqO=new A.ad(0,4,-7.9)
D.fqP=new A.ad(11.9,0,8)
D.fqR=new A.ad(21,1.4,8)
D.fqT=new A.ad(3,3.28,-7.2)
D.fqU=new A.ad(-6.1,1.2,-6.4)
D.fqW=new A.ad(2.8,3.4,2.4)
D.fqX=new A.ad(0,-45.5,0.5)
D.fqY=new A.ad(5,1.6,0.5)
D.fr_=new A.ad(0.1,-2,2.4)
D.fr0=new A.ad(0,0.2,2.8)
D.fr2=new A.ad(18.9,2.6,0)
D.fr3=new A.ad(-12,0,-8.1)
D.fr4=new A.ad(11.8,4,0)
D.aPz=new A.ad(-71.7,6,55)
D.fr6=new A.ad(5.6,0.3,1.9)
D.fr9=new A.ad(4.6,7.6,3)
D.fra=new A.ad(-1,0,-1.2)
D.frb=new A.ad(0,1.7,0)
D.frd=new A.ad(-1,0,1.5)
D.fre=new A.ad(5,8,0.4)
D.frf=new A.ad(5,2.2,0.8)
D.frg=new A.ad(0.18,0.12,0.08)
D.frh=new A.ad(144,5,0.7)
D.fri=new A.ad(1.2,-1.7,2.3)
D.frk=new A.ad(0.82,1.7,0.3)
D.frl=new A.ad(-0.12,0,0)
D.frn=new A.ad(3.5,94,0.2)
D.fro=new A.ad(1.1,2.05,0.04)
D.frp=new A.ad(0,4.5,-2)
D.frq=new A.ad(5,8,0.5)
D.frr=new A.ad(0,-0.5,0.6)
D.frt=new A.ad(0,3.4,0.8)
D.frv=new A.ad(-0.85,4,-3.2)
D.frw=new A.ad(0,-0.2,3.2)
D.fry=new A.ad(40,7.2,1.2)
D.aPA=new A.ad(0.42,0.34,0.12)
D.frz=new A.ad(1.7,0.08,1.2)
D.frA=new A.ad(0,0,0.38)
D.frC=new A.ad(5.2,3.9,-7.76)
D.frE=new A.ad(0.07,0.3,0.03)
D.frH=new A.ad(0,-0.2,0.19)
D.frJ=new A.ad(1.2,49,36)
D.frK=new A.ad(0,9.3,0)
D.frN=new A.ad(0,-1.9,-1.2)
D.frO=new A.ad(-3.2,1.15,-7.78)
D.frP=new A.ad(64,10,0.2)
D.frQ=new A.ad(0,-1.78,0.53)
D.aPB=new A.ad(-6.5,7.4,-3)
D.frS=new A.ad(0,14.5,-1.5)
D.frT=new A.ad(0,0.2,0)
D.frV=new A.ad(160,1.2,120)
D.frW=new A.ad(3.4,3.25,-7.85)
D.frX=new A.ad(3,1.55,-7.1)
D.aPE=new A.ad(0,-0.1,0.1)
D.frY=new A.ad(0,0,0.04)
D.frZ=new A.ad(2.4,11.6,-3.6)
D.fs0=new A.ad(5,8.6,-2.25)
D.fs1=new A.ad(0,-1.78,0.3)
D.fs2=new A.ad(0,1.9,-1.2)
D.fs3=new A.ad(0.26,0.04,0.02)
D.fs4=new A.ad(-2.4,11.6,-3.6)
D.fs5=new A.ad(11.25,0,-2.25)
D.fs6=new A.ad(1,-1.8,2.4)
D.fs7=new A.ad(-11.8,4,0)
D.fs8=new A.ad(11.2,4.7,-6)
D.fs9=new A.ad(24,8,0.05)
D.fsb=new A.ad(0.12,0,0)
D.fsc=new A.ad(1.1,1.1,0.03)
D.fsd=new A.ad(3.4,3.55,-7.85)
D.aPF=new A.ad(1.5,18,3.5)
D.fsh=new A.ad(3.5,3.1,-7.15)
D.fsi=new A.ad(-0.28,0.55,-0.8)
D.fsj=new A.ad(0,-0.2,0.24000000000000002)
D.fsl=new A.ad(1,-0.2,0.14)
D.fsm=new A.ad(-1.9,0,-2.25)
D.fsn=new A.ad(0,-0.9,1.1)
D.fso=new A.ad(46,2.4,22)
D.fsp=new A.ad(8.2,1.05,-6.7)
D.fss=new A.ad(0.07,0.4,0.03)
D.fst=new A.ad(2,3.8,0.08)
D.fsu=new A.ad(64,40,-3.2)
D.fsw=new A.ad(0,0,-8.8)
D.fsx=new A.ad(0,0.7,-1)
D.fsA=new A.ad(-11.9,0,8)
D.fsB=new A.ad(7,0,1.5)
D.fsC=new A.ad(-8.4,0.7,-6.4)
D.fsD=new A.ad(-3.2,1.45,-7.78)
D.fsE=new A.ad(-6.575,0,-0.25)
D.fsG=new A.ad(0,14.6,-1.5)
D.aPH=new A.ad(0,0,-2.3)
D.a76=new A.ad(-13,12.5,0)
D.fsI=new A.ad(0,0,0.62)
D.fsJ=new A.ad(0.2,-0.3,-0.4)
D.aPI=new A.ad(10.85,18,0.5)
D.fsK=new A.ad(1.4,1.3,0.02)
D.fsL=new A.ad(6.3,1.5,-7.2)
D.aPJ=new A.ad(0,0.62,2.85)
D.aPK=new A.ad(0.05,8,16)
D.fsM=new A.ad(0,-1.2,5)
D.fsO=new A.ad(0.2,-2,2.6)
D.fsR=new A.ad(11.2,2.4,-5.18)
D.fsT=new A.ad(-1,-0.2,0.14)
D.aPM=new A.ad(2,0.08,2.4)
D.fsV=new A.ad(-0.32,0,0.5)
D.fsX=new A.ad(0.8,0.55,0.05)
D.fsY=new A.ad(0.14,0.35,17)
D.fsZ=new A.ad(1.4,2.4,0.3)
D.ft_=new A.ad(0,24,-0.6)
D.ft0=new A.ad(40,1.6,14)
D.ft3=new A.ad(0,1.95,0.31)
D.ft4=new A.ad(150,1.2,112)
D.aPN=new A.ad(0.75,4.5,0.1)
D.ft6=new A.ad(0.12,0,0.05)
D.ft8=new A.ad(9,1.2,9)
D.ft9=new A.ad(0,-0.5,0)
D.ftc=new A.ad(5.5,8.5,0.5)
D.aPO=new A.ad(0.05,8,9.6)
D.fte=new A.ad(1.5,94,3.5)
D.ftf=new A.ad(0,8.2,0)
D.fth=new A.ad(4,94,0.4)
D.fti=new A.ad(3.7,1.2,-7.1)
D.ftj=new A.ad(8.2,0.05,-6.7)
D.ftk=new A.ad(0,-0.3,0)
D.ftl=new A.ad(6.575,0,-0.25)
D.aPP=new A.ad(0,1.8,0)
D.ftm=new A.ad(3,3.21,-7.2)
D.fto=new A.ad(9.8,5,-7.75)
D.ftp=new A.ad(1.5,3.5,112)
D.ftq=new A.ad(3,1.85,-7.1)
D.a78=new A.ad(13,12.5,0)
D.ftv=new A.ad(0.34,0.66,0.9)
D.ftx=new A.ad(-6.5,7.9,-3)
D.fty=new A.ad(0,13.6,-1.5)
D.ftz=new A.ad(1.5,1.5,0.05)
D.ftA=new A.ad(-6.5,5,-3)
D.ftB=new A.ad(0.02,0.28,0.05)
D.ftC=new A.ad(0,0.7,1)
D.aPR=new A.ad(13,8.6,9.5)
D.ftD=new A.ad(-3.6,4,-7.76)
D.ftE=new A.ad(0.82,0.9,0.05)
D.ftF=new A.ad(0,-5.5,-0.25)
D.ftK=new A.ad(1.9,0,0)
D.ftL=new A.ad(0.45,0.72,0.06)
D.ftN=new A.ad(14,0.4,7)
D.ftO=new A.ad(64,24,-3.2)
D.ftP=new A.ad(0,9.2,0)
D.ftQ=new A.ad(0,0.03,0)
D.ftR=new A.ad(-1,0,-8)
D.ftT=new A.ad(-42,-34,96)
D.ftU=new A.ad(0,-0.6,22)
D.ftV=new A.ad(-72,6,55)
D.ftW=new A.ad(-8,-28,104)
D.ftX=new A.ad(-8,-39,96)
D.ftY=new A.ad(0,0.35,0.78)
D.ftZ=new A.ad(-11.9,0,-8)
D.fu_=new A.ad(-8.4,1.9,-7.2)
D.aPS=new A.ad(1.25,1,0.1)
D.fu1=new A.ad(11.2,0,-6)
D.fu2=new A.ad(1.2,1.1,0.8)
D.fu4=new A.ad(150,49,1.2)
D.fu5=new A.ad(4.6,1.5,-3.6)
D.fu6=new A.ad(0,-0.7,0.8)
D.fu7=new A.ad(8.9,1.9,0.9)
D.fu8=new A.ad(0,-1.55,-0.6)
D.fu9=new A.ad(1.78,4.25,0.08)
D.fua=new A.ad(27,0.6,19)
D.fub=new A.ad(0,5.5,-0.25)
D.fuc=new A.ad(0,0.7,0)
D.fud=new A.ad(-1.2,-1.6,2.2)
D.fue=new A.ad(11,25,0.3)
D.aPT=new A.ad(13,8.6,-9.5)
D.aPU=new A.ad(0.05,0.12,0.03)
D.aPV=new A.ad(8.2,0.95,-6.7)
D.fuf=new A.ad(40,1.2,22)
D.fug=new A.ad(0.7,1.5,-7.2)
D.fuh=new A.ad(0,15.3,-3.6)
D.fui=new A.ad(0.1,0,0)
D.fuj=new A.ad(0.32,0,0.5)
D.ful=new A.ad(-0.9,0,4.4)
D.fum=new A.ad(-6.5,7.2,-3)
D.fuo=new A.ad(6.2,0.18,2.1)
D.fuq=new A.ad(36,1.6,12)
D.fur=new A.ad(15.5,2.6,0)
D.fut=new A.ad(-8,-47.8,70)
D.fuu=new A.ad(14,1.5,3.5)
D.fuv=new A.ad(5.2,3.9,-7.82)
D.fuw=new A.ad(0,0.7,2.4)
D.aPW=new A.ad(2.3,7,0.5)
D.aPX=new A.ad(-13,8.6,9.5)
D.fuA=new A.ad(0,-1.99,0.14)
D.fuB=new A.ad(0.4,36,34)
D.aPY=new A.ad(0,0,-2.4)
D.fuD=new A.ad(0,-1.78,0.52)
D.fuE=new A.ad(0.12,0.1,0.03)
D.fuF=new A.ad(9.8,5,-7.58)
D.aPZ=new A.ad(0.5,1.4,2)
D.fuG=new A.ad(3.5,0.15,-7.2)
D.fuH=new A.ad(1.2,26.4,20)
D.fuI=new A.ad(-3.6,4,-7.82)
D.fuJ=new A.ad(0.3,2,36)
D.fuM=new A.ad(22,0.5,5)
D.fuP=new A.ad(150,1.2,70)
D.fuQ=new A.ad(-19.5,-1,-1.5)
D.fuR=new A.ad(80,0.5,60)
D.fuS=new A.ad(6.85,4,-3.2)
D.aQ0=new A.ad(0.12,3,1.9)
D.fuT=new A.ad(0.06,0.62,0.8)
D.fuV=new A.ad(9.55,5.7,-7.5)
D.aQ1=new A.ad(0,0.7,2)
D.fuX=new A.ad(0,47.25,-2.25)
D.fuY=new A.ad(0.5,0.5,0.04)
D.fuZ=new A.ad(0,3,0.9)
D.fv0=new A.ad(0.14,8,0.3)
D.fv1=new A.ad(1.9,0.05,1.35)
D.fv4=new A.ad(0.6,0.12,0.03)
D.fv5=new A.ad(-10.7,1.2,-6.4)
D.fv6=new A.ad(41,23,0.3)
D.fvE=new A.BB("noGround","It works, but there is no ground wire. Without a ground nothing protects you if an appliance fails.",!0,!1,!1)
D.fvF=new A.BB("short","A hot wire touched the ground. That is a short circuit: huge current, sparks and fire. The breaker slams off.",!1,!0,!0)
D.fvG=new A.BB("reversed","Hot and neutral are swapped (reversed polarity). Things still run, but the metal part of a lamp or appliance is live. That can shock someone. Black goes on brass, white on silver.",!0,!1,!1)
D.fvH=new A.BB("dead","The hot wire is not connected to the right place, so nothing gets power. The device is dead.",!1,!1,!1)
D.fvI=new A.BB("ok","Wired correctly. Hot, neutral and ground are all in the right place.",!0,!1,!1)
D.fvJ=new A.BB("bonded","The neutral and the ground were joined. A GFCI or the breaker may trip for no reason, and current can flow where it should not.",!0,!0,!1)
D.fvK=new A.BB("openNeutral","The neutral wire is not connected. Nothing runs, but the hot wire is still connected, so the slots can still be live. That is dangerous.",!1,!1,!1)
D.fvL=new A.BB("dead","The wires are on the taped LOAD screws, so no power reaches the outlet. Power comes in on LINE.",!1,!1,!1)
D.fvM=new A.BB("short","The hot and the neutral were joined together. That is a short circuit: a bang, sparks and a tripped breaker.",!1,!0,!0)
D.aQJ=new A.ay1(null)
D.fyt=new A.ayV(null)
D.aRf=new A.aDI(null)})();(function staticFields(){$.h31=null
$.h30=null
$.h9_=0
$.hAF=C.U(x.N,x.k)
$.hBf=C.U(x.N,x.k)
$.hvj=C.U(x.N,C.az("dB"))
$.ccq=C.a([],C.az("P<agV>"))
$.h02=0
$.aq8="music"
$.h2n=null
$.hB0=C.U(x.N,x.k)
$.hC2=C.U(x.N,x.k)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i7Z","hi_",()=>C.a([A.aS4("Wire a standard 120 volt receptacle: black to brass, white to silver, bare copper to green.",D.Pi,D.d6S,"outlet",D.cFM,"Wall outlet",new A.fjM()),A.aS4("A single-pole switch breaks the hot wire to the light: two black wires go on the two brass screws.",D.cTe,D.cGm,"switch",D.cEn,"Light switch",new A.fjN()),A.aS4("A GFCI protects you near water. Power comes in on LINE. The LOAD screws (covered with tape) feed other outlets.",D.Pi,D.cNs,"gfci",D.cVQ,"GFCI outlet",new A.fjO()),A.aS4("Join the house wires to the fixture wires with wire nuts: black to black, white to white, ground to ground.",D.Pi,D.cEv,"light",D.d60,"Ceiling light",new A.fjP()),A.aS4("A fan hangs from a strong fan-rated box. Join black, white and ground with wire nuts, then fasten the canopy.",D.Pi,D.cEw,"fan",D.cLc,"Ceiling fan",new A.fjQ())],C.az("P<a37>")))
w($,"i89","Kq",()=>{var v,u=C.a([],x.n)
for(v=0;v<10;++v)u.push(-72+16*v)
return u})
w($,"i6b","bBG",()=>{var v="led"
return C.a([A.awq("Both together","Make the light glow only when BOTH switches are ON.",2,new A.f71(),v),A.awq("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new A.f72(),v),A.awq("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new A.f73(),v),A.awq("Flip it","One switch only: make the light glow when the switch is OFF.",1,new A.f7a(),v),A.awq("Not both","Make the light go OFF only when both switches are ON.",2,new A.f7b(),v),A.awq("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new A.f7c(),"buzzer")],C.az("P<b8G>"))})
w($,"i6C","bBH",()=>C.a([A.nG("UNIVERSE","Earth, space and gravity",B.ZP,B.aV,new A.f7s()),A.nG("ELECTRONICS LAB","Batteries, wires, real circuits",T.Md,B.aV,new A.f7t()),A.nG("CONSTRUCTION LAB","Wiring, plumbing and a real 3D house",B.v0,B.aL,new A.f7u()),A.nG("DISCOVERY LAB","Body Explorer: a real 3D human",D.Z3,B.bb,new A.f7F()),A.nG("TOOLBOX","Converter, clock, games",G.ait,B.cy,new A.f7I()),A.nG("MOLECULE MAKER","Join atoms into real molecules",B.M8,B.hr,new A.f7J()),A.nG("DNA LAB","Copy DNA, build a protein",D.Z3,B.bY,new A.f7K()),A.nG("ECOSYSTEM LAB","Grass, rabbits and foxes",B.xz,B.bb,new A.f7L()),A.nG("BALANCE LAB","Levers, weight and torque",D.bz0,B.aM,new A.f7M()),A.nG("GEAR LAB","Teeth, speed and force",B.Fo,B.cy,new A.f7N()),A.nG("LASER MAZE","Bend the beam with mirrors",E.aiR,B.aE,new A.f7O()),A.nG("LIGHT MIXER","Match colours with light",D.bwK,B.ba,new A.f7v()),A.nG("CIPHER LAB","Make and crack secret codes",B.xL,B.aV,new A.f7w()),A.nG("REACTION LAB","Wire parts together",B.xP,B.bs,new A.f7x()),A.nG("SPARK PAINTER","Paint with light",B.Z5,B.bY,new A.f7y()),A.nG("ROCKET LANDER","Land softly on the pad",B.mU,B.aV,new A.f7z()),A.nG("ORBIT STUDIO","Slingshot planets",B.ma,B.cy,new A.f7A()),A.nG("SWARM STUDIO","A living school of fish",B.M8,B.bb,new A.f7B()),A.nG("CHAIN BURST","One tap, a whole chain",B.h3,B.bY,new A.f7C()),A.nG("TITLE ANIMATOR","Make a moving title",B.xH,B.cr,new A.f7D()),A.nG("CIRCUIT LAB","Connect logic, learn it",B.Zv,B.cx,new A.f7E()),A.nG("MARBLE MUSIC","Marbles ring the notes",D.bwq,B.ba,new A.f7G()),A.nG("ORBIT SEQUENCER","Planets play the tune",D.byQ,B.bz,new A.f7H())],C.az("P<bqd>")))
w($,"i86","pW",()=>{var v,u,t=C.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.Pa[v]
t.n(0,u.a,u)}return t})
w($,"i6c","agl",()=>C.a([A.EQ("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new A.f7d()),A.EQ("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new A.f7e()),A.EQ("Spin the motor","A battery and a motor in a loop will make it spin.",new A.f7f()),A.EQ("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new A.f7g()),A.EQ("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new A.f7h()),A.EQ("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new A.f74()),A.EQ("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new A.f75()),A.EQ("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new A.f76()),A.EQ("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new A.f77()),A.EQ("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new A.f78()),A.EQ("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new A.f79())],C.az("P<b8H>")))
w($,"i6E","hhj",()=>C.a([A.a_y("Spin the Wheel","Let luck decide","\ud83c\udfa1",B.aM,B.cb,new A.f7W()),A.a_y("Focus Timer","Work, then rest","\u23f1\ufe0f",B.cq,B.bL,new A.f7X()),A.a_y("Breathe","Calm down in a minute","\ud83e\udee7",B.hr,B.cu,new A.f7Y()),A.a_y("Draw Pad","Sketch and share","\ud83c\udfa8",B.bA,B.b2,new A.f7Z()),A.a_y("Memory Match","Find the pairs","\ud83c\udccf",B.aV,B.c8,new A.f8_()),A.a_y("Simon Sounds","Copy the tune","\ud83c\udfb5",B.cr,B.bl,new A.f80()),A.a_y("Tip & Split","Share the bill","\ud83e\uddfe",B.bb,B.aZ,new A.f81()),A.a_y("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",B.bz,B.aD,new A.f82())],C.az("P<bry>")))
w($,"i6D","hhi",()=>C.a([A.adJ("EARTH GLOBE","Turn it, tap a country",B.ma,B.aV,new A.f7P()),A.adJ("SOLAR SYSTEM","The Sun and its worlds",D.bwu,B.aM,new A.f7Q()),A.adJ("GRAVITY LAB","Drop, weigh, orbit",D.ajB,B.cy,new A.f7R()),A.adJ("BLACK HOLE","Throw in a star",B.ER,B.bz,new A.f7S()),A.adJ("GALAXY","Build, tilt, collide",B.xn,B.fV,new A.f7T()),A.adJ("SIZE COMPARE","Earth next to a star",D.bwM,B.bY,new A.f7U()),A.adJ("SEASONS & MOON","Why it is summer",B.uX,B.bs,new A.f7V())],C.az("P<brt>")))})()};
(a=>{a["KjKlevSnwD8KamfHmDIrQFuIwpU="]=a.current})($__dart_deferred_initializers__);