((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,U,V,L,W,X,Y,M,N,O,I,P,Z,A_,A0,A1,A2,Q,R,B={bq5:function bq5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},Ry:function Ry(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Y3:function Y3(d){this.a=d},bpc:function bpc(d,e,f,g,h,i,j,k){var _=this
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
_.bv$=j
_.ab$=k
_.c=_.a=null},eSY:function eSY(d){this.a=d},eSW:function eSW(d){this.a=d},eSX:function eSX(){},eSz:function eSz(){},eSy:function eSy(){},eSI:function eSI(d,e){this.a=d
this.b=e},eSK:function eSK(d){this.a=d},eSO:function eSO(d){this.a=d},eSJ:function eSJ(d){this.a=d},eSP:function eSP(d){this.a=d},eSQ:function eSQ(d){this.a=d},eSR:function eSR(d,e){this.a=d
this.b=e},eSH:function eSH(d,e){this.a=d
this.b=e},eSS:function eSS(d){this.a=d},eSG:function eSG(d){this.a=d},eST:function eST(d,e){this.a=d
this.b=e},eSF:function eSF(d,e){this.a=d
this.b=e},eSU:function eSU(d){this.a=d},eSE:function eSE(d,e){this.a=d
this.b=e},eSV:function eSV(d){this.a=d},eSD:function eSD(d){this.a=d},eSL:function eSL(d){this.a=d},eSC:function eSC(d){this.a=d},eSM:function eSM(d){this.a=d},eSB:function eSB(d){this.a=d},eSN:function eSN(d,e){this.a=d
this.b=e},eSA:function eSA(d,e){this.a=d
this.b=e},bwW:function bwW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},aPU:function aPU(){},
lZ(d,e,f,g,h,i){return new B.baX(h,d,f,g,i,e,null)},
hSY(d,e,f,g){var x=null
return C.ce(x,x,!0,x,new B.hfD(g,e,f),d,x,!0,!0,y.H)},
ja(d,e,f,g,h,i,j){return new B.baY(f,j,i,h,g,d,e,null)},
uT(d,e,f){return B.iGY(d,e,f)},
iGY(d,e,f){var x=0,w=C.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$uT=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
o=$.aS.bk$.x.h(0,e)
o=o==null?null:o.gbg()
s=y.W.a(o)
if(s==null){x=1
break}x=7
return C.b(s.lx(2),$async$uT)
case 7:r=h
x=8
return C.b(r.ho(A.hq),$async$uT)
case 8:q=h
if(q==null){x=1
break}p=J.eW(A.dM.gaS(q))
x=9
return C.b(C.ayi(C.a([C.cJJ(p,"image/png",f+".png")],y.u),null,"Made in NGMY Core Protocol"),$async$uT)
case 9:u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.K(y.J).f.T(D.aWU)
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$uT,w)},
mJ(d,e,f,g){var x,w=$.auU
if(w==="music")return E.dH(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(w==="space"){w=Math.pow(2,e/12)
x=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dH(261.63*w,x,f,0,g,"sine")}return B.hlj(w,e,f,g)},
hlj(d,e,f,g){var x="tri",w="sine",v="noise",u=261.63*Math.pow(2,A.o.D(e,-12,36)/12),t=Math.min(f,260)
switch(d){case"tech":return E.dH(u*2,"",Math.min(t,110),0,g*0.45,"square")
case"sparkle":return E.dH(u*2.5,"",130,-0.35,g*0.6,x)
case"bounce":return E.dH(140+A.o.F(e,12)*9,"",150,0.9,g,w)
case"bubble":return E.dH(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,w)
case"pop":E.dH(u,"",160,-0.7,g*0.4,x)
return E.dH(900,"",90,0,g*0.45,v)
case"zap":return E.dH(u*3,"",150,1.6,g*0.4,"square")
case"click":return E.dH(2600+A.o.F(e,7)*180,"",30,0,g*0.5,v)
case"whoosh":E.dH(320,"",220,-0.7,g*0.35,w)
return E.dH(1500,"",200,0,g*0.22,v)
case"organic":return E.dH(85+A.o.F(e,12)*5,"",190,1.1,g,w)
case"lab":return E.dH(u*1.6,"",140,-0.3,g*0.55,x)
default:return E.dH(u,"",t,0,g*0.5,x)}},
Yg(d,e,f){var x,w="sine",v="noise"
if(e===1)x=1.25
else x=e===2?0.8:1
switch(d){case"kick":E.dH(95*x,"",200,1.8,f,w)
break
case"snare":E.dH(220*x,"",140,0,f*0.65,v)
break
case"hat":E.dH(5000,"",50,0,f*0.35,v)
break
case"open":E.dH(5200,"",220,0,f*0.35,v)
break
case"clap":E.dH(1100*x,"",100,0,f*0.5,v)
break
case"tom":E.dH(150*x,"",230,1,f,w)
break
case"low":E.dH(100*x,"",260,0.9,f,w)
break
case"rim":E.dH(1700*x,"",60,0,f*0.4,"square")
break
case"cow":E.dH(820*x,"",240,0,f*0.3,"square")
break
case"crash":E.dH(3200,"",650,0,f*0.4,v)
break
case"shake":E.dH(7000,"",90,0,f*0.3,v)
break
default:E.dH(60*x,"",300,0,f,w)}},
baX:function baX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cEv:function cEv(d){this.a=d},
cEw:function cEw(d,e){this.a=d
this.b=e},
hfD:function hfD(d,e,f){this.a=d
this.b=e
this.c=f},
hfC:function hfC(d){this.a=d},
e3:function e3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cEr:function cEr(d){this.a=d},
fj:function fj(d,e,f){this.c=d
this.d=e
this.a=f},
baY:function baY(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fJ:function fJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cEq:function cEq(d){this.a=d},
Gt:function Gt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cEx:function cEx(d){this.a=d},
nZ:function nZ(){},
cEs:function cEs(d,e,f){this.a=d
this.b=e
this.c=f},
cEu:function cEu(d){this.a=d},
cEt:function cEt(){},
aju(b1,b2,b3,b4,b5,b6,b7){var x=0,w=C.j(y.D),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aju=C.e(function(b8,b9){if(b8===1)return C.f(b9,w)
for(;;)switch(x){case 0:a7=new B.h10(b3)
a8=y.a
a9=C.a([],a8)
u=0
case 3:if(!(u<8)){x=4
break}b0=a9
x=5
return C.b(a7.$1(A.i.bd(u*b4/8)),$async$aju)
case 5:b0.push(b9);++u
b6.$1(u/8*0.1)
x=3
break
case 4:t=b7*4
s=new Uint8Array(t*b5)
for(r=0;r<b5;r=p){q=r*t
p=r+1
A.aI.ev(s,q,p*t,a9[A.o.F(r,8)],q)}A.d.a6(a9)
q=new C.zY(null,null,null,null,0,A.e6,0,0)
q.bEf(null,A.aI.gaS(s),0,null,A.c2,0,0,A.e6,b5,null,0,4,A.Nd,null,A.c2,null,null,b7,!1)
o=Y.hzI(q,255,3)
n=new Uint8Array(768)
m=0
for(;;){q=o.a
q===$&&C.d()
if(!(m<q.a&&m<255))break
l=m*3
n[l]=A.o.M(q.ov(m))
n[l+1]=A.o.M(o.a.ou(m))
n[l+2]=A.o.M(o.a.ot(m));++m}k=B.iC0(b7,b5,b1)
a8=new C.ae2(C.a([],a8))
j=new B.ciy(b7,b5,a8)
a8.I(0,new C.dk("GIF89a"))
j.Ly(b7)
j.Ly(b5)
a8.q3(247)
a8.q3(255)
a8.q3(0)
a8.I(0,n)
a8.I(0,D.cDO)
a8.I(0,new C.dk("NETSCAPE2.0"))
a8.I(0,D.d5v)
i=A.i.S(100/b2)
h=new Int16Array(2097152)
A.xT.fY(h,0,2097152,-1)
q=y.H,l=b7*b5,g=null,f=0
case 6:if(!(f<b4)){x=8
break}x=9
return C.b(a7.$1(f),$async$aju)
case 9:e=b9
d=new Uint8Array(l)
for(a0=0,a1=0;a0<l;++a0,a1+=4){a2=e[a1]
a3=e[a1+1]
a4=e[a1+2]
a5=(a2>>>1<<14|a3>>>1<<7|a4>>>1)>>>0
m=h[a5]
if(m<0){m=o.b_l(a4,a3,a2)
h[a5]=m}d[a0]=m}for(r=0;r<b5;++r){a6=k[r]
if(a6===0)continue
a2=r*b7
A.aI.fY(d,a2,a2+a6,255)
a2=(r+1)*b7
A.aI.fY(d,a2-a6,a2,255)}if(g==null)j.aJ1(0,0,b7,b5,d,i)
else j.cQy(g,d,i);++f
b6.$1(0.1+f/b4*0.9)
x=10
return C.b(C.bO(A.bH,null,q),$async$aju)
case 10:case 7:g=d
x=6
break
case 8:a8.q3(59)
v=a8.a8y()
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$aju,w)},
iC0(d,e,f){var x,w,v,u,t,s=C.c3(e,0,!1,y.r)
if(f<=0)return s
f=Math.min(f,Math.min(d,e)/2)
for(x=f*f,w=e-1,v=0;v<e;++v){u=Math.min(v,w-v)+0.5
if(u>=f)continue
t=f-u
s[v]=A.i.S(f-Math.sqrt(x-t*t))}return s},
aTR(d,e){return B.iC9(d,e)},
iC9(d,e){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p
var $async$aTR=C.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:q=!1
u=4
x=7
return C.b(C.ayi(C.a([C.cJJ(d,"image/gif",e+".gif")],y.u),null,"Made in NGMY Core Protocol"),$async$aTR)
case 7:s=g
q=s.b!==A.Wn
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
return C.b(B.h3R(d,e+".gif","image/gif"),$async$aTR)
case 10:q=g
case 9:v=q
x=1
break
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$aTR,w)},
h10:function h10(d){this.a=d},
ciy:function ciy(d,e,f){this.a=d
this.b=e
this.c=f},
ciA:function ciA(d,e,f){this.a=d
this.b=e
this.c=f},
ciz:function ciz(d,e){this.a=d
this.b=e},
hKA(d,e){var x
$.T()
x=C.L()
x.r=d.gp(0)
x.c=e
x.b=A.ad
x.d=A.bG
return x},
uG(d,e,f){var x,w,v,u
if(f==null){x=e.length
if(x===2)x=null
else{w=C.a([],y.n)
for(v=x-1,u=0;u<x;++u)w.push(u/v)
x=w}}else x=f
return C.jR(A.J,new C.r(0,d.b),e,x,A.w,null)},
imb(d,e,f){return $.imc.c_(0,d+"|"+A.i.S(e)+"|"+f.m(),new B.fAS(d,f,e))},
iES(e3,e4,e5,e6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7=null,d8=e4.a,d9=e4.b,e0=0+d9,e1=new C.a5(0,0,0+d8,e0),e2=new C.e4()
e2.cV(e6*97+5)
x=new B.h6I(e2)
switch(A.o.F(e6,20)){case 0:$.T()
e0=C.L()
e0.san(B.uG(e4,D.dmR,d7))
e3.aE(e1,e0)
w=new C.r(d8*(0.5+0.2*Math.sin(6.283185307179586*e5)),d9*0.5)
e0=d8*0.5
v=C.L()
v.san(C.wv(w,e0,C.a([D.bAn,A.L],y.O),d7,A.w,d7,d7,0))
e3.O(w,e0,v)
break
case 1:$.T()
e0=C.L()
e0.san(B.uG(e4,D.daC,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<70;++u){v=x.$0()
t=x.$0()
s=e2.av(3)
r=x.$0()
q=new C.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e0*(1+s)+u))).gp(0)
e3.O(new C.r(v*d8,t*d9),0.6+r*1.4,q)}p=A.i.F(e5*2,1)
e0=d8*(0.1+p*0.7)
v=d9*(0.1+p*0.3)
e3.ah(new C.r(e0,v),new C.r(e0-d8*0.12,v-d9*0.05),B.hKA(A.c.j(1-p),2))
v=d8*0.85
e0=d9*0.2
t=C.L()
t.r=G.OD.gp(0)
e3.O(new C.r(v,e0),d9*0.09,t)
t=C.L()
t.r=D.a0N.gp(0)
e3.O(new C.r(v+d9*0.03,e0-d9*0.01),d9*0.08,t)
break
case 2:e0=$.T()
v=C.L()
v.san(B.uG(e4,D.dcN,d7))
e3.aE(e1,v)
for(u=0;u<40;++u){v=x.$0()
t=x.$0()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.5).gp(0)
e3.O(new C.r(v*d8,t*d9*0.6),0.7,s)}for(v=d9*0.12,t=d8/24,s=y.v,o=0;o<4;++o){r=C.a([],s)
n=new C.aH(e0.r,A.ak,d7,d7,r)
for(e0=d9*(0.3+0.07*o),q=o*1.3,m=0;m<=d8;m+=t){l=e0+Math.sin(6.283185307179586*(m/d8*1.4+e5)+q)*d9*0.09
if(m===0){k=new C.aZ(m,l)
r.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}else{k=new C.aq(m,l)
r.push(k)
j=n.f
if(j!=null)k.aj(j)
n.ac()}}e0=$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=D.daz[o].j(0.5).gp(0)
r.b=A.ad
r.c=v
r.y=A.apK
e3.af(n,r)}break
case 3:e0=$.T()
v=C.L()
v.san(B.uG(e4,D.dFk,D.du_))
e3.aE(e1,v)
v=6.283185307179586*e5
i=new C.r(d8*0.5,d9*(0.64+0.01*Math.sin(v)))
t=d9*0.36
s=C.L()
s.san(C.wv(i,t,C.a([D.bur,A.L],y.O),d7,A.w,d7,d7,0))
e3.O(i,t,s)
s=C.L()
s.r=A.a_d.gp(0)
e3.O(i,d9*0.13,s)
for(t=y.v,h=0;h<3;++h,e0=s){s=C.a([],t)
n=new C.aH(e0.r,A.ak,d7,d7,s)
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
e0=[D.bm1,D.bl7,A.GO][h]
s=$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=e0.gp(0)
e3.af(n,r)}for(s=[0.18,0.78],r=s.length,q=d9*0.78,k=-d8,j=k*0.005,g=-d9,f=q+g*0.2,g=q+g*0.21,e=d8*0.2,d=d9*0.06,a0=0;a0<r;++a0){a1=d8*s[a0]
a2=a1+j
a3=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=D.alx.gp(0)
a3.c=3
a3.b=A.ad
a3.d=A.bG
e3.ah(new C.r(a1,q),new C.r(a2,f),a3)
a2=C.bZ(new C.r(a2,g),d,e)
a3=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=D.alx.gp(0)
e3.c1(a2,a3)}for(s=k*0.05,v*=6,e0=e0.r,u=0;u<4;++u){w=A.i.F(e5+u*0.22,1)
r=s+w*d8*1.1
q=d9*(0.25+0.05*u)+Math.sin(6.283185307179586*w*3)*d9*0.02
k=Math.sin(v+u)
j=C.a([],t)
g=new C.aH(e0,A.ak,d7,d7,j)
k=q+k*d9*0.012
j.push(new C.aZ(r-8,k))
g.ac()
f=q-4
q=new C.ck(r-3,f,r,q)
j.push(q)
e=g.f
if(e!=null)q.aj(e)
g.ac()
r=new C.ck(r+3,f,r+8,k)
j.push(r)
q=g.f
if(q!=null)r.aj(q)
g.ac()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.GO.gp(0)
r.c=2
r.b=A.ad
r.d=A.bG
e3.af(g,r)}break
case 4:e0=$.T()
v=C.L()
v.san(B.uG(e4,D.dzp,D.dhw))
e3.aE(e1,v)
v=C.L()
v.r=D.bwA.gp(0)
e3.O(new C.r(d8*0.75,d9*0.2),d9*0.1,v)
for(v=y.v,h=0;h<5;++h,e0=t){t=C.a([],v)
n=new C.aH(e0.r,A.ak,d7,d7,t)
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
e0=C.ap(A.cI,A.tk,h/5).j(0.85)
t=$.T()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=e0.gp(0)
e3.af(n,s)}break
case 5:$.T()
e0=C.L()
e0.san(B.uG(e4,D.dpo,D.dcB))
e3.aE(e1,e0)
a4=d9*0.6
e0=d8/2
v=d9*0.26
t=C.L()
t.san(C.jR(new C.r(0,a4-v),new C.r(0,a4),D.dDD,d7,A.w,d7))
e3.O(new C.r(e0,a4),v,t)
for(v=d8*0.2,t=a4-d9*0.2,s=d9*0.012,r=v+d8*0.6,u=0;u<5;){q=t+u*d9*0.045;++u
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=D.a0S.gp(0)
e3.aE(new C.a5(v,q,r,q+s*u*0.6),k)}v=C.L()
v.r=D.a0S.gp(0)
e3.aE(new C.a5(0,a4,d8,d9),v)
a5=B.hKA(A.NX.j(0.85),1.4)
for(v=d9-a4,o=0;o<10;++o){a6=(o+e5)/9
if(a6<0.02)continue
l=a4+a6*a6*v
e3.ah(new C.r(0,l),new C.r(d8,l),a5)}for(o=-8;o<=8;++o){v=o*d8
e3.ah(new C.r(e0+v*0.02,a4),new C.r(e0+v*0.2,d9),a5)}break
case 6:$.T()
e0=C.L()
e0.r=D.bwp.gp(0)
e3.aE(e1,e0)
a7=Math.max(12,d8/20)
for(e0=d8/a7,v=e5*12,t=a7*0.9,s=-a7,r=d9+a7*9,q=a7*2,a8=0;a8<e0;++a8){a9=1+A.o.F(a8,3)
b0=A.i.F(e5*a9+x.$0(),1)*r-q
for(k=a8*a7,j=a8*7,g=v*a9,o=0;o<10;++o){l=b0-o*a7
if(l<s||l>d9)continue
b1="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.o.F(j+o*3+A.i.bd(g),34)]
B.imb(b1,t,o===0?D.bj3:A.bk.j(1-o/9)).a4(e3,new C.r(k,l))}}break
case 7:$.T()
e0=C.L()
e0.san(B.uG(e4,D.doA,d7))
e3.aE(e1,e0)
for(e0=d9+30,v=e3.c,t=6.283185307179586*e5,u=0;u<60;++u){s=x.$0()
r=A.i.F(e5*(1+e2.av(2))+x.$0(),1)
J.bs(v.save())
v.translate(s*d8+Math.sin(t+u)*8,r*e0-15)
v.rotate((t*(1+A.o.F(u,3))+u)*180/3.141592653589793,0,0)
r=C.bZ(A.J,4,8)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=D.de3[A.o.F(u,6)].gp(0)
e3.aE(r,s)
v.restore()}break
case 8:$.T()
e0=C.L()
e0.san(B.uG(e4,A2.aBO,d7))
e3.aE(e1,e0)
for(e0=d9*0.08,b2=0;b2<3;++b2){w=A.i.F(e5+b2/3,1)
b3=d8*(0.22+0.28*b2)
b4=d9*(0.3+0.1*A.o.F(b2,2))
if(w<0.22){v=d9*(1-w/0.22*(1-b4/d9))
$.T()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.ac.gp(0)
t.c=2
t.b=A.ad
t.d=A.bG
e3.ah(new C.r(b3,v),new C.r(b3,v+e0),t)}else{b5=(w-0.22)/0.78
v=1-b5
b6=1-Math.pow(v,3)
for(t=b5*b5*d9*0.1,s=2.6*v+0.4,u=0;u<28;++u){b7=6.283185307179586*u/28
r=Math.cos(b7)
q=Math.sin(b7)
k=D.dbF[b2].j(v)
$.T()
j=new C.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=k.gp(0)
e3.O(new C.r(b3+r*b6*d9*0.34,b4+q*b6*d9*0.34+t),s,j)}}}break
case 9:$.T()
e0=C.L()
e0.san(B.uG(e4,D.d6c,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<30;++u){o=1+e2.av(2)
b8=x.$0()
v=x.$0()
b9=4+x.$0()*d9*0.05
l=d9-A.i.F(e5*o+b8,1)*(d9+b9*3)+b9
v=v*d8+Math.sin(e0*o+u)*10
w=new C.r(v,l)
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.12).gp(0)
e3.O(w,b9,t)
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.5).gp(0)
t.c=1.2
t.b=A.ad
t.d=A.bG
e3.O(w,b9,t)
t=-b9*0.3
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.7).gp(0)
e3.O(new C.r(v+t,l+t),b9*0.2,s)}break
case 10:$.T()
e0=C.L()
e0.san(B.uG(e4,D.cGU,d7))
e3.aE(e1,e0)
e0=C.L()
e0.r=G.OD.gp(0)
e3.O(new C.r(d8*0.2,d9*0.2),d9*0.08,e0)
for(e0=d9+10,v=6.283185307179586*e5,u=0;u<90;++u){o=1+e2.av(3)
b8=x.$0()
t=x.$0()
s=A.i.F(e5*o+b8,1)
r=Math.sin(v*o+u)
q=x.$0()
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=A.c.j(0.9).gp(0)
e3.O(new C.r(t*d8+r*12,s*e0-5),1.2+q*2.4,k)}e0=-d8*0.1
v=d9*0.9
t=C.L()
t.r=A.c.gp(0)
e3.c1(new C.a5(e0,v,e0+d8*1.2,v+d9*0.3),t)
break
case 11:$.T()
v=C.L()
v.r=A.iu.gp(0)
e3.aE(e1,v)
c0=d8/12
c1=A.i.F(e5*c0*6,c0*6)
for(u=-6;u<24;++u){m=u*c0+c1
v=new C.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=D.cOB[A.o.F(A.o.F(u,6)+6,6)].gp(0)
e3.aE(new C.a5(m,0,m+c0,e0),v)}for(e0=c0*0.3,v=c0/2,t=y.v,l=0;l<d9;l+=c0)for(s=l/c0,b4=l+v,r=b4-e0,q=b4+e0,u=-6;u<24;++u)if(A.o.F(u+A.i.bd(s),3)===0){b3=u*c0+c1+v
k=$.T()
j=C.a([],t)
k=new C.aH(k.r,A.ak,d7,d7,j)
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
g=new C.bA()
j.push(g)
j=k.f
if(j!=null)g.aj(j)
k.ac()
j=new C.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.j(0.75).gp(0)
e3.af(k,j)}$.T()
e0=C.L()
e0.san(C.wv(e1.gbD(),d8*0.7,C.a([A.L,A.v.j(0.55)],y.O),C.a([0.4,1],y.n),A.w,d7,d7,0))
e3.aE(e1,e0)
break
case 12:$.T()
e0=C.L()
e0.san(B.uG(e4,D.d6v,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<18;++u){w=new C.r(x.$0()*d8+Math.sin(e0+u)*18,x.$0()*d9+Math.cos(e0+u*1.7)*14)
b9=d9*(0.05+x.$0()*0.1)*(1+0.15*Math.sin(v+u))
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s=A.o.F(u,5)
t.r=D.aCx[s].j(0.28).gp(0)
t.y=A.I3
e3.O(w,b9,t)
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=D.aCx[s].j(0.35).gp(0)
t.c=1.2
t.b=A.ad
t.d=A.bG
e3.O(w,b9*0.9,t)}break
case 13:$.T()
e0=C.L()
e0.san(B.uG(e4,D.djC,d7))
e3.aE(e1,e0)
c2=Math.max(0,1-Math.abs(e5-0.3)*14)
if(c2>0){e0=A.c.j(0.35*c2)
v=C.L()
v.r=e0.gp(0)
e3.aE(e1,v)}for(e0=d9+40,u=0;u<70;++u){m=x.$0()*d8
l=A.i.F(e5*(2+e2.av(2))+x.$0(),1)*e0-20
v=new C.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.dH.j(0.6).gp(0)
v.c=1.3
v.b=A.ad
v.d=A.bG
e3.ah(new C.r(m,l),new C.r(m-6,l+18),v)}for(u=0;u<10;++u){e0=C.bZ(new C.r(x.$0()*d8,A.i.F(e5+x.$0(),1)*d9),11,7)
v=new C.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.c.j(0.18).gp(0)
e3.c1(e0,v)}break
case 14:e0=$.T()
v=C.L()
v.san(B.uG(e4,D.dcL,d7))
e3.aE(e1,v)
for(v=d8*0.035,t=y.v,s=d8*0.02,r=d8*0.08,q=d8*0.07,k=6.283185307179586*e5,j=k*3,g=k*2,e0=e0.r,u=0;u<7;++u){c3=d8*(u+0.5)/7
c4=d9*(0.28+0.1*Math.sin(g+u*2.1)+0.06*A.o.F(u,3))
f=C.a([],t)
w=new C.aH(e0,A.ak,d7,d7,f)
f.push(new C.aZ(c3-q,d9))
w.ac()
e=new C.i5(c3-r,d9-c4*0.5,c3+Math.sin(j+u)*6,d9-c4*0.8,c3,d9-c4)
f.push(e)
d=w.f
if(d!=null)e.aj(d)
w.ac()
e=new C.i5(c3+s,d9-c4*0.6,c3+r,d9-c4*0.4,c3+q,d9)
f.push(e)
d=w.f
if(d!=null)e.aj(d)
w.ac()
e=new C.bA()
f.push(e)
f=w.f
if(f!=null)e.aj(f)
w.ac()
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.fM.j(0.85).gp(0)
e3.af(w,f)
f=C.a([],t)
e=new C.aH(e0,A.ak,d7,d7,f)
f.push(new C.aZ(c3-v,d9))
e.ac()
d=new C.ck(c3,d9-c4*0.9,c3+v,d9)
f.push(d)
a1=e.f
if(a1!=null)d.aj(a1)
e.ac()
d=new C.bA()
f.push(d)
f=e.f
if(f!=null)d.aj(f)
e.ac()
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.eH.j(0.9).gp(0)
e3.af(e,f)}for(u=0;u<40;++u){o=1+e2.av(2)
b8=x.$0()
e0=x.$0()
v=A.i.F(e5*o+b8,1)
t=Math.sin(k*o+u)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=G.alT.j(0.9).gp(0)
e3.O(new C.r(e0*d8+t*10,d9-v*d9*0.9),1.5,s)}break
case 15:e0=$.T()
v=C.L()
v.san(B.uG(e4,D.cAR,d7))
e3.aE(e1,v)
v=C.L()
v.r=A.ib.gp(0)
e3.O(new C.r(d8*0.7,d9*0.28),d9*0.12,v)
for(v=d8+20,t=d8/12,s=6.283185307179586*e5,r=y.v,h=0;h<5;e0=q,h=c5){q=C.a([],r)
n=new C.aH(e0.r,A.ak,d7,d7,q)
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
e0=D.dd8[h]
q=$.T()
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=e0.gp(0)
e3.af(n,k)}break
case 16:v=$.T()
t=C.L()
t.san(B.uG(e4,D.dpj,d7))
e3.aE(e1,t)
c6=Math.sin(6.283185307179586*e5)*0.18
t=e3.c
J.bs(t.save())
s=d8/2
t.translate(s,0)
e3.jt(0,c6)
v=new C.aH(v.r,A.ak,d7,d7,C.a([],y.v))
r=-d8
v.E(new C.aZ(r*0.03,0))
q=d8*0.03
v.E(new C.aq(q,0))
v.E(new C.aq(d8*0.34,d9))
v.E(new C.aq(r*0.34,d9))
v.E(new C.bA())
r=C.L()
k=y.O
r.san(C.jR(A.J,new C.r(0,d9),C.a([A.c.j(0.5),A.c.j(0.04)],k),d7,A.w,d7))
e3.af(v,r)
t.restore()
s=C.bZ(new C.r(s+Math.sin(c6)*d9,d9*0.95),d9*0.14,d8*0.6)
t=A.c.j(0.22)
r=C.L()
r.r=t.gp(0)
e3.c1(s,r)
for(v=[-1,1],t=v.length,s=d8*0.18,r=0+d9*0.06,c7=d8*0.82,a0=0;a0<t;++a0){j=v[a0]<0
c8=j?0:c7
for(u=0;u<6;++u){g=c8+u*d8*0.03
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
e=C.a([A.ez,A.eu,A.ez],k)
f.san(new C.a6E(new C.r(0,0),new C.r(q,0),e,A.mb,A.w,d7))
e3.aE(new C.a5(g,0,g+q,e0),f)}j=j?0:c7
g=new C.ar(A.U,A.R,A.X,A.Y,A.W)
g.r=A.kK.gp(0)
e3.aE(new C.a5(j,0,j+s,r),g)}break
case 17:e0=$.T()
v=C.L()
v.san(C.wv(e1.gbD(),d8*0.7,D.deA,A.mb,A.w,d7,d7,0))
e3.aE(e1,v)
v=e3.c
J.bs(v.save())
v.translate(d8/2,d9/2)
e3.jt(0,e5*6.283185307179586/8)
for(t=y.v,e0=e0.r,u=0;u<16;u+=2){c9=6.283185307179586*u/16
d0=6.283185307179586*(u+1)/16
s=C.a([],t)
r=new C.aH(e0,A.ak,d7,d7,s)
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
q=new C.bA()
s.push(q)
s=r.f
if(s!=null)q.aj(s)
r.ac()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.22).gp(0)
e3.af(r,s)}v.restore()
break
case 18:$.T()
e0=C.L()
e0.san(B.uG(e4,D.dx9,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<7;++u){t=x.$0()
s=Math.sin(e0+u*1.1)
r=x.$0()
q=Math.sin(v+u)
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=D.dwn[A.o.F(u,4)].j(0.7).gp(0)
k.y=A.Dp
e3.O(new C.r(d8*(0.1+0.8*t)+q*10,d9*(0.5+0.38*s)),d9*(0.1+0.08*r),k)}break
case 19:$.T()
e0=C.L()
e0.san(B.uG(e4,D.dl5,D.aEh))
e3.aE(e1,e0)
for(u=0;u<40;++u){e0=x.$0()
v=x.$0()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.6).gp(0)
e3.O(new C.r(e0*d8,v*d9*0.45),0.7,t)}e0=C.L()
e0.r=G.OD.gp(0)
e3.O(new C.r(d8*0.8,d9*0.2),d9*0.07,e0)
m=-d8*0.02
for(e0=d9-8,v=e5*6,d1=0;m<d8;){d2=d8*(0.07+x.$0()*0.07)
d3=d9*(0.25+x.$0()*0.4)
t=d9-d3
s=m+d2
$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=D.bnP.gp(0)
e3.aE(new C.a5(m,t,s,t+d3),r)
for(d4=t+6,d5=m+4,t=s-6,s=d1*31;d4<e0;d4+=11)for(r=d4*7,q=d4+6,d6=d5;d6<t;d6+=9)if(A.o.F(s+A.i.S(r)+A.i.S(d6*3)+A.i.bd(v),5)!==0){k=D.brc.j(0.85)
$.T()
j=new C.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=k.gp(0)
e3.aE(new C.a5(d6,d4,d6+4,q),j)}m+=d2+2;++d1}break}},
ijm(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
itG(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p=new B.fvT(),o=f<=1,n=o?0:e/(f-1),m=o?0:e/(f-1)
o=g/0.5
x=A.i.D((o-m*0.45)/0.55,0,1)
w=g<0.86?1:A.i.D((1-g)/0.14,0,1)
v=new C.e4()
v.cV(e*53+11)
switch(d){case"type":p.f=A.i.bd(g/0.55*f)>e?w:0
break
case"bounce":p.b=-Math.abs(Math.sin(A.i.F(g*2-n*0.5,1)*3.141592653589793))*h*0.5
break
case"wave":p.b=Math.sin(6.283185307179586*g-n*3)*h*0.28
break
case"neon":p.x=p.f=Math.sin(6.283185307179586*g*13+e*7)>0.92?0.25:1
break
case"glitch":u=A.o.F(A.i.bd(g*12),6)===0
p.a=u?Math.sin(e*12.9898+g*100)*h*0.14:0
if(u)p.w=(e&1)===0?A.bd:A.c5
break
case"zoom":p.c=p.d=A.n1.aA(0,x)
p.f=x*w
break
case"rainbow":p.w=new H.pE(1,A.i.F(g*360+e*40,360),0.75,1).jg()
break
case"drop":p.b=-(1-B.ijm(x))*h*4
p.f=A.i.D(x*6,0,1)*w
break
case"fly":p.a=-(1-A.eg.aA(0,x))*i*0.8
p.f=A.i.D(x*4,0,1)*w
break
case"spin":p.e=(1-x)*6.283185307179586
p.c=p.d=x
p.f=w
break
case"flip":p.c=Math.cos(3.141592653589793*(1-A.ed.aA(0,x)))
p.f=A.i.D(x*5,0,1)*w
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
case"reveal":p.f=A.i.D((A.i.D(o,0,1)-n)*6,0,1)*w
break
case"blur":p.c=p.d=2.4-1.4*A.ed.aA(0,x)
p.f=x*w
break
case"domino":p.e=Math.sin(A.i.D(g*1.6-n*0.6,0,1)*3.141592653589793)*0.9
p.r=h*0.5
break
case"spiral":o=1-x
s=o*3.141592653589793*3
r=o*h*3
p.a=Math.cos(s)*r
p.b=Math.sin(s)*r
p.f=x*w
break
case"cascade":q=Math.pow(Math.sin(3.141592653589793*A.i.F(g*2-n,1)),4)
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
case"scatter":o=1-A.dQ.aA(0,x)
p.a=o*(v.ai()-0.5)*i
p.b=o*(v.ai()-0.5)*h*6
p.e=o*(v.ai()-0.5)*6
p.f=w
break}return p},
DS(d,e,f,g){var x=null,w=C.h_(x,A.cL,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,g==null?f:x,x,x,x,x,x,x,x,x,e,x,x,A.u,g,1,!0,x,x,x,x,x,x,x,x),d),A.a8,A.cd,x,A.e4,A.ce)
w.eL()
return w},
iph(d,e,f,g,h,i,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.i.D(i,0,1)
if(j<=0.01)return
x=B.DS(e,f,k,k)
w=x.b
v=-w.c/2
w=w.a.c
w=-w.gb4(w)/2
u=new C.r(v,w)
t=x.b
s=t.c
t=t.a.c
r=new C.a5(v,w,v+s,w+t.gb4(t))
q=new B.fHh(j)
p=new B.fHi(e,f,d,u)
switch(g){case"outline":p.$2(q.$1(h),f*0.07)
break
case"three":t=C.ap(h,A.v,0.55)
t.toString
for(o=9;o>=1;--o){s=C.ap(h,t,o/9)
s.toString
n=o*f
B.DS(e,f,q.$1(s),k).a4(d,new C.r(v+n*0.012,w+n*0.014))}B.DS(e,f,q.$1(h),k).a4(d,u)
break
case"neon":p.$3$blur(q.$2(h,0.9*(0.6+0.4*a0)),f*0.16,new C.h2(A.H,f*0.2))
p.$2(q.$2(h,0.9),f*0.07)
p.$2(q.$2(A.c,0.95),f*0.025)
break
case"gradient":$.T()
m=C.L()
w=r.gaMx()
v=r.gaGK()
t=C.ap(h,A.c,0.45)
t.toString
t=q.$1(t)
s=q.$1(h)
n=C.ap(h,A.az,0.6)
n.toString
m.san(C.jR(w,v,C.a([t,s,q.$1(n)],y.O),A.mb,A.w,k))
B.DS(e,f,k,m).a4(d,u)
break
case"sticker":B.DS(e,f,q.$2(A.v,0.3),k).a4(d,u.a7(0,new C.r(f*0.04,f*0.06)))
p.$2(q.$1(A.c),f*0.2)
p.$4$blur$shift(q.$1(A.ax),f*0.24,k,A.J)
p.$2(q.$1(A.c),f*0.17)
B.DS(e,f,q.$1(h),k).a4(d,u)
break
case"retro":t=H.a70(h)
l=new H.pE(t.a,A.i.F(H.a70(h).b+150,360),t.c,t.d).jg()
for(o=5;o>=1;--o){t=o*f*0.014
B.DS(e,f,q.$1(l),k).a4(d,new C.r(v+t,w+t))}p.$2(q.$1(A.ax),f*0.05)
B.DS(e,f,q.$1(h),k).a4(d,u)
break
case"gold":$.T()
m=C.L()
m.san(C.jR(r.gaMx(),r.gaGK(),C.a([q.$1(A4.CM),q.$1(A.d_),q.$1(A.de),q.$1(A.wK),q.$1(A.is)],y.O),D.dIA,A.w,k))
p.$2(q.$1(A.tp),f*0.06)
B.DS(e,f,k,m).a4(d,u)
break
default:B.DS(e,f,q.$1(h),k).a4(d,u)}},
hSe(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a5.c
J.bs(a4.save())
x=a6.a
w=a6.b
a4.clipRect(C.hS(new C.a5(0,0,0+x,0+w)),$.lF()[1],!0)
B.iES(a5,a6,a7,a8)
v=x<w?0.9:1
u=b0*x/360*v
v=A.a.i(b3)
if(v.length===0)t=C.a(["\u2026"],y.s)
else{v=new C.mK(v)
t=C.B(v,C.a3(v).k("M.E"))}v=C.a([],y.n)
for(s=t.length,r=0;r<t.length;t.length===s||(0,C.I)(t),++r){q=t[r]
p=q===" "
o=B.DS(p?"n":q,u,a3,a3).b.c
v.push(o*(p?0.7:1))}n=x*0.86
s=y.t
m=C.a([C.a([],s)],y.x)
for(p=y.r,l=0,k=0,j=0;j<t.length;++j){if(t[j]===" "){A.d.gak(m).push(j)
l+=v[j]
k=A.d.gak(m).length
continue}if(l+v[j]>n&&A.d.gak(m).length!==0){i=k>0&&k<A.d.gak(m).length?A.d.fB(A.d.gak(m),k):C.a([],s)
if(i.length!==0){o=A.d.gak(m)
h=A.d.gak(m).length
o.$flags&1&&C.ak(o,18)
C.kz(k,h,o.length,a3,a3)
o.splice(k,h-k)}o=C.B(i,p)
m.push(o)
l=A.d.cD(i,0,new B.h6J(v))
k=0}A.d.gak(m).push(j)
l+=v[j]}g=u*1.15
f=w/2-m.length*g/2+g/2
for(w=x/2,e=0;e<m.length;++e){d=m[e]
a0=w-A.d.cD(d,0,new B.h6K(v))/2
for(s=d.length,p=f+e*g,r=0;r<d.length;d.length===s||(0,C.I)(d),++r,a0=a1){j=d[r]
o=v[j]
a1=a0+o
if(t[j]===" ")continue
a2=B.itG(b1,j,t.length,a7,u,x,a9)
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
B.iph(a5,o,u,b2,h,a2.f,a2.x)
a4.restore()}}a4.restore()},
ht5(d,e,f,g,h,i,j,k,l,m){var x=0,w=C.j(y.D),v,u,t,s,r
var $async$ht5=C.e(function(n,o){if(n===1)return C.f(o,w)
for(;;)switch(x){case 0:u=d>=1
t=A.i.S(u?i:i*d)
s=A.i.S(u?i/d:i)
r=A.i.S(3.2*h)
v=B.aju(Math.max(t,s)*22/360,h,new B.h5p(t,s,r,m,j,l,e,f,g),r,s,k,t)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$ht5,w)},
fAS:function fAS(d,e,f){this.a=d
this.b=e
this.c=f},
h6I:function h6I(d){this.a=d},
fvT:function fvT(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fHh:function fHh(d){this.a=d},
fHi:function fHi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbQ:function bbQ(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
h6J:function h6J(d){this.a=d},
h6K:function h6K(d){this.a=d},
h5p:function h5p(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yf:function Yf(d){this.a=d},
auT:function auT(d,e,f){var _=this
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
_.bv$=e
_.ab$=f
_.c=_.a=null},
cpL:function cpL(d,e){this.a=d
this.b=e},
cpG:function cpG(d){this.a=d},
cpH:function cpH(d){this.a=d},
cpF:function cpF(d,e){this.a=d
this.b=e},
cpI:function cpI(d,e){this.a=d
this.b=e},
cpJ:function cpJ(d){this.a=d},
cpK:function cpK(d){this.a=d},
cpv:function cpv(d){this.a=d},
cpw:function cpw(d){this.a=d},
cpu:function cpu(){},
cpx:function cpx(d,e){this.a=d
this.b=e},
cpy:function cpy(d,e){this.a=d
this.b=e},
cpt:function cpt(d,e){this.a=d
this.b=e},
cpz:function cpz(d,e){this.a=d
this.b=e},
cps:function cps(d,e){this.a=d
this.b=e},
cpA:function cpA(d,e){this.a=d
this.b=e},
cpr:function cpr(d,e){this.a=d
this.b=e},
cpB:function cpB(d,e){this.a=d
this.b=e},
cpq:function cpq(d,e){this.a=d
this.b=e},
cpC:function cpC(d){this.a=d},
cpp:function cpp(d){this.a=d},
cpD:function cpD(d){this.a=d},
cpE:function cpE(d){this.a=d},
cpo:function cpo(d,e){this.a=d
this.b=e},
aHZ:function aHZ(){},
bc0(){var x=0,w=C.j(y.U),v,u=2,t=[],s,r,q
var $async$bc0=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
s=$.hmM
x=7
return C.b(s==null?$.hmM=B.cH3():s,$async$bc0)
case 7:s=e
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
$.hmM=null
throw q
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$bc0,w)},
cH3(){var x=0,w=C.j(y.U),v,u
var $async$cH3=C.e(function(d,e){if(d===1)return C.f(e,w)
for(;;)switch(x){case 0:u=B
x=3
return C.b($.oQ().D7("assets/data/world110.json",!1),$async$cH3)
case 3:v=u.ieF(e)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$cH3,w)},
ieF(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=y.j,d=e.a(A.V.aP(0,a1,null)),a0=C.a([],y.h)
for(x=J.aQ(d),w=y.n,v=y.b,u=y.d,t=y.f;x.C();){s=u.a(x.gP(x))
r=C.a([],t)
for(q=J.a1(s),p=J.aQ(e.a(q.h(s,"r")));p.C();){o=p.gP(p)
n=C.a([],v)
for(m=J.aQ(e.a(o));m.C();){l=m.gP(m)
k=J.a1(l)
n.push(C.a([C.dJ(k.h(l,0)),C.dJ(k.h(l,1))],w))}r.push(n)}p=C.cU(q.h(s,"n"))
n=C.cU(q.h(s,"a"))
m=C.cU(q.h(s,"ct"))
k=C.cU(q.h(s,"sr"))
j=C.dJ(q.h(s,"pop"))
i=C.dJ(q.h(s,"gdp"))
h=C.cU(q.h(s,"inc"))
g=C.ag("^\\d\\.\\s*",!0,!1,!1,!1)
h=C.aUo(h,g,"",0)
g=C.dJ(J.t(q.h(s,"c"),0))
q=C.dJ(J.t(q.h(s,"c"),1))
f=new B.adi(p,n,m,k,j,i,h,g,q,r)
f.bEO(q,g,n,m,i,h,p,j,r,k)
a0.push(f)}return new B.adj(a0)},
fRR(d){if(d>=1e12)return A.i.a5(d/1e12,1)+" trillion"
if(d>=1e9)return A.i.a5(d/1e9,2)+" billion"
if(d>=1e6)return A.i.a5(d/1e6,1)+" million"
if(d>=1000)return A.i.a5(d/1000,1)+" thousand"
return A.i.a5(d,0)},
HY(d){var x,w,v,u=A.o.v(A.i.S(d))
for(x=u.length,w=0,v="";w<x;++w){if(w>0&&A.o.F(x-w,3)===0)v+=","
v+=u[w]}return v.charCodeAt(0)==0?v:v},
adi:function adi(d,e,f,g,h,i,j,k,l,m){var _=this
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
adj:function adj(d){this.a=d},
vY:function vY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
QF:function QF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yV:function yV(d,e,f){this.a=d
this.b=e
this.c=f},
QE:function QE(d){this.a=0
this.b=d
this.c=0},
igC(d,e,f){return $.igD.c_(0,d+"|"+C.v(e)+"|"+f.m(),new B.drf(d,e,f))},
Xd:function Xd(d){this.a=d},
aGO:function aGO(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.he$=j
_.md$=k
_.fe$=l
_.hf$=m
_.bv$=n
_.ab$=o
_.c=_.a=null},
ebM:function ebM(d){this.a=d},
ebN:function ebN(d){this.a=d},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ebK:function ebK(d){this.a=d},
ebP:function ebP(d){this.a=d},
ebI:function ebI(d){this.a=d},
ebJ:function ebJ(d,e,f){this.a=d
this.b=e
this.c=f},
ebH:function ebH(d){this.a=d},
ebG:function ebG(){},
ebF:function ebF(d){this.a=d},
ec7:function ec7(d,e){this.a=d
this.b=e},
ec8:function ec8(d,e){this.a=d
this.b=e},
ebX:function ebX(d){this.a=d},
ebY:function ebY(d){this.a=d},
ebW:function ebW(d){this.a=d},
ebZ:function ebZ(d){this.a=d},
ebQ:function ebQ(d,e){this.a=d
this.b=e},
ebR:function ebR(d){this.a=d},
ec9:function ec9(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e){this.a=d
this.b=e},
ecd:function ecd(d){this.a=d},
ec6:function ec6(d){this.a=d},
ece:function ece(d,e){this.a=d
this.b=e},
ec5:function ec5(d,e){this.a=d
this.b=e},
ecf:function ecf(d){this.a=d},
ec4:function ec4(d,e){this.a=d
this.b=e},
ecg:function ecg(d){this.a=d},
ec3:function ec3(d,e){this.a=d
this.b=e},
ech:function ech(d){this.a=d},
ec2:function ec2(d,e){this.a=d
this.b=e},
eci:function eci(d){this.a=d},
ec1:function ec1(d,e){this.a=d
this.b=e},
ecj:function ecj(d){this.a=d},
ec0:function ec0(d){this.a=d},
eck:function eck(d){this.a=d},
ec_:function ec_(d){this.a=d},
eca:function eca(d){this.a=d},
ebU:function ebU(d){this.a=d},
ecb:function ecb(d){this.a=d},
ebT:function ebT(d){this.a=d},
ecc:function ecc(d){this.a=d},
ebS:function ebS(d){this.a=d},
ebE:function ebE(){},
ebD:function ebD(d){this.a=d},
ebC:function ebC(d){this.a=d},
bjU:function bjU(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
drf:function drf(d,e,f){this.a=d
this.b=e
this.c=f},
drg:function drg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aPh:function aPh(){},
aPi:function aPi(){},
ahw(d,e,f,g,h){return new B.byS(d,e,f,g,h)},
byS:function byS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCu:function fCu(){},
fCv:function fCv(){},
fCw:function fCw(){},
fCx:function fCx(){},
fCy:function fCy(){},
fCz:function fCz(){},
fCA:function fCA(){},
Yi:function Yi(d){this.a=d},
bpo:function bpo(){this.d=$
this.c=this.a=null},
eZR:function eZR(){},
eZS:function eZS(){},
eZO:function eZO(d){this.a=d},
eZP:function eZP(d){this.a=d},
eZN:function eZN(d){this.a=d},
eZQ:function eZQ(){},
eZM:function eZM(d,e){this.a=d
this.b=e},
eZL:function eZL(d){this.a=d},
ih3(){var x,w,v=y.n,u=C.a([],v)
for(x=0;x<260;++x){w=new C.e4()
w.cV(x)
u.push(w.ai()*3.141592653589793*2)}v=C.a([],v)
for(x=0;x<260;++x){w=new C.e4()
w.cV(x+900)
v.push(2.2+w.ai())}return new B.bpb(new C.cB(null,y.z),new B.QE(A.cV),A.J,A.aA,u,v,$,A.bH,0,C.a([],y.X),null,null)},
ih5(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
ih4(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hHs(d,e,f){return $.ihH.c_(0,d+"|"+C.v(e)+"|"+f.m(),new B.fjW(d,e,f))},
Y2:function Y2(d){this.a=d},
bpb:function bpb(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.he$=j
_.md$=k
_.fe$=l
_.hf$=m
_.bv$=n
_.ab$=o
_.c=_.a=null},
eSd:function eSd(d,e){this.a=d
this.b=e},
eSo:function eSo(d,e){this.a=d
this.b=e},
eSp:function eSp(d,e){this.a=d
this.b=e},
eSl:function eSl(d){this.a=d},
eSm:function eSm(d){this.a=d},
eSn:function eSn(d){this.a=d},
eSq:function eSq(d){this.a=d},
eSk:function eSk(d){this.a=d},
eSr:function eSr(d,e){this.a=d
this.b=e},
eSs:function eSs(d){this.a=d},
eSj:function eSj(d,e){this.a=d
this.b=e},
eSt:function eSt(d){this.a=d},
eSi:function eSi(d,e){this.a=d
this.b=e},
eSu:function eSu(d){this.a=d},
eSh:function eSh(d){this.a=d},
eSv:function eSv(d){this.a=d},
eSg:function eSg(d){this.a=d},
eSw:function eSw(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSx:function eSx(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSc:function eSc(){},
eSb:function eSb(){},
eSa:function eSa(d){this.a=d},
eS9:function eS9(d){this.a=d},
bwT:function bwT(d,e){this.b=d
this.a=e},
fjW:function fjW(d,e,f){this.a=d
this.b=e
this.c=f},
fjX:function fjX(){},
fjY:function fjY(){},
Xe:function Xe(d){this.a=d},
aGP:function aGP(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.he$=k
_.md$=l
_.fe$=m
_.hf$=n
_.bv$=o
_.ab$=p
_.c=_.a=null},
eco:function eco(){},
ecR:function ecR(){},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecE:function ecE(d){this.a=d},
ect:function ect(d){this.a=d},
ecF:function ecF(d){this.a=d},
ecC:function ecC(d){this.a=d},
ecJ:function ecJ(d){this.a=d},
ecB:function ecB(d){this.a=d},
ecK:function ecK(d){this.a=d},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecL:function ecL(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecN:function ecN(d){this.a=d},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecO:function ecO(d){this.a=d},
ecx:function ecx(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
ecw:function ecw(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecv:function ecv(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecH:function ecH(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecI:function ecI(d){this.a=d},
ecq:function ecq(d){this.a=d},
ecn:function ecn(d){this.a=d},
ecm:function ecm(){},
ecp:function ecp(d,e){this.a=d
this.b=e},
ecl:function ecl(d){this.a=d},
bf_:function bf_(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
XW:function XW(d){this.a=d},
bp8:function bp8(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.he$=e
_.md$=f
_.fe$=g
_.hf$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
eKW:function eKW(d,e){this.a=d
this.b=e},
eKX:function eKX(d,e){this.a=d
this.b=e},
eKV:function eKV(d,e){this.a=d
this.b=e},
eKY:function eKY(d,e){this.a=d
this.b=e},
eKU:function eKU(d,e){this.a=d
this.b=e},
bwq:function bwq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fi4:function fi4(d){this.a=d},
aPj:function aPj(){},
bCc:function bCc(){},
aPQ:function aPQ(){},
bCo:function bCo(){},
aPT:function aPT(){},
bCq:function bCq(){},
ih1(){var x,w,v,u=C.a([],y.A),t=C.a([],y.g)
for(x=0;x<150;++x){w=new C.e4()
w.cV(x)
w=w.ai()
v=new C.e4()
v.cV(x+500)
t.push(new C.r(w,v.ai()))}return new B.bnK(new C.cB(null,y.z),new B.QE(A.cV),u,A.aA,t,$,A.bH,0,C.a([],y.X),null,null)},
Rd:function Rd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Wg:function Wg(d){this.a=d},
bnK:function bnK(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.he$=i
_.md$=j
_.fe$=k
_.hf$=l
_.bv$=m
_.ab$=n
_.c=_.a=null},
dTB:function dTB(){},
dTp:function dTp(){},
dTq:function dTq(d,e){this.a=d
this.b=e},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTo:function dTo(d){this.a=d},
dTn:function dTn(d){this.a=d},
dTt:function dTt(d){this.a=d},
dTm:function dTm(d,e){this.a=d
this.b=e},
dTu:function dTu(d){this.a=d},
dTl:function dTl(d){this.a=d},
dTv:function dTv(d){this.a=d},
dTk:function dTk(d){this.a=d},
dTw:function dTw(d){this.a=d},
dTj:function dTj(d){this.a=d},
dTx:function dTx(d){this.a=d},
dTi:function dTi(d){this.a=d},
dTy:function dTy(d){this.a=d},
dTh:function dTh(d){this.a=d},
dTz:function dTz(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTA:function dTA(d){this.a=d},
dTf:function dTf(d){this.a=d},
dTs:function dTs(d){this.a=d},
dTe:function dTe(d){this.a=d},
bek:function bek(d,e){this.b=d
this.a=e},
ah9:function ah9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xb:function Xb(d){this.a=d},
boe:function boe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.he$=p
_.md$=q
_.fe$=r
_.hf$=s
_.bv$=t
_.ab$=u
_.c=_.a=null},
eb4:function eb4(d){this.a=d},
eaV:function eaV(d,e){this.a=d
this.b=e},
eaW:function eaW(d,e){this.a=d
this.b=e},
eaU:function eaU(d,e){this.a=d
this.b=e},
eaX:function eaX(d){this.a=d},
eaT:function eaT(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaS:function eaS(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d){this.a=d},
eaR:function eaR(d,e){this.a=d
this.b=e},
eb_:function eb_(d){this.a=d},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
eb0:function eb0(d){this.a=d},
eaP:function eaP(d,e){this.a=d
this.b=e},
eb1:function eb1(d){this.a=d},
eaO:function eaO(d){this.a=d},
eb2:function eb2(d){this.a=d},
eaN:function eaN(d){this.a=d},
eb3:function eb3(d){this.a=d},
eaM:function eaM(d){this.a=d},
bjL:function bjL(d,e){this.b=d
this.a=e},
dop:function dop(d){this.a=d},
XR:function XR(d){this.a=d},
bp7:function bp7(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.he$=f
_.md$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
eHY:function eHY(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d){this.a=d},
eHX:function eHX(d){this.a=d},
eI_:function eI_(d){this.a=d},
eHW:function eHW(d){this.a=d},
eI0:function eI0(d){this.a=d},
eHV:function eHV(d){this.a=d},
eI1:function eI1(d){this.a=d},
eHU:function eHU(d){this.a=d},
eI2:function eI2(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eI3:function eI3(d){this.a=d},
eHS:function eHS(d,e){this.a=d
this.b=e},
eI4:function eI4(d){this.a=d},
eHR:function eHR(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
bvC:function bvC(d,e){this.b=d
this.a=e},
aOP:function aOP(){},
bC3:function bC3(){},
aPf:function aPf(){},
bCb:function bCb(){},
aPO:function aPO(){},
bCn:function bCn(){},
h3R(d,e,f){return B.iC7(d,e,f)},
iC7(d,e,f){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p,o,n,m
var $async$h3R=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
s=C.i2([d],f)
p=(self.URL||self.webkitURL).createObjectURL(s)
p.toString
r=p
o=C.nj(r)
o.download=e
p=o.style
p.display="none"
q=o
p=document.body
if(p!=null)p.appendChild(q).toString
J.I1(q)
x=7
return C.b(C.bO(A.j4,null,y.H),$async$h3R)
case 7:J.m6(q);(self.URL||self.webkitURL).revokeObjectURL(r)
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
return C.i($async$h3R,w)}},D,E,F,A3,G,K,A4,A5,A6,S,T,H,A7
J=c[1]
C=c[0]
A=c[2]
U=c[273]
V=c[125]
L=c[135]
W=c[90]
X=c[183]
Y=c[59]
M=c[124]
N=c[165]
O=c[176]
I=c[191]
P=c[138]
Z=c[188]
A_=c[162]
A0=c[156]
A1=c[251]
A2=c[302]
Q=c[175]
R=c[174]
B=a.updateHolder(c[34],B)
D=c[3]
E=c[45]
F=c[140]
A3=c[134]
G=c[295]
K=c[282]
A4=c[166]
A5=c[226]
A6=c[153]
S=c[180]
T=c[265]
H=c[62]
A7=c[307]
B.bq5.prototype={}
B.Ry.prototype={
ga0(d){return this.d}}
B.Y3.prototype={
R(){var x=C.a([],y.G),w=C.a([],y.Z)
return new B.bpc(new C.cB(null,y.z),x,w,A.cV,A.bH,D.Hc,null,null)}}
B.bpc.prototype={
b4l(d,e){var x,w,v,u=this
if(u.ch)x=!e&&u.y-u.CW<120
else x=!0
if(x)return
u.CW=u.y
x=u.c
x.toString
w=A.o.D(A.i.bd((1-d.b/(C.aF(x,null,y.m).w.a.b*0.7))*10),0,9)
v=D.aDy[A.o.F(w,5)]+12*A.o.ao(w,5)+12
switch(u.z){case"glow":B.mJ("synth",v,420,0.3)
break
case"rainbow":B.mJ("bell",v,700,0.35)
break
case"stars":B.mJ("pluck",v+12,400,0.4)
break
case"sparks":E.dH(2400+u.r.av(2000),"",60,0,0.18,"noise")
break
default:E.dH(110+u.r.av(60),"",140,0,0.22,"noise")}},
cig(d){return this.b4l(d,!1)},
Z(){var x,w=this
w.a3()
x=w.qa(new B.eSY(w))
x.fS(0)
w.w!==$&&C.aT()
w.w=x},
t(){var x=this.w
x===$&&C.d()
x.t()
this.bCk()},
gb69(){var x=this.Q
return x<0?new H.pE(1,A.i.F(this.y*0.18,360),0.85,1).jg():D.EB[x]},
aWl(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.gb69(),k=m.z
if(k==="fire")x=5
else x=k==="sparks"?4:1
for(k=m.f,w=m.r,v=d.a,u=d.b+0,t=0;t<x;++t){s=w.ai()*3.141592653589793*2
switch(m.z){case"fire":r=w.ai()
q=m.as
p=w.ai()
o=w.ai()
n=C.ap(A.bu,A.aC,w.ai())
n.toString
k.push(new B.Ry(new C.r(v+(r-0.5)*q,u),new C.r((p-0.5)*40,-60-o*120),n,m.as*(0.3+w.ai()*0.4),m.y,700+w.av(500)))
break
case"sparks":r=Math.cos(s)
q=Math.sin(s)
p=40+w.ai()*200
o=C.ap(l,A.c,w.ai()*0.6)
o.toString
k.push(new B.Ry(d,new C.r(r*p,q*p),o,1.5+w.ai()*3,m.y,600+w.av(600)))
break
default:r=Math.cos(s)
q=Math.sin(s)
p=10+w.ai()*40
k.push(new B.Ry(d,new C.r(r*p,q*p),l,1.2+w.ai()*1.8,m.y,500))}}},
b2M(d,e){var x,w,v,u,t,s=this
s.ay=!0
x=s.z
if(x==="glow"||x==="rainbow"||x==="stars"){w=s.gb69()
v=s.as
u=s.Q<0||s.z==="rainbow"
t=C.a([],y.g)
s.ax=new B.bq5(t,x,w,v,u)
t.push(e)
t=s.ax
t.toString
s.e.push(t)}s.aWl(e)
s.b4l(e,!0)
s.l(new B.eSz())},
b2L(){this.ax=null
this.l(new B.eSy())},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=y.p,m=C.a([C.aI(o,o,o,o,D.p8,o,o,o,new B.eSI(p,d),o,o,o,o,"Share",o)],n),l=p.e,k=C.a([C.b4(o,o,o,new B.bwW(l,p.f,p.y,p.at,o),A.aA)],n)
if(!p.ay&&l.length===0)k.push(D.bgq)
l=C.aA(A.c0,new C.am(A.a0,o,A.b4,A.t,k,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.eSJ(p),new B.eSK(p),new B.eSO(p),o,o,o,o,o,o,o,o,o,new B.eSP(p),new B.eSQ(p),o,o,o,!1,A.a4)
k=C.a([],n)
for(x=0;x<5;++x){w=D.dep[x]
k.push(new B.e3(w.b,p.z===w.a,new B.eSR(p,w),w.c,A.c5,o))}v=C.a([new B.Gt(A.c,p.Q<0,new B.eSS(p),!0,o)],n)
for(u=0;u<8;++u)v.push(new B.Gt(D.EB[u],p.Q===u,new B.eST(p,u),!1,o))
t=p.as
t=B.ja(A.c5,A.o.v(A.i.S(t)),"Size",36,4,new B.eSU(p),t)
s=p.ch
r=s?R.p6:Q.u_
r=C.a([new B.e3("Sound",s,new B.eSV(p),r,A.c5,o),new B.fJ(A.q5,"Undo",new B.eSL(p),A.c,o),new B.fJ(D.xq,"Clear",new B.eSM(p),A.c1,o)],n)
for(x=0;x<4;++x){q=D.dxB[x]
r.push(new B.Gt(q,p.at.A(0,q),new B.eSN(p,q),!1,o))}return B.lZ(A.c5,m,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.e9(l,p.d),"SPARK PAINTER",C.w(C.a([new B.fj(k,"BRUSH",o),new B.fj(v,"COLOUR",o),t,new B.fj(r,o,o)],n),A.l,o,A.e,A.P,0,A.p))}}
B.bwW.prototype={
a4(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
$.T()
x=C.L()
w=a1.e
x.r=w.gp(w)
a3.aE(new C.a5(0,0,0+a4.a,0+a4.b),x)
for(x=a1.b,w=x.length,v=y.v,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
s=t.a
r=s.length
if(r===0)continue
switch(t.b){case"glow":r=$.T()
q=C.a([],v)
p=new C.aH(r.r,A.ak,a2,a2,q)
q.push(new C.aZ(A.d.gG(s).a,A.d.gG(s).b))
p.ac()
for(r=C.U(s),o=r.k("iP<1>"),n=new C.iP(s,1,a2,o),n.nc(s,1,a2,r.c),n=new C.bR(n,n.gJ(0),o.k("bR<aj.E>")),o=o.k("aj.E");n.C();){r=n.d
if(r==null)r=o.a(r)
r=new C.aq(r.a,r.b)
q.push(r)
m=p.f
if(m!=null)r.aj(m)
p.ac()}if(s.length===1){s=A.d.gG(s)
$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=t.c.gp(0)
a3.O(s,t.d/2,r)}$.T()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.b=A.ad
s.d=A.bG
s.e=A.dP
r=t.d
s.c=r*2.2
q=t.c
s.r=q.j(0.45).gp(0)
s.y=new C.h2(A.H,r)
a3.af(p,s)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.b=A.ad
s.d=A.bG
s.e=A.dP
s.c=r
s.r=q.gp(0)
a3.af(p,s)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.b=A.ad
s.d=A.bG
s.e=A.dP
s.c=r*0.35
s.r=A.c.j(0.85).gp(0)
a3.af(p,s)
break
case"rainbow":for(r=t.d,l=1;l<s.length;++l){k=new H.pE(1,A.o.F(l*5,360),0.85,1).jg()
q=s[l-1]
o=s[l]
$.T()
n=new C.ar(A.U,A.R,A.X,A.Y,A.W)
n.c=r
n.d=A.bG
n.r=k.gp(0)
a3.ah(q,o,n)}break
case"stars":for(q=t.d,o=q*2.1,n=t.c,m=t.e,q*=0.9,j=a2,i=0,h=0,g=0;g<s.length;s.length===r||(0,C.I)(s),++g,j=f){f=s[g]
if(j!=null){e=f.a-j.a
d=f.b-j.b
i+=Math.sqrt(e*e+d*d)}e=A.d.gG(s)
if(e.a===f.a&&e.b===f.b||i>o){a0=h+1
e=m?new H.pE(1,A.o.F(a0*23,360),0.7,1).jg():n
a1.cew(a3,f,q,h*0.5,e)
h=a0
i=0}}break}}for(x=a1.c,w=x.length,v=a1.d,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){f=x[u]
h=A.i.D((v-f.e)/f.f,0,1)
s=f.a
$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=f.c.j((1-h)*0.9).gp(0)
r.y=K.a2L
a3.O(s,f.d*(1-0.6*h)+1,r)}},
cew(d,e,f,g,h){var x,w,v,u,t,s,r,q=$.T(),p=C.a([],y.v),o=new C.aH(q.r,A.ak,null,null,p)
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
o.ac()}}o.E(new C.bA())
$.T()
q=C.L()
q.r=h.j(0.4).gp(0)
q.y=A.ld
d.af(o,q)
q=C.L()
q.r=h.gp(0)
d.af(o,q)},
aD(d){return!0}}
B.aPU.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.baX.prototype={
B(d){var x,w=this,v=null,u=w.c,t=F.aLo.h(0,u)
$.auU=t==null?"music":t
t=w.d
x=y.p
u=C.a([C.aI(v,v,v,v,A3.nr,v,v,v,new B.cEv(d),v,v,v,v,v,v),C.E(C.c(u,v,1,A.a2,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,14.5,v,v,A.u,v,v,!0,v,1.6,v,v,v,v,v,v),v,v,v),1)],x)
A.d.u(u,w.w)
u.push(C.aI(v,v,v,v,C.V(A.DO,t,v,v,v,22),v,v,v,new B.cEw(w,d),v,v,v,v,"How to play",v))
x=C.a([new C.C(D.bLd,C.A(u,A.l,v,A.e,A.h,0,v,v),v),C.E(w.f,1)],x)
x.push(C.p(v,w.r,A.f,v,v,new C.o(F.CF,v,new C.bE(new C.ax(A.c.j(0.08),1,A.r,-1),A.a1,A.a1,A.a1),v,v,v,A.m),v,v,v,v,A.D8,v,v,1/0))
return C.c6(v,A.c7,C.bo(!0,C.w(x,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.e3.prototype={
B(d){var x,w,v,u=this,t=null,s=C.m(999),r=u.d,q=r?u.r.j(0.22):A.c.j(0.06),p=r?u.r:A.c.j(0.12)
p=C.K(p,A.r,r?1.6:1)
x=y.p
w=C.a([],x)
v=u.f
if(v!=null)A.d.u(w,C.a([C.V(v,r?u.r:A.aR,t,t,t,16),A.e0],x))
w.push(C.c(u.c,t,t,t,t,t,t,C.l(t,t,r?A.c:A.ac,t,t,t,t,t,t,t,t,12,t,t,A.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
return new C.C(F.oW,C.aA(t,C.cY(t,C.A(w,A.l,t,A.e,A.P,0,t,t),t,t,A.aZ,new C.o(q,t,p,s,t,t,A.m),A.eK,t,t,t,t,A.he,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cEr(u),t,t,t,t,t,t,!1,A.a4),t)}}
B.fj.prototype={
B(d){var x=null,w=C.a([],y.p),v=this.d
if(v!=null)w.push(new C.a4(54,x,C.c(v,x,x,x,x,x,x,C.l(x,x,A.c.j(0.45),x,x,x,x,x,x,x,x,10.5,x,x,A.u,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),x))
w.push(C.E(C.cc(C.A(this.c,A.l,x,A.e,A.h,0,x,x),A.t,x,A.y,x,x,x,x,x,A.aK),1))
return new C.C(A.cB,C.A(w,A.l,x,A.e,A.h,0,x,x),x)}}
B.baY.prototype={
B(d){var x,w,v=this,u=null,t=C.c(v.c,u,u,u,u,u,u,C.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,11.5,u,u,A.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),s=v.w
s=C.aci(d).bhN(s,A.by,s.j(0.2),s,3.5)
x=v.f
w=v.r
s=C.E(C.ZH(C.lg(u,u,u,w,x,v.e,A.i.D(v.d,x,w)),s),1)
return new C.a4(u,34,C.A(C.a([new C.a4(78,u,t,u),s,new C.a4(38,u,C.c(v.x,u,u,u,u,u,u,A.LG,A.dW,u,u),u)],y.p),A.l,u,A.e,A.h,0,u,u),u)}}
B.fJ.prototype={
B(d){var x=this,w=null,v=x.f,u=v.j(0.12)
return new C.C(F.oW,C.aE(!1,A.a3,!0,C.m(12),C.aM(!1,C.m(12),!0,new C.C(A5.anL,C.A(C.a([C.V(x.c,v,w,w,w,17),A.e0,C.c(x.d,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),A.l,w,A.e,A.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new B.cEq(x),w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w)}}
B.Gt.prototype={
B(d){var x,w=this,v=null,u=w.d,t=u?34:28,s=u?34:28,r=w.f,q=r?v:w.c
r=r?D.fF8:v
x=u?A.c:A.aT
x=C.K(x,A.r,u?2.5:1)
return C.aA(v,C.cY(v,v,v,v,A.aZ,new C.o(q,v,x,v,u?C.a([new C.aa(0,A.H,w.c.j(0.6),A.J,10)],y.V):v,r,A.a6),A.hn,v,s,v,D.anw,v,v,v,t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.cEx(w),v,v,v,v,v,v,!1,A.a4)}}
B.nZ.prototype={
Vs(d,e){var x=C.du()
x.seY(C.cC(C.dt(0,0,0,d,0,0),new B.cEs(this,x,e)))
this.hf$.push(x.bn())},
mo(){var x=this,w=x.qa(new B.cEu(x))
w.fS(0)
x.he$!==$&&C.aT()
x.he$=w}}
B.ciy.prototype={
Ly(d){var x=this.c
x.q3(d&255)
x.q3(A.o.aH(d,8)&255)},
aJ1(d,e,f,g,h,i){var x=this,w=x.c
w.I(0,D.cDN)
x.Ly(i)
w.q3(255)
w.q3(0)
w.q3(44)
x.Ly(d)
x.Ly(e)
x.Ly(f)
x.Ly(g)
w.q3(0)
w.q3(8)
x.c8N(h)
w.q3(0)},
cQy(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.b
for(x=i,w=j,v=-1,u=-1,t=0;t<i;++t){s=t*j
for(r=0;r<j;++r){q=s+r
if(d[q]!==e[q]){if(r<w)w=r
if(r>v)v=r
if(t<x)x=t
if(t>u)u=t}}}if(v<0){k.aJ1(0,0,1,1,new Uint8Array(C.cd(D.cxF)),f)
return}p=v-w+1
o=u-x+1
n=new Uint8Array(p*o)
for(t=0;t<o;++t){s=(x+t)*j+w
for(q=t*p,r=0;r<p;++r){m=s+r
l=e[m]
m=l===d[m]?255:l
n[q+r]=m}}k.aJ1(w,x,p,o,n,f)},
c8N(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new Int32Array(5003)
A.ij.fY(i,0,5003,-1)
x=new Int32Array(5003)
j.a=9
j.b=j.c=0
w=new Uint8Array(255)
j.d=0
v=new B.ciA(j,this,w)
u=new B.ciz(j,v)
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
A.ij.fY(i,0,5003,-1)
r=258}else{m=j.a
if(r>=A.o.dH(1,m))j.a=m+1
k=r+1
x[n]=r
i[n]=o
r=k}t=p}u.$1(t)
u.$1(257)
if(j.b>0)v.$1(j.c&255)
s=j.d
if(s>0){m=this.c
m.q3(s)
m.I(0,C.vZ(w,0,j.d))}}}
B.fvT.prototype={}
B.bbQ.prototype={
a4(d,e){var x=this
B.hSe(d,e,x.b,x.f,x.r,x.w,x.d,x.e,x.c)},
aD(d){var x=this
return d.b!==x.b||d.c!==x.c||d.d!==x.d||d.e!==x.e||d.f!==x.f||!d.r.A(0,x.r)||d.w!==x.w}}
B.Yf.prototype={
R(){return new B.auT(new C.au(new C.bb("NGMY",A.b8,A.aP),$.ay()),null,null)}}
B.auT.prototype={
gKf(){var x,w=this,v=w.d
if(v===$){x=C.br(null,C.dt(0,0,0,3200,0,0),null,1,null,w)
x.cT(0)
w.d!==$&&C.bF()
w.d=x
v=x}return v},
gtT(){var x=D.EB[this.w]
return x},
Z(){this.a3()
var x=this.gKf()
x.dq()
x.e0$.I(0,this.gchD())},
chE(){var x,w,v,u,t,s,r,q=this,p=q.gKf().x
p===$&&C.d()
x=q.e.a.a
w=Math.max(1,(x.length===0?A.mR:new C.mK(x)).gJ(0))
if(q.Q&&p>=q.as)for(x=w-1,v=w<=1,u=0;u<w;++u){t=q.f
s=t==="type"
if(s)r=u/w/1.8
else r=v?0:u/x*0.45
if(q.as<r&&p>=r)if(s)E.dH(1500,"",35,0,0.18,"square")
else if(t==="glitch")E.dH(400+u*60,"",70,0,0.2,"square")
else{t=t==="neon"?"synth":"pluck"
B.mJ(t,D.aCq[A.o.F(u,8)]+12,450,0.35)}}q.as=p},
t(){this.gKf().t()
var x=this.e
x.V$=$.ay()
x.W$=0
this.byK()},
btu(d){var x
this.l(new B.cpL(this,d))
x=this.gKf()
x.iD(0,0)
x.cT(0)},
a6u(){var x=0,w=C.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$a6u=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.at>=0){x=1
break}s.l(new B.cpG(s))
u=4
o=s.e
n=A.a.i(o.a.a)
if(n.length===0)n="title"
m=C.ag("[^A-Za-z0-9_-]+",!0,!1,!1,!1)
r=C.aK(n,m,"_")
o=o.a.a
n=s.f
m=s.r
l=s.y
k=s.gtT()
j=s.x
x=7
return C.b(B.ht5(D.a7Z[s.z].b,l,k,j,20,1080,n,new B.cpH(s),m,o),$async$a6u)
case 7:q=e
if(J.ad(q)===0){o=C.bd("empty")
throw C.Y(o)}x=8
return C.b(B.aTR(q,r),$async$a6u)
case 8:p=e
if(s.c!=null)s.l(new B.cpI(s,p))
u=2
x=6
break
case 4:u=3
h=t.pop()
if(s.c!=null)s.l(new B.cpJ(s))
x=6
break
case 3:x=2
break
case 6:if(s.c!=null)s.l(new B.cpK(s))
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$a6u,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=C.at(new C.fN(D.a7Z[l.z].b,C.bv(C.m(22),new C.e9(C.c9(l.gKf(),new B.cpv(l),k),k),A.ap),k),k,k,k),i=A.c.j(0.06)
i=C.aN(k,A.M,!1,k,!0,A.t,k,C.aO(),l.e,k,k,k,k,k,2,C.bC(k,new C.b6(4,C.m(14),A.a1),k,k,k,k,"",k,!0,k,k,k,k,k,k,i,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,A.FN,"Type your title",k,k,k,k,k,!0,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),A.y,!0,k,!0,k,!1,k,A.am,k,k,k,k,k,k,k,28,k,1,k,k,!1,"\u2022",k,new B.cpw(l),k,k,k,!1,k,k,!1,k,!0,k,A.ae,k,k,k,k,k,k,k,k,k,k,k,A.hj,!0,A.a8,k,A.ao,k,k,k,k)
x=y.p
w=C.a([],x)
for(v=0;v<24;++v){u=D.dDr[v]
w.push(new B.e3(u.b,l.f===u.a,new B.cpx(l,u),k,A.bu,k))}t=C.a([],x)
for(v=0;v<8;++v){u=D.de2[v]
t.push(new B.e3(u.b,l.r===u.a,new B.cpy(l,u),k,A.c5,k))}s=C.a([],x)
for(r=0;r<20;++r){q=D.dIi[r]
s.push(new B.e3(q.a+" "+q.b,l.y===r,new B.cpz(l,r),k,A.aH,k))}q=C.a([],x)
for(r=0;r<8;++r)q.push(new B.Gt(D.EB[r],l.w===r,new B.cpA(l,r),!1,k))
p=C.a([],x)
for(r=0;r<3;++r)p.push(new B.e3(D.a7Z[r].a,l.z===r,new B.cpB(l,r),k,A.bu,k))
p.push(A.b7)
o=l.Q
n=o?"Sound on":"Sound off"
m=o?R.p6:Q.u_
p.push(new B.e3(n,o,new B.cpC(l),m,A.bu,k))
p.push(A.b7)
p.push(new B.fJ(A.od,"Replay",new B.cpD(l),A.c,k))
m=l.x
m=C.a([i,A.N,new B.fj(w,"MOVE",k),new B.fj(t,"LOOK",k),new B.fj(s,"SCENE",k),new B.fj(q,"COLOUR",k),new B.fj(p,"SHAPE",k),B.ja(A.bu,A.o.v(A.i.S(m)),"Size",96,28,new B.cpE(l),m),A.at],x)
i=l.at
if(i>=0)m.push(new C.C(A.k_,C.w(C.a([C.bv(C.m(6),C.jH(A.by,k,A.bu,8,k,i,k),A.ap),A.at,C.c("Making your animation\u2026 "+A.i.S(i*100)+"%",k,k,k,k,k,k,A.nC,k,k,k)],x),A.l,k,A.e,A.h,0,A.p),k))
else m.push(new C.a4(1/0,k,C.de(A.oh,k,D.hcg,l.gcVD(),C.bp(A.bu,k,k,k,A.v,k,A.kN,k,k,k,k,k)),k))
i=l.ax
if(i.length!==0)m.push(new C.C(A.hz,C.c(i,k,k,k,k,k,k,D.fHm,A.K,k,k),k))
return B.lZ(A.bu,A.fh,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a sharp moving GIF to post or send.",new C.C(A.bD,j,k),"TITLE ANIMATOR",C.w(m,A.l,k,A.e,A.P,0,A.p))},
ga0(d){return this.x}}
B.aHZ.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.adi.prototype={
bEO(d,e,f,a0,a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=-999
for(x=h.y,w=x.length,v=g,u=v,t=999,s=999,r=0;q=x.length,r<q;x.length===w||(0,C.I)(x),++r)for(q=A.d.gae(x[r]);q.C();){p=q.gP(0)
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
for(n=0,r=0;r<x.length;x.length===q||(0,C.I)(x),++r){for(w=A.d.gae(x[r]),m=g,l=m,k=999,j=999;w.C();){p=w.gP(0)
o=J.a1(p)
if(o.h(p,0)<k)k=o.h(p,0)
if(o.h(p,0)>l)l=o.h(p,0)
if(o.h(p,1)<j)j=o.h(p,1)
if(o.h(p,1)>m)m=o.h(p,1)}i=Math.max(l-k,m-j)
if(i>n)n=i}h.ax!==$&&C.aT()
h.ax=n
x=h.bI7()
h.ay!==$&&C.aT()
h.ay=x},
bI7(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.y,w=x.length,v=0,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
for(s=0,r=0;r<t.length-1;r=q){q=r+1
p=(J.t(t[r],1)+J.t(t[q],1))/2*3.141592653589793/180
o=J.t(t[r],0)
n=Math.cos(p)
m=J.t(t[r],1)
l=J.t(t[q],0)
k=Math.cos(p)
s+=o*n*J.t(t[q],1)-l*k*m}v+=Math.abs(s)/2}return v*111.32*111.32},
GE(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.z
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
B.adj.prototype={
cPI(d,e){var x,w,v,u,t,s,r,q
for(x=d;x>180;)x-=360
while(x<-180)x+=360
for(w=this.a,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
if(s.GE(0,x,e)){if(u!=null){r=s.ax
r===$&&C.d()
q=u.ax
q===$&&C.d()
q=r<q
r=q}else r=!0
if(r)u=s}}return u}}
B.vY.prototype={}
B.QF.prototype={}
B.yV.prototype={}
B.QE.prototype={
fE(d,e,f){var x,w,v,u=this
if(!f)return
if((u.a+=e)<2.8)return
u.a=0
x=u.b
w=D.cfv[x.av(7)]
x=x.h9()?0:12
v=A.o.F(u.c++,3)===0?"flute":"bell"
B.mJ(v,w+x-12,2200,0.1)}}
B.Xd.prototype={
R(){var x=$.ay()
return new B.aGO(new C.cB(null,y.z),new C.au(A.ay,x),new B.QE(A.cV),D.duB,A.aA,D.a7G,$,A.bH,0,C.a([],y.X),null,null)}}
B.aGO.prototype={
Z(){var x=this
x.a3()
x.mo()
x.a.toString
x.b0c()},
b0c(){var x=this
x.l(new B.ebM(x))
B.bc0().bE(new B.ebN(x),y.P).eD(new B.ebO(x))},
t(){var x=this.e
x.V$=$.ay()
x.W$=0
this.bBJ()},
cCE(d){var x,w,v,u,t,s,r,q,p,o
this.r=d
x=C.a([],y.y)
for(w=d.a,v=w.length,u=y.l,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
r=C.a([],u)
for(q=s.y,p=q.length,o=0;o<q.length;q.length===p||(0,C.I)(q),++o)r.push(new B.ebP(q[o]).$0())
x.push(r)}this.w=x},
gXN(){var x=this.fy
return x.A(0,A.aA)?100:Math.min(x.a,x.b)*0.43},
awR(d,e,f){var x=this
x.at=d
x.ax=e
x.ay=A.i.D(f,1,16)
x.Q=x.as=0},
aDD(d){var x
this.fx=d
x=d.ax
x===$&&C.d()
this.awR(d.x,d.w,105/Math.max(x,3))
C.f3()
B.mJ("bell",(A.d.c8(D.a7h,d.c)+1)*3+12,900,0.45)
E.dH(300,"",280,1.4,0.15,"tri")},
mG(d){var x,w,v,u,t,s,r,q=this
q.f.fE(0,d,q.db)
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
q.x=A.i.D(q.x+q.as*d,-85,85)
r=Math.exp(-d*2.2)
w=q.Q*=r
q.as*=r
if(q.ch&&Math.abs(w)<3)q.y=q.y+7*d/Math.sqrt(q.z)}while(w=q.y,w>180)q.y=w-360
while(w<-180){w+=360
q.y=w}},
chI(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.r
if(n==null||o.fy.A(0,A.aA))return null
x=o.fy
w=o.gXN()
v=o.z
u=(d.a-x.a/2)/(w*v)
t=(x.b/2-d.b)/(o.gXN()*v)
s=u*u+t*t
if(s>1)return null
r=Math.sqrt(1-s)
q=o.x*3.141592653589793/180
p=Math.asin(A.i.D(r*Math.sin(q)+t*Math.cos(q),-1,1))
return n.cPI((o.y*3.141592653589793/180+Math.atan2(u,r*Math.cos(q)-t*Math.sin(q)))*180/3.141592653589793,p*180/3.141592653589793)},
chH(d){var x=this,w=x.r
if(w==null||A.a.i(d).length===0){x.l(new B.ebI(x))
return}x.l(new B.ebJ(x,w,A.a.i(d).toLowerCase()))},
bVC(){var x=null,w=this.c
w.toString
C.ce(x,x,!0,x,new B.ebG(),w,x,!0,!0,y.H)},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.fx,m=y.p,l=C.a([C.aI(o,o,o,o,D.bZe,o,o,o,p.gbVB(),o,o,o,o,"Earth facts",o),C.aI(o,o,o,o,D.p8,o,o,o,new B.ec7(p,d),o,o,o,o,"Share",o)],m),k=C.cg(new B.ec8(p,n)),j=A.c.j(0.06)
j=C.a([C.aN(o,A.M,!1,o,!0,A.t,o,C.aO(),p.e,o,o,o,o,o,2,C.bC(o,new C.b6(4,C.m(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,j,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.FN,"Search a country",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,D.c6X,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,p.gchG(),o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.jQ,!0,A.a8,o,A.ao,o,o,o,o)],m)
if(p.id.length!==0){x=C.a([],m)
for(w=p.id,v=w.length,u=0;u<w.length;w.length===v||(0,C.I)(w),++u){t=w[u]
x.push(new B.e3(t.a,!1,new B.ec9(p,t),A.mE,A.aH,o))}j.push(new C.C(A.hz,new C.a4(o,38,C.co(x,o,o,o,o,o,A.aK,!1),o),o))}j.push(A.aj)
x=C.a([new B.e3("Whole Earth",!1,new B.ecd(p),A.i2,A.aH,o)],m)
for(w=D.aLn.gdT(D.aLn),w=w.gae(w);w.C();){v=w.gP(w)
x.push(new B.e3(v.a,!1,new B.ece(p,v),o,A.aH,o))}x.push(new B.e3("Random",!1,new B.ecf(p),A.oa,A.aH,o))
j.push(new B.fj(x,"GO TO",o))
x=p.z
j.push(B.ja(A.aH,A.i.a5(x,1)+"x","Zoom",16,0.8,new B.ecg(p),x))
x=p.dy
j.push(B.ja(A.bu,A.a.aZ(A.o.v(A.i.bd(x)),2,"0")+":00","Time",24,0,new B.ech(p),x))
x=p.fr
j.push(B.ja(A.bf,p.cBm(),"Season",365,0,new B.eci(p),x))
x=p.ch
w=p.CW
v=p.cx
s=p.cy
r=p.db
q=r?A.lG:D.IG
j.push(new B.fj(C.a([new B.e3("Spin",x,new B.ecj(p),A1.Qt,A.aH,o),new B.e3("Night",w,new B.eck(p),A.vr,A.aH,o),new B.e3("Borders",v,new B.eca(p),D.bUl,A.aH,o),new B.e3("Names",s,new B.ecb(p),L.DP,A.aH,o),new B.e3("Music",r,new B.ecc(p),q,A.aH,o)],m),o,o))
return B.lZ(A.aH,l,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",k,"EARTH GLOBE",C.w(j,A.l,o,A.e,A.P,0,A.p))},
cBm(){var x,w,v
for(x=this.fr,w=0,v=0;v<12;++v)if(x>=D.aDL[v])w=v
return A.i4[w]+" "+(A.i.bd(x-D.aDL[w])+1)},
chF(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.ay
j===$&&C.d()
x=j>0?d.e/j:0
w=d.e
v=w/79e8*100
u=d.c
t=new H.pE(1,A.o.F((A.d.c8(D.a7h,u)+1)*47,360),0.55,1).jg()
s=new B.ebE()
r=C.m(20)
q=C.K(t.j(0.6),A.r,1)
p=y.p
o=C.A(C.a([C.p(k,k,A.f,k,k,new C.o(t,k,k,k,k,k,A.a6),k,10,k,k,k,k,k,10),A.aa,C.E(C.c(d.a,k,1,A.a2,k,k,k,A.dw,k,k,k),1),C.aI(k,k,k,k,S.Rk,k,k,k,new B.ebD(this),k,k,k,k,k,A.cp)],p),A.l,k,A.e,A.h,0,k,k)
n=d.d
u=C.c(u+(n.length!==0?" \xb7 "+n:""),k,k,k,k,k,k,W.hI,k,k,k)
n=D.dMm.h(0,d.b)
n=s.$2("CAPITAL",n==null?"\u2014":n)
m=w>0
w=C.A(C.a([n,A.aa,s.$2("PEOPLE",m?B.fRR(w):"\u2014")],p),A.l,k,A.e,A.h,0,k,k)
j=s.$2("SIZE",B.HY(j)+" km\xb2")
if(m)n=(x<10?A.i.a5(x,1):B.HY(x))+" per km\xb2"
else n="\u2014"
n=C.A(C.a([j,A.aa,s.$2("CROWDING",n)],p),A.l,k,A.e,A.h,0,k,k)
j=s.$2("WORLD SHARE",(v<0.1?A.i.a5(v,3):A.i.a5(v,1))+"% of people")
m=d.f
l=d.r
return C.p(k,C.w(C.a([o,u,A.N,w,A.N,n,A.N,C.A(C.a([j,A.aa,s.$2("ECONOMY",m>0?"$"+B.fRR(m*1e6)+" \xb7 "+l:l)],p),A.l,k,A.e,A.h,0,k,k)],p),A.B,k,A.e,A.P,0,A.p),A.f,k,k,new C.o(D.ZY,k,q,r,k,k,A.m),k,k,k,k,D.ao1,k,k,k)}}
B.bjU.prototype={
a4(d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=$.T(),d5=C.L()
d5.r=D.CA.gp(0)
d6.aE(new C.a5(0,0,0+d2,0+d3),d5)
x=new C.e4()
x.cV(4)
for(w=0;w<90;++w){d5=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.25+x.ai()*0.5).gp(0)
d6.O(new C.r(d5*d2,v*d3),u*1.2+0.3,t)}d2/=2
d3/=2
s=new C.r(d2,d3)
r=d0.f
d5=C.L()
v=y.O
d5.san(new C.bU(A.z,0.5,A.w,d1,0,C.a([A.L,A.aH.j(0.35),A.L],v),D.dc6,d1).az(0,C.bY(s,r*1.1)))
d6.O(s,r*1.05,d5)
q=C.bY(s,r)
d5=C.L()
d5.san(D.eOR.az(0,q))
d6.O(s,r,d5)
d5=d6.c
J.bs(d5.save())
u=y.v
d4=new C.aH(d4.r,A.ak,d1,d1,C.a([],u))
d4.E(new C.jL(q))
d6.mA(0,d4)
p=d0.d*3.141592653589793/180
o=d0.e*3.141592653589793/180
n=Math.sin(p)
m=Math.cos(p)
l=Math.sin(o)
k=Math.cos(o)
j=C.L()
j.b=A.ad
p=j.c=0.7
j.r=A.c.j(0.1).gp(0)
i=new B.drg(o,n,m,s,r)
for(h=-60;h<=60;h+=30){for(d4=h*3.141592653589793/180,g=d1,f=-180;f<=180;f+=4){e=i.$2(d4,f*3.141592653589793/180)
if(e==null){if(g!=null)d6.af(g,j)
g=d1}else{t=e.a
d=e.b
if(g==null){a0=$.T()
a1=C.a([],u)
g=new C.aH(a0.r,A.ak,d1,d1,a1)
a1.push(new C.aZ(t,d))
g.ac()}else{t=new C.aq(t,d)
g.r.push(t)
d=g.f
if(d!=null)t.aj(d)
g.ac()}}}if(g!=null)d6.af(g,j)}for(f=-180;f<180;f+=30){for(d4=f*3.141592653589793/180,g=d1,h=-88;h<=88;h+=4){e=i.$2(h*3.141592653589793/180,d4)
if(e==null){if(g!=null)d6.af(g,j)
g=d1}else{t=e.a
d=e.b
if(g==null){a0=$.T()
a1=C.a([],u)
g=new C.aH(a0.r,A.ak,d1,d1,a1)
a1.push(new C.aZ(t,d))
g.ac()}else{t=new C.aq(t,d)
g.r.push(t)
d=g.f
if(d!=null)t.aj(d)
g.ac()}}}if(g!=null)d6.af(g,j)}a2=d0.b
if(a2!=null&&d0.c.length===a2.a.length){a3=C.a([],y.E)
for(d4=a2.a,t=d0.c,d=!d0.y,a0=d0.w,a4=0;a4<d4.length;++a4){a5=d4[a4]
a6=a5===a0
a7=A.o.F((A.d.c8(D.a7h,a5.c)+1)*47,360)
$.T()
a8=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a1=a6?0.35:0.5
a8.r=new H.pE(1,a7,a1,a6?1:0.62).jg().gp(0)
a9=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a9.b=A.ad
a9.c=a6?2.2:p
a9.e=A.dP
a9.r=(a6?A.c:A.v.j(0.55)).gp(0)
for(a1=t[a4],b0=a1.length,b1=0;b1<a1.length;a1.length===b0||(0,C.I)(a1),++b1){b2=a1[b1]
b3=b2.length/4|0
b4=$.T()
b5=C.a([],u)
b6=new C.aH(b4.r,A.ak,d1,d1,b5)
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
b4=new C.bA()
b5.push(b4)
b5=b6.f
if(b5!=null)b4.aj(b5)
b6.ac()
d6.af(b6,a8)
if(!d||a6)d6.af(b6,a9)
if(a6)a3.push(b6)}}for(u=a3.length,b1=0;b1<a3.length;a3.length===u||(0,C.I)(a3),++b1){g=a3[b1]
$.T()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.b=A.ad
t.c=5
t.r=A.c.j(0.25).gp(0)
t.y=A.vn
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
c7=B.igC(a5.a,a1,b0)
b0=c7.b
a1=b0.c
b0=b0.a.c
b0=b0.gb4(b0)
c7.a4(d6,new C.r(e.a-a1/2,e.b-b0/2))}}if(d0.x){c8=-23.44*Math.cos(6.283185307179586*(d0.as+10)/365)*3.141592653589793/180
b8=Math.sin(c8)
b9=Math.cos(c8)
d4=-(d0.Q-12)*15*3.141592653589793/180-o
c9=Math.sin(d4)
c2=Math.cos(d4)
d4=A.i.D(n*b8+m*b9*c2,-1,1)
$.T()
u=C.L()
u.san(new C.bU(A.z,0.5,A.w,d1,0,C.a([A.L,A.L,D.bjC.j(0.78)],v),D.dv6,d1).az(0,C.bY(new C.r(d2+b9*c9*r,d3-(m*b8-n*b9*c2)*r),r*(1.15+0.5*(1-d4)*0.5))))
d6.O(s,r,u)}$.T()
d2=C.L()
d2.san(new C.bU(A.z,0.5,A.w,d1,0,C.a([A.L,A.v.j(0.4)],v),D.dJR,d1).az(0,q))
d6.O(s,r,d2)
d5.restore()
d5=C.L()
d5.b=A.ad
d5.c=1.4
d5.r=A.hm.j(0.5).gp(0)
d6.O(s,r,d5)},
aD(d){return!0}}
B.aPh.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.aPi.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBI()}}
B.byS.prototype={}
B.Yi.prototype={
R(){return new B.bpo()}}
B.bpo.prototype={
gaWO(){var x=this.d
if(x===$)x=this.d=A.cV.av(16)
return x},
Z(){this.a3()
B.bc0().fi(new B.eZR(),new B.eZS(),y.P)},
B(d){var x=null,w=C.eS(x,x,x,!0,!0,D.CA,x,1,!0,x,0,!1,x,!1,x,x,C.aI(x,x,x,x,D.aul,x,x,x,new B.eZO(d),x,x,x,x,x,x),x,!0,x,x,x,x,x,D.hfD,x,x,x,1,x,!0),v=C.m(18),u=A.aH.j(0.1),t=C.K(A.aH.j(0.35),A.r,1),s=y.p
return C.c6(w,D.CA,C.co(C.a([C.p(x,C.A(C.a([D.bXS,A.ar,C.E(C.c(D.dgP[this.gaWO()],x,x,x,x,x,x,D.fWM,x,x,x),1),C.aI(x,x,x,x,D.c7Z,x,x,x,new B.eZP(this),x,x,x,x,"Another fact",x)],s),A.l,x,A.e,A.h,0,x,x),A.f,x,x,new C.o(u,x,t,v,x,x,A.m),x,x,x,x,A.bD,x,x,x),A.aB,C.cg(new B.eZQ())],s),x,x,A.a2c,x,x,A.ah,!1),x,!1,!1,x,x)}}
B.Y2.prototype={
R(){return B.ih3()}}
B.bpb.prototype={
csO(d){var x=d.c,w=B.ih5(x),v=d.e,u=v<=0?0:6.283185307179586*(this.f/v)+x*1.7
return new C.r(Math.cos(u)*w,Math.sin(u)*w)},
Z(){this.a3()
this.mo()},
mG(d){var x,w,v,u=this
u.e.fE(0,d,u.ay)
u.f=u.f+d*u.r
x=u.Q
if(x!=null){w=u.csO(x)
v=new C.r(-w.a,-w.b).aO(0,u.w)
w=C.kY(u.x,v,1-Math.exp(-d*5))
w.toString
u.x=w}},
gchJ(){var x=this.ch
return new C.r(x.a/2,x.b/2).a7(0,this.x)},
chN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=d.a,w=d.b,v=null,u=30,t=0;t<10;++t){s=D.Ey[t]
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
b42(d){this.l(new B.eSd(this,d))
C.f3()
B.mJ("bell",D.dK2[A.o.F(A.d.c8(D.Ey,d),10)]+12,1000,0.5)},
B(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=y.p,k=C.a([C.aI(n,n,n,n,D.p8,n,n,n,new B.eSo(o,d),n,n,n,n,"Share",n)],l),j=C.cg(new B.eSp(o,m)),i=C.a([new B.e3("All",!1,new B.eSq(o),A.a5d,A.aQ,n)],l)
for(x=0;x<10;++x){w=D.Ey[x]
i.push(new B.e3(w.a,o.z===w,new B.eSr(o,w),n,C.b2(w.z),n))}v=Math.log(o.r+1)
u=Math.log(3651)
t=o.r
t=t<10?A.i.a5(t,0)+" d/s":""+A.i.S(t)+" d/s"
u=B.ja(A.aQ,t,"Time",1,0,new B.eSs(o),v/u)
v=o.w
v=B.ja(A.aQ,A.i.a5(v,1)+"x","Zoom",9,0.5,new B.eSt(o),v)
t=o.as
s=o.at
r=o.ax
q=o.ay
p=q?A.lG:D.IG
return B.lZ(A.aQ,k,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",j,"SOLAR SYSTEM",C.w(C.a([new B.fj(i,"GO TO",n),u,v,new B.fj(C.a([new B.e3("Orbits",t,new B.eSu(o),n,A.aQ,n),new B.e3("Names",s,new B.eSv(o),n,A.aQ,n),new B.e3("Asteroids",r,new B.eSw(o),n,A.aQ,n),new B.e3("Music",q,new B.eSx(o),p,A.aQ,n)],l),n,n)],l),A.l,n,A.e,A.P,0,A.p))},
chK(d){var x,w,v,u,t,s=null,r=C.b2(d.z),q=d.c,p=q*8.317,o=new B.eSb(),n=C.m(20),m=C.K(r.j(0.6),A.r,1),l=C.p(s,s,A.f,s,s,new C.o(r,s,s,s,s,s,A.a6),s,12,s,s,s,s,s,12),k=d.b,j=k==="star"
if(j)k="Star"
else k=k==="dwarf"?"Dwarf planet":"Planet"
x=y.p
k=C.A(C.a([l,A.aa,C.E(C.c(d.a+"  \xb7  "+k,s,s,s,s,s,s,A.js,s,s,s),1),C.aI(s,s,s,s,S.Rk,s,s,s,new B.eSa(this),s,s,s,s,s,A.cp)],x),A.l,s,A.e,A.h,0,s,s)
l=C.c(d.y,s,s,s,s,s,s,A0.FO,s,s,s)
w=o.$2("WIDTH",B.HY(d.d*2)+" km")
v=q===0
q=C.A(C.a([w,A.aa,o.$2("FROM THE SUN",v?"\u2014":C.v(q)+" AU ("+B.HY(q*149.6)+" million km)")],x),A.l,s,A.e,A.h,0,s,s)
w=d.e
w=o.$2("ONE YEAR",w===0?"\u2014":new B.eSc().$1(w))
u=d.f
w=C.A(C.a([w,A.aa,o.$2("ONE DAY",u>=48?A.i.a5(u/24,0)+" Earth days":A.i.a5(u,1)+" hours")],x),A.l,s,A.e,A.h,0,s,s)
u=d.r
t=u>50?0:1
t=C.A(C.a([o.$2("GRAVITY",C.v(u)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.i.a5(50*u/9.81,t)+" kg"),A.aa,o.$2("TEMPERATURE",""+A.o.S(d.x)+"\xb0C")],x),A.l,s,A.e,A.h,0,s,s)
u=o.$2("MOONS",j?"\u2014":""+d.w)
if(v)j="\u2014"
else j=p<90?A.i.a5(p,1)+" minutes":A.i.a5(p/60,1)+" hours"
return C.p(s,C.w(C.a([k,A.at,l,A.N,q,A.N,w,A.N,t,A.N,C.A(C.a([u,A.aa,o.$2("SUNLIGHT TAKES",j)],x),A.l,s,A.e,A.h,0,s,s)],x),A.B,s,A.e,A.P,0,A.p),A.f,s,s,new C.o(D.ZY,s,m,n,s,s,A.m),s,s,s,s,D.ao1,s,s,s)}}
B.bwT.prototype={
a4(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a7.a,a5=a7.b
$.T()
x=C.L()
x.r=D.CA.gp(0)
a6.aE(new C.a5(0,0,0+a4,0+a5),x)
w=new C.e4()
w.cV(8)
for(v=0;v<110;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a6.O(new C.r(x*a4,u*a5),t*1.2+0.3,s)}a4=this.b
r=a4.gchJ()
q=a4.w
if(a4.as)for(a5=A.d.gae(D.Ey),x=new C.eR(a5,new B.fjX());x.C();){u=a5.gP(0).c
u=u===0?0:30+150*Math.sqrt(u/30.1)
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.b=A.ad
t.c=1
t.r=A.c.j(0.12).gp(0)
a6.O(r,u*q,t)}if(a4.ax)for(a5=a4.CW,x=r.a,u=r.b,t=a4.cx,v=0;v<a5.length;++v){s=a5[v]
p=a4.f
o=t[v]
n=s+p*0.0016/o
m=(o===0?0:30+150*Math.sqrt(o/30.1))*q
s=Math.cos(n)
p=Math.sin(n)
o=new C.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=A.c.j(0.5).gp(0)
a6.O(new C.r(x+s*m,u+p*m),0.9,o)}l=B.ih4(A.d.gG(D.Ey))*Math.sqrt(q)*1.4
a5=l*3.2
x=C.L()
u=y.O
x.san(new C.bU(A.z,0.5,A.w,a3,0,C.a([A.aQ.j(0.5),A.L],u),a3,a3).az(0,C.bY(r,a5)))
a6.O(r,a5,x)
x=C.L()
x.san(D.eOL.az(0,C.bY(r,l)))
a6.O(r,l,x)
if(a4.at){k=B.hHs("Sun",10.5,A.ac)
k.a4(a6,r.a7(0,new C.r(-k.b.c/2,l+4)))}for(a5=A.d.gae(D.Ey),x=new C.eR(a5,new B.fjY()),t=q>1.6,s=r.a,p=r.b,o=a6.c;x.C();){j=a5.gP(0)
i=j.c
m=i===0?0:30+150*Math.sqrt(i/30.1)
h=j.e
n=h<=0?0:6.283185307179586*(a4.f/h)+i*1.7
i=s+Math.cos(n)*m*q
h=p+Math.sin(n)*m*q
g=new C.r(i,h)
m=(1.5+1.6*Math.log(j.d/1000+1))*Math.sqrt(q)
f=C.b2(j.z)
e=j.a
if(e==="Saturn"){J.bs(o.save())
o.translate(i,h)
o.rotate(-22.91831180523293,0,0)
d=C.bZ(A.J,m*1.3,m*4.2)
a0=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a0.b=A.ad
a0.c=m*0.45
a0.r=A.bM.j(0.55).gp(0)
a6.c1(d,a0)
o.restore()}d=new C.ar(A.U,A.R,A.X,A.Y,A.W)
d.r=f.j(0.3).gp(0)
d.y=A.vn
a6.O(g,m+3,d)
d=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a0=C.ap(f,A.v,0.55)
a0.toString
d.san(new C.bU(N.BZ,0.5,A.w,a3,0,C.a([A.c,f,a0],u),T.Ta,a3).az(0,C.bY(g,m)))
a6.O(g,m,d)
if(j===a4.z){j=new C.ar(A.U,A.R,A.X,A.Y,A.W)
j.b=A.ad
j.c=2
j.r=A.c.gp(0)
a6.O(g,m+7,j)}if(t&&e==="Earth"){n=a4.f/27.3*2*3.141592653589793
a1=m+11*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a2.r=A.c.gp(0)
a6.O(new C.r(i+j*a1,h+d*a1),1.8*a0,a2)}if(t&&e==="Jupiter")for(v=0;v<4;++v){n=a4.f/D.dn6[v]*2*3.141592653589793
a1=m+(6+v*4)*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a2.r=A.ac.gp(0)
a6.O(new C.r(i+j*a1,h+d*a1),1.4*a0,a2)}if(a4.at){k=B.hHs(e,10.5,A.ac)
k.a4(a6,new C.r(i+-k.b.c/2,h+(m+4)))}}},
aD(d){return!0}}
B.Xe.prototype={
R(){var x=y.i
return new B.aGP(new B.QE(A.cV),C.c3(5,0,!1,x),C.c3(5,0,!1,x),C.c3(5,null,!1,y.B),A.J,A.J,C.a([],y.g),$,A.bH,0,C.a([],y.X),null,null)}}
B.aGP.prototype={
cG1(){var x,w,v,u,t=this
t.x=!0
t.y=0
for(x=t.z,w=t.Q,v=t.as,u=0;u<5;++u){x[u]=0
w[u]=0
v[u]=null}},
chM(){var x,w,v,u,t=this,s="An oval orbit: it goes round Earth again and again."
t.cx=D.eBw
t.cy=new C.r(t.ay,0)
x=t.db
A.d.a6(x)
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
E.dH(150,"",400,0,0.5,"noise")
E.dH(90,"",300,1.5,0.6,"sine")
t.l(new B.eco())},
Z(){this.a3()
this.mo()},
mG(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.e.fE(0,d,j.d!=="drop")
if(j.d==="drop"&&j.x){x=d*j.w
j.y+=x
for(w=j.z,v=x/12,u=j.Q,t=j.as,s=0;s<5;++s){if(t[s]!=null)continue
r=D.AH[s]
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
if(r.a!=="Sun")E.dH(60+q*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.cw(t,new B.ecR()))j.x=!1}if(j.d==="cannon"&&j.CW){x=d*900/30
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
j.cy=new C.r(l,t)
l=q+l*x
t=u+t*x
j.cx=new C.r(l,t)
k=Math.sqrt(l*l+t*t)
t=j.cy
l=j.cx
u=-398600/(k*k*k)
q=l.a
l=l.b
j.cy=new C.r(t.a+q*u*w,t.b+l*u*w)
j.dy+=x
if(Math.sqrt(q*q+l*l)<6371){j.CW=!1
E.dH(70,"",350,0,0.7,"noise")
break}}w=j.db
if(w.length===0||A.d.gak(w).aI(0,j.cx).gcL()>120)w.push(j.cx)
if(w.length>700)A.d.cJ(w,0)
if(j.cx.gcL()>6e5)j.CW=!1}},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==="drop")o=q.bTD()
else o=o==="weight"?q.cNO():q.bLw()
x=y.p
w=C.a([],x)
for(v=0;v<3;++v){u=D.dGB[v]
w.push(new B.e3(u.b,q.d===u.a,new B.ecD(q,u),u.c,A.cW,p))}w=C.a([new B.fj(w,p,p)],x)
if(q.d==="drop"){t=q.f
s=q.r
r=s?"Air on":"Air off"
s=C.a([new B.e3("Hammer",!t,new B.ecE(q),A_.DN,A.cW,p),new B.e3("Feather",t,new B.ecF(q),L.DD,A.cW,p),new B.e3(r,s,new B.ecJ(q),A.Ir,A.aH,p)],x)
r=q.w
A.d.u(w,C.a([new B.fj(s,p,p),B.ja(A.cW,""+A.i.S(r*100)+"%","Slow motion",1,0.05,new B.ecK(q),r),new B.fj(C.a([new B.fJ(A.q1,"Drop!",new B.ecL(q),A.bf,p)],x),p,p)],x))}if(q.d==="weight"){t=q.at
t=B.ja(A.cW,""+A.i.S(t)+" kg","Your weight",120,20,new B.ecM(q),t)
s=q.ax
A.d.u(w,C.a([t,B.ja(A.cW,""+A.i.S(s*100)+" cm","Your jump",1.2,0.1,new B.ecN(q),s)],x))}if(q.d==="cannon"){t=q.ay
t=B.ja(A.cW,A.i.a5(t,1)+" km/s","Speed",13,0,new B.ecO(q),t)
s=q.ch
A.d.u(w,C.a([t,B.ja(A.cW,A.i.a5(s,1)+"x out","View",8,0.5,new B.ecP(q),s),new B.fj(C.a([new B.fJ(A.og,"Fire!",q.gchL(),A.bf,p),new B.fJ(A.q1,"Falls",new B.ecQ(q),A.c,p),new B.fJ(A.q_,"Orbit 7.7",new B.ecG(q),A.c,p),new B.fJ(D.bXj,"Oval 9",new B.ecH(q),A.c,p),new B.fJ(A.DS,"Escape",new B.ecI(q),A.c,p)],x),p,p)],x))}return B.lZ(A.cW,A.fh,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",o,"GRAVITY LAB",C.w(w,A.l,p,A.e,A.P,0,A.p))},
bTD(){return new C.C(D.bFU,C.cg(new B.ecn(this)),null)},
cNO(){var x,w,v,u=null,t=[D.fgk,D.fif,D.fin,D.fiR,D.fil,D.fiZ,D.fh8,D.fjn,D.fhT],s=y.p,r=C.a([D.h2T,A.S],s)
for(x=0;x<9;++x){w=t[x]
v=C.b2(w.c)
r.push(new C.C(A.cB,new C.c0(A.aK,A.e,A.h,A.l,u,A.p,u,0,C.a([new C.a4(62,u,C.c(w.a,u,u,u,u,u,u,new C.F(!0,v,u,u,u,u,12.5,A.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u),u),new C.bu(1,A.b6,new C.Ci(new B.ecp(this,w),u),u)],s),u),u))}r.push(A.at)
r.push(D.h5k)
return C.co(r,u,u,A.hp,u,u,A.ah,!1)},
bLw(){return C.cg(new B.ecl(this))}}
B.bf_.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.a,i=e.b,h=$.T(),g=C.L()
g.r=D.CA.gp(0)
d.aE(new C.a5(0,0,0+j,0+i),g)
x=new C.e4()
x.cV(2)
for(w=0;w<80;++w){g=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.2+x.ai()*0.5).gp(0)
d.O(new C.r(g*j,v*i),u*1.1+0.3,t)}j=l.c
s=6371*j
i=l.b
g=C.L()
g.san(new C.bU(A.z,0.5,A.w,k,0,C.a([A.L,A.aH.j(0.35),A.L],y.O),D.dw6,k).az(0,C.bY(i,s*1.1)))
d.O(i,s*1.06,g)
g=C.L()
g.san(D.eOH.az(0,C.bY(i,s)))
d.O(i,s,g)
r=i.a7(0,new C.r(0,-s))
h=h.r
g=y.v
q=new C.aH(h,A.ak,k,k,C.a([],g))
v=r.a
u=r.b
t=u+3
q.E(new C.aZ(v-16,t))
q.E(new C.aq(v,u-400*j-4))
q.E(new C.aq(v+16,t))
q.E(new C.bA())
t=C.L()
t.r=A.an.gp(0)
d.af(q,t)
t=r.a7(0,new C.r(0,-400*j-6))
v=C.L()
v.r=A.c.gp(0)
d.O(t,4,v)
v=l.e
if(v.length>1){g=C.a([],g)
p=new C.aH(h,A.ak,k,k,g)
h=i.a
u=i.b
p.E(new C.aZ(h+A.d.gG(v).a*j,u+A.d.gG(v).b*j))
for(v=C.cV(v,1,k,C.U(v).c),t=v.$ti,v=new C.bR(v,v.gJ(0),t.k("bR<aj.E>")),t=t.k("aj.E");v.C();){o=v.d
if(o==null)o=t.a(o)
o=new C.aq(h+o.a*j,u+o.b*j)
g.push(o)
n=p.f
if(n!=null)o.aj(n)
p.ac()}$.T()
h=C.L()
h.b=A.ad
h.c=2.4
h.d=A.bG
h.r=A.cW.j(0.9).gp(0)
d.af(p,h)}if(l.f){h=l.d
m=i.a7(0,new C.r(h.a*j,h.b*j))
j=C.L()
j.r=A.cW.j(0.4).gp(0)
j.y=O.oX
d.O(m,7,j)
j=C.L()
j.r=A.c.gp(0)
d.O(m,4,j)}},
aD(d){return!0}}
B.XW.prototype={
R(){return new B.bp8(new C.cB(null,y.z),$,A.bH,0,C.a([],y.X),null,null)}}
B.bp8.prototype={
Z(){this.a3()
this.mo()},
mG(d){},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=D.Tp[m.e],j=D.Tp[m.f],i=k.b>=j.b,h=i?k:j,g=i?j:k
i=h.b
x=g.b
w=i/x
v=y.p
u=C.a([C.aI(l,l,l,l,D.p8,l,l,l,new B.eKW(m,d),l,l,l,l,"Share",l)],v)
t=C.E(C.b4(l,l,l,new B.bwq(g,h,w,l),A.hh),1)
s=h.a
r=w<10?A.i.a5(w,1):B.HY(w)
q=g.a
r=C.c(s+" is "+r+" times wider than "+q,l,l,l,l,l,l,A.hk,A.K,l,l)
p=B.HY(w*w*w)
o=A.a.c7(q,"s")?"":"s"
i=C.w(C.a([t,C.p(l,C.w(C.a([r,A.at,C.c("About "+p+" "+q+o+" would fit inside "+s+".",l,l,l,l,l,l,P.uz,A.K,l,l),A.bs,C.c(q+": "+B.HY(x*2)+" km wide. "+s+": "+B.HY(i*2)+" km wide.",l,l,l,l,l,l,P.BB,A.K,l,l)],v),A.l,l,A.e,A.h,0,A.p),A.f,l,l,l,l,l,l,l,A.aoB,l,l,1/0)],v),A.l,l,A.e,A.h,0,A.p)
s=C.a([],v)
for(n=0;n<10;++n){x=D.Tp[n]
s.push(new B.e3(x.a,m.e===n,new B.eKX(m,n),l,C.b2(x.c),l))}x=C.a([],v)
for(n=0;n<10;++n){t=D.Tp[n]
x.push(new B.e3(t.a,m.f===n,new B.eKY(m,n),l,C.b2(t.c),l))}return B.lZ(A.c5,u,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.e9(i,m.d),"SIZE COMPARE",C.w(C.a([new B.fj(s,"FIRST",l),new B.fj(x,"SECOND",l)],v),A.l,l,A.e,A.P,0,A.p))}}
B.bwq.prototype={
a4(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b
$.T()
x=C.L()
x.r=D.bqV.gp(0)
d.aE(new C.a5(0,0,0+k,0+j),x)
w=new C.e4()
w.cV(6)
for(v=0;v<70;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.2+w.ai()*0.4).gp(0)
d.O(new C.r(x*k,u*j),t+0.3,s)}r=Math.min(k/2-16,j/2-10)*0.98
q=Math.max(r/this.d,0.8)
k*=0.5
j*=0.5
p=new C.r(k,j)
x=new B.fi4(d)
u=this.c
x.$3(p,r,C.b2(u.c))
t=r-q
o=new C.r(k-r+q+6+t*0.1,j+r-q-6-t*0.05)
t=this.b
x.$3(o,q,C.b2(t.c))
x=C.L()
x.b=A.ad
x.c=1.4
x.r=A.ac.gp(0)
d.O(o,q+3,x)
n=C.h_(l,A.cL,l,l,l,C.cW(l,l,l,l,l,l,l,l,l,D.fO4,t.a),A.a8,A.cd,l,A.e4,A.ce)
n.eL()
t=n.b
x=t.c
k=-q
t=t.a.c
if(k-t.gb4(t)-6<4)k=q+6
else{j=n.b.a.c
j=k-j.gb4(j)-6
k=j}n.a4(d,o.a7(0,new C.r(-x/2,k)))
m=C.h_(l,A.cL,l,l,l,C.cW(l,l,l,l,l,l,l,l,l,D.fRF,u.a),A.a8,A.cd,l,A.e4,A.ce)
m.eL()
u=m.b
k=u.c
u=u.a.c
m.a4(d,p.a7(0,new C.r(-k/2,-u.gb4(u)/2)))},
aD(d){return!0}}
B.aPj.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCc.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBK()}}
B.aPQ.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCo.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bCg()}}
B.aPT.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCq.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bCj()}}
B.Rd.prototype={}
B.Wg.prototype={
R(){return B.ih1()}}
B.bnK.prototype={
Z(){this.a3()
this.mo()},
mG(d){var x,w,v,u,t,s=this
s.f+=d
s.e.fE(0,d,s.y)
for(x=s.z,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v){u=x[v]
u.a=u.a+d*u.c/Math.pow(u.b,1.5)
t=u.b
t-=d*(0.5+1.6/t)*0.6
u.b=t
if(t<=1){u.e=0;++s.as
E.dH(70,"",500,0.3,0.5,"sine")}}A.d.br(x,new B.dTB())},
b43(d){var x,w,v,u=this.Q
if(u.A(0,A.aA))return
x=this.gbdm()
w=d.aI(0,new C.r(u.a/2,u.b*0.42))
v=A.i.D(w.gcL()/x,1.5,12)
u=Math.atan2(w.b,w.a)
this.z.push(new B.Rd(u,v,1.2,new C.rO(1,30+A.cV.ai()*40,0.9,0.7).jg()))
B.mJ("bell",60+A.i.S(12-v)*2,400,0.35)},
gbdm(){var x=this.Q
return Math.min(x.a,x.b)*0.07},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.z,m=Math.sqrt(1-1/A.i.D(n.length===0?3:new C.O(n,new B.dTp(),C.U(n).k("O<1,H>")).eH(0,A.pB),1.0001,99))
n=y.p
x=C.a([C.aI(o,o,o,o,D.p8,o,o,o,new B.dTq(p,d),o,o,o,o,"Share",o)],n)
w=C.cg(new B.dTr(p,m))
v=Math.log(p.r)
u=Math.log(1e10)
t=p.r
t=t<1000?A.i.a5(t,0)+" Suns":B.fRR(t)+" Suns"
u=B.ja(A.bj,t,"Mass",1,0,new B.dTt(p),v/u)
v=C.a([new B.e3("Star (10)",!1,new B.dTu(p),o,A.bj,o),new B.e3("Cygnus X-1 (21)",!1,new B.dTv(p),o,A.bj,o),new B.e3("Milky Way core (4 million)",!1,new B.dTw(p),o,A.bj,o),new B.e3("M87 (6.5 billion)",!1,new B.dTx(p),o,A.bj,o)],n)
t=p.w
s=p.x
r=p.y
q=r?A.lG:D.IG
return B.lZ(A.bj,x,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',w,"BLACK HOLE",C.w(C.a([u,new B.fj(v,"LIKE",o),new B.fj(C.a([new B.e3("Glowing ring",t,new B.dTy(p),o,A.bj,o),new B.e3("Bent light",s,new B.dTz(p),o,A.bj,o),new B.e3("Music",r,new B.dTA(p),q,A.bj,o),new B.fJ(A.m8,"Clear",new B.dTs(p),A.c,o)],n),o,o)],n),A.l,o,A.e,A.P,0,A.p))},
ahw(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.fJx,x,x,x),A.bs,C.c(e,x,2,x,x,x,x,A6.ya,A.K,x,x)],y.p),A.l,x,A.e,A.h,0,A.p),1)}}
B.bek.prototype={
a4(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
$.T()
x=C.L()
x.r=D.btG.gp(0)
a9.aE(new C.a5(0,0,0+a7,0+a8),x)
x=a7/2
w=a8*0.42
v=new C.r(x,w)
u=this.b
t=u.gbdm()*(0.9+0.35*Math.log(u.r)/2.302585092994046)
for(s=u.at,r=s.length,q=t*t*5,p=t*2.2,o=0;o<s.length;s.length===r||(0,C.I)(s),++o){n=s[o]
m=n.a*a7
l=n.b*a8
k=new C.r(m,l)
if(u.x){m-=x
l-=w
j=Math.sqrt(m*m+l*l)
if(j>1){i=j+A.i.D(q/j,0,p)
k=new C.r(x+m/j*i,w+l/j*i)}}m=new C.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.c.j(0.6).gp(0)
a9.O(k,0.9,m)}if(u.x){a7=C.L()
a7.b=A.ad
a7.c=2
a7.r=A.c.j(0.25).gp(0)
a7.y=K.a2L
a9.O(v,t*1.5,a7)}if(u.w)for(a7=t*0.2,h=0;h<90;++h){g=h/90
a8=1.6+g*2.6
f=t*a8
e=1.4/Math.pow(a8,1.5)
d=g*40
for(a8=1-g,s=0.25+0.6*a8,r=-(f*0.55),a8=0.18*a8,a0=0;a0<4;++a0){a1=d+a0*3.141592653589793/2+u.f*e*2.2
a2=Math.sin(a1)>0
a3=Math.cos(a1)*f
q=Math.sin(a1)
p=C.ap(A.uZ,A.fM,g)
p.toString
m=Math.cos(a1)
$.T()
l=new C.ar(A.U,A.R,A.X,A.Y,A.W)
i=a2?1:0.85
l.r=p.j(s*(0.4+(0.5+0.5*m)*0.6)*i).gp(0)
a9.O(new C.r(x+a3,w+q*f*0.28),1.3,l)
if(!a2&&u.x){q=Math.sin(-a1)
m=new C.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=p.j(a8).gp(0)
a9.O(new C.r(x+a3*0.5,w+(r*Math.abs(q)*0.6-a7)),1,m)}}}a7=t*1.25
$.T()
a8=C.L()
a8.san(new C.bU(A.z,0.5,A.w,null,0,C.a([A.v,A.v.j(0)],y.O),D.d5V,null).az(0,C.bY(v,a7)))
a9.O(v,a7,a8)
a8=C.L()
a8.r=A.v.gp(0)
a9.O(v,t,a8)
a8=C.L()
a8.b=A.ad
a8.c=1
a8.r=A.bj.j(0.55).gp(0)
a9.O(v,t,a8)
for(a7=u.z,a8=a7.length,o=0;o<a7.length;a7.length===a8||(0,C.I)(a7),++o){a4=a7[o]
f=t*a4.b
u=x+Math.cos(a4.a)*f
s=w+Math.sin(a4.a)*f*0.9
a5=1+A.i.D(3.5/a4.b,0,5)
a6=3*a5
r=-Math.sin(a4.a)*a6
q=Math.cos(a4.a)*a6
p=new C.ar(A.U,A.R,A.X,A.Y,A.W)
p.c=4.2/Math.sqrt(a5)
p.d=A.bG
m=a4.d
p.r=m.j(A.i.D(a4.b/2,0.2,1)).gp(0)
a9.ah(new C.r(u-r,s-q),new C.r(u+r,s+q),p)
p=new C.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=m.j(0.2).gp(0)
p.y=O.oX
a9.O(new C.r(u,s),6,p)}},
aD(d){return!0}}
B.ah9.prototype={}
B.Xb.prototype={
R(){var x=y.q,w=y.g
return new B.boe(new C.cB(null,y.z),new B.QE(A.cV),C.a([],x),A.J,A.J,C.a([],x),C.a([],w),C.a([],w),C.a([],w),C.a([],w),A.J,A.J,$,A.bH,0,C.a([],y.X),null,null)}}
B.boe.prototype={
Z(){this.a3()
this.a1d()
this.mo()},
a1d(){var x,w,v,u,t,s,r,q,p=this,o=new C.e4()
o.cV(5)
x=C.a([],y.q)
w=p.Q==="elliptical"?1800:2300
for(v=0;v<w;++v)if(p.Q==="elliptical"){u=Math.pow(o.ai(),1.6)
x.push(new B.ah9(u,o.ai()*3.141592653589793*2,(o.ai()-0.5)*0.5*u,25+o.ai()*20))}else{u=Math.pow(o.ai(),0.8)
t=o.av(p.f)
s=o.ai()
r=t*(6.283185307179586/p.f)+u*p.r+(s-0.5)*(0.55-u*0.25)
s=p.w
if(s>0&&u<0.3*s+0.05){s=o.h9()?0:3.141592653589793
r=s+(o.ai()-0.5)*0.25}s=o.ai()
q=u<0.25?35+o.ai()*15:205+o.ai()*50
x.push(new B.ah9(u,r,(s-0.5)*0.05*(1-u),q))}p.ay=x},
cFS(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.ch=!0
l.CW=D.eDP
l.cx=D.eDS
x=new C.e4()
x.cV(9)
w=l.cy
A.d.a6(w)
v=C.a([],y.q)
for(u=0;u<900;++u)v.push(new B.ah9(Math.pow(x.ai(),0.8)*0.7,x.ai()*3.141592653589793*2,0,320+x.ai()*30))
A.d.u(w,v)
v=y.g
t=C.a([],v)
for(s=w.length,r=0;r<w.length;w.length===s||(0,C.I)(w),++r){q=w[r]
p=q.b
o=q.a
t.push(new C.r(Math.cos(p)*o,Math.sin(p)*o))}l.dx=t
t=C.a([],v)
for(s=w.length,r=0;r<w.length;w.length===s||(0,C.I)(w),++r){q=w[r]
p=q.b
o=q.a+0.2
t.push(new C.r(-Math.sin(p)*0.55/Math.sqrt(o),Math.cos(p)*0.55/Math.sqrt(o)))}l.fr=t
w=C.a([],v)
for(t=l.ay,s=y.r,t=C.cV(t,0,C.dz(900,"count",s),C.U(t).c),p=t.$ti,t=new C.bR(t,t.gJ(0),p.k("bR<aj.E>")),p=p.k("aj.E");t.C();){o=t.d
if(o==null)o=p.a(o)
n=o.b
m=Math.cos(n)
o=o.a
w.push(new C.r(m*o,Math.sin(n)*o))}l.db=w
w=C.a([],v)
for(v=l.ay,v=C.cV(v,0,C.dz(900,"count",s),C.U(v).c),s=v.$ti,v=new C.bR(v,v.gJ(0),s.k("bR<aj.E>")),s=s.k("aj.E");v.C();){t=v.d
if(t==null)t=s.a(t)
p=t.b
o=Math.sin(p)
t=t.a+0.2
w.push(new C.r(-o*0.6/Math.sqrt(t),Math.cos(p)*0.6/Math.sqrt(t)))}l.dy=w
l.fy=l.fx=A.J
E.dH(110,"",900,0.5,0.45,"sine")},
mG(d){var x,w,v,u,t,s,r,q=this
q.e.fE(0,d,q.y)
x=q.at
w=q.ax
q.at=x+d*0.25*w
if(q.ch){v=d*0.9*w
u=q.CW.aI(0,q.fx)
t=Math.max(0.25,u.gcL())
s=u.f_(0,t).aO(0,0.9/(t*t))
x=q.fy.a7(0,s.aO(0,v))
q.fy=x
w=q.cx.aI(0,s.aO(0,v))
q.cx=w
x=q.fx.a7(0,x.aO(0,v))
q.fx=x
w=q.CW.a7(0,w.aO(0,v))
q.CW=w
r=new B.eb4(v)
r.$6(q.db,q.dy,x,w,0.5,0.35)
r.$6(q.dx,q.fr,q.CW,q.fx,0.35,0.5)}},
B(d){var x,w,v,u,t=this,s=null,r=y.p,q=C.a([C.aI(s,s,s,s,D.p8,s,s,s,new B.eaV(t,d),s,s,s,s,"Share",s)],r),p=C.b4(s,s,s,new B.bjL(t,s),A.aA),o=A.v.j(0.5),n=C.m(14),m=C.K(A.by,A.r,1)
if(t.ch)x="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(t.x)x="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else x=t.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
n=C.a([p,C.ao(8,C.p(s,C.c(x,s,s,s,s,s,s,A.LD,s,s,s),A.f,s,s,new C.o(o,s,m,n,s,s,A.m),s,s,s,s,A.bS,s,s,s),s,s,10,10,s,s)],r)
m=C.a([],r)
for(w=0;w<3;++w){v=D.dqT[w]
p=t.Q===v.a&&!t.ch
m.push(new B.e3(v.b,p,new B.eaW(t,v),s,A.h9,s))}m.push(new B.e3("Collide",t.ch,new B.eaX(t),A.xp,A.c5,s))
p=C.a([new B.fj(m,"TYPE",s)],r)
if(t.Q!=="elliptical"&&!t.ch){o=t.f
o=B.ja(A.h9,""+o,"Arms",6,2,new B.eaY(t),o)
m=t.r
A.d.u(p,C.a([o,B.ja(A.h9,A.i.a5(m,1),"Winding",6,0.8,new B.eaZ(t),m)],r))}o=t.as
p.push(B.ja(A.h9,""+A.i.S(o*90)+"\xb0","Tilt",1,0.15,new B.eb_(t),o))
o=t.ax
p.push(B.ja(A.h9,A.i.a5(o,1)+"x","Speed",4,0,new B.eb0(t),o))
o=t.x
m=t.z
x=t.y
u=x?A.lG:D.IG
p.push(new B.fj(C.a([new B.e3("Dark matter",o,new B.eb1(t),s,A.bj,s),new B.e3("You are here",m,new B.eb2(t),s,A.aQ,s),new B.e3("Music",x,new B.eb3(t),u,A.h9,s)],r),s,s))
return B.lZ(A.h9,q,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.e9(new C.am(A.a0,s,A.b4,A.t,n,s),t.d),"GALAXY",C.w(p,A.l,s,A.e,A.P,0,A.p))}}
B.bjL.prototype={
a4(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.a,d=a1.b
$.T()
x=C.L()
x.r=D.bw4.gp(0)
a0.aE(new C.a5(0,0,0+e,0+d),x)
w=new C.e4()
w.cV(3)
for(v=0;v<90;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.15+w.ai()*0.4).gp(0)
a0.O(new C.r(x*e,u*d),t*1.1+0.2,s)}r=new C.r(e/2,d*0.42)
q=Math.min(e*0.46,d*0.36)
e=this.b
if(e.x){d=q*1.3
x=C.L()
x.san(new C.bU(A.z,0.5,A.w,f,0,C.a([A.az.j(0.32),A.az.j(0.12),A.L],y.O),G.a6a,f).az(0,C.bY(r,d)))
a0.O(r,d,x)}p=new B.dop(e.as)
d=q*0.3
x=C.L()
x.san(new C.bU(A.z,0.5,A.w,f,0,C.a([A.ha.j(0.85),A.as.j(0.3),A.L],y.O),f,f).az(0,C.bY(r,d)))
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
t=A.i.F(s,360)
o.r=new H.pE(1,t,s>200?0.45:0.55,1).jg().j(0.35+(1-u)*0.5).gp(0)
a0.O(j,u<0.3?1.3:1,o)}if(e.z&&e.Q!=="elliptical"){l=e.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
e=e.at
d=Math.min(l,6)
j=p.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,r,e*d*0.5,q)
$.T()
d=C.L()
d.b=A.ad
d.c=1.6
d.r=A.aQ.gp(0)
a0.O(j,9,d)
i=C.h_(f,A.cL,f,f,f,D.fGi,A.a8,A.cd,f,A.e4,A.ce)
i.eL()
i.a4(a0,j.a7(0,new C.r(-i.b.c/2,12)))}}else{h=q*0.8
o=C.L()
for(d=e.db,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bxy.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}for(d=e.dx,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bri.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}d=e.fx
d=p.$6(d.a,d.b,0,r,0,h)
$.T()
x=C.L()
x.r=A.ha.gp(0)
a0.O(d,5,x)
e=e.CW
e=p.$6(e.a,e.b,0,r,0,h)
x=C.L()
x.r=A.iJ.gp(0)
a0.O(e,5,x)}},
aD(d){return!0}}
B.XR.prototype={
R(){return new B.bp7(new C.cB(null,y.z),new B.QE(A.cV),$,A.bH,0,C.a([],y.X),null,null)}}
B.bp7.prototype={
Z(){this.a3()
this.mo()},
mG(d){var x,w,v,u=this
u.e.fE(0,d,u.Q)
if(!u.x)return
x=u.f
w=u.y
if(x==="seasons")u.r=A.i.F(u.r+d*0.04*w,1)
else{x=A.i.F(u.w+d*0.05*w,1)
u.w=x
v=A.i.bd(x*4)
if(v!==A.i.bd(u.as))B.mJ("bell",60+v*4,500,0.35)
u.as=v}},
gcBl(){var x=this.r
if(x<0.25)return"Spring in the north, autumn in the south"
if(x<0.5)return"Summer in the north, winter in the south"
if(x<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcri(){var x=this.w
if(x<0.03||x>0.97)return"New Moon"
if(x<0.22)return"Waxing crescent"
if(x<0.28)return"First quarter"
if(x<0.47)return"Waxing gibbous"
if(x<0.53)return"Full Moon"
if(x<0.72)return"Waning gibbous"
if(x<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var x,w,v,u,t,s=this,r=null,q=y.p,p=C.a([C.aI(r,r,r,r,D.p8,r,r,r,new B.eHY(s,d),r,r,r,r,"Share",r)],q),o=C.E(new C.e9(C.b4(r,r,r,new B.bvC(s,r),A.hh),s.d),1)
if(s.f==="seasons")x=s.gcBl()
else{x=s.gcri()
w=A.i.ao(A.i.D(0.5-0.5*Math.cos(s.w*2*3.141592653589793),0,1)*100,1)
v=s.w
if(v>0.45&&v<0.55||v<0.05||v>0.95)v="  \xb7  Spring tides (the biggest)"
else{if(!(v>0.2&&v<0.3))v=v>0.7&&v<0.8
else v=!0
v=v?"  \xb7  Neap tides (the smallest)":""}v=x+"  \xb7  "+w+"% lit"+v
x=v}x=C.w(C.a([o,C.p(r,C.c(x,r,r,r,r,r,r,Z.X5,A.K,r,r),A.f,r,r,r,r,r,r,r,K.aoa,r,r,1/0)],q),A.l,r,A.e,A.h,0,A.p)
o=s.f
w=s.x
v=w?"Pause":"Play"
w=w?X.vD:A.fQ
u=s.Q
t=u?A.lG:D.IG
t=C.a([new B.fj(C.a([new B.e3("Seasons",o==="seasons",new B.eHZ(s),A.E1,A.bw,r),new B.e3("Moon phases",o==="moon",new B.eI_(s),A.vr,A.bw,r),new B.e3(v,!1,new B.eI0(s),w,A.bw,r),new B.e3("Music",u,new B.eI1(s),t,A.bw,r)],q),r,r)],q)
if(s.f==="seasons"){o=s.r
o=B.ja(A.bw,D.dq3[A.o.F(A.i.bd(o*12),12)],"Month",1,0,new B.eI2(s),o)
w=s.z
A.d.u(t,C.a([o,B.ja(A.bw,A.i.a5(w,1)+"\xb0","Tilt",90,0,new B.eI3(s),w)],q))}else{q=s.w
t.push(B.ja(A.bw,""+(A.i.bd(q*29.5)+1),"Day of month",1,0,new B.eI4(s),q))}q=s.y
t.push(B.ja(A.bw,A.i.a5(q,1)+"x","Speed",4,0.2,new B.eI5(s),q))
return B.lZ(A.bw,p,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",x,"SEASONS & MOON",C.w(t,A.l,r,A.e,A.P,0,A.p))}}
B.bvC.prototype={
a4(b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=b8.a,b4=b8.b,b5=$.T(),b6=C.L()
b6.r=D.CA.gp(0)
b7.aE(new C.a5(0,0,0+b3,0+b4),b6)
x=new C.e4()
x.cV(4)
for(w=0;w<70;++w){b6=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.2+x.ai()*0.4).gp(0)
b7.O(new C.r(b6*b3,v*b4),u+0.3,t)}b6=b3/2
v=b4/2
s=new C.r(b6,v)
u=this.b
if(u.f==="seasons"){r=b3*0.36
q=b4*0.3
b6=C.bZ(s,q*2,r*2)
v=C.L()
v.b=A.ad
v.c=1
v.r=A.aT.gp(0)
b7.c1(b6,v)
v=C.L()
v.san(D.eOI.az(0,C.bY(s,34)))
b7.O(s,22,v)
p=u.r*2*3.141592653589793
o=s.a7(0,new C.r(Math.cos(p)*r,Math.sin(p)*q))
n=Math.min(b3,b4)*0.075
m=u.z*3.141592653589793/180
l=s.aI(0,o).f_(0,s.aI(0,o).gcL())
u=b7.c
J.bs(u.save())
u.translate(o.a,o.b)
b4=C.L()
b4.r=D.btC.gp(0)
b7.O(A.J,n,b4)
J.bs(u.save())
b5=new C.aH(b5.r,A.ak,b2,b2,C.a([],y.v))
b5.E(new C.jL(C.bY(A.J,n)))
b7.mA(0,b5)
b5=l.aO(0,n).aO(0,0.35)
b4=n*1.1
b3=C.L()
b3.san(D.eOQ.az(0,C.bY(A.J,b4)))
b7.O(b5,b4,b3)
u.restore()
b3=-m
b4=Math.sin(b3)
b3=-Math.cos(b3)
k=new C.r(b4,b3)
b5=new C.r(-b4,-b3).aO(0,n).aO(0,1.7)
v=k.aO(0,n).aO(0,1.7)
b6=C.L()
b6.c=2
b6.r=A.c1.gp(0)
b7.ah(b5,v,b6)
b6=k.aO(0,n).aO(0,1.7)
v=C.L()
v.r=A.c1.gp(0)
b7.O(b6,3.2,v)
b3=b4*l.a+b3*l.b
j=-b3
u.restore()
if(Math.abs(j)<0.12)b3="equinox: day and night equal"
else b3=j*Math.sin(m)*0+b3>0?"north leans to Sun":"south leans to Sun"
i=C.h_(b2,A.cL,b2,b2,b2,C.cW(b2,b2,b2,b2,b2,b2,b2,b2,b2,F.adt,b3),A.a8,A.cd,b2,A.e4,A.ce)
i.eL()
i.a4(b7,o.a7(0,new C.r(-i.b.c/2,n+12)))}else{h=Math.min(b3*0.34,b4*0.32)
t=C.L()
t.b=A.ad
t.c=1
t.r=A.aT.gp(0)
b7.O(s,h,t)
for(t=b4*0.2,w=0;w<9;++w){g=t+w*b4*0.075
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.aQ.j(0.6).gp(0)
f.c=2
b7.ah(new C.r(10,g),new C.r(40,g),f)}n=h*0.25
t=C.L()
t.san(new C.bU(new C.di(-0.5,0),1.1,A.w,b2,0,C.a([D.bo5,D.am0],y.O),D.dfC,b2).az(0,C.bY(s,n)))
b7.O(s,n,t)
p=3.141592653589793+u.w*2*3.141592653589793
e=s.a7(0,new C.r(Math.cos(p)*h,Math.sin(p)*h))
d=h*0.12
t=C.L()
t.r=D.bkM.gp(0)
b7.O(e,d,t)
t=b7.c
J.bs(t.save())
b5=b5.r
g=y.v
f=new C.aH(b5,A.ak,b2,b2,C.a([],g))
f.E(new C.jL(C.bY(e,d)))
b7.mA(0,f)
f=e.a-d
a0=e.b-d
a1=C.L()
a1.r=A.bP.gp(0)
b7.aE(new C.a5(f,a0,f+d,a0+d*2),a1)
t.restore()
a2=e.aI(0,s).f_(0,e.aI(0,s).gcL())
for(f=a2.a,a0=a2.b,a1=n*0.28,a3=0;a3<2;++a3){a4=F.azM[a3]
a5=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a5.r=A.aH.j(0.45).gp(0)
a5.y=A.ld
b7.O(new C.r(b6+f*a4*n*1.05,v+a0*a4*n*1.05),a1,a5)}b6=b3-b3*0.17
v=b4*0.18
a6=new C.r(b6,v)
a7=Math.min(b3,b4)*0.1
b4=C.L()
b4.r=D.bkH.gp(0)
b7.O(a6,a7,b4)
a8=0.5-0.5*Math.cos(u.w*2*3.141592653589793)
J.bs(t.save())
b4=new C.aH(b5,A.ak,b2,b2,C.a([],g))
b4.E(new C.jL(C.bY(a6,a7)))
b7.mA(0,b4)
u=u.w
a9=new C.aH(b5,A.ak,b2,b2,C.a([],g))
b0=u<0.5?1:-1
b3=v-a7
a9.E(new C.aZ(b6,b3))
b4=b0>0
a9.aGz(new C.r(b6,v+a7),b4,new C.aP(a7,a7))
if(a8<0.5)b4=b0<0
a9.aGz(new C.r(b6,b3),b4,new C.aP(a7*Math.abs(1-2*a8),a7))
b4=C.L()
b4.r=A.bP.gp(0)
b7.af(a9,b4)
t.restore()
t=C.L()
t.b=A.ad
t.c=1
t.r=A.aT.gp(0)
b7.O(a6,a7,t)
b1=C.h_(b2,A.cL,b2,b2,b2,D.fGj,A.a8,A.cd,b2,A.e4,A.ce)
b1.eL()
b1.a4(b7,a6.a7(0,new C.r(-b1.b.c/2,a7+6)))}},
aD(d){return!0}}
B.aOP.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bC3.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBd()}}
B.aPf.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCb.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bBF()}}
B.aPO.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCn.prototype={
t(){var x,w,v
for(x=this.hf$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a1(0)
x=this.he$
x===$&&C.d()
x.t()
this.bCe()}}
var z=a.updateTypes(["~()","cp(adj)","P(vY)","P(Ry)","az<~>()","~(n)","P(adi)","Xd()","Y2()","Xe()","Wg()","Xb()","XW()","XR()","P(Rd)","H(Rd)"])
B.eSY.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=d.a,o=A.i.D((p-q.x.a)/1e6,0,0.05)
q.x=d
q.y=A.o.ao(p,1000)
for(p=q.f,x=p.length,w=1-1.2*o,v=0;v<x;++v){u=p[v]
t=u.a
s=u.b
r=s.a
s=s.b
u.a=new C.r(t.a+r*o,t.b+s*o)
u.b=new C.r(r*w,s*w)}A.d.br(p,new B.eSW(q))
if(q.c!=null)p=p.length!==0||q.ax!=null
else p=!1
if(p)q.l(new B.eSX())},
$S:7}
B.eSW.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+3}
B.eSX.prototype={
$0(){},
$S:0}
B.eSz.prototype={
$0(){},
$S:0}
B.eSy.prototype={
$0(){},
$S:0}
B.eSI.prototype={
$0(){return B.uT(this.b,this.a.d,"spark-painter")},
$S:0}
B.eSK.prototype={
$1(d){return this.a.b2M(0,d.b)},
$S:50}
B.eSO.prototype={
$1(d){var x,w=this.a,v=d.b,u=w.ax
if(u!=null){x=u.a
x=x.length===0||A.d.gak(x).aI(0,v).gcL()>2.5}else x=!1
if(x)u.a.push(v)
w.aWl(v)
w.cig(v)
return null},
$S:19}
B.eSJ.prototype={
$1(d){return this.a.b2L()},
$S:38}
B.eSP.prototype={
$1(d){return this.a.b2M(0,d.b)},
$S:24}
B.eSQ.prototype={
$1(d){return this.a.b2L()},
$S:57}
B.eSR.prototype={
$0(){var x=this.a
return x.l(new B.eSH(x,this.b))},
$S:0}
B.eSH.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eSS.prototype={
$0(){var x=this.a
return x.l(new B.eSG(x))},
$S:0}
B.eSG.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eST.prototype={
$0(){var x=this.a
return x.l(new B.eSF(x,this.b))},
$S:0}
B.eSF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eSU.prototype={
$1(d){var x=this.a
return x.l(new B.eSE(x,d))},
$S:6}
B.eSE.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eSV.prototype={
$0(){var x=this.a
return x.l(new B.eSD(x))},
$S:0}
B.eSD.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.eSL.prototype={
$0(){var x=this.a
return x.l(new B.eSC(x))},
$S:0}
B.eSC.prototype={
$0(){var x=this.a.e
if(x.length!==0)x.pop()},
$S:0}
B.eSM.prototype={
$0(){var x=this.a
return x.l(new B.eSB(x))},
$S:0}
B.eSB.prototype={
$0(){var x=this.a
A.d.a6(x.e)
A.d.a6(x.f)},
$S:0}
B.eSN.prototype={
$0(){var x=this.a
return x.l(new B.eSA(x,this.b))},
$S:0}
B.eSA.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cEv.prototype={
$0(){return C.a8(this.a,!1).hZ()},
$S:0}
B.cEw.prototype={
$0(){var x=this.a
return B.hSY(this.b,x.c,x.e,x.d)},
$S:0}
B.hfD.prototype={
$1(d){var x,w=null,v=C.m(24),u=this.a,t=u.j(0.4)
u=C.c(this.b,w,w,w,w,w,w,C.l(w,w,u,w,w,w,w,w,w,w,w,16,w,w,A.u,w,w,!0,w,1.2,w,w,w,w,w,w),w,w,w)
x=C.c(this.c,w,w,w,w,w,w,D.fJK,w,w,w)
return C.ek(C.a([C.bJ(!1,D.h2_,w,w,!0,w,w,w,new B.hfC(d),w,w)],y.p),w,w,F.ms,x,w,w,w,new C.b9(v,new C.ax(t,1,A.r,-1)),u,w)},
$S:18}
B.hfC.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.cEr.prototype={
$0(){C.f3()
this.a.e.$0()},
$S:0}
B.cEq.prototype={
$0(){C.f3()
this.a.e.$0()},
$S:0}
B.cEx.prototype={
$0(){C.f3()
this.a.e.$0()},
$S:0}
B.cEs.prototype={
$0(){var x=this.a
A.d.X(x.hf$,this.b.bn())
if(x.c!=null)this.c.$0()},
$S:0}
B.cEu.prototype={
$1(d){var x=this.a,w=d.a,v=A.i.D((w-x.md$.a)/1e6,0,0.04)
x.md$=d
x.fe$=A.o.ao(w,1000)
x.mG(v)
if(x.c!=null)x.l(new B.cEt())},
$S:7}
B.cEt.prototype={
$0(){},
$S:0}
B.h10.prototype={
bqV(d){var x=0,w=C.j(y.D),v,u=this,t,s
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:x=3
return C.b(u.a.$1(d),$async$$1)
case 3:t=f
x=4
return C.b(t.ho(A.a5C),$async$$1)
case 4:s=f
t.t()
if(s==null)throw C.Y(C.bd("no picture"))
v=J.eB(A.dM.gaS(s),s.byteOffset,s.byteLength)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$1(d){return this.bqV(d)},
$S:2058}
B.ciA.prototype={
$1(d){var x=this.c,w=this.a,v=w.d,u=v+1
w.d=u
x.$flags&2&&C.ak(x)
x[v]=d
if(u===255){v=this.b.c
v.q3(255)
v.I(0,new Uint8Array(C.cd(x)))
w.d=0}},
$S:27}
B.ciz.prototype={
$1(d){var x,w,v=this.a,u=v.c,t=v.b
u=v.c=(u|A.o.e6(d,t))>>>0
t=v.b=t+v.a
for(x=this.b;t>=8;t=u,u=w){x.$1(u&255)
w=v.c>>>8
v.c=w
u=v.b-=8}},
$S:27}
B.fAS.prototype={
$0(){var x=null,w=C.h_(x,A.cL,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.b,x,x,x,x,x,"monospace",x,x,this.c,x,x,A.O,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a8,A.cd,x,A.e4,A.ce)
w.eL()
return w},
$S:273}
B.h6I.prototype={
$0(){return this.a.ai()},
$S:82}
B.fHh.prototype={
$2(d,e){return d.j(A.i.D(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:2059}
B.fHi.prototype={
$4$blur$shift(d,e,f,g){var x,w=this
$.T()
x=C.L()
x.b=A.ad
x.c=e
x.e=A.dP
x.r=d.gp(0)
if(f!=null)x.y=f
B.DS(w.a,w.b,null,x).a4(w.c,w.d.a7(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.J)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.J)},
$S:2060}
B.h6J.prototype={
$2(d,e){return d+this.a[e]},
$S:783}
B.h6K.prototype={
$2(d,e){return d+this.a[e]},
$S:783}
B.h5p.prototype={
$1(d){return this.br8(d)},
br8(d){var x=0,w=C.j(y.I),v,u=this,t,s,r,q,p
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:$.T()
t=new C.oY(new C.ov())
s=u.a
r=u.b
B.hSe(C.v4(t,null),new C.av(s,r),d/u.c,u.r,u.w,u.x,u.e,u.f,u.d)
q=t.n1()
x=3
return C.b(q.vL(s,r),$async$$1)
case 3:p=f
q.t()
v=p
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$S:754}
B.cpL.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.cpG.prototype={
$0(){var x=this.a
x.at=0
x.ax=""},
$S:0}
B.cpH.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.cpF(x,d))},
$S:6}
B.cpF.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cpI.prototype={
$0(){var x=this.b?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.a.ax=x},
$S:0}
B.cpJ.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
B.cpK.prototype={
$0(){return this.a.at=-1},
$S:0}
B.cpv.prototype={
$2(d,e){var x=null,w=this.a,v=w.gKf().x
v===$&&C.d()
return C.b4(x,x,x,new B.bbQ(v,w.e.a.a,w.f,w.r,w.y,w.gtT(),w.x,x),A.hh)},
$S:52}
B.cpw.prototype={
$1(d){return this.a.l(new B.cpu())},
$S:2}
B.cpu.prototype={
$0(){},
$S:0}
B.cpx.prototype={
$0(){return this.a.btu(this.b.a)},
$S:0}
B.cpy.prototype={
$0(){var x=this.a
return x.l(new B.cpt(x,this.b))},
$S:0}
B.cpt.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.cpz.prototype={
$0(){var x=this.a
return x.l(new B.cps(x,this.b))},
$S:0}
B.cps.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.cpA.prototype={
$0(){var x=this.a
return x.l(new B.cpr(x,this.b))},
$S:0}
B.cpr.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cpB.prototype={
$0(){var x=this.a
return x.l(new B.cpq(x,this.b))},
$S:0}
B.cpq.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cpC.prototype={
$0(){var x=this.a
return x.l(new B.cpp(x))},
$S:0}
B.cpp.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.cpD.prototype={
$0(){var x=this.a.gKf()
x.iD(0,0)
x.cT(0)},
$S:0}
B.cpE.prototype={
$1(d){var x=this.a
return x.l(new B.cpo(x,d))},
$S:6}
B.cpo.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ebM.prototype={
$0(){return this.a.k1=!1},
$S:0}
B.ebN.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.ebL(x,d))},
$S:z+1}
B.ebL.prototype={
$0(){return this.a.cCE(this.b)},
$S:0}
B.ebO.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.ebK(x))},
$S:75}
B.ebK.prototype={
$0(){return this.a.k1=!0},
$S:0}
B.ebP.prototype={
$0(){var x,w,v,u=this.a,t=J.a1(u),s=t.gJ(u),r=new Float64Array(s*4)
for(x=0;x<t.gJ(u);++x){w=J.t(t.h(u,x),0)*3.141592653589793/180
v=J.t(t.h(u,x),1)*3.141592653589793/180
s=x*4
r[s]=Math.sin(v)
r[s+1]=Math.cos(v)
r[s+2]=Math.sin(w)
r[s+3]=Math.cos(w)}return r},
$S:727}
B.ebI.prototype={
$0(){return this.a.id=D.a7G},
$S:0}
B.ebJ.prototype={
$0(){var x=this.b.a,w=C.U(x).k("X<1>")
w=C.pf(new C.X(x,new B.ebH(this.c),w),6,w.k("M.E"))
x=C.B(w,C.a3(w).k("M.E"))
return this.a.id=x},
$S:0}
B.ebH.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+6}
B.ebG.prototype={
$1(d){var x=null,w=C.cc(C.c("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",x,x,x,x,x,x,C.l(x,x,A.ac,x,x,x,x,x,x,x,x,14,x,x,x,x,1.55,!0,x,x,x,x,x,x,x,x),x,x,x),A.t,x,A.y,x,x,x,x,x,A.ah)
return C.ek(C.a([C.bJ(!1,A.pv,x,x,!0,x,x,x,new B.ebF(d),x,x)],y.p),x,x,F.ms,w,x,x,x,x,D.hdn,x)},
$S:18}
B.ebF.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.ec7.prototype={
$0(){return B.uT(this.b,this.a.d,"earth")},
$S:0}
B.ec8.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=new C.av(e.b,e.d)
p.fy=o
x=p.r
w=p.w
v=p.x
u=p.y
t=p.gXN()
s=p.z
r=y.p
o=C.a([C.aA(A.c0,C.b4(q,q,q,new B.bjU(x,w,v,u,t*s,s,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.ebW(p),new B.ebX(p),new B.ebY(p),q,q,q,q,q,q,q,new B.ebZ(p),q,q,q,!1,A.a4)],r)
if(p.r==null&&!p.k1)o.push(D.bfU)
if(p.r==null&&p.k1)o.push(C.at(new C.C(A.pW,C.w(C.a([D.c6F,A.S,D.hc6,A.aj,D.h3N,A.aB,C.de(A.vJ,q,A.FS,p.gc86(),q)],r),A.l,q,A.e,A.P,0,A.p),q),q,q,q))
x=this.b
if(x!=null)o.push(C.ao(8,p.chF(x),q,q,10,10,q,q))
return new C.e9(new C.am(A.a0,q,A.b4,A.t,o,q),p.d)},
$S:240}
B.ebX.prototype={
$1(d){var x=this.a
x.dx=!0
x.go=x.z
x.at=x.ax=x.ay=null},
$S:255}
B.ebY.prototype={
$1(d){var x,w,v=this.a
if(d.w>=2)v.z=A.i.D(v.go*d.d,0.8,16)
else{x=57.2958/(v.gXN()*v.z)
w=d.a
v.y=v.y-w.a*x
v.x=A.i.D(v.x+w.b*x,-85,85)}},
$S:218}
B.ebW.prototype={
$1(d){var x,w,v=this.a
v.dx=!1
x=57.2958/(v.gXN()*v.z)
w=d.a.a
v.Q=A.i.D(-w.a*x,-160,160)
v.as=A.i.D(w.b*x,-100,100)},
$S:590}
B.ebZ.prototype={
$1(d){var x=this.a,w=x.chI(d.b)
if(w!=null)x.l(new B.ebQ(x,w))
else x.l(new B.ebR(x))},
$S:57}
B.ebQ.prototype={
$0(){return this.a.aDD(this.b)},
$S:0}
B.ebR.prototype={
$0(){return this.a.fx=null},
$S:0}
B.ec9.prototype={
$0(){var x=this.a
x.e.bM(0,A.ck)
x.l(new B.ebV(x,this.b))},
$S:0}
B.ebV.prototype={
$0(){var x=this.a
x.id=D.a7G
x.aDD(this.b)},
$S:0}
B.ecd.prototype={
$0(){var x=this.a
return x.l(new B.ec6(x))},
$S:0}
B.ec6.prototype={
$0(){var x=this.a
x.fx=null
x.awR(15,x.y,1)},
$S:0}
B.ece.prototype={
$0(){var x=this.a
return x.l(new B.ec5(x,this.b))},
$S:0}
B.ec5.prototype={
$0(){var x=this.b.b
return this.a.awR(x.a,x.b,x.c)},
$S:0}
B.ecf.prototype={
$0(){var x=this.a,w=x.r
if(w!=null)x.l(new B.ec4(x,w))},
$S:0}
B.ec4.prototype={
$0(){var x=this.b.a
return this.a.aDD(x[A.cV.av(x.length)])},
$S:0}
B.ecg.prototype={
$1(d){var x=this.a
return x.l(new B.ec3(x,d))},
$S:6}
B.ec3.prototype={
$0(){var x=this.a
x.ay=null
x.z=this.b},
$S:0}
B.ech.prototype={
$1(d){var x=this.a
return x.l(new B.ec2(x,d))},
$S:6}
B.ec2.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.eci.prototype={
$1(d){var x=this.a
return x.l(new B.ec1(x,d))},
$S:6}
B.ec1.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.ecj.prototype={
$0(){var x=this.a
return x.l(new B.ec0(x))},
$S:0}
B.ec0.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.eck.prototype={
$0(){var x=this.a
return x.l(new B.ec_(x))},
$S:0}
B.ec_.prototype={
$0(){var x=this.a
return x.CW=!x.CW},
$S:0}
B.eca.prototype={
$0(){var x=this.a
return x.l(new B.ebU(x))},
$S:0}
B.ebU.prototype={
$0(){var x=this.a
return x.cx=!x.cx},
$S:0}
B.ecb.prototype={
$0(){var x=this.a
return x.l(new B.ebT(x))},
$S:0}
B.ebT.prototype={
$0(){var x=this.a
return x.cy=!x.cy},
$S:0}
B.ecc.prototype={
$0(){var x=this.a
return x.l(new B.ebS(x))},
$S:0}
B.ebS.prototype={
$0(){var x=this.a
return x.db=!x.db},
$S:0}
B.ebE.prototype={
$2(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.aXJ,x,x,x),A.rN,C.c(e,x,2,A.a2,x,x,x,A.Xn,x,x,x)],y.p),A.B,x,A.e,A.h,0,A.p),1)},
$S:112}
B.ebD.prototype={
$0(){var x=this.a
return x.l(new B.ebC(x))},
$S:0}
B.ebC.prototype={
$0(){return this.a.fx=null},
$S:0}
B.drf.prototype={
$0(){var x=null,w=C.h_(x,A.cL,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.C,x,x,!0,x,x,x,x,x,D.dkF,x,x),this.a),A.a8,A.cd,x,A.e4,A.ce)
w.eL()
return w},
$S:273}
B.drg.prototype={
$2(d,e){var x,w,v,u=this,t=Math.sin(d),s=Math.cos(d),r=e-u.a,q=Math.sin(r),p=Math.cos(r)
r=u.b
x=u.c
if(r*t+x*s*p<0)return null
w=u.d
v=u.e
return new C.r(w.a+v*s*q,w.b-v*(x*t-r*s*p))},
$S:2063}
B.fCu.prototype={
$0(){return D.e5S},
$S:z+7}
B.fCv.prototype={
$0(){return D.euN},
$S:z+8}
B.fCw.prototype={
$0(){return D.e5U},
$S:z+9}
B.fCx.prototype={
$0(){return D.dXY},
$S:z+10}
B.fCy.prototype={
$0(){return D.e5R},
$S:z+11}
B.fCz.prototype={
$0(){return D.esU},
$S:z+12}
B.fCA.prototype={
$0(){return D.esS},
$S:z+13}
B.eZR.prototype={
$1(d){},
$S:z+1}
B.eZS.prototype={
$1(d){},
$S:75}
B.eZO.prototype={
$0(){return C.a8(this.a,!1).hZ()},
$S:0}
B.eZP.prototype={
$0(){var x=this.a
return x.l(new B.eZN(x))},
$S:0}
B.eZN.prototype={
$0(){var x=this.a
return x.d=A.o.F(x.gaWO()+1,16)},
$S:0}
B.eZQ.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=y.p,k=C.a([],l)
for(x=$.hWQ(),w=m*1.15,v=y.O,u=0;u<7;++u){t=x[u]
s=Math.max(w,140)
r=new C.aP(18,18)
q=t.d
p=new C.ax(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.bw0],v)
k.push(C.aA(n,C.p(n,C.w(C.a([C.V(t.c,q,n,n,n,30),A.N,C.c(t.a,n,2,n,n,n,n,D.fOG,A.K,n,n),A.cQ,C.c(t.b,n,2,n,n,n,n,D.fUm,A.K,n,n)],l),A.l,n,A.bb,A.h,0,A.p),A.f,n,n,new C.o(n,n,new C.bE(p,p,p,p),new C.bc(r,r,r,r),n,new C.a6(A.aw,A.aD,A.w,o,n,n),A.m),n,s,n,n,A.cu,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.eZM(d,t),n,n,n,n,n,n,!1,A.a4))}return C.c_(A.fX,k,A.br,n,10,10)},
$S:166}
B.eZM.prototype={
$0(){return C.a8(this.a,!1).ca(C.e7(new B.eZL(this.b),!1,null,y.H))},
$S:0}
B.eZL.prototype={
$1(d){return this.a.e.$0()},
$S:43}
B.eSd.prototype={
$0(){var x=this.a
x.Q=x.z=this.b
if(x.w<2.2)x.w=2.6},
$S:0}
B.eSo.prototype={
$0(){return B.uT(this.b,this.a.d,"solar-system")},
$S:0}
B.eSp.prototype={
$2(d,e){var x,w=null,v=this.a,u=new C.av(e.b,e.d)
v.ch=u
u=C.a([C.aA(A.c0,C.b4(w,w,w,new B.bwT(v,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eSl(v),new B.eSm(v),w,w,w,w,w,w,w,new B.eSn(v),w,w,w,!1,A.a4)],y.p)
x=this.b
if(x!=null)u.push(C.ao(8,v.chK(x),w,w,10,10,w,w))
return new C.e9(new C.am(A.a0,w,A.b4,A.t,u,w),v.d)},
$S:240}
B.eSl.prototype={
$1(d){var x=this.a
x.y=x.w
x.Q=null},
$S:255}
B.eSm.prototype={
$1(d){var x=this.a
if(d.w>=2)x.w=A.i.D(x.y*d.d,0.5,9)
else x.x=x.x.a7(0,d.a)},
$S:218}
B.eSn.prototype={
$1(d){var x=this.a,w=x.chN(d.b)
if(w!=null)x.b42(w)},
$S:57}
B.eSq.prototype={
$0(){var x=this.a
return x.l(new B.eSk(x))},
$S:0}
B.eSk.prototype={
$0(){var x=this.a
x.z=x.Q=null
x.x=A.J
x.w=1},
$S:0}
B.eSr.prototype={
$0(){return this.a.b42(this.b)},
$S:0}
B.eSs.prototype={
$1(d){var x=this.a
return x.l(new B.eSj(x,d))},
$S:6}
B.eSj.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eSt.prototype={
$1(d){var x=this.a
return x.l(new B.eSi(x,d))},
$S:6}
B.eSi.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eSu.prototype={
$0(){var x=this.a
return x.l(new B.eSh(x))},
$S:0}
B.eSh.prototype={
$0(){var x=this.a
return x.as=!x.as},
$S:0}
B.eSv.prototype={
$0(){var x=this.a
return x.l(new B.eSg(x))},
$S:0}
B.eSg.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
B.eSw.prototype={
$0(){var x=this.a
return x.l(new B.eSf(x))},
$S:0}
B.eSf.prototype={
$0(){var x=this.a
return x.ax=!x.ax},
$S:0}
B.eSx.prototype={
$0(){var x=this.a
return x.l(new B.eSe(x))},
$S:0}
B.eSe.prototype={
$0(){var x=this.a
return x.ay=!x.ay},
$S:0}
B.eSc.prototype={
$1(d){var x
if(d>=730){x=d>8000?0:1
x=A.i.a5(d/365.25,x)+" Earth years"}else x=A.i.a5(d,0)+" Earth days"
return x},
$S:309}
B.eSb.prototype={
$2(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.aXJ,x,x,x),A.rN,C.c(e,x,2,A.a2,x,x,x,A.Xn,x,x,x)],y.p),A.B,x,A.e,A.h,0,A.p),1)},
$S:112}
B.eSa.prototype={
$0(){var x=this.a
return x.l(new B.eS9(x))},
$S:0}
B.eS9.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
B.fjW.prototype={
$0(){var x=null,w=C.h_(x,A.cL,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.C,x,x,!0,x,x,x,x,x,K.TB,x,x),this.a),A.a8,A.cd,x,A.e4,A.ce)
w.eL()
return w},
$S:273}
B.fjX.prototype={
$1(d){return d.c>0},
$S:z+2}
B.fjY.prototype={
$1(d){return d.c>0},
$S:z+2}
B.eco.prototype={
$0(){},
$S:0}
B.ecR.prototype={
$1(d){return d!=null},
$S:418}
B.ecD.prototype={
$0(){var x=this.a
return x.l(new B.ecu(x,this.b))},
$S:0}
B.ecu.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.ecE.prototype={
$0(){var x=this.a
return x.l(new B.ect(x))},
$S:0}
B.ect.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ecF.prototype={
$0(){var x=this.a
return x.l(new B.ecC(x))},
$S:0}
B.ecC.prototype={
$0(){return this.a.f=!0},
$S:0}
B.ecJ.prototype={
$0(){var x=this.a
return x.l(new B.ecB(x))},
$S:0}
B.ecB.prototype={
$0(){var x=this.a
return x.r=!x.r},
$S:0}
B.ecK.prototype={
$1(d){var x=this.a
return x.l(new B.ecA(x,d))},
$S:6}
B.ecA.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ecL.prototype={
$0(){var x=this.a
return x.l(x.gcG0())},
$S:0}
B.ecM.prototype={
$1(d){var x=this.a
return x.l(new B.ecz(x,d))},
$S:6}
B.ecz.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.ecN.prototype={
$1(d){var x=this.a
return x.l(new B.ecy(x,d))},
$S:6}
B.ecy.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.ecO.prototype={
$1(d){var x=this.a
return x.l(new B.ecx(x,d))},
$S:6}
B.ecx.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.ecP.prototype={
$1(d){var x=this.a
return x.l(new B.ecw(x,d))},
$S:6}
B.ecw.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.ecQ.prototype={
$0(){var x=this.a
return x.l(new B.ecv(x))},
$S:0}
B.ecv.prototype={
$0(){return this.a.ay=4},
$S:0}
B.ecG.prototype={
$0(){var x=this.a
return x.l(new B.ecs(x))},
$S:0}
B.ecs.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.ecH.prototype={
$0(){var x=this.a
return x.l(new B.ecr(x))},
$S:0}
B.ecr.prototype={
$0(){return this.a.ay=9},
$S:0}
B.ecI.prototype={
$0(){var x=this.a
return x.l(new B.ecq(x))},
$S:0}
B.ecq.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.ecn.prototype={
$2(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a1.b/5,g=a1.d,f=g-60,e=y.p,d=C.a([C.bT(0,new C.bP(new C.o(D.buc,i,i,C.m(20),i,i,A.m),A.bm,i,i),0,0,0)],e)
for(x=this.a,w=x.as,v=y.V,u=h/2,g-=f,t=f-54-22,s=x.z,r=0;r<5;++r){q=r*h
p=D.AH[r]
o=C.b2(p.d)
p=C.w(C.a([C.c(p.a,i,i,i,i,i,i,new C.F(!0,o,i,i,i,i,12.5,A.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),C.c(C.v(D.AH[r].b)+" m/s\xb2",i,i,i,i,i,i,D.fTD,i,i,i)],e),A.l,i,A.e,A.h,0,A.p)
o=q+u
n=C.p(i,i,A.f,A.dz,i,i,i,i,i,i,i,i,i,1)
m=s[r]
l=x.f?C.V(L.DD,C.b2(D.AH[r].d),i,i,i,22):C.p(i,i,A.f,i,i,new C.o(C.b2(D.AH[r].d),i,i,i,C.a([new C.aa(0,A.H,C.b2(D.AH[r].d).j(0.6),A.J,10)],v),i,A.a6),i,22,i,i,i,i,i,22)
k=C.p(i,i,A.f,C.b2(D.AH[r].d).j(0.6),i,i,i,3,i,A.fD,i,i,i,i)
j=w[r]
if(j==null)j=x.x?"\u2026":"\u2014"
else j=A.i.a5(j,2)+" s"
j=C.c(j,i,i,i,i,i,i,A.uD,i,i,i)
A.d.u(d,C.a([new C.cR(q,8,i,i,h,i,p,i),new C.cR(o-0.5,54,i,g,i,i,n,i),new C.cR(o-11,54+t*(m/20),i,i,i,i,l,i),new C.cR(q,i,i,8,h,i,C.w(C.a([k,A.at,j,C.c(w[r]==null?"":"to land",i,i,i,i,i,i,D.fL0,i,i,i)],e),A.l,i,A.e,A.h,0,A.p),i)],e))}if(!x.x&&A.d.cw(w,new B.ecm()))d.push(D.bgl)
return new C.am(A.a0,i,A.ab,A.t,d,i)},
$S:61}
B.ecm.prototype={
$1(d){return d==null},
$S:418}
B.ecp.prototype={
$2(d,e){var x,w=null,v=this.a,u=this.b,t=u.b,s=v.at*t/9.81,r=A.i.D(Math.log(s+1)/Math.log(v.at*274/9.81+1),0.02,1),q=C.m(8)
q=C.p(w,w,A.f,w,w,new C.o(A.c.j(0.05),w,w,q,w,w,A.m),w,26,w,w,w,w,w,w)
u=u.c
u=C.cY(w,w,w,w,A.aZ,new C.o(w,w,w,C.m(8),w,new C.a6(A.a5,A.a9,A.w,C.a([C.b2(u).j(0.9),C.b2(u).j(0.4)],y.O),w,w),A.m),A.id,w,26,w,w,w,w,w,e.b*r)
x=s<100?A.i.a5(s,1):B.HY(s)
v=v.ax*9.81/t
v=v<10?A.i.a5(v,2):A.i.a5(v,0)
return new C.am(A.a0,w,A.ab,A.t,C.a([q,u,C.ao(w,C.c(x+" kg  \xb7  jump "+v+" m",w,w,w,w,w,w,D.fRM,w,w,w),w,w,8,w,4,w)],y.p),w)},
$S:61}
B.ecl.prototype={
$2(d,e){var x,w=null,v=e.b,u=e.d,t=Math.min(v,u),s=this.a,r=s.ch,q=s.cx,p=s.db,o=s.CW||p.length!==0
o=C.b4(w,w,w,new B.bf_(new C.r(v/2,u/2+u*0.05),t*0.18/6371*(2/r),q,p,o,w),A.aA)
p=A.v.j(0.55)
q=C.m(14)
r=C.K(A.by,A.r,1)
v=s.dx
u=v.length===0?"Set a speed and press Fire!":v
if(A.a.q(v,"forever")||A.a.q(v,"again"))v=A.bf
else v=A.a.q(v,"escapes")?A.aH:A.c
v=C.c(u,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,13.5,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
u=A.i.a5(Math.sqrt(58.86870477034412),1)
t=A.i.a5(Math.sqrt(117.73740954068823),1)
s=s.CW?"  Height now: "+B.HY(A.i.D(s.cx.gcL()-6371,0,9e9))+" km":""
x=y.p
return new C.am(A.a0,w,A.b4,A.t,C.a([o,C.ao(w,C.p(w,C.w(C.a([v,A.bs,C.c("Circular orbit here: "+u+" km/s.  Escape speed: "+t+" km/s."+s,w,w,w,w,w,w,I.aZB,w,w,w)],x),A.B,w,A.e,A.P,0,A.p),A.f,w,w,new C.o(p,w,r,q,w,w,A.m),w,w,w,w,A.bS,w,w,w),w,w,12,12,8,w)],x),w)},
$S:61}
B.eKW.prototype={
$0(){return B.uT(this.b,this.a.d,"size-compare")},
$S:0}
B.eKX.prototype={
$0(){var x=this.a
return x.l(new B.eKV(x,this.b))},
$S:0}
B.eKV.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eKY.prototype={
$0(){var x=this.a
return x.l(new B.eKU(x,this.b))},
$S:0}
B.eKU.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.fi4.prototype={
$3(d,e,f){var x,w,v=this.a
$.T()
x=C.L()
x.r=f.j(0.2).gp(0)
x.y=new C.h2(A.H,Math.max(2,e*0.18))
v.O(d,e*1.12,x)
x=C.L()
w=C.ap(f,A.v,0.6)
w.toString
x.san(new C.bU(N.BZ,0.5,A.w,null,0,C.a([A.c,f,w],y.O),T.Ta,null).az(0,C.bY(d,e)))
v.O(d,e,x)},
$S:2064}
B.dTB.prototype={
$1(d){return d.e<=0},
$S:z+14}
B.dTp.prototype={
$1(d){return d.b},
$S:z+15}
B.dTq.prototype={
$0(){return B.uT(this.b,this.a.d,"black-hole")},
$S:0}
B.dTr.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q=this.a,p=new C.av(e.b,e.d)
q.Q=p
p=C.aA(A.c0,C.b4(r,r,r,new B.bek(q,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dTn(q),r,r,r,r,r,r,r,r,r,new B.dTo(q),r,r,r,r,!1,A.a4)
x=A.v.j(0.55)
w=C.m(14)
v=C.K(A.by,A.r,1)
u=q.r
if(u<1000)u=A.i.a5(u,u<10?1:0)+" Suns"
else u=B.fRR(u)+" Suns"
u=q.ahw("MASS",u)
t=2.953*q.r
s=y.p
s=C.a([p,C.ao(r,C.p(r,C.A(C.a([u,q.ahw("EDGE WIDTH",(t<100?A.i.a5(t,1):B.HY(t))+" km"),q.ahw("TIME",A.i.a5(this.b*100,0)+"%"),q.ahw("EATEN",""+q.as)],s),A.l,r,A.e,A.h,0,r,r),A.f,r,r,new C.o(x,r,v,w,r,r,A.m),r,r,r,r,A.bS,r,r,r),r,r,10,10,8,r)],s)
if(q.z.length===0&&q.as===0)s.push(D.eNM)
return new C.e9(new C.am(A.a0,r,A.b4,A.t,s,r),q.d)},
$S:240}
B.dTo.prototype={
$1(d){return this.a.b43(d.b)},
$S:24}
B.dTn.prototype={
$1(d){if(A.cV.ai()<0.12)this.a.b43(d.b)},
$S:19}
B.dTt.prototype={
$1(d){var x=this.a
return x.l(new B.dTm(x,d))},
$S:6}
B.dTm.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dTu.prototype={
$0(){var x=this.a
return x.l(new B.dTl(x))},
$S:0}
B.dTl.prototype={
$0(){return this.a.r=10},
$S:0}
B.dTv.prototype={
$0(){var x=this.a
return x.l(new B.dTk(x))},
$S:0}
B.dTk.prototype={
$0(){return this.a.r=21},
$S:0}
B.dTw.prototype={
$0(){var x=this.a
return x.l(new B.dTj(x))},
$S:0}
B.dTj.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dTx.prototype={
$0(){var x=this.a
return x.l(new B.dTi(x))},
$S:0}
B.dTi.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dTy.prototype={
$0(){var x=this.a
return x.l(new B.dTh(x))},
$S:0}
B.dTh.prototype={
$0(){var x=this.a
return x.w=!x.w},
$S:0}
B.dTz.prototype={
$0(){var x=this.a
return x.l(new B.dTg(x))},
$S:0}
B.dTg.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.dTA.prototype={
$0(){var x=this.a
return x.l(new B.dTf(x))},
$S:0}
B.dTf.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dTs.prototype={
$0(){var x=this.a
return x.l(new B.dTe(x))},
$S:0}
B.dTe.prototype={
$0(){var x=this.a
A.d.a6(x.z)
x.as=0},
$S:0}
B.eb4.prototype={
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
e[s]=new C.r(q,j)
r=d[s]
d[s]=new C.r(r.a+q*t,r.b+j*t)}},
$S:2065}
B.eaV.prototype={
$0(){return B.uT(this.b,this.a.d,"galaxy")},
$S:0}
B.eaW.prototype={
$0(){var x=this.a
return x.l(new B.eaU(x,this.b))},
$S:0}
B.eaU.prototype={
$0(){var x,w=this.a
w.ch=!1
x=this.b.a
w.Q=x
w.w=x==="barred"?1:0
w.a1d()},
$S:0}
B.eaX.prototype={
$0(){var x=this.a
return x.l(new B.eaT(x))},
$S:0}
B.eaT.prototype={
$0(){var x=this.a
if(x.Q==="elliptical"){x.Q="spiral"
x.a1d()}x.cFS()},
$S:0}
B.eaY.prototype={
$1(d){var x=this.a
return x.l(new B.eaS(x,d))},
$S:6}
B.eaS.prototype={
$0(){var x=this.a
x.f=A.i.S(this.b)
x.a1d()},
$S:0}
B.eaZ.prototype={
$1(d){var x=this.a
return x.l(new B.eaR(x,d))},
$S:6}
B.eaR.prototype={
$0(){var x=this.a
x.r=this.b
x.a1d()},
$S:0}
B.eb_.prototype={
$1(d){var x=this.a
return x.l(new B.eaQ(x,d))},
$S:6}
B.eaQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eb0.prototype={
$1(d){var x=this.a
return x.l(new B.eaP(x,d))},
$S:6}
B.eaP.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.eb1.prototype={
$0(){var x=this.a
return x.l(new B.eaO(x))},
$S:0}
B.eaO.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.eb2.prototype={
$0(){var x=this.a
return x.l(new B.eaN(x))},
$S:0}
B.eaN.prototype={
$0(){var x=this.a
return x.z=!x.z},
$S:0}
B.eb3.prototype={
$0(){var x=this.a
return x.l(new B.eaM(x))},
$S:0}
B.eaM.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dop.prototype={
$6(d,e,f,g,h,i){return g.a7(0,new C.r((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:2066}
B.eHY.prototype={
$0(){return B.uT(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eHZ.prototype={
$0(){var x=this.a
return x.l(new B.eHX(x))},
$S:0}
B.eHX.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eI_.prototype={
$0(){var x=this.a
return x.l(new B.eHW(x))},
$S:0}
B.eHW.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eI0.prototype={
$0(){var x=this.a
return x.l(new B.eHV(x))},
$S:0}
B.eHV.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.eI1.prototype={
$0(){var x=this.a
return x.l(new B.eHU(x))},
$S:0}
B.eHU.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.eI2.prototype={
$1(d){var x=this.a
return x.l(new B.eHT(x,d))},
$S:6}
B.eHT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eI3.prototype={
$1(d){var x=this.a
return x.l(new B.eHS(x,d))},
$S:6}
B.eHS.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eI4.prototype={
$1(d){var x=this.a
return x.l(new B.eHR(x,d))},
$S:6}
B.eHR.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eI5.prototype={
$1(d){var x=this.a
return x.l(new B.eHQ(x,d))},
$S:6}
B.eHQ.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var x=B.aPU.prototype
x.bCk=x.t
x=B.aHZ.prototype
x.byK=x.t
x=B.aPh.prototype
x.bBI=x.t
x=B.aPi.prototype
x.bBJ=x.t
x=B.aPj.prototype
x.bBK=x.t
x=B.aPQ.prototype
x.bCg=x.t
x=B.aPT.prototype
x.bCj=x.t
x=B.aOP.prototype
x.bBd=x.t
x=B.aPf.prototype
x.bBF=x.t
x=B.aPO.prototype
x.bCe=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.auT.prototype,"gchD","chE",0)
x(v,"gcVD","a6u",4)
x(v=B.aGO.prototype,"gc86","b0c",0)
w(v,"gchG","chH",5)
x(v,"gbVB","bVC",0)
x(v=B.aGP.prototype,"gcG0","cG1",0)
x(v,"gchL","chM",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(C.aG,[B.bq5,B.Ry,B.nZ,B.ciy,B.fvT,B.adi,B.adj,B.vY,B.QF,B.yV,B.QE,B.byS,B.Rd,B.ah9])
w(C.af,[B.Y3,B.Yf,B.Xd,B.Yi,B.Y2,B.Xe,B.XW,B.Wg,B.Xb,B.XR])
w(C.ah,[B.aPU,B.aHZ,B.aPh,B.bpo,B.aPT,B.aPj,B.aPQ,B.aOP,B.aPf,B.aPO])
v(B.bpc,B.aPU)
w(C.hq,[B.eSY,B.eSW,B.eSK,B.eSO,B.eSJ,B.eSP,B.eSQ,B.eSU,B.hfD,B.cEu,B.h10,B.ciA,B.ciz,B.fHh,B.fHi,B.h5p,B.cpH,B.cpw,B.cpE,B.ebN,B.ebO,B.ebH,B.ebG,B.ebX,B.ebY,B.ebW,B.ebZ,B.ecg,B.ech,B.eci,B.eZR,B.eZS,B.eZL,B.eSl,B.eSm,B.eSn,B.eSs,B.eSt,B.eSc,B.fjX,B.fjY,B.ecR,B.ecK,B.ecM,B.ecN,B.ecO,B.ecP,B.ecm,B.fi4,B.dTB,B.dTp,B.dTo,B.dTn,B.dTt,B.eb4,B.eaY,B.eaZ,B.eb_,B.eb0,B.dop,B.eI2,B.eI3,B.eI4,B.eI5])
w(C.iV,[B.eSX,B.eSz,B.eSy,B.eSI,B.eSR,B.eSH,B.eSS,B.eSG,B.eST,B.eSF,B.eSE,B.eSV,B.eSD,B.eSL,B.eSC,B.eSM,B.eSB,B.eSN,B.eSA,B.cEv,B.cEw,B.hfC,B.cEr,B.cEq,B.cEx,B.cEs,B.cEt,B.fAS,B.h6I,B.cpL,B.cpG,B.cpF,B.cpI,B.cpJ,B.cpK,B.cpu,B.cpx,B.cpy,B.cpt,B.cpz,B.cps,B.cpA,B.cpr,B.cpB,B.cpq,B.cpC,B.cpp,B.cpD,B.cpo,B.ebM,B.ebL,B.ebK,B.ebP,B.ebI,B.ebJ,B.ebF,B.ec7,B.ebQ,B.ebR,B.ec9,B.ebV,B.ecd,B.ec6,B.ece,B.ec5,B.ecf,B.ec4,B.ec3,B.ec2,B.ec1,B.ecj,B.ec0,B.eck,B.ec_,B.eca,B.ebU,B.ecb,B.ebT,B.ecc,B.ebS,B.ebD,B.ebC,B.drf,B.fCu,B.fCv,B.fCw,B.fCx,B.fCy,B.fCz,B.fCA,B.eZO,B.eZP,B.eZN,B.eZM,B.eSd,B.eSo,B.eSq,B.eSk,B.eSr,B.eSj,B.eSi,B.eSu,B.eSh,B.eSv,B.eSg,B.eSw,B.eSf,B.eSx,B.eSe,B.eSa,B.eS9,B.fjW,B.eco,B.ecD,B.ecu,B.ecE,B.ect,B.ecF,B.ecC,B.ecJ,B.ecB,B.ecA,B.ecL,B.ecz,B.ecy,B.ecx,B.ecw,B.ecQ,B.ecv,B.ecG,B.ecs,B.ecH,B.ecr,B.ecI,B.ecq,B.eKW,B.eKX,B.eKV,B.eKY,B.eKU,B.dTq,B.dTm,B.dTu,B.dTl,B.dTv,B.dTk,B.dTw,B.dTj,B.dTx,B.dTi,B.dTy,B.dTh,B.dTz,B.dTg,B.dTA,B.dTf,B.dTs,B.dTe,B.eaV,B.eaW,B.eaU,B.eaX,B.eaT,B.eaS,B.eaR,B.eaQ,B.eaP,B.eb1,B.eaO,B.eb2,B.eaN,B.eb3,B.eaM,B.eHY,B.eHZ,B.eHX,B.eI_,B.eHW,B.eI0,B.eHV,B.eI1,B.eHU,B.eHT,B.eHS,B.eHR,B.eHQ])
w(C.lM,[B.bwW,B.bbQ,B.bjU,B.bwT,B.bf_,B.bwq,B.bek,B.bjL,B.bvC])
w(C.aw,[B.baX,B.e3,B.fj,B.baY,B.fJ,B.Gt])
w(C.iW,[B.h6J,B.h6K,B.cpv,B.ec8,B.ebE,B.drg,B.eZQ,B.eSp,B.eSb,B.ecn,B.ecp,B.ecl,B.dTr])
v(B.auT,B.aHZ)
v(B.aPi,B.aPh)
v(B.aGO,B.aPi)
v(B.bCq,B.aPT)
v(B.bpb,B.bCq)
v(B.bCc,B.aPj)
v(B.aGP,B.bCc)
v(B.bCo,B.aPQ)
v(B.bp8,B.bCo)
v(B.bC3,B.aOP)
v(B.bnK,B.bC3)
v(B.bCb,B.aPf)
v(B.boe,B.bCb)
v(B.bCn,B.aPO)
v(B.bp7,B.bCn)
x(B.aPU,C.cj)
x(B.aHZ,C.cj)
x(B.aPh,C.cj)
x(B.aPi,B.nZ)
x(B.aPj,C.cj)
x(B.bCc,B.nZ)
x(B.aPQ,C.cj)
x(B.bCo,B.nZ)
x(B.aPT,C.cj)
x(B.bCq,B.nZ)
x(B.aOP,C.cj)
x(B.bC3,B.nZ)
x(B.aPf,C.cj)
x(B.bCb,B.nZ)
x(B.aPO,C.cj)
x(B.bCn,B.nZ)})()
C.jd(b.typeUniverse,JSON.parse('{"Y3":{"af":[],"x":[]},"bpc":{"ah":["Y3"]},"bwW":{"aC":[]},"baX":{"aw":[],"x":[]},"e3":{"aw":[],"x":[]},"fj":{"aw":[],"x":[]},"baY":{"aw":[],"x":[]},"fJ":{"aw":[],"x":[]},"Gt":{"aw":[],"x":[]},"Yf":{"af":[],"x":[]},"bbQ":{"aC":[]},"auT":{"ah":["Yf"]},"Xd":{"af":[],"x":[]},"aGO":{"ah":["Xd"]},"bjU":{"aC":[]},"Yi":{"af":[],"x":[]},"bpo":{"ah":["Yi"]},"Y2":{"af":[],"x":[]},"Xe":{"af":[],"x":[]},"XW":{"af":[],"x":[]},"bpb":{"ah":["Y2"]},"bwT":{"aC":[]},"aGP":{"ah":["Xe"]},"bf_":{"aC":[]},"bp8":{"ah":["XW"]},"bwq":{"aC":[]},"Wg":{"af":[],"x":[]},"Xb":{"af":[],"x":[]},"XR":{"af":[],"x":[]},"bnK":{"ah":["Wg"]},"bek":{"aC":[]},"boe":{"ah":["Xb"]},"bjL":{"aC":[]},"bp7":{"ah":["XR"]},"bvC":{"aC":[]}}'))
C.RT(b.typeUniverse,JSON.parse('{"nZ":1}'))
var y=(function rtii(){var x=C.as
return{I:x("vj"),V:x("N<aa>"),O:x("N<u>"),l:x("N<C5>"),y:x("N<ai<C5>>"),f:x("N<ai<ai<H>>>"),b:x("N<ai<H>>"),x:x("N<ai<G>>"),g:x("N<r>"),E:x("N<CM>"),v:x("N<fZ>"),L:x("N<+(n,n)>"),c:x("N<+(n,n,a_)>"),S:x("N<d4>"),s:x("N<n>"),X:x("N<KO>"),h:x("N<adi>"),a:x("N<dF>"),p:x("N<x>"),u:x("N<li>"),A:x("N<Rd>"),Z:x("N<Ry>"),G:x("N<bq5>"),q:x("N<ah9>"),n:x("N<H>"),t:x("N<G>"),z:x("cB<ah<af>>"),j:x("ai<@>"),d:x("a9<n,@>"),m:x("im"),P:x("cp"),U:x("adj"),D:x("dF"),J:x("l2"),w:x("P"),i:x("H"),r:x("G"),W:x("ox?"),B:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bfU=new C.cn(A.z,null,null,A.ahB,null)
D.hfk=new C.D("Press Drop! and watch them fall from 20 metres.",null,A.kC,null,A.K,null,null,null,null,null,null,null)
D.eGS=new C.C(A.o8,D.hfk,null)
D.bgl=new C.cn(A.z,null,null,D.eGS,null)
D.fUL=new C.F(!0,A.jX,null,null,null,null,18,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hkk=new C.D("Draw anywhere",null,D.fUL,null,null,null,null,null,null,null,null,null)
D.bgq=new C.cn(A.z,null,null,D.hkk,null)
D.bj3=new C.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.bjC=new C.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.ZY=new C.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bkH=new C.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bkM=new C.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bl7=new C.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.bm1=new C.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.bnP=new C.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bo5=new C.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.CA=new C.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.bqV=new C.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.brc=new C.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.bri=new C.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.btC=new C.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.btG=new C.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.buc=new C.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.bur=new C.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.Hc=new C.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.alx=new C.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bw0=new C.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bw4=new C.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bwp=new C.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.bwA=new C.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.am0=new C.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bxy=new C.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.a0N=new C.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.a0S=new C.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.bAn=new C.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.anw=new C.R(0,0,9,0)
D.bFU=new C.R(10,10,10,6)
D.ao1=new C.R(14,10,8,12)
D.bLd=new C.R(4,4,6,2)
D.bUl=new C.a_(62931,"MaterialIcons",!1)
D.arN=new C.a_(62951,"MaterialIcons",!1)
D.bUD=new C.a_(63070,"MaterialIcons",!1)
D.xq=new C.a_(63128,"MaterialIcons",!1)
D.IG=new C.a_(63726,"MaterialIcons",!1)
D.asM=new C.a_(983415,"MaterialIcons",!1)
D.bXj=new C.a_(984561,"MaterialIcons",!1)
D.bXS=new C.ae(V.lf,24,A.aQ,null,null,null)
D.bZe=new C.ae(A.np,21,A.ac,null,null,null)
D.aul=new C.ae(A.eD,19,null,null,null,null)
D.p8=new C.ae(A.tT,21,A.ac,null,null,null)
D.c6F=new C.ae(A.QA,46,A.aH,null,null,null)
D.c6X=new C.ae(A.eO,20,A.aF,null,null,null)
D.c7Z=new C.ae(A.m8,null,A.aF,null,null,null)
D.cfv=x([0,2,4,6,7,9,11],y.t)
D.cxF=x([255],y.t)
D.cAR=x([A.bM,A.f3],y.O)
D.cDN=x([33,249,4,5],y.t)
D.cDO=x([33,255,11],y.t)
D.bnG=new C.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cGU=x([D.bnG,A.dl],y.O)
D.cOB=x([A.d_,G.nN,A.iu,G.ai3,A.d_,A.iu],y.O)
D.d5v=x([3,1,0,0,0],y.t)
D.d5V=x([0.78,1],y.n)
D.aCq=x([0,2,4,7,9,12,14,16],y.t)
D.d6c=x([A.eJ,A.oM],y.O)
D.d6v=x([A.a_,A.fy],y.O)
D.aCx=x([A.c5,A.aH,A.bu,A.bj,A.bf],y.O)
D.daz=x([A.bw,A.bd,A.bj,A.bf],y.O)
D.brR=new C.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.q)
D.daC=x([D.brR,G.alf],y.O)
D.dbF=x([A.bu,A.c5,A.aH],y.O)
D.dc6=x([0.93,0.975,1],y.n)
D.dcB=x([0,0.55,0.6],y.n)
D.blK=new C.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.dcL=x([A.v5,D.blK,A.ez],y.O)
D.bv4=new C.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.boH=new C.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.btv=new C.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.dcN=x([D.bv4,D.boH,D.btv],y.O)
D.dd8=x([A.as,A.fM,A.lV,A.ic,A.dD],y.O)
D.fcS=new C.y("solid","Solid")
D.f1V=new C.y("three","3D block")
D.f47=new C.y("neon","Neon tube")
D.f7j=new C.y("gradient","Gradient")
D.fd_=new C.y("sticker","Sticker")
D.de2=x([D.fcS,I.aUa,D.f1V,D.f47,D.f7j,D.fd_,I.aUc,U.W3],y.L)
D.de3=x([A.bu,A.aH,A.bf,A.c5,A.c,A.cW],y.O)
D.hp6=new B.yV("Moon",1737,4291941851)
D.hp3=new B.yV("Earth",6371,4281908728)
D.hp7=new B.yV("Neptune",24622,4284524026)
D.hp8=new B.yV("Saturn",58232,4294829706)
D.hp4=new B.yV("Jupiter",69911,4294677052)
D.hp9=new B.yV("Sun",696340,4294688548)
D.hpa=new B.yV("Sirius A",119e4,4290763774)
D.hp1=new B.yV("Arcturus",179e5,4294818420)
D.hp2=new B.yV("Betelgeuse",531e6,4294472049)
D.hp5=new B.yV("UY Scuti",667e6,4293870660)
D.Tp=x([D.hp6,D.hp3,D.hp7,D.hp8,D.hp4,D.hp9,D.hpa,D.hp1,D.hp2,D.hp5],C.as("N<yV>"))
D.fke=new C.b1("glow","Glow",A.In)
D.fh5=new C.b1("rainbow","Rainbow",A.m7)
D.fhx=new C.b1("stars","Stars",A.ih)
D.fgL=new C.b1("sparks","Sparks",A.eh)
D.fjh=new C.b1("fire","Fire",A.vB)
D.dep=x([D.fke,D.fh5,D.fhx,D.fgL,D.fjh],y.c)
D.deA=x([A.alZ,A.cW,A.de],y.O)
D.dfC=x([0.2,1],y.n)
D.dgP=x(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],y.s)
D.dhw=x([0,0.42,0.43,1],y.n)
D.aDy=x([0,2,4,7,9],y.t)
D.djC=x([A.cx,A.a_],y.O)
D.a7h=x(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],y.s)
D.fvJ=new C.d4(A.bq,A.J,4)
D.dkF=x([D.fvJ],y.S)
D.aDL=x([0,31,59,90,120,151,181,212,243,273,304,334],y.t)
D.bxs=new C.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.bz6=new C.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.dl5=x([D.a0N,D.bxs,D.bz6],y.O)
D.bk4=new C.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.dmR=x([D.Hc,D.bk4],y.O)
D.dn6=x([1.77,3.55,7.15,16.7],y.n)
D.doA=x([M.CR,A.lV],y.O)
D.byj=new C.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.bsk=new C.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.dpj=x([D.byj,D.bsk],y.O)
D.bsA=new C.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.bqH=new C.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.dpo=x([D.a0S,D.bsA,D.bqH],y.O)
D.dq3=x(["March","April","May","June","July","August","September","October","November","December","January","February"],y.s)
D.fcU=new C.y("spiral","Spiral")
D.eUF=new C.y("barred","Barred spiral")
D.f6g=new C.y("elliptical","Elliptical")
D.dqT=x([D.fcU,D.eUF,D.f6g],y.L)
D.hpb=new B.QF("Moon",1.62,0,4291941851)
D.hpc=new B.QF("Mars",3.71,0.01,4294472049)
D.hpd=new B.QF("Earth",9.81,1,4281908728)
D.hpf=new B.QF("Jupiter",24.79,1.4,4294677052)
D.hpe=new B.QF("Sun",274,2,4294688548)
D.AH=x([D.hpb,D.hpc,D.hpd,D.hpf,D.hpe],C.as("N<QF>"))
D.TK=x([0,2,4,5,7,9,11],y.t)
D.aEh=x([0,0.7,1],y.n)
D.du_=x([0,0.62,1],y.n)
D.duB=x([],y.y)
D.a7G=x([],y.h)
D.dv6=x([0,0.46,0.82],y.n)
D.dw6=x([0.9,0.97,1],y.n)
D.dwn=x([A.c5,A.cW,A.bu,A.bj],y.O)
D.dx9=x([M.CR,A.h_],y.O)
D.hp_=new B.vY("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.hp0=new B.vY("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.hoS=new B.vY("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.hoZ=new B.vY("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.hoX=new B.vY("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.hoT=new B.vY("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.hoY=new B.vY("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.hoU=new B.vY("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.hoW=new B.vY("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.hoV=new B.vY("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.Ey=x([D.hp_,D.hp0,D.hoS,D.hoZ,D.hoX,D.hoT,D.hoY,D.hoU,D.hoW,D.hoV],C.as("N<vY>"))
D.bt1=new C.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bq7=new C.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dxB=x([D.Hc,D.bt1,D.bq7,A.ajj],y.O)
D.dzp=x([A.hm,A.eW,A.aH,A.GW],y.O)
D.eXe=new C.y("Wide",1.7777777777777777)
D.fdZ=new C.y("Tall",0.5625)
D.a7Z=x([D.eXe,I.aTZ,D.fdZ],C.as("N<+(n,H)>"))
D.fdt=new C.y("type","Typewriter")
D.f54=new C.y("bounce","Bounce")
D.fep=new C.y("wave","Wave")
D.fbE=new C.y("neon","Neon flicker")
D.ffy=new C.y("zoom","Pop")
D.eVs=new C.y("drop","Drop in")
D.eQZ=new C.y("fly","Fly in")
D.fcX=new C.y("spin","Spin in")
D.f6M=new C.y("flip","Flip")
D.f85=new C.y("jelly","Jelly")
D.fcL=new C.y("shake","Shake")
D.f6N=new C.y("float","Float")
D.fbC=new C.y("pulse","Heartbeat")
D.fd2=new C.y("swing","Swing")
D.fch=new C.y("reveal","Reveal")
D.eXf=new C.y("blur","Zoom out")
D.f5U=new C.y("domino","Domino")
D.eWp=new C.y("spiral","Spiral in")
D.f8j=new C.y("cascade","Shine sweep")
D.fev=new C.y("wobble","Wobble")
D.f1i=new C.y("rise","Rise up")
D.f0v=new C.y("scatter","Scatter & gather")
D.dDr=x([D.fdt,D.f54,D.fep,D.fbE,I.aU4,D.ffy,I.aUb,D.eVs,D.eQZ,D.fcX,D.f6M,D.f85,D.fcL,D.f6N,D.fbC,D.fd2,D.fch,D.eXf,D.f5U,D.eWp,D.f8j,D.fev,D.f1i,D.f0v],y.L)
D.dDD=x([F.r2,A.NX],y.O)
D.EB=x([A.c5,A.bu,A.bf,A.aH,A.bj,A.c1,A.c,A.cW],y.O)
D.biZ=new C.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bnn=new C.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.dFk=x([D.biZ,G.ajO,D.bnn],y.O)
D.fge=new C.b1("drop","Drop",F.a53)
D.fgi=new C.b1("weight","Weight",A7.ath)
D.fjQ=new C.b1("cannon","Newton's cannon",A.asf)
D.dGB=x([D.fge,D.fgi,D.fjQ],y.c)
D.faL=new C.y("\ud83c\udf19","Midnight")
D.fa9=new C.y("\u2728","Starfield")
D.eS3=new C.y("\ud83c\udf0c","Aurora")
D.eXS=new C.y("\ud83c\udf05","Savanna sunset")
D.fag=new C.y("\ud83c\udf0a","Ocean waves")
D.eYG=new C.y("\ud83d\udd79\ufe0f","Neon grid")
D.f3A=new C.y("\ud83d\udcbb","Code rain")
D.f_K=new C.y("\ud83c\udf89","Confetti")
D.f2o=new C.y("\ud83c\udf86","Fireworks")
D.eTq=new C.y("\ud83e\udee7","Bubbles")
D.fdX=new C.y("\u2744\ufe0f","Snowfall")
D.eZo=new C.y("\ud83e\uddf6","Kente weave")
D.eUX=new C.y("\ud83d\udd2e","Bokeh lights")
D.f3q=new C.y("\ud83c\udf27\ufe0f","Rain")
D.eVA=new C.y("\ud83d\udd25","Fire")
D.f2M=new C.y("\ud83c\udfd4\ufe0f","Paper hills")
D.eZJ=new C.y("\ud83c\udfad","Stage")
D.f0y=new C.y("\u2600\ufe0f","Sunburst")
D.f3d=new C.y("\ud83e\udee0","Lava lamp")
D.eWd=new C.y("\ud83c\udf03","City night")
D.dIi=x([D.faL,D.fa9,D.eS3,D.eXS,D.fag,D.eYG,D.f3A,D.f_K,D.f2o,D.eTq,D.fdX,D.eZo,D.eUX,D.f3q,D.eVA,D.f2M,D.eZJ,D.f0y,D.f3d,D.eWd],y.L)
D.dIA=x([0,0.35,0.55,0.75,1],y.n)
D.dJR=x([0.72,1],y.n)
D.dK2=x([0,2,4,7,9,12,14,16,19,21],y.t)
D.eAM={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dMm=new C.bn(D.eAM,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],C.as("bn<n,n>"))
D.eAt={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.fgQ=new C.b1(3,20,1.9)
D.fg6=new C.b1(33,90,1.6)
D.fkk=new C.b1(52,15,3.2)
D.fki=new C.b1(45,-100,1.8)
D.fii=new C.b1(-15,-60,1.9)
D.fhD=new C.b1(-25,140,2.4)
D.fhr=new C.b1(-82,0,2.2)
D.aLn=new C.bn(D.eAt,[D.fgQ,D.fg6,D.fkk,D.fki,D.fii,D.fhD,D.fhr],C.as("bn<n,+(H,H,H)>"))
D.dOZ=new C.d1([A.pY,1,A.rf,1,A.rg,1,A.c2,1,A.kk,2,A.xl,4,A.zR,1,A.zS,2,A.zT,4,A.vq,2,A.xk,4,A.zQ,8],C.as("d1<tT,G>"))
D.dXY=new B.Wg(null)
D.e5R=new B.Xb(null)
D.e5S=new B.Xd(null)
D.e5U=new B.Xe(null)
D.esS=new B.XR(null)
D.esU=new B.XW(null)
D.euN=new B.Y2(null)
D.aNL=new B.Y3(null)
D.aNT=new B.Yf(null)
D.aNU=new B.Yi(null)
D.eBw=new C.r(0,-6771)
D.eDP=new C.r(1.9,-0.8)
D.eDS=new C.r(-0.22,0.09)
D.heh=new C.D("Tap to throw in a star",null,A.kC,null,null,null,null,null,null,null,null,null)
D.bgn=new C.cn(A.z,null,null,D.heh,null)
D.eNM=new C.cR(0,null,0,14,null,null,D.bgn,null)
D.bp4=new C.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bvG=new C.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.dkN=x([D.bp4,D.am0,D.bvG],y.O)
D.eOH=new C.bU(A.n_,0.5,A.w,null,0,D.dkN,D.aEh,null)
D.cOA=x([A.CP,A.as,A.L],y.O)
D.dBI=x([0.3,0.7,1],y.n)
D.eOI=new C.bU(A.z,0.5,A.w,null,0,D.cOA,D.dBI,null)
D.dfd=x([A.CP,A.as,A.fM],y.O)
D.eOL=new C.bU(A.z,0.5,A.w,null,0,D.dfd,null,null)
D.bpm=new C.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bmJ=new C.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.di3=x([D.bpm,D.bmJ],y.O)
D.eOQ=new C.bU(A.z,0.5,A.w,null,0,D.di3,null,null)
D.buY=new C.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.bsx=new C.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.bsE=new C.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dIk=x([D.buY,D.bsx,D.bsE],y.O)
D.eOR=new C.bU(A.ME,0.5,A.w,null,0,D.dIk,G.aD3,null)
D.fgk=new C.b1("Moon",1.62,4291941851)
D.fh8=new C.b1("Neptune",11.15,4284524026)
D.fhT=new C.b1("Sun",274,4294688548)
D.fif=new C.b1("Mercury",3.7,4288455599)
D.fil=new C.b1("Earth",9.81,4281908728)
D.fin=new C.b1("Mars",3.71,4294472049)
D.fiR=new C.b1("Venus",8.87,4294759245)
D.fiZ=new C.b1("Saturn",10.44,4294829706)
D.fjn=new C.b1("Jupiter",24.79,4294677052)
D.hjq=new C.D("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aWU=new C.b3(D.hjq,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.dwS=x([A.c1,A.bu,A.bf,A.aH,A.pK,A.c1],y.O)
D.fF8=new C.he(A.z,0,6.283185307179586,A.w,D.dwS,null,null)
D.fOU=new C.F(!0,A.aQ,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.TB,null,null,null)
D.fGi=new C.eJ("You are here (Sun)",null,null,A.cY,null,null,null,null,null,null,D.fOU)
D.fGj=new C.eJ("What we see",null,null,A.cY,null,null,null,null,null,null,F.adt)
D.aXJ=new C.F(!0,A.bX,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHm=new C.F(!0,A.bf,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJx=new C.F(!0,A.bX,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJK=new C.F(!0,A.ac,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL0=new C.F(!0,A.bX,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw0=new C.d4(A.b9,A.J,3)
D.aG_=x([D.fw0],y.S)
D.fO4=new C.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.TB,null,null,null)
D.fOG=new C.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvN=new C.d4(A.v,A.J,5)
D.daP=x([D.fvN],y.S)
D.fRF=new C.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.daP,null,null,null)
D.fRM=new C.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aG_,null,null,null)
D.fTD=new C.F(!0,A.bX,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUm=new C.F(!0,A.aF,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWM=new C.F(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2_=new C.D("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.h2T=new C.D("Your mass never changes. What changes is how hard each world pulls on it.",null,A.LK,null,null,null,null,null,null,null,null,null)
D.h3N=new C.D("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.Xk,null,A.K,null,null,null,null,null,null,null)
D.fQa=new C.F(!0,A.jX,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5k=new C.D("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fQa,null,null,null,null,null,null,null,null,null)
D.hc6=new C.D("The map of the world is not saved on this phone yet",null,A.fT,null,A.K,null,null,null,null,null,null,null)
D.hcg=new C.D("Download the animation (GIF)",null,A.cJ,null,null,null,null,null,null,null,null,null)
D.fQ5=new C.F(!0,A.aH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdn=new C.D("Planet Earth",null,D.fQ5,null,null,null,null,null,null,null,null,null)
D.hfD=new C.D("UNIVERSE EXPLORER",null,I.acR,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.imc=C.S(C.as("n"),C.as("j4"))
$.hmM=null
$.igD=C.S(C.as("n"),C.as("j4"))
$.ihH=C.S(C.as("n"),C.as("j4"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iPb","hWQ",()=>C.a([B.ahw("EARTH GLOBE","Turn it, tap a country",A.np,A.aH,new B.fCu()),B.ahw("SOLAR SYSTEM","The Sun and its worlds",D.arN,A.aQ,new B.fCv()),B.ahw("GRAVITY LAB","Drop, weigh, orbit",F.a53,A.cW,new B.fCw()),B.ahw("BLACK HOLE","Throw in a star",A.no,A.bj,new B.fCx()),B.ahw("GALAXY","Build, tilt, collide",A.xp,A.h9,new B.fCy()),B.ahw("SIZE COMPARE","Earth next to a star",D.bUD,A.c5,new B.fCz()),B.ahw("SEASONS & MOON","Why it is summer",A.vr,A.bw,new B.fCA())],C.as("N<byS>")))})()};
(a=>{a["V2Bp/szjB6Ki6IoM1pIHcoAhoZA="]=a.current})($__dart_deferred_initializers__);