((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,U,V,L,W,X,Y,M,N,O,I,P,Z,A_,A0,A1,A2,Q,R,B={bqr:function bqr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},RJ:function RJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Ye:function Ye(d){this.a=d},bpy:function bpy(d,e,f,g,h,i,j,k){var _=this
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
_.c=_.a=null},eTA:function eTA(d){this.a=d},eTy:function eTy(d){this.a=d},eTz:function eTz(){},eTb:function eTb(){},eTa:function eTa(){},eTk:function eTk(d,e){this.a=d
this.b=e},eTm:function eTm(d){this.a=d},eTq:function eTq(d){this.a=d},eTl:function eTl(d){this.a=d},eTr:function eTr(d){this.a=d},eTs:function eTs(d){this.a=d},eTt:function eTt(d,e){this.a=d
this.b=e},eTj:function eTj(d,e){this.a=d
this.b=e},eTu:function eTu(d){this.a=d},eTi:function eTi(d){this.a=d},eTv:function eTv(d,e){this.a=d
this.b=e},eTh:function eTh(d,e){this.a=d
this.b=e},eTw:function eTw(d){this.a=d},eTg:function eTg(d,e){this.a=d
this.b=e},eTx:function eTx(d){this.a=d},eTf:function eTf(d){this.a=d},eTn:function eTn(d){this.a=d},eTe:function eTe(d){this.a=d},eTo:function eTo(d){this.a=d},eTd:function eTd(d){this.a=d},eTp:function eTp(d,e){this.a=d
this.b=e},eTc:function eTc(d,e){this.a=d
this.b=e},bxi:function bxi(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},aQb:function aQb(){},
m0(d,e,f,g,h,i){return new B.bbf(h,d,f,g,i,e,null)},
hUg(d,e,f,g){var x=null
return C.cf(x,x,!0,x,new B.hgQ(g,e,f),d,x,!0,!0,y.H)},
jd(d,e,f,g,h,i,j){return new B.bbg(f,j,i,h,g,d,e,null)},
uX(d,e,f){return B.iIZ(d,e,f)},
iIZ(d,e,f){var x=0,w=C.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$uX=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
o=$.aS.bl$.x.h(0,e)
o=o==null?null:o.gbf()
s=y.W.a(o)
if(s==null){x=1
break}x=7
return C.b(s.lC(2),$async$uX)
case 7:r=h
x=8
return C.b(r.hr(A.hq),$async$uX)
case 8:q=h
if(q==null){x=1
break}p=J.eX(A.dM.gaS(q))
x=9
return C.b(C.ayx(C.a([C.cK5(p,"image/png",f+".png")],y.u),null,"Made in NGMY Core Protocol"),$async$uX)
case 9:u=2
x=6
break
case 4:u=3
m=t.pop()
if(d.e!=null)d.L(y.J).f.T(D.aX7)
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$uX,w)},
mP(d,e,f,g){var x,w=$.av8
if(w==="music")return E.dI(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(w==="space"){w=Math.pow(2,e/12)
x=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dI(261.63*w,x,f,0,g,"sine")}return B.hmy(w,e,f,g)},
hmy(d,e,f,g){var x="tri",w="sine",v="noise",u=261.63*Math.pow(2,A.n.D(e,-12,36)/12),t=Math.min(f,260)
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
Yr(d,e,f){var x,w="sine",v="noise"
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
bbf:function bbf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cES:function cES(d){this.a=d},
cET:function cET(d,e){this.a=d
this.b=e},
hgQ:function hgQ(d,e,f){this.a=d
this.b=e
this.c=f},
hgP:function hgP(d){this.a=d},
e5:function e5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cEO:function cEO(d){this.a=d},
fm:function fm(d,e,f){this.c=d
this.d=e
this.a=f},
bbg:function bbg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
fL:function fL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cEN:function cEN(d){this.a=d},
Gy:function Gy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cEU:function cEU(d){this.a=d},
o3:function o3(){},
cEP:function cEP(d,e,f){this.a=d
this.b=e
this.c=f},
cER:function cER(d){this.a=d},
cEQ:function cEQ(){},
ajE(b1,b2,b3,b4,b5,b6,b7){var x=0,w=C.j(y.D),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajE=C.e(function(b8,b9){if(b8===1)return C.f(b9,w)
for(;;)switch(x){case 0:a7=new B.h27(b3)
a8=y.a
a9=C.a([],a8)
u=0
case 3:if(!(u<8)){x=4
break}b0=a9
x=5
return C.b(a7.$1(A.h.bd(u*b4/8)),$async$ajE)
case 5:b0.push(b9);++u
b6.$1(u/8*0.1)
x=3
break
case 4:t=b7*4
s=new Uint8Array(t*b5)
for(r=0;r<b5;r=p){q=r*t
p=r+1
A.aI.ex(s,q,p*t,a9[A.n.F(r,8)],q)}A.d.a7(a9)
q=new C.A2(null,null,null,null,0,A.e6,0,0)
q.bEM(null,A.aI.gaS(s),0,null,A.c2,0,0,A.e6,b5,null,0,4,A.Ng,null,A.c2,null,null,b7,!1)
o=Y.hAX(q,255,3)
n=new Uint8Array(768)
m=0
for(;;){q=o.a
q===$&&C.d()
if(!(m<q.a&&m<255))break
l=m*3
n[l]=A.n.M(q.oE(m))
n[l+1]=A.n.M(o.a.oD(m))
n[l+2]=A.n.M(o.a.oC(m));++m}k=B.iDW(b7,b5,b1)
a8=new C.aec(C.a([],a8))
j=new B.ciV(b7,b5,a8)
a8.K(0,new C.d0("GIF89a"))
j.LP(b7)
j.LP(b5)
a8.qb(247)
a8.qb(255)
a8.qb(0)
a8.K(0,n)
a8.K(0,D.cEi)
a8.K(0,new C.d0("NETSCAPE2.0"))
a8.K(0,D.d60)
i=A.h.S(100/b2)
h=new Int16Array(2097152)
A.xT.h_(h,0,2097152,-1)
q=y.H,l=b7*b5,g=null,f=0
case 6:if(!(f<b4)){x=8
break}x=9
return C.b(a7.$1(f),$async$ajE)
case 9:e=b9
d=new Uint8Array(l)
for(a0=0,a1=0;a0<l;++a0,a1+=4){a2=e[a1]
a3=e[a1+1]
a4=e[a1+2]
a5=(a2>>>1<<14|a3>>>1<<7|a4>>>1)>>>0
m=h[a5]
if(m<0){m=o.b_O(a4,a3,a2)
h[a5]=m}d[a0]=m}for(r=0;r<b5;++r){a6=k[r]
if(a6===0)continue
a2=r*b7
A.aI.h_(d,a2,a2+a6,255)
a2=(r+1)*b7
A.aI.h_(d,a2-a6,a2,255)}if(g==null)j.aJq(0,0,b7,b5,d,i)
else j.cR1(g,d,i);++f
b6.$1(0.1+f/b4*0.9)
x=10
return C.b(C.bM(A.bH,null,q),$async$ajE)
case 10:case 7:g=d
x=6
break
case 8:a8.qb(59)
v=a8.a8U()
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$ajE,w)},
iDW(d,e,f){var x,w,v,u,t,s=C.c4(e,0,!1,y.r)
if(f<=0)return s
f=Math.min(f,Math.min(d,e)/2)
for(x=f*f,w=e-1,v=0;v<e;++v){u=Math.min(v,w-v)+0.5
if(u>=f)continue
t=f-u
s[v]=A.h.S(f-Math.sqrt(x-t*t))}return s},
aU8(d,e){return B.iE4(d,e)},
iE4(d,e){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p
var $async$aU8=C.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:q=!1
u=4
x=7
return C.b(C.ayx(C.a([C.cK5(d,"image/gif",e+".gif")],y.u),null,"Made in NGMY Core Protocol"),$async$aU8)
case 7:s=g
q=s.b!==A.Wu
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
return C.b(B.h50(d,e+".gif","image/gif"),$async$aU8)
case 10:q=g
case 9:v=q
x=1
break
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$aU8,w)},
h27:function h27(d){this.a=d},
ciV:function ciV(d,e,f){this.a=d
this.b=e
this.c=f},
ciX:function ciX(d,e,f){this.a=d
this.b=e
this.c=f},
ciW:function ciW(d,e){this.a=d
this.b=e},
hLQ(d,e){var x
$.T()
x=C.L()
x.r=d.gp(0)
x.c=e
x.b=A.ad
x.d=A.bG
return x},
uL(d,e,f){var x,w,v,u
if(f==null){x=e.length
if(x===2)x=null
else{w=C.a([],y.n)
for(v=x-1,u=0;u<x;++u)w.push(u/v)
x=w}}else x=f
return C.jS(A.J,new C.m(0,d.b),e,x,A.w,null)},
inK(d,e,f){return $.inL.c0(0,d+"|"+A.h.S(e)+"|"+f.m(),new B.fBr(d,f,e))},
iGS(e3,e4,e5,e6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7=null,d8=e4.a,d9=e4.b,e0=0+d9,e1=new C.a4(0,0,0+d8,e0),e2=new C.e6()
e2.cW(e6*97+5)
x=new B.h7T(e2)
switch(A.n.F(e6,20)){case 0:$.T()
e0=C.L()
e0.san(B.uL(e4,D.dno,d7))
e3.aE(e1,e0)
w=new C.m(d8*(0.5+0.2*Math.sin(6.283185307179586*e5)),d9*0.5)
e0=d8*0.5
v=C.L()
v.san(C.wB(w,e0,C.a([D.bAH,A.L],y.O),d7,A.w,d7,d7,0))
e3.O(w,e0,v)
break
case 1:$.T()
e0=C.L()
e0.san(B.uL(e4,D.db7,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<70;++u){v=x.$0()
t=x.$0()
s=e2.aw(3)
r=x.$0()
q=new C.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e0*(1+s)+u))).gp(0)
e3.O(new C.m(v*d8,t*d9),0.6+r*1.4,q)}p=A.h.F(e5*2,1)
e0=d8*(0.1+p*0.7)
v=d9*(0.1+p*0.3)
e3.ah(new C.m(e0,v),new C.m(e0-d8*0.12,v-d9*0.05),B.hLQ(A.c.j(1-p),2))
v=d8*0.85
e0=d9*0.2
t=C.L()
t.r=G.OH.gp(0)
e3.O(new C.m(v,e0),d9*0.09,t)
t=C.L()
t.r=D.a0S.gp(0)
e3.O(new C.m(v+d9*0.03,e0-d9*0.01),d9*0.08,t)
break
case 2:e0=$.T()
v=C.L()
v.san(B.uL(e4,D.ddi,d7))
e3.aE(e1,v)
for(u=0;u<40;++u){v=x.$0()
t=x.$0()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.5).gp(0)
e3.O(new C.m(v*d8,t*d9*0.6),0.7,s)}for(v=d9*0.12,t=d8/24,s=y.v,o=0;o<4;++o){r=C.a([],s)
n=new C.aI(e0.r,A.ak,d7,d7,r)
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
r.r=D.db4[o].j(0.5).gp(0)
r.b=A.ad
r.c=v
r.y=A.apT
e3.af(n,r)}break
case 3:e0=$.T()
v=C.L()
v.san(B.uL(e4,D.dFY,D.duz))
e3.aE(e1,v)
v=6.283185307179586*e5
i=new C.m(d8*0.5,d9*(0.64+0.01*Math.sin(v)))
t=d9*0.36
s=C.L()
s.san(C.wB(i,t,C.a([D.buJ,A.L],y.O),d7,A.w,d7,d7,0))
e3.O(i,t,s)
s=C.L()
s.r=A.a_k.gp(0)
e3.O(i,d9*0.13,s)
for(t=y.v,h=0;h<3;++h,e0=s){s=C.a([],t)
n=new C.aI(e0.r,A.ak,d7,d7,s)
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
e0=[D.bmg,D.blm,A.GQ][h]
s=$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=e0.gp(0)
e3.af(n,r)}for(s=[0.18,0.78],r=s.length,q=d9*0.78,k=-d8,j=k*0.005,g=-d9,f=q+g*0.2,g=q+g*0.21,e=d8*0.2,d=d9*0.06,a0=0;a0<r;++a0){a1=d8*s[a0]
a2=a1+j
a3=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=D.alD.gp(0)
a3.c=3
a3.b=A.ad
a3.d=A.bG
e3.ah(new C.m(a1,q),new C.m(a2,f),a3)
a2=C.c_(new C.m(a2,g),d,e)
a3=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=D.alD.gp(0)
e3.c2(a2,a3)}for(s=k*0.05,v*=6,e0=e0.r,u=0;u<4;++u){w=A.h.F(e5+u*0.22,1)
r=s+w*d8*1.1
q=d9*(0.25+0.05*u)+Math.sin(6.283185307179586*w*3)*d9*0.02
k=Math.sin(v+u)
j=C.a([],t)
g=new C.aI(e0,A.ak,d7,d7,j)
k=q+k*d9*0.012
j.push(new C.aZ(r-8,k))
g.ac()
f=q-4
q=new C.cm(r-3,f,r,q)
j.push(q)
e=g.f
if(e!=null)q.aj(e)
g.ac()
r=new C.cm(r+3,f,r+8,k)
j.push(r)
q=g.f
if(q!=null)r.aj(q)
g.ac()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.GQ.gp(0)
r.c=2
r.b=A.ad
r.d=A.bG
e3.af(g,r)}break
case 4:e0=$.T()
v=C.L()
v.san(B.uL(e4,D.dA0,D.di3))
e3.aE(e1,v)
v=C.L()
v.r=D.bwS.gp(0)
e3.O(new C.m(d8*0.75,d9*0.2),d9*0.1,v)
for(v=y.v,h=0;h<5;++h,e0=t){t=C.a([],v)
n=new C.aI(e0.r,A.ak,d7,d7,t)
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
e0=C.ap(A.cI,A.tl,h/5).j(0.85)
t=$.T()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=e0.gp(0)
e3.af(n,s)}break
case 5:$.T()
e0=C.L()
e0.san(B.uL(e4,D.dpW,D.dd6))
e3.aE(e1,e0)
a4=d9*0.6
e0=d8/2
v=d9*0.26
t=C.L()
t.san(C.jS(new C.m(0,a4-v),new C.m(0,a4),D.dEg,d7,A.w,d7))
e3.O(new C.m(e0,a4),v,t)
for(v=d8*0.2,t=a4-d9*0.2,s=d9*0.012,r=v+d8*0.6,u=0;u<5;){q=t+u*d9*0.045;++u
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=D.a0X.gp(0)
e3.aE(new C.a4(v,q,r,q+s*u*0.6),k)}v=C.L()
v.r=D.a0X.gp(0)
e3.aE(new C.a4(0,a4,d8,d9),v)
a5=B.hLQ(A.O_.j(0.85),1.4)
for(v=d9-a4,o=0;o<10;++o){a6=(o+e5)/9
if(a6<0.02)continue
l=a4+a6*a6*v
e3.ah(new C.m(0,l),new C.m(d8,l),a5)}for(o=-8;o<=8;++o){v=o*d8
e3.ah(new C.m(e0+v*0.02,a4),new C.m(e0+v*0.2,d9),a5)}break
case 6:$.T()
e0=C.L()
e0.r=D.bwH.gp(0)
e3.aE(e1,e0)
a7=Math.max(12,d8/20)
for(e0=d8/a7,v=e5*12,t=a7*0.9,s=-a7,r=d9+a7*9,q=a7*2,a8=0;a8<e0;++a8){a9=1+A.n.F(a8,3)
b0=A.h.F(e5*a9+x.$0(),1)*r-q
for(k=a8*a7,j=a8*7,g=v*a9,o=0;o<10;++o){l=b0-o*a7
if(l<s||l>d9)continue
b1="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.n.F(j+o*3+A.h.bd(g),34)]
B.inK(b1,t,o===0?D.bji:A.bk.j(1-o/9)).a5(e3,new C.m(k,l))}}break
case 7:$.T()
e0=C.L()
e0.san(B.uL(e4,D.dp7,d7))
e3.aE(e1,e0)
for(e0=d9+30,v=e3.c,t=6.283185307179586*e5,u=0;u<60;++u){s=x.$0()
r=A.h.F(e5*(1+e2.aw(2))+x.$0(),1)
J.bs(v.save())
v.translate(s*d8+Math.sin(t+u)*8,r*e0-15)
v.rotate((t*(1+A.n.F(u,3))+u)*180/3.141592653589793,0,0)
r=C.c_(A.J,4,8)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=D.dez[A.n.F(u,6)].gp(0)
e3.aE(r,s)
v.restore()}break
case 8:$.T()
e0=C.L()
e0.san(B.uL(e4,A2.aBY,d7))
e3.aE(e1,e0)
for(e0=d9*0.08,b2=0;b2<3;++b2){w=A.h.F(e5+b2/3,1)
b3=d8*(0.22+0.28*b2)
b4=d9*(0.3+0.1*A.n.F(b2,2))
if(w<0.22){v=d9*(1-w/0.22*(1-b4/d9))
$.T()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.ab.gp(0)
t.c=2
t.b=A.ad
t.d=A.bG
e3.ah(new C.m(b3,v),new C.m(b3,v+e0),t)}else{b5=(w-0.22)/0.78
v=1-b5
b6=1-Math.pow(v,3)
for(t=b5*b5*d9*0.1,s=2.6*v+0.4,u=0;u<28;++u){b7=6.283185307179586*u/28
r=Math.cos(b7)
q=Math.sin(b7)
k=D.dca[b2].j(v)
$.T()
j=new C.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=k.gp(0)
e3.O(new C.m(b3+r*b6*d9*0.34,b4+q*b6*d9*0.34+t),s,j)}}}break
case 9:$.T()
e0=C.L()
e0.san(B.uL(e4,D.d6I,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,u=0;u<30;++u){o=1+e2.aw(2)
b8=x.$0()
v=x.$0()
b9=4+x.$0()*d9*0.05
l=d9-A.h.F(e5*o+b8,1)*(d9+b9*3)+b9
v=v*d8+Math.sin(e0*o+u)*10
w=new C.m(v,l)
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
e3.O(new C.m(v+t,l+t),b9*0.2,s)}break
case 10:$.T()
e0=C.L()
e0.san(B.uL(e4,D.cHo,d7))
e3.aE(e1,e0)
e0=C.L()
e0.r=G.OH.gp(0)
e3.O(new C.m(d8*0.2,d9*0.2),d9*0.08,e0)
for(e0=d9+10,v=6.283185307179586*e5,u=0;u<90;++u){o=1+e2.aw(3)
b8=x.$0()
t=x.$0()
s=A.h.F(e5*o+b8,1)
r=Math.sin(v*o+u)
q=x.$0()
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=A.c.j(0.9).gp(0)
e3.O(new C.m(t*d8+r*12,s*e0-5),1.2+q*2.4,k)}e0=-d8*0.1
v=d9*0.9
t=C.L()
t.r=A.c.gp(0)
e3.c2(new C.a4(e0,v,e0+d8*1.2,v+d9*0.3),t)
break
case 11:$.T()
v=C.L()
v.r=A.iu.gp(0)
e3.aE(e1,v)
c0=d8/12
c1=A.h.F(e5*c0*6,c0*6)
for(u=-6;u<24;++u){m=u*c0+c1
v=new C.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=D.cP5[A.n.F(A.n.F(u,6)+6,6)].gp(0)
e3.aE(new C.a4(m,0,m+c0,e0),v)}for(e0=c0*0.3,v=c0/2,t=y.v,l=0;l<d9;l+=c0)for(s=l/c0,b4=l+v,r=b4-e0,q=b4+e0,u=-6;u<24;++u)if(A.n.F(u+A.h.bd(s),3)===0){b3=u*c0+c1+v
k=$.T()
j=C.a([],t)
k=new C.aI(k.r,A.ak,d7,d7,j)
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
j=new C.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.j(0.75).gp(0)
e3.af(k,j)}$.T()
e0=C.L()
e0.san(C.wB(e1.gbE(),d8*0.7,C.a([A.L,A.v.j(0.55)],y.O),C.a([0.4,1],y.n),A.w,d7,d7,0))
e3.aE(e1,e0)
break
case 12:$.T()
e0=C.L()
e0.san(B.uL(e4,D.d70,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<18;++u){w=new C.m(x.$0()*d8+Math.sin(e0+u)*18,x.$0()*d9+Math.cos(e0+u*1.7)*14)
b9=d9*(0.05+x.$0()*0.1)*(1+0.15*Math.sin(v+u))
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s=A.n.F(u,5)
t.r=D.aCH[s].j(0.28).gp(0)
t.y=A.I5
e3.O(w,b9,t)
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=D.aCH[s].j(0.35).gp(0)
t.c=1.2
t.b=A.ad
t.d=A.bG
e3.O(w,b9*0.9,t)}break
case 13:$.T()
e0=C.L()
e0.san(B.uL(e4,D.dk9,d7))
e3.aE(e1,e0)
c2=Math.max(0,1-Math.abs(e5-0.3)*14)
if(c2>0){e0=A.c.j(0.35*c2)
v=C.L()
v.r=e0.gp(0)
e3.aE(e1,v)}for(e0=d9+40,u=0;u<70;++u){m=x.$0()*d8
l=A.h.F(e5*(2+e2.aw(2))+x.$0(),1)*e0-20
v=new C.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.dH.j(0.6).gp(0)
v.c=1.3
v.b=A.ad
v.d=A.bG
e3.ah(new C.m(m,l),new C.m(m-6,l+18),v)}for(u=0;u<10;++u){e0=C.c_(new C.m(x.$0()*d8,A.h.F(e5+x.$0(),1)*d9),11,7)
v=new C.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.c.j(0.18).gp(0)
e3.c2(e0,v)}break
case 14:e0=$.T()
v=C.L()
v.san(B.uL(e4,D.ddg,d7))
e3.aE(e1,v)
for(v=d8*0.035,t=y.v,s=d8*0.02,r=d8*0.08,q=d8*0.07,k=6.283185307179586*e5,j=k*3,g=k*2,e0=e0.r,u=0;u<7;++u){c3=d8*(u+0.5)/7
c4=d9*(0.28+0.1*Math.sin(g+u*2.1)+0.06*A.n.F(u,3))
f=C.a([],t)
w=new C.aI(e0,A.ak,d7,d7,f)
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
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.fM.j(0.85).gp(0)
e3.af(w,f)
f=C.a([],t)
e=new C.aI(e0,A.ak,d7,d7,f)
f.push(new C.aZ(c3-v,d9))
e.ac()
d=new C.cm(c3,d9-c4*0.9,c3+v,d9)
f.push(d)
a1=e.f
if(a1!=null)d.aj(a1)
e.ac()
d=new C.bz()
f.push(d)
f=e.f
if(f!=null)d.aj(f)
e.ac()
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.eI.j(0.9).gp(0)
e3.af(e,f)}for(u=0;u<40;++u){o=1+e2.aw(2)
b8=x.$0()
e0=x.$0()
v=A.h.F(e5*o+b8,1)
t=Math.sin(k*o+u)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=G.am_.j(0.9).gp(0)
e3.O(new C.m(e0*d8+t*10,d9-v*d9*0.9),1.5,s)}break
case 15:e0=$.T()
v=C.L()
v.san(B.uL(e4,D.cBl,d7))
e3.aE(e1,v)
v=C.L()
v.r=A.ic.gp(0)
e3.O(new C.m(d8*0.7,d9*0.28),d9*0.12,v)
for(v=d8+20,t=d8/12,s=6.283185307179586*e5,r=y.v,h=0;h<5;e0=q,h=c5){q=C.a([],r)
n=new C.aI(e0.r,A.ak,d7,d7,q)
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
e0=D.ddE[h]
q=$.T()
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=e0.gp(0)
e3.af(n,k)}break
case 16:v=$.T()
t=C.L()
t.san(B.uL(e4,D.dpR,d7))
e3.aE(e1,t)
c6=Math.sin(6.283185307179586*e5)*0.18
t=e3.c
J.bs(t.save())
s=d8/2
t.translate(s,0)
e3.jy(0,c6)
v=new C.aI(v.r,A.ak,d7,d7,C.a([],y.v))
r=-d8
v.E(new C.aZ(r*0.03,0))
q=d8*0.03
v.E(new C.aq(q,0))
v.E(new C.aq(d8*0.34,d9))
v.E(new C.aq(r*0.34,d9))
v.E(new C.bz())
r=C.L()
k=y.O
r.san(C.jS(A.J,new C.m(0,d9),C.a([A.c.j(0.5),A.c.j(0.04)],k),d7,A.w,d7))
e3.af(v,r)
t.restore()
s=C.c_(new C.m(s+Math.sin(c6)*d9,d9*0.95),d9*0.14,d8*0.6)
t=A.c.j(0.22)
r=C.L()
r.r=t.gp(0)
e3.c2(s,r)
for(v=[-1,1],t=v.length,s=d8*0.18,r=0+d9*0.06,c7=d8*0.82,a0=0;a0<t;++a0){j=v[a0]<0
c8=j?0:c7
for(u=0;u<6;++u){g=c8+u*d8*0.03
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
e=C.a([A.eA,A.eu,A.eA],k)
f.san(new C.a6O(new C.m(0,0),new C.m(q,0),e,A.mc,A.w,d7))
e3.aE(new C.a4(g,0,g+q,e0),f)}j=j?0:c7
g=new C.ar(A.U,A.R,A.X,A.Y,A.W)
g.r=A.kK.gp(0)
e3.aE(new C.a4(j,0,j+s,r),g)}break
case 17:e0=$.T()
v=C.L()
v.san(C.wB(e1.gbE(),d8*0.7,D.df5,A.mc,A.w,d7,d7,0))
e3.aE(e1,v)
v=e3.c
J.bs(v.save())
v.translate(d8/2,d9/2)
e3.jy(0,e5*6.283185307179586/8)
for(t=y.v,e0=e0.r,u=0;u<16;u+=2){c9=6.283185307179586*u/16
d0=6.283185307179586*(u+1)/16
s=C.a([],t)
r=new C.aI(e0,A.ak,d7,d7,s)
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
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.22).gp(0)
e3.af(r,s)}v.restore()
break
case 18:$.T()
e0=C.L()
e0.san(B.uL(e4,D.dxM,d7))
e3.aE(e1,e0)
for(e0=6.283185307179586*e5,v=e0*2,u=0;u<7;++u){t=x.$0()
s=Math.sin(e0+u*1.1)
r=x.$0()
q=Math.sin(v+u)
k=new C.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=D.dx_[A.n.F(u,4)].j(0.7).gp(0)
k.y=A.Dr
e3.O(new C.m(d8*(0.1+0.8*t)+q*10,d9*(0.5+0.38*s)),d9*(0.1+0.08*r),k)}break
case 19:$.T()
e0=C.L()
e0.san(B.uL(e4,D.dlD,D.aEs))
e3.aE(e1,e0)
for(u=0;u<40;++u){e0=x.$0()
v=x.$0()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.6).gp(0)
e3.O(new C.m(e0*d8,v*d9*0.45),0.7,t)}e0=C.L()
e0.r=G.OH.gp(0)
e3.O(new C.m(d8*0.8,d9*0.2),d9*0.07,e0)
m=-d8*0.02
for(e0=d9-8,v=e5*6,d1=0;m<d8;){d2=d8*(0.07+x.$0()*0.07)
d3=d9*(0.25+x.$0()*0.4)
t=d9-d3
s=m+d2
$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=D.bo4.gp(0)
e3.aE(new C.a4(m,t,s,t+d3),r)
for(d4=t+6,d5=m+4,t=s-6,s=d1*31;d4<e0;d4+=11)for(r=d4*7,q=d4+6,d6=d5;d6<t;d6+=9)if(A.n.F(s+A.h.S(r)+A.h.S(d6*3)+A.h.bd(v),5)!==0){k=D.brt.j(0.85)
$.T()
j=new C.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=k.gp(0)
e3.aE(new C.a4(d6,d4,d6+4,q),j)}m+=d2+2;++d1}break}},
ikM(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
ivs(d,e,f,g,h,i,j){var x,w,v,u,t,s,r,q,p=new B.fwq(),o=f<=1,n=o?0:e/(f-1),m=o?0:e/(f-1)
o=g/0.5
x=A.h.D((o-m*0.45)/0.55,0,1)
w=g<0.86?1:A.h.D((1-g)/0.14,0,1)
v=new C.e6()
v.cW(e*53+11)
switch(d){case"type":p.f=A.h.bd(g/0.55*f)>e?w:0
break
case"bounce":p.b=-Math.abs(Math.sin(A.h.F(g*2-n*0.5,1)*3.141592653589793))*h*0.5
break
case"wave":p.b=Math.sin(6.283185307179586*g-n*3)*h*0.28
break
case"neon":p.x=p.f=Math.sin(6.283185307179586*g*13+e*7)>0.92?0.25:1
break
case"glitch":u=A.n.F(A.h.bd(g*12),6)===0
p.a=u?Math.sin(e*12.9898+g*100)*h*0.14:0
if(u)p.w=(e&1)===0?A.be:A.c5
break
case"zoom":p.c=p.d=A.n1.aA(0,x)
p.f=x*w
break
case"rainbow":p.w=new H.pH(1,A.h.F(g*360+e*40,360),0.75,1).jl()
break
case"drop":p.b=-(1-B.ikM(x))*h*4
p.f=A.h.D(x*6,0,1)*w
break
case"fly":p.a=-(1-A.eg.aA(0,x))*i*0.8
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
DX(d,e,f,g){var x=null,w=C.h0(x,A.cJ,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,g==null?f:x,x,x,x,x,x,x,x,x,e,x,x,A.u,g,1,!0,x,x,x,x,x,x,x,x),d),A.a7,A.ca,x,A.e4,A.cb)
w.eJ()
return w},
iqT(d,e,f,g,h,i,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.h.D(i,0,1)
if(j<=0.01)return
x=B.DX(e,f,k,k)
w=x.b
v=-w.c/2
w=w.a.c
w=-w.gb4(w)/2
u=new C.m(v,w)
t=x.b
s=t.c
t=t.a.c
r=new C.a4(v,w,v+s,w+t.gb4(t))
q=new B.fHR(j)
p=new B.fHS(e,f,d,u)
switch(g){case"outline":p.$2(q.$1(h),f*0.07)
break
case"three":t=C.ap(h,A.v,0.55)
t.toString
for(o=9;o>=1;--o){s=C.ap(h,t,o/9)
s.toString
n=o*f
B.DX(e,f,q.$1(s),k).a5(d,new C.m(v+n*0.012,w+n*0.014))}B.DX(e,f,q.$1(h),k).a5(d,u)
break
case"neon":p.$3$blur(q.$2(h,0.9*(0.6+0.4*a0)),f*0.16,new C.h3(A.H,f*0.2))
p.$2(q.$2(h,0.9),f*0.07)
p.$2(q.$2(A.c,0.95),f*0.025)
break
case"gradient":$.T()
m=C.L()
w=r.gaMY()
v=r.gaH9()
t=C.ap(h,A.c,0.45)
t.toString
t=q.$1(t)
s=q.$1(h)
n=C.ap(h,A.az,0.6)
n.toString
m.san(C.jS(w,v,C.a([t,s,q.$1(n)],y.O),A.mc,A.w,k))
B.DX(e,f,k,m).a5(d,u)
break
case"sticker":B.DX(e,f,q.$2(A.v,0.3),k).a5(d,u.a6(0,new C.m(f*0.04,f*0.06)))
p.$2(q.$1(A.c),f*0.2)
p.$4$blur$shift(q.$1(A.ax),f*0.24,k,A.J)
p.$2(q.$1(A.c),f*0.17)
B.DX(e,f,q.$1(h),k).a5(d,u)
break
case"retro":t=H.a7a(h)
l=new H.pH(t.a,A.h.F(H.a7a(h).b+150,360),t.c,t.d).jl()
for(o=5;o>=1;--o){t=o*f*0.014
B.DX(e,f,q.$1(l),k).a5(d,new C.m(v+t,w+t))}p.$2(q.$1(A.ax),f*0.05)
B.DX(e,f,q.$1(h),k).a5(d,u)
break
case"gold":$.T()
m=C.L()
m.san(C.jS(r.gaMY(),r.gaH9(),C.a([q.$1(A4.CO),q.$1(A.d_),q.$1(A.de),q.$1(A.wO),q.$1(A.is)],y.O),D.dJe,A.w,k))
p.$2(q.$1(A.tr),f*0.06)
B.DX(e,f,k,m).a5(d,u)
break
default:B.DX(e,f,q.$1(h),k).a5(d,u)}},
hTx(a5,a6,a7,a8,a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a5.c
J.bs(a4.save())
x=a6.a
w=a6.b
a4.clipRect(C.hS(new C.a4(0,0,0+x,0+w)),$.lH()[1],!0)
B.iGS(a5,a6,a7,a8)
v=x<w?0.9:1
u=b0*x/360*v
v=A.a.i(b3)
if(v.length===0)t=C.a(["\u2026"],y.s)
else{v=new C.mQ(v)
t=C.B(v,C.a3(v).k("M.E"))}v=C.a([],y.n)
for(s=t.length,r=0;r<t.length;t.length===s||(0,C.I)(t),++r){q=t[r]
p=q===" "
o=B.DX(p?"n":q,u,a3,a3).b.c
v.push(o*(p?0.7:1))}n=x*0.86
s=y.t
m=C.a([C.a([],s)],y.x)
for(p=y.r,l=0,k=0,j=0;j<t.length;++j){if(t[j]===" "){A.d.gal(m).push(j)
l+=v[j]
k=A.d.gal(m).length
continue}if(l+v[j]>n&&A.d.gal(m).length!==0){i=k>0&&k<A.d.gal(m).length?A.d.fE(A.d.gal(m),k):C.a([],s)
if(i.length!==0){o=A.d.gal(m)
h=A.d.gal(m).length
o.$flags&1&&C.ak(o,18)
C.kA(k,h,o.length,a3,a3)
o.splice(k,h-k)}o=C.B(i,p)
m.push(o)
l=A.d.cF(i,0,new B.h7U(v))
k=0}A.d.gal(m).push(j)
l+=v[j]}g=u*1.15
f=w/2-m.length*g/2+g/2
for(w=x/2,e=0;e<m.length;++e){d=m[e]
a0=w-A.d.cF(d,0,new B.h7V(v))/2
for(s=d.length,p=f+e*g,r=0;r<d.length;d.length===s||(0,C.I)(d),++r,a0=a1){j=d[r]
o=v[j]
a1=a0+o
if(t[j]===" ")continue
a2=B.ivs(b1,j,t.length,a7,u,x,a9)
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
B.iqT(a5,o,u,b2,h,a2.f,a2.x)
a4.restore()}}a4.restore()},
hun(d,e,f,g,h,i,j,k,l,m){var x=0,w=C.j(y.D),v,u,t,s,r
var $async$hun=C.e(function(n,o){if(n===1)return C.f(o,w)
for(;;)switch(x){case 0:u=d>=1
t=A.h.S(u?i:i*d)
s=A.h.S(u?i/d:i)
r=A.h.S(3.2*h)
v=B.ajE(Math.max(t,s)*22/360,h,new B.h6A(t,s,r,m,j,l,e,f,g),r,s,k,t)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$hun,w)},
fBr:function fBr(d,e,f){this.a=d
this.b=e
this.c=f},
h7T:function h7T(d){this.a=d},
fwq:function fwq(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fHR:function fHR(d){this.a=d},
fHS:function fHS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc8:function bc8(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
h7U:function h7U(d){this.a=d},
h7V:function h7V(d){this.a=d},
h6A:function h6A(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yq:function Yq(d){this.a=d},
av7:function av7(d,e,f){var _=this
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
cq9:function cq9(d,e){this.a=d
this.b=e},
cq4:function cq4(d){this.a=d},
cq5:function cq5(d){this.a=d},
cq3:function cq3(d,e){this.a=d
this.b=e},
cq6:function cq6(d,e){this.a=d
this.b=e},
cq7:function cq7(d){this.a=d},
cq8:function cq8(d){this.a=d},
cpU:function cpU(d){this.a=d},
cpV:function cpV(d){this.a=d},
cpT:function cpT(){},
cpW:function cpW(d,e){this.a=d
this.b=e},
cpX:function cpX(d,e){this.a=d
this.b=e},
cpS:function cpS(d,e){this.a=d
this.b=e},
cpY:function cpY(d,e){this.a=d
this.b=e},
cpR:function cpR(d,e){this.a=d
this.b=e},
cpZ:function cpZ(d,e){this.a=d
this.b=e},
cpQ:function cpQ(d,e){this.a=d
this.b=e},
cq_:function cq_(d,e){this.a=d
this.b=e},
cpP:function cpP(d,e){this.a=d
this.b=e},
cq0:function cq0(d){this.a=d},
cpO:function cpO(d){this.a=d},
cq1:function cq1(d){this.a=d},
cq2:function cq2(d){this.a=d},
cpN:function cpN(d,e){this.a=d
this.b=e},
aIf:function aIf(){},
bcj(){var x=0,w=C.j(y.U),v,u=2,t=[],s,r,q
var $async$bcj=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
s=$.ho1
x=7
return C.b(s==null?$.ho1=B.cHq():s,$async$bcj)
case 7:s=e
v=s
x=1
break
u=2
x=6
break
case 4:u=3
q=t.pop()
$.ho1=null
throw q
x=6
break
case 3:x=2
break
case 6:case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$bcj,w)},
cHq(){var x=0,w=C.j(y.U),v,u
var $async$cHq=C.e(function(d,e){if(d===1)return C.f(e,w)
for(;;)switch(x){case 0:u=B
x=3
return C.b($.oV().Dj("assets/data/world110.json",!1),$async$cHq)
case 3:v=u.ig1(e)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$cHq,w)},
ig1(a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=y.j,d=e.a(A.V.aP(0,a1,null)),a0=C.a([],y.h)
for(x=J.aO(d),w=y.n,v=y.b,u=y.d,t=y.f;x.B();){s=u.a(x.gP(x))
r=C.a([],t)
for(q=J.a1(s),p=J.aO(e.a(q.h(s,"r")));p.B();){o=p.gP(p)
n=C.a([],v)
for(m=J.aO(e.a(o));m.B();){l=m.gP(m)
k=J.a1(l)
n.push(C.a([C.dC(k.h(l,0)),C.dC(k.h(l,1))],w))}r.push(n)}p=C.cV(q.h(s,"n"))
n=C.cV(q.h(s,"a"))
m=C.cV(q.h(s,"ct"))
k=C.cV(q.h(s,"sr"))
j=C.dC(q.h(s,"pop"))
i=C.dC(q.h(s,"gdp"))
h=C.cV(q.h(s,"inc"))
g=C.ag("^\\d\\.\\s*",!0,!1,!1,!1)
h=C.aUG(h,g,"",0)
g=C.dC(J.t(q.h(s,"c"),0))
q=C.dC(J.t(q.h(s,"c"),1))
f=new B.ads(p,n,m,k,j,i,h,g,q,r)
f.bFk(q,g,n,m,i,h,p,j,r,k)
a0.push(f)}return new B.adt(a0)},
fSv(d){if(d>=1e12)return A.h.a1(d/1e12,1)+" trillion"
if(d>=1e9)return A.h.a1(d/1e9,2)+" billion"
if(d>=1e6)return A.h.a1(d/1e6,1)+" million"
if(d>=1000)return A.h.a1(d/1000,1)+" thousand"
return A.h.a1(d,0)},
I3(d){var x,w,v,u=A.n.v(A.h.S(d))
for(x=u.length,w=0,v="";w<x;++w){if(w>0&&A.n.F(x-w,3)===0)v+=","
v+=u[w]}return v.charCodeAt(0)==0?v:v},
ads:function ads(d,e,f,g,h,i,j,k,l,m){var _=this
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
adt:function adt(d){this.a=d},
w3:function w3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
QR:function QR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
z_:function z_(d,e,f){this.a=d
this.b=e
this.c=f},
QQ:function QQ(d){this.a=0
this.b=d
this.c=0},
ii_(d,e,f){return $.ii0.c0(0,d+"|"+C.v(e)+"|"+f.m(),new B.drJ(d,e,f))},
Xn:function Xn(d){this.a=d},
aH4:function aH4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.hg$=j
_.mk$=k
_.fh$=l
_.hh$=m
_.bv$=n
_.ab$=o
_.c=_.a=null},
ecl:function ecl(d){this.a=d},
ecm:function ecm(d){this.a=d},
eck:function eck(d,e){this.a=d
this.b=e},
ecn:function ecn(d){this.a=d},
ecj:function ecj(d){this.a=d},
eco:function eco(d){this.a=d},
ech:function ech(d){this.a=d},
eci:function eci(d,e,f){this.a=d
this.b=e
this.c=f},
ecg:function ecg(d){this.a=d},
ecf:function ecf(){},
ece:function ece(d){this.a=d},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecv:function ecv(d){this.a=d},
ecy:function ecy(d){this.a=d},
ecp:function ecp(d,e){this.a=d
this.b=e},
ecq:function ecq(d){this.a=d},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecN:function ecN(d){this.a=d},
ecG:function ecG(d){this.a=d},
ecO:function ecO(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecR:function ecR(d){this.a=d},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecS:function ecS(d){this.a=d},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecT:function ecT(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecU:function ecU(d){this.a=d},
ecz:function ecz(d){this.a=d},
ecK:function ecK(d){this.a=d},
ect:function ect(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecr:function ecr(d){this.a=d},
ecd:function ecd(){},
ecc:function ecc(d){this.a=d},
ecb:function ecb(d){this.a=d},
bkd:function bkd(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
drJ:function drJ(d,e,f){this.a=d
this.b=e
this.c=f},
drK:function drK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aPz:function aPz(){},
aPA:function aPA(){},
ahG(d,e,f,g,h){return new B.bzd(d,e,f,g,h)},
bzd:function bzd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fD3:function fD3(){},
fD4:function fD4(){},
fD5:function fD5(){},
fD6:function fD6(){},
fD7:function fD7(){},
fD8:function fD8(){},
fD9:function fD9(){},
Yt:function Yt(d){this.a=d},
bpK:function bpK(){this.d=$
this.c=this.a=null},
f_t:function f_t(){},
f_u:function f_u(){},
f_q:function f_q(d){this.a=d},
f_r:function f_r(d){this.a=d},
f_p:function f_p(d){this.a=d},
f_s:function f_s(){},
f_o:function f_o(d,e){this.a=d
this.b=e},
f_n:function f_n(d){this.a=d},
iis(){var x,w,v=y.n,u=C.a([],v)
for(x=0;x<260;++x){w=new C.e6()
w.cW(x)
u.push(w.ai()*3.141592653589793*2)}v=C.a([],v)
for(x=0;x<260;++x){w=new C.e6()
w.cW(x+900)
v.push(2.2+w.ai())}return new B.bpx(new C.cB(null,y.z),new B.QQ(A.cW),A.J,A.aA,u,v,$,A.bH,0,C.a([],y.X),null,null)},
iiu(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
iit(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hIH(d,e,f){return $.ij5.c0(0,d+"|"+C.v(e)+"|"+f.m(),new B.fkz(d,e,f))},
Yd:function Yd(d){this.a=d},
bpx:function bpx(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.hg$=j
_.mk$=k
_.fh$=l
_.hh$=m
_.bv$=n
_.ab$=o
_.c=_.a=null},
eSQ:function eSQ(d,e){this.a=d
this.b=e},
eT0:function eT0(d,e){this.a=d
this.b=e},
eT1:function eT1(d,e){this.a=d
this.b=e},
eSY:function eSY(d){this.a=d},
eSZ:function eSZ(d){this.a=d},
eT_:function eT_(d){this.a=d},
eT2:function eT2(d){this.a=d},
eSX:function eSX(d){this.a=d},
eT3:function eT3(d,e){this.a=d
this.b=e},
eT4:function eT4(d){this.a=d},
eSW:function eSW(d,e){this.a=d
this.b=e},
eT5:function eT5(d){this.a=d},
eSV:function eSV(d,e){this.a=d
this.b=e},
eT6:function eT6(d){this.a=d},
eSU:function eSU(d){this.a=d},
eT7:function eT7(d){this.a=d},
eST:function eST(d){this.a=d},
eT8:function eT8(d){this.a=d},
eSS:function eSS(d){this.a=d},
eT9:function eT9(d){this.a=d},
eSR:function eSR(d){this.a=d},
eSP:function eSP(){},
eSO:function eSO(){},
eSN:function eSN(d){this.a=d},
eSM:function eSM(d){this.a=d},
bxf:function bxf(d,e){this.b=d
this.a=e},
fkz:function fkz(d,e,f){this.a=d
this.b=e
this.c=f},
fkA:function fkA(){},
fkB:function fkB(){},
Xo:function Xo(d){this.a=d},
aH5:function aH5(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.hg$=k
_.mk$=l
_.fh$=m
_.hh$=n
_.bv$=o
_.ab$=p
_.c=_.a=null},
ecY:function ecY(){},
edq:function edq(){},
edc:function edc(d,e){this.a=d
this.b=e},
ed3:function ed3(d,e){this.a=d
this.b=e},
edd:function edd(d){this.a=d},
ed2:function ed2(d){this.a=d},
ede:function ede(d){this.a=d},
edb:function edb(d){this.a=d},
edi:function edi(d){this.a=d},
eda:function eda(d){this.a=d},
edj:function edj(d){this.a=d},
ed9:function ed9(d,e){this.a=d
this.b=e},
edk:function edk(d){this.a=d},
edl:function edl(d){this.a=d},
ed8:function ed8(d,e){this.a=d
this.b=e},
edm:function edm(d){this.a=d},
ed7:function ed7(d,e){this.a=d
this.b=e},
edn:function edn(d){this.a=d},
ed6:function ed6(d,e){this.a=d
this.b=e},
edo:function edo(d){this.a=d},
ed5:function ed5(d,e){this.a=d
this.b=e},
edp:function edp(d){this.a=d},
ed4:function ed4(d){this.a=d},
edf:function edf(d){this.a=d},
ed1:function ed1(d){this.a=d},
edg:function edg(d){this.a=d},
ed0:function ed0(d){this.a=d},
edh:function edh(d){this.a=d},
ed_:function ed_(d){this.a=d},
ecX:function ecX(d){this.a=d},
ecW:function ecW(){},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ecV:function ecV(d){this.a=d},
bfi:function bfi(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Y6:function Y6(d){this.a=d},
bpu:function bpu(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.hg$=e
_.mk$=f
_.fh$=g
_.hh$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
eLw:function eLw(d,e){this.a=d
this.b=e},
eLx:function eLx(d,e){this.a=d
this.b=e},
eLv:function eLv(d,e){this.a=d
this.b=e},
eLy:function eLy(d,e){this.a=d
this.b=e},
eLu:function eLu(d,e){this.a=d
this.b=e},
bwN:function bwN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fiI:function fiI(d){this.a=d},
aPB:function aPB(){},
bCy:function bCy(){},
aQ7:function aQ7(){},
bCK:function bCK(){},
aQa:function aQa(){},
bCM:function bCM(){},
iiq(){var x,w,v,u=C.a([],y.A),t=C.a([],y.g)
for(x=0;x<150;++x){w=new C.e6()
w.cW(x)
w=w.ai()
v=new C.e6()
v.cW(x+500)
t.push(new C.m(w,v.ai()))}return new B.bo5(new C.cB(null,y.z),new B.QQ(A.cW),u,A.aA,t,$,A.bH,0,C.a([],y.X),null,null)},
Rp:function Rp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
Wq:function Wq(d){this.a=d},
bo5:function bo5(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.hg$=i
_.mk$=j
_.fh$=k
_.hh$=l
_.bv$=m
_.ab$=n
_.c=_.a=null},
dUa:function dUa(){},
dTZ:function dTZ(){},
dU_:function dU_(d,e){this.a=d
this.b=e},
dU0:function dU0(d,e){this.a=d
this.b=e},
dTY:function dTY(d){this.a=d},
dTX:function dTX(d){this.a=d},
dU2:function dU2(d){this.a=d},
dTW:function dTW(d,e){this.a=d
this.b=e},
dU3:function dU3(d){this.a=d},
dTV:function dTV(d){this.a=d},
dU4:function dU4(d){this.a=d},
dTU:function dTU(d){this.a=d},
dU5:function dU5(d){this.a=d},
dTT:function dTT(d){this.a=d},
dU6:function dU6(d){this.a=d},
dTS:function dTS(d){this.a=d},
dU7:function dU7(d){this.a=d},
dTR:function dTR(d){this.a=d},
dU8:function dU8(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dU9:function dU9(d){this.a=d},
dTP:function dTP(d){this.a=d},
dU1:function dU1(d){this.a=d},
dTO:function dTO(d){this.a=d},
beD:function beD(d,e){this.b=d
this.a=e},
ahj:function ahj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xl:function Xl(d){this.a=d},
boA:function boA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
_.hg$=p
_.mk$=q
_.fh$=r
_.hh$=s
_.bv$=t
_.ab$=u
_.c=_.a=null},
ebE:function ebE(d){this.a=d},
ebu:function ebu(d,e){this.a=d
this.b=e},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebt:function ebt(d,e){this.a=d
this.b=e},
ebw:function ebw(d){this.a=d},
ebs:function ebs(d){this.a=d},
ebx:function ebx(d){this.a=d},
ebr:function ebr(d,e){this.a=d
this.b=e},
eby:function eby(d){this.a=d},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebz:function ebz(d){this.a=d},
ebp:function ebp(d,e){this.a=d
this.b=e},
ebA:function ebA(d){this.a=d},
ebo:function ebo(d,e){this.a=d
this.b=e},
ebB:function ebB(d){this.a=d},
ebn:function ebn(d){this.a=d},
ebC:function ebC(d){this.a=d},
ebm:function ebm(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebl:function ebl(d){this.a=d},
bk4:function bk4(d,e){this.b=d
this.a=e},
doT:function doT(d){this.a=d},
Y1:function Y1(d){this.a=d},
bpt:function bpt(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.hg$=f
_.mk$=g
_.fh$=h
_.hh$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
eIy:function eIy(d,e){this.a=d
this.b=e},
eIz:function eIz(d){this.a=d},
eIx:function eIx(d){this.a=d},
eIA:function eIA(d){this.a=d},
eIw:function eIw(d){this.a=d},
eIB:function eIB(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIC:function eIC(d){this.a=d},
eIu:function eIu(d){this.a=d},
eID:function eID(d){this.a=d},
eIt:function eIt(d,e){this.a=d
this.b=e},
eIE:function eIE(d){this.a=d},
eIs:function eIs(d,e){this.a=d
this.b=e},
eIF:function eIF(d){this.a=d},
eIr:function eIr(d,e){this.a=d
this.b=e},
eIG:function eIG(d){this.a=d},
eIq:function eIq(d,e){this.a=d
this.b=e},
bvZ:function bvZ(d,e){this.b=d
this.a=e},
aP6:function aP6(){},
bCp:function bCp(){},
aPx:function aPx(){},
bCx:function bCx(){},
aQ5:function aQ5(){},
bCJ:function bCJ(){},
h50(d,e,f){return B.iE2(d,e,f)},
iE2(d,e,f){var x=0,w=C.j(y.w),v,u=2,t=[],s,r,q,p,o,n,m
var $async$h50=C.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:u=4
s=C.i3([d],f)
p=(self.URL||self.webkitURL).createObjectURL(s)
p.toString
r=p
o=C.nm(r)
o.download=e
p=o.style
p.display="none"
q=o
p=document.body
if(p!=null)p.appendChild(q).toString
J.I7(q)
x=7
return C.b(C.bM(A.j5,null,y.H),$async$h50)
case 7:J.ma(q);(self.URL||self.webkitURL).revokeObjectURL(r)
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
return C.i($async$h50,w)}},D,E,F,A3,G,K,A4,A5,A6,S,T,H,A7
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
B.bqr.prototype={}
B.RJ.prototype={
ga0(d){return this.d}}
B.Ye.prototype={
R(){var x=C.a([],y.G),w=C.a([],y.Z)
return new B.bpy(new C.cB(null,y.z),x,w,A.cW,A.bH,D.He,null,null)}}
B.bpy.prototype={
b4O(d,e){var x,w,v,u=this
if(u.ch)x=!e&&u.y-u.CW<120
else x=!0
if(x)return
u.CW=u.y
x=u.c
x.toString
w=A.n.D(A.h.bd((1-d.b/(C.aG(x,null,y.m).w.a.b*0.7))*10),0,9)
v=D.aDI[A.n.F(w,5)]+12*A.n.ao(w,5)+12
switch(u.z){case"glow":B.mP("synth",v,420,0.3)
break
case"rainbow":B.mP("bell",v,700,0.35)
break
case"stars":B.mP("pluck",v+12,400,0.4)
break
case"sparks":E.dI(2400+u.r.aw(2000),"",60,0,0.18,"noise")
break
default:E.dI(110+u.r.aw(60),"",140,0,0.22,"noise")}},
ciL(d){return this.b4O(d,!1)},
Z(){var x,w=this
w.a4()
x=w.qi(new B.eTA(w))
x.fU(0)
w.w!==$&&C.aT()
w.w=x},
t(){var x=this.w
x===$&&C.d()
x.t()
this.bCR()},
gb6C(){var x=this.Q
return x<0?new H.pH(1,A.h.F(this.y*0.18,360),0.85,1).jl():D.EE[x]},
aWO(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.gb6C(),k=m.z
if(k==="fire")x=5
else x=k==="sparks"?4:1
for(k=m.f,w=m.r,v=d.a,u=d.b+0,t=0;t<x;++t){s=w.ai()*3.141592653589793*2
switch(m.z){case"fire":r=w.ai()
q=m.as
p=w.ai()
o=w.ai()
n=C.ap(A.bu,A.aC,w.ai())
n.toString
k.push(new B.RJ(new C.m(v+(r-0.5)*q,u),new C.m((p-0.5)*40,-60-o*120),n,m.as*(0.3+w.ai()*0.4),m.y,700+w.aw(500)))
break
case"sparks":r=Math.cos(s)
q=Math.sin(s)
p=40+w.ai()*200
o=C.ap(l,A.c,w.ai()*0.6)
o.toString
k.push(new B.RJ(d,new C.m(r*p,q*p),o,1.5+w.ai()*3,m.y,600+w.aw(600)))
break
default:r=Math.cos(s)
q=Math.sin(s)
p=10+w.ai()*40
k.push(new B.RJ(d,new C.m(r*p,q*p),l,1.2+w.ai()*1.8,m.y,500))}}},
b3e(d,e){var x,w,v,u,t,s=this
s.ay=!0
x=s.z
if(x==="glow"||x==="rainbow"||x==="stars"){w=s.gb6C()
v=s.as
u=s.Q<0||s.z==="rainbow"
t=C.a([],y.g)
s.ax=new B.bqr(t,x,w,v,u)
t.push(e)
t=s.ax
t.toString
s.e.push(t)}s.aWO(e)
s.b4O(e,!0)
s.l(new B.eTb())},
b3d(){this.ax=null
this.l(new B.eTa())},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=y.p,m=C.a([C.aJ(o,o,o,o,D.p9,o,o,o,new B.eTk(p,d),o,o,o,o,"Share",o)],n),l=p.e,k=C.a([C.b4(o,o,o,new B.bxi(l,p.f,p.y,p.at,o),A.aA)],n)
if(!p.ay&&l.length===0)k.push(D.bgG)
l=C.aA(A.bZ,new C.am(A.a0,o,A.b5,A.t,k,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.eTl(p),new B.eTm(p),new B.eTq(p),o,o,o,o,o,o,o,o,o,new B.eTr(p),new B.eTs(p),o,o,o,!1,A.a4)
k=C.a([],n)
for(x=0;x<5;++x){w=D.deV[x]
k.push(new B.e5(w.b,p.z===w.a,new B.eTt(p,w),w.c,A.c5,o))}v=C.a([new B.Gy(A.c,p.Q<0,new B.eTu(p),!0,o)],n)
for(u=0;u<8;++u)v.push(new B.Gy(D.EE[u],p.Q===u,new B.eTv(p,u),!1,o))
t=p.as
t=B.jd(A.c5,A.n.v(A.h.S(t)),"Size",36,4,new B.eTw(p),t)
s=p.ch
r=s?R.p7:Q.u_
r=C.a([new B.e5("Sound",s,new B.eTx(p),r,A.c5,o),new B.fL(A.q7,"Undo",new B.eTn(p),A.c,o),new B.fL(D.xr,"Clear",new B.eTo(p),A.c1,o)],n)
for(x=0;x<4;++x){q=D.dyd[x]
r.push(new B.Gy(q,p.at.A(0,q),new B.eTp(p,q),!1,o))}return B.m0(A.c5,m,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new C.e9(l,p.d),"SPARK PAINTER",C.w(C.a([new B.fm(k,"BRUSH",o),new B.fm(v,"COLOUR",o),t,new B.fm(r,o,o)],n),A.l,o,A.e,A.P,0,A.p))}}
B.bxi.prototype={
a5(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null
$.T()
x=C.L()
w=a1.e
x.r=w.gp(w)
a3.aE(new C.a4(0,0,0+a4.a,0+a4.b),x)
for(x=a1.b,w=x.length,v=y.v,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
s=t.a
r=s.length
if(r===0)continue
switch(t.b){case"glow":r=$.T()
q=C.a([],v)
p=new C.aI(r.r,A.ak,a2,a2,q)
q.push(new C.aZ(A.d.gH(s).a,A.d.gH(s).b))
p.ac()
for(r=C.U(s),o=r.k("ia<1>"),n=new C.ia(s,1,a2,o),n.mw(s,1,a2,r.c),n=new C.bQ(n,n.gI(0),o.k("bQ<aj.E>")),o=o.k("aj.E");n.B();){r=n.d
if(r==null)r=o.a(r)
r=new C.aq(r.a,r.b)
q.push(r)
m=p.f
if(m!=null)r.aj(m)
p.ac()}if(s.length===1){s=A.d.gH(s)
$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=t.c.gp(0)
a3.O(s,t.d/2,r)}$.T()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.b=A.ad
s.d=A.bG
s.e=A.dQ
r=t.d
s.c=r*2.2
q=t.c
s.r=q.j(0.45).gp(0)
s.y=new C.h3(A.H,r)
a3.af(p,s)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.b=A.ad
s.d=A.bG
s.e=A.dQ
s.c=r
s.r=q.gp(0)
a3.af(p,s)
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.b=A.ad
s.d=A.bG
s.e=A.dQ
s.c=r*0.35
s.r=A.c.j(0.85).gp(0)
a3.af(p,s)
break
case"rainbow":for(r=t.d,l=1;l<s.length;++l){k=new H.pH(1,A.n.F(l*5,360),0.85,1).jl()
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
i+=Math.sqrt(e*e+d*d)}e=A.d.gH(s)
if(e.a===f.a&&e.b===f.b||i>o){a0=h+1
e=m?new H.pH(1,A.n.F(a0*23,360),0.7,1).jl():n
a1.cf1(a3,f,q,h*0.5,e)
h=a0
i=0}}break}}for(x=a1.c,w=x.length,v=a1.d,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){f=x[u]
h=A.h.D((v-f.e)/f.f,0,1)
s=f.a
$.T()
r=new C.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=f.c.j((1-h)*0.9).gp(0)
r.y=K.a2Q
a3.O(s,f.d*(1-0.6*h)+1,r)}},
cf1(d,e,f,g,h){var x,w,v,u,t,s,r,q=$.T(),p=C.a([],y.v),o=new C.aI(q.r,A.ak,null,null,p)
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
$.T()
q=C.L()
q.r=h.j(0.4).gp(0)
q.y=A.ld
d.af(o,q)
q=C.L()
q.r=h.gp(0)
d.af(o,q)},
aD(d){return!0}}
B.aQb.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bbf.prototype={
C(d){var x,w=this,v=null,u=w.c,t=F.aLA.h(0,u)
$.av8=t==null?"music":t
t=w.d
x=y.p
u=C.a([C.aJ(v,v,v,v,A3.nr,v,v,v,new B.cES(d),v,v,v,v,v,v),C.E(C.c(u,v,1,A.a2,v,v,v,C.l(v,v,t,v,v,v,v,v,v,v,v,14.5,v,v,A.u,v,v,!0,v,1.6,v,v,v,v,v,v),v,v,v),1)],x)
A.d.u(u,w.w)
u.push(C.aJ(v,v,v,v,C.V(A.DQ,t,v,v,v,22),v,v,v,new B.cET(w,d),v,v,v,v,"How to play",v))
x=C.a([new C.C(D.bLu,C.A(u,A.l,v,A.e,A.i,0,v,v),v),C.E(w.f,1)],x)
x.push(C.q(v,w.r,A.f,v,v,new C.p(F.CH,v,new C.bE(new C.ax(A.c.j(0.08),1,A.r,-1),A.a1,A.a1,A.a1),v,v,v,A.m),v,v,v,v,A.Da,v,v,1/0))
return C.c6(v,A.c7,C.bn(!0,C.w(x,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
B.e5.prototype={
C(d){var x,w,v,u=this,t=null,s=C.n(999),r=u.d,q=r?u.r.j(0.22):A.c.j(0.06),p=r?u.r:A.c.j(0.12)
p=C.K(p,A.r,r?1.6:1)
x=y.p
w=C.a([],x)
v=u.f
if(v!=null)A.d.u(w,C.a([C.V(v,r?u.r:A.aR,t,t,t,16),A.dY],x))
w.push(C.c(u.c,t,t,t,t,t,t,C.l(t,t,r?A.c:A.ab,t,t,t,t,t,t,t,t,12,t,t,A.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t))
return new C.C(F.oY,C.aA(t,C.cY(t,C.A(w,A.l,t,A.e,A.P,0,t,t),t,t,A.b_,new C.p(q,t,p,s,t,t,A.m),A.eK,t,t,t,t,A.hd,t,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cEO(u),t,t,t,t,t,t,!1,A.a4),t)}}
B.fm.prototype={
C(d){var x=null,w=C.a([],y.p),v=this.d
if(v!=null)w.push(new C.a5(54,x,C.c(v,x,x,x,x,x,x,C.l(x,x,A.c.j(0.45),x,x,x,x,x,x,x,x,10.5,x,x,A.u,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),x))
w.push(C.E(C.cc(C.A(this.c,A.l,x,A.e,A.i,0,x,x),A.t,x,A.y,x,x,x,x,x,A.aK),1))
return new C.C(A.cB,C.A(w,A.l,x,A.e,A.i,0,x,x),x)}}
B.bbg.prototype={
C(d){var x,w,v=this,u=null,t=C.c(v.c,u,u,u,u,u,u,C.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,11.5,u,u,A.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),s=v.w
s=C.acs(d).bih(s,A.by,s.j(0.2),s,3.5)
x=v.f
w=v.r
s=C.E(C.ZR(C.li(u,u,u,w,x,v.e,A.h.D(v.d,x,w)),s),1)
return new C.a5(u,34,C.A(C.a([new C.a5(78,u,t,u),s,new C.a5(38,u,C.c(v.x,u,u,u,u,u,u,A.LI,A.dR,u,u),u)],y.p),A.l,u,A.e,A.i,0,u,u),u)}}
B.fL.prototype={
C(d){var x=this,w=null,v=x.f,u=v.j(0.12)
return new C.C(F.oY,C.aE(!1,A.a3,!0,C.n(12),C.aM(!1,C.n(12),!0,new C.C(A5.anT,C.A(C.a([C.V(x.c,v,w,w,w,17),A.dY,C.c(x.d,w,w,w,w,w,w,C.l(w,w,v,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),A.l,w,A.e,A.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new B.cEN(x),w,w,w,w,w,w,w),A.f,u,0,w,w,w,w,w,A.ai),w)}}
B.Gy.prototype={
C(d){var x,w=this,v=null,u=w.d,t=u?34:28,s=u?34:28,r=w.f,q=r?v:w.c
r=r?D.fGc:v
x=u?A.c:A.aT
x=C.K(x,A.r,u?2.5:1)
return C.aA(v,C.cY(v,v,v,v,A.b_,new C.p(q,v,x,v,u?C.a([new C.ac(0,A.H,w.c.j(0.6),A.J,10)],y.V):v,r,A.a6),A.hn,v,s,v,D.anE,v,v,v,t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.cEU(w),v,v,v,v,v,v,!1,A.a4)}}
B.o3.prototype={
VH(d,e){var x=C.dh()
x.sf0(C.cC(C.dw(0,0,0,d,0,0),new B.cEP(this,x,e)))
this.hh$.push(x.bh())},
mv(){var x=this,w=x.qi(new B.cER(x))
w.fU(0)
x.hg$!==$&&C.aT()
x.hg$=w}}
B.ciV.prototype={
LP(d){var x=this.c
x.qb(d&255)
x.qb(A.n.aH(d,8)&255)},
aJq(d,e,f,g,h,i){var x=this,w=x.c
w.K(0,D.cEh)
x.LP(i)
w.qb(255)
w.qb(0)
w.qb(44)
x.LP(d)
x.LP(e)
x.LP(f)
x.LP(g)
w.qb(0)
w.qb(8)
x.c9i(h)
w.qb(0)},
cR1(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=k.b
for(x=i,w=j,v=-1,u=-1,t=0;t<i;++t){s=t*j
for(r=0;r<j;++r){q=s+r
if(d[q]!==e[q]){if(r<w)w=r
if(r>v)v=r
if(t<x)x=t
if(t>u)u=t}}}if(v<0){k.aJq(0,0,1,1,new Uint8Array(C.cd(D.cy9)),f)
return}p=v-w+1
o=u-x+1
n=new Uint8Array(p*o)
for(t=0;t<o;++t){s=(x+t)*j+w
for(q=t*p,r=0;r<p;++r){m=s+r
l=e[m]
m=l===d[m]?255:l
n[q+r]=m}}k.aJq(w,x,p,o,n,f)},
c9i(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=new Int32Array(5003)
A.ij.h_(i,0,5003,-1)
x=new Int32Array(5003)
j.a=9
j.b=j.c=0
w=new Uint8Array(255)
j.d=0
v=new B.ciX(j,this,w)
u=new B.ciW(j,v)
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
A.ij.h_(i,0,5003,-1)
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
m.qb(s)
m.K(0,C.w4(w,0,j.d))}}}
B.fwq.prototype={}
B.bc8.prototype={
a5(d,e){var x=this
B.hTx(d,e,x.b,x.f,x.r,x.w,x.d,x.e,x.c)},
aD(d){var x=this
return d.b!==x.b||d.c!==x.c||d.d!==x.d||d.e!==x.e||d.f!==x.f||!d.r.A(0,x.r)||d.w!==x.w}}
B.Yq.prototype={
R(){return new B.av7(new C.au(new C.bb("NGMY",A.b9,A.aP),$.ay()),null,null)}}
B.av7.prototype={
gKx(){var x,w=this,v=w.d
if(v===$){x=C.br(null,C.dw(0,0,0,3200,0,0),null,1,null,w)
x.cU(0)
w.d!==$&&C.bF()
w.d=x
v=x}return v},
gu7(){var x=D.EE[this.w]
return x},
Z(){this.a4()
var x=this.gKx()
x.dr()
x.e2$.K(0,this.gci7())},
ci8(){var x,w,v,u,t,s,r,q=this,p=q.gKx().x
p===$&&C.d()
x=q.e.a.a
w=Math.max(1,(x.length===0?A.mR:new C.mQ(x)).gI(0))
if(q.Q&&p>=q.as)for(x=w-1,v=w<=1,u=0;u<w;++u){t=q.f
s=t==="type"
if(s)r=u/w/1.8
else r=v?0:u/x*0.45
if(q.as<r&&p>=r)if(s)E.dI(1500,"",35,0,0.18,"square")
else if(t==="glitch")E.dI(400+u*60,"",70,0,0.2,"square")
else{t=t==="neon"?"synth":"pluck"
B.mP(t,D.aCA[A.n.F(u,8)]+12,450,0.35)}}q.as=p},
t(){this.gKx().t()
var x=this.e
x.V$=$.ay()
x.W$=0
this.bzg()},
bu0(d){var x
this.l(new B.cq9(this,d))
x=this.gKx()
x.iK(0,0)
x.cU(0)},
a6Q(){var x=0,w=C.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$a6Q=C.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.at>=0){x=1
break}s.l(new B.cq4(s))
u=4
o=s.e
n=A.a.i(o.a.a)
if(n.length===0)n="title"
m=C.ag("[^A-Za-z0-9_-]+",!0,!1,!1,!1)
r=C.aH(n,m,"_")
o=o.a.a
n=s.f
m=s.r
l=s.y
k=s.gu7()
j=s.x
x=7
return C.b(B.hun(D.a83[s.z].b,l,k,j,20,1080,n,new B.cq5(s),m,o),$async$a6Q)
case 7:q=e
if(J.aa(q)===0){o=C.bd("empty")
throw C.Y(o)}x=8
return C.b(B.aU8(q,r),$async$a6Q)
case 8:p=e
if(s.c!=null)s.l(new B.cq6(s,p))
u=2
x=6
break
case 4:u=3
h=t.pop()
if(s.c!=null)s.l(new B.cq7(s))
x=6
break
case 3:x=2
break
case 6:if(s.c!=null)s.l(new B.cq8(s))
case 1:return C.h(v,w)
case 2:return C.f(t.at(-1),w)}})
return C.i($async$a6Q,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=C.at(new C.fK(D.a83[l.z].b,C.bv(C.n(22),new C.e9(C.c9(l.gKx(),new B.cpU(l),k),k),A.ap),k),k,k,k),i=A.c.j(0.06)
i=C.aN(k,A.M,!1,k,!0,A.t,k,C.aP(),l.e,k,k,k,k,k,2,C.bC(k,new C.b6(4,C.n(14),A.a1),k,k,k,k,"",k,!0,k,k,k,k,k,k,i,!0,k,k,k,k,k,k,k,k,k,k,k,k,k,A.FP,"Type your title",k,k,k,k,k,!0,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),A.y,!0,k,!0,k,!1,k,A.am,k,k,k,k,k,k,k,28,k,1,k,k,!1,"\u2022",k,new B.cpV(l),k,k,k,!1,k,k,!1,k,!0,k,A.ae,k,k,k,k,k,k,k,k,k,k,k,A.hi,!0,A.a7,k,A.ao,k,k,k,k)
x=y.p
w=C.a([],x)
for(v=0;v<24;++v){u=D.dE4[v]
w.push(new B.e5(u.b,l.f===u.a,new B.cpW(l,u),k,A.bu,k))}t=C.a([],x)
for(v=0;v<8;++v){u=D.dey[v]
t.push(new B.e5(u.b,l.r===u.a,new B.cpX(l,u),k,A.c5,k))}s=C.a([],x)
for(r=0;r<20;++r){q=D.dIX[r]
s.push(new B.e5(q.a+" "+q.b,l.y===r,new B.cpY(l,r),k,A.aH,k))}q=C.a([],x)
for(r=0;r<8;++r)q.push(new B.Gy(D.EE[r],l.w===r,new B.cpZ(l,r),!1,k))
p=C.a([],x)
for(r=0;r<3;++r)p.push(new B.e5(D.a83[r].a,l.z===r,new B.cq_(l,r),k,A.bu,k))
p.push(A.b7)
o=l.Q
n=o?"Sound on":"Sound off"
m=o?R.p7:Q.u_
p.push(new B.e5(n,o,new B.cq0(l),m,A.bu,k))
p.push(A.b7)
p.push(new B.fL(A.oe,"Replay",new B.cq1(l),A.c,k))
m=l.x
m=C.a([i,A.N,new B.fm(w,"MOVE",k),new B.fm(t,"LOOK",k),new B.fm(s,"SCENE",k),new B.fm(q,"COLOUR",k),new B.fm(p,"SHAPE",k),B.jd(A.bu,A.n.v(A.h.S(m)),"Size",96,28,new B.cq2(l),m),A.at],x)
i=l.at
if(i>=0)m.push(new C.C(A.jY,C.w(C.a([C.bv(C.n(6),C.jI(A.by,k,A.bu,8,k,i,k),A.ap),A.at,C.c("Making your animation\u2026 "+A.h.S(i*100)+"%",k,k,k,k,k,k,A.nC,k,k,k)],x),A.l,k,A.e,A.i,0,A.p),k))
else m.push(new C.a5(1/0,k,C.df(A.oi,k,D.hdk,l.gcW7(),C.bp(A.bu,k,k,k,A.v,k,A.kN,k,k,k,k,k)),k))
i=l.ax
if(i.length!==0)m.push(new C.C(A.hz,C.c(i,k,k,k,k,k,k,D.fIq,A.K,k,k),k))
return B.m0(A.bu,A.fh,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a sharp moving GIF to post or send.",new C.C(A.bD,j,k),"TITLE ANIMATOR",C.w(m,A.l,k,A.e,A.P,0,A.p))},
ga0(d){return this.x}}
B.aIf.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.ads.prototype={
bFk(d,e,f,a0,a1,a2,a3,a4,a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=-999
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
x=h.bIE()
h.ay!==$&&C.aT()
h.ay=x},
bIE(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
for(x=this.y,w=x.length,v=0,u=0;u<x.length;x.length===w||(0,C.I)(x),++u){t=x[u]
for(s=0,r=0;r<t.length-1;r=q){q=r+1
p=(J.t(t[r],1)+J.t(t[q],1))/2*3.141592653589793/180
o=J.t(t[r],0)
n=Math.cos(p)
m=J.t(t[r],1)
l=J.t(t[q],0)
k=Math.cos(p)
s+=o*n*J.t(t[q],1)-l*k*m}v+=Math.abs(s)/2}return v*111.32*111.32},
GV(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=m.z
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
B.adt.prototype={
cQb(d,e){var x,w,v,u,t,s,r,q
for(x=d;x>180;)x-=360
while(x<-180)x+=360
for(w=this.a,v=w.length,u=null,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
if(s.GV(0,x,e)){if(u!=null){r=s.ax
r===$&&C.d()
q=u.ax
q===$&&C.d()
q=r<q
r=q}else r=!0
if(r)u=s}}return u}}
B.w3.prototype={}
B.QR.prototype={}
B.z_.prototype={}
B.QQ.prototype={
fH(d,e,f){var x,w,v,u=this
if(!f)return
if((u.a+=e)<2.8)return
u.a=0
x=u.b
w=D.cg_[x.aw(7)]
x=x.hc()?0:12
v=A.n.F(u.c++,3)===0?"flute":"bell"
B.mP(v,w+x-12,2200,0.1)}}
B.Xn.prototype={
R(){var x=$.ay()
return new B.aH4(new C.cB(null,y.z),new C.au(A.ay,x),new B.QQ(A.cW),D.dvd,A.aA,D.a7L,$,A.bH,0,C.a([],y.X),null,null)}}
B.aH4.prototype={
Z(){var x=this
x.a4()
x.mv()
x.a.toString
x.b0F()},
b0F(){var x=this
x.l(new B.ecl(x))
B.bcj().bD(new B.ecm(x),y.P).eG(new B.ecn(x))},
t(){var x=this.e
x.V$=$.ay()
x.W$=0
this.bCf()},
cD6(d){var x,w,v,u,t,s,r,q,p,o
this.r=d
x=C.a([],y.y)
for(w=d.a,v=w.length,u=y.l,t=0;t<w.length;w.length===v||(0,C.I)(w),++t){s=w[t]
r=C.a([],u)
for(q=s.y,p=q.length,o=0;o<q.length;q.length===p||(0,C.I)(q),++o)r.push(new B.eco(q[o]).$0())
x.push(r)}this.w=x},
gY3(){var x=this.fy
return x.A(0,A.aA)?100:Math.min(x.a,x.b)*0.43},
axg(d,e,f){var x=this
x.at=d
x.ax=e
x.ay=A.h.D(f,1,16)
x.Q=x.as=0},
aE2(d){var x
this.fx=d
x=d.ax
x===$&&C.d()
this.axg(d.x,d.w,105/Math.max(x,3))
C.f4()
B.mP("bell",(A.d.ca(D.a7m,d.c)+1)*3+12,900,0.45)
E.dI(300,"",280,1.4,0.15,"tri")},
mO(d){var x,w,v,u,t,s,r,q=this
q.f.fH(0,d,q.db)
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
cic(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.r
if(n==null||o.fy.A(0,A.aA))return null
x=o.fy
w=o.gY3()
v=o.z
u=(d.a-x.a/2)/(w*v)
t=(x.b/2-d.b)/(o.gY3()*v)
s=u*u+t*t
if(s>1)return null
r=Math.sqrt(1-s)
q=o.x*3.141592653589793/180
p=Math.asin(A.h.D(r*Math.sin(q)+t*Math.cos(q),-1,1))
return n.cQb((o.y*3.141592653589793/180+Math.atan2(u,r*Math.cos(q)-t*Math.sin(q)))*180/3.141592653589793,p*180/3.141592653589793)},
cib(d){var x=this,w=x.r
if(w==null||A.a.i(d).length===0){x.l(new B.ech(x))
return}x.l(new B.eci(x,w,A.a.i(d).toLowerCase()))},
bW7(){var x=null,w=this.c
w.toString
C.cf(x,x,!0,x,new B.ecf(),w,x,!0,!0,y.H)},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.fx,m=y.p,l=C.a([C.aJ(o,o,o,o,D.bZI,o,o,o,p.gbW6(),o,o,o,o,"Earth facts",o),C.aJ(o,o,o,o,D.p9,o,o,o,new B.ecH(p,d),o,o,o,o,"Share",o)],m),k=C.cg(new B.ecI(p,n)),j=A.c.j(0.06)
j=C.a([C.aN(o,A.M,!1,o,!0,A.t,o,C.aP(),p.e,o,o,o,o,o,2,C.bC(o,new C.b6(4,C.n(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,j,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,A.FP,"Search a country",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,D.c7r,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,p.gcia(),o,o,o,!1,o,o,!1,o,!0,o,A.ae,o,o,o,o,o,o,o,o,o,o,o,A.jO,!0,A.a7,o,A.ao,o,o,o,o)],m)
if(p.id.length!==0){x=C.a([],m)
for(w=p.id,v=w.length,u=0;u<w.length;w.length===v||(0,C.I)(w),++u){t=w[u]
x.push(new B.e5(t.a,!1,new B.ecJ(p,t),A.mE,A.aH,o))}j.push(new C.C(A.hz,new C.a5(o,38,C.co(x,o,o,o,o,o,A.aK,!1),o),o))}j.push(A.aj)
x=C.a([new B.e5("Whole Earth",!1,new B.ecN(p),A.i3,A.aH,o)],m)
for(w=D.aLz.gdW(D.aLz),w=w.gae(w);w.B();){v=w.gP(w)
x.push(new B.e5(v.a,!1,new B.ecO(p,v),o,A.aH,o))}x.push(new B.e5("Random",!1,new B.ecP(p),A.ob,A.aH,o))
j.push(new B.fm(x,"GO TO",o))
x=p.z
j.push(B.jd(A.aH,A.h.a1(x,1)+"x","Zoom",16,0.8,new B.ecQ(p),x))
x=p.dy
j.push(B.jd(A.bu,A.a.aY(A.n.v(A.h.bd(x)),2,"0")+":00","Time",24,0,new B.ecR(p),x))
x=p.fr
j.push(B.jd(A.bf,p.cBP(),"Season",365,0,new B.ecS(p),x))
x=p.ch
w=p.CW
v=p.cx
s=p.cy
r=p.db
q=r?A.lH:D.IG
j.push(new B.fm(C.a([new B.e5("Spin",x,new B.ecT(p),A1.Qy,A.aH,o),new B.e5("Night",w,new B.ecU(p),A.vt,A.aH,o),new B.e5("Borders",v,new B.ecK(p),D.bUN,A.aH,o),new B.e5("Names",s,new B.ecL(p),L.DR,A.aH,o),new B.e5("Music",r,new B.ecM(p),q,A.aH,o)],m),o,o))
return B.m0(A.aH,l,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",k,"EARTH GLOBE",C.w(j,A.l,o,A.e,A.P,0,A.p))},
cBP(){var x,w,v
for(x=this.fr,w=0,v=0;v<12;++v)if(x>=D.aDW[v])w=v
return A.i5[w]+" "+(A.h.bd(x-D.aDW[w])+1)},
ci9(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.ay
j===$&&C.d()
x=j>0?d.e/j:0
w=d.e
v=w/79e8*100
u=d.c
t=new H.pH(1,A.n.F((A.d.ca(D.a7m,u)+1)*47,360),0.55,1).jl()
s=new B.ecd()
r=C.n(20)
q=C.K(t.j(0.6),A.r,1)
p=y.p
o=C.A(C.a([C.q(k,k,A.f,k,k,new C.p(t,k,k,k,k,k,A.a6),k,10,k,k,k,k,k,10),A.aa,C.E(C.c(d.a,k,1,A.a2,k,k,k,A.dw,k,k,k),1),C.aJ(k,k,k,k,S.Rr,k,k,k,new B.ecc(this),k,k,k,k,k,A.cp)],p),A.l,k,A.e,A.i,0,k,k)
n=d.d
u=C.c(u+(n.length!==0?" \xb7 "+n:""),k,k,k,k,k,k,W.hI,k,k,k)
n=D.dN0.h(0,d.b)
n=s.$2("CAPITAL",n==null?"\u2014":n)
m=w>0
w=C.A(C.a([n,A.aa,s.$2("PEOPLE",m?B.fSv(w):"\u2014")],p),A.l,k,A.e,A.i,0,k,k)
j=s.$2("SIZE",B.I3(j)+" km\xb2")
if(m)n=(x<10?A.h.a1(x,1):B.I3(x))+" per km\xb2"
else n="\u2014"
n=C.A(C.a([j,A.aa,s.$2("CROWDING",n)],p),A.l,k,A.e,A.i,0,k,k)
j=s.$2("WORLD SHARE",(v<0.1?A.h.a1(v,3):A.h.a1(v,1))+"% of people")
m=d.f
l=d.r
return C.q(k,C.w(C.a([o,u,A.N,w,A.N,n,A.N,C.A(C.a([j,A.aa,s.$2("ECONOMY",m>0?"$"+B.fSv(m*1e6)+" \xb7 "+l:l)],p),A.l,k,A.e,A.i,0,k,k)],p),A.B,k,A.e,A.P,0,A.p),A.f,k,k,new C.p(D.a_4,k,q,r,k,k,A.m),k,k,k,k,D.aoa,k,k,k)}}
B.bkd.prototype={
a5(d6,d7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=this,d1=null,d2=d7.a,d3=d7.b,d4=$.T(),d5=C.L()
d5.r=D.CC.gp(0)
d6.aE(new C.a4(0,0,0+d2,0+d3),d5)
x=new C.e6()
x.cW(4)
for(w=0;w<90;++w){d5=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.25+x.ai()*0.5).gp(0)
d6.O(new C.m(d5*d2,v*d3),u*1.2+0.3,t)}d2/=2
d3/=2
s=new C.m(d2,d3)
r=d0.f
d5=C.L()
v=y.O
d5.san(new C.bU(A.z,0.5,A.w,d1,0,C.a([A.L,A.aH.j(0.35),A.L],v),D.dcC,d1).az(0,C.bY(s,r*1.1)))
d6.O(s,r*1.05,d5)
q=C.bY(s,r)
d5=C.L()
d5.san(D.ePL.az(0,q))
d6.O(s,r,d5)
d5=d6.c
J.bs(d5.save())
u=y.v
d4=new C.aI(d4.r,A.ak,d1,d1,C.a([],u))
d4.E(new C.jM(q))
d6.mI(0,d4)
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
i=new B.drK(o,n,m,s,r)
for(h=-60;h<=60;h+=30){for(d4=h*3.141592653589793/180,g=d1,f=-180;f<=180;f+=4){e=i.$2(d4,f*3.141592653589793/180)
if(e==null){if(g!=null)d6.af(g,j)
g=d1}else{t=e.a
d=e.b
if(g==null){a0=$.T()
a1=C.a([],u)
g=new C.aI(a0.r,A.ak,d1,d1,a1)
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
g=new C.aI(a0.r,A.ak,d1,d1,a1)
a1.push(new C.aZ(t,d))
g.ac()}else{t=new C.aq(t,d)
g.r.push(t)
d=g.f
if(d!=null)t.aj(d)
g.ac()}}}if(g!=null)d6.af(g,j)}a2=d0.b
if(a2!=null&&d0.c.length===a2.a.length){a3=C.a([],y.E)
for(d4=a2.a,t=d0.c,d=!d0.y,a0=d0.w,a4=0;a4<d4.length;++a4){a5=d4[a4]
a6=a5===a0
a7=A.n.F((A.d.ca(D.a7m,a5.c)+1)*47,360)
$.T()
a8=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a1=a6?0.35:0.5
a8.r=new H.pH(1,a7,a1,a6?1:0.62).jl().gp(0)
a9=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a9.b=A.ad
a9.c=a6?2.2:p
a9.e=A.dQ
a9.r=(a6?A.c:A.v.j(0.55)).gp(0)
for(a1=t[a4],b0=a1.length,b1=0;b1<a1.length;a1.length===b0||(0,C.I)(a1),++b1){b2=a1[b1]
b3=b2.length/4|0
b4=$.T()
b5=C.a([],u)
b6=new C.aI(b4.r,A.ak,d1,d1,b5)
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
$.T()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.b=A.ad
t.c=5
t.r=A.c.j(0.25).gp(0)
t.y=A.vp
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
c7=B.ii_(a5.a,a1,b0)
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
$.T()
u=C.L()
u.san(new C.bU(A.z,0.5,A.w,d1,0,C.a([A.L,A.L,D.bjR.j(0.78)],v),D.dvI,d1).az(0,C.bY(new C.m(d2+b9*c9*r,d3-(m*b8-n*b9*c2)*r),r*(1.15+0.5*(1-d4)*0.5))))
d6.O(s,r,u)}$.T()
d2=C.L()
d2.san(new C.bU(A.z,0.5,A.w,d1,0,C.a([A.L,A.v.j(0.4)],v),D.dKv,d1).az(0,q))
d6.O(s,r,d2)
d5.restore()
d5=C.L()
d5.b=A.ad
d5.c=1.4
d5.r=A.hm.j(0.5).gp(0)
d6.O(s,r,d5)},
aD(d){return!0}}
B.aPz.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.aPA.prototype={
t(){var x,w,v
for(x=this.hh$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hg$
x===$&&C.d()
x.t()
this.bCe()}}
B.bzd.prototype={}
B.Yt.prototype={
R(){return new B.bpK()}}
B.bpK.prototype={
gaXg(){var x=this.d
if(x===$)x=this.d=A.cW.aw(16)
return x},
Z(){this.a4()
B.bcj().fl(new B.f_t(),new B.f_u(),y.P)},
C(d){var x=null,w=C.eQ(x,x,x,!0,!0,D.CC,x,1,!0,x,0,!1,x,!1,x,x,C.aJ(x,x,x,x,D.auv,x,x,x,new B.f_q(d),x,x,x,x,x,x),x,!0,x,x,x,x,x,D.hgI,x,x,x,1,x,!0),v=C.n(18),u=A.aH.j(0.1),t=C.K(A.aH.j(0.35),A.r,1),s=y.p
return C.c6(w,D.CC,C.co(C.a([C.q(x,C.A(C.a([D.bYl,A.ar,C.E(C.c(D.dhl[this.gaXg()],x,x,x,x,x,x,D.fXQ,x,x,x),1),C.aJ(x,x,x,x,D.c8t,x,x,x,new B.f_r(this),x,x,x,x,"Another fact",x)],s),A.l,x,A.e,A.i,0,x,x),A.f,x,x,new C.p(u,x,t,v,x,x,A.m),x,x,x,x,A.bD,x,x,x),A.aB,C.cg(new B.f_s())],s),x,x,A.a2h,x,x,A.ah,!1),x,!1,!1,x,x)}}
B.Yd.prototype={
R(){return B.iis()}}
B.bpx.prototype={
cth(d){var x=d.c,w=B.iiu(x),v=d.e,u=v<=0?0:6.283185307179586*(this.f/v)+x*1.7
return new C.m(Math.cos(u)*w,Math.sin(u)*w)},
Z(){this.a4()
this.mv()},
mO(d){var x,w,v,u=this
u.e.fH(0,d,u.ay)
u.f=u.f+d*u.r
x=u.Q
if(x!=null){w=u.cth(x)
v=new C.m(-w.a,-w.b).aM(0,u.w)
w=C.l_(u.x,v,1-Math.exp(-d*5))
w.toString
u.x=w}},
gcid(){var x=this.ch
return new C.m(x.a/2,x.b/2).a6(0,this.x)},
cih(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(x=d.a,w=d.b,v=null,u=30,t=0;t<10;++t){s=D.EB[t]
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
b4v(d){this.l(new B.eSQ(this,d))
C.f4()
B.mP("bell",D.dKH[A.n.F(A.d.ca(D.EB,d),10)]+12,1000,0.5)},
C(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=y.p,k=C.a([C.aJ(n,n,n,n,D.p9,n,n,n,new B.eT0(o,d),n,n,n,n,"Share",n)],l),j=C.cg(new B.eT1(o,m)),i=C.a([new B.e5("All",!1,new B.eT2(o),A.a5g,A.aQ,n)],l)
for(x=0;x<10;++x){w=D.EB[x]
i.push(new B.e5(w.a,o.z===w,new B.eT3(o,w),n,C.b_(w.z),n))}v=Math.log(o.r+1)
u=Math.log(3651)
t=o.r
t=t<10?A.h.a1(t,0)+" d/s":""+A.h.S(t)+" d/s"
u=B.jd(A.aQ,t,"Time",1,0,new B.eT4(o),v/u)
v=o.w
v=B.jd(A.aQ,A.h.a1(v,1)+"x","Zoom",9,0.5,new B.eT5(o),v)
t=o.as
s=o.at
r=o.ax
q=o.ay
p=q?A.lH:D.IG
return B.m0(A.aQ,k,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",j,"SOLAR SYSTEM",C.w(C.a([new B.fm(i,"GO TO",n),u,v,new B.fm(C.a([new B.e5("Orbits",t,new B.eT6(o),n,A.aQ,n),new B.e5("Names",s,new B.eT7(o),n,A.aQ,n),new B.e5("Asteroids",r,new B.eT8(o),n,A.aQ,n),new B.e5("Music",q,new B.eT9(o),p,A.aQ,n)],l),n,n)],l),A.l,n,A.e,A.P,0,A.p))},
cie(d){var x,w,v,u,t,s=null,r=C.b_(d.z),q=d.c,p=q*8.317,o=new B.eSO(),n=C.n(20),m=C.K(r.j(0.6),A.r,1),l=C.q(s,s,A.f,s,s,new C.p(r,s,s,s,s,s,A.a6),s,12,s,s,s,s,s,12),k=d.b,j=k==="star"
if(j)k="Star"
else k=k==="dwarf"?"Dwarf planet":"Planet"
x=y.p
k=C.A(C.a([l,A.aa,C.E(C.c(d.a+"  \xb7  "+k,s,s,s,s,s,s,A.jr,s,s,s),1),C.aJ(s,s,s,s,S.Rr,s,s,s,new B.eSN(this),s,s,s,s,s,A.cp)],x),A.l,s,A.e,A.i,0,s,s)
l=C.c(d.y,s,s,s,s,s,s,A0.FQ,s,s,s)
w=o.$2("WIDTH",B.I3(d.d*2)+" km")
v=q===0
q=C.A(C.a([w,A.aa,o.$2("FROM THE SUN",v?"\u2014":C.v(q)+" AU ("+B.I3(q*149.6)+" million km)")],x),A.l,s,A.e,A.i,0,s,s)
w=d.e
w=o.$2("ONE YEAR",w===0?"\u2014":new B.eSP().$1(w))
u=d.f
w=C.A(C.a([w,A.aa,o.$2("ONE DAY",u>=48?A.h.a1(u/24,0)+" Earth days":A.h.a1(u,1)+" hours")],x),A.l,s,A.e,A.i,0,s,s)
u=d.r
t=u>50?0:1
t=C.A(C.a([o.$2("GRAVITY",C.v(u)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.h.a1(50*u/9.81,t)+" kg"),A.aa,o.$2("TEMPERATURE",""+A.n.S(d.x)+"\xb0C")],x),A.l,s,A.e,A.i,0,s,s)
u=o.$2("MOONS",j?"\u2014":""+d.w)
if(v)j="\u2014"
else j=p<90?A.h.a1(p,1)+" minutes":A.h.a1(p/60,1)+" hours"
return C.q(s,C.w(C.a([k,A.at,l,A.N,q,A.N,w,A.N,t,A.N,C.A(C.a([u,A.aa,o.$2("SUNLIGHT TAKES",j)],x),A.l,s,A.e,A.i,0,s,s)],x),A.B,s,A.e,A.P,0,A.p),A.f,s,s,new C.p(D.a_4,s,m,n,s,s,A.m),s,s,s,s,D.aoa,s,s,s)}}
B.bxf.prototype={
a5(a6,a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a7.a,a5=a7.b
$.T()
x=C.L()
x.r=D.CC.gp(0)
a6.aE(new C.a4(0,0,0+a4,0+a5),x)
w=new C.e6()
w.cW(8)
for(v=0;v<110;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a6.O(new C.m(x*a4,u*a5),t*1.2+0.3,s)}a4=this.b
r=a4.gcid()
q=a4.w
if(a4.as)for(a5=A.d.gae(D.EB),x=new C.eT(a5,new B.fkA());x.B();){u=a5.gP(0).c
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
a6.O(new C.m(x+s*m,u+p*m),0.9,o)}l=B.iit(A.d.gH(D.EB))*Math.sqrt(q)*1.4
a5=l*3.2
x=C.L()
u=y.O
x.san(new C.bU(A.z,0.5,A.w,a3,0,C.a([A.aQ.j(0.5),A.L],u),a3,a3).az(0,C.bY(r,a5)))
a6.O(r,a5,x)
x=C.L()
x.san(D.ePF.az(0,C.bY(r,l)))
a6.O(r,l,x)
if(a4.at){k=B.hIH("Sun",10.5,A.ab)
k.a5(a6,r.a6(0,new C.m(-k.b.c/2,l+4)))}for(a5=A.d.gae(D.EB),x=new C.eT(a5,new B.fkB()),t=q>1.6,s=r.a,p=r.b,o=a6.c;x.B();){j=a5.gP(0)
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
d=C.c_(A.J,m*1.3,m*4.2)
a0=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a0.b=A.ad
a0.c=m*0.45
a0.r=A.bO.j(0.55).gp(0)
a6.c2(d,a0)
o.restore()}d=new C.ar(A.U,A.R,A.X,A.Y,A.W)
d.r=f.j(0.3).gp(0)
d.y=A.vp
a6.O(g,m+3,d)
d=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a0=C.ap(f,A.v,0.55)
a0.toString
d.san(new C.bU(N.C_,0.5,A.w,a3,0,C.a([A.c,f,a0],u),T.Th,a3).az(0,C.bY(g,m)))
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
a6.O(new C.m(i+j*a1,h+d*a1),1.8*a0,a2)}if(t&&e==="Jupiter")for(v=0;v<4;++v){n=a4.f/D.dnE[v]*2*3.141592653589793
a1=m+(6+v*4)*Math.sqrt(q)
j=Math.cos(n)
d=Math.sin(n)
a0=Math.sqrt(q)
a2=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a2.r=A.ab.gp(0)
a6.O(new C.m(i+j*a1,h+d*a1),1.4*a0,a2)}if(a4.at){k=B.hIH(e,10.5,A.ab)
k.a5(a6,new C.m(i+-k.b.c/2,h+(m+4)))}}},
aD(d){return!0}}
B.Xo.prototype={
R(){var x=y.i
return new B.aH5(new B.QQ(A.cW),C.c4(5,0,!1,x),C.c4(5,0,!1,x),C.c4(5,null,!1,y.B),A.J,A.J,C.a([],y.g),$,A.bH,0,C.a([],y.X),null,null)}}
B.aH5.prototype={
cGu(){var x,w,v,u,t=this
t.x=!0
t.y=0
for(x=t.z,w=t.Q,v=t.as,u=0;u<5;++u){x[u]=0
w[u]=0
v[u]=null}},
cig(){var x,w,v,u,t=this,s="An oval orbit: it goes round Earth again and again."
t.cx=D.eCj
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
t.l(new B.ecY())},
Z(){this.a4()
this.mv()},
mO(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.e.fH(0,d,j.d!=="drop")
if(j.d==="drop"&&j.x){x=d*j.w
j.y+=x
for(w=j.z,v=x/12,u=j.Q,t=j.as,s=0;s<5;++s){if(t[s]!=null)continue
r=D.AI[s]
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
break}}}if(A.d.cC(t,new B.edq()))j.x=!1}if(j.d==="cannon"&&j.CW){x=d*900/30
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
if(w.length===0||A.d.gal(w).aI(0,j.cx).gcE()>120)w.push(j.cx)
if(w.length>700)A.d.cP(w,0)
if(j.cx.gcE()>6e5)j.CW=!1}},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=q.d
if(o==="drop")o=q.bU8()
else o=o==="weight"?q.cOh():q.bM2()
x=y.p
w=C.a([],x)
for(v=0;v<3;++v){u=D.dHe[v]
w.push(new B.e5(u.b,q.d===u.a,new B.edc(q,u),u.c,A.cX,p))}w=C.a([new B.fm(w,p,p)],x)
if(q.d==="drop"){t=q.f
s=q.r
r=s?"Air on":"Air off"
s=C.a([new B.e5("Hammer",!t,new B.edd(q),A_.DP,A.cX,p),new B.e5("Feather",t,new B.ede(q),L.DF,A.cX,p),new B.e5(r,s,new B.edi(q),A.Is,A.aH,p)],x)
r=q.w
A.d.u(w,C.a([new B.fm(s,p,p),B.jd(A.cX,""+A.h.S(r*100)+"%","Slow motion",1,0.05,new B.edj(q),r),new B.fm(C.a([new B.fL(A.q3,"Drop!",new B.edk(q),A.bf,p)],x),p,p)],x))}if(q.d==="weight"){t=q.at
t=B.jd(A.cX,""+A.h.S(t)+" kg","Your weight",120,20,new B.edl(q),t)
s=q.ax
A.d.u(w,C.a([t,B.jd(A.cX,""+A.h.S(s*100)+" cm","Your jump",1.2,0.1,new B.edm(q),s)],x))}if(q.d==="cannon"){t=q.ay
t=B.jd(A.cX,A.h.a1(t,1)+" km/s","Speed",13,0,new B.edn(q),t)
s=q.ch
A.d.u(w,C.a([t,B.jd(A.cX,A.h.a1(s,1)+"x out","View",8,0.5,new B.edo(q),s),new B.fm(C.a([new B.fL(A.oh,"Fire!",q.gcif(),A.bf,p),new B.fL(A.q3,"Falls",new B.edp(q),A.c,p),new B.fL(A.q1,"Orbit 7.7",new B.edf(q),A.c,p),new B.fL(D.bXM,"Oval 9",new B.edg(q),A.c,p),new B.fL(A.DV,"Escape",new B.edh(q),A.c,p)],x),p,p)],x))}return B.m0(A.cX,A.fh,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",o,"GRAVITY LAB",C.w(w,A.l,p,A.e,A.P,0,A.p))},
bU8(){return new C.C(D.bGc,C.cg(new B.ecX(this)),null)},
cOh(){var x,w,v,u=null,t=[D.fhg,D.fjb,D.fjj,D.fjN,D.fjh,D.fjV,D.fi4,D.fkj,D.fiP],s=y.p,r=C.a([D.h3X,A.S],s)
for(x=0;x<9;++x){w=t[x]
v=C.b_(w.c)
r.push(new C.C(A.cB,new C.c1(A.aK,A.e,A.i,A.l,u,A.p,u,0,C.a([new C.a5(62,u,C.c(w.a,u,u,u,u,u,u,new C.G(!0,v,u,u,u,u,12.5,A.u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),u,u,u),u),new C.bu(1,A.b8,new C.Cp(new B.ecZ(this,w),u),u)],s),u),u))}r.push(A.at)
r.push(D.h6o)
return C.co(r,u,u,A.hp,u,u,A.ah,!1)},
bM2(){return C.cg(new B.ecV(this))}}
B.bfi.prototype={
a5(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.a,i=e.b,h=$.T(),g=C.L()
g.r=D.CC.gp(0)
d.aE(new C.a4(0,0,0+j,0+i),g)
x=new C.e6()
x.cW(2)
for(w=0;w<80;++w){g=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.2+x.ai()*0.5).gp(0)
d.O(new C.m(g*j,v*i),u*1.1+0.3,t)}j=l.c
s=6371*j
i=l.b
g=C.L()
g.san(new C.bU(A.z,0.5,A.w,k,0,C.a([A.L,A.aH.j(0.35),A.L],y.O),D.dwJ,k).az(0,C.bY(i,s*1.1)))
d.O(i,s*1.06,g)
g=C.L()
g.san(D.ePB.az(0,C.bY(i,s)))
d.O(i,s,g)
r=i.a6(0,new C.m(0,-s))
h=h.r
g=y.v
q=new C.aI(h,A.ak,k,k,C.a([],g))
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
p=new C.aI(h,A.ak,k,k,g)
h=i.a
u=i.b
p.E(new C.aZ(h+A.d.gH(v).a*j,u+A.d.gH(v).b*j))
for(v=C.cJ(v,1,k,C.U(v).c),t=v.$ti,v=new C.bQ(v,v.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");v.B();){o=v.d
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
h.r=A.cX.j(0.9).gp(0)
d.af(p,h)}if(l.f){h=l.d
m=i.a6(0,new C.m(h.a*j,h.b*j))
j=C.L()
j.r=A.cX.j(0.4).gp(0)
j.y=O.oZ
d.O(m,7,j)
j=C.L()
j.r=A.c.gp(0)
d.O(m,4,j)}},
aD(d){return!0}}
B.Y6.prototype={
R(){return new B.bpu(new C.cB(null,y.z),$,A.bH,0,C.a([],y.X),null,null)}}
B.bpu.prototype={
Z(){this.a4()
this.mv()},
mO(d){},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=D.Tw[m.e],j=D.Tw[m.f],i=k.b>=j.b,h=i?k:j,g=i?j:k
i=h.b
x=g.b
w=i/x
v=y.p
u=C.a([C.aJ(l,l,l,l,D.p9,l,l,l,new B.eLw(m,d),l,l,l,l,"Share",l)],v)
t=C.E(C.b4(l,l,l,new B.bwN(g,h,w,l),A.hg),1)
s=h.a
r=w<10?A.h.a1(w,1):B.I3(w)
q=g.a
r=C.c(s+" is "+r+" times wider than "+q,l,l,l,l,l,l,A.hj,A.K,l,l)
p=B.I3(w*w*w)
o=A.a.c6(q,"s")?"":"s"
i=C.w(C.a([t,C.q(l,C.w(C.a([r,A.at,C.c("About "+p+" "+q+o+" would fit inside "+s+".",l,l,l,l,l,l,P.uz,A.K,l,l),A.bs,C.c(q+": "+B.I3(x*2)+" km wide. "+s+": "+B.I3(i*2)+" km wide.",l,l,l,l,l,l,P.BC,A.K,l,l)],v),A.l,l,A.e,A.i,0,A.p),A.f,l,l,l,l,l,l,l,A.aoK,l,l,1/0)],v),A.l,l,A.e,A.i,0,A.p)
s=C.a([],v)
for(n=0;n<10;++n){x=D.Tw[n]
s.push(new B.e5(x.a,m.e===n,new B.eLx(m,n),l,C.b_(x.c),l))}x=C.a([],v)
for(n=0;n<10;++n){t=D.Tw[n]
x.push(new B.e5(t.a,m.f===n,new B.eLy(m,n),l,C.b_(t.c),l))}return B.m0(A.c5,u,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new C.e9(i,m.d),"SIZE COMPARE",C.w(C.a([new B.fm(s,"FIRST",l),new B.fm(x,"SECOND",l)],v),A.l,l,A.e,A.P,0,A.p))}}
B.bwN.prototype={
a5(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=e.b
$.T()
x=C.L()
x.r=D.brb.gp(0)
d.aE(new C.a4(0,0,0+k,0+j),x)
w=new C.e6()
w.cW(6)
for(v=0;v<70;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.2+w.ai()*0.4).gp(0)
d.O(new C.m(x*k,u*j),t+0.3,s)}r=Math.min(k/2-16,j/2-10)*0.98
q=Math.max(r/this.d,0.8)
k*=0.5
j*=0.5
p=new C.m(k,j)
x=new B.fiI(d)
u=this.c
x.$3(p,r,C.b_(u.c))
t=r-q
o=new C.m(k-r+q+6+t*0.1,j+r-q-6-t*0.05)
t=this.b
x.$3(o,q,C.b_(t.c))
x=C.L()
x.b=A.ad
x.c=1.4
x.r=A.ab.gp(0)
d.O(o,q+3,x)
n=C.h0(l,A.cJ,l,l,l,C.cW(l,l,l,l,l,l,l,l,l,D.fP8,t.a),A.a7,A.ca,l,A.e4,A.cb)
n.eJ()
t=n.b
x=t.c
k=-q
t=t.a.c
if(k-t.gb4(t)-6<4)k=q+6
else{j=n.b.a.c
j=k-j.gb4(j)-6
k=j}n.a5(d,o.a6(0,new C.m(-x/2,k)))
m=C.h0(l,A.cJ,l,l,l,C.cW(l,l,l,l,l,l,l,l,l,D.fSJ,u.a),A.a7,A.ca,l,A.e4,A.cb)
m.eJ()
u=m.b
k=u.c
u=u.a.c
m.a5(d,p.a6(0,new C.m(-k/2,-u.gb4(u)/2)))},
aD(d){return!0}}
B.aPB.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCy.prototype={
t(){var x,w,v
for(x=this.hh$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hg$
x===$&&C.d()
x.t()
this.bCg()}}
B.aQ7.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCK.prototype={
t(){var x,w,v
for(x=this.hh$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hg$
x===$&&C.d()
x.t()
this.bCN()}}
B.aQa.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCM.prototype={
t(){var x,w,v
for(x=this.hh$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hg$
x===$&&C.d()
x.t()
this.bCQ()}}
B.Rp.prototype={}
B.Wq.prototype={
R(){return B.iiq()}}
B.bo5.prototype={
Z(){this.a4()
this.mv()},
mO(d){var x,w,v,u,t,s=this
s.f+=d
s.e.fH(0,d,s.y)
for(x=s.z,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v){u=x[v]
u.a=u.a+d*u.c/Math.pow(u.b,1.5)
t=u.b
t-=d*(0.5+1.6/t)*0.6
u.b=t
if(t<=1){u.e=0;++s.as
E.dI(70,"",500,0.3,0.5,"sine")}}A.d.br(x,new B.dUa())},
b4w(d){var x,w,v,u=this.Q
if(u.A(0,A.aA))return
x=this.gbdQ()
w=d.aI(0,new C.m(u.a/2,u.b*0.42))
v=A.h.D(w.gcE()/x,1.5,12)
u=Math.atan2(w.b,w.a)
this.z.push(new B.Rp(u,v,1.2,new C.rV(1,30+A.cW.ai()*40,0.9,0.7).jl()))
B.mP("bell",60+A.h.S(12-v)*2,400,0.35)},
gbdQ(){var x=this.Q
return Math.min(x.a,x.b)*0.07},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.z,m=Math.sqrt(1-1/A.h.D(n.length===0?3:new C.O(n,new B.dTZ(),C.U(n).k("O<1,H>")).eL(0,A.pD),1.0001,99))
n=y.p
x=C.a([C.aJ(o,o,o,o,D.p9,o,o,o,new B.dU_(p,d),o,o,o,o,"Share",o)],n)
w=C.cg(new B.dU0(p,m))
v=Math.log(p.r)
u=Math.log(1e10)
t=p.r
t=t<1000?A.h.a1(t,0)+" Suns":B.fSv(t)+" Suns"
u=B.jd(A.bj,t,"Mass",1,0,new B.dU2(p),v/u)
v=C.a([new B.e5("Star (10)",!1,new B.dU3(p),o,A.bj,o),new B.e5("Cygnus X-1 (21)",!1,new B.dU4(p),o,A.bj,o),new B.e5("Milky Way core (4 million)",!1,new B.dU5(p),o,A.bj,o),new B.e5("M87 (6.5 billion)",!1,new B.dU6(p),o,A.bj,o)],n)
t=p.w
s=p.x
r=p.y
q=r?A.lH:D.IG
return B.m0(A.bj,x,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',w,"BLACK HOLE",C.w(C.a([u,new B.fm(v,"LIKE",o),new B.fm(C.a([new B.e5("Glowing ring",t,new B.dU7(p),o,A.bj,o),new B.e5("Bent light",s,new B.dU8(p),o,A.bj,o),new B.e5("Music",r,new B.dU9(p),q,A.bj,o),new B.fL(A.mF,"Clear",new B.dU1(p),A.c,o)],n),o,o)],n),A.l,o,A.e,A.P,0,A.p))},
ahW(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.fKB,x,x,x),A.bs,C.c(e,x,2,x,x,x,x,A6.y9,A.K,x,x)],y.p),A.l,x,A.e,A.i,0,A.p),1)}}
B.beD.prototype={
a5(a9,b0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
$.T()
x=C.L()
x.r=D.btY.gp(0)
a9.aE(new C.a4(0,0,0+a7,0+a8),x)
x=a7/2
w=a8*0.42
v=new C.m(x,w)
u=this.b
t=u.gbdQ()*(0.9+0.35*Math.log(u.r)/2.302585092994046)
for(s=u.at,r=s.length,q=t*t*5,p=t*2.2,o=0;o<s.length;s.length===r||(0,C.I)(s),++o){n=s[o]
m=n.a*a7
l=n.b*a8
k=new C.m(m,l)
if(u.x){m-=x
l-=w
j=Math.sqrt(m*m+l*l)
if(j>1){i=j+A.h.D(q/j,0,p)
k=new C.m(x+m/j*i,w+l/j*i)}}m=new C.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.c.j(0.6).gp(0)
a9.O(k,0.9,m)}if(u.x){a7=C.L()
a7.b=A.ad
a7.c=2
a7.r=A.c.j(0.25).gp(0)
a7.y=K.a2Q
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
a9.O(new C.m(x+a3,w+q*f*0.28),1.3,l)
if(!a2&&u.x){q=Math.sin(-a1)
m=new C.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=p.j(a8).gp(0)
a9.O(new C.m(x+a3*0.5,w+(r*Math.abs(q)*0.6-a7)),1,m)}}}a7=t*1.25
$.T()
a8=C.L()
a8.san(new C.bU(A.z,0.5,A.w,null,0,C.a([A.v,A.v.j(0)],y.O),D.d6q,null).az(0,C.bY(v,a7)))
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
a5=1+A.h.D(3.5/a4.b,0,5)
a6=3*a5
r=-Math.sin(a4.a)*a6
q=Math.cos(a4.a)*a6
p=new C.ar(A.U,A.R,A.X,A.Y,A.W)
p.c=4.2/Math.sqrt(a5)
p.d=A.bG
m=a4.d
p.r=m.j(A.h.D(a4.b/2,0.2,1)).gp(0)
a9.ah(new C.m(u-r,s-q),new C.m(u+r,s+q),p)
p=new C.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=m.j(0.2).gp(0)
p.y=O.oZ
a9.O(new C.m(u,s),6,p)}},
aD(d){return!0}}
B.ahj.prototype={}
B.Xl.prototype={
R(){var x=y.q,w=y.g
return new B.boA(new C.cB(null,y.z),new B.QQ(A.cW),C.a([],x),A.J,A.J,C.a([],x),C.a([],w),C.a([],w),C.a([],w),C.a([],w),A.J,A.J,$,A.bH,0,C.a([],y.X),null,null)}}
B.boA.prototype={
Z(){this.a4()
this.a1u()
this.mv()},
a1u(){var x,w,v,u,t,s,r,q,p=this,o=new C.e6()
o.cW(5)
x=C.a([],y.q)
w=p.Q==="elliptical"?1800:2300
for(v=0;v<w;++v)if(p.Q==="elliptical"){u=Math.pow(o.ai(),1.6)
x.push(new B.ahj(u,o.ai()*3.141592653589793*2,(o.ai()-0.5)*0.5*u,25+o.ai()*20))}else{u=Math.pow(o.ai(),0.8)
t=o.aw(p.f)
s=o.ai()
r=t*(6.283185307179586/p.f)+u*p.r+(s-0.5)*(0.55-u*0.25)
s=p.w
if(s>0&&u<0.3*s+0.05){s=o.hc()?0:3.141592653589793
r=s+(o.ai()-0.5)*0.25}s=o.ai()
q=u<0.25?35+o.ai()*15:205+o.ai()*50
x.push(new B.ahj(u,r,(s-0.5)*0.05*(1-u),q))}p.ay=x},
cGk(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.ch=!0
l.CW=D.eED
l.cx=D.eEH
x=new C.e6()
x.cW(9)
w=l.cy
A.d.a7(w)
v=C.a([],y.q)
for(u=0;u<900;++u)v.push(new B.ahj(Math.pow(x.ai(),0.8)*0.7,x.ai()*3.141592653589793*2,0,320+x.ai()*30))
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
for(t=l.ay,s=y.r,t=C.cJ(t,0,C.dx(900,"count",s),C.U(t).c),p=t.$ti,t=new C.bQ(t,t.gI(0),p.k("bQ<aj.E>")),p=p.k("aj.E");t.B();){o=t.d
if(o==null)o=p.a(o)
n=o.b
m=Math.cos(n)
o=o.a
w.push(new C.m(m*o,Math.sin(n)*o))}l.db=w
w=C.a([],v)
for(v=l.ay,v=C.cJ(v,0,C.dx(900,"count",s),C.U(v).c),s=v.$ti,v=new C.bQ(v,v.gI(0),s.k("bQ<aj.E>")),s=s.k("aj.E");v.B();){t=v.d
if(t==null)t=s.a(t)
p=t.b
o=Math.sin(p)
t=t.a+0.2
w.push(new C.m(-o*0.6/Math.sqrt(t),Math.cos(p)*0.6/Math.sqrt(t)))}l.dy=w
l.fy=l.fx=A.J
E.dI(110,"",900,0.5,0.45,"sine")},
mO(d){var x,w,v,u,t,s,r,q=this
q.e.fH(0,d,q.y)
x=q.at
w=q.ax
q.at=x+d*0.25*w
if(q.ch){v=d*0.9*w
u=q.CW.aI(0,q.fx)
t=Math.max(0.25,u.gcE())
s=u.eE(0,t).aM(0,0.9/(t*t))
x=q.fy.a6(0,s.aM(0,v))
q.fy=x
w=q.cx.aI(0,s.aM(0,v))
q.cx=w
x=q.fx.a6(0,x.aM(0,v))
q.fx=x
w=q.CW.a6(0,w.aM(0,v))
q.CW=w
r=new B.ebE(v)
r.$6(q.db,q.dy,x,w,0.5,0.35)
r.$6(q.dx,q.fr,q.CW,q.fx,0.35,0.5)}},
C(d){var x,w,v,u,t=this,s=null,r=y.p,q=C.a([C.aJ(s,s,s,s,D.p9,s,s,s,new B.ebu(t,d),s,s,s,s,"Share",s)],r),p=C.b4(s,s,s,new B.bk4(t,s),A.aA),o=A.v.j(0.5),n=C.n(14),m=C.K(A.by,A.r,1)
if(t.ch)x="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(t.x)x="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else x=t.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
n=C.a([p,C.ao(8,C.q(s,C.c(x,s,s,s,s,s,s,A.LF,s,s,s),A.f,s,s,new C.p(o,s,m,n,s,s,A.m),s,s,s,s,A.bS,s,s,s),s,s,10,10,s,s)],r)
m=C.a([],r)
for(w=0;w<3;++w){v=D.drr[w]
p=t.Q===v.a&&!t.ch
m.push(new B.e5(v.b,p,new B.ebv(t,v),s,A.hl,s))}m.push(new B.e5("Collide",t.ch,new B.ebw(t),A.xq,A.c5,s))
p=C.a([new B.fm(m,"TYPE",s)],r)
if(t.Q!=="elliptical"&&!t.ch){o=t.f
o=B.jd(A.hl,""+o,"Arms",6,2,new B.ebx(t),o)
m=t.r
A.d.u(p,C.a([o,B.jd(A.hl,A.h.a1(m,1),"Winding",6,0.8,new B.eby(t),m)],r))}o=t.as
p.push(B.jd(A.hl,""+A.h.S(o*90)+"\xb0","Tilt",1,0.15,new B.ebz(t),o))
o=t.ax
p.push(B.jd(A.hl,A.h.a1(o,1)+"x","Speed",4,0,new B.ebA(t),o))
o=t.x
m=t.z
x=t.y
u=x?A.lH:D.IG
p.push(new B.fm(C.a([new B.e5("Dark matter",o,new B.ebB(t),s,A.bj,s),new B.e5("You are here",m,new B.ebC(t),s,A.aQ,s),new B.e5("Music",x,new B.ebD(t),u,A.hl,s)],r),s,s))
return B.m0(A.hl,q,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new C.e9(new C.am(A.a0,s,A.b5,A.t,n,s),t.d),"GALAXY",C.w(p,A.l,s,A.e,A.P,0,A.p))}}
B.bk4.prototype={
a5(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.a,d=a1.b
$.T()
x=C.L()
x.r=D.bwn.gp(0)
a0.aE(new C.a4(0,0,0+e,0+d),x)
w=new C.e6()
w.cW(3)
for(v=0;v<90;++v){x=w.ai()
u=w.ai()
t=w.ai()
s=new C.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.c.j(0.15+w.ai()*0.4).gp(0)
a0.O(new C.m(x*e,u*d),t*1.1+0.2,s)}r=new C.m(e/2,d*0.42)
q=Math.min(e*0.46,d*0.36)
e=this.b
if(e.x){d=q*1.3
x=C.L()
x.san(new C.bU(A.z,0.5,A.w,f,0,C.a([A.az.j(0.32),A.az.j(0.12),A.L],y.O),G.a6d,f).az(0,C.bY(r,d)))
a0.O(r,d,x)}p=new B.doT(e.as)
d=q*0.3
x=C.L()
x.san(new C.bU(A.z,0.5,A.w,f,0,C.a([A.h9.j(0.85),A.as.j(0.3),A.L],y.O),f,f).az(0,C.bY(r,d)))
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
o.r=new H.pH(1,t,s>200?0.45:0.55,1).jl().j(0.35+(1-u)*0.5).gp(0)
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
i=C.h0(f,A.cJ,f,f,f,D.fHm,A.a7,A.ca,f,A.e4,A.cb)
i.eJ()
i.a5(a0,j.a6(0,new C.m(-i.b.c/2,12)))}}else{h=q*0.8
o=C.L()
for(d=e.db,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.bxS.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}for(d=e.dx,x=d.length,n=0;n<d.length;d.length===x||(0,C.I)(d),++n){g=d[n]
o.r=D.brz.j(0.6).gp(0)
a0.O(p.$6(g.a,g.b,0,r,0,h),1,o)}d=e.fx
d=p.$6(d.a,d.b,0,r,0,h)
$.T()
x=C.L()
x.r=A.h9.gp(0)
a0.O(d,5,x)
e=e.CW
e=p.$6(e.a,e.b,0,r,0,h)
x=C.L()
x.r=A.iK.gp(0)
a0.O(e,5,x)}},
aD(d){return!0}}
B.Y1.prototype={
R(){return new B.bpt(new C.cB(null,y.z),new B.QQ(A.cW),$,A.bH,0,C.a([],y.X),null,null)}}
B.bpt.prototype={
Z(){this.a4()
this.mv()},
mO(d){var x,w,v,u=this
u.e.fH(0,d,u.Q)
if(!u.x)return
x=u.f
w=u.y
if(x==="seasons")u.r=A.h.F(u.r+d*0.04*w,1)
else{x=A.h.F(u.w+d*0.05*w,1)
u.w=x
v=A.h.bd(x*4)
if(v!==A.h.bd(u.as))B.mP("bell",60+v*4,500,0.35)
u.as=v}},
gcBO(){var x=this.r
if(x<0.25)return"Spring in the north, autumn in the south"
if(x<0.5)return"Summer in the north, winter in the south"
if(x<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gcrM(){var x=this.w
if(x<0.03||x>0.97)return"New Moon"
if(x<0.22)return"Waxing crescent"
if(x<0.28)return"First quarter"
if(x<0.47)return"Waxing gibbous"
if(x<0.53)return"Full Moon"
if(x<0.72)return"Waning gibbous"
if(x<0.78)return"Last quarter"
return"Waning crescent"},
C(d){var x,w,v,u,t,s=this,r=null,q=y.p,p=C.a([C.aJ(r,r,r,r,D.p9,r,r,r,new B.eIy(s,d),r,r,r,r,"Share",r)],q),o=C.E(new C.e9(C.b4(r,r,r,new B.bvZ(s,r),A.hg),s.d),1)
if(s.f==="seasons")x=s.gcBO()
else{x=s.gcrM()
w=A.h.ao(A.h.D(0.5-0.5*Math.cos(s.w*2*3.141592653589793),0,1)*100,1)
v=s.w
if(v>0.45&&v<0.55||v<0.05||v>0.95)v="  \xb7  Spring tides (the biggest)"
else{if(!(v>0.2&&v<0.3))v=v>0.7&&v<0.8
else v=!0
v=v?"  \xb7  Neap tides (the smallest)":""}v=x+"  \xb7  "+w+"% lit"+v
x=v}x=C.w(C.a([o,C.q(r,C.c(x,r,r,r,r,r,r,Z.Xb,A.K,r,r),A.f,r,r,r,r,r,r,r,K.aoj,r,r,1/0)],q),A.l,r,A.e,A.i,0,A.p)
o=s.f
w=s.x
v=w?"Pause":"Play"
w=w?X.vF:A.fQ
u=s.Q
t=u?A.lH:D.IG
t=C.a([new B.fm(C.a([new B.e5("Seasons",o==="seasons",new B.eIz(s),A.E3,A.bw,r),new B.e5("Moon phases",o==="moon",new B.eIA(s),A.vt,A.bw,r),new B.e5(v,!1,new B.eIB(s),w,A.bw,r),new B.e5("Music",u,new B.eIC(s),t,A.bw,r)],q),r,r)],q)
if(s.f==="seasons"){o=s.r
o=B.jd(A.bw,D.dqB[A.n.F(A.h.bd(o*12),12)],"Month",1,0,new B.eID(s),o)
w=s.z
A.d.u(t,C.a([o,B.jd(A.bw,A.h.a1(w,1)+"\xb0","Tilt",90,0,new B.eIE(s),w)],q))}else{q=s.w
t.push(B.jd(A.bw,""+(A.h.bd(q*29.5)+1),"Day of month",1,0,new B.eIF(s),q))}q=s.y
t.push(B.jd(A.bw,A.h.a1(q,1)+"x","Speed",4,0.2,new B.eIG(s),q))
return B.m0(A.bw,p,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",x,"SEASONS & MOON",C.w(t,A.l,r,A.e,A.P,0,A.p))}}
B.bvZ.prototype={
a5(b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3=b8.a,b4=b8.b,b5=$.T(),b6=C.L()
b6.r=D.CC.gp(0)
b7.aE(new C.a4(0,0,0+b3,0+b4),b6)
x=new C.e6()
x.cW(4)
for(w=0;w<70;++w){b6=x.ai()
v=x.ai()
u=x.ai()
t=new C.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=A.c.j(0.2+x.ai()*0.4).gp(0)
b7.O(new C.m(b6*b3,v*b4),u+0.3,t)}b6=b3/2
v=b4/2
s=new C.m(b6,v)
u=this.b
if(u.f==="seasons"){r=b3*0.36
q=b4*0.3
b6=C.c_(s,q*2,r*2)
v=C.L()
v.b=A.ad
v.c=1
v.r=A.aT.gp(0)
b7.c2(b6,v)
v=C.L()
v.san(D.ePC.az(0,C.bY(s,34)))
b7.O(s,22,v)
p=u.r*2*3.141592653589793
o=s.a6(0,new C.m(Math.cos(p)*r,Math.sin(p)*q))
n=Math.min(b3,b4)*0.075
m=u.z*3.141592653589793/180
l=s.aI(0,o).eE(0,s.aI(0,o).gcE())
u=b7.c
J.bs(u.save())
u.translate(o.a,o.b)
b4=C.L()
b4.r=D.btU.gp(0)
b7.O(A.J,n,b4)
J.bs(u.save())
b5=new C.aI(b5.r,A.ak,b2,b2,C.a([],y.v))
b5.E(new C.jM(C.bY(A.J,n)))
b7.mI(0,b5)
b5=l.aM(0,n).aM(0,0.35)
b4=n*1.1
b3=C.L()
b3.san(D.ePK.az(0,C.bY(A.J,b4)))
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
b6.r=A.c1.gp(0)
b7.ah(b5,v,b6)
b6=k.aM(0,n).aM(0,1.7)
v=C.L()
v.r=A.c1.gp(0)
b7.O(b6,3.2,v)
b3=b4*l.a+b3*l.b
j=-b3
u.restore()
if(Math.abs(j)<0.12)b3="equinox: day and night equal"
else b3=j*Math.sin(m)*0+b3>0?"north leans to Sun":"south leans to Sun"
i=C.h0(b2,A.cJ,b2,b2,b2,C.cW(b2,b2,b2,b2,b2,b2,b2,b2,b2,F.adz,b3),A.a7,A.ca,b2,A.e4,A.cb)
i.eJ()
i.a5(b7,o.a6(0,new C.m(-i.b.c/2,n+12)))}else{h=Math.min(b3*0.34,b4*0.32)
t=C.L()
t.b=A.ad
t.c=1
t.r=A.aT.gp(0)
b7.O(s,h,t)
for(t=b4*0.2,w=0;w<9;++w){g=t+w*b4*0.075
f=new C.ar(A.U,A.R,A.X,A.Y,A.W)
f.r=A.aQ.j(0.6).gp(0)
f.c=2
b7.ah(new C.m(10,g),new C.m(40,g),f)}n=h*0.25
t=C.L()
t.san(new C.bU(new C.dl(-0.5,0),1.1,A.w,b2,0,C.a([D.bol,D.am7],y.O),D.dg8,b2).az(0,C.bY(s,n)))
b7.O(s,n,t)
p=3.141592653589793+u.w*2*3.141592653589793
e=s.a6(0,new C.m(Math.cos(p)*h,Math.sin(p)*h))
d=h*0.12
t=C.L()
t.r=D.bl0.gp(0)
b7.O(e,d,t)
t=b7.c
J.bs(t.save())
b5=b5.r
g=y.v
f=new C.aI(b5,A.ak,b2,b2,C.a([],g))
f.E(new C.jM(C.bY(e,d)))
b7.mI(0,f)
f=e.a-d
a0=e.b-d
a1=C.L()
a1.r=A.bP.gp(0)
b7.aE(new C.a4(f,a0,f+d,a0+d*2),a1)
t.restore()
a2=e.aI(0,s).eE(0,e.aI(0,s).gcE())
for(f=a2.a,a0=a2.b,a1=n*0.28,a3=0;a3<2;++a3){a4=F.azW[a3]
a5=new C.ar(A.U,A.R,A.X,A.Y,A.W)
a5.r=A.aH.j(0.45).gp(0)
a5.y=A.ld
b7.O(new C.m(b6+f*a4*n*1.05,v+a0*a4*n*1.05),a1,a5)}b6=b3-b3*0.17
v=b4*0.18
a6=new C.m(b6,v)
a7=Math.min(b3,b4)*0.1
b4=C.L()
b4.r=D.bkW.gp(0)
b7.O(a6,a7,b4)
a8=0.5-0.5*Math.cos(u.w*2*3.141592653589793)
J.bs(t.save())
b4=new C.aI(b5,A.ak,b2,b2,C.a([],g))
b4.E(new C.jM(C.bY(a6,a7)))
b7.mI(0,b4)
u=u.w
a9=new C.aI(b5,A.ak,b2,b2,C.a([],g))
b0=u<0.5?1:-1
b3=v-a7
a9.E(new C.aZ(b6,b3))
b4=b0>0
a9.aGZ(new C.m(b6,v+a7),b4,new C.aQ(a7,a7))
if(a8<0.5)b4=b0<0
a9.aGZ(new C.m(b6,b3),b4,new C.aQ(a7*Math.abs(1-2*a8),a7))
b4=C.L()
b4.r=A.bP.gp(0)
b7.af(a9,b4)
t.restore()
t=C.L()
t.b=A.ad
t.c=1
t.r=A.aT.gp(0)
b7.O(a6,a7,t)
b1=C.h0(b2,A.cJ,b2,b2,b2,D.fHn,A.a7,A.ca,b2,A.e4,A.cb)
b1.eJ()
b1.a5(b7,a6.a6(0,new C.m(-b1.b.c/2,a7+6)))}},
aD(d){return!0}}
B.aP6.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCp.prototype={
t(){var x,w,v
for(x=this.hh$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hg$
x===$&&C.d()
x.t()
this.bBK()}}
B.aPx.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCx.prototype={
t(){var x,w,v
for(x=this.hh$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hg$
x===$&&C.d()
x.t()
this.bCb()}}
B.aQ5.prototype={
t(){var x=this,w=x.ab$
if(w!=null)w.a8(0,x.gbB())
x.ab$=null
x.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
B.bCJ.prototype={
t(){var x,w,v
for(x=this.hh$,w=x.length,v=0;v<x.length;x.length===w||(0,C.I)(x),++v)x[v].a2(0)
x=this.hg$
x===$&&C.d()
x.t()
this.bCL()}}
var z=a.updateTypes(["~()","cr(adt)","P(w3)","P(RJ)","az<~>()","~(o)","P(ads)","Xn()","Yd()","Xo()","Wq()","Xl()","Y6()","Y1()","P(Rp)","H(Rp)"])
B.eTA.prototype={
$1(d){var x,w,v,u,t,s,r,q=this.a,p=d.a,o=A.h.D((p-q.x.a)/1e6,0,0.05)
q.x=d
q.y=A.n.ao(p,1000)
for(p=q.f,x=p.length,w=1-1.2*o,v=0;v<x;++v){u=p[v]
t=u.a
s=u.b
r=s.a
s=s.b
u.a=new C.m(t.a+r*o,t.b+s*o)
u.b=new C.m(r*w,s*w)}A.d.br(p,new B.eTy(q))
if(q.c!=null)p=p.length!==0||q.ax!=null
else p=!1
if(p)q.l(new B.eTz())},
$S:7}
B.eTy.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+3}
B.eTz.prototype={
$0(){},
$S:0}
B.eTb.prototype={
$0(){},
$S:0}
B.eTa.prototype={
$0(){},
$S:0}
B.eTk.prototype={
$0(){return B.uX(this.b,this.a.d,"spark-painter")},
$S:0}
B.eTm.prototype={
$1(d){return this.a.b3e(0,d.b)},
$S:50}
B.eTq.prototype={
$1(d){var x,w=this.a,v=d.b,u=w.ax
if(u!=null){x=u.a
x=x.length===0||A.d.gal(x).aI(0,v).gcE()>2.5}else x=!1
if(x)u.a.push(v)
w.aWO(v)
w.ciL(v)
return null},
$S:19}
B.eTl.prototype={
$1(d){return this.a.b3d()},
$S:38}
B.eTr.prototype={
$1(d){return this.a.b3e(0,d.b)},
$S:24}
B.eTs.prototype={
$1(d){return this.a.b3d()},
$S:56}
B.eTt.prototype={
$0(){var x=this.a
return x.l(new B.eTj(x,this.b))},
$S:0}
B.eTj.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
B.eTu.prototype={
$0(){var x=this.a
return x.l(new B.eTi(x))},
$S:0}
B.eTi.prototype={
$0(){return this.a.Q=-1},
$S:0}
B.eTv.prototype={
$0(){var x=this.a
return x.l(new B.eTh(x,this.b))},
$S:0}
B.eTh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.eTw.prototype={
$1(d){var x=this.a
return x.l(new B.eTg(x,d))},
$S:6}
B.eTg.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.eTx.prototype={
$0(){var x=this.a
return x.l(new B.eTf(x))},
$S:0}
B.eTf.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.eTn.prototype={
$0(){var x=this.a
return x.l(new B.eTe(x))},
$S:0}
B.eTe.prototype={
$0(){var x=this.a.e
if(x.length!==0)x.pop()},
$S:0}
B.eTo.prototype={
$0(){var x=this.a
return x.l(new B.eTd(x))},
$S:0}
B.eTd.prototype={
$0(){var x=this.a
A.d.a7(x.e)
A.d.a7(x.f)},
$S:0}
B.eTp.prototype={
$0(){var x=this.a
return x.l(new B.eTc(x,this.b))},
$S:0}
B.eTc.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cES.prototype={
$0(){return C.a8(this.a,!1).i1()},
$S:0}
B.cET.prototype={
$0(){var x=this.a
return B.hUg(this.b,x.c,x.e,x.d)},
$S:0}
B.hgQ.prototype={
$1(d){var x,w=null,v=C.n(24),u=this.a,t=u.j(0.4)
u=C.c(this.b,w,w,w,w,w,w,C.l(w,w,u,w,w,w,w,w,w,w,w,16,w,w,A.u,w,w,!0,w,1.2,w,w,w,w,w,w),w,w,w)
x=C.c(this.c,w,w,w,w,w,w,D.fKO,w,w,w)
return C.ek(C.a([C.bL(!1,D.h33,w,w,!0,w,w,w,new B.hgP(d),w,w)],y.p),w,w,F.mt,x,w,w,w,new C.ba(v,new C.ax(t,1,A.r,-1)),u,w)},
$S:17}
B.hgP.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.cEO.prototype={
$0(){C.f4()
this.a.e.$0()},
$S:0}
B.cEN.prototype={
$0(){C.f4()
this.a.e.$0()},
$S:0}
B.cEU.prototype={
$0(){C.f4()
this.a.e.$0()},
$S:0}
B.cEP.prototype={
$0(){var x=this.a
A.d.X(x.hh$,this.b.bh())
if(x.c!=null)this.c.$0()},
$S:0}
B.cER.prototype={
$1(d){var x=this.a,w=d.a,v=A.h.D((w-x.mk$.a)/1e6,0,0.04)
x.mk$=d
x.fh$=A.n.ao(w,1000)
x.mO(v)
if(x.c!=null)x.l(new B.cEQ())},
$S:7}
B.cEQ.prototype={
$0(){},
$S:0}
B.h27.prototype={
brs(d){var x=0,w=C.j(y.D),v,u=this,t,s
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:x=3
return C.b(u.a.$1(d),$async$$1)
case 3:t=f
x=4
return C.b(t.hr(A.a5F),$async$$1)
case 4:s=f
t.t()
if(s==null)throw C.Y(C.bd("no picture"))
v=J.eA(A.dM.gaS(s),s.byteOffset,s.byteLength)
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$1(d){return this.brs(d)},
$S:2063}
B.ciX.prototype={
$1(d){var x=this.c,w=this.a,v=w.d,u=v+1
w.d=u
x.$flags&2&&C.ak(x)
x[v]=d
if(u===255){v=this.b.c
v.qb(255)
v.K(0,new Uint8Array(C.cd(x)))
w.d=0}},
$S:32}
B.ciW.prototype={
$1(d){var x,w,v=this.a,u=v.c,t=v.b
u=v.c=(u|A.n.e8(d,t))>>>0
t=v.b=t+v.a
for(x=this.b;t>=8;t=u,u=w){x.$1(u&255)
w=v.c>>>8
v.c=w
u=v.b-=8}},
$S:32}
B.fBr.prototype={
$0(){var x=null,w=C.h0(x,A.cJ,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.b,x,x,x,x,x,"monospace",x,x,this.c,x,x,A.O,x,x,!0,x,x,x,x,x,x,x,x),this.a),A.a7,A.ca,x,A.e4,A.cb)
w.eJ()
return w},
$S:276}
B.h7T.prototype={
$0(){return this.a.ai()},
$S:82}
B.fHR.prototype={
$2(d,e){return d.j(A.h.D(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:2064}
B.fHS.prototype={
$4$blur$shift(d,e,f,g){var x,w=this
$.T()
x=C.L()
x.b=A.ad
x.c=e
x.e=A.dQ
x.r=d.gp(0)
if(f!=null)x.y=f
B.DX(w.a,w.b,null,x).a5(w.c,w.d.a6(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.J)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.J)},
$S:2065}
B.h7U.prototype={
$2(d,e){return d+this.a[e]},
$S:786}
B.h7V.prototype={
$2(d,e){return d+this.a[e]},
$S:786}
B.h6A.prototype={
$1(d){return this.brG(d)},
brG(d){var x=0,w=C.j(y.I),v,u=this,t,s,r,q,p
var $async$$1=C.e(function(e,f){if(e===1)return C.f(f,w)
for(;;)switch(x){case 0:$.T()
t=new C.p1(new C.oB())
s=u.a
r=u.b
B.hTx(C.v8(t,null),new C.av(s,r),d/u.c,u.r,u.w,u.x,u.e,u.f,u.d)
q=t.n9()
x=3
return C.b(q.vW(s,r),$async$$1)
case 3:p=f
q.t()
v=p
x=1
break
case 1:return C.h(v,w)}})
return C.i($async$$1,w)},
$S:758}
B.cq9.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.cq4.prototype={
$0(){var x=this.a
x.at=0
x.ax=""},
$S:0}
B.cq5.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.cq3(x,d))},
$S:6}
B.cq3.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.cq6.prototype={
$0(){var x=this.b?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.a.ax=x},
$S:0}
B.cq7.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
B.cq8.prototype={
$0(){return this.a.at=-1},
$S:0}
B.cpU.prototype={
$2(d,e){var x=null,w=this.a,v=w.gKx().x
v===$&&C.d()
return C.b4(x,x,x,new B.bc8(v,w.e.a.a,w.f,w.r,w.y,w.gu7(),w.x,x),A.hg)},
$S:52}
B.cpV.prototype={
$1(d){return this.a.l(new B.cpT())},
$S:2}
B.cpT.prototype={
$0(){},
$S:0}
B.cpW.prototype={
$0(){return this.a.bu0(this.b.a)},
$S:0}
B.cpX.prototype={
$0(){var x=this.a
return x.l(new B.cpS(x,this.b))},
$S:0}
B.cpS.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
B.cpY.prototype={
$0(){var x=this.a
return x.l(new B.cpR(x,this.b))},
$S:0}
B.cpR.prototype={
$0(){return this.a.y=this.b},
$S:0}
B.cpZ.prototype={
$0(){var x=this.a
return x.l(new B.cpQ(x,this.b))},
$S:0}
B.cpQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cq_.prototype={
$0(){var x=this.a
return x.l(new B.cpP(x,this.b))},
$S:0}
B.cpP.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cq0.prototype={
$0(){var x=this.a
return x.l(new B.cpO(x))},
$S:0}
B.cpO.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.cq1.prototype={
$0(){var x=this.a.gKx()
x.iK(0,0)
x.cU(0)},
$S:0}
B.cq2.prototype={
$1(d){var x=this.a
return x.l(new B.cpN(x,d))},
$S:6}
B.cpN.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ecl.prototype={
$0(){return this.a.k1=!1},
$S:0}
B.ecm.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.eck(x,d))},
$S:z+1}
B.eck.prototype={
$0(){return this.a.cD6(this.b)},
$S:0}
B.ecn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.ecj(x))},
$S:75}
B.ecj.prototype={
$0(){return this.a.k1=!0},
$S:0}
B.eco.prototype={
$0(){var x,w,v,u=this.a,t=J.a1(u),s=t.gI(u),r=new Float64Array(s*4)
for(x=0;x<t.gI(u);++x){w=J.t(t.h(u,x),0)*3.141592653589793/180
v=J.t(t.h(u,x),1)*3.141592653589793/180
s=x*4
r[s]=Math.sin(v)
r[s+1]=Math.cos(v)
r[s+2]=Math.sin(w)
r[s+3]=Math.cos(w)}return r},
$S:731}
B.ech.prototype={
$0(){return this.a.id=D.a7L},
$S:0}
B.eci.prototype={
$0(){var x=this.b.a,w=C.U(x).k("X<1>")
w=C.pj(new C.X(x,new B.ecg(this.c),w),6,w.k("M.E"))
x=C.B(w,C.a3(w).k("M.E"))
return this.a.id=x},
$S:0}
B.ecg.prototype={
$1(d){return A.a.q(d.a.toLowerCase(),this.a)},
$S:z+6}
B.ecf.prototype={
$1(d){var x=null,w=C.cc(C.c("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",x,x,x,x,x,x,C.l(x,x,A.ab,x,x,x,x,x,x,x,x,14,x,x,x,x,1.55,!0,x,x,x,x,x,x,x,x),x,x,x),A.t,x,A.y,x,x,x,x,x,A.ah)
return C.ek(C.a([C.bL(!1,A.px,x,x,!0,x,x,x,new B.ece(d),x,x)],y.p),x,x,F.mt,w,x,x,x,x,D.hes,x)},
$S:17}
B.ece.prototype={
$0(){C.a8(this.a,!1).N(null)
return null},
$S:0}
B.ecH.prototype={
$0(){return B.uX(this.b,this.a.d,"earth")},
$S:0}
B.ecI.prototype={
$2(d,e){var x,w,v,u,t,s,r,q=null,p=this.a,o=new C.av(e.b,e.d)
p.fy=o
x=p.r
w=p.w
v=p.x
u=p.y
t=p.gY3()
s=p.z
r=y.p
o=C.a([C.aA(A.bZ,C.b4(q,q,q,new B.bkd(x,w,v,u,t*s,s,p.fx,p.CW,p.cx,p.cy,p.dy,p.fr,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new B.ecv(p),new B.ecw(p),new B.ecx(p),q,q,q,q,q,q,q,new B.ecy(p),q,q,q,!1,A.a4)],r)
if(p.r==null&&!p.k1)o.push(D.bg9)
if(p.r==null&&p.k1)o.push(C.at(new C.C(A.pY,C.w(C.a([D.c79,A.S,D.hda,A.aj,D.h4R,A.aB,C.df(A.vL,q,A.FU,p.gc8C(),q)],r),A.l,q,A.e,A.P,0,A.p),q),q,q,q))
x=this.b
if(x!=null)o.push(C.ao(8,p.ci9(x),q,q,10,10,q,q))
return new C.e9(new C.am(A.a0,q,A.b5,A.t,o,q),p.d)},
$S:215}
B.ecw.prototype={
$1(d){var x=this.a
x.dx=!0
x.go=x.z
x.at=x.ax=x.ay=null},
$S:273}
B.ecx.prototype={
$1(d){var x,w,v=this.a
if(d.w>=2)v.z=A.h.D(v.go*d.d,0.8,16)
else{x=57.2958/(v.gY3()*v.z)
w=d.a
v.y=v.y-w.a*x
v.x=A.h.D(v.x+w.b*x,-85,85)}},
$S:242}
B.ecv.prototype={
$1(d){var x,w,v=this.a
v.dx=!1
x=57.2958/(v.gY3()*v.z)
w=d.a.a
v.Q=A.h.D(-w.a*x,-160,160)
v.as=A.h.D(w.b*x,-100,100)},
$S:785}
B.ecy.prototype={
$1(d){var x=this.a,w=x.cic(d.b)
if(w!=null)x.l(new B.ecp(x,w))
else x.l(new B.ecq(x))},
$S:56}
B.ecp.prototype={
$0(){return this.a.aE2(this.b)},
$S:0}
B.ecq.prototype={
$0(){return this.a.fx=null},
$S:0}
B.ecJ.prototype={
$0(){var x=this.a
x.e.bM(0,A.ck)
x.l(new B.ecu(x,this.b))},
$S:0}
B.ecu.prototype={
$0(){var x=this.a
x.id=D.a7L
x.aE2(this.b)},
$S:0}
B.ecN.prototype={
$0(){var x=this.a
return x.l(new B.ecG(x))},
$S:0}
B.ecG.prototype={
$0(){var x=this.a
x.fx=null
x.axg(15,x.y,1)},
$S:0}
B.ecO.prototype={
$0(){var x=this.a
return x.l(new B.ecF(x,this.b))},
$S:0}
B.ecF.prototype={
$0(){var x=this.b.b
return this.a.axg(x.a,x.b,x.c)},
$S:0}
B.ecP.prototype={
$0(){var x=this.a,w=x.r
if(w!=null)x.l(new B.ecE(x,w))},
$S:0}
B.ecE.prototype={
$0(){var x=this.b.a
return this.a.aE2(x[A.cW.aw(x.length)])},
$S:0}
B.ecQ.prototype={
$1(d){var x=this.a
return x.l(new B.ecD(x,d))},
$S:6}
B.ecD.prototype={
$0(){var x=this.a
x.ay=null
x.z=this.b},
$S:0}
B.ecR.prototype={
$1(d){var x=this.a
return x.l(new B.ecC(x,d))},
$S:6}
B.ecC.prototype={
$0(){return this.a.dy=this.b},
$S:0}
B.ecS.prototype={
$1(d){var x=this.a
return x.l(new B.ecB(x,d))},
$S:6}
B.ecB.prototype={
$0(){return this.a.fr=this.b},
$S:0}
B.ecT.prototype={
$0(){var x=this.a
return x.l(new B.ecA(x))},
$S:0}
B.ecA.prototype={
$0(){var x=this.a
return x.ch=!x.ch},
$S:0}
B.ecU.prototype={
$0(){var x=this.a
return x.l(new B.ecz(x))},
$S:0}
B.ecz.prototype={
$0(){var x=this.a
return x.CW=!x.CW},
$S:0}
B.ecK.prototype={
$0(){var x=this.a
return x.l(new B.ect(x))},
$S:0}
B.ect.prototype={
$0(){var x=this.a
return x.cx=!x.cx},
$S:0}
B.ecL.prototype={
$0(){var x=this.a
return x.l(new B.ecs(x))},
$S:0}
B.ecs.prototype={
$0(){var x=this.a
return x.cy=!x.cy},
$S:0}
B.ecM.prototype={
$0(){var x=this.a
return x.l(new B.ecr(x))},
$S:0}
B.ecr.prototype={
$0(){var x=this.a
return x.db=!x.db},
$S:0}
B.ecd.prototype={
$2(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.aXX,x,x,x),A.rR,C.c(e,x,2,A.a2,x,x,x,A.Xt,x,x,x)],y.p),A.B,x,A.e,A.i,0,A.p),1)},
$S:113}
B.ecc.prototype={
$0(){var x=this.a
return x.l(new B.ecb(x))},
$S:0}
B.ecb.prototype={
$0(){return this.a.fx=null},
$S:0}
B.drJ.prototype={
$0(){var x=null,w=C.h0(x,A.cJ,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.C,x,x,!0,x,x,x,x,x,D.dlc,x,x),this.a),A.a7,A.ca,x,A.e4,A.cb)
w.eJ()
return w},
$S:276}
B.drK.prototype={
$2(d,e){var x,w,v,u=this,t=Math.sin(d),s=Math.cos(d),r=e-u.a,q=Math.sin(r),p=Math.cos(r)
r=u.b
x=u.c
if(r*t+x*s*p<0)return null
w=u.d
v=u.e
return new C.m(w.a+v*s*q,w.b-v*(x*t-r*s*p))},
$S:2068}
B.fD3.prototype={
$0(){return D.e6D},
$S:z+7}
B.fD4.prototype={
$0(){return D.evy},
$S:z+8}
B.fD5.prototype={
$0(){return D.e6F},
$S:z+9}
B.fD6.prototype={
$0(){return D.dYD},
$S:z+10}
B.fD7.prototype={
$0(){return D.e6C},
$S:z+11}
B.fD8.prototype={
$0(){return D.etF},
$S:z+12}
B.fD9.prototype={
$0(){return D.etD},
$S:z+13}
B.f_t.prototype={
$1(d){},
$S:z+1}
B.f_u.prototype={
$1(d){},
$S:75}
B.f_q.prototype={
$0(){return C.a8(this.a,!1).i1()},
$S:0}
B.f_r.prototype={
$0(){var x=this.a
return x.l(new B.f_p(x))},
$S:0}
B.f_p.prototype={
$0(){var x=this.a
return x.d=A.n.F(x.gaXg()+1,16)},
$S:0}
B.f_s.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=y.p,k=C.a([],l)
for(x=$.hY9(),w=m*1.15,v=y.O,u=0;u<7;++u){t=x[u]
s=Math.max(w,140)
r=new C.aQ(18,18)
q=t.d
p=new C.ax(q.j(0.5),1,A.r,-1)
o=C.a([q.j(0.28),D.bwj],v)
k.push(C.aA(n,C.q(n,C.w(C.a([C.V(t.c,q,n,n,n,30),A.N,C.c(t.a,n,2,n,n,n,n,D.fPK,A.K,n,n),A.cR,C.c(t.b,n,2,n,n,n,n,D.fVq,A.K,n,n)],l),A.l,n,A.bb,A.i,0,A.p),A.f,n,n,new C.p(n,n,new C.bE(p,p,p,p),new C.bc(r,r,r,r),n,new C.a6(A.aw,A.aD,A.w,o,n,n),A.m),n,s,n,n,A.ct,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new B.f_o(d,t),n,n,n,n,n,n,!1,A.a4))}return C.c0(A.fX,k,A.br,n,10,10)},
$S:177}
B.f_o.prototype={
$0(){return C.a8(this.a,!1).c9(C.e4(new B.f_n(this.b),!1,null,y.H))},
$S:0}
B.f_n.prototype={
$1(d){return this.a.e.$0()},
$S:42}
B.eSQ.prototype={
$0(){var x=this.a
x.Q=x.z=this.b
if(x.w<2.2)x.w=2.6},
$S:0}
B.eT0.prototype={
$0(){return B.uX(this.b,this.a.d,"solar-system")},
$S:0}
B.eT1.prototype={
$2(d,e){var x,w=null,v=this.a,u=new C.av(e.b,e.d)
v.ch=u
u=C.a([C.aA(A.bZ,C.b4(w,w,w,new B.bxf(v,w),u),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.eSY(v),new B.eSZ(v),w,w,w,w,w,w,w,new B.eT_(v),w,w,w,!1,A.a4)],y.p)
x=this.b
if(x!=null)u.push(C.ao(8,v.cie(x),w,w,10,10,w,w))
return new C.e9(new C.am(A.a0,w,A.b5,A.t,u,w),v.d)},
$S:215}
B.eSY.prototype={
$1(d){var x=this.a
x.y=x.w
x.Q=null},
$S:273}
B.eSZ.prototype={
$1(d){var x=this.a
if(d.w>=2)x.w=A.h.D(x.y*d.d,0.5,9)
else x.x=x.x.a6(0,d.a)},
$S:242}
B.eT_.prototype={
$1(d){var x=this.a,w=x.cih(d.b)
if(w!=null)x.b4v(w)},
$S:56}
B.eT2.prototype={
$0(){var x=this.a
return x.l(new B.eSX(x))},
$S:0}
B.eSX.prototype={
$0(){var x=this.a
x.z=x.Q=null
x.x=A.J
x.w=1},
$S:0}
B.eT3.prototype={
$0(){return this.a.b4v(this.b)},
$S:0}
B.eT4.prototype={
$1(d){var x=this.a
return x.l(new B.eSW(x,d))},
$S:6}
B.eSW.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
B.eT5.prototype={
$1(d){var x=this.a
return x.l(new B.eSV(x,d))},
$S:6}
B.eSV.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eT6.prototype={
$0(){var x=this.a
return x.l(new B.eSU(x))},
$S:0}
B.eSU.prototype={
$0(){var x=this.a
return x.as=!x.as},
$S:0}
B.eT7.prototype={
$0(){var x=this.a
return x.l(new B.eST(x))},
$S:0}
B.eST.prototype={
$0(){var x=this.a
return x.at=!x.at},
$S:0}
B.eT8.prototype={
$0(){var x=this.a
return x.l(new B.eSS(x))},
$S:0}
B.eSS.prototype={
$0(){var x=this.a
return x.ax=!x.ax},
$S:0}
B.eT9.prototype={
$0(){var x=this.a
return x.l(new B.eSR(x))},
$S:0}
B.eSR.prototype={
$0(){var x=this.a
return x.ay=!x.ay},
$S:0}
B.eSP.prototype={
$1(d){var x
if(d>=730){x=d>8000?0:1
x=A.h.a1(d/365.25,x)+" Earth years"}else x=A.h.a1(d,0)+" Earth days"
return x},
$S:288}
B.eSO.prototype={
$2(d,e){var x=null
return C.E(C.w(C.a([C.c(d,x,x,x,x,x,x,D.aXX,x,x,x),A.rR,C.c(e,x,2,A.a2,x,x,x,A.Xt,x,x,x)],y.p),A.B,x,A.e,A.i,0,A.p),1)},
$S:113}
B.eSN.prototype={
$0(){var x=this.a
return x.l(new B.eSM(x))},
$S:0}
B.eSM.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
B.fkz.prototype={
$0(){var x=null,w=C.h0(x,A.cJ,x,x,x,C.cW(x,x,x,x,x,x,x,x,x,C.l(x,x,this.c,x,x,x,x,x,x,x,x,this.b,x,x,A.C,x,x,!0,x,x,x,x,x,K.TI,x,x),this.a),A.a7,A.ca,x,A.e4,A.cb)
w.eJ()
return w},
$S:276}
B.fkA.prototype={
$1(d){return d.c>0},
$S:z+2}
B.fkB.prototype={
$1(d){return d.c>0},
$S:z+2}
B.ecY.prototype={
$0(){},
$S:0}
B.edq.prototype={
$1(d){return d!=null},
$S:365}
B.edc.prototype={
$0(){var x=this.a
return x.l(new B.ed3(x,this.b))},
$S:0}
B.ed3.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
B.edd.prototype={
$0(){var x=this.a
return x.l(new B.ed2(x))},
$S:0}
B.ed2.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ede.prototype={
$0(){var x=this.a
return x.l(new B.edb(x))},
$S:0}
B.edb.prototype={
$0(){return this.a.f=!0},
$S:0}
B.edi.prototype={
$0(){var x=this.a
return x.l(new B.eda(x))},
$S:0}
B.eda.prototype={
$0(){var x=this.a
return x.r=!x.r},
$S:0}
B.edj.prototype={
$1(d){var x=this.a
return x.l(new B.ed9(x,d))},
$S:6}
B.ed9.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.edk.prototype={
$0(){var x=this.a
return x.l(x.gcGt())},
$S:0}
B.edl.prototype={
$1(d){var x=this.a
return x.l(new B.ed8(x,d))},
$S:6}
B.ed8.prototype={
$0(){return this.a.at=this.b},
$S:0}
B.edm.prototype={
$1(d){var x=this.a
return x.l(new B.ed7(x,d))},
$S:6}
B.ed7.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.edn.prototype={
$1(d){var x=this.a
return x.l(new B.ed6(x,d))},
$S:6}
B.ed6.prototype={
$0(){return this.a.ay=this.b},
$S:0}
B.edo.prototype={
$1(d){var x=this.a
return x.l(new B.ed5(x,d))},
$S:6}
B.ed5.prototype={
$0(){return this.a.ch=this.b},
$S:0}
B.edp.prototype={
$0(){var x=this.a
return x.l(new B.ed4(x))},
$S:0}
B.ed4.prototype={
$0(){return this.a.ay=4},
$S:0}
B.edf.prototype={
$0(){var x=this.a
return x.l(new B.ed1(x))},
$S:0}
B.ed1.prototype={
$0(){return this.a.ay=7.67},
$S:0}
B.edg.prototype={
$0(){var x=this.a
return x.l(new B.ed0(x))},
$S:0}
B.ed0.prototype={
$0(){return this.a.ay=9},
$S:0}
B.edh.prototype={
$0(){var x=this.a
return x.l(new B.ed_(x))},
$S:0}
B.ed_.prototype={
$0(){return this.a.ay=11.3},
$S:0}
B.ecX.prototype={
$2(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a1.b/5,g=a1.d,f=g-60,e=y.p,d=C.a([C.bT(0,new C.bP(new C.p(D.buu,i,i,C.n(20),i,i,A.m),A.bm,i,i),0,0,0)],e)
for(x=this.a,w=x.as,v=y.V,u=h/2,g-=f,t=f-54-22,s=x.z,r=0;r<5;++r){q=r*h
p=D.AI[r]
o=C.b_(p.d)
p=C.w(C.a([C.c(p.a,i,i,i,i,i,i,new C.G(!0,o,i,i,i,i,12.5,A.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i),C.c(C.v(D.AI[r].b)+" m/s\xb2",i,i,i,i,i,i,D.fUH,i,i,i)],e),A.l,i,A.e,A.i,0,A.p)
o=q+u
n=C.q(i,i,A.f,A.dA,i,i,i,i,i,i,i,i,i,1)
m=s[r]
l=x.f?C.V(L.DF,C.b_(D.AI[r].d),i,i,i,22):C.q(i,i,A.f,i,i,new C.p(C.b_(D.AI[r].d),i,i,i,C.a([new C.ac(0,A.H,C.b_(D.AI[r].d).j(0.6),A.J,10)],v),i,A.a6),i,22,i,i,i,i,i,22)
k=C.q(i,i,A.f,C.b_(D.AI[r].d).j(0.6),i,i,i,3,i,A.fD,i,i,i,i)
j=w[r]
if(j==null)j=x.x?"\u2026":"\u2014"
else j=A.h.a1(j,2)+" s"
j=C.c(j,i,i,i,i,i,i,A.uD,i,i,i)
A.d.u(d,C.a([new C.cS(q,8,i,i,h,i,p,i),new C.cS(o-0.5,54,i,g,i,i,n,i),new C.cS(o-11,54+t*(m/20),i,i,i,i,l,i),new C.cS(q,i,i,8,h,i,C.w(C.a([k,A.at,j,C.c(w[r]==null?"":"to land",i,i,i,i,i,i,D.fM4,i,i,i)],e),A.l,i,A.e,A.i,0,A.p),i)],e))}if(!x.x&&A.d.cC(w,new B.ecW()))d.push(D.bgB)
return new C.am(A.a0,i,A.ac,A.t,d,i)},
$S:65}
B.ecW.prototype={
$1(d){return d==null},
$S:365}
B.ecZ.prototype={
$2(d,e){var x,w=null,v=this.a,u=this.b,t=u.b,s=v.at*t/9.81,r=A.h.D(Math.log(s+1)/Math.log(v.at*274/9.81+1),0.02,1),q=C.n(8)
q=C.q(w,w,A.f,w,w,new C.p(A.c.j(0.05),w,w,q,w,w,A.m),w,26,w,w,w,w,w,w)
u=u.c
u=C.cY(w,w,w,w,A.b_,new C.p(w,w,w,C.n(8),w,new C.a6(A.a5,A.a9,A.w,C.a([C.b_(u).j(0.9),C.b_(u).j(0.4)],y.O),w,w),A.m),A.id,w,26,w,w,w,w,w,e.b*r)
x=s<100?A.h.a1(s,1):B.I3(s)
v=v.ax*9.81/t
v=v<10?A.h.a1(v,2):A.h.a1(v,0)
return new C.am(A.a0,w,A.ac,A.t,C.a([q,u,C.ao(w,C.c(x+" kg  \xb7  jump "+v+" m",w,w,w,w,w,w,D.fSQ,w,w,w),w,w,8,w,4,w)],y.p),w)},
$S:65}
B.ecV.prototype={
$2(d,e){var x,w=null,v=e.b,u=e.d,t=Math.min(v,u),s=this.a,r=s.ch,q=s.cx,p=s.db,o=s.CW||p.length!==0
o=C.b4(w,w,w,new B.bfi(new C.m(v/2,u/2+u*0.05),t*0.18/6371*(2/r),q,p,o,w),A.aA)
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
s=s.CW?"  Height now: "+B.I3(A.h.D(s.cx.gcE()-6371,0,9e9))+" km":""
x=y.p
return new C.am(A.a0,w,A.b5,A.t,C.a([o,C.ao(w,C.q(w,C.w(C.a([v,A.bs,C.c("Circular orbit here: "+u+" km/s.  Escape speed: "+t+" km/s."+s,w,w,w,w,w,w,I.aZP,w,w,w)],x),A.B,w,A.e,A.P,0,A.p),A.f,w,w,new C.p(p,w,r,q,w,w,A.m),w,w,w,w,A.bS,w,w,w),w,w,12,12,8,w)],x),w)},
$S:65}
B.eLw.prototype={
$0(){return B.uX(this.b,this.a.d,"size-compare")},
$S:0}
B.eLx.prototype={
$0(){var x=this.a
return x.l(new B.eLv(x,this.b))},
$S:0}
B.eLv.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.eLy.prototype={
$0(){var x=this.a
return x.l(new B.eLu(x,this.b))},
$S:0}
B.eLu.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.fiI.prototype={
$3(d,e,f){var x,w,v=this.a
$.T()
x=C.L()
x.r=f.j(0.2).gp(0)
x.y=new C.h3(A.H,Math.max(2,e*0.18))
v.O(d,e*1.12,x)
x=C.L()
w=C.ap(f,A.v,0.6)
w.toString
x.san(new C.bU(N.C_,0.5,A.w,null,0,C.a([A.c,f,w],y.O),T.Th,null).az(0,C.bY(d,e)))
v.O(d,e,x)},
$S:2069}
B.dUa.prototype={
$1(d){return d.e<=0},
$S:z+14}
B.dTZ.prototype={
$1(d){return d.b},
$S:z+15}
B.dU_.prototype={
$0(){return B.uX(this.b,this.a.d,"black-hole")},
$S:0}
B.dU0.prototype={
$2(d,e){var x,w,v,u,t,s,r=null,q=this.a,p=new C.av(e.b,e.d)
q.Q=p
p=C.aA(A.bZ,C.b4(r,r,r,new B.beD(q,r),p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.dTX(q),r,r,r,r,r,r,r,r,r,new B.dTY(q),r,r,r,r,!1,A.a4)
x=A.v.j(0.55)
w=C.n(14)
v=C.K(A.by,A.r,1)
u=q.r
if(u<1000)u=A.h.a1(u,u<10?1:0)+" Suns"
else u=B.fSv(u)+" Suns"
u=q.ahW("MASS",u)
t=2.953*q.r
s=y.p
s=C.a([p,C.ao(r,C.q(r,C.A(C.a([u,q.ahW("EDGE WIDTH",(t<100?A.h.a1(t,1):B.I3(t))+" km"),q.ahW("TIME",A.h.a1(this.b*100,0)+"%"),q.ahW("EATEN",""+q.as)],s),A.l,r,A.e,A.i,0,r,r),A.f,r,r,new C.p(x,r,v,w,r,r,A.m),r,r,r,r,A.bS,r,r,r),r,r,10,10,8,r)],s)
if(q.z.length===0&&q.as===0)s.push(D.eOG)
return new C.e9(new C.am(A.a0,r,A.b5,A.t,s,r),q.d)},
$S:215}
B.dTY.prototype={
$1(d){return this.a.b4w(d.b)},
$S:24}
B.dTX.prototype={
$1(d){if(A.cW.ai()<0.12)this.a.b4w(d.b)},
$S:19}
B.dU2.prototype={
$1(d){var x=this.a
return x.l(new B.dTW(x,d))},
$S:6}
B.dTW.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
B.dU3.prototype={
$0(){var x=this.a
return x.l(new B.dTV(x))},
$S:0}
B.dTV.prototype={
$0(){return this.a.r=10},
$S:0}
B.dU4.prototype={
$0(){var x=this.a
return x.l(new B.dTU(x))},
$S:0}
B.dTU.prototype={
$0(){return this.a.r=21},
$S:0}
B.dU5.prototype={
$0(){var x=this.a
return x.l(new B.dTT(x))},
$S:0}
B.dTT.prototype={
$0(){return this.a.r=43e5},
$S:0}
B.dU6.prototype={
$0(){var x=this.a
return x.l(new B.dTS(x))},
$S:0}
B.dTS.prototype={
$0(){return this.a.r=65e8},
$S:0}
B.dU7.prototype={
$0(){var x=this.a
return x.l(new B.dTR(x))},
$S:0}
B.dTR.prototype={
$0(){var x=this.a
return x.w=!x.w},
$S:0}
B.dU8.prototype={
$0(){var x=this.a
return x.l(new B.dTQ(x))},
$S:0}
B.dTQ.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.dU9.prototype={
$0(){var x=this.a
return x.l(new B.dTP(x))},
$S:0}
B.dTP.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.dU1.prototype={
$0(){var x=this.a
return x.l(new B.dTO(x))},
$S:0}
B.dTO.prototype={
$0(){var x=this.a
A.d.a7(x.z)
x.as=0},
$S:0}
B.ebE.prototype={
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
$S:2070}
B.ebu.prototype={
$0(){return B.uX(this.b,this.a.d,"galaxy")},
$S:0}
B.ebv.prototype={
$0(){var x=this.a
return x.l(new B.ebt(x,this.b))},
$S:0}
B.ebt.prototype={
$0(){var x,w=this.a
w.ch=!1
x=this.b.a
w.Q=x
w.w=x==="barred"?1:0
w.a1u()},
$S:0}
B.ebw.prototype={
$0(){var x=this.a
return x.l(new B.ebs(x))},
$S:0}
B.ebs.prototype={
$0(){var x=this.a
if(x.Q==="elliptical"){x.Q="spiral"
x.a1u()}x.cGk()},
$S:0}
B.ebx.prototype={
$1(d){var x=this.a
return x.l(new B.ebr(x,d))},
$S:6}
B.ebr.prototype={
$0(){var x=this.a
x.f=A.h.S(this.b)
x.a1u()},
$S:0}
B.eby.prototype={
$1(d){var x=this.a
return x.l(new B.ebq(x,d))},
$S:6}
B.ebq.prototype={
$0(){var x=this.a
x.r=this.b
x.a1u()},
$S:0}
B.ebz.prototype={
$1(d){var x=this.a
return x.l(new B.ebp(x,d))},
$S:6}
B.ebp.prototype={
$0(){return this.a.as=this.b},
$S:0}
B.ebA.prototype={
$1(d){var x=this.a
return x.l(new B.ebo(x,d))},
$S:6}
B.ebo.prototype={
$0(){return this.a.ax=this.b},
$S:0}
B.ebB.prototype={
$0(){var x=this.a
return x.l(new B.ebn(x))},
$S:0}
B.ebn.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.ebC.prototype={
$0(){var x=this.a
return x.l(new B.ebm(x))},
$S:0}
B.ebm.prototype={
$0(){var x=this.a
return x.z=!x.z},
$S:0}
B.ebD.prototype={
$0(){var x=this.a
return x.l(new B.ebl(x))},
$S:0}
B.ebl.prototype={
$0(){var x=this.a
return x.y=!x.y},
$S:0}
B.doT.prototype={
$6(d,e,f,g,h,i){return g.a6(0,new C.m((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:2071}
B.eIy.prototype={
$0(){return B.uX(this.b,this.a.d,"seasons-moon")},
$S:0}
B.eIz.prototype={
$0(){var x=this.a
return x.l(new B.eIx(x))},
$S:0}
B.eIx.prototype={
$0(){return this.a.f="seasons"},
$S:0}
B.eIA.prototype={
$0(){var x=this.a
return x.l(new B.eIw(x))},
$S:0}
B.eIw.prototype={
$0(){return this.a.f="moon"},
$S:0}
B.eIB.prototype={
$0(){var x=this.a
return x.l(new B.eIv(x))},
$S:0}
B.eIv.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.eIC.prototype={
$0(){var x=this.a
return x.l(new B.eIu(x))},
$S:0}
B.eIu.prototype={
$0(){var x=this.a
return x.Q=!x.Q},
$S:0}
B.eID.prototype={
$1(d){var x=this.a
return x.l(new B.eIt(x,d))},
$S:6}
B.eIt.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.eIE.prototype={
$1(d){var x=this.a
return x.l(new B.eIs(x,d))},
$S:6}
B.eIs.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.eIF.prototype={
$1(d){var x=this.a
return x.l(new B.eIr(x,d))},
$S:6}
B.eIr.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.eIG.prototype={
$1(d){var x=this.a
return x.l(new B.eIq(x,d))},
$S:6}
B.eIq.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var x=B.aQb.prototype
x.bCR=x.t
x=B.aIf.prototype
x.bzg=x.t
x=B.aPz.prototype
x.bCe=x.t
x=B.aPA.prototype
x.bCf=x.t
x=B.aPB.prototype
x.bCg=x.t
x=B.aQ7.prototype
x.bCN=x.t
x=B.aQa.prototype
x.bCQ=x.t
x=B.aP6.prototype
x.bBK=x.t
x=B.aPx.prototype
x.bCb=x.t
x=B.aQ5.prototype
x.bCL=x.t})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.av7.prototype,"gci7","ci8",0)
x(v,"gcW7","a6Q",4)
x(v=B.aH4.prototype,"gc8C","b0F",0)
w(v,"gcia","cib",5)
x(v,"gbW6","bW7",0)
x(v=B.aH5.prototype,"gcGt","cGu",0)
x(v,"gcif","cig",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(C.aF,[B.bqr,B.RJ,B.o3,B.ciV,B.fwq,B.ads,B.adt,B.w3,B.QR,B.z_,B.QQ,B.bzd,B.Rp,B.ahj])
w(C.af,[B.Ye,B.Yq,B.Xn,B.Yt,B.Yd,B.Xo,B.Y6,B.Wq,B.Xl,B.Y1])
w(C.ai,[B.aQb,B.aIf,B.aPz,B.bpK,B.aQa,B.aPB,B.aQ7,B.aP6,B.aPx,B.aQ5])
v(B.bpy,B.aQb)
w(C.hq,[B.eTA,B.eTy,B.eTm,B.eTq,B.eTl,B.eTr,B.eTs,B.eTw,B.hgQ,B.cER,B.h27,B.ciX,B.ciW,B.fHR,B.fHS,B.h6A,B.cq5,B.cpV,B.cq2,B.ecm,B.ecn,B.ecg,B.ecf,B.ecw,B.ecx,B.ecv,B.ecy,B.ecQ,B.ecR,B.ecS,B.f_t,B.f_u,B.f_n,B.eSY,B.eSZ,B.eT_,B.eT4,B.eT5,B.eSP,B.fkA,B.fkB,B.edq,B.edj,B.edl,B.edm,B.edn,B.edo,B.ecW,B.fiI,B.dUa,B.dTZ,B.dTY,B.dTX,B.dU2,B.ebE,B.ebx,B.eby,B.ebz,B.ebA,B.doT,B.eID,B.eIE,B.eIF,B.eIG])
w(C.iY,[B.eTz,B.eTb,B.eTa,B.eTk,B.eTt,B.eTj,B.eTu,B.eTi,B.eTv,B.eTh,B.eTg,B.eTx,B.eTf,B.eTn,B.eTe,B.eTo,B.eTd,B.eTp,B.eTc,B.cES,B.cET,B.hgP,B.cEO,B.cEN,B.cEU,B.cEP,B.cEQ,B.fBr,B.h7T,B.cq9,B.cq4,B.cq3,B.cq6,B.cq7,B.cq8,B.cpT,B.cpW,B.cpX,B.cpS,B.cpY,B.cpR,B.cpZ,B.cpQ,B.cq_,B.cpP,B.cq0,B.cpO,B.cq1,B.cpN,B.ecl,B.eck,B.ecj,B.eco,B.ech,B.eci,B.ece,B.ecH,B.ecp,B.ecq,B.ecJ,B.ecu,B.ecN,B.ecG,B.ecO,B.ecF,B.ecP,B.ecE,B.ecD,B.ecC,B.ecB,B.ecT,B.ecA,B.ecU,B.ecz,B.ecK,B.ect,B.ecL,B.ecs,B.ecM,B.ecr,B.ecc,B.ecb,B.drJ,B.fD3,B.fD4,B.fD5,B.fD6,B.fD7,B.fD8,B.fD9,B.f_q,B.f_r,B.f_p,B.f_o,B.eSQ,B.eT0,B.eT2,B.eSX,B.eT3,B.eSW,B.eSV,B.eT6,B.eSU,B.eT7,B.eST,B.eT8,B.eSS,B.eT9,B.eSR,B.eSN,B.eSM,B.fkz,B.ecY,B.edc,B.ed3,B.edd,B.ed2,B.ede,B.edb,B.edi,B.eda,B.ed9,B.edk,B.ed8,B.ed7,B.ed6,B.ed5,B.edp,B.ed4,B.edf,B.ed1,B.edg,B.ed0,B.edh,B.ed_,B.eLw,B.eLx,B.eLv,B.eLy,B.eLu,B.dU_,B.dTW,B.dU3,B.dTV,B.dU4,B.dTU,B.dU5,B.dTT,B.dU6,B.dTS,B.dU7,B.dTR,B.dU8,B.dTQ,B.dU9,B.dTP,B.dU1,B.dTO,B.ebu,B.ebv,B.ebt,B.ebw,B.ebs,B.ebr,B.ebq,B.ebp,B.ebo,B.ebB,B.ebn,B.ebC,B.ebm,B.ebD,B.ebl,B.eIy,B.eIz,B.eIx,B.eIA,B.eIw,B.eIB,B.eIv,B.eIC,B.eIu,B.eIt,B.eIs,B.eIr,B.eIq])
w(C.lO,[B.bxi,B.bc8,B.bkd,B.bxf,B.bfi,B.bwN,B.beD,B.bk4,B.bvZ])
w(C.aw,[B.bbf,B.e5,B.fm,B.bbg,B.fL,B.Gy])
w(C.iZ,[B.h7U,B.h7V,B.cpU,B.ecI,B.ecd,B.drK,B.f_s,B.eT1,B.eSO,B.ecX,B.ecZ,B.ecV,B.dU0])
v(B.av7,B.aIf)
v(B.aPA,B.aPz)
v(B.aH4,B.aPA)
v(B.bCM,B.aQa)
v(B.bpx,B.bCM)
v(B.bCy,B.aPB)
v(B.aH5,B.bCy)
v(B.bCK,B.aQ7)
v(B.bpu,B.bCK)
v(B.bCp,B.aP6)
v(B.bo5,B.bCp)
v(B.bCx,B.aPx)
v(B.boA,B.bCx)
v(B.bCJ,B.aQ5)
v(B.bpt,B.bCJ)
x(B.aQb,C.cl)
x(B.aIf,C.cl)
x(B.aPz,C.cl)
x(B.aPA,B.o3)
x(B.aPB,C.cl)
x(B.bCy,B.o3)
x(B.aQ7,C.cl)
x(B.bCK,B.o3)
x(B.aQa,C.cl)
x(B.bCM,B.o3)
x(B.aP6,C.cl)
x(B.bCp,B.o3)
x(B.aPx,C.cl)
x(B.bCx,B.o3)
x(B.aQ5,C.cl)
x(B.bCJ,B.o3)})()
C.jg(b.typeUniverse,JSON.parse('{"Ye":{"af":[],"x":[]},"bpy":{"ai":["Ye"]},"bxi":{"aC":[]},"bbf":{"aw":[],"x":[]},"e5":{"aw":[],"x":[]},"fm":{"aw":[],"x":[]},"bbg":{"aw":[],"x":[]},"fL":{"aw":[],"x":[]},"Gy":{"aw":[],"x":[]},"Yq":{"af":[],"x":[]},"bc8":{"aC":[]},"av7":{"ai":["Yq"]},"Xn":{"af":[],"x":[]},"aH4":{"ai":["Xn"]},"bkd":{"aC":[]},"Yt":{"af":[],"x":[]},"bpK":{"ai":["Yt"]},"Yd":{"af":[],"x":[]},"Xo":{"af":[],"x":[]},"Y6":{"af":[],"x":[]},"bpx":{"ai":["Yd"]},"bxf":{"aC":[]},"aH5":{"ai":["Xo"]},"bfi":{"aC":[]},"bpu":{"ai":["Y6"]},"bwN":{"aC":[]},"Wq":{"af":[],"x":[]},"Xl":{"af":[],"x":[]},"Y1":{"af":[],"x":[]},"bo5":{"ai":["Wq"]},"beD":{"aC":[]},"boA":{"ai":["Xl"]},"bk4":{"aC":[]},"bpt":{"ai":["Y1"]},"bvZ":{"aC":[]}}'))
C.S3(b.typeUniverse,JSON.parse('{"o3":1}'))
var y=(function rtii(){var x=C.as
return{I:x("vn"),V:x("N<ac>"),O:x("N<u>"),l:x("N<Cc>"),y:x("N<ah<Cc>>"),f:x("N<ah<ah<H>>>"),b:x("N<ah<H>>"),x:x("N<ah<F>>"),g:x("N<m>"),E:x("N<yH>"),v:x("N<h_>"),L:x("N<+(o,o)>"),c:x("N<+(o,o,a_)>"),S:x("N<d4>"),s:x("N<o>"),X:x("N<KV>"),h:x("N<ads>"),a:x("N<dG>"),p:x("N<x>"),u:x("N<lk>"),A:x("N<Rp>"),Z:x("N<RJ>"),G:x("N<bqr>"),q:x("N<ahj>"),n:x("N<H>"),t:x("N<F>"),z:x("cB<ai<af>>"),j:x("ah<@>"),d:x("a9<o,@>"),m:x("io"),P:x("cr"),U:x("adt"),D:x("dG"),J:x("l4"),w:x("P"),i:x("H"),r:x("F"),W:x("oD?"),B:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bg9=new C.cq(A.z,null,null,A.ahG,null)
D.hgp=new C.D("Press Drop! and watch them fall from 20 metres.",null,A.kC,null,A.K,null,null,null,null,null,null,null)
D.eHK=new C.C(A.o8,D.hgp,null)
D.bgB=new C.cq(A.z,null,null,D.eHK,null)
D.fVP=new C.G(!0,A.jW,null,null,null,null,18,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hlq=new C.D("Draw anywhere",null,D.fVP,null,null,null,null,null,null,null,null,null)
D.bgG=new C.cq(A.z,null,null,D.hlq,null)
D.bji=new C.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.bjR=new C.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.a_4=new C.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bkW=new C.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bl0=new C.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.blm=new C.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.bmg=new C.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.bo4=new C.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bol=new C.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.CC=new C.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.brb=new C.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.brt=new C.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.brz=new C.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.btU=new C.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.btY=new C.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.buu=new C.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.buJ=new C.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.He=new C.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.alD=new C.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bwj=new C.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bwn=new C.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bwH=new C.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.bwS=new C.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.am7=new C.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bxS=new C.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.a0S=new C.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.a0X=new C.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.bAH=new C.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.anE=new C.R(0,0,9,0)
D.bGc=new C.R(10,10,10,6)
D.aoa=new C.R(14,10,8,12)
D.bLu=new C.R(4,4,6,2)
D.bUN=new C.a_(62931,"MaterialIcons",!1)
D.arX=new C.a_(62951,"MaterialIcons",!1)
D.bV4=new C.a_(63070,"MaterialIcons",!1)
D.xr=new C.a_(63128,"MaterialIcons",!1)
D.IG=new C.a_(63726,"MaterialIcons",!1)
D.asW=new C.a_(983415,"MaterialIcons",!1)
D.bXM=new C.a_(984561,"MaterialIcons",!1)
D.bYl=new C.ae(V.lf,24,A.aQ,null,null,null)
D.bZI=new C.ae(A.np,21,A.ab,null,null,null)
D.auv=new C.ae(A.eE,19,null,null,null,null)
D.p9=new C.ae(A.tT,21,A.ab,null,null,null)
D.c79=new C.ae(A.QG,46,A.aH,null,null,null)
D.c7r=new C.ae(A.eP,20,A.aF,null,null,null)
D.c8t=new C.ae(A.mF,null,A.aF,null,null,null)
D.cg_=x([0,2,4,6,7,9,11],y.t)
D.cy9=x([255],y.t)
D.cBl=x([A.bO,A.f5],y.O)
D.cEh=x([33,249,4,5],y.t)
D.cEi=x([33,255,11],y.t)
D.bnW=new C.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cHo=x([D.bnW,A.dl],y.O)
D.cP5=x([A.d_,G.nN,A.iu,G.ai8,A.d_,A.iu],y.O)
D.d60=x([3,1,0,0,0],y.t)
D.d6q=x([0.78,1],y.n)
D.aCA=x([0,2,4,7,9,12,14,16],y.t)
D.d6I=x([A.ev,A.oO],y.O)
D.d70=x([A.a_,A.fy],y.O)
D.aCH=x([A.c5,A.aH,A.bu,A.bj,A.bf],y.O)
D.db4=x([A.bw,A.be,A.bj,A.bf],y.O)
D.bs7=new C.u(1,0.011764705882352941,0.023529411764705882,0.09019607843137255,A.q)
D.db7=x([D.bs7,G.all],y.O)
D.dca=x([A.bu,A.c5,A.aH],y.O)
D.dcC=x([0.93,0.975,1],y.n)
D.dd6=x([0,0.55,0.6],y.n)
D.blZ=new C.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.ddg=x([A.v5,D.blZ,A.eA],y.O)
D.bvm=new C.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.boY=new C.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.btN=new C.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.ddi=x([D.bvm,D.boY,D.btN],y.O)
D.ddE=x([A.as,A.fM,A.lW,A.i2,A.dD],y.O)
D.fdN=new C.y("solid","Solid")
D.f2P=new C.y("three","3D block")
D.f51=new C.y("neon","Neon tube")
D.f8e=new C.y("gradient","Gradient")
D.fdV=new C.y("sticker","Sticker")
D.dey=x([D.fdN,I.aUp,D.f2P,D.f51,D.f8e,D.fdV,I.aUr,U.Wa],y.L)
D.dez=x([A.bu,A.aH,A.bf,A.c5,A.c,A.cX],y.O)
D.hqc=new B.z_("Moon",1737,4291941851)
D.hq9=new B.z_("Earth",6371,4281908728)
D.hqd=new B.z_("Neptune",24622,4284524026)
D.hqe=new B.z_("Saturn",58232,4294829706)
D.hqa=new B.z_("Jupiter",69911,4294677052)
D.hqf=new B.z_("Sun",696340,4294688548)
D.hqg=new B.z_("Sirius A",119e4,4290763774)
D.hq7=new B.z_("Arcturus",179e5,4294818420)
D.hq8=new B.z_("Betelgeuse",531e6,4294472049)
D.hqb=new B.z_("UY Scuti",667e6,4293870660)
D.Tw=x([D.hqc,D.hq9,D.hqd,D.hqe,D.hqa,D.hqf,D.hqg,D.hq7,D.hq8,D.hqb],C.as("N<z_>"))
D.fla=new C.b1("glow","Glow",A.Io)
D.fi1=new C.b1("rainbow","Rainbow",A.m8)
D.fit=new C.b1("stars","Stars",A.ih)
D.fhH=new C.b1("sparks","Sparks",A.eh)
D.fkd=new C.b1("fire","Fire",A.vD)
D.deV=x([D.fla,D.fi1,D.fit,D.fhH,D.fkd],y.c)
D.df5=x([A.am5,A.cX,A.de],y.O)
D.dg8=x([0.2,1],y.n)
D.dhl=x(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],y.s)
D.di3=x([0,0.42,0.43,1],y.n)
D.aDI=x([0,2,4,7,9],y.t)
D.dk9=x([A.cx,A.a_],y.O)
D.a7m=x(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],y.s)
D.fwL=new C.d4(A.bq,A.J,4)
D.dlc=x([D.fwL],y.S)
D.aDW=x([0,31,59,90,120,151,181,212,243,273,304,334],y.t)
D.bxM=new C.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.bzq=new C.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.dlD=x([D.a0S,D.bxM,D.bzq],y.O)
D.bkj=new C.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.dno=x([D.He,D.bkj],y.O)
D.dnE=x([1.77,3.55,7.15,16.7],y.n)
D.dp7=x([M.CT,A.lW],y.O)
D.byD=new C.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.bsB=new C.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.dpR=x([D.byD,D.bsB],y.O)
D.bsR=new C.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.bqZ=new C.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.dpW=x([D.a0X,D.bsR,D.bqZ],y.O)
D.dqB=x(["March","April","May","June","July","August","September","October","November","December","January","February"],y.s)
D.fdP=new C.y("spiral","Spiral")
D.eVz=new C.y("barred","Barred spiral")
D.f7b=new C.y("elliptical","Elliptical")
D.drr=x([D.fdP,D.eVz,D.f7b],y.L)
D.hqh=new B.QR("Moon",1.62,0,4291941851)
D.hqi=new B.QR("Mars",3.71,0.01,4294472049)
D.hqj=new B.QR("Earth",9.81,1,4281908728)
D.hql=new B.QR("Jupiter",24.79,1.4,4294677052)
D.hqk=new B.QR("Sun",274,2,4294688548)
D.AI=x([D.hqh,D.hqi,D.hqj,D.hql,D.hqk],C.as("N<QR>"))
D.TR=x([0,2,4,5,7,9,11],y.t)
D.aEs=x([0,0.7,1],y.n)
D.duz=x([0,0.62,1],y.n)
D.dvd=x([],y.y)
D.a7L=x([],y.h)
D.dvI=x([0,0.46,0.82],y.n)
D.dwJ=x([0.9,0.97,1],y.n)
D.dx_=x([A.c5,A.cX,A.bu,A.bj],y.O)
D.dxM=x([M.CT,A.h_],y.O)
D.hq5=new B.w3("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.hq6=new B.w3("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.hpY=new B.w3("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.hq4=new B.w3("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.hq2=new B.w3("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.hpZ=new B.w3("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.hq3=new B.w3("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.hq_=new B.w3("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.hq1=new B.w3("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.hq0=new B.w3("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.EB=x([D.hq5,D.hq6,D.hpY,D.hq4,D.hq2,D.hpZ,D.hq3,D.hq_,D.hq1,D.hq0],C.as("N<w3>"))
D.bti=new C.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bqo=new C.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.dyd=x([D.He,D.bti,D.bqo,A.ajo],y.O)
D.dA0=x([A.hm,A.eY,A.aH,A.GY],y.O)
D.eY8=new C.y("Wide",1.7777777777777777)
D.feU=new C.y("Tall",0.5625)
D.a83=x([D.eY8,I.aUd,D.feU],C.as("N<+(o,H)>"))
D.feo=new C.y("type","Typewriter")
D.f5Z=new C.y("bounce","Bounce")
D.ffk=new C.y("wave","Wave")
D.fcz=new C.y("neon","Neon flicker")
D.fgu=new C.y("zoom","Pop")
D.eWm=new C.y("drop","Drop in")
D.eRT=new C.y("fly","Fly in")
D.fdS=new C.y("spin","Spin in")
D.f7H=new C.y("flip","Flip")
D.f90=new C.y("jelly","Jelly")
D.fdG=new C.y("shake","Shake")
D.f7I=new C.y("float","Float")
D.fcx=new C.y("pulse","Heartbeat")
D.fdY=new C.y("swing","Swing")
D.fdc=new C.y("reveal","Reveal")
D.eY9=new C.y("blur","Zoom out")
D.f6P=new C.y("domino","Domino")
D.eXj=new C.y("spiral","Spiral in")
D.f9e=new C.y("cascade","Shine sweep")
D.ffq=new C.y("wobble","Wobble")
D.f2c=new C.y("rise","Rise up")
D.f1p=new C.y("scatter","Scatter & gather")
D.dE4=x([D.feo,D.f5Z,D.ffk,D.fcz,I.aUj,D.fgu,I.aUq,D.eWm,D.eRT,D.fdS,D.f7H,D.f90,D.fdG,D.f7I,D.fcx,D.fdY,D.fdc,D.eY9,D.f6P,D.eXj,D.f9e,D.ffq,D.f2c,D.f1p],y.L)
D.dEg=x([F.r6,A.O_],y.O)
D.EE=x([A.c5,A.bu,A.bf,A.aH,A.bj,A.c1,A.c,A.cX],y.O)
D.bjd=new C.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bnD=new C.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.dFY=x([D.bjd,G.ajT,D.bnD],y.O)
D.fha=new C.b1("drop","Drop",F.a56)
D.fhe=new C.b1("weight","Weight",A7.atr)
D.fkM=new C.b1("cannon","Newton's cannon",A.asp)
D.dHe=x([D.fha,D.fhe,D.fkM],y.c)
D.fbG=new C.y("\ud83c\udf19","Midnight")
D.fb4=new C.y("\u2728","Starfield")
D.eSY=new C.y("\ud83c\udf0c","Aurora")
D.eYM=new C.y("\ud83c\udf05","Savanna sunset")
D.fbb=new C.y("\ud83c\udf0a","Ocean waves")
D.eZA=new C.y("\ud83d\udd79\ufe0f","Neon grid")
D.f4u=new C.y("\ud83d\udcbb","Code rain")
D.f0E=new C.y("\ud83c\udf89","Confetti")
D.f3i=new C.y("\ud83c\udf86","Fireworks")
D.eUk=new C.y("\ud83e\udee7","Bubbles")
D.feS=new C.y("\u2744\ufe0f","Snowfall")
D.f_i=new C.y("\ud83e\uddf6","Kente weave")
D.eVR=new C.y("\ud83d\udd2e","Bokeh lights")
D.f4k=new C.y("\ud83c\udf27\ufe0f","Rain")
D.eWu=new C.y("\ud83d\udd25","Fire")
D.f3G=new C.y("\ud83c\udfd4\ufe0f","Paper hills")
D.f_D=new C.y("\ud83c\udfad","Stage")
D.f1s=new C.y("\u2600\ufe0f","Sunburst")
D.f47=new C.y("\ud83e\udee0","Lava lamp")
D.eX7=new C.y("\ud83c\udf03","City night")
D.dIX=x([D.fbG,D.fb4,D.eSY,D.eYM,D.fbb,D.eZA,D.f4u,D.f0E,D.f3i,D.eUk,D.feS,D.f_i,D.eVR,D.f4k,D.eWu,D.f3G,D.f_D,D.f1s,D.f47,D.eX7],y.L)
D.dJe=x([0,0.35,0.55,0.75,1],y.n)
D.dKv=x([0.72,1],y.n)
D.dKH=x([0,2,4,7,9,12,14,16,19,21],y.t)
D.eBy={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dN0=new C.bm(D.eBy,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],C.as("bm<o,o>"))
D.eBe={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.fhM=new C.b1(3,20,1.9)
D.fh2=new C.b1(33,90,1.6)
D.flg=new C.b1(52,15,3.2)
D.fle=new C.b1(45,-100,1.8)
D.fje=new C.b1(-15,-60,1.9)
D.fiz=new C.b1(-25,140,2.4)
D.fin=new C.b1(-82,0,2.2)
D.aLz=new C.bm(D.eBe,[D.fhM,D.fh2,D.flg,D.fle,D.fje,D.fiz,D.fin],C.as("bm<o,+(H,H,H)>"))
D.dPE=new C.d2([A.q_,1,A.rj,1,A.rk,1,A.c2,1,A.kk,2,A.xm,4,A.zQ,1,A.zR,2,A.zS,4,A.vs,2,A.xl,4,A.zP,8],C.as("d2<u_,F>"))
D.dYD=new B.Wq(null)
D.e6C=new B.Xl(null)
D.e6D=new B.Xn(null)
D.e6F=new B.Xo(null)
D.etD=new B.Y1(null)
D.etF=new B.Y6(null)
D.evy=new B.Yd(null)
D.aNX=new B.Ye(null)
D.aO4=new B.Yq(null)
D.aO5=new B.Yt(null)
D.eCj=new C.m(0,-6771)
D.eED=new C.m(1.9,-0.8)
D.eEH=new C.m(-0.22,0.09)
D.hfm=new C.D("Tap to throw in a star",null,A.kC,null,null,null,null,null,null,null,null,null)
D.bgD=new C.cq(A.z,null,null,D.hfm,null)
D.eOG=new C.cS(0,null,0,14,null,null,D.bgD,null)
D.bpl=new C.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bvZ=new C.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.dlk=x([D.bpl,D.am7,D.bvZ],y.O)
D.ePB=new C.bU(A.n_,0.5,A.w,null,0,D.dlk,D.aEs,null)
D.cP4=x([A.CR,A.as,A.L],y.O)
D.dCk=x([0.3,0.7,1],y.n)
D.ePC=new C.bU(A.z,0.5,A.w,null,0,D.cP4,D.dCk,null)
D.dfK=x([A.CR,A.as,A.fM],y.O)
D.ePF=new C.bU(A.z,0.5,A.w,null,0,D.dfK,null,null)
D.bpD=new C.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bmZ=new C.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.diB=x([D.bpD,D.bmZ],y.O)
D.ePK=new C.bU(A.z,0.5,A.w,null,0,D.diB,null,null)
D.bvf=new C.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.bsO=new C.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.bsV=new C.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dIZ=x([D.bvf,D.bsO,D.bsV],y.O)
D.ePL=new C.bU(A.MH,0.5,A.w,null,0,D.dIZ,G.aDd,null)
D.fhg=new C.b1("Moon",1.62,4291941851)
D.fi4=new C.b1("Neptune",11.15,4284524026)
D.fiP=new C.b1("Sun",274,4294688548)
D.fjb=new C.b1("Mercury",3.7,4288455599)
D.fjh=new C.b1("Earth",9.81,4281908728)
D.fjj=new C.b1("Mars",3.71,4294472049)
D.fjN=new C.b1("Venus",8.87,4294759245)
D.fjV=new C.b1("Saturn",10.44,4294829706)
D.fkj=new C.b1("Jupiter",24.79,4294677052)
D.hkw=new C.D("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aX7=new C.b3(D.hkw,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.dxu=x([A.c1,A.bu,A.bf,A.aH,A.pM,A.c1],y.O)
D.fGc=new C.hf(A.z,0,6.283185307179586,A.w,D.dxu,null,null)
D.fPY=new C.G(!0,A.aQ,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.TI,null,null,null)
D.fHm=new C.eE("You are here (Sun)",null,null,A.cV,null,null,null,null,null,null,D.fPY)
D.fHn=new C.eE("What we see",null,null,A.cV,null,null,null,null,null,null,F.adz)
D.aXX=new C.G(!0,A.bX,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIq=new C.G(!0,A.bf,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKB=new C.G(!0,A.bX,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKO=new C.G(!0,A.ab,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM4=new C.G(!0,A.bX,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx2=new C.d4(A.ba,A.J,3)
D.aGb=x([D.fx2],y.S)
D.fP8=new C.G(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.TI,null,null,null)
D.fPK=new C.G(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new C.d4(A.v,A.J,5)
D.dbk=x([D.fwP],y.S)
D.fSJ=new C.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dbk,null,null,null)
D.fSQ=new C.G(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aGb,null,null,null)
D.fUH=new C.G(!0,A.bX,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVq=new C.G(!0,A.aF,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXQ=new C.G(!0,A.c,null,null,null,null,13,A.a8,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h33=new C.D("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.h3X=new C.D("Your mass never changes. What changes is how hard each world pulls on it.",null,A.LM,null,null,null,null,null,null,null,null,null)
D.h4R=new C.D("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.Xq,null,A.K,null,null,null,null,null,null,null)
D.fRe=new C.G(!0,A.jW,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6o=new C.D("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fRe,null,null,null,null,null,null,null,null,null)
D.hda=new C.D("The map of the world is not saved on this phone yet",null,A.fT,null,A.K,null,null,null,null,null,null,null)
D.hdk=new C.D("Download the animation (GIF)",null,A.cK,null,null,null,null,null,null,null,null,null)
D.fR9=new C.G(!0,A.aH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hes=new C.D("Planet Earth",null,D.fR9,null,null,null,null,null,null,null,null,null)
D.hgI=new C.D("UNIVERSE EXPLORER",null,I.acX,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.inL=C.S(C.as("o"),C.as("iS"))
$.ho1=null
$.ii0=C.S(C.as("o"),C.as("iS"))
$.ij5=C.S(C.as("o"),C.as("iS"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iRd","hY9",()=>C.a([B.ahG("EARTH GLOBE","Turn it, tap a country",A.np,A.aH,new B.fD3()),B.ahG("SOLAR SYSTEM","The Sun and its worlds",D.arX,A.aQ,new B.fD4()),B.ahG("GRAVITY LAB","Drop, weigh, orbit",F.a56,A.cX,new B.fD5()),B.ahG("BLACK HOLE","Throw in a star",A.no,A.bj,new B.fD6()),B.ahG("GALAXY","Build, tilt, collide",A.xq,A.hl,new B.fD7()),B.ahG("SIZE COMPARE","Earth next to a star",D.bV4,A.c5,new B.fD8()),B.ahG("SEASONS & MOON","Why it is summer",A.vt,A.bw,new B.fD9())],C.as("N<bzd>")))})()};
(a=>{a["hPSqIq5NHFlKgPkEuFvIOb1FKhw="]=a.current})($__dart_deferred_initializers__);