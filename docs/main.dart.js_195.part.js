((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,H,L,K,M,N,C={
hkn(d){var w=B.a.i(d),v=A.af("^[A-Z]{3}[0-9]{1,5}$",!0,!1,!1,!1)
return v.b.test(w.toUpperCase())},
fSj(){var w=$.a66
if(w==null)w=B.cu
return A.xc(w,x.L)},
c4Y(d){var w,v,u=$.a66
if(u==null)return null
try{w=J.fPW(u,new C.c4Z(d))
return w}catch(v){return null}},
hAC(d){var w=B.a.i(d.toLowerCase()),v=C.fSj(),u=A.U(v).k("a1<1>")
v=A.C(new A.a1(v,new C.c50(w),u),u.k("J.E"))
return v},
hAB(d){var w=B.a.i(d.toLowerCase()),v=C.fSj(),u=A.U(v).k("a1<1>")
v=A.C(new A.a1(v,new C.c5_(w),u),u.k("J.E"))
return v},
c5d(){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$c5d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=$.a66
if(o!=null&&o.length!==0){w=1
break}n=A
m=J
w=3
return A.b(A.aA(),$async$c5d)
case 3:t=n.aU(m.q(e.a,"ngmy_civic_user_groups_v1"))
if(t==null||t.length===0){w=1
break}try{s=B.R.aH(0,t,null)
if(x.f.b(s)){r=A.MW(A.a2(s,x.N,x.z))
o=r
q=A.a3(o).k("bc<2>")
o=A.C(new A.bc(o,q),q.k("J.E"))
B.d.b0(o,new C.c5e())
$.a66=o}}catch(l){}case 1:return A.h(u,v)}})
return A.i($async$c5d,v)},
aYl(d){var w=0,v=A.j(x._),u,t,s,r,q,p,o,n
var $async$aYl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=x.N
q=x.z
w=3
return A.b(A.kM(A.F(["action","civicUserGroupsPersist","value",d],r,q),!1,!1,null),$async$aYl)
case 3:p=f
o=p==null
n=!o
if(n){t=J.a6(p)
t=J.A(t.h(p,"ok"),!0)&&x.f.b(t.h(p,"value"))}else t=!1
if(t){u=A.a2(x.f.a(J.q(p,"value")),r,q)
w=1
break}r=o?null:J.q(p,"error")
s=B.a.i(J.k(r==null?"":r))
if(n&&J.A(J.q(p,"ok"),!1)&&B.a.t(s,"already taken"))throw A.V(A.bd(s))
w=4
return A.b(A.nn("civic_user_groups_v1",d,null),$async$aYl)
case 4:u=f?d:null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYl,v)},
I2(d){return C.hAz(d)},
hAz(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$I2=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:J.aF(d,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
w=2
return A.b(A.aA(),$async$I2)
case 2:q=f
w=3
return A.b(q.ar("String","ngmy_civic_user_groups_v1",B.R.ao(d,null)),$async$I2)
case 3:s=null
u=5
w=8
return A.b(C.aYl(d),$async$I2)
case 8:s=f
u=1
w=7
break
case 5:u=4
i=t.pop()
o=A.aa(i)
if(o instanceof A.lH){r=o
if(B.a.t(r.a,"already taken"))throw i}else throw i
w=7
break
case 4:w=1
break
case 7:o=s
n=A.MW(o==null?d:o)
if(n.a===0)throw A.V(A.bd("Could not sync this group to the cloud. Check your connection and try again."))
o=new A.dt(n,n.r,n.e)
case 9:if(!o.C()){w=10
break}w=11
return A.b(A.aoe(o.d),$async$I2)
case 11:w=9
break
case 10:m=s
if(m==null)m=d
o=A.T(x.N,x.P)
for(l=A.a3(n),k=new A.cK(n,l.k("cK<1,2>")).gaf(0);k.C();){r=k.d
o.n(0,r.a,r.b.ag())}J.aF(m,"groups",o)
w=12
return A.b(q.ar("String","ngmy_civic_user_groups_v1",B.R.ao(m,null)),$async$I2)
case 12:o=l.k("bc<2>")
j=A.C(new A.bc(n,o),o.k("J.E"))
B.d.b0(j,new C.c4V())
$.a66=j
return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$I2,v)},
aof(d){return C.hAD(d)},
hAD(d){var w=0,v=A.j(x.h),u,t,s,r
var $async$aof=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.I3(),$async$aof)
case 3:r=f
try{t=J.fPW(r,new C.c52(d))
u=t
w=1
break}catch(q){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$aof,v)},
U9(d){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m,l
var $async$U9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m=A.fC5(d)
l=m==null?B.a.i(d).toUpperCase():m
if(J.ad(l)===0){u=null
w=1
break}w=3
return A.b(A.aYj(l),$async$U9)
case 3:s=f
if(s!=null){u=s
w=1
break}r=x.N
q=x.z
w=4
return A.b(A.kM(A.F(["action","civicUserGroupsFind","code",l],r,q),!1,!1,null),$async$U9)
case 4:p=f
if(p!=null){o=J.dm(p)
o=o.ai(p,"group")&&x.f.b(o.h(p,"group"))}else o=!1
if(o){u=A.fSh(A.a2(x.f.a(J.q(p,"group")),r,q))
w=1
break}w=5
return A.b(A.I3(),$async$U9)
case 5:t=f
try{r=J.fPW(t,new C.c53(l))
u=r
w=1
break}catch(k){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$U9,v)},
aYo(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$aYo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.I3(),$async$aYo)
case 3:s=r.dH(f,new C.c57(t))
s=A.C(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYo,v)},
c5b(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c5b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.I3(),$async$c5b)
case 3:s=r.dH(f,new C.c5c(t))
s=A.C(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5b,v)},
c54(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c54=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.I3(),$async$c54)
case 3:s=r.dH(f,new C.c55(t))
s=A.C(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c54,v)},
a67(d,e,f){var w=0,v=A.j(x.L),u,t,s,r,q,p,o,n,m,l,k
var $async$a67=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:k=B.a.i(d).toUpperCase()
if(!C.hkn(k))throw A.V(A.dI("Group code must be 3 letters + 1\u20135 numbers (e.g. ABC123).",null))
w=3
return A.b(A.I1(),$async$a67)
case 3:t=h
s=A.MW(t)
r=A.a3(s)
if(new A.bc(s,r.k("bc<2>")).b4(0,new C.c51(k)))throw A.V(A.bd(y.d))
w=4
return A.b(C.U9(k),$async$a67)
case 4:if(h!=null)throw A.V(A.bd(y.d))
q=Date.now()
p=B.cI.aC(1048576)
o=B.a.i(e.toLowerCase())
n=B.a.i(f)
if(n.length===0)n="Owner"
m=A.h7m(new A.S(Date.now(),0,!1).a6(),null,"",null,"",!1,"","","","cug_"+q+"_"+p,k,null,null,null,k,null,o,0,n)
n=m.a
s.n(0,n,m)
o=A.T(x.N,x.P)
for(r=new A.cK(s,r.k("cK<1,2>")).gaf(0);r.C();){l=r.d
o.n(0,l.a,l.b.ag())}J.aF(t,"groups",o)
w=5
return A.b(C.I2(t),$async$a67)
case 5:r=C.c4Y(n)
w=6
return A.b(A.aoe(r==null?m:r),$async$a67)
case 6:r=C.c4Y(n)
u=r==null?m:r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a67,v)},
I4(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$I4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.I1(),$async$I4)
case 2:s=f
r=A.MW(s)
q=d.a
r.n(0,q,C.hAA(d,r.h(0,q)))
q=A.T(x.N,x.P)
for(u=new A.cK(r,A.a3(r).k("cK<1,2>")).gaf(0);u.C();){t=u.d
q.n(0,t.a,t.b.ag())}J.aF(s,"groups",q)
w=3
return A.b(C.I2(s),$async$I4)
case 3:return A.h(null,v)}})
return A.i($async$I4,v)},
hAA(d,e){var w,v,u,t,s,r
if(e==null)return d
w=d.r
v=new A.K(w,new C.c4W(),A.U(w).k("K<1,n>")).fL(0)
for(u=e.r,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
if(!v.t(0,r.a))B.d.K(w,r)}return d},
hAy(d){var w=$.a66
if(w!=null)B.d.bo(w,new C.c4U(d))},
aYn(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aYn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.I1(),$async$aYn)
case 2:r=f
q=A.MW(r)
q.W(0,d)
u=A.T(x.N,x.P)
for(t=new A.cK(q,A.a3(q).k("cK<1,2>")).gaf(0);t.C();){s=t.d
u.n(0,s.a,s.b.ag())}J.aF(r,"groups",u)
w=3
return A.b(C.I2(r),$async$aYn)
case 3:C.hAy(d)
return A.h(null,v)}})
return A.i($async$aYn,v)},
aYp(d,e,f,g,h,i,j){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m
var $async$aYp=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:m=A.fC5(g)
if(m==null)m=B.a.i(g).toUpperCase()
if(m.length===0){u=null
w=1
break}w=3
return A.b(C.U9(m),$async$aYp)
case 3:t=l
if(t==null){u=null
w=1
break}s=B.a.i(e.toLowerCase())
if(t.alN(s)||t.aF9(s)){u=t
w=1
break}r=t.r
B.d.bo(r,new C.c5a(s))
q=B.a.i(h)
if(q.length===0)q=B.d.gL(s.split("@"))
p=new A.S(Date.now(),0,!1).a6()
o=B.a.i(i)
n=B.a.i(j)
B.d.K(r,A.h7n(B.a.i(d),s,f,p,0,q,o,new A.S(Date.now(),0,!1).a6(),n,"pending"))
w=4
return A.b(C.I4(t),$async$aYp)
case 4:n=C.c4Y(t.a)
u=n==null?t:n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYp,v)},
aYm(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aof(d),$async$aYm)
case 3:q=g
if(q==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
s=q.r
r=B.d.bd(s,new C.c4X(t))
if(r<0){u=!1
w=1
break}s[r].e="active"
w=4
return A.b(C.I4(q),$async$aYm)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYm,v)},
aog(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$aog=A.e(function(i,a0){if(i===1)return A.f(a0,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aof(d),$async$aog)
case 3:k=a0
if(k==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
if(k.a4w(t)){u=!1
w=1
break}s=B.a.i(f==null?"":f)
if(J.ad(s)===0)try{s=B.a.i(B.d.hR(k.r,new C.c58(t)).b)}catch(j){s=J.f0(t,"@")?B.d.gL(J.lr(t,"@")):t}if(J.ad(s)===0)s="Member"
q=k.r.length
B.d.bo(k.r,new C.c59(t))
if(k.r.length===q){u=!1
w=1
break}p=k.x
o=Date.now()
n=B.cI.aC(1048576)
m=s
l=new A.S(Date.now(),0,!1).a6()
B.d.ck(p,0,new A.pL("cug_"+o+"_"+n,B.a4c,0,m,g,l,B.a.i(h.toLowerCase()),"",t,""))
w=4
return A.b(C.I4(k),$async$aog)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aog,v)},
c4Z:function c4Z(d){this.a=d},
c50:function c50(d){this.a=d},
c5_:function c5_(d){this.a=d},
c5e:function c5e(){},
c4V:function c4V(){},
c52:function c52(d){this.a=d},
c53:function c53(d){this.a=d},
c57:function c57(d){this.a=d},
c5c:function c5c(d){this.a=d},
c55:function c55(d){this.a=d},
c51:function c51(d){this.a=d},
c4W:function c4W(){},
c4U:function c4U(d){this.a=d},
c5a:function c5a(d){this.a=d},
c4X:function c4X(d){this.a=d},
c58:function c58(d){this.a=d},
c59:function c59(d){this.a=d},
aMX(d,e){var w=0,v=A.j(x.H),u
var $async$aMX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(new A.fC(e)),$async$aMX)
case 3:if(d.e==null){w=1
break}d.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+e,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aMX,v)},
byw(d,e,f){var w=d.x,v=A.U(w).k("a1<1>")
w=A.C(new A.a1(w,new C.fcb(B.a.i(e).toLowerCase(),B.a.i(f.toLowerCase()),d),v),v.k("J.E"))
return w},
hOh(d,e,f){return B.d.cI(C.byw(d,e,f),0,new C.fca())},
hRz(d,e,f){var w,v,u=C.byw(d,e,f)
u=A.C(new A.K(u,new C.fhb(),A.U(u).k("K<1,wk>")),x.W)
w=d.cOP(e,f)
B.d.v(u,new A.K(w,new C.fhc(),A.U(w).k("K<1,wk>")))
if(d.y){w=d.ax
w=w.length!==0&&!d.Si(e,w)}else w=!1
if(w){w=d.ay
if(w==null)w=new A.S(Date.now(),0,!1).a6()
v=B.a.i(d.z)
u.push(new C.JN(v.length===0?"Help round":v,!0,"",w))}B.d.b0(u,new C.fhd())
return u},
bzs(d){var w=0,v=A.j(x.H),u,t,s
var $async$bzs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){w=1
break}t=A.cw("https://cash.app/$"+(B.a.a0(s,"$")?B.a.b2(s,1):s),0,null)
w=5
return A.b(A.pl(t),$async$bzs)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iS(t,B.fm,null),$async$bzs)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bzs,v)},
bys(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$bys=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=A.af("[^\\d+]",!0,!1,!1,!1)
r=A.aK(d,s,"")
if(r.length===0){w=1
break}t=A.cw("tel:"+r,0,null)
w=5
return A.b(A.pl(t),$async$bys)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iS(t,B.fm,null),$async$bys)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bys,v)},
hmw(d,e,f,g){C.c5d()
return A.hy(d,new C.aob(f,g,e,null),!1,null,x.X)},
hcL(d,e,f,g,h,i,j){return new C.azP(f,j,g,i,h,d,e,null)},
fVD(d,e,f,g,h,i,j,k,l){return new C.bgv(k,g,d,h,j,e,f,i,l,null)},
hVA(d){var w={},v=new A.as(B.as,$.aw())
w.a=""
return A.bQ(B.K,null,new C.fmX(w,v),d,!0,!0,!0,null,!1,!1,x.N).ff(v.gf5())},
hVC(d,e,f,g,h,i,j,k){var w=new A.as(B.as,$.aw())
return A.bQ(B.K,null,new C.fng(h,k,j,w,!0,i,g,f),d,!0,!0,!0,null,!1,!1,x.N).ff(w.gf5())},
hVB(d,e,f,g,h){var w,v,u,t={},s=g===B.rr,r=$.aw(),q=new A.as(B.as,r),p=new A.as(B.as,r),o=new A.as(B.as,r)
r=new C.fnc(s,e)
w=A.U(h).k("a1<1>")
v=A.C(new A.a1(h,new C.fn9(r),w),w.k("J.E"))
u=s&&h.length!==0&&v.length===0
t.a=v.length!==0?B.d.gL(v).b:""
t.b=!1
return A.bQ(B.K,null,new C.fna(t,o,h,r,s,f,u,p,q,e),d,!0,!0,!0,null,!1,!1,x.R).ff(new C.fnb(q,p,o))},
hVy(d,e,f){return A.bQ(B.K,null,new C.fmH(f,e),d,!0,!0,!1,null,!1,!1,x.y)},
hVw(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=C.byw(f,i,e),r=B.d.cI(s,0,new C.fmz()),q=f.a4N(i,e)
if(f.y){w=f.ax
v=w.length!==0&&!f.Si(i,w)}else v=!1
if(f.ax.length===0)u=D.awG
else{w=A.U(s).k("a1<1>")
u=A.C(new A.a1(s,new C.fmA(f),w),w.k("J.E"))}if(!v)t=q>0&&r<=0
else t=!0
return A.bQ(B.K,null,new C.fmB(f,i,e,l,h,k,s,r,q,v,u,t,g,j),d,!0,!0,!0,null,!1,!1,x.H)},
hVr(d,e){return A.bQ(B.K,null,new C.fma(e),d,!0,!0,!1,null,!1,!1,x.y)},
hVs(d,e,f,g){return A.bQ(B.K,null,new C.fmd(g,e,f),d,!0,!0,!1,null,!1,!1,x.y)},
fYj(d,e){var w=null
return new A.D(B.vk,A.B(A.a([A.d(d,w,w,w,w,w,w,B.zz,w,w,w),B.b6,new A.dq(1,B.cn,A.d(e,w,w,w,w,w,w,B.m4,B.dM,w,w),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
hVu(d,e,f,g){var w,v,u,t,s,r
if(!f)return C.hVt(d,e,g)
w=e.z
v=$.aw()
u=new A.as(new A.bb(w,B.b4,B.aN),v)
w=e.Q
t=new A.as(new A.bb(w,B.b4,B.aN),v)
w=e.as
s=new A.as(new A.bb(w,B.b4,B.aN),v)
w=e.at
r=new A.as(new A.bb(w,B.b4,B.aN),v)
return A.bQ(B.K,null,new C.fmq(g,e.y,u,t,s,r,new C.fmp(e,u,t,s,r),e),d,!0,!0,!0,null,!1,!1,x.L).ff(new C.fmr(u,t,s,r))},
hVt(d,e,f){return A.bQ(B.K,null,new C.fmi(f,e),d,!0,!0,!0,null,!1,!1,x.L)},
hfI(d,e){return A.c6(e,new C.feb(e,d),null)},
fe9(d,e,f,g,h,i){var w,v=null,u=A.m(18),t=A.I(B.b2.j(0.35),B.q,1),s=A.X(e,B.b2,v,v,v,20),r=A.d(f,v,v,v,v,v,v,A.l(v,v,B.b2.j(0.85),v,v,v,v,v,v,v,v,10,v,v,B.H,v,v,!0,v,1.1,v,v,v,v,v,v),v,v,v),q=g==null,p=!q,o=p?B.iT:B.c,n=p?B.mJ:v,m=x.p
n=A.a([r,B.at,A.d(i,v,v,v,v,v,v,A.l(v,v,o,v,n,B.b2.j(0.6),v,v,v,v,v,14,v,v,B.O,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v)],m)
if(p&&h!=null)B.d.v(n,A.a([B.at,A.d("Tap to "+h,v,v,v,v,v,v,A.l(v,v,B.b2.j(0.75),v,v,v,v,v,v,v,v,10,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],m))
w=A.p(v,A.B(A.a([s,B.av,A.E(A.v(n,B.F,v,B.e,B.j,0,B.p),1),A.aH(v,v,v,v,A.X(B.fL,B.b2.j(0.9),v,v,v,18),v,v,v,new C.fea(i,d,f),v,v,v,v,"Copy",v)],m),B.F,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.fp,v,t,u,v,v,B.n),v,v,v,B.da,B.eQ,v,v,v)
if(q)return w
return A.aG(!1,B.a1,!0,v,A.aL(!1,A.m(18),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)},
aNR(d,e,f){var w=null,v=B.b1.j(0.16),u=A.I(B.b1.j(0.55),B.q,1),t=A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,14)],x.V),s=x.p
return A.B(A.a([A.p(w,A.X(d,B.b1,w,w,w,w),B.f,w,w,new A.o(v,w,u,w,t,w,B.a6),w,46,w,w,w,w,w,46),B.bd,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,B.k9,w,w,w),B.at,A.d(e,w,w,w,w,w,w,M.a7o,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w)},
Km(d){var w=null,v=B.c.j(0.05)
return A.bs(w,w,w,B.bD,w,w,w,w,!0,new A.b4(4,A.m(14),new A.ay(B.b1.j(0.25),1,B.q,-1)),w,w,w,w,w,v,!0,w,w,w,w,new A.b4(4,A.m(14),B.aa5),w,w,w,w,w,w,w,w,B.kG,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
hUU(d,e){var w,v,u,t,s,r,q=A.a([],x.x)
for(w=d.x,v=w.length,u=e==="other",t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.b===B.rr){r=s.w
r=u?r.length===0:r===e}else r=!1
if(r)q.push(s)}return q},
hUV(d,e,f){var w,v,u,t
for(w=f.length,v=0;v<w;++v){u=B.a.i(f[v].y)
if(u.length!==0)return u}u=e==="other"
if(!u&&e===d.ax&&B.a.i(d.z).length!==0)return B.a.i(d.z)
if(u)return"Other contributions"
if(w!==0){t=B.d.gal(f).f.bS()
return"Contribution round \xb7 "+A.bH(t)+"/"+A.bR(t)+"/"+A.bA(t)}return"Contribution round"},
hhx(d){var w,v=d.toLowerCase()
A:{if("mother"===v){w="Mother"
break A}if("father"===v){w="Father"
break A}if("spouse"===v){w="Spouse"
break A}if("child"===v){w="Child"
break A}if("brother"===v){w="Brother"
break A}if("sister"===v){w="Sister"
break A}w=d.length===0?"Family":d
break A}return w},
hVz(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l=x.S,k=A.a([new A.FH(e.c,e.d)],l),j=e.gFb()
B.d.v(k,new A.K(j,new C.fmJ(),A.U(j).k("K<1,+email,name(n,n)>")))
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
break}++p}if(s!=null)w.push(new A.z(t,s))
else v.push(t)}for(l=h.length,u=0;u<h.length;h.length===l||(0,A.L)(h),++u){o=h[u]
if(!B.d.b4(k,new C.fmK(o)))w.push(new A.z(new A.FH(o.x,o.d),o))}m=B.d.cI(h,0,new C.fmL())
l=k.length
return A.bQ(B.K,null,new C.fmM(g,w,k,m,i,l===0?0:B.k.D(w.length/l,0,1),e,v),d,!0,!0,!0,null,!1,!1,x.H)},
hVx(d,e,f){var w,v,u,t,s,r,q,p=B.a.i(f.y)
if(!(p.length!==0))p=f.w===e.ax&&B.a.i(e.z).length!==0?B.a.i(e.z):"Group contribution"
w=e.e
v=A.af("[^0-9]",!0,!1,!1,!1)
u="LG-"+w+"-"+B.a.ap(B.a.aT(A.aK(f.a,v,""),6,"0"),0,6)
t=f.f.bS()
s=""+A.bH(t)+"/"+A.bR(t)+"/"+A.bA(t)+" "+B.a.aT(B.o.u(A.dl(t)),2,"0")+":"+B.a.aT(B.o.u(A.fZ(t)),2,"0")
v=B.k.aa(f.c,2)
r=f.e
r=r.length!==0?"\nNote: "+r:""
q=f.r
if(q.length===0)q=e.c
return A.bQ(B.K,null,new C.fmD(u,new C.fmE(),f,p,s,e,"RECEIPT "+u+"\nGroup: "+w+" ("+e.d+")\nFrom: "+f.d+"\nFor: "+p+"\nAmount: $"+v+"\nDate: "+s+r+"\nRecorded by: "+q),d,!0,!0,!0,null,!1,!1,x.H)},
hVv(d,e,f,g){return A.bQ(B.K,null,new C.fms(e,f,g),d,!0,!0,!0,null,!1,!1,x.n)},
fcb:function fcb(d,e,f){this.a=d
this.b=e
this.c=f},
fca:function fca(){},
Ch:function Ch(d,e){this.a=d
this.b=e},
wk:function wk(){},
Pf:function Pf(d,e){this.b=d
this.a=e},
JN:function JN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fhb:function fhb(){},
fhc:function fhc(){},
fhd:function fhd(){},
aob:function aob(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCf:function aCf(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=e
_.y=null
_.z=f
_.cO$=g
_.b1$=h
_.c=_.a=null},
dJS:function dJS(d){this.a=d},
dJI:function dJI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJH:function dJH(){},
dJG:function dJG(d){this.a=d},
dJM:function dJM(d){this.a=d},
dJO:function dJO(d){this.a=d},
dJN:function dJN(d,e){this.a=d
this.b=e},
dJP:function dJP(d,e){this.a=d
this.b=e},
dJL:function dJL(d,e,f){this.a=d
this.b=e
this.c=f},
dJQ:function dJQ(d){this.a=d},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJK:function dJK(d,e,f){this.a=d
this.b=e
this.c=f},
dJJ:function dJJ(d,e,f){this.a=d
this.b=e
this.c=f},
apQ:function apQ(d,e,f){this.c=d
this.d=e
this.a=f},
bjj:function bjj(d,e,f,g){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=!1
_.x=""
_.cO$=f
_.b1$=g
_.c=_.a=null},
e99:function e99(d,e){this.a=d
this.b=e},
e98:function e98(d){this.a=d},
e96:function e96(){},
e97:function e97(){},
e95:function e95(d){this.a=d},
e93:function e93(d){this.a=d},
e94:function e94(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9g:function e9g(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9h:function e9h(d){this.a=d},
e9c:function e9c(d,e){this.a=d
this.b=e},
e9i:function e9i(d,e){this.a=d
this.b=e},
e9a:function e9a(d,e){this.a=d
this.b=e},
e9b:function e9b(d,e){this.a=d
this.b=e},
ab5:function ab5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Cd:function Cd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
dcq:function dcq(d){this.a=d},
azP:function azP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
dcG:function dcG(d){this.a=d},
act:function act(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
I_:function I_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCc:function aCc(d,e){var _=this
_.d=null
_.f=_.e=$
_.r=null
_.w=0
_.cO$=d
_.b1$=e
_.c=_.a=null},
dJE:function dJE(d){this.a=d},
dJs:function dJs(d,e){this.a=d
this.b=e},
dJg:function dJg(){},
dJq:function dJq(d){this.a=d},
dJo:function dJo(d){this.a=d},
dJp:function dJp(d){this.a=d},
dJt:function dJt(d,e){this.a=d
this.b=e},
dJu:function dJu(d,e){this.a=d
this.b=e},
dJv:function dJv(){},
dJw:function dJw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dJr:function dJr(d,e){this.a=d
this.b=e},
dJy:function dJy(d){this.a=d},
dJz:function dJz(d,e){this.a=d
this.b=e},
dJA:function dJA(d){this.a=d},
dJB:function dJB(d){this.a=d},
dJC:function dJC(d){this.a=d},
dJD:function dJD(d,e){this.a=d
this.b=e},
dJx:function dJx(d,e){this.a=d
this.b=e},
dJj:function dJj(d,e){this.a=d
this.b=e},
dJk:function dJk(d,e){this.a=d
this.b=e},
dJi:function dJi(d,e){this.a=d
this.b=e},
dJh:function dJh(d,e){this.a=d
this.b=e},
dJl:function dJl(d,e){this.a=d
this.b=e},
dJm:function dJm(d,e){this.a=d
this.b=e},
dJn:function dJn(){},
aCd:function aCd(d){this.a=d},
aCe:function aCe(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dJF:function dJF(d){this.a=d},
bgv:function bgv(d,e,f,g,h,i,j,k,l,m){var _=this
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
beV:function beV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dcY:function dcY(d){this.a=d},
dcX:function dcX(d,e){this.a=d
this.b=e},
bgu:function bgu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgQ:function dgQ(d){this.a=d},
bgr:function bgr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgO:function dgO(d){this.a=d},
bgt:function bgt(d,e,f){this.c=d
this.d=e
this.a=f},
dgP:function dgP(d){this.a=d},
Pz:function Pz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
dgN:function dgN(d,e){this.a=d
this.b=e},
bgs:function bgs(d,e,f){this.a=d
this.b=e
this.c=f},
biY:function biY(){},
fmX:function fmX(d,e){this.a=d
this.b=e},
fmW:function fmW(d,e){this.a=d
this.b=e},
fmT:function fmT(d,e){this.a=d
this.b=e},
fmS:function fmS(d){this.a=d},
fmU:function fmU(d){this.a=d},
fmV:function fmV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmR:function fmR(d){this.a=d},
fng:function fng(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fnd:function fnd(d){this.a=d},
fne:function fne(d){this.a=d},
fnf:function fnf(d,e){this.a=d
this.b=e},
fnc:function fnc(d,e){this.a=d
this.b=e},
fn9:function fn9(d){this.a=d},
fna:function fna(d,e,f,g,h,i,j,k,l,m){var _=this
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
fn8:function fn8(d,e,f,g,h,i,j,k,l,m){var _=this
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
fn0:function fn0(d){this.a=d},
fn1:function fn1(d){this.a=d},
fn2:function fn2(d){this.a=d},
fn3:function fn3(d,e){this.a=d
this.b=e},
fn_:function fn_(d){this.a=d},
fn4:function fn4(d){this.a=d},
fmZ:function fmZ(){},
fn5:function fn5(d,e,f){this.a=d
this.b=e
this.c=f},
fmY:function fmY(d,e){this.a=d
this.b=e},
fn6:function fn6(d){this.a=d},
fn7:function fn7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fnb:function fnb(d,e,f){this.a=d
this.b=e
this.c=f},
fmH:function fmH(d,e){this.a=d
this.b=e},
fmF:function fmF(d){this.a=d},
fmG:function fmG(d){this.a=d},
fmz:function fmz(){},
fmA:function fmA(d){this.a=d},
fmB:function fmB(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fmy:function fmy(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fmx:function fmx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
fmw:function fmw(d,e){this.a=d
this.b=e},
fmt:function fmt(d,e){this.a=d
this.b=e},
fmv:function fmv(d,e,f){this.a=d
this.b=e
this.c=f},
fmu:function fmu(){},
bhn:function bhn(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dmX:function dmX(){},
dmY:function dmY(d){this.a=d},
dmZ:function dmZ(d,e){this.a=d
this.b=e},
dn_:function dn_(){},
dn0:function dn0(d){this.a=d},
dn1:function dn1(d,e){this.a=d
this.b=e},
dn2:function dn2(d){this.a=d},
dmW:function dmW(d,e,f){this.a=d
this.b=e
this.c=f},
fma:function fma(d){this.a=d},
fm8:function fm8(d){this.a=d},
fm9:function fm9(d){this.a=d},
fmd:function fmd(d,e,f){this.a=d
this.b=e
this.c=f},
fmb:function fmb(d){this.a=d},
fmc:function fmc(d){this.a=d},
fmp:function fmp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fmq:function fmq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmo:function fmo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fmj:function fmj(d,e,f){this.a=d
this.b=e
this.c=f},
fmk:function fmk(d,e,f){this.a=d
this.b=e
this.c=f},
fml:function fml(d,e,f){this.a=d
this.b=e
this.c=f},
fmm:function fmm(d,e,f){this.a=d
this.b=e
this.c=f},
fmn:function fmn(d){this.a=d},
fmr:function fmr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmi:function fmi(d,e){this.a=d
this.b=e},
fmh:function fmh(d,e,f){this.a=d
this.b=e
this.c=f},
fme:function fme(d){this.a=d},
fmf:function fmf(d){this.a=d},
fmg:function fmg(d){this.a=d},
feb:function feb(d,e){this.a=d
this.b=e},
fea:function fea(d,e,f){this.a=d
this.b=e
this.c=f},
os:function os(d,e,f){this.c=d
this.d=e
this.a=f},
fmJ:function fmJ(){},
fmK:function fmK(d){this.a=d},
fmL:function fmL(){},
fmM:function fmM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmI:function fmI(d,e,f){this.a=d
this.b=e
this.c=f},
fmE:function fmE(){},
fmD:function fmD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fmC:function fmC(d,e){this.a=d
this.b=e},
bfY:function bfY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fms:function fms(d,e,f){this.a=d
this.b=e
this.c=f},
aAr:function aAr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAs:function aAs(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=""
_.w=null
_.x=f
_.c=_.a=null},
dfp:function dfp(){},
dfq:function dfq(d){this.a=d},
dfr:function dfr(){},
dfs:function dfs(d){this.a=d},
dft:function dft(d){this.a=d},
dfu:function dfu(d){this.a=d},
dfv:function dfv(d){this.a=d},
dfH:function dfH(){},
dfB:function dfB(d){this.a=d},
dfA:function dfA(d,e){this.a=d
this.b=e},
dfC:function dfC(d,e){this.a=d
this.b=e},
dfz:function dfz(d,e,f){this.a=d
this.b=e
this.c=f},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfy:function dfy(d,e,f){this.a=d
this.b=e
this.c=f},
dfE:function dfE(d,e){this.a=d
this.b=e},
dfx:function dfx(d,e){this.a=d
this.b=e},
dfF:function dfF(d){this.a=d},
dfw:function dfw(d){this.a=d},
dfG:function dfG(d){this.a=d},
aKG:function aKG(){},
aKH:function aKH(){},
aLg:function aLg(){},
fSi(d,e){var w=0,v=A.j(x.y),u
var $async$fSi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}u=A.lf(d,B.CE)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSi,v)},
c4R(d,e,f){var w=0,v=A.j(x.y),u
var $async$c4R=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}w=3
return A.b(A.aqV(d,B.z9,e),$async$c4R)
case 3:if(h){u=!0
w=1
break}u=A.lf(d,B.z9)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4R,v)},
aYi(d,e){var w=0,v=A.j(x.y),u,t
var $async$aYi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}t=J
w=3
return A.b(C.aYo(d),$async$aYi)
case 3:if(t.ad(g)<1){u=!0
w=1
break}u=C.fSi(d,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYi,v)},
aod(d,e,f){var w=0,v=A.j(x.y),u,t
var $async$aod=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYi(e,f),$async$aod)
case 3:if(h){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.kU(!1,d,e,f,"Your free group slot is used. Subscribe to create another lightning group ("+A.ce5(B.CE)+" / "+A.ce0(B.CE)+").",B.CE,"Create another group"),$async$aod)
case 6:t=h
if(t){w=4
break}else h=t
w=5
break
case 4:w=7
return A.b(C.aYi(e,f),$async$aod)
case 7:case 5:u=h
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aod,v)},
aYh(d,e,f,g){var w=0,v=A.j(x.y),u
var $async$aYh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}if(d<100){u=!0
w=1
break}u=C.c4R(g,e,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYh,v)},
aoc(d,e,f,g,h){var w=0,v=A.j(x.y),u,t
var $async$aoc=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYh(e,f,g,h),$async$aoc)
case 3:if(j){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.zo(d,h,g,"This group is at the free 100-member limit. Unlock more seats for "+A.ce5(B.z9)+" / "+A.ce0(B.z9)+".",B.z9,f,"Unlock 100+ members"),$async$aoc)
case 6:t=j
if(t){w=4
break}else j=t
w=5
break
case 4:w=7
return A.b(C.aYh(e,f,g,h),$async$aoc)
case 7:case 5:u=j
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoc,v)}},D,E,F,G,O,P,I,Q,R,S
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
C.Ch.prototype={
a5(){return"_MemberHistoryFilter."+this.b}}
C.wk.prototype={}
C.Pf.prototype={}
C.JN.prototype={}
C.aob.prototype={
R(){var w=x.D
return new C.aCf(A.a([],w),A.a([],w),A.a([],w),null,null)},
ge_(){return this.c}}
C.aCf.prototype={
a_(){var w,v=this,u=null
v.a1()
v.w=C.hAC(v.a.c)
v.x=C.hAB(v.a.c)
v.y=A.dv(B.hJ,new C.dJS(v))
w=A.bj(u,B.xr,u,1,u,v)
w.cs(0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.pI,u,1,u,v)
w.fd(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.jW,u,1,u,v)
w.cH(0)
v.f!==$&&A.aP()
v.f=w
w=A.bj(u,B.ie,u,1,u,v)
w.cs(0)
v.r!==$&&A.aP()
v.r=w
v.hZ()},
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
w.btN()},
hZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$hZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYo(t.a.c),$async$hZ)
case 3:s=e
w=4
return A.b(C.c54(t.a.c),$async$hZ)
case 4:r=e
w=5
return A.b(C.c5b(t.a.c),$async$hZ)
case 5:q=e
if(t.c==null){w=1
break}t.m(new C.dJI(t,s,r,q))
case 1:return A.h(u,v)}})
return A.i($async$hZ,v)},
zR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
m=r.a
w=3
return A.b(C.aod(j,m.c,m.e),$async$zR)
case 3:if(!e||r.c==null){w=1
break}j=r.c
j.toString
w=4
return A.b(C.hVA(j),$async$zR)
case 4:q=e
if(q==null||r.c==null){w=1
break}t=6
j=r.a
w=9
return A.b(C.a67(q,j.c,j.d),$async$zR)
case 9:p=e
w=10
return A.b(r.hZ(),$async$zR)
case 10:j=r.c
if(j==null){w=1
break}m=p.a
l=r.a
w=11
return A.b(A.hy(j,new C.I_(m,l.c,l.d,l.e,null),!1,null,x.X),$async$zR)
case 11:w=12
return A.b(r.hZ(),$async$zR)
case 12:t=2
w=8
break
case 6:t=5
i=s.pop()
j=A.aa(i)
if(j instanceof A.lH){o=j
j=r.c
if(j==null){w=1
break}j.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}else{n=j
j=r.c
if(j==null){w=1
break}j.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zR,v)},
XR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hVC(r,!0,"Join group","ABC12345",B.yn,1.6,"Enter the group code from the owner (3 letters + numbers).","Join with code"),$async$XR)
case 3:s=e
if(s==null||t.c==null){w=1
break}w=4
return A.b(t.tz(s),$async$XR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XR,v)},
tz(d){return this.bYG(d)},
bYG(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$tz=A.e(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(C.U9(d),$async$tz)
case 3:g=a0
if(g==null){m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(D.eUX)
w=1
break}w=g.alN(r.a.c)?4:5
break
case 4:m=r.c
if(m==null){w=1
break}l=g.a
k=r.a
w=6
return A.b(A.hy(m,new C.I_(l,k.c,k.d,k.e,null),!1,null,x.X),$async$tz)
case 6:w=7
return A.b(r.hZ(),$async$tz)
case 7:w=1
break
case 5:if(g.aF9(r.a.c)){m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(D.eRw)
w=1
break}m=g.c
l=g.a
w=8
return A.b(C.aYh(g.gwG(),l,!1,m),$async$tz)
case 8:if(!a0){m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(D.eSU)
w=1
break}m=r.c
m.toString
l=r.a
w=9
return A.b(C.hVv(m,g,l.d,l.c),$async$tz)
case 9:q=a0
if(q==null||r.c==null){w=1
break}t=11
m=g.e
l=r.a.c
k=q.a
j=q.b
i=q.c
w=14
return A.b(C.aYp(q.d,l,q.e,m,k,j,i),$async$tz)
case 14:p=a0
if(p==null){m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(D.eV4)
w=1
break}t=2
w=13
break
case 11:t=10
f=s.pop()
m=A.aa(f)
if(m instanceof A.lH){o=m
m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{n=m
m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Could not send your request. "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=13
break
case 10:w=2
break
case 13:if(r.c==null){w=1
break}w=15
return A.b(r.hZ(),$async$tz)
case 15:m=r.c
if(m==null){w=1
break}w=16
return A.b(A.ca(null,null,!0,null,new C.dJH(),m,null,!0,!0,x.H),$async$tz)
case 16:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$tz,v)},
YO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.hy(r,D.fVm,!1,null,x.N),$async$YO)
case 3:s=e
if(s==null||s.length===0||t.c==null){w=1
break}w=4
return A.b(t.tz(s),$async$YO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YO,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
m===$&&A.c()
w=o.e
w===$&&A.c()
v=o.f
v===$&&A.c()
u=A.c6(new A.h5(A.a([m,w,v],x.U)),new C.dJM(o),n)
t=o.a.e?A.aH(n,n,n,n,D.bHY,n,n,n,new C.dJN(o,d),n,n,n,n,"All groups (admin)",n):n
t=C.fVD(n,!1,n,new C.dJO(d),n,n,!1,"LIGHTNING GROUPS",t)
s=x.p
m=A.a([new C.bgr(m,w,v,o.gbHn(),o.gbYF(),o.gc3O(),n),B.e3,o.ayY("YOU OWN")],s)
if(J.cn(o.w))m.push(new A.D(B.e5,A.d("Create your free group \u2014 one free owned group.",n,n,n,n,n,n,K.IM,n,n,n),n))
else{r=J.h1M(o.w)
B.d.v(m,r.gdK(r).dt(0,new C.dJP(o,d),x.l))}if(J.cy(o.z)){r=A.a([B.by,o.ayY("WAITING FOR APPROVAL")],s)
for(q=J.aV(o.z);q.C();){p=q.gS(q)
r.push(new C.azP(p,"Request sent \xb7 "+p.d+" has to approve you",new C.dJQ(d),w,v,0,"...",n))}B.d.v(m,r)}m.push(B.by)
m.push(o.ayY("YOU JOINED"))
if(J.cn(o.x))m.push(new A.D(B.e5,A.d("Join with a code or QR from a friend.",n,n,n,n,n,n,K.IM,n,n,n),n))
else{w=J.h1M(o.x)
B.d.v(m,w.gdK(w).dt(0,new C.dJR(o,d),x.l))}return A.yy(A.c8(n,B.bX,new A.an(B.W,n,B.aa,B.r,A.a([u,A.bl(!0,A.v(A.a([new A.D(E.LY,t,n),A.E(A.cz(m,n,D.bst,n,n,B.ah,!1),1)],s),B.aj,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],s),n),n,!1,!1,n,n),B.T1,x.I)},
b4U(d,e){var w=this.r
w===$&&A.c()
return A.c6(w,new C.dJJ(this,d,e),null)},
ayY(d){var w=null
return new A.D(B.cz,A.d(d,w,w,w,w,w,w,A.l(w,w,B.b1.j(0.85),w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w),w)}}
C.apQ.prototype={
R(){return new C.bjj(new A.as(B.as,$.aw()),A.a([],x.D),null,null)},
ge_(){return this.c}}
C.bjj.prototype={
a_(){var w,v=this,u=null
v.a1()
v.r=A.bn(C.fSj(),!0,x.L)
w=A.bj(u,B.pI,u,1,u,v)
w.fd(0,!0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.jW,u,1,u,v)
w.cH(0)
v.e!==$&&A.aP()
v.e=w
v.hZ()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v.U$=$.aw()
v.P$=0
w.buo()},
hZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.I3(),$async$hZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.e99(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hZ,v)},
gbNn(){var w,v=B.a.i(this.x).toLowerCase()
if(v.length===0)return this.r
w=J.dH(this.r,new C.e98(v))
w=A.C(w,w.$ti.k("J.E"))
return w},
a_5(d){return this.cc4(d)},
cc4(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a_5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return A.b(A.hy(s,new C.I_(d.a,t.c,t.d,!0,null),!1,null,x.X),$async$a_5)
case 2:w=3
return A.b(u.hZ(),$async$a_5)
case 3:return A.h(null,v)}})
return A.i($async$a_5,v)},
NH(d){return this.bJj(d)},
bJj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.e95(d),s,null,!0,!0,x.y),$async$NH)
case 3:if(f!==!0){w=1
break}w=4
return A.b(C.aYn(d.a),$async$NH)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted "+d.e,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=5
return A.b(t.hZ(),$async$NH)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NH,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.gbNn(),n=q.d
n===$&&A.c()
w=q.e
w===$&&A.c()
w=A.c6(new A.h5(A.a([n,w],x.U)),new C.e9e(q),p)
n=q.w
v=n?"Close search":"Search groups"
u=x.p
v=A.a([new A.D(E.LY,C.fVD(p,!1,p,new C.e9f(d),p,p,!1,"ALL GROUPS",A.aH(p,p,p,p,A.X(n?B.cD:B.fe,B.ev,p,p,p,20),p,p,p,new C.e9g(q),p,p,p,p,v,p)),p)],u)
if(q.w)v.push(new A.D(B.xD,A.aM(p,B.T,!0,p,!0,B.r,p,A.aN(),q.f,B.b1,p,p,p,p,2,A.bs(p,new A.b4(4,A.m(14),new A.ay(B.b1.j(0.3),1,B.q,-1)),p,B.ej,p,p,p,p,!0,new A.b4(4,A.m(14),new A.ay(B.b1.j(0.25),1,B.q,-1)),p,p,p,p,p,B.fp,!0,p,p,p,p,new A.b4(4,A.m(14),D.aXS),p,p,p,p,p,p,p,p,B.kG,"Search name, code, owner\u2026",p,p,p,p,p,!0,p,p,p,!0,!0,!1,p,D.bLg,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ai,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.e9h(q),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dn,!0,B.a4,p,B.an,p,p,p,p),p))
n=J.a6(o)
t=n.gM(o)
s=n.gM(o)===1?"":"s"
r=B.a.i(q.x).length===0?"":" matching"
v.push(new A.D(D.bsy,A.d(""+t+" group"+s+r,p,p,p,p,p,p,A.l(p,p,B.b1.j(0.85),p,p,p,p,p,p,p,p,11,p,p,B.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p),p))
v.push(A.E(n.gam(o)?D.b4R:A.k8(!0,p,p,new C.e9i(q,o),n.gM(o),p,D.bs9,p,p,!1,!1),1))
return A.yy(A.c8(p,B.bX,new A.an(B.W,p,B.aa,B.r,A.a([w,A.bl(!0,A.v(v,B.aj,p,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],u),p),p,!1,!1,p,p),B.T1,x.I)}}
C.ab5.prototype={
B(d){var w=null,v=A.m(16),u=A.m(16),t=A.I(B.b1.j(0.28),B.q,1),s=this.c,r=x.p
return new A.D(B.da,A.aG(!1,B.a1,!0,w,A.aL(!1,v,!0,A.eE(A.B(A.a([A.p(w,D.bH5,B.f,w,w,new A.o(B.b1.j(0.12),w,A.I(B.b1.j(0.5),B.q,1),w,w,w,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.v(A.a([A.d(s.e,w,w,w,w,w,w,D.f7M,w,w,w),B.bB,A.d("Owner "+s.d+" \xb7 "+s.gwG()+" people",w,1,B.a2,w,w,w,B.hf,w,w,w),A.d(s.c,w,1,B.a2,w,w,w,H.Da,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1),A.aH(w,w,w,w,D.bJ5,w,w,w,this.e,w,w,w,w,"Delete group",w),G.amJ],r),B.m,w,B.e,B.j,0,w,w),w,new A.o(B.fp,w,t,u,w,w,B.n),w,D.brk,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),w)}}
C.Cd.prototype={
B(d){return A.c6(this.e,new C.dcq(this),null)}}
C.azP.prototype={
B(d){return new A.D(B.e5,A.c6(new A.h5(A.a([this.f,this.r],x.U)),new C.dcG(this),null),null)}}
C.act.prototype={
a4(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=0+a7,b0=0+a8,b1=$.W(),b2=A.N()
b2.r=B.bX.gp(0)
b3.aY(new A.a9(0,0,a9,b0),b2)
w=A.N()
b2=a7*0.5
v=this.c
w.saq(A.aUs(new A.u(b2,a8*0.48),a7*0.38,A.a([B.b1.j(0.07+v*0.06),B.K],x.O),a6,B.x,a6,a6,0))
b3.aY(new A.a9(0,0,a9,b0),w)
u=a8*0.44
t=a7*0.28
b0=this.d*3.141592653589793
s=b0*2
for(a9=3+v*2,r=0.35+v*0.25,q=b3.a,p=8+v*4,o=0;o<3;++o){n=s+o*3.141592653589793*2/3
m=b2+Math.cos(n)*t
l=u+Math.sin(n)*t*0.55
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=B.b1.j(r).gp(0)
j=k.H()
q.drawCircle(m,l,a9,j)
j.delete()
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=B.b1.j(0.12).gp(0)
k.z=B.lt
j=k.H()
q.drawCircle(m,l,p,j)
j.delete()}i=A.N()
i.r=B.ev.j(0.18+v*0.12).gp(0)
i.b=B.ae
i.c=2
i.z=B.jo
a9=x.v
r=A.a([],a9)
h=new A.aO(b1.r,B.ap,a6,a6,r)
for(b1=s*1.6,o=0;o<=48;++o){g=o/48*3.141592653589793*1.4+b1
f=b2+Math.cos(g)*t*0.92
e=u+Math.sin(g)*t*0.42
if(o===0){p=new A.b5(f,e)
r.push(p)
k=h.f
if(k!=null)p.bA(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}else{p=new A.ap(f,e)
r.push(p)
k=h.f
if(k!=null)p.bA(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}}b3.aP(h,i)
d=new A.aO($.W().r,B.ap,a6,a6,A.a([],a9))
d.F(new A.b5(b2+14,u-52))
b1=u-4
d.F(new A.ap(b2-16,b1))
d.F(new A.ap(b2+2,b1))
d.F(new A.ap(b2-20,u+54))
a0=A.N()
a0.r=B.b1.j(0.1+v*0.08).gp(0)
a0.b=B.ae
a0.c=10
a0.z=B.yX
a1=A.N()
b2=this.b
a1.r=B.b1.j(0.32+b2*0.4).gp(0)
a1.b=B.ae
a1.c=2.4
a1.d=B.bP
a1.e=B.fB
for(b1=A.x1(d),r=A.a([],x.J),p=new A.vv(b1,!1,r),k=b1.a;p.C();){a2=p.c
if(a2===0||p.f)A.ba(A.jW('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--a2
p.jq()
a3=r[a2].b
a3===$&&A.c()
a3=a3.a.length()
a4=new A.aO(k,b1.b,a6,new A.cC([new A.Hd(p,a2),0,a3*b2,!0]),A.a([],a9))
j=a0.H()
a2=a4.gbK().a.snapshot()
q.drawPath((a4.e=new A.cE(a2)).a,j)
j.delete()
j=a1.H()
a2=a4.e
q.drawPath((a2==null?a4.e=new A.cE(a4.gbK().a.snapshot()):a2).a,j)
j.delete()}$.W()
a5=A.N()
a5.r=B.ev.j(0.14+v*0.2).gp(0)
for(a9=b0*4,b0=v*3,v=1.2+v*1.2,o=0;o<14;++o){b1=Math.sin(o*1.9+a9)
b2=Math.cos(o*2.3+b0)
j=a5.H()
q.drawCircle((b1*0.35+0.5)*a7,(b2*0.22+0.46)*a8,v,j)
j.delete()}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.I_.prototype={
R(){return new C.aCc(null,null)},
ge_(){return this.d}}
C.aCc.prototype={
gty(){var w=this.d
if(w!=null)w=w.a4w(this.a.d)||this.a.f
else w=!1
return w},
a_(){var w,v=this,u=null
v.a1()
v.d=C.c4Y(v.a.c)
w=A.bj(u,B.tw,u,1,u,v)
w.fd(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.jW,u,1,u,v)
w.cH(0)
v.f!==$&&A.aP()
v.f=w
v.r=A.dv(B.hJ,new C.dJE(v))
v.hZ()},
q(){var w=this,v=w.r
if(v!=null)v.a7(0)
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.btM()},
hZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aof(t.a.c),$async$hZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dJs(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hZ,v)},
CT(d){return this.bye(d)},
bye(a6){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$CT=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:if(!r.gty()||r.d==null){w=1
break}o=a6===B.rr
if(o&&!r.d.y){r.c.I(x.q).f.T(D.eSO)
w=1
break}if(o){n=r.d
n=n.y&&B.a.i(n.ax).length===0}else n=!1
if(n){r.c.I(x.q).f.T(D.eSh)
w=1
break}n=r.d
m=n.d
m=A.a([new A.FH(n.c,m)],x.S)
n=r.d.gFb()
B.d.v(m,new A.K(n,new C.dJg(),A.U(n).k("K<1,+email,name(n,n)>")))
n=r.d
l=n.y?B.a.i(n.ax):""
n=A.aX(x.N)
if(o&&l.length!==0)for(k=m.length,j=0;j<m.length;m.length===k||(0,A.L)(m),++j){i=m[j]
h=i.b
if(r.d.aCI(h,l,i.a))n.K(0,h)}k=r.c
k.toString
w=3
return A.b(C.hVB(k,n,o&&r.d.y?r.d.z:null,a6,m),$async$CT)
case 3:g=a8
if(g==null||r.c==null){w=1
break}n=g.b
if(n<=0){r.c.I(x.q).f.T(B.SX)
w=1
break}m=!1
if(o)if(l.length!==0){m=r.d
k=g.a
h=m.akJ(k)
m=m.aCI(k,l,h==null?"":h)}if(m){r.c.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(g.a+" already contributed to this round.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=o?4:5
break
case 4:m=r.c
m.toString
k=g.a
h=r.d
w=6
return A.b(C.hVs(m,n,h.y?h.z:null,k),$async$CT)
case 6:if(a8!==!0||r.c==null){w=1
break}case 5:m=r.d.x
k=Date.now()
h=g.a
f=g.c
e=new A.S(Date.now(),0,!1).a6()
d=r.a.d
a0=o&&r.d.y?r.d.ax:""
a1=o&&r.d.y?B.a.i(r.d.z):""
a2=r.d.akJ(h)
if(a2==null)a2=""
B.d.ck(m,0,new A.pL("led_"+k,a6,n,h,f,e,d,a0,a2,a1))
if(o){o=r.d
o=o.y&&o.ax.length!==0}else o=!1
if(o){a3=r.d.akJ(h)
if(a3!=null){o=r.d
o.cEx(o.ax,a3,h)}}t=8
o=r.d
o.toString
w=11
return A.b(C.I4(o),$async$CT)
case 11:t=2
w=10
break
case 8:t=7
a5=s.pop()
o=A.aa(a5)
if(o instanceof A.lH){q=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save ledger. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=10
break
case 7:w=2
break
case 10:w=12
return A.b(r.hZ(),$async$CT)
case 12:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$CT,v)},
Vz(d){return this.bAf(d)},
bAf(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Vz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=r.d
if(l==null){w=1
break}t=4
w=7
return A.b(C.aYm(l.a,d.a),$async$Vz)
case 7:q=f
o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
n=d.b
o.T(A.b2(null,null,null,null,null,B.r,null,A.d(q?n+" is in the group now.":"Could not approve "+n+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.aa(k)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Could not approve. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:w=8
return A.b(r.hZ(),$async$Vz)
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Vz,v)},
NB(d){return this.bIf(d)},
bIf(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$NB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=r.d
if(n==null){w=1
break}p=r.c
p.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dJq(d),p,null,!0,!0,x.y),$async$NB)
case 3:if(f!==!0){w=1
break}t=5
w=8
return A.b(C.aog(n.a,d.a,null,"Join request declined",r.a.d),$async$NB)
case 8:t=2
w=7
break
case 5:t=4
m=s.pop()
q=A.aa(m)
p=r.c
if(p==null){w=1
break}p.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Could not decline. "+A.t(q),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:w=9
return A.b(r.hZ(),$async$NB)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NB,v)},
cn1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.gamG(),i=B.ay.j(0.07),h=A.m(16),g=A.I(B.ay.j(0.4),B.q,1),f=A.m(12),e=x.p
f=A.a([A.B(A.a([A.p(k,A.d(""+j.length,k,k,k,k,k,k,B.rM,k,k,k),B.f,k,k,new A.o(B.ay,k,k,f,k,k,B.n),k,k,k,k,B.fK,k,k,k),B.ab,D.bwO],e),B.m,k,B.e,B.j,0,k,k),B.N],e)
for(w=j.length,v=0;v<j.length;j.length===w||(0,A.L)(j),++v){u=j[v]
t=new A.aT(14,14)
s=new A.ay(B.b1.j(0.25),1,B.q,-1)
r=A.a([new A.x(u.b,k,B.i7,k,k,k,k,k,k,k,k,k),B.at,new A.D(B.vj,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.tM,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(u.a,k,B.rL,k,k,k,k,k,k,k,k,k),k)],e),k),k)],e)
q=u.f
if(q.length!==0){q=A.n4(q)
r.push(new A.D(B.vj,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.iB,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(q,k,B.rL,k,k,k,k,k,k,k,k,k),k)],e),k),k))}q=u.r
if(q.length!==0)r.push(new A.D(B.vj,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.kU,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(q,k,B.rL,k,k,k,k,k,k,k,k,k),k)],e),k),k))
q=u.w
if(q.length!==0)r.push(new A.D(B.vj,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.lQ,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(q,k,B.rL,k,k,k,k,k,k,k,k,k),k)],e),k),k))
for(q=u.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.L)(q),++o){n=q[o]
m=J.a6(n)
l=m.h(n,"relation")
l=C.hhx(l==null?"":l)
m=m.h(n,"name")
if(m==null)m=""
r.push(new A.D(B.vj,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.y4,B.c1,k,k,k,14),B.bp,new A.bD(1,B.bh,new A.x(l+": "+m,k,B.rL,k,k,k,k,k,k,k,k,k),k)],e),k),k))}r.push(B.S)
r.push(new A.cm(B.aO,B.e,B.j,B.m,k,B.p,k,0,A.a([new A.bD(1,B.bh,A.df(P.a0E,B.Dm,new C.dJt(this,u),A.bm(B.bl,k,k,k,B.c,k,k,k,k,k,k,k)),k),B.ab,new A.bD(1,B.bh,A.ey(B.a0m,B.J9,new C.dJu(this,u),A.di(k,k,k,k,k,k,k,k,k,B.cf,k,k,k,k,k,D.aY5,k,k,k,k)),k)],e),k))
f.push(A.p(k,A.v(r,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(B.fp,k,new A.bO(s,s,s,s),new A.bq(t,t,t,t),k,k,B.n),k,k,k,B.kr,B.bm,k,k,k))}return A.p(k,A.v(f,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.kQ,B.bm,k,k,k)},
bZd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=x.p,i=A.a([],j),h=A.aX(x.N)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=t.b
if(s===B.rr){r=t.w
if(r.length===0)r="other"
if(!h.K(0,r))continue
i.push(this.cob(d,r))
continue}q=s===B.a4c
p=q?B.cf:B.iD
s=new A.aT(12,12)
o=new A.ay(p.j(0.25),1,B.q,-1)
n=A.X(q?B.alg:B.tV,p,k,k,k,18)
if(q){m=t.d
m=A.cX(t.e,"declined",0)?m+": request declined":m+" removed"}else m="Spending: "+t.d
m=A.a([new A.x(m,k,B.iH,k,k,k,k,k,k,k,k,k)],j)
l=t.e
if(l.length!==0&&!q)m.push(new A.x(l,k,B.hf,k,k,k,k,k,k,k,k,k))
m=A.v(m,B.F,k,B.e,B.j,0,B.p)
l=q?"":"-$"+B.k.aa(t.c,2)
i.push(A.p(k,new A.cm(B.aO,B.e,B.j,B.m,k,B.p,k,0,A.a([n,B.av,new A.bD(1,B.bh,m,k),new A.x(l,k,new A.G(!0,p,k,k,k,k,k,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],j),k),B.f,k,k,new A.o(B.fp,k,new A.bO(o,o,o,o),new A.bq(s,s,s,s),k,k,B.n),k,k,k,B.cz,B.bm,k,k,k))}return i},
cob(d,e){var w,v,u=null,t=C.hUU(d,e),s=C.hUV(d,e,t),r=B.d.cI(t,0,new C.dJv()),q=e!=="other"&&d.y&&d.ax===e,p=d.gwG(),o=A.m(14),n=A.I((q?B.b2:B.b1).j(0.35),B.q,1),m=A.m(14),l=A.m(14),k=(q?B.b2:B.b1).j(0.14),j=A.I((q?B.b2:B.b1).j(0.5),B.q,1)
k=A.p(u,A.X(B.mw,q?B.b2:B.b1,u,u,u,20),B.f,u,u,new A.o(k,u,j,u,u,u,B.a6),u,40,u,u,u,u,u,40)
j=x.p
w=A.a([new A.dq(1,B.cn,A.d(s,u,2,B.a2,u,u,u,Q.Tn,u,u,u),u)],j)
if(q)B.d.v(w,A.a([B.bp,A.p(u,D.fnV,B.f,u,u,new A.o(B.b2.j(0.2),u,u,A.m(8),u,u,B.n),u,u,u,u,B.ne,u,u,u)],j))
w=A.E(A.v(A.a([A.B(w,B.m,u,B.e,B.j,0,u,u),B.cV,A.d(""+t.length+" of "+p+" gave \xb7 tap to see who",u,u,u,u,u,u,B.hf,u,u,u)],j),B.F,u,B.e,B.j,0,B.p),1)
v=B.k.aa(r,2)
return A.p(u,A.aG(!1,B.a1,!0,m,A.aL(!1,l,!0,new A.D(B.bm,A.B(A.a([k,B.av,w,A.d("+$"+v,u,u,u,u,u,u,A.l(u,u,q?B.b2:B.b1,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.db,A.X(B.ey,B.b1.j(0.6),u,u,u,u)],j),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.dJw(this,d,e,s,t,q),u,u,u,u,u,u,u),B.f,B.fp,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(u,u,n,o,u,u,B.n),u,u,u,B.cz,u,u,u,u)},
PL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$PL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.d
if(k==null){w=1
break}if(!r.gty()&&!k.y){w=1
break}o=r.c
o.toString
n=r.e
n===$&&A.c()
w=3
return A.b(C.hVu(o,k,r.gty(),n),$async$PL)
case 3:m=e
if(m==null||r.c==null){w=1
break}w=r.gty()?4:5
break
case 4:r.d=m
t=7
w=10
return A.b(C.I4(m),$async$PL)
case 10:t=2
w=9
break
case 7:t=6
j=s.pop()
o=A.aa(j)
if(o instanceof A.lH){q=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save help mode. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=9
break
case 6:w=2
break
case 9:w=11
return A.b(r.hZ(),$async$PL)
case 11:case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$PL,v)},
QB(d,e){return this.cmB(d,e)},
cmB(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(!t.gty()||t.d==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.hVy(s,e,d),$async$QB)
case 3:if(g!==!0){w=1
break}w=4
return A.b(C.aog(t.d.a,e,d,"Removed from group",t.a.d),$async$QB)
case 4:w=5
return A.b(t.hZ(),$async$QB)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QB,v)},
a_d(d,e,f,g){return this.cct(d,e,f,g)},
cct(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_d=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:p=t.d
if(p==null){w=1
break}s=t.c
s.toString
r=t.e
r===$&&A.c()
q=t.gty()
w=3
return A.b(C.hVw(s,d,p,q,e,f,t.gty()?new C.dJr(t,p):null,r,g),$async$a_d)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a_d,v)},
acX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.aMX(s,r.e),$async$acX)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acX,v)},
WD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$WD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.d
if(i==null){w=1
break}t=4
m=B.a.i(i.e)
l=new A.a8S(-1,1,!0,null,null,D.edB,D.edz,null,new A.b1V(A.a([],x.B),A.T(x.N,x.Y)),null,null)
k=A.hax("NGMY-GROUP:"+m.toUpperCase(),1,-1)
if(k.a!==B.Sa){m=k.c
m.toString
A.ba(m)}m=k.b
l.x=m
l.z=m.a
l.aUE()
q=l
w=7
return A.b(q.anv(720),$async$WD)
case 7:p=e
if(p==null||r.c==null){w=1
break}w=8
return A.b(A.rR(J.eT(B.dD.gaM(p)),"ngmy_group_"+i.e+".png"),$async$WD)
case 8:o=e
m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
h=s.pop()
n=A.aa(h)
m=r.c
if(m==null){w=1
break}m.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save QR: "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$WD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d,e=h.e
e===$&&A.c()
w=h.f
w===$&&A.c()
v=A.c6(new A.h5(A.a([e,w],x.U)),new C.dJy(h),g)
u=f==null
t=u?g:f.e
s=u?g:new C.dJz(d,f)
r=u?g:f.y
if(!h.gty()){q=u?g:f.y
q=q===!0}else q=!0
p=x.p
q=A.a([new A.D(E.LY,C.fVD(t,r===!0,e,new C.dJA(d),s,h.gcc5(),q,"GROUP",g),g)],p)
if(!u){u=A.a([new A.D(D.brQ,new C.bgt(e,A.B(A.a([h.azS("In",f.gaHy()),h.azS("Out",f.gwS()),h.azS("Balance",f.gaHy()-f.gwS()),h.b5b("People",f.gwG(),!1)],p),B.m,g,B.e,B.j,0,g,g),g),g)],p)
if(h.gty())u.push(new A.D(B.fJ,A.B(A.a([A.E(new C.Cd("Contribution",D.alQ,e,new C.dJB(h),!1,g),1),B.ab,A.E(new C.Cd("Spending",B.vA,e,new C.dJC(h),!0,g),1)],p),B.m,g,B.e,B.j,0,g,g),g))
u.push(B.S)
t=A.a([],p)
for(s=[D.ef8,D.efR,D.egq],o=0;o<3;++o){n=s[o]
r=n.a
m=r===2?0:6
l=h.w
k=!1
if(r===1){j=h.d
if(j!=null){k=h.a
i=k.d
k=B.a.i(j.c.toLowerCase())===B.a.i(i.toLowerCase())||k.f}}k=k?f.gamG().length:0
t.push(new A.bD(1,B.bh,new A.D(new A.Q(0,0,m,0),new C.bgu(n.b,l===r,e,w,new C.dJD(h,n),k,g),g),g))}u.push(new A.D(B.fV,A.B(t,B.m,g,B.e,B.j,0,g,g),g))
u.push(A.E(h.bCE(f),1))
B.d.v(q,u)}else q.push(D.bxB)
return A.yy(A.c8(g,B.bX,new A.an(B.W,g,B.aa,B.r,A.a([v,A.bl(!0,A.v(q,B.m,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],p),g),g,!1,!1,g,g),B.T1,x.I)},
b5b(d,e,f){var w=null,v=A.d(d,w,w,w,w,w,w,D.a7m,w,w,w)
return A.E(A.v(A.a([v,B.bB,A.d(f?"$"+B.k.aa(e,2):B.o.u(B.k.N(e)),w,w,w,w,w,w,D.f6d,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
azS(d,e){return this.b5b(d,e,!0)},
bCE(d){var w,v,u,t,s,r,q=this,p=null
switch(q.w){case 1:w=A.a([q.cgw(d,d.d,d.c,"Owner",d.f,new C.dJj(q,d))],x.p)
if(q.gty()&&d.gamG().length!==0)w.push(q.cn1(d))
v=d.gFb()
B.d.v(w,new A.K(v,new C.dJk(q,d),A.U(v).k("K<1,r>")))
if(d.gwG()>=100&&q.gty()){v=q.e
v===$&&A.c()
w.push(new A.D(B.AU,new C.Cd("Unlock 100+ members",B.pW,v,new C.dJl(q,d),!1,p),p))}return A.cz(w,p,B.tE,p,p,B.ah,!1)
case 2:w=A.m(16)
v=A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,24)],x.V)
u=d.e
v=A.av(A.p(p,A.EK(B.c,"NGMY-GROUP:"+B.a.i(u).toUpperCase(),B.a5F,1,p,B.a5G,!0,B.bU,200,-1),B.f,p,p,new A.o(B.c,p,p,w,v,p,B.n),p,p,p,p,B.bD,p,p,p),p,p,p)
w=x.p
u=A.av(A.aE(p,A.B(A.a([A.d(u,p,p,p,p,p,p,D.f01,p,p,p)],w),B.m,p,B.e,B.Q,0,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dJm(q,d),p,p,p,p,p,p,!1,B.a8),p,p,p)
t=q.e
t===$&&A.c()
return A.cz(A.a([v,B.aQ,u,B.N,D.b4r,B.aB,new C.Cd("Copy invite code",B.fL,t,q.gc3L(),!1,p),B.S,new C.Cd("Download QR",B.hA,t,q.gbKP(),!0,p),B.ac,D.ff1],w),p,B.tE,p,p,B.ah,!1)
default:w=q.a
s=C.byw(d,w.e,w.d)
r=B.d.cI(s,0,new C.dJn())
w=A.m(12)
v=A.I(B.b1.j(0.28),B.q,1)
u=x.p
u=A.a([A.p(p,A.B(A.a([D.bJz,B.av,A.E(A.v(A.a([A.d(s.length===0?"Your contributions: none yet":"Your contributions: $"+B.k.aa(r,2)+" ("+s.length+")",p,p,p,p,p,p,B.m4,p,p,p),B.at,A.d("Group spending: $"+B.k.aa(d.gwS(),2)+" \xb7 Balance $"+B.k.aa(d.gaHy()-d.gwS(),2),p,p,p,p,p,p,B.hf,p,p,p)],u),B.F,p,B.e,B.j,0,B.p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(B.fp,p,v,w,p,p,B.n),p,p,p,B.e5,B.bm,p,p,p)],u)
if(d.x.length===0)u.push(D.fgX)
else B.d.v(u,q.bZd(d))
return A.cz(u,p,B.tE,p,p,B.ah,!1)}},
b02(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.hOh(d,e,f),j=k>0,i=d.a4N(e,f)
if(d.y){w=d.ax
v=w.length!==0&&!d.Si(e,w)}else v=!1
w=A.m(14)
u=A.I(B.b1.j(0.2),B.q,1)
t=A.m(14)
s=A.m(14)
r=B.b1.j(0.12)
q=A.I(B.b1.j(0.4),B.q,1)
if(v)p=B.oQ
else p=j?B.h8:B.ni
if(v)o=B.iD
else o=j?B.b1:B.c1
q=A.p(l,A.X(p,o,l,l,l,20),B.f,l,l,new A.o(r,l,q,l,l,l,B.a6),l,40,l,l,l,l,l,40)
r=A.d(e,l,l,l,l,l,l,B.iH,l,l,l)
o=A.d(g+" \xb7 "+f,l,l,l,l,l,l,H.Da,l,l,l)
if(v)p="Has not given this round \xb7 gave "+d.ans(e,f)+"x \xb7 missed "+i
else{p=""+i
p=j?"Gave "+d.ans(e,f)+"x ($"+B.k.aa(k,2)+") \xb7 missed "+p:"Has not given yet \xb7 missed "+p}if(v)n=B.iD.j(0.9)
else if(j)n=B.b1.j(0.85)
else n=i>0?B.iD.j(0.85):B.iD.j(0.85)
m=x.p
m=A.a([q,B.av,A.E(A.v(A.a([r,o,B.bB,A.d(p,l,l,l,l,l,l,A.l(l,l,n,l,l,l,l,l,l,l,l,10,l,l,B.a5,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],m),B.F,l,B.e,B.j,0,B.p),1)],m)
if(a0!=null)m.push(A.aH(l,l,l,l,A.X(B.ak2,B.h_.j(0.85),l,l,l,l),l,l,l,a0,l,l,l,l,"Remove member",l))
else m.push(A.X(B.ey,B.b1.j(0.6),l,l,l,l))
return A.p(l,A.aG(!1,B.a1,!0,t,A.aL(!1,s,!0,new A.D(B.bm,A.B(m,B.m,l,B.e,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,a1,l,l,l,l,l,l,l),B.f,B.fp,0,l,l,l,l,l,B.ag),B.f,l,l,new A.o(l,l,u,w,l,l,B.n),l,l,l,B.cz,l,l,l,l)},
cgw(d,e,f,g,h,i){return this.b02(d,e,f,g,h,null,i)}}
C.aCd.prototype={
R(){return new C.aCe(A.z4(B.XE,B.nE,B.u5))}}
C.aCe.prototype={
c3N(d){var w,v,u,t,s,r
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=A.fC5(t==null?"":t)
if(s!=null){this.e=!0
this.c.toString
r=$.rU().gbh()
if(r!=null&&r.c!=null&&r.px())r.O(s)
return}}},
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eC(w,w,w,!0,!0,B.w,w,1,w,w,w,!1,w,!1,w,w,A.aH(w,w,w,w,B.NO,w,w,w,new C.dJF(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.ftf,w,w,w,1,w,!0),B.w,A.z3(this.d,B.bS,this.gc3M()),w,!1,!1,w,w)}}
C.bgv.prototype={
B(d){var w=this,v=null,u=A.m(28),t=A.I(B.b1.j(0.22),B.q,1.1),s=A.a([new A.ac(0,B.G,B.w.j(0.35),B.cJ,14)],x.V),r=A.aH(v,v,v,v,D.bH3,v,v,v,w.d,v,v,v,v,"Back",v),q=w.e,p=q!=null&&q.length!==0,o=w.c
r=A.a([r,A.E(p?A.v(A.a([A.d(o,v,v,v,v,v,v,D.eZv,B.L,v,v),B.bB,A.aG(!1,B.a1,!0,v,A.aL(!1,A.m(8),!0,new A.D(B.eB,A.d(q,v,1,B.a2,v,v,v,D.f3C,B.L,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)],x.p),B.m,v,B.e,B.Q,0,B.p):A.d(o,v,1,B.a2,v,v,v,E.aQr,B.L,v,v),1)],x.p)
q=w.z
if(q!=null)r.push(q)
else if(w.r)r.push(new C.beV(w.w,w.x,w.y,v))
else r.push(B.zr)
return A.p(v,A.B(r,B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.bX,v,t,u,s,v,B.n),v,v,v,v,B.YO,v,v,v)}}
C.beV.prototype={
B(d){var w=this,v=new C.dcY(w),u=w.d
if(u==null||!w.c)return v.$1(0)
return A.c6(u,new C.dcX(w,v),null)}}
C.bgu.prototype={
B(d){return A.c6(new A.h5(A.a([this.e,this.f],x.U)),new C.dgQ(this),null)}}
C.bgr.prototype={
B(d){var w=this
return A.c6(new A.h5(A.a([w.c,w.d,w.e],x.U)),new C.dgO(w),null)}}
C.bgt.prototype={
B(d){return A.c6(this.c,new C.dgP(this),null)}}
C.Pz.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a,n=e.b,m=A.bx(new A.a9(0,0,0+o,0+n),B.jJ)
$.W()
w=A.N()
v=p.b
w.r=B.b1.j(0.06*v).gp(0)
w.b=B.ae
w.c=2
w.z=B.rn
d.aD(m,w)
u=A.N()
u.r=B.ev.j(0.35+0.45*v).gp(0)
u.z=B.jo
t=o+n
s=2*t
r=B.k.E(p.d*s,s)
if(r<o)q=new A.u(r,0)
else if(r<t)q=new A.u(o,r-o)
else{t=2*o+n
q=r<t?new A.u(t-r,n):new A.u(0,s-r)}d.ae(q,3.5+v*2,u)
v=A.N()
v.r=B.ev.j(0.9).gp(0)
d.ae(q,1.5,v)
if(!p.c)return
v=new C.dgN(p,d)
v.$3(E.aGe,!1,!1)
o-=10
v.$3(new A.u(o,8),!0,!1)
n-=8
v.$3(new A.u(10,n),!1,!0)
v.$3(new A.u(o,n),!0,!0)},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bgs.prototype={}
C.biY.prototype={
oy(d,e){var w,v,u,t,s,r,q=A.af("[^A-Z0-9]",!0,!1,!1,!1),p=A.aK(e.a.toUpperCase(),q,"")
q=p.length
if(q===0)return B.as
w=new A.fe("")
v=new A.fe("")
for(u=0;u<q;++u){t=p[u]
s=A.af("[A-Z]",!0,!1,!1,!1)
if(s.b.test(t)&&w.a.length<3)w.a+=t
else{s=A.af("[0-9]",!0,!1,!1,!1)
if(s.b.test(t)&&v.a.length<5)v.a+=t}}q=w.a
s=v.a
r=(q.charCodeAt(0)==0?q:q)+(s.charCodeAt(0)==0?s:s)
return new A.bb(r,A.ha(B.bw,r.length),B.aN)}}
C.bhn.prototype={
gbNo(){var w,v=this,u=C.hRz(v.d,v.e,v.f)
switch(v.ay.a){case 0:w=u
break
case 1:w=x.C
w=A.C(new A.e9(u,w),w.k("J.E"))
break
case 2:w=x.o
w=A.C(new A.e9(u,w),w.k("J.E"))
break
default:w=null}return w},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.gbNo(),m=p.d,l=p.e,k=p.f,j=C.byw(m,l,k),i=B.d.cI(j,0,new C.dmX()),h=m.a4N(l,k)
if(m.y){w=m.ax
v=w.length!==0&&!m.Si(l,w)}else v=!1
if(m.ax.length===0)u=D.awG
else{w=A.U(j).k("a1<1>")
u=A.C(new A.a1(j,new C.dmY(p),w),w.k("J.E"))}if(!v)t=h>0&&i<=0
else t=!0
w=x.p
k=A.a([A.c6(p.x,new C.dmZ(p,t),o),B.ac,A.d(l,o,o,o,o,o,o,B.hg,B.L,o,o),A.d(p.r+" \xb7 "+k,o,o,o,o,o,o,B.hf,B.L,o,o)],w)
B.d.v(k,A.a([B.at,A.d("Joined "+B.d.gL(p.w.bS().u(0).split(" ")),o,o,o,o,o,o,H.Da,B.L,o,o)],w))
k.push(B.aQ)
l=A.m(14)
s=A.I((t?B.iD:B.b1).j(0.35),B.q,1)
if(v)r="MISSED THIS HELP ROUND"
else r=h>0?"MISSED CONTRIBUTIONS":"CONTRIBUTION STATUS"
r=A.d(r,o,o,o,o,o,o,A.l(o,o,t?B.iD:B.b1.j(0.9),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.2,o,o,o,o,o,o),o,o,o)
if(v)q='Not recorded for "'+B.a.i(m.z)+'". They will be marked missed when help mode ends.'
else if(h>0){q=h===1?"":"s"
q=""+h+" missed contribution"+q+" total \xb7 $"+B.k.aa(i,2)+" contributed overall"}else q="Total contributed: $"+B.k.aa(i,2)
q=A.a([r,B.N,A.d(q,o,o,o,o,o,o,L.Td,B.L,o,o)],w)
if(m.y&&B.a.i(m.z).length!==0)B.d.v(q,A.a([B.N,A.d("Active help: "+B.a.i(m.z),o,o,o,o,o,o,A.l(o,o,B.b2.j(0.95),o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),B.L,o,o)],w))
if(u.length!==0)B.d.v(q,A.a([B.am,A.d("This round: $"+B.k.aa(B.d.cI(u,0,new C.dn_()),2),o,o,o,o,o,o,D.eZF,B.L,o,o)],w))
k.push(A.p(o,A.v(q,B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.fp,o,s,l,o,o,B.n),o,o,o,o,B.bD,o,o,o))
k.push(B.aQ)
m=A.E(A.d("CONTRIBUTION HISTORY",o,o,o,o,o,o,A.l(o,o,B.b1.j(0.85),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.4,o,o,o,o,o,o),o,o,o),1)
l=p.ay
k.push(A.B(A.a([m,A.BK(o,B.fp,A.X(D.bDz,l===D.a8W?B.b1.j(0.75):B.iT,o,o,o,20),new C.dn0(p),B.J,p.CW,B.af,"Filter history",x.E)],w),B.m,o,B.e,B.j,0,o,o))
k.push(B.N)
if(n.length===0){if(l===D.aUl)m="No missed contributions for this member."
else m=l===D.aUk?"No recorded contributions for this member.":"No history yet for this member."
k.push(A.d(m,o,o,o,o,o,o,B.kG,o,o,o))}else B.d.v(k,new A.K(n,new C.dn1(p,d),A.U(n).k("K<1,r>")))
k.push(B.ac)
k.push(A.bK(!1,D.aQR,o,o,!0,o,o,new C.dn2(d),o,o))
return A.cz(k,p.c,o,o,o,B.ah,!1)},
au4(d,e){var w,v=null,u=A.a([],x.p),t=this.ay===e
if(t)u.push(D.bH6)
else u.push(B.og)
u.push(B.ab)
w=t?B.iT:B.ad
u.push(A.d(d,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,v,v,v,t?B.H:B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.zz(A.B(u,B.m,v,B.e,B.j,0,v,v),48,e,x.E)},
bWN(d,e){var w,v,u,t,s,r,q,p,o=this,n=null
if(e instanceof C.Pf){w=e.b
v=w.w.length!==0
if(v&&w.e.length!==0)u=w.e
else{t=o.d.z
u=t.length!==0&&v?t:w.d}v=A.m(12)
t=A.I(B.b1.j(0.22),B.q,1)
s=x.p
return A.p(n,A.B(A.a([D.bL9,B.av,A.E(A.v(A.a([A.d(u,n,2,B.a2,n,n,n,D.aOX,n,n,n),B.cV,A.d(B.d.gL(w.f.bS().u(0).split(".")),n,n,n,n,n,n,D.a7m,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1),B.ab,A.d("$"+B.k.aa(w.c,2),n,n,n,n,n,n,D.f7a,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fp,n,t,v,n,n,B.n),n,n,n,B.cz,B.bm,n,n,n)}x.a.a(e)
v=A.m(16)
t=e.c
s=A.I(B.iD.j(t?0.35:0.5),B.q,1)
r=A.X(t?B.oM:B.cD,B.iD,n,n,n,18)
q=A.d(e.b,n,2,B.a2,n,n,n,D.aOX,n,n,n)
p=x.p
p=A.a([r,B.av,A.E(A.v(A.a([q,B.cV,A.d(t?"Active help round":B.d.gL(e.a.bS().u(0).split(".")),n,n,n,n,n,n,D.a7m,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
if(o.ch&&!t&&e.d.length!==0&&o.cx!=null)p.push(A.bK(!1,D.fhg,n,n,!0,n,n,new C.dmW(o,d,e),n,A.fv(n,n,n,n,n,n,n,n,n,n,n,B.iT,n,n,n,B.au,n,B.fr,n,n,n,n,n,B.k2,n,n)))
else p.push(A.d(t?"PENDING":"MISSED",n,n,n,n,n,n,D.f0O,n,n,n))
return A.p(n,A.B(p,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fp,n,s,v,n,n,B.n),n,n,n,B.cz,B.bm,n,n,n)},
gdd(){return this.f}}
C.os.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.b1.j(0.4),B.q,1.3),t=A.a([new A.ac(0,B.G,B.b1.j(0.22),B.J,28)],x.V)
return A.p(w,A.b3(new A.D(B.Yv,this.c,w),w,w,new C.Pz(0.85,this.d,0,w),B.au),B.f,w,w,new A.o(B.bX,w,u,v,t,w,B.n),w,w,w,F.xz,w,w,w,w)}}
C.bfY.prototype={
gks(d){return this.b},
gdc(d){return this.c}}
C.aAr.prototype={
R(){var w=$.aw()
return new C.aAs(new A.as(B.as,w),new A.as(B.as,w),A.a([],x.i))}}
C.aAs.prototype={
gavU(){var w,v=this.d
if(v===$){w=this.a.d
v=this.d=new A.as(new A.bb(w,B.b4,B.aN),$.aw())}return v},
gb_X(){var w,v=this.a.c
v=A.a([new A.FH(v.c,v.d)],x.S)
w=this.a.c.gFb()
B.d.v(v,new A.K(w,new C.dfp(),A.U(w).k("K<1,+email,name(n,n)>")))
w=x.K
v=A.C(new A.a1(v,new C.dfq(this),w),w.k("J.E"))
return v},
q(){var w=this,v=w.gavU(),u=v.U$=$.aw()
v.P$=0
v=w.e
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.a2()},
c3Q(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e.a.a,k=A.af("\\D",!0,!1,!1,!1),j=A.aK(l,k,"")
l=m.gavU()
k=B.a.fE(B.a.i(l.a.a),A.af("\\s+",!0,!1,!1,!1))
if(new A.a1(k,new C.dfr(),A.U(k).k("a1<1>")).gM(0)<2){m.m(new C.dfs(m))
return}if(j.length<7){m.m(new C.dft(m))
return}if(m.r.length===0){m.m(new C.dfu(m))
return}k=m.f
if(B.a.i(k.a.a).length<5){m.m(new C.dfv(m))
return}w=m.gb_X()
v=m.c
v.toString
l=B.a.i(l.a.a)
u=m.r
k=B.a.i(k.a.a)
t=A.a([],x.A)
for(s=m.x,r=s.length,q=x.N,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
n=o.a
if(n>=0&&n<w.length){n=w[n]
t.push(A.F(["relation",o.b,"name",n.b,"email",n.a],q,q))}}A.a5(v,!1).O(new C.bfY(l,j,u,k,t))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gb_X(),a0=new C.dfH(),a1=f.a.c
a1=C.aNR(B.vK,"The group owner, "+a1.d+", will see this and has to approve you.","Ask to join "+a1.e)
w=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.gavU(),e,e,e,e,e,2,a0.$1("Full name *"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.kE,e,e,e,e)
v=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.e,e,e,e,e,e,2,a0.$1("Phone number *"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,B.jq,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
u=f.r
if(u.length===0)u=e
t=a0.$1("State you live in *")
s=x.t
r=A.a([],s)
for(q=x.Q,p=0;p<50;++p){o=B.k0[p]
r.push(new A.eD(o,new A.x(o,e,e,e,e,e,e,e,e,e,e,e),B.eY,e,q))}n=x.N
m=x.p
r=A.a([a1,B.aB,w,B.S,v,B.S,A.nu(t,B.fp,u,!0,r,e,new C.dfB(f),B.dn,e,n),B.S,A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.f,e,e,e,e,e,2,a0.$1("Home address * (street, city)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.kE,e,e,e,e),B.aQ,D.fnv,B.at,D.fqk,B.N],m)
if(d.length===0)r.push(D.fj4)
for(a1=f.x,w=x.G,v=x.c,u=x.u,l=0;l<a1.length;++l){t=a1[l]
k=a0.$1("Who")
j=A.a([],s)
for(p=0;p<6;++p){i=D.dhS[p]
j.push(new A.eD(i,new A.x(C.hhx(i),e,e,e,e,e,e,e,e,e,e,e),B.eY,e,q))}t=A.nu(k,B.fp,t.b,!0,j,e,new C.dfC(f,l),B.qm,e,n)
k=a1[l].a
k=k<d.length?k:e
j=a0.$1("Person in group")
h=A.a([],u)
for(g=0;g<d.length;++g)h.push(new A.eD(g,new A.x(d[g].b,e,e,e,e,e,e,B.a2,e,e,e,e),B.eY,e,v))
r.push(new A.D(B.cz,new A.cm(B.aO,B.e,B.j,B.m,e,B.p,e,0,A.a([new A.a7(108,e,t,e),B.ab,new A.bD(1,B.bh,A.nu(j,B.fp,k,!0,h,e,new C.dfD(f,l),B.qm,e,w),e),A.aH(e,e,e,e,B.NL,e,e,e,new C.dfE(f,l),e,e,e,e,e,e)],m),e),e))}if(d.length!==0)r.push(new A.bI(B.a3,e,e,A.hg(D.bKj,D.ff7,new C.dfF(f),e),e))
a1=f.w
if(a1!=null)r.push(new A.D(B.hZ,A.d(a1,e,e,e,e,e,e,D.fbf,e,e,e),e))
r.push(B.ac)
r.push(A.df(B.a0p,D.fma,f.gc3P(),A.bm(B.b1,e,e,e,B.w,B.of,e,e,new A.b7(A.m(16),B.Y),e,e,e)))
r.push(A.bK(!1,B.de,e,e,!0,e,e,new C.dfG(a2),e,e))
return A.cd(A.v(r,B.aj,e,B.e,B.j,0,B.p),B.r,e,B.y,e,e,e,e,B.ah)}}
C.aKG.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b1$
if(v!=null)v.a3(0,w.gdC())
w.b1$=null
w.a2()}}
C.aKH.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b1$
if(v!=null)v.a3(0,w.gdC())
w.b1$=null
w.a2()}}
C.aLg.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b1$
if(v!=null)v.a3(0,w.gdC())
w.b1$=null
w.a2()}}
var z=a.updateTypes(["az<~>()","os(Y,~(~()))","os(Y,m5)","Pf(pL)","JN(tg)","H(wk,wk)","ab5(Y,H)","~(lX)","~(Ch)","ai<p5<Ch>>(Y)","r(wk)","os(Y)","~()"])
C.c4Z.prototype={
$1(d){return d.a===this.a},
$S:117}
C.c50.prototype={
$1(d){return d.c===this.a},
$S:117}
C.c5_.prototype={
$1(d){var w=this.a
return d.alN(w)&&d.c!==w},
$S:117}
C.c5e.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:369}
C.c4V.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:369}
C.c52.prototype={
$1(d){return d.a===this.a},
$S:117}
C.c53.prototype={
$1(d){return d.e===this.a},
$S:117}
C.c57.prototype={
$1(d){return d.c===this.a},
$S:117}
C.c5c.prototype={
$1(d){return d.aF9(this.a)},
$S:117}
C.c55.prototype={
$1(d){var w=this.a
return d.alN(w)&&d.c!==w},
$S:117}
C.c51.prototype={
$1(d){return d.e===this.a},
$S:117}
C.c4W.prototype={
$1(d){return d.a},
$S:468}
C.c4U.prototype={
$1(d){return d.a===this.a},
$S:117}
C.c5a.prototype={
$1(d){return d.a===this.a},
$S:200}
C.c4X.prototype={
$1(d){return d.a===this.a&&d.e==="pending"},
$S:200}
C.c58.prototype={
$1(d){return d.a===this.a},
$S:200}
C.c59.prototype={
$1(d){return d.a===this.a},
$S:200}
C.fcb.prototype={
$1(d){var w,v,u,t
if(d.b!==B.rr)return!1
w=d.d
if(B.a.i(w).toLowerCase()===this.a)return!0
v=this.b
u=v.length!==0
if(u&&d.x===v)return!0
if(u){t=this.c.akJ(w)
return t!=null&&B.a.i(t.toLowerCase())===v}return!1},
$S:231}
C.fca.prototype={
$2(d,e){return d+e.c},
$S:149}
C.fhb.prototype={
$1(d){return new C.Pf(d,d.f)},
$S:z+3}
C.fhc.prototype={
$1(d){return new C.JN(d.e,!1,d.a,d.f)},
$S:z+4}
C.fhd.prototype={
$2(d,e){return e.a.aL(0,d.a)},
$S:z+5}
C.dJS.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hZ()},
$S:12}
C.dJI.prototype={
$0(){var w=this,v=w.a
v.w=w.b
v.x=w.c
v.z=w.d},
$S:0}
C.dJH.prototype={
$1(d){var w=null,v=A.m(22),u=B.b1.j(0.4),t=A.d("The owner of this group, ${found.ownerName}, has to approve you before you can enter. You will find the group under YOU JOINED as soon as you are approved.",w,w,w,w,w,w,B.zC,w,w,w)
return A.ek(A.a([A.bK(!1,B.TK,w,w,!0,w,w,new C.dJG(d),w,w)],x.p),w,w,B.fp,t,w,w,w,new A.b7(v,new A.ay(u,1,B.q,-1)),D.fqr,w)},
$S:20}
C.dJG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dJM.prototype={
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
return A.b3(v,v,v,new C.act(t,w,u,v),B.f1)},
$S:70}
C.dJO.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.dJN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hy(u.b,new C.apQ(s.c,s.d,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hZ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJP.prototype={
$1(d){var w,v=this.a,u=d.b,t=u.gwG(),s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b4U(d.a,C.hcL(u.gamG().length,"",u,new C.dJL(v,this.b,d),w,s,"Owner \xb7 "+t+"/100 seats"))},
$S:754}
C.dJL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hy(u.b,new C.I_(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hZ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJQ.prototype={
$0(){return this.a.I(x.q).f.T(D.eUL)},
$S:0}
C.dJR.prototype={
$1(d){var w,v=this.a,u=J.ad(v.w),t=d.b,s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b4U(d.a+u,C.hcL(0,"",t,new C.dJK(v,this.b,d),w,s,"Member \xb7 Owner "+t.d))},
$S:754}
C.dJK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hy(u.b,new C.I_(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hZ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJJ.prototype={
$2(d,e){var w,v=this.a.r
v===$&&A.c()
v=v.x
v===$&&A.c()
w=B.ct.aw(0,B.k.D(v*1.4-this.b*0.08,0,1))
return A.dc(A.dU(this.c,new A.u(0,(1-w)*18)),w)},
$S:235}
C.e99.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e98.prototype={
$1(d){var w=A.a([d.b,d.e,d.d,d.c,d.a],x.s),v=d.r,u=A.U(v).k("K<1,n>")
B.d.v(w,new A.K(v,new C.e96(),u))
B.d.v(w,new A.K(v,new C.e97(),u))
return B.a.t(B.d.aI(w," ").toLowerCase(),this.a)},
$S:117}
C.e96.prototype={
$1(d){return d.b},
$S:468}
C.e97.prototype={
$1(d){return d.a},
$S:468}
C.e95.prototype={
$1(d){var w=null,v=this.a,u=v.b
v=A.d('Permanently delete "'+(u.length===0?v.e:u)+'" ('+v.e+") owned by "+v.d+". This cannot be undone.",w,w,w,w,w,w,B.hD,w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.e93(d),w,w),A.bG(B.wn,new C.e94(d),A.bm(B.bC,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fp,v,w,w,w,w,D.fzp,w)},
$S:20}
C.e93.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e94.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e9e.prototype={
$2(d,e){var w=null,v=this.a,u=v.d
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.act(1,u,v,w),B.f1)},
$S:70}
C.e9f.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.e9g.prototype={
$0(){var w=this.a
w.m(new C.e9d(w))},
$S:0}
C.e9d.prototype={
$0(){var w=this.a,v=w.w
w.w=!v
if(v){w.f.bO(0,B.c5)
w.x=""}},
$S:0}
C.e9h.prototype={
$1(d){var w=this.a
return w.m(new C.e9c(w,d))},
$S:2}
C.e9c.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e9i.prototype={
$2(d,e){var w=J.q(this.b,e),v=this.a
return new C.ab5(w,new C.e9a(v,w),new C.e9b(v,w),null)},
$S:z+6}
C.e9a.prototype={
$0(){return this.a.a_5(this.b)},
$S:0}
C.e9b.prototype={
$0(){return this.a.NH(this.b)},
$S:0}
C.dcq.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.e.x
o===$&&A.c()
w=A.m(14)
v=A.m(14)
u=p.r
t=u?B.K:B.b1.j(0.92)
s=A.I(B.b1.j(u?0.55+o*0.35:0.9),B.q,1.4)
o=u?q:A.a([new A.ac(0,B.G,B.b1.j(0.25+o*0.25),B.J,16)],x.V)
r=u?B.b1:B.bX
r=A.X(p.d,r,q,q,q,18)
return A.aG(!1,B.a1,!0,q,A.aL(!1,w,!0,A.eE(A.B(A.a([r,B.ab,A.d(p.c,q,q,q,q,q,q,A.l(q,q,u?B.ev:B.bX,q,q,q,q,q,q,q,q,13,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.bb,B.j,0,q,q),q,new A.o(t,q,s,v,o,q,B.n),46,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p.f,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)},
$S:140}
C.dcG.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.f.x
l===$&&A.c()
w=A.m(18)
v=m.r.x
v===$&&A.c()
u=A.m(18)
t=A.aq(B.fp,B.b1,0.06+l*0.05)
t.toString
t=A.a([t,B.fp.j(0.95)],x.O)
s=A.I(B.b1.j(0.28+l*0.25),B.q,1.2)
r=x.V
q=A.a([new A.ac(0,B.G,B.b1.j(0.08+l*0.12),B.J,18)],r)
p=x.p
p=A.a([A.p(n,D.bML,B.f,n,n,new A.o(B.b1.j(0.14),n,A.I(B.b1.j(0.55),B.q,1),n,A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,12)],r),n,B.a6),n,46,n,n,n,n,n,46),B.bd,A.E(A.v(A.a([A.d(m.c.e,n,n,n,n,n,n,D.f1o,n,n,n),B.bB,A.d(m.d,n,n,n,n,n,n,B.hf,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
r=m.w
if(r>0){o=A.m(12)
p.push(A.p(n,A.d(""+r+" new",n,n,n,n,n,n,B.uH,n,n,n),B.f,n,n,new A.o(B.ay,n,n,o,n,n,B.n),n,n,n,B.iU,B.fK,n,n,n))}else if(m.x.length!==0)p.push(D.e6N)
p.push(A.X(B.ey,B.b1.j(0.7),n,n,n,n))
return A.aG(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.eE(A.B(p,B.m,n,B.e,B.j,0,n,n),n,new A.o(n,n,s,u,q,new A.a8(B.ax,B.aC,B.x,t,n,n),B.n),n,B.bD,n),n,n,new C.Pz(0.35+l*0.4,!0,v,n),B.au),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.e,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ag)},
$S:140}
C.dJE.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hZ()},
$S:12}
C.dJs.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dJg.prototype={
$1(d){return new A.FH(d.a,d.b)},
$S:469}
C.dJq.prototype={
$1(d){var w=null,v=A.d(this.a.b+" will not be added to the group. They can ask again later.",w,w,w,w,w,w,B.hD,w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dJo(d),w,w),A.bG(B.J9,new C.dJp(d),A.bm(B.ay,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fp,v,w,w,w,w,D.fo9,w)},
$S:20}
C.dJo.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dJp.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dJt.prototype={
$0(){return this.a.Vz(this.b)},
$S:0}
C.dJu.prototype={
$0(){return this.a.NB(this.b)},
$S:0}
C.dJv.prototype={
$2(d,e){return d+e.c},
$S:149}
C.dJw.prototype={
$0(){var w=this,v=w.a.c
v.toString
return C.hVz(v,w.b,w.c,w.d,w.e,w.f)},
$S:0}
C.dJr.prototype={
$1(d){return this.bjc(d)},
bjc(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.b
t.ba6(d)
w=2
return A.b(C.I4(t),$async$$1)
case 2:w=3
return A.b(u.a.hZ(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:92}
C.dJy.prototype={
$2(d,e){var w=null,v=this.a,u=v.e
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.act(1,u,v,w),B.f1)},
$S:70}
C.dJz.prototype={
$0(){return C.aMX(this.a,this.b.e)},
$S:0}
C.dJA.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.dJB.prototype={
$0(){return this.a.CT(B.rr)},
$S:0}
C.dJC.prototype={
$0(){return this.a.CT(B.a4b)},
$S:0}
C.dJD.prototype={
$0(){var w=this.a
return w.m(new C.dJx(w,this.b))},
$S:0}
C.dJx.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
C.dJj.prototype={
$0(){var w=this.b
return this.a.a_d(w.c,w.f,w.d,"Owner")},
$S:0}
C.dJk.prototype={
$1(d){var w=this.a,v=w.gty()?new C.dJh(w,d):null
return w.b02(this.b,d.b,d.a,"Member",d.c,v,new C.dJi(w,d))},
$S:1934}
C.dJi.prototype={
$0(){var w=this.b
return this.a.a_d(w.a,w.c,w.b,"Member")},
$S:0}
C.dJh.prototype={
$0(){var w=this.b
return this.a.QB(w.b,w.a)},
$S:0}
C.dJl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.c
r.toString
t=u.b
w=2
return A.b(C.aoc(r,t.gwG(),t.a,s.a.f,t.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dJm.prototype={
$0(){var w=this.a.c
w.toString
return C.aMX(w,this.b.e)},
$S:0}
C.dJn.prototype={
$2(d,e){return d+e.c},
$S:149}
C.dJF.prototype={
$0(){return A.iO(this.a,null)},
$S:0}
C.dcY.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.c,r=s?1+d*0.12:1,q=s?"Help mode active":"Activate help mode",p=s?B.b2.j(0.28+d*0.22):B.c.j(0.06),o=s?B.iT.j(0.85+d*0.15):B.b1.j(0.35)
o=A.I(o,B.q,s?2:1.1)
w=s?A.a([new A.ac(1+d*2,B.G,B.b2.j(0.45+d*0.4),B.J,16+d*14),new A.ac(0,B.G,B.iT.j(0.25+d*0.35),B.J,8+d*6)],x.V):u
v=s?B.iT:B.b1.j(0.85)
return A.aH(u,u,u,u,A.ed(B.A,A.p(u,A.X(B.mw,v,u,u,s?A.a([new A.cR(B.b2.j(0.95),B.J,10+d*8)],x.r):u,20),B.f,u,u,new A.o(p,u,o,u,w,u,B.a6),u,38,u,u,u,u,u,38),r,u,u),u,u,u,t.e,u,u,u,u,q,u)},
$S:150}
C.dcX.prototype={
$2(d,e){var w=this.a.d.x
w===$&&A.c()
return this.b.$1(w)},
$S:59}
C.dgQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.e.x
l===$&&A.c()
w=A.m(14)
v=m.d
u=v?0.55+l*0.35:0.25+l*0.15
t=m.f.x
t===$&&A.c()
s=A.m(14)
r=v?B.b1.j(0.12+l*0.06):B.fp.j(0.85)
l=A.I(v?B.b1.j(0.55+l*0.25):B.b1.j(0.18),B.q,1)
q=A.a([A.av(A.d(m.c,n,n,n,n,n,n,A.l(n,n,v?B.ev:B.c1,n,n,n,n,n,n,n,n,12,n,n,B.H,n,n,!0,n,0.6,n,n,n,n,n,n),n,n,n),n,n,n)],x.p)
v=m.w
if(v>0){p=A.m(11)
o=A.I(B.bX,B.q,1.5)
q.push(A.ao(n,A.p(n,A.d(""+v,n,n,n,n,n,n,B.uH,B.L,n,n),B.f,n,D.aZl,new A.o(B.ay,n,o,p,n,n,B.n),n,n,n,n,B.ne,n,n,n),n,n,n,6,-6,n))}return A.aG(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.eE(new A.an(B.W,n,B.aa,B.f,q,n),n,new A.o(r,n,l,s,n,n,B.n),40,n,n),n,n,new C.Pz(u,!0,t,n),B.au),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.r,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ag)},
$S:140}
C.dgO.prototype={
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
n.push(A.dU(A.p(i,i,B.f,i,i,new A.o(B.ev.j(t),i,i,i,A.a([new A.ac(0,B.G,B.b1.j(0.45),B.J,10)],r),i,B.a6),i,j,i,i,i,i,i,j),new A.u(38*k,28*l)))}t=A.a([B.b1.j(0.55),B.b1.j(0.08),B.K],x.O)
r=A.a([new A.ac(0,B.G,B.b1.j(0.45),B.J,28)],r)
n.push(A.p(i,A.X(B.h8,B.ev,i,i,A.a([new A.cR(B.b1.j(0.9),B.J,22)],x.r),46),B.f,i,i,new A.o(i,i,i,i,r,new A.bT(B.A,0.5,B.x,i,0,t,i,i),B.a6),i,78,i,i,i,i,i,78))
return A.b3(A.p(i,A.v(A.a([A.ed(B.A,new A.an(B.A,i,B.aa,B.r,n,i),0.85+p*0.25,i,i),B.S,D.fe_,B.N,D.fmH,B.aQ,A.B(A.a([A.E(new C.Cd("Create group",B.hy,g,h.f,!1,i),1),B.av,A.E(new C.Cd("Join code",B.yn,g,h.r,!0,i),1)],o),B.m,i,B.e,B.j,0,i,i),B.S,new C.Cd("Scan invite QR",B.iX,g,h.w,!0,i)],o),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.bX,i,s,u,q,i,B.n),i,i,i,i,D.bsS,i,i,i),i,i,new C.Pz(0.55+w*0.35,!0,f,i),B.au)},
$S:70}
C.dgP.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.c.x
t===$&&A.c()
w=A.m(18)
return A.b3(A.p(v,u.d,B.f,v,v,new A.o(B.bX,v,A.I(B.b1.j(0.35),B.q,1),w,A.a([new A.ac(0,B.G,B.b1.j(0.12+t*0.1),B.J,16)],x.V),v,B.n),v,v,v,v,B.bD,v,v,v),v,v,new C.Pz(0.4+t*0.35,!1,0,v),B.au)},
$S:70}
C.dgN.prototype={
$3(d,e,f){var w,v=e?-1:1,u=f?-1:1,t=new A.aO($.W().r,B.ap,null,null,A.a([],x.v)),s=d.a,r=d.b
t.F(new A.b5(s,r))
w=r+14*u
t.F(new A.ap(s+7*v,w))
t.F(new A.ap(s-2*v,w))
t.F(new A.ap(s+6*v,r+28*u))
r=A.N()
r.r=B.b1.j(0.35*this.a.b).gp(0)
r.b=B.ae
r.c=1.3
r.d=B.bP
this.b.aP(t,r)},
$S:648}
C.fmX.prototype={
$1(d){return new A.D(new A.Q(0,0,0,A.aI(d,B.eE,x.w).w.f.d),new A.e0(new C.fmW(this.a,this.b),null),null)},
$S:60}
C.fmW.prototype={
$2(d,e){var w=null,v=C.aNR(B.h8,"Pick your group code: 3 letters + 1\u20135 numbers (e.g. ABC123).","Create lightning group"),u=this.b,t=A.a([new C.biY()],x.F),s=C.Km("ABC12345"),r=this.a,q=r.a,p=x.p
return new C.os(A.v(A.a([v,B.aQ,A.aM(w,B.T,!0,w,!0,B.r,w,A.aN(),u,w,w,w,w,w,2,s.baq(q.length===0?w:q),B.y,!0,w,!0,w,!1,w,B.ai,w,w,t,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new C.fmT(r,e),w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,D.f4U,!0,B.a4,w,B.m2,w,w,w,w),B.N,D.fib,B.by,A.B(A.a([A.E(A.bK(!1,G.J5,w,w,!0,w,w,new C.fmU(d),w,w),1),B.ab,A.E(A.bG(D.fdE,new C.fmV(r,u,e,d),A.bm(B.b1,w,w,w,B.bX,w,B.cl,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],p),B.m,w,B.e,B.j,0,w,w)],p),B.aj,w,B.e,B.Q,0,B.p),!0,w)},
$S:z+1}
C.fmT.prototype={
$1(d){var w=this.a
if(w.a.length!==0)this.b.$1(new C.fmS(w))},
$S:2}
C.fmS.prototype={
$0(){return this.a.a=""},
$S:0}
C.fmU.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fmV.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a).toUpperCase()
if(!C.hkn(v)){w.c.$1(new C.fmR(w.a))
return}A.a5(w.d,!1).O(v)},
$S:0}
C.fmR.prototype={
$0(){this.a.a="Use exactly 3 letters + 1\u20135 numbers (e.g. ABC123)."},
$S:0}
C.fng.prototype={
$1(d){var w,v,u,t=this,s=null,r=A.aI(d,B.eE,x.w).w,q=C.aNR(t.a,t.c,t.b),p=t.d,o=A.l(s,s,B.c,s,s,s,s,s,s,s,s,16,s,s,B.O,s,s,!0,s,t.f,s,s,s,s,s,s)
o=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),p,s,s,s,s,s,2,C.Km(t.r),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fnd(d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,o,!0,B.a4,s,B.m2,s,s,s,s)
w=A.E(A.bK(!1,G.J5,s,s,!0,s,s,new C.fne(d),s,s),1)
v=A.bm(B.b1,s,s,s,B.bX,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s)
u=x.p
return new A.D(new A.Q(0,0,0,r.f.d),new C.os(A.v(A.a([q,B.aQ,o,B.by,A.B(A.a([w,B.ab,A.E(A.bG(A.d(t.w,s,s,s,s,s,s,B.cx,s,s,s),new C.fnf(p,d),v),2)],u),B.m,s,B.e,B.j,0,s,s)],u),B.aj,s,B.e,B.Q,0,B.p),!0,s),s)},
$S:60}
C.fnd.prototype={
$1(d){var w=B.a.i(d)
if(w.length!==0)A.a5(this.a,!1).O(w)},
$S:2}
C.fne.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fnf.prototype={
$0(){var w=B.a.i(this.a.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fnc.prototype={
$1(d){return this.a&&this.b.t(0,d.b)},
$S:179}
C.fn9.prototype={
$1(d){return!this.a.$1(d)},
$S:179}
C.fna.prototype={
$1(d){var w=this
return new A.D(new A.Q(0,0,0,A.aI(d,B.eE,x.w).w.f.d),new A.e0(new C.fn8(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y),null),null)},
$S:60}
C.fn8.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.b,a2=B.a.i(a1.a.a).toLowerCase(),a3=d.c
if(a2.length===0)w=a3
else{v=A.U(a3).k("a1<1>")
w=A.C(new A.a1(a3,new C.fn0(a2),v),v.k("J.E"))}v=d.d
u=A.U(w).k("a1<1>")
t=A.C(new A.a1(w,new C.fn1(v),u),u.k("J.E"))
u=d.a
if(!B.d.b4(t,new C.fn2(u)))u.a=t.length!==0?B.d.gL(t).b:""
s=x.p
r=A.a([],s)
q=d.e
if(q){p=u.b
o=A.p(a0,D.bPD,B.f,a0,a0,new A.o(B.b1.j(0.14),a0,A.I(B.b1.j(0.5),B.q,1),a0,A.a([new A.ac(0,B.G,B.b1.j(0.25),B.J,12)],x.V),a0,B.a6),a0,46,a0,a0,a0,a0,a0,46)
n=A.m(14)
m=p?B.b1.j(0.22):B.c.j(0.06)
l=A.I(p?B.b1:B.b1.j(0.35),B.q,1)
r.push(A.B(A.a([o,B.b6,A.aG(!1,B.a1,!0,a0,A.aL(!1,n,!0,A.p(a0,A.X(B.fe,p?B.ev:B.b1,a0,a0,a0,a0),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,46,a0,a0,a0,a0,a0,46),a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fn3(u,a5),a0,a0,a0,a0,a0,a0,a0),B.f,B.K,0,a0,a0,a0,a0,a0,B.ag)],s),B.m,a0,B.e,B.j,0,a0,a0))}else r.push(C.aNR(B.vA,"Log what left the group case.","Record spending"))
if(q){p=A.a([B.at,D.fuy,B.at,D.ftE],s)
o=d.f
if(o!=null&&B.a.i(o).length!==0){n=B.b2.j(0.12)
m=A.m(12)
l=A.I(B.b2.j(0.45),B.q,1)
B.d.v(p,A.a([B.S,A.p(a0,A.d("Help mode: "+B.a.i(o),a0,a0,a0,a0,a0,a0,O.a78,B.L,a0,a0),B.f,a0,a0,new A.o(n,a0,l,m,a0,a0,B.n),a0,a0,a0,a0,B.bU,a0,a0,a0)],s))}B.d.v(r,p)}r.push(B.aB)
if(q){p=A.a([],s)
if(u.b)B.d.v(p,A.a([A.aM(a0,B.T,!0,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.Km("Search member\u2026"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,new C.fn4(a5),a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dn,!0,B.a4,a0,B.an,a0,a0,a0,a0),B.S],s))
p.push(A.d("WHO CONTRIBUTED",a0,a0,a0,a0,a0,a0,A.l(a0,a0,B.b1.j(0.85),a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.H,a0,a0,!0,a0,1.4,a0,a0,a0,a0,a0,a0),a0,a0,a0))
p.push(B.N)
if(a3.length===0)p.push(D.fAb)
else if(d.r)p.push(D.fkD)
else if(w.length===0)p.push(D.fhx)
else{a1=A.a([],s)
for(o=w.length,k=0;k<w.length;w.length===o||(0,A.L)(w),++k){j=w[k]
n=j.b
m=v.$1(j)?n+" \u2713 paid":n
l=u.a
i=v.$1(j)?a0:new C.fn5(u,a5,j)
h=B.cZ.j(0.18)
g=B.c.j(0.06)
f=u.a===n
e=f?B.bX:B.ad
f=f?B.b1:B.b1.j(0.25)
a1.push(A.j7(a0,g,h,new A.x(m,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),new A.G(!0,e,a0,a0,a0,a0,a0,B.O,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),i,l===n,B.b1,a0,new A.ay(f,1,B.q,-1),a0))}p.push(new A.cS(D.aZy,A.cd(A.bV(B.bz,a1,B.bq,8,8),B.r,a0,B.y,a0,a0,a0,a0,B.ah),a0))}B.d.v(r,p)}else B.d.v(r,A.a([A.aM(a0,B.T,!1,a0,!0,B.r,a0,A.aN(),d.w,a0,a0,a0,a0,a0,2,C.Km("What was spent"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dn,!0,B.a4,a0,B.an,a0,a0,a0,a0)],s))
r.push(B.ac)
a1=d.x
r.push(A.aM(a0,B.T,!q,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.Km("Amount ($)"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,B.dV,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.Te,!0,B.a4,a0,B.an,a0,a0,a0,a0))
r.push(B.by)
r.push(A.B(A.a([A.E(A.bK(!1,G.J5,a0,a0,!0,a0,a0,new C.fn6(a4),a0,a0),1),B.ab,A.E(A.bG(D.fzJ,new C.fn7(u,a1,q,d.w,a3,d.y,a4),A.bm(B.b1,a0,a0,a0,B.bX,a0,B.cl,a0,new A.b7(A.m(14),B.Y),a0,a0,a0)),2)],s),B.m,a0,B.e,B.j,0,a0,a0))
return new C.os(A.v(r,B.aj,a0,B.e,B.Q,0,B.p),!0,a0)},
$S:z+1}
C.fn0.prototype={
$1(d){var w=this.a
return B.a.t(d.b.toLowerCase(),w)||B.a.t(d.a.toLowerCase(),w)},
$S:179}
C.fn1.prototype={
$1(d){return!this.a.$1(d)},
$S:179}
C.fn2.prototype={
$1(d){return d.b===this.a.a},
$S:179}
C.fn3.prototype={
$0(){return this.b.$1(new C.fn_(this.a))},
$S:0}
C.fn_.prototype={
$0(){var w=this.a
return w.b=!w.b},
$S:0}
C.fn4.prototype={
$1(d){return this.a.$1(new C.fmZ())},
$S:2}
C.fmZ.prototype={
$0(){},
$S:0}
C.fn5.prototype={
$1(d){return this.b.$1(new C.fmY(this.a,this.c))},
$S:9}
C.fmY.prototype={
$0(){return this.a.a=this.b.b},
$S:0}
C.fn6.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fn7.prototype={
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
A.a5(t.r,!1).O(new C.bgs(u,s,""))},
$S:0}
C.fnb.prototype={
$0(){var w=this.a,v=w.U$=$.aw()
w.P$=0
w=this.b
w.U$=v
w.P$=0
w=this.c
w.U$=v
w.P$=0},
$S:11}
C.fmH.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.xz,new C.os(A.v(A.a([A.av(A.p(w,D.bLH,B.f,w,w,new A.o(B.h_.j(0.15),w,A.I(B.h_.j(0.55),B.q,1),w,A.a([new A.ac(0,B.G,B.h_.j(0.25),B.J,16)],x.V),w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fpH,B.N,A.d(this.a,w,w,w,w,w,w,D.f8b,B.L,w,w),B.at,A.d(this.b,w,w,w,w,w,w,B.hf,B.L,w,w),B.S,D.fjc,B.by,A.B(A.a([A.E(A.bK(!1,D.fq3,w,w,!0,w,w,new C.fmF(d),w,w),1),B.ab,A.E(A.bG(D.fo7,new C.fmG(d),A.bm(B.h_,w,w,w,B.c,w,B.cl,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.aj,w,B.e,B.Q,0,B.p),!0,w),w)},
$S:60}
C.fmF.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fmG.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fmz.prototype={
$2(d,e){return d+e.c},
$S:149}
C.fmA.prototype={
$1(d){return d.w===this.a.ax},
$S:231}
C.fmB.prototype={
$1(d){var w=this
return new A.D(new A.Q(12,0,12,A.aI(d,B.eE,x.w).w.f.d),A.oN(new C.fmy(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),!0,0.72,0.92,0.45,!1,null),null)},
$S:60}
C.fmy.prototype={
$2(d,e){var w=this,v={}
v.a=D.a8W
return new A.e0(new C.fmx(v,e,w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),null)},
$S:1936}
C.fmx.prototype={
$2(d,e){var w=this,v=w.a,u=v.a,t=w.ay
t=t==null?null:new C.fmv(t,d,e)
return new C.os(new C.bhn(w.b,w.c,w.d,w.e,w.f,w.r,w.w,u,w.ax,new C.fmw(v,e),t,null),!1,null)},
$S:z+1}
C.fmw.prototype={
$1(d){return this.b.$1(new C.fmt(this.a,d))},
$S:z+8}
C.fmt.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fmv.prototype={
$1(d){return this.bjO(d)},
bjO(d){var w=0,v=A.j(x.H),u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a.$1(d),$async$$1)
case 2:if(u.b.e!=null)u.c.$1(new C.fmu())
return A.h(null,v)}})
return A.i($async$$1,v)},
$S:92}
C.fmu.prototype={
$0(){},
$S:0}
C.dmX.prototype={
$2(d,e){return d+e.c},
$S:149}
C.dmY.prototype={
$1(d){return d.w===this.a.d.ax},
$S:231}
C.dmZ.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a.x.x
r===$&&A.c()
w=B.b1.j(0.12+r*0.08)
v=A.I(B.b1.j(0.45+r*0.25),B.q,1)
r=A.a([new A.ac(0,B.G,B.b1.j(0.2+r*0.15),B.J,18)],x.V)
u=this.b
t=u?B.oQ:B.h8
return A.av(A.p(s,A.X(t,u?B.iD:B.b1,s,s,s,32),B.f,s,s,new A.o(w,s,v,s,r,s,B.a6),s,64,s,s,s,s,s,64),s,s,s)},
$S:219}
C.dn_.prototype={
$2(d,e){return d+e.c},
$S:149}
C.dn0.prototype={
$1(d){var w=this.a
return A.a([w.au4("All",D.a8W),w.au4("Contributions",D.aUk),w.au4("Missed",D.aUl)],x.T)},
$S:z+9}
C.dn1.prototype={
$1(d){return this.a.bWN(this.b,d)},
$S:z+10}
C.dn2.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dmW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.c
w=4
return A.b(C.hVr(u.b,t.b),$async$$0)
case 4:w=e===!0?2:3
break
case 2:w=5
return A.b(u.a.cx.$1(t.d),$async$$0)
case 5:case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fma.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.xz,new C.os(A.v(A.a([A.av(A.p(w,D.bQ7,B.f,w,w,new A.o(B.b2.j(0.14),w,A.I(B.b2.j(0.55),B.q,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fek,B.S,A.d(this.a,w,w,w,w,w,w,D.f15,B.L,w,w),B.S,D.fhU,B.by,A.B(A.a([A.E(A.bK(!1,D.fcV,w,w,!0,w,w,new C.fm8(d),w,w),1),B.ab,A.E(A.bG(D.fff,new C.fm9(d),A.bm(B.b2,w,w,w,B.bX,w,B.cl,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.aj,w,B.e,B.Q,0,B.p),!1,w),w)},
$S:60}
C.fm8.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fm9.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fmd.prototype={
$1(d){var w=null,v=x.p,u=A.a([A.av(A.p(w,D.bPW,B.f,w,w,new A.o(B.b1.j(0.14),w,A.I(B.b1.j(0.55),B.q,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fzi,B.ac,C.fYj("Member",this.a),C.fYj("Amount","$"+B.k.aa(this.b,2))],v),t=this.c
if(t!=null&&B.a.i(t).length!==0)u.push(C.fYj("Help for",B.a.i(t)))
u.push(B.S)
u.push(D.fpE)
u.push(B.by)
u.push(A.B(A.a([A.E(A.bK(!1,D.fso,w,w,!0,w,w,new C.fmb(d),w,w),1),B.ab,A.E(A.bG(D.fyh,new C.fmc(d),A.bm(B.b1,w,w,w,B.bX,w,B.cl,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w))
return new A.D(F.xz,new C.os(A.v(u,B.aj,w,B.e,B.Q,0,B.p),!0,w),w)},
$S:60}
C.fmb.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fmc.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fmp.prototype={
$0(){var w=this,v=w.a,u=w.b.a.a,t=w.c.a.a,s=w.d.a.a,r=w.e.a.a
v.z=B.a.i(u)
v.Q=B.a.i(t)
v.as=B.a.i(s)
v.at=B.a.i(r)},
$S:0}
C.fmq.prototype={
$1(d){var w=this
return new A.D(new A.Q(0,0,0,A.aI(d,B.eE,x.w).w.f.d),A.oN(new C.fmo(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,d),!0,0.82,0.94,0.5,!1,null),null)},
$S:60}
C.fmo.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.b,q=C.hfI(r,t.a),p=A.d(r?"Help mode is live":"Set up group help mode",s,s,s,s,s,s,B.dm,B.L,s,s),o=x.p
p=A.a([q,B.N,p,B.am,A.d(r?"Members see the green icon and your payment details. Turn off when the round ends.":"Fill in where members send money. These details stay saved for next time.",s,s,s,s,s,s,I.a7p,B.L,s,s),B.aQ,A.d("HELP DETAILS",s,s,s,s,s,s,A.l(s,s,B.b2.j(0.9),s,s,s,s,s,s,s,s,11,s,s,B.H,s,s,!0,s,1.4,s,s,s,s,s,s),s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.c,s,s,s,s,s,2,C.Km("What are you collecting for?"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,2,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dn,!0,B.a4,s,B.an,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.d,s,s,s,s,s,2,C.Km("Cash App"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dn,!0,B.a4,s,B.an,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.e,s,s,s,s,s,2,C.Km("Zelle"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dn,!0,B.a4,s,B.an,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.f,s,s,s,s,s,2,C.Km("Phone number \u2014 questions or confirm payment"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,B.a2a,s,s,B.jq,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dn,!0,B.a4,s,B.an,s,s,s,s),B.by],o)
q=t.r
w=t.w
v=t.x
if(r){r=A.bG(D.fkE,new C.fmj(q,w,v),A.bm(B.h_,s,s,s,B.c,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s))
u=B.b2.j(0.55)
B.d.v(p,A.a([r,B.N,A.dT(D.fkA,new C.fmk(q,v,w),A.di(s,s,s,s,s,s,s,s,s,B.iT,s,s,B.cl,s,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),s,s,s,s))],o))}else{r=B.b1.j(0.45)
B.d.v(p,A.a([A.dT(D.fd5,new C.fml(q,v,w),A.di(s,s,s,s,s,s,s,s,s,B.b1,s,s,B.cl,s,new A.b7(A.m(14),B.Y),new A.ay(r,1,B.q,-1),s,s,s,s)),B.N,A.bG(D.fxB,new C.fmm(q,w,v),A.bm(B.b2,s,s,s,B.bX,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s))],o))}p.push(B.N)
p.push(A.bK(!1,G.J5,s,s,!0,s,s,new C.fmn(v),s,s))
return new C.os(A.cz(p,e,s,s,s,B.ah,!1),!0,s)},
$S:z+2}
C.fmj.prototype={
$0(){var w,v,u
this.a.$0()
w=this.b
v=B.a.i(w.ax)
u=w.z
if(v.length!==0&&!B.d.t(w.CW,v)){w.c0d(v,u)
B.d.K(w.CW,v)}w.y=!1
w.ax=""
w.ay=null
A.a5(this.c,!1).O(w)},
$S:0}
C.fmk.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.fml.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.fmm.prototype={
$0(){var w,v=this
v.a.$0()
w=v.b
if(B.a.i(w.z).length===0){v.c.I(x.q).f.T(D.eSR)
return}w.cCK()
A.a5(v.c,!1).O(w)},
$S:0}
C.fmn.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fmr.prototype={
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
C.fmi.prototype={
$1(d){return new A.D(F.xz,A.oN(new C.fmh(this.a,this.b,d),!0,0.72,0.9,0.45,!1,null),null)},
$S:60}
C.fmh.prototype={
$2(d,e){var w=this,v=null,u=A.a([C.hfI(!0,w.a),B.S,D.fA4,B.am,D.fpa,B.aQ],x.p),t=w.b,s=B.a.i(t.z)
if(s.length!==0)u.push(C.fe9(w.c,B.ll,"COLLECTING FOR",v,v,s))
s=B.a.i(t.Q)
if(s.length!==0)u.push(C.fe9(w.c,B.hM,"CASH APP",new C.fme(t),"Open Cash App",s))
s=B.a.i(t.as)
if(s.length!==0)u.push(C.fe9(w.c,B.jZ,"ZELLE",v,v,s))
s=t.at
if(B.a.i(s).length!==0)u.push(C.fe9(w.c,B.vL,"PHONE NUMBER",new C.fmf(t),"Call",A.n4(s)))
if(B.a.i(t.z).length===0&&B.a.i(t.Q).length===0&&B.a.i(t.as).length===0&&B.a.i(t.at).length===0)u.push(D.e6Z)
u.push(B.ac)
u.push(A.bK(!1,D.aQR,v,v,!0,v,v,new C.fmg(w.c),v,v))
return new C.os(A.cz(u,e,v,v,v,B.ah,!1),!1,v)},
$S:z+2}
C.fme.prototype={
$0(){return C.bzs(this.a.Q)},
$S:0}
C.fmf.prototype={
$0(){return C.bys(this.a.at)},
$S:0}
C.fmg.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.feb.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a.x
q===$&&A.c()
w=this.b
v=w?B.b2.j(0.22+q*0.18):B.b1.j(0.14)
u=w?B.iT.j(0.85+q*0.15):B.b1.j(0.5)
u=A.I(u,B.q,w?2:1)
t=w?A.a([new A.ac(1+q,B.G,B.b2.j(0.4+q*0.35),B.J,18+q*10)],x.V):r
s=w?B.iT:B.b1
return A.av(A.p(r,A.X(B.mw,s,r,r,w?A.a([new A.cR(B.b2.j(0.95),B.J,12+q*8)],x.r):r,r),B.f,r,r,new A.o(v,r,u,r,t,r,B.a6),r,56,r,r,r,r,r,56),r,r,r)},
$S:219}
C.fea.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(new A.fC(t.a)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.T(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fmJ.prototype={
$1(d){return new A.FH(d.a,d.b)},
$S:469}
C.fmK.prototype={
$1(d){var w=this.a
if(B.a.i(w.d).toLowerCase()!==B.a.i(d.b).toLowerCase()){w=w.x
w=w.length!==0&&w===B.a.i(d.a.toLowerCase())}else w=!0
return w},
$S:179}
C.fmL.prototype={
$2(d,e){return d+e.c},
$S:149}
C.fmM.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="x in all \xb7 missed ",j=A.aI(a1,l,x.w).w,i=m.b,h=i.length,g=m.c.length,f=B.k.aa(m.d,2),e=m.e,d=e?" \xb7 round is open":"",a0=x.p
d=A.a([C.aNR(B.mw,""+h+" of "+g+" gave \xb7 total $"+f+d,m.a),B.ac,A.bw(A.m(8),A.m1(B.dr,l,l,10,l,m.f,D.aWn),B.aq),B.aQ,A.d("GAVE ("+i.length+")",l,l,l,l,l,l,D.f3s,l,l,l),B.am],a0)
if(i.length===0)d.push(D.fgB)
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
d.push(A.aL(!1,new A.bq(f,f,f,f),!0,A.p(l,new A.cm(B.aO,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bNp,B.av,new A.bD(1,B.bh,A.v(A.a([new A.x(q,l,B.hs,l,l,l,l,l,l,l,l,l),new A.x(""+A.bH(o)+"/"+A.bR(o)+"/"+A.bA(o)+" \xb7 gave "+g.ans(q,r)+k+g.a4N(q,r)+" \xb7 tap for receipt",l,B.D8,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l),new A.x("$"+B.k.aa(p.c,2),l,I.Tt,l,l,l,l,l,l,l,l,l)],a0),l),B.f,l,l,new A.o(u,l,new A.bO(s,s,s,s),new A.bq(t,t,t,t),l,l,B.n),l,l,l,B.eK,B.bU,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.fmI(a1,g,v),l,l,l,l,l,l,l))}d.push(B.ac)
i=m.w
h=i.length
d.push(A.d(e?"NOT YET ("+h+")":"DID NOT GIVE ("+h+")",l,l,l,l,l,l,D.f0W,l,l,l))
d.push(B.am)
if(i.length===0)d.push(D.fna)
for(h=i.length,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){n=i[w]
f=B.iD.j(0.07)
e=new A.aT(12,12)
s=new A.ay(B.iD.j(0.3),1,B.q,-1)
u=n.b
t=n.a
d.push(A.p(l,new A.cm(B.aO,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bIf,B.av,new A.bD(1,B.bh,A.v(A.a([new A.x(u,l,B.hs,l,l,l,l,l,l,l,l,l),new A.x("gave "+g.ans(u,t)+k+g.a4N(u,t),l,B.D8,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l)],a0),l),B.f,l,l,new A.o(f,l,new A.bO(s,s,s,s),new A.bq(e,e,e,e),l,l,B.n),l,l,l,B.eK,B.bU,l,l,l))}return new A.cS(new A.aY(0,1/0,0,j.a.b*0.88),new C.os(A.cd(A.v(d,B.F,l,B.e,B.j,0,B.p),B.r,l,B.y,l,l,l,l,B.ah),!0,l),l)},
$S:1937}
C.fmI.prototype={
$0(){return C.hVx(this.a,this.b,this.c.b)},
$S:0}
C.fmE.prototype={
$2(d,e){var w=null
return new A.D(B.vl,A.B(A.a([new A.a7(96,w,A.d(d,w,w,w,w,w,w,B.zz,w,w,w),w),A.E(A.d(e,w,w,w,w,w,w,B.a7x,w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:137}
C.fmD.prototype={
$1(d){var w=this,v=null,u=w.b,t=w.c,s=A.a([C.aNR(B.h9,w.a,"Receipt"),B.ac,u.$2("From",t.d),u.$2("For",w.d),u.$2("Amount","$"+B.k.aa(t.c,2)),u.$2("Date",w.e)],x.p),r=t.e
if(r.length!==0)s.push(u.$2("Note",r))
r=w.f
s.push(u.$2("Group",r.e+" \xb7 owner "+r.d))
t=t.r
s.push(u.$2("Recorded by",t.length===0?r.c:t))
s.push(B.ac)
s.push(A.df(S.BM,D.fvb,new C.fmC(w.r,d),A.bm(B.b1,v,v,v,B.w,B.zq,v,v,v,v,v,v)))
return new C.os(A.v(s,B.F,v,B.e,B.Q,0,B.p),!0,v)},
$S:z+11}
C.fmC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fJ(new A.fC(u.a)),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.T(D.eTa)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fms.prototype={
$1(d){var w=null,v=x.w
return new A.D(new A.Q(0,0,0,A.aI(d,w,v).w.f.d),new A.cS(new A.aY(0,1/0,0,A.aI(d,w,v).w.a.b*0.92),new C.os(new C.aAr(this.a,this.b,this.c,w),!0,w),w),w)},
$S:60}
C.dfp.prototype={
$1(d){return new A.FH(d.a,d.b)},
$S:469}
C.dfq.prototype={
$1(d){return d.a!==B.a.i(this.a.a.e.toLowerCase())},
$S:179}
C.dfr.prototype={
$1(d){return d.length!==0},
$S:3}
C.dfs.prototype={
$0(){return this.a.w="Write your first and last name."},
$S:0}
C.dft.prototype={
$0(){return this.a.w="Your phone number is needed."},
$S:0}
C.dfu.prototype={
$0(){return this.a.w="Choose the state you live in."},
$S:0}
C.dfv.prototype={
$0(){return this.a.w="Your home address is needed."},
$S:0}
C.dfH.prototype={
$1(d){return C.Km(d)},
$S:290}
C.dfB.prototype={
$1(d){var w=this.a
return w.m(new C.dfA(w,d))},
$S:32}
C.dfA.prototype={
$0(){var w=this.b
if(w==null)w=""
return this.a.r=w},
$S:0}
C.dfC.prototype={
$1(d){var w=this.a
return w.m(new C.dfz(w,this.b,d))},
$S:32}
C.dfz.prototype={
$0(){var w=this.a.x,v=this.b,u=this.c
if(u==null)u="mother"
u=new A.adJ(w[v].a,u)
w[v]=u
return u},
$S:0}
C.dfD.prototype={
$1(d){var w=this.a
return w.m(new C.dfy(w,this.b,d))},
$S:234}
C.dfy.prototype={
$0(){var w=this.a.x,v=this.b,u=w[v],t=this.c
if(t==null)t=-1
u=new A.adJ(t,u.b)
w[v]=u
return u},
$S:0}
C.dfE.prototype={
$0(){var w=this.a
return w.m(new C.dfx(w,this.b))},
$S:0}
C.dfx.prototype={
$0(){return B.d.cC(this.a.x,this.b)},
$S:0}
C.dfF.prototype={
$0(){var w=this.a
return w.m(new C.dfw(w))},
$S:0}
C.dfw.prototype={
$0(){return this.a.x.push(new A.adJ(-1,"mother"))},
$S:0}
C.dfG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0};(function aliases(){var w=C.aKG.prototype
w.btM=w.q
w=C.aKH.prototype
w.btN=w.q
w=C.aLg.prototype
w.buo=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=C.aCf.prototype,"gbHn","zR",0)
w(u,"gbYF","XR",0)
w(u,"gc3O","YO",0)
w(u=C.aCc.prototype,"gcc5","PL",0)
w(u,"gc3L","acX",0)
w(u,"gbKP","WD",0)
v(C.aCe.prototype,"gc3M","c3N",7)
w(C.aAs.prototype,"gc3P","c3Q",12)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.hV,[C.c4Z,C.c50,C.c5_,C.c52,C.c53,C.c57,C.c5c,C.c55,C.c51,C.c4W,C.c4U,C.c5a,C.c4X,C.c58,C.c59,C.fcb,C.fhb,C.fhc,C.dJS,C.dJH,C.dJP,C.dJR,C.e98,C.e96,C.e97,C.e95,C.e9h,C.dJE,C.dJg,C.dJq,C.dJr,C.dJk,C.dcY,C.dgN,C.fmX,C.fmT,C.fng,C.fnd,C.fnc,C.fn9,C.fna,C.fn0,C.fn1,C.fn2,C.fn4,C.fn5,C.fmH,C.fmA,C.fmB,C.fmw,C.fmv,C.dmY,C.dn0,C.dn1,C.fma,C.fmd,C.fmq,C.fmi,C.fmJ,C.fmK,C.fmM,C.fmD,C.fms,C.dfp,C.dfq,C.dfr,C.dfH,C.dfB,C.dfC,C.dfD])
v(A.kk,[C.c5e,C.c4V,C.fca,C.fhd,C.dJM,C.dJJ,C.e9e,C.e9i,C.dcq,C.dcG,C.dJv,C.dJy,C.dJn,C.dcX,C.dgQ,C.dgO,C.dgP,C.fmW,C.fn8,C.fmz,C.fmy,C.fmx,C.dmX,C.dmZ,C.dn_,C.fmo,C.fmh,C.feb,C.fmL,C.fmE])
u(C.Ch,A.m8)
v(A.aC,[C.wk,C.bgs,C.bfY])
v(C.wk,[C.Pf,C.JN])
v(A.ag,[C.aob,C.apQ,C.I_,C.aCd,C.aAr])
v(A.ah,[C.aKH,C.aLg,C.aKG,C.aCe,C.aAs])
u(C.aCf,C.aKH)
v(A.j8,[C.dJI,C.dJG,C.dJO,C.dJN,C.dJL,C.dJQ,C.dJK,C.e99,C.e93,C.e94,C.e9f,C.e9g,C.e9d,C.e9c,C.e9a,C.e9b,C.dJs,C.dJo,C.dJp,C.dJt,C.dJu,C.dJw,C.dJz,C.dJA,C.dJB,C.dJC,C.dJD,C.dJx,C.dJj,C.dJi,C.dJh,C.dJl,C.dJm,C.dJF,C.fmS,C.fmU,C.fmV,C.fmR,C.fne,C.fnf,C.fn3,C.fn_,C.fmZ,C.fmY,C.fn6,C.fn7,C.fnb,C.fmF,C.fmG,C.fmt,C.fmu,C.dn2,C.dmW,C.fm8,C.fm9,C.fmb,C.fmc,C.fmp,C.fmj,C.fmk,C.fml,C.fmm,C.fmn,C.fmr,C.fme,C.fmf,C.fmg,C.fea,C.fmI,C.fmC,C.dfs,C.dft,C.dfu,C.dfv,C.dfA,C.dfz,C.dfy,C.dfE,C.dfx,C.dfF,C.dfw,C.dfG])
u(C.bjj,C.aLg)
v(A.au,[C.ab5,C.Cd,C.azP,C.bgv,C.beV,C.bgu,C.bgr,C.bgt,C.bhn,C.os])
v(A.mL,[C.act,C.Pz])
u(C.aCc,C.aKG)
u(C.biY,A.iR)
w(C.aKG,A.eR)
w(C.aKH,A.eR)
w(C.aLg,A.eR)})()
A.jY(b.typeUniverse,JSON.parse('{"Pf":{"wk":[]},"JN":{"wk":[]},"aob":{"ag":[],"r":[]},"apQ":{"ag":[],"r":[]},"ab5":{"au":[],"r":[]},"I_":{"ag":[],"r":[]},"aCd":{"ag":[],"r":[]},"os":{"au":[],"r":[]},"aAr":{"ag":[],"r":[]},"aCf":{"ah":["aob"]},"bjj":{"ah":["apQ"]},"Cd":{"au":[],"r":[]},"azP":{"au":[],"r":[]},"act":{"aB":[]},"aCc":{"ah":["I_"]},"aCe":{"ah":["aCd"]},"bgv":{"au":[],"r":[]},"beV":{"au":[],"r":[]},"bgu":{"au":[],"r":[]},"bgr":{"au":[],"r":[]},"bgt":{"au":[],"r":[]},"Pz":{"aB":[]},"biY":{"iR":[]},"bhn":{"au":[],"r":[]},"aAs":{"ah":["aAr"]}}'))
var y={d:"That group code is already taken. Try another."}
var x=(function rtii(){var w=A.ax
return{Q:w("eD<n>"),c:w("eD<H>"),J:w("O<a2B>"),V:w("O<ac>"),O:w("O<w>"),t:w("O<eD<n>>"),u:w("O<eD<H>>"),A:w("O<a4<n,n>>"),D:w("O<nB>"),x:w("O<pL>"),B:w("O<uD>"),v:w("O<hp>"),T:w("O<p5<Ch>>"),Z:w("O<+(+email,name(n,n),pL)>"),S:w("O<+email,name(n,n)>"),i:w("O<+person,relation(H,n)>"),r:w("O<cR>"),s:w("O<n>"),F:w("O<iR>"),p:w("O<r>"),U:w("O<aB?>"),m:w("ai<nB>"),P:w("a4<n,@>"),f:w("a4<@,@>"),w:w("iA"),L:w("nB"),Y:w("uD"),N:w("n"),I:w("pa"),K:w("a1<+email,name(n,n)>"),C:w("e9<Pf>"),o:w("e9<JN>"),l:w("r"),n:w("bfY"),R:w("bgs"),E:w("Ch"),W:w("wk"),a:w("JN"),q:w("mZ"),y:w("R"),z:w("@"),G:w("H"),_:w("a4<n,@>?"),h:w("nB?"),X:w("aC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWn=new A.lV(B.b2,A.ax("lV<w?>"))
D.aXS=new A.ay(B.b1,1,B.q,-1)
D.aY5=new A.ay(B.cf,1,B.q,-1)
D.aZl=new A.aY(20,1/0,0,1/0)
D.aZy=new A.aY(0,1/0,0,150)
D.ffk=new A.x("Tap code to copy",null,B.zz,null,null,null,null,null,null,null,null,null)
D.b4r=new A.cr(B.A,null,null,D.ffk,null)
D.ffT=new A.x("No groups found.",null,B.kG,null,null,null,null,null,null,null,null,null)
D.b4R=new A.cr(B.A,null,null,D.ffT,null)
D.brk=new A.Q(14,12,6,12)
D.brQ=new A.Q(16,10,16,8)
D.bs9=new A.Q(16,4,16,36)
D.bst=new A.Q(18,10,18,36)
D.bsy=new A.Q(18,12,18,4)
D.bsS=new A.Q(18,22,18,18)
D.fin=new A.x("Waiting to join",null,B.i7,null,null,null,null,null,null,null,null,null)
D.bwO=new A.bD(1,B.bh,D.fin,null)
D.bxB=new A.bD(1,B.bh,B.bI,null)
D.bDz=new A.a_(63323,"MaterialIcons",!1)
D.alQ=new A.a_(983761,"MaterialIcons",!1)
D.bH3=new A.ae(B.eC,null,B.ev,null,null,null)
D.bH5=new A.ae(B.h8,22,B.b1,null,null,null)
D.bH6=new A.ae(B.hz,16,B.b2,null,null,null)
D.bHY=new A.ae(B.N2,22,B.ev,null,null,null)
D.bIf=new A.ae(B.a_M,20,B.iD,null,null,null)
D.bJ5=new A.ae(B.e6,22,B.cf,null,null,null)
D.bJz=new A.ae(B.FE,20,B.b1,null,null,null)
D.bKj=new A.ae(B.hy,null,B.b1,null,null,null)
D.bL9=new A.ae(B.vO,18,B.b1,null,null,null)
D.bLg=new A.ae(B.fe,18,B.b1,null,null,null)
D.bLH=new A.ae(B.bEs,null,B.h_,null,null,null)
D.bML=new A.ae(B.h8,null,B.b1,null,null,null)
D.bNp=new A.ae(B.eg,20,B.b2,null,null,null)
D.bPD=new A.ae(D.alQ,null,B.b1,null,null,null)
D.bPW=new A.ae(B.tR,null,B.b1,null,null,null)
D.bQ7=new A.ae(B.pT,null,B.b2,null,null,null)
D.awG=w([],x.x)
D.dhS=w(["mother","father","spouse","child","brother","sister"],x.s)
D.bMl=new A.ae(B.oM,20,B.iD,null,null,null)
D.e6N=new A.D(B.iU,D.bMl,null)
D.fwm=new A.x("The group owner has not added payment details yet.",null,B.kG,null,B.L,null,null,null,null,null,null,null)
D.e6Z=new A.D(B.f8,D.fwm,null)
D.edz=new A.BO(null,B.dL)
D.edB=new A.BP(null,B.dL)
D.ef8=new A.z(0,"Ledger")
D.efR=new A.z(1,"People")
D.egq=new A.z(2,"Invite")
D.fsm=new A.x("Your request is already waiting. The group owner has to approve you.",null,null,null,null,null,null,null,null,null,null,null)
D.eRw=new A.b1(D.fsm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fqW=new A.x("Help mode is active but missing a campaign.",null,null,null,null,null,null,null,null,null,null,null)
D.eSh=new A.b1(D.fqW,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffF=new A.x("Activate help mode before recording a contribution.",null,null,null,null,null,null,null,null,null,null,null)
D.eSO=new A.b1(D.ffF,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwL=new A.x("Add what you are collecting for, then activate help mode.",null,null,null,null,null,null,null,null,null,null,null)
D.eSR=new A.b1(D.fwL,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fw6=new A.x("This group is full (100 members). Ask the owner to unlock more seats.",null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new A.b1(D.fw6,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fns=new A.x("Receipt copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eTa=new A.b1(D.fns,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fmU=new A.x("Your request is waiting. The group owner has to approve you first.",null,null,null,null,null,null,null,null,null,null,null)
D.eUL=new A.b1(D.fmU,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fgw=new A.x("No group found for that code.",null,null,null,null,null,null,null,null,null,null,null)
D.eUX=new A.b1(D.fgw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fvg=new A.x("Could not send your request.",null,null,null,null,null,null,null,null,null,null,null)
D.eV4=new A.b1(D.fvg,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.aOX=new A.G(!0,B.c,null,null,null,null,15,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZv=new A.G(!0,B.aA,null,null,null,null,10,B.H,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZF=new A.G(!0,B.b1,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f01=new A.G(!0,B.b1,null,null,null,null,22,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0O=new A.G(!0,B.iD,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0W=new A.G(!0,B.iD,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f15=new A.G(!0,B.iT,null,null,null,null,16,B.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1o=new A.G(!0,B.c,null,null,null,null,16,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7m=new A.G(!0,B.c1,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3s=new A.G(!0,B.b2,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3C=new A.G(!0,B.b1,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4U=new A.G(!0,B.c,null,null,null,null,20,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6d=new A.G(!0,B.ev,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7a=new A.G(!0,B.b1,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7M=new A.G(!0,B.b1,null,null,null,null,15,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8b=new A.G(!0,B.b1,null,null,null,null,16,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbf=new A.G(!0,B.f4,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcV=new A.x("Keep missed",null,B.kF,null,null,null,null,null,null,null,null,null)
D.fd5=new A.x("Save details for later",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fdE=new A.x("Create group",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fb0=new A.G(!0,B.b1,null,null,null,null,12,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe_=new A.x("LIGHTNING CIRCLE",null,D.fb0,null,null,null,null,null,null,null,null,null)
D.fek=new A.x("Clear missed contribution?",null,B.dm,null,B.L,null,null,null,null,null,null,null)
D.ff1=new A.x("Share this code or QR so others can join from Lightning Groups.",null,B.zz,null,B.L,null,null,null,null,null,null,null)
D.f5j=new A.G(!0,B.b1,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff7=new A.x("Add a family member from the group",null,D.f5j,null,null,null,null,null,null,null,null,null)
D.fff=new A.x("Yes, clear it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fgB=new A.x("Nobody yet.",null,B.kG,null,null,null,null,null,null,null,null,null)
D.fgX=new A.x("No contributions or spending yet.",null,B.kG,null,null,null,null,null,null,null,null,null)
D.fhg=new A.x("Clear",null,B.Tq,null,null,null,null,null,null,null,null,null)
D.aQq=new A.G(!0,B.aA,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhx=new A.x("No member matches that search.",null,D.aQq,null,null,null,null,null,null,null,null,null)
D.Tx=new A.G(!0,B.c1,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new A.x("This removes the missed mark for this member. Only clear if they paid or you confirmed the contribution.",null,D.Tx,null,B.L,null,null,null,null,null,null,null)
D.f3w=new A.G(!0,B.c1,null,null,null,null,11,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fib=new A.x("Type letters or numbers in any order \u2014 code becomes 3 letters then numbers (e.g. ABC123).",null,D.f3w,null,null,null,null,null,null,null,null,null)
D.fj4=new A.x("Nobody else is in this group yet.",null,B.kG,null,null,null,null,null,null,null,null,null)
D.fjc=new A.x("They will lose access to this group ledger and invite list.",null,D.Tx,null,B.L,null,null,null,null,null,null,null)
D.fkA=new A.x("Save details",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f05=new A.G(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new A.x("Everyone has already contributed to this round.",null,D.f05,null,null,null,null,null,null,null,null,null)
D.fkE=new A.x("Deactivate help mode",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fma=new A.x("Send my request",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fmH=new A.x("Your own civic circle \u2014 no states, no case wallet.\nInvite by code or QR. Owner tracks money in & out.",null,N.Df,null,B.L,null,null,null,null,null,null,null)
D.fna=new A.x("Everyone gave. Wonderful!",null,B.kG,null,null,null,null,null,null,null,null,null)
D.fnv=new A.x("FAMILY IN THIS GROUP (optional)",null,R.mK,null,null,null,null,null,null,null,null,null)
D.aQR=new A.x("Close",null,B.kF,null,null,null,null,null,null,null,null,null)
D.eZi=new A.G(!0,B.b2,null,null,null,null,9.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new A.x("OPEN",null,D.eZi,null,null,null,null,null,null,null,null,null)
D.fo7=new A.x("Remove",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fo9=new A.x("Decline this request?",null,B.k8,null,null,null,null,null,null,null,null,null)
D.fpa=new A.x("Send your contribution using the details below. Call if you have questions or to confirm payment was received.",null,I.a7p,null,B.L,null,null,null,null,null,null,null)
D.fpE=new A.x("Make sure this is correct before saving to the ledger.",null,D.Tx,null,B.L,null,null,null,null,null,null,null)
D.fpH=new A.x("Remove member?",null,B.dm,null,B.L,null,null,null,null,null,null,null)
D.fq3=new A.x("Keep member",null,B.kF,null,null,null,null,null,null,null,null,null)
D.fqk=new A.x("Are your mother, father, spouse, children or brothers and sisters already here? Choose them.",null,D.Tx,null,null,null,null,null,null,null,null,null)
D.fqr=new A.x("Request sent",null,B.k8,null,null,null,null,null,null,null,null,null)
D.fso=new A.x("Go back",null,B.kF,null,null,null,null,null,null,null,null,null)
D.ftf=new A.x("Scan group QR",null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.x("Tap who put money in \u2014 people who joined this group.",null,B.hf,null,B.L,null,null,null,null,null,null,null)
D.fuy=new A.x("Record contribution",null,B.fO,null,B.L,null,null,null,null,null,null,null)
D.fvb=new A.x("Copy receipt",null,null,null,null,null,null,null,null,null,null,null)
D.fxB=new A.x("Activate help mode",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fyh=new A.x("Confirm & save",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fzi=new A.x("Verify contribution",null,B.dm,null,B.L,null,null,null,null,null,null,null)
D.fzp=new A.x("Delete group?",null,B.dn,null,null,null,null,null,null,null,null,null)
D.fzJ=new A.x("Save",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f49=new A.G(!0,B.iT,null,null,null,null,14,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA4=new A.x("HELP MODE ACTIVE",null,D.f49,null,B.L,null,null,null,null,null,null,null)
D.fAb=new A.x("No members yet \u2014 invite people with your code first.",null,D.aQq,null,null,null,null,null,null,null,null,null)
D.a8W=new C.Ch(0,"all")
D.aUk=new C.Ch(1,"contributions")
D.aUl=new C.Ch(2,"missed")
D.fVm=new C.aCd(null)})()};
(a=>{a["f/j5Wrq+bCmQHNs+ZizgBbhJ+mk="]=a.current})($__dart_deferred_initializers__);