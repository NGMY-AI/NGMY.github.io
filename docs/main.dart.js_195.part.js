((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,H,L,K,M,N,C={
hjv(d){var w=B.a.i(d),v=A.af("^[A-Z]{3}[0-9]{1,5}$",!0,!1,!1,!1)
return v.b.test(w.toUpperCase())},
fRv(){var w=$.a62
if(w==null)w=B.cu
return A.x9(w,x.L)},
c4M(d){var w,v,u=$.a62
if(u==null)return null
try{w=J.fP7(u,new C.c4N(d))
return w}catch(v){return null}},
hzH(d){var w=B.a.i(d.toLowerCase()),v=C.fRv(),u=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.c4P(w),u),u.k("J.E"))
return v},
hzG(d){var w=B.a.i(d.toLowerCase()),v=C.fRv(),u=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.c4O(w),u),u.k("J.E"))
return v},
c51(){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$c51=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=$.a62
if(o!=null&&o.length!==0){w=1
break}n=A
m=J
w=3
return A.b(A.aA(),$async$c51)
case 3:t=n.aU(m.q(e.a,"ngmy_civic_user_groups_v1"))
if(t==null||t.length===0){w=1
break}try{s=B.R.aG(0,t,null)
if(x.f.b(s)){r=A.MQ(A.a1(s,x.N,x.z))
o=r
q=A.a3(o).k("bc<2>")
o=A.B(new A.bc(o,q),q.k("J.E"))
B.d.b0(o,new C.c52())
$.a62=o}}catch(l){}case 1:return A.h(u,v)}})
return A.i($async$c51,v)},
aYf(d){var w=0,v=A.j(x._),u,t,s,r,q,p,o,n
var $async$aYf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=x.N
q=x.z
w=3
return A.b(A.kK(A.F(["action","civicUserGroupsPersist","value",d],r,q),!1,!1,null),$async$aYf)
case 3:p=f
o=p==null
n=!o
if(n){t=J.a6(p)
t=J.z(t.h(p,"ok"),!0)&&x.f.b(t.h(p,"value"))}else t=!1
if(t){u=A.a1(x.f.a(J.q(p,"value")),r,q)
w=1
break}r=o?null:J.q(p,"error")
s=B.a.i(J.k(r==null?"":r))
if(n&&J.z(J.q(p,"ok"),!1)&&B.a.t(s,"already taken"))throw A.V(A.bd(s))
w=4
return A.b(A.nm("civic_user_groups_v1",d,null),$async$aYf)
case 4:u=f?d:null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYf,v)},
HW(d){return C.hzE(d)},
hzE(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$HW=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:J.aF(d,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
w=2
return A.b(A.aA(),$async$HW)
case 2:q=f
w=3
return A.b(q.au("String","ngmy_civic_user_groups_v1",B.R.ao(d,null)),$async$HW)
case 3:s=null
u=5
w=8
return A.b(C.aYf(d),$async$HW)
case 8:s=f
u=1
w=7
break
case 5:u=4
i=t.pop()
o=A.aa(i)
if(o instanceof A.lF){r=o
if(B.a.t(r.a,"already taken"))throw i}else throw i
w=7
break
case 4:w=1
break
case 7:o=s
n=A.MQ(o==null?d:o)
if(n.a===0)throw A.V(A.bd("Could not sync this group to the cloud. Check your connection and try again."))
o=new A.dt(n,n.r,n.e)
case 9:if(!o.C()){w=10
break}w=11
return A.b(A.ao8(o.d),$async$HW)
case 11:w=9
break
case 10:m=s
if(m==null)m=d
o=A.T(x.N,x.P)
for(l=A.a3(n),k=new A.cK(n,l.k("cK<1,2>")).gaf(0);k.C();){r=k.d
o.n(0,r.a,r.b.ag())}J.aF(m,"groups",o)
w=12
return A.b(q.au("String","ngmy_civic_user_groups_v1",B.R.ao(m,null)),$async$HW)
case 12:o=l.k("bc<2>")
j=A.B(new A.bc(n,o),o.k("J.E"))
B.d.b0(j,new C.c4J())
$.a62=j
return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$HW,v)},
ao9(d){return C.hzI(d)},
hzI(d){var w=0,v=A.j(x.h),u,t,s,r
var $async$ao9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HX(),$async$ao9)
case 3:r=f
try{t=J.fP7(r,new C.c4R(d))
u=t
w=1
break}catch(q){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$ao9,v)},
U3(d){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m,l
var $async$U3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m=A.fBl(d)
l=m==null?B.a.i(d).toUpperCase():m
if(J.ad(l)===0){u=null
w=1
break}w=3
return A.b(A.aYd(l),$async$U3)
case 3:s=f
if(s!=null){u=s
w=1
break}r=x.N
q=x.z
w=4
return A.b(A.kK(A.F(["action","civicUserGroupsFind","code",l],r,q),!1,!1,null),$async$U3)
case 4:p=f
if(p!=null){o=J.dm(p)
o=o.ai(p,"group")&&x.f.b(o.h(p,"group"))}else o=!1
if(o){u=A.fRt(A.a1(x.f.a(J.q(p,"group")),r,q))
w=1
break}w=5
return A.b(A.HX(),$async$U3)
case 5:t=f
try{r=J.fP7(t,new C.c4S(l))
u=r
w=1
break}catch(k){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$U3,v)},
aYi(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$aYi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.HX(),$async$aYi)
case 3:s=r.dH(f,new C.c4W(t))
s=A.B(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYi,v)},
c5_(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c5_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.HX(),$async$c5_)
case 3:s=r.dH(f,new C.c50(t))
s=A.B(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5_,v)},
c4T(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c4T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.HX(),$async$c4T)
case 3:s=r.dH(f,new C.c4U(t))
s=A.B(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4T,v)},
a63(d,e,f){var w=0,v=A.j(x.L),u,t,s,r,q,p,o,n,m,l,k
var $async$a63=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:k=B.a.i(d).toUpperCase()
if(!C.hjv(k))throw A.V(A.dI("Group code must be 3 letters + 1\u20135 numbers (e.g. ABC123).",null))
w=3
return A.b(A.HV(),$async$a63)
case 3:t=h
s=A.MQ(t)
r=A.a3(s)
if(new A.bc(s,r.k("bc<2>")).b5(0,new C.c4Q(k)))throw A.V(A.bd(y.d))
w=4
return A.b(C.U3(k),$async$a63)
case 4:if(h!=null)throw A.V(A.bd(y.d))
q=Date.now()
p=B.cI.aC(1048576)
o=B.a.i(e.toLowerCase())
n=B.a.i(f)
if(n.length===0)n="Owner"
m=A.h6v(new A.S(Date.now(),0,!1).a6(),null,"",null,"",!1,"","","","cug_"+q+"_"+p,k,null,null,null,k,null,o,0,n)
n=m.a
s.n(0,n,m)
o=A.T(x.N,x.P)
for(r=new A.cK(s,r.k("cK<1,2>")).gaf(0);r.C();){l=r.d
o.n(0,l.a,l.b.ag())}J.aF(t,"groups",o)
w=5
return A.b(C.HW(t),$async$a63)
case 5:r=C.c4M(n)
w=6
return A.b(A.ao8(r==null?m:r),$async$a63)
case 6:r=C.c4M(n)
u=r==null?m:r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a63,v)},
HY(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$HY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.HV(),$async$HY)
case 2:s=f
r=A.MQ(s)
q=d.a
r.n(0,q,C.hzF(d,r.h(0,q)))
q=A.T(x.N,x.P)
for(u=new A.cK(r,A.a3(r).k("cK<1,2>")).gaf(0);u.C();){t=u.d
q.n(0,t.a,t.b.ag())}J.aF(s,"groups",q)
w=3
return A.b(C.HW(s),$async$HY)
case 3:return A.h(null,v)}})
return A.i($async$HY,v)},
hzF(d,e){var w,v,u,t,s,r
if(e==null)return d
w=d.r
v=new A.K(w,new C.c4K(),A.U(w).k("K<1,n>")).fK(0)
for(u=e.r,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
if(!v.t(0,r.a))B.d.J(w,r)}return d},
hzD(d){var w=$.a62
if(w!=null)B.d.bn(w,new C.c4I(d))},
aYh(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aYh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.HV(),$async$aYh)
case 2:r=f
q=A.MQ(r)
q.W(0,d)
u=A.T(x.N,x.P)
for(t=new A.cK(q,A.a3(q).k("cK<1,2>")).gaf(0);t.C();){s=t.d
u.n(0,s.a,s.b.ag())}J.aF(r,"groups",u)
w=3
return A.b(C.HW(r),$async$aYh)
case 3:C.hzD(d)
return A.h(null,v)}})
return A.i($async$aYh,v)},
aYj(d,e,f,g,h,i,j){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m
var $async$aYj=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:m=A.fBl(g)
if(m==null)m=B.a.i(g).toUpperCase()
if(m.length===0){u=null
w=1
break}w=3
return A.b(C.U3(m),$async$aYj)
case 3:t=l
if(t==null){u=null
w=1
break}s=B.a.i(e.toLowerCase())
if(t.alG(s)||t.aF5(s)){u=t
w=1
break}r=t.r
B.d.bn(r,new C.c4Z(s))
q=B.a.i(h)
if(q.length===0)q=B.d.gL(s.split("@"))
p=new A.S(Date.now(),0,!1).a6()
o=B.a.i(i)
n=B.a.i(j)
B.d.J(r,A.h6w(B.a.i(d),s,f,p,0,q,o,new A.S(Date.now(),0,!1).a6(),n,"pending"))
w=4
return A.b(C.HY(t),$async$aYj)
case 4:n=C.c4M(t.a)
u=n==null?t:n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYj,v)},
aYg(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ao9(d),$async$aYg)
case 3:q=g
if(q==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
s=q.r
r=B.d.bd(s,new C.c4L(t))
if(r<0){u=!1
w=1
break}s[r].e="active"
w=4
return A.b(C.HY(q),$async$aYg)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYg,v)},
aoa(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$aoa=A.e(function(i,a0){if(i===1)return A.f(a0,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ao9(d),$async$aoa)
case 3:k=a0
if(k==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
if(k.a4r(t)){u=!1
w=1
break}s=B.a.i(f==null?"":f)
if(J.ad(s)===0)try{s=B.a.i(B.d.i7(k.r,new C.c4X(t)).b)}catch(j){s=J.f0(t,"@")?B.d.gL(J.lp(t,"@")):t}if(J.ad(s)===0)s="Member"
q=k.r.length
B.d.bn(k.r,new C.c4Y(t))
if(k.r.length===q){u=!1
w=1
break}p=k.x
o=Date.now()
n=B.cI.aC(1048576)
m=s
l=new A.S(Date.now(),0,!1).a6()
B.d.ck(p,0,new A.pI("cug_"+o+"_"+n,B.a40,0,m,g,l,B.a.i(h.toLowerCase()),"",t,""))
w=4
return A.b(C.HY(k),$async$aoa)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoa,v)},
c4N:function c4N(d){this.a=d},
c4P:function c4P(d){this.a=d},
c4O:function c4O(d){this.a=d},
c52:function c52(){},
c4J:function c4J(){},
c4R:function c4R(d){this.a=d},
c4S:function c4S(d){this.a=d},
c4W:function c4W(d){this.a=d},
c50:function c50(d){this.a=d},
c4U:function c4U(d){this.a=d},
c4Q:function c4Q(d){this.a=d},
c4K:function c4K(){},
c4I:function c4I(d){this.a=d},
c4Z:function c4Z(d){this.a=d},
c4L:function c4L(d){this.a=d},
c4X:function c4X(d){this.a=d},
c4Y:function c4Y(d){this.a=d},
aMQ(d,e){var w=0,v=A.j(x.H),u
var $async$aMQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(new A.fC(e)),$async$aMQ)
case 3:if(d.e==null){w=1
break}d.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+e,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aMQ,v)},
byr(d,e,f){var w=d.x,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fbC(B.a.i(e).toLowerCase(),B.a.i(f.toLowerCase()),d),v),v.k("J.E"))
return w},
hNm(d,e,f){return B.d.cI(C.byr(d,e,f),0,new C.fbB())},
hQE(d,e,f){var w,v,u=C.byr(d,e,f)
u=A.B(new A.K(u,new C.fgC(),A.U(u).k("K<1,wh>")),x.W)
w=d.cOn(e,f)
B.d.v(u,new A.K(w,new C.fgD(),A.U(w).k("K<1,wh>")))
if(d.y){w=d.ax
w=w.length!==0&&!d.Sf(e,w)}else w=!1
if(w){w=d.ay
if(w==null)w=new A.S(Date.now(),0,!1).a6()
v=B.a.i(d.z)
u.push(new C.JG(v.length===0?"Help round":v,!0,"",w))}B.d.b0(u,new C.fgE())
return u},
bzn(d){var w=0,v=A.j(x.H),u,t,s
var $async$bzn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){w=1
break}t=A.cw("https://cash.app/$"+(B.a.a0(s,"$")?B.a.b1(s,1):s),0,null)
w=5
return A.b(A.pj(t),$async$bzn)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iQ(t,B.fk,null),$async$bzn)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bzn,v)},
byn(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$byn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=A.af("[^\\d+]",!0,!1,!1,!1)
r=A.aK(d,s,"")
if(r.length===0){w=1
break}t=A.cw("tel:"+r,0,null)
w=5
return A.b(A.pj(t),$async$byn)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iQ(t,B.fk,null),$async$byn)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$byn,v)},
hlE(d,e,f,g){C.c51()
return A.hw(d,new C.ao5(f,g,e,null),!1,null,x.X)},
hbU(d,e,f,g,h,i,j){return new C.azI(f,j,g,i,h,d,e,null)},
fUR(d,e,f,g,h,i,j,k,l){return new C.bgq(k,g,d,h,j,e,f,i,l,null)},
hUE(d){var w={},v=new A.ar(B.as,$.aw())
w.a=""
return A.bR(B.K,null,new C.fmf(w,v),d,!0,!0,!0,null,!1,!1,x.N).fe(v.gf4())},
hUG(d,e,f,g,h,i,j,k){var w=new A.ar(B.as,$.aw())
return A.bR(B.K,null,new C.fmz(h,k,j,w,!0,i,g,f),d,!0,!0,!0,null,!1,!1,x.N).fe(w.gf4())},
hUF(d,e,f,g,h){var w,v,u,t={},s=g===B.rn,r=$.aw(),q=new A.ar(B.as,r),p=new A.ar(B.as,r),o=new A.ar(B.as,r)
r=new C.fmv(s,e)
w=A.U(h).k("a2<1>")
v=A.B(new A.a2(h,new C.fms(r),w),w.k("J.E"))
u=s&&h.length!==0&&v.length===0
t.a=v.length!==0?B.d.gL(v).b:""
t.b=!1
return A.bR(B.K,null,new C.fmt(t,o,h,r,s,f,u,p,q,e),d,!0,!0,!0,null,!1,!1,x.R).fe(new C.fmu(q,p,o))},
hUC(d,e,f){return A.bR(B.K,null,new C.fm_(f,e),d,!0,!0,!1,null,!1,!1,x.y)},
hUA(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=C.byr(f,i,e),r=B.d.cI(s,0,new C.flS()),q=f.a4I(i,e)
if(f.y){w=f.ax
v=w.length!==0&&!f.Sf(i,w)}else v=!1
if(f.ax.length===0)u=D.awo
else{w=A.U(s).k("a2<1>")
u=A.B(new A.a2(s,new C.flT(f),w),w.k("J.E"))}if(!v)t=q>0&&r<=0
else t=!0
return A.bR(B.K,null,new C.flU(f,i,e,l,h,k,s,r,q,v,u,t,g,j),d,!0,!0,!0,null,!1,!1,x.H)},
hUv(d,e){return A.bR(B.K,null,new C.flt(e),d,!0,!0,!1,null,!1,!1,x.y)},
hUw(d,e,f,g){return A.bR(B.K,null,new C.flw(g,e,f),d,!0,!0,!1,null,!1,!1,x.y)},
fXw(d,e){var w=null
return new A.D(B.ve,A.A(A.a([A.d(d,w,w,w,w,w,w,B.zw,w,w,w),B.b6,new A.dq(1,B.cn,A.d(e,w,w,w,w,w,w,B.m2,B.dM,w,w),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
hUy(d,e,f,g){var w,v,u,t,s,r
if(!f)return C.hUx(d,e,g)
w=e.z
v=$.aw()
u=new A.ar(new A.bb(w,B.b4,B.aN),v)
w=e.Q
t=new A.ar(new A.bb(w,B.b4,B.aN),v)
w=e.as
s=new A.ar(new A.bb(w,B.b4,B.aN),v)
w=e.at
r=new A.ar(new A.bb(w,B.b4,B.aN),v)
return A.bR(B.K,null,new C.flJ(g,e.y,u,t,s,r,new C.flI(e,u,t,s,r),e),d,!0,!0,!0,null,!1,!1,x.L).fe(new C.flK(u,t,s,r))},
hUx(d,e,f){return A.bR(B.K,null,new C.flB(f,e),d,!0,!0,!0,null,!1,!1,x.L)},
heQ(d,e){return A.c6(e,new C.fdC(e,d),null)},
fdA(d,e,f,g,h,i){var w,v=null,u=A.m(18),t=A.I(B.b2.j(0.35),B.q,1),s=A.X(e,B.b2,v,v,v,20),r=A.d(f,v,v,v,v,v,v,A.l(v,v,B.b2.j(0.85),v,v,v,v,v,v,v,v,10,v,v,B.H,v,v,!0,v,1.1,v,v,v,v,v,v),v,v,v),q=g==null,p=!q,o=p?B.iT:B.c,n=p?B.mH:v,m=x.p
n=A.a([r,B.at,A.d(i,v,v,v,v,v,v,A.l(v,v,o,v,n,B.b2.j(0.6),v,v,v,v,v,14,v,v,B.P,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v)],m)
if(p&&h!=null)B.d.v(n,A.a([B.at,A.d("Tap to "+h,v,v,v,v,v,v,A.l(v,v,B.b2.j(0.75),v,v,v,v,v,v,v,v,10,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],m))
w=A.p(v,A.A(A.a([s,B.av,A.E(A.v(n,B.F,v,B.e,B.j,0,B.p),1),A.aH(v,v,v,v,A.X(B.fL,B.b2.j(0.9),v,v,v,18),v,v,v,new C.fdB(i,d,f),v,v,v,v,"Copy",v)],m),B.F,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.fn,v,t,u,v,v,B.n),v,v,v,B.db,B.eP,v,v,v)
if(q)return w
return A.aG(!1,B.a1,!0,v,A.aL(!1,A.m(18),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)},
aNK(d,e,f){var w=null,v=B.b1.j(0.16),u=A.I(B.b1.j(0.55),B.q,1),t=A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,14)],x.V),s=x.p
return A.A(A.a([A.p(w,A.X(d,B.b1,w,w,w,w),B.f,w,w,new A.o(v,w,u,w,t,w,B.a6),w,46,w,w,w,w,w,46),B.bf,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,B.kz,w,w,w),B.at,A.d(e,w,w,w,w,w,w,M.a7d,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w)},
Kf(d){var w=null,v=B.c.j(0.05)
return A.br(w,w,w,B.bC,w,w,w,w,!0,new A.b4(4,A.m(14),new A.ay(B.b1.j(0.25),1,B.q,-1)),w,w,w,w,w,v,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9S),w,w,w,w,w,w,w,w,B.kB,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
hTY(d,e){var w,v,u,t,s,r,q=A.a([],x.x)
for(w=d.x,v=w.length,u=e==="other",t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.b===B.rn){r=s.w
r=u?r.length===0:r===e}else r=!1
if(r)q.push(s)}return q},
hTZ(d,e,f){var w,v,u,t
for(w=f.length,v=0;v<w;++v){u=B.a.i(f[v].y)
if(u.length!==0)return u}u=e==="other"
if(!u&&e===d.ax&&B.a.i(d.z).length!==0)return B.a.i(d.z)
if(u)return"Other contributions"
if(w!==0){t=B.d.gal(f).f.bS()
return"Contribution round \xb7 "+A.bG(t)+"/"+A.bQ(t)+"/"+A.bA(t)}return"Contribution round"},
hgF(d){var w,v=d.toLowerCase()
A:{if("mother"===v){w="Mother"
break A}if("father"===v){w="Father"
break A}if("spouse"===v){w="Spouse"
break A}if("child"===v){w="Child"
break A}if("brother"===v){w="Brother"
break A}if("sister"===v){w="Sister"
break A}w=d.length===0?"Family":d
break A}return w},
hUD(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l=x.S,k=A.a([new A.FA(e.c,e.d)],l),j=e.gF8()
B.d.v(k,new A.K(j,new C.fm1(),A.U(j).k("K<1,+email,name(n,n)>")))
w=A.a([],x.Z)
v=A.a([],l)
for(l=k.length,u=0;u<k.length;k.length===l||(0,A.L)(k),++u){t=k[u]
j=h.length
r=t.b
q=t.a
p=0
for(;;){if(!(p<j)){s=null
break}o=h[p]
if(B.a.i(o.d).toLowerCase()!==B.a.i(r).toLowerCase()){n=o.x
n=n.length!==0&&n===B.a.i(q.toLowerCase())}else n=!0
if(n){s=o
break}++p}if(s!=null)w.push(new A.y(t,s))
else v.push(t)}for(l=h.length,u=0;u<h.length;h.length===l||(0,A.L)(h),++u){o=h[u]
if(!B.d.b5(k,new C.fm2(o)))w.push(new A.y(new A.FA(o.x,o.d),o))}m=B.d.cI(h,0,new C.fm3())
l=k.length
return A.bR(B.K,null,new C.fm4(g,w,k,m,i,l===0?0:B.k.D(w.length/l,0,1),e,v),d,!0,!0,!0,null,!1,!1,x.H)},
hUB(d,e,f){var w,v,u,t,s,r,q,p=B.a.i(f.y)
if(!(p.length!==0))p=f.w===e.ax&&B.a.i(e.z).length!==0?B.a.i(e.z):"Group contribution"
w=e.e
v=A.af("[^0-9]",!0,!1,!1,!1)
u="LG-"+w+"-"+B.a.ap(B.a.aT(A.aK(f.a,v,""),6,"0"),0,6)
t=f.f.bS()
s=""+A.bG(t)+"/"+A.bQ(t)+"/"+A.bA(t)+" "+B.a.aT(B.o.u(A.dl(t)),2,"0")+":"+B.a.aT(B.o.u(A.fY(t)),2,"0")
v=B.k.aa(f.c,2)
r=f.e
r=r.length!==0?"\nNote: "+r:""
q=f.r
if(q.length===0)q=e.c
return A.bR(B.K,null,new C.flW(u,new C.flX(),f,p,s,e,"RECEIPT "+u+"\nGroup: "+w+" ("+e.d+")\nFrom: "+f.d+"\nFor: "+p+"\nAmount: $"+v+"\nDate: "+s+r+"\nRecorded by: "+q),d,!0,!0,!0,null,!1,!1,x.H)},
hUz(d,e,f,g){return A.bR(B.K,null,new C.flL(e,f,g),d,!0,!0,!0,null,!1,!1,x.n)},
fbC:function fbC(d,e,f){this.a=d
this.b=e
this.c=f},
fbB:function fbB(){},
Cc:function Cc(d,e){this.a=d
this.b=e},
wh:function wh(){},
Pa:function Pa(d,e){this.b=d
this.a=e},
JG:function JG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fgC:function fgC(){},
fgD:function fgD(){},
fgE:function fgE(){},
ao5:function ao5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aC8:function aC8(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=e
_.y=null
_.z=f
_.cO$=g
_.b_$=h
_.c=_.a=null},
dJB:function dJB(d){this.a=d},
dJr:function dJr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJq:function dJq(){},
dJp:function dJp(d){this.a=d},
dJv:function dJv(d){this.a=d},
dJx:function dJx(d){this.a=d},
dJw:function dJw(d,e){this.a=d
this.b=e},
dJy:function dJy(d,e){this.a=d
this.b=e},
dJu:function dJu(d,e,f){this.a=d
this.b=e
this.c=f},
dJz:function dJz(d){this.a=d},
dJA:function dJA(d,e){this.a=d
this.b=e},
dJt:function dJt(d,e,f){this.a=d
this.b=e
this.c=f},
dJs:function dJs(d,e,f){this.a=d
this.b=e
this.c=f},
apJ:function apJ(d,e,f){this.c=d
this.d=e
this.a=f},
bje:function bje(d,e,f,g){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=!1
_.x=""
_.cO$=f
_.b_$=g
_.c=_.a=null},
e8I:function e8I(d,e){this.a=d
this.b=e},
e8H:function e8H(d){this.a=d},
e8F:function e8F(){},
e8G:function e8G(){},
e8E:function e8E(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8D:function e8D(d){this.a=d},
e8N:function e8N(d){this.a=d},
e8O:function e8O(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8L:function e8L(d,e){this.a=d
this.b=e},
e8R:function e8R(d,e){this.a=d
this.b=e},
e8J:function e8J(d,e){this.a=d
this.b=e},
e8K:function e8K(d,e){this.a=d
this.b=e},
ab1:function ab1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
C8:function C8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
dca:function dca(d){this.a=d},
azI:function azI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
dcq:function dcq(d){this.a=d},
acp:function acp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
HT:function HT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aC5:function aC5(d,e){var _=this
_.d=null
_.f=_.e=$
_.r=null
_.w=0
_.cO$=d
_.b_$=e
_.c=_.a=null},
dJn:function dJn(d){this.a=d},
dJb:function dJb(d,e){this.a=d
this.b=e},
dJ_:function dJ_(){},
dJ9:function dJ9(d){this.a=d},
dJ7:function dJ7(d){this.a=d},
dJ8:function dJ8(d){this.a=d},
dJc:function dJc(d,e){this.a=d
this.b=e},
dJd:function dJd(d,e){this.a=d
this.b=e},
dJe:function dJe(){},
dJf:function dJf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dJa:function dJa(d,e){this.a=d
this.b=e},
dJh:function dJh(d){this.a=d},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJj:function dJj(d){this.a=d},
dJk:function dJk(d){this.a=d},
dJl:function dJl(d){this.a=d},
dJm:function dJm(d,e){this.a=d
this.b=e},
dJg:function dJg(d,e){this.a=d
this.b=e},
dJ2:function dJ2(d,e){this.a=d
this.b=e},
dJ3:function dJ3(d,e){this.a=d
this.b=e},
dJ1:function dJ1(d,e){this.a=d
this.b=e},
dJ0:function dJ0(d,e){this.a=d
this.b=e},
dJ4:function dJ4(d,e){this.a=d
this.b=e},
dJ5:function dJ5(d,e){this.a=d
this.b=e},
dJ6:function dJ6(){},
aC6:function aC6(d){this.a=d},
aC7:function aC7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dJo:function dJo(d){this.a=d},
bgq:function bgq(d,e,f,g,h,i,j,k,l,m){var _=this
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
beQ:function beQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dcI:function dcI(d){this.a=d},
dcH:function dcH(d,e){this.a=d
this.b=e},
bgp:function bgp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgA:function dgA(d){this.a=d},
bgm:function bgm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgy:function dgy(d){this.a=d},
bgo:function bgo(d,e,f){this.c=d
this.d=e
this.a=f},
dgz:function dgz(d){this.a=d},
Pu:function Pu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
dgx:function dgx(d,e){this.a=d
this.b=e},
bgn:function bgn(d,e,f){this.a=d
this.b=e
this.c=f},
biT:function biT(){},
fmf:function fmf(d,e){this.a=d
this.b=e},
fme:function fme(d,e){this.a=d
this.b=e},
fmb:function fmb(d,e){this.a=d
this.b=e},
fma:function fma(d){this.a=d},
fmc:function fmc(d){this.a=d},
fmd:function fmd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fm9:function fm9(d){this.a=d},
fmz:function fmz(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmw:function fmw(d){this.a=d},
fmx:function fmx(d){this.a=d},
fmy:function fmy(d,e){this.a=d
this.b=e},
fmv:function fmv(d,e){this.a=d
this.b=e},
fms:function fms(d){this.a=d},
fmt:function fmt(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
fmr:function fmr(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
fmj:function fmj(d){this.a=d},
fmk:function fmk(d){this.a=d},
fml:function fml(d){this.a=d},
fmm:function fmm(d,e){this.a=d
this.b=e},
fmi:function fmi(d){this.a=d},
fmn:function fmn(d){this.a=d},
fmh:function fmh(){},
fmo:function fmo(d,e,f){this.a=d
this.b=e
this.c=f},
fmg:function fmg(d,e){this.a=d
this.b=e},
fmp:function fmp(d){this.a=d},
fmq:function fmq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fmu:function fmu(d,e,f){this.a=d
this.b=e
this.c=f},
fm_:function fm_(d,e){this.a=d
this.b=e},
flY:function flY(d){this.a=d},
flZ:function flZ(d){this.a=d},
flS:function flS(){},
flT:function flT(d){this.a=d},
flU:function flU(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.at=q},
flR:function flR(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
_.at=q},
flQ:function flQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
_.ax=r
_.ay=s},
flP:function flP(d,e){this.a=d
this.b=e},
flM:function flM(d,e){this.a=d
this.b=e},
flO:function flO(d,e,f){this.a=d
this.b=e
this.c=f},
flN:function flN(){},
bhi:function bhi(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.ay=k
_.ch=l
_.CW=m
_.cx=n
_.a=o},
dmH:function dmH(){},
dmI:function dmI(d){this.a=d},
dmJ:function dmJ(d,e){this.a=d
this.b=e},
dmK:function dmK(){},
dmL:function dmL(d){this.a=d},
dmM:function dmM(d,e){this.a=d
this.b=e},
dmN:function dmN(d){this.a=d},
dmG:function dmG(d,e,f){this.a=d
this.b=e
this.c=f},
flt:function flt(d){this.a=d},
flr:function flr(d){this.a=d},
fls:function fls(d){this.a=d},
flw:function flw(d,e,f){this.a=d
this.b=e
this.c=f},
flu:function flu(d){this.a=d},
flv:function flv(d){this.a=d},
flI:function flI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flJ:function flJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
flH:function flH(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
flC:function flC(d,e,f){this.a=d
this.b=e
this.c=f},
flD:function flD(d,e,f){this.a=d
this.b=e
this.c=f},
flE:function flE(d,e,f){this.a=d
this.b=e
this.c=f},
flF:function flF(d,e,f){this.a=d
this.b=e
this.c=f},
flG:function flG(d){this.a=d},
flK:function flK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flB:function flB(d,e){this.a=d
this.b=e},
flA:function flA(d,e,f){this.a=d
this.b=e
this.c=f},
flx:function flx(d){this.a=d},
fly:function fly(d){this.a=d},
flz:function flz(d){this.a=d},
fdC:function fdC(d,e){this.a=d
this.b=e},
fdB:function fdB(d,e,f){this.a=d
this.b=e
this.c=f},
or:function or(d,e,f){this.c=d
this.d=e
this.a=f},
fm1:function fm1(){},
fm2:function fm2(d){this.a=d},
fm3:function fm3(){},
fm4:function fm4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fm0:function fm0(d,e,f){this.a=d
this.b=e
this.c=f},
flX:function flX(){},
flW:function flW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
flV:function flV(d,e){this.a=d
this.b=e},
bfT:function bfT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
flL:function flL(d,e,f){this.a=d
this.b=e
this.c=f},
aAk:function aAk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAl:function aAl(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=""
_.w=null
_.x=f
_.c=_.a=null},
df9:function df9(){},
dfa:function dfa(d){this.a=d},
dfb:function dfb(){},
dfc:function dfc(d){this.a=d},
dfd:function dfd(d){this.a=d},
dfe:function dfe(d){this.a=d},
dff:function dff(d){this.a=d},
dfr:function dfr(){},
dfl:function dfl(d){this.a=d},
dfk:function dfk(d,e){this.a=d
this.b=e},
dfm:function dfm(d,e){this.a=d
this.b=e},
dfj:function dfj(d,e,f){this.a=d
this.b=e
this.c=f},
dfn:function dfn(d,e){this.a=d
this.b=e},
dfi:function dfi(d,e,f){this.a=d
this.b=e
this.c=f},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfh:function dfh(d,e){this.a=d
this.b=e},
dfp:function dfp(d){this.a=d},
dfg:function dfg(d){this.a=d},
dfq:function dfq(d){this.a=d},
aKz:function aKz(){},
aKA:function aKA(){},
aL9:function aL9(){},
fRu(d,e){var w=0,v=A.j(x.y),u
var $async$fRu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}u=A.ld(d,B.CD)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRu,v)},
c4F(d,e,f){var w=0,v=A.j(x.y),u
var $async$c4F=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}w=3
return A.b(A.aqN(d,B.z6,e),$async$c4F)
case 3:if(h){u=!0
w=1
break}u=A.ld(d,B.z6)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4F,v)},
aYc(d,e){var w=0,v=A.j(x.y),u,t
var $async$aYc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}t=J
w=3
return A.b(C.aYi(d),$async$aYc)
case 3:if(t.ad(g)<1){u=!0
w=1
break}u=C.fRu(d,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYc,v)},
ao7(d,e,f){var w=0,v=A.j(x.y),u,t
var $async$ao7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYc(e,f),$async$ao7)
case 3:if(h){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.kS(!1,d,e,f,"Your free group slot is used. Subscribe to create another lightning group ("+A.cdT(B.CD)+" / "+A.cdO(B.CD)+").",B.CD,"Create another group"),$async$ao7)
case 6:t=h
if(t){w=4
break}else h=t
w=5
break
case 4:w=7
return A.b(C.aYc(e,f),$async$ao7)
case 7:case 5:u=h
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao7,v)},
aYb(d,e,f,g){var w=0,v=A.j(x.y),u
var $async$aYb=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}if(d<100){u=!0
w=1
break}u=C.c4F(g,e,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYb,v)},
ao6(d,e,f,g,h){var w=0,v=A.j(x.y),u,t
var $async$ao6=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYb(e,f,g,h),$async$ao6)
case 3:if(j){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.zl(d,h,g,"This group is at the free 100-member limit. Unlock more seats for "+A.cdT(B.z6)+" / "+A.cdO(B.z6)+".",B.z6,f,"Unlock 100+ members"),$async$ao6)
case 6:t=j
if(t){w=4
break}else j=t
w=5
break
case 4:w=7
return A.b(C.aYb(e,f,g,h),$async$ao6)
case 7:case 5:u=j
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao6,v)}},D,E,F,G,O,P,I,Q,R,S
J=c[1]
A=c[0]
B=c[2]
H=c[77]
L=c[81]
K=c[75]
M=c[88]
N=c[86]
C=a.updateHolder(c[8],C)
D=c[74]
E=c[76]
F=c[82]
G=c[78]
O=c[83]
P=c[79]
I=c[84]
Q=c[80]
R=c[87]
S=c[85]
C.Cc.prototype={
a4(){return"_MemberHistoryFilter."+this.b}}
C.wh.prototype={}
C.Pa.prototype={}
C.JG.prototype={}
C.ao5.prototype={
R(){var w=x.D
return new C.aC8(A.a([],w),A.a([],w),A.a([],w),null,null)},
gdZ(){return this.c}}
C.aC8.prototype={
a_(){var w,v=this,u=null
v.a1()
v.w=C.hzH(v.a.c)
v.x=C.hzG(v.a.c)
v.y=A.dv(B.hJ,new C.dJB(v))
w=A.bj(u,B.xn,u,1,u,v)
w.cs(0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.pE,u,1,u,v)
w.fc(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.jV,u,1,u,v)
w.cH(0)
v.f!==$&&A.aP()
v.f=w
w=A.bj(u,B.ib,u,1,u,v)
w.cs(0)
v.r!==$&&A.aP()
v.r=w
v.hX()},
q(){var w=this,v=w.y
if(v!=null)v.a7(0)
v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
v=w.r
v===$&&A.c()
v.q()
w.btG()},
hX(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$hX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYi(t.a.c),$async$hX)
case 3:s=e
w=4
return A.b(C.c4T(t.a.c),$async$hX)
case 4:r=e
w=5
return A.b(C.c5_(t.a.c),$async$hX)
case 5:q=e
if(t.c==null){w=1
break}t.m(new C.dJr(t,s,r,q))
case 1:return A.h(u,v)}})
return A.i($async$hX,v)},
zP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
m=r.a
w=3
return A.b(C.ao7(j,m.c,m.e),$async$zP)
case 3:if(!e||r.c==null){w=1
break}j=r.c
j.toString
w=4
return A.b(C.hUE(j),$async$zP)
case 4:q=e
if(q==null||r.c==null){w=1
break}t=6
j=r.a
w=9
return A.b(C.a63(q,j.c,j.d),$async$zP)
case 9:p=e
w=10
return A.b(r.hX(),$async$zP)
case 10:j=r.c
if(j==null){w=1
break}m=p.a
l=r.a
w=11
return A.b(A.hw(j,new C.HT(m,l.c,l.d,l.e,null),!1,null,x.X),$async$zP)
case 11:w=12
return A.b(r.hX(),$async$zP)
case 12:t=2
w=8
break
case 6:t=5
i=s.pop()
j=A.aa(i)
if(j instanceof A.lF){o=j
j=r.c
if(j==null){w=1
break}j.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}else{n=j
j=r.c
if(j==null){w=1
break}j.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zP,v)},
XP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hUG(r,!0,"Join group","ABC12345",B.yk,1.6,"Enter the group code from the owner (3 letters + numbers).","Join with code"),$async$XP)
case 3:s=e
if(s==null||t.c==null){w=1
break}w=4
return A.b(t.tx(s),$async$XP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XP,v)},
tx(d){return this.bYw(d)},
bYw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$tx=A.e(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(C.U3(d),$async$tx)
case 3:g=a0
if(g==null){m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(D.eSD)
w=1
break}w=g.alG(r.a.c)?4:5
break
case 4:m=r.c
if(m==null){w=1
break}l=g.a
k=r.a
w=6
return A.b(A.hw(m,new C.HT(l,k.c,k.d,k.e,null),!1,null,x.X),$async$tx)
case 6:w=7
return A.b(r.hX(),$async$tx)
case 7:w=1
break
case 5:if(g.aF5(r.a.c)){m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(D.ePc)
w=1
break}m=g.c
l=g.a
w=8
return A.b(C.aYb(g.gwB(),l,!1,m),$async$tx)
case 8:if(!a0){m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(D.eQA)
w=1
break}m=r.c
m.toString
l=r.a
w=9
return A.b(C.hUz(m,g,l.d,l.c),$async$tx)
case 9:q=a0
if(q==null||r.c==null){w=1
break}t=11
m=g.e
l=r.a.c
k=q.a
j=q.b
i=q.c
w=14
return A.b(C.aYj(q.d,l,q.e,m,k,j,i),$async$tx)
case 14:p=a0
if(p==null){m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(D.eSL)
w=1
break}t=2
w=13
break
case 11:t=10
f=s.pop()
m=A.aa(f)
if(m instanceof A.lF){o=m
m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{n=m
m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not send your request. "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=13
break
case 10:w=2
break
case 13:if(r.c==null){w=1
break}w=15
return A.b(r.hX(),$async$tx)
case 15:m=r.c
if(m==null){w=1
break}w=16
return A.b(A.ca(null,null,!0,null,new C.dJq(),m,null,!0,!0,x.H),$async$tx)
case 16:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$tx,v)},
YM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.hw(r,D.fRx,!1,null,x.N),$async$YM)
case 3:s=e
if(s==null||s.length===0||t.c==null){w=1
break}w=4
return A.b(t.tx(s),$async$YM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YM,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
m===$&&A.c()
w=o.e
w===$&&A.c()
v=o.f
v===$&&A.c()
u=A.c6(new A.h3(A.a([m,w,v],x.U)),new C.dJv(o),n)
t=o.a.e?A.aH(n,n,n,n,D.bHb,n,n,n,new C.dJw(o,d),n,n,n,n,"All groups (admin)",n):n
t=C.fUR(n,!1,n,new C.dJx(d),n,n,!1,"LIGHTNING GROUPS",t)
s=x.p
m=A.a([new C.bgm(m,w,v,o.gbHg(),o.gbYv(),o.gc3B(),n),B.e1,o.ayT("YOU OWN")],s)
if(J.cm(o.w))m.push(new A.D(B.e4,A.d("Create your free group \u2014 one free owned group.",n,n,n,n,n,n,K.IH,n,n,n),n))
else{r=J.h0X(o.w)
B.d.v(m,r.gdK(r).dt(0,new C.dJy(o,d),x.l))}if(J.cy(o.z)){r=A.a([B.by,o.ayT("WAITING FOR APPROVAL")],s)
for(q=J.aV(o.z);q.C();){p=q.gT(q)
r.push(new C.azI(p,"Request sent \xb7 "+p.d+" has to approve you",new C.dJz(d),w,v,0,"...",n))}B.d.v(m,r)}m.push(B.by)
m.push(o.ayT("YOU JOINED"))
if(J.cm(o.x))m.push(new A.D(B.e4,A.d("Join with a code or QR from a friend.",n,n,n,n,n,n,K.IH,n,n,n),n))
else{w=J.h0X(o.x)
B.d.v(m,w.gdK(w).dt(0,new C.dJA(o,d),x.l))}return A.yw(A.c8(n,B.bY,new A.an(B.W,n,B.aa,B.r,A.a([u,A.bl(!0,A.v(A.a([new A.D(E.LS,t,n),A.E(A.cz(m,n,D.brM,n,n,B.ah,!1),1)],s),B.aj,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],s),n),n,!1,!1,n,n),B.SU,x.I)},
b4O(d,e){var w=this.r
w===$&&A.c()
return A.c6(w,new C.dJs(this,d,e),null)},
ayT(d){var w=null
return new A.D(B.cB,A.d(d,w,w,w,w,w,w,A.l(w,w,B.b1.j(0.85),w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w),w)}}
C.apJ.prototype={
R(){return new C.bje(new A.ar(B.as,$.aw()),A.a([],x.D),null,null)},
gdZ(){return this.c}}
C.bje.prototype={
a_(){var w,v=this,u=null
v.a1()
v.r=A.bn(C.fRv(),!0,x.L)
w=A.bj(u,B.pE,u,1,u,v)
w.fc(0,!0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.jV,u,1,u,v)
w.cH(0)
v.e!==$&&A.aP()
v.e=w
v.hX()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v.U$=$.aw()
v.P$=0
w.buh()},
hX(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HX(),$async$hX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.e8I(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hX,v)},
gbNg(){var w,v=B.a.i(this.x).toLowerCase()
if(v.length===0)return this.r
w=J.dH(this.r,new C.e8H(v))
w=A.B(w,w.$ti.k("J.E"))
return w},
a_1(d){return this.cbM(d)},
cbM(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a_1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return A.b(A.hw(s,new C.HT(d.a,t.c,t.d,!0,null),!1,null,x.X),$async$a_1)
case 2:w=3
return A.b(u.hX(),$async$a_1)
case 3:return A.h(null,v)}})
return A.i($async$a_1,v)},
NF(d){return this.bJc(d)},
bJc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.e8E(d),s,null,!0,!0,x.y),$async$NF)
case 3:if(f!==!0){w=1
break}w=4
return A.b(C.aYh(d.a),$async$NF)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted "+d.e,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=5
return A.b(t.hX(),$async$NF)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NF,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.gbNg(),n=q.d
n===$&&A.c()
w=q.e
w===$&&A.c()
w=A.c6(new A.h3(A.a([n,w],x.U)),new C.e8N(q),p)
n=q.w
v=n?"Close search":"Search groups"
u=x.p
v=A.a([new A.D(E.LS,C.fUR(p,!1,p,new C.e8O(d),p,p,!1,"ALL GROUPS",A.aH(p,p,p,p,A.X(n?B.cC:B.fd,B.eu,p,p,p,20),p,p,p,new C.e8P(q),p,p,p,p,v,p)),p)],u)
if(q.w)v.push(new A.D(B.xz,A.aM(p,B.T,!0,p,!0,B.r,p,A.aN(),q.f,B.b1,p,p,p,p,2,A.br(p,new A.b4(4,A.m(14),new A.ay(B.b1.j(0.3),1,B.q,-1)),p,B.ei,p,p,p,p,!0,new A.b4(4,A.m(14),new A.ay(B.b1.j(0.25),1,B.q,-1)),p,p,p,p,p,B.fn,!0,p,p,p,p,new A.b4(4,A.m(14),D.aXo),p,p,p,p,p,p,p,p,B.kB,"Search name, code, owner\u2026",p,p,p,p,p,!0,p,p,p,!0,!0,!1,p,D.bKu,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ai,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.e8Q(q),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dm,!0,B.a4,p,B.an,p,p,p,p),p))
n=J.a6(o)
t=n.gM(o)
s=n.gM(o)===1?"":"s"
r=B.a.i(q.x).length===0?"":" matching"
v.push(new A.D(D.brR,A.d(""+t+" group"+s+r,p,p,p,p,p,p,A.l(p,p,B.b1.j(0.85),p,p,p,p,p,p,p,p,11,p,p,B.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p),p))
v.push(A.E(n.gam(o)?D.b4o:A.k6(!0,p,p,new C.e8R(q,o),n.gM(o),p,D.brs,p,p,!1,!1),1))
return A.yw(A.c8(p,B.bY,new A.an(B.W,p,B.aa,B.r,A.a([w,A.bl(!0,A.v(v,B.aj,p,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],u),p),p,!1,!1,p,p),B.SU,x.I)}}
C.ab1.prototype={
B(d){var w=null,v=A.m(16),u=A.m(16),t=A.I(B.b1.j(0.28),B.q,1),s=this.c,r=x.p
return new A.D(B.db,A.aG(!1,B.a1,!0,w,A.aL(!1,v,!0,A.eE(A.A(A.a([A.p(w,D.bGj,B.f,w,w,new A.o(B.b1.j(0.12),w,A.I(B.b1.j(0.5),B.q,1),w,w,w,B.a6),w,42,w,w,w,w,w,42),B.bf,A.E(A.v(A.a([A.d(s.e,w,w,w,w,w,w,D.f5u,w,w,w),B.bB,A.d("Owner "+s.d+" \xb7 "+s.gwB()+" people",w,1,B.a2,w,w,w,B.hf,w,w,w),A.d(s.c,w,1,B.a2,w,w,w,H.D9,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1),A.aH(w,w,w,w,D.bIj,w,w,w,this.e,w,w,w,w,"Delete group",w),G.amw],r),B.m,w,B.e,B.j,0,w,w),w,new A.o(B.fn,w,t,u,w,w,B.n),w,D.bqE,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),w)}}
C.C8.prototype={
B(d){return A.c6(this.e,new C.dca(this),null)}}
C.azI.prototype={
B(d){return new A.D(B.e4,A.c6(new A.h3(A.a([this.f,this.r],x.U)),new C.dcq(this),null),null)}}
C.acp.prototype={
a5(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=0+a7,b0=0+a8,b1=$.W(),b2=A.M()
b2.r=B.bY.gp(0)
b3.aZ(new A.a9(0,0,a9,b0),b2)
w=A.M()
b2=a7*0.5
v=this.c
w.saq(A.aUm(new A.u(b2,a8*0.48),a7*0.38,A.a([B.b1.j(0.07+v*0.06),B.K],x.O),a6,B.x,a6,a6,0))
b3.aZ(new A.a9(0,0,a9,b0),w)
u=a8*0.44
t=a7*0.28
b0=this.d*3.141592653589793
s=b0*2
for(a9=3+v*2,r=0.35+v*0.25,q=b3.a,p=8+v*4,o=0;o<3;++o){n=s+o*3.141592653589793*2/3
m=b2+Math.cos(n)*t
l=u+Math.sin(n)*t*0.55
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=B.b1.j(r).gp(0)
j=k.H()
q.drawCircle(m,l,a9,j)
j.delete()
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=B.b1.j(0.12).gp(0)
k.z=B.lq
j=k.H()
q.drawCircle(m,l,p,j)
j.delete()}i=A.M()
i.r=B.eu.j(0.18+v*0.12).gp(0)
i.b=B.ae
i.c=2
i.z=B.jk
a9=x.v
r=A.a([],a9)
h=new A.aO(b1.r,B.ap,a6,a6,r)
for(b1=s*1.6,o=0;o<=48;++o){g=o/48*3.141592653589793*1.4+b1
f=b2+Math.cos(g)*t*0.92
e=u+Math.sin(g)*t*0.42
if(o===0){p=new A.b5(f,e)
r.push(p)
k=h.f
if(k!=null)p.by(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}else{p=new A.ap(f,e)
r.push(p)
k=h.f
if(k!=null)p.by(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}}b3.aO(h,i)
d=new A.aO($.W().r,B.ap,a6,a6,A.a([],a9))
d.E(new A.b5(b2+14,u-52))
b1=u-4
d.E(new A.ap(b2-16,b1))
d.E(new A.ap(b2+2,b1))
d.E(new A.ap(b2-20,u+54))
a0=A.M()
a0.r=B.b1.j(0.1+v*0.08).gp(0)
a0.b=B.ae
a0.c=10
a0.z=B.yU
a1=A.M()
b2=this.b
a1.r=B.b1.j(0.32+b2*0.4).gp(0)
a1.b=B.ae
a1.c=2.4
a1.d=B.bO
a1.e=B.fA
for(b1=A.wZ(d),r=A.a([],x.J),p=new A.vs(b1,!1,r),k=b1.a;p.C();){a2=p.c
if(a2===0||p.f)A.ba(A.jU('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--a2
p.jo()
a3=r[a2].b
a3===$&&A.c()
a3=a3.a.length()
a4=new A.aO(k,b1.b,a6,new A.cI([new A.H6(p,a2),0,a3*b2,!0]),A.a([],a9))
j=a0.H()
a2=a4.gbL().a.snapshot()
q.drawPath((a4.e=new A.cF(a2)).a,j)
j.delete()
j=a1.H()
a2=a4.e
q.drawPath((a2==null?a4.e=new A.cF(a4.gbL().a.snapshot()):a2).a,j)
j.delete()}$.W()
a5=A.M()
a5.r=B.eu.j(0.14+v*0.2).gp(0)
for(a9=b0*4,b0=v*3,v=1.2+v*1.2,o=0;o<14;++o){b1=Math.sin(o*1.9+a9)
b2=Math.cos(o*2.3+b0)
j=a5.H()
q.drawCircle((b1*0.35+0.5)*a7,(b2*0.22+0.46)*a8,v,j)
j.delete()}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.HT.prototype={
R(){return new C.aC5(null,null)},
gdZ(){return this.d}}
C.aC5.prototype={
gtw(){var w=this.d
if(w!=null)w=w.a4r(this.a.d)||this.a.f
else w=!1
return w},
a_(){var w,v=this,u=null
v.a1()
v.d=C.c4M(v.a.c)
w=A.bj(u,B.ts,u,1,u,v)
w.fc(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.jV,u,1,u,v)
w.cH(0)
v.f!==$&&A.aP()
v.f=w
v.r=A.dv(B.hJ,new C.dJn(v))
v.hX()},
q(){var w=this,v=w.r
if(v!=null)v.a7(0)
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.btF()},
hX(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ao9(t.a.c),$async$hX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dJb(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hX,v)},
CR(d){return this.by7(d)},
by7(a6){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$CR=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:if(!r.gtw()||r.d==null){w=1
break}o=a6===B.rn
if(o&&!r.d.y){r.c.I(x.q).f.S(D.eQu)
w=1
break}if(o){n=r.d
n=n.y&&B.a.i(n.ax).length===0}else n=!1
if(n){r.c.I(x.q).f.S(D.ePY)
w=1
break}n=r.d
m=n.d
m=A.a([new A.FA(n.c,m)],x.S)
n=r.d.gF8()
B.d.v(m,new A.K(n,new C.dJ_(),A.U(n).k("K<1,+email,name(n,n)>")))
n=r.d
l=n.y?B.a.i(n.ax):""
n=A.aX(x.N)
if(o&&l.length!==0)for(k=m.length,j=0;j<m.length;m.length===k||(0,A.L)(m),++j){i=m[j]
h=i.b
if(r.d.aCC(h,l,i.a))n.J(0,h)}k=r.c
k.toString
w=3
return A.b(C.hUF(k,n,o&&r.d.y?r.d.z:null,a6,m),$async$CR)
case 3:g=a8
if(g==null||r.c==null){w=1
break}n=g.b
if(n<=0){r.c.I(x.q).f.S(B.SP)
w=1
break}m=!1
if(o)if(l.length!==0){m=r.d
k=g.a
h=m.akD(k)
m=m.aCC(k,l,h==null?"":h)}if(m){r.c.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(g.a+" already contributed to this round.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=o?4:5
break
case 4:m=r.c
m.toString
k=g.a
h=r.d
w=6
return A.b(C.hUw(m,n,h.y?h.z:null,k),$async$CR)
case 6:if(a8!==!0||r.c==null){w=1
break}case 5:m=r.d.x
k=Date.now()
h=g.a
f=g.c
e=new A.S(Date.now(),0,!1).a6()
d=r.a.d
a0=o&&r.d.y?r.d.ax:""
a1=o&&r.d.y?B.a.i(r.d.z):""
a2=r.d.akD(h)
if(a2==null)a2=""
B.d.ck(m,0,new A.pI("led_"+k,a6,n,h,f,e,d,a0,a2,a1))
if(o){o=r.d
o=o.y&&o.ax.length!==0}else o=!1
if(o){a3=r.d.akD(h)
if(a3!=null){o=r.d
o.cE5(o.ax,a3,h)}}t=8
o=r.d
o.toString
w=11
return A.b(C.HY(o),$async$CR)
case 11:t=2
w=10
break
case 8:t=7
a5=s.pop()
o=A.aa(a5)
if(o instanceof A.lF){q=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save ledger. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=10
break
case 7:w=2
break
case 10:w=12
return A.b(r.hX(),$async$CR)
case 12:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$CR,v)},
Vx(d){return this.bA8(d)},
bA8(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Vx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=r.d
if(l==null){w=1
break}t=4
w=7
return A.b(C.aYg(l.a,d.a),$async$Vx)
case 7:q=f
o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
n=d.b
o.S(A.b2(null,null,null,null,null,B.r,null,A.d(q?n+" is in the group now.":"Could not approve "+n+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.aa(k)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not approve. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:w=8
return A.b(r.hX(),$async$Vx)
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Vx,v)},
Nz(d){return this.bI8(d)},
bI8(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Nz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=r.d
if(n==null){w=1
break}p=r.c
p.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dJ9(d),p,null,!0,!0,x.y),$async$Nz)
case 3:if(f!==!0){w=1
break}t=5
w=8
return A.b(C.aoa(n.a,d.a,null,"Join request declined",r.a.d),$async$Nz)
case 8:t=2
w=7
break
case 5:t=4
m=s.pop()
q=A.aa(m)
p=r.c
if(p==null){w=1
break}p.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not decline. "+A.t(q),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:w=9
return A.b(r.hX(),$async$Nz)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Nz,v)},
cmJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.gamz(),i=B.ay.j(0.07),h=A.m(16),g=A.I(B.ay.j(0.4),B.q,1),f=A.m(12),e=x.p
f=A.a([A.A(A.a([A.p(k,A.d(""+j.length,k,k,k,k,k,k,B.rJ,k,k,k),B.f,k,k,new A.o(B.ay,k,k,f,k,k,B.n),k,k,k,k,B.fK,k,k,k),B.ab,D.bw5],e),B.m,k,B.e,B.j,0,k,k),B.N],e)
for(w=j.length,v=0;v<j.length;j.length===w||(0,A.L)(j),++v){u=j[v]
t=new A.aT(14,14)
s=new A.ay(B.b1.j(0.25),1,B.q,-1)
r=A.a([new A.x(u.b,k,B.i5,k,k,k,k,k,k,k,k,k),B.at,new A.D(B.vd,new A.cn(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.tI,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(u.a,k,B.rI,k,k,k,k,k,k,k,k,k),k)],e),k),k)],e)
q=u.f
if(q.length!==0){q=A.n3(q)
r.push(new A.D(B.vd,new A.cn(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.iA,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(q,k,B.rI,k,k,k,k,k,k,k,k,k),k)],e),k),k))}q=u.r
if(q.length!==0)r.push(new A.D(B.vd,new A.cn(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.kP,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(q,k,B.rI,k,k,k,k,k,k,k,k,k),k)],e),k),k))
q=u.w
if(q.length!==0)r.push(new A.D(B.vd,new A.cn(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.lN,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(q,k,B.rI,k,k,k,k,k,k,k,k,k),k)],e),k),k))
for(q=u.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.L)(q),++o){n=q[o]
m=J.a6(n)
l=m.h(n,"relation")
l=C.hgF(l==null?"":l)
m=m.h(n,"name")
if(m==null)m=""
r.push(new A.D(B.vd,new A.cn(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.y1,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(l+": "+m,k,B.rI,k,k,k,k,k,k,k,k,k),k)],e),k),k))}r.push(B.S)
r.push(new A.cn(B.aO,B.e,B.j,B.m,k,B.p,k,0,A.a([new A.bD(1,B.bh,A.dk(P.a0w,B.Dj,new C.dJc(this,u),A.bm(B.bo,k,k,k,B.c,k,k,k,k,k,k,k)),k),B.ab,new A.bD(1,B.bh,A.ey(B.a0e,B.J4,new C.dJd(this,u),A.dg(k,k,k,k,k,k,k,k,k,B.c7,k,k,k,k,k,D.aXC,k,k,k,k)),k)],e),k))
f.push(A.p(k,A.v(r,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(B.fn,k,new A.bO(s,s,s,s),new A.bp(t,t,t,t),k,k,B.n),k,k,k,B.km,B.bk,k,k,k))}return A.p(k,A.v(f,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.kM,B.bk,k,k,k)},
bZ3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=x.p,i=A.a([],j),h=A.aX(x.N)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=t.b
if(s===B.rn){r=t.w
if(r.length===0)r="other"
if(!h.J(0,r))continue
i.push(this.cnT(d,r))
continue}q=s===B.a40
p=q?B.c7:B.iC
s=new A.aT(12,12)
o=new A.ay(p.j(0.25),1,B.q,-1)
n=A.X(q?B.al4:B.tR,p,k,k,k,18)
if(q){m=t.d
m=A.cX(t.e,"declined",0)?m+": request declined":m+" removed"}else m="Spending: "+t.d
m=A.a([new A.x(m,k,B.iG,k,k,k,k,k,k,k,k,k)],j)
l=t.e
if(l.length!==0&&!q)m.push(new A.x(l,k,B.hf,k,k,k,k,k,k,k,k,k))
m=A.v(m,B.F,k,B.e,B.j,0,B.p)
l=q?"":"-$"+B.k.aa(t.c,2)
i.push(A.p(k,new A.cn(B.aO,B.e,B.j,B.m,k,B.p,k,0,A.a([n,B.av,new A.bD(1,B.bh,m,k),new A.x(l,k,new A.G(!0,p,k,k,k,k,k,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],j),k),B.f,k,k,new A.o(B.fn,k,new A.bO(o,o,o,o),new A.bp(s,s,s,s),k,k,B.n),k,k,k,B.cB,B.bk,k,k,k))}return i},
cnT(d,e){var w,v,u=null,t=C.hTY(d,e),s=C.hTZ(d,e,t),r=B.d.cI(t,0,new C.dJe()),q=e!=="other"&&d.y&&d.ax===e,p=d.gwB(),o=A.m(14),n=A.I((q?B.b2:B.b1).j(0.35),B.q,1),m=A.m(14),l=A.m(14),k=(q?B.b2:B.b1).j(0.14),j=A.I((q?B.b2:B.b1).j(0.5),B.q,1)
k=A.p(u,A.X(B.mu,q?B.b2:B.b1,u,u,u,20),B.f,u,u,new A.o(k,u,j,u,u,u,B.a6),u,40,u,u,u,u,u,40)
j=x.p
w=A.a([new A.dq(1,B.cn,A.d(s,u,2,B.a2,u,u,u,Q.Tg,u,u,u),u)],j)
if(q)B.d.v(w,A.a([B.bp,A.p(u,D.fly,B.f,u,u,new A.o(B.b2.j(0.2),u,u,A.m(8),u,u,B.n),u,u,u,u,B.nc,u,u,u)],j))
w=A.E(A.v(A.a([A.A(w,B.m,u,B.e,B.j,0,u,u),B.cS,A.d(""+t.length+" of "+p+" gave \xb7 tap to see who",u,u,u,u,u,u,B.hf,u,u,u)],j),B.F,u,B.e,B.j,0,B.p),1)
v=B.k.aa(r,2)
return A.p(u,A.aG(!1,B.a1,!0,m,A.aL(!1,l,!0,new A.D(B.bk,A.A(A.a([k,B.av,w,A.d("+$"+v,u,u,u,u,u,u,A.l(u,u,q?B.b2:B.b1,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.d9,A.X(B.ex,B.b1.j(0.6),u,u,u,u)],j),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.dJf(this,d,e,s,t,q),u,u,u,u,u,u,u),B.f,B.fn,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(u,u,n,o,u,u,B.n),u,u,u,B.cB,u,u,u,u)},
PJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$PJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.d
if(k==null){w=1
break}if(!r.gtw()&&!k.y){w=1
break}o=r.c
o.toString
n=r.e
n===$&&A.c()
w=3
return A.b(C.hUy(o,k,r.gtw(),n),$async$PJ)
case 3:m=e
if(m==null||r.c==null){w=1
break}w=r.gtw()?4:5
break
case 4:r.d=m
t=7
w=10
return A.b(C.HY(m),$async$PJ)
case 10:t=2
w=9
break
case 7:t=6
j=s.pop()
o=A.aa(j)
if(o instanceof A.lF){q=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save help mode. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=9
break
case 6:w=2
break
case 9:w=11
return A.b(r.hX(),$async$PJ)
case 11:case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$PJ,v)},
Qz(d,e){return this.cmh(d,e)},
cmh(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(!t.gtw()||t.d==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.hUC(s,e,d),$async$Qz)
case 3:if(g!==!0){w=1
break}w=4
return A.b(C.aoa(t.d.a,e,d,"Removed from group",t.a.d),$async$Qz)
case 4:w=5
return A.b(t.hX(),$async$Qz)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qz,v)},
a_9(d,e,f,g){return this.cca(d,e,f,g)},
cca(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_9=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:p=t.d
if(p==null){w=1
break}s=t.c
s.toString
r=t.e
r===$&&A.c()
q=t.gtw()
w=3
return A.b(C.hUA(s,d,p,q,e,f,t.gtw()?new C.dJa(t,p):null,r,g),$async$a_9)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a_9,v)},
acP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.aMQ(s,r.e),$async$acP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acP,v)},
WB(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$WB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.d
if(i==null){w=1
break}t=4
m=B.a.i(i.e)
l=new A.a8P(-1,1,!0,null,null,D.ec3,D.ec1,null,new A.b1Q(A.a([],x.B),A.T(x.N,x.Y)),null,null)
k=A.h9G("NGMY-GROUP:"+m.toUpperCase(),1,-1)
if(k.a!==B.S3){m=k.c
m.toString
A.ba(m)}m=k.b
l.x=m
l.z=m.a
l.aUw()
q=l
w=7
return A.b(q.anp(720),$async$WB)
case 7:p=e
if(p==null||r.c==null){w=1
break}w=8
return A.b(A.rP(J.eT(B.dD.gaM(p)),"ngmy_group_"+i.e+".png"),$async$WB)
case 8:o=e
m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
h=s.pop()
n=A.aa(h)
m=r.c
if(m==null){w=1
break}m.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save QR: "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$WB,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d,e=h.e
e===$&&A.c()
w=h.f
w===$&&A.c()
v=A.c6(new A.h3(A.a([e,w],x.U)),new C.dJh(h),g)
u=f==null
t=u?g:f.e
s=u?g:new C.dJi(d,f)
r=u?g:f.y
if(!h.gtw()){q=u?g:f.y
q=q===!0}else q=!0
p=x.p
q=A.a([new A.D(E.LS,C.fUR(t,r===!0,e,new C.dJj(d),s,h.gcbN(),q,"GROUP",g),g)],p)
if(!u){u=A.a([new A.D(D.br8,new C.bgo(e,A.A(A.a([h.azM("In",f.gaHt()),h.azM("Out",f.gwN()),h.azM("Balance",f.gaHt()-f.gwN()),h.b55("People",f.gwB(),!1)],p),B.m,g,B.e,B.j,0,g,g),g),g)],p)
if(h.gtw())u.push(new A.D(B.fJ,A.A(A.a([A.E(new C.C8("Contribution",D.alE,e,new C.dJk(h),!1,g),1),B.ab,A.E(new C.C8("Spending",B.vt,e,new C.dJl(h),!0,g),1)],p),B.m,g,B.e,B.j,0,g,g),g))
u.push(B.S)
t=A.a([],p)
for(s=[D.edB,D.eej,D.eeU],o=0;o<3;++o){n=s[o]
r=n.a
m=r===2?0:6
l=h.w
k=!1
if(r===1){j=h.d
if(j!=null){k=h.a
i=k.d
k=B.a.i(j.c.toLowerCase())===B.a.i(i.toLowerCase())||k.f}}k=k?f.gamz().length:0
t.push(new A.bD(1,B.bh,new A.D(new A.Q(0,0,m,0),new C.bgp(n.b,l===r,e,w,new C.dJm(h,n),k,g),g),g))}u.push(new A.D(B.fV,A.A(t,B.m,g,B.e,B.j,0,g,g),g))
u.push(A.E(h.bCx(f),1))
B.d.v(q,u)}else q.push(D.bwT)
return A.yw(A.c8(g,B.bY,new A.an(B.W,g,B.aa,B.r,A.a([v,A.bl(!0,A.v(q,B.m,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],p),g),g,!1,!1,g,g),B.SU,x.I)},
b55(d,e,f){var w=null,v=A.d(d,w,w,w,w,w,w,D.a7b,w,w,w)
return A.E(A.v(A.a([v,B.bB,A.d(f?"$"+B.k.aa(e,2):B.o.u(B.k.N(e)),w,w,w,w,w,w,D.f3W,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
azM(d,e){return this.b55(d,e,!0)},
bCx(d){var w,v,u,t,s,r,q=this,p=null
switch(q.w){case 1:w=A.a([q.cgd(d,d.d,d.c,"Owner",d.f,new C.dJ2(q,d))],x.p)
if(q.gtw()&&d.gamz().length!==0)w.push(q.cmJ(d))
v=d.gF8()
B.d.v(w,new A.K(v,new C.dJ3(q,d),A.U(v).k("K<1,r>")))
if(d.gwB()>=100&&q.gtw()){v=q.e
v===$&&A.c()
w.push(new A.D(B.AU,new C.C8("Unlock 100+ members",B.pS,v,new C.dJ4(q,d),!1,p),p))}return A.cz(w,p,B.tA,p,p,B.ah,!1)
case 2:w=A.m(16)
v=A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,24)],x.V)
u=d.e
v=A.av(A.p(p,A.EE(B.c,"NGMY-GROUP:"+B.a.i(u).toUpperCase(),B.a5u,1,p,B.a5v,!0,B.bT,200,-1),B.f,p,p,new A.o(B.c,p,p,w,v,p,B.n),p,p,p,p,B.bC,p,p,p),p,p,p)
w=x.p
u=A.av(A.aE(p,A.A(A.a([A.d(u,p,p,p,p,p,p,D.eYJ,p,p,p)],w),B.m,p,B.e,B.Q,0,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dJ5(q,d),p,p,p,p,p,p,!1,B.a8),p,p,p)
t=q.e
t===$&&A.c()
return A.cz(A.a([v,B.aQ,u,B.N,D.b3Z,B.aA,new C.C8("Copy invite code",B.fL,t,q.gc3y(),!1,p),B.S,new C.C8("Download QR",B.hA,t,q.gbKI(),!0,p),B.ac,D.fcI],w),p,B.tA,p,p,B.ah,!1)
default:w=q.a
s=C.byr(d,w.e,w.d)
r=B.d.cI(s,0,new C.dJ6())
w=A.m(12)
v=A.I(B.b1.j(0.28),B.q,1)
u=x.p
u=A.a([A.p(p,A.A(A.a([D.bIN,B.av,A.E(A.v(A.a([A.d(s.length===0?"Your contributions: none yet":"Your contributions: $"+B.k.aa(r,2)+" ("+s.length+")",p,p,p,p,p,p,B.m2,p,p,p),B.at,A.d("Group spending: $"+B.k.aa(d.gwN(),2)+" \xb7 Balance $"+B.k.aa(d.gaHt()-d.gwN(),2),p,p,p,p,p,p,B.hf,p,p,p)],u),B.F,p,B.e,B.j,0,B.p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(B.fn,p,v,w,p,p,B.n),p,p,p,B.e4,B.bk,p,p,p)],u)
if(d.x.length===0)u.push(D.feC)
else B.d.v(u,q.bZ3(d))
return A.cz(u,p,B.tA,p,p,B.ah,!1)}},
b_X(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.hNm(d,e,f),j=k>0,i=d.a4I(e,f)
if(d.y){w=d.ax
v=w.length!==0&&!d.Sf(e,w)}else v=!1
w=A.m(14)
u=A.I(B.b1.j(0.2),B.q,1)
t=A.m(14)
s=A.m(14)
r=B.b1.j(0.12)
q=A.I(B.b1.j(0.4),B.q,1)
if(v)p=B.oM
else p=j?B.h8:B.ng
if(v)o=B.iC
else o=j?B.b1:B.c1
q=A.p(l,A.X(p,o,l,l,l,20),B.f,l,l,new A.o(r,l,q,l,l,l,B.a6),l,40,l,l,l,l,l,40)
r=A.d(e,l,l,l,l,l,l,B.iG,l,l,l)
o=A.d(g+" \xb7 "+f,l,l,l,l,l,l,H.D9,l,l,l)
if(v)p="Has not given this round \xb7 gave "+d.anm(e,f)+"x \xb7 missed "+i
else{p=""+i
p=j?"Gave "+d.anm(e,f)+"x ($"+B.k.aa(k,2)+") \xb7 missed "+p:"Has not given yet \xb7 missed "+p}if(v)n=B.iC.j(0.9)
else if(j)n=B.b1.j(0.85)
else n=i>0?B.iC.j(0.85):B.iC.j(0.85)
m=x.p
m=A.a([q,B.av,A.E(A.v(A.a([r,o,B.bB,A.d(p,l,l,l,l,l,l,A.l(l,l,n,l,l,l,l,l,l,l,l,10,l,l,B.a5,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],m),B.F,l,B.e,B.j,0,B.p),1)],m)
if(a0!=null)m.push(A.aH(l,l,l,l,A.X(B.ajS,B.h_.j(0.85),l,l,l,l),l,l,l,a0,l,l,l,l,"Remove member",l))
else m.push(A.X(B.ex,B.b1.j(0.6),l,l,l,l))
return A.p(l,A.aG(!1,B.a1,!0,t,A.aL(!1,s,!0,new A.D(B.bk,A.A(m,B.m,l,B.e,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,a1,l,l,l,l,l,l,l),B.f,B.fn,0,l,l,l,l,l,B.ag),B.f,l,l,new A.o(l,l,u,w,l,l,B.n),l,l,l,B.cB,l,l,l,l)},
cgd(d,e,f,g,h,i){return this.b_X(d,e,f,g,h,null,i)}}
C.aC6.prototype={
R(){return new C.aC7(A.z1(B.Xv,B.nC,B.u1))}}
C.aC7.prototype={
c3A(d){var w,v,u,t,s,r
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=A.fBl(t==null?"":t)
if(s!=null){this.e=!0
this.c.toString
r=$.rS().gbg()
if(r!=null&&r.c!=null&&r.pv())r.O(s)
return}}},
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eC(w,w,w,!0,!0,B.w,w,1,w,w,w,!1,w,!1,w,w,A.aH(w,w,w,w,B.NH,w,w,w,new C.dJo(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fqS,w,w,w,1,w,!0),B.w,A.z0(this.d,B.bS,this.gc3z()),w,!1,!1,w,w)}}
C.bgq.prototype={
B(d){var w=this,v=null,u=A.m(28),t=A.I(B.b1.j(0.22),B.q,1.1),s=A.a([new A.ac(0,B.G,B.w.j(0.35),B.cJ,14)],x.V),r=A.aH(v,v,v,v,D.bGh,v,v,v,w.d,v,v,v,v,"Back",v),q=w.e,p=q!=null&&q.length!==0,o=w.c
r=A.a([r,A.E(p?A.v(A.a([A.d(o,v,v,v,v,v,v,D.eXc,B.L,v,v),B.bB,A.aG(!1,B.a1,!0,v,A.aL(!1,A.m(8),!0,new A.D(B.eF,A.d(q,v,1,B.a2,v,v,v,D.f1j,B.L,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)],x.p),B.m,v,B.e,B.Q,0,B.p):A.d(o,v,1,B.a2,v,v,v,E.aQ6,B.L,v,v),1)],x.p)
q=w.z
if(q!=null)r.push(q)
else if(w.r)r.push(new C.beQ(w.w,w.x,w.y,v))
else r.push(B.zo)
return A.p(v,A.A(r,B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.bY,v,t,u,s,v,B.n),v,v,v,v,B.YF,v,v,v)}}
C.beQ.prototype={
B(d){var w=this,v=new C.dcI(w),u=w.d
if(u==null||!w.c)return v.$1(0)
return A.c6(u,new C.dcH(w,v),null)}}
C.bgp.prototype={
B(d){return A.c6(new A.h3(A.a([this.e,this.f],x.U)),new C.dgA(this),null)}}
C.bgm.prototype={
B(d){var w=this
return A.c6(new A.h3(A.a([w.c,w.d,w.e],x.U)),new C.dgy(w),null)}}
C.bgo.prototype={
B(d){return A.c6(this.c,new C.dgz(this),null)}}
C.Pu.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a,n=e.b,m=A.bx(new A.a9(0,0,0+o,0+n),B.jI)
$.W()
w=A.M()
v=p.b
w.r=B.b1.j(0.06*v).gp(0)
w.b=B.ae
w.c=2
w.z=B.rj
d.aD(m,w)
u=A.M()
u.r=B.eu.j(0.35+0.45*v).gp(0)
u.z=B.jk
t=o+n
s=2*t
r=B.k.F(p.d*s,s)
if(r<o)q=new A.u(r,0)
else if(r<t)q=new A.u(o,r-o)
else{t=2*o+n
q=r<t?new A.u(t-r,n):new A.u(0,s-r)}d.ae(q,3.5+v*2,u)
v=A.M()
v.r=B.eu.j(0.9).gp(0)
d.ae(q,1.5,v)
if(!p.c)return
v=new C.dgx(p,d)
v.$3(E.aFV,!1,!1)
o-=10
v.$3(new A.u(o,8),!0,!1)
n-=8
v.$3(new A.u(10,n),!1,!0)
v.$3(new A.u(o,n),!0,!0)},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bgn.prototype={}
C.biT.prototype={
ow(d,e){var w,v,u,t,s,r,q=A.af("[^A-Z0-9]",!0,!1,!1,!1),p=A.aK(e.a.toUpperCase(),q,"")
q=p.length
if(q===0)return B.as
w=new A.fd("")
v=new A.fd("")
for(u=0;u<q;++u){t=p[u]
s=A.af("[A-Z]",!0,!1,!1,!1)
if(s.b.test(t)&&w.a.length<3)w.a+=t
else{s=A.af("[0-9]",!0,!1,!1,!1)
if(s.b.test(t)&&v.a.length<5)v.a+=t}}q=w.a
s=v.a
r=(q.charCodeAt(0)==0?q:q)+(s.charCodeAt(0)==0?s:s)
return new A.bb(r,A.h8(B.bw,r.length),B.aN)}}
C.bhi.prototype={
gbNh(){var w,v=this,u=C.hQE(v.d,v.e,v.f)
switch(v.ay.a){case 0:w=u
break
case 1:w=x.C
w=A.B(new A.e8(u,w),w.k("J.E"))
break
case 2:w=x.o
w=A.B(new A.e8(u,w),w.k("J.E"))
break
default:w=null}return w},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.gbNh(),m=p.d,l=p.e,k=p.f,j=C.byr(m,l,k),i=B.d.cI(j,0,new C.dmH()),h=m.a4I(l,k)
if(m.y){w=m.ax
v=w.length!==0&&!m.Sf(l,w)}else v=!1
if(m.ax.length===0)u=D.awo
else{w=A.U(j).k("a2<1>")
u=A.B(new A.a2(j,new C.dmI(p),w),w.k("J.E"))}if(!v)t=h>0&&i<=0
else t=!0
w=x.p
k=A.a([A.c6(p.x,new C.dmJ(p,t),o),B.ac,A.d(l,o,o,o,o,o,o,B.hg,B.L,o,o),A.d(p.r+" \xb7 "+k,o,o,o,o,o,o,B.hf,B.L,o,o)],w)
B.d.v(k,A.a([B.at,A.d("Joined "+B.d.gL(p.w.bS().u(0).split(" ")),o,o,o,o,o,o,H.D9,B.L,o,o)],w))
k.push(B.aQ)
l=A.m(14)
s=A.I((t?B.iC:B.b1).j(0.35),B.q,1)
if(v)r="MISSED THIS HELP ROUND"
else r=h>0?"MISSED CONTRIBUTIONS":"CONTRIBUTION STATUS"
r=A.d(r,o,o,o,o,o,o,A.l(o,o,t?B.iC:B.b1.j(0.9),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.2,o,o,o,o,o,o),o,o,o)
if(v)q='Not recorded for "'+B.a.i(m.z)+'". They will be marked missed when help mode ends.'
else if(h>0){q=h===1?"":"s"
q=""+h+" missed contribution"+q+" total \xb7 $"+B.k.aa(i,2)+" contributed overall"}else q="Total contributed: $"+B.k.aa(i,2)
q=A.a([r,B.N,A.d(q,o,o,o,o,o,o,L.T5,B.L,o,o)],w)
if(m.y&&B.a.i(m.z).length!==0)B.d.v(q,A.a([B.N,A.d("Active help: "+B.a.i(m.z),o,o,o,o,o,o,A.l(o,o,B.b2.j(0.95),o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),B.L,o,o)],w))
if(u.length!==0)B.d.v(q,A.a([B.am,A.d("This round: $"+B.k.aa(B.d.cI(u,0,new C.dmK()),2),o,o,o,o,o,o,D.eXm,B.L,o,o)],w))
k.push(A.p(o,A.v(q,B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.fn,o,s,l,o,o,B.n),o,o,o,o,B.bC,o,o,o))
k.push(B.aQ)
m=A.E(A.d("CONTRIBUTION HISTORY",o,o,o,o,o,o,A.l(o,o,B.b1.j(0.85),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.4,o,o,o,o,o,o),o,o,o),1)
l=p.ay
k.push(A.A(A.a([m,A.BF(o,B.fn,A.X(D.bCM,l===D.a8I?B.b1.j(0.75):B.iT,o,o,o,20),new C.dmL(p),B.J,p.CW,B.af,"Filter history",x.E)],w),B.m,o,B.e,B.j,0,o,o))
k.push(B.N)
if(n.length===0){if(l===D.aTS)m="No missed contributions for this member."
else m=l===D.aTR?"No recorded contributions for this member.":"No history yet for this member."
k.push(A.d(m,o,o,o,o,o,o,B.kB,o,o,o))}else B.d.v(k,new A.K(n,new C.dmM(p,d),A.U(n).k("K<1,r>")))
k.push(B.ac)
k.push(A.bK(!1,D.aQv,o,o,!0,o,o,new C.dmN(d),o,o))
return A.cz(k,p.c,o,o,o,B.ah,!1)},
au_(d,e){var w,v=null,u=A.a([],x.p),t=this.ay===e
if(t)u.push(D.bGk)
else u.push(B.od)
u.push(B.ab)
w=t?B.iT:B.ad
u.push(A.d(d,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,v,v,v,t?B.H:B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.zv(A.A(u,B.m,v,B.e,B.j,0,v,v),48,e,x.E)},
bWF(d,e){var w,v,u,t,s,r,q,p,o=this,n=null
if(e instanceof C.Pa){w=e.b
v=w.w.length!==0
if(v&&w.e.length!==0)u=w.e
else{t=o.d.z
u=t.length!==0&&v?t:w.d}v=A.m(12)
t=A.I(B.b1.j(0.22),B.q,1)
s=x.p
return A.p(n,A.A(A.a([D.bKn,B.av,A.E(A.v(A.a([A.d(u,n,2,B.a2,n,n,n,D.aOD,n,n,n),B.cS,A.d(B.d.gL(w.f.bS().u(0).split(".")),n,n,n,n,n,n,D.a7b,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1),B.ab,A.d("$"+B.k.aa(w.c,2),n,n,n,n,n,n,D.f4T,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fn,n,t,v,n,n,B.n),n,n,n,B.cB,B.bk,n,n,n)}x.a.a(e)
v=A.m(16)
t=e.c
s=A.I(B.iC.j(t?0.35:0.5),B.q,1)
r=A.X(t?B.oI:B.cC,B.iC,n,n,n,18)
q=A.d(e.b,n,2,B.a2,n,n,n,D.aOD,n,n,n)
p=x.p
p=A.a([r,B.av,A.E(A.v(A.a([q,B.cS,A.d(t?"Active help round":B.d.gL(e.a.bS().u(0).split(".")),n,n,n,n,n,n,D.a7b,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
if(o.ch&&!t&&e.d.length!==0&&o.cx!=null)p.push(A.bK(!1,D.feV,n,n,!0,n,n,new C.dmG(o,d,e),n,A.fv(n,n,n,n,n,n,n,n,n,n,n,B.iT,n,n,n,B.au,n,B.fq,n,n,n,n,n,B.k1,n,n)))
else p.push(A.d(t?"PENDING":"MISSED",n,n,n,n,n,n,D.eZv,n,n,n))
return A.p(n,A.A(p,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fn,n,s,v,n,n,B.n),n,n,n,B.cB,B.bk,n,n,n)},
gdd(){return this.f}}
C.or.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.b1.j(0.4),B.q,1.3),t=A.a([new A.ac(0,B.G,B.b1.j(0.22),B.J,28)],x.V)
return A.p(w,A.b3(new A.D(B.Ym,this.c,w),w,w,new C.Pu(0.85,this.d,0,w),B.au),B.f,w,w,new A.o(B.bY,w,u,v,t,w,B.n),w,w,w,F.xv,w,w,w,w)}}
C.bfT.prototype={
gks(d){return this.b},
gdc(d){return this.c}}
C.aAk.prototype={
R(){var w=$.aw()
return new C.aAl(new A.ar(B.as,w),new A.ar(B.as,w),A.a([],x.i))}}
C.aAl.prototype={
gavP(){var w,v=this.d
if(v===$){w=this.a.d
v=this.d=new A.ar(new A.bb(w,B.b4,B.aN),$.aw())}return v},
gb_R(){var w,v=this.a.c
v=A.a([new A.FA(v.c,v.d)],x.S)
w=this.a.c.gF8()
B.d.v(v,new A.K(w,new C.df9(),A.U(w).k("K<1,+email,name(n,n)>")))
w=x.K
v=A.B(new A.a2(v,new C.dfa(this),w),w.k("J.E"))
return v},
q(){var w=this,v=w.gavP(),u=v.U$=$.aw()
v.P$=0
v=w.e
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.a2()},
c3D(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e.a.a,k=A.af("\\D",!0,!1,!1,!1),j=A.aK(l,k,"")
l=m.gavP()
k=B.a.fD(B.a.i(l.a.a),A.af("\\s+",!0,!1,!1,!1))
if(new A.a2(k,new C.dfb(),A.U(k).k("a2<1>")).gM(0)<2){m.m(new C.dfc(m))
return}if(j.length<7){m.m(new C.dfd(m))
return}if(m.r.length===0){m.m(new C.dfe(m))
return}k=m.f
if(B.a.i(k.a.a).length<5){m.m(new C.dff(m))
return}w=m.gb_R()
v=m.c
v.toString
l=B.a.i(l.a.a)
u=m.r
k=B.a.i(k.a.a)
t=A.a([],x.A)
for(s=m.x,r=s.length,q=x.N,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
n=o.a
if(n>=0&&n<w.length){n=w[n]
t.push(A.F(["relation",o.b,"name",n.b,"email",n.a],q,q))}}A.a5(v,!1).O(new C.bfT(l,j,u,k,t))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gb_R(),a0=new C.dfr(),a1=f.a.c
a1=C.aNK(B.vD,"The group owner, "+a1.d+", will see this and has to approve you.","Ask to join "+a1.e)
w=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.gavP(),e,e,e,e,e,2,a0.$1("Full name *"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.ky,e,e,e,e)
v=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.e,e,e,e,e,e,2,a0.$1("Phone number *"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,B.jm,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.an,e,e,e,e)
u=f.r
if(u.length===0)u=e
t=a0.$1("State you live in *")
s=x.t
r=A.a([],s)
for(q=x.Q,p=0;p<50;++p){o=B.k_[p]
r.push(new A.eD(o,new A.x(o,e,e,e,e,e,e,e,e,e,e,e),B.eX,e,q))}n=x.N
m=x.p
r=A.a([a1,B.aA,w,B.S,v,B.S,A.nt(t,B.fn,u,!0,r,e,new C.dfl(f),B.dm,e,n),B.S,A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.f,e,e,e,e,e,2,a0.$1("Home address * (street, city)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dm,!0,B.a4,e,B.ky,e,e,e,e),B.aQ,D.fl8,B.at,D.fnW,B.N],m)
if(d.length===0)r.push(D.fgI)
for(a1=f.x,w=x.G,v=x.c,u=x.u,l=0;l<a1.length;++l){t=a1[l]
k=a0.$1("Who")
j=A.a([],s)
for(p=0;p<6;++p){i=D.dgB[p]
j.push(new A.eD(i,new A.x(C.hgF(i),e,e,e,e,e,e,e,e,e,e,e),B.eX,e,q))}t=A.nt(k,B.fn,t.b,!0,j,e,new C.dfm(f,l),B.qh,e,n)
k=a1[l].a
k=k<d.length?k:e
j=a0.$1("Person in group")
h=A.a([],u)
for(g=0;g<d.length;++g)h.push(new A.eD(g,new A.x(d[g].b,e,e,e,e,e,e,B.a2,e,e,e,e),B.eX,e,v))
r.push(new A.D(B.cB,new A.cn(B.aO,B.e,B.j,B.m,e,B.p,e,0,A.a([new A.a7(108,e,t,e),B.ab,new A.bD(1,B.bh,A.nt(j,B.fn,k,!0,h,e,new C.dfn(f,l),B.qh,e,w),e),A.aH(e,e,e,e,B.NE,e,e,e,new C.dfo(f,l),e,e,e,e,e,e)],m),e),e))}if(d.length!==0)r.push(new A.bI(B.a3,e,e,A.he(D.bJx,D.fcO,new C.dfp(f),e),e))
a1=f.w
if(a1!=null)r.push(new A.D(B.hY,A.d(a1,e,e,e,e,e,e,D.f8Y,e,e,e),e))
r.push(B.ac)
r.push(A.dk(B.a0h,D.fjN,f.gc3C(),A.bm(B.b1,e,e,e,B.w,B.oc,e,e,new A.b7(A.m(16),B.Y),e,e,e)))
r.push(A.bK(!1,B.de,e,e,!0,e,e,new C.dfq(a2),e,e))
return A.cd(A.v(r,B.aj,e,B.e,B.j,0,B.p),B.r,e,B.y,e,e,e,e,B.ah)}}
C.aKz.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aKA.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aL9.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
var z=a.updateTypes(["az<~>()","or(Y,~(~()))","or(Y,m3)","Pa(pI)","JG(te)","H(wh,wh)","ab1(Y,H)","~(lV)","~(Cc)","ai<p3<Cc>>(Y)","r(wh)","or(Y)","~()"])
C.c4N.prototype={
$1(d){return d.a===this.a},
$S:123}
C.c4P.prototype={
$1(d){return d.c===this.a},
$S:123}
C.c4O.prototype={
$1(d){var w=this.a
return d.alG(w)&&d.c!==w},
$S:123}
C.c52.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:368}
C.c4J.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:368}
C.c4R.prototype={
$1(d){return d.a===this.a},
$S:123}
C.c4S.prototype={
$1(d){return d.e===this.a},
$S:123}
C.c4W.prototype={
$1(d){return d.c===this.a},
$S:123}
C.c50.prototype={
$1(d){return d.aF5(this.a)},
$S:123}
C.c4U.prototype={
$1(d){var w=this.a
return d.alG(w)&&d.c!==w},
$S:123}
C.c4Q.prototype={
$1(d){return d.e===this.a},
$S:123}
C.c4K.prototype={
$1(d){return d.a},
$S:467}
C.c4I.prototype={
$1(d){return d.a===this.a},
$S:123}
C.c4Z.prototype={
$1(d){return d.a===this.a},
$S:180}
C.c4L.prototype={
$1(d){return d.a===this.a&&d.e==="pending"},
$S:180}
C.c4X.prototype={
$1(d){return d.a===this.a},
$S:180}
C.c4Y.prototype={
$1(d){return d.a===this.a},
$S:180}
C.fbC.prototype={
$1(d){var w,v,u,t
if(d.b!==B.rn)return!1
w=d.d
if(B.a.i(w).toLowerCase()===this.a)return!0
v=this.b
u=v.length!==0
if(u&&d.x===v)return!0
if(u){t=this.c.akD(w)
return t!=null&&B.a.i(t.toLowerCase())===v}return!1},
$S:216}
C.fbB.prototype={
$2(d,e){return d+e.c},
$S:144}
C.fgC.prototype={
$1(d){return new C.Pa(d,d.f)},
$S:z+3}
C.fgD.prototype={
$1(d){return new C.JG(d.e,!1,d.a,d.f)},
$S:z+4}
C.fgE.prototype={
$2(d,e){return e.a.aL(0,d.a)},
$S:z+5}
C.dJB.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hX()},
$S:12}
C.dJr.prototype={
$0(){var w=this,v=w.a
v.w=w.b
v.x=w.c
v.z=w.d},
$S:0}
C.dJq.prototype={
$1(d){var w=null,v=A.m(22),u=B.b1.j(0.4),t=A.d("The owner of this group, ${found.ownerName}, has to approve you before you can enter. You will find the group under YOU JOINED as soon as you are approved.",w,w,w,w,w,w,B.zA,w,w,w)
return A.ek(A.a([A.bK(!1,B.TD,w,w,!0,w,w,new C.dJp(d),w,w)],x.p),w,w,B.fn,t,w,w,w,new A.b7(v,new A.ay(u,1,B.q,-1)),D.fo2,w)},
$S:20}
C.dJp.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dJv.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=B.ct.aw(0,t)
w=u.e
w===$&&A.c()
w=w.x
w===$&&A.c()
u=u.f
u===$&&A.c()
u=u.x
u===$&&A.c()
return A.b3(v,v,v,new C.acp(t,w,u,v),B.f1)},
$S:68}
C.dJx.prototype={
$0(){return A.iM(this.a,null)},
$S:0}
C.dJw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hw(u.b,new C.apJ(s.c,s.d,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hX(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJy.prototype={
$1(d){var w,v=this.a,u=d.b,t=u.gwB(),s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b4O(d.a,C.hbU(u.gamz().length,"",u,new C.dJu(v,this.b,d),w,s,"Owner \xb7 "+t+"/100 seats"))},
$S:754}
C.dJu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hw(u.b,new C.HT(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hX(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJz.prototype={
$0(){return this.a.I(x.q).f.S(D.eSr)},
$S:0}
C.dJA.prototype={
$1(d){var w,v=this.a,u=J.ad(v.w),t=d.b,s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b4O(d.a+u,C.hbU(0,"",t,new C.dJt(v,this.b,d),w,s,"Member \xb7 Owner "+t.d))},
$S:754}
C.dJt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hw(u.b,new C.HT(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hX(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJs.prototype={
$2(d,e){var w,v=this.a.r
v===$&&A.c()
v=v.x
v===$&&A.c()
w=B.ct.aw(0,B.k.D(v*1.4-this.b*0.08,0,1))
return A.dc(A.dU(this.c,new A.u(0,(1-w)*18)),w)},
$S:212}
C.e8I.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e8H.prototype={
$1(d){var w=A.a([d.b,d.e,d.d,d.c,d.a],x.s),v=d.r,u=A.U(v).k("K<1,n>")
B.d.v(w,new A.K(v,new C.e8F(),u))
B.d.v(w,new A.K(v,new C.e8G(),u))
return B.a.t(B.d.aI(w," ").toLowerCase(),this.a)},
$S:123}
C.e8F.prototype={
$1(d){return d.b},
$S:467}
C.e8G.prototype={
$1(d){return d.a},
$S:467}
C.e8E.prototype={
$1(d){var w=null,v=this.a,u=v.b
v=A.d('Permanently delete "'+(u.length===0?v.e:u)+'" ('+v.e+") owned by "+v.d+". This cannot be undone.",w,w,w,w,w,w,B.hD,w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.e8C(d),w,w),A.bH(B.wh,new C.e8D(d),A.bm(B.bI,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fn,v,w,w,w,w,D.fx2,w)},
$S:20}
C.e8C.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e8D.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e8N.prototype={
$2(d,e){var w=null,v=this.a,u=v.d
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.acp(1,u,v,w),B.f1)},
$S:68}
C.e8O.prototype={
$0(){return A.iM(this.a,null)},
$S:0}
C.e8P.prototype={
$0(){var w=this.a
w.m(new C.e8M(w))},
$S:0}
C.e8M.prototype={
$0(){var w=this.a,v=w.w
w.w=!v
if(v){w.f.bO(0,B.c5)
w.x=""}},
$S:0}
C.e8Q.prototype={
$1(d){var w=this.a
return w.m(new C.e8L(w,d))},
$S:2}
C.e8L.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e8R.prototype={
$2(d,e){var w=J.q(this.b,e),v=this.a
return new C.ab1(w,new C.e8J(v,w),new C.e8K(v,w),null)},
$S:z+6}
C.e8J.prototype={
$0(){return this.a.a_1(this.b)},
$S:0}
C.e8K.prototype={
$0(){return this.a.NF(this.b)},
$S:0}
C.dca.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.e.x
o===$&&A.c()
w=A.m(14)
v=A.m(14)
u=p.r
t=u?B.K:B.b1.j(0.92)
s=A.I(B.b1.j(u?0.55+o*0.35:0.9),B.q,1.4)
o=u?q:A.a([new A.ac(0,B.G,B.b1.j(0.25+o*0.25),B.J,16)],x.V)
r=u?B.b1:B.bY
r=A.X(p.d,r,q,q,q,18)
return A.aG(!1,B.a1,!0,q,A.aL(!1,w,!0,A.eE(A.A(A.a([r,B.ab,A.d(p.c,q,q,q,q,q,q,A.l(q,q,u?B.eu:B.bY,q,q,q,q,q,q,q,q,13,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.bb,B.j,0,q,q),q,new A.o(t,q,s,v,o,q,B.n),46,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p.f,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)},
$S:140}
C.dcq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.f.x
l===$&&A.c()
w=A.m(18)
v=m.r.x
v===$&&A.c()
u=A.m(18)
t=A.aq(B.fn,B.b1,0.06+l*0.05)
t.toString
t=A.a([t,B.fn.j(0.95)],x.O)
s=A.I(B.b1.j(0.28+l*0.25),B.q,1.2)
r=x.V
q=A.a([new A.ac(0,B.G,B.b1.j(0.08+l*0.12),B.J,18)],r)
p=x.p
p=A.a([A.p(n,D.bM_,B.f,n,n,new A.o(B.b1.j(0.14),n,A.I(B.b1.j(0.55),B.q,1),n,A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,12)],r),n,B.a6),n,46,n,n,n,n,n,46),B.bf,A.E(A.v(A.a([A.d(m.c.e,n,n,n,n,n,n,D.f_5,n,n,n),B.bB,A.d(m.d,n,n,n,n,n,n,B.hf,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
r=m.w
if(r>0){o=A.m(12)
p.push(A.p(n,A.d(""+r+" new",n,n,n,n,n,n,B.uC,n,n,n),B.f,n,n,new A.o(B.ay,n,n,o,n,n,B.n),n,n,n,B.iU,B.fK,n,n,n))}else if(m.x.length!==0)p.push(D.e5i)
p.push(A.X(B.ex,B.b1.j(0.7),n,n,n,n))
return A.aG(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.eE(A.A(p,B.m,n,B.e,B.j,0,n,n),n,new A.o(n,n,s,u,q,new A.a8(B.ax,B.aC,B.x,t,n,n),B.n),n,B.bC,n),n,n,new C.Pu(0.35+l*0.4,!0,v,n),B.au),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.e,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ag)},
$S:140}
C.dJn.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hX()},
$S:12}
C.dJb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJ_.prototype={
$1(d){return new A.FA(d.a,d.b)},
$S:468}
C.dJ9.prototype={
$1(d){var w=null,v=A.d(this.a.b+" will not be added to the group. They can ask again later.",w,w,w,w,w,w,B.hD,w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dJ7(d),w,w),A.bH(B.J4,new C.dJ8(d),A.bm(B.ay,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fn,v,w,w,w,w,D.flN,w)},
$S:20}
C.dJ7.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dJ8.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dJc.prototype={
$0(){return this.a.Vx(this.b)},
$S:0}
C.dJd.prototype={
$0(){return this.a.Nz(this.b)},
$S:0}
C.dJe.prototype={
$2(d,e){return d+e.c},
$S:144}
C.dJf.prototype={
$0(){var w=this,v=w.a.c
v.toString
return C.hUD(v,w.b,w.c,w.d,w.e,w.f)},
$S:0}
C.dJa.prototype={
$1(d){return this.bj5(d)},
bj5(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.b
t.ba0(d)
w=2
return A.b(C.HY(t),$async$$1)
case 2:w=3
return A.b(u.a.hX(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:93}
C.dJh.prototype={
$2(d,e){var w=null,v=this.a,u=v.e
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.acp(1,u,v,w),B.f1)},
$S:68}
C.dJi.prototype={
$0(){return C.aMQ(this.a,this.b.e)},
$S:0}
C.dJj.prototype={
$0(){return A.iM(this.a,null)},
$S:0}
C.dJk.prototype={
$0(){return this.a.CR(B.rn)},
$S:0}
C.dJl.prototype={
$0(){return this.a.CR(B.a4_)},
$S:0}
C.dJm.prototype={
$0(){var w=this.a
return w.m(new C.dJg(w,this.b))},
$S:0}
C.dJg.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
C.dJ2.prototype={
$0(){var w=this.b
return this.a.a_9(w.c,w.f,w.d,"Owner")},
$S:0}
C.dJ3.prototype={
$1(d){var w=this.a,v=w.gtw()?new C.dJ0(w,d):null
return w.b_X(this.b,d.b,d.a,"Member",d.c,v,new C.dJ1(w,d))},
$S:1931}
C.dJ1.prototype={
$0(){var w=this.b
return this.a.a_9(w.a,w.c,w.b,"Member")},
$S:0}
C.dJ0.prototype={
$0(){var w=this.b
return this.a.Qz(w.b,w.a)},
$S:0}
C.dJ4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.c
r.toString
t=u.b
w=2
return A.b(C.ao6(r,t.gwB(),t.a,s.a.f,t.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJ5.prototype={
$0(){var w=this.a.c
w.toString
return C.aMQ(w,this.b.e)},
$S:0}
C.dJ6.prototype={
$2(d,e){return d+e.c},
$S:144}
C.dJo.prototype={
$0(){return A.iM(this.a,null)},
$S:0}
C.dcI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.c,r=s?1+d*0.12:1,q=s?"Help mode active":"Activate help mode",p=s?B.b2.j(0.28+d*0.22):B.c.j(0.06),o=s?B.iT.j(0.85+d*0.15):B.b1.j(0.35)
o=A.I(o,B.q,s?2:1.1)
w=s?A.a([new A.ac(1+d*2,B.G,B.b2.j(0.45+d*0.4),B.J,16+d*14),new A.ac(0,B.G,B.iT.j(0.25+d*0.35),B.J,8+d*6)],x.V):u
v=s?B.iT:B.b1.j(0.85)
return A.aH(u,u,u,u,A.ec(B.A,A.p(u,A.X(B.mu,v,u,u,s?A.a([new A.cQ(B.b2.j(0.95),B.J,10+d*8)],x.r):u,20),B.f,u,u,new A.o(p,u,o,u,w,u,B.a6),u,38,u,u,u,u,u,38),r,u,u),u,u,u,t.e,u,u,u,u,q,u)},
$S:151}
C.dcH.prototype={
$2(d,e){var w=this.a.d.x
w===$&&A.c()
return this.b.$1(w)},
$S:60}
C.dgA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.e.x
l===$&&A.c()
w=A.m(14)
v=m.d
u=v?0.55+l*0.35:0.25+l*0.15
t=m.f.x
t===$&&A.c()
s=A.m(14)
r=v?B.b1.j(0.12+l*0.06):B.fn.j(0.85)
l=A.I(v?B.b1.j(0.55+l*0.25):B.b1.j(0.18),B.q,1)
q=A.a([A.av(A.d(m.c,n,n,n,n,n,n,A.l(n,n,v?B.eu:B.c1,n,n,n,n,n,n,n,n,12,n,n,B.H,n,n,!0,n,0.6,n,n,n,n,n,n),n,n,n),n,n,n)],x.p)
v=m.w
if(v>0){p=A.m(11)
o=A.I(B.bY,B.q,1.5)
q.push(A.ao(n,A.p(n,A.d(""+v,n,n,n,n,n,n,B.uC,B.L,n,n),B.f,n,D.aYT,new A.o(B.ay,n,o,p,n,n,B.n),n,n,n,n,B.nc,n,n,n),n,n,n,6,-6,n))}return A.aG(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.eE(new A.an(B.W,n,B.aa,B.f,q,n),n,new A.o(r,n,l,s,n,n,B.n),40,n,n),n,n,new C.Pu(u,!0,t,n),B.au),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.r,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ag)},
$S:140}
C.dgy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.d,f=g.x
f===$&&A.c()
w=0.35+f*0.45
f=h.e.x
f===$&&A.c()
v=f*3.141592653589793*2
u=A.m(24)
t=w*0.3
s=A.I(B.b1.j(0.35+t),B.q,1.3)
r=x.V
q=A.a([new A.ac(0,B.G,B.b1.j(0.12+w*0.15),B.J,24)],r)
p=h.c.x
p===$&&A.c()
o=x.p
n=A.a([],o)
for(t=0.55+t,m=0;m<3;++m){l=v+m*3.141592653589793*2/3
k=Math.cos(l)
l=Math.sin(l)
j=6+g.x*4
n.push(A.dU(A.p(i,i,B.f,i,i,new A.o(B.eu.j(t),i,i,i,A.a([new A.ac(0,B.G,B.b1.j(0.45),B.J,10)],r),i,B.a6),i,j,i,i,i,i,i,j),new A.u(38*k,28*l)))}t=A.a([B.b1.j(0.55),B.b1.j(0.08),B.K],x.O)
r=A.a([new A.ac(0,B.G,B.b1.j(0.45),B.J,28)],r)
n.push(A.p(i,A.X(B.h8,B.eu,i,i,A.a([new A.cQ(B.b1.j(0.9),B.J,22)],x.r),46),B.f,i,i,new A.o(i,i,i,i,r,new A.bT(B.A,0.5,B.x,i,0,t,i,i),B.a6),i,78,i,i,i,i,i,78))
return A.b3(A.p(i,A.v(A.a([A.ec(B.A,new A.an(B.A,i,B.aa,B.r,n,i),0.85+p*0.25,i,i),B.S,D.fbH,B.N,D.fkj,B.aQ,A.A(A.a([A.E(new C.C8("Create group",B.hy,g,h.f,!1,i),1),B.av,A.E(new C.C8("Join code",B.yk,g,h.r,!0,i),1)],o),B.m,i,B.e,B.j,0,i,i),B.S,new C.C8("Scan invite QR",B.iX,g,h.w,!0,i)],o),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.bY,i,s,u,q,i,B.n),i,i,i,i,D.bsa,i,i,i),i,i,new C.Pu(0.55+w*0.35,!0,f,i),B.au)},
$S:68}
C.dgz.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.c.x
t===$&&A.c()
w=A.m(18)
return A.b3(A.p(v,u.d,B.f,v,v,new A.o(B.bY,v,A.I(B.b1.j(0.35),B.q,1),w,A.a([new A.ac(0,B.G,B.b1.j(0.12+t*0.1),B.J,16)],x.V),v,B.n),v,v,v,v,B.bC,v,v,v),v,v,new C.Pu(0.4+t*0.35,!1,0,v),B.au)},
$S:68}
C.dgx.prototype={
$3(d,e,f){var w,v=e?-1:1,u=f?-1:1,t=new A.aO($.W().r,B.ap,null,null,A.a([],x.v)),s=d.a,r=d.b
t.E(new A.b5(s,r))
w=r+14*u
t.E(new A.ap(s+7*v,w))
t.E(new A.ap(s-2*v,w))
t.E(new A.ap(s+6*v,r+28*u))
r=A.M()
r.r=B.b1.j(0.35*this.a.b).gp(0)
r.b=B.ae
r.c=1.3
r.d=B.bO
this.b.aO(t,r)},
$S:649}
C.fmf.prototype={
$1(d){return new A.D(new A.Q(0,0,0,A.aI(d,B.eD,x.w).w.f.d),new A.e0(new C.fme(this.a,this.b),null),null)},
$S:58}
C.fme.prototype={
$2(d,e){var w=null,v=C.aNK(B.h8,"Pick your group code: 3 letters + 1\u20135 numbers (e.g. ABC123).","Create lightning group"),u=this.b,t=A.a([new C.biT()],x.F),s=C.Kf("ABC12345"),r=this.a,q=r.a,p=x.p
return new C.or(A.v(A.a([v,B.aQ,A.aM(w,B.T,!0,w,!0,B.r,w,A.aN(),u,w,w,w,w,w,2,s.bak(q.length===0?w:q),B.y,!0,w,!0,w,!1,w,B.ai,w,w,t,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new C.fmb(r,e),w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,D.f2C,!0,B.a4,w,B.m0,w,w,w,w),B.N,D.ffQ,B.by,A.A(A.a([A.E(A.bK(!1,G.J0,w,w,!0,w,w,new C.fmc(d),w,w),1),B.ab,A.E(A.bH(D.fbl,new C.fmd(r,u,e,d),A.bm(B.b1,w,w,w,B.bY,w,B.ck,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],p),B.m,w,B.e,B.j,0,w,w)],p),B.aj,w,B.e,B.Q,0,B.p),!0,w)},
$S:z+1}
C.fmb.prototype={
$1(d){var w=this.a
if(w.a.length!==0)this.b.$1(new C.fma(w))},
$S:2}
C.fma.prototype={
$0(){return this.a.a=""},
$S:0}
C.fmc.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fmd.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a).toUpperCase()
if(!C.hjv(v)){w.c.$1(new C.fm9(w.a))
return}A.a5(w.d,!1).O(v)},
$S:0}
C.fm9.prototype={
$0(){this.a.a="Use exactly 3 letters + 1\u20135 numbers (e.g. ABC123)."},
$S:0}
C.fmz.prototype={
$1(d){var w,v,u,t=this,s=null,r=A.aI(d,B.eD,x.w).w,q=C.aNK(t.a,t.c,t.b),p=t.d,o=A.l(s,s,B.c,s,s,s,s,s,s,s,s,16,s,s,B.P,s,s,!0,s,t.f,s,s,s,s,s,s)
o=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),p,s,s,s,s,s,2,C.Kf(t.r),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fmw(d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,o,!0,B.a4,s,B.m0,s,s,s,s)
w=A.E(A.bK(!1,G.J0,s,s,!0,s,s,new C.fmx(d),s,s),1)
v=A.bm(B.b1,s,s,s,B.bY,s,B.ck,s,new A.b7(A.m(14),B.Y),s,s,s)
u=x.p
return new A.D(new A.Q(0,0,0,r.f.d),new C.or(A.v(A.a([q,B.aQ,o,B.by,A.A(A.a([w,B.ab,A.E(A.bH(A.d(t.w,s,s,s,s,s,s,B.cy,s,s,s),new C.fmy(p,d),v),2)],u),B.m,s,B.e,B.j,0,s,s)],u),B.aj,s,B.e,B.Q,0,B.p),!0,s),s)},
$S:58}
C.fmw.prototype={
$1(d){var w=B.a.i(d)
if(w.length!==0)A.a5(this.a,!1).O(w)},
$S:2}
C.fmx.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fmy.prototype={
$0(){var w=B.a.i(this.a.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fmv.prototype={
$1(d){return this.a&&this.b.t(0,d.b)},
$S:197}
C.fms.prototype={
$1(d){return!this.a.$1(d)},
$S:197}
C.fmt.prototype={
$1(d){var w=this
return new A.D(new A.Q(0,0,0,A.aI(d,B.eD,x.w).w.f.d),new A.e0(new C.fmr(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y),null),null)},
$S:58}
C.fmr.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.b,a2=B.a.i(a1.a.a).toLowerCase(),a3=d.c
if(a2.length===0)w=a3
else{v=A.U(a3).k("a2<1>")
w=A.B(new A.a2(a3,new C.fmj(a2),v),v.k("J.E"))}v=d.d
u=A.U(w).k("a2<1>")
t=A.B(new A.a2(w,new C.fmk(v),u),u.k("J.E"))
u=d.a
if(!B.d.b5(t,new C.fml(u)))u.a=t.length!==0?B.d.gL(t).b:""
s=x.p
r=A.a([],s)
q=d.e
if(q){p=u.b
o=A.p(a0,D.bOS,B.f,a0,a0,new A.o(B.b1.j(0.14),a0,A.I(B.b1.j(0.5),B.q,1),a0,A.a([new A.ac(0,B.G,B.b1.j(0.25),B.J,12)],x.V),a0,B.a6),a0,46,a0,a0,a0,a0,a0,46)
n=A.m(14)
m=p?B.b1.j(0.22):B.c.j(0.06)
l=A.I(p?B.b1:B.b1.j(0.35),B.q,1)
r.push(A.A(A.a([o,B.b6,A.aG(!1,B.a1,!0,a0,A.aL(!1,n,!0,A.p(a0,A.X(B.fd,p?B.eu:B.b1,a0,a0,a0,a0),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,46,a0,a0,a0,a0,a0,46),a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fmm(u,a5),a0,a0,a0,a0,a0,a0,a0),B.f,B.K,0,a0,a0,a0,a0,a0,B.ag)],s),B.m,a0,B.e,B.j,0,a0,a0))}else r.push(C.aNK(B.vt,"Log what left the group case.","Record spending"))
if(q){p=A.a([B.at,D.fsb,B.at,D.frg],s)
o=d.f
if(o!=null&&B.a.i(o).length!==0){n=B.b2.j(0.12)
m=A.m(12)
l=A.I(B.b2.j(0.45),B.q,1)
B.d.v(p,A.a([B.S,A.p(a0,A.d("Help mode: "+B.a.i(o),a0,a0,a0,a0,a0,a0,O.a6Z,B.L,a0,a0),B.f,a0,a0,new A.o(n,a0,l,m,a0,a0,B.n),a0,a0,a0,a0,B.bT,a0,a0,a0)],s))}B.d.v(r,p)}r.push(B.aA)
if(q){p=A.a([],s)
if(u.b)B.d.v(p,A.a([A.aM(a0,B.T,!0,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.Kf("Search member\u2026"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,new C.fmn(a5),a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dm,!0,B.a4,a0,B.an,a0,a0,a0,a0),B.S],s))
p.push(A.d("WHO CONTRIBUTED",a0,a0,a0,a0,a0,a0,A.l(a0,a0,B.b1.j(0.85),a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.H,a0,a0,!0,a0,1.4,a0,a0,a0,a0,a0,a0),a0,a0,a0))
p.push(B.N)
if(a3.length===0)p.push(D.fxP)
else if(d.r)p.push(D.fif)
else if(w.length===0)p.push(D.ffb)
else{a1=A.a([],s)
for(o=w.length,k=0;k<w.length;w.length===o||(0,A.L)(w),++k){j=w[k]
n=j.b
m=v.$1(j)?n+" \u2713 paid":n
l=u.a
i=v.$1(j)?a0:new C.fmo(u,a5,j)
h=B.d_.j(0.18)
g=B.c.j(0.06)
f=u.a===n
e=f?B.bY:B.ad
f=f?B.b1:B.b1.j(0.25)
a1.push(A.j5(a0,g,h,new A.x(m,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),new A.G(!0,e,a0,a0,a0,a0,a0,B.P,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),i,l===n,B.b1,a0,new A.ay(f,1,B.q,-1),a0))}p.push(new A.cS(D.aZ5,A.cd(A.bW(B.bz,a1,B.bq,8,8),B.r,a0,B.y,a0,a0,a0,a0,B.ah),a0))}B.d.v(r,p)}else B.d.v(r,A.a([A.aM(a0,B.T,!1,a0,!0,B.r,a0,A.aN(),d.w,a0,a0,a0,a0,a0,2,C.Kf("What was spent"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dm,!0,B.a4,a0,B.an,a0,a0,a0,a0)],s))
r.push(B.ac)
a1=d.x
r.push(A.aM(a0,B.T,!q,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.Kf("Amount ($)"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,B.dV,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.T7,!0,B.a4,a0,B.an,a0,a0,a0,a0))
r.push(B.by)
r.push(A.A(A.a([A.E(A.bK(!1,G.J0,a0,a0,!0,a0,a0,new C.fmp(a4),a0,a0),1),B.ab,A.E(A.bH(D.fxm,new C.fmq(u,a1,q,d.w,a3,d.y,a4),A.bm(B.b1,a0,a0,a0,B.bY,a0,B.ck,a0,new A.b7(A.m(14),B.Y),a0,a0,a0)),2)],s),B.m,a0,B.e,B.j,0,a0,a0))
return new C.or(A.v(r,B.aj,a0,B.e,B.Q,0,B.p),!0,a0)},
$S:z+1}
C.fmj.prototype={
$1(d){var w=this.a
return B.a.t(d.b.toLowerCase(),w)||B.a.t(d.a.toLowerCase(),w)},
$S:197}
C.fmk.prototype={
$1(d){return!this.a.$1(d)},
$S:197}
C.fml.prototype={
$1(d){return d.b===this.a.a},
$S:197}
C.fmm.prototype={
$0(){return this.b.$1(new C.fmi(this.a))},
$S:0}
C.fmi.prototype={
$0(){var w=this.a
return w.b=!w.b},
$S:0}
C.fmn.prototype={
$1(d){return this.a.$1(new C.fmh())},
$S:2}
C.fmh.prototype={
$0(){},
$S:0}
C.fmo.prototype={
$1(d){return this.b.$1(new C.fmg(this.a,this.c))},
$S:9}
C.fmg.prototype={
$0(){return this.a.a=this.b.b},
$S:0}
C.fmp.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fmq.prototype={
$0(){var w,v,u,t=this,s=A.d5(B.a.i(t.b.a.a))
if(s==null)s=0
w=t.c
if(w){v=B.a.i(t.a.a)
u=v.length===0?"\u2014":v}else{v=B.a.i(t.d.a.a)
u=v.length===0?"\u2014":v}v=!1
if(w)if(t.e.length!==0){w=t.a.a
w=B.a.i(w).length===0||t.f.t(0,w)}else w=v
else w=v
if(w)return
A.a5(t.r,!1).O(new C.bgn(u,s,""))},
$S:0}
C.fmu.prototype={
$0(){var w=this.a,v=w.U$=$.aw()
w.P$=0
w=this.b
w.U$=v
w.P$=0
w=this.c
w.U$=v
w.P$=0},
$S:11}
C.fm_.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.xv,new C.or(A.v(A.a([A.av(A.p(w,D.bKV,B.f,w,w,new A.o(B.h_.j(0.15),w,A.I(B.h_.j(0.55),B.q,1),w,A.a([new A.ac(0,B.G,B.h_.j(0.25),B.J,16)],x.V),w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aA,D.fni,B.N,A.d(this.a,w,w,w,w,w,w,D.f5U,B.L,w,w),B.at,A.d(this.b,w,w,w,w,w,w,B.hf,B.L,w,w),B.S,D.fgQ,B.by,A.A(A.a([A.E(A.bK(!1,D.fnF,w,w,!0,w,w,new C.flY(d),w,w),1),B.ab,A.E(A.bH(D.flL,new C.flZ(d),A.bm(B.h_,w,w,w,B.c,w,B.ck,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.aj,w,B.e,B.Q,0,B.p),!0,w),w)},
$S:58}
C.flY.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.flZ.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.flS.prototype={
$2(d,e){return d+e.c},
$S:144}
C.flT.prototype={
$1(d){return d.w===this.a.ax},
$S:216}
C.flU.prototype={
$1(d){var w=this
return new A.D(new A.Q(12,0,12,A.aI(d,B.eD,x.w).w.f.d),A.oL(new C.flR(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),!0,0.72,0.92,0.45,!1,null),null)},
$S:58}
C.flR.prototype={
$2(d,e){var w=this,v={}
v.a=D.a8I
return new A.e0(new C.flQ(v,e,w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),null)},
$S:1933}
C.flQ.prototype={
$2(d,e){var w=this,v=w.a,u=v.a,t=w.ay
t=t==null?null:new C.flO(t,d,e)
return new C.or(new C.bhi(w.b,w.c,w.d,w.e,w.f,w.r,w.w,u,w.ax,new C.flP(v,e),t,null),!1,null)},
$S:z+1}
C.flP.prototype={
$1(d){return this.b.$1(new C.flM(this.a,d))},
$S:z+8}
C.flM.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.flO.prototype={
$1(d){return this.bjH(d)},
bjH(d){var w=0,v=A.j(x.H),u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a.$1(d),$async$$1)
case 2:if(u.b.e!=null)u.c.$1(new C.flN())
return A.h(null,v)}})
return A.i($async$$1,v)},
$S:93}
C.flN.prototype={
$0(){},
$S:0}
C.dmH.prototype={
$2(d,e){return d+e.c},
$S:144}
C.dmI.prototype={
$1(d){return d.w===this.a.d.ax},
$S:216}
C.dmJ.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a.x.x
r===$&&A.c()
w=B.b1.j(0.12+r*0.08)
v=A.I(B.b1.j(0.45+r*0.25),B.q,1)
r=A.a([new A.ac(0,B.G,B.b1.j(0.2+r*0.15),B.J,18)],x.V)
u=this.b
t=u?B.oM:B.h8
return A.av(A.p(s,A.X(t,u?B.iC:B.b1,s,s,s,32),B.f,s,s,new A.o(w,s,v,s,r,s,B.a6),s,64,s,s,s,s,s,64),s,s,s)},
$S:208}
C.dmK.prototype={
$2(d,e){return d+e.c},
$S:144}
C.dmL.prototype={
$1(d){var w=this.a
return A.a([w.au_("All",D.a8I),w.au_("Contributions",D.aTR),w.au_("Missed",D.aTS)],x.T)},
$S:z+9}
C.dmM.prototype={
$1(d){return this.a.bWF(this.b,d)},
$S:z+10}
C.dmN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.c
w=4
return A.b(C.hUv(u.b,t.b),$async$$0)
case 4:w=e===!0?2:3
break
case 2:w=5
return A.b(u.a.cx.$1(t.d),$async$$0)
case 5:case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.flt.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.xv,new C.or(A.v(A.a([A.av(A.p(w,D.bPm,B.f,w,w,new A.o(B.b2.j(0.14),w,A.I(B.b2.j(0.55),B.q,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aA,D.fc1,B.S,A.d(this.a,w,w,w,w,w,w,D.eZN,B.L,w,w),B.S,D.ffy,B.by,A.A(A.a([A.E(A.bK(!1,D.faC,w,w,!0,w,w,new C.flr(d),w,w),1),B.ab,A.E(A.bH(D.fcW,new C.fls(d),A.bm(B.b2,w,w,w,B.bY,w,B.ck,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.aj,w,B.e,B.Q,0,B.p),!1,w),w)},
$S:58}
C.flr.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fls.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.flw.prototype={
$1(d){var w=null,v=x.p,u=A.a([A.av(A.p(w,D.bPa,B.f,w,w,new A.o(B.b1.j(0.14),w,A.I(B.b1.j(0.55),B.q,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aA,D.fwW,B.ac,C.fXw("Member",this.a),C.fXw("Amount","$"+B.k.aa(this.b,2))],v),t=this.c
if(t!=null&&B.a.i(t).length!==0)u.push(C.fXw("Help for",B.a.i(t)))
u.push(B.S)
u.push(D.fnf)
u.push(B.by)
u.push(A.A(A.a([A.E(A.bK(!1,D.fq0,w,w,!0,w,w,new C.flu(d),w,w),1),B.ab,A.E(A.bH(D.fvV,new C.flv(d),A.bm(B.b1,w,w,w,B.bY,w,B.ck,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w))
return new A.D(F.xv,new C.or(A.v(u,B.aj,w,B.e,B.Q,0,B.p),!0,w),w)},
$S:58}
C.flu.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.flv.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.flI.prototype={
$0(){var w=this,v=w.a,u=w.b.a.a,t=w.c.a.a,s=w.d.a.a,r=w.e.a.a
v.z=B.a.i(u)
v.Q=B.a.i(t)
v.as=B.a.i(s)
v.at=B.a.i(r)},
$S:0}
C.flJ.prototype={
$1(d){var w=this
return new A.D(new A.Q(0,0,0,A.aI(d,B.eD,x.w).w.f.d),A.oL(new C.flH(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,d),!0,0.82,0.94,0.5,!1,null),null)},
$S:58}
C.flH.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.b,q=C.heQ(r,t.a),p=A.d(r?"Help mode is live":"Set up group help mode",s,s,s,s,s,s,B.dl,B.L,s,s),o=x.p
p=A.a([q,B.N,p,B.am,A.d(r?"Members see the green icon and your payment details. Turn off when the round ends.":"Fill in where members send money. These details stay saved for next time.",s,s,s,s,s,s,I.a7e,B.L,s,s),B.aQ,A.d("HELP DETAILS",s,s,s,s,s,s,A.l(s,s,B.b2.j(0.9),s,s,s,s,s,s,s,s,11,s,s,B.H,s,s,!0,s,1.4,s,s,s,s,s,s),s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.c,s,s,s,s,s,2,C.Kf("What are you collecting for?"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,2,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dm,!0,B.a4,s,B.an,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.d,s,s,s,s,s,2,C.Kf("Cash App"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dm,!0,B.a4,s,B.an,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.e,s,s,s,s,s,2,C.Kf("Zelle"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dm,!0,B.a4,s,B.an,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.f,s,s,s,s,s,2,C.Kf("Phone number \u2014 questions or confirm payment"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,B.a21,s,s,B.jm,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dm,!0,B.a4,s,B.an,s,s,s,s),B.by],o)
q=t.r
w=t.w
v=t.x
if(r){r=A.bH(D.fig,new C.flC(q,w,v),A.bm(B.h_,s,s,s,B.c,s,B.ck,s,new A.b7(A.m(14),B.Y),s,s,s))
u=B.b2.j(0.55)
B.d.v(p,A.a([r,B.N,A.dT(D.fic,new C.flD(q,v,w),A.dg(s,s,s,s,s,s,s,s,s,B.iT,s,s,B.ck,s,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),s,s,s,s))],o))}else{r=B.b1.j(0.45)
B.d.v(p,A.a([A.dT(D.faN,new C.flE(q,v,w),A.dg(s,s,s,s,s,s,s,s,s,B.b1,s,s,B.ck,s,new A.b7(A.m(14),B.Y),new A.ay(r,1,B.q,-1),s,s,s,s)),B.N,A.bH(D.fve,new C.flF(q,w,v),A.bm(B.b2,s,s,s,B.bY,s,B.ck,s,new A.b7(A.m(14),B.Y),s,s,s))],o))}p.push(B.N)
p.push(A.bK(!1,G.J0,s,s,!0,s,s,new C.flG(v),s,s))
return new C.or(A.cz(p,e,s,s,s,B.ah,!1),!0,s)},
$S:z+2}
C.flC.prototype={
$0(){var w,v,u
this.a.$0()
w=this.b
v=B.a.i(w.ax)
u=w.z
if(v.length!==0&&!B.d.t(w.CW,v)){w.c03(v,u)
B.d.J(w.CW,v)}w.y=!1
w.ax=""
w.ay=null
A.a5(this.c,!1).O(w)},
$S:0}
C.flD.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.flE.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.flF.prototype={
$0(){var w,v=this
v.a.$0()
w=v.b
if(B.a.i(w.z).length===0){v.c.I(x.q).f.S(D.eQx)
return}w.cCj()
A.a5(v.c,!1).O(w)},
$S:0}
C.flG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.flK.prototype={
$0(){var w=this,v=w.a,u=v.U$=$.aw()
v.P$=0
v=w.b
v.U$=u
v.P$=0
v=w.c
v.U$=u
v.P$=0
v=w.d
v.U$=u
v.P$=0},
$S:11}
C.flB.prototype={
$1(d){return new A.D(F.xv,A.oL(new C.flA(this.a,this.b,d),!0,0.72,0.9,0.45,!1,null),null)},
$S:58}
C.flA.prototype={
$2(d,e){var w=this,v=null,u=A.a([C.heQ(!0,w.a),B.S,D.fxI,B.am,D.fmM,B.aQ],x.p),t=w.b,s=B.a.i(t.z)
if(s.length!==0)u.push(C.fdA(w.c,B.li,"COLLECTING FOR",v,v,s))
s=B.a.i(t.Q)
if(s.length!==0)u.push(C.fdA(w.c,B.hL,"CASH APP",new C.flx(t),"Open Cash App",s))
s=B.a.i(t.as)
if(s.length!==0)u.push(C.fdA(w.c,B.jY,"ZELLE",v,v,s))
s=t.at
if(B.a.i(s).length!==0)u.push(C.fdA(w.c,B.vE,"PHONE NUMBER",new C.fly(t),"Call",A.n3(s)))
if(B.a.i(t.z).length===0&&B.a.i(t.Q).length===0&&B.a.i(t.as).length===0&&B.a.i(t.at).length===0)u.push(D.e5u)
u.push(B.ac)
u.push(A.bK(!1,D.aQv,v,v,!0,v,v,new C.flz(w.c),v,v))
return new C.or(A.cz(u,e,v,v,v,B.ah,!1),!1,v)},
$S:z+2}
C.flx.prototype={
$0(){return C.bzn(this.a.Q)},
$S:0}
C.fly.prototype={
$0(){return C.byn(this.a.at)},
$S:0}
C.flz.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fdC.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a.x
q===$&&A.c()
w=this.b
v=w?B.b2.j(0.22+q*0.18):B.b1.j(0.14)
u=w?B.iT.j(0.85+q*0.15):B.b1.j(0.5)
u=A.I(u,B.q,w?2:1)
t=w?A.a([new A.ac(1+q,B.G,B.b2.j(0.4+q*0.35),B.J,18+q*10)],x.V):r
s=w?B.iT:B.b1
return A.av(A.p(r,A.X(B.mu,s,r,r,w?A.a([new A.cQ(B.b2.j(0.95),B.J,12+q*8)],x.r):r,r),B.f,r,r,new A.o(v,r,u,r,t,r,B.a6),r,56,r,r,r,r,r,56),r,r,r)},
$S:208}
C.fdB.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(new A.fC(t.a)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.S(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fm1.prototype={
$1(d){return new A.FA(d.a,d.b)},
$S:468}
C.fm2.prototype={
$1(d){var w=this.a
if(B.a.i(w.d).toLowerCase()!==B.a.i(d.b).toLowerCase()){w=w.x
w=w.length!==0&&w===B.a.i(d.a.toLowerCase())}else w=!0
return w},
$S:197}
C.fm3.prototype={
$2(d,e){return d+e.c},
$S:144}
C.fm4.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="x in all \xb7 missed ",j=A.aI(a1,l,x.w).w,i=m.b,h=i.length,g=m.c.length,f=B.k.aa(m.d,2),e=m.e,d=e?" \xb7 round is open":"",a0=x.p
d=A.a([C.aNK(B.mu,""+h+" of "+g+" gave \xb7 total $"+f+d,m.a),B.ac,A.bw(A.m(8),A.m_(B.dq,l,l,10,l,m.f,D.aVU),B.aq),B.aQ,A.d("GAVE ("+i.length+")",l,l,l,l,l,l,D.f19,l,l,l),B.am],a0)
if(i.length===0)d.push(D.feg)
for(h=i.length,g=m.r,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){v=i[w]
f=new A.aT(12,12)
u=B.b2.j(0.07)
t=new A.aT(12,12)
s=new A.ay(B.b2.j(0.3),1,B.q,-1)
r=v.a
q=r.b
p=v.b
o=p.f.bS()
r=r.a
d.push(A.aL(!1,new A.bp(f,f,f,f),!0,A.p(l,new A.cn(B.aO,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bME,B.av,new A.bD(1,B.bh,A.v(A.a([new A.x(q,l,B.hq,l,l,l,l,l,l,l,l,l),new A.x(""+A.bG(o)+"/"+A.bQ(o)+"/"+A.bA(o)+" \xb7 gave "+g.anm(q,r)+k+g.a4I(q,r)+" \xb7 tap for receipt",l,B.D7,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l),new A.x("$"+B.k.aa(p.c,2),l,I.Tn,l,l,l,l,l,l,l,l,l)],a0),l),B.f,l,l,new A.o(u,l,new A.bO(s,s,s,s),new A.bp(t,t,t,t),l,l,B.n),l,l,l,B.eO,B.bT,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.fm0(a1,g,v),l,l,l,l,l,l,l))}d.push(B.ac)
i=m.w
h=i.length
d.push(A.d(e?"NOT YET ("+h+")":"DID NOT GIVE ("+h+")",l,l,l,l,l,l,D.eZD,l,l,l))
d.push(B.am)
if(i.length===0)d.push(D.fkO)
for(h=i.length,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){n=i[w]
f=B.iC.j(0.07)
e=new A.aT(12,12)
s=new A.ay(B.iC.j(0.3),1,B.q,-1)
u=n.b
t=n.a
d.push(A.p(l,new A.cn(B.aO,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bHt,B.av,new A.bD(1,B.bh,A.v(A.a([new A.x(u,l,B.hq,l,l,l,l,l,l,l,l,l),new A.x("gave "+g.anm(u,t)+k+g.a4I(u,t),l,B.D7,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l)],a0),l),B.f,l,l,new A.o(f,l,new A.bO(s,s,s,s),new A.bp(e,e,e,e),l,l,B.n),l,l,l,B.eO,B.bT,l,l,l))}return new A.cS(new A.aY(0,1/0,0,j.a.b*0.88),new C.or(A.cd(A.v(d,B.F,l,B.e,B.j,0,B.p),B.r,l,B.y,l,l,l,l,B.ah),!0,l),l)},
$S:1934}
C.fm0.prototype={
$0(){return C.hUB(this.a,this.b,this.c.b)},
$S:0}
C.flX.prototype={
$2(d,e){var w=null
return new A.D(B.vf,A.A(A.a([new A.a7(96,w,A.d(d,w,w,w,w,w,w,B.zw,w,w,w),w),A.E(A.d(e,w,w,w,w,w,w,B.a7m,w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:141}
C.flW.prototype={
$1(d){var w=this,v=null,u=w.b,t=w.c,s=A.a([C.aNK(B.h9,w.a,"Receipt"),B.ac,u.$2("From",t.d),u.$2("For",w.d),u.$2("Amount","$"+B.k.aa(t.c,2)),u.$2("Date",w.e)],x.p),r=t.e
if(r.length!==0)s.push(u.$2("Note",r))
r=w.f
s.push(u.$2("Group",r.e+" \xb7 owner "+r.d))
t=t.r
s.push(u.$2("Recorded by",t.length===0?r.c:t))
s.push(B.ac)
s.push(A.dk(S.BL,D.fsQ,new C.flV(w.r,d),A.bm(B.b1,v,v,v,B.w,B.zn,v,v,v,v,v,v)))
return new C.or(A.v(s,B.F,v,B.e,B.Q,0,B.p),!0,v)},
$S:z+11}
C.flV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fJ(new A.fC(u.a)),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.S(D.eQR)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.flL.prototype={
$1(d){var w=null,v=x.w
return new A.D(new A.Q(0,0,0,A.aI(d,w,v).w.f.d),new A.cS(new A.aY(0,1/0,0,A.aI(d,w,v).w.a.b*0.92),new C.or(new C.aAk(this.a,this.b,this.c,w),!0,w),w),w)},
$S:58}
C.df9.prototype={
$1(d){return new A.FA(d.a,d.b)},
$S:468}
C.dfa.prototype={
$1(d){return d.a!==B.a.i(this.a.a.e.toLowerCase())},
$S:197}
C.dfb.prototype={
$1(d){return d.length!==0},
$S:3}
C.dfc.prototype={
$0(){return this.a.w="Write your first and last name."},
$S:0}
C.dfd.prototype={
$0(){return this.a.w="Your phone number is needed."},
$S:0}
C.dfe.prototype={
$0(){return this.a.w="Choose the state you live in."},
$S:0}
C.dff.prototype={
$0(){return this.a.w="Your home address is needed."},
$S:0}
C.dfr.prototype={
$1(d){return C.Kf(d)},
$S:289}
C.dfl.prototype={
$1(d){var w=this.a
return w.m(new C.dfk(w,d))},
$S:32}
C.dfk.prototype={
$0(){var w=this.b
if(w==null)w=""
return this.a.r=w},
$S:0}
C.dfm.prototype={
$1(d){var w=this.a
return w.m(new C.dfj(w,this.b,d))},
$S:32}
C.dfj.prototype={
$0(){var w=this.a.x,v=this.b,u=this.c
if(u==null)u="mother"
u=new A.adG(w[v].a,u)
w[v]=u
return u},
$S:0}
C.dfn.prototype={
$1(d){var w=this.a
return w.m(new C.dfi(w,this.b,d))},
$S:206}
C.dfi.prototype={
$0(){var w=this.a.x,v=this.b,u=w[v],t=this.c
if(t==null)t=-1
u=new A.adG(t,u.b)
w[v]=u
return u},
$S:0}
C.dfo.prototype={
$0(){var w=this.a
return w.m(new C.dfh(w,this.b))},
$S:0}
C.dfh.prototype={
$0(){return B.d.cC(this.a.x,this.b)},
$S:0}
C.dfp.prototype={
$0(){var w=this.a
return w.m(new C.dfg(w))},
$S:0}
C.dfg.prototype={
$0(){return this.a.x.push(new A.adG(-1,"mother"))},
$S:0}
C.dfq.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0};(function aliases(){var w=C.aKz.prototype
w.btF=w.q
w=C.aKA.prototype
w.btG=w.q
w=C.aL9.prototype
w.buh=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=C.aC8.prototype,"gbHg","zP",0)
w(u,"gbYv","XP",0)
w(u,"gc3B","YM",0)
w(u=C.aC5.prototype,"gcbN","PJ",0)
w(u,"gc3y","acP",0)
w(u,"gbKI","WB",0)
v(C.aC7.prototype,"gc3z","c3A",7)
w(C.aAl.prototype,"gc3C","c3D",12)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.hU,[C.c4N,C.c4P,C.c4O,C.c4R,C.c4S,C.c4W,C.c50,C.c4U,C.c4Q,C.c4K,C.c4I,C.c4Z,C.c4L,C.c4X,C.c4Y,C.fbC,C.fgC,C.fgD,C.dJB,C.dJq,C.dJy,C.dJA,C.e8H,C.e8F,C.e8G,C.e8E,C.e8Q,C.dJn,C.dJ_,C.dJ9,C.dJa,C.dJ3,C.dcI,C.dgx,C.fmf,C.fmb,C.fmz,C.fmw,C.fmv,C.fms,C.fmt,C.fmj,C.fmk,C.fml,C.fmn,C.fmo,C.fm_,C.flT,C.flU,C.flP,C.flO,C.dmI,C.dmL,C.dmM,C.flt,C.flw,C.flJ,C.flB,C.fm1,C.fm2,C.fm4,C.flW,C.flL,C.df9,C.dfa,C.dfb,C.dfr,C.dfl,C.dfm,C.dfn])
v(A.ki,[C.c52,C.c4J,C.fbB,C.fgE,C.dJv,C.dJs,C.e8N,C.e8R,C.dca,C.dcq,C.dJe,C.dJh,C.dJ6,C.dcH,C.dgA,C.dgy,C.dgz,C.fme,C.fmr,C.flS,C.flR,C.flQ,C.dmH,C.dmJ,C.dmK,C.flH,C.flA,C.fdC,C.fm3,C.flX])
u(C.Cc,A.m6)
v(A.aC,[C.wh,C.bgn,C.bfT])
v(C.wh,[C.Pa,C.JG])
v(A.ag,[C.ao5,C.apJ,C.HT,C.aC6,C.aAk])
v(A.ah,[C.aKA,C.aL9,C.aKz,C.aC7,C.aAl])
u(C.aC8,C.aKA)
v(A.j6,[C.dJr,C.dJp,C.dJx,C.dJw,C.dJu,C.dJz,C.dJt,C.e8I,C.e8C,C.e8D,C.e8O,C.e8P,C.e8M,C.e8L,C.e8J,C.e8K,C.dJb,C.dJ7,C.dJ8,C.dJc,C.dJd,C.dJf,C.dJi,C.dJj,C.dJk,C.dJl,C.dJm,C.dJg,C.dJ2,C.dJ1,C.dJ0,C.dJ4,C.dJ5,C.dJo,C.fma,C.fmc,C.fmd,C.fm9,C.fmx,C.fmy,C.fmm,C.fmi,C.fmh,C.fmg,C.fmp,C.fmq,C.fmu,C.flY,C.flZ,C.flM,C.flN,C.dmN,C.dmG,C.flr,C.fls,C.flu,C.flv,C.flI,C.flC,C.flD,C.flE,C.flF,C.flG,C.flK,C.flx,C.fly,C.flz,C.fdB,C.fm0,C.flV,C.dfc,C.dfd,C.dfe,C.dff,C.dfk,C.dfj,C.dfi,C.dfo,C.dfh,C.dfp,C.dfg,C.dfq])
u(C.bje,C.aL9)
v(A.au,[C.ab1,C.C8,C.azI,C.bgq,C.beQ,C.bgp,C.bgm,C.bgo,C.bhi,C.or])
v(A.mK,[C.acp,C.Pu])
u(C.aC5,C.aKz)
u(C.biT,A.iP)
w(C.aKz,A.eR)
w(C.aKA,A.eR)
w(C.aL9,A.eR)})()
A.jW(b.typeUniverse,JSON.parse('{"Pa":{"wh":[]},"JG":{"wh":[]},"ao5":{"ag":[],"r":[]},"apJ":{"ag":[],"r":[]},"ab1":{"au":[],"r":[]},"HT":{"ag":[],"r":[]},"aC6":{"ag":[],"r":[]},"or":{"au":[],"r":[]},"aAk":{"ag":[],"r":[]},"aC8":{"ah":["ao5"]},"bje":{"ah":["apJ"]},"C8":{"au":[],"r":[]},"azI":{"au":[],"r":[]},"acp":{"aB":[]},"aC5":{"ah":["HT"]},"aC7":{"ah":["aC6"]},"bgq":{"au":[],"r":[]},"beQ":{"au":[],"r":[]},"bgp":{"au":[],"r":[]},"bgm":{"au":[],"r":[]},"bgo":{"au":[],"r":[]},"Pu":{"aB":[]},"biT":{"iP":[]},"bhi":{"au":[],"r":[]},"aAl":{"ah":["aAk"]}}'))
var y={d:"That group code is already taken. Try another."}
var x=(function rtii(){var w=A.ax
return{Q:w("eD<n>"),c:w("eD<H>"),J:w("O<a2x>"),V:w("O<ac>"),O:w("O<w>"),t:w("O<eD<n>>"),u:w("O<eD<H>>"),A:w("O<a4<n,n>>"),D:w("O<nA>"),x:w("O<pI>"),B:w("O<uB>"),v:w("O<ho>"),T:w("O<p3<Cc>>"),Z:w("O<+(+email,name(n,n),pI)>"),S:w("O<+email,name(n,n)>"),i:w("O<+person,relation(H,n)>"),r:w("O<cQ>"),s:w("O<n>"),F:w("O<iP>"),p:w("O<r>"),U:w("O<aB?>"),m:w("ai<nA>"),P:w("a4<n,@>"),f:w("a4<@,@>"),w:w("iA"),L:w("nA"),Y:w("uB"),N:w("n"),I:w("p8"),K:w("a2<+email,name(n,n)>"),C:w("e8<Pa>"),o:w("e8<JG>"),l:w("r"),n:w("bfT"),R:w("bgn"),E:w("Cc"),W:w("wh"),a:w("JG"),q:w("mY"),y:w("R"),z:w("@"),G:w("H"),_:w("a4<n,@>?"),h:w("nA?"),X:w("aC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVU=new A.lT(B.b2,A.ax("lT<w?>"))
D.aXo=new A.ay(B.b1,1,B.q,-1)
D.aXC=new A.ay(B.c7,1,B.q,-1)
D.aYT=new A.aY(20,1/0,0,1/0)
D.aZ5=new A.aY(0,1/0,0,150)
D.fd_=new A.x("Tap code to copy",null,B.zw,null,null,null,null,null,null,null,null,null)
D.b3Z=new A.cr(B.A,null,null,D.fd_,null)
D.fdy=new A.x("No groups found.",null,B.kB,null,null,null,null,null,null,null,null,null)
D.b4o=new A.cr(B.A,null,null,D.fdy,null)
D.bqE=new A.Q(14,12,6,12)
D.br8=new A.Q(16,10,16,8)
D.brs=new A.Q(16,4,16,36)
D.brM=new A.Q(18,10,18,36)
D.brR=new A.Q(18,12,18,4)
D.bsa=new A.Q(18,22,18,18)
D.fg1=new A.x("Waiting to join",null,B.i5,null,null,null,null,null,null,null,null,null)
D.bw5=new A.bD(1,B.bh,D.fg1,null)
D.bwT=new A.bD(1,B.bh,B.bH,null)
D.bCM=new A.a_(63323,"MaterialIcons",!1)
D.alE=new A.a_(983761,"MaterialIcons",!1)
D.bGh=new A.ae(B.eB,null,B.eu,null,null,null)
D.bGj=new A.ae(B.h8,22,B.b1,null,null,null)
D.bGk=new A.ae(B.hz,16,B.b2,null,null,null)
D.bHb=new A.ae(B.MX,22,B.eu,null,null,null)
D.bHt=new A.ae(B.a_D,20,B.iC,null,null,null)
D.bIj=new A.ae(B.e5,22,B.c7,null,null,null)
D.bIN=new A.ae(B.FA,20,B.b1,null,null,null)
D.bJx=new A.ae(B.hy,null,B.b1,null,null,null)
D.bKn=new A.ae(B.vH,18,B.b1,null,null,null)
D.bKu=new A.ae(B.fd,18,B.b1,null,null,null)
D.bKV=new A.ae(B.bDF,null,B.h_,null,null,null)
D.bM_=new A.ae(B.h8,null,B.b1,null,null,null)
D.bME=new A.ae(B.ef,20,B.b2,null,null,null)
D.bOS=new A.ae(D.alE,null,B.b1,null,null,null)
D.bPa=new A.ae(B.tN,null,B.b1,null,null,null)
D.bPm=new A.ae(B.pP,null,B.b2,null,null,null)
D.awo=w([],x.x)
D.dgB=w(["mother","father","spouse","child","brother","sister"],x.s)
D.bLz=new A.ae(B.oI,20,B.iC,null,null,null)
D.e5i=new A.D(B.iU,D.bLz,null)
D.fu0=new A.x("The group owner has not added payment details yet.",null,B.kB,null,B.L,null,null,null,null,null,null,null)
D.e5u=new A.D(B.f_,D.fu0,null)
D.ec1=new A.BJ(null,B.dL)
D.ec3=new A.BK(null,B.dL)
D.edB=new A.y(0,"Ledger")
D.eej=new A.y(1,"People")
D.eeU=new A.y(2,"Invite")
D.fpZ=new A.x("Your request is already waiting. The group owner has to approve you.",null,null,null,null,null,null,null,null,null,null,null)
D.ePc=new A.b1(D.fpZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.foy=new A.x("Help mode is active but missing a campaign.",null,null,null,null,null,null,null,null,null,null,null)
D.ePY=new A.b1(D.foy,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fdk=new A.x("Activate help mode before recording a contribution.",null,null,null,null,null,null,null,null,null,null,null)
D.eQu=new A.b1(D.fdk,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fup=new A.x("Add what you are collecting for, then activate help mode.",null,null,null,null,null,null,null,null,null,null,null)
D.eQx=new A.b1(D.fup,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ftL=new A.x("This group is full (100 members). Ask the owner to unlock more seats.",null,null,null,null,null,null,null,null,null,null,null)
D.eQA=new A.b1(D.ftL,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fl5=new A.x("Receipt copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eQR=new A.b1(D.fl5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkw=new A.x("Your request is waiting. The group owner has to approve you first.",null,null,null,null,null,null,null,null,null,null,null)
D.eSr=new A.b1(D.fkw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.feb=new A.x("No group found for that code.",null,null,null,null,null,null,null,null,null,null,null)
D.eSD=new A.b1(D.feb,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsV=new A.x("Could not send your request.",null,null,null,null,null,null,null,null,null,null,null)
D.eSL=new A.b1(D.fsV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.aOD=new A.G(!0,B.c,null,null,null,null,15,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXc=new A.G(!0,B.az,null,null,null,null,10,B.H,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXm=new A.G(!0,B.b1,null,null,null,null,12,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYJ=new A.G(!0,B.b1,null,null,null,null,22,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZv=new A.G(!0,B.iC,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZD=new A.G(!0,B.iC,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZN=new A.G(!0,B.iT,null,null,null,null,16,B.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_5=new A.G(!0,B.c,null,null,null,null,16,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7b=new A.G(!0,B.c1,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f19=new A.G(!0,B.b2,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1j=new A.G(!0,B.b1,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2C=new A.G(!0,B.c,null,null,null,null,20,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new A.G(!0,B.eu,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4T=new A.G(!0,B.b1,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5u=new A.G(!0,B.b1,null,null,null,null,15,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5U=new A.G(!0,B.b1,null,null,null,null,16,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Y=new A.G(!0,B.f4,null,null,null,null,null,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faC=new A.x("Keep missed",null,B.kA,null,null,null,null,null,null,null,null,null)
D.faN=new A.x("Save details for later",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fbl=new A.x("Create group",null,B.cy,null,null,null,null,null,null,null,null,null)
D.f8J=new A.G(!0,B.b1,null,null,null,null,12,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbH=new A.x("LIGHTNING CIRCLE",null,D.f8J,null,null,null,null,null,null,null,null,null)
D.fc1=new A.x("Clear missed contribution?",null,B.dl,null,B.L,null,null,null,null,null,null,null)
D.fcI=new A.x("Share this code or QR so others can join from Lightning Groups.",null,B.zw,null,B.L,null,null,null,null,null,null,null)
D.f31=new A.G(!0,B.b1,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcO=new A.x("Add a family member from the group",null,D.f31,null,null,null,null,null,null,null,null,null)
D.fcW=new A.x("Yes, clear it",null,B.cy,null,null,null,null,null,null,null,null,null)
D.feg=new A.x("Nobody yet.",null,B.kB,null,null,null,null,null,null,null,null,null)
D.feC=new A.x("No contributions or spending yet.",null,B.kB,null,null,null,null,null,null,null,null,null)
D.feV=new A.x("Clear",null,B.Tj,null,null,null,null,null,null,null,null,null)
D.aQ5=new A.G(!0,B.az,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffb=new A.x("No member matches that search.",null,D.aQ5,null,null,null,null,null,null,null,null,null)
D.Tr=new A.G(!0,B.c1,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffy=new A.x("This removes the missed mark for this member. Only clear if they paid or you confirmed the contribution.",null,D.Tr,null,B.L,null,null,null,null,null,null,null)
D.f1d=new A.G(!0,B.c1,null,null,null,null,11,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffQ=new A.x("Type letters or numbers in any order \u2014 code becomes 3 letters then numbers (e.g. ABC123).",null,D.f1d,null,null,null,null,null,null,null,null,null)
D.fgI=new A.x("Nobody else is in this group yet.",null,B.kB,null,null,null,null,null,null,null,null,null)
D.fgQ=new A.x("They will lose access to this group ledger and invite list.",null,D.Tr,null,B.L,null,null,null,null,null,null,null)
D.fic=new A.x("Save details",null,B.cj,null,null,null,null,null,null,null,null,null)
D.eYN=new A.G(!0,B.b2,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fif=new A.x("Everyone has already contributed to this round.",null,D.eYN,null,null,null,null,null,null,null,null,null)
D.fig=new A.x("Deactivate help mode",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fjN=new A.x("Send my request",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fkj=new A.x("Your own civic circle \u2014 no states, no case wallet.\nInvite by code or QR. Owner tracks money in & out.",null,N.Dd,null,B.L,null,null,null,null,null,null,null)
D.fkO=new A.x("Everyone gave. Wonderful!",null,B.kB,null,null,null,null,null,null,null,null,null)
D.fl8=new A.x("FAMILY IN THIS GROUP (optional)",null,R.mI,null,null,null,null,null,null,null,null,null)
D.aQv=new A.x("Close",null,B.kA,null,null,null,null,null,null,null,null,null)
D.eX_=new A.G(!0,B.b2,null,null,null,null,9.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fly=new A.x("OPEN",null,D.eX_,null,null,null,null,null,null,null,null,null)
D.flL=new A.x("Remove",null,B.cy,null,null,null,null,null,null,null,null,null)
D.flN=new A.x("Decline this request?",null,B.k7,null,null,null,null,null,null,null,null,null)
D.fmM=new A.x("Send your contribution using the details below. Call if you have questions or to confirm payment was received.",null,I.a7e,null,B.L,null,null,null,null,null,null,null)
D.fnf=new A.x("Make sure this is correct before saving to the ledger.",null,D.Tr,null,B.L,null,null,null,null,null,null,null)
D.fni=new A.x("Remove member?",null,B.dl,null,B.L,null,null,null,null,null,null,null)
D.fnF=new A.x("Keep member",null,B.kA,null,null,null,null,null,null,null,null,null)
D.fnW=new A.x("Are your mother, father, spouse, children or brothers and sisters already here? Choose them.",null,D.Tr,null,null,null,null,null,null,null,null,null)
D.fo2=new A.x("Request sent",null,B.k7,null,null,null,null,null,null,null,null,null)
D.fq0=new A.x("Go back",null,B.kA,null,null,null,null,null,null,null,null,null)
D.fqS=new A.x("Scan group QR",null,null,null,null,null,null,null,null,null,null,null)
D.frg=new A.x("Tap who put money in \u2014 people who joined this group.",null,B.hf,null,B.L,null,null,null,null,null,null,null)
D.fsb=new A.x("Record contribution",null,B.fO,null,B.L,null,null,null,null,null,null,null)
D.fsQ=new A.x("Copy receipt",null,null,null,null,null,null,null,null,null,null,null)
D.fve=new A.x("Activate help mode",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fvV=new A.x("Confirm & save",null,B.cy,null,null,null,null,null,null,null,null,null)
D.fwW=new A.x("Verify contribution",null,B.dl,null,B.L,null,null,null,null,null,null,null)
D.fx2=new A.x("Delete group?",null,B.dm,null,null,null,null,null,null,null,null,null)
D.fxm=new A.x("Save",null,B.cy,null,null,null,null,null,null,null,null,null)
D.f1S=new A.G(!0,B.iT,null,null,null,null,14,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxI=new A.x("HELP MODE ACTIVE",null,D.f1S,null,B.L,null,null,null,null,null,null,null)
D.fxP=new A.x("No members yet \u2014 invite people with your code first.",null,D.aQ5,null,null,null,null,null,null,null,null,null)
D.a8I=new C.Cc(0,"all")
D.aTR=new C.Cc(1,"contributions")
D.aTS=new C.Cc(2,"missed")
D.fRx=new C.aC6(null)})()};
(a=>{a["MavwtgvWVC4YvNjrZMy+uZ46Pp0="]=a.current})($__dart_deferred_initializers__);