((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dCi(d,e){A.a9(d,!1).cM(A.eq(new C.cMr(e),!0,null,y.H))},
Sw(d,e){var x=0,w=A.i(y.H),v,u,t,s,r,q,p
var $async$Sw=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:q=$.aej()
p=q.a
p=p==null?null:p.a
if(p==null)p=""
u=$.am()
t=new A.ag(new A.aM(p,B.a1,B.X),u)
x=3
return A.b(A.c2(null,null,!0,null,new C.cMq(e,t),d,null,!0,y.N),$async$Sw)
case 3:s=g
t.F$=u
t.I$=0
if(d.e==null||s==null||s.length===0){x=1
break}r=C.dkP(s)
if(r==null){d.E(y.q).f.O(D.bp5)
x=1
break}x=4
return A.b(A.bS(B.fj,null,y.H),$async$Sw)
case 4:if(d.e==null){x=1
break}q.sv(0,r)
d.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Playing "+r.d+" on all "+e+" devices",null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$Sw,w)},
d_n(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.h(0,"id")
j=J.k(j==null?"":j)
x=d.h(0,"label")
x=J.k(x==null?"Virtual Device":x)
w=d.h(0,"serialNumber")
w=J.k(w==null?"":w)
v=d.h(0,"modelName")
v=J.k(v==null?"NGMY Virtual Phone":v)
u=d.h(0,"deviceId")
u=J.k(u==null?"":u)
t=d.h(0,"macAddress")
t=J.k(t==null?"":t)
s=d.h(0,"imei")
s=J.k(s==null?"":s)
r=d.h(0,"osName")
r=J.k(r==null?"NGMY OS":r)
q=d.h(0,"osVersion")
q=J.k(q==null?"1.0":q)
p=d.h(0,"virtualCity")
p=J.k(p==null?"Unknown":p)
o=d.h(0,"virtualCountry")
o=J.k(o==null?"":o)
n=A.aV(d.h(0,"virtualLat"))
if(n==null)n=null
if(n==null)n=0
m=A.aV(d.h(0,"virtualLng"))
if(m==null)m=null
if(m==null)m=0
l=d.h(0,"timezone")
l=J.k(l==null?"UTC":l)
k=d.h(0,"createdAt")
return new C.mg(j,x,w,v,u,t,s,r,q,p,o,n,m,l,J.k(k==null?"":k))},
Fa(d){return C.dkS(d)},
dkS(a2){var x=0,w=A.i(y.X),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fa=A.d(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$Fa)
case 3:h=a4
g=B.a.j(a2)
f=h.a
e=J.a1(f)
d=A.aE(e.h(f,"ngmy_virtual_device_fleet_v2_"+g.toLowerCase()))
x=d!=null&&d.length!==0?4:5
break
case 4:u=7
s=B.v.aE(0,d,null)
x=y._.b(s)&&J.cx(s)?10:11
break
case 10:l=J.ij(s,y.f)
l=A.eg(l,new C.b67(),l.$ti.k("L.E"),y.k)
k=A.T(l).k("a7<L.E>")
j=A.E(new A.a7(l,new C.b68(),k),k.k("L.E"))
r=j
if(J.a5(r)>=20){v=r
x=1
break}q=C.d_o(r)
x=12
return A.b(C.F9(a2,q),$async$Fa)
case 12:v=q
x=1
break
case 11:u=2
x=9
break
case 7:u=6
a0=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:p=A.aE(e.h(f,"ngmy_virtual_device_v1_"+g.toLowerCase()))
x=p!=null&&p.length!==0?13:14
break
case 13:u=16
o=B.v.aE(0,p,null)
x=y.f.b(o)?19:20
break
case 19:n=C.d_n(A.K(o,y.N,y.z))
m=C.d_o(A.a([n],y.e))
x=21
return A.b(C.F9(a2,m),$async$Fa)
case 21:v=m
x=1
break
case 20:u=2
x=18
break
case 16:u=15
a1=t.pop()
x=18
break
case 15:x=2
break
case 18:case 14:r=C.dkQ()
x=22
return A.b(C.F9(a2,r),$async$Fa)
case 22:v=r
x=1
break
case 1:return A.f(v,w)
case 2:return A.e(t.at(-1),w)}})
return A.h($async$Fa,w)},
d_o(d){var x=A.R(d).k("z<1,m>"),w=new A.z(d,new C.b6_(),x).eu(0),v=new A.z(d,new C.b60(),x).eu(0),u=new A.z(d,new C.b61(),x).eu(0),t=new A.z(d,new C.b62(),x).eu(0),s=A.bf(d,!0,y.k),r=d.length
while(s.length<20){s.push(C.cPY(null,r,v,u,w,t));++r}return s},
amk(d){var x=0,w=A.i(y.k),v,u,t,s,r,q,p,o,n
var $async$amk=A.d(function(e,f){if(e===1)return A.e(f,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fa(d),$async$amk)
case 3:u=f
t=y.N
s=J.cl(u)
r=s.dd(u,new C.b63(),t).eu(0)
q=s.dd(u,new C.b64(),t).eu(0)
p=s.dd(u,new C.b65(),t).eu(0)
o=s.dd(u,new C.b66(),t).eu(0)
n=C.cPY(null,s.gJ(u),q,p,r,o)
s.D(u,n)
x=4
return A.b(C.F9(d,u),$async$amk)
case 4:v=n
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$amk,w)},
F9(d,e){var x=0,w=A.i(y.H),v,u,t
var $async$F9=A.d(function(f,g){if(f===1)return A.e(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$F9)
case 2:v=g
u=B.a.j(d)
t=J.b3(e,new C.b5Z(),y.P)
t=A.E(t,t.$ti.k("a2.E"))
x=3
return A.b(v.an("String","ngmy_virtual_device_fleet_v2_"+u.toLowerCase(),B.v.aj(t,null)),$async$F9)
case 3:return A.f(null,w)}})
return A.h($async$F9,w)},
dkQ(){var x,w=y.N,v=A.b_(w),u=A.b_(w),t=A.b_(w),s=A.b_(w),r=J.dT(20,y.k)
for(x=0;x<20;++x)r[x]=C.cPY(x,x,u,t,v,s)
return r},
cPY(d,e,f,g,a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=$.jW(),i=d==null,h=D.Qe[B.p.al(i?e:d,20)]
for(x=y.s,w=y.t,v="",u="",t="",s=0;s<64;++s){r=D.Qe[B.p.al(i?e+s:d,20)]
if(a1.p(0,r.a[4])&&a1.a<20)continue
q=A.a(new Array(4),w)
for(p=0;p<4;++p)q[p]=j.bC(256)
o=new A.z(q,new C.b5Y(),A.R(q).k("z<1,m>")).f9(0)
v="VND-"+B.a.ai(o,0,4)+"-"+B.a.ai(o,4,8)
q=A.a(new Array(15),w)
for(n=0;n<15;++n)q[n]=j.bC(10)
u=B.d.f9(q)
q=A.a(new Array(6),x)
for(m=0;m<6;++m)q[m]=B.a.by(B.p.kP(j.bC(256),16),2,"0")
t=B.d.bg(q,":").toUpperCase()
if(!a0.p(0,v)&&!f.p(0,u)&&!g.p(0,t)){h=r
break}h=r}a0.D(0,v)
f.D(0,u)
g.D(0,t)
i=h.a
a1.D(0,i[4])
x=B.p.al(e,20)
l=D.aM5[x]
k=D.aHa[x]
return new C.mg("vd_"+1000*Date.now()+"_"+e+"_"+j.bC(99999),"Device "+B.a.by(B.p.q(e+1),2,"0"),v,l,C.dkR(j,16),t,u,k.a,k.b,i[0],i[1],i[2],i[3],i[4],new A.Q(Date.now(),0,!1).a1().Z())},
dkR(d,e){var x,w=J.dT(e,y.N)
for(x=0;x<e;++x)w[x]=B.a.by(B.p.kP(d.bC(256),16),2,"0")
return B.d.f9(w)},
cMr:function cMr(d){this.a=d},
cMq:function cMq(d,e){this.a=d
this.b=e},
cMn:function cMn(d){this.a=d},
cMo:function cMo(d){this.a=d},
cMp:function cMp(d,e){this.a=d
this.b=e},
mg:function mg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ax=r},
b67:function b67(){},
b68:function b68(){},
b6_:function b6_(){},
b60:function b60(){},
b61:function b61(){},
b62:function b62(){},
b63:function b63(){},
b64:function b64(){},
b65:function b65(){},
b66:function b66(){},
b5Z:function b5Z(){},
b5Y:function b5Y(){},
F7:function F7(d,e){this.c=d
this.a=e},
a7B:function a7B(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ci5:function ci5(d,e){this.a=d
this.b=e},
ci3:function ci3(d){this.a=d},
ci4:function ci4(d,e){this.a=d
this.b=e},
ci6:function ci6(d){this.a=d},
ci9:function ci9(d){this.a=d},
cia:function cia(d,e){this.a=d
this.b=e},
ci8:function ci8(d,e){this.a=d
this.b=e},
ci7:function ci7(d,e){this.a=d
this.b=e},
cib:function cib(d){this.a=d},
Qd:function Qd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axL:function axL(d,e){this.c=d
this.a=e},
F6:function F6(d,e){this.c=d
this.a=e},
ayF:function ayF(){var _=this
_.d=0
_.e=!0
_.c=_.a=null},
ci0:function ci0(d){this.a=d},
ci1:function ci1(d){this.a=d},
ci2:function ci2(d){this.a=d},
ci_:function ci_(d,e){this.a=d
this.b=e},
chX:function chX(d){this.a=d},
chY:function chY(d){this.a=d},
chW:function chW(d,e){this.a=d
this.b=e},
chZ:function chZ(d){this.a=d},
chV:function chV(d){this.a=d},
aEU:function aEU(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aEV:function aEV(d,e,f){this.c=d
this.d=e
this.a=f},
ayL:function ayL(d,e){this.c=d
this.a=e},
aET:function aET(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ctB:function ctB(d){this.a=d},
ctC:function ctC(d){this.a=d},
azR:function azR(d){this.a=d},
aul:function aul(d,e){this.c=d
this.a=e},
dkP(d){var x,w,v,u,t,s,r,q=null,p=B.a.j(d)
if(p.length===0)return q
x=B.a.a0(p,"http")?p:"https://"+p
w=x.toLowerCase()
v=A.ar("(?:youtube\\.com/watch\\?(?:[^&]*&)*v=|youtu\\.be/|youtube\\.com/shorts/|youtube\\.com/embed/|youtube\\.com/live/)([a-zA-Z0-9_-]{11})",!0,!1,!1).dc(w)
u=v==null?q:v.b[1]
if(u!=null)return new C.o6(x,C.d_m(u,!1),D.WZ,"YouTube",u)
t=C.dkO(w)
if(t!=null)return new C.o6(x,"https://www.tiktok.com/player/v1/"+t+"?music_info=0&description=0",D.X_,"TikTok",q)
s=C.dkN(x,w)
if(s!=null)return s
r=C.dkM(x,w)
if(r!=null)return r
if(B.a.p(w,"tiktok.com")||B.a.p(w,"instagram.com")||B.a.p(w,"facebook.com")||B.a.p(w,"fb.watch")||B.a.p(w,"youtube.com")||B.a.p(w,"youtu.be"))return new C.o6(x,x,D.baI,"Video",q)
return q},
dkN(d,e){var x,w,v="/embed/captioned/?cr=1&v=14",u="Instagram",t=A.ar("instagram\\.com/reel/([a-zA-Z0-9_-]+)",!0,!1,!1).dc(e)
if(t!=null){x=t.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/reel/"+x+v,D.Eh,u,null)}w=A.ar("instagram\\.com/(?:p|tv)/([a-zA-Z0-9_-]+)",!0,!1,!1).dc(e)
if(w!=null){x=w.b[1]
x.toString
return new C.o6(d,"https://www.instagram.com/p/"+x+v,D.Eh,u,null)}return null},
dkM(d,e){if(!B.a.p(e,"facebook.com")&&!B.a.p(e,"fb.watch")&&!B.a.p(e,"fb.com"))return null
return new C.o6(d,"https://www.facebook.com/plugins/video.php?href="+A.f5(2,d,B.aL,!1)+"&show_text=false&width=734",D.X0,"Facebook",null)},
dkO(d){var x,w=A.ar("tiktok\\.com/@[^/]+/video/(\\d+)",!0,!1,!1).dc(d)
if(w!=null)return w.b[1]
x=A.ar("tiktok\\.com/t/(\\w+)",!0,!1,!1).dc(d)
return x==null?null:x.b[1]},
Fb:function Fb(d,e){this.a=d
this.b=e},
o6:function o6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},
F8:function F8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayG:function ayG(){var _=this
_.d=$
_.e=null
_.f=!0
_.r=!1
_.c=_.a=null},
cih:function cih(d){this.a=d},
cif:function cif(d){this.a=d},
cie:function cie(d){this.a=d},
cig:function cig(d){this.a=d},
cid:function cid(d){this.a=d},
cic:function cic(d){this.a=d},
d_m(d,e){var x=A.a([],y.s)
x.push("autoplay=1")
x.push("playsinline=1")
x.push("rel=0")
x.push("modestbranding=1")
x.push("enablejsapi=1")
x.push("origin=https://www.youtube.com")
if(e)x.push("mute=1")
return"https://www.youtube-nocookie.com/embed/"+d+"?"+B.d.bg(x,"&")}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[3],C)
D=c[4]
C.mg.prototype={
ah(){var x=this
return A.p(["id",x.a,"label",x.b,"serialNumber",x.c,"modelName",x.d,"deviceId",x.e,"macAddress",x.f,"imei",x.r,"osName",x.w,"osVersion",x.x,"virtualCity",x.y,"virtualCountry",x.z,"virtualLat",x.Q,"virtualLng",x.as,"timezone",x.at,"createdAt",x.ax],y.N,y.z)}}
C.F7.prototype={
T(){return new C.a7B(A.a([],y.e))},
git(){return this.c}}
C.a7B.prototype={
Y(){this.a5()
this.PZ()},
l(){$.aej().sv(0,null)
this.a3()},
PZ(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PZ=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:x=3
return A.b(C.Fa(u.a.c),$async$PZ)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.ci5(u,t))
$.b5X=J.a5(t)
case 1:return A.f(v,w)}})
return A.h($async$PZ,w)},
PI(){var x=0,w=A.i(y.H),v,u=this,t
var $async$PI=A.d(function(d,e){if(d===1)return A.e(e,w)
for(;;)switch(x){case 0:u.n(new C.ci3(u))
x=3
return A.b(C.amk(u.a.c),$async$PI)
case 3:t=e
if(u.c==null){x=1
break}u.n(new C.ci4(u,t))
$.b5X=J.a5(u.d)
u.c.E(y.q).f.O(A.ba(null,null,null,null,null,B.m,null,A.j("Added "+t.b+" \xb7 "+t.c,null,null,null,null,null,null,null,null),null,B.z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.f(v,w)}})
return A.h($async$PI,w)},
baD(d){var x=this.c
x.toString
A.a9(x,!1).cM(A.eq(new C.ci6(d),!1,null,y.H))},
bb8(){var x=this.c
x.toString
return C.Sw(x,J.a5(this.d))},
C(d){var x=this,w=null,v=A.U(d).ax.a===B.R,u=v?B.du:B.dv,t=A.aU(w,w,w,w,B.CC,w,w,w,new C.ci9(d),w,w,w,w,w,w),s=x.e?"Virtual Devices":"Virtual Devices ("+J.a5(x.d)+")",r=y.p
s=A.G(A.a([t,A.I(new A.zy(A.G(A.a([A.I(new A.M(B.i2,A.j(s,1,B.af,w,w,A.l(w,w,v?B.c:B.a_,w,w,w,w,w,w,w,w,15,w,w,B.u,w,w,!0,w,0.2,w,w,w,w,w,w),w,w,w),w),1),A.aT(!1,B.N,!0,w,A.aZ(!1,w,!0,new A.M(B.aG,A.a4(B.f2,B.Q,w,w,28),w),B.c4,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbb7(),w,w,w,w,w,w,w),B.h,B.B,0,w,w,w,w,w,B.Z)],r),B.j,w,B.e,B.f,0,w,w),w),1)],r),B.j,w,B.e,B.f,0,w,w)
t=A.cX(!0,A.B(A.a([new A.M(D.Lo,s,w),A.I(x.e?B.kj:new A.jO($.aej(),new C.cia(x,v),w,w,y.j),1)],r),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0)
return A.co(w,u,t,w,!1,!1,A.ahr(B.Q,B.yL,B.o3,D.bDh,x.e?w:new C.cib(x)),w)}}
C.Qd.prototype={
C(d){var x,w,v=null,u=A.n(14),t=A.n(14),s=A.W(B.c.t(0.1),B.n,1),r=A.a([new A.af(0,B.w,B.Q.t(0.18),B.cc,8)],y.V),q=A.n(10),p=this.c,o=this.e
if(o!=null){x=p.a
w=o.gaBy()
w=new C.F8(x+"_mini",o.gaBy(),!0,o.gae5(),new A.dv(x+"_"+w,y.O))
o=w}else o=A.x(v,A.B(A.a([A.a4(B.jD,B.ly,v,v,22),B.aj,A.j("YouTube",v,v,v,v,A.l(v,v,B.c.t(0.7),v,v,v,v,v,v,v,v,7,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],y.p),B.j,B.ap,B.f,0,B.k),B.h,B.zo,v,v,v,v,v,v,v,v,1/0)
x=y.p
return A.aT(!1,B.N,!0,v,A.aZ(!1,u,!0,A.B(A.a([A.I(A.x(v,A.cW(q,A.iY(A.B(A.a([new C.axL(p,v),A.I(o,1),A.x(v,A.G(A.a([A.a4(B.vN,B.Q.t(0.85),v,v,9),D.blw,A.j("Tap",v,v,v,v,A.l(v,v,B.c.t(0.5),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x),B.j,v,B.ap,B.f,0,v,v),B.h,B.a8,v,v,v,v,v,D.ai4,v,v,v)],x),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,v,v,new A.u(v,v,s,t,r,D.Pe,B.l),v,v,v,B.eI,v,v,v),1),B.aj,A.j(p.b,1,B.af,v,v,A.l(v,v,A.U(d).ax.k3,v,v,v,v,v,v,v,v,9,v,v,B.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.j(p.y,1,B.af,v,v,A.l(v,v,A.U(d).ax.k3.t(0.55),v,v,v,v,v,v,v,v,8,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.j(p.c,1,B.af,v,v,A.l(v,v,B.Q.t(0.85),v,v,v,v,v,v,v,v,7,v,v,v,v,v,!0,v,0.2,v,v,v,v,v,v),v,v,v)],x),B.j,B.e,B.f,0,B.k),v,!0,v,v,v,v,v,v,v,v,v,v,v,this.d,v,v,v,v,v,v,v),B.h,B.B,0,v,v,v,v,v,B.Z)}}
C.axL.prototype={
C(d){var x=null
return A.x(x,A.G(A.a([A.I(A.j(B.d.gau(this.c.c.split("-")),x,B.af,x,x,A.l(x,x,B.c.t(0.45),x,x,x,x,x,x,x,x,5.5,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),1),A.a4(B.qK,B.c.t(0.45),x,x,7)],y.p),B.j,x,B.e,B.f,0,x,x),B.h,B.a8,x,x,x,x,x,B.Ld,x,x,x)}}
C.F6.prototype={
T(){return new C.ayF()}}
C.ayF.prototype={
C(d){var x=null,w=A.U(d).ax.a===B.R,v=w?B.du:B.dv,u=A.aU(x,x,x,x,B.CC,x,x,x,new C.ci0(d),x,x,x,x,x,x),t=this.a.c,s=y.p
return A.co(x,v,A.cX(!0,A.B(A.a([new A.M(D.Lo,A.G(A.a([u,A.I(new A.zy(A.G(A.a([A.I(new A.M(B.i2,A.j(t.b+" \xb7 "+t.c,1,B.af,x,x,A.l(x,x,w?B.c:B.a_,x,x,x,x,x,x,x,x,14,x,x,B.u,x,x,!0,x,0.2,x,x,x,x,x,x),x,x,x),x),1),A.aT(!1,B.N,!0,x,A.aZ(!1,x,!0,new A.M(B.aG,A.a4(B.f2,B.Q,x,x,28),x),B.c4,!0,x,x,x,x,x,x,x,x,x,x,x,new C.ci1(d),x,x,x,x,x,x,x),B.h,B.B,0,x,x,x,x,x,B.Z)],s),B.j,x,B.e,B.f,0,x,x),x),1)],s),B.j,x,B.e,B.f,0,x,x),x),A.I(new A.jO($.aej(),new C.ci2(this),x,x,y.j),1)],s),B.j,B.e,B.f,0,B.k),!1,B.a0,!0,!0),x,!1,!1,x,x)}}
C.aEU.prototype={
C(d){var x,w,v,u=this,t=null,s=u.c,r=A.n(36),q=A.a([new A.af(0,B.w,B.Q.t(0.35),B.eN,28),new A.af(0,B.w,B.q.t(0.45),B.cO,18)],y.V),p=A.W(B.c.t(0.12),B.n,2),o=A.n(28),n=u.d,m=u.e
if(m)if(u.f===0){x=u.y
if(x!=null){w=n.a
v=x.b
v=new C.F8(w+"_full",v,!1,x.gae5(),new A.dv(w+"_full_"+v,y.O))
x=v}else x=new C.ayL(u.r,t)}else x=new C.aul(n,t)
else x=D.bQg
return A.x(t,A.cW(o,A.iY(A.B(A.a([new C.aEV(n,m,t),A.I(x,1),new C.aET(u.f,m,u.w,u.x,t)],y.p),B.j,B.e,B.f,0,B.k),B.q,!0),B.av),B.h,t,t,new A.u(t,t,p,r,q,D.Pe,B.l),t,s*2.05,t,B.bc,t,t,s)}}
C.aEV.prototype={
C(d){var x,w,v,u,t=null,s=new A.Q(Date.now(),0,!1),r=A.e9(s)
s=A.hX(s)
x=new A.db(r,s)
w=x.gFi()===0?12:x.gFi()
s=B.a.by(B.p.q(s),2,"0")
r=(r<12?B.eo:B.fX)===B.eo?"AM":"PM"
v=this.c
u=y.p
r=A.a([A.G(A.a([A.j(""+w+":"+s+" "+r,t,t,t,t,B.l5,t,t,t),B.b9,A.j(v.b,t,t,t,t,A.l(t,t,B.c.t(0.5),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),B.bf,D.arV,B.dO,D.ar8,B.dO,D.arZ],u),B.j,t,B.e,B.f,0,t,t)],u)
if(this.d)B.d.A(r,A.a([B.aj,A.G(A.a([A.a4(B.Cw,B.Q.t(0.9),t,t,12),B.dO,A.I(A.j(v.c,t,B.af,t,t,A.l(t,t,B.c.t(0.55),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,0.4,t,t,t,t,t,t),t,t,t),1),A.j(v.y,t,t,t,t,A.l(t,t,B.c.t(0.45),t,t,t,t,t,t,t,t,9,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.j,t,B.e,B.f,0,t,t)],u))
return A.x(t,A.B(r,B.j,B.e,B.f,0,B.k),B.h,B.a8,t,t,t,t,t,D.aiS,t,t,t)}}
C.ayL.prototype={
C(d){var x=null
return A.x(x,A.b4(A.B(A.a([A.a4(B.vD,B.c.t(0.35),x,x,40),B.D,A.j("No video yet",x,x,x,x,A.l(x,x,B.c.t(0.6),x,x,x,x,x,x,x,x,12,x,x,B.H,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.aj,A.j("Tap search above to paste a link",x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,10,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.ai,A.eI(D.auX,D.bBd,this.c,A.ej(x,x,x,x,x,x,x,x,x,B.Q,x,x,x,x,x,new A.aK(B.Q.t(0.5),1,B.n,-1),x,x,x,x))],y.p),B.j,B.e,B.O,0,B.k),x,x,x),B.h,B.zo,x,x,x,x,x,x,x,x,1/0)}}
C.aET.prototype={
C(d){var x,w,v=this,u=null,t=v.c,s=v.d,r=v.aoO(B.NT,"YouTube",t===0,s,new C.ctB(v))
t=v.aoO(B.i6,"Device",t===1,s,new C.ctC(v))
x=s?"Power off":"Power on"
w=s?D.NU:D.apj
return A.x(u,A.G(A.a([r,B.Y,t,B.b9,A.aU(u,u,u,u,A.a4(w,s?B.aH:B.dy,u,u,u),u,u,u,v.f,u,u,u,u,x,B.dq)],y.p),B.j,u,B.e,B.f,0,u,u),B.h,B.a8,u,u,u,u,u,D.aiC,u,u,u)},
aoO(d,e,f,g,h){var x,w,v,u,t=null
if(!g)x=B.bb
else x=f?B.Q:B.ab
w=f&&g?B.Q.t(0.15):B.B
v=A.n(10)
u=g?h:t
return A.I(A.aT(!1,B.N,!0,v,A.aZ(!1,A.n(10),!0,new A.M(B.jt,A.B(A.a([A.a4(d,x,t,t,18),A.j(e,t,t,t,t,A.l(t,t,x,t,t,t,t,t,t,t,t,9,t,t,B.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],y.p),B.j,B.e,B.O,0,B.k),t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u,t,t,t,t,t,t,t),B.h,w,0,t,t,t,t,t,B.Z),1)}}
C.azR.prototype={
C(d){return D.a9H}}
C.aul.prototype={
C(d){var x=this,w=null,v=x.c,u=A.j(v.b,w,w,w,w,B.l2,w,w,w),t=A.j("Independent virtual hardware \u2014 not linked to your iPhone or real device.",w,w,w,w,A.l(w,w,B.c.t(0.55),w,w,w,w,w,w,w,w,10,w,w,w,w,1.35,!0,w,w,w,w,w,w,w,w),w,w,w),s=x.pW("Serial",v.c),r=x.pW("Model",v.d),q=x.pW("Device ID",v.e),p=x.pW("IMEI",v.r),o=x.pW("MAC",v.f),n=x.pW("OS",v.w+" "+v.x),m=x.pW("Location",v.y+", "+v.z),l=x.pW("Coordinates",B.i.a_(v.Q,4)+", "+B.i.a_(v.as,4)),k=x.pW("Timezone",v.at)
v=v.ax
return A.ep(A.a([u,B.aj,t,B.S,s,r,q,p,o,n,m,l,k,x.pW("Provisioned",v.length>=10?B.a.ai(v,0,10):v)],y.p),w,B.aG,w,w,B.W,!1)},
pW(d,e){var x=null
return new A.M(B.c6,A.B(A.a([A.j(d.toUpperCase(),x,x,x,x,A.l(x,x,B.c.t(0.4),x,x,x,x,x,x,x,x,8,x,x,x,x,x,!0,x,0.8,x,x,x,x,x,x),x,x,x),B.bY,A.j(e,x,x,x,x,D.bsg,x,x,x)],y.p),B.t,B.e,B.f,0,B.k),x)}}
C.Fb.prototype={
R(){return"NgmyVirtualMediaPlatform."+this.b}}
C.o6.prototype={
gaBy(){var x=this.f
if(x!=null&&x.length!==0)return C.d_m(x,!0)
return this.b},
gae5(){var x=this.c
return x===D.WZ||x===D.X_||x===D.Eh||x===D.X0}}
C.F8.prototype={
T(){return new C.ayG()}}
C.ayG.prototype={
bjQ(d){var x
if(!this.a.f)return!1
x=d.toLowerCase()
return B.a.p(x,"youtube")||B.a.p(x,"youtu.be")||B.a.p(x,"tiktok.com/player")||B.a.p(x,"instagram.com")||B.a.p(x,"facebook.com/plugins")},
ahF(d,e){var x
if(this.bjQ(e)){d.removeAttribute("src")
x=A.bA(e,"&","&amp;")
d.srcdoc='<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html, body {\n      width: 100%;\n      height: 100%;\n      background: #000;\n      overflow: hidden;\n    }\n    iframe {\n      position: absolute;\n      inset: 0;\n      width: 100%;\n      height: 100%;\n      border: none;\n    }\n  </style>\n</head>\n<body>\n  <iframe\n    src="'+A.bA(x,'"',"&quot;")+'"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"\n    referrerpolicy="strict-origin-when-cross-origin"\n    allowfullscreen>\n  </iframe>\n</body>\n</html>\n'}else{d.removeAttribute("srcdoc")
d.src=e}},
Y(){var x,w,v=this
v.a5()
x="ngmy-vmedia-"+v.a.c+"-"+1000*Date.now()
v.d!==$&&A.aP()
v.d=x
try{$.JE()
$.oE().u0(x,new C.cih(v),!0)}catch(w){v.r=!0
v.f=!1}},
aS(d){var x,w=this
w.b3(d)
if(d.d!==w.a.d&&w.e!=null){w.n(new C.cic(w))
x=w.e
x.toString
w.ahF(x,w.a.d)}},
C(d){var x,w,v=this,u=null
if(v.r){x=B.c.t(0.5)
return A.iY(A.b4(A.a4(B.O4,x,u,u,v.a.e?22:36),u,u,u),B.q,!0)}w=v.a.e?14:28
x=v.d
x===$&&A.c()
x=A.a([A.ai3(u,B.rv,x)],y.p)
if(v.f)x.push(A.iY(A.b4(new A.ao(w,w,D.aa7,u),u,u,u),B.bW,!0))
return new A.bc(B.am,u,B.cS,B.m,x,u)}}
var z=a.updateTypes(["m(mg)","F7(S)","mg(Y<@,@>)","a0(mg)","Y<m,@>(mg)","at<~>()","F6(S)","Kv(S,o6?,q?)","Qd(S,P)","th(S,o6?,q?)"])
C.cMr.prototype={
$1(d){return new C.F7(this.a,null)},
$S:z+1}
C.cMq.prototype={
$1(d){var x,w=null,v=A.U(d),u=A.j("YouTube, TikTok, Instagram, or Facebook \u2014 plays on all "+this.a+" devices.",w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t=this.b
v=v.ax.a===B.R?B.cr:B.aa
x=y.p
v=A.B(A.a([u,B.ai,A.au(w,B.G,!0,w,!0,B.m,w,A.av(),t,w,w,w,w,w,2,A.bg(w,new A.b5(4,A.n(14),B.bx),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,"https://youtube.com/watch?v=\u2026",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),B.r,!0,w,!0,w,!1,w,B.J,w,w,w,w,w,w,w,w,w,3,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,B.A,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.F,w,B.L,w,w,w,w)],x),B.ae,B.e,B.O,0,B.k)
return A.dr(A.a([A.bX(!1,B.xI,w,w,!0,w,new C.cMn(d),w,w),A.bX(!1,B.bq,w,w,!0,w,new C.cMo(d),w,w),A.bJ(D.bDW,new C.cMp(d,t),A.bu(B.Q,w,w,w,w,w,w,w,w,w,w,w))],x),w,w,w,v,w,w,w,w,D.bCQ)},
$S:14}
C.cMn.prototype={
$0(){$.aej().sv(0,null)
A.a9(this.a,!1).S(null)},
$S:0}
C.cMo.prototype={
$0(){A.a9(this.a,!1).S(null)
return null},
$S:0}
C.cMp.prototype={
$0(){var x=B.a.j(this.b.a.a)
A.a9(this.a,!1).S(x)
return null},
$S:0}
C.b67.prototype={
$1(d){return C.d_n(A.K(d,y.N,y.z))},
$S:z+2}
C.b68.prototype={
$1(d){return d.a.length!==0&&d.c.length!==0},
$S:z+3}
C.b6_.prototype={
$1(d){return d.c},
$S:z+0}
C.b60.prototype={
$1(d){return d.r},
$S:z+0}
C.b61.prototype={
$1(d){return d.f},
$S:z+0}
C.b62.prototype={
$1(d){return d.at},
$S:z+0}
C.b63.prototype={
$1(d){return d.c},
$S:z+0}
C.b64.prototype={
$1(d){return d.r},
$S:z+0}
C.b65.prototype={
$1(d){return d.f},
$S:z+0}
C.b66.prototype={
$1(d){return d.at},
$S:z+0}
C.b5Z.prototype={
$1(d){return d.ah()},
$S:z+4}
C.b5Y.prototype={
$1(d){return B.a.by(B.p.kP(d,16),2,"0").toUpperCase()},
$S:73}
C.ci5.prototype={
$0(){var x=this.a
x.d=this.b
x.e=!1},
$S:0}
C.ci3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ci4.prototype={
$0(){var x=this.a,w=A.E(x.d,y.k)
w.push(this.b)
x.d=w
x.e=!1},
$S:0}
C.ci6.prototype={
$1(d){return new C.F6(this.a,null)},
$S:z+6}
C.ci9.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.cia.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n=e!=null
if(n){x=A.z6(d,o,y.Q)
x=x==null?o:x.gk8()
w=x!==!1}else w=!1
x=y.p
v=A.a([],x)
if(n){u=B.Q.t(0.12)
t=A.n(12)
s=A.W(B.Q.t(0.35),B.n,1)
r=A.a4(B.jD,B.Q,o,o,18)
q=e.d
p=J.a5(this.a.d)
u=A.a([A.x(o,A.G(A.a([r,B.Y,A.I(A.j("Now playing "+q+" on all "+p+" devices",o,o,o,o,A.l(o,o,this.b?B.c:B.a_,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1)],x),B.j,o,B.e,B.f,0,o,o),B.h,o,o,new A.u(u,o,s,t,o,o,B.l),o,o,B.cE,B.eq,o,o,1/0)],x)
if(w){t=A.n(16)
s=e.b
B.d.A(u,A.a([A.cW(t,new A.iW(1.7777777777777777,new A.h3(new C.F8("fleet_master",s,!1,e.gae5(),new A.dv("fleet_master_"+s,y.O)),o),o),B.av),B.S],x))}B.d.A(v,u)}u=this.a
t=u.d
n=n?"All "+J.a5(t)+" phones below mirror this video. Tap any phone for full screen.":""+J.a5(t)+" separate virtual phones \u2014 4 per row. Tap search above to paste a link, or tap a phone to open it."
v.push(A.j(n,o,o,o,o,A.l(o,o,A.U(d).ax.k3.t(0.65),o,o,o,o,o,o,o,o,13,o,o,o,o,1.4,!0,o,o,o,o,o,o,o,o),o,o,o))
return A.yh(0,B.m,o,B.r,o,o,o,o,!1,o,B.W,!1,A.a([new A.jJ(new A.M(B.AF,A.B(v,B.t,B.e,B.f,0,B.k),o),o),new A.og(D.aii,A.apQ(new A.ng(new C.ci8(u,e),J.a5(u.d),!1,!0,!0,A.uG(),o),D.bm7),o)],x))},
$S:z+7}
C.ci8.prototype={
$2(d,e){var x=this.a,w=J.r(x.d,e)
return new C.Qd(w,new C.ci7(x,w),this.b,null)},
$S:z+8}
C.ci7.prototype={
$0(){return this.a.baD(this.b)},
$S:0}
C.cib.prototype={
$0(){this.a.PI()
return null},
$S:0}
C.ci0.prototype={
$0(){return A.a9(this.a,!1).es()},
$S:0}
C.ci1.prototype={
$0(){C.Sw(this.a,$.b5X)
return null},
$S:0}
C.ci2.prototype={
$3(d,e,f){return A.h1(new C.ci_(this.a,e))},
$S:z+9}
C.ci_.prototype={
$2(d,e){var x,w=null,v=B.i.aP(e.b,280,420),u=this.b,t=this.a,s=t.a
if(u!=null){x=u.d
s=s.c
s="Playing "+x+" on this device \xb7 "+(s.y+", "+s.z)}else{s=s.c
s=s.y+", "+s.z+" \xb7 "+s.at+"\nSeparate from your real phone \u2014 unique serial & identity."}return A.b4(A.ct(A.B(A.a([A.j(s,w,w,w,w,A.l(w,w,A.U(d).ax.k3.t(0.65),w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w),B.aq,new C.aEU(v,t.a.c,t.e,t.d,new C.chX(t),new C.chY(t),new C.chZ(t),u,w)],y.p),B.j,B.e,B.f,0,B.k),w,B.r,w,B.v_,w,w,B.W),w,w,w)},
$S:1466}
C.chX.prototype={
$0(){var x=this.a.c
x.toString
C.Sw(x,$.b5X)
return null},
$S:0}
C.chY.prototype={
$1(d){var x=this.a
return x.n(new C.chW(x,d))},
$S:33}
C.chW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.chZ.prototype={
$0(){var x=this.a
return x.n(new C.chV(x))},
$S:0}
C.chV.prototype={
$0(){var x=this.a
return x.e=!x.e},
$S:0}
C.ctB.prototype={
$0(){return this.a.e.$1(0)},
$S:0}
C.ctC.prototype={
$0(){return this.a.e.$1(1)},
$S:0}
C.cih.prototype={
$1(d){var x=this.a,w=document.createElement("iframe"),v=w.style
v.border="none"
v=w.style
v.width="100%"
v=w.style
v.height="100%"
w.allowFullscreen=!0
w.setAttribute("referrerpolicy","strict-origin-when-cross-origin")
w.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen")
x.e=w
x.ahF(w,x.a.d)
w=x.e
w.toString
v=y.E.c
A.hg(w,"load",new C.cif(x),!1,v)
w=x.e
w.toString
A.hg(w,"error",new C.cig(x),!1,v)
x=x.e
x.toString
return x},
$S:1467}
C.cif.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cie(x))},
$S:39}
C.cie.prototype={
$0(){return this.a.f=!1},
$S:0}
C.cig.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new C.cid(x))},
$S:39}
C.cid.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.cic.prototype={
$0(){var x=this.a
x.f=!0
x.r=!1},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.a7B.prototype,"gbb7","bb8",5)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.uY,[C.cMr,C.cMq,C.b67,C.b68,C.b6_,C.b60,C.b61,C.b62,C.b63,C.b64,C.b65,C.b66,C.b5Z,C.b5Y,C.ci6,C.cia,C.ci2,C.chY,C.cih,C.cif,C.cig])
x(A.U2,[C.cMn,C.cMo,C.cMp,C.ci5,C.ci3,C.ci4,C.ci9,C.ci7,C.cib,C.ci0,C.ci1,C.chX,C.chW,C.chZ,C.chV,C.ctB,C.ctC,C.cie,C.cid,C.cic])
x(A.aj,[C.mg,C.o6])
x(A.ac,[C.F7,C.F6,C.F8])
x(A.ad,[C.a7B,C.ayF,C.ayG])
x(A.U3,[C.ci8,C.ci_])
x(A.aD,[C.Qd,C.axL,C.aEU,C.aEV,C.ayL,C.aET,C.azR,C.aul])
w(C.Fb,A.ava)})()
A.d2C(b.typeUniverse,JSON.parse('{"F7":{"ac":[],"q":[]},"Qd":{"aD":[],"q":[]},"F6":{"ac":[],"q":[]},"a7B":{"ad":["F7"]},"axL":{"aD":[],"q":[]},"ayF":{"ad":["F6"]},"aEU":{"aD":[],"q":[]},"aEV":{"aD":[],"q":[]},"ayL":{"aD":[],"q":[]},"aET":{"aD":[],"q":[]},"azR":{"aD":[],"q":[]},"aul":{"aD":[],"q":[]},"F8":{"ac":[],"q":[]},"ayG":{"ad":["F8"]}}'))
var y=(function rtii(){var x=A.bm
return{V:x("ae<af>"),e:x("ae<mg>"),s:x("ae<m>"),p:x("ae<q>"),t:x("ae<P>"),X:x("a8<mg>"),_:x("a8<@>"),P:x("Y<m,@>"),f:x("Y<@,@>"),k:x("mg"),N:x("m"),O:x("dv<m>"),j:x("jO<o6?>"),E:x("wW<cr>"),q:x("QU"),z:x("@"),Q:x("aj?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.NU=new A.O(983224,"MaterialIcons",!1)
D.atl=new A.a6(D.NU,48,B.bb,null,null,null)
D.brW=new A.H(!0,B.bB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBV=new A.y("Powered off",null,D.brW,null,null,null,null,null,null,null,null)
D.aFz=x([D.atl,B.y,D.bBV],y.p)
D.afF=new A.eT(B.W,B.e,B.O,B.j,null,B.k,null,0,D.aFz,null)
D.a9H=new A.dB(B.M,null,null,D.afF,null)
D.aa7=new A.hO(2,null,null,null,null,B.T,null,null,null,null)
D.ai4=new A.V(0,3,0,3)
D.aii=new A.V(10,0,10,88)
D.aiC=new A.V(12,6,12,10)
D.aiS=new A.V(14,8,14,6)
D.Lo=new A.V(8,6,15,8)
D.apj=new A.O(983222,"MaterialIcons",!1)
D.ar8=new A.a6(B.qK,14,B.T,null,null,null)
D.apA=new A.O(983420,"MaterialIcons",!1)
D.arV=new A.a6(D.apA,14,B.T,null,null,null)
D.ao2=new A.O(62895,"MaterialIcons",!1)
D.arZ=new A.a6(D.ao2,14,B.T,null,null,null)
D.auX=new A.a6(B.f2,16,null,null,null,null)
D.aHx=x([B.ak,B.a_],A.bm("ae<C>"))
D.Pe=new A.ay(B.ar,B.aA,B.C,D.aHx,null,null)
D.bfP=new A.aR("NGMY OS","14.2.1")
D.bf_=new A.aR("VirtualDroid","13.8.4")
D.beZ=new A.aR("NGMY OS","15.0.0")
D.bfw=new A.aR("VirtualDroid","14.1.2")
D.beY=new A.aR("NGMY Tab OS","12.9.7")
D.beX=new A.aR("NGMY OS","13.5.3")
D.beO=new A.aR("VirtualDroid","15.2.0")
D.bfe=new A.aR("NGMY OS","14.8.1")
D.bfB=new A.aR("NGMY Tab OS","13.2.4")
D.bfY=new A.aR("VirtualDroid","12.6.9")
D.beL=new A.aR("NGMY OS","16.0.1")
D.beD=new A.aR("VirtualDroid","14.9.0")
D.bfJ=new A.aR("NGMY Tab OS","14.0.3")
D.bf5=new A.aR("NGMY OS","13.1.8")
D.beK=new A.aR("VirtualDroid","13.4.5")
D.beW=new A.aR("NGMY OS","15.3.2")
D.bfC=new A.aR("NGMY Tab OS","12.4.1")
D.bfL=new A.aR("VirtualDroid","16.1.0")
D.bfd=new A.aR("NGMY OS","14.4.6")
D.bfQ=new A.aR("VirtualDroid","15.0.8")
D.aHa=x([D.bfP,D.bf_,D.beZ,D.bfw,D.beY,D.beX,D.beO,D.bfe,D.bfB,D.bfY,D.beL,D.beD,D.bfJ,D.bf5,D.beK,D.beW,D.bfC,D.bfL,D.bfd,D.bfQ],A.bm("ae<+(m,m)>"))
D.bhZ=new A.dZ(["Tokyo","Japan",35.6762,139.6503,"Asia/Tokyo"])
D.bhx=new A.dZ(["London","United Kingdom",51.5074,-0.1278,"Europe/London"])
D.bhs=new A.dZ(["New York","United States",40.7128,-74.006,"America/New_York"])
D.bhB=new A.dZ(["Paris","France",48.8566,2.3522,"Europe/Paris"])
D.bho=new A.dZ(["Sydney","Australia",-33.8688,151.2093,"Australia/Sydney"])
D.bhD=new A.dZ(["Dubai","UAE",25.2048,55.2708,"Asia/Dubai"])
D.bi0=new A.dZ(["Toronto","Canada",43.6532,-79.3832,"America/Toronto"])
D.bhp=new A.dZ(["Berlin","Germany",52.52,13.405,"Europe/Berlin"])
D.bhw=new A.dZ(["Seoul","South Korea",37.5665,126.978,"Asia/Seoul"])
D.bhF=new A.dZ(["S\xe3o Paulo","Brazil",-23.5505,-46.6333,"America/Sao_Paulo"])
D.bhn=new A.dZ(["Mumbai","India",19.076,72.8777,"Asia/Kolkata"])
D.bhT=new A.dZ(["Lagos","Nigeria",6.5244,3.3792,"Africa/Lagos"])
D.bhQ=new A.dZ(["Mexico City","Mexico",19.4326,-99.1332,"America/Mexico_City"])
D.bhv=new A.dZ(["Singapore","Singapore",1.3521,103.8198,"Asia/Singapore"])
D.bhN=new A.dZ(["Amsterdam","Netherlands",52.3676,4.9041,"Europe/Amsterdam"])
D.bhM=new A.dZ(["Cairo","Egypt",30.0444,31.2357,"Africa/Cairo"])
D.bhm=new A.dZ(["Stockholm","Sweden",59.3293,18.0686,"Europe/Stockholm"])
D.bhA=new A.dZ(["Bangkok","Thailand",13.7563,100.5018,"Asia/Bangkok"])
D.bhK=new A.dZ(["Johannesburg","South Africa",-26.2041,28.0473,"Africa/Johannesburg"])
D.bhP=new A.dZ(["Hong Kong","Hong Kong",22.3193,114.1694,"Asia/Hong_Kong"])
D.Qe=x([D.bhZ,D.bhx,D.bhs,D.bhB,D.bho,D.bhD,D.bi0,D.bhp,D.bhw,D.bhF,D.bhn,D.bhT,D.bhQ,D.bhv,D.bhN,D.bhM,D.bhm,D.bhA,D.bhK,D.bhP],A.bm("ae<+(m,m,aa,aa,m)>"))
D.aM5=x(["NGMY Virtual Phone Air","NGMY Virtual Phone Pro","NGMY Virtual Phone Lite","NGMY Virtual Phone Max","NGMY Virtual Tab Mini","NGMY Virtual Phone Ultra","NGMY Virtual Phone Neo","NGMY Virtual Phone Edge","NGMY Virtual Phone Flex","NGMY Virtual Phone Core","NGMY Virtual Phone Nova","NGMY Virtual Phone Pulse","NGMY Virtual Phone Apex","NGMY Virtual Phone Zen","NGMY Virtual Phone Spark","NGMY Virtual Phone Wave","NGMY Virtual Phone Orbit","NGMY Virtual Phone Prism","NGMY Virtual Phone Flux","NGMY Virtual Phone Echo"],y.s)
D.WZ=new C.Fb(0,"youtube")
D.X_=new C.Fb(1,"tiktok")
D.Eh=new C.Fb(2,"instagram")
D.X0=new C.Fb(3,"facebook")
D.baI=new C.Fb(4,"other")
D.blw=new A.ao(3,null,null,null)
D.bm7=new A.iM(4,10,8,0.52,null)
D.bCO=new A.y("Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.",null,null,null,null,null,null,null,null,null,null)
D.bp5=new A.aO(D.bCO,null,null,null,null,null,null,null,null,null,null,null,null,B.z,!1,null,null,null,B.m,null)
D.bsg=new A.H(!0,B.c,null,null,null,null,11,B.a9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bBd=new A.y("Paste a link",null,null,null,null,null,null,null,null,null,null)
D.bCQ=new A.y("Paste video link",null,null,null,null,null,null,null,null,null,null)
D.bDh=new A.y("Add device",null,null,null,null,null,null,null,null,null,null)
D.bDW=new A.y("Play on all devices",null,null,null,null,null,null,null,null,null,null)
D.bQg=new C.azR(null)})();(function staticFields(){$.b5X=20})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFq","aej",()=>A.a2N(null))})()};
(a=>{a["KtEOONJJ1IDM/Jp6szY4fAx7PWY="]=a.current})($__dart_deferred_initializers__);