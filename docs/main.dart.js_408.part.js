((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,U,V,L,W,X,Y,M,N,O,P,I,Q,Z,A_,A0,A1,A2,R,S,B={bqS:function bqS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},RN:function RN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Yi:function Yi(d){this.a=d},bpZ:function bpZ(d,e,f,g,h,i,j,k){var _=this
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
_.bw$=j
_.ab$=k
_.c=_.a=null},eUN:function eUN(d){this.a=d},eUL:function eUL(d){this.a=d},eUM:function eUM(){},eUo:function eUo(){},eUn:function eUn(){},eUx:function eUx(d,e){this.a=d
this.b=e},eUz:function eUz(d){this.a=d},eUD:function eUD(d){this.a=d},eUy:function eUy(d){this.a=d},eUE:function eUE(d){this.a=d},eUF:function eUF(d){this.a=d},eUG:function eUG(d,e){this.a=d
this.b=e},eUw:function eUw(d,e){this.a=d
this.b=e},eUH:function eUH(d){this.a=d},eUv:function eUv(d){this.a=d},eUI:function eUI(d,e){this.a=d
this.b=e},eUu:function eUu(d,e){this.a=d
this.b=e},eUJ:function eUJ(d){this.a=d},eUt:function eUt(d,e){this.a=d
this.b=e},eUK:function eUK(d){this.a=d},eUs:function eUs(d){this.a=d},eUA:function eUA(d){this.a=d},eUr:function eUr(d){this.a=d},eUB:function eUB(d){this.a=d},eUq:function eUq(d){this.a=d},eUC:function eUC(d,e){this.a=d
this.b=e},eUp:function eUp(d,e){this.a=d
this.b=e},bxJ:function bxJ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},aQs:function aQs(){},
m3(d,e,f,g,h,i){return new B.bbF(h,d,f,g,i,e,null)},
hWm(d,e,f,g){var x=null
return C.cf(x,x,!0,x,new B.hiF(g,e,f),d,x,!0,!0,y.H)},
jh(d,e,f,g,h,i,j){return new B.bbG(f,j,i,h,g,d,e,null)},
v_(d,e,f){return B.iLw(d,e,f)},
iLw(d,e,f){var x=0,w=C.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$v_=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
o=$.aS.bl$.x.h(0,e)
o=o==null?null:o.gbf()
s=y.W.a(o)
if(s==null){x=1
break}x=7
return C.b(s.lF(2),$async$v_)
case 7:r=h
x=8
return C.b(r.hs(A.hr),$async$v_)
case 8:q=h
if(q==null){x=1
break}p=J.eU(A.dM.gaS(q))
x=9
return C.b(C.ayK(C.a([C.cKA(p,"image/png",f+".png")],y.u),null,"Made in NGMY Core Protocol"),$async$v_)
case 9:u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.M(y.J).f.T(D.aXO)
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$v_,w)},
mR(d,e,f,g){var x,w=$.avm
if(w==="music")return E.dI(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(w==="space"){w=Math.pow(2,e/12)
x=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dI(261.63*w,x,f,0,g,"sine")}return B.hon(w,e,f,g)},
hon(d,e,f,g){var x="tri",w="sine",v="noise",u=261.63*Math.pow(2,A.n.D(e,-12,36)/12),t=Math.min(f,260)
switch(d){case"tech":return E.dI(u*2,"",Math.min(t,110),0,g*0.45,"square")
case"sparkle":return E.dI(u*2.5,"",130,-0.35,g*0.6,x)
case"bounce":return E.dI(140+A.n.F(e,12)*9,"",150,0.9,g,w)
case"bubble":return E.dI(260+A.n.F(e,12)*22,"",120,-0.55,g*0.85,w)
case"pop":E.dI(u,"",160,-0.7,g*0.4,x)
return E.dI(900,"",90,0,g*0.45,v)
case"zap":return E.dI(u*3,"",150,1.6,g*0.4,"square")
case"click":return E.dI(2600+A.n.F(e,7)*180,"",30,0,g*0.5,v)
case"whoosh":E.dI(320,"",220,-0.7,g*0.35,w)
return E.dI(1500,"",200,0,g*0.22,v)
case"organic":return E.dI(85+A.n.F(e,12)*5,"",190,1.1,g,w)
case"lab":return E.dI(u*1.6,"",140,-0.3,g*0.55,x)
default:return E.dI(u,"",t,0,g*0.5,x)}},
Yv(d,e,f){var x,w="sine",v="noise"
if(e===1)x=1.25
else x=e===2?0.8:1
switch(d){case"kick":E.dI(95*x,"",200,1.8,f,w)
break
case"snare":E.dI(220*x,"",140,0,f*0.65,v)
break
case"hat":E.dI(5000,"",50,0,f*0.35,v)
break
case"open":E.dI(5200,"",220,0,f*0.35,v)
break
case"clap":E.dI(1100*x,"",100,0,f*0.5,v)
break
case"tom":E.dI(150*x,"",230,1,f,w)
break
case"low":E.dI(100*x,"",260,0.9,f,w)
break
case"rim":E.dI(1700*x,"",60,0,f*0.4,"square")
break
case"cow":E.dI(820*x,"",240,0,f*0.3,"square")
break
case"crash":E.dI(3200,"",650,0,f*0.4,v)
break
case"shake":E.dI(7000,"",90,0,f*0.3,v)
break
default:E.dI(60*x,"",300,0,f,w)}},
bbF:function bbF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cFm:function cFm(d){this.a=d},
cFn:function cFn(d,e){this.a=d
this.b=e},
hiF:function hiF(d,e,f){this.a=d
this.b=e
this.c=f},
hiE:function hiE(d){this.a=d},
e6:function e6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cFi:function cFi(d){this.a=d},
fm:function fm(d,e,f){this.c=d
this.d=e
this.a=f},
bbG:function bbG(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fN:function fN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cFh:function cFh(d){this.a=d},
GC:function GC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cFo:function cFo(d){this.a=d},
o4:function o4(){},
cFj:function cFj(d,e,f){this.a=d
this.b=e
this.c=f},
cFl:function cFl(d){this.a=d},
cFk:function cFk(){},
ajO(b1,b2,b3,b4,b5,b6,b7){var x=0,w=C.j(y.D),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajO=C.e(function(b8,b9){if(b8===1)return C.f(b9,w)
for(;;)switch(x){case 0:a7=new B.h3N(b3)
a8=y.a
a9=C.a([],a8)
u=0
case 3:if(!(u<8)){x=4
break}b0=a9
x=5
return C.b(a7.$1(A.h.ba(u*b4/8)),$async$ajO)
case 5:b0.push(b9);++u
b6.$1(u/8*0.1)
x=3
break
case 4:t=b7*4
s=new Uint8Array(t*b5)
for(r=0;r<b5;r=p){q=r*t
p=r+1
A.aI.ew(s,q,p*t,a9[A.n.F(r,8)],q)}A.d.a7(a9)
q=new C.A6(null,null,null,null,0,A.e2,0,0)
q.bFt(null,A.aI.gaS(s),0,null,A.c_,0,0,A.e2,b5,null,0,4,A.Nq,null,A.c_,null,null,b7,!1)
o=Y.hCQ(q,255,3)
n=new Uint8Array(768)
m=0
for(;;){q=o.a
q===$&&C.d()
if(!(m<q.a&&m<255))break
l=m*3
n[l]=A.n.L(q.oJ(m))
n[l+1]=A.n.L(o.a.oI(m))
n[l+2]=A.n.L(o.a.oH(m));++m}k=B.iGq(b7,b5,b1)
a8=new C.ael(C.a([],a8))
j=new B.cjp(b7,b5,a8)
a8.K(0,new C.d1("GIF89a"))
j.M5(b7)
j.M5(b5)
a8.qf(247)
a8.qf(255)
a8.qf(0)
a8.K(0,n)
a8.K(0,D.cFc)
a8.K(0,new C.d1("NETSCAPE2.0"))
a8.K(0,D.d7_)
i=A.h.S(100/b2)
h=new Int16Array(2097152)
A.xZ.h0(h,0,2097152,-1)
q=y.H,l=b7*b5,g=null,f=0
case 6:if(!(f<b4)){x=8
break}x=9
return C.b(a7.$1(f),$async$ajO)
case 9:e=b9
d=new Uint8Array(l)
for(a0=0,a1=0;a0<l;++a0,a1+=4){a2=e[a1]
a3=e[a1+1]
a4=e[a1+2]
a5=(a2>>>1<<14|a3>>>1<<7|a4>>>1)>>>0
m=h[a5]
if(m<0){m=o.b0q(a4,a3,a2)
h[a5]=m}d[a0]=m}for(r=0;r<b5;++r){a6=k[r]
if(a6===0)continue
a2=r*b7
A.aI.h0(d,a2,a2+a6,255)
a2=(r+1)*b7
A.aI.h0(d,a2-a6,a2,255)}if(g==null)j.aJY(0,0,b7,b5,d,i)
else j.cRT(g,d,i);++f
b6.$1(0.1+f/b4*0.9)
x=10
return C.b(C.bM(A.bI,null,q),$async$ajO)
case 10:case 7:g=d
x=6
break
case 8:a8.qf(59)
v=a8.a9c()
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$ajO,w)},
iGq(d,e,f){var x,w,v,u,t,s=C.c4(e,0,!1,y.r)
if(f<=0)return s
f=Math.min(f,Math.min(d,e)/2)
for(x=f*f,w=e-1,v=0;v<e;++v){u=Math.min(v,w-v)+0.5
if(u>=f)continue
t=f-u
s[v]=A.h.S(f-Math.sqrt(x-t*t))}return s},
aUw(d,e){return B.iGz(d,e)},
iGz(d,e){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p
var $async$aUw=C.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:q=!1
u=4
x=7
return C.b(C.ayK(C.a([C.cKA(d,"image/gif",e+".gif")],y.u),null,"Made in NGMY Core Protocol"),$async$aUw)
case 7:s=g
q=s.b!==A.WG
u=2
x=6
break
case 4:u=3
p=t.pop()
x=6
break
case 3:x=2
break
case 6:x=!q?8:9
break
case 8:x=10
return C.b(B.h6N(d,e+".gif","image/gif"),$async$aUw)
case 10:q=g
case 9:v=q
x=1
break
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$aUw,w)},
h3N:function h3N(d){this.a=d},
cjp:function cjp(d,e,f){this.a=d
this.b=e
this.c=f},
cjr:function cjr(d,e,f){this.a=d
this.b=e
this.c=f},
cjq:function cjq(d,e){this.a=d
this.b=e},
hNO(d,e){var x
$.U()
x=C.L()
x.r=d.gp(0)
x.c=e
x.b=A.ae
x.d=A.bH
return x},
uN(d,e,f){var x,w,v,u
if(f==null){x=e.length
if(x===2)x=null
else{w=C.a([],y.n)
for(v=x-1,u=0;u<x;++u)w.push(u/v)
x=w}}else x=f
return C.jT(A.J,new C.m(0,d.b),e,x,A.w,null)},
ipW(d,e,f){return $.ipX.c0(0,d+"|"+A.h.S(e)+"|"+f.m(),new B.fD_(d,f,e))},
iJn(e3,e4,e5,e6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7=null,d8=e4.a,d9=e4.b,e0=0+d9,e1=new C.a5(0,0,0+d8,e0),e2=new C.e7()
e2.cW(e6*97+5)
x=new B.h9F(e2)
switch(A.n.F(e6,20)){case 0:$.U()
e0=C.L()
e0.san(B.uN(e4,D.doF,d7))
e3.aE(e1,e0)
w=new C.m(d8*(0.5+0.2*Math.sin(6.283185307179586*e5)),d9*0.5)
e0=d8*0.5
v=C.L()
v.san(C.wE(w,e0,C.a([D.bBq,A.L],y.O),d7,A.w,d7,d7,0))
e3.O(w,e0,v)
break
case 1:$.U()
e0=C.L()
e0.san(B.uN(e4,D.dca,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<70;++u){v=x.$0()
t=x.$0()
s=e2.aw(3)
r=x.$0()
q=new C.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e0*(1+s)+u))).gp(0)
e3.O(new C.m(v*d8,t*d9),0.6+r*1.4,q)}p=A.h.F(e5*2,1)
e0=d8*(0.1+p*0.7)
v=d9*(0.1+p*0.3)
e3.ah(new C.m(e0,v),new C.m(e0-d8*0.12,v-d9*0.05),B.hNO(A.c.j(1-p),2))
v=d8*0.85
e0=d9*0.2
t=C.L()
t.r=G.OR.gp(0)
e3.O(new C.m(v,e0),d9*0.09,t)
t=C.L()
t.r=D.a12.gp(0)
e3.O(new C.m(v+d9*0.03,e0-d9*0.01),d9*0.08,t)
break
case 2:e0=$.U()
v=C.L()
v.san(B.uN(e4,D.den,d7))
e3.aE(e1,v)
for(u=0;u<40;++u){v=x.$0()
t=x.$0()
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.5).gp(0)
e3.O(new C.m(v*d8,t*d9*0.6),0.7,s)}for(v=d9*0.12,t=d8/24,s=y.v,o=0;o<4;++o){r=C.a([],s)
n=new C.aJ(e0.r,A.ak,d7,d7,r)
for(e0=d9*(0.3+0.07*o),q=o*1.3,m=0;m<=d8;m+=t){l=e0+Math.sin(6.283185307179586*(m/d8*1.4+e5)+q)*d9*0.09
if(m===0){k=new C.aZ(m,l)
r.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}else{k=new C.aq(m,l)
r.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}}e0=$.U()
r=new C.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=D.dc7[o].j(0.5).gp(0)
r.b=A.ae
r.c=v
r.y=A.aqh
e3.af(n,r)}break
case 3:e0=$.U()
v=C.L()
v.san(B.uN(e4,D.dHD,D.dw_))
e3.aE(e1,v)
v=6.283185307179586*e5
i=new C.m(d8*0.5,d9*(0.64+0.01*Math.sin(v)))
t=d9*0.36
s=C.L()
s.san(C.wE(i,t,C.a([D.bvs,A.L],y.O),d7,A.w,d7,d7,0))
e3.O(i,t,s)
s=C.L()
s.r=A.a_v.gp(0)
e3.O(i,d9*0.13,s)
for(t=y.v,h=0;h<3;++h,e0=s){s=C.a([],t)
n=new C.aJ(e0.r,A.ak,d7,d7,s)
s.push(new C.aZ(0,d9))
n.ac()
for(e0=d9*(0.7+0.07*h),r=3+h,q=h*2,m=0;m<=d8;m+=8){k=new C.aq(m,e0+Math.sin(m/d8*r+q)*d9*0.04)
s.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}e0=new C.aq(d8,d9)
s.push(e0)
s=n.f
if(s!=null)e0.aj(s)
n.ac()
e0=[D.bn_,D.bm5,A.GW][h]
s=$.U()
r=new C.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=e0.gp(0)
e3.af(n,r)}for(s=[0.18,0.78],r=s.length,q=d9*0.78,k=-d8,j=k*0.005,g=-d9,f=q+g*0.2,g=q+g*0.21,e=d8*0.2,d=d9*0.06,a0=0;a0<r;++a0){a1=d8*s[a0]
a2=a1+j
a3=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a3.r=D.am1.gp(0)
a3.c=3
a3.b=A.ae
a3.d=A.bH
e3.ah(new C.m(a1,q),new C.m(a2,f),a3)
a2=C.c1(new C.m(a2,g),d,e)
a3=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a3.r=D.am1.gp(0)
e3.c3(a2,a3)}for(s=k*0.05,v*=6,e0=e0.r,u=0;u<4;++u){w=A.h.F(e5+u*0.22,1)
r=s+w*d8*1.1
q=d9*(0.25+0.05*u)+Math.sin(6.283185307179586*w*3)*d9*0.02
k=Math.sin(v+u)
j=C.a([],t)
g=new C.aJ(e0,A.ak,d7,d7,j)
k=q+k*d9*0.012
j.push(new C.aZ(r-8,k))
g.ac()
f=q-4
q=new C.cn(r-3,f,r,q)
j.push(q)
e=g.f
if(e!=null)q.aj(e)
g.ac()
r=new C.cn(r+3,f,r+8,k)
j.push(r)
q=g.f
if(q!=null)r.aj(q)
g.ac()
r=new C.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.GW.gp(0)
r.c=2
r.b=A.ae
r.d=A.bH
e3.af(g,r)}break
case 4:e0=$.U()
v=C.L()
v.san(B.uN(e4,D.dBw,D.djg))
e3.aE(e1,v)
v=C.L()
v.r=D.bxB.gp(0)
e3.O(new C.m(d8*0.75,d9*0.2),d9*0.1,v)
for(v=y.v,h=0;h<5;++h,e0=t){t=C.a([],v)
n=new C.aJ(e0.r,A.ak,d7,d7,t)
t.push(new C.aZ(0,d9))
n.ac()
for(e0=(h&1)===0,s=d9*(0.46+0.1*h),r=1.5+h*0.4,m=0;m<=d8;m+=6){q=e0?1:-1
q=new C.aq(m,s+Math.sin(6.283185307179586*(m/d8*r+e5*q))*d9*0.025)
t.push(q)
k=n.f
if(k!=null)q.aj(k)
n.ac()}e0=new C.aq(d8,d9)
t.push(e0)
t=n.f
if(t!=null)e0.aj(t)
n.ac()
e0=C.ap(A.cJ,A.tp,h/5).j(0.85)
t=$.U()
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=e0.gp(0)
e3.af(n,s)}break
case 5:$.U()
e0=C.L()
e0.san(B.uN(e4,D.drh,D.deb))
e3.aE(e1,e0)
a4=d9*0.6
e0=d8/2
v=d9*0.26
t=C.L()
t.san(C.jT(new C.m(0,a4-v),new C.m(0,a4),D.dFV,d7,A.w,d7))
e3.O(new C.m(e0,a4),v,t)
for(v=d8*0.2,t=a4-d9*0.2,s=d9*0.012,r=v+d8*0.6,u=0;u<5;){q=t+u*d9*0.045;++u
k=new C.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=D.a17.gp(0)
e3.aE(new C.a5(v,q,r,q+s*u*0.6),k)}v=C.L()
v.r=D.a17.gp(0)
e3.aE(new C.a5(0,a4,d8,d9),v)
a5=B.hNO(A.O9.j(0.85),1.4)
for(v=d9-a4,o=0;o<10;++o){a6=(o+e5)/9
if(a6<0.02)continue
l=a4+a6*a6*v
e3.ah(new C.m(0,l),new C.m(d8,l),a5)}for(o=-8;o<=8;++o){v=o*d8
e3.ah(new C.m(e0+v*0.02,a4),new C.m(e0+v*0.2,d9),a5)}break
case 6:$.U()
e0=C.L()
e0.r=D.bxq.gp(0)
e3.aE(e1,e0)
a7=Math.max(12,d8/20)
for(e0=d8/a7,v=e5*12,t=a7*0.9,s=-a7,r=d9+a7*9,q=a7*2,a8=0;a8<e0;++a8){a9=1+A.n.F(a8,3)
b0=A.h.F(e5*a9+x.$0(),1)*r-q
for(k=a8*a7,j=a8*7,g=v*a9,o=0;o<10;++o){l=b0-o*a7
if(l<s||l>d9)continue
b1="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.n.F(j+o*3+A.h.ba(g),34)]
B.ipW(b1,t,o===0?D.bk1:A.bh.j(1-o/9)).a5(e3,new C.m(k,l))}}break
case 7:$.U()
e0=C.L()
e0.san(B.uN(e4,D.dqp,d7))
e3.aE(e1,e0)
for(e0=d9+30,v=e3.c,t=6.283185307179586*e5,u=0;u<60;++u){s=x.$0()
r=A.h.F(e5*(1+e2.aw(2))+x.$0(),1)
J.bs(v.save())
v.translate(s*d8+Math.sin(t+u)*8,r*e0-15)
v.rotate((t*(1+A.n.F(u,3))+u)*180/3.141592653589793,0,0)
r=C.c1(A.J,4,8)
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=D.dfF[A.n.F(u,6)].gp(0)
e3.aE(r,s)
v.restore()}break
case 8:$.U()
e0=C.L()
e0.san(B.uN(e4,A2.aCs,d7))
e3.aE(e1,e0)
for(e0=d9*0.08,b2=0;b2<3;++b2){w=A.h.F(e5+b2/3,1)
b3=d8*(0.22+0.28*b2)
b4=d9*(0.3+0.1*A.n.F(b2,2))
if(w<0.22){v=d9*(1-w/0.22*(1-b4/d9))
$.U()
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=A.ac.gp(0)
t.c=2
t.b=A.ae
t.d=A.bH
e3.ah(new C.m(b3,v),new C.m(b3,v+e0),t)}else{b5=(w-0.22)/0.78
v=1-b5
b6=1-Math.pow(v,3)
for(t=b5*b5*d9*0.1,s=2.6*v+0.4,u=0;u<28;++u){b7=6.283185307179586*u/28
r=Math.cos(b7)
q=Math.sin(b7)
k=D.dde[b2].j(v)
$.U()
j=new C.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=k.gp(0)
e3.O(new C.m(b3+r*b6*d9*0.34,b4+q*b6*d9*0.34+t),s,j)}}}break
case 9:$.U()
e0=C.L()
e0.san(B.uN(e4,D.d7H,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<30;++u){o=1+e2.aw(2)
b8=x.$0()
v=x.$0()
b9=4+x.$0()*d9*0.05
l=d9-A.h.F(e5*o+b8,1)*(d9+b9*3)+b9
v=v*d8+Math.sin(e0*o+u)*10
w=new C.m(v,l)
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.12).gp(0)
e3.O(w,b9,t)
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.5).gp(0)
t.c=1.2
t.b=A.ae
t.d=A.bH
e3.O(w,b9,t)
t=-b9*0.3
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.7).gp(0)
e3.O(new C.m(v+t,l+t),b9*0.2,s)}break
case 10:$.U()
e0=C.L()
e0.san(B.uN(e4,D.cIj,d7))
e3.aE(e1,e0)
e0=C.L()
e0.r=G.OR.gp(0)
e3.O(new C.m(d8*0.2,d9*0.2),d9*0.08,e0)
for(e0=d9+10,v=6.283185307179586*e5,u=0;u<90;++u){o=1+e2.aw(3)
b8=x.$0()
t=x.$0()
s=A.h.F(e5*o+b8,1)
r=Math.sin(v*o+u)
q=x.$0()
k=new C.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=A.c.j(0.9).gp(0)
e3.O(new C.m(t*d8+r*12,s*e0-5),1.2+q*2.4,k)}e0=-d8*0.1
v=d9*0.9
t=C.L()
t.r=A.c.gp(0)
e3.c3(new C.a5(e0,v,e0+d8*1.2,v+d9*0.3),t)
break
case 11:$.U()
v=C.L()
v.r=A.iv.gp(0)
e3.aE(e1,v)
c0=d8/12
c1=A.h.F(e5*c0*6,c0*6)
for(u=-6;u<24;++u){m=u*c0+c1
v=new C.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=D.cQ0[A.n.F(A.n.F(u,6)+6,6)].gp(0)
e3.aE(new C.a5(m,0,m+c0,e0),v)}for(e0=c0*0.3,v=c0/2,t=y.v,l=0;l<d9;l+=c0)for(s=l/c0,b4=l+v,r=b4-e0,q=b4+e0,u=-6;u<24;++u)if(A.n.F(u+A.h.ba(s),3)===0){b3=u*c0+c1+v
k=$.U()
j=C.a([],t)
k=new C.aJ(k.r,A.ak,d7,d7,j)
j.push(new C.aZ(b3,r))
k.ac()
g=new C.aq(b3+e0,b4)
j.push(g)
f=k.f
if(f!=null)g.aj(f)
k.ac()
g=new C.aq(b3,q)
j.push(g)
f=k.f
if(f!=null)g.aj(f)
k.ac()
g=new C.aq(b3-e0,b4)
j.push(g)
f=k.f
if(f!=null)g.aj(f)
k.ac()
g=new C.bz()
j.push(g)
j=k.f
if(j!=null)g.aj(j)
k.ac()
j=new C.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.c.j(0.75).gp(0)
e3.af(k,j)}$.U()
e0=C.L()
e0.san(C.wE(e1.gbF(),d8*0.7,C.a([A.L,A.v.j(0.55)],y.O),C.a([0.4,1],y.n),A.w,d7,d7,0))
e3.aE(e1,e0)
break
case 12:$.U()
e0=C.L()
e0.san(B.uN(e4,D.d8_,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<18;++u){w=new C.m(x.$0()*d8+Math.sin(e0+u)*18,x.$0()*d9+Math.cos(e0+u*1.7)*14)
b9=d9*(0.05+x.$0()*0.1)*(1+0.15*Math.sin(v+u))
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s=A.n.F(u,5)
t.r=D.aDb[s].j(0.28).gp(0)
t.y=A.I9
e3.O(w,b9,t)
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=D.aDb[s].j(0.35).gp(0)
t.c=1.2
t.b=A.ae
t.d=A.bH
e3.O(w,b9*0.9,t)}break
case 13:$.U()
e0=C.L()
e0.san(B.uN(e4,D.dlo,d7))
e3.aE(e1,e0)
c2=Math.max(0,1-Math.abs(e5-0.3)*14)
if(c2>0){e0=A.c.j(0.35*c2)
v=C.L()
v.r=e0.gp(0)
e3.aE(e1,v)}for(e0=d9+40,u=0;u<70;++u){m=x.$0()*d8
l=A.h.F(e5*(2+e2.aw(2))+x.$0(),1)*e0-20
v=new C.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.dI.j(0.6).gp(0)
v.c=1.3
v.b=A.ae
v.d=A.bH
e3.ah(new C.m(m,l),new C.m(m-6,l+18),v)}for(u=0;u<10;++u){e0=C.c1(new C.m(x.$0()*d8,A.h.F(e5+x.$0(),1)*d9),11,7)
v=new C.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.c.j(0.18).gp(0)
e3.c3(e0,v)}break
case 14:e0=$.U()
v=C.L()
v.san(B.uN(e4,D.del,d7))
e3.aE(e1,v)
for(v=d8*0.035,t=y.v,s=d8*0.02,r=d8*0.08,q=d8*0.07,k=6.283185307179586*e5,j=k*3,g=k*2,e0=e0.r,u=0;u<7;++u){c3=d8*(u+0.5)/7
c4=d9*(0.28+0.1*Math.sin(g+u*2.1)+0.06*A.n.F(u,3))
f=C.a([],t)
w=new C.aJ(e0,A.ak,d7,d7,f)
f.push(new C.aZ(c3-q,d9))
w.ac()
e=new C.i6(c3-r,d9-c4*0.5,c3+Math.sin(j+u)*6,d9-c4*0.8,c3,d9-c4)
f.push(e)
d=w.f
if(d!=null)e.aj(d)
w.ac()
e=new C.i6(c3+s,d9-c4*0.6,c3+r,d9-c4*0.4,c3+q,d9)
f.push(e)
d=w.f
if(d!=null)e.aj(d)
w.ac()
e=new C.bz()
f.push(e)
f=w.f
if(f!=null)e.aj(f)
w.ac()
f=new C.ar(A.V,A.R,A.X,A.Y,A.W)
f.r=A.fN.j(0.85).gp(0)
e3.af(w,f)
f=C.a([],t)
e=new C.aJ(e0,A.ak,d7,d7,f)
f.push(new C.aZ(c3-v,d9))
e.ac()
d=new C.cn(c3,d9-c4*0.9,c3+v,d9)
f.push(d)
a1=e.f
if(a1!=null)d.aj(a1)
e.ac()
d=new C.bz()
f.push(d)
f=e.f
if(f!=null)d.aj(f)
e.ac()
f=new C.ar(A.V,A.R,A.X,A.Y,A.W)
f.r=A.eL.j(0.9).gp(0)
e3.af(e,f)}for(u=0;u<40;++u){o=1+e2.aw(2)
b8=x.$0()
e0=x.$0()
v=A.h.F(e5*o+b8,1)
t=Math.sin(k*o+u)
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=G.amo.j(0.9).gp(0)
e3.O(new C.m(e0*d8+t*10,d9-v*d9*0.9),1.5,s)}break
case 15:e0=$.U()
v=C.L()
v.san(B.uN(e4,D.cCf,d7))
e3.aE(e1,v)
v=C.L()
v.r=A.ie.gp(0)
e3.O(new C.m(d8*0.7,d9*0.28),d9*0.12,v)
for(v=d8+20,t=d8/12,s=6.283185307179586*e5,r=y.v,h=0;h<5;e0=q,h=c5){q=C.a([],r)
n=new C.aJ(e0.r,A.ak,d7,d7,q)
q.push(new C.aZ(0,d9))
n.ac()
c5=h+1
b8=Math.sin(s+h)*d8*0.02*c5
for(e0=d9*(0.45+0.1*h),k=4+h,j=h*1.7,m=-20;m<=v;m+=t){g=new C.aq(m,e0-Math.abs(Math.sin((m+b8)/d8*k+j))*d9*0.18)
q.push(g)
f=n.f
if(f!=null)g.aj(f)
n.ac()}e0=new C.aq(v,d9)
q.push(e0)
q=n.f
if(q!=null)e0.aj(q)
n.ac()
e0=D.deJ[h]
q=$.U()
k=new C.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=e0.gp(0)
e3.af(n,k)}break
case 16:v=$.U()
t=C.L()
t.san(B.uN(e4,D.drc,d7))
e3.aE(e1,t)
c6=Math.sin(6.283185307179586*e5)*0.18
t=e3.c
J.bs(t.save())
s=d8/2
t.translate(s,0)
e3.jA(0,c6)
v=new C.aJ(v.r,A.ak,d7,d7,C.a([],y.v))
r=-d8
v.E(new C.aZ(r*0.03,0))
q=d8*0.03
v.E(new C.aq(q,0))
v.E(new C.aq(d8*0.34,d9))
v.E(new C.aq(r*0.34,d9))
v.E(new C.bz())
r=C.L()
k=y.O
r.san(C.jT(A.J,new C.m(0,d9),C.a([A.c.j(0.5),A.c.j(0.04)],k),d7,A.w,d7))
e3.af(v,r)
t.restore()
s=C.c1(new C.m(s+Math.sin(c6)*d9,d9*0.95),d9*0.14,d8*0.6)
t=A.c.j(0.22)
r=C.L()
r.r=t.gp(0)
e3.c3(s,r)
for(v=[-1,1],t=v.length,s=d8*0.18,r=0+d9*0.06,c7=d8*0.82,a0=0;a0<t;++a0){j=v[a0]<0
c8=j?0:c7
for(u=0;u<6;++u){g=c8+u*d8*0.03
f=new C.ar(A.V,A.R,A.X,A.Y,A.W)
e=C.a([A.eE,A.ex,A.eE],k)
f.san(new C.a6X(new C.m(0,0),new C.m(q,0),e,A.mc,A.w,d7))
e3.aE(new C.a5(g,0,g+q,e0),f)}j=j?0:c7
g=new C.ar(A.V,A.R,A.X,A.Y,A.W)
g.r=A.kK.gp(0)
e3.aE(new C.a5(j,0,j+s,r),g)}break
case 17:e0=$.U()
v=C.L()
v.san(C.wE(e1.gbF(),d8*0.7,D.dgc,A.mc,A.w,d7,d7,0))
e3.aE(e1,v)
v=e3.c
J.bs(v.save())
v.translate(d8/2,d9/2)
e3.jA(0,e5*6.283185307179586/8)
for(t=y.v,e0=e0.r,u=0;u<16;u+=2){c9=6.283185307179586*u/16
d0=6.283185307179586*(u+1)/16
s=C.a([],t)
r=new C.aJ(e0,A.ak,d7,d7,s)
s.push(new C.aZ(0,0))
r.ac()
q=new C.aq(Math.cos(c9)*d8,Math.sin(c9)*d8)
s.push(q)
k=r.f
if(k!=null)q.aj(k)
r.ac()
q=new C.aq(Math.cos(d0)*d8,Math.sin(d0)*d8)
s.push(q)
k=r.f
if(k!=null)q.aj(k)
r.ac()
q=new C.bz()
s.push(q)
s=r.f
if(s!=null)q.aj(s)
r.ac()
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.22).gp(0)
e3.af(r,s)}v.restore()
break
case 18:$.U()
e0=C.L()
e0.san(B.uN(e4,D.dzf,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<7;++u){t=x.$0()
s=Math.sin(e0+u*1.1)
r=x.$0()
q=Math.sin(v+u)
k=new C.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=D.dyr[A.n.F(u,4)].j(0.7).gp(0)
k.y=A.DA
e3.O(new C.m(d8*(0.1+0.8*t)+q*10,d9*(0.5+0.38*s)),d9*(0.1+0.08*r),k)}break
case 19:$.U()
e0=C.L()
e0.san(B.uN(e4,D.dmT,D.aEX))
e3.aE(e1,e0)
for(u=0;u<40;++u){e0=x.$0()
v=x.$0()
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.6).gp(0)
e3.O(new C.m(e0*d8,v*d9*0.45),0.7,t)}e0=C.L()
e0.r=G.OR.gp(0)
e3.O(new C.m(d8*0.8,d9*0.2),d9*0.07,e0)
m=-d8*0.02
for(e0=d9-8,v=e5*6,d1=0;m<d8;){d2=d8*(0.07+x.$0()*0.07)
d3=d9*(0.25+x.$0()*0.4)
t=d9-d3
s=m+d2
$.U()
r=new C.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=D.boP.gp(0)
e3.aE(new C.a5(m,t,s,t+d3),r)
for(d4=t+6,d5=m+4,t=s-6,s=d1*31;d4<e0;d4+=11)for(r=d4*7,q=d4+6,d6=d5;d6<t;d6+=9)if(A.n.F(s+A.h.S(r)+A.h.S(d6*3)+A.h.ba(v),5)!==0){k=D.bsd.j(0.85)
$.U()
j=new C.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=k.gp(0)
e3.aE(new C.a5(d6,d4,d6+4,q),j)}m+=d2+2;++d1}break}},
imT(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
ixP(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p=new B.fxR(),o=f<=1,n=o?0:e/(f-1),m=o?0:e/(f-1)
o=g/0.5
x=A.h.D((o-m*0.45)/0.55,0,1)
w=g<0.86?1:A.h.D((1-g)/0.14,0,1)
v=new C.e7()
v.cW(e*53+11)
switch(d){case"type":p.f=A.h.ba(g/0.55*f)>e?w:0
break
case"bounce":p.b=-Math.abs(Math.sin(A.h.F(g*2-n*0.5,1)*3.141592653589793))*h*0.5
break
case"wave":p.b=Math.sin(6.283185307179586*g-n*3)*h*0.28
break
case"neon":p.x=p.f=Math.sin(6.283185307179586*g*13+e*7)>0.92?0.25:1
break
case"glitch":u=A.n.F(A.h.ba(g*12),6)===0
p.a=u?Math.sin(e*12.9898+g*100)*h*0.14:0
if(u)p.w=(e&1)===0?A.be:A.c6
break
case"zoom":p.c=p.d=A.n2.aA(0,x)
p.f=x*w
break
case"rainbow":p.w=new H.pI(1,A.h.F(g*360+e*40,360),0.75,1).jo()
break
case"drop":p.b=-(1-B.imT(x))*h*4
p.f=A.h.D(x*6,0,1)*w
break
case"fly":p.a=-(1-A.ek.aA(0,x))*i*0.8
p.f=A.h.D(x*4,0,1)*w
break
case"spin":p.e=(1-x)*6.283185307179586
p.c=p.d=x
p.f=w
break
case"flip":p.c=Math.cos(3.141592653589793*(1-A.ed.aA(0,x)))
p.f=A.h.D(x*5,0,1)*w
break
case"jelly":t=Math.sin(6.283185307179586*g*2+e)*0.25
p.c=1+t
p.d=1-t
break
case"shake":o=6.283185307179586*g
p.a=Math.sin(o*30+e*3)*h*0.05
p.b=Math.cos(o*27+e*5)*h*0.05
break
case"float":o=6.283185307179586*g
p.b=Math.sin(o+e*0.8)*h*0.15
p.e=Math.sin(o+e)*0.05
break
case"pulse":p.c=p.d=1+0.18*Math.pow(Math.max(0,Math.sin(6.283185307179586*g*2)),3)
break
case"swing":p.r=-h*0.5
p.e=Math.sin(6.283185307179586*g+n*2)*0.35
break
case"reveal":p.f=A.h.D((A.h.D(o,0,1)-n)*6,0,1)*w
break
case"blur":p.c=p.d=2.4-1.4*A.ed.aA(0,x)
p.f=x*w
break
case"domino":p.e=Math.sin(A.h.D(g*1.6-n*0.6,0,1)*3.141592653589793)*0.9
p.r=h*0.5
break
case"spiral":o=1-x
s=o*3.141592653589793*3
r=o*h*3
p.a=Math.cos(s)*r
p.b=Math.sin(s)*r
p.f=x*w
break
case"cascade":q=Math.pow(Math.sin(3.141592653589793*A.h.F(g*2-n,1)),4)
p.w=C.ap(j,A.c,q)
p.x=q
break
case"wobble":o=6.283185307179586*g*2
p.e=Math.sin(o+e)*0.15
p.c=1+0.05*Math.sin(o+e*2)
break
case"rise":p.b=(1-A.cn.aA(0,x))*h*2
p.f=x*w
break
case"scatter":o=1-A.dS.aA(0,x)
p.a=o*(v.ai()-0.5)*i
p.b=o*(v.ai()-0.5)*h*6
p.e=o*(v.ai()-0.5)*6
p.f=w
break}return p},
E0(d,e,f,g){var x=null,w=C.h2(x,A.cK,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,g==null?f:x,x,x,x,x,x,x,x,x,e,x,x,A.u,g,1,!0,x,x,x,x,x,x,x,x),d),A.a8,A.cb,x,A.e6,A.cc)
w.eK()
return w},
it8(d,e,f,g,h,i,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.h.D(i,0,1)
if(j<=0.01)return
x=B.E0(e,f,k,k)
w=x.b
v=-w.c/2
w=w.a.c
w=-w.gb4(w)/2
u=new C.m(v,w)
t=x.b
s=t.c
t=t.a.c
r=new C.a5(v,w,v+s,w+t.gb4(t))
q=new B.fJp(j)
p=new B.fJq(e,f,d,u)
switch(g){case"outline":p.$2(q.$1(h),f*0.07)
break
case"three":t=C.ap(h,A.v,0.55)
t.toString
for(o=9;o>=1;--o){s=C.ap(h,t,o/9)
s.toString
n=o*f
B.E0(e,f,q.$1(s),k).a5(d,new C.m(v+n*0.012,w+n*0.014))}B.E0(e,f,q.$1(h),k).a5(d,u)
break
case"neon":p.$3$blur(q.$2(h,0.9*(0.6+0.4*a0)),f*0.16,new C.h5(A.G,f*0.2))
p.$2(q.$2(h,0.9),f*0.07)
p.$2(q.$2(A.c,0.95),f*0.025)
break
case"gradient":$.U()
m=C.L()
w=r.gaNx()
v=r.gaHF()
t=C.ap(h,A.c,0.45)
t.toString
t=q.$1(t)
s=q.$1(h)
n=C.ap(h,A.aA,0.6)
n.toString
m.san(C.jT(w,v,C.a([t,s,q.$1(n)],y.O),A.mc,A.w,k))
B.E0(e,f,k,m).a5(d,u)
break
case"sticker":B.E0(e,f,q.$2(A.v,0.3),k).a5(d,u.a6(0,new C.m(f*0.04,f*0.06)))
p.$2(q.$1(A.c),f*0.2)
p.$4$blur$shift(q.$1(A.ax),f*0.24,k,A.J)
p.$2(q.$1(A.c),f*0.17)
B.E0(e,f,q.$1(h),k).a5(d,u)
break
case"retro":t=H.a7j(h)
l=new H.pI(t.a,A.h.F(H.a7j(h).b+150,360),t.c,t.d).jo()
for(o=5;o>=1;--o){t=o*f*0.014
B.E0(e,f,q.$1(l),k).a5(d,new C.m(v+t,w+t))}p.$2(q.$1(A.ax),f*0.05)
B.E0(e,f,q.$1(h),k).a5(d,u)
break
case"gold":$.U()
m=C.L()
m.san(C.jT(r.gaNx(),r.gaHF(),C.a([q.$1(A4.CV),q.$1(A.d0),q.$1(A.de),q.$1(A.wU),q.$1(A.it)],y.O),D.dKW,A.w,k))
p.$2(q.$1(A.tv),f*0.06)
B.E0(e,f,k,m).a5(d,u)
break
default:B.E0(e,f,q.$1(h),k).a5(d,u)}},
hVC(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a5.c
J.bs(a4.save())
x=a6.a
w=a6.b
a4.clipRect(C.hS(new C.a5(0,0,0+x,0+w)),$.lI()[1],!0)
B.iJn(a5,a6,a7,a8)
v=x<w?0.9:1
u=b0*x/360*v
v=A.a.i(b3)
if(v.length===0)t=C.a(["\u2026"],y.s)
else{v=new C.mS(v)
t=C.B(v,C.a3(v).k("M.E"))}v=C.a([],y.n)
for(s=t.length,r=0;r<t.length;t.length===s||(0,C.I)(t),++r){q=t[r]
p=q===" "
o=B.E0(p?"n":q,u,a3,a3).b.c
v.push(o*(p?0.7:1))}n=x*0.86
s=y.t
m=C.a([C.a([],s)],y.x)
for(p=y.r,l=0,k=0,j=0;j<t.length;++j){if(t[j]===" "){A.d.gal(m).push(j)
l+=v[j]
k=A.d.gal(m).length
continue}if(l+v[j]>n&&A.d.gal(m).length!==0){i=k>0&&k<A.d.gal(m).length?A.d.fF(A.d.gal(m),k):C.a([],s)
if(i.length!==0){o=A.d.gal(m)
h=A.d.gal(m).length
o.$flags&1&&C.ak(o,18)
C.kB(k,h,o.length,a3,a3)
o.splice(k,h-k)}o=C.B(i,p)
m.push(o)
l=A.d.cH(i,0,new B.h9G(v))
k=0}A.d.gal(m).push(j)
l+=v[j]}g=u*1.15
f=w/2-m.length*g/2+g/2
for(w=x/2,e=0;e<m.length;++e){d=m[e]
a0=w-A.d.cH(d,0,new B.h9H(v))/2
for(s=d.length,p=f+e*g,r=0;r<d.length;d.length===s||(0,C.I)(d),++r,a0=a1){j=d[r]
o=v[j]
a1=a0+o
if(t[j]===" ")continue
a2=B.ixP(b1,j,t.length,a7,u,x,a9)
J.bs(a4.save())
a4.translate(a0+o/2+a2.a,p+a2.b)
o=a2.r
if(o!==0)a4.translate(0,o)
a4.rotate(a2.e*180/3.141592653589793,0,0)
o=a2.r
if(o!==0)a4.translate(0,-o)
o=a2.c
if(o===0)o=0.001
h=a2.d
if(h===0)h=0.001
a4.scale(o,h)
o=t[j]
h=a2.w
if(h==null)h=a9
B.it8(a5,o,u,b2,h,a2.f,a2.x)
a4.restore()}}a4.restore()},
hwg(d,e,f,g,h,i,j,k,l,m){var x=0,w=C.j(y.D),v,u,t,s,r
var $async$hwg=C.e(function(n,o){if(n===1)return C.f(o,w)
for(;;)switch(x){case 0:u=d>=1
t=A.h.S(u?i:i*d)
s=A.h.S(u?i/d:i)
r=A.h.S(3.2*h)
v=B.ajO(Math.max(t,s)*22/360,h,new B.h8m(t,s,r,m,j,l,e,f,g),r,s,k,t)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$hwg,w)},
fD_:function fD_(d,e,f){this.a=d
this.b=e
this.c=f},
h9F:function h9F(d){this.a=d},
fxR:function fxR(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fJp:function fJp(d){this.a=d},
fJq:function fJq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcy:function bcy(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
h9G:function h9G(d){this.a=d},
h9H:function h9H(d){this.a=d},
h8m:function h8m(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yu:function Yu(d){this.a=d},
avl:function avl(d,e,f){var _=this
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
_.bw$=e
_.ab$=f
_.c=_.a=null},
cqE:function cqE(d,e){this.a=d
this.b=e},
cqz:function cqz(d){this.a=d},
cqA:function cqA(d){this.a=d},
cqy:function cqy(d,e){this.a=d
this.b=e},
cqB:function cqB(d,e){this.a=d
this.b=e},
cqC:function cqC(d){this.a=d},
cqD:function cqD(d){this.a=d},
cqo:function cqo(d){this.a=d},
cqp:function cqp(d){this.a=d},
cqn:function cqn(){},
cqq:function cqq(d,e){this.a=d
this.b=e},
cqr:function cqr(d,e){this.a=d
this.b=e},
cqm:function cqm(d,e){this.a=d
this.b=e},
cqs:function cqs(d,e){this.a=d
this.b=e},
cql:function cql(d,e){this.a=d
this.b=e},
cqt:function cqt(d,e){this.a=d
this.b=e},
cqk:function cqk(d,e){this.a=d
this.b=e},
cqu:function cqu(d,e){this.a=d
this.b=e},
cqj:function cqj(d,e){this.a=d
this.b=e},
cqv:function cqv(d){this.a=d},
cqi:function cqi(d){this.a=d},
cqw:function cqw(d){this.a=d},
cqx:function cqx(d){this.a=d},
cqh:function cqh(d,e){this.a=d
this.b=e},
aIu:function aIu(){},
bcJ(){var x=0,w=C.j(y.U),v,u=2,t=[],s,r,q
var $async$bcJ=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
s=$.hpR
x=7
return C.b(s==null?$.hpR=B.cHV():s,$async$bcJ)
case 7:s=e
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
$.hpR=null
throw q
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$bcJ,w)},
cHV(){var x=0,w=C.j(y.U),v,u
var $async$cHV=C.e(function(d,e){if(d===1)return C.f(e,w)
for(;;)switch(x){case 0:u=B
x=3
return C.b($.oi().Dt("assets/data/world110.json",!1),$async$cHV)
case 3:v=u.ii7(e)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$cHV,w)},
ii7(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=y.j,d=e.a(A.T.aN(0,a1,null)),a0=C.a([],y.h)
for(x=J.aN(d),w=y.n,v=y.b,u=y.d,t=y.f;x.B();){s=u.a(x.gP(x))
r=C.a([],t)
for(q=J.a1(s),p=J.aN(e.a(q.h(s,"r")));p.B();){o=p.gP(p)
n=C.a([],v)
for(m=J.aN(e.a(o));m.B();){l=m.gP(m)
k=J.a1(l)
n.push(C.a([C.dr(k.h(l,0)),C.dr(k.h(l,1))],w))}r.push(n)}p=C.cV(q.h(s,"n"))
n=C.cV(q.h(s,"a"))
m=C.cV(q.h(s,"ct"))
k=C.cV(q.h(s,"sr"))
j=C.dr(q.h(s,"pop"))
i=C.dr(q.h(s,"gdp"))
h=C.cV(q.h(s,"inc"))
g=C.ag("^\\d\\.\\s*",!0,!1,!1,!1)
h=C.aV3(h,g,"",0)
g=C.dr(J.t(q.h(s,"c"),0))
q=C.dr(J.t(q.h(s,"c"),1))
f=new B.adB(p,n,m,k,j,i,h,g,q,r)
f.bG1(q,g,n,m,i,h,p,j,r,k)
a0.push(f)}return new B.adC(a0)},
fU6(d){if(d>=1e12)return A.h.a1(d/1e12,1)+" trillion"
if(d>=1e9)return A.h.a1(d/1e9,2)+" billion"
if(d>=1e6)return A.h.a1(d/1e6,1)+" million"
if(d>=1000)return A.h.a1(d/1000,1)+" thousand"
return A.h.a1(d,0)},
I7(d){var x,w,v,u=A.n.v(A.h.S(d))
for(x=u.length,w=0,v="";w<x;++w){if(w>0&&A.n.F(x-w,3)===0)v+=","
v+=u[w]}return v.charCodeAt(0)==0?v:v},
adB:function adB(d,e,f,g,h,i,j,k,l,m){var _=this
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
adC:function adC(d){this.a=d},
w7:function w7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
QV:function QV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
z2:function z2(d,e,f){this.a=d
this.b=e
this.c=f},
QU:function QU(d){this.a=0
this.b=d
this.c=0},
ik5(d,e,f){return $.ik6.c0(0,d+"|"+C.v(e)+"|"+f.m(),new B.dsK(d,e,f))},
Xq:function Xq(d){this.a=d},
aHj:function aHj(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.hi$=j
_.mn$=k
_.fk$=l
_.hj$=m
_.bw$=n
_.ab$=o
_.c=_.a=null},
edq:function edq(d){this.a=d},
edr:function edr(d){this.a=d},
edp:function edp(d,e){this.a=d
this.b=e},
eds:function eds(d){this.a=d},
edo:function edo(d){this.a=d},
edt:function edt(d){this.a=d},
edm:function edm(d){this.a=d},
edn:function edn(d,e,f){this.a=d
this.b=e
this.c=f},
edl:function edl(d){this.a=d},
edk:function edk(){},
edj:function edj(d){this.a=d},
edM:function edM(d,e){this.a=d
this.b=e},
edN:function edN(d,e){this.a=d
this.b=e},
edB:function edB(d){this.a=d},
edC:function edC(d){this.a=d},
edA:function edA(d){this.a=d},
edD:function edD(d){this.a=d},
edu:function edu(d,e){this.a=d
this.b=e},
edv:function edv(d){this.a=d},
edO:function edO(d,e){this.a=d
this.b=e},
edz:function edz(d,e){this.a=d
this.b=e},
edS:function edS(d){this.a=d},
edL:function edL(d){this.a=d},
edT:function edT(d,e){this.a=d
this.b=e},
edK:function edK(d,e){this.a=d
this.b=e},
edU:function edU(d){this.a=d},
edJ:function edJ(d,e){this.a=d
this.b=e},
edV:function edV(d){this.a=d},
edI:function edI(d,e){this.a=d
this.b=e},
edW:function edW(d){this.a=d},
edH:function edH(d,e){this.a=d
this.b=e},
edX:function edX(d){this.a=d},
edG:function edG(d,e){this.a=d
this.b=e},
edY:function edY(d){this.a=d},
edF:function edF(d){this.a=d},
edZ:function edZ(d){this.a=d},
edE:function edE(d){this.a=d},
edP:function edP(d){this.a=d},
edy:function edy(d){this.a=d},
edQ:function edQ(d){this.a=d},
edx:function edx(d){this.a=d},
edR:function edR(d){this.a=d},
edw:function edw(d){this.a=d},
edi:function edi(){},
edh:function edh(d){this.a=d},
edg:function edg(d){this.a=d},
bkD:function bkD(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dsK:function dsK(d,e,f){this.a=d
this.b=e
this.c=f},
dsL:function dsL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aPQ:function aPQ(){},
aPR:function aPR(){},
ahQ(d,e,f,g,h){return new B.bzE(d,e,f,g,h)},
bzE:function bzE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEC:function fEC(){},
fED:function fED(){},
fEE:function fEE(){},
fEF:function fEF(){},
fEG:function fEG(){},
fEH:function fEH(){},
fEI:function fEI(){},
Yx:function Yx(d){this.a=d},
bqa:function bqa(){this.d=$
this.c=this.a=null},
f0G:function f0G(){},
f0H:function f0H(){},
f0D:function f0D(d){this.a=d},
f0E:function f0E(d){this.a=d},
f0C:function f0C(d){this.a=d},
f0F:function f0F(){},
f0B:function f0B(d,e){this.a=d
this.b=e},
f0A:function f0A(d){this.a=d},
iky(){var x,w,v=y.n,u=C.a([],v)
for(x=0;x<260;++x){w=new C.e7()
w.cW(x)
u.push(w.ai()*3.141592653589793*2)}v=C.a([],v)
for(x=0;x<260;++x){w=new C.e7()
w.cW(x+900)
v.push(2.2+w.ai())}return new B.bpY(new C.cB(null,y.z),new B.QU(A.cW),A.J,A.aB,u,v,$,A.bI,0,C.a([],y.X),null,null)},
ikA(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
ikz(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hKA(d,e,f){return $.ilb.c0(0,d+"|"+C.v(e)+"|"+f.m(),new B.flN(d,e,f))},
Yh:function Yh(d){this.a=d},
bpY:function bpY(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.hi$=j
_.mn$=k
_.fk$=l
_.hj$=m
_.bw$=n
_.ab$=o
_.c=_.a=null},
eU2:function eU2(d,e){this.a=d
this.b=e},
eUd:function eUd(d,e){this.a=d
this.b=e},
eUe:function eUe(d,e){this.a=d
this.b=e},
eUa:function eUa(d){this.a=d},
eUb:function eUb(d){this.a=d},
eUc:function eUc(d){this.a=d},
eUf:function eUf(d){this.a=d},
eU9:function eU9(d){this.a=d},
eUg:function eUg(d,e){this.a=d
this.b=e},
eUh:function eUh(d){this.a=d},
eU8:function eU8(d,e){this.a=d
this.b=e},
eUi:function eUi(d){this.a=d},
eU7:function eU7(d,e){this.a=d
this.b=e},
eUj:function eUj(d){this.a=d},
eU6:function eU6(d){this.a=d},
eUk:function eUk(d){this.a=d},
eU5:function eU5(d){this.a=d},
eUl:function eUl(d){this.a=d},
eU4:function eU4(d){this.a=d},
eUm:function eUm(d){this.a=d},
eU3:function eU3(d){this.a=d},
eU1:function eU1(){},
eU0:function eU0(){},
eU_:function eU_(d){this.a=d},
eTZ:function eTZ(d){this.a=d},
bxG:function bxG(d,e){this.b=d
this.a=e},
flN:function flN(d,e,f){this.a=d
this.b=e
this.c=f},
flO:function flO(){},
flP:function flP(){},
Xr:function Xr(d){this.a=d},
aHk:function aHk(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.hi$=k
_.mn$=l
_.fk$=m
_.hj$=n
_.bw$=o
_.ab$=p
_.c=_.a=null},
ee2:function ee2(){},
eev:function eev(){},
eeh:function eeh(d,e){this.a=d
this.b=e},
ee8:function ee8(d,e){this.a=d
this.b=e},
eei:function eei(d){this.a=d},
ee7:function ee7(d){this.a=d},
eej:function eej(d){this.a=d},
eeg:function eeg(d){this.a=d},
een:function een(d){this.a=d},
eef:function eef(d){this.a=d},
eeo:function eeo(d){this.a=d},
eee:function eee(d,e){this.a=d
this.b=e},
eep:function eep(d){this.a=d},
eeq:function eeq(d){this.a=d},
eed:function eed(d,e){this.a=d
this.b=e},
eer:function eer(d){this.a=d},
eec:function eec(d,e){this.a=d
this.b=e},
ees:function ees(d){this.a=d},
eeb:function eeb(d,e){this.a=d
this.b=e},
eet:function eet(d){this.a=d},
eea:function eea(d,e){this.a=d
this.b=e},
eeu:function eeu(d){this.a=d},
ee9:function ee9(d){this.a=d},
eek:function eek(d){this.a=d},
ee6:function ee6(d){this.a=d},
eel:function eel(d){this.a=d},
ee5:function ee5(d){this.a=d},
eem:function eem(d){this.a=d},
ee4:function ee4(d){this.a=d},
ee1:function ee1(d){this.a=d},
ee0:function ee0(){},
ee3:function ee3(d,e){this.a=d
this.b=e},
ee_:function ee_(d){this.a=d},
bfI:function bfI(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Ya:function Ya(d){this.a=d},
bpV:function bpV(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.hi$=e
_.mn$=f
_.fk$=g
_.hj$=h
_.bw$=i
_.ab$=j
_.c=_.a=null},
eMB:function eMB(d,e){this.a=d
this.b=e},
eMC:function eMC(d,e){this.a=d
this.b=e},
eMA:function eMA(d,e){this.a=d
this.b=e},
eMD:function eMD(d,e){this.a=d
this.b=e},
eMz:function eMz(d,e){this.a=d
this.b=e},
bxd:function bxd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fjW:function fjW(d){this.a=d},
aPS:function aPS(){},
bD_:function bD_(){},
aQo:function aQo(){},
bDb:function bDb(){},
aQr:function aQr(){},
bDd:function bDd(){},
ikw(){var x,w,v,u=C.a([],y.A),t=C.a([],y.g)
for(x=0;x<150;++x){w=new C.e7()
w.cW(x)
w=w.ai()
v=new C.e7()
v.cW(x+500)
t.push(new C.m(w,v.ai()))}return new B.bov(new C.cB(null,y.z),new B.QU(A.cW),u,A.aB,t,$,A.bI,0,C.a([],y.X),null,null)},
Rt:function Rt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Wt:function Wt(d){this.a=d},
bov:function bov(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.hi$=i
_.mn$=j
_.fk$=k
_.hj$=l
_.bw$=m
_.ab$=n
_.c=_.a=null},
dVb:function dVb(){},
dV_:function dV_(){},
dV0:function dV0(d,e){this.a=d
this.b=e},
dV1:function dV1(d,e){this.a=d
this.b=e},
dUZ:function dUZ(d){this.a=d},
dUY:function dUY(d){this.a=d},
dV3:function dV3(d){this.a=d},
dUX:function dUX(d,e){this.a=d
this.b=e},
dV4:function dV4(d){this.a=d},
dUW:function dUW(d){this.a=d},
dV5:function dV5(d){this.a=d},
dUV:function dUV(d){this.a=d},
dV6:function dV6(d){this.a=d},
dUU:function dUU(d){this.a=d},
dV7:function dV7(d){this.a=d},
dUT:function dUT(d){this.a=d},
dV8:function dV8(d){this.a=d},
dUS:function dUS(d){this.a=d},
dV9:function dV9(d){this.a=d},
dUR:function dUR(d){this.a=d},
dVa:function dVa(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
dV2:function dV2(d){this.a=d},
dUP:function dUP(d){this.a=d},
bf2:function bf2(d,e){this.b=d
this.a=e},
aht:function aht(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xo:function Xo(d){this.a=d},
bp0:function bp0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.hi$=p
_.mn$=q
_.fk$=r
_.hj$=s
_.bw$=t
_.ab$=u
_.c=_.a=null},
ecJ:function ecJ(d){this.a=d},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecB:function ecB(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecC:function ecC(d){this.a=d},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecD:function ecD(d){this.a=d},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecE:function ecE(d){this.a=d},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecF:function ecF(d){this.a=d},
ect:function ect(d,e){this.a=d
this.b=e},
ecG:function ecG(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecq:function ecq(d){this.a=d},
bku:function bku(d,e){this.b=d
this.a=e},
dpU:function dpU(d){this.a=d},
Y5:function Y5(d){this.a=d},
bpU:function bpU(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.hi$=f
_.mn$=g
_.fk$=h
_.hj$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
eJD:function eJD(d,e){this.a=d
this.b=e},
eJE:function eJE(d){this.a=d},
eJC:function eJC(d){this.a=d},
eJF:function eJF(d){this.a=d},
eJB:function eJB(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJA:function eJA(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJz:function eJz(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJy:function eJy(d,e){this.a=d
this.b=e},
eJJ:function eJJ(d){this.a=d},
eJx:function eJx(d,e){this.a=d
this.b=e},
eJK:function eJK(d){this.a=d},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJL:function eJL(d){this.a=d},
eJv:function eJv(d,e){this.a=d
this.b=e},
bwp:function bwp(d,e){this.b=d
this.a=e},
aPn:function aPn(){},
bCR:function bCR(){},
aPO:function aPO(){},
bCZ:function bCZ(){},
aQm:function aQm(){},
bDa:function bDa(){},
h6N(d,e,f){return B.iGx(d,e,f)},
iGx(d,e,f){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p,o,n,m
var $async$h6N=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
s=C.i4([d],f)
p=(self.URL||self.webkitURL).createObjectURL(s)
p.toString
r=p
o=C.np(r)
o.download=e
p=o.style
p.display="none"
q=o
p=document.body
if(p!=null)p.appendChild(q).toString
J.Ib(q)
x=7
return C.b(C.bM(A.j5,null,y.H),$async$h6N)
case 7:J.me(q);(self.URL||self.webkitURL).revokeObjectURL(r)
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$h6N,w)}},D,E,F,A3,G,K,A4,A5,A6,T,H,A7
J=c[1]
C=c[0]
A=c[2]
U=c[275]
V=c[126]
L=c[136]
W=c[90]
X=c[185]
Y=c[59]
M=c[125]
N=c[167]
O=c[178]
P=c[182]
I=c[193]
Q=c[139]
Z=c[190]
A_=c[164]
A0=c[158]
A1=c[253]
A2=c[304]
R=c[177]
S=c[176]
B=a.updateHolder(c[34],B)
D=c[3]
E=c[45]
F=c[141]
A3=c[135]
G=c[297]
K=c[284]
A4=c[168]
A5=c[228]
A6=c[155]
T=c[267]
H=c[62]
A7=c[309]
B.bqS.prototype={}
B.RN.prototype={
ga0(d){return this.d}}
B.Yi.prototype={
R(){var x=C.a([],y.G),w=C.a([],y.Z)
return new B.bpZ(new C.cB(null,y.z),x,w,A.cW,A.bI,D.Hk,null,null)}}
B.bpZ.prototype={
b5t(d,e){var x,w,v,u=this
if(u.ch)x=!e&&u.y-u.CW<120
else x=!0
if(x)return
u.CW=u.y
x=u.c
x.toString
w=A.n.D(A.h.ba((1-d.b/(C.aE(x,null,y.m).w.a.b*0.7))*10),0,9)
v=D.aEc[A.n.F(w,5)]+12*A.n.ao(w,5)+12
switch(u.z){case"glow":B.mR("synth",v,420,0.3)
break
case"rainbow":B.mR("bell",v,700,0.35)
break
case"stars":B.mR("pluck",v+12,400,0.4)
break
case"sparks":E.dI(2400+u.r.aw(2000),"",60,0,0.18,"noise")
break
default:E.dI(110+u.r.aw(60),"",140,0,0.22,"noise")}},
cjw(d){return this.b5t(d,!1)},
Z(){var x,w=this
w.a4()
x=w.qm(new B.eUN(w))
x.fV(0)
w.w!==$&&C.aT()
w.w=x},
t(){var x=this.w
x===$&&C.d()
x.t()
this.bDy()},
gb7g(){var x=this.Q
return x<0?new H.pI(1,A.h.F(this.y*0.18,360),0.85,1).jo():D.EM[x]},
aXq(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.gb7g(),k=m.z
if(k==="fire")x=5
else x=k==="sparks"?4:1
for(k=m.f,w=m.r,v=d.a,u=d.b+0,t=0;t<x;++t){s=w.ai()*3.141592653589793*2
switch(m.z){case"fire":r=w.ai()
q=m.as
p=w.ai()
o=w.ai()
n=C.ap(A.bu,A.aC,w.ai())
n.toString
k.push(new B.RN(new C.m(v+(r-0.5)*q,u),new C.m((p-0.5)*40,-60-o*120),n,m.as*(0.3+w.ai()*0.4),m.y,700+w.aw(500)))
break
case"sparks":r=Math.cos(s)
q=Math.sin(s)
p=40+w.ai()*200
o=C.ap(l,A.c,w.ai()*0.6)
o.toString
k.push(new B.RN(d,new C.m(r*p,q*p),o,1.5+w.ai()*3,m.y,600+w.aw(600)))
break
default:r=Math.cos(s)
q=Math.sin(s)
p=10+w.ai()*40
k.push(new B.RN(d,new C.m(r*p,q*p),l,1.2+w.ai()*1.8,m.y,500))}}},
b3T(d,e){var x,w,v,u,t,s=this
s.ay=!0
x=s.z
if(x==="glow"||x==="rainbow"||x==="stars"){w=s.gb7g()
v=s.as
u=s.Q<0||s.z==="rainbow"
t=C.a([],y.g)
s.ax=new B.bqS(t,x,w,v,u)
t.push(e)
t=s.ax
t.toString
s.e.push(t)}s.aXq(e)
s.b5t(e,!0)
s.l(new B.eUo())},
b3S(){this.ax=null
this.l(new B.eUn())},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=y.p,m=C.a([C.aI(o,o,o,o,D.pc,o,o,o,new B.eUx(p,d),o,o,o,o,"Share",o)],n),l=p.e,k=C.a([C.b4(o,o,o,new B.bxJ(l,p.f,p.y,p.at,o),A.aB)],n)
if(!p.ay&&l.length===0)k.push(D.bhn)
l=C.aA(A.c0,new C.am(A.a0,o,A.b6,A.t,k,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.eUy(p),new B.eUz(p),new B.eUD(p),o,o,o,o,o,o,o,o,o,new B.eUE(p),new B.eUF(p),o,o,o,!1,A.a4)
k=C.a([],n)
for(x=0;x<5;++x){w=D.dg0[x]
k.push(new B.e6(w.b,p.z===w.a,new B.eUG(p,w),w.c,A.c6,o))}v=C.a([new B.GC(A.c,p.Q<0,new B.eUH(p),!0,o)],n)
for(u=0;u<8;++u)v.push(new B.GC(D.EM[u],p.Q===u,new B.eUI(p,u),!1,o))
t=p.as
t=B.jh(A.c6,A.n.v(A.h.S(t)),"Size",36,4,new B.eUJ(p),t)
s=p.ch
r=s?S.pa:R.u2
r=C.a([new B.e6("Sound",s,new B.eUK(p),r,A.c6,o),new B.fN(A.qd,"Undo",new B.eUA(p),A.c,o),new B.fN(D.xv,"Clear",new B.eUB(p),A.c3,o)],n)
for(x=0;x<4;++x){q=D.dzH[x]
r.push(new B.GC(q,p.at.A(0,q),new B.eUC(p,q),!1,o))}return B.m3(A.c6,m,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.ea(l,p.d),"SPARK PAINTER",C.w(C.a([new B.fm(k,"BRUSH",o),new B.fm(v,"COLOUR",o),t,new B.fm(r,o,o)],n),A.l,o,A.e,A.P,0,A.p))}}
B.bxJ.prototype={
a5(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
$.U()
x=C.L()
w=a1.e
x.r=w.gp(w)
a3.aE(new C.a5(0,0,0+a4.a,0+a4.b),x)
for(x=a1.b,w=x.length,v=y.v,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
s=t.a
r=s.length
if(r===0)continue
switch(t.b){case"glow":r=$.U()
q=C.a([],v)
p=new C.aJ(r.r,A.ak,a2,a2,q)
q.push(new C.aZ(A.d.gH(s).a,A.d.gH(s).b))
p.ac()
for(r=C.T(s),o=r.k("ia<1>"),n=new C.ia(s,1,a2,o),n.mz(s,1,a2,r.c),n=new C.bQ(n,n.gI(0),o.k("bQ<aj.E>")),o=o.k("aj.E");n.B();){r=n.d
if(r==null)r=o.a(r)
r=new C.aq(r.a,r.b)
q.push(r)
m=p.f
if(m!=null)r.aj(m)
p.ac()}if(s.length===1){s=A.d.gH(s)
$.U()
r=new C.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=t.c.gp(0)
a3.O(s,t.d/2,r)}$.U()
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.b=A.ae
s.d=A.bH
s.e=A.dQ
r=t.d
s.c=r*2.2
q=t.c
s.r=q.j(0.45).gp(0)
s.y=new C.h5(A.G,r)
a3.af(p,s)
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.b=A.ae
s.d=A.bH
s.e=A.dQ
s.c=r
s.r=q.gp(0)
a3.af(p,s)
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.b=A.ae
s.d=A.bH
s.e=A.dQ
s.c=r*0.35
s.r=A.c.j(0.85).gp(0)
a3.af(p,s)
break
case"rainbow":for(r=t.d,l=1;l<s.length;++l){k=new H.pI(1,A.n.F(l*5,360),0.85,1).jo()
q=s[l-1]
o=s[l]
$.U()
n=new C.ar(A.V,A.R,A.X,A.Y,A.W)
n.c=r
n.d=A.bH
n.r=k.gp(0)
a3.ah(q,o,n)}break
case"stars":for(q=t.d,o=q*2.1,n=t.c,m=t.e,q*=0.9,j=a2,i=0,h=0,g=0;g<s.length;s.length===r||(0,C.I)(s),++g,j=f){f=s[g]
if(j!=null){e=f.a-j.a
d=f.b-j.b
i+=Math.sqrt(e*e+d*d)}e=A.d.gH(s)
if(e.a===f.a&&e.b===f.b||i>o){a0=h+1
e=m?new H.pI(1,A.n.F(a0*23,360),0.7,1).jo():n
a1.cfK(a3,f,q,h*0.5,e)
h=a0
i=0}}break}}for(x=a1.c,w=x.length,v=a1.d,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){f=x[u]
h=A.h.D((v-f.e)/f.f,0,1)
s=f.a
$.U()
r=new C.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=f.c.j((1-h)*0.9).gp(0)
r.y=K.a31
a3.O(s,f.d*(1-0.6*h)+1,r)}},
cfK(d,e,f,g,h){var x,w,v,u,t,s,r,q=$.U(),p=C.a([],y.v),o=new C.aJ(q.r,A.ak,null,null,p)
for(q=e.a,x=e.b,w=f*0.45,v=0;v<10;++v){u=(v&1)===0?f:w
t=g+v*3.141592653589793/5-1.5707963267948966
s=q+Math.cos(t)*u
r=x+Math.sin(t)*u
if(v===0){s=new C.aZ(s,r)
p.push(s)
r=o.f
if(r!=null)s.aj(r)
o.ac()}else{s=new C.aq(s,r)
p.push(s)
r=o.f
if(r!=null)s.aj(r)
o.ac()}}o.E(new C.bz())
$.U()
q=C.L()
q.r=h.j(0.4).gp(0)
q.y=A.ld
d.af(o,q)
q=C.L()
q.r=h.gp(0)
d.af(o,q)},
aD(d){return!0}}
B.aQs.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.bbF.prototype={
C(d){var x,w=this,v=null,u=w.c,t=F.aM6.h(0,u)
$.avm=t==null?"music":t
t=w.d
x=y.p
u=C.a([C.aI(v,v,v,v,A3.nt,v,v,v,new B.cFm(d),v,v,v,v,v,v),C.E(C.c(u,v,1,A.a2,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,14.5,v,v,A.u,v,v,!0,v,1.6,v,v,v,v,v,v),v,v,v),1)],x)
A.d.u(u,w.w)
u.push(C.aI(v,v,v,v,C.V(A.DY,t,v,v,v,22),v,v,v,new B.cFn(w,d),v,v,v,v,"How to play",v))
x=C.a([new C.C(D.bMe,C.A(u,A.l,v,A.e,A.i,0,v,v),v),C.E(w.f,1)],x)
x.push(C.q(v,w.r,A.f,v,v,new C.p(F.CO,v,new C.bE(new C.ax(A.c.j(0.08),1,A.r,-1),A.a1,A.a1,A.a1),v,v,v,A.m),v,v,v,v,A.Dh,v,v,1/0))
return C.c6(v,A.c8,C.bm(!0,C.w(x,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.e6.prototype={
C(d){var x,w,v,u=this,t=null,s=C.n(999),r=u.d,q=r?u.r.j(0.22):A.c.j(0.06),p=r?u.r:A.c.j(0.12)
p=C.K(p,A.r,r?1.6:1)
x=y.p
w=C.a([],x)
v=u.f
if(v!=null)A.d.u(w,C.a([C.V(v,r?u.r:A.aR,t,t,t,16),A.dU],x))
w.push(C.c(u.c,t,t,t,t,t,t,C.l(t,t,r?A.c:A.ac,t,t,t,t,t,t,t,t,12,t,t,A.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
return new C.C(F.p0,C.aA(t,C.cZ(t,C.A(w,A.l,t,A.e,A.P,0,t,t),t,t,A.b1,new C.p(q,t,p,s,t,t,A.m),A.eN,t,t,t,t,A.h1,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cFi(u),t,t,t,t,t,t,!1,A.a4),t)}}
B.fm.prototype={
C(d){var x=null,w=C.a([],y.p),v=this.d
if(v!=null)w.push(new C.a4(54,x,C.c(v,x,x,x,x,x,x,C.l(x,x,A.c.j(0.45),x,x,x,x,x,x,x,x,10.5,x,x,A.u,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),x))
w.push(C.E(C.cb(C.A(this.c,A.l,x,A.e,A.i,0,x,x),A.t,x,A.y,x,x,x,x,x,A.aJ),1))
return new C.C(A.cA,C.A(w,A.l,x,A.e,A.i,0,x,x),x)}}
B.bbG.prototype={
C(d){var x,w,v=this,u=null,t=C.c(v.c,u,u,u,u,u,u,C.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,11.5,u,u,A.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),s=v.w
s=C.acB(d).biY(s,A.by,s.j(0.2),s,3.5)
x=v.f
w=v.r
s=C.E(C.ZV(C.kT(u,u,u,u,w,x,u,v.e,A.h.D(v.d,x,w)),s),1)
return new C.a4(u,34,C.A(C.a([new C.a4(78,u,t,u),s,new C.a4(38,u,C.c(v.x,u,u,u,u,u,u,A.LN,A.dR,u,u),u)],y.p),A.l,u,A.e,A.i,0,u,u),u)}}
B.fN.prototype={
C(d){var x=this,w=null,v=x.f,u=v.j(0.12)
return new C.C(F.p0,C.aG(!1,A.a3,!0,C.n(12),C.aM(!1,C.n(12),!0,new C.C(A5.aog,C.A(C.a([C.V(x.c,v,w,w,w,17),A.dU,C.c(x.d,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),A.l,w,A.e,A.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new B.cFh(x),w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w)}}
B.GC.prototype={
C(d){var x,w=this,v=null,u=w.d,t=u?34:28,s=u?34:28,r=w.f,q=r?v:w.c
r=r?D.fJ6:v
x=u?A.c:A.aT
x=C.K(x,A.r,u?2.5:1)
return C.aA(v,C.cZ(v,v,v,v,A.b1,new C.p(q,v,x,v,u?C.a([new C.ac(0,A.G,w.c.j(0.6),A.J,10)],y.V):v,r,A.a6),A.ho,v,s,v,D.ao2,v,v,v,t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.cFo(w),v,v,v,v,v,v,!1,A.a4)}}
B.o4.prototype={
VY(d,e){var x=C.dm()
x.sf1(C.cD(C.dx(0,0,0,d,0,0),new B.cFj(this,x,e)))
this.hj$.push(x.bg())},
my(){var x=this,w=x.qm(new B.cFl(x))
w.fV(0)
x.hi$!==$&&C.aT()
x.hi$=w}}
B.cjp.prototype={
M5(d){var x=this.c
x.qf(d&255)
x.qf(A.n.aH(d,8)&255)},
aJY(d,e,f,g,h,i){var x=this,w=x.c
w.K(0,D.cFb)
x.M5(i)
w.qf(255)
w.qf(0)
w.qf(44)
x.M5(d)
x.M5(e)
x.M5(f)
x.M5(g)
w.qf(0)
w.qf(8)
x.ca_(h)
w.qf(0)},
cRT(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.b
for(x=i,w=j,v=-1,u=-1,t=0;t<i;++t){s=t*j
for(r=0;r<j;++r){q=s+r
if(d[q]!==e[q]){if(r<w)w=r
if(r>v)v=r
if(t<x)x=t
if(t>u)u=t}}}if(v<0){k.aJY(0,0,1,1,new Uint8Array(C.cd(D.cz1)),f)
return}p=v-w+1
o=u-x+1
n=new Uint8Array(p*o)
for(t=0;t<o;++t){s=(x+t)*j+w
for(q=t*p,r=0;r<p;++r){m=s+r
l=e[m]
m=l===d[m]?255:l
n[q+r]=m}}k.aJY(w,x,p,o,n,f)},
ca_(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new Int32Array(5003)
A.ik.h0(i,0,5003,-1)
x=new Int32Array(5003)
j.a=9
j.b=j.c=0
w=new Uint8Array(255)
j.d=0
v=new B.cjr(j,this,w)
u=new B.cjq(j,v)
u.$1(256)
t=d[0]
A:for(s=d.length,r=258,q=1;q<s;++q){p=d[q]
o=(p<<12>>>0)+t
n=(p<<4^t)>>>0
m=i[n]
if(m===o){t=x[n]
continue A}if(m>=0){l=n===0?1:5003-n
do{n-=l
if(n<0)n+=5003
m=i[n]
if(m===o){t=x[n]
continue A}}while(m>=0)}u.$1(t)
if(r===4096){u.$1(256)
j.a=9
A.ik.h0(i,0,5003,-1)
r=258}else{m=j.a
if(r>=A.n.dJ(1,m))j.a=m+1
k=r+1
x[n]=r
i[n]=o
r=k}t=p}u.$1(t)
u.$1(257)
if(j.b>0)v.$1(j.c&255)
s=j.d
if(s>0){m=this.c
m.qf(s)
m.K(0,C.w8(w,0,j.d))}}}
B.fxR.prototype={}
B.bcy.prototype={
a5(d,e){var x=this
B.hVC(d,e,x.b,x.f,x.r,x.w,x.d,x.e,x.c)},
aD(d){var x=this
return d.b!==x.b||d.c!==x.c||d.d!==x.d||d.e!==x.e||d.f!==x.f||!d.r.A(0,x.r)||d.w!==x.w}}
B.Yu.prototype={
R(){return new B.avl(new C.au(new C.bd("NGMY",A.ba,A.aP),$.ay()),null,null)}}
B.avl.prototype={
gKM(){var x,w=this,v=w.d
if(v===$){x=C.br(null,C.dx(0,0,0,3200,0,0),null,1,null,w)
x.cU(0)
w.d!==$&&C.bF()
w.d=x
v=x}return v},
gud(){var x=D.EM[this.w]
return x},
Z(){this.a4()
var x=this.gKM()
x.dr()
x.e2$.K(0,this.gciT())},
ciU(){var x,w,v,u,t,s,r,q=this,p=q.gKM().x
p===$&&C.d()
x=q.e.a.a
w=Math.max(1,(x.length===0?A.mR:new C.mS(x)).gI(0))
if(q.Q&&p>=q.as)for(x=w-1,v=w<=1,u=0;u<w;++u){t=q.f
s=t==="type"
if(s)r=u/w/1.8
else r=v?0:u/x*0.45
if(q.as<r&&p>=r)if(s)E.dI(1500,"",35,0,0.18,"square")
else if(t==="glitch")E.dI(400+u*60,"",70,0,0.2,"square")
else{t=t==="neon"?"synth":"pluck"
B.mR(t,D.aD4[A.n.F(u,8)]+12,450,0.35)}}q.as=p},
t(){this.gKM().t()
var x=this.e
x.V$=$.ay()
x.W$=0
this.bzY()},
buI(d){var x
this.l(new B.cqE(this,d))
x=this.gKM()
x.iN(0,0)
x.cU(0)},
a78(){var x=0,w=C.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$a78=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.at>=0){x=1
break}s.l(new B.cqz(s))
u=4
o=s.e
n=A.a.i(o.a.a)
if(n.length===0)n="title"
m=C.ag("[^A-Za-z0-9_-]+",!0,!1,!1,!1)
r=C.aD(n,m,"_")
o=o.a.a
n=s.f
m=s.r
l=s.y
k=s.gud()
j=s.x
x=7
return C.b(B.hwg(D.a8j[s.z].b,l,k,j,20,1080,n,new B.cqA(s),m,o),$async$a78)
case 7:q=e
if(J.aa(q)===0){o=C.be("empty")
throw C.Y(o)}x=8
return C.b(B.aUw(q,r),$async$a78)
case 8:p=e
if(s.c!=null)s.l(new B.cqB(s,p))
u=2
x=6
break
case 4:u=3
h=t.pop()
if(s.c!=null)s.l(new B.cqC(s))
x=6
break
case 3:x=2
break
case 6:if(s.c!=null)s.l(new B.cqD(s))
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$a78,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=C.at(new C.fM(D.a8j[l.z].b,C.bv(C.n(22),new C.ea(C.ca(l.gKM(),new B.cqo(l),k),k),A.ap),k),k,k,k),i=A.c.j(0.06)
i=C.aO(k,A.M,!1,k,!0,A.t,k,C.aP(),l.e,k,k,k,k,k,2,C.bB(k,new C.b5(4,C.n(14),A.a1),k,k,k,k,"",k,!0,k,k,k,k,k,k,i,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,A.FW,"Type your title",k,k,k,k,k,!0,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),A.y,!0,k,!0,k,!1,k,A.am,k,k,k,k,k,k,k,28,k,1,k,k,!1,"\u2022",k,new B.cqp(l),k,k,k,!1,k,k,!1,k,!0,k,A.ad,k,k,k,k,k,k,k,k,k,k,k,A.h6,!0,A.a8,k,A.ao,k,k,k,k)
x=y.p
w=C.a([],x)
for(v=0;v<24;++v){u=D.dFI[v]
w.push(new B.e6(u.b,l.f===u.a,new B.cqq(l,u),k,A.bu,k))}t=C.a([],x)
for(v=0;v<8;++v){u=D.dfE[v]
t.push(new B.e6(u.b,l.r===u.a,new B.cqr(l,u),k,A.c6,k))}s=C.a([],x)
for(r=0;r<20;++r){q=D.dKE[r]
s.push(new B.e6(q.a+" "+q.b,l.y===r,new B.cqs(l,r),k,A.aH,k))}q=C.a([],x)
for(r=0;r<8;++r)q.push(new B.GC(D.EM[r],l.w===r,new B.cqt(l,r),!1,k))
p=C.a([],x)
for(r=0;r<3;++r)p.push(new B.e6(D.a8j[r].a,l.z===r,new B.cqu(l,r),k,A.bu,k))
p.push(A.b7)
o=l.Q
n=o?"Sound on":"Sound off"
m=o?S.pa:R.u2
p.push(new B.e6(n,o,new B.cqv(l),m,A.bu,k))
p.push(A.b7)
p.push(new B.fN(A.oi,"Replay",new B.cqw(l),A.c,k))
m=l.x
m=C.a([i,A.N,new B.fm(w,"MOVE",k),new B.fm(t,"LOOK",k),new B.fm(s,"SCENE",k),new B.fm(q,"COLOUR",k),new B.fm(p,"SHAPE",k),B.jh(A.bu,A.n.v(A.h.S(m)),"Size",96,28,new B.cqx(l),m),A.at],x)
i=l.at
if(i>=0)m.push(new C.C(A.jZ,C.w(C.a([C.bv(C.n(6),C.jK(A.by,k,A.bu,8,k,i,k),A.ap),A.at,C.c("Making your animation\u2026 "+A.h.S(i*100)+"%",k,k,k,k,k,k,A.nH,k,k,k)],x),A.l,k,A.e,A.i,0,A.p),k))
else m.push(new C.a4(1/0,k,C.df(A.om,k,D.hgl,l.gcX1(),C.bp(A.bu,k,k,k,A.v,k,A.kO,k,k,k,k,k)),k))
i=l.ax
if(i.length!==0)m.push(new C.C(A.hA,C.c(i,k,k,k,k,k,k,D.fLl,A.K,k,k),k))
return B.m3(A.bu,A.fh,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a sharp moving GIF to post or send.",new C.C(A.bD,j,k),"TITLE ANIMATOR",C.w(m,A.l,k,A.e,A.P,0,A.p))},
ga0(d){return this.x}}
B.aIu.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.adB.prototype={
bG1(d,e,f,a0,a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=-999
for(x=h.y,w=x.length,v=g,u=v,t=999,s=999,r=0;q=x.length,r<q;x.length===w||(0,C.I)(x),++r)for(q=A.d.gae(x[r]);q.B();){p=q.gP(0)
o=J.a1(p)
if(o.h(p,0)<t)t=o.h(p,0)
if(o.h(p,0)>u)u=o.h(p,0)
if(o.h(p,1)<s)s=o.h(p,1)
if(o.h(p,1)>v)v=o.h(p,1)}h.z!==$&&C.aT()
h.z=t
h.Q!==$&&C.aT()
h.Q=u
h.as!==$&&C.aT()
h.as=s
h.at!==$&&C.aT()
h.at=v
for(n=0,r=0;r<x.length;x.length===q||(0,C.I)(x),++r){for(w=A.d.gae(x[r]),m=g,l=m,k=999,j=999;w.B();){p=w.gP(0)
o=J.a1(p)
if(o.h(p,0)<k)k=o.h(p,0)
if(o.h(p,0)>l)l=o.h(p,0)
if(o.h(p,1)<j)j=o.h(p,1)
if(o.h(p,1)>m)m=o.h(p,1)}i=Math.max(l-k,m-j)
if(i>n)n=i}h.ax!==$&&C.aT()
h.ax=n
x=h.bJl()
h.ay!==$&&C.aT()
h.ay=x},
bJl(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.y,w=x.length,v=0,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
for(s=0,r=0;r<t.length-1;r=q){q=r+1
p=(J.t(t[r],1)+J.t(t[q],1))/2*3.141592653589793/180
o=J.t(t[r],0)
n=Math.cos(p)
m=J.t(t[r],1)
l=J.t(t[q],0)
k=Math.cos(p)
s+=o*n*J.t(t[q],1)-l*k*m}v+=Math.abs(s)/2}return v*111.32*111.32},
H4(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.z
l===$&&C.d()
x=!0
if(!(e<l)){l=m.Q
l===$&&C.d()
if(!(e>l)){l=m.as
l===$&&C.d()
if(!(f<l)){l=m.at
l===$&&C.d()
l=f>l}else l=x}else l=x}else l=x
if(l)return!1
for(l=m.y,x=l.length,w=0;w<l.length;l.length===x||(0,C.I)(l),++w){v=l[w]
for(u=v.length-1,t=!1,s=0;s<v.length;r=s+1,u=s,s=r){q=J.t(v[s],0)
p=J.t(v[s],1)
o=J.t(v[u],0)
n=J.t(v[u],1)
if(p>f!==n>f&&e<(o-q)*(f-p)/(n-p)+q)t=!t}if(t)return!0}return!1}}
B.adC.prototype={
cR2(d,e){var x,w,v,u,t,s,r,q
for(x=d;x>180;)x-=360
while(x<-180)x+=360
for(w=this.a,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
if(s.H4(0,x,e)){if(u!=null){r=s.ax
r===$&&C.d()
q=u.ax
q===$&&C.d()
q=r<q
r=q}else r=!0
if(r)u=s}}return u}}
B.w7.prototype={}
B.QV.prototype={}
B.z2.prototype={}
B.QU.prototype={
fI(d,e,f){var x,w,v,u=this
if(!f)return
if((u.a+=e)<2.8)return
u.a=0
x=u.b
w=D.cgS[x.aw(7)]
x=x.he()?0:12
v=A.n.F(u.c++,3)===0?"flute":"bell"
B.mR(v,w+x-12,2200,0.1)}}
B.Xq.prototype={
R(){var x=$.ay()
return new B.aHj(new C.cB(null,y.z),new C.au(A.ay,x),new B.QU(A.cW),D.dwF,A.aB,D.a80,$,A.bI,0,C.a([],y.X),null,null)}}
B.aHj.prototype={
Z(){var x=this
x.a4()
x.my()
x.a.toString
x.b1i()},
b1i(){var x=this
x.l(new B.edq(x))
B.bcJ().bB(new B.edr(x),y.P).eG(new B.eds(x))},
t(){var x=this.e
x.V$=$.ay()
x.W$=0
this.bCX()},
cDV(d){var x,w,v,u,t,s,r,q,p,o
this.r=d
x=C.a([],y.y)
for(w=d.a,v=w.length,u=y.l,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
r=C.a([],u)
for(q=s.y,p=q.length,o=0;o<q.length;q.length===p||(0,C.I)(q),++o)r.push(new B.edt(q[o]).$0())
x.push(r)}this.w=x},
gYl(){var x=this.fy
return x.A(0,A.aB)?100:Math.min(x.a,x.b)*0.43},
axI(d,e,f){var x=this
x.at=d
x.ax=e
x.ay=A.h.D(f,1,16)
x.Q=x.as=0},
aEx(d){var x
this.fx=d
x=d.ax
x===$&&C.d()
this.axI(d.x,d.w,105/Math.max(x,3))
C.f4()
B.mR("bell",(A.d.c8(D.a7A,d.c)+1)*3+12,900,0.45)
E.dI(300,"",280,1.4,0.15,"tri")},
mR(d){var x,w,v,u,t,s,r,q=this
q.f.fI(0,d,q.db)
if(q.at!=null){x=1-Math.exp(-d*3.6)
w=q.ax
w.toString
v=q.y
u=w-v
while(u>180)u-=360
while(u<-180)u+=360
q.y=v+u*x
w=q.x
v=q.at
v.toString
w+=(v-w)*x
q.x=w
t=q.z
s=q.ay
s.toString
t+=(s-t)*x
q.z=t
if(Math.abs(u)<0.2&&Math.abs(v-w)<0.2&&Math.abs(s-t)<0.02)q.at=q.ax=q.ay=null}else if(!q.dx){q.y=q.y+q.Q*d
q.x=A.h.D(q.x+q.as*d,-85,85)
r=Math.exp(-d*2.2)
w=q.Q*=r
q.as*=r
if(q.ch&&Math.abs(w)<3)q.y=q.y+7*d/Math.sqrt(q.z)}while(w=q.y,w>180)q.y=w-360
while(w<-180){w+=360
q.y=w}},
ciY(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.r
if(n==null||o.fy.A(0,A.aB))return null
x=o.fy
w=o.gYl()
v=o.z
u=(d.a-x.a/2)/(w*v)
t=(x.b/2-d.b)/(o.gYl()*v)
s=u*u+t*t
if(s>1)return null
r=Math.sqrt(1-s)
q=o.x*3.141592653589793/180
p=Math.asin(A.h.D(r*Math.sin(q)+t*Math.cos(q),-1,1))
return n.cR2((o.y*3.141592653589793/180+Math.atan2(u,r*Math.cos(q)-t*Math.sin(q)))*180/3.141592653589793,p*180/3.141592653589793)},
ciX(d){var x=this,w=x.r
if(w==null||A.a.i(d).length===0){x.l(new B.edm(x))
return}x.l(new B.edn(x,w,A.a.i(d).toLowerCase()))},
bWQ(){var x=null,w=this.c
w.toString
C.cf(x,x,!0,x,new B.edk(),w,x,!0,!0,y.H)},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.fx,m=y.p,l=C.a([C.aI(o,o,o,o,D.c_s,o,o,o,p.gbWP(),o,o,o,o,"Earth facts",o),C.aI(o,o,o,o,D.pc,o,o,o,new B.edM(p,d),o,o,o,o,"Share",o)],m),k=C.cg(new B.edN(p,n)),j=A.c.j(0.06)
j=C.a([C.aO(o,A.M,!1,o,!0,A.t,o,C.aP(),p.e,o,o,o,o,o,2,C.bB(o,new C.b5(4,C.n(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,j,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.FW,"Search a country",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,D.c8j,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,p.gciW(),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.jO,!0,A.a8,o,A.ao,o,o,o,o)],m)
if(p.id.length!==0){x=C.a([],m)
for(w=p.id,v=w.length,u=0;u<w.length;w.length===v||(0,C.I)(w),++u){t=w[u]
x.push(new B.e6(t.a,!1,new B.edO(p,t),A.mE,A.aH,o))}j.push(new C.C(A.hA,new C.a4(o,38,C.cj(x,o,o,o,o,o,A.aJ,!1),o),o))}j.push(A.aj)
x=C.a([new B.e6("Whole Earth",!1,new B.edS(p),A.i4,A.aH,o)],m)
for(w=D.aM5.gdV(D.aM5),w=w.gae(w);w.B();){v=w.gP(w)
x.push(new B.e6(v.a,!1,new B.edT(p,v),o,A.aH,o))}x.push(new B.e6("Random",!1,new B.edU(p),A.oe,A.aH,o))
j.push(new B.fm(x,"GO TO",o))
x=p.z
j.push(B.jh(A.aH,A.h.a1(x,1)+"x","Zoom",16,0.8,new B.edV(p),x))
x=p.dy
j.push(B.jh(A.bu,A.a.aY(A.n.v(A.h.ba(x)),2,"0")+":00","Time",24,0,new B.edW(p),x))
x=p.fr
j.push(B.jh(A.bf,p.cCB(),"Season",365,0,new B.edX(p),x))
x=p.ch
w=p.CW
v=p.cx
s=p.cy
r=p.db
q=r?A.lI:D.IK
j.push(new B.fm(C.a([new B.e6("Spin",x,new B.edY(p),A1.QJ,A.aH,o),new B.e6("Night",w,new B.edZ(p),A.vy,A.aH,o),new B.e6("Borders",v,new B.edP(p),D.bVw,A.aH,o),new B.e6("Names",s,new B.edQ(p),L.DZ,A.aH,o),new B.e6("Music",r,new B.edR(p),q,A.aH,o)],m),o,o))
return B.m3(A.aH,l,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",k,"EARTH GLOBE",C.w(j,A.l,o,A.e,A.P,0,A.p))},
cCB(){var x,w,v
for(x=this.fr,w=0,v=0;v<12;++v)if(x>=D.aEq[v])w=v
return A.i6[w]+" "+(A.h.ba(x-D.aEq[w])+1)},
ciV(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.ay
j===$&&C.d()
x=j>0?d.e/j:0
w=d.e
v=w/79e8*100
u=d.c
t=new H.pI(1,A.n.F((A.d.c8(D.a7A,u)+1)*47,360),0.55,1).jo()
s=new B.edi()
r=C.n(20)
q=C.K(t.j(0.6),A.r,1)
p=y.p
o=C.A(C.a([C.q(k,k,A.f,k,k,new C.p(t,k,k,k,k,k,A.a6),k,10,k,k,k,k,k,10),A.aa,C.E(C.c(d.a,k,1,A.a2,k,k,k,A.dw,k,k,k),1),C.aI(k,k,k,k,P.Eg,k,k,k,new B.edh(this),k,k,k,k,k,A.cp)],p),A.l,k,A.e,A.i,0,k,k)
n=d.d
u=C.c(u+(n.length!==0?" \xb7 "+n:""),k,k,k,k,k,k,W.hI,k,k,k)
n=D.dOK.h(0,d.b)
n=s.$2("CAPITAL",n==null?"\u2014":n)
m=w>0
w=C.A(C.a([n,A.aa,s.$2("PEOPLE",m?B.fU6(w):"\u2014")],p),A.l,k,A.e,A.i,0,k,k)
j=s.$2("SIZE",B.I7(j)+" km\xb2")
if(m)n=(x<10?A.h.a1(x,1):B.I7(x))+" per km\xb2"
else n="\u2014"
n=C.A(C.a([j,A.aa,s.$2("CROWDING",n)],p),A.l,k,A.e,A.i,0,k,k)
j=s.$2("WORLD SHARE",(v<0.1?A.h.a1(v,3):A.h.a1(v,1))+"% of people")
m=d.f
l=d.r
return C.q(k,C.w(C.a([o,u,A.N,w,A.N,n,A.N,C.A(C.a([j,A.aa,s.$2("ECONOMY",m>0?"$"+B.fU6(m*1e6)+" \xb7 "+l:l)],p),A.l,k,A.e,A.i,0,k,k)],p),A.B,k,A.e,A.P,0,A.p),A.f,k,k,new C.p(D.a_e,k,q,r,k,k,A.m),k,k,k,k,D.aoy,k,k,k)}}
B.bkD.prototype={
a5(d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=$.U(),d5=C.L()
d5.r=D.CJ.gp(0)
d6.aE(new C.a5(0,0,0+d2,0+d3),d5)
x=new C.e7()
x.cW(4)
for(w=0;w<90;++w){d5=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.25+x.ai()*0.5).gp(0)
d6.O(new C.m(d5*d2,v*d3),u*1.2+0.3,t)}d2/=2
d3/=2
s=new C.m(d2,d3)
r=d0.f
d5=C.L()
v=y.O
d5.san(new C.bV(A.z,0.5,A.w,d1,0,C.a([A.L,A.aH.j(0.35),A.L],v),D.ddH,d1).az(0,C.c0(s,r*1.1)))
d6.O(s,r*1.05,d5)
q=C.c0(s,r)
d5=C.L()
d5.san(D.eS5.az(0,q))
d6.O(s,r,d5)
d5=d6.c
J.bs(d5.save())
u=y.v
d4=new C.aJ(d4.r,A.ak,d1,d1,C.a([],u))
d4.E(new C.jO(q))
d6.mL(0,d4)
p=d0.d*3.141592653589793/180
o=d0.e*3.141592653589793/180
n=Math.sin(p)
m=Math.cos(p)
l=Math.sin(o)
k=Math.cos(o)
j=C.L()
j.b=A.ae
p=j.c=0.7
j.r=A.c.j(0.1).gp(0)
i=new B.dsL(o,n,m,s,r)
for(h=-60;h<=60;h+=30){for(d4=h*3.141592653589793/180,g=d1,f=-180;f<=180;f+=4){e=i.$2(d4,f*3.141592653589793/180)
if(e==null){if(g!=null)d6.af(g,j)
g=d1}else{t=e.a
d=e.b
if(g==null){a0=$.U()
a1=C.a([],u)
g=new C.aJ(a0.r,A.ak,d1,d1,a1)
a1.push(new C.aZ(t,d))
g.ac()}else{t=new C.aq(t,d)
g.r.push(t)
d=g.f
if(d!=null)t.aj(d)
g.ac()}}}if(g!=null)d6.af(g,j)}for(f=-180;f<180;f+=30){for(d4=f*3.141592653589793/180,g=d1,h=-88;h<=88;h+=4){e=i.$2(h*3.141592653589793/180,d4)
if(e==null){if(g!=null)d6.af(g,j)
g=d1}else{t=e.a
d=e.b
if(g==null){a0=$.U()
a1=C.a([],u)
g=new C.aJ(a0.r,A.ak,d1,d1,a1)
a1.push(new C.aZ(t,d))
g.ac()}else{t=new C.aq(t,d)
g.r.push(t)
d=g.f
if(d!=null)t.aj(d)
g.ac()}}}if(g!=null)d6.af(g,j)}a2=d0.b
if(a2!=null&&d0.c.length===a2.a.length){a3=C.a([],y.E)
for(d4=a2.a,t=d0.c,d=!d0.y,a0=d0.w,a4=0;a4<d4.length;++a4){a5=d4[a4]
a6=a5===a0
a7=A.n.F((A.d.c8(D.a7A,a5.c)+1)*47,360)
$.U()
a8=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a1=a6?0.35:0.5
a8.r=new H.pI(1,a7,a1,a6?1:0.62).jo().gp(0)
a9=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a9.b=A.ae
a9.c=a6?2.2:p
a9.e=A.dQ
a9.r=(a6?A.c:A.v.j(0.55)).gp(0)
for(a1=t[a4],b0=a1.length,b1=0;b1<a1.length;a1.length===b0||(0,C.I)(a1),++b1){b2=a1[b1]
b3=b2.length/4|0
b4=$.U()
b5=C.a([],u)
b6=new C.aJ(b4.r,A.ak,d1,d1,b5)
for(b7=!1,w=0;w<b3;++w){b4=w*4
b8=b2[b4]
b9=b2[b4+1]
c0=b2[b4+2]
c1=b2[b4+3]
c2=c1*k+c0*l
c3=r*b9*(c0*k-c1*l)
c4=r*(m*b8-n*b9*c2)
if(n*b8+m*b9*c2>=0)b7=!0
else{c5=Math.sqrt(c3*c3+c4*c4)
if(c5>0){c3=c3/c5*r
c4=c4/c5*r}}b4=d2+c3
c6=d3-c4
if(w===0){b4=new C.aZ(b4,c6)
b5.push(b4)
c6=b6.f
if(c6!=null)b4.aj(c6)
b6.ac()}else{b4=new C.aq(b4,c6)
b5.push(b4)
c6=b6.f
if(c6!=null)b4.aj(c6)
b6.ac()}}if(!b7)continue
b4=new C.bz()
b5.push(b4)
b5=b6.f
if(b5!=null)b4.aj(b5)
b6.ac()
d6.af(b6,a8)
if(!d||a6)d6.af(b6,a9)
if(a6)a3.push(b6)}}for(u=a3.length,b1=0;b1<a3.length;a3.length===u||(0,C.I)(a3),++b1){g=a3[b1]
$.U()
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.b=A.ae
t.c=5
t.r=A.c.j(0.25).gp(0)
t.y=A.vt
d6.af(g,t)}if(d0.z)for(u=d4.length,t=d0.r,d=!(t<1.8),t=14/t,b1=0;b1<d4.length;d4.length===u||(0,C.I)(d4),++b1){a5=d4[b1]
a6=a5===a0
if(!a6)if(d){a1=a5.ax
a1===$&&C.d()
a1=a1<t}else a1=!0
else a1=!1
if(a1)continue
h=a5.x*3.141592653589793/180
f=a5.w*3.141592653589793/180
if(n*Math.sin(h)+m*Math.cos(h)*Math.cos(f-o)<0.25)continue
e=i.$2(h,f)
if(e==null)continue
a1=a6?13:10.5
b0=a6?A.c:A.c.j(0.9)
c7=B.ik5(a5.a,a1,b0)
b0=c7.b
a1=b0.c
b0=b0.a.c
b0=b0.gb4(b0)
c7.a5(d6,new C.m(e.a-a1/2,e.b-b0/2))}}if(d0.x){c8=-23.44*Math.cos(6.283185307179586*(d0.as+10)/365)*3.141592653589793/180
b8=Math.sin(c8)
b9=Math.cos(c8)
d4=-(d0.Q-12)*15*3.141592653589793/180-o
c9=Math.sin(d4)
c2=Math.cos(d4)
d4=A.h.D(n*b8+m*b9*c2,-1,1)
$.U()
u=C.L()
u.san(new C.bV(A.z,0.5,A.w,d1,0,C.a([A.L,A.L,D.bkA.j(0.78)],v),D.dx8,d1).az(0,C.c0(new C.m(d2+b9*c9*r,d3-(m*b8-n*b9*c2)*r),r*(1.15+0.5*(1-d4)*0.5))))
d6.O(s,r,u)}$.U()
d2=C.L()
d2.san(new C.bV(A.z,0.5,A.w,d1,0,C.a([A.L,A.v.j(0.4)],v),D.dMc,d1).az(0,q))
d6.O(s,r,d2)
d5.restore()
d5=C.L()
d5.b=A.ae
d5.c=1.4
d5.r=A.hn.j(0.5).gp(0)
d6.O(s,r,d5)},
aD(d){return!0}}
B.aPQ.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.aPR.prototype={
t(){var x,w,v
for(x=this.hj$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hi$
x===$&&C.d()
x.t()
this.bCW()}}
B.bzE.prototype={}
B.Yx.prototype={
R(){return new B.bqa()}}
B.bqa.prototype={
gaXT(){var x=this.d
if(x===$)x=this.d=A.cW.aw(16)
return x},
Z(){this.a4()
B.bcJ().fn(new B.f0G(),new B.f0H(),y.P)},
C(d){var x=null,w=C.eQ(x,x,x,!0,!0,D.CJ,x,1,!0,x,0,!1,x,!1,x,x,C.aI(x,x,x,x,D.auX,x,x,x,new B.f0D(d),x,x,x,x,x,x),x,!0,x,x,x,x,x,D.hjL,x,x,x,1,x,!0),v=C.n(18),u=A.aH.j(0.1),t=C.K(A.aH.j(0.35),A.r,1),s=y.p
return C.c6(w,D.CJ,C.cj(C.a([C.q(x,C.A(C.a([D.bZ4,A.ar,C.E(C.c(D.diw[this.gaXT()],x,x,x,x,x,x,D.h_M,x,x,x),1),C.aI(x,x,x,x,D.c9l,x,x,x,new B.f0E(this),x,x,x,x,"Another fact",x)],s),A.l,x,A.e,A.i,0,x,x),A.f,x,x,new C.p(u,x,t,v,x,x,A.m),x,x,x,x,A.bD,x,x,x),A.az,C.cg(new B.f0F())],s),x,x,A.a2s,x,x,A.ah,!1),x,!1,!1,x,x)}}
B.Yh.prototype={
R(){return B.iky()}}
B.bpY.prototype={
cu4(d){var x=d.c,w=B.ikA(x),v=d.e,u=v<=0?0:6.283185307179586*(this.f/v)+x*1.7
return new C.m(Math.cos(u)*w,Math.sin(u)*w)},
Z(){this.a4()
this.my()},
mR(d){var x,w,v,u=this
u.e.fI(0,d,u.ay)
u.f=u.f+d*u.r
x=u.Q
if(x!=null){w=u.cu4(x)
v=new C.m(-w.a,-w.b).aM(0,u.w)
w=C.l1(u.x,v,1-Math.exp(-d*5))
w.toString
u.x=w}},
gciZ(){var x=this.ch
return new C.m(x.a/2,x.b/2).a6(0,this.x)},
cj2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=d.a,w=d.b,v=null,u=30,t=0;t<10;++t){s=D.EJ[t]
r=j.ch
q=j.x
p=s.c
o=p===0?0:30+150*Math.sqrt(p/30.1)
n=s.e
m=n<=0?0:6.283185307179586*(j.f/n)+p*1.7
p=Math.cos(m)
n=Math.sin(m)
l=j.w
p=r.a/2+q.a+p*o*l-x
l=r.b/2+q.b+n*o*l-w
k=Math.sqrt(p*p+l*l)
if(k<u){u=k
v=s}}return v},
b5a(d){this.l(new B.eU2(this,d))
C.f4()
B.mR("bell",D.dMp[A.n.F(A.d.c8(D.EJ,d),10)]+12,1000,0.5)},
C(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=y.p,k=C.a([C.aI(n,n,n,n,D.pc,n,n,n,new B.eUd(o,d),n,n,n,n,"Share",n)],l),j=C.cg(new B.eUe(o,m)),i=C.a([new B.e6("All",!1,new B.eUf(o),A.a5s,A.aQ,n)],l)
for(x=0;x<10;++x){w=D.EJ[x]
i.push(new B.e6(w.a,o.z===w,new B.eUg(o,w),n,C.b_(w.z),n))}v=Math.log(o.r+1)
u=Math.log(3651)
t=o.r
t=t<10?A.h.a1(t,0)+" d/s":""+A.h.S(t)+" d/s"
u=B.jh(A.aQ,t,"Time",1,0,new B.eUh(o),v/u)
v=o.w
v=B.jh(A.aQ,A.h.a1(v,1)+"x","Zoom",9,0.5,new B.eUi(o),v)
t=o.as
s=o.at
r=o.ax
q=o.ay
p=q?A.lI:D.IK
return B.m3(A.aQ,k,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",j,"SOLAR SYSTEM",C.w(C.a([new B.fm(i,"GO TO",n),u,v,new B.fm(C.a([new B.e6("Orbits",t,new B.eUj(o),n,A.aQ,n),new B.e6("Names",s,new B.eUk(o),n,A.aQ,n),new B.e6("Asteroids",r,new B.eUl(o),n,A.aQ,n),new B.e6("Music",q,new B.eUm(o),p,A.aQ,n)],l),n,n)],l),A.l,n,A.e,A.P,0,A.p))},
cj_(d){var x,w,v,u,t,s=null,r=C.b_(d.z),q=d.c,p=q*8.317,o=new B.eU0(),n=C.n(20),m=C.K(r.j(0.6),A.r,1),l=C.q(s,s,A.f,s,s,new C.p(r,s,s,s,s,s,A.a6),s,12,s,s,s,s,s,12),k=d.b,j=k==="star"
if(j)k="Star"
else k=k==="dwarf"?"Dwarf planet":"Planet"
x=y.p
k=C.A(C.a([l,A.aa,C.E(C.c(d.a+"  \xb7  "+k,s,s,s,s,s,s,A.jr,s,s,s),1),C.aI(s,s,s,s,P.Eg,s,s,s,new B.eU_(this),s,s,s,s,s,A.cp)],x),A.l,s,A.e,A.i,0,s,s)
l=C.c(d.y,s,s,s,s,s,s,A0.FX,s,s,s)
w=o.$2("WIDTH",B.I7(d.d*2)+" km")
v=q===0
q=C.A(C.a([w,A.aa,o.$2("FROM THE SUN",v?"\u2014":C.v(q)+" AU ("+B.I7(q*149.6)+" million km)")],x),A.l,s,A.e,A.i,0,s,s)
w=d.e
w=o.$2("ONE YEAR",w===0?"\u2014":new B.eU1().$1(w))
u=d.f
w=C.A(C.a([w,A.aa,o.$2("ONE DAY",u>=48?A.h.a1(u/24,0)+" Earth days":A.h.a1(u,1)+" hours")],x),A.l,s,A.e,A.i,0,s,s)
u=d.r
t=u>50?0:1
t=C.A(C.a([o.$2("GRAVITY",C.v(u)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.h.a1(50*u/9.81,t)+" kg"),A.aa,o.$2("TEMPERATURE",""+A.n.S(d.x)+"\xb0C")],x),A.l,s,A.e,A.i,0,s,s)
u=o.$2("MOONS",j?"\u2014":""+d.w)
if(v)j="\u2014"
else j=p<90?A.h.a1(p,1)+" minutes":A.h.a1(p/60,1)+" hours"
return C.q(s,C.w(C.a([k,A.at,l,A.N,q,A.N,w,A.N,t,A.N,C.A(C.a([u,A.aa,o.$2("SUNLIGHT TAKES",j)],x),A.l,s,A.e,A.i,0,s,s)],x),A.B,s,A.e,A.P,0,A.p),A.f,s,s,new C.p(D.a_e,s,m,n,s,s,A.m),s,s,s,s,D.aoy,s,s,s)}}
B.bxG.prototype={
a5(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a7.a,a5=a7.b
$.U()
x=C.L()
x.r=D.CJ.gp(0)
a6.aE(new C.a5(0,0,0+a4,0+a5),x)
w=new C.e7()
w.cW(8)
for(v=0;v<110;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a6.O(new C.m(x*a4,u*a5),t*1.2+0.3,s)}a4=this.b
r=a4.gciZ()
q=a4.w
if(a4.as)for(a5=A.d.gae(D.EJ),x=new C.eT(a5,new B.flO());x.B();){u=a5.gP(0).c
u=u===0?0:30+150*Math.sqrt(u/30.1)
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.b=A.ae
t.c=1
t.r=A.c.j(0.12).gp(0)
a6.O(r,u*q,t)}if(a4.ax)for(a5=a4.CW,x=r.a,u=r.b,t=a4.cx,v=0;v<a5.length;++v){s=a5[v]
p=a4.f
o=t[v]
n=s+p*0.0016/o
m=(o===0?0:30+150*Math.sqrt(o/30.1))*q
s=Math.cos(n)
p=Math.sin(n)
o=new C.ar(A.V,A.R,A.X,A.Y,A.W)
o.r=A.c.j(0.5).gp(0)
a6.O(new C.m(x+s*m,u+p*m),0.9,o)}l=B.ikz(A.d.gH(D.EJ))*Math.sqrt(q)*1.4
a5=l*3.2
x=C.L()
u=y.O
x.san(new C.bV(A.z,0.5,A.w,a3,0,C.a([A.aQ.j(0.5),A.L],u),a3,a3).az(0,C.c0(r,a5)))
a6.O(r,a5,x)
x=C.L()
x.san(D.eS_.az(0,C.c0(r,l)))
a6.O(r,l,x)
if(a4.at){k=B.hKA("Sun",10.5,A.ac)
k.a5(a6,r.a6(0,new C.m(-k.b.c/2,l+4)))}for(a5=A.d.gae(D.EJ),x=new C.eT(a5,new B.flP()),t=q>1.6,s=r.a,p=r.b,o=a6.c;x.B();){j=a5.gP(0)
i=j.c
m=i===0?0:30+150*Math.sqrt(i/30.1)
h=j.e
n=h<=0?0:6.283185307179586*(a4.f/h)+i*1.7
i=s+Math.cos(n)*m*q
h=p+Math.sin(n)*m*q
g=new C.m(i,h)
m=(1.5+1.6*Math.log(j.d/1000+1))*Math.sqrt(q)
f=C.b_(j.z)
e=j.a
if(e==="Saturn"){J.bs(o.save())
o.translate(i,h)
o.rotate(-22.91831180523293,0,0)
d=C.c1(A.J,m*1.3,m*4.2)
a0=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a0.b=A.ae
a0.c=m*0.45
a0.r=A.bO.j(0.55).gp(0)
a6.c3(d,a0)
o.restore()}d=new C.ar(A.V,A.R,A.X,A.Y,A.W)
d.r=f.j(0.3).gp(0)
d.y=A.vt
a6.O(g,m+3,d)
d=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a0=C.ap(f,A.v,0.55)
a0.toString
d.san(new C.bV(N.C6,0.5,A.w,a3,0,C.a([A.c,f,a0],u),T.Ts,a3).az(0,C.c0(g,m)))
a6.O(g,m,d)
if(j===a4.z){j=new C.ar(A.V,A.R,A.X,A.Y,A.W)
j.b=A.ae
j.c=2
j.r=A.c.gp(0)
a6.O(g,m+7,j)}if(t&&e==="Earth"){n=a4.f/27.3*2*3.141592653589793
a1=m+11*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a2.r=A.c.gp(0)
a6.O(new C.m(i+j*a1,h+d*a1),1.8*a0,a2)}if(t&&e==="Jupiter")for(v=0;v<4;++v){n=a4.f/D.doW[v]*2*3.141592653589793
a1=m+(6+v*4)*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a2.r=A.ac.gp(0)
a6.O(new C.m(i+j*a1,h+d*a1),1.4*a0,a2)}if(a4.at){k=B.hKA(e,10.5,A.ac)
k.a5(a6,new C.m(i+-k.b.c/2,h+(m+4)))}}},
aD(d){return!0}}
B.Xr.prototype={
R(){var x=y.i
return new B.aHk(new B.QU(A.cW),C.c4(5,0,!1,x),C.c4(5,0,!1,x),C.c4(5,null,!1,y.B),A.J,A.J,C.a([],y.g),$,A.bI,0,C.a([],y.X),null,null)}}
B.aHk.prototype={
cHi(){var x,w,v,u,t=this
t.x=!0
t.y=0
for(x=t.z,w=t.Q,v=t.as,u=0;u<5;++u){x[u]=0
w[u]=0
v[u]=null}},
cj1(){var x,w,v,u,t=this,s="An oval orbit: it goes round Earth again and again."
t.cx=D.eEC
t.cy=new C.m(t.ay,0)
x=t.db
A.d.a7(x)
x.push(t.cx)
t.CW=!0
t.dy=0
w=Math.sqrt(58.86870477034412)
v=Math.sqrt(117.73740954068823)
x=t.ay
u=Math.abs(6771*x*x/398600-1)
if(x>=v)t.dx="It escapes Earth and never comes back."
else if(x>=w)t.dx=u<0.03?"A perfect circle: it orbits Earth forever.":s
else t.dx=6771*(1-u)/(1+u)>6371?s:"It is too slow, so it falls back to the ground."
E.dI(150,"",400,0,0.5,"noise")
E.dI(90,"",300,1.5,0.6,"sine")
t.l(new B.ee2())},
Z(){this.a4()
this.my()},
mR(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.e.fI(0,d,j.d!=="drop")
if(j.d==="drop"&&j.x){x=d*j.w
j.y+=x
for(w=j.z,v=x/12,u=j.Q,t=j.as,s=0;s<5;++s){if(t[s]!=null)continue
r=D.AQ[s]
q=r.c
if(j.f){p=j.r?1:0
o=1.6*q*p}else{p=j.r?1:0
o=0.002*q*p}for(q=r.b,n=0;n<12;++n){p=u[s]
p+=(q-o*p*Math.abs(p))*v
u[s]=p
p=w[s]+p*v
w[s]=p
if(p>=20){w[s]=20
t[s]=j.y
if(r.a!=="Sun")E.dI(60+q*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.cD(t,new B.eev()))j.x=!1}if(j.d==="cannon"&&j.CW){x=d*900/30
for(w=x/2,s=0;s<30;++s){u=j.cx
t=u.a
u=u.b
m=Math.sqrt(t*t+u*u)
u=j.cx
t=-398600/(m*m*m)
q=u.a
u=u.b
p=j.cy
l=p.a+q*t*w
t=p.b+u*t*w
j.cy=new C.m(l,t)
l=q+l*x
t=u+t*x
j.cx=new C.m(l,t)
k=Math.sqrt(l*l+t*t)
t=j.cy
l=j.cx
u=-398600/(k*k*k)
q=l.a
l=l.b
j.cy=new C.m(t.a+q*u*w,t.b+l*u*w)
j.dy+=x
if(Math.sqrt(q*q+l*l)<6371){j.CW=!1
E.dI(70,"",350,0,0.7,"noise")
break}}w=j.db
if(w.length===0||A.d.gal(w).aI(0,j.cx).gcF()>120)w.push(j.cx)
if(w.length>700)A.d.cP(w,0)
if(j.cx.gcF()>6e5)j.CW=!1}},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==="drop")o=q.bUR()
else o=o==="weight"?q.cP7():q.bMK()
x=y.p
w=C.a([],x)
for(v=0;v<3;++v){u=D.dIU[v]
w.push(new B.e6(u.b,q.d===u.a,new B.eeh(q,u),u.c,A.cX,p))}w=C.a([new B.fm(w,p,p)],x)
if(q.d==="drop"){t=q.f
s=q.r
r=s?"Air on":"Air off"
s=C.a([new B.e6("Hammer",!t,new B.eei(q),A_.DX,A.cX,p),new B.e6("Feather",t,new B.eej(q),L.DO,A.cX,p),new B.e6(r,s,new B.een(q),A.Iw,A.aH,p)],x)
r=q.w
A.d.u(w,C.a([new B.fm(s,p,p),B.jh(A.cX,""+A.h.S(r*100)+"%","Slow motion",1,0.05,new B.eeo(q),r),new B.fm(C.a([new B.fN(A.q8,"Drop!",new B.eep(q),A.bf,p)],x),p,p)],x))}if(q.d==="weight"){t=q.at
t=B.jh(A.cX,""+A.h.S(t)+" kg","Your weight",120,20,new B.eeq(q),t)
s=q.ax
A.d.u(w,C.a([t,B.jh(A.cX,""+A.h.S(s*100)+" cm","Your jump",1.2,0.1,new B.eer(q),s)],x))}if(q.d==="cannon"){t=q.ay
t=B.jh(A.cX,A.h.a1(t,1)+" km/s","Speed",13,0,new B.ees(q),t)
s=q.ch
A.d.u(w,C.a([t,B.jh(A.cX,A.h.a1(s,1)+"x out","View",8,0.5,new B.eet(q),s),new B.fm(C.a([new B.fN(A.ol,"Fire!",q.gcj0(),A.bf,p),new B.fN(A.q8,"Falls",new B.eeu(q),A.c,p),new B.fN(A.q5,"Orbit 7.7",new B.eek(q),A.c,p),new B.fN(D.bYv,"Oval 9",new B.eel(q),A.c,p),new B.fN(A.E2,"Escape",new B.eem(q),A.c,p)],x),p,p)],x))}return B.m3(A.cX,A.fh,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",o,"GRAVITY LAB",C.w(w,A.l,p,A.e,A.P,0,A.p))},
bUR(){return new C.C(D.bGX,C.cg(new B.ee1(this)),null)},
cP7(){var x,w,v,u=null,t=[D.fk0,D.flW,D.fm3,D.fmx,D.fm1,D.fmF,D.fkP,D.fn3,D.flz],s=y.p,r=C.a([D.h6W,A.S],s)
for(x=0;x<9;++x){w=t[x]
v=C.b_(w.c)
r.push(new C.C(A.cA,new C.c_(A.aJ,A.e,A.i,A.l,u,A.p,u,0,C.a([new C.a4(62,u,C.c(w.a,u,u,u,u,u,u,new C.G(!0,v,u,u,u,u,12.5,A.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u),u),new C.bu(1,A.b9,new C.Cs(new B.ee3(this,w),u),u)],s),u),u))}r.push(A.at)
r.push(D.h9o)
return C.cj(r,u,u,A.hq,u,u,A.ah,!1)},
bMK(){return C.cg(new B.ee_(this))}}
B.bfI.prototype={
a5(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.a,i=e.b,h=$.U(),g=C.L()
g.r=D.CJ.gp(0)
d.aE(new C.a5(0,0,0+j,0+i),g)
x=new C.e7()
x.cW(2)
for(w=0;w<80;++w){g=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.2+x.ai()*0.5).gp(0)
d.O(new C.m(g*j,v*i),u*1.1+0.3,t)}j=l.c
s=6371*j
i=l.b
g=C.L()
g.san(new C.bV(A.z,0.5,A.w,k,0,C.a([A.L,A.aH.j(0.35),A.L],y.O),D.dya,k).az(0,C.c0(i,s*1.1)))
d.O(i,s*1.06,g)
g=C.L()
g.san(D.eRW.az(0,C.c0(i,s)))
d.O(i,s,g)
r=i.a6(0,new C.m(0,-s))
h=h.r
g=y.v
q=new C.aJ(h,A.ak,k,k,C.a([],g))
v=r.a
u=r.b
t=u+3
q.E(new C.aZ(v-16,t))
q.E(new C.aq(v,u-400*j-4))
q.E(new C.aq(v+16,t))
q.E(new C.bz())
t=C.L()
t.r=A.an.gp(0)
d.af(q,t)
t=r.a6(0,new C.m(0,-400*j-6))
v=C.L()
v.r=A.c.gp(0)
d.O(t,4,v)
v=l.e
if(v.length>1){g=C.a([],g)
p=new C.aJ(h,A.ak,k,k,g)
h=i.a
u=i.b
p.E(new C.aZ(h+A.d.gH(v).a*j,u+A.d.gH(v).b*j))
for(v=C.cJ(v,1,k,C.T(v).c),t=v.$ti,v=new C.bQ(v,v.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");v.B();){o=v.d
if(o==null)o=t.a(o)
o=new C.aq(h+o.a*j,u+o.b*j)
g.push(o)
n=p.f
if(n!=null)o.aj(n)
p.ac()}$.U()
h=C.L()
h.b=A.ae
h.c=2.4
h.d=A.bH
h.r=A.cX.j(0.9).gp(0)
d.af(p,h)}if(l.f){h=l.d
m=i.a6(0,new C.m(h.a*j,h.b*j))
j=C.L()
j.r=A.cX.j(0.4).gp(0)
j.y=O.p1
d.O(m,7,j)
j=C.L()
j.r=A.c.gp(0)
d.O(m,4,j)}},
aD(d){return!0}}
B.Ya.prototype={
R(){return new B.bpV(new C.cB(null,y.z),$,A.bI,0,C.a([],y.X),null,null)}}
B.bpV.prototype={
Z(){this.a4()
this.my()},
mR(d){},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=D.TH[m.e],j=D.TH[m.f],i=k.b>=j.b,h=i?k:j,g=i?j:k
i=h.b
x=g.b
w=i/x
v=y.p
u=C.a([C.aI(l,l,l,l,D.pc,l,l,l,new B.eMB(m,d),l,l,l,l,"Share",l)],v)
t=C.E(C.b4(l,l,l,new B.bxd(g,h,w,l),A.hi),1)
s=h.a
r=w<10?A.h.a1(w,1):B.I7(w)
q=g.a
r=C.c(s+" is "+r+" times wider than "+q,l,l,l,l,l,l,A.hk,A.K,l,l)
p=B.I7(w*w*w)
o=A.a.c4(q,"s")?"":"s"
i=C.w(C.a([t,C.q(l,C.w(C.a([r,A.at,C.c("About "+p+" "+q+o+" would fit inside "+s+".",l,l,l,l,l,l,Q.uC,A.K,l,l),A.bs,C.c(q+": "+B.I7(x*2)+" km wide. "+s+": "+B.I7(i*2)+" km wide.",l,l,l,l,l,l,Q.yk,A.K,l,l)],v),A.l,l,A.e,A.i,0,A.p),A.f,l,l,l,l,l,l,l,A.ap7,l,l,1/0)],v),A.l,l,A.e,A.i,0,A.p)
s=C.a([],v)
for(n=0;n<10;++n){x=D.TH[n]
s.push(new B.e6(x.a,m.e===n,new B.eMC(m,n),l,C.b_(x.c),l))}x=C.a([],v)
for(n=0;n<10;++n){t=D.TH[n]
x.push(new B.e6(t.a,m.f===n,new B.eMD(m,n),l,C.b_(t.c),l))}return B.m3(A.c6,u,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.ea(i,m.d),"SIZE COMPARE",C.w(C.a([new B.fm(s,"FIRST",l),new B.fm(x,"SECOND",l)],v),A.l,l,A.e,A.P,0,A.p))}}
B.bxd.prototype={
a5(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b
$.U()
x=C.L()
x.r=D.brW.gp(0)
d.aE(new C.a5(0,0,0+k,0+j),x)
w=new C.e7()
w.cW(6)
for(v=0;v<70;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.2+w.ai()*0.4).gp(0)
d.O(new C.m(x*k,u*j),t+0.3,s)}r=Math.min(k/2-16,j/2-10)*0.98
q=Math.max(r/this.d,0.8)
k*=0.5
j*=0.5
p=new C.m(k,j)
x=new B.fjW(d)
u=this.c
x.$3(p,r,C.b_(u.c))
t=r-q
o=new C.m(k-r+q+6+t*0.1,j+r-q-6-t*0.05)
t=this.b
x.$3(o,q,C.b_(t.c))
x=C.L()
x.b=A.ae
x.c=1.4
x.r=A.ac.gp(0)
d.O(o,q+3,x)
n=C.h2(l,A.cK,l,l,l,C.cW(l,l,l,l,l,l,l,l,l,D.fS4,t.a),A.a8,A.cb,l,A.e6,A.cc)
n.eK()
t=n.b
x=t.c
k=-q
t=t.a.c
if(k-t.gb4(t)-6<4)k=q+6
else{j=n.b.a.c
j=k-j.gb4(j)-6
k=j}n.a5(d,o.a6(0,new C.m(-x/2,k)))
m=C.h2(l,A.cK,l,l,l,C.cW(l,l,l,l,l,l,l,l,l,D.fVE,u.a),A.a8,A.cb,l,A.e6,A.cc)
m.eK()
u=m.b
k=u.c
u=u.a.c
m.a5(d,p.a6(0,new C.m(-k/2,-u.gb4(u)/2)))},
aD(d){return!0}}
B.aPS.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.bD_.prototype={
t(){var x,w,v
for(x=this.hj$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hi$
x===$&&C.d()
x.t()
this.bCY()}}
B.aQo.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.bDb.prototype={
t(){var x,w,v
for(x=this.hj$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hi$
x===$&&C.d()
x.t()
this.bDu()}}
B.aQr.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.bDd.prototype={
t(){var x,w,v
for(x=this.hj$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hi$
x===$&&C.d()
x.t()
this.bDx()}}
B.Rt.prototype={}
B.Wt.prototype={
R(){return B.ikw()}}
B.bov.prototype={
Z(){this.a4()
this.my()},
mR(d){var x,w,v,u,t,s=this
s.f+=d
s.e.fI(0,d,s.y)
for(x=s.z,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v){u=x[v]
u.a=u.a+d*u.c/Math.pow(u.b,1.5)
t=u.b
t-=d*(0.5+1.6/t)*0.6
u.b=t
if(t<=1){u.e=0;++s.as
E.dI(70,"",500,0.3,0.5,"sine")}}A.d.bs(x,new B.dVb())},
b5b(d){var x,w,v,u=this.Q
if(u.A(0,A.aB))return
x=this.gbeu()
w=d.aI(0,new C.m(u.a/2,u.b*0.42))
v=A.h.D(w.gcF()/x,1.5,12)
u=Math.atan2(w.b,w.a)
this.z.push(new B.Rt(u,v,1.2,new C.rW(1,30+A.cW.ai()*40,0.9,0.7).jo()))
B.mR("bell",60+A.h.S(12-v)*2,400,0.35)},
gbeu(){var x=this.Q
return Math.min(x.a,x.b)*0.07},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.z,m=Math.sqrt(1-1/A.h.D(n.length===0?3:new C.O(n,new B.dV_(),C.T(n).k("O<1,H>")).eI(0,A.pG),1.0001,99))
n=y.p
x=C.a([C.aI(o,o,o,o,D.pc,o,o,o,new B.dV0(p,d),o,o,o,o,"Share",o)],n)
w=C.cg(new B.dV1(p,m))
v=Math.log(p.r)
u=Math.log(1e10)
t=p.r
t=t<1000?A.h.a1(t,0)+" Suns":B.fU6(t)+" Suns"
u=B.jh(A.bk,t,"Mass",1,0,new B.dV3(p),v/u)
v=C.a([new B.e6("Star (10)",!1,new B.dV4(p),o,A.bk,o),new B.e6("Cygnus X-1 (21)",!1,new B.dV5(p),o,A.bk,o),new B.e6("Milky Way core (4 million)",!1,new B.dV6(p),o,A.bk,o),new B.e6("M87 (6.5 billion)",!1,new B.dV7(p),o,A.bk,o)],n)
t=p.w
s=p.x
r=p.y
q=r?A.lI:D.IK
return B.m3(A.bk,x,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',w,"BLACK HOLE",C.w(C.a([u,new B.fm(v,"LIKE",o),new B.fm(C.a([new B.e6("Glowing ring",t,new B.dV8(p),o,A.bk,o),new B.e6("Bent light",s,new B.dV9(p),o,A.bk,o),new B.e6("Music",r,new B.dVa(p),q,A.bk,o),new B.fN(A.mF,"Clear",new B.dV2(p),A.c,o)],n),o,o)],n),A.l,o,A.e,A.P,0,A.p))},
aii(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.fNv,x,x,x),A.bs,C.c(e,x,2,x,x,x,x,A6.yg,A.K,x,x)],y.p),A.l,x,A.e,A.i,0,A.p),1)}}
B.bf2.prototype={
a5(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
$.U()
x=C.L()
x.r=D.buH.gp(0)
a9.aE(new C.a5(0,0,0+a7,0+a8),x)
x=a7/2
w=a8*0.42
v=new C.m(x,w)
u=this.b
t=u.gbeu()*(0.9+0.35*Math.log(u.r)/2.302585092994046)
for(s=u.at,r=s.length,q=t*t*5,p=t*2.2,o=0;o<s.length;s.length===r||(0,C.I)(s),++o){n=s[o]
m=n.a*a7
l=n.b*a8
k=new C.m(m,l)
if(u.x){m-=x
l-=w
j=Math.sqrt(m*m+l*l)
if(j>1){i=j+A.h.D(q/j,0,p)
k=new C.m(x+m/j*i,w+l/j*i)}}m=new C.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=A.c.j(0.6).gp(0)
a9.O(k,0.9,m)}if(u.x){a7=C.L()
a7.b=A.ae
a7.c=2
a7.r=A.c.j(0.25).gp(0)
a7.y=K.a31
a9.O(v,t*1.5,a7)}if(u.w)for(a7=t*0.2,h=0;h<90;++h){g=h/90
a8=1.6+g*2.6
f=t*a8
e=1.4/Math.pow(a8,1.5)
d=g*40
for(a8=1-g,s=0.25+0.6*a8,r=-(f*0.55),a8=0.18*a8,a0=0;a0<4;++a0){a1=d+a0*3.141592653589793/2+u.f*e*2.2
a2=Math.sin(a1)>0
a3=Math.cos(a1)*f
q=Math.sin(a1)
p=C.ap(A.v1,A.fN,g)
p.toString
m=Math.cos(a1)
$.U()
l=new C.ar(A.V,A.R,A.X,A.Y,A.W)
i=a2?1:0.85
l.r=p.j(s*(0.4+(0.5+0.5*m)*0.6)*i).gp(0)
a9.O(new C.m(x+a3,w+q*f*0.28),1.3,l)
if(!a2&&u.x){q=Math.sin(-a1)
m=new C.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=p.j(a8).gp(0)
a9.O(new C.m(x+a3*0.5,w+(r*Math.abs(q)*0.6-a7)),1,m)}}}a7=t*1.25
$.U()
a8=C.L()
a8.san(new C.bV(A.z,0.5,A.w,null,0,C.a([A.v,A.v.j(0)],y.O),D.d7p,null).az(0,C.c0(v,a7)))
a9.O(v,a7,a8)
a8=C.L()
a8.r=A.v.gp(0)
a9.O(v,t,a8)
a8=C.L()
a8.b=A.ae
a8.c=1
a8.r=A.bk.j(0.55).gp(0)
a9.O(v,t,a8)
for(a7=u.z,a8=a7.length,o=0;o<a7.length;a7.length===a8||(0,C.I)(a7),++o){a4=a7[o]
f=t*a4.b
u=x+Math.cos(a4.a)*f
s=w+Math.sin(a4.a)*f*0.9
a5=1+A.h.D(3.5/a4.b,0,5)
a6=3*a5
r=-Math.sin(a4.a)*a6
q=Math.cos(a4.a)*a6
p=new C.ar(A.V,A.R,A.X,A.Y,A.W)
p.c=4.2/Math.sqrt(a5)
p.d=A.bH
m=a4.d
p.r=m.j(A.h.D(a4.b/2,0.2,1)).gp(0)
a9.ah(new C.m(u-r,s-q),new C.m(u+r,s+q),p)
p=new C.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=m.j(0.2).gp(0)
p.y=O.p1
a9.O(new C.m(u,s),6,p)}},
aD(d){return!0}}
B.aht.prototype={}
B.Xo.prototype={
R(){var x=y.q,w=y.g
return new B.bp0(new C.cB(null,y.z),new B.QU(A.cW),C.a([],x),A.J,A.J,C.a([],x),C.a([],w),C.a([],w),C.a([],w),C.a([],w),A.J,A.J,$,A.bI,0,C.a([],y.X),null,null)}}
B.bp0.prototype={
Z(){this.a4()
this.a1N()
this.my()},
a1N(){var x,w,v,u,t,s,r,q,p=this,o=new C.e7()
o.cW(5)
x=C.a([],y.q)
w=p.Q==="elliptical"?1800:2300
for(v=0;v<w;++v)if(p.Q==="elliptical"){u=Math.pow(o.ai(),1.6)
x.push(new B.aht(u,o.ai()*3.141592653589793*2,(o.ai()-0.5)*0.5*u,25+o.ai()*20))}else{u=Math.pow(o.ai(),0.8)
t=o.aw(p.f)
s=o.ai()
r=t*(6.283185307179586/p.f)+u*p.r+(s-0.5)*(0.55-u*0.25)
s=p.w
if(s>0&&u<0.3*s+0.05){s=o.he()?0:3.141592653589793
r=s+(o.ai()-0.5)*0.25}s=o.ai()
q=u<0.25?35+o.ai()*15:205+o.ai()*50
x.push(new B.aht(u,r,(s-0.5)*0.05*(1-u),q))}p.ay=x},
cH8(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.ch=!0
l.CW=D.eGW
l.cx=D.eH_
x=new C.e7()
x.cW(9)
w=l.cy
A.d.a7(w)
v=C.a([],y.q)
for(u=0;u<900;++u)v.push(new B.aht(Math.pow(x.ai(),0.8)*0.7,x.ai()*3.141592653589793*2,0,320+x.ai()*30))
A.d.u(w,v)
v=y.g
t=C.a([],v)
for(s=w.length,r=0;r<w.length;w.length===s||(0,C.I)(w),++r){q=w[r]
p=q.b
o=q.a
t.push(new C.m(Math.cos(p)*o,Math.sin(p)*o))}l.dx=t
t=C.a([],v)
for(s=w.length,r=0;r<w.length;w.length===s||(0,C.I)(w),++r){q=w[r]
p=q.b
o=q.a+0.2
t.push(new C.m(-Math.sin(p)*0.55/Math.sqrt(o),Math.cos(p)*0.55/Math.sqrt(o)))}l.fr=t
w=C.a([],v)
for(t=l.ay,s=y.r,t=C.cJ(t,0,C.dy(900,"count",s),C.T(t).c),p=t.$ti,t=new C.bQ(t,t.gI(0),p.k("bQ<aj.E>")),p=p.k("aj.E");t.B();){o=t.d
if(o==null)o=p.a(o)
n=o.b
m=Math.cos(n)
o=o.a
w.push(new C.m(m*o,Math.sin(n)*o))}l.db=w
w=C.a([],v)
for(v=l.ay,v=C.cJ(v,0,C.dy(900,"count",s),C.T(v).c),s=v.$ti,v=new C.bQ(v,v.gI(0),s.k("bQ<aj.E>")),s=s.k("aj.E");v.B();){t=v.d
if(t==null)t=s.a(t)
p=t.b
o=Math.sin(p)
t=t.a+0.2
w.push(new C.m(-o*0.6/Math.sqrt(t),Math.cos(p)*0.6/Math.sqrt(t)))}l.dy=w
l.fy=l.fx=A.J
E.dI(110,"",900,0.5,0.45,"sine")},
mR(d){var x,w,v,u,t,s,r,q=this
q.e.fI(0,d,q.y)
x=q.at
w=q.ax
q.at=x+d*0.25*w
if(q.ch){v=d*0.9*w
u=q.CW.aI(0,q.fx)
t=Math.max(0.25,u.gcF())
s=u.eE(0,t).aM(0,0.9/(t*t))
x=q.fy.a6(0,s.aM(0,v))
q.fy=x
w=q.cx.aI(0,s.aM(0,v))
q.cx=w
x=q.fx.a6(0,x.aM(0,v))
q.fx=x
w=q.CW.a6(0,w.aM(0,v))
q.CW=w
r=new B.ecJ(v)
r.$6(q.db,q.dy,x,w,0.5,0.35)
r.$6(q.dx,q.fr,q.CW,q.fx,0.35,0.5)}},
C(d){var x,w,v,u,t=this,s=null,r=y.p,q=C.a([C.aI(s,s,s,s,D.pc,s,s,s,new B.ecz(t,d),s,s,s,s,"Share",s)],r),p=C.b4(s,s,s,new B.bku(t,s),A.aB),o=A.v.j(0.5),n=C.n(14),m=C.K(A.by,A.r,1)
if(t.ch)x="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(t.x)x="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else x=t.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
n=C.a([p,C.ao(8,C.q(s,C.c(x,s,s,s,s,s,s,A.LK,s,s,s),A.f,s,s,new C.p(o,s,m,n,s,s,A.m),s,s,s,s,A.bS,s,s,s),s,s,10,10,s,s)],r)
m=C.a([],r)
for(w=0;w<3;++w){v=D.dsP[w]
p=t.Q===v.a&&!t.ch
m.push(new B.e6(v.b,p,new B.ecA(t,v),s,A.hm,s))}m.push(new B.e6("Collide",t.ch,new B.ecB(t),A.xu,A.c6,s))
p=C.a([new B.fm(m,"TYPE",s)],r)
if(t.Q!=="elliptical"&&!t.ch){o=t.f
o=B.jh(A.hm,""+o,"Arms",6,2,new B.ecC(t),o)
m=t.r
A.d.u(p,C.a([o,B.jh(A.hm,A.h.a1(m,1),"Winding",6,0.8,new B.ecD(t),m)],r))}o=t.as
p.push(B.jh(A.hm,""+A.h.S(o*90)+"\xb0","Tilt",1,0.15,new B.ecE(t),o))
o=t.ax
p.push(B.jh(A.hm,A.h.a1(o,1)+"x","Speed",4,0,new B.ecF(t),o))
o=t.x
m=t.z
x=t.y
u=x?A.lI:D.IK
p.push(new B.fm(C.a([new B.e6("Dark matter",o,new B.ecG(t),s,A.bk,s),new B.e6("You are here",m,new B.ecH(t),s,A.aQ,s),new B.e6("Music",x,new B.ecI(t),u,A.hm,s)],r),s,s))
return B.m3(A.hm,q,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.ea(new C.am(A.a0,s,A.b6,A.t,n,s),t.d),"GALAXY",C.w(p,A.l,s,A.e,A.P,0,A.p))}}
B.bku.prototype={
a5(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.a,d=a1.b
$.U()
x=C.L()
x.r=D.bx6.gp(0)
a0.aE(new C.a5(0,0,0+e,0+d),x)
w=new C.e7()
w.cW(3)
for(v=0;v<90;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.15+w.ai()*0.4).gp(0)
a0.O(new C.m(x*e,u*d),t*1.1+0.2,s)}r=new C.m(e/2,d*0.42)
q=Math.min(e*0.46,d*0.36)
e=this.b
if(e.x){d=q*1.3
x=C.L()
x.san(new C.bV(A.z,0.5,A.w,f,0,C.a([A.aA.j(0.32),A.aA.j(0.12),A.L],y.O),G.a6p,f).az(0,C.c0(r,d)))
a0.O(r,d,x)}p=new B.dpU(e.as)
d=q*0.3
x=C.L()
x.san(new C.bV(A.z,0.5,A.w,f,0,C.a([A.hb.j(0.85),A.as.j(0.3),A.L],y.O),f,f).az(0,C.c0(r,d)))
a0.O(r,d,x)
if(!e.ch){o=C.L()
for(d=e.ay,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){m=d[n]
u=m.a
l=e.x?1/(0.25+u*0.9):1/Math.pow(u+0.18,1.5)*0.35
t=e.at
s=Math.min(l,6)
k=m.b
j=p.$6(Math.cos(k)*u,Math.sin(k)*u,m.c,r,t*s*0.5,q)
s=m.d
t=A.h.F(s,360)
o.r=new H.pI(1,t,s>200?0.45:0.55,1).jo().j(0.35+(1-u)*0.5).gp(0)
a0.O(j,u<0.3?1.3:1,o)}if(e.z&&e.Q!=="elliptical"){l=e.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
e=e.at
d=Math.min(l,6)
j=p.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,r,e*d*0.5,q)
$.U()
d=C.L()
d.b=A.ae
d.c=1.6
d.r=A.aQ.gp(0)
a0.O(j,9,d)
i=C.h2(f,A.cK,f,f,f,D.fKg,A.a8,A.cb,f,A.e6,A.cc)
i.eK()
i.a5(a0,j.a6(0,new C.m(-i.b.c/2,12)))}}else{h=q*0.8
o=C.L()
for(d=e.db,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.byA.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}for(d=e.dx,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bsj.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}d=e.fx
d=p.$6(d.a,d.b,0,r,0,h)
$.U()
x=C.L()
x.r=A.hb.gp(0)
a0.O(d,5,x)
e=e.CW
e=p.$6(e.a,e.b,0,r,0,h)
x=C.L()
x.r=A.iK.gp(0)
a0.O(e,5,x)}},
aD(d){return!0}}
B.Y5.prototype={
R(){return new B.bpU(new C.cB(null,y.z),new B.QU(A.cW),$,A.bI,0,C.a([],y.X),null,null)}}
B.bpU.prototype={
Z(){this.a4()
this.my()},
mR(d){var x,w,v,u=this
u.e.fI(0,d,u.Q)
if(!u.x)return
x=u.f
w=u.y
if(x==="seasons")u.r=A.h.F(u.r+d*0.04*w,1)
else{x=A.h.F(u.w+d*0.05*w,1)
u.w=x
v=A.h.ba(x*4)
if(v!==A.h.ba(u.as))B.mR("bell",60+v*4,500,0.35)
u.as=v}},
gcCA(){var x=this.r
if(x<0.25)return"Spring in the north, autumn in the south"
if(x<0.5)return"Summer in the north, winter in the south"
if(x<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcsz(){var x=this.w
if(x<0.03||x>0.97)return"New Moon"
if(x<0.22)return"Waxing crescent"
if(x<0.28)return"First quarter"
if(x<0.47)return"Waxing gibbous"
if(x<0.53)return"Full Moon"
if(x<0.72)return"Waning gibbous"
if(x<0.78)return"Last quarter"
return"Waning crescent"},
C(d){var x,w,v,u,t,s=this,r=null,q=y.p,p=C.a([C.aI(r,r,r,r,D.pc,r,r,r,new B.eJD(s,d),r,r,r,r,"Share",r)],q),o=C.E(new C.ea(C.b4(r,r,r,new B.bwp(s,r),A.hi),s.d),1)
if(s.f==="seasons")x=s.gcCA()
else{x=s.gcsz()
w=A.h.ao(A.h.D(0.5-0.5*Math.cos(s.w*2*3.141592653589793),0,1)*100,1)
v=s.w
if(v>0.45&&v<0.55||v<0.05||v>0.95)v="  \xb7  Spring tides (the biggest)"
else{if(!(v>0.2&&v<0.3))v=v>0.7&&v<0.8
else v=!0
v=v?"  \xb7  Neap tides (the smallest)":""}v=x+"  \xb7  "+w+"% lit"+v
x=v}x=C.w(C.a([o,C.q(r,C.c(x,r,r,r,r,r,r,Z.Xo,A.K,r,r),A.f,r,r,r,r,r,r,r,K.aoH,r,r,1/0)],q),A.l,r,A.e,A.i,0,A.p)
o=s.f
w=s.x
v=w?"Pause":"Play"
w=w?X.vJ:A.fR
u=s.Q
t=u?A.lI:D.IK
t=C.a([new B.fm(C.a([new B.e6("Seasons",o==="seasons",new B.eJE(s),A.Eb,A.bw,r),new B.e6("Moon phases",o==="moon",new B.eJF(s),A.vy,A.bw,r),new B.e6(v,!1,new B.eJG(s),w,A.bw,r),new B.e6("Music",u,new B.eJH(s),t,A.bw,r)],q),r,r)],q)
if(s.f==="seasons"){o=s.r
o=B.jh(A.bw,D.drZ[A.n.F(A.h.ba(o*12),12)],"Month",1,0,new B.eJI(s),o)
w=s.z
A.d.u(t,C.a([o,B.jh(A.bw,A.h.a1(w,1)+"\xb0","Tilt",90,0,new B.eJJ(s),w)],q))}else{q=s.w
t.push(B.jh(A.bw,""+(A.h.ba(q*29.5)+1),"Day of month",1,0,new B.eJK(s),q))}q=s.y
t.push(B.jh(A.bw,A.h.a1(q,1)+"x","Speed",4,0.2,new B.eJL(s),q))
return B.m3(A.bw,p,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",x,"SEASONS & MOON",C.w(t,A.l,r,A.e,A.P,0,A.p))}}
B.bwp.prototype={
a5(b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=b8.a,b4=b8.b,b5=$.U(),b6=C.L()
b6.r=D.CJ.gp(0)
b7.aE(new C.a5(0,0,0+b3,0+b4),b6)
x=new C.e7()
x.cW(4)
for(w=0;w<70;++w){b6=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.2+x.ai()*0.4).gp(0)
b7.O(new C.m(b6*b3,v*b4),u+0.3,t)}b6=b3/2
v=b4/2
s=new C.m(b6,v)
u=this.b
if(u.f==="seasons"){r=b3*0.36
q=b4*0.3
b6=C.c1(s,q*2,r*2)
v=C.L()
v.b=A.ae
v.c=1
v.r=A.aT.gp(0)
b7.c3(b6,v)
v=C.L()
v.san(D.eRX.az(0,C.c0(s,34)))
b7.O(s,22,v)
p=u.r*2*3.141592653589793
o=s.a6(0,new C.m(Math.cos(p)*r,Math.sin(p)*q))
n=Math.min(b3,b4)*0.075
m=u.z*3.141592653589793/180
l=s.aI(0,o).eE(0,s.aI(0,o).gcF())
u=b7.c
J.bs(u.save())
u.translate(o.a,o.b)
b4=C.L()
b4.r=D.buD.gp(0)
b7.O(A.J,n,b4)
J.bs(u.save())
b5=new C.aJ(b5.r,A.ak,b2,b2,C.a([],y.v))
b5.E(new C.jO(C.c0(A.J,n)))
b7.mL(0,b5)
b5=l.aM(0,n).aM(0,0.35)
b4=n*1.1
b3=C.L()
b3.san(D.eS4.az(0,C.c0(A.J,b4)))
b7.O(b5,b4,b3)
u.restore()
b3=-m
b4=Math.sin(b3)
b3=-Math.cos(b3)
k=new C.m(b4,b3)
b5=new C.m(-b4,-b3).aM(0,n).aM(0,1.7)
v=k.aM(0,n).aM(0,1.7)
b6=C.L()
b6.c=2
b6.r=A.c3.gp(0)
b7.ah(b5,v,b6)
b6=k.aM(0,n).aM(0,1.7)
v=C.L()
v.r=A.c3.gp(0)
b7.O(b6,3.2,v)
b3=b4*l.a+b3*l.b
j=-b3
u.restore()
if(Math.abs(j)<0.12)b3="equinox: day and night equal"
else b3=j*Math.sin(m)*0+b3>0?"north leans to Sun":"south leans to Sun"
i=C.h2(b2,A.cK,b2,b2,b2,C.cW(b2,b2,b2,b2,b2,b2,b2,b2,b2,F.adW,b3),A.a8,A.cb,b2,A.e6,A.cc)
i.eK()
i.a5(b7,o.a6(0,new C.m(-i.b.c/2,n+12)))}else{h=Math.min(b3*0.34,b4*0.32)
t=C.L()
t.b=A.ae
t.c=1
t.r=A.aT.gp(0)
b7.O(s,h,t)
for(t=b4*0.2,w=0;w<9;++w){g=t+w*b4*0.075
f=new C.ar(A.V,A.R,A.X,A.Y,A.W)
f.r=A.aQ.j(0.6).gp(0)
f.c=2
b7.ah(new C.m(10,g),new C.m(40,g),f)}n=h*0.25
t=C.L()
t.san(new C.bV(new C.dk(-0.5,0),1.1,A.w,b2,0,C.a([D.bp5,D.amw],y.O),D.dhg,b2).az(0,C.c0(s,n)))
b7.O(s,n,t)
p=3.141592653589793+u.w*2*3.141592653589793
e=s.a6(0,new C.m(Math.cos(p)*h,Math.sin(p)*h))
d=h*0.12
t=C.L()
t.r=D.blK.gp(0)
b7.O(e,d,t)
t=b7.c
J.bs(t.save())
b5=b5.r
g=y.v
f=new C.aJ(b5,A.ak,b2,b2,C.a([],g))
f.E(new C.jO(C.c0(e,d)))
b7.mL(0,f)
f=e.a-d
a0=e.b-d
a1=C.L()
a1.r=A.bP.gp(0)
b7.aE(new C.a5(f,a0,f+d,a0+d*2),a1)
t.restore()
a2=e.aI(0,s).eE(0,e.aI(0,s).gcF())
for(f=a2.a,a0=a2.b,a1=n*0.28,a3=0;a3<2;++a3){a4=F.aAp[a3]
a5=new C.ar(A.V,A.R,A.X,A.Y,A.W)
a5.r=A.aH.j(0.45).gp(0)
a5.y=A.ld
b7.O(new C.m(b6+f*a4*n*1.05,v+a0*a4*n*1.05),a1,a5)}b6=b3-b3*0.17
v=b4*0.18
a6=new C.m(b6,v)
a7=Math.min(b3,b4)*0.1
b4=C.L()
b4.r=D.blF.gp(0)
b7.O(a6,a7,b4)
a8=0.5-0.5*Math.cos(u.w*2*3.141592653589793)
J.bs(t.save())
b4=new C.aJ(b5,A.ak,b2,b2,C.a([],g))
b4.E(new C.jO(C.c0(a6,a7)))
b7.mL(0,b4)
u=u.w
a9=new C.aJ(b5,A.ak,b2,b2,C.a([],g))
b0=u<0.5?1:-1
b3=v-a7
a9.E(new C.aZ(b6,b3))
b4=b0>0
a9.aHu(new C.m(b6,v+a7),b4,new C.aQ(a7,a7))
if(a8<0.5)b4=b0<0
a9.aHu(new C.m(b6,b3),b4,new C.aQ(a7*Math.abs(1-2*a8),a7))
b4=C.L()
b4.r=A.bP.gp(0)
b7.af(a9,b4)
t.restore()
t=C.L()
t.b=A.ae
t.c=1
t.r=A.aT.gp(0)
b7.O(a6,a7,t)
b1=C.h2(b2,A.cK,b2,b2,b2,D.fKh,A.a8,A.cb,b2,A.e6,A.cc)
b1.eK()
b1.a5(b7,a6.a6(0,new C.m(-b1.b.c/2,a7+6)))}},
aD(d){return!0}}
B.aPn.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.bCR.prototype={
t(){var x,w,v
for(x=this.hj$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hi$
x===$&&C.d()
x.t()
this.bCr()}}
B.aPO.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.bCZ.prototype={
t(){var x,w,v
for(x=this.hj$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hi$
x===$&&C.d()
x.t()
this.bCT()}}
B.aQm.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbD())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
B.bDa.prototype={
t(){var x,w,v
for(x=this.hj$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hi$
x===$&&C.d()
x.t()
this.bDs()}}
var z=a.updateTypes(["~()","cr(adC)","P(w7)","P(RN)","az<~>()","~(o)","P(adB)","Xq()","Yh()","Xr()","Wt()","Xo()","Ya()","Y5()","P(Rt)","H(Rt)"])
B.eUN.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=d.a,o=A.h.D((p-q.x.a)/1e6,0,0.05)
q.x=d
q.y=A.n.ao(p,1000)
for(p=q.f,x=p.length,w=1-1.2*o,v=0;v<x;++v){u=p[v]
t=u.a
s=u.b
r=s.a
s=s.b
u.a=new C.m(t.a+r*o,t.b+s*o)
u.b=new C.m(r*w,s*w)}A.d.bs(p,new B.eUL(q))
if(q.c!=null)p=p.length!==0||q.ax!=null
else p=!1
if(p)q.l(new B.eUM())},
$S:7}
B.eUL.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+3}
B.eUM.prototype={
$0(){},
$S:0}
B.eUo.prototype={
$0(){},
$S:0}
B.eUn.prototype={
$0(){},
$S:0}
B.eUx.prototype={
$0(){return B.v_(this.b,this.a.d,"spark-painter")},
$S:0}
B.eUz.prototype={
$1(d){return this.a.b3T(0,d.b)},
$S:51}
B.eUD.prototype={
$1(d){var x,w=this.a,v=d.b,u=w.ax
if(u!=null){x=u.a
x=x.length===0||A.d.gal(x).aI(0,v).gcF()>2.5}else x=!1
if(x)u.a.push(v)
w.aXq(v)
w.cjw(v)
return null},
$S:19}
B.eUy.prototype={
$1(d){return this.a.b3S()},
$S:38}
B.eUE.prototype={
$1(d){return this.a.b3T(0,d.b)},
$S:24}
B.eUF.prototype={
$1(d){return this.a.b3S()},
$S:55}
B.eUG.prototype={
$0(){var x=this.a
return x.l(new B.eUw(x,this.b))},
$S:0}
B.eUw.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eUH.prototype={
$0(){var x=this.a
return x.l(new B.eUv(x))},
$S:0}
B.eUv.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eUI.prototype={
$0(){var x=this.a
return x.l(new B.eUu(x,this.b))},
$S:0}
B.eUu.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eUJ.prototype={
$1(d){var x=this.a
return x.l(new B.eUt(x,d))},
$S:6}
B.eUt.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eUK.prototype={
$0(){var x=this.a
return x.l(new B.eUs(x))},
$S:0}
B.eUs.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.eUA.prototype={
$0(){var x=this.a
return x.l(new B.eUr(x))},
$S:0}
B.eUr.prototype={
$0(){var x=this.a.e
if(x.length!==0)x.pop()},
$S:0}
B.eUB.prototype={
$0(){var x=this.a
return x.l(new B.eUq(x))},
$S:0}
B.eUq.prototype={
$0(){var x=this.a
A.d.a7(x.e)
A.d.a7(x.f)},
$S:0}
B.eUC.prototype={
$0(){var x=this.a
return x.l(new B.eUp(x,this.b))},
$S:0}
B.eUp.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cFm.prototype={
$0(){return C.a7(this.a,!1).i2()},
$S:0}
B.cFn.prototype={
$0(){var x=this.a
return B.hWm(this.b,x.c,x.e,x.d)},
$S:0}
B.hiF.prototype={
$1(d){var x,w=null,v=C.n(24),u=this.a,t=u.j(0.4)
u=C.c(this.b,w,w,w,w,w,w,C.l(w,w,u,w,w,w,w,w,w,w,w,16,w,w,A.u,w,w,!0,w,1.2,w,w,w,w,w,w),w,w,w)
x=C.c(this.c,w,w,w,w,w,w,D.fNI,w,w,w)
return C.em(C.a([C.bK(!1,D.h62,w,w,!0,w,w,w,new B.hiE(d),w,w)],y.p),w,w,F.mt,x,w,w,w,new C.bb(v,new C.ax(t,1,A.r,-1)),u,w)},
$S:17}
B.hiE.prototype={
$0(){C.a7(this.a,!1).N(null)
return null},
$S:0}
B.cFi.prototype={
$0(){C.f4()
this.a.e.$0()},
$S:0}
B.cFh.prototype={
$0(){C.f4()
this.a.e.$0()},
$S:0}
B.cFo.prototype={
$0(){C.f4()
this.a.e.$0()},
$S:0}
B.cFj.prototype={
$0(){var x=this.a
A.d.X(x.hj$,this.b.bg())
if(x.c!=null)this.c.$0()},
$S:0}
B.cFl.prototype={
$1(d){var x=this.a,w=d.a,v=A.h.D((w-x.mn$.a)/1e6,0,0.04)
x.mn$=d
x.fk$=A.n.ao(w,1000)
x.mR(v)
if(x.c!=null)x.l(new B.cFk())},
$S:7}
B.cFk.prototype={
$0(){},
$S:0}
B.h3N.prototype={
bs9(d){var x=0,w=C.j(y.D),v,u=this,t,s
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:x=3
return C.b(u.a.$1(d),$async$$1)
case 3:t=f
x=4
return C.b(t.hs(A.a5Q),$async$$1)
case 4:s=f
t.t()
if(s==null)throw C.Y(C.be("no picture"))
v=J.eC(A.dM.gaS(s),s.byteOffset,s.byteLength)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$1(d){return this.bs9(d)},
$S:2069}
B.cjr.prototype={
$1(d){var x=this.c,w=this.a,v=w.d,u=v+1
w.d=u
x.$flags&2&&C.ak(x)
x[v]=d
if(u===255){v=this.b.c
v.qf(255)
v.K(0,new Uint8Array(C.cd(x)))
w.d=0}},
$S:31}
B.cjq.prototype={
$1(d){var x,w,v=this.a,u=v.c,t=v.b
u=v.c=(u|A.n.e7(d,t))>>>0
t=v.b=t+v.a
for(x=this.b;t>=8;t=u,u=w){x.$1(u&255)
w=v.c>>>8
v.c=w
u=v.b-=8}},
$S:31}
B.fD_.prototype={
$0(){var x=null,w=C.h2(x,A.cK,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.b,x,x,x,x,x,"monospace",x,x,this.c,x,x,A.O,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a8,A.cb,x,A.e6,A.cc)
w.eK()
return w},
$S:285}
B.h9F.prototype={
$0(){return this.a.ai()},
$S:82}
B.fJp.prototype={
$2(d,e){return d.j(A.h.D(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:2070}
B.fJq.prototype={
$4$blur$shift(d,e,f,g){var x,w=this
$.U()
x=C.L()
x.b=A.ae
x.c=e
x.e=A.dQ
x.r=d.gp(0)
if(f!=null)x.y=f
B.E0(w.a,w.b,null,x).a5(w.c,w.d.a6(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.J)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.J)},
$S:2071}
B.h9G.prototype={
$2(d,e){return d+this.a[e]},
$S:607}
B.h9H.prototype={
$2(d,e){return d+this.a[e]},
$S:607}
B.h8m.prototype={
$1(d){return this.bsn(d)},
bsn(d){var x=0,w=C.j(y.I),v,u=this,t,s,r,q,p
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:$.U()
t=new C.p2(new C.oD())
s=u.a
r=u.b
B.hVC(C.va(t,null),new C.av(s,r),d/u.c,u.r,u.w,u.x,u.e,u.f,u.d)
q=t.nc()
x=3
return C.b(q.w2(s,r),$async$$1)
case 3:p=f
q.t()
v=p
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$S:749}
B.cqE.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.cqz.prototype={
$0(){var x=this.a
x.at=0
x.ax=""},
$S:0}
B.cqA.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.cqy(x,d))},
$S:6}
B.cqy.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cqB.prototype={
$0(){var x=this.b?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.a.ax=x},
$S:0}
B.cqC.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
B.cqD.prototype={
$0(){return this.a.at=-1},
$S:0}
B.cqo.prototype={
$2(d,e){var x=null,w=this.a,v=w.gKM().x
v===$&&C.d()
return C.b4(x,x,x,new B.bcy(v,w.e.a.a,w.f,w.r,w.y,w.gud(),w.x,x),A.hi)},
$S:52}
B.cqp.prototype={
$1(d){return this.a.l(new B.cqn())},
$S:2}
B.cqn.prototype={
$0(){},
$S:0}
B.cqq.prototype={
$0(){return this.a.buI(this.b.a)},
$S:0}
B.cqr.prototype={
$0(){var x=this.a
return x.l(new B.cqm(x,this.b))},
$S:0}
B.cqm.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.cqs.prototype={
$0(){var x=this.a
return x.l(new B.cql(x,this.b))},
$S:0}
B.cql.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.cqt.prototype={
$0(){var x=this.a
return x.l(new B.cqk(x,this.b))},
$S:0}
B.cqk.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cqu.prototype={
$0(){var x=this.a
return x.l(new B.cqj(x,this.b))},
$S:0}
B.cqj.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cqv.prototype={
$0(){var x=this.a
return x.l(new B.cqi(x))},
$S:0}
B.cqi.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.cqw.prototype={
$0(){var x=this.a.gKM()
x.iN(0,0)
x.cU(0)},
$S:0}
B.cqx.prototype={
$1(d){var x=this.a
return x.l(new B.cqh(x,d))},
$S:6}
B.cqh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.edq.prototype={
$0(){return this.a.k1=!1},
$S:0}
B.edr.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.edp(x,d))},
$S:z+1}
B.edp.prototype={
$0(){return this.a.cDV(this.b)},
$S:0}
B.eds.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.edo(x))},
$S:75}
B.edo.prototype={
$0(){return this.a.k1=!0},
$S:0}
B.edt.prototype={
$0(){var x,w,v,u=this.a,t=J.a1(u),s=t.gI(u),r=new Float64Array(s*4)
for(x=0;x<t.gI(u);++x){w=J.t(t.h(u,x),0)*3.141592653589793/180
v=J.t(t.h(u,x),1)*3.141592653589793/180
s=x*4
r[s]=Math.sin(v)
r[s+1]=Math.cos(v)
r[s+2]=Math.sin(w)
r[s+3]=Math.cos(w)}return r},
$S:560}
B.edm.prototype={
$0(){return this.a.id=D.a80},
$S:0}
B.edn.prototype={
$0(){var x=this.b.a,w=C.T(x).k("X<1>")
w=C.pk(new C.X(x,new B.edl(this.c),w),6,w.k("M.E"))
x=C.B(w,C.a3(w).k("M.E"))
return this.a.id=x},
$S:0}
B.edl.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+6}
B.edk.prototype={
$1(d){var x=null,w=C.cb(C.c("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",x,x,x,x,x,x,C.l(x,x,A.ac,x,x,x,x,x,x,x,x,14,x,x,x,x,1.55,!0,x,x,x,x,x,x,x,x),x,x,x),A.t,x,A.y,x,x,x,x,x,A.ah)
return C.em(C.a([C.bK(!1,A.pA,x,x,!0,x,x,x,new B.edj(d),x,x)],y.p),x,x,F.mt,w,x,x,x,x,D.hht,x)},
$S:17}
B.edj.prototype={
$0(){C.a7(this.a,!1).N(null)
return null},
$S:0}
B.edM.prototype={
$0(){return B.v_(this.b,this.a.d,"earth")},
$S:0}
B.edN.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=new C.av(e.b,e.d)
p.fy=o
x=p.r
w=p.w
v=p.x
u=p.y
t=p.gYl()
s=p.z
r=y.p
o=C.a([C.aA(A.c0,C.b4(q,q,q,new B.bkD(x,w,v,u,t*s,s,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.edA(p),new B.edB(p),new B.edC(p),q,q,q,q,q,q,q,new B.edD(p),q,q,q,!1,A.a4)],r)
if(p.r==null&&!p.k1)o.push(D.bgR)
if(p.r==null&&p.k1)o.push(C.at(new C.C(A.q1,C.w(C.a([D.c81,A.S,D.hgb,A.aj,D.h7Q,A.az,C.df(A.vP,q,A.G_,p.gc9j(),q)],r),A.l,q,A.e,A.P,0,A.p),q),q,q,q))
x=this.b
if(x!=null)o.push(C.ao(8,p.ciV(x),q,q,10,10,q,q))
return new C.ea(new C.am(A.a0,q,A.b6,A.t,o,q),p.d)},
$S:212}
B.edB.prototype={
$1(d){var x=this.a
x.dx=!0
x.go=x.z
x.at=x.ax=x.ay=null},
$S:256}
B.edC.prototype={
$1(d){var x,w,v=this.a
if(d.w>=2)v.z=A.h.D(v.go*d.d,0.8,16)
else{x=57.2958/(v.gYl()*v.z)
w=d.a
v.y=v.y-w.a*x
v.x=A.h.D(v.x+w.b*x,-85,85)}},
$S:209}
B.edA.prototype={
$1(d){var x,w,v=this.a
v.dx=!1
x=57.2958/(v.gYl()*v.z)
w=d.a.a
v.Q=A.h.D(-w.a*x,-160,160)
v.as=A.h.D(w.b*x,-100,100)},
$S:521}
B.edD.prototype={
$1(d){var x=this.a,w=x.ciY(d.b)
if(w!=null)x.l(new B.edu(x,w))
else x.l(new B.edv(x))},
$S:55}
B.edu.prototype={
$0(){return this.a.aEx(this.b)},
$S:0}
B.edv.prototype={
$0(){return this.a.fx=null},
$S:0}
B.edO.prototype={
$0(){var x=this.a
x.e.bN(0,A.ck)
x.l(new B.edz(x,this.b))},
$S:0}
B.edz.prototype={
$0(){var x=this.a
x.id=D.a80
x.aEx(this.b)},
$S:0}
B.edS.prototype={
$0(){var x=this.a
return x.l(new B.edL(x))},
$S:0}
B.edL.prototype={
$0(){var x=this.a
x.fx=null
x.axI(15,x.y,1)},
$S:0}
B.edT.prototype={
$0(){var x=this.a
return x.l(new B.edK(x,this.b))},
$S:0}
B.edK.prototype={
$0(){var x=this.b.b
return this.a.axI(x.a,x.b,x.c)},
$S:0}
B.edU.prototype={
$0(){var x=this.a,w=x.r
if(w!=null)x.l(new B.edJ(x,w))},
$S:0}
B.edJ.prototype={
$0(){var x=this.b.a
return this.a.aEx(x[A.cW.aw(x.length)])},
$S:0}
B.edV.prototype={
$1(d){var x=this.a
return x.l(new B.edI(x,d))},
$S:6}
B.edI.prototype={
$0(){var x=this.a
x.ay=null
x.z=this.b},
$S:0}
B.edW.prototype={
$1(d){var x=this.a
return x.l(new B.edH(x,d))},
$S:6}
B.edH.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.edX.prototype={
$1(d){var x=this.a
return x.l(new B.edG(x,d))},
$S:6}
B.edG.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.edY.prototype={
$0(){var x=this.a
return x.l(new B.edF(x))},
$S:0}
B.edF.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.edZ.prototype={
$0(){var x=this.a
return x.l(new B.edE(x))},
$S:0}
B.edE.prototype={
$0(){var x=this.a
return x.CW=!x.CW},
$S:0}
B.edP.prototype={
$0(){var x=this.a
return x.l(new B.edy(x))},
$S:0}
B.edy.prototype={
$0(){var x=this.a
return x.cx=!x.cx},
$S:0}
B.edQ.prototype={
$0(){var x=this.a
return x.l(new B.edx(x))},
$S:0}
B.edx.prototype={
$0(){var x=this.a
return x.cy=!x.cy},
$S:0}
B.edR.prototype={
$0(){var x=this.a
return x.l(new B.edw(x))},
$S:0}
B.edw.prototype={
$0(){var x=this.a
return x.db=!x.db},
$S:0}
B.edi.prototype={
$2(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.aYD,x,x,x),A.rW,C.c(e,x,2,A.a2,x,x,x,A.XE,x,x,x)],y.p),A.B,x,A.e,A.i,0,A.p),1)},
$S:108}
B.edh.prototype={
$0(){var x=this.a
return x.l(new B.edg(x))},
$S:0}
B.edg.prototype={
$0(){return this.a.fx=null},
$S:0}
B.dsK.prototype={
$0(){var x=null,w=C.h2(x,A.cK,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.C,x,x,!0,x,x,x,x,x,D.dmr,x,x),this.a),A.a8,A.cb,x,A.e6,A.cc)
w.eK()
return w},
$S:285}
B.dsL.prototype={
$2(d,e){var x,w,v,u=this,t=Math.sin(d),s=Math.cos(d),r=e-u.a,q=Math.sin(r),p=Math.cos(r)
r=u.b
x=u.c
if(r*t+x*s*p<0)return null
w=u.d
v=u.e
return new C.m(w.a+v*s*q,w.b-v*(x*t-r*s*p))},
$S:2074}
B.fEC.prototype={
$0(){return D.e8W},
$S:z+7}
B.fED.prototype={
$0(){return D.exR},
$S:z+8}
B.fEE.prototype={
$0(){return D.e8Y},
$S:z+9}
B.fEF.prototype={
$0(){return D.e_n},
$S:z+10}
B.fEG.prototype={
$0(){return D.e8V},
$S:z+11}
B.fEH.prototype={
$0(){return D.evY},
$S:z+12}
B.fEI.prototype={
$0(){return D.evW},
$S:z+13}
B.f0G.prototype={
$1(d){},
$S:z+1}
B.f0H.prototype={
$1(d){},
$S:75}
B.f0D.prototype={
$0(){return C.a7(this.a,!1).i2()},
$S:0}
B.f0E.prototype={
$0(){var x=this.a
return x.l(new B.f0C(x))},
$S:0}
B.f0C.prototype={
$0(){var x=this.a
return x.d=A.n.F(x.gaXT()+1,16)},
$S:0}
B.f0F.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=y.p,k=C.a([],l)
for(x=$.i_f(),w=m*1.15,v=y.O,u=0;u<7;++u){t=x[u]
s=Math.max(w,140)
r=new C.aQ(18,18)
q=t.d
p=new C.ax(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.bx2],v)
k.push(C.aA(n,C.q(n,C.w(C.a([C.V(t.c,q,n,n,n,30),A.N,C.c(t.a,n,2,n,n,n,n,D.fSF,A.K,n,n),A.cR,C.c(t.b,n,2,n,n,n,n,D.fYm,A.K,n,n)],l),A.l,n,A.bc,A.i,0,A.p),A.f,n,n,new C.p(n,n,new C.bE(p,p,p,p),new C.bc(r,r,r,r),n,new C.a6(A.aw,A.aD,A.w,o,n,n),A.m),n,s,n,n,A.ct,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.f0B(d,t),n,n,n,n,n,n,!1,A.a4))}return C.bW(A.fX,k,A.bq,n,10,10)},
$S:174}
B.f0B.prototype={
$0(){return C.a7(this.a,!1).ca(C.e4(new B.f0A(this.b),!1,null,y.H))},
$S:0}
B.f0A.prototype={
$1(d){return this.a.e.$0()},
$S:41}
B.eU2.prototype={
$0(){var x=this.a
x.Q=x.z=this.b
if(x.w<2.2)x.w=2.6},
$S:0}
B.eUd.prototype={
$0(){return B.v_(this.b,this.a.d,"solar-system")},
$S:0}
B.eUe.prototype={
$2(d,e){var x,w=null,v=this.a,u=new C.av(e.b,e.d)
v.ch=u
u=C.a([C.aA(A.c0,C.b4(w,w,w,new B.bxG(v,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eUa(v),new B.eUb(v),w,w,w,w,w,w,w,new B.eUc(v),w,w,w,!1,A.a4)],y.p)
x=this.b
if(x!=null)u.push(C.ao(8,v.cj_(x),w,w,10,10,w,w))
return new C.ea(new C.am(A.a0,w,A.b6,A.t,u,w),v.d)},
$S:212}
B.eUa.prototype={
$1(d){var x=this.a
x.y=x.w
x.Q=null},
$S:256}
B.eUb.prototype={
$1(d){var x=this.a
if(d.w>=2)x.w=A.h.D(x.y*d.d,0.5,9)
else x.x=x.x.a6(0,d.a)},
$S:209}
B.eUc.prototype={
$1(d){var x=this.a,w=x.cj2(d.b)
if(w!=null)x.b5a(w)},
$S:55}
B.eUf.prototype={
$0(){var x=this.a
return x.l(new B.eU9(x))},
$S:0}
B.eU9.prototype={
$0(){var x=this.a
x.z=x.Q=null
x.x=A.J
x.w=1},
$S:0}
B.eUg.prototype={
$0(){return this.a.b5a(this.b)},
$S:0}
B.eUh.prototype={
$1(d){var x=this.a
return x.l(new B.eU8(x,d))},
$S:6}
B.eU8.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eUi.prototype={
$1(d){var x=this.a
return x.l(new B.eU7(x,d))},
$S:6}
B.eU7.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eUj.prototype={
$0(){var x=this.a
return x.l(new B.eU6(x))},
$S:0}
B.eU6.prototype={
$0(){var x=this.a
return x.as=!x.as},
$S:0}
B.eUk.prototype={
$0(){var x=this.a
return x.l(new B.eU5(x))},
$S:0}
B.eU5.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
B.eUl.prototype={
$0(){var x=this.a
return x.l(new B.eU4(x))},
$S:0}
B.eU4.prototype={
$0(){var x=this.a
return x.ax=!x.ax},
$S:0}
B.eUm.prototype={
$0(){var x=this.a
return x.l(new B.eU3(x))},
$S:0}
B.eU3.prototype={
$0(){var x=this.a
return x.ay=!x.ay},
$S:0}
B.eU1.prototype={
$1(d){var x
if(d>=730){x=d>8000?0:1
x=A.h.a1(d/365.25,x)+" Earth years"}else x=A.h.a1(d,0)+" Earth days"
return x},
$S:278}
B.eU0.prototype={
$2(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.aYD,x,x,x),A.rW,C.c(e,x,2,A.a2,x,x,x,A.XE,x,x,x)],y.p),A.B,x,A.e,A.i,0,A.p),1)},
$S:108}
B.eU_.prototype={
$0(){var x=this.a
return x.l(new B.eTZ(x))},
$S:0}
B.eTZ.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
B.flN.prototype={
$0(){var x=null,w=C.h2(x,A.cK,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.C,x,x,!0,x,x,x,x,x,K.TT,x,x),this.a),A.a8,A.cb,x,A.e6,A.cc)
w.eK()
return w},
$S:285}
B.flO.prototype={
$1(d){return d.c>0},
$S:z+2}
B.flP.prototype={
$1(d){return d.c>0},
$S:z+2}
B.ee2.prototype={
$0(){},
$S:0}
B.eev.prototype={
$1(d){return d!=null},
$S:459}
B.eeh.prototype={
$0(){var x=this.a
return x.l(new B.ee8(x,this.b))},
$S:0}
B.ee8.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.eei.prototype={
$0(){var x=this.a
return x.l(new B.ee7(x))},
$S:0}
B.ee7.prototype={
$0(){return this.a.f=!1},
$S:0}
B.eej.prototype={
$0(){var x=this.a
return x.l(new B.eeg(x))},
$S:0}
B.eeg.prototype={
$0(){return this.a.f=!0},
$S:0}
B.een.prototype={
$0(){var x=this.a
return x.l(new B.eef(x))},
$S:0}
B.eef.prototype={
$0(){var x=this.a
return x.r=!x.r},
$S:0}
B.eeo.prototype={
$1(d){var x=this.a
return x.l(new B.eee(x,d))},
$S:6}
B.eee.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eep.prototype={
$0(){var x=this.a
return x.l(x.gcHh())},
$S:0}
B.eeq.prototype={
$1(d){var x=this.a
return x.l(new B.eed(x,d))},
$S:6}
B.eed.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.eer.prototype={
$1(d){var x=this.a
return x.l(new B.eec(x,d))},
$S:6}
B.eec.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.ees.prototype={
$1(d){var x=this.a
return x.l(new B.eeb(x,d))},
$S:6}
B.eeb.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.eet.prototype={
$1(d){var x=this.a
return x.l(new B.eea(x,d))},
$S:6}
B.eea.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.eeu.prototype={
$0(){var x=this.a
return x.l(new B.ee9(x))},
$S:0}
B.ee9.prototype={
$0(){return this.a.ay=4},
$S:0}
B.eek.prototype={
$0(){var x=this.a
return x.l(new B.ee6(x))},
$S:0}
B.ee6.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.eel.prototype={
$0(){var x=this.a
return x.l(new B.ee5(x))},
$S:0}
B.ee5.prototype={
$0(){return this.a.ay=9},
$S:0}
B.eem.prototype={
$0(){var x=this.a
return x.l(new B.ee4(x))},
$S:0}
B.ee4.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.ee1.prototype={
$2(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a1.b/5,g=a1.d,f=g-60,e=y.p,d=C.a([C.bS(0,new C.bP(new C.p(D.bvd,i,i,C.n(20),i,i,A.m),A.bn,i,i),0,0,0)],e)
for(x=this.a,w=x.as,v=y.V,u=h/2,g-=f,t=f-54-22,s=x.z,r=0;r<5;++r){q=r*h
p=D.AQ[r]
o=C.b_(p.d)
p=C.w(C.a([C.c(p.a,i,i,i,i,i,i,new C.G(!0,o,i,i,i,i,12.5,A.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),C.c(C.v(D.AQ[r].b)+" m/s\xb2",i,i,i,i,i,i,D.fXC,i,i,i)],e),A.l,i,A.e,A.i,0,A.p)
o=q+u
n=C.q(i,i,A.f,A.dA,i,i,i,i,i,i,i,i,i,1)
m=s[r]
l=x.f?C.V(L.DO,C.b_(D.AQ[r].d),i,i,i,22):C.q(i,i,A.f,i,i,new C.p(C.b_(D.AQ[r].d),i,i,i,C.a([new C.ac(0,A.G,C.b_(D.AQ[r].d).j(0.6),A.J,10)],v),i,A.a6),i,22,i,i,i,i,i,22)
k=C.q(i,i,A.f,C.b_(D.AQ[r].d).j(0.6),i,i,i,3,i,A.fD,i,i,i,i)
j=w[r]
if(j==null)j=x.x?"\u2026":"\u2014"
else j=A.h.a1(j,2)+" s"
j=C.c(j,i,i,i,i,i,i,A.uG,i,i,i)
A.d.u(d,C.a([new C.cR(q,8,i,i,h,i,p,i),new C.cR(o-0.5,54,i,g,i,i,n,i),new C.cR(o-11,54+t*(m/20),i,i,i,i,l,i),new C.cR(q,i,i,8,h,i,C.w(C.a([k,A.at,j,C.c(w[r]==null?"":"to land",i,i,i,i,i,i,D.fP_,i,i,i)],e),A.l,i,A.e,A.i,0,A.p),i)],e))}if(!x.x&&A.d.cD(w,new B.ee0()))d.push(D.bhi)
return new C.am(A.a0,i,A.ab,A.t,d,i)},
$S:63}
B.ee0.prototype={
$1(d){return d==null},
$S:459}
B.ee3.prototype={
$2(d,e){var x,w=null,v=this.a,u=this.b,t=u.b,s=v.at*t/9.81,r=A.h.D(Math.log(s+1)/Math.log(v.at*274/9.81+1),0.02,1),q=C.n(8)
q=C.q(w,w,A.f,w,w,new C.p(A.c.j(0.05),w,w,q,w,w,A.m),w,26,w,w,w,w,w,w)
u=u.c
u=C.cZ(w,w,w,w,A.b1,new C.p(w,w,w,C.n(8),w,new C.a6(A.a5,A.a9,A.w,C.a([C.b_(u).j(0.9),C.b_(u).j(0.4)],y.O),w,w),A.m),A.ig,w,26,w,w,w,w,w,e.b*r)
x=s<100?A.h.a1(s,1):B.I7(s)
v=v.ax*9.81/t
v=v<10?A.h.a1(v,2):A.h.a1(v,0)
return new C.am(A.a0,w,A.ab,A.t,C.a([q,u,C.ao(w,C.c(x+" kg  \xb7  jump "+v+" m",w,w,w,w,w,w,D.fVL,w,w,w),w,w,8,w,4,w)],y.p),w)},
$S:63}
B.ee_.prototype={
$2(d,e){var x,w=null,v=e.b,u=e.d,t=Math.min(v,u),s=this.a,r=s.ch,q=s.cx,p=s.db,o=s.CW||p.length!==0
o=C.b4(w,w,w,new B.bfI(new C.m(v/2,u/2+u*0.05),t*0.18/6371*(2/r),q,p,o,w),A.aB)
p=A.v.j(0.55)
q=C.n(14)
r=C.K(A.by,A.r,1)
v=s.dx
u=v.length===0?"Set a speed and press Fire!":v
if(A.a.q(v,"forever")||A.a.q(v,"again"))v=A.bf
else v=A.a.q(v,"escapes")?A.aH:A.c
v=C.c(u,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
u=A.h.a1(Math.sqrt(58.86870477034412),1)
t=A.h.a1(Math.sqrt(117.73740954068823),1)
s=s.CW?"  Height now: "+B.I7(A.h.D(s.cx.gcF()-6371,0,9e9))+" km":""
x=y.p
return new C.am(A.a0,w,A.b6,A.t,C.a([o,C.ao(w,C.q(w,C.w(C.a([v,A.bs,C.c("Circular orbit here: "+u+" km/s.  Escape speed: "+t+" km/s."+s,w,w,w,w,w,w,I.b_x,w,w,w)],x),A.B,w,A.e,A.P,0,A.p),A.f,w,w,new C.p(p,w,r,q,w,w,A.m),w,w,w,w,A.bS,w,w,w),w,w,12,12,8,w)],x),w)},
$S:63}
B.eMB.prototype={
$0(){return B.v_(this.b,this.a.d,"size-compare")},
$S:0}
B.eMC.prototype={
$0(){var x=this.a
return x.l(new B.eMA(x,this.b))},
$S:0}
B.eMA.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eMD.prototype={
$0(){var x=this.a
return x.l(new B.eMz(x,this.b))},
$S:0}
B.eMz.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.fjW.prototype={
$3(d,e,f){var x,w,v=this.a
$.U()
x=C.L()
x.r=f.j(0.2).gp(0)
x.y=new C.h5(A.G,Math.max(2,e*0.18))
v.O(d,e*1.12,x)
x=C.L()
w=C.ap(f,A.v,0.6)
w.toString
x.san(new C.bV(N.C6,0.5,A.w,null,0,C.a([A.c,f,w],y.O),T.Ts,null).az(0,C.c0(d,e)))
v.O(d,e,x)},
$S:2075}
B.dVb.prototype={
$1(d){return d.e<=0},
$S:z+14}
B.dV_.prototype={
$1(d){return d.b},
$S:z+15}
B.dV0.prototype={
$0(){return B.v_(this.b,this.a.d,"black-hole")},
$S:0}
B.dV1.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q=this.a,p=new C.av(e.b,e.d)
q.Q=p
p=C.aA(A.c0,C.b4(r,r,r,new B.bf2(q,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dUY(q),r,r,r,r,r,r,r,r,r,new B.dUZ(q),r,r,r,r,!1,A.a4)
x=A.v.j(0.55)
w=C.n(14)
v=C.K(A.by,A.r,1)
u=q.r
if(u<1000)u=A.h.a1(u,u<10?1:0)+" Suns"
else u=B.fU6(u)+" Suns"
u=q.aii("MASS",u)
t=2.953*q.r
s=y.p
s=C.a([p,C.ao(r,C.q(r,C.A(C.a([u,q.aii("EDGE WIDTH",(t<100?A.h.a1(t,1):B.I7(t))+" km"),q.aii("TIME",A.h.a1(this.b*100,0)+"%"),q.aii("EATEN",""+q.as)],s),A.l,r,A.e,A.i,0,r,r),A.f,r,r,new C.p(x,r,v,w,r,r,A.m),r,r,r,r,A.bS,r,r,r),r,r,10,10,8,r)],s)
if(q.z.length===0&&q.as===0)s.push(D.eR0)
return new C.ea(new C.am(A.a0,r,A.b6,A.t,s,r),q.d)},
$S:212}
B.dUZ.prototype={
$1(d){return this.a.b5b(d.b)},
$S:24}
B.dUY.prototype={
$1(d){if(A.cW.ai()<0.12)this.a.b5b(d.b)},
$S:19}
B.dV3.prototype={
$1(d){var x=this.a
return x.l(new B.dUX(x,d))},
$S:6}
B.dUX.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dV4.prototype={
$0(){var x=this.a
return x.l(new B.dUW(x))},
$S:0}
B.dUW.prototype={
$0(){return this.a.r=10},
$S:0}
B.dV5.prototype={
$0(){var x=this.a
return x.l(new B.dUV(x))},
$S:0}
B.dUV.prototype={
$0(){return this.a.r=21},
$S:0}
B.dV6.prototype={
$0(){var x=this.a
return x.l(new B.dUU(x))},
$S:0}
B.dUU.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dV7.prototype={
$0(){var x=this.a
return x.l(new B.dUT(x))},
$S:0}
B.dUT.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dV8.prototype={
$0(){var x=this.a
return x.l(new B.dUS(x))},
$S:0}
B.dUS.prototype={
$0(){var x=this.a
return x.w=!x.w},
$S:0}
B.dV9.prototype={
$0(){var x=this.a
return x.l(new B.dUR(x))},
$S:0}
B.dUR.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.dVa.prototype={
$0(){var x=this.a
return x.l(new B.dUQ(x))},
$S:0}
B.dUQ.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dV2.prototype={
$0(){var x=this.a
return x.l(new B.dUP(x))},
$S:0}
B.dUP.prototype={
$0(){var x=this.a
A.d.a7(x.z)
x.as=0},
$S:0}
B.ecJ.prototype={
$6(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(x=f.a,w=f.b,v=g.a,u=g.b,t=this.a,s=0;s<d.length;++s){r=d[s]
q=r.a
p=x-q
r=r.b
o=w-r
q=v-q
r=u-r
n=Math.max(0.12,Math.sqrt(p*p+o*o))
m=Math.max(0.12,Math.sqrt(q*q+r*r))
l=e[s]
k=h/(n*n)
j=i/(m*m)
q=l.a+(p/n*k+q/m*j)*t
j=l.b+(o/n*k+r/m*j)*t
e[s]=new C.m(q,j)
r=d[s]
d[s]=new C.m(r.a+q*t,r.b+j*t)}},
$S:2076}
B.ecz.prototype={
$0(){return B.v_(this.b,this.a.d,"galaxy")},
$S:0}
B.ecA.prototype={
$0(){var x=this.a
return x.l(new B.ecy(x,this.b))},
$S:0}
B.ecy.prototype={
$0(){var x,w=this.a
w.ch=!1
x=this.b.a
w.Q=x
w.w=x==="barred"?1:0
w.a1N()},
$S:0}
B.ecB.prototype={
$0(){var x=this.a
return x.l(new B.ecx(x))},
$S:0}
B.ecx.prototype={
$0(){var x=this.a
if(x.Q==="elliptical"){x.Q="spiral"
x.a1N()}x.cH8()},
$S:0}
B.ecC.prototype={
$1(d){var x=this.a
return x.l(new B.ecw(x,d))},
$S:6}
B.ecw.prototype={
$0(){var x=this.a
x.f=A.h.S(this.b)
x.a1N()},
$S:0}
B.ecD.prototype={
$1(d){var x=this.a
return x.l(new B.ecv(x,d))},
$S:6}
B.ecv.prototype={
$0(){var x=this.a
x.r=this.b
x.a1N()},
$S:0}
B.ecE.prototype={
$1(d){var x=this.a
return x.l(new B.ecu(x,d))},
$S:6}
B.ecu.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ecF.prototype={
$1(d){var x=this.a
return x.l(new B.ect(x,d))},
$S:6}
B.ect.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.ecG.prototype={
$0(){var x=this.a
return x.l(new B.ecs(x))},
$S:0}
B.ecs.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.ecH.prototype={
$0(){var x=this.a
return x.l(new B.ecr(x))},
$S:0}
B.ecr.prototype={
$0(){var x=this.a
return x.z=!x.z},
$S:0}
B.ecI.prototype={
$0(){var x=this.a
return x.l(new B.ecq(x))},
$S:0}
B.ecq.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dpU.prototype={
$6(d,e,f,g,h,i){return g.a6(0,new C.m((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:2077}
B.eJD.prototype={
$0(){return B.v_(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eJE.prototype={
$0(){var x=this.a
return x.l(new B.eJC(x))},
$S:0}
B.eJC.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eJF.prototype={
$0(){var x=this.a
return x.l(new B.eJB(x))},
$S:0}
B.eJB.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eJG.prototype={
$0(){var x=this.a
return x.l(new B.eJA(x))},
$S:0}
B.eJA.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.eJH.prototype={
$0(){var x=this.a
return x.l(new B.eJz(x))},
$S:0}
B.eJz.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.eJI.prototype={
$1(d){var x=this.a
return x.l(new B.eJy(x,d))},
$S:6}
B.eJy.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eJJ.prototype={
$1(d){var x=this.a
return x.l(new B.eJx(x,d))},
$S:6}
B.eJx.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eJK.prototype={
$1(d){var x=this.a
return x.l(new B.eJw(x,d))},
$S:6}
B.eJw.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eJL.prototype={
$1(d){var x=this.a
return x.l(new B.eJv(x,d))},
$S:6}
B.eJv.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var x=B.aQs.prototype
x.bDy=x.t
x=B.aIu.prototype
x.bzY=x.t
x=B.aPQ.prototype
x.bCW=x.t
x=B.aPR.prototype
x.bCX=x.t
x=B.aPS.prototype
x.bCY=x.t
x=B.aQo.prototype
x.bDu=x.t
x=B.aQr.prototype
x.bDx=x.t
x=B.aPn.prototype
x.bCr=x.t
x=B.aPO.prototype
x.bCT=x.t
x=B.aQm.prototype
x.bDs=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.avl.prototype,"gciT","ciU",0)
x(v,"gcX1","a78",4)
x(v=B.aHj.prototype,"gc9j","b1i",0)
w(v,"gciW","ciX",5)
x(v,"gbWP","bWQ",0)
x(v=B.aHk.prototype,"gcHh","cHi",0)
x(v,"gcj0","cj1",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(C.aH,[B.bqS,B.RN,B.o4,B.cjp,B.fxR,B.adB,B.adC,B.w7,B.QV,B.z2,B.QU,B.bzE,B.Rt,B.aht])
w(C.af,[B.Yi,B.Yu,B.Xq,B.Yx,B.Yh,B.Xr,B.Ya,B.Wt,B.Xo,B.Y5])
w(C.ai,[B.aQs,B.aIu,B.aPQ,B.bqa,B.aQr,B.aPS,B.aQo,B.aPn,B.aPO,B.aQm])
v(B.bpZ,B.aQs)
w(C.hr,[B.eUN,B.eUL,B.eUz,B.eUD,B.eUy,B.eUE,B.eUF,B.eUJ,B.hiF,B.cFl,B.h3N,B.cjr,B.cjq,B.fJp,B.fJq,B.h8m,B.cqA,B.cqp,B.cqx,B.edr,B.eds,B.edl,B.edk,B.edB,B.edC,B.edA,B.edD,B.edV,B.edW,B.edX,B.f0G,B.f0H,B.f0A,B.eUa,B.eUb,B.eUc,B.eUh,B.eUi,B.eU1,B.flO,B.flP,B.eev,B.eeo,B.eeq,B.eer,B.ees,B.eet,B.ee0,B.fjW,B.dVb,B.dV_,B.dUZ,B.dUY,B.dV3,B.ecJ,B.ecC,B.ecD,B.ecE,B.ecF,B.dpU,B.eJI,B.eJJ,B.eJK,B.eJL])
w(C.j0,[B.eUM,B.eUo,B.eUn,B.eUx,B.eUG,B.eUw,B.eUH,B.eUv,B.eUI,B.eUu,B.eUt,B.eUK,B.eUs,B.eUA,B.eUr,B.eUB,B.eUq,B.eUC,B.eUp,B.cFm,B.cFn,B.hiE,B.cFi,B.cFh,B.cFo,B.cFj,B.cFk,B.fD_,B.h9F,B.cqE,B.cqz,B.cqy,B.cqB,B.cqC,B.cqD,B.cqn,B.cqq,B.cqr,B.cqm,B.cqs,B.cql,B.cqt,B.cqk,B.cqu,B.cqj,B.cqv,B.cqi,B.cqw,B.cqh,B.edq,B.edp,B.edo,B.edt,B.edm,B.edn,B.edj,B.edM,B.edu,B.edv,B.edO,B.edz,B.edS,B.edL,B.edT,B.edK,B.edU,B.edJ,B.edI,B.edH,B.edG,B.edY,B.edF,B.edZ,B.edE,B.edP,B.edy,B.edQ,B.edx,B.edR,B.edw,B.edh,B.edg,B.dsK,B.fEC,B.fED,B.fEE,B.fEF,B.fEG,B.fEH,B.fEI,B.f0D,B.f0E,B.f0C,B.f0B,B.eU2,B.eUd,B.eUf,B.eU9,B.eUg,B.eU8,B.eU7,B.eUj,B.eU6,B.eUk,B.eU5,B.eUl,B.eU4,B.eUm,B.eU3,B.eU_,B.eTZ,B.flN,B.ee2,B.eeh,B.ee8,B.eei,B.ee7,B.eej,B.eeg,B.een,B.eef,B.eee,B.eep,B.eed,B.eec,B.eeb,B.eea,B.eeu,B.ee9,B.eek,B.ee6,B.eel,B.ee5,B.eem,B.ee4,B.eMB,B.eMC,B.eMA,B.eMD,B.eMz,B.dV0,B.dUX,B.dV4,B.dUW,B.dV5,B.dUV,B.dV6,B.dUU,B.dV7,B.dUT,B.dV8,B.dUS,B.dV9,B.dUR,B.dVa,B.dUQ,B.dV2,B.dUP,B.ecz,B.ecA,B.ecy,B.ecB,B.ecx,B.ecw,B.ecv,B.ecu,B.ect,B.ecG,B.ecs,B.ecH,B.ecr,B.ecI,B.ecq,B.eJD,B.eJE,B.eJC,B.eJF,B.eJB,B.eJG,B.eJA,B.eJH,B.eJz,B.eJy,B.eJx,B.eJw,B.eJv])
w(C.lQ,[B.bxJ,B.bcy,B.bkD,B.bxG,B.bfI,B.bxd,B.bf2,B.bku,B.bwp])
w(C.aw,[B.bbF,B.e6,B.fm,B.bbG,B.fN,B.GC])
w(C.j1,[B.h9G,B.h9H,B.cqo,B.edN,B.edi,B.dsL,B.f0F,B.eUe,B.eU0,B.ee1,B.ee3,B.ee_,B.dV1])
v(B.avl,B.aIu)
v(B.aPR,B.aPQ)
v(B.aHj,B.aPR)
v(B.bDd,B.aQr)
v(B.bpY,B.bDd)
v(B.bD_,B.aPS)
v(B.aHk,B.bD_)
v(B.bDb,B.aQo)
v(B.bpV,B.bDb)
v(B.bCR,B.aPn)
v(B.bov,B.bCR)
v(B.bCZ,B.aPO)
v(B.bp0,B.bCZ)
v(B.bDa,B.aQm)
v(B.bpU,B.bDa)
x(B.aQs,C.cm)
x(B.aIu,C.cm)
x(B.aPQ,C.cm)
x(B.aPR,B.o4)
x(B.aPS,C.cm)
x(B.bD_,B.o4)
x(B.aQo,C.cm)
x(B.bDb,B.o4)
x(B.aQr,C.cm)
x(B.bDd,B.o4)
x(B.aPn,C.cm)
x(B.bCR,B.o4)
x(B.aPO,C.cm)
x(B.bCZ,B.o4)
x(B.aQm,C.cm)
x(B.bDa,B.o4)})()
C.jj(b.typeUniverse,JSON.parse('{"Yi":{"af":[],"x":[]},"bpZ":{"ai":["Yi"]},"bxJ":{"aC":[]},"bbF":{"aw":[],"x":[]},"e6":{"aw":[],"x":[]},"fm":{"aw":[],"x":[]},"bbG":{"aw":[],"x":[]},"fN":{"aw":[],"x":[]},"GC":{"aw":[],"x":[]},"Yu":{"af":[],"x":[]},"bcy":{"aC":[]},"avl":{"ai":["Yu"]},"Xq":{"af":[],"x":[]},"aHj":{"ai":["Xq"]},"bkD":{"aC":[]},"Yx":{"af":[],"x":[]},"bqa":{"ai":["Yx"]},"Yh":{"af":[],"x":[]},"Xr":{"af":[],"x":[]},"Ya":{"af":[],"x":[]},"bpY":{"ai":["Yh"]},"bxG":{"aC":[]},"aHk":{"ai":["Xr"]},"bfI":{"aC":[]},"bpV":{"ai":["Ya"]},"bxd":{"aC":[]},"Wt":{"af":[],"x":[]},"Xo":{"af":[],"x":[]},"Y5":{"af":[],"x":[]},"bov":{"ai":["Wt"]},"bf2":{"aC":[]},"bp0":{"ai":["Xo"]},"bku":{"aC":[]},"bpU":{"ai":["Y5"]},"bwp":{"aC":[]}}'))
C.S7(b.typeUniverse,JSON.parse('{"o4":1}'))
var y=(function rtii(){var x=C.as
return{I:x("vp"),V:x("N<ac>"),O:x("N<u>"),l:x("N<Cf>"),y:x("N<ah<Cf>>"),f:x("N<ah<ah<H>>>"),b:x("N<ah<H>>"),x:x("N<ah<F>>"),g:x("N<m>"),E:x("N<yK>"),v:x("N<h1>"),L:x("N<+(o,o)>"),c:x("N<+(o,o,a_)>"),S:x("N<d4>"),s:x("N<o>"),X:x("N<L_>"),h:x("N<adB>"),a:x("N<dG>"),p:x("N<x>"),u:x("N<ll>"),A:x("N<Rt>"),Z:x("N<RN>"),G:x("N<bqS>"),q:x("N<aht>"),n:x("N<H>"),t:x("N<F>"),z:x("cB<ai<af>>"),j:x("ah<@>"),d:x("a9<o,@>"),m:x("iq"),P:x("cr"),U:x("adC"),D:x("dG"),J:x("l6"),w:x("P"),i:x("H"),r:x("F"),W:x("oF?"),B:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bgR=new C.cp(A.z,null,null,A.ai4,null)
D.hjs=new C.D("Press Drop! and watch them fall from 20 metres.",null,A.jP,null,A.K,null,null,null,null,null,null,null)
D.eK2=new C.C(A.ob,D.hjs,null)
D.bhi=new C.cp(A.z,null,null,D.eK2,null)
D.fYL=new C.G(!0,A.jX,null,null,null,null,18,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hoz=new C.D("Draw anywhere",null,D.fYL,null,null,null,null,null,null,null,null,null)
D.bhn=new C.cp(A.z,null,null,D.hoz,null)
D.bk1=new C.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.bkA=new C.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.a_e=new C.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.blF=new C.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.blK=new C.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bm5=new C.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.bn_=new C.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.boP=new C.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bp5=new C.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.CJ=new C.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.brW=new C.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.bsd=new C.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.bsj=new C.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.buD=new C.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.buH=new C.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.bvd=new C.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.bvs=new C.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.Hk=new C.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.am1=new C.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bx2=new C.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bx6=new C.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bxq=new C.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.bxB=new C.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.amw=new C.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.byA=new C.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.a12=new C.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.a17=new C.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.bBq=new C.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.ao2=new C.R(0,0,9,0)
D.bGX=new C.R(10,10,10,6)
D.aoy=new C.R(14,10,8,12)
D.bMe=new C.R(4,4,6,2)
D.bVw=new C.a_(62931,"MaterialIcons",!1)
D.asn=new C.a_(62951,"MaterialIcons",!1)
D.bVO=new C.a_(63070,"MaterialIcons",!1)
D.xv=new C.a_(63128,"MaterialIcons",!1)
D.IK=new C.a_(63726,"MaterialIcons",!1)
D.atn=new C.a_(983415,"MaterialIcons",!1)
D.bYv=new C.a_(984561,"MaterialIcons",!1)
D.bZ4=new C.ae(V.lf,24,A.aQ,null,null,null)
D.c_s=new C.ae(A.nr,21,A.ac,null,null,null)
D.auX=new C.ae(A.eI,19,null,null,null,null)
D.pc=new C.ae(A.tW,21,A.ac,null,null,null)
D.c81=new C.ae(A.QR,46,A.aH,null,null,null)
D.c8j=new C.ae(A.eR,20,A.aE,null,null,null)
D.c9l=new C.ae(A.mF,null,A.aE,null,null,null)
D.cgS=x([0,2,4,6,7,9,11],y.t)
D.cz1=x([255],y.t)
D.cCf=x([A.bO,A.f1],y.O)
D.cFb=x([33,249,4,5],y.t)
D.cFc=x([33,255,11],y.t)
D.boG=new C.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cIj=x([D.boG,A.dl],y.O)
D.cQ0=x([A.d0,G.nR,A.iv,G.aix,A.d0,A.iv],y.O)
D.d7_=x([3,1,0,0,0],y.t)
D.d7p=x([0.78,1],y.n)
D.aD4=x([0,2,4,7,9,12,14,16],y.t)
D.d7H=x([A.ey,A.oR],y.O)
D.d8_=x([A.a_,A.fy],y.O)
D.aDb=x([A.c6,A.aH,A.bu,A.bk,A.bf],y.O)
D.dc7=x([A.bw,A.be,A.bk,A.bf],y.O)
D.bsS=new C.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.q)
D.dca=x([D.bsS,G.alK],y.O)
D.dde=x([A.bu,A.c6,A.aH],y.O)
D.ddH=x([0.93,0.975,1],y.n)
D.deb=x([0,0.55,0.6],y.n)
D.bmI=new C.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.del=x([A.v8,D.bmI,A.eE],y.O)
D.bw5=new C.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.bpI=new C.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.buw=new C.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.den=x([D.bw5,D.bpI,D.buw],y.O)
D.deJ=x([A.as,A.fN,A.lX,A.i2,A.dD],y.O)
D.fgn=new C.y("solid","Solid")
D.f5d=new C.y("three","3D block")
D.f7s=new C.y("neon","Neon tube")
D.faJ=new C.y("gradient","Gradient")
D.fgA=new C.y("sticker","Sticker")
D.dfE=x([D.fgn,I.aV6,D.f5d,D.f7s,D.faJ,D.fgA,I.aV8,U.Wm],y.L)
D.dfF=x([A.bu,A.aH,A.bf,A.c6,A.c,A.cX],y.O)
D.htm=new B.z2("Moon",1737,4291941851)
D.htj=new B.z2("Earth",6371,4281908728)
D.htn=new B.z2("Neptune",24622,4284524026)
D.hto=new B.z2("Saturn",58232,4294829706)
D.htk=new B.z2("Jupiter",69911,4294677052)
D.htp=new B.z2("Sun",696340,4294688548)
D.htq=new B.z2("Sirius A",119e4,4290763774)
D.hth=new B.z2("Arcturus",179e5,4294818420)
D.hti=new B.z2("Betelgeuse",531e6,4294472049)
D.htl=new B.z2("UY Scuti",667e6,4293870660)
D.TH=x([D.htm,D.htj,D.htn,D.hto,D.htk,D.htp,D.htq,D.hth,D.hti,D.htl],C.as("N<z2>"))
D.fnW=new C.b1("glow","Glow",A.Is)
D.fkM=new C.b1("rainbow","Rainbow",A.m9)
D.fld=new C.b1("stars","Stars",A.ij)
D.fkr=new C.b1("sparks","Sparks",A.e9)
D.fmY=new C.b1("fire","Fire",A.vH)
D.dg0=x([D.fnW,D.fkM,D.fld,D.fkr,D.fmY],y.c)
D.dgc=x([A.amu,A.cX,A.de],y.O)
D.dhg=x([0.2,1],y.n)
D.diw=x(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],y.s)
D.djg=x([0,0.42,0.43,1],y.n)
D.aEc=x([0,2,4,7,9],y.t)
D.dlo=x([A.cx,A.a_],y.O)
D.a7A=x(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],y.s)
D.fzE=new C.d4(A.br,A.J,4)
D.dmr=x([D.fzE],y.S)
D.aEq=x([0,31,59,90,120,151,181,212,243,273,304,334],y.t)
D.byu=new C.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.bA9=new C.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.dmT=x([D.a12,D.byu,D.bA9],y.O)
D.bl2=new C.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.doF=x([D.Hk,D.bl2],y.O)
D.doW=x([1.77,3.55,7.15,16.7],y.n)
D.dqp=x([M.D_,A.lX],y.O)
D.bzm=new C.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.btl=new C.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.drc=x([D.bzm,D.btl],y.O)
D.btB=new C.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.brJ=new C.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.drh=x([D.a17,D.btB,D.brJ],y.O)
D.drZ=x(["March","April","May","June","July","August","September","October","November","December","January","February"],y.s)
D.fgr=new C.y("spiral","Spiral")
D.eXW=new C.y("barred","Barred spiral")
D.f9G=new C.y("elliptical","Elliptical")
D.dsP=x([D.fgr,D.eXW,D.f9G],y.L)
D.htr=new B.QV("Moon",1.62,0,4291941851)
D.hts=new B.QV("Mars",3.71,0.01,4294472049)
D.htt=new B.QV("Earth",9.81,1,4281908728)
D.htv=new B.QV("Jupiter",24.79,1.4,4294677052)
D.htu=new B.QV("Sun",274,2,4294688548)
D.AQ=x([D.htr,D.hts,D.htt,D.htv,D.htu],C.as("N<QV>"))
D.U1=x([0,2,4,5,7,9,11],y.t)
D.aEX=x([0,0.7,1],y.n)
D.dw_=x([0,0.62,1],y.n)
D.dwF=x([],y.y)
D.a80=x([],y.h)
D.dx8=x([0,0.46,0.82],y.n)
D.dya=x([0.9,0.97,1],y.n)
D.dyr=x([A.c6,A.cX,A.bu,A.bk],y.O)
D.dzf=x([M.D_,A.h_],y.O)
D.htf=new B.w7("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.htg=new B.w7("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.ht7=new B.w7("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.hte=new B.w7("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.htc=new B.w7("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.ht8=new B.w7("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.htd=new B.w7("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.ht9=new B.w7("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.htb=new B.w7("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.hta=new B.w7("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.EJ=x([D.htf,D.htg,D.ht7,D.hte,D.htc,D.ht8,D.htd,D.ht9,D.htb,D.hta],C.as("N<w7>"))
D.bu2=new C.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.br8=new C.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dzH=x([D.Hk,D.bu2,D.br8,A.ajN],y.O)
D.dBw=x([A.hn,A.f0,A.aH,A.H3],y.O)
D.f_w=new C.y("Wide",1.7777777777777777)
D.fhD=new C.y("Tall",0.5625)
D.a8j=x([D.f_w,I.aUR,D.fhD],C.as("N<+(o,H)>"))
D.fh6=new C.y("type","Typewriter")
D.f8s=new C.y("bounce","Bounce")
D.fi3=new C.y("wave","Wave")
D.ff6=new C.y("neon","Neon flicker")
D.fje=new C.y("zoom","Pop")
D.eYJ=new C.y("drop","Drop in")
D.eUd=new C.y("fly","Fly in")
D.fgv=new C.y("spin","Spin in")
D.faa=new C.y("flip","Flip")
D.fbw=new C.y("jelly","Jelly")
D.fgg=new C.y("shake","Shake")
D.fab=new C.y("float","Float")
D.ff4=new C.y("pulse","Heartbeat")
D.fgF=new C.y("swing","Swing")
D.ffK=new C.y("reveal","Reveal")
D.f_x=new C.y("blur","Zoom out")
D.f9j=new C.y("domino","Domino")
D.eZG=new C.y("spiral","Spiral in")
D.fbK=new C.y("cascade","Shine sweep")
D.fi9=new C.y("wobble","Wobble")
D.f4B=new C.y("rise","Rise up")
D.f3O=new C.y("scatter","Scatter & gather")
D.dFI=x([D.fh6,D.f8s,D.fi3,D.ff6,I.aV0,D.fje,I.aV7,D.eYJ,D.eUd,D.fgv,D.faa,D.fbw,D.fgg,D.fab,D.ff4,D.fgF,D.ffK,D.f_x,D.f9j,D.eZG,D.fbK,D.fi9,D.f4B,D.f3O],y.L)
D.dFV=x([F.rc,A.O9],y.O)
D.EM=x([A.c6,A.bu,A.bf,A.aH,A.bk,A.c3,A.c,A.cX],y.O)
D.bjX=new C.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bon=new C.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.dHD=x([D.bjX,G.akh,D.bon],y.O)
D.fjV=new C.b1("drop","Drop",F.a5i)
D.fjZ=new C.b1("weight","Weight",A7.atT)
D.fnx=new C.b1("cannon","Newton's cannon",A.asR)
D.dIU=x([D.fjV,D.fjZ,D.fnx],y.c)
D.fec=new C.y("\ud83c\udf19","Midnight")
D.fdB=new C.y("\u2728","Starfield")
D.eVi=new C.y("\ud83c\udf0c","Aurora")
D.f09=new C.y("\ud83c\udf05","Savanna sunset")
D.fdI=new C.y("\ud83c\udf0a","Ocean waves")
D.f0Y=new C.y("\ud83d\udd79\ufe0f","Neon grid")
D.f6U=new C.y("\ud83d\udcbb","Code rain")
D.f32=new C.y("\ud83c\udf89","Confetti")
D.f5H=new C.y("\ud83c\udf86","Fireworks")
D.eWF=new C.y("\ud83e\udee7","Bubbles")
D.fhB=new C.y("\u2744\ufe0f","Snowfall")
D.f1H=new C.y("\ud83e\uddf6","Kente weave")
D.eYd=new C.y("\ud83d\udd2e","Bokeh lights")
D.f6K=new C.y("\ud83c\udf27\ufe0f","Rain")
D.eYR=new C.y("\ud83d\udd25","Fire")
D.f65=new C.y("\ud83c\udfd4\ufe0f","Paper hills")
D.f21=new C.y("\ud83c\udfad","Stage")
D.f3R=new C.y("\u2600\ufe0f","Sunburst")
D.f6x=new C.y("\ud83e\udee0","Lava lamp")
D.eZu=new C.y("\ud83c\udf03","City night")
D.dKE=x([D.fec,D.fdB,D.eVi,D.f09,D.fdI,D.f0Y,D.f6U,D.f32,D.f5H,D.eWF,D.fhB,D.f1H,D.eYd,D.f6K,D.eYR,D.f65,D.f21,D.f3R,D.f6x,D.eZu],y.L)
D.dKW=x([0,0.35,0.55,0.75,1],y.n)
D.dMc=x([0.72,1],y.n)
D.dMp=x([0,2,4,7,9,12,14,16,19,21],y.t)
D.eDR={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dOK=new C.bl(D.eDR,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],C.as("bl<o,o>"))
D.eDx={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.fkw=new C.b1(3,20,1.9)
D.fjN=new C.b1(33,90,1.6)
D.fo1=new C.b1(52,15,3.2)
D.fo_=new C.b1(45,-100,1.8)
D.flZ=new C.b1(-15,-60,1.9)
D.flj=new C.b1(-25,140,2.4)
D.fl7=new C.b1(-82,0,2.2)
D.aM5=new C.bl(D.eDx,[D.fkw,D.fjN,D.fo1,D.fo_,D.flZ,D.flj,D.fl7],C.as("bl<o,+(H,H,H)>"))
D.dRo=new C.d2([A.q3,1,A.rp,1,A.rq,1,A.c_,1,A.km,2,A.xq,4,A.zY,1,A.zZ,2,A.A_,4,A.vx,2,A.xp,4,A.zX,8],C.as("d2<u1,F>"))
D.e_n=new B.Wt(null)
D.e8V=new B.Xo(null)
D.e8W=new B.Xq(null)
D.e8Y=new B.Xr(null)
D.evW=new B.Y5(null)
D.evY=new B.Ya(null)
D.exR=new B.Yh(null)
D.aOz=new B.Yi(null)
D.aOH=new B.Yu(null)
D.aOI=new B.Yx(null)
D.eEC=new C.m(0,-6771)
D.eGW=new C.m(1.9,-0.8)
D.eH_=new C.m(-0.22,0.09)
D.hio=new C.D("Tap to throw in a star",null,A.jP,null,null,null,null,null,null,null,null,null)
D.bhk=new C.cp(A.z,null,null,D.hio,null)
D.eR0=new C.cR(0,null,0,14,null,null,D.bhk,null)
D.bq5=new C.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bwI=new C.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.dmz=x([D.bq5,D.amw,D.bwI],y.O)
D.eRW=new C.bV(A.n0,0.5,A.w,null,0,D.dmz,D.aEX,null)
D.cQ_=x([A.CY,A.as,A.L],y.O)
D.dDT=x([0.3,0.7,1],y.n)
D.eRX=new C.bV(A.z,0.5,A.w,null,0,D.cQ_,D.dDT,null)
D.dgR=x([A.CY,A.as,A.fN],y.O)
D.eS_=new C.bV(A.z,0.5,A.w,null,0,D.dgR,null,null)
D.bqn=new C.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bnJ=new C.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.djP=x([D.bqn,D.bnJ],y.O)
D.eS4=new C.bV(A.z,0.5,A.w,null,0,D.djP,null,null)
D.bvZ=new C.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.bty=new C.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.btF=new C.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dKG=x([D.bvZ,D.bty,D.btF],y.O)
D.eS5=new C.bV(A.MQ,0.5,A.w,null,0,D.dKG,G.aDI,null)
D.fk0=new C.b1("Moon",1.62,4291941851)
D.fkP=new C.b1("Neptune",11.15,4284524026)
D.flz=new C.b1("Sun",274,4294688548)
D.flW=new C.b1("Mercury",3.7,4288455599)
D.fm1=new C.b1("Earth",9.81,4281908728)
D.fm3=new C.b1("Mars",3.71,4294472049)
D.fmx=new C.b1("Venus",8.87,4294759245)
D.fmF=new C.b1("Saturn",10.44,4294829706)
D.fn3=new C.b1("Jupiter",24.79,4294677052)
D.hnE=new C.D("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aXO=new C.b3(D.hnE,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.dyX=x([A.c3,A.bu,A.bf,A.aH,A.pQ,A.c3],y.O)
D.fJ6=new C.hg(A.z,0,6.283185307179586,A.w,D.dyX,null,null)
D.fST=new C.G(!0,A.aQ,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.TT,null,null,null)
D.fKg=new C.eF("You are here (Sun)",null,null,A.cV,null,null,null,null,null,null,D.fST)
D.fKh=new C.eF("What we see",null,null,A.cV,null,null,null,null,null,null,F.adW)
D.aYD=new C.G(!0,A.bX,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLl=new C.G(!0,A.bf,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNv=new C.G(!0,A.bX,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNI=new C.G(!0,A.ac,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP_=new C.G(!0,A.bX,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzW=new C.d4(A.bb,A.J,3)
D.aGI=x([D.fzW],y.S)
D.fS4=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.TT,null,null,null)
D.fSF=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzI=new C.d4(A.v,A.J,5)
D.dcn=x([D.fzI],y.S)
D.fVE=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dcn,null,null,null)
D.fVL=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aGI,null,null,null)
D.fXC=new C.G(!0,A.bX,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYm=new C.G(!0,A.aE,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_M=new C.G(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h62=new C.D("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.h6W=new C.D("Your mass never changes. What changes is how hard each world pulls on it.",null,A.LR,null,null,null,null,null,null,null,null,null)
D.h7Q=new C.D("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.XB,null,A.K,null,null,null,null,null,null,null)
D.fU9=new C.G(!0,A.jX,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9o=new C.D("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fU9,null,null,null,null,null,null,null,null,null)
D.hgb=new C.D("The map of the world is not saved on this phone yet",null,A.fK,null,A.K,null,null,null,null,null,null,null)
D.hgl=new C.D("Download the animation (GIF)",null,A.cL,null,null,null,null,null,null,null,null,null)
D.fU4=new C.G(!0,A.aH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hht=new C.D("Planet Earth",null,D.fU4,null,null,null,null,null,null,null,null,null)
D.hjL=new C.D("UNIVERSE EXPLORER",null,I.adg,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.ipX=C.S(C.as("o"),C.as("iU"))
$.hpR=null
$.ik6=C.S(C.as("o"),C.as("iU"))
$.ilb=C.S(C.as("o"),C.as("iU"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iTL","i_f",()=>C.a([B.ahQ("EARTH GLOBE","Turn it, tap a country",A.nr,A.aH,new B.fEC()),B.ahQ("SOLAR SYSTEM","The Sun and its worlds",D.asn,A.aQ,new B.fED()),B.ahQ("GRAVITY LAB","Drop, weigh, orbit",F.a5i,A.cX,new B.fEE()),B.ahQ("BLACK HOLE","Throw in a star",A.nq,A.bk,new B.fEF()),B.ahQ("GALAXY","Build, tilt, collide",A.xu,A.hm,new B.fEG()),B.ahQ("SIZE COMPARE","Earth next to a star",D.bVO,A.c6,new B.fEH()),B.ahQ("SEASONS & MOON","Why it is summer",A.vy,A.bw,new B.fEI())],C.as("N<bzE>")))})()};
(a=>{a["XK8j+naujOuSXTGWOHyA0cm0Cco="]=a.current})($__dart_deferred_initializers__);