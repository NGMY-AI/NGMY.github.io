((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,X,A5,Ab,A6,O,Ac,Ad,A7,Ae,A8,U,P,Y,Af,N,Ag,Ah,Ai,Aj,A9,Ak,Al,Am,An,Ao,Ap,Z,V,Aq,Q,Ar,A_,R,A0,As,E,I,G,L,At,Au,Av,A1,Aa,S,T,Aw,Ax,Ay,C={
bDK(d){return C.igQ(d)},
igQ(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bDK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rx(B.nA(""),d,A.id,null,null).de(0,AA.a1e),$async$bDK)
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
return B.i($async$bDK,v)},
isX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.T7[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cW(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.ff(D.T7,new C.fRf())
if(w==null)w=A.d.gH(D.T7)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qS().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.am3(w.a,w.b,m,w,s,!1)},
imw(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.Ty,new C.fFM(),x.bd).aL(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iB5(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cd(b2,"{")
v=A.a.pi(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.V.aP(0,A.a.aw(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aQ(a5)
r=0
for(a6=x.j,a7=J.aS(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.qS().am(0,p)||J.eE(s,o)||J.ad(t)>=8)continue
J.c6(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dGa[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dI(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dI(J.t(q,"y")):0.25+A.i.ap(r,3)*0.3,0.1,0.9)
J.c6(t,new B.dY([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aS(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.o.D(A.i.M(B.dI(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dI(J.t(g,3))),0,1)
if(J.eE(s,f)&&J.eE(s,e)&&!J.z(f,e))J.c6(i,new B.b7([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aS(a0==null?A.c9:a0)
while(a0.C()){a2=a0.gP(a0)
J.c6(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.n7(a0,B.v(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.am3(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
irq(d){var w,v,u=C.htS()
d.B(u)
for(w=0;w<60;++w)u.vS(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fNA(u))&&!A.d.cw(v,new C.fNB())},
irp(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qS().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.i.R(t.r)+" ohms")
if(A.d.q(D.dEe,p))q.push("level "+A.i.R(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.R(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aL(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.i.a9(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aL(s,"\n")+"\nWires: "+A.d.aL(l,"; ")},
ifk(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aL(v,"\n")+"\n\n"}v=A.d.aL(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
isW(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qS().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Ty[u]
if(A.d.aR(w,new C.fRc(s)))if(!B.cW(r,s.b.toLowerCase(),0))v=B.cW(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fRd(e),B.U(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.a9(A.d.cD(w,0,new C.fRe())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qS().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
am3:function am3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fRf:function fRf(){},
fFM:function fFM(){},
fNA:function fNA(d){this.a=d},
fNB:function fNB(){},
fRc:function fRc(d){this.a=d},
fRd:function fRd(d){this.a=d},
fRe:function fRe(){},
Xf:function Xf(d,e){this.c=d
this.a=e},
bo2:function bo2(d,e,f,g,h){var _=this
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
emZ:function emZ(d){this.a=d},
en_:function en_(d,e,f){this.a=d
this.b=e
this.c=f},
en0:function en0(d){this.a=d},
enb:function enb(d){this.a=d},
enc:function enc(d,e){this.a=d
this.b=e},
en7:function en7(d){this.a=d},
en5:function en5(d,e){this.a=d
this.b=e},
en6:function en6(d,e,f){this.a=d
this.b=e
this.c=f},
en8:function en8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
en3:function en3(d){this.a=d},
en4:function en4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
en9:function en9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
en2:function en2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ena:function ena(d,e){this.a=d
this.b=e},
en1:function en1(d,e){this.a=d
this.b=e},
enf:function enf(d){this.a=d},
ene:function ene(d){this.a=d},
eng:function eng(d){this.a=d},
end:function end(d){this.a=d},
enh:function enh(d,e){this.a=d
this.b=e},
eni:function eni(d,e){this.a=d
this.b=e},
enj:function enj(d,e){this.a=d
this.b=e},
enk:function enk(d,e){this.a=d
this.b=e},
bE5(d,e,f){var w=null
return B.x(B.a([B.c(d,w,w,w,w,w,w,D.fGq,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,A.p)},
hI8(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.al,B.c(e,w,w,w,w,w,w,A.Bw,A.K,w,w),A.aA,B.bZ(A.fT,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.M,0,A.p),A.f,w,w,new B.o(D.bke,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Hb:function Hb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vG:function vG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XC:function XC(d){this.a=d},
aHd:function aHd(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.he$=h
_.mc$=i
_.fd$=j
_.hf$=k
_.bv$=l
_.aa$=m
_.c=_.a=null},
eCm:function eCm(){},
eCG:function eCG(d){this.a=d},
eCF:function eCF(d,e){this.a=d
this.b=e},
eCH:function eCH(){},
eCI:function eCI(){},
eCo:function eCo(d,e,f){this.a=d
this.b=e
this.c=f},
eCn:function eCn(d,e){this.a=d
this.b=e},
eCd:function eCd(d){this.a=d},
eCe:function eCe(d){this.a=d},
eCf:function eCf(d){this.a=d},
eCg:function eCg(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d){this.a=d},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d){this.a=d},
eCa:function eCa(d){this.a=d},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCu:function eCu(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCr:function eCr(d){this.a=d},
eCw:function eCw(d){this.a=d},
eCq:function eCq(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCy:function eCy(d){this.a=d},
eCp:function eCp(d){this.a=d},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCB:function eCB(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCs:function eCs(d){this.a=d},
bkV:function bkV(d,e){this.b=d
this.a=e},
aPg:function aPg(){},
bBJ:function bBJ(){},
hCZ(){var w=$.hCX
return w==null?$.hCX=$.oJ().cYX("assets/data/three.min.js"):w},
hCY(){var w=$.hCW
return w==null?$.hCW=C.cRA():w},
cRA(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cRA=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oJ().iu(0,"assets/data/body3d.bin"),$async$cRA)
case 3:d=a1
$.hD_=J.ex(A.dK.gaS(d),d.byteOffset,d.byteLength)
t=B.TC(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jX(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.drt[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a54(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b74))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bdO(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cRA,v)},
c8I(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c8I=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hg(B.a([C.hCY(),C.hCZ()],x.D),x.K),$async$c8I)
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
return B.i($async$c8I,v)},
aVv:function aVv(d,e,f){this.a=d
this.b=e
this.c=f},
a54:function a54(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bdO:function bdO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
W3:function W3(d){this.a=d},
aFG:function aFG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.ax=_.at=!1
_.ay=""
_.ch=l
_.CW=2
_.cx=1
_.cy=null
_.db=0.5
_.dx=0.05
_.fr=_.dy=1
_.fx=m
_.fy=n
_.go=!0
_.id=0
_.k1=1
_.k2=o
_.k3=0
_.k4=72
_.ok=!1
_.p1=0
_.p2=!1
_.p3=null
_.p4=0
_.R8=""
_.RG=p
_.rx=q
_.ry=r
_.to=0
_.he$=s
_.mc$=t
_.fd$=u
_.hf$=v
_.bv$=w
_.aa$=a0
_.c=_.a=null},
dSQ:function dSQ(d){this.a=d},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSq:function dSq(d){this.a=d},
dSr:function dSr(d,e){this.a=d
this.b=e},
dSs:function dSs(d){this.a=d},
dSt:function dSt(){},
dSR:function dSR(){},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSv:function dSv(d){this.a=d},
dSw:function dSw(){},
dSx:function dSx(d){this.a=d},
dSz:function dSz(d,e){this.a=d
this.b=e},
dSy:function dSy(d){this.a=d},
dSn:function dSn(d,e,f){this.a=d
this.b=e
this.c=f},
dSo:function dSo(d){this.a=d},
dSp:function dSp(d){this.a=d},
dSG:function dSG(d){this.a=d},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSJ:function dSJ(d){this.a=d},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e){this.a=d
this.b=e},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSL:function dSL(d){this.a=d},
dSD:function dSD(d){this.a=d},
dSM:function dSM(d){this.a=d},
dSC:function dSC(d){this.a=d},
dSN:function dSN(d){this.a=d},
dSB:function dSB(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSA:function dSA(d){this.a=d},
aOl:function aOl(){},
aOm:function aOm(){},
c8J:function c8J(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c8K:function c8K(d,e){this.a=d
this.b=e},
c8L:function c8L(d){this.a=d},
aB1(d,e,f,g,h){return new C.beB(d,e,f,g,h)},
hjI(d,e,f,g,h,i){return $.icx.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.cYJ(d,e,f,i,g,h))},
yX:function yX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dj:function Dj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nY:function nY(d,e,f){this.a=d
this.b=e
this.c=f},
beB:function beB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fyO:function fyO(){},
fyP:function fyP(){},
fyQ:function fyQ(){},
fyX:function fyX(){},
fyY:function fyY(){},
fyZ:function fyZ(){},
Wa:function Wa(d){this.a=d},
aFI:function aFI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.he$=m
_.mc$=n
_.fd$=o
_.hf$=p
_.bv$=q
_.aa$=r
_.c=_.a=null},
dUw:function dUw(d){this.a=d},
dUa:function dUa(d,e){this.a=d
this.b=e},
dUd:function dUd(){},
dUx:function dUx(){},
dU8:function dU8(d,e){this.a=d
this.b=e},
dU9:function dU9(d,e){this.a=d
this.b=e},
dUe:function dUe(d,e,f){this.a=d
this.b=e
this.c=f},
dU3:function dU3(){},
dU4:function dU4(){},
dU5:function dU5(d){this.a=d},
dU6:function dU6(d,e){this.a=d
this.b=e},
dU7:function dU7(d,e,f){this.a=d
this.b=e
this.c=f},
dUf:function dUf(){},
dUg:function dUg(d,e){this.a=d
this.b=e},
dUh:function dUh(d){this.a=d},
dUc:function dUc(d,e){this.a=d
this.b=e},
dUb:function dUb(d){this.a=d},
dU2:function dU2(d,e,f){this.a=d
this.b=e
this.c=f},
dUq:function dUq(d){this.a=d},
dUp:function dUp(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUo:function dUo(d){this.a=d},
dUm:function dUm(d){this.a=d},
dUn:function dUn(d){this.a=d},
dUl:function dUl(d){this.a=d},
dUi:function dUi(d){this.a=d},
dUk:function dUk(d){this.a=d},
dUs:function dUs(d,e){this.a=d
this.b=e},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUu:function dUu(d){this.a=d},
dUj:function dUj(d){this.a=d},
dUv:function dUv(d,e){this.a=d
this.b=e},
beT:function beT(d,e){this.b=d
this.a=e},
cYJ:function cYJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOq:function aOq(){},
bBt:function bBt(){},
i37(){return new C.Ox(null)},
RE(d,e,f,g,h){return new C.bx0(d,e,f,g,h)},
bvm(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hkf(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iuX(){return B.j2("construction","")},
Ox:function Ox(d){this.a=d},
Lt:function Lt(d,e){this.a=d
this.b=e},
Bm:function Bm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFZ:function aFZ(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e_G:function e_G(d,e){this.a=d
this.b=e},
e_F:function e_F(d){this.a=d},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_H:function e_H(d){this.a=d},
bx0:function bx0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fze:function fze(){},
fzf:function fzf(){},
fzg:function fzg(){},
fzh:function fzh(){},
fzi:function fzi(){},
fzj:function fzj(){},
fzk:function fzk(){},
fzl:function fzl(){},
fzm:function fzm(){},
bvn:function bvn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
few:function few(d){this.a=d},
fev:function fev(d,e){this.a=d
this.b=e},
fet:function fet(d){this.a=d},
fex:function fex(d){this.a=d},
feu:function feu(d,e){this.a=d
this.b=e},
agQ:function agQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afH:function afH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rx:function Rx(d,e,f,g,h,i,j,k,l,m){var _=this
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
bwo:function bwo(d,e){this.b=d
this.a=e},
bvU:function bvU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdw:function bdw(d,e){this.b=d
this.a=e},
aKi:function aKi(d,e){this.c=d
this.a=e},
aKj:function aKj(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.ch=-1
_.dw$=e
_.bd$=f
_.c=_.a=null},
fec:function fec(d){this.a=d},
feb:function feb(d){this.a=d},
fe1:function fe1(d){this.a=d},
fe2:function fe2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fe3:function fe3(d){this.a=d},
fe0:function fe0(d,e){this.a=d
this.b=e},
fe4:function fe4(d){this.a=d},
fea:function fea(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fe9:function fe9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fe7:function fe7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fe6:function fe6(d,e,f){this.a=d
this.b=e
this.c=f},
fe8:function fe8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fe5:function fe5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fek:function fek(d){this.a=d},
fej:function fej(d){this.a=d},
fel:function fel(d,e){this.a=d
this.b=e},
fem:function fem(d,e){this.a=d
this.b=e},
fen:function fen(d,e){this.a=d
this.b=e},
fei:function fei(d,e,f){this.a=d
this.b=e
this.c=f},
feo:function feo(d,e,f){this.a=d
this.b=e
this.c=f},
feh:function feh(d){this.a=d},
fed:function fed(d){this.a=d},
fep:function fep(d){this.a=d},
feq:function feq(d){this.a=d},
feg:function feg(d,e){this.a=d
this.b=e},
fer:function fer(d,e){this.a=d
this.b=e},
fef:function fef(d,e){this.a=d
this.b=e},
fes:function fes(d,e){this.a=d
this.b=e},
fee:function fee(d,e){this.a=d
this.b=e},
fdZ:function fdZ(){},
fe_:function fe_(){},
buZ:function buZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buo:function buo(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bec:function bec(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buq:function buq(d,e,f){this.b=d
this.c=e
this.a=f},
byu:function byu(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQ6:function aQ6(){},
hJJ(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a6(0,new B.r(w,0)),u=e.aI(0,new B.r(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a6(0,v.aO(0,s*t*f)).a6(0,u.aO(0,s*f*f)).a6(0,e.aO(0,f*f*f))},
bkU(d,e,f,g,h,i){return $.id5.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.du8(d,e,f,i,g,h))},
a28:function a28(d,e){this.a=d
this.b=e},
qJ:function qJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rs:function rs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dn:function Dn(d,e){this.a=d
this.b=e},
a05:function a05(d,e){this.a=d
this.b=e},
agE:function agE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2l:function a2l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Dy:function Dy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adv:function adv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adO:function adO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afK:function afK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkS:function bkS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.W$=0
_.V$=t
_.c2$=_.bT$=0},
duc:function duc(d){this.a=d},
dud:function dud(d){this.a=d},
du9:function du9(d,e){this.a=d
this.b=e},
dua:function dua(d){this.a=d},
dub:function dub(d){this.a=d},
due:function due(d){this.a=d},
duf:function duf(d){this.a=d},
dug:function dug(d){this.a=d},
duh:function duh(d){this.a=d},
dui:function dui(d){this.a=d},
duj:function duj(d){this.a=d},
duk:function duk(d){this.a=d},
dul:function dul(d){this.a=d},
dum:function dum(d){this.a=d},
GX:function GX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XB:function XB(d){this.a=d},
aHc:function aHc(d,e,f,g,h,i,j){var _=this
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
_.bv$=i
_.aa$=j
_.c=_.a=null},
eBH:function eBH(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBy:function eBy(){},
eBz:function eBz(){},
eBC:function eBC(){},
eBD:function eBD(d,e,f){this.a=d
this.b=e
this.c=f},
eBE:function eBE(d){this.a=d},
eBF:function eBF(d){this.a=d},
eBA:function eBA(){},
eBB:function eBB(d){this.a=d},
eC6:function eC6(d){this.a=d},
eBG:function eBG(){},
eBs:function eBs(d){this.a=d},
eBJ:function eBJ(d){this.a=d},
eBI:function eBI(d){this.a=d},
eBL:function eBL(){},
eBK:function eBK(d,e){this.a=d
this.b=e},
eBv:function eBv(){},
eBt:function eBt(d){this.a=d},
eBu:function eBu(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC5:function eC5(d){this.a=d},
eBV:function eBV(d,e){this.a=d
this.b=e},
eC2:function eC2(d){this.a=d},
eC0:function eC0(d){this.a=d},
eC1:function eC1(d){this.a=d},
eC_:function eC_(d){this.a=d},
eBZ:function eBZ(d){this.a=d},
eBW:function eBW(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBY:function eBY(d){this.a=d},
eBx:function eBx(){},
eBR:function eBR(d){this.a=d},
eBS:function eBS(d){this.a=d},
eBQ:function eBQ(d){this.a=d},
eBT:function eBT(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBU:function eBU(d){this.a=d},
eBO:function eBO(d){this.a=d},
eBN:function eBN(d){this.a=d},
eBM:function eBM(d,e){this.a=d
this.b=e},
bkT:function bkT(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
du8:function du8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPe:function aPe(){},
hPy(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcL()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
htS(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6c(w,v,u,A.cR,B.S(x.N,x.y))},
hXI(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.htT(d),d.d*f.b)},
htT(d){return 42+(D.mC.am(0,d.b)?(d.ch-1)*38:0)},
ih7(d){var w,v,u,t,s
if(d.A(0,$.hFJ))return $.hSF()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hFJ=d
return $.ih8=new Float32Array(B.ca(w))},
eo:function eo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u8:function u8(d,e,f,g){var _=this
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
ac9:function ac9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adh:function adh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6c:function a6c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bRZ:function bRZ(){},
bS9:function bS9(d){this.a=d},
bS4:function bS4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSa:function bSa(d){this.a=d},
bSb:function bSb(d){this.a=d},
bSd:function bSd(d){this.a=d},
bSe:function bSe(d){this.a=d},
bSc:function bSc(d){this.a=d},
bSf:function bSf(d,e,f){this.a=d
this.b=e
this.c=f},
bSg:function bSg(d){this.a=d},
bS0:function bS0(d){this.a=d},
bS1:function bS1(d){this.a=d},
bS_:function bS_(d){this.a=d},
bS2:function bS2(d,e,f){this.a=d
this.b=e
this.c=f},
bS3:function bS3(d){this.a=d},
bRY:function bRY(d){this.a=d},
bSh:function bSh(d,e){this.a=d
this.b=e},
bS5:function bS5(d,e){this.a=d
this.b=e},
bS8:function bS8(d){this.a=d},
bS7:function bS7(d){this.a=d},
bS6:function bS6(d){this.a=d},
akR:function akR(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bMj:function bMj(){},
bMk:function bMk(){},
bMi:function bMi(){},
n7:function n7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwg:function cwg(d){this.a=d},
iB0(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h35(),c9=new C.h37(),d0=new C.h38(),d1=new C.h36(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.cj,A.bP))
d3.ah(D.eAN,D.exM,c9.$2(A.e3,1.4))
d3.ah(D.exr,D.exp,c9.$2(A.bz,2.4))
d3.ah(D.exs,V.aNN,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fA.j(0.5))
d2.y=A.HV
d3.O(D.ex7,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.i.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aTZ,A.aS,A.cA))
d3.O(A.cO,16,c8.$1(A.bz))
d3.O(A.cO,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jr(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eAF,2.4,c8.$1(c7?A.bi:A.an))
d3.O(D.aOn,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cQ))
d2=$.T().r
t=x.v
s=new B.aH(d2,A.aj,c6,c6,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bA())
d3.af(s,c8.$1(A.fA.j(0.35)))
if(c7){d2=new B.aH(d2,A.aj,c6,c6,B.a([],t))
d2.E(new B.aZ(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.aB.j(0.7)))}d3.af(s,c9.$2(A.ab,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jr(0,d4.y)
d3.ah(D.aae,D.aO9,c9.$2(A.bO,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.r(Math.sin(d2+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c8.$1(A.f0))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hC,3,c8.$1(c7?A.bi:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.TL[p]
d3.ah(new B.r(o*0.4,1),new B.r(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eAw,D.exw,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c1(B.bY(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bA())
d3.af(w,d1.$3(D.fmu,A.aQ,A.d9))
d3.aD(D.flC,c8.$1(A.cX))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jr(0,d4.y*2)
d3.ah(A.J,D.exD,c9.$2(A.bO,2.4))
d3.ah(A.aaa,D.exC,c9.$2(A.i_,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eE.j(1-u)))}return!0
case"torch":if(c7){v=A.i.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.bM.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fmA,A.bj,A.cu))
n=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bA())
d3.af(n,c8.$1(A.cQ))
d3.O(D.exI,7,c8.$1(c7?A.c:A.cX))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.n3))
if(c7)m=d4.ax>0.5||A.o.F(A.i.bc(d5*17),3)!==0
else m=!1
l=m?A.c2:D.buY
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c2.j(0.35))
t.y=A.nc
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eAT,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fmH,A.bO,A.bj))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bM.j(0.75):A.aw))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jr(0,d4.y*0.5)
d3.c1(B.bY(A.J,7,22),c8.$1(A.d9))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.n3))
if(c7)d6.$5(d3,"0:"+A.a.b0(A.o.v(59-A.o.F(A.i.bc(d5),60)),2,"0"),D.exJ,A.be,6.5)
d3.O(D.exX,4,c8.$1(A.cX))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.Kn,10,c8.$1(c7?A.bt:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jr(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eBB,A.c,16)
d2.restore()
d3.O(A.kN,6,c8.$1(A.db))
d3.O(A.kN,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cQ(B.bX(A.Kn,14+v*6+A.i.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bt.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eAS,D.eBu,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jr(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fmv,A.bO,A.an))
d3.O(D.aNR,8,c8.$1(A.aw))
d3.O(D.aNR,4.5,c8.$1(c7?A.aH:A.cu))
d3.O(D.eAQ,2.2,c8.$1(c7&&A.o.F(A.i.bc(d5*1.6),2)===0?A.aB:A.kF))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eB_,A.aB,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fmD,A.i0,A.fw))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dV))
if(c7){d2=d5*2.3
d3.O(new B.r(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aD(new B.a3(-18,t,-15.6,t+8),c8.$1(A.be))
d2=-9+Math.sin(d2-0.4)*6
d3.aD(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c2))}d3.O(D.eAL,4,c8.$1(A.b7))
d3.O(D.exE,2.4,c8.$1(A.aB))
d3.O(D.exV,2.4,c8.$1(A.bi))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.aw))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dV))
if(c7){d2=$.T()
t=B.a([],x.v)
k=new B.aH(d2.r,A.aj,c6,c6,t)
for(d2=d5*0.5,o=-25;o<=25;++o){u=A.i.F((o+25)/50-d2,1)
if(u<0.1)j=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)j=0.6
else{q=u<0.2?-0.4:0
j=q}i=-4+j*11
if(o===-25){q=new B.aZ(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}}d3.af(k,c9.$2(A.be,1.8))
d6.$5(d3,"72",D.exF,A.hG,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eB4,A.hG.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eAV,3,c8.$1(c7?A.bi:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cC.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aD(D.fmx,c8.$1(F.wC))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nK(0,-1,1)
d3.c1(B.bY(A.J,8,14),c8.$1(A.cS))
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.c7))
d3.O(D.eyH,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.i.F(d2+v*0.2,1)
d3.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c9.$2(A.ab,1))}}return!0
case"lighthouse":d2=$.T().r
t=x.v
g=new B.aH(d2,A.aj,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bA())
d3.af(g,d1.$3(D.fn8,A.c,A.bE))
d3.aD(D.fn4,c8.$1(c7?A.eE:A.bz))
q=new B.aH(d2,A.aj,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bA())
d3.af(q,c8.$1(A.ey))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aH(d2,A.aj,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eE.j(0.45)))
d2=c8.$1(A.eE.j(0.35))
d2.y=A.HV
d3.O(D.ex8,14,d2)}return!0
case"discoball":d3.ah(D.exa,W.aNI,c9.$2(A.cX,1.4))
d3.O(A.J,16,d1.$3(D.fmg,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.r(-16,d2),new B.r(16,d2),c9.$2(A.dF,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c9.$2(A.dF,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.o.F(v,3)*6
d3.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dsx[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fmd,A.cA,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fm5,A.bn,A.bP))
d3.ah(H.aNK,D.exc,c9.$2(A.bz,1.6))
d3.O(D.exd,2.2,c8.$1(c7?A.aB:A.bz))
d=c7&&A.i.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a7C[p]
if(c7)d2=d?A.bc:A.ft
else d2=A.cu
d3.O(new B.r(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jr(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aa5,c9.$2(A.bP,4))
d2.restore()
d3.ah(D.eAD,D.eAY,c9.$2(A.bP,4))
d3.aD(D.fn3,c8.$1(c7?A.bc.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aEt[p]+1,d2,10,14,2)
q=B.ap(A.bM,A.d9,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fmw,A.bO,A.bj))
for(p=0;p<2;++p){o=D.aEt[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fK:A.aw))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cS.j(0.5))
t.y=N.oO
d3.aq(d2,t)}}d3.ah(D.ey4,D.eyp,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cu))
for(d2=d5*90,v=0;v<9;++v){a1=A.i.F(d2+v*40,360)
l=c7?new AD.pA(1,a1,0.8,1).jd():A.cQ
if(c7){t=c8.$1(l.j(0.45))
t.y=N.oO
d3.O(new B.r(-30+v*7.5,1),7,t)}d3.O(new B.r(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.cX))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fmm,A.cC,A.GJ))
d3.O(D.eB7,8,c8.$1(A.t5))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jr(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fA,2.4))}d2.restore()
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bP,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.r(26,6-A.i.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hj))
d3.O(D.ezl,3.2,c8.$1(A.hj.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jr(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fmy,A.hY,A.uK))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cu))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cQ))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.r(24+t,q),new B.r(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cS.j(0.4))
d2.y=N.oO
d3.O(D.exW,8,d2)}return!0
case"headphones":d3.cQ(B.bY(A.dR,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.TK[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a3(t,0,t+14,20),A.bl,A.mZ))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.r(o,10),10+v*5+A.i.F(d2,5))
h=t?2.2:-0.9
d3.cQ(q,h,1.6,!1,c9.$2(A.eF.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.r(-4,-8-A.i.F(d5*14,8)),A.kW,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cu))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cu))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fma,A.cX,A.cQ))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dV))
if(c7){a2=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.b0(A.o.v(B.d6(a2)),2,"0")+":"+A.a.b0(A.o.v(B.fG(a2)),2,"0"),D.exj,A.be,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.Gr,A.hG,j)
d2.toString
d6.$5(d3,"\u2665",new B.r(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.o.F(A.i.bc(d5*2),6)),A.dR,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.n3))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bP,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nb(a3),$.mQ(),!0)
d2.translate(-27,-19)
K.Mp(d3,D.fty,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.wI))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a3(a4.a,a4.b,a4.c,a4.d),A.dU,A.dg))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aOg,9,c8.$1(A.aw))
d3.O(D.aOg,6,c9.$2(A.d9,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dV))
d2=A.i.a9(d4.db,1)
t=A.i.a9(c7?d4.dx:d4.e,1)
q=c7?A.be:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.ezv,q,8.2)
d3.O(D.exN,2.4,c8.$1(c7?A.bi:A.aM))
d6.$5(d3,"IN",D.eAZ,A.ab,6)
d6.$5(d3,"OUT",D.ezb,A.ab,6)
return!0
case"regulator":a5=c7?A.i.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bP,A.aB,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aa3,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fm6,A.cQ,A.il))
d6.$5(d3,"7805",D.aae,A.ab,8)
for(p=0;p<3;++p){d2=D.dzt[p]-1
d3.aD(new B.a3(d2,14,d2+2,22),c8.$1(A.dS))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.i.F(d2+v*0.33,1)
d3.O(new B.r(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eBx,A.bq,9)
return!0
case"diode":d3.ah(D.aOl,D.aO3,c9.$2(A.dS,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.au.j(0.85)))
d3.aD(D.flQ,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eE.j(0.4))
t.y=A.l5
d3.aq(d2,t)}d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.b7))
d6.$5(d3,"one way",D.eAO,A.aF,8)
return!0
case"ldr":d3.ah(D.aOl,D.aae,c9.$2(A.dS,2.4))
d3.ah(D.aO9,D.aO3,c9.$2(A.dS,2.4))
d3.O(A.J,12,c8.$1(A.d9))
d3.O(A.J,12,c9.$2(A.tb,1.6))
d2=$.T()
t=B.a([],x.v)
a6=new B.aH(d2.r,A.aj,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bM,1.4))
d2=B.ap(A.bz,A.eE,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.r(-6,-26),d2,14)
d6.$5(d3,""+A.i.R(20+980*(1-d4.f))+"\u03a9",D.eAE,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.ex
break
case"sonytv":t=A.rX
break
case"appletv":t=A.dS
break
default:t=F.Cf
break}a7=d2==="lgtv"||d2==="appletv"
d3.aq(d0.$5(-36,-24,72,46,6),c8.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=d0.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c7){h=d3.c
J.bs(h.save())
h.clipRRect(B.nb(a3),$.mQ(),!0)
h.translate(t,q)
K.h3l(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eys,1.6,c8.$1(A.be))}else{d3.aq(a3,c8.$1(D.wI))
h=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bA())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bV(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hLu(),c8.$1(A.cv))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aTz
break
case"sonytv":d2=F.aTr
break
default:d2=F.aTt
break}a8=B.h0(c6,A.cH,c6,c6,c6,B.d1(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.F,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.cd,c6,A.e2,A.ce)
a8.eY()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a4(d3,new B.r(-t/2,19.6-d2.gb8(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mC.h(0,d2)
b0=a9.b===D.Be
b1=b0?44:30
b2=b0?48:54
t=-b1/2
q=-b2/2
h=b0?5:6.5
w=d0.$5(t,q-2,b1,b2,h)
h=w.a
b3=w.b
b4=w.c
b5=w.d
b6=a9.c
b7=B.ap(b6,A.c,0.35)
b7.toString
d3.aq(w,d1.$3(new B.a3(h,b3,b4,b5),b7,b6))
a3=d0.$5(t+2,q,b1-4,b2-4,3.5)
if(c7){t=d3.c
J.bs(t.save())
t.clipRRect(B.nb(a3),$.mQ(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.Mp(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.wI))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.r(0,t),new B.r(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.r(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cQ))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.eBE,A.aw,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d3.aD(new B.a3(-11,d2,-11+t,d2+1.4),c8.$1(A.bj))}d3.O(A.aa1,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fmI,A.cA,A.bj))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nb(b8),$.mQ(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.Mp(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.wI))
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akd))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bj))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fmM,A.cj,A.cA))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nb(b9),$.mQ(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.Mp(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.wI))
d3.O(D.ewW,2,c8.$1(A.bP))
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akd))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.ex))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nb(c0),$.mQ(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.Mp(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.wI))
d3.aD(D.fmT,c8.$1(A.bj))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.cX))
return!0
case"projector":if(c7){d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eE.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nb(c1),$.mQ(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.Mp(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fmz,A.hW,A.cX))
d3.O(D.aNP,7,c8.$1(A.aw))
d3.O(D.aNP,4,c8.$1(c7?A.eE:A.cu))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.r(d2,2),new B.r(d2,14),c9.$2(A.dF,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.n3))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.ch(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.i.F(d5*6,48)
d3.O(new B.r(-26+d2,4-d2*0.1),2.4,c8.$1(A.be))
d6.$5(d3,""+(88+A.o.F(A.i.bc(d5*2),5)),H.aO8,A.c,10)
d6.$5(d3,"km/h",D.ezj,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.cX,A.cQ))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nb(c5),$.mQ(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.Mp(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bl.j(0.2))
d2.y=A.nc
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eBe,D.eBj,c9.$2(A.bj,4))
d3.ah(D.eyu,D.eyK,c9.$2(A.bj,4))
return!0}return!1},
h35:function h35(){},
h37:function h37(){},
h38:function h38(){},
h36:function h36(){},
hsI(d,e,f,g){return new C.akP(d,g,f,e)},
GI(d,e,f){return new C.beC(d,e,f)},
akP:function akP(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
akQ:function akQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.e=_.d=null
_.f=!1
_.r=null
_.w=d
_.Q=_.z=_.y=_.x=null
_.as=e
_.at=f
_.ax=0
_.ch=_.ay=null
_.CW=g
_.cx=h
_.cy=!1
_.db=null
_.he$=i
_.mc$=j
_.fd$=k
_.hf$=l
_.bv$=m
_.aa$=n
_.c=_.a=null},
bLW:function bLW(d,e){this.a=d
this.b=e},
bLX:function bLX(d){this.a=d},
bLV:function bLV(d){this.a=d},
bLY:function bLY(){},
bLZ:function bLZ(d){this.a=d},
bM_:function bM_(d,e,f){this.a=d
this.b=e
this.c=f},
bLU:function bLU(d,e){this.a=d
this.b=e},
bLR:function bLR(d,e){this.a=d
this.b=e},
bLS:function bLS(d,e,f){this.a=d
this.b=e
this.c=f},
bLL:function bLL(d,e){this.a=d
this.b=e},
bLM:function bLM(){},
bLT:function bLT(d,e,f){this.a=d
this.b=e
this.c=f},
bLQ:function bLQ(d,e){this.a=d
this.b=e},
bLN:function bLN(d,e){this.a=d
this.b=e},
bLO:function bLO(d,e){this.a=d
this.b=e},
bLP:function bLP(d){this.a=d},
bMf:function bMf(d){this.a=d},
bMg:function bMg(){},
bLl:function bLl(){},
bMh:function bMh(d,e){this.a=d
this.b=e},
bMe:function bMe(d,e){this.a=d
this.b=e},
bM9:function bM9(d){this.a=d},
bM6:function bM6(d,e,f){this.a=d
this.b=e
this.c=f},
bM7:function bM7(d,e){this.a=d
this.b=e},
bMa:function bMa(d){this.a=d},
bM4:function bM4(d,e){this.a=d
this.b=e},
bM5:function bM5(d,e){this.a=d
this.b=e},
bM8:function bM8(d){this.a=d},
bMb:function bMb(d){this.a=d},
bM1:function bM1(d,e){this.a=d
this.b=e},
bM2:function bM2(d,e){this.a=d
this.b=e},
bM3:function bM3(d,e){this.a=d
this.b=e},
bMc:function bMc(d){this.a=d},
bM0:function bM0(d){this.a=d},
bMd:function bMd(d){this.a=d},
bLm:function bLm(d,e){this.a=d
this.b=e},
bLI:function bLI(d,e){this.a=d
this.b=e},
bLK:function bLK(d,e){this.a=d
this.b=e},
bLJ:function bLJ(d,e){this.a=d
this.b=e},
bLH:function bLH(){},
bLt:function bLt(d){this.a=d},
bLs:function bLs(d){this.a=d},
bLu:function bLu(d,e){this.a=d
this.b=e},
bLv:function bLv(d){this.a=d},
bLr:function bLr(d){this.a=d},
bLz:function bLz(d,e,f){this.a=d
this.b=e
this.c=f},
bLq:function bLq(d,e){this.a=d
this.b=e},
bLA:function bLA(d,e){this.a=d
this.b=e},
bLB:function bLB(d,e){this.a=d
this.b=e},
bLC:function bLC(d,e){this.a=d
this.b=e},
bLD:function bLD(d,e,f){this.a=d
this.b=e
this.c=f},
bLp:function bLp(d,e){this.a=d
this.b=e},
bLE:function bLE(d,e,f){this.a=d
this.b=e
this.c=f},
bLo:function bLo(d,e){this.a=d
this.b=e},
bLF:function bLF(d,e,f){this.a=d
this.b=e
this.c=f},
bLn:function bLn(d,e){this.a=d
this.b=e},
bLG:function bLG(d){this.a=d},
bLw:function bLw(d){this.a=d},
bLx:function bLx(d){this.a=d},
bLy:function bLy(d){this.a=d},
beC:function beC(d,e,f){this.a=d
this.b=e
this.c=f},
fz_:function fz_(){},
fz0:function fz0(){},
fz1:function fz1(){},
fyN:function fyN(){},
fz2:function fz2(){},
fyM:function fyM(){},
fz3:function fz3(){},
fyR:function fyR(){},
fyL:function fyL(){},
fyS:function fyS(){},
fyK:function fyK(){},
fyT:function fyT(){},
fyJ:function fyJ(){},
fyU:function fyU(){},
fyH:function fyH(){},
fyI:function fyI(){},
fyV:function fyV(){},
fyF:function fyF(){},
fyG:function fyG(){},
fyW:function fyW(){},
fyE:function fyE(){},
WM:function WM(d){this.a=d},
aGb:function aGb(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d){this.a=d},
e4R:function e4R(){},
e4S:function e4S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4T:function e4T(){},
e4G:function e4G(d){this.a=d},
e4F:function e4F(d,e,f){this.a=d
this.b=e
this.c=f},
e4E:function e4E(d,e){this.a=d
this.b=e},
e4C:function e4C(d){this.a=d},
e4D:function e4D(){},
e4P:function e4P(d){this.a=d},
e4O:function e4O(d){this.a=d},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4K:function e4K(d){this.a=d},
e4L:function e4L(){},
e4N:function e4N(d,e,f){this.a=d
this.b=e
this.c=f},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4J:function e4J(){},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d,e){this.a=d
this.b=e},
e4U:function e4U(){},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d){this.a=d},
aA8:function aA8(d,e){this.c=d
this.a=e},
bcH:function bcH(d,e){var _=this
_.d=$
_.bv$=d
_.aa$=e
_.c=_.a=null},
cNP:function cNP(d){this.a=d},
bcG:function bcG(d,e){this.b=d
this.a=e},
cNO:function cNO(d){this.a=d},
aAt:function aAt(){},
aAu:function aAu(){},
aMN:function aMN(){},
bBw:function bBw(){},
iB1(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vW,23)
$.T()
b8=B.L()
b8.r=A.aw.gp(0)
b9.O(A.vW,25,b8)
b8=B.L()
b8.san(D.eKn.az(0,v))
b9.O(A.vW,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.r=A.bq.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.r(b8*17,s*17-2),new B.r(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.i.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bE.gp(0)
r.c=2
r.d=A.bF
b9.ah(A.vW,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.O(A.vW,3,r)
c2.$5(b9,w?"V":"A",D.eBm,A.bq,12)
c2.$5(b9,w?A.i.a9(o,1)+" V":""+A.i.R(o*1000)+" mA",D.eAI,A.aw,9.5)
return!0
case"fan":b8=B.bx(D.fm2,A.hq)
$.T()
s=B.L()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aD(D.fmU,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.vX,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bY(A.aNH,18,10)
r=new B.as(A.T,A.Q,A.W,A.X,A.U)
r.r=A.hj.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c1(s,r)
b8.restore()}b8=B.L()
b8.r=A.bs.gp(0)
b9.O(H.vX,4,b8)
b8=B.L()
b8.b=A.ac
b8.c=2
b8.r=A.cA.gp(0)
b9.O(H.vX,22,b8)
b8=B.L()
b8.b=A.ac
b8.c=0.8
b8.r=A.jS.gp(0)
b9.O(H.vX,14,b8)
return!0
case"speaker":n=B.bx(D.aTZ,A.qb)
$.T()
b8=B.L()
b8.san(D.av4.az(0,new B.a3(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eKK.az(0,B.bX(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.cX.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bj.gp(0)
b9.O(H.aa2,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.ey3,6+u*6+A.i.F(b8,6))
r=new B.as(A.T,A.Q,A.W,A.X,A.U)
r.b=A.ac
r.c=1.8
r.r=A.c2.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fmL,A.qb)
$.T()
b8=B.L()
b8.san(D.ccA.az(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aU0,A.jG)
s=B.L()
s.r=A.il.gp(0)
b9.aq(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.G3(k)<500?":":" "
i=A.a.b0(A.o.v(B.d6(k)),2,"0")
h=A.a.b0(A.o.v(B.fG(k)),2,"0")
b8=B.L()
b8.r=A.be.j(0.12).gp(0)
b9.aD(D.aU0,b8)
c2.$5(b9,i+j+h,D.eB2,A.be,21)}b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.eB0,2.4,b8)
b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.ey8,2.4,b8)
return!0
case"calculator":l=B.bx(D.fmr,A.iA)
$.T()
b8=B.L()
b8.san(D.av7.az(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fmk,A.hD)
s=B.L()
s.r=(b7?A.a_R:D.bvB).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eAH,A.Zs,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a3(r,b8,r+6,s),A.Fe)
$.T()
q=new B.as(A.T,A.Q,A.W,A.X,A.U)
q.r=(f===3?A.c7:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fmf,A.iA)
$.T()
b8=B.L()
b8.r=M.n3.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.9
b8.r=D.ama.gp(0)
b9.aq(l,b8)
e=B.bx(D.fm4,A.hq)
if(b7){b8=B.L()
b8.san(D.cdX.az(0,new B.a3(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nb(e),$.mQ(),!0)
b8.translate(-12,-25)
K.Mp(b9,D.fta,c1,!1,b6,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bx(D.fm1,A.hD)
s=B.L()
s.r=A.b7.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.be.gp(0)
b9.aD(new B.a3(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.R(d*100)+"%",D.ezP,A.c,6)}else{b8=B.L()
b8.r=D.wI.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fn9,D.eKT)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fmK,A.qa)
$.T()
b8=B.L()
b8.san(D.ccS.az(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.TK[a0]
b8=a1<0?-4:4
s=new B.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.cu.gp(0)
s.c=4
s.d=A.bF
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bc(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.as(A.T,A.Q,A.W,A.X,A.U)
b8.r=(a2?A.bi:A.aM).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.vX,8+u*6+A.i.F(b8,6))
r=new B.as(A.T,A.Q,A.W,A.X,A.U)
r.b=A.ac
r.c=1.8
r.r=A.fW.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fmq,A.hq)
s=$.T()
r=B.L()
r.r=A.cQ.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aB.j(0.5*a3).gp(0)
b8.y=A.Df
b9.O(A.vW,34,b8)}a4=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.ch(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bA())
b8=B.L()
b8.r=B.ap(A.ey,D.blY,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.bV.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jr(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aa2,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.T().r
r=x.v
l=new B.aH(s,A.aj,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bA())
q=B.L()
q.san(D.caQ.az(0,D.fmC))
b9.af(l,q)
q=new B.aH(s,A.aj,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bA())
p=B.L()
p.r=A.fA.gp(0)
b9.af(q,p)
r=new B.aH(s,A.aj,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bA())
s=B.L()
s.r=A.fA.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aEu[a0]
s=new B.as(A.T,A.Q,A.W,A.X,A.U)
s.r=A.aw.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.as(A.T,A.Q,A.W,A.X,A.U)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.as(A.T,A.Q,A.W,A.X,A.U)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.T().r
s=x.v
l=new B.aH(b8,A.aj,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ch(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bA())
r=B.L()
r.san(D.cbZ.az(0,D.fmp))
b9.af(l,r)
r=new B.aH(b8,A.aj,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bA())
q=B.L()
q.r=A.dS.gp(0)
b9.af(r,q)
s=new B.aH(b8,A.aj,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.ch(-34,-6,-18,12))
b8=B.L()
b8.b=A.ac
b8.c=5
b8.r=A.aw.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cS,A.uU,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cQ
b8.r=s.gp(0)
b9.aD(D.fmo,b8)
if(b7){b8=B.L()
b8.r=A.cS.j(0.3).gp(0)
b8.y=A.nc
b9.O(A.aNF,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.as(A.T,A.Q,A.W,A.X,A.U)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.aw.gp(0)
b9.O(D.ex6,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aH($.T().r,A.aj,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bA())
s=B.L()
s.r=A.eE.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eE.j(0.5*u).gp(0)
s.y=Z.Pq
b9.O(D.eB8,24,s)}b8=B.bx(D.fn2,A.hq)
s=$.T()
r=B.L()
r.r=A.cQ.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.cX.gp(0)
r.c=3
r.d=A.bF
b9.ah(D.exm,D.aNS,r)
r=B.L()
r.r=A.cX.gp(0)
r.c=3
r.d=A.bF
b9.ah(D.aNS,D.eB9,r)
a7=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bA())
s=B.L()
s.r=(b7?A.aQ:A.ka).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bj).gp(0)
b9.O(D.eBc,4,b8)
return!0
case"lights":b8=$.T().r
s=x.v
a8=new B.aH(b8,A.aj,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.ch(0,22,34,-6))
r=B.L()
r.b=A.ac
r.c=2
r.r=A.hX.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.as(A.T,A.Q,A.W,A.X,A.U)
b1.r=D.a6B[u].j(0.6).gp(0)
b1.y=A.HV
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aH(b8,A.aj,b6,b6,b1)
b1.push(new B.aZ(q-3,p))
b2.ac()
b3=new B.aq(q+3,p)
b1.push(b3)
b4=b2.f
if(b4!=null)b3.aj(b4)
b2.ac()
b3=p+11
b4=new B.aq(q+5,b3)
b1.push(b4)
b5=b2.f
if(b5!=null)b4.aj(b5)
b2.ac()
q=new B.ch(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.bA()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.as(A.T,A.Q,A.W,A.X,A.U)
if(b0)p=D.a6B[u]
else{p=B.ap(D.a6B[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iB0(b9,c0,c1,c2)},
h2:function h2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hnG(d){var w=D.mC.h(0,d)
return(w==null?null:w.b)===D.Bc},
iCg(d,e,f){return B.a8(d,!1).cc(B.vz(null,!1,!0,!0,new C.h8d(e,f),A.eW,null,A.pI,new C.h8e(),x.H))},
Ks:function Ks(d,e){this.a=d
this.b=e},
mi:function mi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h8d:function h8d(d,e){this.a=d
this.b=e},
h8e:function h8e(){},
Wv:function Wv(d,e,f){this.c=d
this.d=e
this.a=f},
aG1:function aG1(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bv$=e
_.aa$=f
_.c=_.a=null},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0E:function e0E(d,e,f){this.a=d
this.b=e
this.c=f},
e0O:function e0O(d,e,f){this.a=d
this.b=e
this.c=f},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0B:function e0B(d,e){this.a=d
this.b=e},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0Q:function e0Q(d){this.a=d},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0t:function e0t(d){this.a=d},
e0M:function e0M(){},
e0I:function e0I(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0K:function e0K(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0H:function e0H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0F:function e0F(){},
e0G:function e0G(d){this.a=d},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0y:function e0y(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0s:function e0s(d){this.a=d},
e0x:function e0x(d,e,f){this.a=d
this.b=e
this.c=f},
e0w:function e0w(d){this.a=d},
bzy:function bzy(d,e,f){this.b=d
this.c=e
this.a=f},
agx:function agx(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aOB:function aOB(){},
a2F(d,e,f,g,h,i){return new C.byk(d,e,f,g,h,i)},
byk:function byk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzu:function fzu(){},
fzv:function fzv(){},
fzw:function fzw(){},
fzx:function fzx(){},
fzy:function fzy(){},
fzz:function fzz(){},
fzA:function fzA(){},
fzB:function fzB(){},
aa9:function aa9(d){this.a=d},
cp9:function cp9(d){this.a=d},
cpa:function cpa(){},
cp8:function cp8(d,e){this.a=d
this.b=e},
cp7:function cp7(d){this.a=d},
Y9:function Y9(d){this.a=d},
aHJ:function aHJ(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.he$=f
_.mc$=g
_.fd$=h
_.hf$=i
_.bv$=j
_.aa$=k
_.c=_.a=null},
f_I:function f_I(d){this.a=d},
f_E:function f_E(d){this.a=d},
f_D:function f_D(d,e){this.a=d
this.b=e},
f_G:function f_G(d,e){this.a=d
this.b=e},
f_F:function f_F(d,e){this.a=d
this.b=e},
f_H:function f_H(d){this.a=d},
bzK:function bzK(d,e,f){this.b=d
this.c=e
this.a=f},
WU:function WU(d){this.a=d},
bnC:function bnC(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.he$=d
_.mc$=e
_.fd$=f
_.hf$=g
_.bv$=h
_.aa$=i
_.c=_.a=null},
e7G:function e7G(){},
e7H:function e7H(){},
e7B:function e7B(d,e){this.a=d
this.b=e},
e7D:function e7D(d,e){this.a=d
this.b=e},
e7E:function e7E(d){this.a=d},
e7C:function e7C(d){this.a=d},
e7F:function e7F(d){this.a=d},
bup:function bup(d,e,f){this.b=d
this.c=e
this.a=f},
W4:function W4(d){this.a=d},
bnb:function bnb(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.he$=d
_.mc$=e
_.fd$=f
_.hf$=g
_.bv$=h
_.aa$=i
_.c=_.a=null},
dSX:function dSX(){},
dSY:function dSY(){},
dSS:function dSS(){},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dST:function dST(d){this.a=d},
aLb:function aLb(d,e,f){this.a=d
this.b=e
this.c=f},
WL:function WL(d){this.a=d},
bnt:function bnt(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e4b:function e4b(d,e){this.a=d
this.b=e},
e4c:function e4c(d){this.a=d},
e4a:function e4a(d,e){this.a=d
this.b=e},
e4d:function e4d(d){this.a=d},
e49:function e49(d,e){this.a=d
this.b=e},
e4e:function e4e(d){this.a=d},
e48:function e48(d,e){this.a=d
this.b=e},
e4f:function e4f(d,e){this.a=d
this.b=e},
e47:function e47(d,e){this.a=d
this.b=e},
e4g:function e4g(d){this.a=d},
e46:function e46(d,e){this.a=d
this.b=e},
e4h:function e4h(d){this.a=d},
e45:function e45(d){this.a=d},
e4i:function e4i(d){this.a=d},
e44:function e44(d){this.a=d},
e4j:function e4j(d){this.a=d},
e4k:function e4k(d){this.a=d},
e43:function e43(d){this.a=d},
bpw:function bpw(d,e,f){this.b=d
this.c=e
this.a=f},
Xw:function Xw(d){this.a=d},
aGZ:function aGZ(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
evg:function evg(d,e){this.a=d
this.b=e},
evh:function evh(d,e,f){this.a=d
this.b=e
this.c=f},
evf:function evf(d,e,f){this.a=d
this.b=e
this.c=f},
evi:function evi(d){this.a=d},
eve:function eve(d){this.a=d},
evm:function evm(d){this.a=d},
evl:function evl(d,e){this.a=d
this.b=e},
evk:function evk(d,e){this.a=d
this.b=e},
evn:function evn(d,e){this.a=d
this.b=e},
evj:function evj(d,e){this.a=d
this.b=e},
evo:function evo(d){this.a=d},
XH:function XH(d){this.a=d},
aHm:function aHm(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eHR:function eHR(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHV:function eHV(d){this.a=d},
eHW:function eHW(d,e){this.a=d
this.b=e},
Y0:function Y0(d){this.a=d},
boK:function boK(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eW3:function eW3(){},
eWc:function eWc(){},
eW8:function eW8(d){this.a=d},
eW7:function eW7(){},
eW9:function eW9(d,e){this.a=d
this.b=e},
eW6:function eW6(d,e){this.a=d
this.b=e},
eWa:function eWa(d){this.a=d},
eW5:function eW5(d,e){this.a=d
this.b=e},
eWb:function eWb(d){this.a=d},
eW4:function eW4(d){this.a=d},
Xv:function Xv(d){this.a=d},
boe:function boe(d,e,f,g,h,i,j,k){var _=this
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
_.he$=f
_.mc$=g
_.fd$=h
_.hf$=i
_.bv$=j
_.aa$=k
_.c=_.a=null},
etW:function etW(){},
etX:function etX(){},
etP:function etP(d){this.a=d},
etO:function etO(d){this.a=d},
etQ:function etQ(d){this.a=d},
etN:function etN(d){this.a=d},
etR:function etR(d){this.a=d},
etM:function etM(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
etL:function etL(d,e){this.a=d
this.b=e},
etT:function etT(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
etU:function etU(d){this.a=d},
etJ:function etJ(d,e){this.a=d
this.b=e},
etV:function etV(d){this.a=d},
etI:function etI(d,e){this.a=d
this.b=e},
bh_:function bh_(d,e,f){this.c=d
this.d=e
this.a=f},
aOn:function aOn(){},
bBs:function bBs(){},
aOI:function aOI(){},
bBy:function bBy(){},
aP8:function aP8(){},
bBH:function bBH(){},
aPA:function aPA(){},
bBQ:function bBQ(){},
JY(d,e,f,g){var w,v,u,t,s,r,q,p=$.aut
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mH(d,e[w],f,g)
return}for(p=B.cS(e,0,B.dy(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gJ(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mH(d,s,f,g)
else B.bL(new B.bg(1000*q),new C.cp5(d,s,f,g),u)}},
cmr(d){return C.i6a(d)},
i6a(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cmr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cmr)
case 7:r=f
q=B.aW(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.V.aP(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a1(p,o,n):B.S(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.S(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cmr,v)},
b4x(d,e){return C.i6b(d,e)},
i6b(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b4x=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b4x)
case 6:s=g
w=7
return B.b(s.aE("String","ngmy_play_progress_v1_"+d,A.V.au(e,null)),$async$b4x)
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
return B.i($async$b4x,v)},
cp5:function cp5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
irE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oD(A.i.a9(p.c,4)),"y",B.oD(A.i.a9(p.d,4)),"v",p.e,"l",B.oD(A.i.a9(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oD(A.i.a9(p.as,3)),"ch",p.at,"vc",B.oD(A.i.a9(p.z,3)),"s",B.oD(A.i.a9(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a5(f).k("ci.E"))
A.d.fc(l)
return A.V.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iBq(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.V.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a5(h)
A.d.a5(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aS(f==null?A.c9:f)
while(f.C()){u=f.gP(f)
t=i.a(u)
e=B.aW(J.t(t,"k"))
s=e==null?"":e
if(!$.qS().am(0,s)){J.c6(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u8(a2,d,a0,a1)
a3.at_(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aJ(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aJ(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aJ(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.kg(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kg(J.t(t,"b"))
r.x=d===!0
d=B.aW(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.t(t,"ch"))
r.at=A.i.M(d==null?0:d)
d=B.aJ(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.t(t,"s"))
r.ch=A.i.D(d==null?1:d,1,5.2)
J.c6(v,r)}i=g.a(J.t(w,"wires"))
i=J.aS(i==null?A.c9:i)
h=x.j
while(i.C()){q=i.gP(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.i.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.i.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.amV(m,A.i.M(B.dI(J.t(p,1))),l,A.i.M(B.dI(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aQ(x.S)
h=g.a(J.t(w,"done"))
h=J.aS(h==null?A.c9:h)
while(h.C()){j=h.gP(h)
J.c6(k,A.i.M(B.dI(j)))}return new B.bsu(i,k)}catch(a4){return a5}},
fQS(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fQS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fQS)
case 7:r=o.aW(n.t(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fQS,v)},
bIq(d){return C.iD3(d)},
iD3(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bIq=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bIq)
case 7:w=6
return B.b(f.aE("String","ngmy_electronics_lab_v1",d),$async$bIq)
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
return B.i($async$bIq,v)},
fXD(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$fXD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.T()
t=new B.oT(new B.oo())
s=B.v1(t,null)
r=B.L()
r.r=A.c4.gp(0)
s.aD(new B.a3(0,0,e,f),r)
s.bhW(0,d,A.J,B.L())
q=t.mZ()
w=3
return B.b(q.vI(e,f),$async$fXD)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXD,v)}},D,W,A2,Az,K,F,M,A3,H,AA,AB,AC,A4,AD
J=c[1]
B=c[0]
A=c[2]
X=c[169]
A5=c[215]
Ab=c[210]
A6=c[150]
O=c[107]
Ac=c[216]
Ad=c[181]
A7=c[209]
Ae=c[217]
A8=c[214]
U=c[205]
P=c[53]
Y=c[201]
Af=c[197]
N=c[208]
Ag=c[220]
Ah=c[228]
Ai=c[163]
Aj=c[199]
A9=c[180]
Ak=c[127]
Al=c[227]
Am=c[218]
An=c[109]
Ao=c[222]
Ap=c[96]
Z=c[203]
V=c[106]
Aq=c[111]
Q=c[192]
Ar=c[173]
A_=c[207]
R=c[206]
A0=c[221]
As=c[161]
E=c[34]
I=c[3]
G=c[50]
L=c[165]
At=c[159]
Au=c[184]
Av=c[212]
A1=c[187]
Aa=c[225]
S=c[226]
T=c[193]
Aw=c[224]
Ax=c[175]
Ay=c[223]
C=a.updateHolder(c[22],C)
D=c[202]
W=c[219]
A2=c[211]
Az=c[30]
K=c[33]
F=c[156]
M=c[154]
A3=c[129]
H=c[204]
AA=c[124]
AB=c[145]
AC=c[85]
A4=c[213]
AD=c[72]
C.am3.prototype={}
C.Xf.prototype={
S(){return new C.bo2(B.S(x.N,x.i),new B.au(A.ax,$.az()),B.a([],x.X),B.a([],x.eZ),B.mj(0,null,null))}}
C.bo2.prototype={
gXx(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Qk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Qk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.bk$.d.c
if(s!=null)s.jf()
p.bN(0,A.ci)
t.l(new C.emZ(t))
t.a.toString
p=t.gXx()
w=3
return B.b(C.bDK(C.ifk(q,C.irp(p),o,t.ay)),$async$Qk)
case 3:s=e
r=s==null?null:J.je(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.isW(q,p,o)
if(t.c==null){w=1
break}t.l(new C.en_(t,o,r))
$.aU.U$.push(new C.en0(t))
case 1:return B.h(u,v)}})
return B.i($async$Qk,v)},
ZC(d){return this.c4S(d)},
aZA(){return this.ZC(null)},
c4S(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ZC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.bk$.d.c
if(s!=null)s.jf()
t.f.sb1(0,o)
t.l(new C.enb(t))
G.dD(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bDK(C.imw(o)),$async$ZC)
case 3:r=n.a=m.iB5(f)
p.b=""
if(r!=null&&!C.irq(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.isX(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.am3(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.enc(p,t))
t.caI(p.a)
case 1:return B.h(u,v)}})
return B.i($async$ZC,v)},
caI(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a5(w)
w=++m.as
v=m.gXx()
A.d.a5(v.a)
A.d.a5(v.b)
m.e.a5(0)
m.l(new C.en7(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.en5(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.en8(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.en9(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ena(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bl.j(0.1),g=B.n(16),f=B.K(A.bl.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fuI,A.bb,B.E(B.c(m.Q,l,l,l,l,l,l,A.Bo,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.fW6
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LJ,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fFP,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.v2,B.c(u,l,l,l,l,l,l,D.fIG,l,l,l),l))
w.push(A.cM)
w.push(B.c(k.b,l,l,l,l,l,l,A1.FB,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.p(l,B.c(u,l,l,l,l,l,l,D.fLl,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.m),l,l,l,A.hy,A.cr,l,l,l))}w.push(A.al)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mb,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.D(A.Hx,new B.c3(A.aL,A.e,A.h,A.B,l,A.p,l,0,B.a([t,A.bf,new B.bz(1,A.ba,B.c(q,l,l,l,l,l,l,new B.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bl.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.c(o.a,l,l,l,l,l,l,A.WD,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.fM,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.O,new B.bK(A.a9,l,l,s,l),A.at,B.p(l,B.c(o.b,l,l,l,l,l,l,D.fRd,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.eCE)
j=B.cb(B.x(w,A.B,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.akf(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.m),l,l,l,D.bFx,A.et,l,l,1/0),A.b_,A.i9),B.E(C.hsI(m.gXx(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e_("Ask about it",i,new C.enf(m),l,A.bl,l),new E.e_("Invent something new",!i,new C.eng(m),l,A.bl,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dC2[p]
i.push(new E.e_(n,!1,new C.enh(m,n),l,A.bl,l))}f.push(new E.ff(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.diF[p]
i.push(new E.e_(r,!1,new C.eni(m,r),l,A.bl,l))}f.push(new E.ff(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bC(l,new B.b6(4,B.n(16),A.a1),l,A.f2,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kx,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.enj(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.dl,!0,A.a7,l,A.ao,l,A.Ws,l,l),1)
h=m.at
v=h&&j?D.bVG:A.ef
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fH(v,j,new C.enk(m,k),A.bl,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lW(A.bl,A.fe,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.M,0,A.p))}}
C.Hb.prototype={}
C.vG.prototype={}
C.XC.prototype={
S(){return new C.aHd(A.J,A.J,A.az,B.aQ(x.S),$,A.bG,0,B.a([],x.X),null,null)}}
C.aHd.prototype={
gb_U(){var w,v,u,t=this,s=D.Jf[t.cx],r=D.TN[t.cy],q=D.Ef[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e3(w,w.r,B.a5(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aCL[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cD(p,0,new C.eCm())},
ga4d(){return D.Jf[this.cx].d/this.gb_U()},
gaRP(){return 0.1*(D.Jf[this.cx].d/0.9)/D.TN[this.cy].d},
a_(){this.a3()
this.mn()
C.cmr("rocket_lander").bE(new C.eCG(this),x.k)},
caR(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cR.ai()*0.6
w.f=new B.r(0.15+A.cR.ai()*0.7,0.08)
w.r=new B.r((A.cR.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mE(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eCH())
return}w=D.tN[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga4d()
v=v.a6(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaRP())}if(m.dy){t=m.r
v=v.aI(0,t.aO(0,t.gcL()*6*D.aEN[m.d]))}t=m.r=m.r.a6(0,v.aO(0,d))
s=m.f=m.f.a6(0,t.aO(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.r(-t.a*0.4,t.b)
t=new B.r(A.i.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.r(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Ef[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b4x("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.JY("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga4d()/(D.tN[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.a9(m.ga4d()/(D.tN[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dD(80,"",500,0,0.6,"noise")
B.fU()}}if(m.Q&&m.x>0&&A.o.F(A.i.bc(m.CW*20),2)===0)G.dD(90,"",70,0,0.12,"noise")
m.l(new C.eCI())},
ai_(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fIa,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e_(e[w].a,f.$1(w),new C.eCo(this,g,w),v,h,v))
return new B.D(A.eK,B.x(B.a([u,A.cM,B.bZ(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.h,0,A.p),v)},
bJy(d){var w,v,u,t,s=this,r=null,q=s.ga4d()/(D.tN[s.d].b/9.81*0.28)>=1,p=A.i.R(1/s.gaRP()),o=D.aEN[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.acW,r,r,r),A.S,s.ai_("ENGINE: "+D.Jf[s.cx].b,D.Jf,new C.eCd(s),new C.eCe(s),A.cS),s.ai_("FUEL TANK: "+D.TN[s.cy].b,D.TN,new C.eCf(s),new C.eCg(s),A.be),s.ai_("LANDING GEAR: "+D.Ef[s.db].b,D.Ef,new C.eCh(s),new C.eCi(s),A.aH),s.ai_("EXTRAS (tap to add)",D.aCL,new C.eCj(s),new C.eCk(s),A.bl)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hej)
o=(q?A.be:A.bY).j(0.14)
w=B.n(12)
v=A.i.a9(s.gb_U(),2)
u=A.i.a9(s.ga4d()/(D.tN[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.R(D.Ef[s.db].d*100)+".",r,r,r,r,r,r,D.fIQ,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.m),r,r,r,A.hy,A.bT,r,r,r))
m.push(A.S)
m.push(new B.bK(A.z,r,r,new E.fH(A.p_,"Launch",new C.eCl(s),A.be,r),r))
return B.at(B.p(r,B.cb(B.x(m,A.B,r,A.e,A.M,0,A.p),A.t,r,A.y,r,r,A.bQ,r,r,A.ah),A.f,r,A.mg,new B.o(D.bv5,r,l,n,r,r,A.m),r,r,r,A.bT,r,r,r,r),r,r,r)},
b16(d,e,f,g){var w=null,v=f?A.cS:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.mZ(A.j0,B.p(w,B.W(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eCa(e),new C.eCb(e),w,w,w,w,new C.eCc(e))},
b15(d,e,f){return this.b16(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cf(new C.eCz(s,D.tN[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tN[w].a:"\ud83d\udd12"
o.push(new E.e_(v,s.d===w,new C.eCA(s,w),r,D.tN[w].c,r))}v=B.a([s.b15(F.asc,new C.eCB(s),s.y),A.bb,s.b16(A.vp,new C.eCC(s),s.Q,130),A.bb,s.b15(A.QJ,new C.eCD(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bb,B.aA(r,B.p(r,D.bZZ,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eCE(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lW(A.cS,A.fe,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.ff(o,"WORLD",r),B.A(v,A.l,r,A.b9,A.h,0,r,r)],p),A.l,r,A.e,A.M,0,A.p))}}
C.bkV.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tN[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.T(),f=B.L(),e=l.c,d=B.ap(I.a0r,e,0.25)
d.toString
f.san(new B.a7(A.aX,A.b1,A.x,B.a([F.aj5,d],x.O),n,n).az(0,new B.a3(0,0,i,h)))
a0.aD(new B.a3(0,0,i,h),f)
w=new B.e0()
w.cT(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.as(A.T,A.Q,A.W,A.X,A.U)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aH(g.r,A.aj,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e0()
s.cT(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.aj(f)
t.ac()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bA())
h=$.T()
g=B.L()
g.r=B.ap(e,A.v,0.6).gp(0)
a0.af(t,g)
q=B.bY(new B.r(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jG)
e=B.L()
e.r=A.bi.gp(0)
a0.aq(g,e)
e=B.bx(q.cs(2),A.qa)
g=B.L()
g.b=A.ac
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jr(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cS.j(0.6).gp(0)
m.y=Z.Pq
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aH(k,A.aj,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bA())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aH(k,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bA())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aH(m,A.aj,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.ch(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.ch(-14,-10,0,-26))
o.E(new B.bA())
k=B.L()
k.san(F.av8.az(0,D.fmb))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.vX,5,k)
k=new B.aH(m,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bA())
j=B.L()
j.r=A.aB.gp(0)
a0.af(k,j)
i=new B.aH(m,A.aj,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bA())
m=B.L()
m.r=A.aB.gp(0)
a0.af(i,m)
f.restore()},
aC(d){return!0}}
C.aPg.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBJ.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBm()}}
C.aVv.prototype={}
C.a54.prototype={}
C.bdO.prototype={}
C.W3.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ey(["skin"],x.N),o=new Float32Array(0)
return new C.aFG(w,v,u,t,s,r,q,new B.cx(null,x.A),p,D.MM,D.MM,A.az,A.cR,o,new Int32Array(0),$,A.bG,0,B.a([],x.X),null,null)}}
C.aFG.prototype={
a_(){var w=this
w.a3()
w.mn()
w.as=new C.c8J(w.gck6())
new C.dSQ(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bAq()},
ck7(d){var w,v=this
if(v.c==null)return
w=J.a2(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fb(0,B.J(["t","init","data",$.hD_],x.N,x.z))
v.at=!0
v.ay=""
v.aBU()
break
case"parts":v.l(new C.dSq(v))
break
case"pick":v.l(new C.dSr(v,d))
break
case"shot":v.ajU(B.v(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dSs(v))
break}},
aBU(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aAz[q.cx]
v=new C.dSt()
u=q.ch
u=B.B(u,B.a5(u).k("ci.E"))
A.d.fc(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.i.R(q.k4),"spin",q.go],t,x.cK)
r=A.V.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fb(0,u)}},
ajU(d){return this.cBs(d)},
cBs(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ajU=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cD.aK(A.a.aY(d,A.a.cd(d,",")+1))
w=6
return B.b(B.axU(B.a([B.cJ0(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ajU)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.q).f.T(I.aWm)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ajU,v)},
aBi(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mE(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bc(w)!==A.i.bc(v.p1)){E.Y2("kick",0,0.4)
v.Va(170,new C.dSR())}v.p1=w
return},
afr(d){var w,v,u,t,s=this
s.l(new C.dSu(s,d))
if(d==null){s.fy=D.MM
s.fr=1
w=s.as
if(w!=null)w.fb(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("X<1>")
u=B.B(new B.X(w,new C.dSv(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aBU()
w=s.as
if(w!=null)w.fb(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cDY(t,d)
return},
cDY(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Y2("kick",0,0.8)
this.Va(260,new C.dSw())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dD(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Va(w*70,new C.dSx(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dD(110,"",360,0.7,0.3,"saw")
else E.hhT("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dD(210+e.length*4,"",80,0.6,0.55,"tri")
G.dD(2400,"",20,0,0.3,v)
break
case"muscle":G.dD(70,"",150,1,0.6,"sine")
break
case"vessel":G.dD(300,"",380,0.4,0.22,v)
E.Y2("kick",0,0.3)
break
default:E.hhT("organic",2+A.o.F(e.length,6),200,0.4)}},
cIH(d){this.l(new C.dSz(this,d))},
b1p(){var w,v,u,t,s,r,q,p=this,o=B.aQ(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aBi(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.B(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.av(w)]
p.R8=""},
c0x(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dSn(u,w,d))
v=x.t
C.JY("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Va(1100,new C.dSo(u))
return}if(d==null){if(u.cy!=null)u.afr(null)
return}u.afr(d)},
c49(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c2.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fEa,u,u,u)}else if(d==null||e==null)w=D.fTq
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hs,u,u,u),A.cM,B.c(e.b,u,u,u,u,u,u,A1.FB,u,u,u)],w),A.B,u,A.e,A.M,0,A.p),1),B.aI(u,u,u,u,D.c1G,u,u,u,new C.dSp(v),u,u,u,u,"Back to the whole body",A.cl)],w),A.B,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.ZC,u,s,t,u,u,A.m),u,u,u,u,U.anE,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dO2.h(0,g)
i.aBU()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dtF
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aBi(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.p1,h,h,h,new C.dSG(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bL:B.Cd(h,A.q8,p))}p=i.ax
o=p?0:1
q.push(new B.ds(p,B.xL(B.p(A.z,B.x(D.dDF,A.l,h,A.e,A.M,0,A.p),A.f,h,h,D.b9w,h,h,D.hH2,h,h,h,h,h),A.b_,A.n6,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b4,A.t,q,h),1),new B.D(F.ank,i.c49(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dko[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e_(l,o,new C.dSH(i,n),n.c,A.c2,h))}p=B.a([new E.ff(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e_(k,k===i.cy,new C.dSI(i,k),h,A.aQ,h))}p.push(new E.ff(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.j6(A.bY,""+A.i.R(o)+" beats/min","Heart rate",180,40,new C.dSJ(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Gm(D.aAz[j],i.cx===j,new C.dSK(i,j),!1,h))
p.push(new E.ff(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e_("Spin",o,new C.dSL(i),D.arb,A.aH,h),new E.fH(A.o3,"Reset view",new C.dSM(i),A.c,h),new E.e_(l,m,new C.dSN(i),A.IA,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e_("Heartbeat sound",i.ok,new C.dSO(i),R.oZ,A.bY,h))
p.push(new E.ff(v,h,h))
return E.lW(A.c2,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.M,0,A.p))}}
C.aOl.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aOm.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAp()}}
C.c8J.prototype={
kU(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hJI
$.hJI=v+1
u="ngmy-body-viewer-"+v
$.xH()
$.qd().pp(u,new C.c8K(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fF(v,"message",new C.c8L(t),!1,x.gA)
t.b=u},
fb(d,e){var w,v
try{w=this.c
if(w!=null){w=B.RQ(w.contentWindow)
if(w!=null)J.ak3(w,e,"*")}}catch(v){}}}
C.yX.prototype={}
C.Dj.prototype={}
C.nY.prototype={}
C.beB.prototype={}
C.Wa.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aFI(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.az,A.J,A.J,B.aQ(u),$,A.bG,0,B.a([],x.X),null,null)}}
C.aFI.prototype={
a_(){var w=this
w.a3()
w.mn()
w.aeo()
$.aU.U$.push(new C.dUw(w))},
aeo(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeo=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$aeo)
case 6:q=e.qF("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.l(new C.dUa(s,r))
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
return B.i($async$aeo,v)},
aeL(d){return this.c8m(d)},
c8m(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aeL=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aB(),$async$aeL)
case 6:r=f
q=s.cx
p=B.a5(q).k("km<ci.E,m>")
q=B.B(new B.km(q,new C.dUd(),p),p.k("M.E"))
r.aE("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$aeL,v)},
azU(d,e,f,g){var w="c"+this.y++,v=new C.Dj(w,e,f,g)
this.d.n(0,w,v)
return v},
mU(d,e,f){return this.azU(0,e,f,0)},
adJ(d,e){var w
if(D.AK.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a6(0,new B.r(-36,w))},
uo(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aW2(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fd$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dp(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ea(m,D.d1J[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uo(p,0)&&n.uo(p,1)
break
case"or":p=q.a
o=n.uo(p,0)||n.uo(p,1)
break
case"xor":p=q.a
o=n.uo(p,0)!==n.uo(p,1)
break
case"nand":p=q.a
o=!(n.uo(p,0)&&n.uo(p,1))
break
case"nor":p=q.a
o=!(n.uo(p,0)||n.uo(p,1))
break
case"not":o=!n.uo(q.a,0)
break
default:o=n.uo(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bU0(){return this.aW2(null)},
mE(d){var w,v,u,t,s,r,q,p,o,n=this
n.bU0()
if(!n.ax)return
for(w=n.d,w=new B.b9(w,B.a5(w).k("b9<2>")).gae(0),v=new B.eJ(w,new C.dUx()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fd$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fd$)
o=s+1
G.dD(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
azV(d){var w=this
w.d.a5(0)
A.d.a5(w.e)
w.f.a5(0)
w.r.a5(0)
w.cy=null},
mo(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
aw1(d){var w=this
if(w.x.A(0,A.az)){$.aU.U$.push(new C.dU8(w,d))
return}w.l(new C.dU9(w,d))},
cEg(d){this.l(new C.dUe(this,d,$.bIN()[d]))},
cdc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bIN()[a0]
v=d.d
u=B.a5(v).k("b9<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.b9(v,u),new C.dU3(),t),s)
A.d.b_(r,new C.dU4())
q=B.B(new B.X(new B.b9(v,u),new C.dU5(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dU6(d,w))
return}u=d.r
p=B.dH(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dH(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aW2(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lx(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aL(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a5(0)
u.u(0,p)
d.l(new C.dU7(d,o,a0))},
aAP(d){var w,v,u,t,s=this.d,r=B.a5(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("M.E"))
r=B.U(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cmC(d){var w,v,u,t,s,r=this.d,q=B.a5(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("M.E"))
q=B.U(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c42(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dp(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.AK.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adJ(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bSL(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adJ(p,o)
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
cde(d){var w,v,u,t=this,s=t.aAP(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f0()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dD(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.l(new C.dUf())
return}u=t.bSL(d)
if(u!=null)t.l(new C.dUg(t,u))
else t.l(new C.dUh(t))},
ayH(d){return this.c7j(d)},
c7j(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ayH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aAP(d)
if(s==null){w=1
break}B.jC()
t.l(new C.dUc(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ayH,v)},
bFi(d){if(this.x.A(0,A.az))return
this.l(new C.dU2(this,d,A.cR))
B.f0()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bIN()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.W(i.ax?R.oZ:A_.tI,A.ab,h,h,h,21),h,h,h,new C.dUq(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.ct.j(0.14)
r=B.K(A.ct.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fDj,h,h,h),B.c(w.b,h,h,h,h,h,h,A.WR,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lw,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.be:A.f0,h,h,h,h,h,h,h,h,12,h,h,A.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.B,h,A.e,A.h,0,A.p),1),B.bI(D.h4d,h,i.gcdb(),B.bp(A.ct,h,h,h,h,h,h,h,h,h,h,A.cl))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.m),h,h,h,V.P0,D.bGf,h,h,1/0))}u.push(B.E(B.cf(new C.dUr(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.c(D.AK.h(0,r).a+": "+D.AK.h(0,r).e,h,h,h,h,h,h,An.uk,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.m),h,h,h,A.a1E,A.bT,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.AK.gdS(D.AK),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.W(p.b,o,h,h,h,20),A.bB,B.c(p.a,h,h,h,h,h,h,D.aYn,h,h,h)],g),A.l,h,A.e,A.M,0,A.p),A.f,h,h,new B.o(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.f7,Ax.Hz,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dUs(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dyt[l]
s.push(new E.fH(A.QK,k.b,new C.dUt(i,k),A.ct,h))}s.push(new E.fH(I.xb,"Clear",new C.dUu(i),A.bY,h))
r=B.a([],g)
for(j=0;q=$.bIN(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.e9:A.m1
o=i.ay
n=i.cx.q(0,j)?A.be:A.bt
r.push(new E.e_(q.a,o===j,new C.dUv(i,j),p,n,h))}return E.lW(A.ct,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.ff(t,"PARTS",h),new E.ff(s,"TRY",h),new E.ff(r,"TASKS",h)],g),A.l,h,A.e,A.M,0,A.p))}}
C.beT.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.T()
w=B.L()
w.r=D.ahl.gp(0)
a5.aD(new B.a3(0,0,0+a3,0+a4),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.O(new B.r(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.I)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.adJ(l,o.c)
h=s.h(0,n)===!0
n=$.T()
g=B.a([],r)
f=new B.aH(n.r,A.aj,a2,a2,g)
g.push(new B.aZ(j,k))
f.ac()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.i6(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.ac()
if(h){n=new B.as(A.T,A.Q,A.W,A.X,A.U)
n.b=A.ac
n.c=9
n.r=A.bt.j(0.28).gp(0)
n.y=N.oO
a5.af(f,n)}n=new B.as(A.T,A.Q,A.W,A.X,A.U)
n.b=A.ac
n.c=3.2
n.d=A.bF
n.r=(h?A.eE:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a6(0,D.Kp)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.T().r,A.aj,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i6(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ac
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dp(q,q.r,q.e);a3.C();)this.cdd(a5,a3.d)},
cdd(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AK.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bY(a0.c,64,64)
s=B.bx(t,A.k0)
r=w.cy===v
q=s.eI(A.cy)
$.T()
p=B.L()
p.r=A.v.j(0.55).gp(0)
p.y=A.nc
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.bX(a0.c,52)))
d.O(q,52,p)}q=s.eI(A.cO)
p=B.L()
o=e.c
p.r=B.ap(o,A.v,0.65).gp(0)
d.aq(q,p)
n=u?0.35:0
q=B.L()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.v,u?0.2:0.45)
m.toString
q.san(new B.a7(A.aX,A.b1,A.x,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.L()
q.b=A.ac
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.oX:D.bWe}else l=e.b
k=C.hjI(B.lx(l.a),30,A.c,l.b,g,A.F)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aI(0,new B.r(p/2,q.gb8(q)/2)))
j=C.hjI(e.a,10.5,A.c,g,g,A.F)
j.a4(d,a0.c.a6(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hjI(f,9,u?A.eE:A.bV,g,g,A.u)
i.a4(d,a0.c.a6(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b24(d,w.adJ(a0,h),o)
this.b24(d,a0.c.a6(0,D.Kp),o)},
b24(d,e,f){var w
$.T()
w=B.L()
w.r=D.ahl.gp(0)
d.O(e,8.5,w)
w=B.L()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aC(d){return!0}}
C.aOq.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBt.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAu()}}
C.Ox.prototype={
S(){return new C.aFZ(B.mj(0,null,null))}}
C.Lt.prototype={
a8(){return"_UnfoldStyle."+this.b}}
C.Bm.prototype={}
C.aFZ.prototype={
a_(){this.a3()
B.bL(A.pH,C.iA6(),x.H)},
cdk(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.l(new C.e_G(w,e))},
c5Z(){var w=this
w.e.t()
w.e=B.mj(w.f,null,null)
w.l(new C.e_F(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dd?A.c:A.c4
return B.p8(t,B.c5(v,s,t?new C.bvn(w.e,w.gcdj(w),new C.e_H(d),v):new C.aKi(u,new B.bf(u.b,x.W)),v,!1,!1,v,!1),new C.e_I(w,u),x.K)}}
C.bx0.prototype={}
C.bvn.prototype={
b25(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bC:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(U.a23,B.x(B.a([v,A.bB,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cv:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dd,q=B.aF(d,A.dG,x.w).w,p=B.aI(s,s,s,s,B.W(A.eH,r?A.bC:A.ab,s,s,s,20),s,s,D.hHv,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.n(14),A.Jj,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.o(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.aa(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a7(A.ay,A.aC,A.x,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bC:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.p(s,B.x(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cv:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.M,0,A.p),A.f,s,s,w,s,s,D.hHA,s,A7.aoa,s,s,s),s,s,s),1),A.uc],u),A.l,s,A.e,A.h,0,s,s)
v=t.b25("STUDIOS","Play, make things, and keep what you make",r)
$.bIO()
return B.bo(!1,B.x(B.a([B.E(B.wk(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nV(new B.R(8,q.r.b+6,8,4),new B.ml(w,s),s),new B.ml(v,s),new B.nV(A.ia,B.Qd(new B.pb(new C.few(d),9,!0,!0,!0,0,B.tz(),s),D.aWb),s),new B.ml(t.b25("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nV(D.bGp,B.Qd(new B.pb(new C.fex(t),6,!0,!0,!0,0,B.tz(),s),D.aWb),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agQ.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dd){w=B.n(20)
v=(A.o.ap(o.c,3)&1)===0
u=B.a82(v?A.aH:A.bl,20)
v=v?A.aH:A.bl
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eH(B.x(B.a([new B.W8(v,44,m.c,n,n),A.O,B.c(m.a,n,2,A.a2,n,n,n,D.fJA,A.K,n,n),A.cM,B.c(m.b,n,2,A.a2,n,n,n,D.fMs,A.K,n,n)],x.p),A.l,n,A.b9,A.h,0,A.p),n,u,n,A.Da,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mm,l,0.3)
u.toString
t=x.O
u=B.a([u,D.akF],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.aa(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.aa(0,A.H,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eH(B.x(B.a([B.p(n,B.W(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a7(A.ay,A.aC,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.O,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cM,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.b9,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a7(A.ay,A.aC,A.x,u,n,n),A.m),n,A.Da,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.afH.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dd,h=(A.o.ap(this.c,3)&1)===0?A.aH:A.bl,g=B.n(20)
if(i)w=B.a82(h,20)
else{w=B.n(20)
v=B.ap(L.mm,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.akF],x.O)
v=new B.o(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.aa(0,A.H,A.v.j(0.4),A.cy,12)],x.V),new B.a7(A.ay,A.aC,A.x,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.W9(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.aa(0,A.H,A.v.j(0.45),A.aac,0)],s)
u.push(B.p(l,B.W(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.bc(o,o,o,o),m,new B.a7(A.a5,A.a9,A.x,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.M,0,A.p)
if(i)t=A.bC
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eH(B.x(B.a([new B.a6(58,l,u,l),A.S,t,A.at,B.W(A.DP,i?B.W9(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.b9,A.h,0,A.p),l,w,l,A.Da,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.Rx.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.o(h,j,j,B.n(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.aa(0,A.H,A.v.j(0.55),A.Km,26),new B.aa(-6,A.H,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bP(new B.o(j,j,j,j,j,new B.a7(A.ay,A.aC,A.x,B.a([p,o,n,i],m),D.dEJ,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bP(new B.o(j,j,j,j,j,new B.a7(A.aX,A.b1,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.bwo(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.aa(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.W(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fFF,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Lg)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hc,B.A(B.a([s,A.ew,B.E(B.x(p,A.B,j,A.e,A.M,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.ds(!0,B.ef(j,A.v.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bS(0,new B.ds(!0,new B.bP(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a6(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bP(new B.o(j,j,j,u,r,j,A.m),A.bm,B.bw(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bwo.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbD().a,v.gbD().b)
d.jr(0,0.35)
t=B.bY(A.J,(w- -10)*1.6,s-r)
$.T()
s=B.L()
s.san(new B.a7(A.a5,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aD(t,s)
u.restore()},
aC(d){return d.b!==this.b}}
C.bvU.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.bsV,D.ajI],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.aa(0,A.H,A.v.j(0.5),A.kN,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a6(this.c,this.d,new B.bP(new B.o(w,w,s,v,r,new B.a7(A.ay,A.aC,A.x,u,w,w),A.m),A.bm,B.bw(q,B.b4(B.at(B.W(A.jC,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bdw(p,w),A.az),A.aq),w),w)}}
C.bdw.prototype={
a4(d,e){var w,v,u,t,s,r
$.T()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.r(s,0),new B.r(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.r(0,r),new B.r(u,r),w)
u=e.eo(A.J)
$.T()
t=B.L()
t.b=A.ac
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aC(d){return!1}}
C.aKi.prototype={
S(){return new C.aKj(new B.cx(null,x.A),null,null)}}
C.aKj.prototype={
gr1(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bDE,null,1,null,v)
w.cX(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gJO(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fX,null,1,null,v)
w.fl(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gazW(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcdg(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gaZi(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb_5(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbb9(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a3()
var w=this.gr1()
w.dq()
w.e_$.I(0,this.gcDZ())},
cE_(){var w,v,u,t,s,r,q,p=this,o=p.gr1().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gazW().a){case 0:w=D.oc
break
case 1:w=D.vH
break
case 2:w=D.a6E
break
case 3:w=D.oc
break
case 4:w=D.dqa
break
case 5:w=D.vH
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aeY)r=0.09
else r=s===D.aeZ?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dD(260+90*v,"",260,1.6,0.18,"tri")
u=D.cff[v]
E.mH("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JY("bell",D.co7,1400,0.35)}}p.ax=o},
t(){this.gr1().t()
this.gJO().t()
this.bCj()},
a07(){var w=this
w.gr1().d3m(0,B.dv(0,0,0,A.i.R(11e3/w.Q),0,0))
w.l(new C.fec(w))},
coI(){this.gr1().bQ(0)
this.l(new C.feb(this))},
a06(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a06=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aU.bk$.x.h(0,r.f)
i=j==null?null:j.gbg()
if(!(i instanceof B.oq)||i.fy==null){w=1
break}h=r.as
j=r.gr1()
j.bQ(0)
g=r.gJO()
g.bQ(0)
r.l(new C.fe1(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.i.bc(e*q)
o=A.i.bc(d*q)
n=A.i.R(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.aj5(24*q,20,new C.fe2(r,n,q,p,o),n,o,new C.fe3(r),p),$async$a06)
case 7:l=a3
if(J.ad(l)===0){e=B.bb("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aL(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aTl(l,k),$async$a06)
case 8:m=a3?"Your scene is saved (a moving GIF).":"Could not save here. Try another browser."
t=2
w=6
break
case 4:t=3
a1=s.pop()
m="Could not make the GIF. Try again."
w=6
break
case 3:w=2
break
case 6:if(r.c==null){w=1
break}r.l(new C.fe4(r))
g.fl(0,!0)
j.sp(0,0)
if(h)r.a07()
r.c.K(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a06,v)},
afR(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$afR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb_5(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bd(q,A.b6,A.aP),$.az()))}m=B.a([],m)
for(t=u.gbb9(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bd(p,A.b6,A.aP),$.az()))}o=B.B(u.gaZi(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(L.mm,null,new C.fea(u,l,m,o),t,!0,!0,!0,A.m7,!1,!1,x.H),$async$afR)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.az()
n.W$=0}return B.h(null,v)}})
return B.i($async$afR,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gazW(),e=h.a.c,d=e.b,a0=h.gcdg(),a1=new C.Bm(f,d,e.c,a0,h.gaZi(),h.gb_5(),h.gbb9())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aI(g,g,g,g,B.W(h.at?R.oZ:A_.tI,A.ab,g,g,g,21),g,g,g,new C.fek(h),g,g,g,g,"Sound",g),B.aI(g,g,g,g,D.c5r,g,g,g,h.gcdi(),g,g,g,g,"Edit words and pictures",g),B.aI(g,g,g,g,I.p1,g,g,g,new C.fel(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.c9(h.gJO(),new C.fem(h,a1),g),B.cf(new C.fen(h,a1))],f)
u=h.as
t=u?h.gcoH():h.gcdl()
u=u?D.bVr:A.tG
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aI(g,g,g,g,B.W(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cl),B.E(B.c9(h.gr1(),new C.feo(h,a2,a1),g),1),B.aI(g,g,g,g,D.c1w,g,g,g,new C.fep(h),g,g,g,g,"Replay",A.cl)],f),A.l,g,A.e,A.h,0,g,g)
s=h.Q
u=A.i.a9(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.j6(r,u+"x","Speed",2.5,0.4,new C.feq(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dBC[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e_(p.b,o===p.a,new C.fer(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cfF[q]
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}l=A.d.gH(o).A(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}k=A.d.gH(o).A(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}j=A.d.gH(o).A(0,A.d.gH(m))?A.c:A.aT
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}i=new B.ax(j,A.d.gH(o).A(0,A.d.gH(m))?2.5:1,A.r,-1)
r.push(B.aA(g,B.p(g,g,A.f,g,g,new B.o(g,g,new B.bE(i,i,i,i),g,g,new B.a7(A.ay,A.aC,A.x,m,g,g),A.a6),g,k,g,I.ana,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fes(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.ff(u,"STYLE",g),new E.ff(r,"THEME",g),A.al],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.D(A.kf,B.x(B.a([B.bw(s,B.jD(A.bw,g,a0,8,g,t,g),A.aq),A.at,B.c("Making your GIF\u2026 "+A.i.R(h.ch*100)+"%",g,g,g,g,g,g,A.ns,g,g,g)],f),A.l,g,A.e,A.h,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a6(1/0,g,B.dc(A.o8,g,D.hfu,h.gcdh(),B.bp(f,g,g,g,A.v,g,A.kI,g,g,g,g,g)),g))}return E.lW(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e4(new B.an(A.a0,g,A.b4,A.t,v,g),h.f),d,B.x(u,A.l,g,A.e,A.M,0,A.p))},
bEt(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.oc[r]
p=A.i.D((1-A.ei.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.oc[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.oc[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dw()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.jZ(p)
l=v[r]
k=u[r]
j=t[r]
i=D.oc[r]
h=i+0.1
if(A.i.D((a0-h)/(i+0.3-h),0,1)>0){i=D.oc[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.oc[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kZ(q,new B.j9(n,f,A.aX,!0,f,new C.Rx(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.oc[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.oc[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.mT(new C.buZ(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a6(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bVA(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vH[r]
p=A.qU.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vH[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vH[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
m=B.dw()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k0(n,n,n,1)
m.fI(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Rx(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dw()
k.fI(3.141592653589793)
k=new B.j9(k,f,A.z,!0,f,new C.bvU(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kZ(q,new B.j9(m,f,A.z,!0,f,k,f),f),f))}return new B.a6(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cJa(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a6E[w]
l.push(A.cm.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.byu(d.d,l,D.aCj,m,C.bvm(e,0.4,0.62),f,C.bvm(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hkf(g,w)
q=D.aCj[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kZ(o,B.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hkf(g,w)
r=D.a6E[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kZ(A.i.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.X2,A.K,n,n),n),n))}return new B.a6(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bKQ(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cm.aA(0,C.bvm(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dR(B.b4(f,f,f,new C.buo(A.d.gH(a1),C.bvm(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.ewV),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dP.aA(0,A.i.D((o-0.7)/0.3,0,1))
l=B.dw()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fI(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k0(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.i.F(r,1):-1
w.push(new B.y(o,new B.cN(0,0,0,0,f,f,new B.cl(A.z,f,f,new B.kZ(k*(0.45+0.55*o),B.dR(new B.j9(l,f,A.z,!0,f,new C.Rx(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fdZ())
A.d.u(a0,new B.O(w,new C.fe_(),x.fR))
return new B.a6(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cdf(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vH[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.ny.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vH[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aEr[q]
k=B.dw()
k.n5(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k0(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vH[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.cl(A.z,e,e,new B.kZ(m,B.dR(new B.j9(k,e,A.z,!0,e,new C.Rx(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vH[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.cl(A.z,e,e,B.dR(new B.mT(new C.bec(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aEr[q])),e),e))}return new B.a6(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bHs(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.ex_],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.oc[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cm.aA(0,p)
q=D.aEB[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.oc[r]
f=g+0.2
e=A.i.D((a8-f)/(g+0.3-f),0,1)
f=D.oc[r]
g=f-0.01
g=A.i.D((a8-g)/(f+0.03-g),0,1)
f=B.dw()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n5(l*h+D.duH[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.k0(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cl(A.z,a3,a3,new B.kZ(g,B.dR(new B.j9(f,a3,A.z,!0,a3,new C.Rx(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.oc[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aEB[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cl(A.z,a3,a3,B.dR(new B.mT(new C.buq(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a6(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.buZ.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.bx(u,A.hD)
$.T()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oO
d.aq(q,t)
t=B.bx(u,A.hD)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aC(d){return d.c!==this.c||d.d!==this.d}}
C.buo.prototype={
a4(d,e){var w,v,u=this.c,t=B.bY(e.eo(A.J),e.b*u,e.a*u)
$.T()
u=B.L()
u.b=A.ac
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.Pq
d.c1(t,u)
u=B.L()
u.b=A.ac
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c1(t,u)
u=t.cs(-14)
v=B.L()
v.b=A.ac
v.c=1
v.r=w.j(0.3).gp(0)
d.c1(u,v)},
aC(d){return!0}}
C.bec.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eo(A.J),h=this.c,g=A.cm.aA(0,h)
$.T()
w=B.L()
w.b=A.ac
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e0()
t.cT(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.as(A.T,A.Q,A.W,A.X,A.U)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.i.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aC(d){return!0}}
C.buq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.eo(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bY(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.T()
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.b=A.ac
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c1(q,p)}},
aC(d){return d.c!==this.c}}
C.byu.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a3(0,c9,0+c4,c9+60)
$.T()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a7(A.aX,A.b1,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aD(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hkf(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.T()
a3=new B.as(A.T,A.Q,A.W,A.X,A.U)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nc
d1.c1(new B.a3(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a3(d,a3,a1,a3+a0)
a5=new B.as(A.T,A.Q,A.W,A.X,A.U)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a7(A.aX,A.b1,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
d1.aD(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aH(a2,A.aj,c1,c1,a5)
a5.push(new B.aZ(a1,a3))
a7.ac()
a6=a1+c7
a8=a3+c8
a9=new B.aq(a6,a8)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.aq(a6,n)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.aq(a1,c3)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.bA()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.aj(a5)
a7.ac()
a5=new B.as(A.T,A.Q,A.W,A.X,A.U)
a5.r=B.ap(A.d.gal(w),A.v,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aH(a2,A.aj,c1,c1,a5)
a5.push(new B.aZ(d,a3))
b1.ac()
a2=new B.aq(d+c7,a8)
a5.push(a2)
a9=b1.f
if(a9!=null)a2.aj(a9)
b1.ac()
a2=new B.aq(a6,a8)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.ac()
a2=new B.aq(a1,a3)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.ac()
a2=new B.bA()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.aj(a5)
b1.ac()
a2=new B.as(A.T,A.Q,A.W,A.X,A.U)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.as(A.T,A.Q,A.W,A.X,A.U)
b2.b=A.ac
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aD(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.i.bc(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a3(b7,a6,b7+s,a9),A.hD)
$.T()
b8=new B.as(A.T,A.Q,A.W,A.X,A.U)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a3(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hQ(a4),$.lD()[1],!0)
$.T()
a2=new B.as(A.T,A.Q,A.W,A.X,A.U)
a2.san(new B.a7(A.aX,A.b1,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aD(b9,a2)
g.restore()}}},
aC(d){return!0}}
C.aQ6.prototype={
aZ(){this.b7()
this.b5()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a7(0,w.gdR())
w.bd$=null
w.a2()}}
C.a28.prototype={
a8(){return"_Role."+this.b}}
C.qJ.prototype={}
C.rs.prototype={}
C.Dn.prototype={}
C.a05.prototype={}
C.agE.prototype={}
C.a2l.prototype={
ga0(d){return this.d}}
C.Dy.prototype={}
C.adv.prototype={}
C.adO.prototype={}
C.afK.prototype={}
C.bkS.prototype={
a4m(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dD(d,"",e,g,h,f)},
bch(d,e,f){return this.a4m(d,e,f,0,0.55)},
aEH(d,e,f,g){return this.a4m(d,e,f,0,g)},
bci(d,e,f,g){return this.a4m(d,e,f,g,0.55)},
a5(d){var w=this
w.a.a5(0)
A.d.a5(w.b)
A.d.a5(w.c)
A.d.a5(w.d)
A.d.a5(w.e)
A.d.a5(w.f)
A.d.a5(w.r)
A.d.a5(w.w)
A.d.a5(w.x)
w.y.a5(0)
w.Q.a5(0)
w.as.a5(0)
w.b3()},
am5(d,e,f,g){var w="n"+this.ay++,v=new C.rs(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tk(d,e,f){return this.am5(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.bq(w.b,new C.duc(e))
A.d.bq(w.c,new C.dud(e))
w.b3()},
bg9(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.ni.h(0,v.b).c===D.yo)return!1
w=this.b
if(A.d.aR(w,new C.du9(d,e)))return!1
w.push(new C.Dn(d,e))
this.b3()
return!0},
c4P(d){var w
if(d.b==="beat")return D.coj[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aIf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aES[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dy(u,t,j.ax,90))
w.push(new C.Dy(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2l(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bch(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2l(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.av(700),j.ax))}j.f.push(new C.Dy(u,t,j.ax,120))
j.aEH(120,200,"noise",0.5)
j.bch(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dy(u,t,j.ax,230))
w.push(new C.Dy(u,t,j.ax+160,160))
w.push(new C.Dy(u,t,j.ax+320,100))
j.bci(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.adv(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bci(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adO(u,u.a6(0,new B.r(Math.cos(q),Math.sin(q)).aO(0,260+w.ai()*200)),t,j.ax))
j.a4m(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fU()
j.a4m(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afK(u,D.aEd[v],t,j.ax))
j.aEH(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aEH(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ckn[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cyZ(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eJ(w,new C.dua(d));v.C();)j.aDa(w.gP(0),j.ax+D.cwR[A.o.F(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cOh[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eJ(w,new C.dub(d));v.C();)j.aDa(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xM(w,0,v-700)},
cyZ(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a05(e,"~"+d))},
aDa(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.agE(d.a,v,e,w))
u.push(new C.a05(w,v))},
a87(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a5(w).k("b9<2>")
w=B.B(new B.b9(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aIf(r)
u.n(0,r,o.ax+o.c4P(s))}}w=o.c
v=B.U(w).k("X<1>")
q=B.B(new B.X(w,new C.due(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.duf(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aY(u,1)
for(u=A.d.gae(v),r=new B.eJ(u,new C.dug(p));r.C();)o.aDa(u.gP(0),o.ax)}else o.aIf(u)}}A.d.bq(o.d,new C.duh(o))
A.d.bq(o.e,new C.dui(o))
A.d.bq(o.f,new C.duj(o))
A.d.bq(o.w,new C.duk(o))
A.d.bq(o.x,new C.dul(o))
A.d.bq(o.r,new C.dum(o))
o.b3()},
vS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.r(q.a+o*e,q.b+p*e)
r.b=new B.r(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.r(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.r(l,o)
if(o>n){p=m.a=new B.r(l,n)
t=m.b=new B.r(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.r(-t.a*0.8,t.b)}},
ak(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.B)
for(v=this.a,v=new B.dp(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.V.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
UO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aP(0,d,null))
k.a5(0)
for(o=x.j,n=J.aS(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.ni.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rs(t,u,new B.r(B.dI(J.t(v,"x"))*k.cy.a,B.dI(J.t(v,"y"))*k.cy.b),A.i.M(B.dI(J.t(v,"p")))))
s=B.c8(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aS(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dn(q,p))}k.b3()
return!0}catch(l){return!1}},
cYL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a5(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rs(n,r,new B.r(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bg9(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.GX.prototype={}
C.XB.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHc(new C.bkS(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cR,A.L,A.az,$.az()),A.bG,A.J,A.J,A.Z,null,null)}}
C.aHc.prototype={
aeh(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aeh=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$aeh)
case 6:q=n.kg(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eBH(s))
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
return B.i($async$aeh,v)},
abb(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$abb=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eBw(s))
u=3
w=6
return B.b(B.aB(),$async$abb)
case 6:e.aE("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$abb,v)},
bQT(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a5(n).k("b9<2>")
v=""+n.a+"|"+o.length+"|"+new B.b9(n,w).cD(0,0,new C.eBy())+"|"+A.d.cD(o,0,new C.eBz())
if(v===p.ch)return p.CW
u=new C.eBC()
t=x.s
s=B.a([],t)
r=new C.eBD(p,s,u)
for(n=new B.b9(n,w).gae(0),w=new B.eJ(n,new C.eBA());w.C();){q=n.gP(0)
if(!A.d.aR(o,new C.eBB(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cS(s,0,B.dy(5,"count",x.S),x.N).dn(0)},
a_(){var w,v=this
v.a3()
v.aeh()
v.d.db=v.ay
w=v.q8(new C.eC6(v))
w.fR(0)
v.e!==$&&B.aR()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.d()
v.t()
v=w.d
v.V$=$.az()
v.W$=0
w.bBk()},
adN(d){return this.c4f(d)},
c4f(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$adN=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$adN)
case 6:q=m.aW(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.UO(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b_x(A.d.gH(D.aDF))
if(s.c!=null)s.l(new C.eBG())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adN,v)},
b_x(d){this.d.cYL(0,d.c,d.d)
this.F0()},
F0(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lW,new C.eBs(this))},
azX(d){var w,v,u,t,s=this.d.a,r=B.a5(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("M.E"))
r=B.U(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cmD(d){var w,v,u,t,s,r=this.d.a,q=B.a5(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("M.E"))
q=B.U(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c43(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dp(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.ni.h(0,r.b).c===D.yo)continue
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
cdo(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hJJ(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cGP(d){var w,v,u,t,s,r,q=this,p=q.azX(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f0()
u=v.b
if(u==="button"){w.aIf(p)
return}if(q.r)return
t=D.ni.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rM)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.F0()
return}if(q.r)return
r=q.cdo(d)
if(r!=null){w=q.d
A.d.cJ(w.b,r)
w.b3()
q.F0()}},
cnZ(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cmD(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.azX(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
co_(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b55(){var w,v,u=this
if(u.z!=null){w=u.c43(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bg9(v,w)}else v=!1
if(v){B.k7()
u.F0()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.F0()
u.x=null}},
aev(d){return this.c7k(d)},
c7k(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aev=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.azX(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jC()
p=t.c
p.toString
w=3
return B.b(B.bU(L.mm,null,new C.eBJ(q),p,!0,!0,!1,A.m7,!1,!1,x.y),$async$aev)
case 3:if(f===!0){r.X(0,s)
t.F0()}case 1:return B.h(u,v)}})
return B.i($async$aev,v)},
cdm(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tk(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f0()
this.F0()},
aiy(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aiy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(L.mm,null,new C.eBL(),s,!0,!0,!0,A.m7,!1,!1,x.es),$async$aiy)
case 2:t=e
if(t!=null)u.b_x(t)
return B.h(null,v)}})
return B.i($async$aiy,v)},
afS(d){var w=0,v=B.j(x.H),u=this,t
var $async$afS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.eBv(),t,null,!0,!0,x.y),$async$afS)
case 2:if(f===!0){u.d.a5(0)
u.F0()}return B.h(null,v)}})
return B.i($async$afS,v)},
B(d){var w=this,v=null,u=B.a([B.akf(w.r?new B.bK(A.a5,v,v,new B.D(A.HS,B.hu(D.c_g,D.fXL,new C.eC4(w),v),v),v):w.cdp(),A.b_,A.iY),B.E(B.cf(new C.eC5(w)),1)],x.p)
if(!w.r)u.push(w.cBv())
return B.c5(v,A.c4,B.bo(!0,B.x(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bMy(){var w=null,v=new C.eBx(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bv.j(0.5),A.r,1)
return B.bS(0,B.ef(B.at(B.p(w,B.cb(B.x(B.a([D.h8n,A.at,D.hgf,A.aA,v.$4(A.ne,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(X.DL,A.ct,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kk,A.c2,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Qe,A.bt,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hfx,new B.bK(A.a9,w,w,B.bN(!1,D.h5r,w,w,!0,w,w,w,this.gbMr(),w,w),w)],x.p),A.B,w,A.e,A.M,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.YP,new B.o(L.mm,w,s,t,w,w,A.m),w,w,w,A.fc,Ab.aot,w,w,w),w,w,w),u,!0),0,0,0)},
cdp(){var w=this,v=null,u=B.aI(v,v,v,v,At.ng,v,v,v,new C.eBR(w),v,v,v,v,v,v),t=w.aaC(A.DD,"How it works",new C.eBS(w),!0),s=w.ay?R.oZ:A_.tI
return new B.D(D.bKF,B.A(B.a([u,D.bMn,t,w.aaC(s,"Sound",new C.eBT(w),!0),w.aaC(A.ef,"Ideas",w.gcrP(),!0),w.aaC(I.xb,"Clear",w.gcdn(w),!0),w.aR7(A.fZ,"Show",new C.eBU(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aR7(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.W(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.D(Ap.x2,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.hc(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.M,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aaC(d,e,f,g){return this.aR7(d,e,f,g,!1)},
cBv(){var w=null,v=new C.eBN(this),u=A.c.j(0.08)
return B.p(w,B.cb(B.A(B.a([v.$2("START",D.yo),v.$2("CHANGE",D.FY),v.$2("REACT",D.rM)],x.p),A.B,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aL),A.f,w,w,new B.o(L.Cw,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bFz,w,w,w)},
cBw(d){var w,v,u,t,s=null,r=D.ni.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f7,B.aA(s,B.p(s,B.x(B.a([B.W(r.b,v,s,s,s,22),A.cM,B.c(r.a,s,1,A.a2,s,s,s,D.aYn,s,s,s)],x.p),A.l,s,A.e,A.M,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a7(A.aX,A.b1,A.x,u,s,s),A.m),s,s,s,s,A.hK,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eBM(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bkT.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.T()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.r(r,s),1,u)
q=b4.CW
if(b5<q){$.T()
p=B.L()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aD(new B.a3(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.T()
e=B.a([],p)
d=new B.aH(f.r,A.aj,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i6(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.ni.h(0,l.b).d
a2=D.ni.h(0,k.b).d
f=new B.as(A.T,A.Q,A.W,A.X,A.U)
f.b=A.ac
f.c=3
f.d=A.bF
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rc(new B.r(i,j),new B.r(g,h))
f.san(new B.a7(A.a5,A.a9,A.x,e,b3,b3).az(0,new B.a3(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hJJ(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.T()
i=new B.as(A.T,A.Q,A.W,A.X,A.U)
i.r=A.c.j(0.35).gp(0)
i.y=N.oO
b7.O(a5,8,i)
i=new B.as(A.T,A.Q,A.W,A.X,A.U)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a6(0,D.Kp)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aH($.T().r,A.aj,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i6(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.ac
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.i.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.e8.aA(0,v)
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.U)
j.b=A.ac
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kY(p,j,A.e8.aA(0,v))
i.toString
j=B.kY(p,j,A.e8.aA(0,A.i.D(v-0.35,0,1)))
j.toString
$.T()
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.c=5
p.d=A.bF
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rc(j,i)
p.san(new B.a7(A.a5,A.a9,A.x,g,b3,b3).az(0,new B.a3(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.l5
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.i.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.U)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.U)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.l5
b7.O(p,11,j)
j=k.a
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.san(new B.bT(Af.BP,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.bX(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bkU(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gb8(q)/2)))}for(b4=new B.dp(o,o.r,o.e);b4.C();)b2.cnv(b7,b4.d,b5)
b6.restore()},
cnv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.ni.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bY(e.c,64,64)
t=B.bx(u,A.i5)
s=t.eI(A.cy)
$.T()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.nc
d.aq(s,r)
if(v>0){s=t.cs(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.Df
d.aq(s,r)}s=t.eI(A.cO)
r=B.L()
q=h.d
r.r=B.ap(q,A.v,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.v,0.35)
p.toString
r.san(new B.a7(A.aX,A.b1,A.x,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.L()
r.b=A.ac
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bkU(B.lx(r.a),30,A.c,r.b,j,A.F)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aI(0,new B.r(s/2,r.gb8(r)/2)))
n=C.bkU(h.a,11,A.c,j,j,A.F)
n.a4(d,e.c.a6(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aEd[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rM){s=e.c.a6(0,new B.r(0,62))
r=B.L()
r.r=D.aES[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bkU(m,9.5,A.aF,j,j,A.P)
l.a4(d,e.c.a6(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bkU(m,9.5,A.aF,j,j,A.P)
l.a4(d,e.c.a6(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yo)k.b5V(d,e.c.aI(0,D.Kp),q)
k.b5V(d,e.c.a6(0,D.Kp),q)},
b5V(d,e,f){var w
$.T()
w=B.L()
w.r=A.c4.gp(0)
d.O(e,9,w)
w=B.L()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aC(d){return!0}}
C.aPe.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.eo.prototype={}
C.u8.prototype={
at_(d,e,f,g){var w=this
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
C.ac9.prototype={}
C.adh.prototype={}
C.a6c.prototype={
bi3(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.ac9(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c9w(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bRZ())},
am5(d,e,f,g){var w="p"+this.c++,v=new C.u8(w,e,f,g)
v.at_(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.bq(this.b,new C.bS9(e))},
a5(d){A.d.a5(this.a)
A.d.a5(this.b)},
cPF(d,e,f,g,h){return A.d.aR(this.b,new C.bS4(e,f,g,h))},
amV(d,e,f,g){var w
if(d===f||this.cPF(0,d,e,f,g))return null
w=new C.adh(d,e,f,g)
this.b.push(w)
return w},
aDI(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Aw(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
apI(d){return this.MM(d)&&!d.x&&d.cx>this.Aw(d)},
baj(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
MM(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cdJ(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.AL.h(0,v)
if(w!=null)return w.a
return 100},
vS(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c9w(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bSa(a2),t).cD(0,0,new C.bSb(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bSd(o)
m=B.a([],x.t)
l=new C.bSc(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bSf(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.I)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.baf(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Aw(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.baf(e,d,w,!0)
a2.bTe(a4)},
baf(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bS0(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bS_(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bS2(B.S(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c1(b7,0,!1,b3)
v=x.Y
k=B.S(v,b3)
j=B.S(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bk(B.dJ(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c1(b7,0,!1,b3)
a0=B.c1(b7,0,!1,b3)
k.a5(0)
j.a5(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.baj(t)*(1+t.CW))
a4=b2.aDI(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cdJ(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bWA(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
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
bWA(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c1(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.I)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.I)(a0),++n){m=a0[n]
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
bTe(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aDI(o)/a1.baj(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Aw(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bLa(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bi3(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uw(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.i.D(o.db-h,0,24)
else o.cy=A.i.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.uw(o,"The "+$.qS().h(0,n).b+" got "+A.i.a9(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uw(o,"More than 1.5 amps went through the "+$.qS().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uw(o,"The regulator had to turn "+A.i.a9(o.cy,1)+" V into heat while "+A.i.R(i*1000)+" mA flowed. That is "+A.i.a9(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uw(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.AL.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qS().h(0,n).b
l=f.b
l=l===A.i.fO(l)?""+A.i.R(l):B.v(l)
g=f.c
g=g===A.i.fO(g)?""+A.i.R(g):B.v(g)
a1.uw(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.a9(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fqO.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uw(o,"The bulb got "+A.i.a9(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uw(o,"The LED had "+A.i.R(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uw(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.uw(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uw(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uw(o,"The capacitor was charged to "+A.i.a9(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bLa(d){return A.d.aR(this.a,new C.bRY(d))},
uw(d,e){var w
d.x=!0
d.ay=e
this.bi3(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bmJ(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a5(0)},
aK2(d){var w=d.b
return D.aV7.q(0,w)||D.AL.am(0,w)||w==="buck"||w==="regulator"},
bjz(d){var w,v=!0
if(!this.MM(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AL.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
W3(d,e){var w=this.b
return new B.X(w,new C.bSh(d,e),B.U(w).k("X<1>")).gJ(0)},
rz(d){var w,v
if(d.x)return!1
w=d.b
if(D.AL.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bhz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qS().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aK2(d)||i.rz(d))return null
w=i.W3(d,0)
v=i.W3(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("X<1>")
s=B.B(new B.X(u,i.gcYi(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.fO(r)?""+A.i.R(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.a9(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.AL.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.MZ("battery"),o=J.aS(t.a),t=new B.eJ(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.W3(n,0)+i.W3(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.MZ("switch"),o=J.aS(t.a),t=new B.eJ(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qS().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Aw(k))return"The "+$.qS().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.a9(k.cx,2)+" amps, but it can only give about "+A.i.a9(i.Aw(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bS5(i,d))
h=q.b
h=h===A.i.fO(h)?""+A.i.R(h):B.v(h)
u=A.i.a9(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.a9(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.a9(Math.abs(d.dy),1)+" V). Try a bigger battery."},
MZ(d){var w=this.a
return new B.X(w,new C.bS8(d),B.U(w).k("X<1>"))},
aJE(d){return this.MZ(d).aR(0,new C.bS7(0.35))},
qi(d,e){return A.d.aR(this.a,new C.bS6(e))}}
C.akR.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.T()
w=B.L()
w.r=F.nH.gp(0)
c0.aD(new B.a3(0,0,b8,b9),w)
w=C.ih7(c1)
v=$.hSG()
if(A.o.F(w.length,2)!==0)B.bk(B.dJ('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.oj(v)
t=v.n7()
v=c0.c
v.drawPoints($.hTA()[0],w,t)
t.delete()
for(w=b4.b,u=w.b,s=u.length,r=b4.f,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=p.a
n=o.c
m=p.b===0?-1:1
l=D.mC.am(0,o.b)?(o.ch-1)*38:0
o=o.d
k=p.c
j=k.c
i=p.d===0?-1:1
h=D.mC.am(0,k.b)?(k.ch-1)*38:0
b4.cMn(c0,new B.r(n*b6+m*(42+l),o*b7),new B.r(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.hXI(u.a,u.b,c1)
u=b4.e
u.toString
$.T()
s=B.L()
s.r=A.ab.gp(0)
s.c=3
s.d=A.bF
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.U)
j.r=F.NB.j(A.i.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Df
c0.O(new B.r(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.i.D(A.ny.aA(0,A.i.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cow(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.Aw(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.T().r
a0=B.a([],n)
a1=new B.aH(d,A.aj,b5,b5,a0)
a2=i-13
a0.push(new B.aZ(j,a2))
a1.ac()
a3=j+13
a4=i+10
a5=new B.aq(a3,a4)
a0.push(a5)
a6=a1.f
if(a6!=null)a5.aj(a6)
a1.ac()
a5=j-13
a6=new B.aq(a5,a4)
a0.push(a6)
a7=a1.f
if(a7!=null)a6.aj(a7)
a1.ac()
a6=new B.bA()
a0.push(a6)
a0=a1.f
if(a0!=null)a6.aj(a0)
a1.ac()
a0=new B.as(A.T,A.Q,A.W,A.X,A.U)
a0.r=A.aB.j(0.65+0.35*h).gp(0)
c0.af(a1,a0)
a0=B.a([],n)
d=new B.aH(d,A.aj,b5,b5,a0)
a0.push(new B.aZ(j,a2))
d.ac()
h=new B.aq(a3,a4)
a0.push(h)
a1=d.f
if(a1!=null)h.aj(a1)
d.ac()
h=new B.aq(a5,a4)
a0.push(h)
a1=d.f
if(a1!=null)h.aj(a1)
d.ac()
h=new B.bA()
a0.push(h)
a0=d.f
if(a0!=null)h.aj(a0)
d.ac()
h=new B.as(A.T,A.Q,A.W,A.X,A.U)
h.b=A.ac
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lD(c0,"!",new B.r(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aV7.q(0,k)||D.AL.am(0,k)||k==="buck"||k==="regulator")&&!w.rz(f)&&w.W3(f,0)+w.W3(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.U)
j.r=A.au.gp(0)
c0.O(new B.r(m,l),10,j)
b4.lD(c0,"!",new B.r(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mC.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.r(i,j)
$.T()
m=new B.as(A.T,A.Q,A.W,A.X,A.U)
m.r=F.nH.gp(0)
c0.O(a9,7,m)
m=new B.as(A.T,A.Q,A.W,A.X,A.U)
m.b=A.ac
m.c=2.4
m.r=(l&&w.bjz(f)?A.bY:A.ab).gp(0)
c0.O(a9,6,m)
if(l&&w.bjz(f))b4.lD(c0,"+",new B.r(i+-4,j+-22),A.bY,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.r(r,o)
b2=A.i.D(b0.r/0.8,0,1)
n=B.ap(M.Oj,F.a0s,b2)
n.toString
m=b0.f
$.T()
l=new B.as(A.T,A.Q,A.W,A.X,A.U)
l.r=n.gp(0)
l.c=2.4
l.d=A.bF
c0.ah(b1,new B.r(r-b0.e*0.035,o-m*0.035),l)
l=new B.as(A.T,A.Q,A.W,A.X,A.U)
l.r=n.j(0.35*b2).gp(0)
l.y=A.Pr
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bMj())){b3=A.d.cD(u,0,new C.bMk())
$.T()
b7=B.L()
b7.r=D.bjY.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aD(new B.a3(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aQE.h(0,b7)
if(a9==null){a9=B.h0(b5,A.cH,b5,b5,b5,D.fC_,A.a7,A.cd,b5,A.e2,A.ce)
a9.nA(b6-24)
$.aQE.n(0,b7,a9)}a9.a4(c0,new B.r(12,10))}},
lD(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aQE.a>300)$.aQE.a5(0)
w=$.aQE.h(0,u)
if(w==null){w=B.h0(v,A.cH,v,v,v,B.d1(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.cd,v,A.e2,A.ce)
w.eY()
$.aQE.n(0,u,w)}w.a4(d,f)},
cMn(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.T().r,A.aj,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hPy(a0,a1,a2)
e.E(new B.ch(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NB,A.i.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.i.D(r*1.2,0,1))
u.toString
o=u}else o=A.bj
u=B.L()
u.b=A.ac
u.c=a3?7:5
u.d=A.bF
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.ac
u.c=2.4
u.d=A.bF
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.amD(new B.v4(B.zQ(e),!1,B.a([],x.l))).gH(0)
m=40+A.i.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jP()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jP()
i=t[u].b
i===$&&B.d()
i=A.i.F(k*22+j*m*l,i.a.length())
v.jP()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jP()
h=t[u].b
h===$&&B.d()
g=A.i.F(i+j,h.a.length())
v.jP()
f=t[u].Wi(g)
j=new B.as(A.T,A.Q,A.W,A.X,A.U)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a_o(d,e,f,g){var w,v,u,t
$.T()
w=B.L()
v=g?A.aX:A.a5
u=g?A.b1:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a7(v,u,A.x,B.a([e,f,e,t],x.O),A.Jh,null).az(0,d))
return w},
b0d(d,e,f){return this.a_o(d,e,f,!0)},
c95(d,e){return this.a_o(d,A.bj,A.hW,e)},
ajH(d,e){var w,v,u
$.T()
w=B.L()
w.san(D.eKf.az(0,B.bX(e,4.2)))
d.O(e,4.2,w)
w=e.a6(0,D.ezy)
v=e.a6(0,D.ezH)
u=B.L()
u.r=A.cQ.gp(0)
u.c=1.2
d.ah(w,v,u)},
cow(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.T(),b9=B.L()
b9.san(D.caA.az(0,D.fn_))
b9.c=3.4
b9.d=A.bF
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=N.oO
c0.c1(D.fmP,w)
if(c2){w=B.bx(D.fmY,A.k_)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.htT(c1)
c0.ah(new B.r(-u,0),D.eB3,b9)
c0.ah(D.eyd,new B.r(u,0),b9)
t=c1.x
w=c1.b
s=D.mC.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bV(0,c1.ch)}switch(w){case"battery":b2.bHS(c0,c1)
break
case"solar":r=B.bx(D.fmR,A.jG)
c0.aq(r,b2.a_o(new B.a3(r.a,r.b,r.c,r.d),A.cX,A.bO,!1))
b8=B.L()
w=B.ap(D.bo0,A.db,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bxN,A.lU,0.3+0.4*c1.f)
v.toString
b8.san(new B.a7(A.ay,A.aC,A.x,B.a([w,v],x.O),b3,b3).az(0,D.ab8))
c0.aD(D.ab8,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.r(b8,-18),new B.r(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.r(-34,b8),new B.r(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.T()
w=new B.as(A.T,A.Q,A.W,A.X,A.U)
w.r=A.cA.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.r(b8,-18),new B.r(b8,18),w)}b8=new B.aH($.T().r,A.aj,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-34,18))
b8.E(new B.aq(-6+40*c1.f,-18))
b8.E(new B.aq(4+40*c1.f,-18))
b8.E(new B.aq(-24,18))
b8.E(new B.bA())
w=B.L()
w.r=A.c.j(0.1+0.22*c1.f).gp(0)
c0.af(b8,w)
w=c1.f
b8=B.L()
b8.r=A.eE.j(0.9).gp(0)
c0.O(D.eyh,4+4*w,b8)
break
case"crank":o=B.bx(D.fmB,A.h1)
c0.aq(o,b2.b0d(new B.a3(o.a,o.b,o.c,o.d),A.bz,A.bP))
b8=B.L()
b8.san(D.aTe.az(0,B.bX(A.J,12)))
c0.O(A.J,12,b8)
n=new B.r(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cA.gp(0)
b8.c=5
b8.d=A.bF
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eKC.az(0,B.bX(n,7)))
c0.O(n,7,b8)
b2.ajH(c0,D.eAX)
b2.ajH(c0,D.ey1)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aH(b8,A.aj,b3,b3,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bA())
m=B.L()
m.r=A.bO.gp(0)
c0.af(v,m)
for(v=c0.c,l=0;l<3;++l){m=c1.y
J.bs(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aH(b8,A.aj,b3,b3,m)
m.push(new B.aZ(0,-2))
k.ac()
j=new B.ch(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.ch(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.bA()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.ac()
m=new B.as(A.T,A.Q,A.W,A.X,A.U)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.L()
b8.san(D.eKi.az(0,B.bX(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fmJ,A.qa)
b8=B.L()
b8.san(D.av4.az(0,new B.a3(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.ajH(c0,D.Vc)
b2.ajH(c0,D.aO_)
h=c1.w?D.aO_:H.aNQ
b8=B.L()
b8.r=A.aw.gp(0)
b8.c=6
b8.d=A.bF
c0.ah(D.Vc,h,b8)
b8=B.L()
b8.r=(c1.w?A.be:A.bO).gp(0)
b8.c=4
b8.d=A.bF
c0.ah(D.Vc,h,b8)
b8=B.kY(D.Vc,h,0.85)
b8.toString
w=B.L()
w.r=A.aB.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bx(D.aU_,D.aTj)
b8=B.L()
b8.r=A.fA.j(0.25).gp(0)
c0.aq(g,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.aF.gp(0)
c0.aq(g,b8)
if(!t){b8=B.L()
b8.c=1.6
b8.r=B.ap(A.bO,A.cS,c1.fx).gp(0)
c0.ah(D.aOj,D.aNY,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bV.gp(0)
c0.ah(D.aOj,D.eBr,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bV.gp(0)
c0.ah(D.ez4,D.aNY,b8)
b8=B.L()
b8.r=A.e3.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.bY(new B.r(M.hp[f]*22,0),20,9)
c0.aq(B.bx(e,A.hq),b2.a_o(e,A.d9,A.ow,!0))}break
case"pot":b8=B.L()
b8.san(D.eKt.az(0,B.bX(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.as(A.T,A.Q,A.W,A.X,A.U)
k.r=A.aF.gp(0)
k.c=1.2
c0.ah(new B.r(b8*18,w*18),new B.r(v*22,m*22),k)}b8=B.L()
b8.san(D.eKg.az(0,B.bX(A.J,13)))
c0.O(A.J,13,b8)
a0=2.356194490192345+c1.f*3.141592653589793*1.5
b8=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.L()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bF
c0.ah(new B.r(b8*3,w*3),new B.r(v*12,m*12),k)
break
case"resistor":a1=B.bx(D.aU_,D.aTj)
b8=B.L()
b8.san(D.ce7.az(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b0(b4),B.b0(b5),A.v],b8),100,B.a([B.b0(b6),A.v,B.b0(b6)],b8),220,B.a([B.b0(b7),B.b0(b7),B.b0(b6)],b8),470,B.a([B.b0(b4),B.b0(b5),B.b0(b6)],b8),1000,B.a([B.b0(b6),A.v,B.b0(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.as(A.T,A.Q,A.W,A.X,A.U)
w.r=a3[p].gp(0)
c0.aD(new B.a3(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aD(D.fnb,b8)
b8=c1.r
b2.lD(c0,b8>=1000?"1k\u03a9":""+A.i.R(b8)+"\u03a9",D.eAs,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eE.j(0.55*w).gp(0)
v.y=A.Df
c0.O(H.vX,34,v)}o=B.bY(D.ewX,12,18)
c0.aq(B.bx(o,A.hq),b2.a_o(o,A.bj,A.dS,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.as(A.T,A.Q,A.W,A.X,A.U)
v.r=A.dF.gp(0)
v.c=1
c0.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.Gy
else{v=B.ap(A.dS,A.hZ,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.GU
else{m=B.ap(A.cX,A.eE,c1.fx)
m.toString}w.san(new B.bT(A.mO,0.5,A.x,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bX(A.u1,17)))
c0.O(A.u1,17,w)
w=B.L()
w.b=A.ac
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.u1,17,w)
b8=b8.r
w=x.v
m=new B.aH(b8,A.aj,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.ch(-12,-4,-9,0))
v=B.L()
v.b=A.ac
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cB.gp(0)
v.c=1.4
c0.ah(D.eBl,D.eBn,v)
v=B.L()
v.r=A.cB.gp(0)
v.c=1.4
c0.ah(D.eyY,D.ez0,v)
w=B.a([],w)
a4=new B.aH(b8,A.aj,b3,b3,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b8=(l&1)===0?-6:1
b8=new B.aq(-4+a5*8/6,-2+b8)
w.push(b8)
v=a4.f
if(v!=null)b8.aj(v)
a4.ac()}$.T()
b8=B.L()
b8.b=A.ac
b8.c=1.8
if(t)w=A.b7
else{w=B.ap(A.cX,D.bp8,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aB.j(0.6*w).gp(0)
v.y=D.bMa
c0.O(A.u1,30,v)}w=B.L()
w.r=A.dS.gp(0)
w.c=2.4
c0.ah(D.eBt,D.eBs,w)
w=B.L()
w.r=A.dS.gp(0)
w.c=2.4
c0.ah(D.ez6,D.ez5,w)
b8=b8.r
w=x.v
a6=new B.aH(b8,A.aj,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ch(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bA())
v=B.L()
if(t)m=A.jw
else{m=B.ap(A.ey,D.bqV,c1.fx)
m.toString}if(t)k=A.l1
else{k=B.ap(A.kF,A.aB,c1.fx)
k.toString}v.san(new B.a7(A.ay,A.aC,A.x,B.a([m,k],x.O),b3,b3).az(0,D.fm3))
c0.af(a6,v)
v=B.L()
v.b=A.ac
v.c=1.2
v.r=A.jS.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.er.gp(0)
c0.aD(D.fm9,v)
w=new B.aH(b8,A.aj,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ch(-6,-12,0,-15))
b8=B.L()
b8.b=A.ac
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c0.aq(B.bx(a7,A.iA),b2.b0d(a7,A.an,A.bn))
b8=B.L()
b8.r=A.cu.gp(0)
c0.aD(D.flD,b8)
b8=B.L()
b8.r=A.cA.gp(0)
c0.aD(D.flF,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bY(H.aNL,15,7)
v=new B.as(A.T,A.Q,A.W,A.X,A.U)
v.r=A.cS.j(0.9).gp(0)
c0.c1(w,v)
b8.restore()}w=B.L()
w.r=A.aw.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lD(c0,"M",D.eAW,A.aw,14)
break
case"buzzer":a8=B.bY(A.J,42,42)
b8=B.L()
b8.san(D.eKx.az(0,a8))
c0.c1(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lD(c0,"+",D.eAP,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.i.F(b8.d*14,5):0
v=B.bX(A.J,24+l*5+v)
m=new B.as(A.T,A.Q,A.W,A.X,A.U)
m.b=A.ac
m.c=2
m.r=A.c2.j(w*(1-l*0.22)).gp(0)
c0.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fmF,A.iA)
w=B.L()
w.san(D.cbG.az(0,new B.a3(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aH(b8.r,A.aj,b3,b3,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.ch(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.T()
w=B.L()
w.b=A.ac
w.c=10
w.r=D.bpT.j(0.5*b8).gp(0)
w.y=A.l5
c0.af(a9,w)}$.T()
b8=B.L()
b8.b=A.ac
b8.c=3.2
b8.d=A.bF
b8.r=B.ap(A.mk,Aj.z1,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b8=B.bx(a7,A.iA)
w=B.L()
w.san(D.auT.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bO.gp(0)
c0.aD(D.fmj,w)
for(p=0;p<4;++p)b2.lD(c0,"\u2212",new B.r(-14,-18+p*9),A.aw,11)
b0=new B.a3(-16,-24,16,-17)
c0.aq(B.bx(b0,A.hq),b2.c95(b0,!1))
b8=38*c1.fx
w=18-b8
$.T()
v=B.L()
v.r=A.be.j(0.5).gp(0)
c0.aD(new B.a3(-3,w,11,w+b8),v)
b2.lD(c0,"1F",H.vX,A.c,11)
break
case"radio":a1=B.bx(D.ab8,A.h1)
b8=B.L()
b8.san(D.cem.az(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.ow.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fmG,A.jG)
w=B.L()
w.r=A.e_.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.as(A.T,A.Q,A.W,A.X,A.U)
w.r=A.mk.gp(0)
w.c=1.4
c0.ah(new B.r(-27,b8),new B.r(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.h8:A.oy).gp(0)
c0.aD(D.flK,b8)
if(c1.fx>0){b8=8+A.i.F(b2.b.d*7,18)
w=B.L()
w.r=A.bE.gp(0)
w.c=1.6
c0.ah(new B.r(b8,-13),new B.r(b8,-3),w)}b8=B.L()
b8.san(D.aTe.az(0,B.bX(D.aa5,6)))
c0.O(D.aa5,6,b8)
b8=B.L()
b8.r=A.ow.gp(0)
c0.O(D.eyc,4,b8)
b8=B.L()
b8.r=A.dS.gp(0)
b8.c=1.8
c0.ah(D.ey7,D.aO4,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bX(D.aO4,4+l*5+A.i.F(b8.d*8,5))
v=new B.as(A.T,A.Q,A.W,A.X,A.U)
v.b=A.ac
v.c=1.4
v.r=A.oF.j(0.7).gp(0)
c0.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fmQ,A.iA)
v=B.L()
v.r=M.n3.gp(0)
c0.aq(w,v)
b1=B.bx(D.fmN,A.hq)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nb(b1),$.mQ(),!0)
b8.translate(-33,-21)
K.h3l(c0,D.ftE,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.be.gp(0)
c0.O(D.eyo,1.6,b8)}else{w=B.L()
w.r=D.wI.gp(0)
c0.aq(b1,w)
b8=new B.aH(b8.r,A.aj,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bA())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bz.gp(0)
c0.aD(D.fm8,b8)
break}C.iB1(c0,c1,b2.b.d,b2.gcdK())
if(t)b2.lD(c0,"\u2716",D.eBv,A.aB,14)
if(s)c0.c.restore()},
aSe(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bMi(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a3(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aP(j,j))
$.T()
w=B.L()
w.san(o.$2(h,D.dhL))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a3(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dGe))
d.aD(new B.a3(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dfY))
d.aD(new B.a3(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a3(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aEh))
d.aD(q,s)
r-=0.5
s=m+l*0.3
p=new B.a3(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aP(s,s))
r=B.L()
r.san(o.$2(p,D.aEh))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aD(new B.a3(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lD(d,"+",new B.r(t+u*0.08,m+n),A.dg,o)
if(g!=null)this.lD(d,g,new B.r(i+u*0.12,m+w),A.bO,o)}},
bKX(d,e,f){return this.aSe(d,e,!0,f)},
bKW(d,e,f){return this.aSe(d,e,f,null)},
bHS(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.i.fO(a3)?A.i.R(a3):a3)+"V"
if(a3<=2){a2.bKX(a5,D.fmE,a4)
a2.lD(a5,"\u2212",D.eB5,A.ab,12)
a2.lD(a5,"+",D.ey2,A.aQ,12)
$.T()
w=B.L()
w.r=A.bw.gp(0)
a5.aD(D.fms,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aB,A.be,w).gp(0)
a5.aD(new B.a3(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lD(a5,"FLAT",D.eAC,A.bY,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a3(-31,w,31,v)
r=B.bx(s,A.jG)
$.T()
q=B.L()
q.san(D.cdN.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bKW(a5,new B.a3(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dfS[o]
$.T()
m=new B.as(A.T,A.Q,A.W,A.X,A.U)
m.r=A.dS.gp(0)
a5.aD(new B.a3(n,r,n+1.6,q),m)}a2.lD(a5,a4,new B.r(-9,v+1),A.aQ,10)
a2.lD(a5,"+",new B.r(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a3(-18,-16,18,18)
w=B.bx(l,A.hq)
v=$.T()
r=B.L()
r.san(D.ce4.az(0,l))
a5.aq(w,r)
k=new B.a3(-18,-4,18,18)
r=B.rb(k,A.hq,A.hq,A.bJ,A.bJ)
w=B.L()
w.san(D.auT.az(0,k))
a5.aq(r,w)
j=new B.a3(-18,-16,18,-11)
w=B.rb(j,A.bJ,A.bJ,A.hq,A.hq)
r=B.L()
r.san(D.ceu.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eKN.az(0,D.fmc))
a5.O(D.aOn,4,i)
r=B.a([],x.v)
h=new B.aH(v.r,A.aj,null,null,r)
for(g=0;g<6;++g){f=g*3.141592653589793/3
w=7+Math.cos(f)*5
v=-19+Math.sin(f)*5
if(g===0){w=new B.aZ(w,v)
r.push(w)
v=h.f
if(v!=null)w.aj(v)
h.ac()}else{w=new B.aq(w,v)
r.push(w)
v=h.f
if(v!=null)w.aj(v)
h.ac()}}h.E(new B.bA())
a5.af(h,i)
$.T()
w=B.L()
w.r=A.cv.gp(0)
a5.O(D.ezd,2,w)
a2.lD(a5,"9V",D.eBy,A.c,13)
a2.lD(a5,"+",D.eAy,A.aQ,11)}else{e=new B.a3(-34,-12,34,18)
w=B.bx(e,A.hq)
$.T()
v=B.L()
v.san(D.cbA.az(0,e))
a5.aq(w,v)
d=new B.a3(-36,-18,36,-10)
v=B.bx(d,D.eKV)
w=B.L()
w.san(D.av7.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.as(A.T,A.Q,A.W,A.X,A.U)
w.r=A.aw.gp(0)
a5.O(new B.r(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bt.j(0.92).gp(0)
a5.aD(D.fmO,w)
for(o=0;o<2;++o){w=D.cGL[o]
n=w.a
a0=w.b
a1=B.bY(new B.r(n,-21),7,8)
w=B.bx(a1,A.Fe)
v=new B.as(A.T,A.Q,A.W,A.X,A.U)
v.san(D.cc9.az(0,a1))
a5.aq(w,v)
v=B.bx(B.bY(new B.r(n,-24),3.5,9),A.Fe)
w=new B.as(A.T,A.Q,A.W,A.X,A.U)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lD(a5,"\u2212",D.eB6,A.ab,11)
a2.lD(a5,"+",D.exY,A.aB,11)
a2.lD(a5,"12V",H.aOh,A.aw,11)}},
aC(d){return!0}}
C.n7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a5(k)
A.d.a5(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u8(o,r,q,p)
n.at_(o,r,q,p)
k.push(n)
J.iU(s[4],new C.cwg(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.amV(m,u[1],l,u[3])}}}
C.akP.prototype={
S(){var w=x.N
return new C.akQ(B.c0(2000,1,1,0,0,0,0,0),A.J,A.az,B.S(w,x.gl),B.aQ(w),$,A.bG,0,B.a([],x.X),null,null)}}
C.akQ.prototype={
ag2(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.l(new C.bLW(w,d))
w.ch=B.cy(A.n8,new C.bLX(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bxr()},
a1x(d,e){return this.cmm(d,e)},
b4z(d){return this.a1x(d,!1)},
cmm(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1x=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.nT:A.zb
p=d.b
w=3
return B.b(K.hqf(s,r,p,d.ax<3.2,q,$.qS().h(0,p).b),$async$a1x)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1x,v)},
czl(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.CW.c_(0,d.a,new C.bLY()),t=J.cH(u)
t.I(u,v)
t.bq(u,new C.bLZ(v))
if(t.gJ(u)>=4){t.a5(u)
t=w.db
if(t!=null)t.a1(0)
w.a2T(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cy(A.iZ,new C.bM_(w,u,d))}},
a1e(d){return this.ckG(d)},
ckG(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iCg(s,d.b,A.i.R(A.i.F(t.a.c.d*0.12,1)*100)),$async$a1e)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1e,v)},
a2T(d){return this.cwR(d)},
cwR(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bLU(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2T)
case 2:return B.h(null,v)}})
return B.i($async$a2T,v)},
a_(){this.a3()
this.bjJ()
this.mn()},
bjJ(){this.a.c.e=new C.bMf(this)},
mE(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vS(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mC.h(0,s.b)
if((r==null?null:r.b)!==D.Bc)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1x(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dD(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dD(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cR.ai()<0.5
else u=!1
if(u)G.dD(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dD(900+A.cR.av(800),"",90,0,0.1,o)
if(A.cR.ai()<0.35)G.dD(300+A.cR.av(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cR.ai()<0.4
else u=!1
if(u)G.dD(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dD(330+A.o.F(110*A.i.bc(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dD((A.i.bc(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dD(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dD(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cR.ai()<0.5
else u=!1
if(u)G.dD(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dD(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dD(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.l(new C.bMg())},
bbJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mC.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b5f(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mC.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cMo(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mC.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mC.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hPy(new B.r(k,n),new B.r(i,l),p)
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
ag0(){this.a.toString
this.l(new C.bLl())},
bu5(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.djt[v]
if(!A.d.aR(p.a.c.a,new C.bMh(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.B0:o
s=s?A2.B0:o
q=t.am5(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dD(1200,"",50,0,0.3,"tri")
p.ag0()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Ty[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.ap(u+1,2)):w
r=t?A.d.fE(w,A.o.ap(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a5(q).k("cq<1>")
w=B.B(new B.cq(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b54(s,!0))
n.a.toString
if(t)w.push(n.b54(r,!0))
w.push(B.E(B.cf(new C.bMe(n,q)),1))
return B.x(w,A.l,null,A.e,A.h,0,A.p)},
b54(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qS()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.y1,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.oj,p,p,p)],n),A.l,p,A.b9,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.oN,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bLm(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cp(m,p,p,A.hl,p,p,A.aL,!1),A.f,p,p,new B.o(L.Cw,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cox(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qS().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bLI(e,a1)
t=new C.bLH()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.aa(0,A.H,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.p(A.z,B.c(a1.c,d,d,d,d,d,d,A.y1,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.p(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.WI,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.m),d,d,d,d,A.o_,d,d,d),A.y,!1,D.hGW,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bLt(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c5Y,d,d,d,new C.bLu(e,a2),d,d,d,d,"Remove part",A.cl),B.aI(d,d,d,d,Av.R_,d,d,d,new C.bLv(e),d,d,d,d,d,A.cl)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.Lp,d,d,d),A.cM,B.c("How it is made: "+a1.f,d,d,d,d,d,d,V.aXW,d,d,d)],k))
m.push(A.al)
if(a2.x)m.push(D.fWD)
else m.push(new B.D(A.f7,B.A(B.a([t.$2(A.i.a9(Math.abs(a2.dy),2),"VOLTS"),A.bf,t.$2(A.i.a9(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bf,t.$2(A.i.a9(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bhz(a2)
if(j!=null){a1=(a2.x?A.aB:A.au).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aB:A.au).j(0.5),A.r,1)
m.push(new B.D(A.hy,B.p(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fSs,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.m),d,d,d,d,A.cr,d,d,d),d))}if(C.hnG(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f7,new E.e_("CH "+h,a2.at===i,new C.bLz(e,a2,i),d,r,d),d))}a1=B.cb(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aL)
if(e.a.c.rz(a2)){w=F.Tm[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.al,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,O.hF,d,d,d)],k)
if(e.a.c.rz(a2))a1.push(new E.fH(A.xe,"Open big screen",new C.bLA(e,a2),r,d))
A.d.u(m,a1)}if(D.mC.am(0,a0)&&!C.hnG(a0)){a1=B.a([A.al],k)
if(e.f||!e.a.c.rz(a2))a1.push(B.c(e.a.c.rz(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,O.hF,d,d,d))
if(e.a.c.rz(a2))a1.push(new E.fH(A.QH,"Open the "+$.qS().h(0,a0).b,new C.bLB(e,a2),r,d))
A.d.u(m,a1)}if(D.mC.am(0,a0))A.d.u(m,B.a([A.al,new E.fH(A.DH,"Make it bigger (or tap it 4 times)",new C.bLC(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.i.a9(a2.db,1)
if(e.a.c.rz(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.al,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.i.a9(v,1)+" V",d,d,d,d,d,d,D.fMh,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dD8[g]
w=f===A.i.fO(f)?A.i.R(f):f
a1.push(new E.e_(B.v(w)+" V out",a2.e===f,new C.bLD(e,a2,f),d,r,d))}v.push(new B.D(A.lw,B.bZ(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.haN)
A.d.u(m,v)}if(e.a.c.MM(a2)&&!a2.x){a1=A.i.a9(a2.cx,2)
w=A.i.a9(e.a.c.Aw(a2),2)
v=e.a.c
o=v.apI(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.apI(a2)?A.bY:A.eD,d,d,d,d,d,d,d,d,12.5,d,d,A.F,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.i.D(a2.cx/e.a.c.Aw(a2),0,1)
v=e.a.c.apI(a2)?A.aB:A.be
m.push(new B.D(A.hy,B.x(B.a([a1,A.cM,B.bw(w,B.jD(A.bw,d,d,5,d,o,new B.kS(v,x.c)),A.aq)],k),A.B,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.i.R(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hy,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fFK,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.drb[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e_(w,a2.e===f,new C.bLE(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dgl[g]
w=f>=1000?"1 k\u03a9":""+A.o.R(f)+" \u03a9"
a1.push(new E.e_(w,a2.r===f,new C.bLF(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bLG(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bLw(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bLx(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bLy(a2)))
if(a0==="crank")m.push(D.h60)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,O.hF,d,d,d))
return B.p(d,new B.cQ(D.b9o,B.cb(B.x(m,A.B,d,A.e,A.M,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.Zr,d,q,s,p,d,A.m),d,d,D.hGe,d,D.bGc,d,d,d)}}
C.beC.prototype={}
C.WM.prototype={
S(){return new C.aGb(C.htS(),new B.cx(null,x.gJ),B.aQ(x.S))}}
C.aGb.prototype={
a_(){this.a3()
$.aU.cV$.push(this)
this.ag1()},
ag1(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fQS(),$async$ag1)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iBq(t.d,r)
if(s!=null){t.l(new C.e4H(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ag1,v)},
FO(){var w,v=this
if(!v.as)return
w=C.irE(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bIq(w)},
jn(d){if(d!==A.h5)this.FO()},
t(){$.aU.hZ(this)
this.FO()
this.a2()},
cdM(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("X<1>")
t=new B.X(v,new C.e4Q(q),u).gJ(0)
s=new B.X(v,new C.e4R(),u).gJ(0)
r=new B.X(v,w.gd0Z(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e4S(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FO()
if(A.o.F(q.w,10)===0){w=q.f
$.ajV()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajV()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JY("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e4T())
q.FO()
w=q.c
w.toString
w=B.Kr(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.ajV()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mo,p,p,p,p,p,p,p,p,p,p))}},
aiU(){var w=0,v=B.j(x.H),u=this,t
var $async$aiU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.e4G(u),t,null,!0,!0,x.H),$async$aiU)
case 2:return B.h(null,v)}})
return B.i($async$aiU,v)},
b2h(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.W(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hc(new B.a6(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b2g(d,e,f,g){return this.b2h(d,e,f,g,null)},
atG(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.A(B.a([B.W(d,f,w,w,w,15),A.e6,new B.d5(1,A.cg,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.b9,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ahd(){var w=0,v=B.j(x.H),u=this,t
var $async$ahd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a8(t,!1).cc(B.ec(new C.e4C(u),!1,null,x.H)),$async$ahd)
case 2:t=u.e.gbm()
if(t!=null)t.bjJ()
if(u.c!=null)u.l(new C.e4D())
u.FO()
return B.h(null,v)}})
return B.i($async$ahd,v)},
bL3(){var w,v,u,t,s=null,r=this.f
$.ajV()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bi:A.aB
u=B.n(9)
t=B.K(L.Cw,A.r,1.5)
return B.p(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.y4,s,s,s),s,s,s),A.f,s,D.b9d,new B.o(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
ak2(){var w=0,v=B.j(x.H),u=this,t
var $async$ak2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.n2,null,new C.e4P(u),t,!0,!0,!0,A.ku,!1,!1,x.H),$async$ak2)
case 2:return B.h(null,v)}})
return B.i($async$ak2,v)},
cdN(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.c2y,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4V(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.p(r,D.bfc,A.f,r,r,new B.o(A.bs,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.x(B.a([D.h8I,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f0:A.hj,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.h,0,A.p),1),new C.aA8(s.gcko(),r),A.w4,s.b2g(A.ra,"Construction Lab: real 3D wiring, plumbing and a house",A.cS,new C.e4W(s,d)),s.b2h(A.m1,"Challenges",A.aQ,s.gcBY(),s.bL3()),s.b2g(A.DD,"How to play",A.aH,new C.e4X(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.al,B.A(B.a([s.atG(A.o1,"Circuits",A.bl,s.gcuI()),A.bf,s.atG(A.oS,"Repair",A.aQ,new C.e4Y(s)),A.bf,s.atG(I.xb,"Clear",A.bY,new C.e4Z(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.M,0,A.p),A.f,r,r,new B.o(L.Cw,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bLv,r,r,r)},
B(d){var w=this,v=null
$.aut="tech"
return B.c5(v,A.c4,B.bo(!0,B.x(B.a([w.cdN(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hsI(w.d,w.e,w.gcdL(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aA8.prototype={
S(){return new C.bcH(null,null)}}
C.bcH.prototype={
gaA3(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Y,null,1,null,v)
w.cX(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaA3().t()
this.byN()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hc(new B.a6(42,42,B.c9(this.gaA3(),new C.cNP(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bcG.prototype={
a4(d,e){var w,v,u,t=null,s=e.eo(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.T()
w=B.L()
w.r=A.b2.j(0.25+0.15*o).gp(0)
w.y=N.oO
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eKs.az(0,B.bX(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ac
v.c=2.2
v.san(new B.hb(A.z,0,6.283185307179586,A.x,D.d63,t,new B.mX(p)).az(0,B.bX(s,r)))
d.O(s,r,v)
p=new C.cNO(d)
p.$3(s.a6(0,A.u1),8+o*1.5,1)
q*=4
p.$3(s.a6(0,D.ezk),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a6(0,D.eBC),2.6,0.5+0.5*Math.cos(q))
u=B.h0(t,A.cH,t,t,t,D.fC5,A.a7,A.cd,t,A.e2,A.ce)
u.eY()
u.a4(d,s.a6(0,new B.r(-u.b.c/2,5)))},
aC(d){return d.b!==this.b}}
C.aAt.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aAu.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bxq()}}
C.aMN.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBw.prototype={}
C.h2.prototype={}
C.Ks.prototype={
a8(){return"ScreenStyle."+this.b}}
C.mi.prototype={}
C.Wv.prototype={
S(){return new C.aG1(A2.B0,null,null)}}
C.aG1.prototype={
gab9(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oM,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gabT(){var w=D.mC.h(0,this.a.c)
return w==null?D.aUi:w},
t(){if(this.f){P.D9(Y.Lj)
P.bGR()}this.gab9().t()
this.bAF()},
gBS(){var w=this.gab9().y
w=w==null?null:A.o.ap(w.a,1000)
return(w==null?0:w)/1000},
On(){var w,v=this,u=v.e
if(u==null)return null
w=F.iv[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.i.bc(Math.max(0,v.gBS()-v.z)/10),14)
return w},
K5(d){this.l(new C.e0D(this,d))},
b5B(d){this.l(new C.e0E(this,d,14))},
aDY(d){var w=this.On()
if(w==null)w=d>0?-1:0
return this.b5B(w+d)},
cH0(d,e){if(e.a<=0||e.b<=0||this.On()==null)return
this.l(new C.e0O(this,d,e))},
ae2(){return this.c5V()},
c5V(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ae2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.On()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new C.e0C(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$ae2)
case 3:if(t.c!=null&&r.a)t.b5B(q)
case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
cIz(){var w=this,v=!w.f
w.l(new C.e0P(w,v))
if(v){P.D9(Y.aci)
P.hox(w.gabT().b===D.xO)}else{P.D9(Y.Lj)
P.bGR()}},
cdQ(){var w,v=this
if(!v.f)return
B.jC()
v.l(new C.e0Q(v))
w=v.c.K(x.q).f
w.MA()
if(v.r)w.T(F.aWp)},
aQB(d){return B.cf(new C.e0v(this,d))},
cnW(d){var w,v=this,u=null,t=v.gBS(),s=t-v.w,r=s<1.4?new K.b0k(v.x,s):u
if(F.iv[d].e===-1){w=Math.max(0,t-v.z)
return new C.agx(d,w,r,A.o.F(v.y+A.i.bc(w/10),14),u)}return new C.agx(d,t,r,u,u)},
b_f(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.R(u,0,u,0),B.A(B.a([B.W(A.kK,A.aw,w,w,w,d*0.6),new B.a6(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.aw,w,w,w,w,w,w,w,w,d*0.48,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,w,w),w),A.no,!0,w,w,w,w,D.hGg,w,w,w,w,w,w,this.gc5U(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.no,w,w,A.ai)},
b2i(d,e,f,g){var w=null,v=B.nl(w,A.b7,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.W(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cdP(d,e,f){return this.b2i(d,e,f,null)},
cw0(){var w=this,v=null,u=new C.e0M(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gabT().d.j(0.5),A.r,1),q=u.$3(D.bVW,"AD \u2212",new C.e0I(w)),p=u.$3(A.asj,"AD +",new C.e0J(w)),o=u.$5$color$on(A.kJ,"HOME",new C.e0K(w),w.gabT().d,w.e==null),n=w.e
n=n!=null&&F.iv[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.zS,"ADS",new C.e0L(w),A.c2,n)],x.p),A.l,v,A.e,A.M,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,D.hGm,v,A.Po,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gabT(),l=o.f,k=!l||!o.r
l=l?B.aF(d,A.dG,x.w).w.r.b+26:8
w=o.cdP(A.cz,"Back to the board",new C.e0R(d))
v=o.f
u=v?As.In:A.xe
v=v?"Leave full screen":"Full screen"
v=o.b2i(u,v,o.gbcc(),D.hH8)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,n,n,B.p(n,B.c(t==null?s:s+" \xb7 "+F.iv[t].a,n,1,A.a2,n,n,n,Au.xY,n,n,n),A.f,n,n,new B.o(A.b7,n,n,u,n,n,A.m),n,n,n,n,A.lX,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.xO?o.bNc(m):o.cro(m)
l=o.f
w=!l
v=l?o.gb2j():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b4,A.t,B.a([l,B.ao(n,B.xL(new B.ds(!k,q,n),A.b_,A.i9,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.al,o.cw0(),B.E(new B.D(A.cx,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c5(n,A4.a05,B.bo(w,B.aA(A.c_,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cdO(d){var w
switch(d.a){case 1:w=0.46153846153846156
break
case 2:w=0.45
break
case 3:w=0.9259259259259258
break
case 4:w=0.75
break
default:w=0.7317073170731708
break}return w},
cro(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abh
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(p.gab9(),new C.e0H(p,w,d,m),o)
if(n===D.abi)v=new B.BW(D.bM9,v,o)
n=p.cdO(n)
u=p.f?A.hM:AB.a1z
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.aa(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A8.HT,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a7(A.ay,A.aC,A.x,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
baQ(d){var w=Date.now(),v=A.o.D(this.a.d+A.i.bc(this.gBS()*0.4),0,100),u=d.b===D.abh,t=u?34:20,s=u?28:18
return new B.D(new B.R(t,12,s,2),B.cf(new C.e0N(new B.V(w,0,!1),v)),null)},
axS(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dxE,new B.a7(A.ay,A.aC,A.x,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fIJ,v,v,v)],w))
return B.aA(v,B.x(t,A.l,v,A.e,A.M,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e0A(this,d),v,v,v,v,v,v,!1,A.a4)},
c3M(d,e){return this.axS(d,e,!0)},
c3t(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aUj||o===D.Be,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.k6,0.5)
m.toString
m=B.a([l,A.dz,m],x.O)
l=q.baQ(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.p(p,B.bw(B.n(23),B.b4(p,p,p,new C.agx(0,q.gBS(),p,p,p),A.h2),A.aq),A.f,p,p,new B.o(p,p,u,v,p,p,A.m),p,w,p,A.ia,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e0y(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iv[s]
t.push(new B.cl(A.z,p,p,new B.dn(A.dx,A.z,A.f,q.c3M(r,n?58:54),p),p))}l=B.a([l,A.al,w,A.af,B.E(B.lc(0.92,t,v,8,12,A5.wX,p,!1),1)],u)
if(o!==D.abi){o=A.c.j(0.16)
w=B.n(28)
l.push(B.p(p,B.cf(new C.e0z(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.m),p,p,p,D.bGn,H.ap9,p,p,p))}return B.p(p,B.x(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a7(A.ay,A.aC,A.x,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bGt(d,e){var w=this,v=null,u=w.On(),t=w.baQ(d),s=B.E(w.aQB(e),1),r=x.p,q=B.a([B.bS(0,B.aA(v,B.p(v,B.at(B.c(F.iv[e].a,v,v,v,v,v,v,Ac.Ls,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e0s(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b_f(22),v,v,v,10,8,v))
return B.p(v,B.x(B.a([t,s,new B.a6(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aTD(d,e){return B.c9(this.gab9(),new C.e0x(this,e,d),null)},
bNc(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qC(t.aTD(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.aa(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.p(s,B.bw(B.n(q?20:8),t.aTD(d,q),A.aq),A.f,s,s,new B.o(s,s,s,v,u,new B.a7(A.ay,A.aC,A.x,w,s,s),A.m),s,s,s,A.ap3,new B.R(8,8,8,r),s,s,s),s)}}
C.bzy.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.T()
w=B.L()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.k6,0.4)
t.toString
w.san(new B.a7(A.ay,A.aC,A.x,B.a([u,A.dz,t],x.O),null,null).az(0,new B.a3(0,0,p,o)))
d.aD(new B.a3(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.as(A.T,A.Q,A.W,A.X,A.U)
t.r=v.j(0.1).gp(0)
t.y=D.bMe
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aC(d){return!0}}
C.agx.prototype={
a4(d,e){var w=this
return K.Mq(d,e,w.b,w.c,w.e,w.d)},
aC(d){return!0}}
C.aOB.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.byk.prototype={}
C.aa9.prototype={
B(d){var w=null
return B.c5(B.eT(w,w,w,!0,!0,D.ak5,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.atS,w,w,w,new C.cp9(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hhL,w,w,w,1,w,!0),D.ak5,B.cp(B.a([D.eD4,B.cf(new C.cpa())],x.p),w,w,D.bHt,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Y9.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aHJ(w,new B.au(A.ax,$.az()),$,A.bG,0,B.a([],x.X),null,null)}}
C.aHJ.prototype={
a_(){this.a3()
this.mn()},
b8H(d){var w=this.d.length
return A.o.F(A.i.bc(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mE(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b8H(v.f)
if(w!==v.x){v.x=w
E.mH("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f_I(v))
C.JY("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cfF(){if(this.d.length<2)return
this.l(new C.f_E(this))},
b2V(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f_D(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcfE(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bzK(p,s.f,r),A.h2),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a6(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fQQ,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aDL[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,B.c(p[v],r,r,r,r,r,r,D.fQ2,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.f7,A.hm,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f_G(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lW(A.aQ,A.fe,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.ff(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bC(r,new B.b6(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kx,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f_H(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.dl,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fH(A.ib,"Add",s.gcfC(s),A.c,r),A.bf,new E.fH(A.o0,"Spin",q,A.be,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.M,0,A.p))}}
C.bzK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.T()
w=B.L()
w.r=D.blB.gp(0)
d.O(g,i,w)
w=B.L()
w.b=A.ac
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bX(g,f)
o=new B.as(A.T,A.Q,A.W,A.X,A.U)
o.r=D.aDL[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.as(A.T,A.Q,A.W,A.X,A.U)
p.b=A.ac
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aw(p,0,11)+"\u2026"
n=new B.j8(new B.eD(p,l,l,A.cV,l,l,l,l,l,l,D.fCU),A.a7,A.cd,new B.kv(1),l,l,l,l,A.ce,l,A.cH)
n.eY()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gb8(p)/2))
i.restore()}i=B.L()
i.r=D.ajI.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ac
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aH(k.r,A.aj,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bA())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.ac
h.c=2
h.r=A.b7.gp(0)
d.af(m,h)},
aC(d){return!0}}
C.WU.prototype={
S(){return new C.bnC($,A.bG,0,B.a([],x.X),null,null)}}
C.bnC.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JY("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Va(900,new C.e7G())}w.l(new C.e7H())},
b2X(d){return this.l(new C.e7B(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b0(A.o.v(A.i.ap(m,60)),2,"0")
v=A.a.b0(A.o.v(A.o.F(A.i.cF(m),60)),2,"0")
m=B.b4(n,n,n,new C.bup(l,A.bY,n),A.aVO)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fHD,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a6(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.c(t,n,n,n,n,n,n,D.fGy,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.w5,n,n,n)],s),A.l,n,A.e,A.M,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.duj[r]
u.push(new E.e_(""+q+" min",o.d===q,new C.e7D(o,q),n,A.bY,n))}m=o.f
p=m?Ae.vr:A.fZ
m=m?"Pause":"Start"
return E.lW(A.bY,A.fe,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.ff(u,n,n),new E.ff(B.a([new E.fH(p,m,new C.e7E(o),A.be,n),new E.fH(A.o3,"Reset",new C.e7F(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.M,0,A.p))}}
C.bup.prototype={
a4(d,e){var w,v,u,t,s=e.eo(A.J),r=e.a/2-14
$.T()
w=B.L()
w.b=A.ac
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bX(s,r)
v=B.L()
v.b=A.ac
v.c=16
v.d=A.bF
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.hb(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).az(0,B.bX(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aC(d){return d.b!==this.b}}
C.W4.prototype={
S(){return new C.bnb($,A.bG,0,B.a([],x.X),null,null)}}
C.bnb.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Ug.h(0,p.d)
w.toString
v=A.d.eH(w,new C.dSX())
u=A.i.F(p.f,v)
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
E.mH("flute",D.cfh[t]+5,1400,0.35)}p.l(new C.dSY())},
gcfI(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lg("Press Start",0.5)
w=D.Ug.h(0,this.d)
w.toString
v=A.d.eH(w,new C.dSS())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lg("Breathe in",0.5+0.5*A.dP.aA(0,p))
case 1:return new B.Lg("Hold",1)
case 2:return new B.Lg("Breathe out",1-0.5*A.dP.aA(0,p))
default:return new B.Lg("Hold",0.5)}}}return new B.Lg("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcfI(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fW.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.aa(0,A.H,A.fW.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qk,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.kx,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a6(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aS(D.Ug.geA(D.Ug));w.C();){v=w.gP(w)
o.push(new E.e_(v,r.d===v,new C.dSV(r,v),q,A.fW,q))}w=r.e
v=w?A.xm:A.fZ
w=w?"Stop":"Start"
o.push(new E.fH(v,w,new C.dSW(r),A.be,q))
return E.lW(A.fW,A.fe,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.ff(o,q,q))}}
C.aLb.prototype={}
C.WL.prototype={
S(){return new C.bnt(new B.cx(null,x.A),B.a([],x.au),A.aw,A.c)}}
C.bnt.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.p1,s,s,s,new C.e4b(t,d),s,s,s,s,"Share",s)],r),p=B.bw(B.n(18),new B.e4(B.aA(s,B.b4(s,s,s,new C.bpw(t.e,t.x,s),A.h2),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e4c(t),new C.e4d(t),s,s,s,s,s,s,s,s,s,new C.e4e(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d7M[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Gm(v,u,new C.e4f(t,v),!1,s))}u=t.r
return E.lW(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new E.ff(o,s,s),E.j6(A.bA,""+A.i.R(u),"Brush",30,2,new C.e4g(t),u),new E.ff(B.a([new E.e_("Eraser",t.w,new C.e4h(t),A.zT,A.bA,s),new E.fH(A.pU,"Undo",new C.e4i(t),A.c,s),new E.fH(A.eo,"Clear",new C.e4j(t),A.c,s),new E.fH(A.Qu,"Paper",new C.e4k(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.M,0,A.p))}}
C.bpw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.T()
w=B.L()
w.r=this.c.gp(0)
d.aD(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.T()
q=new B.as(A.T,A.Q,A.W,A.X,A.U)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bF
q.e=A.dO
q.b=A.ac
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.as(A.T,A.Q,A.W,A.X,A.U)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aH(r.r,A.aj,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ac()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.ch(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.aj(r)
m.ac()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.aj(p)
m.ac()
d.af(m,q)}}},
aC(d){return!0}}
C.Xw.prototype={
S(){var w=x.S
return new C.aGZ(B.aQ(w),B.aQ(w))}}
C.aGZ.prototype={
a_(){this.a3()
this.avc()},
avc(){var w,v,u=this,t=x.N,s=B.bt(D.dzX,!0,t)
A.d.DK(s)
w=x.S
v=B.U(s).c
t=B.B(B.cS(s,0,B.dy(u.d,"count",w),v),t)
A.d.u(t,B.cS(s,0,B.dy(u.d,"count",w),v))
A.d.DK(t)
u.e=t
u.f.a5(0)
u.r.a5(0)
u.w=0
u.x=!1},
cfD(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mH("bell",12+A.o.F(d,9),150,0.35)
s.l(new C.evg(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bL(A.n5,new C.evh(s,v,u),t)
else{s.x=!0
B.bL(Am.CW,new C.evi(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.WP,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ap(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.zo,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.j7,A.h,0,q,q),q),B.E(B.iK(!0,q,q,A.y,new B.hY(v,8,8,1,q),new C.evm(r),r.e.length,A.bk,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d9x[t]
o.push(new E.e_(s.b,r.d===s.a,new C.evn(r,s),q,A.aH,q))}o.push(new E.fH(I.asi,"New game",new C.evo(r),A.be,q))
return E.lW(A.aH,A.fe,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.ff(o,q,q))}}
C.XH.prototype={
S(){return new C.aHm(B.a([],x.t))}}
C.aHm.prototype={
cfH(d){A.d.a5(this.d)
this.w=!0
this.b2W()},
b2W(){this.d.push(A.cR.av(4))
this.e=0
this.a0A()},
a0A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eHR(t))
s=x.H
w=3
return B.b(B.bL(A.lW,null,s),$async$a0A)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aWC(n)
w=7
return B.b(B.bL(new B.bg(1000*Math.max(280,600-r.length*18)),null,s),$async$a0A)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eHS(t))
case 1:return B.h(u,v)}})
return B.i($async$a0A,v)},
aWC(d){this.l(new C.eHP(this,d))
E.mH("marimba",D.cfg[d]+5,450,0.55)
B.bL(A.Hu,new C.eHQ(this),x.H)},
cfJ(d){var w,v,u=this
if(!u.w||u.r)return
u.aWC(d)
w=u.d
v=u.e
if(w[v]!==d){G.dD(90,"",600,0,0.5,"saw")
u.l(new C.eHT(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eHU(u))
B.bL(A.hx,new C.eHV(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,W.aYq,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fRg,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aCC[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.aa(0,A.H,D.aCC[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cT(p,p,p,p,A.b_,new B.o(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jx,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eHW(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ae,B.x(B.a([o,A.al,n,A.dc,new B.fK(1,B.lc(1,l,2,12,12,p,A.e5,!1),p)],m),A.l,p,A.b9,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lW(A.bt,A.fe,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.ff(B.a([new E.fH(A.fZ,n,q.gcfG(q),A.be,p)],m),p,p))}}
C.Y0.prototype={
S(){return new C.boK(new B.au(A.ax,$.az()))}}
C.boK.prototype={
ayO(d){return B.o4(A.i.a9(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eW3(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cE(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eWc()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bC(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.n(16),Ag.yu),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.n(16),D.b7G),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.m9,"Bill amount",!0,!0,!1,m,m,m,m,D.fOv,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.eg,m,m,m,1,m,m,!1,"\u2022",m,new C.eW8(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aXp,!0,A.a7,m,A.ao,m,m,m,m)
k=A.be.j(0.1)
s=B.n(20)
r=B.K(A.be.j(0.35),A.r,1)
q=x.p
s=B.cp(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.i.R(n.e)+"%)","$"+n.ayO(w)),t.$2("Total","$"+n.ayO(v)),Ad.OK,t.$3$big("Each of "+n.f+" pays","$"+n.ayO(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.m),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.fc,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cU3[p]
r.push(new E.e_(""+o+"%",A.i.R(n.e)===o,new C.eW9(n,o),m,A.be,m))}l=n.f
return E.lW(A.be,A.fe,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.ff(r,"TIP",m),E.j6(A.aH,""+l,"People",20,1,new C.eWa(n),l),new E.ff(B.a([new E.e_("Round up",n.r,new C.eWb(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.M,0,A.p))}}
C.Xv.prototype={
S(){var w=B.a([3,5],x.t)
return new C.boe(w,A.cR,$,A.bG,0,B.a([],x.X),null,null)}}
C.boe.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.i.bc(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t
E.Y2("snare",0,0.5)}u.l(new C.etW())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
E.mH("bell",24,400,0.5)}u.l(new C.etX())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bh_(v,o.r>0,n))}u=B.aA(n,B.at(B.bZ(A.fT,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.etP(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d9,A.r,6)
s=B.a([new B.aa(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e7(A.z,B.p(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fNE,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eKw,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.etQ(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fCn,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kx,n,n,n)],x.p),A.l,n,A.e,A.M,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.etR(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.drp[r]
v.push(new E.e_(q.b,o.d===q.a,new C.etS(o,q),q.c,A.bl,n))}v=B.a([new E.ff(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.j6(A.bl,""+s,"Dice",4,1,new C.etT(o),s))}if(o.d==="num"){s=o.z
s=E.j6(A.bl,""+s,"From",100,1,new C.etU(o),s)
p=o.Q
A.d.u(v,B.a([s,E.j6(A.bl,""+p,"To",1000,2,new C.etV(o),p)],m))}return E.lW(A.bl,A.fe,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.M,0,A.p))}}
C.bh_.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cR.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.aa(0,A.H,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dMT.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.YU,p,18,p,p,p,p,p,18),p))
return B.eO(A.z,w,B.p(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bH,p,p,100),p)}}
C.aOn.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBs.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAr()}}
C.aOI.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBy.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAN()}}
C.aP8.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBH.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBe()}}
C.aPA.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a7(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBQ.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBG()}}
var z=a.updateTypes(["P(u8)","~()","P(a6c)","ay<~>()","P(Dn)","F(u8,F)","G(G,u8)","P(Dj)","P(a05)","P(adh)","P(a54)","P(nY)","Y1()","W3()","aa9()","XB()","XQ()","XC()","P(n7)","Wa()","agQ(Z,F)","afH(Z,F)","~(a9<@,@>)","F(Dj,Dj)","m(eo)","P(agE)","P(a2l)","P(Dy)","P(adO)","P(afK)","P(adv)","F(F,rs)","F(F,Dn)","m(rs)","~(rs,ai<m>,F)","rs?(Dn)","Xv()","w(m,a28)","P(ac9)","~(Bm)","Y4()","~(xT,m,r,u,G)","~(m,u8)","WM()","Xf(Z)","Ow(Z)","Wv(Z,by<G>,by<G>)","Jb(Z)","Y9()","WU()","W4()","WL()","Xw()","XH()","Y0()","P(rs)"])
C.fRf.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fFM.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fNA.prototype={
$1(d){var w
if(!this.a.MM(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fNB.prototype={
$1(d){return d.x},
$S:z+0}
C.fRc.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fRd.prototype={
$1(d){var w
if(!this.a.MM(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fRe.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.emZ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.en_.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.en0.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.m7(v,A.e8,A.i9)}},
$S:7}
C.enb.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a5(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.enc.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.en7.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.en5.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dv(0,0,0,d,0,0),new C.en6(w,this.b,e)))},
$S:1885}
C.en6.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.en8.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXx().am5(0,u[1],u[2],u[3])
u[4].bP(0,new C.en3(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dD(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.en4(w.a,v,w.f,w.r))},
$S:0}
C.en3.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:202}
C.en4.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.en9.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXx().amV(t,u[1],s,u[3])
G.dD(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.en2(w.a,v,w.e,w.f))},
$S:0}
C.en2.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ena.prototype={
$0(){G.dD(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.en1(w,this.b))},
$S:0}
C.en1.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.enf.prototype={
$0(){var w=this.a
return w.l(new C.ene(w))},
$S:0}
C.ene.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eng.prototype={
$0(){var w=this.a
return w.l(new C.end(w))},
$S:0}
C.end.prototype={
$0(){return this.a.at=!1},
$S:0}
C.enh.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.Qk()},
$S:0}
C.eni.prototype={
$0(){return this.a.ZC(this.b)},
$S:0}
C.enj.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Qk():w.aZA()},
$S:2}
C.enk.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Qk():w.aZA()},
$S:0}
C.eCm.prototype={
$2(d,e){return d+e},
$S:1886}
C.eCG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eCF(w,d))},
$S:1887}
C.eCF.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eCH.prototype={
$0(){},
$S:0}
C.eCI.prototype={
$0(){},
$S:0}
C.eCo.prototype={
$0(){return this.a.l(new C.eCn(this.b,this.c))},
$S:0}
C.eCn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCd.prototype={
$1(d){return this.a.cx===d},
$S:29}
C.eCe.prototype={
$1(d){return this.a.cx=d},
$S:31}
C.eCf.prototype={
$1(d){return this.a.cy===d},
$S:29}
C.eCg.prototype={
$1(d){return this.a.cy=d},
$S:31}
C.eCh.prototype={
$1(d){return this.a.db===d},
$S:29}
C.eCi.prototype={
$1(d){return this.a.db=d},
$S:31}
C.eCj.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:29}
C.eCk.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.I(0,d)},
$S:31}
C.eCl.prototype={
$0(){var w=this.a
return w.l(w.gazo())},
$S:0}
C.eCb.prototype={
$1(d){return this.a.$1(!0)},
$S:71}
C.eCc.prototype={
$1(d){return this.a.$1(!1)},
$S:112}
C.eCa.prototype={
$1(d){return this.a.$1(!1)},
$S:144}
C.eCz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bkV(o,p),n)
w=this.b
v=C.bE5("WORLD",w.a,w.c)
u=C.bE5("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.R(t*100)
t=t<0.25?A.bY:A.be
t=C.bE5("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.R(s*100)
s=s>D.Ef[o.db].d?A.bY:A.c
q=x.p
s=B.a([v,u,t,C.bE5("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bE5("HEIGHT",""+A.i.R(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.j7,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bJy(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tN[w].a+".":"You landed on every world!"
v=B.a([new E.fH(A.o4,"Again",new C.eCu(o),A.c,p),new E.fH(A.oS,"Rebuild",new C.eCv(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fH(A.jB,"Next world",new C.eCw(o),A.be,p))
n.push(C.hI8("Perfect landing!",w,A.be,v))}if(o.as==="crashed")n.push(C.hI8("Crash!",o.at,A.bY,B.a([new E.fH(A.o4,"Try again",new C.eCx(o),A.be,p),new E.fH(A.oS,"Rebuild",new C.eCy(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b4,A.t,n,p)},
$S:63}
C.eCu.prototype={
$0(){var w=this.a
return w.l(w.gazo())},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
return w.l(new C.eCr(w))},
$S:0}
C.eCr.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eCw.prototype={
$0(){var w=this.a
return w.l(new C.eCq(w))},
$S:0}
C.eCq.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eCx.prototype={
$0(){var w=this.a
return w.l(w.gazo())},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
return w.l(new C.eCp(w))},
$S:0}
C.eCp.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eCA.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eCt(v,w))},
$S:0}
C.eCt.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eCB.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eCC.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eCD.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eCE.prototype={
$0(){var w=this.a
return w.l(new C.eCs(w))},
$S:0}
C.eCs.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dSQ.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hg(B.a([C.hCY(),C.hCZ()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kU(0,B.cR(J.t(r,1)))
q.l(new C.dSP(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:39}
C.dSP.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dSq.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dSr.prototype={
$0(){return this.a.c0x(B.aW(J.t(this.b,"group")))},
$S:0}
C.dSs.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dSt.prototype={
$1(d){return A.a.b0(A.o.fw(A.o.D(A.i.R(d*255),0,255),16),2,"0")},
$S:309}
C.dSR.prototype={
$0(){return E.Y2("kick",0,0.25)},
$S:0}
C.dSu.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dSv.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dSw.prototype={
$0(){return E.Y2("kick",0,0.5)},
$S:0}
C.dSx.prototype={
$0(){return G.dD(1300+this.a.RG.av(900),"",40,0,0.2,"square")},
$S:0}
C.dSz.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.X(0,u)
else{v.I(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dSy(u)))u.cy=null
u.id=0},
$S:0}
C.dSy.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aBi(d)},
$S:z+10}
C.dSn.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dSo.prototype={
$0(){var w=this.a
return w.l(w.gcbq())},
$S:0}
C.dSp.prototype={
$0(){return this.a.afr(null)},
$S:0}
C.dSG.prototype={
$0(){var w=this.a.as
return w==null?null:w.fb(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dSH.prototype={
$0(){return this.a.cIH(this.b.a)},
$S:0}
C.dSI.prototype={
$0(){return this.a.afr(this.b)},
$S:0}
C.dSJ.prototype={
$1(d){var w=this.a
return w.l(new C.dSF(w,d))},
$S:6}
C.dSF.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dSK.prototype={
$0(){var w=this.a
return w.l(new C.dSE(w,this.b))},
$S:0}
C.dSE.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dSL.prototype={
$0(){var w=this.a
return w.l(new C.dSD(w))},
$S:0}
C.dSD.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dSM.prototype={
$0(){var w=this.a
return w.l(new C.dSC(w))},
$S:0}
C.dSC.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fb(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.MM},
$S:0}
C.dSN.prototype={
$0(){var w=this.a
return w.l(new C.dSB(w))},
$S:0}
C.dSB.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b1p()
else w.p3=null},
$S:0}
C.dSO.prototype={
$0(){var w=this.a
return w.l(new C.dSA(w))},
$S:0}
C.dSA.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c8K.prototype={
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
$S:345}
C.c8L.prototype={
$1(d){var w=new B.qI([],[]).o6(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:624}
C.fyO.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)},
$S:241}
C.fyP.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)||w.h(d,1)},
$S:241}
C.fyQ.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)!==w.h(d,1)},
$S:241}
C.fyX.prototype={
$1(d){return!J.t(d,0)},
$S:241}
C.fyY.prototype={
$1(d){var w=J.a2(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:241}
C.fyZ.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:241}
C.dUw.prototype={
$1(d){return this.a.aw1(0)},
$S:7}
C.dUa.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.ir2(),B.U(w).k("O<1,F>")).fC(0)},
$S:0}
C.dUd.prototype={
$1(d){return""+d},
$S:76}
C.dUx.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dU8.prototype={
$1(d){return this.a.aw1(this.b)},
$S:7}
C.dU9.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.azV(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mU(0,d,a1.mo(0.15,0.3))
u=a1.mU(0,d,a1.mo(0.15,0.62))
t=a1.mU(0,"and",a1.mo(0.48,0.46))
s=a1.mU(0,a0,a1.mo(0.82,0.46))
a1=t.a
w.push(new C.nY(v.a,a1,0))
w.push(new C.nY(u.a,a1,1))
w.push(new C.nY(a1,s.a,0))
break
case 1:v=a1.mU(0,d,a1.mo(0.12,0.25))
u=a1.mU(0,d,a1.mo(0.12,0.65))
r=a1.mU(0,"xor",a1.mo(0.46,0.25))
q=a1.mU(0,"and",a1.mo(0.46,0.65))
p=a1.azU(0,a0,a1.mo(0.82,0.25),0)
o=a1.azU(0,a0,a1.mo(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nY(a1,n,0))
m=u.a
w.push(new C.nY(m,n,1))
l=q.a
w.push(new C.nY(a1,l,0))
w.push(new C.nY(m,l,1))
w.push(new C.nY(n,p.a,0))
w.push(new C.nY(l,o.a,0))
break
case 2:k=a1.mU(0,"clock",a1.mo(0.15,0.4))
j=a1.mU(0,"not",a1.mo(0.45,0.65))
s=a1.mU(0,a0,a1.mo(0.82,0.3))
i=a1.mU(0,"buzzer",a1.mo(0.82,0.65))
a1=k.a
w.push(new C.nY(a1,s.a,0))
n=j.a
w.push(new C.nY(a1,n,0))
w.push(new C.nY(n,i.a,0))
break
default:h=a1.mU(0,d,a1.mo(0.12,0.25))
g=a1.mU(0,d,a1.mo(0.12,0.7))
f=a1.mU(0,"nor",a1.mo(0.5,0.25))
e=a1.mU(0,"nor",a1.mo(0.5,0.7))
s=a1.mU(0,a0,a1.mo(0.86,0.25))
a1=f.a
w.push(new C.nY(g.a,a1,0))
n=e.a
w.push(new C.nY(n,a1,1))
w.push(new C.nY(h.a,n,0))
w.push(new C.nY(a1,n,1))
w.push(new C.nY(a1,s.a,0))}},
$S:0}
C.dUe.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.azV(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dj(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mU(0,w.e,o.mo(0.86,0.5))},
$S:0}
C.dU3.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dU4.prototype={
$2(d,e){return A.i.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dU5.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dU6.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dU7.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aeL(this.c)
if(v.ax)C.JY("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dD(140,"",250,0,0.3,"square")}},
$S:0}
C.dUf.prototype={
$0(){},
$S:0}
C.dUg.prototype={
$0(){return A.d.cJ(this.a.e,this.b)},
$S:0}
C.dUh.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dUc.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.bq(w.e,new C.dUb(v))
w.cy=null},
$S:0}
C.dUb.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dU2.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mU(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dUq.prototype={
$0(){var w=this.a
return w.l(new C.dUp(w))},
$S:0}
C.dUp.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dUr.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c_,B.jr(B.b4(w,w,w,new C.beT(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dUk(v),w,w,w,new C.dUl(v),new C.dUm(v),new C.dUn(v),w,w,w,w,w,w,w,w,w,w,new C.dUo(v),w,w,w,!1,A.a4)},
$S:36}
C.dUo.prototype={
$1(d){return this.a.cde(d.b)},
$S:56}
C.dUm.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cmC(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aAP(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dUn.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dUl.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c42(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dUi(w))
u=t.as
u.toString
v.push(new C.nY(u,w.a,w.b))
B.k7()}}t.z=t.as=null},
$S:37}
C.dUi.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dUk.prototype={
$1(d){return this.a.ayH(d.b)},
$S:319}
C.dUs.prototype={
$0(){return this.a.bFi(this.b.a)},
$S:0}
C.dUt.prototype={
$0(){return this.a.aw1(this.b.a)},
$S:0}
C.dUu.prototype={
$0(){var w=this.a
return w.l(new C.dUj(w))},
$S:0}
C.dUj.prototype={
$0(){var w=this.a
w.azV(0)
w.ay=null},
$S:0}
C.dUv.prototype={
$0(){return this.a.cEg(this.b)},
$S:0}
C.cYJ.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cH,v,v,v,B.d1(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cd,v,A.e2,A.ce)
u.eY()
return u},
$S:273}
C.e_G.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_F.prototype={
$0(){return this.a.d=null},
$S:0}
C.e_I.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c5Z()},
$S:130}
C.e_H.prototype={
$0(){return B.a8(this.a,!1).hY()},
$S:0}
C.fze.prototype={
$0(){return I.aNo},
$S:z+40}
C.fzf.prototype={
$0(){return D.e_4},
$S:z+43}
C.fzg.prototype={
$0(){return D.dWW},
$S:z+13}
C.fzh.prototype={
$0(){return D.eqP},
$S:z+14}
C.fzi.prototype={
$0(){return D.e8I},
$S:z+15}
C.fzj.prototype={
$0(){return I.aNf},
$S:z+16}
C.fzk.prototype={
$0(){return D.eoB},
$S:z+17}
C.fzl.prototype={
$0(){return I.aNn},
$S:z+12}
C.fzm.prototype={
$0(){return D.dZc},
$S:z+19}
C.few.prototype={
$2(d,e){return new C.agQ(e,$.bIO()[e],new C.fev(e,this.a),null)},
$S:z+20}
C.fev.prototype={
$0(){var w=this.a,v=L.aKT.h(0,$.bIO()[w].a)
$.aut=v==null?"music":v
B.a8(this.b,!1).cc(B.ec(new C.fet(w),!1,null,x.H))},
$S:0}
C.fet.prototype={
$1(d){return $.bIO()[this.a].e.$0()},
$S:43}
C.fex.prototype={
$2(d,e){return new C.afH(e,D.aDi[e],new C.feu(this.a,e),null)},
$S:z+21}
C.feu.prototype={
$0(){return this.a.d.$1(D.aDi[this.b])},
$S:0}
C.fec.prototype={
$0(){return this.a.as=!0},
$S:0}
C.feb.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fe1.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fe2.prototype={
$1(d){return this.bpM(d)},
bpM(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gr1().sp(0,d/t.b)
r.gJO().sp(0,0.5)
w=3
return B.b($.aU.glJ(),$async$$1)
case 3:r=$.aU.bk$.x.h(0,r.f)
s=r==null?null:r.gbg()
if(!(s instanceof B.oq))throw B.Y(B.bb("closed"))
q=C
w=4
return B.b(s.lv(t.c),$async$$1)
case 4:u=q.fXD(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:738}
C.fe3.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fe0(w,d))},
$S:6}
C.fe0.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fe4.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fea.prototype={
$1(d){var w=this
return new B.e6(new C.fe9(w.a,w.b,w.c,w.d),null)},
$S:21}
C.fe9.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fZ1,A.at,D.h4U,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fNY,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bz(1,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.eb(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.FA,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jK,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bz(2,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.eb(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.FA,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jK,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dHN[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bw
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.p(a0,B.W(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.f7,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fe7(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.al,new B.c3(A.aL,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.O,new B.a6(a0,44,B.cp(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aA],w))}v.push(B.bI(A.By,a0,new C.fe8(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bo(!0,new B.cQ(new B.aY(0,1/0,0,a1.a.b*0.86),B.cp(v,a0,a0,A9.zq,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:101}
C.fe7.prototype={
$0(){var w=this
return w.a.$1(new C.fe6(w.b,w.c,w.d))},
$S:0}
C.fe6.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fe8.prototype={
$0(){var w=this,v=w.a
v.l(new C.fe5(v,w.b,w.c,w.d))
B.a8(w.e,!1).N(null)},
$S:0}
C.fe5.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this
for(w=m.d,v=m.c,u=m.a,t=m.b,s=x.N,r=x.Z,q=0;q<3;++q){p=u.y
if(p===$){p=B.B(u.a.c.f,s)
u.y=p
o=p}else o=p
n=A.a.i(t[q].a.a)
if(n.length===0)n=o[q]
p[q]=n
p=u.z
if(p===$){p=B.B(u.a.c.r,s)
u.z=p}p[q]=A.a.i(v[q].a.a)
p=u.x
if(p===$){p=B.B(u.a.c.e,r)
u.x=p}p[q]=w[q]}},
$S:0}
C.fek.prototype={
$0(){var w=this.a
return w.l(new C.fej(w))},
$S:0}
C.fej.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fel.prototype={
$0(){return E.uQ(this.b,this.a.f,"scene")},
$S:0}
C.fem.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gJO().x
w===$&&B.d()
return new B.bP(new B.o(v,v,v,v,v,new B.bT(D.b58,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c4],x.O),v,v),A.m),A.bm,v,v)},
$S:350}
C.fen.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.dn(A.dx,A.z,A.f,B.c9(new B.hz(B.a([u.gr1(),u.gJO()],x.dS)),new C.fei(u,this.b,v),w),w),w,w,w)},
$S:220}
C.fei.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gr1().x
r===$&&B.d()
w=r<0.9?1:1-C.bvm(r,0.9,0.98)
v=s.gJO().x
v===$&&B.d()
u=A.dP.aA(0,v)
switch(s.gazW().a){case 0:s=s.bEt(t.b,r,u,t.c)
break
case 1:s=s.bVA(t.b,r,u,t.c)
break
case 2:s=s.cJa(t.b,r,u,t.c)
break
case 3:s=s.bHs(t.b,r,u,t.c)
break
case 4:s=s.bKQ(t.b,r,u,t.c)
break
case 5:s=s.cdf(t.b,r,u,t.c)
break
default:s=null}return B.d0(s,w)},
$S:203}
C.feo.prototype={
$2(d,e){var w=B.abX(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cS9(u,A.bw,v,3.5)
u=this.a
w=u.gr1().x
w===$&&B.d()
return B.Zs(B.ld(null,null,null,1,0,new C.feh(u),A.i.D(w,0,1)),v)},
$S:1891}
C.feh.prototype={
$1(d){var w=this.a
w.gr1().sp(0,d)
if(w.as)w.l(new C.fed(w))},
$S:6}
C.fed.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fep.prototype={
$0(){var w=this.a
w.gr1().sp(0,0)
w.a07()},
$S:0}
C.feq.prototype={
$1(d){var w=this.a
w.l(new C.feg(w,d))
if(w.as)w.a07()},
$S:6}
C.feg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fer.prototype={
$0(){var w=this.a
w.l(new C.fef(w,this.b))
w.gr1().sp(0,0)
if(w.as)w.a07()},
$S:0}
C.fef.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fes.prototype={
$0(){var w=this.a
return w.l(new C.fee(w,this.b))},
$S:0}
C.fee.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fdZ.prototype={
$2(d,e){return A.i.aQ(d.a,e.a)},
$S:1892}
C.fe_.prototype={
$1(d){return d.b},
$S:1893}
C.duc.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dud.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.du9.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dua.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dub.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.due.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.duf.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dug.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.duh.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dui.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.duj.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.duk.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dul.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dum.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eBH.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eBw.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eBy.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gZ(e.b),97)},
$S:z+31}
C.eBz.prototype={
$2(d,e){return d+A.o.F(A.a.gZ(e.a),31)+A.o.F(A.a.gZ(e.b),17)},
$S:z+32}
C.eBC.prototype={
$1(d){var w=D.ni.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eBD.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.ea(new B.cM(new B.X(q,new C.eBE(d),p.k("X<1>")),new C.eBF(r),p.k("cM<1,rs?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aL(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eBE.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eBF.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eBA.prototype={
$1(d){return D.ni.h(0,d.b).c===D.yo},
$S:z+55}
C.eBB.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eC6.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vS(0,u)
w.a87(A.o.ap(v,1000))},
$S:7}
C.eBG.prototype={
$0(){},
$S:0}
C.eBs.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$$0)
case 6:e.aE("String","ngmy_core_reaction_lab_v1",s.a.d.ak())
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
C.eBJ.prototype={
$1(d){var w=null,v=this.a.b
return B.bo(!0,B.x(B.a([A.O,B.dM(!1,w,w,w,!0,w,w,w,!0,w,w,B.W(D.ni.h(0,v).b,D.ni.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hgE,w,B.c(D.ni.h(0,v).a,w,w,w,w,w,w,A.hg,w,w,w),w,w,w),B.dM(!1,w,w,w,!0,w,w,w,!0,w,w,A0.atW,w,w,w,w,new C.eBI(d),!1,w,w,w,w,w,w,w,D.h7M,w,w,w)],x.p),A.l,w,A.e,A.M,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBI.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eBL.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.w).w,r=B.a([D.eCS],x.p)
for(w=0;w<6;++w){v=D.aDF[w]
u=B.c(v.a,t,t,t,t,t,t,A.hg,t,t,t)
r.push(B.dM(!1,t,t,t,!0,t,t,t,!0,t,t,D.c74,t,t,t,t,new C.eBK(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.m9,t,t,t),t,u,t,t,t))}return B.bo(!0,new B.cQ(new B.aY(0,1/0,0,s.a.b*0.7),B.cp(r,t,t,D.bLk,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBK.prototype={
$0(){B.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.eBv.prototype={
$1(d){var w=null
return B.eh(B.a([B.bN(!1,A.dr,w,w,!0,w,w,w,new C.eBt(d),w,w),B.bN(!1,A.FG,w,w,!0,w,w,w,new C.eBu(d),w,w)],x.p),w,w,L.mm,D.h56,w,w,w,w,D.h85,w)},
$S:18}
C.eBt.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.eBu.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eC4.prototype={
$0(){var w=this.a
return w.l(new C.eC3(w))},
$S:0}
C.eC3.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eC5.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nB(new C.eBV(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bg5:t
v=B.a([B.b4(u,t,t,new C.bkT(w,v,new C.eBW(r),new C.eBX(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.ds(!0,B.c9(w,new C.eBY(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bMy())
return B.aA(A.c_,B.jr(new B.an(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eBZ(r),t,r.gcnY(),t,new C.eC_(r),new C.eC0(r),new C.eC1(r),t,t,t,t,t,t,t,t,t,t,new C.eC2(r),t,t,t,!1,A.a4)},
$S:36}
C.eBV.prototype={
$0(){return this.a.adN(this.b)},
$S:0}
C.eC2.prototype={
$1(d){return this.a.cGP(d.b)},
$S:56}
C.eC0.prototype={
$1(d){return this.a.cnZ(d.b)},
$S:50}
C.eC1.prototype={
$1(d){return this.a.co_(d.b)},
$S:19}
C.eC_.prototype={
$1(d){return this.a.b55()},
$S:37}
C.eBZ.prototype={
$1(d){return this.a.aev(d.b)},
$S:319}
C.eBW.prototype={
$0(){return this.a.z},
$S:644}
C.eBX.prototype={
$0(){return this.a.Q},
$S:739}
C.eBY.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bQT()
if(p.length===0)return A.bL
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.bw,A.r,1)
t=B.a([D.h2r,A.cM],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aYm,q,q,q))
return B.p(q,B.x(t,A.B,q,A.e,A.M,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.m),q,q,q,q,A.hm,q,q,q)},
$S:67}
C.eBx.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ed,B.A(B.a([B.p(w,B.W(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bb,B.E(B.x(B.a([B.c(f,w,w,w,w,w,w,Ao.WK,w,w,w),A.bB,B.c(g,w,w,w,w,w,w,F.acW,w,w,w)],s),A.B,w,A.e,A.h,0,A.p),1)],s),A.B,w,A.e,A.h,0,w,w),w)},
$S:1895}
C.eBR.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).hY()},
$S:0}
C.eBS.prototype={
$0(){var w=this.a
return w.l(new C.eBQ(w))},
$S:0}
C.eBQ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eBT.prototype={
$0(){var w=this.a
return w.l(new C.eBP(w))},
$S:0}
C.eBP.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eBU.prototype={
$0(){var w=this.a
return w.l(new C.eBO(w))},
$S:0}
C.eBO.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eBN.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.ni.gdS(D.ni),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cBw(p[r]))
return new B.D(U.an7,B.x(B.a([new B.D(Ay.aoT,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.B,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eBM.prototype={
$0(){return this.a.cdm(this.b)},
$S:0}
C.du8.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cH,v,v,v,B.d1(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cd,v,A.e2,A.ce)
u.eY()
return u},
$S:273}
C.bRZ.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bS9.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bS4.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bSa.prototype={
$1(d){return this.a.MM(d)&&!d.x},
$S:z+0}
C.bSb.prototype={
$2(d,e){return Math.max(d,this.a.aDI(e))},
$S:z+6}
C.bSd.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSe(w))},
$S:z+5}
C.bSe.prototype={
$0(){return this.a.a},
$S:91}
C.bSc.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bSf.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSg(w))},
$S:z+5}
C.bSg.prototype={
$0(){return this.a.a},
$S:91}
C.bS0.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bS1(w))},
$S:z+5}
C.bS1.prototype={
$0(){return this.a.a},
$S:91}
C.bS_.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bS2.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bS3(w))},
$S:z+5}
C.bS3.prototype={
$0(){return this.a.a},
$S:91}
C.bRY.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bSh.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bS5.prototype={
$1(d){return d!==this.b&&this.a.aK2(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bS8.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bS7.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bS6.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bMj.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bMk.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bMi.prototype={
$2(d,e){return new B.a7(A.aX,A.b1,A.x,e,D.dhG,null).az(0,d)},
$S:1896}
C.cwg.prototype={
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
$S:202}
C.h35.prototype={
$1(d){var w
$.T()
w=B.L()
w.r=d.gp(0)
return w},
$S:1897}
C.h37.prototype={
$2(d,e){var w
$.T()
w=B.L()
w.b=A.ac
w.c=e
w.r=d.gp(0)
w.d=A.bF
return w},
$S:1898}
C.h38.prototype={
$5(d,e,f,g,h){return B.bx(new B.a3(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1899}
C.h36.prototype={
$3(d,e,f){var w
$.T()
w=B.L()
w.san(new B.a7(A.aX,A.b1,A.x,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1900}
C.bLW.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bLX.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bLV(w))},
$S:0}
C.bLV.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bLY.prototype={
$0(){return B.a([],x.F)},
$S:1901}
C.bLZ.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:369}
C.bM_.prototype={
$0(){var w,v,u
J.bIY(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rz(v))if(C.hnG(v.b))w.b4z(v)
else w.a1e(v)
else{u=w.a.c.bhz(v)
w.ag2(u==null?"The "+$.qS().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bLU.prototype={
$1(d){return new B.e6(new C.bLR(this.a,this.b),null)},
$S:21}
C.bLR.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bLS(this.a,o,a3),m=$.qS(),l=o.b,k=m.h(0,l).d,j=A.i.R(o.ch/1.04),i=new C.bLT(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.aa(0,A.H,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qj,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jm,p,p,p),D.h2f],a0),A.B,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bb,w,B.p(p,B.c(""+A.i.R(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.m),p,p,p,p,A.lX,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
t=A.v.j(0.35)
v=B.n(18)
w=B.K(A.ds,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.aw],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.aa(0,A.H,k.j(0.5),A.J,14)],f)
v=B.p(p,B.at(B.cT(p,B.at(new B.dn(A.dE,A.z,A.f,new B.D(A.hM,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mJ,p,p,p),p),p),p,p,p),p,p,A.b_,new B.o(p,p,q,s,f,new B.a7(A.ay,A.aC,A.x,r,p,p),A.m),A.eJ,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aI(p,p,p,p,B.W(A.as9,k,p,p,p,30),p,p,p,new C.bLN(n,o),p,p,p,p,p,p)
t=B.abX(a2).bh2(k,A.bw,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Zs(B.ld(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.W(A.a3R,k,p,p,p,30),p,p,p,new C.bLO(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bo(!0,B.p(p,B.x(B.a([d,A.af,u,A.aA,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,O.hF,p,p,p),1),B.bN(!1,A7.aZn,p,p,!0,p,p,p,new C.bLP(a2),p,B.ft(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.ts,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.M,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.ceA,A.m),p,p,p,A.zh,D.bHO,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bLS.prototype={
$1(d){var w=this.a
w.l(new C.bLL(this.b,d))
this.c.$1(new C.bLM())
w.a.toString},
$S:6}
C.bLL.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bLM.prototype={
$0(){},
$S:0}
C.bLT.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.bw
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cT(v,B.at(new B.dn(A.dx,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b_,new B.o(t,v,r,s,v,v,A.m),A.hk,v,v,v,A.jg,A.r_,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bLQ(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:679}
C.bLQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bLN.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bLO.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bLP.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.bMf.prototype={
$2(d,e){var w
if(d==="short"){G.dD(1800,"",120,0,0.55,"noise")
G.dD(200,"",160,2.2,0.4,"saw")
B.fU()
w=this.a
if(w.c!=null)w.ag2("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dD(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ag2("\u26a0 Overloaded! The "+$.qS().h(0,e.b).b+" can only give about "+A.i.a9(w.a.c.Aw(e),2)+" amps but your gadgets are asking for "+A.i.a9(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ag2("Burnt out! "+e.ay)
G.dD(140,"",320,0,0.6,"noise")
G.dD(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bMg.prototype={
$0(){},
$S:0}
C.bLl.prototype={
$0(){},
$S:0}
C.bMh.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bMe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c_,new B.e4(B.b4(p,p,p,new C.akR(w,v,u,t,s,r==null?A.jF:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bM8(o),new C.bM9(o),new C.bMa(o),p,p,p,p,p,p,p,p,p,p,new C.bMb(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bfn)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cS,A.r,1)
n.push(B.ao(p,B.aA(p,B.p(p,B.A(B.a([D.fTd,B.E(B.c(w,p,p,p,p,p,p,D.fKI,p,p,p),1)],q),A.B,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.blu,p,u,v,p,p,A.m),p,p,p,p,A.nW,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMc(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bNy,new E.fH(A.Dv,"Cut wire",new C.bMd(o),A.bY,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.Zr,p,B.K(A.bw,A.r,1),w,p,p,A.m),p,p,p,p,F.anB,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cox(w),p,p,10,10,p,p))}}return B.jr(new B.an(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:307}
C.bM9.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bbJ(s)
if(r!=null){t.l(new C.bM6(t,r,d))
return}w=t.b5f(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bM7(t,w))}},
$S:50}
C.bM6.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bM7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMa.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bM4(w,d))
else if(w.Q!=null)w.l(new C.bM5(w,d.b.a6(0,w.as)))},
$S:19}
C.bM4.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bM5.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.i.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.i.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bM8.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bbJ(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.amV(u.a,u.b,v.a,v.b)!=null)G.dD(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.ag0()},
$S:37}
C.bMb.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b5f(u)
if(t!=null){v.l(new C.bM1(v,t))
if(D.mC.am(0,t.b))v.czl(t)
w=new B.V(Date.now(),0,!1)
if(v.r===t&&w.by(v.w).a<38e4){v.l(new C.bM2(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bM3(v,v.cMo(u)))},
$S:56}
C.bM1.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dD(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dD(200,"",70,0,0.2,"saw")}},
$S:0}
C.bM2.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bM3.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bMc.prototype={
$0(){var w=this.a
return w.l(new C.bM0(w))},
$S:0}
C.bM0.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMd.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dD(300,"",50,0,0.35,"noise")
w.ag0()},
$S:0}
C.bLm.prototype={
$0(){return this.a.bu5(this.b)},
$S:0}
C.bLI.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fEG,w,w,w),B.E(B.ld(this.b.d,w,w,g,h,new C.bLK(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1902}
C.bLK.prototype={
$1(d){var w=this.a
w.l(new C.bLJ(this.b,d))
w.a.toString},
$S:6}
C.bLJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bLH.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,A.acM,w,w,w),B.c(e,w,w,w,w,w,w,D.fHv,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.m),w,w,w,w,A.wT,w,w,w),1)},
$S:121}
C.bLt.prototype={
$0(){var w=this.a
return w.l(new C.bLs(w))},
$S:0}
C.bLs.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bLu.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dD(260,"",70,0,0.35,"noise")
w.ag0()},
$S:0}
C.bLv.prototype={
$0(){var w=this.a
return w.l(new C.bLr(w))},
$S:0}
C.bLr.prototype={
$0(){return this.a.e=null},
$S:0}
C.bLz.prototype={
$0(){this.a.l(new C.bLq(this.b,this.c))
G.dD(900,"",40,0,0.3,"noise")},
$S:0}
C.bLq.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bLA.prototype={
$0(){return this.a.b4z(this.b)},
$S:0}
C.bLB.prototype={
$0(){return this.a.a1e(this.b)},
$S:0}
C.bLC.prototype={
$0(){return this.a.a2T(this.b)},
$S:0}
C.bLD.prototype={
$0(){var w=this.a
w.l(new C.bLp(this.b,this.c))
w.a.toString},
$S:0}
C.bLp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bLE.prototype={
$0(){var w=this.a
w.l(new C.bLo(this.b,this.c))
w.a.toString},
$S:0}
C.bLo.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bLF.prototype={
$0(){var w=this.a
w.l(new C.bLn(this.b,this.c))
w.a.toString},
$S:0}
C.bLn.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bLG.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLw.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLx.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLy.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fz_.prototype={
$1(d){return d.aJE("bulb")},
$S:z+2}
C.fz0.prototype={
$1(d){return d.qi(0,"switch")&&d.aJE("bulb")},
$S:z+2}
C.fz1.prototype={
$1(d){return A.d.aR(d.a,new C.fyN())},
$S:z+2}
C.fyN.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fz2.prototype={
$1(d){return d.qi(0,"resistor")&&A.d.aR(d.a,new C.fyM())},
$S:z+2}
C.fyM.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fz3.prototype={
$1(d){return!d.qi(0,"battery")&&d.aJE("bulb")},
$S:z+2}
C.fyR.prototype={
$1(d){return A.d.aR(d.a,new C.fyL())},
$S:z+2}
C.fyL.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fyS.prototype={
$1(d){return A.d.aR(d.a,new C.fyK())},
$S:z+2}
C.fyK.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fyT.prototype={
$1(d){return A.d.aR(d.a,new C.fyJ())},
$S:z+2}
C.fyJ.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fyU.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fyH())&&A.d.aR(w,new C.fyI())&&d.qi(0,"buck")},
$S:z+2}
C.fyH.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fyI.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fyV.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fyF())&&A.d.aR(w,new C.fyG())},
$S:z+2}
C.fyF.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fyG.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fyW.prototype={
$1(d){return A.d.aR(d.a,new C.fyE())},
$S:z+2}
C.fyE.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e4H.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a5(0)
w.u(0,v.b)},
$S:0}
C.e4Q.prototype={
$1(d){var w=this.a.d
return w.aK2(d)&&w.rz(d)},
$S:z+0}
C.e4R.prototype={
$1(d){return d.x},
$S:z+0}
C.e4S.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e4T.prototype={
$0(){},
$S:0}
C.e4G.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.ha7,A.at,D.fV5,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.T7[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ax(A.bw,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([B.c(u.a,q,q,q,q,q,q,A.iQ,q,q,q),A.bB,B.c(u.b,q,3,A.a2,q,q,q,D.fLu,q,q,q)],o),A.B,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cx,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e4F(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eF(q,F.n2,new B.D(A.bQ,new B.a6(340,q,B.cp(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.d7,q,new B.ba(p,A.a1),q)},
$S:47}
C.e4F.prototype={
$0(){B.a8(this.b,!1).N(null)
var w=this.a
w.l(new C.e4E(w,this.c))
G.dD(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e4E.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bmJ()},
$S:0}
C.e4C.prototype={
$1(d){return new C.Xf(this.a.d,null)},
$S:z+44}
C.e4D.prototype={
$0(){},
$S:0}
C.e4P.prototype={
$1(d){return new B.e6(new C.e4O(this.a),null)},
$S:21}
C.e4O.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajV(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.be:A.aH
k=B.aF(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.h7f,A.aY,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.O,B.bw(B.n(4),B.jD(A.bw,m,m,5,m,w.a/11,new B.kS(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fYo)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Aq.LB,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A1.FB,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.at,q,new B.bK(A.a9,m,m,B.bN(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e4M(l,e),m,m),m)],v),A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.m),m,m,m,m,A.bk,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.ds,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.acV,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.p(m,new B.c3(A.aL,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bz(1,A.ba,B.c(r.a,m,m,m,m,m,m,new B.H(!0,q,m,m,m,m,13,A.F,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.eK,A.nW,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e4N(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bo(!0,new B.cQ(new B.aY(0,1/0,0,k.a.b*0.75),B.cp(u,m,m,A9.zq,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e4M.prototype={
$0(){var w=this.a
w.l(new C.e4K(w))
this.b.$1(new C.e4L())
w.FO()},
$S:0}
C.e4K.prototype={
$0(){var w=this.a
$.ajV()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e4L.prototype={
$0(){},
$S:0}
C.e4N.prototype={
$0(){var w=this.a
w.l(new C.e4I(w,this.b))
this.c.$1(new C.e4J())
w.FO()},
$S:0}
C.e4I.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e4J.prototype={
$0(){},
$S:0}
C.e4V.prototype={
$0(){return B.a8(this.a,!1).hY()},
$S:0}
C.e4W.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.j2("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a8(t.b,!1).cc(B.ec(new C.e4U(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e4U.prototype={
$1(d){B.jv("construction")
return Az.i36()},
$S:z+45}
C.e4X.prototype={
$0(){return E.hPg(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e4Y.prototype={
$0(){var w=this.a
return w.l(w.d.gd3l())},
$S:0}
C.e4Z.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtn(v))
w.FO()},
$S:0}
C.cNP.prototype={
$2(d,e){var w=null,v=this.a.gaA3().x
v===$&&B.d()
return B.b4(w,w,w,new C.bcG(v,w),A.az)},
$S:59}
C.cNO.prototype={
$3(d,e,f){var w=new B.aH($.T().r,A.aj,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.ch(v,u,v+e,u))
w.E(new B.ch(v,u,v,u+e))
w.E(new B.ch(v,u,v-e,u))
w.E(new B.ch(v,u,v,t))
w.E(new B.bA())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:426}
C.h8d.prototype={
$3(d,e,f){return new C.Wv(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h8e.prototype={
$4(d,e,f,g){var w=x.a
return new B.d9(e,!1,B.iC(A.z,g,null,new B.bj(B.cI(A.cm,e,null),new B.bq(0.85,1,w),w.k("bj<bR.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e0D.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBS()},
$S:0}
C.e0E.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBS()},
$S:0}
C.e0O.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBS()},
$S:0}
C.e0C.prototype={
$1(d){return new K.Jb(F.ST[this.b],new C.e0B(this.a,d),null)},
$S:z+47}
C.e0B.prototype={
$0(){this.a.a=!0
B.a8(this.b,!1).e7()},
$S:0}
C.e0P.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e0Q.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e0v.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb2j():w
return B.aA(A.c_,B.b4(w,w,w,v.cnW(this.b),A.h2),A.y,!1,D.hGr,u,w,w,w,new C.e0t(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e0u(v,e),w,w,w,!1,A.a4)},
$S:36}
C.e0u.prototype={
$1(d){var w=this.b
return this.a.cH0(d.b,new B.av(B.aT(1/0,w.a,w.b),B.aT(1/0,w.c,w.d)))},
$S:56}
C.e0t.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.On()!=null){w=v<0?1:-1
this.a.aDY(w)}},
$S:37}
C.e0M.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.x(B.a([B.W(d,g,w,w,w,20),A.rB,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.M,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jg,A.kf,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:649}
C.e0I.prototype={
$0(){return this.a.aDY(-1)},
$S:0}
C.e0J.prototype={
$0(){return this.a.aDY(1)},
$S:0}
C.e0K.prototype={
$0(){return this.a.K5(null)},
$S:0}
C.e0L.prototype={
$0(){return this.a.K5(0)},
$S:0}
C.e0R.prototype={
$0(){return B.a8(this.a,!1).hY()},
$S:0}
C.e0H.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c3t(o):q.bGt(o,p),m=x.p
p=B.a([B.oP(new B.mb(n,new B.bf(p,x.aC)),A.pI,B.q8(),A.b_,A.b_,new C.e0F())],m)
n=t.d
if(n){w=A.i.F(q.gBS(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bNk)
else m.push(A.aY)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.be:A.aw,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cT(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.ei,new B.o(A.v,s,s,u,s,s,A.m),A.n5,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bd)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.MS,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Be)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.MS,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0G(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bw(r,new B.an(A.a0,s,A.b4,A.t,p,s),A.aq)},
$S:386}
C.e0F.prototype={
$2(d,e){var w=x.a
return new B.d9(e,!1,B.iC(A.z,d,null,new B.bj(e,new B.bq(0.92,1,w),w.k("bj<bR.T>"))),null)},
$S:359}
C.e0G.prototype={
$0(){return this.a.K5(null)},
$S:0}
C.e0N.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.b0(A.o.v(B.d6(q)),2,"0")+":"+A.a.b0(A.o.v(B.fG(q)),2,"0"),s,s,s,s,s,s,A.ul,s,s,s),A.aY],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bLR,s,s,s,3))}q.push(A.d8)
q.push(D.h1f)
q.push(A.bf)
v=B.K(A.ab,A.r,1)
u=B.n(4)
t=this.b
q.push(B.p(s,new B.bK(A.a5,s,s,B.Cb(A.z,B.p(s,s,A.f,s,s,new B.o(A.be,s,s,B.n(2),s,s,A.m),s,s,s,A8.HT,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.ry)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fSP,s,s,s))
return new B.dn(A.dx,A.a5,A.f,new B.a6(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:265}
C.e0A.prototype={
$0(){return this.a.K5(A.d.cd(F.iv,this.b))},
$S:0}
C.e0y.prototype={
$0(){return this.a.K5(0)},
$S:0}
C.e0z.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cS(F.iv,0,B.dy(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),u=this.a,v=v.k("ak.E");w.C();){t=w.d
q.push(u.axS(t==null?v.a(t):t,50,!1))}return new B.dn(A.dx,A.z,A.f,new B.a6(r,s,B.A(q,A.l,s,A.rm,A.h,0,s,s),s),s)},
$S:265}
C.e0s.prototype={
$0(){return this.a.K5(null)},
$S:0}
C.e0x.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aF(k,A.bW,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.hg2,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.eZ,n,n,n,A.LN,n,n,n),1),B.c(A.a.b0(A.o.v(B.d6(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b0(A.o.v(B.fG(new B.V(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rE,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bzy(l.gBS(),this.c.d,n),A.az)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aF(m,A.dG,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.p(n,n,A.f,n,n,A.agk,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e0w(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.YT,n,12,n,n,n,n,n,12)
q=B.aA(n,B.p(n,n,A.f,n,n,D.bas,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbcc(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e6,r,A.e6,q,A.ar,B.E(B.c(F.iv[p].a,n,1,A.a2,n,n,n,A.WI,n,n,n),1)],w)
if(l.On()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b_f(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.cu,n,n,n,26,n,n,A.fC,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.D(new B.R(26,m,26,58),B.p(n,B.bw(t,B.x(B.a([s,B.E(l.aQB(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.aq),A.f,n,n,new B.o(A.v,n,u,v,D.dDC,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.jg,l.axS(F.iv[o],34,!1),n))
j.push(B.ao(8,B.at(B.p(n,B.A(t,A.l,n,A.e,A.M,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.m),n,n,n,n,A.m_,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b4,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A4.a05,n,n,n,n,n,n,n,n,n,n)},
$S:83}
C.e0w.prototype={
$0(){return this.a.K5(null)},
$S:0}
C.fzu.prototype={
$0(){return D.esS},
$S:z+48}
C.fzv.prototype={
$0(){return D.e_D},
$S:z+49}
C.fzw.prototype={
$0(){return D.dX8},
$S:z+50}
C.fzx.prototype={
$0(){return D.e_0},
$S:z+51}
C.fzy.prototype={
$0(){return D.e4v},
$S:z+52}
C.fzz.prototype={
$0(){return D.eoE},
$S:z+53}
C.fzA.prototype={
$0(){return D.eqO},
$S:z+54}
C.fzB.prototype={
$0(){return D.e3y},
$S:z+36}
C.cp9.prototype={
$0(){return B.a8(this.a,!1).hY()},
$S:0}
C.cpa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hT9(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.aa(0,A.H,p.j(0.4),A.dm,16)],t)
n=B.c(r.c,k,k,k,k,k,k,Aw.Lz,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fQz,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.p(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cN(k,-6,-6,k,k,k,n,k),new B.bK(A.lM,k,k,B.x(B.a([m,A.cM,B.c(r.b,k,k,k,k,k,k,new B.H(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.M,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bc(q,q,q,q),p,new B.a7(A.ay,A.aC,A.x,o,k,k),A.m),k,v,k,k,A.bH,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cp8(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bZ(A.bI,h,A.br,k,14,14)},
$S:166}
C.cp8.prototype={
$0(){return B.a8(this.a,!1).cc(B.ec(new C.cp7(this.b),!1,null,x.H))},
$S:0}
C.cp7.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.f_I.prototype={
$0(){var w=this.a
return w.w=w.d[w.b8H(w.f)]},
$S:0}
C.f_E.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cR.ai()*7},
$S:0}
C.f_D.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ci)
w.w=""},
$S:0}
C.f_G.prototype={
$0(){var w=this.a
return w.l(new C.f_F(w,this.b))},
$S:0}
C.f_F.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cJ(w,this.b)},
$S:0}
C.f_H.prototype={
$1(d){return this.a.b2V(0)},
$S:2}
C.e7G.prototype={
$0(){return C.JY("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e7H.prototype={
$0(){},
$S:0}
C.e7B.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e7D.prototype={
$0(){return this.a.b2X(this.b)},
$S:0}
C.e7E.prototype={
$0(){var w=this.a
return w.l(new C.e7C(w))},
$S:0}
C.e7C.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e7F.prototype={
$0(){var w=this.a
return w.b2X(w.d)},
$S:0}
C.dSX.prototype={
$2(d,e){return d+e},
$S:79}
C.dSY.prototype={
$0(){},
$S:0}
C.dSS.prototype={
$2(d,e){return d+e},
$S:79}
C.dSV.prototype={
$0(){var w=this.a
return w.l(new C.dSU(w,this.b))},
$S:0}
C.dSU.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dSW.prototype={
$0(){var w=this.a
return w.l(new C.dST(w))},
$S:0}
C.dST.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e4b.prototype={
$0(){return E.uQ(this.b,this.a.d,"drawing")},
$S:0}
C.e4c.prototype={
$1(d){var w=this.a
return w.l(new C.e4a(w,d))},
$S:50}
C.e4a.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLb(u,v,t))},
$S:0}
C.e4d.prototype={
$1(d){var w=this.a
return w.l(new C.e49(w,d))},
$S:19}
C.e49.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e4e.prototype={
$1(d){var w=this.a
return w.l(new C.e48(w,d))},
$S:23}
C.e48.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLb(u,v,t))},
$S:0}
C.e4f.prototype={
$0(){var w=this.a
return w.l(new C.e47(w,this.b))},
$S:0}
C.e47.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e4g.prototype={
$1(d){var w=this.a
return w.l(new C.e46(w,d))},
$S:6}
C.e46.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e4h.prototype={
$0(){var w=this.a
return w.l(new C.e45(w))},
$S:0}
C.e45.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e4i.prototype={
$0(){var w=this.a
return w.l(new C.e44(w))},
$S:0}
C.e44.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e4j.prototype={
$0(){var w=this.a
return w.l(A.d.gtn(w.e))},
$S:0}
C.e4k.prototype={
$0(){var w=this.a
return w.l(new C.e43(w))},
$S:0}
C.e43.prototype={
$0(){var w=this.a
w.x=D.aCu[A.o.F(A.d.cd(D.aCu,w.x)+1,4)]},
$S:0}
C.evg.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.evh.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JY("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.evf(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.JY("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.evf.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a5(0)},
$S:0}
C.evi.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.eve(w))},
$S:12}
C.eve.prototype={
$0(){var w=this.a
w.f.a5(0)
w.x=!1},
$S:0}
C.evm.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.lz(new C.evk(v,e),w,A.b_,A.pI,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evl(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:81}
C.evl.prototype={
$0(){return this.a.cfD(this.b)},
$S:0}
C.evk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dw(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.n(16)
w=o?p:D.cdJ
if(o)v=q.a.r.q(0,q.b)?A.be.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.be:A.aT,A.r,1)
if(o){r=B.dw()
r.fI(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fD(A.z,B.c(u[t],p,p,p,p,p,p,H.acZ,p,p,p),p,r,!0)
u=r}else u=D.h8M
return B.fD(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:113}
C.evn.prototype={
$0(){var w=this.a
return w.l(new C.evj(w,this.b))},
$S:0}
C.evj.prototype={
$0(){var w=this.a
w.d=this.b.a
w.avc()},
$S:0}
C.evo.prototype={
$0(){var w=this.a
return w.l(w.gbPl())},
$S:0}
C.eHR.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eHS.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eHP.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eHO(w))},
$S:12}
C.eHO.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eHT.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eHU.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eHV.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b2W()},
$S:12}
C.eHW.prototype={
$0(){return this.a.cfJ(this.b)},
$S:0}
C.eW3.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:57}
C.eWc.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kf,B.A(B.a([v,A.aa,new B.d5(1,A.cg,new B.dn(A.dx,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1903}
C.eW8.prototype={
$1(d){return this.a.l(new C.eW7())},
$S:2}
C.eW7.prototype={
$0(){},
$S:0}
C.eW9.prototype={
$0(){var w=this.a
return w.l(new C.eW6(w,this.b))},
$S:0}
C.eW6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eWa.prototype={
$1(d){var w=this.a
return w.l(new C.eW5(w,d))},
$S:6}
C.eW5.prototype={
$0(){return this.a.f=A.i.R(this.b)},
$S:0}
C.eWb.prototype={
$0(){var w=this.a
return w.l(new C.eW4(w))},
$S:0}
C.eW4.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.etW.prototype={
$0(){},
$S:0}
C.etX.prototype={
$0(){},
$S:0}
C.etP.prototype={
$0(){var w=this.a
return w.l(new C.etO(w))},
$S:0}
C.etO.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c1(u,1,!1,x.S)
w.r=0.9
E.Y2("hat",0,0.6)},
$S:0}
C.etQ.prototype={
$0(){var w=this.a
return w.l(new C.etN(w))},
$S:0}
C.etN.prototype={
$0(){this.a.y=1.1
E.mH("bell",36,200,0.4)},
$S:0}
C.etR.prototype={
$0(){var w=this.a
return w.l(new C.etM(w))},
$S:0}
C.etM.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
E.mH("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.etS.prototype={
$0(){var w=this.a
return w.l(new C.etL(w,this.b))},
$S:0}
C.etL.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.etT.prototype={
$1(d){var w=this.a
return w.l(new C.etK(w,d))},
$S:6}
C.etK.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.R(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.etU.prototype={
$1(d){var w=this.a
return w.l(new C.etJ(w,d))},
$S:6}
C.etJ.prototype={
$0(){return this.a.z=A.i.R(this.b)},
$S:0}
C.etV.prototype={
$1(d){var w=this.a
return w.l(new C.etI(w,d))},
$S:6}
C.etI.prototype={
$0(){return this.a.Q=A.i.R(this.b)},
$S:0}
C.cp5.prototype={
$0(){var w=this
return E.mH(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aPg.prototype
w.bBm=w.t
w=C.aOl.prototype
w.bAp=w.t
w=C.aOm.prototype
w.bAq=w.t
w=C.aOq.prototype
w.bAu=w.t
w=C.aQ6.prototype
w.bCj=w.t
w=C.aPe.prototype
w.bBk=w.t
w=C.aAt.prototype
w.bxq=w.t
w=C.aAu.prototype
w.bxr=w.t
w=C.aMN.prototype
w.byN=w.t
w=C.aOB.prototype
w.bAF=w.t
w=C.aOn.prototype
w.bAr=w.t
w=C.aOI.prototype
w.bAN=w.t
w=C.aP8.prototype
w.bBe=w.t
w=C.aPA.prototype
w.bBG=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHd.prototype,"gazo","caR",1)
v(C,"iA6","c8I",3)
var q
u(q=C.aFG.prototype,"gck6","ck7",22)
w(q,"gcbq","b1p",1)
w(C.aFI.prototype,"gcdb","cdc",1)
t(C.aFZ.prototype,"gcdj","cdk",39)
w(q=C.aKj.prototype,"gcDZ","cE_",1)
w(q,"gcdl","a07",1)
w(q,"gcoH","coI",1)
w(q,"gcdh","a06",3)
w(q,"gcdi","afR",3)
w(q=C.aHc.prototype,"gbMr","abb",3)
w(q,"gcnY","b55",1)
w(q,"gcrP","aiy",3)
s(q,"gcdn","afS",3)
s(q=C.a6c.prototype,"gtn","a5",1)
u(q,"gd0Z","apI",0)
u(q,"gcYi","MM",0)
w(q,"gd3l","bmJ",1)
r(C.akR.prototype,"gcdK",0,5,null,["$5"],["lD"],41,0,0)
w(q=C.aGb.prototype,"gcdL","cdM",1)
w(q,"gcuI","aiU",3)
w(q,"gcko","ahd",3)
w(q,"gcBY","ak2",3)
w(q=C.aG1.prototype,"gc5U","ae2",3)
w(q,"gbcc","cIz",1)
w(q,"gb2j","cdQ",1)
w(q=C.aHJ.prototype,"gcfE","cfF",1)
s(q,"gcfC","b2V",1)
w(C.aGZ.prototype,"gbPl","avc",1)
s(C.aHm.prototype,"gcfG","cfH",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.am3,C.Hb,C.vG,C.aVv,C.a54,C.bdO,C.c8J,C.yX,C.Dj,C.nY,C.beB,C.Bm,C.bx0,C.qJ,C.rs,C.Dn,C.a05,C.agE,C.a2l,C.Dy,C.adv,C.adO,C.afK,C.GX,C.eo,C.u8,C.ac9,C.adh,C.a6c,C.n7,C.beC,C.h2,C.mi,C.byk,C.aLb])
u(B.fO,[C.fRf,C.fFM,C.fNA,C.fNB,C.fRc,C.fRd,C.en0,C.enj,C.eCG,C.eCd,C.eCe,C.eCf,C.eCg,C.eCh,C.eCi,C.eCj,C.eCk,C.eCb,C.eCc,C.eCa,C.eCB,C.eCC,C.eCD,C.dSt,C.dSv,C.dSy,C.dSJ,C.c8K,C.c8L,C.fyO,C.fyP,C.fyQ,C.fyX,C.fyY,C.fyZ,C.dUw,C.dUd,C.dUx,C.dU8,C.dU3,C.dU5,C.dUb,C.dUo,C.dUm,C.dUn,C.dUl,C.dUi,C.dUk,C.fet,C.fe2,C.fe3,C.fea,C.feh,C.feq,C.fe_,C.duc,C.dud,C.du9,C.dua,C.dub,C.due,C.duf,C.dug,C.duh,C.dui,C.duj,C.duk,C.dul,C.dum,C.eBC,C.eBD,C.eBE,C.eBF,C.eBA,C.eBB,C.eC6,C.eBJ,C.eBL,C.eBv,C.eC2,C.eC0,C.eC1,C.eC_,C.eBZ,C.eBx,C.bRZ,C.bS9,C.bS4,C.bSa,C.bSc,C.bS_,C.bRY,C.bSh,C.bS5,C.bS8,C.bS7,C.bS6,C.bMj,C.h35,C.h38,C.h36,C.bLZ,C.bLU,C.bLS,C.bMh,C.bM9,C.bMa,C.bM8,C.bMb,C.bLI,C.bLK,C.bLG,C.bLw,C.bLx,C.bLy,C.fz_,C.fz0,C.fz1,C.fyN,C.fz2,C.fyM,C.fz3,C.fyR,C.fyL,C.fyS,C.fyK,C.fyT,C.fyJ,C.fyU,C.fyH,C.fyI,C.fyV,C.fyF,C.fyG,C.fyW,C.fyE,C.e4Q,C.e4R,C.e4G,C.e4C,C.e4P,C.e4U,C.cNO,C.h8d,C.h8e,C.e0C,C.e0u,C.e0t,C.e0M,C.cp7,C.f_H,C.e4c,C.e4d,C.e4e,C.e4g,C.evk,C.eW3,C.eWc,C.eW8,C.eWa,C.etT,C.etU,C.etV])
u(B.ie,[C.fRe,C.en5,C.en3,C.eCm,C.eCz,C.dU4,C.dUr,C.e_I,C.few,C.fex,C.fe9,C.fem,C.fen,C.fei,C.feo,C.fdZ,C.eBy,C.eBz,C.eC5,C.eBY,C.eBN,C.bSb,C.bSd,C.bSf,C.bS0,C.bS2,C.bMk,C.bMi,C.cwg,C.h37,C.bLR,C.bLT,C.bMf,C.bMe,C.bLH,C.e4O,C.cNP,C.e0v,C.e0H,C.e0F,C.e0N,C.e0z,C.e0x,C.cpa,C.dSX,C.dSS,C.evm])
u(B.af,[C.Xf,C.XC,C.W3,C.Wa,C.Ox,C.aKi,C.XB,C.akP,C.WM,C.aA8,C.Wv,C.Y9,C.WU,C.W4,C.WL,C.Xw,C.XH,C.Y0,C.Xv])
u(B.ah,[C.bo2,C.aPg,C.aOl,C.aOq,C.aFZ,C.aQ6,C.aPe,C.aAt,C.bBw,C.aMN,C.aOB,C.aPA,C.aOI,C.aOn,C.bnt,C.aGZ,C.aHm,C.boK,C.aP8])
u(B.hR,[C.emZ,C.en_,C.enb,C.enc,C.en7,C.en6,C.en8,C.en4,C.en9,C.en2,C.ena,C.en1,C.enf,C.ene,C.eng,C.end,C.enh,C.eni,C.enk,C.eCF,C.eCH,C.eCI,C.eCo,C.eCn,C.eCl,C.eCu,C.eCv,C.eCr,C.eCw,C.eCq,C.eCx,C.eCy,C.eCp,C.eCA,C.eCt,C.eCE,C.eCs,C.dSQ,C.dSP,C.dSq,C.dSr,C.dSs,C.dSR,C.dSu,C.dSw,C.dSx,C.dSz,C.dSn,C.dSo,C.dSp,C.dSG,C.dSH,C.dSI,C.dSF,C.dSK,C.dSE,C.dSL,C.dSD,C.dSM,C.dSC,C.dSN,C.dSB,C.dSO,C.dSA,C.dUa,C.dU9,C.dUe,C.dU6,C.dU7,C.dUf,C.dUg,C.dUh,C.dUc,C.dU2,C.dUq,C.dUp,C.dUs,C.dUt,C.dUu,C.dUj,C.dUv,C.cYJ,C.e_G,C.e_F,C.e_H,C.fze,C.fzf,C.fzg,C.fzh,C.fzi,C.fzj,C.fzk,C.fzl,C.fzm,C.fev,C.feu,C.fec,C.feb,C.fe1,C.fe0,C.fe4,C.fe7,C.fe6,C.fe8,C.fe5,C.fek,C.fej,C.fel,C.fed,C.fep,C.feg,C.fer,C.fef,C.fes,C.fee,C.eBH,C.eBw,C.eBG,C.eBs,C.eBI,C.eBK,C.eBt,C.eBu,C.eC4,C.eC3,C.eBV,C.eBW,C.eBX,C.eBR,C.eBS,C.eBQ,C.eBT,C.eBP,C.eBU,C.eBO,C.eBM,C.du8,C.bSe,C.bSg,C.bS1,C.bS3,C.bLW,C.bLX,C.bLV,C.bLY,C.bM_,C.bLL,C.bLM,C.bLQ,C.bLN,C.bLO,C.bLP,C.bMg,C.bLl,C.bM6,C.bM7,C.bM4,C.bM5,C.bM1,C.bM2,C.bM3,C.bMc,C.bM0,C.bMd,C.bLm,C.bLJ,C.bLt,C.bLs,C.bLu,C.bLv,C.bLr,C.bLz,C.bLq,C.bLA,C.bLB,C.bLC,C.bLD,C.bLp,C.bLE,C.bLo,C.bLF,C.bLn,C.e4H,C.e4S,C.e4T,C.e4F,C.e4E,C.e4D,C.e4M,C.e4K,C.e4L,C.e4N,C.e4I,C.e4J,C.e4V,C.e4W,C.e4X,C.e4Y,C.e4Z,C.e0D,C.e0E,C.e0O,C.e0B,C.e0P,C.e0Q,C.e0I,C.e0J,C.e0K,C.e0L,C.e0R,C.e0G,C.e0A,C.e0y,C.e0s,C.e0w,C.fzu,C.fzv,C.fzw,C.fzx,C.fzy,C.fzz,C.fzA,C.fzB,C.cp9,C.cp8,C.f_I,C.f_E,C.f_D,C.f_G,C.f_F,C.e7G,C.e7H,C.e7B,C.e7D,C.e7E,C.e7C,C.e7F,C.dSY,C.dSV,C.dSU,C.dSW,C.dST,C.e4b,C.e4a,C.e49,C.e48,C.e4f,C.e47,C.e46,C.e4h,C.e45,C.e4i,C.e44,C.e4j,C.e4k,C.e43,C.evg,C.evh,C.evf,C.evi,C.eve,C.evl,C.evn,C.evj,C.evo,C.eHR,C.eHS,C.eHP,C.eHQ,C.eHO,C.eHT,C.eHU,C.eHV,C.eHW,C.eW7,C.eW9,C.eW6,C.eW5,C.eWb,C.eW4,C.etW,C.etX,C.etP,C.etO,C.etQ,C.etN,C.etR,C.etM,C.etS,C.etL,C.etK,C.etJ,C.etI,C.cp5])
t(C.bBJ,C.aPg)
t(C.aHd,C.bBJ)
u(B.lK,[C.bkV,C.beT,C.bwo,C.bdw,C.buZ,C.buo,C.bec,C.buq,C.byu,C.bkT,C.akR,C.bcG,C.bzy,C.agx,C.bzK,C.bup,C.bpw])
t(C.aOm,C.aOl)
t(C.aFG,C.aOm)
t(C.bBt,C.aOq)
t(C.aFI,C.bBt)
u(B.kP,[C.Lt,C.a28,C.Ks])
u(B.aw,[C.bvn,C.agQ,C.afH,C.Rx,C.bvU,C.aa9,C.bh_])
t(C.aKj,C.aQ6)
t(C.bkS,B.oS)
t(C.aHc,C.aPe)
t(C.aAu,C.aAt)
t(C.akQ,C.aAu)
t(C.aGb,C.bBw)
t(C.bcH,C.aMN)
t(C.aG1,C.aOB)
t(C.bBQ,C.aPA)
t(C.aHJ,C.bBQ)
t(C.bBy,C.aOI)
t(C.bnC,C.bBy)
t(C.bBs,C.aOn)
t(C.bnb,C.bBs)
t(C.bBH,C.aP8)
t(C.boe,C.bBH)
w(C.aPg,B.cg)
w(C.bBJ,E.nW)
w(C.aOl,B.cg)
w(C.aOm,E.nW)
w(C.aOq,B.cg)
w(C.bBt,E.nW)
w(C.aQ6,B.f_)
w(C.aPe,B.cg)
w(C.aAt,B.cg)
w(C.aAu,E.nW)
w(C.aMN,B.cg)
v(C.bBw,B.eK)
w(C.aOB,B.cg)
w(C.aOn,B.cg)
w(C.bBs,E.nW)
w(C.aOI,B.cg)
w(C.bBy,E.nW)
w(C.aP8,B.cg)
w(C.bBH,E.nW)
w(C.aPA,B.cg)
w(C.bBQ,E.nW)})()
B.i0(b.typeUniverse,JSON.parse('{"Xf":{"af":[],"w":[]},"bo2":{"ah":["Xf"]},"XC":{"af":[],"w":[]},"aHd":{"ah":["XC"]},"bkV":{"aC":[]},"W3":{"af":[],"w":[]},"aFG":{"ah":["W3"]},"Wa":{"af":[],"w":[]},"aFI":{"ah":["Wa"]},"beT":{"aC":[]},"agQ":{"aw":[],"w":[]},"afH":{"aw":[],"w":[]},"aKi":{"af":[],"w":[]},"Ox":{"af":[],"w":[]},"aFZ":{"ah":["Ox"]},"bvn":{"aw":[],"w":[]},"Rx":{"aw":[],"w":[]},"bwo":{"aC":[]},"bvU":{"aw":[],"w":[]},"bdw":{"aC":[]},"aKj":{"ah":["aKi"]},"buZ":{"aC":[]},"buo":{"aC":[]},"bec":{"aC":[]},"buq":{"aC":[]},"byu":{"aC":[]},"XB":{"af":[],"w":[]},"bkS":{"aC":[]},"aHc":{"ah":["XB"]},"bkT":{"aC":[]},"akR":{"aC":[]},"akP":{"af":[],"w":[]},"akQ":{"ah":["akP"]},"WM":{"af":[],"w":[]},"aA8":{"af":[],"w":[]},"aGb":{"ah":["WM"],"eK":[]},"bcH":{"ah":["aA8"]},"bcG":{"aC":[]},"Wv":{"af":[],"w":[]},"aG1":{"ah":["Wv"]},"bzy":{"aC":[]},"agx":{"aC":[]},"aa9":{"aw":[],"w":[]},"Y9":{"af":[],"w":[]},"WU":{"af":[],"w":[]},"W4":{"af":[],"w":[]},"WL":{"af":[],"w":[]},"Xw":{"af":[],"w":[]},"XH":{"af":[],"w":[]},"Y0":{"af":[],"w":[]},"Xv":{"af":[],"w":[]},"aHJ":{"ah":["Y9"]},"bzK":{"aC":[]},"bnC":{"ah":["WU"]},"bup":{"aC":[]},"bnb":{"ah":["W4"]},"bnt":{"ah":["WL"]},"bpw":{"aC":[]},"aGZ":{"ah":["Xw"]},"aHm":{"ah":["XH"]},"boK":{"ah":["Y0"]},"boe":{"ah":["Xv"]},"bh_":{"aw":[],"w":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.ar
return{c:w("kS<u?>"),G:w("u"),J:w("bl<m,G>"),Q:w("db<m>"),Z:w("a_"),I:w("vf"),M:w("N<de>"),l:w("N<a5_>"),h:w("N<a54>"),V:w("N<aa>"),O:w("N<u>"),F:w("N<V>"),D:w("N<ay<aE>>"),x:w("N<a_>"),E:w("N<ai<m>>"),b:w("N<ai<G>>"),U:w("N<ai<F?>>"),B:w("N<a9<m,aE>>"),g:w("N<r>"),bz:w("N<u8>"),v:w("N<fX>"),eZ:w("N<+(m,m)>"),fT:w("N<+(G,w)>"),L:w("N<+(F,m)>"),u:w("N<+(F,F)>"),r:w("N<+(m,m,a_)>"),e:w("N<+(m,G,G,F)>"),o:w("N<+(m,F,m,F)>"),d:w("N<+(m,m,G,G,a9<m,G>)>"),_:w("N<vG>"),fQ:w("N<ac9>"),s:w("N<m>"),cF:w("N<au>"),X:w("N<Gx>"),p:w("N<w>"),bL:w("N<adh>"),fH:w("N<lf>"),a_:w("N<adv>"),cB:w("N<nY>"),ba:w("N<adO>"),eW:w("N<Dn>"),fY:w("N<a05>"),ac:w("N<afK>"),cd:w("N<Dy>"),fr:w("N<agE>"),e4:w("N<a2l>"),au:w("N<aLb>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<u8?>"),bN:w("N<F?>"),gJ:w("cx<akQ>"),A:w("cx<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<m,@>"),f:w("a9<@,@>"),bd:w("O<eo,m>"),fR:w("O<+(G,w),w>"),w:w("hW"),gA:w("vk"),gD:w("wF"),k:w("cm"),K:w("aE"),Y:w("u8"),C:w("eo"),N:w("m"),bO:w("au"),a:w("bq<G>"),W:w("bf<m>"),aC:w("bf<F?>"),dg:w("ea<rs>"),m:w("bdO"),a2:w("Dj"),f3:w("rs"),es:w("GX"),q:w("kx"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),R:w("ai<@>?"),cK:w("aE?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b58=new B.de(0,0.1)
D.b74=new C.aVv(0,0,0)
D.MM=new C.aVv(0,0.5,0)
D.b7G=new B.ax(A.be,1,A.r,-1)
D.b9d=new B.aY(16,1/0,16,1/0)
D.b9o=new B.aY(0,1/0,0,210)
D.brr=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dDQ=w([D.brr,AC.akA],x.O)
D.eKo=new B.bT(A.BQ,1.1,A.x,null,0,D.dDQ,null,null)
D.b9w=new B.o(null,null,null,null,null,D.eKo,A.m)
D.bas=new B.o(A.bi,null,null,null,null,null,A.a6)
D.fEe=new B.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhs=new B.C("\u26a1",null,D.fEe,null,null,null,null,null,null,null,null,null)
D.bfc=new B.cl(A.z,null,null,D.hhs,null)
D.aYh=new B.H(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6L=new B.C("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aYh,null,A.K,null,null,null,null,null,null,null)
D.eCx=new B.D(A.nZ,D.h6L,null)
D.bfn=new B.cl(A.z,null,null,D.eCx,null)
D.fXs=new B.C("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aYh,null,A.K,null,null,null,null,null,null,null)
D.eDq=new B.D(A.HO,D.fXs,null)
D.bg5=new B.cl(A.z,null,null,D.eDq,null)
D.ahl=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bjY=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bke=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.blu=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.blB=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.blY=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bo0=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bp8=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bpT=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ajI=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bqV=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ak5=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akd=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bsV=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.akF=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.buY=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bv5=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bvB=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wI=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bxN=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ama=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bDE=new B.bg(11e6)
D.bFx=new B.R(10,6,10,2)
D.bFz=new B.R(10,8,0,10)
D.bGc=new B.R(12,8,6,10)
D.bGf=new B.R(12,8,8,8)
D.bGn=new B.R(14,0,14,22)
D.bGp=new B.R(14,0,14,30)
D.bHt=new B.R(16,4,16,28)
D.bHO=new B.R(18,10,18,16)
D.bKF=new B.R(4,4,8,2)
D.bLk=new B.R(8,14,8,12)
D.bLv=new B.R(8,6,8,8)
D.bLR=new B.R(0,0,1.5,0)
D.b6R=new B.Eh(26,"saturation")
D.bM9=new B.v3(A.cB,D.b6R,null,A.Zn)
D.bMa=new B.h_(A.H,11)
D.bMe=new B.h_(A.H,30)
D.fWu=new B.C("REACTION LAB",null,V.aYU,null,null,null,null,A.a2,null,1,null,null)
D.bMn=new B.bz(1,A.ba,D.fWu,null)
D.h_D=new B.C("\ud83d\udce2 NGMY Ads",null,A.rE,null,null,null,null,A.eZ,null,1,null,null)
D.bNk=new B.bz(1,A.ba,D.h_D,null)
D.fV6=new B.C("Wire selected",null,A.hg,null,null,null,null,null,null,null,null,null)
D.bNy=new B.bz(1,A.ba,D.fV6,null)
D.arb=new B.a_(62712,"MaterialIcons",!1)
D.bTL=new B.a_(62908,"MaterialIcons",!1)
D.bVr=new B.a_(983122,"MaterialIcons",!1)
D.bVG=new B.a_(983247,"MaterialIcons",!1)
D.bVW=new B.a_(983443,"MaterialIcons",!1)
D.bWe=new B.a_(983616,"MaterialIcons",!1)
D.bVq=new B.a_(983117,"MaterialIcons",!1)
D.bZZ=new B.ae(D.bVq,28,A.c,null,null,null)
D.c_g=new B.ae(A.ji,18,null,null,null,null)
D.c1w=new B.ae(A.o4,null,A.ab,null,null,null)
D.c1G=new B.ae(A.a4U,21,A.ab,null,null,null)
D.c2y=new B.ae(A.eH,17,A.ab,null,null,null)
D.c5r=new B.ae(A.ji,21,A.ab,null,null,null)
D.c5Y=new B.ae(A.eo,20,A.bY,null,null,null)
D.c74=new B.ae(A.ef,null,A.aQ,null,null,null)
D.dBn=w([A.dg,A.db,A.dg],x.O)
D.auT=new B.a7(A.a5,A.a9,A.x,D.dBn,null,null)
D.daQ=w([A.bO,A.bj],x.O)
D.caA=new B.a7(A.aX,A.b1,A.x,D.daQ,null,null)
D.caQ=new B.a7(A.aX,A.b1,A.x,A.a7u,null,null)
D.dwB=w([F.Nc,Aa.amk],x.O)
D.cbA=new B.a7(A.aX,A.b1,A.x,D.dwB,null,null)
D.d89=w([A.pt,A.iF],x.O)
D.cbG=new B.a7(A.aX,A.b1,A.x,D.d89,null,null)
D.day=w([A.cQ,A.aw],x.O)
D.av4=new B.a7(A.aX,A.b1,A.x,D.day,null,null)
D.dux=w([A.cX,A.iI,A.bj],x.O)
D.cbZ=new B.a7(A.a5,A.a9,A.x,D.dux,null,null)
D.dGI=w([A.cX,A.bO,A.bj],x.O)
D.cc9=new B.a7(A.a5,A.a9,A.x,D.dGI,null,null)
D.duD=w([A.cv,A.cu],x.O)
D.av7=new B.a7(A.aX,A.b1,A.x,D.duD,null,null)
D.aF8=w([A.cQ,M.n3],x.O)
D.ccA=new B.a7(A.aX,A.b1,A.x,D.aF8,null,null)
D.ccS=new B.a7(A.aX,A.b1,A.x,U.avr,null,null)
D.cdJ=new B.a7(A.ay,A.aC,A.x,A.SU,null,null)
D.bww=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.brH=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dkg=w([D.bww,D.brH],x.O)
D.cdN=new B.a7(A.aX,A.b1,A.x,D.dkg,null,null)
D.cdX=new B.a7(A.aX,A.b1,A.x,H.aEq,null,null)
D.alU=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bw7=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dDf=w([D.alU,D.bw7,D.alU],x.O)
D.ce4=new B.a7(A.a5,A.a9,A.x,D.dDf,null,null)
D.bvv=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bwp=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cTu=w([A.Oh,D.bvv,D.bwp],x.O)
D.ce7=new B.a7(A.aX,A.b1,A.x,D.cTu,null,null)
D.cGF=w([A.d9,A.iU],x.O)
D.cem=new B.a7(A.aX,A.b1,A.x,D.cGF,null,null)
D.cUa=w([A.cX,A.hW,A.cX],x.O)
D.ceu=new B.a7(A.a5,A.a9,A.x,D.cUa,null,null)
D.bzd=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cHr=w([F.aht,D.bzd],x.O)
D.ceA=new B.a7(A.aX,A.b1,A.x,D.cHr,null,null)
D.cff=w([0,4,7],x.t)
D.cfg=w([0,4,7,12],x.t)
D.cfh=w([0,4,7,4],x.t)
D.aE5=w([A.hi,A.ta],x.O)
D.aDB=w([A.fW,A.cU],x.O)
D.aBT=w([A.bl,A.dW],x.O)
D.d1p=w([A.aQ,A.d9],x.O)
D.dw1=w([A.c2,A.lP],x.O)
D.aBj=w([A.cS,A.ka],x.O)
D.d6S=w([A.bP,A.aM],x.O)
D.cfF=w([D.aE5,D.aDB,A.a6J,D.aBT,D.d1p,A.aC9,A.aD7,D.dw1,D.aBj,D.d6S],B.ar("N<ai<u>>"))
D.ckn=w([120,220,380],x.t)
D.co7=w([12,16,19,24],x.t)
D.coj=w([1400,800,450,2400],x.t)
D.cwR=w([250,450,900,1500],x.t)
D.bjg=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bvV=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.btB=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bzP=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bsI=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aAz=w([D.bjg,D.bvV,D.btB,D.bzP,D.bsI],x.O)
D.f49=new B.y(-25,A.aw)
D.eTi=new B.y(25,A.bE)
D.cGL=w([D.f49,D.eTi],B.ar("N<+(G,u)>"))
D.cOh=w([50,25,75],x.t)
D.cU3=w([0,5,10,15,18,20,25],x.t)
D.d1J=w([900,500,250,1600],x.t)
D.d63=w([A.bl,A.bA,A.bc,A.bl],x.O)
D.a6B=w([A.aB,A.bt,A.bi,A.aH,A.oF],x.O)
D.d7M=w([A.aw,A.aB,A.cS,A.bt,A.bi,A.cC,A.cf,A.bA,A.ZH],x.O)
D.a6E=w([0.04,0.17,0.3],x.n)
D.fny=new C.vG("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fnE=new C.vG("Medium engine","A good all-rounder.",0.3,0.9)
D.fnD=new C.vG("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jf=w([D.fny,D.fnE,D.fnD],x._)
D.eQs=new B.y(6,"Easy")
D.eRg=new B.y(8,"Medium")
D.eM0=new B.y(10,"Hard")
D.d9x=w([D.eQs,D.eRg,D.eM0],x.L)
D.aCj=w([0.55,0.78,1],x.n)
D.aCu=w([A.c,A.h8,A.pv,A.aw],x.O)
D.aCC=w([A.bi,A.aB,A.bt,A.db],x.O)
D.fnv=new C.vG("Radar","Shows your height above the ground.",0.1,0)
D.fnw=new C.vG("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fnt=new C.vG("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aCL=w([D.fnv,D.fnw,D.fnt],x._)
D.dfS=w([-29.5,28.5],x.n)
D.dfY=w([A.bj,A.cj,F.NH,A.cv],x.O)
D.dgl=w([47,100,220,470,1000],x.n)
D.dhG=w([0,0.32,0.62,1],x.n)
D.dhL=w([A.cX,A.hW,A.cX,A.cv],x.O)
D.Kl={volts:0}
D.a8v=new B.bl(D.Kl,[3],x.J)
D.KN=new B.dY(["b","battery",0.2,0.3,D.a8v])
D.ewo={on:0}
D.dN3=new B.bl(D.ewo,[1],x.J)
D.Fh=new B.dY(["s","switch",0.5,0.3,D.dN3])
D.fl7=new B.dY(["l","bulb",0.8,0.3,A.jF])
D.db0=w([D.KN,D.Fh,D.fl7],x.d)
D.Ff=new B.b7(["b",0,"s",0])
D.fk0=new B.b7(["s",1,"l",0])
D.aTN=new B.b7(["l",1,"b",1])
D.duL=w([D.Ff,D.fk0,D.aTN],x.o)
D.dam=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eL7=new C.n7("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.db0,D.duL,D.dam)
D.aNy={ohms:0}
D.aL7=new B.bl(D.aNy,[220],x.J)
D.fkw=new B.dY(["r","resistor",0.5,0.3,D.aL7])
D.flo=new B.dY(["d","led",0.8,0.3,A.jF])
D.dyf=w([D.KN,D.fkw,D.flo],x.d)
D.fjf=new B.b7(["b",0,"r",0])
D.fjV=new B.b7(["r",1,"d",0])
D.fjm=new B.b7(["d",1,"b",1])
D.dIu=w([D.fjf,D.fjV,D.fjm],x.o)
D.dyI=w(["led","diode","indicator"],x.s)
D.eLe=new C.n7("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dyf,D.dIu,D.dyI)
D.aa_={level:0}
D.dMq=new B.bl(D.aa_,[0.2],x.J)
D.fkD=new B.dY(["p","pot",0.5,0.3,D.dMq])
D.fkF=new B.dY(["m","motor",0.8,0.3,A.jF])
D.dbm=w([D.KN,D.fkD,D.fkF],x.d)
D.fje=new B.b7(["b",0,"p",0])
D.fjQ=new B.b7(["p",1,"m",0])
D.fjM=new B.b7(["m",1,"b",1])
D.dDy=w([D.fje,D.fjQ,D.fjM],x.o)
D.duq=w(["fan","motor","spin","dimmer"],x.s)
D.eL5=new C.n7("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dbm,D.dDy,D.duq)
D.a8r=new B.bl(D.aa_,[0.9],x.J)
D.aTW=new B.dY(["s","solar",0.25,0.3,D.a8r])
D.aTV=new B.dY(["l","bulb",0.75,0.3,A.jF])
D.dev=w([D.aTW,D.aTV],x.d)
D.fjY=new B.b7(["s",0,"l",0])
D.fjJ=new B.b7(["l",1,"s",1])
D.dce=w([D.fjY,D.fjJ],x.o)
D.dEj=w(["solar","sun","without battery","no battery","free"],x.s)
D.eL8=new C.n7("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dev,D.dce,D.dEj)
D.flt=new B.dY(["c","crank",0.25,0.3,D.a8r])
D.dsv=w([D.flt,D.aTV],x.d)
D.fji=new B.b7(["c",0,"l",0])
D.fjI=new B.b7(["l",1,"c",1])
D.dtb=w([D.fji,D.fjI],x.o)
D.dsG=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eL4=new C.n7("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dsv,D.dtb,D.dsG)
D.dMp=new B.bl(D.aa_,[0.7],x.J)
D.fkK=new B.dY(["t","turbine",0.25,0.3,D.dMp])
D.fku=new B.dY(["m","motor",0.75,0.3,A.jF])
D.dmb=w([D.fkK,D.fku],x.d)
D.fk8=new B.b7(["t",0,"m",0])
D.fjN=new B.b7(["m",1,"t",1])
D.dl1=w([D.fk8,D.fjN],x.o)
D.drd=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eL1=new C.n7("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dmb,D.dl1,D.drd)
D.aL4=new B.bl(D.Kl,[9],x.J)
D.ab6=new B.dY(["b","battery",0.2,0.3,D.aL4])
D.aTT=new B.dY(["r","radio",0.8,0.3,A.jF])
D.dEX=w([D.ab6,D.Fh,D.aTT],x.d)
D.fk2=new B.b7(["s",1,"r",0])
D.aTP=new B.b7(["r",1,"b",1])
D.ceT=w([D.Ff,D.fk2,D.aTP],x.o)
D.dDj=w(["radio","music","listen"],x.s)
D.eLd=new C.n7("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dEX,D.ceT,D.dDj)
D.dNu=new B.bl(D.Kl,[12],x.J)
D.aTS=new B.dY(["b","battery",0.2,0.3,D.dNu])
D.fl8=new B.dY(["t","tv",0.8,0.3,A.jF])
D.db2=w([D.aTS,D.Fh,D.fl8],x.d)
D.fk3=new B.b7(["s",1,"t",0])
D.aTQ=new B.b7(["t",1,"b",1])
D.dw4=w([D.Ff,D.fk3,D.aTQ],x.o)
D.dEV=w(["tv","television","screen","watch"],x.s)
D.eKZ=new C.n7("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.db2,D.dw4,D.dEV)
D.fkY=new B.dY(["z","buzzer",0.8,0.3,A.jF])
D.cQG=w([D.KN,D.Fh,D.fkY],x.d)
D.fk4=new B.b7(["s",1,"z",0])
D.fkn=new B.b7(["z",1,"b",1])
D.d54=w([D.Ff,D.fk4,D.fkn],x.o)
D.dBv=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eLa=new C.n7("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cQG,D.d54,D.dBv)
D.fkE=new B.dY(["h","heater",0.8,0.3,A.jF])
D.dpI=w([D.ab6,D.Fh,D.fkE],x.d)
D.fk_=new B.b7(["s",1,"h",0])
D.fjv=new B.b7(["h",1,"b",1])
D.d5Z=w([D.Ff,D.fk_,D.fjv],x.o)
D.cAa=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eL_=new C.n7("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dpI,D.d5Z,D.cAa)
D.fla=new B.dY(["s","solar",0.2,0.25,D.a8r])
D.dNz=new B.bl(D.aNy,[100],x.J)
D.fld=new B.dY(["r","resistor",0.55,0.25,D.dNz])
D.flm=new B.dY(["c","capacitor",0.85,0.25,A.jF])
D.fkA=new B.dY(["q","resistor",0.55,0.6,D.aL7])
D.flb=new B.dY(["d","led",0.85,0.6,A.jF])
D.dvv=w([D.fla,D.fld,D.flm,D.fkA,D.flb],x.d)
D.fjZ=new B.b7(["s",0,"r",0])
D.fjU=new B.b7(["r",1,"c",0])
D.fjk=new B.b7(["c",1,"s",1])
D.fjj=new B.b7(["c",0,"q",0])
D.fjT=new B.b7(["q",1,"d",0])
D.fjn=new B.b7(["d",1,"c",1])
D.diH=w([D.fjZ,D.fjU,D.fjk,D.fjj,D.fjT,D.fjn],x.o)
D.drN=w(["capacitor","store","charge","flash"],x.s)
D.eLc=new C.n7("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dvv,D.diH,D.drN)
D.fkN=new B.dY(["b","battery",0.15,0.3,D.a8v])
D.flv=new B.dY(["l1","bulb",0.5,0.3,A.jF])
D.fkV=new B.dY(["l2","bulb",0.85,0.3,A.jF])
D.d8R=w([D.fkN,D.flv,D.fkV],x.d)
D.fjd=new B.b7(["b",0,"l1",0])
D.fjF=new B.b7(["l1",1,"l2",0])
D.fjG=new B.b7(["l2",1,"b",1])
D.dn_=w([D.fjd,D.fjF,D.fjG],x.o)
D.dEF=w(["series","two bulbs","dim"],x.s)
D.eL2=new C.n7("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d8R,D.dn_,D.dEF)
D.ewK={volts:0,charge:1}
D.dND=new B.bl(D.ewK,[1.5,0],x.J)
D.flj=new B.dY(["b","battery",0.75,0.3,D.dND])
D.d8a=w([D.aTW,D.flj],x.d)
D.fjX=new B.b7(["s",0,"b",0])
D.fjh=new B.b7(["b",1,"s",1])
D.dj1=w([D.fjX,D.fjh],x.o)
D.drX=w(["charge","rechargeable","flat","recharge"],x.s)
D.eL0=new C.n7("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d8a,D.dj1,D.drX)
D.dNt=new B.bl(D.Kl,[4.5],x.J)
D.fkG=new B.dY(["b","battery",0.2,0.3,D.dNt])
D.aTR=new B.dY(["p","phone",0.8,0.3,A.jF])
D.dm_=w([D.fkG,D.Fh,D.aTR],x.d)
D.fk1=new B.b7(["s",1,"p",0])
D.ab5=new B.b7(["p",1,"b",1])
D.dAe=w([D.Ff,D.fk1,D.ab5],x.o)
D.dBX=w(["phone","charger","usb","mobile"],x.s)
D.eL6=new C.n7("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dm_,D.dAe,D.dBX)
D.fkr=new B.dY(["f","fan",0.8,0.3,A.jF])
D.csa=w([D.KN,D.fkr],x.d)
D.fjc=new B.b7(["b",0,"f",0])
D.fjt=new B.b7(["f",1,"b",1])
D.d6C=w([D.fjc,D.fjt],x.o)
D.dup=w(["fan","cool","air","wind"],x.s)
D.eLf=new C.n7("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.csa,D.d6C,D.dup)
D.fl1=new B.dY(["b","battery",0.15,0.2,D.a8v])
D.fks=new B.dY(["a","ammeter",0.5,0.2,A.jF])
D.fkq=new B.dY(["l","bulb",0.85,0.2,A.jF])
D.fl3=new B.dY(["v","voltmeter",0.5,0.6,A.jF])
D.dsj=w([D.fl1,D.fks,D.fkq,D.fl3],x.d)
D.fja=new B.b7(["b",0,"a",0])
D.fj9=new B.b7(["a",1,"l",0])
D.fkb=new B.b7(["v",0,"l",0])
D.fkc=new B.b7(["v",1,"l",1])
D.diT=w([D.fja,D.fj9,D.aTN,D.fkb,D.fkc],x.o)
D.dIt=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eLb=new C.n7("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dsj,D.diT,D.dIt)
D.fly=new B.dY(["b","battery",0.15,0.2,D.aL4])
D.fkM=new B.dY(["t","tv",0.55,0.2,A.jF])
D.aL5=new B.bl(D.Kl,[5],x.J)
D.fkx=new B.dY(["c","buck",0.4,0.5,D.aL5])
D.fkO=new B.dY(["p","phone",0.8,0.5,A.jF])
D.dg7=w([D.fly,D.fkM,D.fkx,D.fkO],x.d)
D.fjg=new B.b7(["b",0,"t",0])
D.aTL=new B.b7(["b",0,"c",0])
D.aTM=new B.b7(["c",1,"p",0])
D.dlX=w([D.fjg,D.aTQ,D.aTL,D.aTM,D.ab5],x.o)
D.de0=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eL3=new C.n7("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dg7,D.dlX,D.de0)
D.fkz=new B.dY(["c","buck",0.5,0.3,D.aL5])
D.d5L=w([D.aTS,D.fkz,D.aTR],x.d)
D.dbx=w([D.aTL,D.aTM,D.ab5],x.o)
D.cDI=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eKY=new C.n7("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d5L,D.dbx,D.cDI)
D.fkT=new B.dY(["d","diode",0.5,0.3,A.jF])
D.dnf=w([D.ab6,D.fkT,D.aTT],x.d)
D.fjb=new B.b7(["b",0,"d",0])
D.fjo=new B.b7(["d",1,"r",0])
D.cTf=w([D.fjb,D.fjo,D.aTP],x.o)
D.ddE=w(["diode","protect","backwards","one way"],x.s)
D.eL9=new C.n7("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dnf,D.cTf,D.ddE)
D.T7=w([D.eL7,D.eLe,D.eL5,D.eL8,D.eL4,D.eL1,D.eLd,D.eKZ,D.eLa,D.eL_,D.eLc,D.eL2,D.eL0,D.eL6,D.eLf,D.eLb,D.eL3,D.eKY,D.eL9],B.ar("N<n7>"))
D.hWE=new C.Hb("Moon",1.62,A.cX,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hWC=new C.Hb("Mars",3.71,A.aB,"Mars has about 38 percent of Earth's gravity.")
D.hWF=new C.Hb("Mercury",3.7,A.kE,"Mercury is small, so its gravity is like Mars.")
D.hWz=new C.Hb("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hWB=new C.Hb("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hWD=new C.Hb("Neptune",11.15,A.db,"Neptune pulls a little harder than Earth.")
D.hWA=new C.Hb("Jupiter",24.79,A.cS,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tN=w([D.hWE,D.hWC,D.hWF,D.hWz,D.hWB,D.hWD,D.hWA],B.ar("N<Hb>"))
D.diF=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.djt=w([0.2,0.5,0.8],x.n)
D.b3R=new C.Lt(0,"accordion")
D.d7_=w([A.jW,A.A6,A.zS],x.x)
D.dfs=w(["Mail","SMS","Ad"],x.s)
D.d7E=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hUO=new C.Bm(D.b3R,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aE5,D.d7_,D.dfs,D.d7E)
D.aeY=new C.Lt(1,"flip")
D.drH=w([A.rc,A.DT,A.re],x.x)
D.dlF=w(["Unlock","Verify","Secure"],x.s)
D.d5G=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hUN=new C.Bm(D.aeY,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aDB,D.drH,D.dlF,D.d5G)
D.b3S=new C.Lt(2,"towers")
D.dki=w([A.A4,A.nf,A.it],x.x)
D.djM=w(["Save","Grow","Earn"],x.s)
D.cUg=w(["","",""],x.s)
D.hUP=new C.Bm(D.b3S,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a6J,D.dki,D.djM,D.cUg)
D.aeZ=new C.Lt(3,"assemble")
D.dsK=w([A.p_,A.he,A.ef],x.x)
D.deK=w(["Launch","Charge","Shine"],x.s)
D.doG=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hUR=new C.Bm(D.aeZ,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aBT,D.dsK,D.deK,D.doG)
D.b3T=new C.Lt(4,"carousel")
D.dsw=w([A.bc,A.ft],x.O)
D.dfD=w([A.nd,A.arz,A.QP],x.x)
D.d9n=w(["Explore","Discover","Learn"],x.s)
D.dm6=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hUM=new C.Bm(D.b3T,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dsw,D.dfD,D.d9n,D.dm6)
D.b3U=new C.Lt(5,"burst")
D.djH=w([A.hY,A.uK],x.O)
D.d7x=w([A.kk,A.m0,A.hP],x.x)
D.d7W=w(["Cheer","Win","Love"],x.s)
D.dav=w(["Make some noise","First place","Share the joy"],x.s)
D.hUQ=new C.Bm(D.b3U,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.djH,D.d7x,D.d7W,D.dav)
D.aDi=w([D.hUO,D.hUN,D.hUP,D.hUR,D.hUM,D.hUQ],B.ar("N<Bm>"))
D.fdP=new B.b3("skin","Skin",A.a49)
D.ffy=new B.b3("muscle","Muscles",A.Qq)
D.ffb=new B.b3("organ","Organs",A.hP)
D.bTr=new B.a_(62747,"MaterialIcons",!1)
D.ffk=new B.b3("bone","Skeleton",D.bTr)
D.ffG=new B.b3("vessel","Blood vessels",A.pX)
D.dko=w([D.fdP,D.ffy,D.ffb,D.ffk,D.ffG],x.r)
D.fnx=new C.vG("Simple legs","Light. Land gently.",0.15,0.2)
D.fnz=new C.vG("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fnC=new C.vG("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Ef=w([D.fnx,D.fnz,D.fnC],x._)
D.fiJ=new B.b7(["beat",0.18,0.28,0])
D.fk5=new B.b7(["burst",0.7,0.2,0])
D.fkh=new B.b7(["delay",0.45,0.5,1])
D.fjP=new B.b7(["ripple",0.75,0.6,3])
D.deq=w([D.fiJ,D.fk5,D.fkh,D.fjP],x.e)
D.dqY=w([Q.lg,S.KL,F.VH],x.u)
D.hRE=new C.GX("First spark","A clock lights a burst and a ripple",D.deq,D.dqY)
D.fjs=new B.b7(["beat",0.15,0.3,1])
D.fh_=new B.b7(["ripple",0.62,0.15,0])
D.fkd=new B.b7(["delay",0.4,0.45,0])
D.fj5=new B.b7(["ripple",0.7,0.45,0])
D.fiE=new B.b7(["delay",0.4,0.7,1])
D.fjR=new B.b7(["shake",0.75,0.75,0])
D.dFV=w([D.fjs,D.fh_,D.fkd,D.fj5,D.fiE,D.fjR],x.e)
D.eN8=new B.y(2,4)
D.aTp=new B.y(4,5)
D.diu=w([Q.lg,S.KL,F.VH,D.eN8,D.aTp],x.u)
D.hRG=new C.GX("Heartbeat","Two thumps, then a shake",D.dFV,D.diu)
D.fiP=new B.b7(["dice",0.15,0.7,1])
D.fkj=new B.b7(["echo",0.4,0.7,0])
D.fj1=new B.b7(["comet",0.7,0.5,4])
D.fk6=new B.b7(["burst",0.72,0.2,1])
D.fjp=new B.b7(["burst",0.3,0.25,0])
D.fiQ=new B.b7(["pop",0.55,0.85,0])
D.czI=w([D.fiP,D.fkj,D.fj1,D.fk6,D.fjp,D.fiQ],x.e)
D.eMs=new B.y(1,3)
D.eMt=new B.y(1,4)
D.aTl=new B.y(0,5)
D.dsr=w([Q.lg,T.w1,D.eMs,D.eMt,D.aTl],x.u)
D.hRF=new C.GX("Fireworks","Dice launch comets that burst in colour",D.czI,D.dsr)
D.fiX=new B.b7(["beat",0.15,0.2,2])
D.fjC=new B.b7(["chance",0.4,0.2,0])
D.fiM=new B.b7(["ball",0.7,0.12,3])
D.fix=new B.b7(["chance",0.4,0.5,1])
D.fki=new B.b7(["ball",0.3,0.08,1])
D.fhP=new B.b7(["ripple",0.7,0.55,3])
D.csF=w([D.fiX,D.fjC,D.fiM,D.fix,D.fki,D.fhP],x.e)
D.eN9=new B.y(2,5)
D.cQp=w([Q.lg,T.w1,S.aaX,F.VI,D.eN9],x.u)
D.hRD=new C.GX("Rain","Balls fall at random and splash",D.csF,D.cQp)
D.fjD=new B.b7(["beat",0.12,0.45,2])
D.fk7=new B.b7(["toggle",0.38,0.2,0])
D.fkf=new B.b7(["wash",0.7,0.15,4])
D.fiO=new B.b7(["count3",0.38,0.45,0])
D.fka=new B.b7(["burst",0.72,0.4,0])
D.fjq=new B.b7(["light",0.55,0.7,1])
D.fiy=new B.b7(["pop",0.8,0.8,4])
D.dvt=w([D.fjD,D.fk7,D.fkf,D.fiO,D.fka,D.fjq,D.fiy],x.e)
D.eNG=new B.y(3,6)
D.cvR=w([Q.lg,T.w1,S.aaX,F.VI,D.aTl,D.eNG],x.u)
D.hRB=new C.GX("Disco","A beat drives lights, washes and bursts",D.dvt,D.cvR)
D.fkm=new B.b7(["button",0.12,0.2,0])
D.fif=new B.b7(["delay",0.34,0.2,1])
D.fkl=new B.b7(["light",0.56,0.2,1])
D.fke=new B.b7(["delay",0.56,0.45,1])
D.fjE=new B.b7(["ball",0.34,0.6,0])
D.fiw=new B.b7(["delay",0.34,0.8,1])
D.fgQ=new B.b7(["burst",0.7,0.8,5])
D.cfI=w([D.fkm,D.fif,D.fkl,D.fke,D.fjE,D.fiw,D.fgQ],x.e)
D.ePX=new B.y(5,6)
D.dBF=w([Q.lg,T.w1,F.VH,F.VI,D.aTp,D.ePX],x.u)
D.hRC=new C.GX("Domino","Tap the button and watch it run down the line",D.cfI,D.dBF)
D.aDF=w([D.hRE,D.hRG,D.hRF,D.hRD,D.hRB,D.hRC],B.ar("N<GX>"))
D.dqa=w([0.05,0.15,0.25],x.n)
D.drb=w([1.5,3,4.5,9,12],x.n)
D.fc3=new B.b3("dice","Dice",A.o0)
D.fdl=new B.b3("coin","Coin",W.zY)
D.ffB=new B.b3("num","Number",A.xn)
D.drp=w([D.fc3,D.fdl,D.ffB],x.r)
D.drt=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aDL=w([A.bY,A.aQ,A.be,A.aH,A.bl,A.c2,A.cS,A.fW],x.O)
D.dsx=w([A.c2,A.aH,A.eE,A.be],x.O)
D.dtF=w([],x.h)
D.eEc=new C.eo("battery","Battery","\ud83d\udd0b",A.be,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eEi=new C.eo("solar","Solar panel","\u2600\ufe0f",A.bt,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eEX=new C.eo("crank","Hand crank","\ud83d\udd04",A.cS,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eEz=new C.eo("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eE4=new C.eo("buck","Step-down converter","\ud83d\udd3d",A.fW,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eEx=new C.eo("regulator","5 V regulator","\ud83e\uddca",A.bP,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eF1=new C.eo("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eEJ=new C.eo("ldr","Light sensor","\ud83c\udf1e",A.eE,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eEn=new C.eo("switch","Switch","\ud83c\udf9a\ufe0f",A.bl,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eEZ=new C.eo("fuse","Fuse","\ud83e\uddef",A.bY,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eDX=new C.eo("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fW,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eEK=new C.eo("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eEM=new C.eo("bulb","Light bulb","\ud83d\udca1",A.eE,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eEk=new C.eo("led","LED","\ud83d\udd34",A.aB,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eEo=new C.eo("motor","Motor","\u2699\ufe0f",A.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eEG=new C.eo("buzzer","Buzzer","\ud83d\udd14",A.c2,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eEd=new C.eo("heater","Heater","\ud83d\udd25",A.cS,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eEB=new C.eo("capacitor","Capacitor","\ud83e\udeab",A.ct,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eEt=new C.eo("radio","Radio","\ud83d\udcfb",A.oF,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eEq=new C.eo("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bc,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eE3=new C.eo("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eEa=new C.eo("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eEg=new C.eo("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eF3=new C.eo("speaker","Speaker","\ud83d\udd0a",A.c2,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eET=new C.eo("clock","Digital clock","\u23f0",A.be,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eEw=new C.eo("calculator","Calculator","\ud83e\uddee",A.Nf,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eE9=new C.eo("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.ct,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eF2=new C.eo("router","WiFi router","\ud83d\udcf6",A.fW,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eF5=new C.eo("siren","Siren","\ud83d\udea8",A.aB,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eE_=new C.eo("toycar","Toy car","\ud83d\ude97",A.cS,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eF6=new C.eo("kettle","Kettle","\ud83e\uded6",A.n1,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eE7=new C.eo("lamp","Desk lamp","\ud83e\ude94",A.eE,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eEj=new C.eo("lights","Party lights","\ud83c\udf84",A.oF,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eEu=new C.eo("fridge","Fridge","\ud83e\uddca",A.hj,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eE1=new C.eo("washer","Washing machine","\ud83e\udee7",A.ct,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eEU=new C.eo("blender","Blender","\ud83e\udd64",A.bY,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eEr=new C.eo("drone","Drone","\ud83d\ude81",A.bP,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eE6=new C.eo("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eEv=new C.eo("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eER=new C.eo("neon","Neon sign","\ud83e\udea7",A.c2,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eE2=new C.eo("microwave","Microwave","\ud83c\udf72",A.cS,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eEL=new C.eo("doorbell","Doorbell","\ud83d\udd14",A.bt,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eEf=new C.eo("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eEF=new C.eo("console","Game console","\ud83c\udfae",A.bl,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eEW=new C.eo("heartmon","Heart monitor","\ud83e\ude7a",A.hG,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eE0=new C.eo("aquarium","Aquarium","\ud83d\udc20",A.bc,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eEA=new C.eo("lighthouse","Lighthouse","\ud83d\uddfc",A.eE,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eEI=new C.eo("discoball","Disco ball","\ud83e\udea9",A.oF,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eF0=new C.eo("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eDZ=new C.eo("toaster","Toaster","\ud83c\udf5e",A.ec,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eF4=new C.eo("ledstrip","LED strip","\ud83c\udf08",A.c2,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eEQ=new C.eo("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eEC=new C.eo("hairdryer","Hair dryer","\ud83d\udca8",A.hY,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eEO=new C.eo("headphones","Headphones","\ud83c\udfa7",A.bl,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eE8=new C.eo("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eF_=new C.eo("tablet","iPad Pro M5","\ud83d\udcf2",A.ct,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eDW=new C.eo("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hG,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eEs=new C.eo("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eEl=new C.eo("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eEH=new C.eo("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wC,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eDY=new C.eo("iphonefold","iPhone Fold","\ud83d\udcf1",A.b2,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eEb=new C.eo("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.db,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eEY=new C.eo("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cC,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eED=new C.eo("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bi,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eEy=new C.eo("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c7,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eEP=new C.eo("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aB,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eEm=new C.eo("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.be,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eEE=new C.eo("honor","Honor Magic V5","\ud83d\udcf1",A.ct,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eEN=new C.eo("vivo","vivo X300 Pro","\ud83d\udcf1",A.cS,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eES=new C.eo("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eDV=new C.eo("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eEp=new C.eo("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cC,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eEh=new C.eo("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bc,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eE5=new C.eo("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eE,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eEe=new C.eo("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aB,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eEV=new C.eo("vision","Apple Vision Pro","\ud83e\udd7d",A.bl,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Ty=w([D.eEc,D.eEi,D.eEX,D.eEz,D.eE4,D.eEx,D.eF1,D.eEJ,D.eEn,D.eEZ,D.eDX,D.eEK,D.eEM,D.eEk,D.eEo,D.eEG,D.eEd,D.eEB,D.eEt,D.eEq,D.eE3,D.eEa,D.eEg,D.eF3,D.eET,D.eEw,D.eE9,D.eF2,D.eF5,D.eE_,D.eF6,D.eE7,D.eEj,D.eEu,D.eE1,D.eEU,D.eEr,D.eE6,D.eEv,D.eER,D.eE2,D.eEL,D.eEf,D.eEF,D.eEW,D.eE0,D.eEA,D.eEI,D.eF0,D.eDZ,D.eF4,D.eEQ,D.eEC,D.eEO,D.eE8,D.eF_,D.eDW,D.eEs,D.eEl,D.eEH,D.eDY,D.eEb,D.eEY,D.eED,D.eEy,D.eEP,D.eEm,D.eEE,D.eEN,D.eES,D.eDV,D.eEp,D.eEh,D.eE5,D.eEe,D.eEV],B.ar("N<eo>"))
D.duj=w([5,10,15,25,45,60],x.t)
D.duH=w([-0.045,0.03,-0.015],x.n)
D.aEd=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vH=w([0.05,0.2,0.35],x.n)
D.aEh=w([A.cX,A.iI,A.uN,A.Gy],x.O)
D.bbL=new B.aa(0,A.H,A.i_,A.dR,6)
D.dxE=w([D.bbL],x.V)
D.eLB=new B.y(0,"AND")
D.eMv=new B.y(1,"Adder")
D.eNa=new B.y(2,"Blinker")
D.eNH=new B.y(3,"Memory")
D.dyt=w([D.eLB,D.eMv,D.eNa,D.eNH],x.L)
D.aEr=w([-104,0,104],x.n)
D.aEt=w([-14,3],x.n)
D.dzt=w([-8,0,8],x.n)
D.aEB=w([-92,0,92],x.n)
D.dzX=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fnu=new C.vG("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fnB=new C.vG("Medium tank","Balanced.",0.35,1)
D.fnA=new C.vG("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.TN=w([D.fnu,D.fnB,D.fnA],x._)
D.oc=w([0.04,0.2,0.36],x.n)
D.aEN=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.ffa=new B.b3(D.b3R,"Fold",W.asx)
D.fe4=new B.b3(D.aeY,"Flip",A.Dz)
D.bTI=new B.a_(62889,"MaterialIcons",!1)
D.ffx=new B.b3(D.b3S,"Rise",D.bTI)
D.asK=new B.a_(983870,"MaterialIcons",!1)
D.fbo=new B.b3(D.aeZ,"Assemble",D.asK)
D.fbB=new B.b3(D.b3T,"Spin",D.arb)
D.fbv=new B.b3(D.b3U,"Pop",A.kk)
D.dBC=w([D.ffa,D.fe4,D.ffx,D.fbo,D.fbB,D.fbv],B.ar("N<+(Lt,m,a_)>"))
D.aES=w([A.c2,A.eE,A.bv,A.aH,A.bl,A.bY],x.O)
D.dC2=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dD8=w([3,4.5,5,6,9],x.n)
D.bcq=new B.aa(0,A.H,A.b7,A.J,16)
D.dDC=w([D.bcq],x.V)
D.h5_=new B.C("\ud83e\uddcd",null,T.LF,null,null,null,null,null,null,null,null,null)
D.ceF=new B.J4(5,null,null,A.bw,A.c2,null,null,null,null)
D.fuA=new B.a6(150,null,D.ceF,null)
D.fMY=new B.H(!0,A.ab,null,null,null,null,14,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8j=new B.C("Getting the body ready...",null,D.fMY,null,null,null,null,null,null,null,null,null)
D.h52=new B.C("Real 3D anatomy, kept on your phone",null,Ai.Bs,null,null,null,null,null,null,null,null,null)
D.dDF=w([D.h5_,A.aA,D.fuA,A.af,D.h8j,A.at,D.h52],x.p)
D.dEe=w(["solar","turbine","crank","pot"],x.s)
D.dEJ=w([0,0.35,0.75,1],x.n)
D.dGa=w(["volts","level","ohms","on"],x.s)
D.bob=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bzh=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dGe=w([A.akE,D.bob,A.lU,D.bzh],x.O)
D.dHN=w([A.jW,A.A6,A.zS,A.rc,A.DT,A.re,A.A4,A.nf,A.it,A.p_,A.he,A.ef,A.hP,A.ic,A.m0,A.kJ,A.rd,A.rh,A.lz,A.If,A.vu,A.Dy,A.Dw,A.QM,A.Ie,A.DI,A.Qq,A.arV,H.asG,A.kk],x.x)
D.eu5={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hJz=new C.yX("Switch",F.oX,A.bt,0,"Tap it to turn it ON or OFF.")
D.hJv=new C.yX("Blinker",A.ne,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hJw=new C.yX("AND",D.asK,A.ct,2,"ON only when BOTH inputs are ON.")
D.bVe=new B.a_(63671,"MaterialIcons",!1)
D.hJu=new C.yX("OR",D.bVe,A.bl,2,"ON when EITHER input is ON.")
D.hJx=new C.yX("XOR",Al.a41,A.c2,2,"ON when the inputs are DIFFERENT.")
D.hJr=new C.yX("NAND",A.vg,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bUi=new B.a_(63176,"MaterialIcons",!1)
D.hJs=new C.yX("NOR",D.bUi,A.fW,2,"ON only when BOTH inputs are OFF.")
D.hJt=new C.yX("NOT",X.DL,A.cS,1,"Flips the signal: ON becomes OFF.")
D.hJy=new C.yX("Light",A6.l7,A.eE,1,"Glows when its input is ON.")
D.hJA=new C.yX("Buzzer",R.oZ,A.bY,1,"Beeps while its input is ON.")
D.AK=new B.bl(D.eu5,[D.hJz,D.hJv,D.hJw,D.hJu,D.hJx,D.hJr,D.hJs,D.hJt,D.hJy,D.hJA],B.ar("bl<m,yX>"))
D.evT={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bc=new C.Ks(0,"tv")
D.fp5=new C.mi("Samsung Neo QLED 8K",D.Bc,F.yR,A.aH)
D.foW=new C.mi("LG OLED evo G5",D.Bc,A.ex,A.hG)
D.foN=new C.mi("Sony Bravia 9",D.Bc,A.rX,A.bu)
D.foR=new C.mi("Apple TV 4K",D.Bc,A.dS,A.bO)
D.foO=new C.mi("Bang and Olufsen Beovision",D.Bc,F.Cf,F.wC)
D.abh=new C.Ks(1,"iphone")
D.aUi=new C.mi("iPhone 18 Pro Max",D.abh,D.ama,A.cf)
D.Be=new C.Ks(3,"fold")
D.bzv=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fp0=new C.mi("iPhone Fold",D.Be,D.bzv,A.b2)
D.Bd=new C.Ks(2,"android")
D.fp1=new C.mi("Samsung Galaxy S26 Ultra",D.Bd,F.Nc,A.db)
D.brM=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.foU=new C.mi("Samsung Galaxy Z Fold7",D.Be,D.brM,A.cC)
D.foQ=new C.mi("Google Pixel 10 Pro XL",D.Bd,A.cX,A.bi)
D.foY=new C.mi("Xiaomi 16 Ultra",D.Bd,A.ir,A.c7)
D.foT=new C.mi("Huawei Mate 80 Pro Max",D.Bd,A.er,A.aB)
D.foP=new C.mi("OPPO Find X9 Ultra",D.Bd,A.eh,A.be)
D.fp7=new C.mi("Honor Magic V5",D.Be,A.dg,A.ct)
D.foV=new C.mi("vivo X300 Pro",D.Bd,A.fV,A.cS)
D.aUj=new C.Ks(4,"tablet")
D.fp_=new C.mi("iPad Pro M5",D.aUj,A.cX,A.aH)
D.abi=new C.Ks(5,"reader")
D.fp8=new C.mi("Kindle Scribe",D.abi,A.cQ,A.bu)
D.xO=new C.Ks(6,"computer")
D.foZ=new C.mi("MacBook Pro M5 Max",D.xO,A.cX,A.cf)
D.fp4=new C.mi("iMac 32 inch",D.xO,A.bO,A.cC)
D.foX=new C.mi("Pro Display XDR 8K",D.xO,A.ir,A.bc)
D.foS=new C.mi("Sony Laser Projector",D.xO,A.cu,A.eE)
D.fp2=new C.mi("Luxury car touchscreen",D.xO,M.n3,A.aB)
D.fp6=new C.mi("Apple Vision Pro",D.xO,A.cv,A.bl)
D.fp3=new C.mi("Apple Watch Ultra",D.Be,F.Cf,A.bv)
D.mC=new B.bl(D.evT,[D.fp5,D.foW,D.foN,D.foR,D.foO,D.aUi,D.fp0,D.fp1,D.foU,D.foQ,D.foY,D.foT,D.foP,D.fp7,D.foV,D.fp_,D.fp8,D.foZ,D.fp4,D.foX,D.foS,D.fp2,D.fp6,D.fp3],B.ar("bl<m,mi>"))
D.d6h=w([A.z],x.M)
D.d6M=w([A.ay,A.aC],x.M)
D.dhq=w([A.ay,A.z,A.aC],x.M)
D.dj8=w([A.ay,A.lL,A.z,A.lM,A.aC],x.M)
D.dyp=w([A.ay,A.lL,A.a5,A.a9,A.lM,A.aC],x.M)
D.dMT=new B.cV([1,D.d6h,2,D.d6M,3,D.dhq,4,A.aFr,5,D.dj8,6,D.dyp],B.ar("cV<F,ai<de>>"))
D.ewH={Calm:0,Box:1,Sleep:2}
D.cNK=w([4,2,6,0],x.n)
D.cNR=w([4,4,4,4],x.n)
D.cNS=w([4,7,8,0],x.n)
D.Ug=new B.bl(D.ewH,[D.cNK,D.cNR,D.cNS],B.ar("bl<m,ai<G>>"))
D.euh={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yo=new C.a28(0,"source")
D.dix=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hQh=new C.qJ("Clock",A.ne,D.yo,A.bv,D.dix)
D.hQd=new C.qJ("Button",A.DO,D.yo,A.aQ,A.Z)
D.dDl=w(["random","quick","slow"],x.s)
D.hQo=new C.qJ("Dice",A.o0,D.yo,A.c2,D.dDl)
D.bUS=new B.a_(63484,"MaterialIcons",!1)
D.FY=new C.a28(1,"logic")
D.dIJ=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hQk=new C.qJ("Delay",D.bUS,D.FY,A.ct,D.dIJ)
D.dur=w(["fast","mid","slow"],x.s)
D.hQp=new C.qJ("Echo",A.asa,D.FY,A.bl,D.dur)
D.hQm=new C.qJ("Every 2nd",X.DL,D.FY,A.fW,A.Z)
D.bUy=new B.a_(63309,"MaterialIcons",!1)
D.hQj=new C.qJ("Every 3rd",D.bUy,D.FY,A.aH,A.Z)
D.cf_=w(["50%","25%","75%"],x.s)
D.hQr=new C.qJ("Chance",Aa.asM,D.FY,A.cS,D.cf_)
D.rM=new C.a28(2,"out")
D.hQf=new C.qJ("Light",A6.l7,D.rM,A.eE,A.Z)
D.hQg=new C.qJ("Burst",A.kk,D.rM,A.c2,A.Z)
D.hQe=new C.qJ("Ripple",A.Aa,D.rM,A.bc,A.Z)
D.hQn=new C.qJ("Ball",A.asn,D.rM,A.cS,A.Z)
D.hQl=new C.qJ("Comet",A.p_,D.rM,A.bl,A.Z)
D.bWk=new B.a_(983669,"MaterialIcons",!1)
D.hQq=new C.qJ("Shake",D.bWk,D.rM,A.bY,A.Z)
D.hQs=new C.qJ("Pop",A.Du,D.rM,A.be,A.Z)
D.hQi=new C.qJ("Wash",A.Qu,D.rM,A.pA,A.Z)
D.ni=new B.bl(D.euh,[D.hQh,D.hQd,D.hQo,D.hQk,D.hQp,D.hQm,D.hQj,D.hQr,D.hQf,D.hQg,D.hQe,D.hQn,D.hQl,D.hQq,D.hQs,D.hQi],B.ar("bl<m,qJ>"))
D.euG={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bCi=new C.h2(20,4,13,!1)
D.bCJ=new C.h2(14,5,13.5,!1)
D.bCA=new C.h2(9,2.4,10,!1)
D.bCO=new C.h2(7,5,12.5,!1)
D.bCD=new C.h2(8,3.5,12,!1)
D.bCe=new C.h2(15,2,6,!1)
D.bCM=new C.h2(45,6,13.5,!0)
D.bCu=new C.h2(10,8,13.5,!1)
D.bCm=new C.h2(25,3,12,!0)
D.bCs=new C.h2(35,4,12,!0)
D.bCt=new C.h2(40,4.5,9.5,!0)
D.bCv=new C.h2(55,3,9,!0)
D.bCf=new C.h2(18,3,9,!1)
D.bCL=new C.h2(22,4,13.5,!1)
D.bCE=new C.h2(16,5,13.5,!1)
D.bCq=new C.h2(30,4,9,!0)
D.bCX=new C.h2(5,3.5,13,!1)
D.bCy=new C.h2(25,3,13.5,!0)
D.bCH=new C.h2(14,2.5,9,!1)
D.bCx=new C.h2(6,6,13,!1)
D.bCP=new C.h2(30,1.2,5,!0)
D.bCW=new C.h2(35,3,4.5,!0)
D.bCS=new C.h2(20,4.5,7.5,!0)
D.bCw=new C.h2(55,5.5,13.5,!0)
D.bCd=new C.h2(45,5.5,13.5,!0)
D.bCI=new C.h2(40,5.5,13.5,!0)
D.bCV=new C.h2(60,6,13.5,!0)
D.amG=new C.h2(28,4,7,!0)
D.Hr=new C.h2(25,4,7,!0)
D.bCp=new C.h2(30,4,7,!0)
D.bCk=new C.h2(22,4,7,!0)
D.bCl=new C.h2(24,4,7,!0)
D.bCz=new C.h2(60,3,5.5,!0)
D.bCg=new C.h2(18,9,14,!0)
D.bCn=new C.h2(25,9,14,!0)
D.amH=new C.h2(30,8,14,!0)
D.bCj=new C.h2(20,8,14,!0)
D.bCr=new C.h2(30,9,14,!0)
D.bCQ=new C.h2(22,5,9.5,!0)
D.bCh=new C.h2(30,2.5,10.5,!0)
D.bCF=new C.h2(50,5.5,13.5,!0)
D.bCU=new C.h2(12,2,9.5,!1)
D.bCC=new C.h2(16,1.3,9.5,!0)
D.bCN=new C.h2(40,2.5,7,!0)
D.bCT=new C.h2(60,1.2,4.8,!0)
D.bCR=new C.h2(18,5,13.5,!0)
D.bCK=new C.h2(8,2,9.5,!1)
D.bCB=new C.h2(12,2.5,8,!1)
D.bCo=new C.h2(20,3.5,13.5,!0)
D.bCG=new C.h2(3.5,3,13,!1)
D.AL=new B.bl(D.euG,[D.bCi,D.bCJ,D.bCA,D.bCO,D.bCD,D.bCe,D.bCM,D.bCu,D.bCm,D.bCs,D.bCt,D.bCv,D.bCf,D.bCL,D.bCE,D.bCq,D.bCX,D.bCy,D.bCH,D.bCx,D.bCP,D.bCW,D.bCS,D.bCw,D.bCd,D.bCI,D.bCV,D.amG,D.Hr,D.bCp,D.Hr,D.bCk,D.Hr,D.bCl,D.amG,D.Hr,D.bCz,D.bCg,D.bCn,D.amH,D.bCj,D.bCr,D.bCQ,D.bCh,D.bCF,D.bCU,D.bCC,D.bCN,D.bCT,D.Hr,D.amH,D.bCR,D.bCK,D.bCB,D.bCo,D.bCG],B.ar("bl<m,h2>"))
D.eue={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.faT=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ePU=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ePP=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f1Q=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f2O=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f1M=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eNQ=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f_A=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fb0=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f3b=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eTr=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eNu=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eSq=new B.y("Movement","They pull your legs together and help you balance.")
D.eUr=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eQ2=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f8e=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f9r=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f_k=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f99=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eYO=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f3j=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eNB=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eUP=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f2Y=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eZb=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f9i=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f1f=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eNO=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f3W=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f7Q=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.f5Q=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eLO=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f0X=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f11=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eVA=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eQk=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eUd=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f_O=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.f6J=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.faY=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f3g=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eLt=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f0_=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eMn=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.f6Z=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f8a=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f0s=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f7e=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eND=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f8O=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eRM=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.f6l=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eVe=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eZ5=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f3C=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f8Y=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f8Q=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f8U=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eZE=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f4A=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.f5N=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f8A=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f0r=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eXk=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eW2=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f0R=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f3v=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eXU=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eYB=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eSa=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f86=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eT0=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eMk=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eVz=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eMf=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eQQ=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eVE=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eT9=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f3S=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eUu=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.faE=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eWc=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eZw=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f1n=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eTj=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eT2=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dO2=new B.bl(D.eue,[D.faT,D.ePU,D.ePP,D.f1Q,D.f2O,D.f1M,D.eNQ,D.f_A,D.fb0,D.f3b,D.eTr,D.eNu,D.eSq,D.eUr,D.eQ2,D.f8e,D.f9r,D.f_k,D.f99,D.eYO,D.f3j,D.eNB,D.eUP,D.f2Y,D.eZb,D.f9i,D.f1f,D.eNO,D.f3W,D.f7Q,D.f5Q,D.eLO,D.f0X,D.f11,D.eVA,D.eQk,D.eUd,D.f_O,D.f6J,D.faY,D.f3g,D.eLt,D.f0_,D.eMn,D.f6Z,D.f8a,D.f0s,D.f7e,D.eND,D.f8O,D.eRM,D.f6l,D.eVe,D.eZ5,D.f3C,D.f8Y,D.f8Q,D.f8U,D.eZE,D.f4A,D.f5N,D.f8A,D.f0r,D.eXk,D.eW2,D.f0R,D.f3v,D.eXU,D.eYB,D.eSa,D.f86,D.eT0,D.eMk,D.eVz,D.eMf,D.eQQ,D.eVE,D.eT9,D.f3S,D.eUu,D.faE,D.eWc,D.eZw,D.f1n,D.eTj,D.eT2],B.ar("bl<m,+(m,m)>"))
D.dWW=new C.W3(null)
D.dX8=new C.W4(null)
D.dZc=new C.Wa(null)
D.e_0=new C.WL(null)
D.e_4=new C.WM(null)
D.e_D=new C.WU(null)
D.e3y=new C.Xv(null)
D.e4v=new C.Xw(null)
D.e8I=new C.XB(null)
D.eoB=new C.XC(null)
D.eoE=new C.XH(null)
D.eqO=new C.Y0(null)
D.eqP=new C.aa9(null)
D.esS=new C.Y9(null)
D.ewV=new B.r(0,118)
D.ewW=new B.r(0,13)
D.ewX=new B.r(0,17)
D.ex_=new B.r(0,330)
D.ex6=new B.r(0,-17)
D.ex7=new B.r(0,-18)
D.ex8=new B.r(0,-19)
D.exa=new B.r(0,-28)
D.exc=new B.r(0,-31)
D.exd=new B.r(0,-32)
D.exj=new B.r(-9.5,-11)
D.exm=new B.r(10,20)
D.exp=new B.r(10,-13)
D.exr=new B.r(10,-22)
D.exs=new B.r(10,-4)
D.exw=new B.r(11,0)
D.aa5=new B.r(11,8)
D.exC=new B.r(12,2)
D.exD=new B.r(14,0)
D.exE=new B.r(14,12)
D.aNP=new B.r(14,8)
D.exF=new B.r(14,-17)
D.aNR=new B.r(14,-3)
D.aNS=new B.r(14,-4)
D.exI=new B.r(15,0)
D.exJ=new B.r(15,-12)
D.exM=new B.r(16,-8)
D.exN=new B.r(18,14)
D.aNY=new B.r(20,0)
D.exV=new B.r(20,15)
D.exW=new B.r(20,-3)
D.exX=new B.r(21,8)
D.exY=new B.r(21,-36)
D.ey1=new B.r(22,10)
D.aO_=new B.r(22,8)
D.ey2=new B.r(22,-25)
D.ey3=new B.r(24,0)
D.ey4=new B.r(24,2)
D.ey7=new B.r(24,-18)
D.ey8=new B.r(24,-22)
D.eyc=new B.r(25,8)
D.eyd=new B.r(26,0)
D.eyh=new B.r(28,-30)
D.eyo=new B.r(30,18)
D.eyp=new B.r(30,2)
D.eys=new B.r(31,19)
D.eyu=new B.r(32,0)
D.aO3=new B.r(34,0)
D.aO4=new B.r(34,-32)
D.Kp=new B.r(36,0)
D.eyH=new B.r(3,-1)
D.eyK=new B.r(40,3)
D.eyY=new B.r(4,11)
D.ez0=new B.r(4,-2)
D.ez4=new B.r(5,0)
D.ez5=new B.r(5,17)
D.ez6=new B.r(5,6)
D.ezb=new B.r(6,11)
D.ezd=new B.r(7,-19)
D.ezj=new B.r(8,7)
D.ezk=new B.r(8,-10)
D.ezl=new B.r(8,-14)
D.aO9=new B.r(9,0)
D.ezv=new B.r(-20.5,-17.6)
D.ezy=new B.r(-2.6,-1)
D.ezH=new B.r(2.6,1)
D.ezP=new B.r(-9,12.2)
D.eAs=new B.r(-10,12)
D.aOg=new B.r(-10,4)
D.eAw=new B.r(-11,0)
D.eAy=new B.r(-11,-34)
D.eAC=new B.r(-12,-5)
D.eAD=new B.r(-14,0)
D.eAE=new B.r(-14,13)
D.eAF=new B.r(-14,-19)
D.eAH=new B.r(-14,-23)
D.eAI=new B.r(-15,6)
D.eAL=new B.r(-16,14)
D.eAN=new B.r(-16,-8)
D.eAO=new B.r(-17,10)
D.eAP=new B.r(-17,-18)
D.eAQ=new B.r(-17,-8)
D.eAS=new B.r(-18,20)
D.eAT=new B.r(-18,-9)
D.aOj=new B.r(-20,0)
D.eAV=new B.r(-20,16)
D.eAW=new B.r(-20,-9)
D.Vc=new B.r(-22,8)
D.eAX=new B.r(-22,-10)
D.eAY=new B.r(-24,10)
D.eAZ=new B.r(-24,11)
D.eB_=new B.r(-24,14)
D.eB0=new B.r(-24,-22)
D.eB2=new B.r(-25,-11)
D.eB3=new B.r(-26,0)
D.eB4=new B.r(-26,-18)
D.eB5=new B.r(-27,-24)
D.eB6=new B.r(-28,-36)
D.eB7=new B.r(-2,9)
D.eB8=new B.r(-2,-10)
D.eB9=new B.r(-2,-20)
D.eBc=new B.r(-2,-9)
D.eBe=new B.r(-32,0)
D.aOl=new B.r(-34,0)
D.eBj=new B.r(-40,3)
D.eBl=new B.r(-4,11)
D.eBm=new B.r(-4,-17)
D.eBn=new B.r(-4,-2)
D.eBr=new B.r(-5,0)
D.eBs=new B.r(-5,20)
D.eBt=new B.r(-5,6)
D.eBu=new B.r(-6,6)
D.eBv=new B.r(-6,-42)
D.aOn=new B.r(-7,-19)
D.eBx=new B.r(-7,-24)
D.eBy=new B.r(-8,-1)
D.eBB=new B.r(-8,-9)
D.aae=new B.r(-9,0)
D.eBC=new B.r(-9,1)
D.eBE=new B.r(-9,-23)
D.fX9=new B.C("Thinking\u2026",null,O.hF,null,null,null,null,null,null,null,null,null)
D.eCE=new B.D(A.jy,D.fX9,null)
D.hd9=new B.C("Start from a ready-made board",null,A.fP,null,null,null,null,null,null,null,null,null)
D.eCS=new B.D(A5.wX,D.hd9,null)
D.bKq=new B.R(4,0,4,14)
D.fSb=new B.H(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYa=new B.C("Games and little helpers for a spare minute.",null,D.fSb,null,null,null,null,null,null,null,null,null)
D.eD4=new B.D(D.bKq,D.fYa,null)
D.dv5=w([A.hW,A.bj],x.O)
D.eKf=new B.bT(A.z,0.5,A.x,null,0,D.dv5,null,null)
D.eKg=new B.bT(A.z,0.5,A.x,null,0,D.aF8,null,null)
D.dl9=w([A.c,A.bP],x.O)
D.eKi=new B.bT(A.z,0.5,A.x,null,0,D.dl9,null,null)
D.dEv=w([A.bO,A.cv],x.O)
D.aTe=new B.bT(A.z,0.5,A.x,null,0,D.dEv,null,null)
D.cXY=w([A.c,A.bO],x.O)
D.eKn=new B.bT(A.mO,0.5,A.x,null,0,D.cXY,null,null)
D.bzz=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dCn=w([A.fw,D.bzz],x.O)
D.eKs=new B.bT(A.mO,0.5,A.x,null,0,D.dCn,null,null)
D.cQX=w([A.cX,A.cu],x.O)
D.eKt=new B.bT(A.z,0.5,A.x,null,0,D.cQX,null,null)
D.d51=w([A.h8,A.aQ,A.d9],x.O)
D.eKw=new B.bT(A.mO,0.5,A.x,null,0,D.d51,null,null)
D.dvP=w([A.cv,M.n3],x.O)
D.eKx=new B.bT(A.mO,0.5,A.x,null,0,D.dvP,null,null)
D.eKC=new B.bT(A.z,0.5,A.x,null,0,D.aBj,null,null)
D.dFp=w([A.cv,A.il],x.O)
D.eKK=new B.bT(A.z,0.5,A.x,null,0,D.dFp,null,null)
D.deP=w([A.iI,A.bj],x.O)
D.eKN=new B.bT(A.mO,0.5,A.x,null,0,D.deP,null,null)
D.aTj=new B.aP(9,9)
D.eKT=new B.aP(1.4,1.4)
D.eKV=new B.aP(2.5,2.5)
D.flC=new B.a3(10,-8,18,-2)
D.flD=new B.a3(14,-14,20,14)
D.flF=new B.a3(20,-2,30,2)
D.flK=new B.a3(4,-13,30,-3)
D.flQ=new B.a3(8,-7,12,7)
D.fm1=new B.a3(-12,12,12,19)
D.fm2=new B.a3(-12,14,12,22)
D.fm3=new B.a3(-12,-22,12,8)
D.fm4=new B.a3(-12,-25,12,19)
D.fm5=new B.a3(-12,-26,12,-6)
D.fm6=new B.a3(-12,-4,12,14)
D.fm8=new B.a3(-14,20,14,24)
D.fm9=new B.a3(-14,6,14,10)
D.fma=new B.a3(-14,-17,14,15)
D.fmb=new B.a3(-14,-26,14,18)
D.fmc=new B.a3(-14,-26,14,-14)
D.fmd=new B.a3(-14,-4,14,20)
D.fmf=new B.a3(-15,-29,15,25)
D.fmg=new B.a3(-16,-16,16,16)
D.fmj=new B.a3(-16,-22,-9,18)
D.fmk=new B.a3(-16,-24,16,-10)
D.fmm=new B.a3(-16,-2,16,20)
D.fmo=new B.a3(-18,20,18,24)
D.fmp=new B.a3(-18,-18,18,20)
D.fmq=new B.a3(-20,12,20,22)
D.fmr=new B.a3(-20,-28,20,26)
D.fms=new B.a3(-22,15,22,19)
D.aTZ=new B.a3(-22,-26,22,24)
D.fmu=new B.a3(-24,-12,10,22)
D.fmv=new B.a3(-24,-14,22,8)
D.fmw=new B.a3(-24,-6,24,20)
D.aU_=new B.a3(-24,-9,24,9)
D.fmx=new B.a3(-25,14,25,19)
D.fmy=new B.a3(-26,-14,14,8)
D.fmz=new B.a3(-26,-4,26,20)
D.fmA=new B.a3(-26,-6,4,6)
D.aU0=new B.a3(-28,-13,28,13)
D.fmB=new B.a3(-28,-16,28,16)
D.fmC=new B.a3(-28,-16,28,8)
D.fmD=new B.a3(-28,-22,28,22)
D.fmE=new B.a3(-29,-11,29,11)
D.fmF=new B.a3(-30,-12,30,14)
D.fmG=new B.a3(-30,-14,0,14)
D.fmH=new B.a3(-30,-18,30,20)
D.fmI=new B.a3(-30,-28,30,14)
D.fmJ=new B.a3(-30,-2,30,18)
D.fmK=new B.a3(-30,-4,30,18)
D.fmL=new B.a3(-32,-17,32,17)
D.fmM=new B.a3(-32,-28,32,18)
D.fmN=new B.a3(-33,-21,33,17)
D.fmO=new B.a3(-34,0,34,10)
D.fmP=new B.a3(-34,14,34,26)
D.ab8=new B.a3(-34,-18,34,18)
D.fmQ=new B.a3(-36,-24,36,20)
D.fmR=new B.a3(-38,-22,38,22)
D.fmT=new B.a3(-3,12,3,22)
D.fmU=new B.a3(-3,5,3,15)
D.fmY=new B.a3(-46,-34,46,28)
D.fn_=new B.a3(-48,-3,48,3)
D.fn2=new B.a3(-6,18,24,24)
D.fn3=new B.a3(-6,5,6,12)
D.fn4=new B.a3(-6,-22,6,-15)
D.fn8=new B.a3(-9,-16,9,22)
D.fn9=new B.a3(-4.5,-24,4.5,-21.2)
D.fnb=new B.a3(14,-9,17.5,9)
D.ew3={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aV7=new B.db(D.ew3,5,x.Q)
D.evv={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fqO=new B.db(D.evv,10,x.Q)
D.fta=new B.av(24,44)
D.fty=new B.av(54,38)
D.ftE=new B.av(66,38)
D.bh6=new B.fp(2,null,null,null,null,A.bl,null,null,null,null)
D.fuI=new B.a6(16,16,D.bh6,null)
D.aWb=new B.hY(3,12,12,0.82,null)
D.fHz=new B.H(!0,A.wy,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC_=new B.eD("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cV,null,null,null,null,null,null,D.fHz)
D.fMM=new B.H(!0,A.kW,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC5=new B.eD("AI",null,null,A.cV,null,null,null,null,null,null,D.fMM)
D.fCn=new B.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCU=new B.H(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDj=new B.H(!0,A.ct,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEa=new B.H(!0,A.c,null,null,null,null,13.5,A.F,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEG=new B.H(!0,A.aR,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frz=new B.cX(A.i_,A.dR,6)
D.don=w([D.frz],B.ar("N<cX>"))
D.fFF=new B.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.don,null,null,null)
D.fFK=new B.H(!0,A.eD,null,null,null,null,12.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFP=new B.H(!0,A.bV,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new B.H(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGy=new B.H(!0,A.aF,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHv=new B.H(!0,A.bV,null,null,null,null,9.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHD=new B.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIa=new B.H(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIG=new B.H(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIJ=new B.H(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aFu,null,null,null)
D.fIQ=new B.H(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJA=new B.H(!0,A.bC,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKI=new B.H(!0,A.uU,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLl=new B.H(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLu=new B.H(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMh=new B.H(!0,A.n4,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMs=new B.H(!0,A.cv,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYn=new B.H(!0,A.c,null,null,null,null,9.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNE=new B.H(!0,A.iU,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNY=new B.H(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOv=new B.H(!0,A.be,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ2=new B.H(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQz=new B.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQQ=new B.H(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRd=new B.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRg=new B.H(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSs=new B.H(!0,A.uU,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSP=new B.H(!0,A.be,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFS=new B.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTd=new B.C("\u26a0\ufe0f ",null,D.fFS,null,null,null,null,null,null,null,null,null)
D.fTq=new B.C("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.Bu,null,null,null,null,null,null,null,null,null)
D.fV5=new B.C("Pick one, then change it and see what happens.",null,A3.Bu,null,null,null,null,null,null,null,null,null)
D.fH1=new B.H(!0,A.ab,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW6=new B.C("What do you want to invent? Type it below, or tap an idea.",null,D.fH1,null,null,null,null,null,null,null,null,null)
D.fLg=new B.H(!0,A.bY,null,null,null,null,12.5,A.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWD=new B.C("Burnt out! Press Repair.",null,D.fLg,null,null,null,null,null,null,null,null,null)
D.fXL=new B.C("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fYo=new B.C("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fZ1=new B.C("Make it yours",null,A.jm,null,null,null,null,null,null,null,null,null)
D.h1f=new B.C("5G",null,A4.aXJ,null,null,null,null,null,null,null,null,null)
D.h2f=new B.C("Pick how big the screen is on the board",null,O.hF,null,null,null,null,null,null,null,null,null)
D.fOf=new B.H(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2r=new B.C("WHAT HAPPENS",null,D.fOf,null,null,null,null,null,null,null,null,null)
D.h4d=new B.C("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h4U=new B.C("Change the words and pictures on the three slabs.",null,A3.Bu,null,null,null,null,null,null,null,null,null)
D.h56=new B.C("All the parts and wires will be removed.",null,A.hE,null,null,null,null,null,null,null,null,null)
D.h5r=new B.C("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.h60=new B.C("Tap the crank on the board again and again to spin it faster.",null,O.hF,null,null,null,null,null,null,null,null,null)
D.h7f=new B.C("\ud83c\udfaf Challenges",null,A.dn,null,null,null,null,null,null,null,null,null)
D.h7M=new B.C("Remove this part",null,A0.aXj,null,null,null,null,null,null,null,null,null)
D.h85=new B.C("Clear the board?",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fNF=new B.H(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8n=new B.C("How the Lab works",null,D.fNF,null,null,null,null,null,null,null,null,null)
D.fEn=new B.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8I=new B.C("Electronics Lab",null,D.fEn,null,null,null,null,A.a2,null,1,null,null)
D.h8M=new B.C("?",null,S.aYT,null,null,null,null,null,null,null,null,null)
D.ha7=new B.C("Ready-made circuits",null,A.dn,null,null,null,null,null,null,null,null,null)
D.haN=new B.C("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,O.hF,null,null,null,null,null,null,null,null,null)
D.fQV=new B.H(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hej=new B.C("\u26a0 There is no air here, so a parachute will not work.",null,D.fQV,null,null,null,null,null,null,null,null,null)
D.hfu=new B.C("Download the scene (GIF)",null,A.cG,null,null,null,null,null,null,null,null,null)
D.hfx=new B.C("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A0.aXh,null,null,null,null,null,null,null,null,null)
D.hg2=new B.C("NGMY",null,A.w7,null,null,null,null,null,null,null,null,null)
D.hgf=new B.C("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ak.WU,null,null,null,null,null,null,null,null,null)
D.hgE=new B.C("Tap it to change its setting. Drag from the right dot to connect.",null,A.m9,null,null,null,null,null,null,null,null,null)
D.hhL=new B.C("TOOLBOX",null,Ah.acy,null,null,null,null,null,null,null,null,null)
D.hGe=new B.bf("electronics-part-card",x.W)
D.hGg=new B.bf("device-learn-more",x.W)
D.hGm=new B.bf("device-remote",x.W)
D.hGr=new B.bf("device-picture",x.W)
D.hGW=new B.bf("electronics-part-about",x.W)
D.hH2=new B.bf("body-loading",x.W)
D.hH8=new B.bf("device-fullscreen",x.W)
D.hHv=new B.bf("core-protocol-back",x.W)
D.hHA=new B.bf("core-protocol-title-frame",x.W)})();(function staticFields(){$.hD_=null
$.hCW=null
$.hCX=null
$.hJI=0
$.icx=B.S(x.N,B.ar("j8"))
$.id5=B.S(x.N,B.ar("j8"))
$.aQE=B.S(x.N,B.ar("j8"))
$.hFJ=A.az})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iKT","bIN",()=>{var u="led"
return B.a([C.aB1("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fyO(),u),C.aB1("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fyP(),u),C.aB1("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fyQ(),u),C.aB1("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fyX(),u),C.aB1("Not both","Make the light go OFF only when both switches are ON.",2,new C.fyY(),u),C.aB1("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fyZ(),"buzzer")],B.ar("N<beB>"))})
w($,"iLk","bIO",()=>B.a([C.RE("UNIVERSE","Earth, space and gravity",A.QP,A.aH,new C.fze()),C.RE("ELECTRONICS LAB","Batteries, wires, real circuits",Ar.vj,A.aH,new C.fzf()),C.RE("DISCOVERY LAB","Body Explorer: a real 3D human",D.bTL,A.be,new C.fzg()),C.RE("TOOLBOX","Converter, clock, games",H.arn,A.cS,new C.fzh()),C.RE("REACTION LAB","Wire parts together",A.DS,A.bv,new C.fzi()),C.RE("SPARK PAINTER","Paint with light",A.Id,A.c2,new C.fzj()),C.RE("ROCKET LANDER","Land softly on the pad",A.p_,A.aH,new C.fzk()),C.RE("TITLE ANIMATOR","Make a moving title",A.xo,A.bt,new C.fzl()),C.RE("CIRCUIT LAB","Connect logic, learn it",A.a4r,A.ct,new C.fzm())],B.ar("N<bx0>")))
w($,"iN7","qS",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.Ty[u]
s.n(0,t.a,t)}return s})
v($,"ih8","hSF",()=>B.apI(0))
w($,"iKB","hSG",()=>{var u=B.crE()
u.sez(0,A.c.j(0.06))
u.c=2.2
u.d=A.bF
return u})
w($,"iKU","ajV",()=>B.a([C.GI("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fz_()),C.GI("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fz0()),C.GI("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fz1()),C.GI("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fz2()),C.GI("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fz3()),C.GI("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fyR()),C.GI("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fyS()),C.GI("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fyT()),C.GI("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fyU()),C.GI("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fyV()),C.GI("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fyW())],B.ar("N<beC>")))
w($,"iLm","hT9",()=>B.a([C.a2F("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c7,new C.fzu()),C.a2F("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bY,A.bE,new C.fzv()),C.a2F("Breathe","Calm down in a minute","\ud83e\udee7",A.fW,A.cC,new C.fzw()),C.a2F("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b2,new C.fzx()),C.a2F("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cf,new C.fzy()),C.a2F("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bt,A.bi,new C.fzz()),C.a2F("Tip & Split","Share the bill","\ud83e\uddfe",A.be,A.b5,new C.fzA()),C.a2F("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bl,A.aD,new C.fzB())],B.ar("N<byk>")))})()};
(a=>{a["W2OO3VuhOD23jVLg/Og4EIPwM9s="]=a.current})($__dart_deferred_initializers__);