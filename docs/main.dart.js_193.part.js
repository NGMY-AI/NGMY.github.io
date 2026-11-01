((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,I,L,K,M,N,C={
hpx(d){var w=B.a.i(d),v=A.af("^[A-Z]{3}[0-9]{1,5}$",!0,!1,!1,!1)
return v.b.test(w.toUpperCase())},
fXg(){var w=$.a6w
if(w==null)w=B.cw
return A.xm(w,x.L)},
c6M(d){var w,v,u=$.a6w
if(u==null)return null
try{w=J.fUP(u,new C.c6N(d))
return w}catch(v){return null}},
hFU(d){var w=B.a.i(d.toLowerCase()),v=C.fXg(),u=A.S(v).k("a_<1>")
v=A.C(new A.a_(v,new C.c6P(w),u),u.k("J.E"))
return v},
hFT(d){var w=B.a.i(d.toLowerCase()),v=C.fXg(),u=A.S(v).k("a_<1>")
v=A.C(new A.a_(v,new C.c6O(w),u),u.k("J.E"))
return v},
c71(){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$c71=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=$.a6w
if(o!=null&&o.length!==0){w=1
break}n=A
m=J
w=3
return A.b(A.ay(),$async$c71)
case 3:t=n.aU(m.q(e.a,"ngmy_civic_user_groups_v1"))
if(t==null||t.length===0){w=1
break}try{s=B.S.aL(0,t,null)
if(x.f.b(s)){r=A.Nc(A.a2(s,x.N,x.z))
o=r
q=A.a3(o).k("bc<2>")
o=A.C(new A.bc(o,q),q.k("J.E"))
B.d.aZ(o,new C.c72())
$.a6w=o}}catch(l){}case 1:return A.h(u,v)}})
return A.i($async$c71,v)},
aZ0(d){var w=0,v=A.j(x._),u,t,s,r,q,p,o,n
var $async$aZ0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=x.N
q=x.z
w=3
return A.b(A.kP(A.F(["action","civicUserGroupsPersist","value",d],r,q),!1,!1,null),$async$aZ0)
case 3:p=f
o=p==null
n=!o
if(n){t=J.a4(p)
t=J.A(t.h(p,"ok"),!0)&&x.f.b(t.h(p,"value"))}else t=!1
if(t){u=A.a2(x.f.a(J.q(p,"value")),r,q)
w=1
break}r=o?null:J.q(p,"error")
s=B.a.i(J.k(r==null?"":r))
if(n&&J.A(J.q(p,"ok"),!1)&&B.a.t(s,"already taken"))throw A.V(A.bd(s))
w=4
return A.b(A.nr("civic_user_groups_v1",d,null),$async$aZ0)
case 4:u=f?d:null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZ0,v)},
Ij(d){return C.hFR(d)},
hFR(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ij=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:J.aG(d,"updatedAt",new A.T(Date.now(),0,!1).a6().ac())
w=2
return A.b(A.ay(),$async$Ij)
case 2:q=f
w=3
return A.b(q.aq("String","ngmy_civic_user_groups_v1",B.S.ao(d,null)),$async$Ij)
case 3:s=null
u=5
w=8
return A.b(C.aZ0(d),$async$Ij)
case 8:s=f
u=1
w=7
break
case 5:u=4
i=t.pop()
o=A.ab(i)
if(o instanceof A.lM){r=o
if(B.a.t(r.a,"already taken"))throw i}else throw i
w=7
break
case 4:w=1
break
case 7:o=s
n=A.Nc(o==null?d:o)
if(n.a===0)throw A.V(A.bd("Could not sync this group to the cloud. Check your connection and try again."))
o=new A.du(n,n.r,n.e)
case 9:if(!o.C()){w=10
break}w=11
return A.b(A.aoN(o.d),$async$Ij)
case 11:w=9
break
case 10:m=s
if(m==null)m=d
o=A.U(x.N,x.P)
for(l=A.a3(n),k=new A.cI(n,l.k("cI<1,2>")).gae(0);k.C();){r=k.d
o.n(0,r.a,r.b.ah())}J.aG(m,"groups",o)
w=12
return A.b(q.aq("String","ngmy_civic_user_groups_v1",B.S.ao(m,null)),$async$Ij)
case 12:o=l.k("bc<2>")
j=A.C(new A.bc(n,o),o.k("J.E"))
B.d.aZ(j,new C.c6J())
$.a6w=j
return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$Ij,v)},
aoO(d){return C.hFV(d)},
hFV(d){var w=0,v=A.j(x.h),u,t,s,r
var $async$aoO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ik(),$async$aoO)
case 3:r=f
try{t=J.fUP(r,new C.c6R(d))
u=t
w=1
break}catch(q){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$aoO,v)},
Uu(d){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m,l
var $async$Uu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m=A.fGU(d)
l=m==null?B.a.i(d).toUpperCase():m
if(J.ad(l)===0){u=null
w=1
break}w=3
return A.b(A.aYZ(l),$async$Uu)
case 3:s=f
if(s!=null){u=s
w=1
break}r=x.N
q=x.z
w=4
return A.b(A.kP(A.F(["action","civicUserGroupsFind","code",l],r,q),!1,!1,null),$async$Uu)
case 4:p=f
if(p!=null){o=J.dl(p)
o=o.ai(p,"group")&&x.f.b(o.h(p,"group"))}else o=!1
if(o){u=A.fXe(A.a2(x.f.a(J.q(p,"group")),r,q))
w=1
break}w=5
return A.b(A.Ik(),$async$Uu)
case 5:t=f
try{r=J.fUP(t,new C.c6S(l))
u=r
w=1
break}catch(k){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Uu,v)},
aZ3(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$aZ3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.Ik(),$async$aZ3)
case 3:s=r.dJ(f,new C.c6W(t))
s=A.C(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZ3,v)},
c7_(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c7_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.Ik(),$async$c7_)
case 3:s=r.dJ(f,new C.c70(t))
s=A.C(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7_,v)},
c6T(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c6T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.Ik(),$async$c6T)
case 3:s=r.dJ(f,new C.c6U(t))
s=A.C(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6T,v)},
a6x(d,e,f){var w=0,v=A.j(x.L),u,t,s,r,q,p,o,n,m,l,k
var $async$a6x=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:k=B.a.i(d).toUpperCase()
if(!C.hpx(k))throw A.V(A.dK("Group code must be 3 letters + 1\u20135 numbers (e.g. ABC123).",null))
w=3
return A.b(A.Ii(),$async$a6x)
case 3:t=h
s=A.Nc(t)
r=A.a3(s)
if(new A.bc(s,r.k("bc<2>")).b4(0,new C.c6Q(k)))throw A.V(A.bd(y.d))
w=4
return A.b(C.Uu(k),$async$a6x)
case 4:if(h!=null)throw A.V(A.bd(y.d))
q=Date.now()
p=B.cH.av(1048576)
o=B.a.i(e.toLowerCase())
n=B.a.i(f)
if(n.length===0)n="Owner"
m=A.hcu(new A.T(Date.now(),0,!1).a6(),null,"",null,"",!1,"","","","cug_"+q+"_"+p,k,null,null,null,k,null,o,0,n)
n=m.a
s.n(0,n,m)
o=A.U(x.N,x.P)
for(r=new A.cI(s,r.k("cI<1,2>")).gae(0);r.C();){l=r.d
o.n(0,l.a,l.b.ah())}J.aG(t,"groups",o)
w=5
return A.b(C.Ij(t),$async$a6x)
case 5:r=C.c6M(n)
w=6
return A.b(A.aoN(r==null?m:r),$async$a6x)
case 6:r=C.c6M(n)
u=r==null?m:r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a6x,v)},
Il(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$Il=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.Ii(),$async$Il)
case 2:s=f
r=A.Nc(s)
q=d.a
r.n(0,q,C.hFS(d,r.h(0,q)))
q=A.U(x.N,x.P)
for(u=new A.cI(r,A.a3(r).k("cI<1,2>")).gae(0);u.C();){t=u.d
q.n(0,t.a,t.b.ah())}J.aG(s,"groups",q)
w=3
return A.b(C.Ij(s),$async$Il)
case 3:return A.h(null,v)}})
return A.i($async$Il,v)},
hFS(d,e){var w,v,u,t,s,r
if(e==null)return d
w=d.r
v=new A.M(w,new C.c6K(),A.S(w).k("M<1,m>")).fP(0)
for(u=e.r,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
if(!v.t(0,r.a))B.d.L(w,r)}return d},
hFQ(d){var w=$.a6w
if(w!=null)B.d.br(w,new C.c6I(d))},
aZ2(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aZ2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.Ii(),$async$aZ2)
case 2:r=f
q=A.Nc(r)
q.W(0,d)
u=A.U(x.N,x.P)
for(t=new A.cI(q,A.a3(q).k("cI<1,2>")).gae(0);t.C();){s=t.d
u.n(0,s.a,s.b.ah())}J.aG(r,"groups",u)
w=3
return A.b(C.Ij(r),$async$aZ2)
case 3:C.hFQ(d)
return A.h(null,v)}})
return A.i($async$aZ2,v)},
aZ4(d,e,f,g,h,i,j){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m
var $async$aZ4=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:m=A.fGU(g)
if(m==null)m=B.a.i(g).toUpperCase()
if(m.length===0){u=null
w=1
break}w=3
return A.b(C.Uu(m),$async$aZ4)
case 3:t=l
if(t==null){u=null
w=1
break}s=B.a.i(e.toLowerCase())
if(t.amk(s)||t.aFZ(s)){u=t
w=1
break}r=t.r
B.d.br(r,new C.c6Z(s))
q=B.a.i(h)
if(q.length===0)q=B.d.gI(s.split("@"))
p=new A.T(Date.now(),0,!1).a6()
o=B.a.i(i)
n=B.a.i(j)
B.d.L(r,A.hcv(B.a.i(d),s,f,p,0,q,o,new A.T(Date.now(),0,!1).a6(),n,"pending"))
w=4
return A.b(C.Il(t),$async$aZ4)
case 4:n=C.c6M(t.a)
u=n==null?t:n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZ4,v)},
aZ1(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZ1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoO(d),$async$aZ1)
case 3:q=g
if(q==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
s=q.r
r=B.d.bg(s,new C.c6L(t))
if(r<0){u=!1
w=1
break}s[r].e="active"
w=4
return A.b(C.Il(q),$async$aZ1)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZ1,v)},
aoP(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$aoP=A.e(function(i,a0){if(i===1)return A.f(a0,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoO(d),$async$aoP)
case 3:k=a0
if(k==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
if(k.a4Z(t)){u=!1
w=1
break}s=B.a.i(f==null?"":f)
if(J.ad(s)===0)try{s=B.a.i(B.d.h1(k.r,new C.c6X(t)).b)}catch(j){s=J.f4(t,"@")?B.d.gI(J.lu(t,"@")):t}if(J.ad(s)===0)s="Member"
q=k.r.length
B.d.br(k.r,new C.c6Y(t))
if(k.r.length===q){u=!1
w=1
break}p=k.x
o=Date.now()
n=B.cH.av(1048576)
m=s
l=new A.T(Date.now(),0,!1).a6()
B.d.c9(p,0,new A.pU("cug_"+o+"_"+n,B.a50,0,m,g,l,B.a.i(h.toLowerCase()),"",t,""))
w=4
return A.b(C.Il(k),$async$aoP)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoP,v)},
c6N:function c6N(d){this.a=d},
c6P:function c6P(d){this.a=d},
c6O:function c6O(d){this.a=d},
c72:function c72(){},
c6J:function c6J(){},
c6R:function c6R(d){this.a=d},
c6S:function c6S(d){this.a=d},
c6W:function c6W(d){this.a=d},
c70:function c70(d){this.a=d},
c6U:function c6U(d){this.a=d},
c6Q:function c6Q(d){this.a=d},
c6K:function c6K(){},
c6I:function c6I(d){this.a=d},
c6Z:function c6Z(d){this.a=d},
c6L:function c6L(d){this.a=d},
c6X:function c6X(d){this.a=d},
c6Y:function c6Y(d){this.a=d},
aNu(d,e){var w=0,v=A.j(x.H),u
var $async$aNu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fO(new A.fF(e)),$async$aNu)
case 3:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+e,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aNu,v)},
bzf(d,e,f){var w=d.x,v=A.S(w).k("a_<1>")
w=A.C(new A.a_(w,new C.ffU(B.a.i(e).toLowerCase(),B.a.i(f.toLowerCase()),d),v),v.k("J.E"))
return w},
hTs(d,e,f){return B.d.cJ(C.bzf(d,e,f),0,new C.ffT())},
hWO(d,e,f){var w,v,u=C.bzf(d,e,f)
u=A.C(new A.M(u,new C.fkX(),A.S(u).k("M<1,wt>")),x.W)
w=d.cR6(e,f)
B.d.v(u,new A.M(w,new C.fkY(),A.S(w).k("M<1,wt>")))
if(d.y){w=d.ax
w=w.length!==0&&!d.SF(e,w)}else w=!1
if(w){w=d.ay
if(w==null)w=new A.T(Date.now(),0,!1).a6()
v=B.a.i(d.z)
u.push(new C.K2(v.length===0?"Help round":v,!0,"",w))}B.d.aZ(u,new C.fkZ())
return u},
bAa(d){var w=0,v=A.j(x.H),u,t,s
var $async$bAa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){w=1
break}t=A.cE("https://cash.app/$"+(B.a.a0(s,"$")?B.a.b6(s,1):s),0,null)
w=5
return A.b(A.pv(t),$async$bAa)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iW(t,B.fn,null),$async$bAa)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bAa,v)},
bzc(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=A.af("[^\\d+]",!0,!1,!1,!1)
r=A.aK(d,s,"")
if(r.length===0){w=1
break}t=A.cE("tel:"+r,0,null)
w=5
return A.b(A.pv(t),$async$bzc)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iW(t,B.fn,null),$async$bzc)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bzc,v)},
hrI(d,e,f,g){C.c71()
return A.hE(d,new C.aoK(f,g,e,null),!1,null,x.X)},
hhU(d,e,f,g,h,i,j){return new C.aAm(f,j,g,i,h,d,e,null)},
h_C(d,e,f,g,h,i,j,k,l){return new C.bhb(k,g,d,h,j,e,f,i,l,null)},
i_Q(d){var w={},v=new A.ar(B.as,$.aw())
w.a=""
return A.bR(B.K,null,new C.fr8(w,v),d,!0,!0,!0,null,!1,!1,x.N).fj(v.gf9())},
i_S(d,e,f,g,h,i,j,k){var w=new A.ar(B.as,$.aw())
return A.bR(B.K,null,new C.frs(h,k,j,w,!0,i,g,f),d,!0,!0,!0,null,!1,!1,x.N).fj(w.gf9())},
i_R(d,e,f,g,h){var w,v,u,t={},s=g===B.rE,r=$.aw(),q=new A.ar(B.as,r),p=new A.ar(B.as,r),o=new A.ar(B.as,r)
r=new C.fro(s,e)
w=A.S(h).k("a_<1>")
v=A.C(new A.a_(h,new C.frl(r),w),w.k("J.E"))
u=s&&h.length!==0&&v.length===0
t.a=v.length!==0?B.d.gI(v).b:""
t.b=!1
return A.bR(B.K,null,new C.frm(t,o,h,r,s,f,u,p,q,e),d,!0,!0,!0,null,!1,!1,x.R).fj(new C.frn(q,p,o))},
i_O(d,e,f){return A.bR(B.K,null,new C.fqT(f,e),d,!0,!0,!1,null,!1,!1,x.y)},
i_M(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=C.bzf(f,i,e),r=B.d.cJ(s,0,new C.fqL()),q=f.a5f(i,e)
if(f.y){w=f.ax
v=w.length!==0&&!f.SF(i,w)}else v=!1
if(f.ax.length===0)u=D.axM
else{w=A.S(s).k("a_<1>")
u=A.C(new A.a_(s,new C.fqM(f),w),w.k("J.E"))}if(!v)t=q>0&&r<=0
else t=!0
return A.bR(B.K,null,new C.fqN(f,i,e,l,h,k,s,r,q,v,u,t,g,j),d,!0,!0,!0,null,!1,!1,x.H)},
i_H(d,e){return A.bR(B.K,null,new C.fqm(e),d,!0,!0,!1,null,!1,!1,x.y)},
i_I(d,e,f,g){return A.bR(B.K,null,new C.fqp(g,e,f),d,!0,!0,!1,null,!1,!1,x.y)},
h2k(d,e){var w=null
return new A.D(B.vA,A.B(A.a([A.d(d,w,w,w,w,w,w,B.wA,w,w,w),B.b7,new A.dq(1,B.co,A.d(e,w,w,w,w,w,w,B.ma,B.dN,w,w),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
i_K(d,e,f,g){var w,v,u,t,s,r
if(!f)return C.i_J(d,e,g)
w=e.z
v=$.aw()
u=new A.ar(new A.bb(w,B.b4,B.aN),v)
w=e.Q
t=new A.ar(new A.bb(w,B.b4,B.aN),v)
w=e.as
s=new A.ar(new A.bb(w,B.b4,B.aN),v)
w=e.at
r=new A.ar(new A.bb(w,B.b4,B.aN),v)
return A.bR(B.K,null,new C.fqC(g,e.y,u,t,s,r,new C.fqB(e,u,t,s,r),e),d,!0,!0,!0,null,!1,!1,x.L).fj(new C.fqD(u,t,s,r))},
i_J(d,e,f){return A.bR(B.K,null,new C.fqu(f,e),d,!0,!0,!0,null,!1,!1,x.L)},
hkR(d,e){return A.c7(e,new C.fhW(e,d),null)},
fhU(d,e,f,g,h,i){var w,v=null,u=A.n(18),t=A.I(B.b0.j(0.35),B.q,1),s=A.X(e,B.b0,v,v,v,20),r=A.d(f,v,v,v,v,v,v,A.l(v,v,B.b0.j(0.85),v,v,v,v,v,v,v,v,10,v,v,B.H,v,v,!0,v,1.1,v,v,v,v,v,v),v,v,v),q=g==null,p=!q,o=p?B.j2:B.c,n=p?B.mP:v,m=x.p
n=A.a([r,B.au,A.d(i,v,v,v,v,v,v,A.l(v,v,o,v,n,B.b0.j(0.6),v,v,v,v,v,14,v,v,B.P,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v)],m)
if(p&&h!=null)B.d.v(n,A.a([B.au,A.d("Tap to "+h,v,v,v,v,v,v,A.l(v,v,B.b0.j(0.75),v,v,v,v,v,v,v,v,10,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],m))
w=A.p(v,A.B(A.a([s,B.at,A.E(A.x(n,B.F,v,B.e,B.j,0,B.p),1),A.aH(v,v,v,v,A.X(B.fR,B.b0.j(0.9),v,v,v,18),v,v,v,new C.fhV(i,d,f),v,v,v,v,"Copy",v)],m),B.F,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.fp,v,t,u,v,v,B.n),v,v,v,B.d9,B.eR,v,v,v)
if(q)return w
return A.aF(!1,B.a1,!0,v,A.aL(!1,A.n(18),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)},
aOp(d,e,f){var w=null,v=B.b3.j(0.16),u=A.I(B.b3.j(0.55),B.q,1),t=A.a([new A.ac(0,B.G,B.b3.j(0.35),B.J,14)],x.V),s=x.p
return A.B(A.a([A.p(w,A.X(d,B.b3,w,w,w,w),B.f,w,w,new A.o(v,w,u,w,t,w,B.a5),w,46,w,w,w,w,w,46),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,B.kj,w,w,w),B.au,A.d(e,w,w,w,w,w,w,M.a8k,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w)},
KB(d){var w=null,v=B.c.j(0.05)
return A.bs(w,w,w,B.bB,w,w,w,w,!0,new A.b4(4,A.n(14),new A.az(B.b3.j(0.25),1,B.q,-1)),w,w,w,w,w,v,!0,w,w,w,w,new A.b4(4,A.n(14),B.ab6),w,w,w,w,w,w,w,w,B.kK,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
i_8(d,e){var w,v,u,t,s,r,q=A.a([],x.x)
for(w=d.x,v=w.length,u=e==="other",t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.b===B.rE){r=s.w
r=u?r.length===0:r===e}else r=!1
if(r)q.push(s)}return q},
i_9(d,e,f){var w,v,u,t
for(w=f.length,v=0;v<w;++v){u=B.a.i(f[v].y)
if(u.length!==0)return u}u=e==="other"
if(!u&&e===d.ax&&B.a.i(d.z).length!==0)return B.a.i(d.z)
if(u)return"Other contributions"
if(w!==0){t=B.d.gal(f).f.bU()
return"Contribution round \xb7 "+A.bH(t)+"/"+A.bS(t)+"/"+A.bA(t)}return"Contribution round"},
hmF(d){var w,v=d.toLowerCase()
A:{if("mother"===v){w="Mother"
break A}if("father"===v){w="Father"
break A}if("spouse"===v){w="Spouse"
break A}if("child"===v){w="Child"
break A}if("brother"===v){w="Brother"
break A}if("sister"===v){w="Sister"
break A}w=d.length===0?"Family":d
break A}return w},
i_P(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l=x.S,k=A.a([new A.FV(e.c,e.d)],l),j=e.gFk()
B.d.v(k,new A.M(j,new C.fqV(),A.S(j).k("M<1,+email,name(m,m)>")))
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
if(!B.d.b4(k,new C.fqW(o)))w.push(new A.z(new A.FV(o.x,o.d),o))}m=B.d.cJ(h,0,new C.fqX())
l=k.length
return A.bR(B.K,null,new C.fqY(g,w,k,m,i,l===0?0:B.k.D(w.length/l,0,1),e,v),d,!0,!0,!0,null,!1,!1,x.H)},
i_N(d,e,f){var w,v,u,t,s,r,q,p=B.a.i(f.y)
if(!(p.length!==0))p=f.w===e.ax&&B.a.i(e.z).length!==0?B.a.i(e.z):"Group contribution"
w=e.e
v=A.af("[^0-9]",!0,!1,!1,!1)
u="LG-"+w+"-"+B.a.ap(B.a.aX(A.aK(f.a,v,""),6,"0"),0,6)
t=f.f.bU()
s=""+A.bH(t)+"/"+A.bS(t)+"/"+A.bA(t)+" "+B.a.aX(B.o.u(A.dk(t)),2,"0")+":"+B.a.aX(B.o.u(A.h4(t)),2,"0")
v=B.k.ab(f.c,2)
r=f.e
r=r.length!==0?"\nNote: "+r:""
q=f.r
if(q.length===0)q=e.c
return A.bR(B.K,null,new C.fqP(u,new C.fqQ(),f,p,s,e,"RECEIPT "+u+"\nGroup: "+w+" ("+e.d+")\nFrom: "+f.d+"\nFor: "+p+"\nAmount: $"+v+"\nDate: "+s+r+"\nRecorded by: "+q),d,!0,!0,!0,null,!1,!1,x.H)},
i_L(d,e,f,g){return A.bR(B.K,null,new C.fqE(e,f,g),d,!0,!0,!0,null,!1,!1,x.n)},
ffU:function ffU(d,e,f){this.a=d
this.b=e
this.c=f},
ffT:function ffT(){},
Cx:function Cx(d,e){this.a=d
this.b=e},
wt:function wt(){},
Pv:function Pv(d,e){this.b=d
this.a=e},
K2:function K2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fkX:function fkX(){},
fkY:function fkY(){},
fkZ:function fkZ(){},
aoK:function aoK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCN:function aCN(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=e
_.y=null
_.z=f
_.cR$=g
_.b5$=h
_.c=_.a=null},
dLL:function dLL(d){this.a=d},
dLB:function dLB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLA:function dLA(){},
dLz:function dLz(d){this.a=d},
dLF:function dLF(d){this.a=d},
dLH:function dLH(d){this.a=d},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLE:function dLE(d,e,f){this.a=d
this.b=e
this.c=f},
dLJ:function dLJ(d){this.a=d},
dLK:function dLK(d,e){this.a=d
this.b=e},
dLD:function dLD(d,e,f){this.a=d
this.b=e
this.c=f},
dLC:function dLC(d,e,f){this.a=d
this.b=e
this.c=f},
aqp:function aqp(d,e,f){this.c=d
this.d=e
this.a=f},
bk_:function bk_(d,e,f,g){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=!1
_.x=""
_.cR$=f
_.b5$=g
_.c=_.a=null},
ecR:function ecR(d,e){this.a=d
this.b=e},
ecQ:function ecQ(d){this.a=d},
ecO:function ecO(){},
ecP:function ecP(){},
ecN:function ecN(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecM:function ecM(d){this.a=d},
ecW:function ecW(d){this.a=d},
ecX:function ecX(d){this.a=d},
ecY:function ecY(d){this.a=d},
ecV:function ecV(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ecU:function ecU(d,e){this.a=d
this.b=e},
ed_:function ed_(d,e){this.a=d
this.b=e},
ecS:function ecS(d,e){this.a=d
this.b=e},
ecT:function ecT(d,e){this.a=d
this.b=e},
abw:function abw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ct:function Ct(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
dej:function dej(d){this.a=d},
aAm:function aAm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
dez:function dez(d){this.a=d},
acU:function acU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
Ig:function Ig(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCK:function aCK(d,e){var _=this
_.d=null
_.f=_.e=$
_.r=null
_.w=0
_.cR$=d
_.b5$=e
_.c=_.a=null},
dLx:function dLx(d){this.a=d},
dLl:function dLl(d,e){this.a=d
this.b=e},
dL9:function dL9(){},
dLj:function dLj(d){this.a=d},
dLh:function dLh(d){this.a=d},
dLi:function dLi(d){this.a=d},
dLm:function dLm(d,e){this.a=d
this.b=e},
dLn:function dLn(d,e){this.a=d
this.b=e},
dLo:function dLo(){},
dLp:function dLp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dLk:function dLk(d,e){this.a=d
this.b=e},
dLr:function dLr(d){this.a=d},
dLs:function dLs(d,e){this.a=d
this.b=e},
dLt:function dLt(d){this.a=d},
dLu:function dLu(d){this.a=d},
dLv:function dLv(d){this.a=d},
dLw:function dLw(d,e){this.a=d
this.b=e},
dLq:function dLq(d,e){this.a=d
this.b=e},
dLc:function dLc(d,e){this.a=d
this.b=e},
dLd:function dLd(d,e){this.a=d
this.b=e},
dLb:function dLb(d,e){this.a=d
this.b=e},
dLa:function dLa(d,e){this.a=d
this.b=e},
dLe:function dLe(d,e){this.a=d
this.b=e},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLg:function dLg(){},
aCL:function aCL(d){this.a=d},
aCM:function aCM(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dLy:function dLy(d){this.a=d},
bhb:function bhb(d,e,f,g,h,i,j,k,l,m){var _=this
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
bfB:function bfB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
deS:function deS(d){this.a=d},
deR:function deR(d,e){this.a=d
this.b=e},
bha:function bha(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
diK:function diK(d){this.a=d},
bh7:function bh7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
diI:function diI(d){this.a=d},
bh9:function bh9(d,e,f){this.c=d
this.d=e
this.a=f},
diJ:function diJ(d){this.a=d},
PP:function PP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
diH:function diH(d,e){this.a=d
this.b=e},
bh8:function bh8(d,e,f){this.a=d
this.b=e
this.c=f},
bjE:function bjE(){},
fr8:function fr8(d,e){this.a=d
this.b=e},
fr7:function fr7(d,e){this.a=d
this.b=e},
fr4:function fr4(d,e){this.a=d
this.b=e},
fr3:function fr3(d){this.a=d},
fr5:function fr5(d){this.a=d},
fr6:function fr6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fr2:function fr2(d){this.a=d},
frs:function frs(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
frp:function frp(d){this.a=d},
frq:function frq(d){this.a=d},
frr:function frr(d,e){this.a=d
this.b=e},
fro:function fro(d,e){this.a=d
this.b=e},
frl:function frl(d){this.a=d},
frm:function frm(d,e,f,g,h,i,j,k,l,m){var _=this
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
frk:function frk(d,e,f,g,h,i,j,k,l,m){var _=this
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
frc:function frc(d){this.a=d},
frd:function frd(d){this.a=d},
fre:function fre(d){this.a=d},
frf:function frf(d,e){this.a=d
this.b=e},
frb:function frb(d){this.a=d},
frg:function frg(d){this.a=d},
fra:function fra(){},
frh:function frh(d,e,f){this.a=d
this.b=e
this.c=f},
fr9:function fr9(d,e){this.a=d
this.b=e},
fri:function fri(d){this.a=d},
frj:function frj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
frn:function frn(d,e,f){this.a=d
this.b=e
this.c=f},
fqT:function fqT(d,e){this.a=d
this.b=e},
fqR:function fqR(d){this.a=d},
fqS:function fqS(d){this.a=d},
fqL:function fqL(){},
fqM:function fqM(d){this.a=d},
fqN:function fqN(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fqK:function fqK(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fqJ:function fqJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
fqI:function fqI(d,e){this.a=d
this.b=e},
fqF:function fqF(d,e){this.a=d
this.b=e},
fqH:function fqH(d,e,f){this.a=d
this.b=e
this.c=f},
fqG:function fqG(){},
bi3:function bi3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
doR:function doR(){},
doS:function doS(d){this.a=d},
doT:function doT(d,e){this.a=d
this.b=e},
doU:function doU(){},
doV:function doV(d){this.a=d},
doW:function doW(d,e){this.a=d
this.b=e},
doX:function doX(d){this.a=d},
doQ:function doQ(d,e,f){this.a=d
this.b=e
this.c=f},
fqm:function fqm(d){this.a=d},
fqk:function fqk(d){this.a=d},
fql:function fql(d){this.a=d},
fqp:function fqp(d,e,f){this.a=d
this.b=e
this.c=f},
fqn:function fqn(d){this.a=d},
fqo:function fqo(d){this.a=d},
fqB:function fqB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqC:function fqC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fqA:function fqA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fqv:function fqv(d,e,f){this.a=d
this.b=e
this.c=f},
fqw:function fqw(d,e,f){this.a=d
this.b=e
this.c=f},
fqx:function fqx(d,e,f){this.a=d
this.b=e
this.c=f},
fqy:function fqy(d,e,f){this.a=d
this.b=e
this.c=f},
fqz:function fqz(d){this.a=d},
fqD:function fqD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqu:function fqu(d,e){this.a=d
this.b=e},
fqt:function fqt(d,e,f){this.a=d
this.b=e
this.c=f},
fqq:function fqq(d){this.a=d},
fqr:function fqr(d){this.a=d},
fqs:function fqs(d){this.a=d},
fhW:function fhW(d,e){this.a=d
this.b=e},
fhV:function fhV(d,e,f){this.a=d
this.b=e
this.c=f},
oB:function oB(d,e,f){this.c=d
this.d=e
this.a=f},
fqV:function fqV(){},
fqW:function fqW(d){this.a=d},
fqX:function fqX(){},
fqY:function fqY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fqU:function fqU(d,e,f){this.a=d
this.b=e
this.c=f},
fqQ:function fqQ(){},
fqP:function fqP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fqO:function fqO(d,e){this.a=d
this.b=e},
bgE:function bgE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqE:function fqE(d,e,f){this.a=d
this.b=e
this.c=f},
aAZ:function aAZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aB_:function aB_(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=""
_.w=null
_.x=f
_.c=_.a=null},
dhj:function dhj(){},
dhk:function dhk(d){this.a=d},
dhl:function dhl(){},
dhm:function dhm(d){this.a=d},
dhn:function dhn(d){this.a=d},
dho:function dho(d){this.a=d},
dhp:function dhp(d){this.a=d},
dhB:function dhB(){},
dhv:function dhv(d){this.a=d},
dhu:function dhu(d,e){this.a=d
this.b=e},
dhw:function dhw(d,e){this.a=d
this.b=e},
dht:function dht(d,e,f){this.a=d
this.b=e
this.c=f},
dhx:function dhx(d,e){this.a=d
this.b=e},
dhs:function dhs(d,e,f){this.a=d
this.b=e
this.c=f},
dhy:function dhy(d,e){this.a=d
this.b=e},
dhr:function dhr(d,e){this.a=d
this.b=e},
dhz:function dhz(d){this.a=d},
dhq:function dhq(d){this.a=d},
dhA:function dhA(d){this.a=d},
aLd:function aLd(){},
aLe:function aLe(){},
aLO:function aLO(){},
fXf(d,e){var w=0,v=A.j(x.y),u
var $async$fXf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}u=A.lj(d,B.D2)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXf,v)},
c6F(d,e,f){var w=0,v=A.j(x.y),u
var $async$c6F=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}w=3
return A.b(A.arr(d,B.zs,e),$async$c6F)
case 3:if(h){u=!0
w=1
break}u=A.lj(d,B.zs)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6F,v)},
aYY(d,e){var w=0,v=A.j(x.y),u,t
var $async$aYY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}t=J
w=3
return A.b(C.aZ3(d),$async$aYY)
case 3:if(t.ad(g)<1){u=!0
w=1
break}u=C.fXf(d,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYY,v)},
aoM(d,e,f){var w=0,v=A.j(x.y),u,t
var $async$aoM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYY(e,f),$async$aoM)
case 3:if(h){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.kX(!1,d,e,f,"Your free group slot is used. Subscribe to create another lightning group ("+A.cfT(B.D2)+" / "+A.cfP(B.D2)+").",B.D2,"Create another group"),$async$aoM)
case 6:t=h
if(t){w=4
break}else h=t
w=5
break
case 4:w=7
return A.b(C.aYY(e,f),$async$aoM)
case 7:case 5:u=h
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoM,v)},
aYX(d,e,f,g){var w=0,v=A.j(x.y),u
var $async$aYX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}if(d<100){u=!0
w=1
break}u=C.c6F(g,e,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYX,v)},
aoL(d,e,f,g,h){var w=0,v=A.j(x.y),u,t
var $async$aoL=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aYX(e,f,g,h),$async$aoL)
case 3:if(j){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.zC(d,h,g,"This group is at the free 100-member limit. Unlock more seats for "+A.cfT(B.zs)+" / "+A.cfP(B.zs)+".",B.zs,f,"Unlock 100+ members"),$async$aoL)
case 6:t=j
if(t){w=4
break}else j=t
w=5
break
case 4:w=7
return A.b(C.aYX(e,f,g,h),$async$aoL)
case 7:case 5:u=j
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoL,v)}},D,E,F,H,O,G,P,Q,R,S,T
J=c[1]
A=c[0]
B=c[2]
I=c[77]
L=c[81]
K=c[75]
M=c[89]
N=c[87]
C=a.updateHolder(c[8],C)
D=c[74]
E=c[76]
F=c[82]
H=c[83]
O=c[84]
G=c[85]
P=c[79]
Q=c[80]
R=c[88]
S=c[78]
T=c[86]
C.Cx.prototype={
a5(){return"_MemberHistoryFilter."+this.b}}
C.wt.prototype={}
C.Pv.prototype={}
C.K2.prototype={}
C.aoK.prototype={
S(){var w=x.D
return new C.aCN(A.a([],w),A.a([],w),A.a([],w),null,null)},
ge2(){return this.c}}
C.aCN.prototype={
Z(){var w,v=this,u=null
v.a1()
v.w=C.hFU(v.a.c)
v.x=C.hFT(v.a.c)
v.y=A.dv(B.hR,new C.dLL(v))
w=A.bj(u,B.xH,u,1,u,v)
w.cs(0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.pT,u,1,u,v)
w.fh(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.k4,u,1,u,v)
w.cM(0)
v.f!==$&&A.aP()
v.f=w
w=A.bj(u,B.im,u,1,u,v)
w.cs(0)
v.r!==$&&A.aP()
v.r=w
v.i7()},
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
w.bvb()},
i7(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$i7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aZ3(t.a.c),$async$i7)
case 3:s=e
w=4
return A.b(C.c6T(t.a.c),$async$i7)
case 4:r=e
w=5
return A.b(C.c7_(t.a.c),$async$i7)
case 5:q=e
if(t.c==null){w=1
break}t.m(new C.dLB(t,s,r,q))
case 1:return A.h(u,v)}})
return A.i($async$i7,v)},
zZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
m=r.a
w=3
return A.b(C.aoM(j,m.c,m.e),$async$zZ)
case 3:if(!e||r.c==null){w=1
break}j=r.c
j.toString
w=4
return A.b(C.i_Q(j),$async$zZ)
case 4:q=e
if(q==null||r.c==null){w=1
break}t=6
j=r.a
w=9
return A.b(C.a6x(q,j.c,j.d),$async$zZ)
case 9:p=e
w=10
return A.b(r.i7(),$async$zZ)
case 10:j=r.c
if(j==null){w=1
break}m=p.a
l=r.a
w=11
return A.b(A.hE(j,new C.Ig(m,l.c,l.d,l.e,null),!1,null,x.X),$async$zZ)
case 11:w=12
return A.b(r.i7(),$async$zZ)
case 12:t=2
w=8
break
case 6:t=5
i=s.pop()
j=A.ab(i)
if(j instanceof A.lM){o=j
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}else{n=j
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(A.u(n),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zZ,v)},
Yd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i_S(r,!0,"Join group","ABC12345",B.yC,1.6,"Enter the group code from the owner (3 letters + numbers).","Join with code"),$async$Yd)
case 3:s=e
if(s==null||t.c==null){w=1
break}w=4
return A.b(t.tI(s),$async$Yd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yd,v)},
tI(d){return this.c_r(d)},
c_r(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$tI=A.e(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(C.Uu(d),$async$tI)
case 3:g=a0
if(g==null){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.f0M)
w=1
break}w=g.amk(r.a.c)?4:5
break
case 4:m=r.c
if(m==null){w=1
break}l=g.a
k=r.a
w=6
return A.b(A.hE(m,new C.Ig(l,k.c,k.d,k.e,null),!1,null,x.X),$async$tI)
case 6:w=7
return A.b(r.i7(),$async$tI)
case 7:w=1
break
case 5:if(g.aFZ(r.a.c)){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.eYj)
w=1
break}m=g.c
l=g.a
w=8
return A.b(C.aYX(g.gwN(),l,!1,m),$async$tI)
case 8:if(!a0){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.eZI)
w=1
break}m=r.c
m.toString
l=r.a
w=9
return A.b(C.i_L(m,g,l.d,l.c),$async$tI)
case 9:q=a0
if(q==null||r.c==null){w=1
break}t=11
m=g.e
l=r.a.c
k=q.a
j=q.b
i=q.c
w=14
return A.b(C.aZ4(q.d,l,q.e,m,k,j,i),$async$tI)
case 14:p=a0
if(p==null){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.f0U)
w=1
break}t=2
w=13
break
case 11:t=10
f=s.pop()
m=A.ab(f)
if(m instanceof A.lM){o=m
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{n=m
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not send your request. "+A.u(n),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=13
break
case 10:w=2
break
case 13:if(r.c==null){w=1
break}w=15
return A.b(r.i7(),$async$tI)
case 15:m=r.c
if(m==null){w=1
break}w=16
return A.b(A.ca(null,null,!0,null,new C.dLA(),m,null,!0,!0,x.H),$async$tI)
case 16:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$tI,v)},
Zc(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.hE(r,D.h6S,!1,null,x.N),$async$Zc)
case 3:s=e
if(s==null||s.length===0||t.c==null){w=1
break}w=4
return A.b(t.tI(s),$async$Zc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zc,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
m===$&&A.c()
w=o.e
w===$&&A.c()
v=o.f
v===$&&A.c()
u=A.c7(new A.hb(A.a([m,w,v],x.U)),new C.dLF(o),n)
t=o.a.e?A.aH(n,n,n,n,D.bL_,n,n,n,new C.dLG(o,d),n,n,n,n,"All groups (admin)",n):n
t=C.h_C(n,!1,n,new C.dLH(d),n,n,!1,"LIGHTNING GROUPS",t)
s=x.p
m=A.a([new C.bh7(m,w,v,o.gbIW(),o.gc_q(),o.gc5F(),n),B.dZ,o.azI("YOU OWN")],s)
if(J.cn(o.w))m.push(new A.D(B.e7,A.d("Create your free group \u2014 one free owned group.",n,n,n,n,n,n,K.Jf,n,n,n),n))
else{r=J.h6S(o.w)
B.d.v(m,r.gdL(r).dz(0,new C.dLI(o,d),x.l))}if(J.cJ(o.z)){r=A.a([B.by,o.azI("WAITING FOR APPROVAL")],s)
for(q=J.aV(o.z);q.C();){p=q.gR(q)
r.push(new C.aAm(p,"Request sent \xb7 "+p.d+" has to approve you",new C.dLJ(d),w,v,0,"...",n))}B.d.v(m,r)}m.push(B.by)
m.push(o.azI("YOU JOINED"))
if(J.cn(o.x))m.push(new A.D(B.e7,A.d("Join with a code or QR from a friend.",n,n,n,n,n,n,K.Jf,n,n,n),n))
else{w=J.h6S(o.x)
B.d.v(m,w.gdL(w).dz(0,new C.dLK(o,d),x.l))}return A.yM(A.c6(n,B.c_,new A.an(B.W,n,B.aa,B.r,A.a([u,A.bm(!0,A.x(A.a([new A.D(E.Mw,t,n),A.E(A.cw(m,n,D.buS,n,n,B.ag,!1),1)],s),B.ai,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],s),n),n,!1,!1,n,n),B.TD,x.I)},
b66(d,e){var w=this.r
w===$&&A.c()
return A.c7(w,new C.dLC(this,d,e),null)},
azI(d){var w=null
return new A.D(B.cv,A.d(d,w,w,w,w,w,w,A.l(w,w,B.b3.j(0.85),w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w),w)}}
C.aqp.prototype={
S(){return new C.bk_(new A.ar(B.as,$.aw()),A.a([],x.D),null,null)},
ge2(){return this.c}}
C.bk_.prototype={
Z(){var w,v=this,u=null
v.a1()
v.r=A.bp(C.fXg(),!0,x.L)
w=A.bj(u,B.pT,u,1,u,v)
w.fh(0,!0)
v.d!==$&&A.aP()
v.d=w
w=A.bj(u,B.k4,u,1,u,v)
w.cM(0)
v.e!==$&&A.aP()
v.e=w
v.i7()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v.T$=$.aw()
v.P$=0
w.bvN()},
i7(){var w=0,v=A.j(x.H),u,t=this,s
var $async$i7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ik(),$async$i7)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ecR(t,s))
case 1:return A.h(u,v)}})
return A.i($async$i7,v)},
gbP6(){var w,v=B.a.i(this.x).toLowerCase()
if(v.length===0)return this.r
w=J.dJ(this.r,new C.ecQ(v))
w=A.C(w,w.$ti.k("J.E"))
return w},
a_u(d){return this.cdX(d)},
cdX(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a_u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return A.b(A.hE(s,new C.Ig(d.a,t.c,t.d,!0,null),!1,null,x.X),$async$a_u)
case 2:w=3
return A.b(u.i7(),$async$a_u)
case 3:return A.h(null,v)}})
return A.i($async$a_u,v)},
O1(d){return this.bKS(d)},
bKS(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$O1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.ecN(d),s,null,!0,!0,x.y),$async$O1)
case 3:if(f!==!0){w=1
break}w=4
return A.b(C.aZ2(d.a),$async$O1)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted "+d.e,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=5
return A.b(t.i7(),$async$O1)
case 5:case 1:return A.h(u,v)}})
return A.i($async$O1,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.gbP6(),n=q.d
n===$&&A.c()
w=q.e
w===$&&A.c()
w=A.c7(new A.hb(A.a([n,w],x.U)),new C.ecW(q),p)
n=q.w
v=n?"Close search":"Search groups"
u=x.p
v=A.a([new A.D(E.Mw,C.h_C(p,!1,p,new C.ecX(d),p,p,!1,"ALL GROUPS",A.aH(p,p,p,p,A.X(n?B.cB:B.fg,B.ex,p,p,p,20),p,p,p,new C.ecY(q),p,p,p,p,v,p)),p)],u)
if(q.w)v.push(new A.D(B.xS,A.aM(p,B.U,!0,p,!0,B.r,p,A.aN(),q.f,B.b3,p,p,p,p,2,A.bs(p,new A.b4(4,A.n(14),new A.az(B.b3.j(0.3),1,B.q,-1)),p,B.ek,p,p,p,p,!0,new A.b4(4,A.n(14),new A.az(B.b3.j(0.25),1,B.q,-1)),p,p,p,p,p,B.fp,!0,p,p,p,p,new A.b4(4,A.n(14),D.aZL),p,p,p,p,p,p,p,p,B.kK,"Search name, code, owner\u2026",p,p,p,p,p,!0,p,p,p,!0,!0,!1,p,D.bOk,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.ecZ(q),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a4,p,B.an,p,p,p,p),p))
n=J.a4(o)
t=n.gM(o)
s=n.gM(o)===1?"":"s"
r=B.a.i(q.x).length===0?"":" matching"
v.push(new A.D(D.buX,A.d(""+t+" group"+s+r,p,p,p,p,p,p,A.l(p,p,B.b3.j(0.85),p,p,p,p,p,p,p,p,11,p,p,B.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p),p))
v.push(A.E(n.gan(o)?D.b6N:A.kd(!0,p,p,new C.ed_(q,o),n.gM(o),p,D.buy,p,p,!1,!1),1))
return A.yM(A.c6(p,B.c_,new A.an(B.W,p,B.aa,B.r,A.a([w,A.bm(!0,A.x(v,B.ai,p,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],u),p),p,!1,!1,p,p),B.TD,x.I)}}
C.abw.prototype={
B(d){var w=null,v=A.n(16),u=A.n(16),t=A.I(B.b3.j(0.28),B.q,1),s=this.c,r=x.p
return new A.D(B.d9,A.aF(!1,B.a1,!0,w,A.aL(!1,v,!0,A.eH(A.B(A.a([A.p(w,D.bK7,B.f,w,w,new A.o(B.b3.j(0.12),w,A.I(B.b3.j(0.5),B.q,1),w,w,w,B.a5),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(s.e,w,w,w,w,w,w,D.feM,w,w,w),B.bC,A.d("Owner "+s.d+" \xb7 "+s.gwN()+" people",w,1,B.a2,w,w,w,B.hh,w,w,w),A.d(s.c,w,1,B.a2,w,w,w,I.Dz,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1),A.aH(w,w,w,w,D.bM7,w,w,w,this.e,w,w,w,w,"Delete group",w),S.Oi],r),B.m,w,B.e,B.j,0,w,w),w,new A.o(B.fp,w,t,u,w,w,B.n),w,D.btJ,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),w)}}
C.Ct.prototype={
B(d){return A.c7(this.e,new C.dej(this),null)}}
C.aAm.prototype={
B(d){return new A.D(B.e7,A.c7(new A.hb(A.a([this.f,this.r],x.U)),new C.dez(this),null),null)}}
C.acU.prototype={
a3(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=0+a7,b0=0+a8,b1=$.W(),b2=A.N()
b2.r=B.c_.gp(0)
b3.b_(new A.a8(0,0,a9,b0),b2)
w=A.N()
b2=a7*0.5
v=this.c
w.sar(A.aV5(new A.v(b2,a8*0.48),a7*0.38,A.a([B.b3.j(0.07+v*0.06),B.K],x.O),a6,B.x,a6,a6,0))
b3.b_(new A.a8(0,0,a9,b0),w)
u=a8*0.44
t=a7*0.28
b0=this.d*3.141592653589793
s=b0*2
for(a9=3+v*2,r=0.35+v*0.25,q=b3.a,p=8+v*4,o=0;o<3;++o){n=s+o*3.141592653589793*2/3
m=b2+Math.cos(n)*t
l=u+Math.sin(n)*t*0.55
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=B.b3.j(r).gp(0)
j=k.H()
q.drawCircle(m,l,a9,j)
j.delete()
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=B.b3.j(0.12).gp(0)
k.z=B.lz
j=k.H()
q.drawCircle(m,l,p,j)
j.delete()}i=A.N()
i.r=B.ex.j(0.18+v*0.12).gp(0)
i.b=B.ae
i.c=2
i.z=B.jw
a9=x.v
r=A.a([],a9)
h=new A.aO(b1.r,B.ao,a6,a6,r)
for(b1=s*1.6,o=0;o<=48;++o){g=o/48*3.141592653589793*1.4+b1
f=b2+Math.cos(g)*t*0.92
e=u+Math.sin(g)*t*0.42
if(o===0){p=new A.b5(f,e)
r.push(p)
k=h.f
if(k!=null)p.bD(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}else{p=new A.ap(f,e)
r.push(p)
k=h.f
if(k!=null)p.bD(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}}b3.aR(h,i)
d=new A.aO($.W().r,B.ao,a6,a6,A.a([],a9))
d.F(new A.b5(b2+14,u-52))
b1=u-4
d.F(new A.ap(b2-16,b1))
d.F(new A.ap(b2+2,b1))
d.F(new A.ap(b2-20,u+54))
a0=A.N()
a0.r=B.b3.j(0.1+v*0.08).gp(0)
a0.b=B.ae
a0.c=10
a0.z=B.zf
a1=A.N()
b2=this.b
a1.r=B.b3.j(0.32+b2*0.4).gp(0)
a1.b=B.ae
a1.c=2.4
a1.d=B.bT
a1.e=B.fH
for(b1=A.xb(d),r=A.a([],x.J),p=new A.vD(b1,!1,r),k=b1.a;p.C();){a2=p.c
if(a2===0||p.f)A.b8(A.k_('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--a2
p.jB()
a3=r[a2].b
a3===$&&A.c()
a3=a3.a.length()
a4=new A.aO(k,b1.b,a6,new A.cA([new A.Ht(p,a2),0,a3*b2,!0]),A.a([],a9))
j=a0.H()
a2=a4.gbK().a.snapshot()
q.drawPath((a4.e=new A.cC(a2)).a,j)
j.delete()
j=a1.H()
a2=a4.e
q.drawPath((a2==null?a4.e=new A.cC(a4.gbK().a.snapshot()):a2).a,j)
j.delete()}$.W()
a5=A.N()
a5.r=B.ex.j(0.14+v*0.2).gp(0)
for(a9=b0*4,b0=v*3,v=1.2+v*1.2,o=0;o<14;++o){b1=Math.sin(o*1.9+a9)
b2=Math.cos(o*2.3+b0)
j=a5.H()
q.drawCircle((b1*0.35+0.5)*a7,(b2*0.22+0.46)*a8,v,j)
j.delete()}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.Ig.prototype={
S(){return new C.aCK(null,null)},
ge2(){return this.d}}
C.aCK.prototype={
gtH(){var w=this.d
if(w!=null)w=w.a4Z(this.a.d)||this.a.f
else w=!1
return w},
Z(){var w,v=this,u=null
v.a1()
v.d=C.c6M(v.a.c)
w=A.bj(u,B.tL,u,1,u,v)
w.fh(0,!0)
v.e!==$&&A.aP()
v.e=w
w=A.bj(u,B.k4,u,1,u,v)
w.cM(0)
v.f!==$&&A.aP()
v.f=w
v.r=A.dv(B.hR,new C.dLx(v))
v.i7()},
q(){var w=this,v=w.r
if(v!=null)v.a7(0)
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bva()},
i7(){var w=0,v=A.j(x.H),u,t=this,s
var $async$i7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aoO(t.a.c),$async$i7)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dLl(t,s))
case 1:return A.h(u,v)}})
return A.i($async$i7,v)},
D2(d){return this.bzG(d)},
bzG(a6){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$D2=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:if(!r.gtH()||r.d==null){w=1
break}o=a6===B.rE
if(o&&!r.d.y){r.c.K(x.q).f.U(D.eZC)
w=1
break}if(o){n=r.d
n=n.y&&B.a.i(n.ax).length===0}else n=!1
if(n){r.c.K(x.q).f.U(D.eZ4)
w=1
break}n=r.d
m=n.d
m=A.a([new A.FV(n.c,m)],x.S)
n=r.d.gFk()
B.d.v(m,new A.M(n,new C.dL9(),A.S(n).k("M<1,+email,name(m,m)>")))
n=r.d
l=n.y?B.a.i(n.ax):""
n=A.aX(x.N)
if(o&&l.length!==0)for(k=m.length,j=0;j<m.length;m.length===k||(0,A.L)(m),++j){i=m[j]
h=i.b
if(r.d.aDu(h,l,i.a))n.L(0,h)}k=r.c
k.toString
w=3
return A.b(C.i_R(k,n,o&&r.d.y?r.d.z:null,a6,m),$async$D2)
case 3:g=a8
if(g==null||r.c==null){w=1
break}n=g.b
if(n<=0){r.c.K(x.q).f.U(B.Ty)
w=1
break}m=!1
if(o)if(l.length!==0){m=r.d
k=g.a
h=m.alf(k)
m=m.aDu(k,l,h==null?"":h)}if(m){r.c.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(g.a+" already contributed to this round.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=o?4:5
break
case 4:m=r.c
m.toString
k=g.a
h=r.d
w=6
return A.b(C.i_I(m,n,h.y?h.z:null,k),$async$D2)
case 6:if(a8!==!0||r.c==null){w=1
break}case 5:m=r.d.x
k=Date.now()
h=g.a
f=g.c
e=new A.T(Date.now(),0,!1).a6()
d=r.a.d
a0=o&&r.d.y?r.d.ax:""
a1=o&&r.d.y?B.a.i(r.d.z):""
a2=r.d.alf(h)
if(a2==null)a2=""
B.d.c9(m,0,new A.pU("led_"+k,a6,n,h,f,e,d,a0,a2,a1))
if(o){o=r.d
o=o.y&&o.ax.length!==0}else o=!1
if(o){a3=r.d.alf(h)
if(a3!=null){o=r.d
o.cGQ(o.ax,a3,h)}}t=8
o=r.d
o.toString
w=11
return A.b(C.Il(o),$async$D2)
case 11:t=2
w=10
break
case 8:t=7
a5=s.pop()
o=A.ab(a5)
if(o instanceof A.lM){q=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save ledger. "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=10
break
case 7:w=2
break
case 10:w=12
return A.b(r.i7(),$async$D2)
case 12:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$D2,v)},
VV(d){return this.bBH(d)},
bBH(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$VV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=r.d
if(l==null){w=1
break}t=4
w=7
return A.b(C.aZ1(l.a,d.a),$async$VV)
case 7:q=f
o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
n=d.b
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(q?n+" is in the group now.":"Could not approve "+n+".",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.ab(k)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not approve. "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:w=8
return A.b(r.i7(),$async$VV)
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$VV,v)},
NW(d){return this.bJO(d)},
bJO(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$NW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=r.d
if(n==null){w=1
break}p=r.c
p.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dLj(d),p,null,!0,!0,x.y),$async$NW)
case 3:if(f!==!0){w=1
break}t=5
w=8
return A.b(C.aoP(n.a,d.a,null,"Join request declined",r.a.d),$async$NW)
case 8:t=2
w=7
break
case 5:t=4
m=s.pop()
q=A.ab(m)
p=r.c
if(p==null){w=1
break}p.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not decline. "+A.u(q),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:w=9
return A.b(r.i7(),$async$NW)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NW,v)},
coZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.gane(),i=B.av.j(0.07),h=A.n(16),g=A.I(B.av.j(0.4),B.q,1),f=A.n(12),e=x.p
f=A.a([A.B(A.a([A.p(k,A.d(""+j.length,k,k,k,k,k,k,B.rZ,k,k,k),B.f,k,k,new A.o(B.av,k,k,f,k,k,B.n),k,k,k,k,B.fF,k,k,k),B.ab,D.bzc],e),B.m,k,B.e,B.j,0,k,k),B.O],e)
for(w=j.length,v=0;v<j.length;j.length===w||(0,A.L)(j),++v){u=j[v]
t=new A.aS(14,14)
s=new A.az(B.b3.j(0.25),1,B.q,-1)
r=A.a([new A.y(u.b,k,B.hK,k,k,k,k,k,k,k,k,k),B.au,new A.D(B.vz,new A.ci(B.aP,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.u0,B.bU,k,k,k,14),B.bp,new A.bB(1,B.bg,new A.y(u.a,k,B.rY,k,k,k,k,k,k,k,k,k),k)],e),k),k)],e)
q=u.f
if(q.length!==0){q=A.n8(q)
r.push(new A.D(B.vz,new A.ci(B.aP,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.iL,B.bU,k,k,k,14),B.bp,new A.bB(1,B.bg,new A.y(q,k,B.rY,k,k,k,k,k,k,k,k,k),k)],e),k),k))}q=u.r
if(q.length!==0)r.push(new A.D(B.vz,new A.ci(B.aP,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.l_,B.bU,k,k,k,14),B.bp,new A.bB(1,B.bg,new A.y(q,k,B.rY,k,k,k,k,k,k,k,k,k),k)],e),k),k))
q=u.w
if(q.length!==0)r.push(new A.D(B.vz,new A.ci(B.aP,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.lW,B.bU,k,k,k,14),B.bp,new A.bB(1,B.bg,new A.y(q,k,B.rY,k,k,k,k,k,k,k,k,k),k)],e),k),k))
for(q=u.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.L)(q),++o){n=q[o]
m=J.a4(n)
l=m.h(n,"relation")
l=C.hmF(l==null?"":l)
m=m.h(n,"name")
if(m==null)m=""
r.push(new A.D(B.vz,new A.ci(B.aP,B.e,B.j,B.F,k,B.p,k,0,A.a([A.X(B.yk,B.bU,k,k,k,14),B.bp,new A.bB(1,B.bg,new A.y(l+": "+m,k,B.rY,k,k,k,k,k,k,k,k,k),k)],e),k),k))}r.push(B.R)
r.push(new A.ci(B.aP,B.e,B.j,B.m,k,B.p,k,0,A.a([new A.bB(1,B.bg,A.dn(P.a1p,B.DK,new C.dLm(this,u),A.bo(B.bc,k,k,k,B.c,k,k,k,k,k,k,k)),k),B.ab,new A.bB(1,B.bg,A.et(B.a16,B.JE,new C.dLn(this,u),A.dg(k,k,k,k,k,k,k,k,k,B.c7,k,k,k,k,k,D.aZZ,k,k,k,k)),k)],e),k))
f.push(A.p(k,A.x(r,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(B.fp,k,new A.bO(s,s,s,s),new A.bn(t,t,t,t),k,k,B.n),k,k,k,B.jI,B.bl,k,k,k))}return A.p(k,A.x(f,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.kV,B.bl,k,k,k)},
c_Z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=x.p,i=A.a([],j),h=A.aX(x.N)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=t.b
if(s===B.rE){r=t.w
if(r.length===0)r="other"
if(!h.L(0,r))continue
i.push(this.cqb(d,r))
continue}q=s===B.a50
p=q?B.c7:B.iO
s=new A.aS(12,12)
o=new A.az(p.j(0.25),1,B.q,-1)
n=A.X(q?B.amp:B.u9,p,k,k,k,18)
if(q){m=t.d
m=A.cT(t.e,"declined",0)?m+": request declined":m+" removed"}else m="Spending: "+t.d
m=A.a([new A.y(m,k,B.iS,k,k,k,k,k,k,k,k,k)],j)
l=t.e
if(l.length!==0&&!q)m.push(new A.y(l,k,B.hh,k,k,k,k,k,k,k,k,k))
m=A.x(m,B.F,k,B.e,B.j,0,B.p)
l=q?"":"-$"+B.k.ab(t.c,2)
i.push(A.p(k,new A.ci(B.aP,B.e,B.j,B.m,k,B.p,k,0,A.a([n,B.at,new A.bB(1,B.bg,m,k),new A.y(l,k,new A.H(!0,p,k,k,k,k,k,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],j),k),B.f,k,k,new A.o(B.fp,k,new A.bO(o,o,o,o),new A.bn(s,s,s,s),k,k,B.n),k,k,k,B.cv,B.bl,k,k,k))}return i},
cqb(d,e){var w,v,u=null,t=C.i_8(d,e),s=C.i_9(d,e,t),r=B.d.cJ(t,0,new C.dLo()),q=e!=="other"&&d.y&&d.ax===e,p=d.gwN(),o=A.n(14),n=A.I((q?B.b0:B.b3).j(0.35),B.q,1),m=A.n(14),l=A.n(14),k=(q?B.b0:B.b3).j(0.14),j=A.I((q?B.b0:B.b3).j(0.5),B.q,1)
k=A.p(u,A.X(B.mD,q?B.b0:B.b3,u,u,u,20),B.f,u,u,new A.o(k,u,j,u,u,u,B.a5),u,40,u,u,u,u,u,40)
j=x.p
w=A.a([new A.dq(1,B.co,A.d(s,u,2,B.a2,u,u,u,Q.TX,u,u,u),u)],j)
if(q)B.d.v(w,A.a([B.bp,A.p(u,D.fv0,B.f,u,u,new A.o(B.b0.j(0.2),u,u,A.n(8),u,u,B.n),u,u,u,u,B.nl,u,u,u)],j))
w=A.E(A.x(A.a([A.B(w,B.m,u,B.e,B.j,0,u,u),B.cV,A.d(""+t.length+" of "+p+" gave \xb7 tap to see who",u,u,u,u,u,u,B.hh,u,u,u)],j),B.F,u,B.e,B.j,0,B.p),1)
v=B.k.ab(r,2)
return A.p(u,A.aF(!1,B.a1,!0,m,A.aL(!1,l,!0,new A.D(B.bl,A.B(A.a([k,B.at,w,A.d("+$"+v,u,u,u,u,u,u,A.l(u,u,q?B.b0:B.b3,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.dc,A.X(B.eA,B.b3.j(0.6),u,u,u,u)],j),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.dLp(this,d,e,s,t,q),u,u,u,u,u,u,u),B.f,B.fp,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(u,u,n,o,u,u,B.n),u,u,u,B.cv,u,u,u,u)},
Q6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Q6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.d
if(k==null){w=1
break}if(!r.gtH()&&!k.y){w=1
break}o=r.c
o.toString
n=r.e
n===$&&A.c()
w=3
return A.b(C.i_K(o,k,r.gtH(),n),$async$Q6)
case 3:m=e
if(m==null||r.c==null){w=1
break}w=r.gtH()?4:5
break
case 4:r.d=m
t=7
w=10
return A.b(C.Il(m),$async$Q6)
case 10:t=2
w=9
break
case 7:t=6
j=s.pop()
o=A.ab(j)
if(o instanceof A.lM){q=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save help mode. "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=9
break
case 6:w=2
break
case 9:w=11
return A.b(r.i7(),$async$Q6)
case 11:case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q6,v)},
QX(d,e){return this.coy(d,e)},
coy(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(!t.gtH()||t.d==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.i_O(s,e,d),$async$QX)
case 3:if(g!==!0){w=1
break}w=4
return A.b(C.aoP(t.d.a,e,d,"Removed from group",t.a.d),$async$QX)
case 4:w=5
return A.b(t.i7(),$async$QX)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QX,v)},
a_C(d,e,f,g){return this.cel(d,e,f,g)},
cel(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a_C=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:p=t.d
if(p==null){w=1
break}s=t.c
s.toString
r=t.e
r===$&&A.c()
q=t.gtH()
w=3
return A.b(C.i_M(s,d,p,q,e,f,t.gtH()?new C.dLk(t,p):null,r,g),$async$a_C)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a_C,v)},
adx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$adx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.aNu(s,r.e),$async$adx)
case 3:case 1:return A.h(u,v)}})
return A.i($async$adx,v)},
WZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$WZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.d
if(i==null){w=1
break}t=4
m=B.a.i(i.e)
l=new A.a9i(-1,1,!0,null,null,D.eiW,D.eiU,null,new A.b2C(A.a([],x.B),A.U(x.N,x.Y)),null,null)
k=A.hfG("NGMY-GROUP:"+m.toUpperCase(),1,-1)
if(k.a!==B.SN){m=k.c
m.toString
A.b8(m)}m=k.b
l.x=m
l.z=m.a
l.aVC()
q=l
w=7
return A.b(q.ao4(720),$async$WZ)
case 7:p=e
if(p==null||r.c==null){w=1
break}w=8
return A.b(A.t0(J.eX(B.dD.gaP(p)),"ngmy_group_"+i.e+".png"),$async$WZ)
case 8:o=e
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
h=s.pop()
n=A.ab(h)
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save QR: "+A.u(n),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$WZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d,e=h.e
e===$&&A.c()
w=h.f
w===$&&A.c()
v=A.c7(new A.hb(A.a([e,w],x.U)),new C.dLr(h),g)
u=f==null
t=u?g:f.e
s=u?g:new C.dLs(d,f)
r=u?g:f.y
if(!h.gtH()){q=u?g:f.y
q=q===!0}else q=!0
p=x.p
q=A.a([new A.D(E.Mw,C.h_C(t,r===!0,e,new C.dLt(d),s,h.gcdY(),q,"GROUP",g),g)],p)
if(!u){u=A.a([new A.D(D.bue,new C.bh9(e,A.B(A.a([h.aAB("In",f.gaIn()),h.aAB("Out",f.gwZ()),h.aAB("Balance",f.gaIn()-f.gwZ()),h.b6p("People",f.gwN(),!1)],p),B.m,g,B.e,B.j,0,g,g),g),g)],p)
if(h.gtH())u.push(new A.D(B.fQ,A.B(A.a([A.E(new C.Ct("Contribution",D.amY,e,new C.dLu(h),!1,g),1),B.ab,A.E(new C.Ct("Spending",B.vQ,e,new C.dLv(h),!0,g),1)],p),B.m,g,B.e,B.j,0,g,g),g))
u.push(B.R)
t=A.a([],p)
for(s=[D.ekw,D.elm,D.elW],o=0;o<3;++o){n=s[o]
r=n.a
m=r===2?0:6
l=h.w
k=!1
if(r===1){j=h.d
if(j!=null){k=h.a
i=k.d
k=B.a.i(j.c.toLowerCase())===B.a.i(i.toLowerCase())||k.f}}k=k?f.gane().length:0
t.push(new A.bB(1,B.bg,new A.D(new A.R(0,0,m,0),new C.bha(n.b,l===r,e,w,new C.dLw(h,n),k,g),g),g))}u.push(new A.D(B.h_,A.B(t,B.m,g,B.e,B.j,0,g,g),g))
u.push(A.E(h.bE8(f),1))
B.d.v(q,u)}else q.push(D.bA2)
return A.yM(A.c6(g,B.c_,new A.an(B.W,g,B.aa,B.r,A.a([v,A.bm(!0,A.x(q,B.m,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],p),g),g,!1,!1,g,g),B.TD,x.I)},
b6p(d,e,f){var w=null,v=A.d(d,w,w,w,w,w,w,D.a8i,w,w,w)
return A.E(A.x(A.a([v,B.bC,A.d(f?"$"+B.k.ab(e,2):B.o.u(B.k.N(e)),w,w,w,w,w,w,D.fdb,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
aAB(d,e){return this.b6p(d,e,!0)},
bE8(d){var w,v,u,t,s,r,q=this,p=null
switch(q.w){case 1:w=A.a([q.cip(d,d.d,d.c,"Owner",d.f,new C.dLc(q,d))],x.p)
if(q.gtH()&&d.gane().length!==0)w.push(q.coZ(d))
v=d.gFk()
B.d.v(w,new A.M(v,new C.dLd(q,d),A.S(v).k("M<1,t>")))
if(d.gwN()>=100&&q.gtH()){v=q.e
v===$&&A.c()
w.push(new A.D(B.Bd,new C.Ct("Unlock 100+ members",B.q7,v,new C.dLe(q,d),!1,p),p))}return A.cw(w,p,B.tT,p,p,B.ag,!1)
case 2:w=A.n(16)
v=A.a([new A.ac(0,B.G,B.b3.j(0.35),B.J,24)],x.V)
u=d.e
v=A.av(A.p(p,A.EZ(B.c,"NGMY-GROUP:"+B.a.i(u).toUpperCase(),B.a6t,1,p,B.a6u,!0,B.bR,200,-1),B.f,p,p,new A.o(B.c,p,p,w,v,p,B.n),p,p,p,p,B.bB,p,p,p),p,p,p)
w=x.p
u=A.av(A.aC(p,A.B(A.a([A.d(u,p,p,p,p,p,p,D.f6V,p,p,p)],w),B.m,p,B.e,B.N,0,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dLf(q,d),p,p,p,p,p,p,!1,B.a6),p,p,p)
t=q.e
t===$&&A.c()
return A.cw(A.a([v,B.aR,u,B.O,D.b6n,B.aB,new C.Ct("Copy invite code",B.fR,t,q.gc5C(),!1,p),B.R,new C.Ct("Download QR",B.hF,t,q.gbMo(),!0,p),B.ac,D.fm3],w),p,B.tT,p,p,B.ag,!1)
default:w=q.a
s=C.bzf(d,w.e,w.d)
r=B.d.cJ(s,0,new C.dLg())
w=A.n(12)
v=A.I(B.b3.j(0.28),B.q,1)
u=x.p
u=A.a([A.p(p,A.B(A.a([D.bMB,B.at,A.E(A.x(A.a([A.d(s.length===0?"Your contributions: none yet":"Your contributions: $"+B.k.ab(r,2)+" ("+s.length+")",p,p,p,p,p,p,B.ma,p,p,p),B.au,A.d("Group spending: $"+B.k.ab(d.gwZ(),2)+" \xb7 Balance $"+B.k.ab(d.gaIn()-d.gwZ(),2),p,p,p,p,p,p,B.hh,p,p,p)],u),B.F,p,B.e,B.j,0,B.p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(B.fp,p,v,w,p,p,B.n),p,p,p,B.e7,B.bl,p,p,p)],u)
if(d.x.length===0)u.push(D.fnZ)
else B.d.v(u,q.c_Z(d))
return A.cw(u,p,B.tT,p,p,B.ag,!1)}},
b1d(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.hTs(d,e,f),j=k>0,i=d.a5f(e,f)
if(d.y){w=d.ax
v=w.length!==0&&!d.SF(e,w)}else v=!1
w=A.n(14)
u=A.I(B.b3.j(0.2),B.q,1)
t=A.n(14)
s=A.n(14)
r=B.b3.j(0.12)
q=A.I(B.b3.j(0.4),B.q,1)
if(v)p=B.p1
else p=j?B.ha:B.np
if(v)o=B.iO
else o=j?B.b3:B.bU
q=A.p(l,A.X(p,o,l,l,l,20),B.f,l,l,new A.o(r,l,q,l,l,l,B.a5),l,40,l,l,l,l,l,40)
r=A.d(e,l,l,l,l,l,l,B.iS,l,l,l)
o=A.d(g+" \xb7 "+f,l,l,l,l,l,l,I.Dz,l,l,l)
if(v)p="Has not given this round \xb7 gave "+d.ao1(e,f)+"x \xb7 missed "+i
else{p=""+i
p=j?"Gave "+d.ao1(e,f)+"x ($"+B.k.ab(k,2)+") \xb7 missed "+p:"Has not given yet \xb7 missed "+p}if(v)n=B.iO.j(0.9)
else if(j)n=B.b3.j(0.85)
else n=i>0?B.iO.j(0.85):B.iO.j(0.85)
m=x.p
m=A.a([q,B.at,A.E(A.x(A.a([r,o,B.bC,A.d(p,l,l,l,l,l,l,A.l(l,l,n,l,l,l,l,l,l,l,l,10,l,l,B.a7,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],m),B.F,l,B.e,B.j,0,B.p),1)],m)
if(a0!=null)m.push(A.aH(l,l,l,l,A.X(B.ala,B.h4.j(0.85),l,l,l,l),l,l,l,a0,l,l,l,l,"Remove member",l))
else m.push(A.X(B.eA,B.b3.j(0.6),l,l,l,l))
return A.p(l,A.aF(!1,B.a1,!0,t,A.aL(!1,s,!0,new A.D(B.bl,A.B(m,B.m,l,B.e,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,a1,l,l,l,l,l,l,l),B.f,B.fp,0,l,l,l,l,l,B.ah),B.f,l,l,new A.o(l,l,u,w,l,l,B.n),l,l,l,B.cv,l,l,l,l)},
cip(d,e,f,g,h,i){return this.b1d(d,e,f,g,h,null,i)}}
C.aCL.prototype={
S(){return new C.aCM(A.zi(B.Yo,B.nN,B.um))}}
C.aCM.prototype={
c5E(d){var w,v,u,t,s,r
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=A.fGU(t==null?"":t)
if(s!=null){this.e=!0
this.c.toString
r=$.t3().gbk()
if(r!=null&&r.c!=null&&r.pC())r.O(s)
return}}},
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c6(A.eF(w,w,w,!0,!0,B.w,w,1,w,w,w,!1,w,!1,w,w,A.aH(w,w,w,w,B.Oj,w,w,w,new C.dLy(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fAt,w,w,w,1,w,!0),B.w,A.zh(this.d,B.bW,this.gc5D()),w,!1,!1,w,w)}}
C.bhb.prototype={
B(d){var w=this,v=null,u=A.n(28),t=A.I(B.b3.j(0.22),B.q,1.1),s=A.a([new A.ac(0,B.G,B.w.j(0.35),B.cJ,14)],x.V),r=A.aH(v,v,v,v,D.bK5,v,v,v,w.d,v,v,v,v,"Back",v),q=w.e,p=q!=null&&q.length!==0,o=w.c
r=A.a([r,A.E(p?A.x(A.a([A.d(o,v,v,v,v,v,v,D.f5l,B.L,v,v),B.bC,A.aF(!1,B.a1,!0,v,A.aL(!1,A.n(8),!0,new A.D(B.eD,A.d(q,v,1,B.a2,v,v,v,D.fay,B.L,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)],x.p),B.m,v,B.e,B.N,0,B.p):A.d(o,v,1,B.a2,v,v,v,E.aRI,B.L,v,v),1)],x.p)
q=w.z
if(q!=null)r.push(q)
else if(w.r)r.push(new C.bfB(w.w,w.x,w.y,v))
else r.push(B.zK)
return A.p(v,A.B(r,B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.c_,v,t,u,s,v,B.n),v,v,v,v,B.ZC,v,v,v)}}
C.bfB.prototype={
B(d){var w=this,v=new C.deS(w),u=w.d
if(u==null||!w.c)return v.$1(0)
return A.c7(u,new C.deR(w,v),null)}}
C.bha.prototype={
B(d){return A.c7(new A.hb(A.a([this.e,this.f],x.U)),new C.diK(this),null)}}
C.bh7.prototype={
B(d){var w=this
return A.c7(new A.hb(A.a([w.c,w.d,w.e],x.U)),new C.diI(w),null)}}
C.bh9.prototype={
B(d){return A.c7(this.c,new C.diJ(this),null)}}
C.PP.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a,n=e.b,m=A.bx(new A.a8(0,0,0+o,0+n),B.iw)
$.W()
w=A.N()
v=p.b
w.r=B.b3.j(0.06*v).gp(0)
w.b=B.ae
w.c=2
w.z=B.rA
d.aE(m,w)
u=A.N()
u.r=B.ex.j(0.35+0.45*v).gp(0)
u.z=B.jw
t=o+n
s=2*t
r=B.k.E(p.d*s,s)
if(r<o)q=new A.v(r,0)
else if(r<t)q=new A.v(o,r-o)
else{t=2*o+n
q=r<t?new A.v(t-r,n):new A.v(0,s-r)}d.af(q,3.5+v*2,u)
v=A.N()
v.r=B.ex.j(0.9).gp(0)
d.af(q,1.5,v)
if(!p.c)return
v=new C.diH(p,d)
v.$3(E.aHn,!1,!1)
o-=10
v.$3(new A.v(o,8),!0,!1)
n-=8
v.$3(new A.v(10,n),!1,!0)
v.$3(new A.v(o,n),!0,!0)},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bh8.prototype={}
C.bjE.prototype={
oC(d,e){var w,v,u,t,s,r,q=A.af("[^A-Z0-9]",!0,!1,!1,!1),p=A.aK(e.a.toUpperCase(),q,"")
q=p.length
if(q===0)return B.as
w=new A.ff("")
v=new A.ff("")
for(u=0;u<q;++u){t=p[u]
s=A.af("[A-Z]",!0,!1,!1,!1)
if(s.b.test(t)&&w.a.length<3)w.a+=t
else{s=A.af("[0-9]",!0,!1,!1,!1)
if(s.b.test(t)&&v.a.length<5)v.a+=t}}q=w.a
s=v.a
r=(q.charCodeAt(0)==0?q:q)+(s.charCodeAt(0)==0?s:s)
return new A.bb(r,A.hi(B.bw,r.length),B.aN)}}
C.bi3.prototype={
gbP7(){var w,v=this,u=C.hWO(v.d,v.e,v.f)
switch(v.ay.a){case 0:w=u
break
case 1:w=x.C
w=A.C(new A.eb(u,w),w.k("J.E"))
break
case 2:w=x.o
w=A.C(new A.eb(u,w),w.k("J.E"))
break
default:w=null}return w},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.gbP7(),m=p.d,l=p.e,k=p.f,j=C.bzf(m,l,k),i=B.d.cJ(j,0,new C.doR()),h=m.a5f(l,k)
if(m.y){w=m.ax
v=w.length!==0&&!m.SF(l,w)}else v=!1
if(m.ax.length===0)u=D.axM
else{w=A.S(j).k("a_<1>")
u=A.C(new A.a_(j,new C.doS(p),w),w.k("J.E"))}if(!v)t=h>0&&i<=0
else t=!0
w=x.p
k=A.a([A.c7(p.x,new C.doT(p,t),o),B.ac,A.d(l,o,o,o,o,o,o,B.ft,B.L,o,o),A.d(p.r+" \xb7 "+k,o,o,o,o,o,o,B.hh,B.L,o,o)],w)
B.d.v(k,A.a([B.au,A.d("Joined "+B.d.gI(p.w.bU().u(0).split(" ")),o,o,o,o,o,o,I.Dz,B.L,o,o)],w))
k.push(B.aR)
l=A.n(14)
s=A.I((t?B.iO:B.b3).j(0.35),B.q,1)
if(v)r="MISSED THIS HELP ROUND"
else r=h>0?"MISSED CONTRIBUTIONS":"CONTRIBUTION STATUS"
r=A.d(r,o,o,o,o,o,o,A.l(o,o,t?B.iO:B.b3.j(0.9),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.2,o,o,o,o,o,o),o,o,o)
if(v)q='Not recorded for "'+B.a.i(m.z)+'". They will be marked missed when help mode ends.'
else if(h>0){q=h===1?"":"s"
q=""+h+" missed contribution"+q+" total \xb7 $"+B.k.ab(i,2)+" contributed overall"}else q="Total contributed: $"+B.k.ab(i,2)
q=A.a([r,B.O,A.d(q,o,o,o,o,o,o,L.TN,B.L,o,o)],w)
if(m.y&&B.a.i(m.z).length!==0)B.d.v(q,A.a([B.O,A.d("Active help: "+B.a.i(m.z),o,o,o,o,o,o,A.l(o,o,B.b0.j(0.95),o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),B.L,o,o)],w))
if(u.length!==0)B.d.v(q,A.a([B.am,A.d("This round: $"+B.k.ab(B.d.cJ(u,0,new C.doU()),2),o,o,o,o,o,o,D.f5v,B.L,o,o)],w))
k.push(A.p(o,A.x(q,B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.fp,o,s,l,o,o,B.n),o,o,o,o,B.bB,o,o,o))
k.push(B.aR)
m=A.E(A.d("CONTRIBUTION HISTORY",o,o,o,o,o,o,A.l(o,o,B.b3.j(0.85),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.4,o,o,o,o,o,o),o,o,o),1)
l=p.ay
k.push(A.B(A.a([m,A.BZ(o,B.fp,A.X(D.bGA,l===D.a9X?B.b3.j(0.75):B.j2,o,o,o,20),new C.doV(p),B.J,p.CW,B.af,"Filter history",x.E)],w),B.m,o,B.e,B.j,0,o,o))
k.push(B.O)
if(n.length===0){if(l===D.aW0)m="No missed contributions for this member."
else m=l===D.aW_?"No recorded contributions for this member.":"No history yet for this member."
k.push(A.d(m,o,o,o,o,o,o,B.kK,o,o,o))}else B.d.v(k,new A.M(n,new C.doW(p,d),A.S(n).k("M<1,t>")))
k.push(B.ac)
k.push(A.bK(!1,D.aS8,o,o,!0,o,o,new C.doX(d),o,o))
return A.cw(k,p.c,o,o,o,B.ag,!1)},
auK(d,e){var w,v=null,u=A.a([],x.p),t=this.ay===e
if(t)u.push(D.bK8)
else u.push(B.oo)
u.push(B.ab)
w=t?B.j2:B.ad
u.push(A.d(d,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,v,v,v,t?B.H:B.cx,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.zM(A.B(u,B.m,v,B.e,B.j,0,v,v),48,e,x.E)},
bYz(d,e){var w,v,u,t,s,r,q,p,o=this,n=null
if(e instanceof C.Pv){w=e.b
v=w.w.length!==0
if(v&&w.e.length!==0)u=w.e
else{t=o.d.z
u=t.length!==0&&v?t:w.d}v=A.n(12)
t=A.I(B.b3.j(0.22),B.q,1)
s=x.p
return A.p(n,A.B(A.a([D.bOd,B.at,A.E(A.x(A.a([A.d(u,n,2,B.a2,n,n,n,D.aQe,n,n,n),B.cV,A.d(B.d.gI(w.f.bU().u(0).split(".")),n,n,n,n,n,n,D.a8i,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1),B.ab,A.d("$"+B.k.ab(w.c,2),n,n,n,n,n,n,D.fea,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fp,n,t,v,n,n,B.n),n,n,n,B.cv,B.bl,n,n,n)}x.a.a(e)
v=A.n(16)
t=e.c
s=A.I(B.iO.j(t?0.35:0.5),B.q,1)
r=A.X(t?B.oY:B.cB,B.iO,n,n,n,18)
q=A.d(e.b,n,2,B.a2,n,n,n,D.aQe,n,n,n)
p=x.p
p=A.a([r,B.at,A.E(A.x(A.a([q,B.cV,A.d(t?"Active help round":B.d.gI(e.a.bU().u(0).split(".")),n,n,n,n,n,n,D.a8i,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
if(o.ch&&!t&&e.d.length!==0&&o.cx!=null)p.push(A.bK(!1,D.foh,n,n,!0,n,n,new C.doQ(o,d,e),n,A.fz(n,n,n,n,n,n,n,n,n,n,n,B.j2,n,n,n,B.ax,n,B.fr,n,n,n,n,n,B.kc,n,n)))
else p.push(A.d(t?"PENDING":"MISSED",n,n,n,n,n,n,D.f7I,n,n,n))
return A.p(n,A.B(p,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fp,n,s,v,n,n,B.n),n,n,n,B.cv,B.bl,n,n,n)},
gde(){return this.f}}
C.oB.prototype={
B(d){var w=null,v=A.n(26),u=A.I(B.b3.j(0.4),B.q,1.3),t=A.a([new A.ac(0,B.G,B.b3.j(0.22),B.J,28)],x.V)
return A.p(w,A.b3(new A.D(B.Zi,this.c,w),w,w,new C.PP(0.85,this.d,0,w),B.ax),B.f,w,w,new A.o(B.c_,w,u,v,t,w,B.n),w,w,w,F.xO,w,w,w,w)}}
C.bgE.prototype={
gkz(d){return this.b},
gdc(d){return this.c}}
C.aAZ.prototype={
S(){var w=$.aw()
return new C.aB_(new A.ar(B.as,w),new A.ar(B.as,w),A.a([],x.i))}}
C.aB_.prototype={
gawE(){var w,v=this.d
if(v===$){w=this.a.d
v=this.d=new A.ar(new A.bb(w,B.b4,B.aN),$.aw())}return v},
gb17(){var w,v=this.a.c
v=A.a([new A.FV(v.c,v.d)],x.S)
w=this.a.c.gFk()
B.d.v(v,new A.M(w,new C.dhj(),A.S(w).k("M<1,+email,name(m,m)>")))
w=x.K
v=A.C(new A.a_(v,new C.dhk(this),w),w.k("J.E"))
return v},
q(){var w=this,v=w.gawE(),u=v.T$=$.aw()
v.P$=0
v=w.e
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.a2()},
c5H(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e.a.a,k=A.af("\\D",!0,!1,!1,!1),j=A.aK(l,k,"")
l=m.gawE()
k=B.a.fI(B.a.i(l.a.a),A.af("\\s+",!0,!1,!1,!1))
if(new A.a_(k,new C.dhl(),A.S(k).k("a_<1>")).gM(0)<2){m.m(new C.dhm(m))
return}if(j.length<7){m.m(new C.dhn(m))
return}if(m.r.length===0){m.m(new C.dho(m))
return}k=m.f
if(B.a.i(k.a.a).length<5){m.m(new C.dhp(m))
return}w=m.gb17()
v=m.c
v.toString
l=B.a.i(l.a.a)
u=m.r
k=B.a.i(k.a.a)
t=A.a([],x.A)
for(s=m.x,r=s.length,q=x.N,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
n=o.a
if(n>=0&&n<w.length){n=w[n]
t.push(A.F(["relation",o.b,"name",n.b,"email",n.a],q,q))}}A.a5(v,!1).O(new C.bgE(l,j,u,k,t))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gb17(),a0=new C.dhB(),a1=f.a.c
a1=C.aOp(B.vZ,"The group owner, "+a1.d+", will see this and has to approve you.","Ask to join "+a1.e)
w=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),f.gawE(),e,e,e,e,e,2,a0.$1("Full name *"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.kI,e,e,e,e)
v=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),f.e,e,e,e,e,e,2,a0.$1("Phone number *"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,B.jy,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
u=f.r
if(u.length===0)u=e
t=a0.$1("State you live in *")
s=x.t
r=A.a([],s)
for(q=x.Q,p=0;p<50;++p){o=B.k9[p]
r.push(new A.eG(o,new A.y(o,e,e,e,e,e,e,e,e,e,e,e),B.f_,e,q))}n=x.N
m=x.p
r=A.a([a1,B.aB,w,B.R,v,B.R,A.nA(t,B.fp,u,!0,r,e,new C.dhv(f),B.dg,e,n),B.R,A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),f.f,e,e,e,e,e,2,a0.$1("Home address * (street, city)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.kI,e,e,e,e),B.aR,D.fuB,B.au,D.fxs,B.O],m)
if(d.length===0)r.push(D.fq9)
for(a1=f.x,w=x.G,v=x.c,u=x.u,l=0;l<a1.length;++l){t=a1[l]
k=a0.$1("Who")
j=A.a([],s)
for(p=0;p<6;++p){i=D.dmr[p]
j.push(new A.eG(i,new A.y(C.hmF(i),e,e,e,e,e,e,e,e,e,e,e),B.f_,e,q))}t=A.nA(k,B.fp,t.b,!0,j,e,new C.dhw(f,l),B.ov,e,n)
k=a1[l].a
k=k<d.length?k:e
j=a0.$1("Person in group")
h=A.a([],u)
for(g=0;g<d.length;++g)h.push(new A.eG(g,new A.y(d[g].b,e,e,e,e,e,e,B.a2,e,e,e,e),B.f_,e,v))
r.push(new A.D(B.cv,new A.ci(B.aP,B.e,B.j,B.m,e,B.p,e,0,A.a([new A.a7(108,e,t,e),B.ab,new A.bB(1,B.bg,A.nA(j,B.fp,k,!0,h,e,new C.dhx(f,l),B.ov,e,w),e),A.aH(e,e,e,e,B.rq,e,e,e,new C.dhy(f,l),e,e,e,e,e,e)],m),e),e))}if(d.length!==0)r.push(new A.bI(B.a3,e,e,A.hn(D.bNm,D.fm9,new C.dhz(f),e),e))
a1=f.w
if(a1!=null)r.push(new A.D(B.i6,A.d(a1,e,e,e,e,e,e,D.fih,e,e,e),e))
r.push(B.ac)
r.push(A.dn(B.a1a,D.fti,f.gc5G(),A.bo(B.b3,e,e,e,B.w,B.on,e,e,new A.b7(A.n(16),B.Y),e,e,e)))
r.push(A.bK(!1,B.dh,e,e,!0,e,e,new C.dhA(a2),e,e))
return A.cc(A.x(r,B.ai,e,B.e,B.j,0,B.p),B.r,e,B.y,e,e,e,e,B.ag)}}
C.aLd.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.aLe.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
C.aLO.prototype={
aT(){this.b3()
this.b0()
this.dK()},
q(){var w=this,v=w.b5$
if(v!=null)v.a4(0,w.gdF())
w.b5$=null
w.a2()}}
var z=a.updateTypes(["aA<~>()","oB(Y,~(~()))","oB(Y,ma)","Pv(pU)","K2(tq)","G(wt,wt)","abw(Y,G)","~(m1)","~(Cx)","ai<pd<Cx>>(Y)","t(wt)","oB(Y)","~()"])
C.c6N.prototype={
$1(d){return d.a===this.a},
$S:119}
C.c6P.prototype={
$1(d){return d.c===this.a},
$S:119}
C.c6O.prototype={
$1(d){var w=this.a
return d.amk(w)&&d.c!==w},
$S:119}
C.c72.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:442}
C.c6J.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:442}
C.c6R.prototype={
$1(d){return d.a===this.a},
$S:119}
C.c6S.prototype={
$1(d){return d.e===this.a},
$S:119}
C.c6W.prototype={
$1(d){return d.c===this.a},
$S:119}
C.c70.prototype={
$1(d){return d.aFZ(this.a)},
$S:119}
C.c6U.prototype={
$1(d){var w=this.a
return d.amk(w)&&d.c!==w},
$S:119}
C.c6Q.prototype={
$1(d){return d.e===this.a},
$S:119}
C.c6K.prototype={
$1(d){return d.a},
$S:478}
C.c6I.prototype={
$1(d){return d.a===this.a},
$S:119}
C.c6Z.prototype={
$1(d){return d.a===this.a},
$S:192}
C.c6L.prototype={
$1(d){return d.a===this.a&&d.e==="pending"},
$S:192}
C.c6X.prototype={
$1(d){return d.a===this.a},
$S:192}
C.c6Y.prototype={
$1(d){return d.a===this.a},
$S:192}
C.ffU.prototype={
$1(d){var w,v,u,t
if(d.b!==B.rE)return!1
w=d.d
if(B.a.i(w).toLowerCase()===this.a)return!0
v=this.b
u=v.length!==0
if(u&&d.x===v)return!0
if(u){t=this.c.alf(w)
return t!=null&&B.a.i(t.toLowerCase())===v}return!1},
$S:223}
C.ffT.prototype={
$2(d,e){return d+e.c},
$S:151}
C.fkX.prototype={
$1(d){return new C.Pv(d,d.f)},
$S:z+3}
C.fkY.prototype={
$1(d){return new C.K2(d.e,!1,d.a,d.f)},
$S:z+4}
C.fkZ.prototype={
$2(d,e){return e.a.aM(0,d.a)},
$S:z+5}
C.dLL.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.i7()},
$S:12}
C.dLB.prototype={
$0(){var w=this,v=w.a
v.w=w.b
v.x=w.c
v.z=w.d},
$S:0}
C.dLA.prototype={
$1(d){var w=null,v=A.n(22),u=B.b3.j(0.4),t=A.d("The owner of this group, ${found.ownerName}, has to approve you before you can enter. You will find the group under YOU JOINED as soon as you are approved.",w,w,w,w,w,w,B.zW,w,w,w)
return A.em(A.a([A.bK(!1,B.Ui,w,w,!0,w,w,new C.dLz(d),w,w)],x.p),w,w,B.fp,t,w,w,w,new A.b7(v,new A.az(u,1,B.q,-1)),D.fxz,w)},
$S:21}
C.dLz.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dLF.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=B.cu.az(0,t)
w=u.e
w===$&&A.c()
w=w.x
w===$&&A.c()
u=u.f
u===$&&A.c()
u=u.x
u===$&&A.c()
return A.b3(v,v,v,new C.acU(t,w,u,v),B.f6)},
$S:70}
C.dLH.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.dLG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hE(u.b,new C.aqp(s.c,s.d,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.i7(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLI.prototype={
$1(d){var w,v=this.a,u=d.b,t=u.gwN(),s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b66(d.a,C.hhU(u.gane().length,"",u,new C.dLE(v,this.b,d),w,s,"Owner \xb7 "+t+"/100 seats"))},
$S:746}
C.dLE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hE(u.b,new C.Ig(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.i7(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLJ.prototype={
$0(){return this.a.K(x.q).f.U(D.f0A)},
$S:0}
C.dLK.prototype={
$1(d){var w,v=this.a,u=J.ad(v.w),t=d.b,s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b66(d.a+u,C.hhU(0,"",t,new C.dLD(v,this.b,d),w,s,"Member \xb7 Owner "+t.d))},
$S:746}
C.dLD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hE(u.b,new C.Ig(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.i7(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLC.prototype={
$2(d,e){var w,v=this.a.r
v===$&&A.c()
v=v.x
v===$&&A.c()
w=B.cu.az(0,B.k.D(v*1.4-this.b*0.08,0,1))
return A.de(A.dX(this.c,new A.v(0,(1-w)*18)),w)},
$S:233}
C.ecR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ecQ.prototype={
$1(d){var w=A.a([d.b,d.e,d.d,d.c,d.a],x.s),v=d.r,u=A.S(v).k("M<1,m>")
B.d.v(w,new A.M(v,new C.ecO(),u))
B.d.v(w,new A.M(v,new C.ecP(),u))
return B.a.t(B.d.aG(w," ").toLowerCase(),this.a)},
$S:119}
C.ecO.prototype={
$1(d){return d.b},
$S:478}
C.ecP.prototype={
$1(d){return d.a},
$S:478}
C.ecN.prototype={
$1(d){var w=null,v=this.a,u=v.b
v=A.d('Permanently delete "'+(u.length===0?v.e:u)+'" ('+v.e+") owned by "+v.d+". This cannot be undone.",w,w,w,w,w,w,B.hJ,w,w,w)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.ecL(d),w,w),A.bG(B.wG,new C.ecM(d),A.bo(B.bz,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fp,v,w,w,w,w,D.fGK,w)},
$S:21}
C.ecL.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.ecM.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ecW.prototype={
$2(d,e){var w=null,v=this.a,u=v.d
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.acU(1,u,v,w),B.f6)},
$S:70}
C.ecX.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.ecY.prototype={
$0(){var w=this.a
w.m(new C.ecV(w))},
$S:0}
C.ecV.prototype={
$0(){var w=this.a,v=w.w
w.w=!v
if(v){w.f.bP(0,B.c9)
w.x=""}},
$S:0}
C.ecZ.prototype={
$1(d){var w=this.a
return w.m(new C.ecU(w,d))},
$S:2}
C.ecU.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ed_.prototype={
$2(d,e){var w=J.q(this.b,e),v=this.a
return new C.abw(w,new C.ecS(v,w),new C.ecT(v,w),null)},
$S:z+6}
C.ecS.prototype={
$0(){return this.a.a_u(this.b)},
$S:0}
C.ecT.prototype={
$0(){return this.a.O1(this.b)},
$S:0}
C.dej.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.e.x
o===$&&A.c()
w=A.n(14)
v=A.n(14)
u=p.r
t=u?B.K:B.b3.j(0.92)
s=A.I(B.b3.j(u?0.55+o*0.35:0.9),B.q,1.4)
o=u?q:A.a([new A.ac(0,B.G,B.b3.j(0.25+o*0.25),B.J,16)],x.V)
r=u?B.b3:B.c_
r=A.X(p.d,r,q,q,q,18)
return A.aF(!1,B.a1,!0,q,A.aL(!1,w,!0,A.eH(A.B(A.a([r,B.ab,A.d(p.c,q,q,q,q,q,q,A.l(q,q,u?B.ex:B.c_,q,q,q,q,q,q,q,q,13,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b9,B.j,0,q,q),q,new A.o(t,q,s,v,o,q,B.n),46,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p.f,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)},
$S:132}
C.dez.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.f.x
l===$&&A.c()
w=A.n(18)
v=m.r.x
v===$&&A.c()
u=A.n(18)
t=A.aq(B.fp,B.b3,0.06+l*0.05)
t.toString
t=A.a([t,B.fp.j(0.95)],x.O)
s=A.I(B.b3.j(0.28+l*0.25),B.q,1.2)
r=x.V
q=A.a([new A.ac(0,B.G,B.b3.j(0.08+l*0.12),B.J,18)],r)
p=x.p
p=A.a([A.p(n,D.bPR,B.f,n,n,new A.o(B.b3.j(0.14),n,A.I(B.b3.j(0.55),B.q,1),n,A.a([new A.ac(0,B.G,B.b3.j(0.35),B.J,12)],r),n,B.a5),n,46,n,n,n,n,n,46),B.be,A.E(A.x(A.a([A.d(m.c.e,n,n,n,n,n,n,D.f8i,n,n,n),B.bC,A.d(m.d,n,n,n,n,n,n,B.hh,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
r=m.w
if(r>0){o=A.n(12)
p.push(A.p(n,A.d(""+r+" new",n,n,n,n,n,n,B.uW,n,n,n),B.f,n,n,new A.o(B.av,n,n,o,n,n,B.n),n,n,n,B.io,B.fF,n,n,n))}else if(m.x.length!==0)p.push(D.ec7)
p.push(A.X(B.eA,B.b3.j(0.7),n,n,n,n))
return A.aF(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.eH(A.B(p,B.m,n,B.e,B.j,0,n,n),n,new A.o(n,n,s,u,q,new A.a9(B.az,B.aC,B.x,t,n,n),B.n),n,B.bB,n),n,n,new C.PP(0.35+l*0.4,!0,v,n),B.ax),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.e,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ah)},
$S:132}
C.dLx.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.i7()},
$S:12}
C.dLl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dL9.prototype={
$1(d){return new A.FV(d.a,d.b)},
$S:425}
C.dLj.prototype={
$1(d){var w=null,v=A.d(this.a.b+" will not be added to the group. They can ask again later.",w,w,w,w,w,w,B.hJ,w,w,w)
return A.em(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.dLh(d),w,w),A.bG(B.JE,new C.dLi(d),A.bo(B.av,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fp,v,w,w,w,w,D.fvg,w)},
$S:21}
C.dLh.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dLi.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dLm.prototype={
$0(){return this.a.VV(this.b)},
$S:0}
C.dLn.prototype={
$0(){return this.a.NW(this.b)},
$S:0}
C.dLo.prototype={
$2(d,e){return d+e.c},
$S:151}
C.dLp.prototype={
$0(){var w=this,v=w.a.c
v.toString
return C.i_P(v,w.b,w.c,w.d,w.e,w.f)},
$S:0}
C.dLk.prototype={
$1(d){return this.bkx(d)},
bkx(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.b
t.bbo(d)
w=2
return A.b(C.Il(t),$async$$1)
case 2:w=3
return A.b(u.a.i7(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:93}
C.dLr.prototype={
$2(d,e){var w=null,v=this.a,u=v.e
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.acU(1,u,v,w),B.f6)},
$S:70}
C.dLs.prototype={
$0(){return C.aNu(this.a,this.b.e)},
$S:0}
C.dLt.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.dLu.prototype={
$0(){return this.a.D2(B.rE)},
$S:0}
C.dLv.prototype={
$0(){return this.a.D2(B.a5_)},
$S:0}
C.dLw.prototype={
$0(){var w=this.a
return w.m(new C.dLq(w,this.b))},
$S:0}
C.dLq.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
C.dLc.prototype={
$0(){var w=this.b
return this.a.a_C(w.c,w.f,w.d,"Owner")},
$S:0}
C.dLd.prototype={
$1(d){var w=this.a,v=w.gtH()?new C.dLa(w,d):null
return w.b1d(this.b,d.b,d.a,"Member",d.c,v,new C.dLb(w,d))},
$S:1954}
C.dLb.prototype={
$0(){var w=this.b
return this.a.a_C(w.a,w.c,w.b,"Member")},
$S:0}
C.dLa.prototype={
$0(){var w=this.b
return this.a.QX(w.b,w.a)},
$S:0}
C.dLe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.c
r.toString
t=u.b
w=2
return A.b(C.aoL(r,t.gwN(),t.a,s.a.f,t.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLf.prototype={
$0(){var w=this.a.c
w.toString
return C.aNu(w,this.b.e)},
$S:0}
C.dLg.prototype={
$2(d,e){return d+e.c},
$S:151}
C.dLy.prototype={
$0(){return A.iR(this.a,null)},
$S:0}
C.deS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.c,r=s?1+d*0.12:1,q=s?"Help mode active":"Activate help mode",p=s?B.b0.j(0.28+d*0.22):B.c.j(0.06),o=s?B.j2.j(0.85+d*0.15):B.b3.j(0.35)
o=A.I(o,B.q,s?2:1.1)
w=s?A.a([new A.ac(1+d*2,B.G,B.b0.j(0.45+d*0.4),B.J,16+d*14),new A.ac(0,B.G,B.j2.j(0.25+d*0.35),B.J,8+d*6)],x.V):u
v=s?B.j2:B.b3.j(0.85)
return A.aH(u,u,u,u,A.ef(B.A,A.p(u,A.X(B.mD,v,u,u,s?A.a([new A.cR(B.b0.j(0.95),B.J,10+d*8)],x.r):u,20),B.f,u,u,new A.o(p,u,o,u,w,u,B.a5),u,38,u,u,u,u,u,38),r,u,u),u,u,u,t.e,u,u,u,u,q,u)},
$S:155}
C.deR.prototype={
$2(d,e){var w=this.a.d.x
w===$&&A.c()
return this.b.$1(w)},
$S:62}
C.diK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.e.x
l===$&&A.c()
w=A.n(14)
v=m.d
u=v?0.55+l*0.35:0.25+l*0.15
t=m.f.x
t===$&&A.c()
s=A.n(14)
r=v?B.b3.j(0.12+l*0.06):B.fp.j(0.85)
l=A.I(v?B.b3.j(0.55+l*0.25):B.b3.j(0.18),B.q,1)
q=A.a([A.av(A.d(m.c,n,n,n,n,n,n,A.l(n,n,v?B.ex:B.bU,n,n,n,n,n,n,n,n,12,n,n,B.H,n,n,!0,n,0.6,n,n,n,n,n,n),n,n,n),n,n,n)],x.p)
v=m.w
if(v>0){p=A.n(11)
o=A.I(B.c_,B.q,1.5)
q.push(A.ao(n,A.p(n,A.d(""+v,n,n,n,n,n,n,B.uW,B.L,n,n),B.f,n,D.b0d,new A.o(B.av,n,o,p,n,n,B.n),n,n,n,n,B.nl,n,n,n),n,n,n,6,-6,n))}return A.aF(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.eH(new A.an(B.W,n,B.aa,B.f,q,n),n,new A.o(r,n,l,s,n,n,B.n),40,n,n),n,n,new C.PP(u,!0,t,n),B.ax),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.r,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ah)},
$S:132}
C.diI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.d,f=g.x
f===$&&A.c()
w=0.35+f*0.45
f=h.e.x
f===$&&A.c()
v=f*3.141592653589793*2
u=A.n(24)
t=w*0.3
s=A.I(B.b3.j(0.35+t),B.q,1.3)
r=x.V
q=A.a([new A.ac(0,B.G,B.b3.j(0.12+w*0.15),B.J,24)],r)
p=h.c.x
p===$&&A.c()
o=x.p
n=A.a([],o)
for(t=0.55+t,m=0;m<3;++m){l=v+m*3.141592653589793*2/3
k=Math.cos(l)
l=Math.sin(l)
j=6+g.x*4
n.push(A.dX(A.p(i,i,B.f,i,i,new A.o(B.ex.j(t),i,i,i,A.a([new A.ac(0,B.G,B.b3.j(0.45),B.J,10)],r),i,B.a5),i,j,i,i,i,i,i,j),new A.v(38*k,28*l)))}t=A.a([B.b3.j(0.55),B.b3.j(0.08),B.K],x.O)
r=A.a([new A.ac(0,B.G,B.b3.j(0.45),B.J,28)],r)
n.push(A.p(i,A.X(B.ha,B.ex,i,i,A.a([new A.cR(B.b3.j(0.9),B.J,22)],x.r),46),B.f,i,i,new A.o(i,i,i,i,r,new A.bU(B.A,0.5,B.x,i,0,t,i,i),B.a5),i,78,i,i,i,i,i,78))
return A.b3(A.p(i,A.x(A.a([A.ef(B.A,new A.an(B.A,i,B.aa,B.r,n,i),0.85+p*0.25,i,i),B.R,D.fl2,B.O,D.ftN,B.aR,A.B(A.a([A.E(new C.Ct("Create group",B.hE,g,h.f,!1,i),1),B.at,A.E(new C.Ct("Join code",B.yC,g,h.r,!0,i),1)],o),B.m,i,B.e,B.j,0,i,i),B.R,new C.Ct("Scan invite QR",B.j5,g,h.w,!0,i)],o),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c_,i,s,u,q,i,B.n),i,i,i,i,D.bvg,i,i,i),i,i,new C.PP(0.55+w*0.35,!0,f,i),B.ax)},
$S:70}
C.diJ.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.c.x
t===$&&A.c()
w=A.n(18)
return A.b3(A.p(v,u.d,B.f,v,v,new A.o(B.c_,v,A.I(B.b3.j(0.35),B.q,1),w,A.a([new A.ac(0,B.G,B.b3.j(0.12+t*0.1),B.J,16)],x.V),v,B.n),v,v,v,v,B.bB,v,v,v),v,v,new C.PP(0.4+t*0.35,!1,0,v),B.ax)},
$S:70}
C.diH.prototype={
$3(d,e,f){var w,v=e?-1:1,u=f?-1:1,t=new A.aO($.W().r,B.ao,null,null,A.a([],x.v)),s=d.a,r=d.b
t.F(new A.b5(s,r))
w=r+14*u
t.F(new A.ap(s+7*v,w))
t.F(new A.ap(s-2*v,w))
t.F(new A.ap(s+6*v,r+28*u))
r=A.N()
r.r=B.b3.j(0.35*this.a.b).gp(0)
r.b=B.ae
r.c=1.3
r.d=B.bT
this.b.aR(t,r)},
$S:568}
C.fr8.prototype={
$1(d){return new A.D(new A.R(0,0,0,A.aI(d,B.eH,x.w).w.f.d),new A.e_(new C.fr7(this.a,this.b),null),null)},
$S:59}
C.fr7.prototype={
$2(d,e){var w=null,v=C.aOp(B.ha,"Pick your group code: 3 letters + 1\u20135 numbers (e.g. ABC123).","Create lightning group"),u=this.b,t=A.a([new C.bjE()],x.F),s=C.KB("ABC12345"),r=this.a,q=r.a,p=x.p
return new C.oB(A.x(A.a([v,B.aR,A.aM(w,B.U,!0,w,!0,B.r,w,A.aN(),u,w,w,w,w,w,2,s.bbI(q.length===0?w:q),B.y,!0,w,!0,w,!1,w,B.aj,w,w,t,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new C.fr4(r,e),w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,D.fbR,!0,B.a4,w,B.m8,w,w,w,w),B.O,D.fpg,B.by,A.B(A.a([A.E(A.bK(!1,H.JA,w,w,!0,w,w,new C.fr5(d),w,w),1),B.ab,A.E(A.bG(D.fkH,new C.fr6(r,u,e,d),A.bo(B.b3,w,w,w,B.c_,w,B.cm,w,new A.b7(A.n(14),B.Y),w,w,w)),2)],p),B.m,w,B.e,B.j,0,w,w)],p),B.ai,w,B.e,B.N,0,B.p),!0,w)},
$S:z+1}
C.fr4.prototype={
$1(d){var w=this.a
if(w.a.length!==0)this.b.$1(new C.fr3(w))},
$S:2}
C.fr3.prototype={
$0(){return this.a.a=""},
$S:0}
C.fr5.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fr6.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a).toUpperCase()
if(!C.hpx(v)){w.c.$1(new C.fr2(w.a))
return}A.a5(w.d,!1).O(v)},
$S:0}
C.fr2.prototype={
$0(){this.a.a="Use exactly 3 letters + 1\u20135 numbers (e.g. ABC123)."},
$S:0}
C.frs.prototype={
$1(d){var w,v,u,t=this,s=null,r=A.aI(d,B.eH,x.w).w,q=C.aOp(t.a,t.c,t.b),p=t.d,o=A.l(s,s,B.c,s,s,s,s,s,s,s,s,16,s,s,B.P,s,s,!0,s,t.f,s,s,s,s,s,s)
o=A.aM(s,B.U,!0,s,!0,B.r,s,A.aN(),p,s,s,s,s,s,2,C.KB(t.r),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.frp(d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,o,!0,B.a4,s,B.m8,s,s,s,s)
w=A.E(A.bK(!1,H.JA,s,s,!0,s,s,new C.frq(d),s,s),1)
v=A.bo(B.b3,s,s,s,B.c_,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s)
u=x.p
return new A.D(new A.R(0,0,0,r.f.d),new C.oB(A.x(A.a([q,B.aR,o,B.by,A.B(A.a([w,B.ab,A.E(A.bG(A.d(t.w,s,s,s,s,s,s,B.cD,s,s,s),new C.frr(p,d),v),2)],u),B.m,s,B.e,B.j,0,s,s)],u),B.ai,s,B.e,B.N,0,B.p),!0,s),s)},
$S:59}
C.frp.prototype={
$1(d){var w=B.a.i(d)
if(w.length!==0)A.a5(this.a,!1).O(w)},
$S:2}
C.frq.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.frr.prototype={
$0(){var w=B.a.i(this.a.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fro.prototype={
$1(d){return this.a&&this.b.t(0,d.b)},
$S:200}
C.frl.prototype={
$1(d){return!this.a.$1(d)},
$S:200}
C.frm.prototype={
$1(d){var w=this
return new A.D(new A.R(0,0,0,A.aI(d,B.eH,x.w).w.f.d),new A.e_(new C.frk(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y),null),null)},
$S:59}
C.frk.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.b,a2=B.a.i(a1.a.a).toLowerCase(),a3=d.c
if(a2.length===0)w=a3
else{v=A.S(a3).k("a_<1>")
w=A.C(new A.a_(a3,new C.frc(a2),v),v.k("J.E"))}v=d.d
u=A.S(w).k("a_<1>")
t=A.C(new A.a_(w,new C.frd(v),u),u.k("J.E"))
u=d.a
if(!B.d.b4(t,new C.fre(u)))u.a=t.length!==0?B.d.gI(t).b:""
s=x.p
r=A.a([],s)
q=d.e
if(q){p=u.b
o=A.p(a0,D.bSL,B.f,a0,a0,new A.o(B.b3.j(0.14),a0,A.I(B.b3.j(0.5),B.q,1),a0,A.a([new A.ac(0,B.G,B.b3.j(0.25),B.J,12)],x.V),a0,B.a5),a0,46,a0,a0,a0,a0,a0,46)
n=A.n(14)
m=p?B.b3.j(0.22):B.c.j(0.06)
l=A.I(p?B.b3:B.b3.j(0.35),B.q,1)
r.push(A.B(A.a([o,B.b7,A.aF(!1,B.a1,!0,a0,A.aL(!1,n,!0,A.p(a0,A.X(B.fg,p?B.ex:B.b3,a0,a0,a0,a0),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,46,a0,a0,a0,a0,a0,46),a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.frf(u,a5),a0,a0,a0,a0,a0,a0,a0),B.f,B.K,0,a0,a0,a0,a0,a0,B.ah)],s),B.m,a0,B.e,B.j,0,a0,a0))}else r.push(C.aOp(B.vQ,"Log what left the group case.","Record spending"))
if(q){p=A.a([B.au,D.fBP,B.au,D.fAT],s)
o=d.f
if(o!=null&&B.a.i(o).length!==0){n=B.b0.j(0.12)
m=A.n(12)
l=A.I(B.b0.j(0.45),B.q,1)
B.d.v(p,A.a([B.R,A.p(a0,A.d("Help mode: "+B.a.i(o),a0,a0,a0,a0,a0,a0,O.a83,B.L,a0,a0),B.f,a0,a0,new A.o(n,a0,l,m,a0,a0,B.n),a0,a0,a0,a0,B.bR,a0,a0,a0)],s))}B.d.v(r,p)}r.push(B.aB)
if(q){p=A.a([],s)
if(u.b)B.d.v(p,A.a([A.aM(a0,B.U,!0,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.KB("Search member\u2026"),B.y,!0,a0,!0,a0,!1,a0,B.aj,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,new C.frg(a5),a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dg,!0,B.a4,a0,B.an,a0,a0,a0,a0),B.R],s))
p.push(A.d("WHO CONTRIBUTED",a0,a0,a0,a0,a0,a0,A.l(a0,a0,B.b3.j(0.85),a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.H,a0,a0,!0,a0,1.4,a0,a0,a0,a0,a0,a0),a0,a0,a0))
p.push(B.O)
if(a3.length===0)p.push(D.fHA)
else if(d.r)p.push(D.frL)
else if(w.length===0)p.push(D.foz)
else{a1=A.a([],s)
for(o=w.length,k=0;k<w.length;w.length===o||(0,A.L)(w),++k){j=w[k]
n=j.b
m=v.$1(j)?n+" \u2713 paid":n
l=u.a
i=v.$1(j)?a0:new C.frh(u,a5,j)
h=B.cS.j(0.18)
g=B.c.j(0.06)
f=u.a===n
e=f?B.c_:B.ad
f=f?B.b3:B.b3.j(0.25)
a1.push(A.j9(a0,g,h,new A.y(m,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),new A.H(!0,e,a0,a0,a0,a0,a0,B.P,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),i,l===n,B.b3,a0,new A.az(f,1,B.q,-1),a0))}p.push(new A.cS(D.b0q,A.cc(A.bT(B.bA,a1,B.bq,8,8),B.r,a0,B.y,a0,a0,a0,a0,B.ag),a0))}B.d.v(r,p)}else B.d.v(r,A.a([A.aM(a0,B.U,!1,a0,!0,B.r,a0,A.aN(),d.w,a0,a0,a0,a0,a0,2,C.KB("What was spent"),B.y,!0,a0,!0,a0,!1,a0,B.aj,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dg,!0,B.a4,a0,B.an,a0,a0,a0,a0)],s))
r.push(B.ac)
a1=d.x
r.push(A.aM(a0,B.U,!q,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.KB("Amount ($)"),B.y,!0,a0,!0,a0,!1,a0,B.aj,a0,a0,a0,a0,a0,B.dW,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.TO,!0,B.a4,a0,B.an,a0,a0,a0,a0))
r.push(B.by)
r.push(A.B(A.a([A.E(A.bK(!1,H.JA,a0,a0,!0,a0,a0,new C.fri(a4),a0,a0),1),B.ab,A.E(A.bG(D.fH4,new C.frj(u,a1,q,d.w,a3,d.y,a4),A.bo(B.b3,a0,a0,a0,B.c_,a0,B.cm,a0,new A.b7(A.n(14),B.Y),a0,a0,a0)),2)],s),B.m,a0,B.e,B.j,0,a0,a0))
return new C.oB(A.x(r,B.ai,a0,B.e,B.N,0,B.p),!0,a0)},
$S:z+1}
C.frc.prototype={
$1(d){var w=this.a
return B.a.t(d.b.toLowerCase(),w)||B.a.t(d.a.toLowerCase(),w)},
$S:200}
C.frd.prototype={
$1(d){return!this.a.$1(d)},
$S:200}
C.fre.prototype={
$1(d){return d.b===this.a.a},
$S:200}
C.frf.prototype={
$0(){return this.b.$1(new C.frb(this.a))},
$S:0}
C.frb.prototype={
$0(){var w=this.a
return w.b=!w.b},
$S:0}
C.frg.prototype={
$1(d){return this.a.$1(new C.fra())},
$S:2}
C.fra.prototype={
$0(){},
$S:0}
C.frh.prototype={
$1(d){return this.b.$1(new C.fr9(this.a,this.c))},
$S:9}
C.fr9.prototype={
$0(){return this.a.a=this.b.b},
$S:0}
C.fri.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.frj.prototype={
$0(){var w,v,u,t=this,s=A.d6(B.a.i(t.b.a.a))
if(s==null)s=0
w=t.c
if(w){v=B.a.i(t.a.a)
u=v.length===0?"\u2014":v}else{v=B.a.i(t.d.a.a)
u=v.length===0?"\u2014":v}v=!1
if(w)if(t.e.length!==0){w=t.a.a
w=B.a.i(w).length===0||t.f.t(0,w)}else w=v
else w=v
if(w)return
A.a5(t.r,!1).O(new C.bh8(u,s,""))},
$S:0}
C.frn.prototype={
$0(){var w=this.a,v=w.T$=$.aw()
w.P$=0
w=this.b
w.T$=v
w.P$=0
w=this.c
w.T$=v
w.P$=0},
$S:11}
C.fqT.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.xO,new C.oB(A.x(A.a([A.av(A.p(w,D.bOL,B.f,w,w,new A.o(B.h4.j(0.15),w,A.I(B.h4.j(0.55),B.q,1),w,A.a([new A.ac(0,B.G,B.h4.j(0.25),B.J,16)],x.V),w,B.a5),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fwN,B.O,A.d(this.a,w,w,w,w,w,w,D.ffc,B.L,w,w),B.au,A.d(this.b,w,w,w,w,w,w,B.hh,B.L,w,w),B.R,D.fqj,B.by,A.B(A.a([A.E(A.bK(!1,D.fx9,w,w,!0,w,w,new C.fqR(d),w,w),1),B.ab,A.E(A.bG(D.fve,new C.fqS(d),A.bo(B.h4,w,w,w,B.c,w,B.cm,w,new A.b7(A.n(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.ai,w,B.e,B.N,0,B.p),!0,w),w)},
$S:59}
C.fqR.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fqS.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fqL.prototype={
$2(d,e){return d+e.c},
$S:151}
C.fqM.prototype={
$1(d){return d.w===this.a.ax},
$S:223}
C.fqN.prototype={
$1(d){var w=this
return new A.D(new A.R(12,0,12,A.aI(d,B.eH,x.w).w.f.d),A.oW(new C.fqK(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),!0,0.72,0.92,0.45,!1,null),null)},
$S:59}
C.fqK.prototype={
$2(d,e){var w=this,v={}
v.a=D.a9X
return new A.e_(new C.fqJ(v,e,w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),null)},
$S:1956}
C.fqJ.prototype={
$2(d,e){var w=this,v=w.a,u=v.a,t=w.ay
t=t==null?null:new C.fqH(t,d,e)
return new C.oB(new C.bi3(w.b,w.c,w.d,w.e,w.f,w.r,w.w,u,w.ax,new C.fqI(v,e),t,null),!1,null)},
$S:z+1}
C.fqI.prototype={
$1(d){return this.b.$1(new C.fqF(this.a,d))},
$S:z+8}
C.fqF.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fqH.prototype={
$1(d){return this.bl8(d)},
bl8(d){var w=0,v=A.j(x.H),u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a.$1(d),$async$$1)
case 2:if(u.b.e!=null)u.c.$1(new C.fqG())
return A.h(null,v)}})
return A.i($async$$1,v)},
$S:93}
C.fqG.prototype={
$0(){},
$S:0}
C.doR.prototype={
$2(d,e){return d+e.c},
$S:151}
C.doS.prototype={
$1(d){return d.w===this.a.d.ax},
$S:223}
C.doT.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a.x.x
r===$&&A.c()
w=B.b3.j(0.12+r*0.08)
v=A.I(B.b3.j(0.45+r*0.25),B.q,1)
r=A.a([new A.ac(0,B.G,B.b3.j(0.2+r*0.15),B.J,18)],x.V)
u=this.b
t=u?B.p1:B.ha
return A.av(A.p(s,A.X(t,u?B.iO:B.b3,s,s,s,32),B.f,s,s,new A.o(w,s,v,s,r,s,B.a5),s,64,s,s,s,s,s,64),s,s,s)},
$S:227}
C.doU.prototype={
$2(d,e){return d+e.c},
$S:151}
C.doV.prototype={
$1(d){var w=this.a
return A.a([w.auK("All",D.a9X),w.auK("Contributions",D.aW_),w.auK("Missed",D.aW0)],x.T)},
$S:z+9}
C.doW.prototype={
$1(d){return this.a.bYz(this.b,d)},
$S:z+10}
C.doX.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.doQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.c
w=4
return A.b(C.i_H(u.b,t.b),$async$$0)
case 4:w=e===!0?2:3
break
case 2:w=5
return A.b(u.a.cx.$1(t.d),$async$$0)
case 5:case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqm.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.xO,new C.oB(A.x(A.a([A.av(A.p(w,D.bTe,B.f,w,w,new A.o(B.b0.j(0.14),w,A.I(B.b0.j(0.55),B.q,1),w,w,w,B.a5),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fln,B.R,A.d(this.a,w,w,w,w,w,w,D.f8_,B.L,w,w),B.R,D.foZ,B.by,A.B(A.a([A.E(A.bK(!1,D.fjY,w,w,!0,w,w,new C.fqk(d),w,w),1),B.ab,A.E(A.bG(D.fmh,new C.fql(d),A.bo(B.b0,w,w,w,B.c_,w,B.cm,w,new A.b7(A.n(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.ai,w,B.e,B.N,0,B.p),!1,w),w)},
$S:59}
C.fqk.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fql.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fqp.prototype={
$1(d){var w=null,v=x.p,u=A.a([A.av(A.p(w,D.bT2,B.f,w,w,new A.o(B.b3.j(0.14),w,A.I(B.b3.j(0.55),B.q,1),w,w,w,B.a5),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fGD,B.ac,C.h2k("Member",this.a),C.h2k("Amount","$"+B.k.ab(this.b,2))],v),t=this.c
if(t!=null&&B.a.i(t).length!==0)u.push(C.h2k("Help for",B.a.i(t)))
u.push(B.R)
u.push(D.fwK)
u.push(B.by)
u.push(A.B(A.a([A.E(A.bK(!1,D.fzy,w,w,!0,w,w,new C.fqn(d),w,w),1),B.ab,A.E(A.bG(D.fFD,new C.fqo(d),A.bo(B.b3,w,w,w,B.c_,w,B.cm,w,new A.b7(A.n(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w))
return new A.D(F.xO,new C.oB(A.x(u,B.ai,w,B.e,B.N,0,B.p),!0,w),w)},
$S:59}
C.fqn.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fqo.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fqB.prototype={
$0(){var w=this,v=w.a,u=w.b.a.a,t=w.c.a.a,s=w.d.a.a,r=w.e.a.a
v.z=B.a.i(u)
v.Q=B.a.i(t)
v.as=B.a.i(s)
v.at=B.a.i(r)},
$S:0}
C.fqC.prototype={
$1(d){var w=this
return new A.D(new A.R(0,0,0,A.aI(d,B.eH,x.w).w.f.d),A.oW(new C.fqA(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,d),!0,0.82,0.94,0.5,!1,null),null)},
$S:59}
C.fqA.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.b,q=C.hkR(r,t.a),p=A.d(r?"Help mode is live":"Set up group help mode",s,s,s,s,s,s,B.de,B.L,s,s),o=x.p
p=A.a([q,B.O,p,B.am,A.d(r?"Members see the green icon and your payment details. Turn off when the round ends.":"Fill in where members send money. These details stay saved for next time.",s,s,s,s,s,s,G.a8l,B.L,s,s),B.aR,A.d("HELP DETAILS",s,s,s,s,s,s,A.l(s,s,B.b0.j(0.9),s,s,s,s,s,s,s,s,11,s,s,B.H,s,s,!0,s,1.4,s,s,s,s,s,s),s,s,s),B.R,A.aM(s,B.U,!1,s,!0,B.r,s,A.aN(),t.c,s,s,s,s,s,2,C.KB("What are you collecting for?"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,2,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dg,!0,B.a4,s,B.an,s,s,s,s),B.R,A.aM(s,B.U,!1,s,!0,B.r,s,A.aN(),t.d,s,s,s,s,s,2,C.KB("Cash App"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dg,!0,B.a4,s,B.an,s,s,s,s),B.R,A.aM(s,B.U,!1,s,!0,B.r,s,A.aN(),t.e,s,s,s,s,s,2,C.KB("Zelle"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dg,!0,B.a4,s,B.an,s,s,s,s),B.R,A.aM(s,B.U,!1,s,!0,B.r,s,A.aN(),t.f,s,s,s,s,s,2,C.KB("Phone number \u2014 questions or confirm payment"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,B.a2X,s,s,B.jy,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dg,!0,B.a4,s,B.an,s,s,s,s),B.by],o)
q=t.r
w=t.w
v=t.x
if(r){r=A.bG(D.frM,new C.fqv(q,w,v),A.bo(B.h4,s,s,s,B.c,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s))
u=B.b0.j(0.55)
B.d.v(p,A.a([r,B.O,A.dW(D.frI,new C.fqw(q,v,w),A.dg(s,s,s,s,s,s,s,s,s,B.j2,s,s,B.cm,s,new A.b7(A.n(14),B.Y),new A.az(u,1,B.q,-1),s,s,s,s))],o))}else{r=B.b3.j(0.45)
B.d.v(p,A.a([A.dW(D.fk8,new C.fqx(q,v,w),A.dg(s,s,s,s,s,s,s,s,s,B.b3,s,s,B.cm,s,new A.b7(A.n(14),B.Y),new A.az(r,1,B.q,-1),s,s,s,s)),B.O,A.bG(D.fEU,new C.fqy(q,w,v),A.bo(B.b0,s,s,s,B.c_,s,B.cm,s,new A.b7(A.n(14),B.Y),s,s,s))],o))}p.push(B.O)
p.push(A.bK(!1,H.JA,s,s,!0,s,s,new C.fqz(v),s,s))
return new C.oB(A.cw(p,e,s,s,s,B.ag,!1),!0,s)},
$S:z+2}
C.fqv.prototype={
$0(){var w,v,u
this.a.$0()
w=this.b
v=B.a.i(w.ax)
u=w.z
if(v.length!==0&&!B.d.t(w.CW,v)){w.c20(v,u)
B.d.L(w.CW,v)}w.y=!1
w.ax=""
w.ay=null
A.a5(this.c,!1).O(w)},
$S:0}
C.fqw.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.fqx.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.fqy.prototype={
$0(){var w,v=this
v.a.$0()
w=v.b
if(B.a.i(w.z).length===0){v.c.K(x.q).f.U(D.eZF)
return}w.cF4()
A.a5(v.c,!1).O(w)},
$S:0}
C.fqz.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fqD.prototype={
$0(){var w=this,v=w.a,u=v.T$=$.aw()
v.P$=0
v=w.b
v.T$=u
v.P$=0
v=w.c
v.T$=u
v.P$=0
v=w.d
v.T$=u
v.P$=0},
$S:11}
C.fqu.prototype={
$1(d){return new A.D(F.xO,A.oW(new C.fqt(this.a,this.b,d),!0,0.72,0.9,0.45,!1,null),null)},
$S:59}
C.fqt.prototype={
$2(d,e){var w=this,v=null,u=A.a([C.hkR(!0,w.a),B.R,D.fHt,B.am,D.fwf,B.aR],x.p),t=w.b,s=B.a.i(t.z)
if(s.length!==0)u.push(C.fhU(w.c,B.ls,"COLLECTING FOR",v,v,s))
s=B.a.i(t.Q)
if(s.length!==0)u.push(C.fhU(w.c,B.hU,"CASH APP",new C.fqq(t),"Open Cash App",s))
s=B.a.i(t.as)
if(s.length!==0)u.push(C.fhU(w.c,B.k7,"ZELLE",v,v,s))
s=t.at
if(B.a.i(s).length!==0)u.push(C.fhU(w.c,B.w_,"PHONE NUMBER",new C.fqr(t),"Call",A.n8(s)))
if(B.a.i(t.z).length===0&&B.a.i(t.Q).length===0&&B.a.i(t.as).length===0&&B.a.i(t.at).length===0)u.push(D.ecj)
u.push(B.ac)
u.push(A.bK(!1,D.aS8,v,v,!0,v,v,new C.fqs(w.c),v,v))
return new C.oB(A.cw(u,e,v,v,v,B.ag,!1),!1,v)},
$S:z+2}
C.fqq.prototype={
$0(){return C.bAa(this.a.Q)},
$S:0}
C.fqr.prototype={
$0(){return C.bzc(this.a.at)},
$S:0}
C.fqs.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fhW.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a.x
q===$&&A.c()
w=this.b
v=w?B.b0.j(0.22+q*0.18):B.b3.j(0.14)
u=w?B.j2.j(0.85+q*0.15):B.b3.j(0.5)
u=A.I(u,B.q,w?2:1)
t=w?A.a([new A.ac(1+q,B.G,B.b0.j(0.4+q*0.35),B.J,18+q*10)],x.V):r
s=w?B.j2:B.b3
return A.av(A.p(r,A.X(B.mD,s,r,r,w?A.a([new A.cR(B.b0.j(0.95),B.J,12+q*8)],x.r):r,r),B.f,r,r,new A.o(v,r,u,r,t,r,B.a5),r,56,r,r,r,r,r,56),r,r,r)},
$S:227}
C.fhV.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fO(new A.fF(t.a)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqV.prototype={
$1(d){return new A.FV(d.a,d.b)},
$S:425}
C.fqW.prototype={
$1(d){var w=this.a
if(B.a.i(w.d).toLowerCase()!==B.a.i(d.b).toLowerCase()){w=w.x
w=w.length!==0&&w===B.a.i(d.a.toLowerCase())}else w=!0
return w},
$S:200}
C.fqX.prototype={
$2(d,e){return d+e.c},
$S:151}
C.fqY.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="x in all \xb7 missed ",j=A.aI(a1,l,x.w).w,i=m.b,h=i.length,g=m.c.length,f=B.k.ab(m.d,2),e=m.e,d=e?" \xb7 round is open":"",a0=x.p
d=A.a([C.aOp(B.mD,""+h+" of "+g+" gave \xb7 total $"+f+d,m.a),B.ac,A.bv(A.n(8),A.lB(B.dn,l,l,10,l,m.f,D.aY2),B.aq),B.aR,A.d("GAVE ("+i.length+")",l,l,l,l,l,l,D.fao,l,l,l),B.am],a0)
if(i.length===0)d.push(D.fnB)
for(h=i.length,g=m.r,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){v=i[w]
f=new A.aS(12,12)
u=B.b0.j(0.07)
t=new A.aS(12,12)
s=new A.az(B.b0.j(0.3),1,B.q,-1)
r=v.a
q=r.b
p=v.b
o=p.f.bU()
r=r.a
d.push(A.aL(!1,new A.bn(f,f,f,f),!0,A.p(l,new A.ci(B.aP,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bQx,B.at,new A.bB(1,B.bg,A.x(A.a([new A.y(q,l,B.hw,l,l,l,l,l,l,l,l,l),new A.y(""+A.bH(o)+"/"+A.bS(o)+"/"+A.bA(o)+" \xb7 gave "+g.ao1(q,r)+k+g.a5f(q,r)+" \xb7 tap for receipt",l,B.Dx,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l),new A.y("$"+B.k.ab(p.c,2),l,G.Js,l,l,l,l,l,l,l,l,l)],a0),l),B.f,l,l,new A.o(u,l,new A.bO(s,s,s,s),new A.bn(t,t,t,t),l,l,B.n),l,l,l,B.eK,B.bR,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.fqU(a1,g,v),l,l,l,l,l,l,l))}d.push(B.ac)
i=m.w
h=i.length
d.push(A.d(e?"NOT YET ("+h+")":"DID NOT GIVE ("+h+")",l,l,l,l,l,l,D.f7Q,l,l,l))
d.push(B.am)
if(i.length===0)d.push(D.fug)
for(h=i.length,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){n=i[w]
f=B.iO.j(0.07)
e=new A.aS(12,12)
s=new A.az(B.iO.j(0.3),1,B.q,-1)
u=n.b
t=n.a
d.push(A.p(l,new A.ci(B.aP,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bLh,B.at,new A.bB(1,B.bg,A.x(A.a([new A.y(u,l,B.hw,l,l,l,l,l,l,l,l,l),new A.y("gave "+g.ao1(u,t)+k+g.a5f(u,t),l,B.Dx,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l)],a0),l),B.f,l,l,new A.o(f,l,new A.bO(s,s,s,s),new A.bn(e,e,e,e),l,l,B.n),l,l,l,B.eK,B.bR,l,l,l))}return new A.cS(new A.aY(0,1/0,0,j.a.b*0.88),new C.oB(A.cc(A.x(d,B.F,l,B.e,B.j,0,B.p),B.r,l,B.y,l,l,l,l,B.ag),!0,l),l)},
$S:1957}
C.fqU.prototype={
$0(){return C.i_N(this.a,this.b,this.c.b)},
$S:0}
C.fqQ.prototype={
$2(d,e){var w=null
return new A.D(B.vB,A.B(A.a([new A.a7(96,w,A.d(d,w,w,w,w,w,w,B.wA,w,w,w),w),A.E(A.d(e,w,w,w,w,w,w,B.a8t,w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:130}
C.fqP.prototype={
$1(d){var w=this,v=null,u=w.b,t=w.c,s=A.a([C.aOp(B.hb,w.a,"Receipt"),B.ac,u.$2("From",t.d),u.$2("For",w.d),u.$2("Amount","$"+B.k.ab(t.c,2)),u.$2("Date",w.e)],x.p),r=t.e
if(r.length!==0)s.push(u.$2("Note",r))
r=w.f
s.push(u.$2("Group",r.e+" \xb7 owner "+r.d))
t=t.r
s.push(u.$2("Recorded by",t.length===0?r.c:t))
s.push(B.ac)
s.push(A.dn(T.C9,D.fCs,new C.fqO(w.r,d),A.bo(B.b3,v,v,v,B.w,B.zJ,v,v,v,v,v,v)))
return new C.oB(A.x(s,B.F,v,B.e,B.N,0,B.p),!0,v)},
$S:z+11}
C.fqO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fO(new A.fF(u.a)),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.eZZ)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqE.prototype={
$1(d){var w=null,v=x.w
return new A.D(new A.R(0,0,0,A.aI(d,w,v).w.f.d),new A.cS(new A.aY(0,1/0,0,A.aI(d,w,v).w.a.b*0.92),new C.oB(new C.aAZ(this.a,this.b,this.c,w),!0,w),w),w)},
$S:59}
C.dhj.prototype={
$1(d){return new A.FV(d.a,d.b)},
$S:425}
C.dhk.prototype={
$1(d){return d.a!==B.a.i(this.a.a.e.toLowerCase())},
$S:200}
C.dhl.prototype={
$1(d){return d.length!==0},
$S:3}
C.dhm.prototype={
$0(){return this.a.w="Write your first and last name."},
$S:0}
C.dhn.prototype={
$0(){return this.a.w="Your phone number is needed."},
$S:0}
C.dho.prototype={
$0(){return this.a.w="Choose the state you live in."},
$S:0}
C.dhp.prototype={
$0(){return this.a.w="Your home address is needed."},
$S:0}
C.dhB.prototype={
$1(d){return C.KB(d)},
$S:307}
C.dhv.prototype={
$1(d){var w=this.a
return w.m(new C.dhu(w,d))},
$S:34}
C.dhu.prototype={
$0(){var w=this.b
if(w==null)w=""
return this.a.r=w},
$S:0}
C.dhw.prototype={
$1(d){var w=this.a
return w.m(new C.dht(w,this.b,d))},
$S:34}
C.dht.prototype={
$0(){var w=this.a.x,v=this.b,u=this.c
if(u==null)u="mother"
u=new A.ae9(w[v].a,u)
w[v]=u
return u},
$S:0}
C.dhx.prototype={
$1(d){var w=this.a
return w.m(new C.dhs(w,this.b,d))},
$S:213}
C.dhs.prototype={
$0(){var w=this.a.x,v=this.b,u=w[v],t=this.c
if(t==null)t=-1
u=new A.ae9(t,u.b)
w[v]=u
return u},
$S:0}
C.dhy.prototype={
$0(){var w=this.a
return w.m(new C.dhr(w,this.b))},
$S:0}
C.dhr.prototype={
$0(){return B.d.cA(this.a.x,this.b)},
$S:0}
C.dhz.prototype={
$0(){var w=this.a
return w.m(new C.dhq(w))},
$S:0}
C.dhq.prototype={
$0(){return this.a.x.push(new A.ae9(-1,"mother"))},
$S:0}
C.dhA.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0};(function aliases(){var w=C.aLd.prototype
w.bva=w.q
w=C.aLe.prototype
w.bvb=w.q
w=C.aLO.prototype
w.bvN=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=C.aCN.prototype,"gbIW","zZ",0)
w(u,"gc_q","Yd",0)
w(u,"gc5F","Zc",0)
w(u=C.aCK.prototype,"gcdY","Q6",0)
w(u,"gc5C","adx",0)
w(u,"gbMo","WZ",0)
v(C.aCM.prototype,"gc5D","c5E",7)
w(C.aB_.prototype,"gc5G","c5H",12)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.i0,[C.c6N,C.c6P,C.c6O,C.c6R,C.c6S,C.c6W,C.c70,C.c6U,C.c6Q,C.c6K,C.c6I,C.c6Z,C.c6L,C.c6X,C.c6Y,C.ffU,C.fkX,C.fkY,C.dLL,C.dLA,C.dLI,C.dLK,C.ecQ,C.ecO,C.ecP,C.ecN,C.ecZ,C.dLx,C.dL9,C.dLj,C.dLk,C.dLd,C.deS,C.diH,C.fr8,C.fr4,C.frs,C.frp,C.fro,C.frl,C.frm,C.frc,C.frd,C.fre,C.frg,C.frh,C.fqT,C.fqM,C.fqN,C.fqI,C.fqH,C.doS,C.doV,C.doW,C.fqm,C.fqp,C.fqC,C.fqu,C.fqV,C.fqW,C.fqY,C.fqP,C.fqE,C.dhj,C.dhk,C.dhl,C.dhB,C.dhv,C.dhw,C.dhx])
v(A.kn,[C.c72,C.c6J,C.ffT,C.fkZ,C.dLF,C.dLC,C.ecW,C.ed_,C.dej,C.dez,C.dLo,C.dLr,C.dLg,C.deR,C.diK,C.diI,C.diJ,C.fr7,C.frk,C.fqL,C.fqK,C.fqJ,C.doR,C.doT,C.doU,C.fqA,C.fqt,C.fhW,C.fqX,C.fqQ])
u(C.Cx,A.md)
v(A.aD,[C.wt,C.bh8,C.bgE])
v(C.wt,[C.Pv,C.K2])
v(A.ag,[C.aoK,C.aqp,C.Ig,C.aCL,C.aAZ])
v(A.ah,[C.aLe,C.aLO,C.aLd,C.aCM,C.aB_])
u(C.aCN,C.aLe)
v(A.ja,[C.dLB,C.dLz,C.dLH,C.dLG,C.dLE,C.dLJ,C.dLD,C.ecR,C.ecL,C.ecM,C.ecX,C.ecY,C.ecV,C.ecU,C.ecS,C.ecT,C.dLl,C.dLh,C.dLi,C.dLm,C.dLn,C.dLp,C.dLs,C.dLt,C.dLu,C.dLv,C.dLw,C.dLq,C.dLc,C.dLb,C.dLa,C.dLe,C.dLf,C.dLy,C.fr3,C.fr5,C.fr6,C.fr2,C.frq,C.frr,C.frf,C.frb,C.fra,C.fr9,C.fri,C.frj,C.frn,C.fqR,C.fqS,C.fqF,C.fqG,C.doX,C.doQ,C.fqk,C.fql,C.fqn,C.fqo,C.fqB,C.fqv,C.fqw,C.fqx,C.fqy,C.fqz,C.fqD,C.fqq,C.fqr,C.fqs,C.fhV,C.fqU,C.fqO,C.dhm,C.dhn,C.dho,C.dhp,C.dhu,C.dht,C.dhs,C.dhy,C.dhr,C.dhz,C.dhq,C.dhA])
u(C.bk_,C.aLO)
v(A.au,[C.abw,C.Ct,C.aAm,C.bhb,C.bfB,C.bha,C.bh7,C.bh9,C.bi3,C.oB])
v(A.mP,[C.acU,C.PP])
u(C.aCK,C.aLd)
u(C.bjE,A.iU)
w(C.aLd,A.eW)
w(C.aLe,A.eW)
w(C.aLO,A.eW)})()
A.k2(b.typeUniverse,JSON.parse('{"Pv":{"wt":[]},"K2":{"wt":[]},"aoK":{"ag":[],"t":[]},"aqp":{"ag":[],"t":[]},"abw":{"au":[],"t":[]},"Ig":{"ag":[],"t":[]},"aCL":{"ag":[],"t":[]},"oB":{"au":[],"t":[]},"aAZ":{"ag":[],"t":[]},"aCN":{"ah":["aoK"]},"bk_":{"ah":["aqp"]},"Ct":{"au":[],"t":[]},"aAm":{"au":[],"t":[]},"acU":{"aB":[]},"aCK":{"ah":["Ig"]},"aCM":{"ah":["aCL"]},"bhb":{"au":[],"t":[]},"bfB":{"au":[],"t":[]},"bha":{"au":[],"t":[]},"bh7":{"au":[],"t":[]},"bh9":{"au":[],"t":[]},"PP":{"aB":[]},"bjE":{"iU":[]},"bi3":{"au":[],"t":[]},"aB_":{"ah":["aAZ"]}}'))
var y={d:"That group code is already taken. Try another."}
var x=(function rtii(){var w=A.ax
return{Q:w("eG<m>"),c:w("eG<G>"),J:w("O<a3_>"),V:w("O<ac>"),O:w("O<w>"),t:w("O<eG<m>>"),u:w("O<eG<G>>"),A:w("O<a6<m,m>>"),D:w("O<nI>"),x:w("O<pU>"),B:w("O<uM>"),v:w("O<hv>"),T:w("O<pd<Cx>>"),Z:w("O<+(+email,name(m,m),pU)>"),S:w("O<+email,name(m,m)>"),i:w("O<+person,relation(G,m)>"),r:w("O<cR>"),s:w("O<m>"),F:w("O<iU>"),p:w("O<t>"),U:w("O<aB?>"),m:w("ai<nI>"),P:w("a6<m,@>"),f:w("a6<@,@>"),w:w("iE"),L:w("nI"),Y:w("uM"),N:w("m"),I:w("pi"),K:w("a_<+email,name(m,m)>"),C:w("eb<Pv>"),o:w("eb<K2>"),l:w("t"),n:w("bgE"),R:w("bh8"),E:w("Cx"),W:w("wt"),a:w("K2"),q:w("n2"),y:w("Q"),z:w("@"),G:w("G"),_:w("a6<m,@>?"),h:w("nI?"),X:w("aD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aY2=new A.m_(B.b0,A.ax("m_<w?>"))
D.aZL=new A.az(B.b3,1,B.q,-1)
D.aZZ=new A.az(B.c7,1,B.q,-1)
D.b0d=new A.aY(20,1/0,0,1/0)
D.b0q=new A.aY(0,1/0,0,150)
D.fmm=new A.y("Tap code to copy",null,B.wA,null,null,null,null,null,null,null,null,null)
D.b6n=new A.cp(B.A,null,null,D.fmm,null)
D.fmS=new A.y("No groups found.",null,B.kK,null,null,null,null,null,null,null,null,null)
D.b6N=new A.cp(B.A,null,null,D.fmS,null)
D.btJ=new A.R(14,12,6,12)
D.bue=new A.R(16,10,16,8)
D.buy=new A.R(16,4,16,36)
D.buS=new A.R(18,10,18,36)
D.buX=new A.R(18,12,18,4)
D.bvg=new A.R(18,22,18,18)
D.fpt=new A.y("Waiting to join",null,B.hK,null,null,null,null,null,null,null,null,null)
D.bzc=new A.bB(1,B.bg,D.fpt,null)
D.bA2=new A.bB(1,B.bg,B.bI,null)
D.bGA=new A.a0(63323,"MaterialIcons",!1)
D.amY=new A.a0(983761,"MaterialIcons",!1)
D.bK5=new A.ae(B.eE,null,B.ex,null,null,null)
D.bK7=new A.ae(B.ha,22,B.b3,null,null,null)
D.bK8=new A.ae(B.hq,16,B.b0,null,null,null)
D.bL_=new A.ae(B.Nz,22,B.ex,null,null,null)
D.bLh=new A.ae(B.a0z,20,B.iO,null,null,null)
D.bM7=new A.ae(B.e9,22,B.c7,null,null,null)
D.bMB=new A.ae(B.G3,20,B.b3,null,null,null)
D.bNm=new A.ae(B.hE,null,B.b3,null,null,null)
D.bOd=new A.ae(B.w2,18,B.b3,null,null,null)
D.bOk=new A.ae(B.fg,18,B.b3,null,null,null)
D.bOL=new A.ae(B.bHt,null,B.h4,null,null,null)
D.bPR=new A.ae(B.ha,null,B.b3,null,null,null)
D.bQx=new A.ae(B.e8,20,B.b0,null,null,null)
D.bSL=new A.ae(D.amY,null,B.b3,null,null,null)
D.bT2=new A.ae(B.u5,null,B.b3,null,null,null)
D.bTe=new A.ae(B.q4,null,B.b0,null,null,null)
D.axM=w([],x.x)
D.dmr=w(["mother","father","spouse","child","brother","sister"],x.s)
D.bPp=new A.ae(B.oY,20,B.iO,null,null,null)
D.ec7=new A.D(B.io,D.bPp,null)
D.fDG=new A.y("The group owner has not added payment details yet.",null,B.kK,null,B.L,null,null,null,null,null,null,null)
D.ecj=new A.D(B.fa,D.fDG,null)
D.eiU=new A.C2(null,B.dI)
D.eiW=new A.C3(null,B.dI)
D.ekw=new A.z(0,"Ledger")
D.elm=new A.z(1,"People")
D.elW=new A.z(2,"Invite")
D.fzw=new A.y("Your request is already waiting. The group owner has to approve you.",null,null,null,null,null,null,null,null,null,null,null)
D.eYj=new A.b1(D.fzw,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fy3=new A.y("Help mode is active but missing a campaign.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ4=new A.b1(D.fy3,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fmF=new A.y("Activate help mode before recording a contribution.",null,null,null,null,null,null,null,null,null,null,null)
D.eZC=new A.b1(D.fmF,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fE4=new A.y("Add what you are collecting for, then activate help mode.",null,null,null,null,null,null,null,null,null,null,null)
D.eZF=new A.b1(D.fE4,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fDq=new A.y("This group is full (100 members). Ask the owner to unlock more seats.",null,null,null,null,null,null,null,null,null,null,null)
D.eZI=new A.b1(D.fDq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fuy=new A.y("Receipt copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eZZ=new A.b1(D.fuy,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fu_=new A.y("Your request is waiting. The group owner has to approve you first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0A=new A.b1(D.fu_,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnw=new A.y("No group found for that code.",null,null,null,null,null,null,null,null,null,null,null)
D.f0M=new A.b1(D.fnw,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fCx=new A.y("Could not send your request.",null,null,null,null,null,null,null,null,null,null,null)
D.f0U=new A.b1(D.fCx,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.aQe=new A.H(!0,B.c,null,null,null,null,15,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5l=new A.H(!0,B.aA,null,null,null,null,10,B.H,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5v=new A.H(!0,B.b3,null,null,null,null,12,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6V=new A.H(!0,B.b3,null,null,null,null,22,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7I=new A.H(!0,B.iO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7Q=new A.H(!0,B.iO,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8_=new A.H(!0,B.j2,null,null,null,null,16,B.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8i=new A.H(!0,B.c,null,null,null,null,16,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8i=new A.H(!0,B.bU,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fao=new A.H(!0,B.b0,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fay=new A.H(!0,B.b3,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbR=new A.H(!0,B.c,null,null,null,null,20,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdb=new A.H(!0,B.ex,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fea=new A.H(!0,B.b3,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feM=new A.H(!0,B.b3,null,null,null,null,15,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffc=new A.H(!0,B.b3,null,null,null,null,16,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fih=new A.H(!0,B.f1,null,null,null,null,null,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new A.y("Keep missed",null,B.kJ,null,null,null,null,null,null,null,null,null)
D.fk8=new A.y("Save details for later",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fkH=new A.y("Create group",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fi2=new A.H(!0,B.b3,null,null,null,null,12,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl2=new A.y("LIGHTNING CIRCLE",null,D.fi2,null,null,null,null,null,null,null,null,null)
D.fln=new A.y("Clear missed contribution?",null,B.de,null,B.L,null,null,null,null,null,null,null)
D.fm3=new A.y("Share this code or QR so others can join from Lightning Groups.",null,B.wA,null,B.L,null,null,null,null,null,null,null)
D.fcg=new A.H(!0,B.b3,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm9=new A.y("Add a family member from the group",null,D.fcg,null,null,null,null,null,null,null,null,null)
D.fmh=new A.y("Yes, clear it",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fnB=new A.y("Nobody yet.",null,B.kK,null,null,null,null,null,null,null,null,null)
D.fnZ=new A.y("No contributions or spending yet.",null,B.kK,null,null,null,null,null,null,null,null,null)
D.foh=new A.y("Clear",null,B.U_,null,null,null,null,null,null,null,null,null)
D.foz=new A.y("No member matches that search.",null,G.a8J,null,null,null,null,null,null,null,null,null)
D.U5=new A.H(!0,B.bU,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foZ=new A.y("This removes the missed mark for this member. Only clear if they paid or you confirmed the contribution.",null,D.U5,null,B.L,null,null,null,null,null,null,null)
D.fas=new A.H(!0,B.bU,null,null,null,null,11,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpg=new A.y("Type letters or numbers in any order \u2014 code becomes 3 letters then numbers (e.g. ABC123).",null,D.fas,null,null,null,null,null,null,null,null,null)
D.fq9=new A.y("Nobody else is in this group yet.",null,B.kK,null,null,null,null,null,null,null,null,null)
D.fqj=new A.y("They will lose access to this group ledger and invite list.",null,D.U5,null,B.L,null,null,null,null,null,null,null)
D.frI=new A.y("Save details",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f7_=new A.H(!0,B.b0,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frL=new A.y("Everyone has already contributed to this round.",null,D.f7_,null,null,null,null,null,null,null,null,null)
D.frM=new A.y("Deactivate help mode",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fti=new A.y("Send my request",null,B.cD,null,null,null,null,null,null,null,null,null)
D.ftN=new A.y("Your own civic circle \u2014 no states, no case wallet.\nInvite by code or QR. Owner tracks money in & out.",null,N.DD,null,B.L,null,null,null,null,null,null,null)
D.fug=new A.y("Everyone gave. Wonderful!",null,B.kK,null,null,null,null,null,null,null,null,null)
D.fuB=new A.y("FAMILY IN THIS GROUP (optional)",null,R.mR,null,null,null,null,null,null,null,null,null)
D.aS8=new A.y("Close",null,B.kJ,null,null,null,null,null,null,null,null,null)
D.f58=new A.H(!0,B.b0,null,null,null,null,9.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new A.y("OPEN",null,D.f58,null,null,null,null,null,null,null,null,null)
D.fve=new A.y("Remove",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fvg=new A.y("Decline this request?",null,B.ki,null,null,null,null,null,null,null,null,null)
D.fwf=new A.y("Send your contribution using the details below. Call if you have questions or to confirm payment was received.",null,G.a8l,null,B.L,null,null,null,null,null,null,null)
D.fwK=new A.y("Make sure this is correct before saving to the ledger.",null,D.U5,null,B.L,null,null,null,null,null,null,null)
D.fwN=new A.y("Remove member?",null,B.de,null,B.L,null,null,null,null,null,null,null)
D.fx9=new A.y("Keep member",null,B.kJ,null,null,null,null,null,null,null,null,null)
D.fxs=new A.y("Are your mother, father, spouse, children or brothers and sisters already here? Choose them.",null,D.U5,null,null,null,null,null,null,null,null,null)
D.fxz=new A.y("Request sent",null,B.ki,null,null,null,null,null,null,null,null,null)
D.fzy=new A.y("Go back",null,B.kJ,null,null,null,null,null,null,null,null,null)
D.fAt=new A.y("Scan group QR",null,null,null,null,null,null,null,null,null,null,null)
D.fAT=new A.y("Tap who put money in \u2014 people who joined this group.",null,B.hh,null,B.L,null,null,null,null,null,null,null)
D.fBP=new A.y("Record contribution",null,B.fU,null,B.L,null,null,null,null,null,null,null)
D.fCs=new A.y("Copy receipt",null,null,null,null,null,null,null,null,null,null,null)
D.fEU=new A.y("Activate help mode",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fFD=new A.y("Confirm & save",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fGD=new A.y("Verify contribution",null,B.de,null,B.L,null,null,null,null,null,null,null)
D.fGK=new A.y("Delete group?",null,B.dg,null,null,null,null,null,null,null,null,null)
D.fH4=new A.y("Save",null,B.cD,null,null,null,null,null,null,null,null,null)
D.fb6=new A.H(!0,B.j2,null,null,null,null,14,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHt=new A.y("HELP MODE ACTIVE",null,D.fb6,null,B.L,null,null,null,null,null,null,null)
D.fHA=new A.y("No members yet \u2014 invite people with your code first.",null,G.a8J,null,null,null,null,null,null,null,null,null)
D.a9X=new C.Cx(0,"all")
D.aW_=new C.Cx(1,"contributions")
D.aW0=new C.Cx(2,"missed")
D.h6S=new C.aCL(null)})()};
(a=>{a["U775NpZEdqkNVMo9DL+uFrJsobA="]=a.current})($__dart_deferred_initializers__);