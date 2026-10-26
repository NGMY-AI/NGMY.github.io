((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,G,M,C={
h0h(d){var w=B.a.i(d),v=A.ad("^[A-Z]{3}[0-9]{1,5}$",!0,!1,!1,!1)
return v.b.test(w.toUpperCase())},
fz8(){var w=$.a4e
if(w==null)w=B.cO
return A.wo(w,x.L)},
c_O(d){var w,v,u=$.a4e
if(u==null)return null
try{w=J.fwP(u,new C.c_P(d))
return w}catch(v){return null}},
hgl(d){var w=B.a.i(d.toLowerCase()),v=C.fz8(),u=A.R(v).k("a4<1>")
v=A.z(new A.a4(v,new C.c_R(w),u),u.k("E.E"))
return v},
hgk(d){var w=B.a.i(d.toLowerCase()),v=C.fz8(),u=A.R(v).k("a4<1>")
v=A.z(new A.a4(v,new C.c_Q(w),u),u.k("E.E"))
return v},
c03(){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$c03=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=$.a4e
if(o!=null&&o.length!==0){w=1
break}n=A
m=J
w=3
return A.b(A.aw(),$async$c03)
case 3:t=n.aR(m.q(e.a,"ngmy_civic_user_groups_v1"))
if(t==null||t.length===0){w=1
break}try{s=B.Q.aC(0,t,null)
if(x.f.b(s)){r=A.Ll(A.Z(s,x.N,x.z))
o=r
q=A.a2(o).k("bf<2>")
o=A.z(new A.bf(o,q),q.k("E.E"))
B.d.aY(o,new C.c04())
$.a4e=o}}catch(l){}case 1:return A.h(u,v)}})
return A.i($async$c03,v)},
aVh(d){var w=0,v=A.j(x._),u,t,s,r,q,p,o,n
var $async$aVh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=x.N
q=x.z
w=3
return A.b(A.kt(A.D(["action","civicUserGroupsPersist","value",d],r,q),!1,!1,null),$async$aVh)
case 3:p=f
o=p==null
n=!o
if(n){t=J.a6(p)
t=J.y(t.h(p,"ok"),!0)&&x.f.b(t.h(p,"value"))}else t=!1
if(t){u=A.Z(x.f.a(J.q(p,"value")),r,q)
w=1
break}r=o?null:J.q(p,"error")
s=B.a.i(J.k(r==null?"":r))
if(n&&J.y(J.q(p,"ok"),!1)&&B.a.q(s,"already taken"))throw A.O(A.b9(s))
w=4
return A.b(A.ny("civic_user_groups_v1",d,null),$async$aVh)
case 4:u=f?d:null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVh,v)},
GB(d){return C.hgi(d)},
hgi(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$GB=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:J.aE(d,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
w=2
return A.b(A.aw(),$async$GB)
case 2:q=f
w=3
return A.b(q.an("String","ngmy_civic_user_groups_v1",B.Q.aj(d,null)),$async$GB)
case 3:s=null
u=5
w=8
return A.b(C.aVh(d),$async$GB)
case 8:s=f
u=1
w=7
break
case 5:u=4
i=t.pop()
o=A.a5(i)
if(o instanceof A.ln){r=o
if(B.a.q(r.a,"already taken"))throw i}else throw i
w=7
break
case 4:w=1
break
case 7:o=s
n=A.Ll(o==null?d:o)
if(n.a===0)throw A.O(A.b9("Could not sync this group to the cloud. Check your connection and try again."))
o=new A.dv(n,n.r,n.e)
case 9:if(!o.C()){w=10
break}w=11
return A.b(A.alZ(o.d),$async$GB)
case 11:w=9
break
case 10:m=s
if(m==null)m=d
o=A.Q(x.N,x.P)
for(l=A.a2(n),k=new A.cN(n,l.k("cN<1,2>")).gaf(0);k.C();){r=k.d
o.m(0,r.a,r.b.ad())}J.aE(m,"groups",o)
w=12
return A.b(q.an("String","ngmy_civic_user_groups_v1",B.Q.aj(m,null)),$async$GB)
case 12:o=l.k("bf<2>")
j=A.z(new A.bf(n,o),o.k("E.E"))
B.d.aY(j,new C.c_L())
$.a4e=j
return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$GB,v)},
am_(d){return C.hgm(d)},
hgm(d){var w=0,v=A.j(x.h),u,t,s,r
var $async$am_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GC(),$async$am_)
case 3:r=f
try{t=J.fwP(r,new C.c_T(d))
u=t
w=1
break}catch(q){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$am_,v)},
Ss(d){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m,l
var $async$Ss=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m=A.fjP(d)
l=m==null?B.a.i(d).toUpperCase():m
if(J.aa(l)===0){u=null
w=1
break}w=3
return A.b(A.aVf(l),$async$Ss)
case 3:s=f
if(s!=null){u=s
w=1
break}r=x.N
q=x.z
w=4
return A.b(A.kt(A.D(["action","civicUserGroupsFind","code",l],r,q),!1,!1,null),$async$Ss)
case 4:p=f
if(p!=null){o=J.df(p)
o=o.am(p,"group")&&x.f.b(o.h(p,"group"))}else o=!1
if(o){u=A.fz6(A.Z(x.f.a(J.q(p,"group")),r,q))
w=1
break}w=5
return A.b(A.GC(),$async$Ss)
case 5:t=f
try{r=J.fwP(t,new C.c_U(l))
u=r
w=1
break}catch(k){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ss,v)},
aVk(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$aVk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.GC(),$async$aVk)
case 3:s=r.dF(f,new C.c_Y(t))
s=A.z(s,s.$ti.k("E.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVk,v)},
c01(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c01=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.GC(),$async$c01)
case 3:s=r.dF(f,new C.c02(t))
s=A.z(s,s.$ti.k("E.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c01,v)},
c_V(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c_V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.GC(),$async$c_V)
case 3:s=r.dF(f,new C.c_W(t))
s=A.z(s,s.$ti.k("E.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c_V,v)},
a4f(d,e,f){var w=0,v=A.j(x.L),u,t,s,r,q,p,o,n,m,l,k
var $async$a4f=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:k=B.a.i(d).toUpperCase()
if(!C.h0h(k))throw A.O(A.dD("Group code must be 3 letters + 1\u20135 numbers (e.g. ABC123).",null))
w=3
return A.b(A.GA(),$async$a4f)
case 3:t=h
s=A.Ll(t)
r=A.a2(s)
if(new A.bf(s,r.k("bf<2>")).bd(0,new C.c_S(k)))throw A.O(A.b9(y.d))
w=4
return A.b(C.Ss(k),$async$a4f)
case 4:if(h!=null)throw A.O(A.b9(y.d))
q=Date.now()
p=B.cA.aG(1048576)
o=B.a.i(e.toLowerCase())
n=B.a.i(f)
if(n.length===0)n="Owner"
m=A.fOJ(new A.N(Date.now(),0,!1).a4(),null,"",null,"",!1,"","","","cug_"+q+"_"+p,k,null,null,null,k,null,o,0,n)
n=m.a
s.m(0,n,m)
o=A.Q(x.N,x.P)
for(r=new A.cN(s,r.k("cN<1,2>")).gaf(0);r.C();){l=r.d
o.m(0,l.a,l.b.ad())}J.aE(t,"groups",o)
w=5
return A.b(C.GB(t),$async$a4f)
case 5:r=C.c_O(n)
w=6
return A.b(A.alZ(r==null?m:r),$async$a4f)
case 6:r=C.c_O(n)
u=r==null?m:r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a4f,v)},
GD(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$GD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.GA(),$async$GD)
case 2:s=f
r=A.Ll(s)
q=d.a
r.m(0,q,C.hgj(d,r.h(0,q)))
q=A.Q(x.N,x.P)
for(u=new A.cN(r,A.a2(r).k("cN<1,2>")).gaf(0);u.C();){t=u.d
q.m(0,t.a,t.b.ad())}J.aE(s,"groups",q)
w=3
return A.b(C.GB(s),$async$GD)
case 3:return A.h(null,v)}})
return A.i($async$GD,v)},
hgj(d,e){var w,v,u,t,s,r
if(e==null)return d
w=d.r
v=new A.I(w,new C.c_M(),A.R(w).k("I<1,n>")).fF(0)
for(u=e.r,t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s){r=u[s]
if(!v.q(0,r.a))B.d.H(w,r)}return d},
hgh(d){var w=$.a4e
if(w!=null)B.d.bk(w,new C.c_K(d))},
aVj(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aVj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.GA(),$async$aVj)
case 2:r=f
q=A.Ll(r)
q.W(0,d)
u=A.Q(x.N,x.P)
for(t=new A.cN(q,A.a2(q).k("cN<1,2>")).gaf(0);t.C();){s=t.d
u.m(0,s.a,s.b.ad())}J.aE(r,"groups",u)
w=3
return A.b(C.GB(r),$async$aVj)
case 3:C.hgh(d)
return A.h(null,v)}})
return A.i($async$aVj,v)},
aVl(d,e,f,g,h,i,j){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m
var $async$aVl=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:m=A.fjP(g)
if(m==null)m=B.a.i(g).toUpperCase()
if(m.length===0){u=null
w=1
break}w=3
return A.b(C.Ss(m),$async$aVl)
case 3:t=l
if(t==null){u=null
w=1
break}s=B.a.i(e.toLowerCase())
if(t.aja(s)||t.aBT(s)){u=t
w=1
break}r=t.r
B.d.bk(r,new C.c00(s))
q=B.a.i(h)
if(q.length===0)q=B.d.gI(s.split("@"))
p=new A.N(Date.now(),0,!1).a4()
o=B.a.i(i)
n=B.a.i(j)
B.d.H(r,A.fOK(B.a.i(d),s,f,p,0,q,o,new A.N(Date.now(),0,!1).a4(),n,"pending"))
w=4
return A.b(C.GD(t),$async$aVl)
case 4:n=C.c_O(t.a)
u=n==null?t:n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVl,v)},
aVi(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aVi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.am_(d),$async$aVi)
case 3:q=g
if(q==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
s=q.r
r=B.d.be(s,new C.c_N(t))
if(r<0){u=!1
w=1
break}s[r].e="active"
w=4
return A.b(C.GD(q),$async$aVi)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVi,v)},
am0(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$am0=A.e(function(i,a0){if(i===1)return A.f(a0,v)
for(;;)switch(w){case 0:w=3
return A.b(C.am_(d),$async$am0)
case 3:k=a0
if(k==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
if(k.a2r(t)){u=!1
w=1
break}s=B.a.i(f==null?"":f)
if(J.aa(s)===0)try{s=B.a.i(B.d.kU(k.r,new C.c_Z(t)).b)}catch(j){s=J.eR(t,"@")?B.d.gI(J.lA(t,"@")):t}if(J.aa(s)===0)s="Member"
q=k.r.length
B.d.bk(k.r,new C.c0_(t))
if(k.r.length===q){u=!1
w=1
break}p=k.x
o=Date.now()
n=B.cA.aG(1048576)
m=s
l=new A.N(Date.now(),0,!1).a4()
B.d.cj(p,0,new A.pk("cug_"+o+"_"+n,B.a0N,0,m,g,l,B.a.i(h.toLowerCase()),"",t,""))
w=4
return A.b(C.GD(k),$async$am0)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$am0,v)},
c_P:function c_P(d){this.a=d},
c_R:function c_R(d){this.a=d},
c_Q:function c_Q(d){this.a=d},
c04:function c04(){},
c_L:function c_L(){},
c_T:function c_T(d){this.a=d},
c_U:function c_U(d){this.a=d},
c_Y:function c_Y(d){this.a=d},
c02:function c02(d){this.a=d},
c_W:function c_W(d){this.a=d},
c_S:function c_S(d){this.a=d},
c_M:function c_M(){},
c_K:function c_K(d){this.a=d},
c00:function c00(d){this.a=d},
c_N:function c_N(d){this.a=d},
c_Z:function c_Z(d){this.a=d},
c0_:function c0_(d){this.a=d},
aK9(d,e){var w=0,v=A.j(x.H),u
var $async$aK9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fB(new A.fu(e)),$async$aK9)
case 3:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Copied "+e,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aK9,v)},
buQ(d,e,f){var w=d.x,v=A.R(w).k("a4<1>")
w=A.z(new A.a4(w,new C.eXk(B.a.i(e).toLowerCase(),B.a.i(f.toLowerCase()),d),v),v.k("E.E"))
return w},
htJ(d,e,f){return B.d.cI(C.buQ(d,e,f),0,new C.eXj())},
hwP(d,e,f){var w,v,u=C.buQ(d,e,f)
u=A.z(new A.I(u,new C.f16(),A.R(u).k("I<1,vy>")),x.W)
w=d.cGb(e,f)
B.d.v(u,new A.I(w,new C.f17(),A.R(w).k("I<1,vy>")))
if(d.y){w=d.ax
w=w.length!==0&&!d.QN(e,w)}else w=!1
if(w){w=d.ay
if(w==null)w=new A.N(Date.now(),0,!1).a4()
v=B.a.i(d.z)
u.push(new C.Ig(v.length===0?"Help round":v,!0,"",w))}B.d.aY(u,new C.f18())
return u},
bvL(d){var w=0,v=A.j(x.H),u,t,s
var $async$bvL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){w=1
break}t=A.cq("https://cash.app/$"+(B.a.a_(s,"$")?B.a.aV(s,1):s),0,null)
w=5
return A.b(A.oS(t),$async$bvL)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iG(t,B.f8,null),$async$bvL)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bvL,v)},
buM(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$buM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=A.ad("[^\\d+]",!0,!1,!1,!1)
r=A.aJ(d,s,"")
if(r.length===0){w=1
break}t=A.cq("tel:"+r,0,null)
w=5
return A.b(A.oS(t),$async$buM)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iG(t,B.f8,null),$async$buM)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$buM,v)},
h2q(d,e,f,g){C.c03()
return A.hl(d,new C.alW(f,g,e,null),!1,null,x.X)},
fTW(d,e,f,g,h,i,j){return new C.axi(f,j,g,i,h,d,e,null)},
fCq(d,e,f,g,h,i,j,k,l){return new C.bdb(k,g,d,h,j,e,f,i,l,null)},
hAH(d){var w={},v=new A.ao(B.aq,$.at())
w.a=""
return A.c1(B.K,new C.f6l(w,v),d,!0,!0,!0,null,!1,!1,x.N).f4(v.geY())},
hAJ(d,e,f,g,h,i,j,k){var w=new A.ao(B.aq,$.at())
return A.c1(B.K,new C.f6F(h,k,j,w,!0,i,g,f),d,!0,!0,!0,null,!1,!1,x.N).f4(w.geY())},
hAI(d,e,f,g,h){var w,v,u,t={},s=g===B.qA,r=$.at(),q=new A.ao(B.aq,r),p=new A.ao(B.aq,r),o=new A.ao(B.aq,r)
r=new C.f6B(s,e)
w=A.R(h).k("a4<1>")
v=A.z(new A.a4(h,new C.f6y(r),w),w.k("E.E"))
u=s&&h.length!==0&&v.length===0
t.a=v.length!==0?B.d.gI(v).b:""
t.b=!1
return A.c1(B.K,new C.f6z(t,o,h,r,s,f,u,p,q,e),d,!0,!0,!0,null,!1,!1,x.R).f4(new C.f6A(q,p,o))},
hAF(d,e,f){return A.c1(B.K,new C.f65(f,e),d,!0,!0,!1,null,!1,!1,x.y)},
hAD(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=C.buQ(f,i,e),r=B.d.cI(s,0,new C.f5Y()),q=f.a2I(i,e)
if(f.y){w=f.ax
v=w.length!==0&&!f.QN(i,w)}else v=!1
if(f.ax.length===0)u=D.arG
else{w=A.R(s).k("a4<1>")
u=A.z(new A.a4(s,new C.f5Z(f),w),w.k("E.E"))}if(!v)t=q>0&&r<=0
else t=!0
return A.c1(B.K,new C.f6_(f,i,e,l,h,k,s,r,q,v,u,t,g,j),d,!0,!0,!0,null,!1,!1,x.H)},
hAy(d,e){return A.c1(B.K,new C.f5z(e),d,!0,!0,!1,null,!1,!1,x.y)},
hAz(d,e,f,g){return A.c1(B.K,new C.f5C(g,e,f),d,!0,!0,!1,null,!1,!1,x.y)},
fF0(d,e){var w=null
return new A.B(B.wj,A.A(A.a([A.d(d,w,w,w,w,w,w,B.BE,w,w,w),B.b6,new A.dk(1,B.cj,A.d(e,w,w,w,w,w,w,B.mT,B.dK,w,w),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
hAB(d,e,f,g){var w,v,u,t,s,r
if(!f)return C.hAA(d,e,g)
w=e.z
v=$.at()
u=new A.ao(new A.bb(w,B.aZ,B.aL),v)
w=e.Q
t=new A.ao(new A.bb(w,B.aZ,B.aL),v)
w=e.as
s=new A.ao(new A.bb(w,B.aZ,B.aL),v)
w=e.at
r=new A.ao(new A.bb(w,B.aZ,B.aL),v)
return A.c1(B.K,new C.f5P(g,e.y,u,t,s,r,new C.f5O(e,u,t,s,r),e),d,!0,!0,!0,null,!1,!1,x.L).f4(new C.f5Q(u,t,s,r))},
hAA(d,e,f){return A.c1(B.K,new C.f5H(f,e),d,!0,!0,!0,null,!1,!1,x.L)},
fWN(d,e){return A.c4(e,new C.eZf(e,d),null)},
eZd(d,e,f,g,h,i){var w,v=null,u=A.m(18),t=A.G(B.br.j(0.35),B.r,1),s=A.V(e,B.br,v,v,v,20),r=A.d(f,v,v,v,v,v,v,A.l(v,v,B.br.j(0.85),v,v,v,v,v,v,v,v,10,v,v,B.I,v,v,!0,v,1.1,v,v,v,v,v,v),v,v,v),q=g==null,p=!q,o=p?B.iC:B.c,n=p?B.mb:v,m=x.p
n=A.a([r,B.au,A.d(i,v,v,v,v,v,v,A.l(v,v,o,v,n,B.br.j(0.6),v,v,v,v,v,14,v,v,B.O,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v)],m)
if(p&&h!=null)B.d.v(n,A.a([B.au,A.d("Tap to "+h,v,v,v,v,v,v,A.l(v,v,B.br.j(0.75),v,v,v,v,v,v,v,v,10,v,v,B.a1,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],m))
w=A.p(v,A.A(A.a([s,B.aw,A.C(A.u(n,B.F,v,B.e,B.j,0,B.p),1),A.aF(v,v,v,v,A.V(B.fx,B.br.j(0.9),v,v,v,18),v,v,v,new C.eZe(i,d,f),v,v,v,v,"Copy",v)],m),B.F,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(B.fa,v,t,u,v,v,B.n),v,v,v,B.d6,B.eF,v,v,v)
if(q)return w
return A.aD(!1,B.X,!0,v,A.aH(!1,A.m(18),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)},
aL0(d,e,f){var w=null,v=B.bd.j(0.16),u=A.G(B.bd.j(0.55),B.r,1),t=A.a([new A.a9(0,B.G,B.bd.j(0.35),B.J,14)],x.V),s=x.p
return A.A(A.a([A.p(w,A.V(d,B.bd,w,w,w,w),B.h,w,w,new A.o(v,w,u,w,t,w,B.a6),w,46,w,w,w,w,w,46),B.ba,A.C(A.u(A.a([A.d(f,w,w,w,w,w,w,B.l7,w,w,w),B.au,A.d(e,w,w,w,w,w,w,G.aJp,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w)},
IP(d){var w=null,v=B.c.j(0.05)
return A.bn(w,w,w,B.bC,w,w,w,w,!0,new A.b2(4,A.m(14),new A.ay(B.bd.j(0.25),1,B.r,-1)),w,w,w,w,w,v,!0,w,w,w,w,new A.b2(4,A.m(14),B.a6r),w,w,w,w,w,w,w,w,B.kd,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
hA1(d,e){var w,v,u,t,s,r,q=A.a([],x.x)
for(w=d.x,v=w.length,u=e==="other",t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.b===B.qA){r=s.w
r=u?r.length===0:r===e}else r=!1
if(r)q.push(s)}return q},
hA2(d,e,f){var w,v,u,t
for(w=f.length,v=0;v<w;++v){u=B.a.i(f[v].y)
if(u.length!==0)return u}u=e==="other"
if(!u&&e===d.ax&&B.a.i(d.z).length!==0)return B.a.i(d.z)
if(u)return"Other contributions"
if(w!==0){t=B.d.gai(f).f.bP()
return"Contribution round \xb7 "+A.bB(t)+"/"+A.bL(t)+"/"+A.bv(t)}return"Contribution round"},
fYy(d){var w,v=d.toLowerCase()
A:{if("mother"===v){w="Mother"
break A}if("father"===v){w="Father"
break A}if("spouse"===v){w="Spouse"
break A}if("child"===v){w="Child"
break A}if("brother"===v){w="Brother"
break A}if("sister"===v){w="Sister"
break A}w=d.length===0?"Family":d
break A}return w},
hAG(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l=x.S,k=A.a([new A.En(e.c,e.d)],l),j=e.gE2()
B.d.v(k,new A.I(j,new C.f67(),A.R(j).k("I<1,+email,name(n,n)>")))
w=A.a([],x.Z)
v=A.a([],l)
for(l=k.length,u=0;u<k.length;k.length===l||(0,A.J)(k),++u){t=k[u]
j=h.length
r=t.b
q=t.a
p=0
for(;;){if(!(p<j)){s=null
break}o=h[p]
if(B.a.i(o.d).toLowerCase()!==B.a.i(r).toLowerCase()){n=o.x
n=n.length!==0&&n===B.a.i(q.toLowerCase())}else n=!0
if(n){s=o
break}++p}if(s!=null)w.push(new A.T(t,s))
else v.push(t)}for(l=h.length,u=0;u<h.length;h.length===l||(0,A.J)(h),++u){o=h[u]
if(!B.d.bd(k,new C.f68(o)))w.push(new A.T(new A.En(o.x,o.d),o))}m=B.d.cI(h,0,new C.f69())
l=k.length
return A.c1(B.K,new C.f6a(g,w,k,m,i,l===0?0:B.k.D(w.length/l,0,1),e,v),d,!0,!0,!0,null,!1,!1,x.H)},
hAE(d,e,f){var w,v,u,t,s,r,q,p=B.a.i(f.y)
if(!(p.length!==0))p=f.w===e.ax&&B.a.i(e.z).length!==0?B.a.i(e.z):"Group contribution"
w=e.e
v=A.ad("[^0-9]",!0,!1,!1,!1)
u="LG-"+w+"-"+B.a.al(B.a.aU(A.aJ(f.a,v,""),6,"0"),0,6)
t=f.f.bP()
s=""+A.bB(t)+"/"+A.bL(t)+"/"+A.bv(t)+" "+B.a.aU(B.o.u(A.dn(t)),2,"0")+":"+B.a.aU(B.o.u(A.hn(t)),2,"0")
v=B.k.ab(f.c,2)
r=f.e
r=r.length!==0?"\nNote: "+r:""
q=f.r
if(q.length===0)q=e.c
return A.c1(B.K,new C.f61(u,new C.f62(),f,p,s,e,"RECEIPT "+u+"\nGroup: "+w+" ("+e.d+")\nFrom: "+f.d+"\nFor: "+p+"\nAmount: $"+v+"\nDate: "+s+r+"\nRecorded by: "+q),d,!0,!0,!0,null,!1,!1,x.H)},
hAC(d,e,f,g){return A.c1(B.K,new C.f5R(e,f,g),d,!0,!0,!0,null,!1,!1,x.n)},
eXk:function eXk(d,e,f){this.a=d
this.b=e
this.c=f},
eXj:function eXj(){},
B8:function B8(d,e){this.a=d
this.b=e},
vy:function vy(){},
NC:function NC(d,e){this.b=d
this.a=e},
Ig:function Ig(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f16:function f16(){},
f17:function f17(){},
f18:function f18(){},
alW:function alW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azH:function azH(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=e
_.y=null
_.z=f
_.cO$=g
_.aX$=h
_.c=_.a=null},
dBV:function dBV(d){this.a=d},
dBL:function dBL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dBK:function dBK(){},
dBJ:function dBJ(d){this.a=d},
dBP:function dBP(d){this.a=d},
dBR:function dBR(d){this.a=d},
dBQ:function dBQ(d,e){this.a=d
this.b=e},
dBS:function dBS(d,e){this.a=d
this.b=e},
dBO:function dBO(d,e,f){this.a=d
this.b=e
this.c=f},
dBT:function dBT(d){this.a=d},
dBU:function dBU(d,e){this.a=d
this.b=e},
dBN:function dBN(d,e,f){this.a=d
this.b=e
this.c=f},
dBM:function dBM(d,e,f){this.a=d
this.b=e
this.c=f},
anx:function anx(d,e,f){this.c=d
this.d=e
this.a=f},
bfW:function bfW(d,e,f,g){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=!1
_.x=""
_.cO$=f
_.aX$=g
_.c=_.a=null},
dY8:function dY8(d,e){this.a=d
this.b=e},
dY7:function dY7(d){this.a=d},
dY5:function dY5(){},
dY6:function dY6(){},
dY4:function dY4(d){this.a=d},
dY2:function dY2(d){this.a=d},
dY3:function dY3(d){this.a=d},
dYd:function dYd(d){this.a=d},
dYe:function dYe(d){this.a=d},
dYf:function dYf(d){this.a=d},
dYc:function dYc(d){this.a=d},
dYg:function dYg(d){this.a=d},
dYb:function dYb(d,e){this.a=d
this.b=e},
dYh:function dYh(d,e){this.a=d
this.b=e},
dY9:function dY9(d,e){this.a=d
this.b=e},
dYa:function dYa(d,e){this.a=d
this.b=e},
a92:function a92(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
B4:function B4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
d4T:function d4T(d){this.a=d},
axi:function axi(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
d58:function d58(d){this.a=d},
aap:function aap(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
Gy:function Gy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azE:function azE(d,e){var _=this
_.d=null
_.f=_.e=$
_.r=null
_.w=0
_.cO$=d
_.aX$=e
_.c=_.a=null},
dBH:function dBH(d){this.a=d},
dBv:function dBv(d,e){this.a=d
this.b=e},
dBj:function dBj(){},
dBt:function dBt(d){this.a=d},
dBr:function dBr(d){this.a=d},
dBs:function dBs(d){this.a=d},
dBw:function dBw(d,e){this.a=d
this.b=e},
dBx:function dBx(d,e){this.a=d
this.b=e},
dBy:function dBy(){},
dBz:function dBz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dBu:function dBu(d,e){this.a=d
this.b=e},
dBB:function dBB(d){this.a=d},
dBC:function dBC(d,e){this.a=d
this.b=e},
dBD:function dBD(d){this.a=d},
dBE:function dBE(d){this.a=d},
dBF:function dBF(d){this.a=d},
dBG:function dBG(d,e){this.a=d
this.b=e},
dBA:function dBA(d,e){this.a=d
this.b=e},
dBm:function dBm(d,e){this.a=d
this.b=e},
dBn:function dBn(d,e){this.a=d
this.b=e},
dBl:function dBl(d,e){this.a=d
this.b=e},
dBk:function dBk(d,e){this.a=d
this.b=e},
dBo:function dBo(d,e){this.a=d
this.b=e},
dBp:function dBp(d,e){this.a=d
this.b=e},
dBq:function dBq(){},
azF:function azF(d){this.a=d},
azG:function azG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dBI:function dBI(d){this.a=d},
bdb:function bdb(d,e,f,g,h,i,j,k,l,m){var _=this
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
bbC:function bbC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
d5q:function d5q(d){this.a=d},
d5p:function d5p(d,e){this.a=d
this.b=e},
bda:function bda(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d90:function d90(d){this.a=d},
bd7:function bd7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d8Z:function d8Z(d){this.a=d},
bd9:function bd9(d,e,f){this.c=d
this.d=e
this.a=f},
d9_:function d9_(d){this.a=d},
NX:function NX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
d8Y:function d8Y(d,e){this.a=d
this.b=e},
bd8:function bd8(d,e,f){this.a=d
this.b=e
this.c=f},
bfA:function bfA(){},
f6l:function f6l(d,e){this.a=d
this.b=e},
f6k:function f6k(d,e){this.a=d
this.b=e},
f6h:function f6h(d,e){this.a=d
this.b=e},
f6g:function f6g(d){this.a=d},
f6i:function f6i(d){this.a=d},
f6j:function f6j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6f:function f6f(d){this.a=d},
f6F:function f6F(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f6C:function f6C(d){this.a=d},
f6D:function f6D(d){this.a=d},
f6E:function f6E(d,e){this.a=d
this.b=e},
f6B:function f6B(d,e){this.a=d
this.b=e},
f6y:function f6y(d){this.a=d},
f6z:function f6z(d,e,f,g,h,i,j,k,l,m){var _=this
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
f6x:function f6x(d,e,f,g,h,i,j,k,l,m){var _=this
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
f6p:function f6p(d){this.a=d},
f6q:function f6q(d){this.a=d},
f6r:function f6r(d){this.a=d},
f6s:function f6s(d,e){this.a=d
this.b=e},
f6o:function f6o(d){this.a=d},
f6t:function f6t(d){this.a=d},
f6n:function f6n(){},
f6u:function f6u(d,e,f){this.a=d
this.b=e
this.c=f},
f6m:function f6m(d,e){this.a=d
this.b=e},
f6v:function f6v(d){this.a=d},
f6w:function f6w(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f6A:function f6A(d,e,f){this.a=d
this.b=e
this.c=f},
f65:function f65(d,e){this.a=d
this.b=e},
f63:function f63(d){this.a=d},
f64:function f64(d){this.a=d},
f5Y:function f5Y(){},
f5Z:function f5Z(d){this.a=d},
f6_:function f6_(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
f5X:function f5X(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
f5W:function f5W(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
f5V:function f5V(d,e){this.a=d
this.b=e},
f5S:function f5S(d,e){this.a=d
this.b=e},
f5U:function f5U(d,e,f){this.a=d
this.b=e
this.c=f},
f5T:function f5T(){},
be3:function be3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
df3:function df3(){},
df4:function df4(d){this.a=d},
df5:function df5(d,e){this.a=d
this.b=e},
df6:function df6(){},
df7:function df7(d){this.a=d},
df8:function df8(d,e){this.a=d
this.b=e},
df9:function df9(d){this.a=d},
df2:function df2(d,e,f){this.a=d
this.b=e
this.c=f},
f5z:function f5z(d){this.a=d},
f5x:function f5x(d){this.a=d},
f5y:function f5y(d){this.a=d},
f5C:function f5C(d,e,f){this.a=d
this.b=e
this.c=f},
f5A:function f5A(d){this.a=d},
f5B:function f5B(d){this.a=d},
f5O:function f5O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5P:function f5P(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f5N:function f5N(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
f5I:function f5I(d,e,f){this.a=d
this.b=e
this.c=f},
f5J:function f5J(d,e,f){this.a=d
this.b=e
this.c=f},
f5K:function f5K(d,e,f){this.a=d
this.b=e
this.c=f},
f5L:function f5L(d,e,f){this.a=d
this.b=e
this.c=f},
f5M:function f5M(d){this.a=d},
f5Q:function f5Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5H:function f5H(d,e){this.a=d
this.b=e},
f5G:function f5G(d,e,f){this.a=d
this.b=e
this.c=f},
f5D:function f5D(d){this.a=d},
f5E:function f5E(d){this.a=d},
f5F:function f5F(d){this.a=d},
eZf:function eZf(d,e){this.a=d
this.b=e},
eZe:function eZe(d,e,f){this.a=d
this.b=e
this.c=f},
o3:function o3(d,e,f){this.c=d
this.d=e
this.a=f},
f67:function f67(){},
f68:function f68(d){this.a=d},
f69:function f69(){},
f6a:function f6a(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f66:function f66(d,e,f){this.a=d
this.b=e
this.c=f},
f62:function f62(){},
f61:function f61(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f60:function f60(d,e){this.a=d
this.b=e},
bcE:function bcE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5R:function f5R(d,e,f){this.a=d
this.b=e
this.c=f},
axT:function axT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axU:function axU(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=""
_.w=null
_.x=f
_.c=_.a=null},
d7A:function d7A(){},
d7B:function d7B(d){this.a=d},
d7C:function d7C(){},
d7D:function d7D(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7F:function d7F(d){this.a=d},
d7G:function d7G(d){this.a=d},
d7S:function d7S(){},
d7M:function d7M(d){this.a=d},
d7L:function d7L(d,e){this.a=d
this.b=e},
d7N:function d7N(d,e){this.a=d
this.b=e},
d7K:function d7K(d,e,f){this.a=d
this.b=e
this.c=f},
d7O:function d7O(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e,f){this.a=d
this.b=e
this.c=f},
d7P:function d7P(d,e){this.a=d
this.b=e},
d7I:function d7I(d,e){this.a=d
this.b=e},
d7Q:function d7Q(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7R:function d7R(d){this.a=d},
aHY:function aHY(){},
aHZ:function aHZ(){},
aIx:function aIx(){},
fz7(d,e){var w=0,v=A.j(x.y),u
var $async$fz7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}u=A.kZ(d,B.B9)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fz7,v)},
c_H(d,e,f){var w=0,v=A.j(x.y),u
var $async$c_H=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}w=3
return A.b(A.aox(d,B.xS,e),$async$c_H)
case 3:if(h){u=!0
w=1
break}u=A.kZ(d,B.xS)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c_H,v)},
aVe(d,e){var w=0,v=A.j(x.y),u,t
var $async$aVe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}t=J
w=3
return A.b(C.aVk(d),$async$aVe)
case 3:if(t.aa(g)<1){u=!0
w=1
break}u=C.fz7(d,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVe,v)},
alY(d,e,f){var w=0,v=A.j(x.y),u,t
var $async$alY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aVe(e,f),$async$alY)
case 3:if(h){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.kD(!1,d,e,f,"Your free group slot is used. Subscribe to create another lightning group ("+A.c8N(B.B9)+" / "+A.c8I(B.B9)+").",B.B9,"Create another group"),$async$alY)
case 6:t=h
if(t){w=4
break}else h=t
w=5
break
case 4:w=7
return A.b(C.aVe(e,f),$async$alY)
case 7:case 5:u=h
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$alY,v)},
aVd(d,e,f,g){var w=0,v=A.j(x.y),u
var $async$aVd=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}if(d<100){u=!0
w=1
break}u=C.c_H(g,e,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aVd,v)},
alX(d,e,f,g,h){var w=0,v=A.j(x.y),u,t
var $async$alX=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aVd(e,f,g,h),$async$alX)
case 3:if(j){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.yr(d,h,g,"This group is at the free 100-member limit. Unlock more seats for "+A.c8N(B.xS)+" / "+A.c8I(B.xS)+".",B.xS,f,"Unlock 100+ members"),$async$alX)
case 6:t=j
if(t){w=4
break}else j=t
w=5
break
case 4:w=7
return A.b(C.aVd(e,f,g,h),$async$alX)
case 7:case 5:u=j
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$alX,v)}},D,E,F,N,K,O,P,H,Q,R,I
J=c[1]
A=c[0]
B=c[2]
L=c[79]
G=c[72]
M=c[83]
C=a.updateHolder(c[8],C)
D=c[71]
E=c[80]
F=c[75]
N=c[81]
K=c[77]
O=c[76]
P=c[78]
H=c[73]
Q=c[84]
R=c[82]
I=c[74]
C.B8.prototype={
a3(){return"_MemberHistoryFilter."+this.b}}
C.vy.prototype={}
C.NC.prototype={}
C.Ig.prototype={}
C.alW.prototype={
S(){var w=x.D
return new C.azH(A.a([],w),A.a([],w),A.a([],w),null,null)},
gdQ(){return this.c}}
C.azH.prototype={
Z(){var w,v=this,u=null
v.a0()
v.w=C.hgl(v.a.c)
v.x=C.hgk(v.a.c)
v.y=A.dE(B.hq,new C.dBV(v))
w=A.bh(u,B.wd,u,1,u,v)
w.cn(0)
v.d!==$&&A.aO()
v.d=w
w=A.bh(u,B.oS,u,1,u,v)
w.f2(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bh(u,B.kr,u,1,u,v)
w.cF(0)
v.f!==$&&A.aO()
v.f=w
w=A.bh(u,B.id,u,1,u,v)
w.cn(0)
v.r!==$&&A.aO()
v.r=w
v.hK()},
p(){var w=this,v=w.y
if(v!=null)v.a9(0)
v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
v=w.r
v===$&&A.c()
v.p()
w.boL()},
hK(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$hK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aVk(t.a.c),$async$hK)
case 3:s=e
w=4
return A.b(C.c_V(t.a.c),$async$hK)
case 4:r=e
w=5
return A.b(C.c01(t.a.c),$async$hK)
case 5:q=e
if(t.c==null){w=1
break}t.n(new C.dBL(t,s,r,q))
case 1:return A.h(u,v)}})
return A.i($async$hK,v)},
yW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$yW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
m=r.a
w=3
return A.b(C.alY(j,m.c,m.e),$async$yW)
case 3:if(!e||r.c==null){w=1
break}j=r.c
j.toString
w=4
return A.b(C.hAH(j),$async$yW)
case 4:q=e
if(q==null||r.c==null){w=1
break}t=6
j=r.a
w=9
return A.b(C.a4f(q,j.c,j.d),$async$yW)
case 9:p=e
w=10
return A.b(r.hK(),$async$yW)
case 10:j=r.c
if(j==null){w=1
break}m=p.a
l=r.a
w=11
return A.b(A.hl(j,new C.Gy(m,l.c,l.d,l.e,null),!1,null,x.X),$async$yW)
case 11:w=12
return A.b(r.hK(),$async$yW)
case 12:t=2
w=8
break
case 6:t=5
i=s.pop()
j=A.a5(i)
if(j instanceof A.ln){o=j
j=r.c
if(j==null){w=1
break}j.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}else{n=j
j=r.c
if(j==null){w=1
break}j.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$yW,v)},
W7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hAJ(r,!0,"Join group","ABC12345",B.x8,1.6,"Enter the group code from the owner (3 letters + numbers).","Join with code"),$async$W7)
case 3:s=e
if(s==null||t.c==null){w=1
break}w=4
return A.b(t.rO(s),$async$W7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W7,v)},
rO(d){return this.bSG(d)},
bSG(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$rO=A.e(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(C.Ss(d),$async$rO)
case 3:g=a0
if(g==null){m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(D.ekr)
w=1
break}w=g.aja(r.a.c)?4:5
break
case 4:m=r.c
if(m==null){w=1
break}l=g.a
k=r.a
w=6
return A.b(A.hl(m,new C.Gy(l,k.c,k.d,k.e,null),!1,null,x.X),$async$rO)
case 6:w=7
return A.b(r.hK(),$async$rO)
case 7:w=1
break
case 5:if(g.aBT(r.a.c)){m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(D.eh0)
w=1
break}m=g.c
l=g.a
w=8
return A.b(C.aVd(g.gvQ(),l,!1,m),$async$rO)
case 8:if(!a0){m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(D.eio)
w=1
break}m=r.c
m.toString
l=r.a
w=9
return A.b(C.hAC(m,g,l.d,l.c),$async$rO)
case 9:q=a0
if(q==null||r.c==null){w=1
break}t=11
m=g.e
l=r.a.c
k=q.a
j=q.b
i=q.c
w=14
return A.b(C.aVl(q.d,l,q.e,m,k,j,i),$async$rO)
case 14:p=a0
if(p==null){m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(D.ekz)
w=1
break}t=2
w=13
break
case 11:t=10
f=s.pop()
m=A.a5(f)
if(m instanceof A.ln){o=m
m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{n=m
m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not send your request. "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=13
break
case 10:w=2
break
case 13:if(r.c==null){w=1
break}w=15
return A.b(r.hK(),$async$rO)
case 15:m=r.c
if(m==null){w=1
break}w=16
return A.b(A.cb(null,null,!0,null,new C.dBK(),m,null,!0,!0,x.H),$async$rO)
case 16:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$rO,v)},
X3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.hl(r,D.f4a,!1,null,x.N),$async$X3)
case 3:s=e
if(s==null||s.length===0||t.c==null){w=1
break}w=4
return A.b(t.rO(s),$async$X3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X3,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
m===$&&A.c()
w=o.e
w===$&&A.c()
v=o.f
v===$&&A.c()
u=A.c4(new A.h3(A.a([m,w,v],x.U)),new C.dBP(o),n)
t=o.a.e?A.aF(n,n,n,n,D.btN,n,n,n,new C.dBQ(o,d),n,n,n,n,"All groups (admin)",n):n
t=C.fCq(n,!1,n,new C.dBR(d),n,n,!1,"LIGHTNING GROUPS",t)
s=x.p
m=A.a([new C.bd7(m,w,v,o.gbBR(),o.gbSF(),o.gbYz(),n),B.dW,o.avP("YOU OWN")],s)
if(J.ch(o.w))m.push(new A.B(B.e3,A.d("Create your free group \u2014 one free owned group.",n,n,n,n,n,n,G.GY,n,n,n),n))
else{r=J.fJg(o.w)
B.d.v(m,r.gdH(r).di(0,new C.dBS(o,d),x.l))}if(J.ct(o.z)){r=A.a([B.bu,o.avP("WAITING FOR APPROVAL")],s)
for(q=J.aW(o.z);q.C();){p=q.gT(q)
r.push(new C.axi(p,"Request sent \xb7 "+p.d+" has to approve you",new C.dBT(d),w,v,0,"...",n))}B.d.v(m,r)}m.push(B.bu)
m.push(o.avP("YOU JOINED"))
if(J.ch(o.x))m.push(new A.B(B.e3,A.d("Join with a code or QR from a friend.",n,n,n,n,n,n,G.GY,n,n,n),n))
else{w=J.fJg(o.x)
B.d.v(m,w.gdH(w).di(0,new C.dBU(o,d),x.l))}return A.xG(A.cf(n,B.bV,new A.am(B.V,n,B.a9,B.q,A.a([u,A.br(!0,A.u(A.a([new A.B(H.JI,t,n),A.C(A.cL(m,n,D.bgl,n,n,B.ag,!1),1)],s),B.af,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],s),n),n,!1,!1,n,n),B.Qq,x.I)},
b0w(d,e){var w=this.r
w===$&&A.c()
return A.c4(w,new C.dBM(this,d,e),null)},
avP(d){var w=null
return new A.B(B.cK,A.d(d,w,w,w,w,w,w,A.l(w,w,B.bd.j(0.85),w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w),w)}}
C.anx.prototype={
S(){return new C.bfW(new A.ao(B.aq,$.at()),A.a([],x.D),null,null)},
gdQ(){return this.c}}
C.bfW.prototype={
Z(){var w,v=this,u=null
v.a0()
v.r=A.bi(C.fz8(),!0,x.L)
w=A.bh(u,B.oS,u,1,u,v)
w.f2(0,!0)
v.d!==$&&A.aO()
v.d=w
w=A.bh(u,B.kr,u,1,u,v)
w.cF(0)
v.e!==$&&A.aO()
v.e=w
v.hK()},
p(){var w=this,v=w.d
v===$&&A.c()
v.p()
v=w.e
v===$&&A.c()
v.p()
v=w.f
v.R$=$.at()
v.O$=0
w.bpl()},
hK(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GC(),$async$hK)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dY8(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hK,v)},
gbHD(){var w,v=B.a.i(this.x).toLowerCase()
if(v.length===0)return this.r
w=J.dF(this.r,new C.dY7(v))
w=A.z(w,w.$ti.k("E.E"))
return w},
Yc(d){return this.c4U(d)},
c4U(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Yc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return A.b(A.hl(s,new C.Gy(d.a,t.c,t.d,!0,null),!1,null,x.X),$async$Yc)
case 2:w=3
return A.b(u.hK(),$async$Yc)
case 3:return A.h(null,v)}})
return A.i($async$Yc,v)},
Mk(d){return this.bDL(d)},
bDL(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dY4(d),s,null,!0,!0,x.y),$async$Mk)
case 3:if(f!==!0){w=1
break}w=4
return A.b(C.aVj(d.a),$async$Mk)
case 4:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Deleted "+d.e,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=5
return A.b(t.hK(),$async$Mk)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mk,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.gbHD(),n=q.d
n===$&&A.c()
w=q.e
w===$&&A.c()
w=A.c4(new A.h3(A.a([n,w],x.U)),new C.dYd(q),p)
n=q.w
v=n?"Close search":"Search groups"
u=x.p
v=A.a([new A.B(H.JI,C.fCq(p,!1,p,new C.dYe(d),p,p,!1,"ALL GROUPS",A.aF(p,p,p,p,A.V(n?B.cu:B.fy,B.eo,p,p,p,20),p,p,p,new C.dYf(q),p,p,p,p,v,p)),p)],u)
if(q.w)v.push(new A.B(B.wp,A.aK(p,B.U,!0,p,!0,B.q,p,A.aL(),q.f,B.bd,p,p,p,p,2,A.bn(p,new A.b2(4,A.m(14),new A.ay(B.bd.j(0.3),1,B.r,-1)),p,B.ei,p,p,p,p,!0,new A.b2(4,A.m(14),new A.ay(B.bd.j(0.25),1,B.r,-1)),p,p,p,p,p,B.fa,!0,p,p,p,p,new A.b2(4,A.m(14),D.aPC),p,p,p,p,p,p,p,p,B.kd,"Search name, code, owner\u2026",p,p,p,p,p,!0,p,p,p,!0,!0,!1,p,D.bx2,p,p,p,p,p,p,p,p,p,p,p,p),B.z,!0,p,!0,p,!1,p,B.ad,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.dYg(q),p,p,p,!1,p,p,!1,p,!0,p,B.a8,p,p,p,p,p,p,p,p,p,p,p,B.di,!0,B.a5,p,B.am,p,p,p,p),p))
n=J.a6(o)
t=n.gG(o)
s=n.gG(o)===1?"":"s"
r=B.a.i(q.x).length===0?"":" matching"
v.push(new A.B(D.bgq,A.d(""+t+" group"+s+r,p,p,p,p,p,p,A.l(p,p,B.bd.j(0.85),p,p,p,p,p,p,p,p,11,p,p,B.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p),p))
v.push(A.C(n.gah(o)?D.aXd:A.jT(!0,p,p,new C.dYh(q,o),n.gG(o),p,D.bg1,p,p,!1,!1),1))
return A.xG(A.cf(p,B.bV,new A.am(B.V,p,B.a9,B.q,A.a([w,A.br(!0,A.u(v,B.af,p,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],u),p),p,!1,!1,p,p),B.Qq,x.I)}}
C.a92.prototype={
B(d){var w=null,v=A.m(16),u=A.m(16),t=A.G(B.bd.j(0.28),B.r,1),s=this.c,r=x.p
return new A.B(B.d6,A.aD(!1,B.X,!0,w,A.aH(!1,v,!0,A.er(A.A(A.a([A.p(w,D.bsU,B.h,w,w,new A.o(B.bd.j(0.12),w,A.G(B.bd.j(0.5),B.r,1),w,w,w,B.a6),w,42,w,w,w,w,w,42),B.ba,A.C(A.u(A.a([A.d(s.e,w,w,w,w,w,w,D.exw,w,w,w),B.bw,A.d("Owner "+s.d+" \xb7 "+s.gvQ()+" people",w,1,B.Z,w,w,w,B.i0,w,w,w),A.d(s.c,w,1,B.Z,w,w,w,I.H_,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1),A.aF(w,w,w,w,D.buU,w,w,w,this.e,w,w,w,w,"Delete group",w),F.ahZ],r),B.m,w,B.e,B.j,0,w,w),w,new A.o(B.fa,w,t,u,w,w,B.n),w,D.bfc,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),w)}}
C.B4.prototype={
B(d){return A.c4(this.e,new C.d4T(this),null)}}
C.axi.prototype={
B(d){return new A.B(B.e3,A.c4(new A.h3(A.a([this.f,this.r],x.U)),new C.d58(this),null),null)}}
C.aap.prototype={
a5(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=0+a7,b0=0+a8,b1=$.a0(),b2=A.U()
b2.r=B.bV.gt(0)
b3.bp(new A.af(0,0,a9,b0),b2)
w=A.U()
b2=a7*0.5
v=this.c
w.saw(A.aRr(new A.v(b2,a8*0.48),a7*0.38,A.a([B.bd.j(0.07+v*0.06),B.K],x.O),a6,B.w,a6,a6,0))
b3.bp(new A.af(0,0,a9,b0),w)
u=a8*0.44
t=a7*0.28
b0=this.d*3.141592653589793
s=b0*2
for(a9=3+v*2,r=0.35+v*0.25,q=b3.a,p=8+v*4,o=0;o<3;++o){n=s+o*3.141592653589793*2/3
m=b2+Math.cos(n)*t
l=u+Math.sin(n)*t*0.55
k=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
k.r=B.bd.j(r).gt(0)
j=k.L()
q.drawCircle(m,l,a9,j)
j.delete()
k=new A.ax(B.a0,B.Y,B.a3,B.a4,B.a2)
k.r=B.bd.j(0.12).gt(0)
k.z=B.mM
j=k.L()
q.drawCircle(m,l,p,j)
j.delete()}i=A.U()
i.r=B.eo.j(0.18+v*0.12).gt(0)
i.b=B.aj
i.c=2
i.z=B.jg
a9=x.v
r=A.a([],a9)
h=new A.b_(b1.r,B.av,a6,a6,r)
for(b1=s*1.6,o=0;o<=48;++o){g=o/48*3.141592653589793*1.4+b1
f=b2+Math.cos(g)*t*0.92
e=u+Math.sin(g)*t*0.42
if(o===0){p=new A.bj(f,e)
r.push(p)
k=h.f
if(k!=null)p.bH(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}else{p=new A.av(f,e)
r.push(p)
k=h.f
if(k!=null)p.bH(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}}b3.b4(h,i)
d=new A.b_($.a0().r,B.av,a6,a6,A.a([],a9))
d.N(new A.bj(b2+14,u-52))
b1=u-4
d.N(new A.av(b2-16,b1))
d.N(new A.av(b2+2,b1))
d.N(new A.av(b2-20,u+54))
a0=A.U()
a0.r=B.bd.j(0.1+v*0.08).gt(0)
a0.b=B.aj
a0.c=10
a0.z=B.FG
a1=A.U()
b2=this.b
a1.r=B.bd.j(0.32+b2*0.4).gt(0)
a1.b=B.aj
a1.c=2.4
a1.d=B.bZ
a1.e=B.fk
for(b1=A.zW(d),r=A.a([],x.J),p=new A.xO(b1,!1,r),k=b1.a;p.C();){a2=p.c
if(a2===0||p.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--a2
p.lc()
a3=r[a2].b
a3===$&&A.c()
a3=a3.a.length()
a4=new A.b_(k,b1.b,a6,new A.d7([new A.FO(p,a2),0,a3*b2,!0]),A.a([],a9))
j=a0.L()
a2=a4.gbM().a.snapshot()
q.drawPath((a4.e=new A.cG(a2)).a,j)
j.delete()
j=a1.L()
a2=a4.e
q.drawPath((a2==null?a4.e=new A.cG(a4.gbM().a.snapshot()):a2).a,j)
j.delete()}$.a0()
a5=A.U()
a5.r=B.eo.j(0.14+v*0.2).gt(0)
for(a9=b0*4,b0=v*3,v=1.2+v*1.2,o=0;o<14;++o){b1=Math.sin(o*1.9+a9)
b2=Math.cos(o*2.3+b0)
j=a5.L()
q.drawCircle((b1*0.35+0.5)*a7,(b2*0.22+0.46)*a8,v,j)
j.delete()}},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.Gy.prototype={
S(){return new C.azE(null,null)},
gdQ(){return this.d}}
C.azE.prototype={
grN(){var w=this.d
if(w!=null)w=w.a2r(this.a.d)||this.a.f
else w=!1
return w},
Z(){var w,v=this,u=null
v.a0()
v.d=C.c_O(v.a.c)
w=A.bh(u,B.ry,u,1,u,v)
w.f2(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bh(u,B.kr,u,1,u,v)
w.cF(0)
v.f!==$&&A.aO()
v.f=w
v.r=A.dE(B.hq,new C.dBH(v))
v.hK()},
p(){var w=this,v=w.r
if(v!=null)v.a9(0)
v=w.e
v===$&&A.c()
v.p()
v=w.f
v===$&&A.c()
v.p()
w.boK()},
hK(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.am_(t.a.c),$async$hK)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dBv(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hK,v)},
BS(d){return this.bt_(d)},
bt_(a6){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$BS=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:if(!r.grN()||r.d==null){w=1
break}o=a6===B.qA
if(o&&!r.d.y){r.c.F(x.q).f.P(D.eii)
w=1
break}if(o){n=r.d
n=n.y&&B.a.i(n.ax).length===0}else n=!1
if(n){r.c.F(x.q).f.P(D.ehM)
w=1
break}n=r.d
m=n.d
m=A.a([new A.En(n.c,m)],x.S)
n=r.d.gE2()
B.d.v(m,new A.I(n,new C.dBj(),A.R(n).k("I<1,+email,name(n,n)>")))
n=r.d
l=n.y?B.a.i(n.ax):""
n=A.aZ(x.N)
if(o&&l.length!==0)for(k=m.length,j=0;j<m.length;m.length===k||(0,A.J)(m),++j){i=m[j]
h=i.b
if(r.d.azr(h,l,i.a))n.H(0,h)}k=r.c
k.toString
w=3
return A.b(C.hAI(k,n,o&&r.d.y?r.d.z:null,a6,m),$async$BS)
case 3:g=a8
if(g==null||r.c==null){w=1
break}n=g.b
if(n<=0){r.c.F(x.q).f.P(B.Ql)
w=1
break}m=!1
if(o)if(l.length!==0){m=r.d
k=g.a
h=m.ai6(k)
m=m.azr(k,l,h==null?"":h)}if(m){r.c.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(g.a+" already contributed to this round.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=o?4:5
break
case 4:m=r.c
m.toString
k=g.a
h=r.d
w=6
return A.b(C.hAz(m,n,h.y?h.z:null,k),$async$BS)
case 6:if(a8!==!0||r.c==null){w=1
break}case 5:m=r.d.x
k=Date.now()
h=g.a
f=g.c
e=new A.N(Date.now(),0,!1).a4()
d=r.a.d
a0=o&&r.d.y?r.d.ax:""
a1=o&&r.d.y?B.a.i(r.d.z):""
a2=r.d.ai6(h)
if(a2==null)a2=""
B.d.cj(m,0,new A.pk("led_"+k,a6,n,h,f,e,d,a0,a2,a1))
if(o){o=r.d
o=o.y&&o.ax.length!==0}else o=!1
if(o){a3=r.d.ai6(h)
if(a3!=null){o=r.d
o.cwi(o.ax,a3,h)}}t=8
o=r.d
o.toString
w=11
return A.b(C.GD(o),$async$BS)
case 11:t=2
w=10
break
case 8:t=7
a5=s.pop()
o=A.a5(a5)
if(o instanceof A.ln){q=o
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not save ledger. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=10
break
case 7:w=2
break
case 10:w=12
return A.b(r.hK(),$async$BS)
case 12:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$BS,v)},
TW(d){return this.buY(d)},
buY(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$TW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=r.d
if(l==null){w=1
break}t=4
w=7
return A.b(C.aVi(l.a,d.a),$async$TW)
case 7:q=f
o=r.c
if(o==null){w=1
break}o=o.F(x.q).f
n=d.b
o.P(A.b0(null,null,null,null,null,B.q,null,A.d(q?n+" is in the group now.":"Could not approve "+n+".",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.a5(k)
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not approve. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:w=8
return A.b(r.hK(),$async$TW)
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$TW,v)},
Me(d){return this.bCJ(d)},
bCJ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Me=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=r.d
if(n==null){w=1
break}p=r.c
p.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dBt(d),p,null,!0,!0,x.y),$async$Me)
case 3:if(f!==!0){w=1
break}t=5
w=8
return A.b(C.am0(n.a,d.a,null,"Join request declined",r.a.d),$async$Me)
case 8:t=2
w=7
break
case 5:t=4
m=s.pop()
q=A.a5(m)
p=r.c
if(p==null){w=1
break}p.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not decline. "+A.t(q),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:w=9
return A.b(r.hK(),$async$Me)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Me,v)},
cfr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.gak0(),i=B.aH.j(0.07),h=A.m(16),g=A.G(B.aH.j(0.4),B.r,1),f=A.m(12),e=x.p
f=A.a([A.A(A.a([A.p(k,A.d(""+j.length,k,k,k,k,k,k,B.yh,k,k,k),B.h,k,k,new A.o(B.aH,k,k,f,k,k,B.n),k,k,k,k,B.fw,k,k,k),B.ab,D.bkt],e),B.m,k,B.e,B.j,0,k,k),B.P],e)
for(w=j.length,v=0;v<j.length;j.length===w||(0,A.J)(j),++v){u=j[v]
t=new A.b3(14,14)
s=new A.ay(B.bd.j(0.25),1,B.r,-1)
r=A.a([new A.w(u.b,k,B.jq,k,k,k,k,k,k,k,k,k),B.au,new A.B(B.u9,new A.cD(B.aY,B.e,B.j,B.F,k,B.p,k,0,A.a([A.V(B.up,B.c2,k,k,k,14),B.bq,new A.bG(1,B.bp,new A.w(u.a,k,B.vc,k,k,k,k,k,k,k,k,k),k)],e),k),k)],e)
q=u.f
if(q.length!==0){q=A.mE(q)
r.push(new A.B(B.u9,new A.cD(B.aY,B.e,B.j,B.F,k,B.p,k,0,A.a([A.V(B.ii,B.c2,k,k,k,14),B.bq,new A.bG(1,B.bp,new A.w(q,k,B.vc,k,k,k,k,k,k,k,k,k),k)],e),k),k))}q=u.r
if(q.length!==0)r.push(new A.B(B.u9,new A.cD(B.aY,B.e,B.j,B.F,k,B.p,k,0,A.a([A.V(B.kv,B.c2,k,k,k,14),B.bq,new A.bG(1,B.bp,new A.w(q,k,B.vc,k,k,k,k,k,k,k,k,k),k)],e),k),k))
q=u.w
if(q.length!==0)r.push(new A.B(B.u9,new A.cD(B.aY,B.e,B.j,B.F,k,B.p,k,0,A.a([A.V(B.lX,B.c2,k,k,k,14),B.bq,new A.bG(1,B.bp,new A.w(q,k,B.vc,k,k,k,k,k,k,k,k,k),k)],e),k),k))
for(q=u.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.J)(q),++o){n=q[o]
m=J.a6(n)
l=m.h(n,"relation")
l=C.fYy(l==null?"":l)
m=m.h(n,"name")
if(m==null)m=""
r.push(new A.B(B.u9,new A.cD(B.aY,B.e,B.j,B.F,k,B.p,k,0,A.a([A.V(B.wR,B.c2,k,k,k,14),B.bq,new A.bG(1,B.bp,new A.w(l+": "+m,k,B.vc,k,k,k,k,k,k,k,k,k),k)],e),k),k))}r.push(B.T)
r.push(new A.cD(B.aY,B.e,B.j,B.m,k,B.p,k,0,A.a([new A.bG(1,B.bp,A.dj(O.Yq,B.BO,new C.dBw(this,u),A.bk(B.bs,k,k,k,B.c,k,k,k,k,k,k,k)),k),B.ab,new A.bG(1,B.bp,A.ey(B.Y8,K.R8,new C.dBx(this,u),A.d9(k,k,k,k,k,k,k,k,k,B.cN,k,k,k,k,k,D.aPQ,k,k,k,k)),k)],e),k))
f.push(A.p(k,A.u(r,B.F,k,B.e,B.j,0,B.p),B.h,k,k,new A.o(B.fa,k,new A.c2(s,s,s,s),new A.bx(t,t,t,t),k,k,B.n),k,k,k,B.kV,B.bk,k,k,k))}return A.p(k,A.u(f,B.F,k,B.e,B.j,0,B.p),B.h,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.kU,B.bk,k,k,k)},
bTb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=x.p,i=A.a([],j),h=A.aZ(x.N)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=t.b
if(s===B.qA){r=t.w
if(r.length===0)r="other"
if(!h.H(0,r))continue
i.push(this.cgw(d,r))
continue}q=s===B.a0N
p=q?B.cN:B.ik
s=new A.b3(12,12)
o=new A.ay(p.j(0.25),1,B.r,-1)
n=A.V(q?B.agA:B.rW,p,k,k,k,18)
if(q){m=t.d
m=A.dm(t.e,"declined",0)?m+": request declined":m+" removed"}else m="Spending: "+t.d
m=A.a([new A.w(m,k,B.ir,k,k,k,k,k,k,k,k,k)],j)
l=t.e
if(l.length!==0&&!q)m.push(new A.w(l,k,B.i0,k,k,k,k,k,k,k,k,k))
m=A.u(m,B.F,k,B.e,B.j,0,B.p)
l=q?"":"-$"+B.k.ab(t.c,2)
i.push(A.p(k,new A.cD(B.aY,B.e,B.j,B.m,k,B.p,k,0,A.a([n,B.aw,new A.bG(1,B.bp,m,k),new A.w(l,k,new A.F(!0,p,k,k,k,k,k,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],j),k),B.h,k,k,new A.o(B.fa,k,new A.c2(o,o,o,o),new A.bx(s,s,s,s),k,k,B.n),k,k,k,B.cK,B.bk,k,k,k))}return i},
cgw(d,e){var w,v,u=null,t=C.hA1(d,e),s=C.hA2(d,e,t),r=B.d.cI(t,0,new C.dBy()),q=e!=="other"&&d.y&&d.ax===e,p=d.gvQ(),o=A.m(14),n=A.G((q?B.br:B.bd).j(0.35),B.r,1),m=A.m(14),l=A.m(14),k=(q?B.br:B.bd).j(0.14),j=A.G((q?B.br:B.bd).j(0.5),B.r,1)
k=A.p(u,A.V(B.mG,q?B.br:B.bd,u,u,u,20),B.h,u,u,new A.o(k,u,j,u,u,u,B.a6),u,40,u,u,u,u,u,40)
j=x.p
w=A.a([new A.dk(1,B.cj,A.d(s,u,2,B.Z,u,u,u,P.a4_,u,u,u),u)],j)
if(q)B.d.v(w,A.a([B.bq,A.p(u,D.eMz,B.h,u,u,new A.o(B.br.j(0.2),u,u,A.m(8),u,u,B.n),u,u,u,u,B.nl,u,u,u)],j))
w=A.C(A.u(A.a([A.A(w,B.m,u,B.e,B.j,0,u,u),B.dd,A.d(""+t.length+" of "+p+" gave \xb7 tap to see who",u,u,u,u,u,u,B.i0,u,u,u)],j),B.F,u,B.e,B.j,0,B.p),1)
v=B.k.ab(r,2)
return A.p(u,A.aD(!1,B.X,!0,m,A.aH(!1,l,!0,new A.B(B.bk,A.A(A.a([k,B.aw,w,A.d("+$"+v,u,u,u,u,u,u,A.l(u,u,q?B.br:B.bd,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.d4,A.V(B.ek,B.bd.j(0.6),u,u,u,u)],j),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.dBz(this,d,e,s,t,q),u,u,u,u,u,u,u),B.h,B.fa,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(u,u,n,o,u,u,B.n),u,u,u,B.cK,u,u,u,u)},
Oj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Oj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.d
if(k==null){w=1
break}if(!r.grN()&&!k.y){w=1
break}o=r.c
o.toString
n=r.e
n===$&&A.c()
w=3
return A.b(C.hAB(o,k,r.grN(),n),$async$Oj)
case 3:m=e
if(m==null||r.c==null){w=1
break}w=r.grN()?4:5
break
case 4:r.d=m
t=7
w=10
return A.b(C.GD(m),$async$Oj)
case 10:t=2
w=9
break
case 7:t=6
j=s.pop()
o=A.a5(j)
if(o instanceof A.ln){q=o
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not save help mode. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=9
break
case 6:w=2
break
case 9:w=11
return A.b(r.hK(),$async$Oj)
case 11:case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Oj,v)},
P9(d,e){return this.cf0(d,e)},
cf0(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$P9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(!t.grN()||t.d==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.hAF(s,e,d),$async$P9)
case 3:if(g!==!0){w=1
break}w=4
return A.b(C.am0(t.d.a,e,d,"Removed from group",t.a.d),$async$P9)
case 4:w=5
return A.b(t.hK(),$async$P9)
case 5:case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
Yk(d,e,f,g){return this.c5h(d,e,f,g)},
c5h(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Yk=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:p=t.d
if(p==null){w=1
break}s=t.c
s.toString
r=t.e
r===$&&A.c()
q=t.grN()
w=3
return A.b(C.hAD(s,d,p,q,e,f,t.grN()?new C.dBu(t,p):null,r,g),$async$Yk)
case 3:case 1:return A.h(u,v)}})
return A.i($async$Yk,v)},
aaG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.aK9(s,r.e),$async$aaG)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaG,v)},
UY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$UY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.d
if(i==null){w=1
break}t=4
m=B.a.i(i.e)
l=new A.a6V(-1,1,!0,null,null,D.dRj,D.dRh,null,new A.aZS(A.a([],x.B),A.Q(x.N,x.Y)),null,null)
k=A.fRL("NGMY-GROUP:"+m.toUpperCase(),1,-1)
if(k.a!==B.PG){m=k.c
m.toString
A.b8(m)}m=k.b
l.x=m
l.z=m.a
l.aQV()
q=l
w=7
return A.b(q.akO(720),$async$UY)
case 7:p=e
if(p==null||r.c==null){w=1
break}w=8
return A.b(A.rf(J.f2(B.dz.gaK(p)),"ngmy_group_"+i.e+".png"),$async$UY)
case 8:o=e
m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
h=s.pop()
n=A.a5(h)
m=r.c
if(m==null){w=1
break}m.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not save QR: "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$UY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d,e=h.e
e===$&&A.c()
w=h.f
w===$&&A.c()
v=A.c4(new A.h3(A.a([e,w],x.U)),new C.dBB(h),g)
u=f==null
t=u?g:f.e
s=u?g:new C.dBC(d,f)
r=u?g:f.y
if(!h.grN()){q=u?g:f.y
q=q===!0}else q=!0
p=x.p
q=A.a([new A.B(H.JI,C.fCq(t,r===!0,e,new C.dBD(d),s,h.gc4V(),q,"GROUP",g),g)],p)
if(!u){u=A.a([new A.B(D.bfH,new C.bd9(e,A.A(A.a([h.awG("In",f.gaEa()),h.awG("Out",f.gw1()),h.awG("Balance",f.gaEa()-f.gw1()),h.b0L("People",f.gvQ(),!1)],p),B.m,g,B.e,B.j,0,g,g),g),g)],p)
if(h.grN())u.push(new A.B(B.fu,A.A(A.a([A.C(new C.B4("Contribution",D.ah9,e,new C.dBE(h),!1,g),1),B.ab,A.C(new C.B4("Spending",B.un,e,new C.dBF(h),!0,g),1)],p),B.m,g,B.e,B.j,0,g,g),g))
u.push(B.T)
t=A.a([],p)
for(s=[D.dSx,D.dT0,D.dTg],o=0;o<3;++o){n=s[o]
r=n.a
m=r===2?0:6
l=h.w
k=!1
if(r===1){j=h.d
if(j!=null){k=h.a
i=k.d
k=B.a.i(j.c.toLowerCase())===B.a.i(i.toLowerCase())||k.f}}k=k?f.gak0().length:0
t.push(new A.bG(1,B.bp,new A.B(new A.L(0,0,m,0),new C.bda(n.b,l===r,e,w,new C.dBG(h,n),k,g),g),g))}u.push(new A.B(B.ie,A.A(t,B.m,g,B.e,B.j,0,g,g),g))
u.push(A.C(h.bxf(f),1))
B.d.v(q,u)}else q.push(D.blc)
return A.xG(A.cf(g,B.bV,new A.am(B.V,g,B.a9,B.q,A.a([v,A.br(!0,A.u(q,B.m,g,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],p),g),g,!1,!1,g,g),B.Qq,x.I)},
b0L(d,e,f){var w=null,v=A.d(d,w,w,w,w,w,w,D.a3Y,w,w,w)
return A.C(A.u(A.a([v,B.bw,A.d(f?"$"+B.k.ab(e,2):B.o.u(B.k.M(e)),w,w,w,w,w,w,D.ew2,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
awG(d,e){return this.b0L(d,e,!0)},
bxf(d){var w,v,u,t,s,r,q=this,p=null
switch(q.w){case 1:w=A.a([q.c9d(d,d.d,d.c,"Owner",d.f,new C.dBm(q,d))],x.p)
if(q.grN()&&d.gak0().length!==0)w.push(q.cfr(d))
v=d.gE2()
B.d.v(w,new A.I(v,new C.dBn(q,d),A.R(v).k("I<1,r>")))
if(d.gvQ()>=100&&q.grN()){v=q.e
v===$&&A.c()
w.push(new A.B(B.zu,new C.B4("Unlock 100+ members",B.p4,v,new C.dBo(q,d),!1,p),p))}return A.cL(w,p,B.rH,p,p,B.ag,!1)
case 2:w=A.m(16)
v=A.a([new A.a9(0,B.G,B.bd.j(0.35),B.J,24)],x.V)
u=d.e
v=A.as(A.p(p,A.Dw(B.c,"NGMY-GROUP:"+B.a.i(u).toUpperCase(),B.a2e,1,p,B.a2f,!0,B.bS,200,-1),B.h,p,p,new A.o(B.c,p,p,w,v,p,B.n),p,p,p,p,B.bC,p,p,p),p,p,p)
w=x.p
u=A.as(A.aI(p,A.A(A.a([A.d(u,p,p,p,p,p,p,D.eq7,p,p,p)],w),B.m,p,B.e,B.R,0,p,p),B.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dBp(q,d),p,p,p,p,p,p,!1,B.ae),p,p,p)
t=q.e
t===$&&A.c()
return A.cL(A.a([v,B.aO,u,B.P,D.aWP,B.az,new C.B4("Copy invite code",B.fx,t,q.gbYw(),!1,p),B.T,new C.B4("Download QR",B.hf,t,q.gbFb(),!0,p),B.aa,D.eEq],w),p,B.rH,p,p,B.ag,!1)
default:w=q.a
s=C.buQ(d,w.e,w.d)
r=B.d.cI(s,0,new C.dBq())
w=A.m(12)
v=A.G(B.bd.j(0.28),B.r,1)
u=x.p
u=A.a([A.p(p,A.A(A.a([D.bvm,B.aw,A.C(A.u(A.a([A.d(s.length===0?"Your contributions: none yet":"Your contributions: $"+B.k.ab(r,2)+" ("+s.length+")",p,p,p,p,p,p,B.mT,p,p,p),B.au,A.d("Group spending: $"+B.k.ab(d.gw1(),2)+" \xb7 Balance $"+B.k.ab(d.gaEa()-d.gw1(),2),p,p,p,p,p,p,B.i0,p,p,p)],u),B.F,p,B.e,B.j,0,B.p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(B.fa,p,v,w,p,p,B.n),p,p,p,B.e3,B.bk,p,p,p)],u)
if(d.x.length===0)u.push(D.eG9)
else B.d.v(u,q.bTb(d))
return A.cL(u,p,B.rH,p,p,B.ag,!1)}},
aWR(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.htJ(d,e,f),j=k>0,i=d.a2I(e,f)
if(d.y){w=d.ax
v=w.length!==0&&!d.QN(e,w)}else v=!1
w=A.m(14)
u=A.G(B.bd.j(0.2),B.r,1)
t=A.m(14)
s=A.m(14)
r=B.bd.j(0.12)
q=A.G(B.bd.j(0.4),B.r,1)
if(v)p=B.ob
else p=j?B.he:B.mD
if(v)o=B.ik
else o=j?B.bd:B.c2
q=A.p(l,A.V(p,o,l,l,l,20),B.h,l,l,new A.o(r,l,q,l,l,l,B.a6),l,40,l,l,l,l,l,40)
r=A.d(e,l,l,l,l,l,l,B.ir,l,l,l)
o=A.d(g+" \xb7 "+f,l,l,l,l,l,l,I.H_,l,l,l)
if(v)p="Has not given this round \xb7 gave "+d.akL(e,f)+"x \xb7 missed "+i
else{p=""+i
p=j?"Gave "+d.akL(e,f)+"x ($"+B.k.ab(k,2)+") \xb7 missed "+p:"Has not given yet \xb7 missed "+p}if(v)n=B.ik.j(0.9)
else if(j)n=B.bd.j(0.85)
else n=i>0?B.ik.j(0.85):B.ik.j(0.85)
m=x.p
m=A.a([q,B.aw,A.C(A.u(A.a([r,o,B.bw,A.d(p,l,l,l,l,l,l,A.l(l,l,n,l,l,l,l,l,l,l,l,10,l,l,B.a1,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],m),B.F,l,B.e,B.j,0,B.p),1)],m)
if(a0!=null)m.push(A.aF(l,l,l,l,A.V(B.afr,B.fK.j(0.85),l,l,l,l),l,l,l,a0,l,l,l,l,"Remove member",l))
else m.push(A.V(B.ek,B.bd.j(0.6),l,l,l,l))
return A.p(l,A.aD(!1,B.X,!0,t,A.aH(!1,s,!0,new A.B(B.bk,A.A(m,B.m,l,B.e,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,a1,l,l,l,l,l,l,l),B.h,B.fa,0,l,l,l,l,l,B.ac),B.h,l,l,new A.o(l,l,u,w,l,l,B.n),l,l,l,B.cK,l,l,l,l)},
c9d(d,e,f,g,h,i){return this.aWR(d,e,f,g,h,null,i)}}
C.azF.prototype={
S(){return new C.azG(A.y7(B.Up,B.n1,B.t5))}}
C.azG.prototype={
bYy(d){var w,v,u,t,s,r
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=A.fjP(t==null?"":t)
if(s!=null){this.e=!0
this.c.toString
r=$.ri().gb8()
if(r!=null&&r.c!=null&&r.pI())r.K(s)
return}}},
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cf(A.eB(w,w,w,!0,!0,B.x,w,1,w,w,w,!1,w,!1,w,w,A.aF(w,w,w,w,B.Lr,w,w,w,new C.dBI(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.eRB,w,w,w,1,w,!0),B.x,A.y6(this.d,B.bM,this.gbYx()),w,!1,!1,w,w)}}
C.bdb.prototype={
B(d){var w=this,v=null,u=A.m(28),t=A.G(B.bd.j(0.22),B.r,1.1),s=A.a([new A.a9(0,B.G,B.x.j(0.35),B.cD,14)],x.V),r=A.aF(v,v,v,v,D.bsS,v,v,v,w.d,v,v,v,v,"Back",v),q=w.e,p=q!=null&&q.length!==0,o=w.c
r=A.a([r,A.C(p?A.u(A.a([A.d(o,v,v,v,v,v,v,D.eoH,B.L,v,v),B.bw,A.aD(!1,B.X,!0,v,A.aH(!1,A.m(8),!0,new A.B(B.ew,A.d(q,v,1,B.Z,v,v,v,D.etA,B.L,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)],x.p),B.m,v,B.e,B.R,0,B.p):A.d(o,v,1,B.Z,v,v,v,H.aKl,B.L,v,v),1)],x.p)
q=w.z
if(q!=null)r.push(q)
else if(w.r)r.push(new C.bbC(w.w,w.x,w.y,v))
else r.push(B.y7)
return A.p(v,A.A(r,B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(B.bV,v,t,u,s,v,B.n),v,v,v,v,B.VE,v,v,v)}}
C.bbC.prototype={
B(d){var w=this,v=new C.d5q(w),u=w.d
if(u==null||!w.c)return v.$1(0)
return A.c4(u,new C.d5p(w,v),null)}}
C.bda.prototype={
B(d){return A.c4(new A.h3(A.a([this.e,this.f],x.U)),new C.d90(this),null)}}
C.bd7.prototype={
B(d){var w=this
return A.c4(new A.h3(A.a([w.c,w.d,w.e],x.U)),new C.d8Z(w),null)}}
C.bd9.prototype={
B(d){return A.c4(this.c,new C.d9_(this),null)}}
C.NX.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a,n=e.b,m=A.c_(new A.af(0,0,0+o,0+n),B.jJ)
$.a0()
w=A.U()
v=p.b
w.r=B.bd.j(0.06*v).gt(0)
w.b=B.aj
w.c=2
w.z=B.qw
d.bi(m,w)
u=A.U()
u.r=B.eo.j(0.35+0.45*v).gt(0)
u.z=B.jg
t=o+n
s=2*t
r=B.k.J(p.d*s,s)
if(r<o)q=new A.v(r,0)
else if(r<t)q=new A.v(o,r-o)
else{t=2*o+n
q=r<t?new A.v(t-r,n):new A.v(0,s-r)}d.az(q,3.5+v*2,u)
v=A.U()
v.r=B.eo.j(0.9).gt(0)
d.az(q,1.5,v)
if(!p.c)return
v=new C.d8Y(p,d)
v.$3(D.dJa,!1,!1)
o-=10
v.$3(new A.v(o,8),!0,!1)
n-=8
v.$3(new A.v(10,n),!1,!0)
v.$3(new A.v(o,n),!0,!0)},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bd8.prototype={}
C.bfA.prototype={
nU(d,e){var w,v,u,t,s,r,q=A.ad("[^A-Z0-9]",!0,!1,!1,!1),p=A.aJ(e.a.toUpperCase(),q,"")
q=p.length
if(q===0)return B.aq
w=new A.f4("")
v=new A.f4("")
for(u=0;u<q;++u){t=p[u]
s=A.ad("[A-Z]",!0,!1,!1,!1)
if(s.b.test(t)&&w.a.length<3)w.a+=t
else{s=A.ad("[0-9]",!0,!1,!1,!1)
if(s.b.test(t)&&v.a.length<5)v.a+=t}}q=w.a
s=v.a
r=(q.charCodeAt(0)==0?q:q)+(s.charCodeAt(0)==0?s:s)
return new A.bb(r,A.h1(B.bn,r.length),B.aL)}}
C.be3.prototype={
gbHE(){var w,v=this,u=C.hwP(v.d,v.e,v.f)
switch(v.ay.a){case 0:w=u
break
case 1:w=x.C
w=A.z(new A.e2(u,w),w.k("E.E"))
break
case 2:w=x.o
w=A.z(new A.e2(u,w),w.k("E.E"))
break
default:w=null}return w},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.gbHE(),m=p.d,l=p.e,k=p.f,j=C.buQ(m,l,k),i=B.d.cI(j,0,new C.df3()),h=m.a2I(l,k)
if(m.y){w=m.ax
v=w.length!==0&&!m.QN(l,w)}else v=!1
if(m.ax.length===0)u=D.arG
else{w=A.R(j).k("a4<1>")
u=A.z(new A.a4(j,new C.df4(p),w),w.k("E.E"))}if(!v)t=h>0&&i<=0
else t=!0
w=x.p
k=A.a([A.c4(p.x,new C.df5(p,t),o),B.aa,A.d(l,o,o,o,o,o,o,B.h5,B.L,o,o),A.d(p.r+" \xb7 "+k,o,o,o,o,o,o,B.i0,B.L,o,o)],w)
B.d.v(k,A.a([B.au,A.d("Joined "+B.d.gI(p.w.bP().u(0).split(" ")),o,o,o,o,o,o,I.H_,B.L,o,o)],w))
k.push(B.aO)
l=A.m(14)
s=A.G((t?B.ik:B.bd).j(0.35),B.r,1)
if(v)r="MISSED THIS HELP ROUND"
else r=h>0?"MISSED CONTRIBUTIONS":"CONTRIBUTION STATUS"
r=A.d(r,o,o,o,o,o,o,A.l(o,o,t?B.ik:B.bd.j(0.9),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,1.2,o,o,o,o,o,o),o,o,o)
if(v)q='Not recorded for "'+B.a.i(m.z)+'". They will be marked missed when help mode ends.'
else if(h>0){q=h===1?"":"s"
q=""+h+" missed contribution"+q+" total \xb7 $"+B.k.ab(i,2)+" contributed overall"}else q="Total contributed: $"+B.k.ab(i,2)
q=A.a([r,B.P,A.d(q,o,o,o,o,o,o,L.a3P,B.L,o,o)],w)
if(m.y&&B.a.i(m.z).length!==0)B.d.v(q,A.a([B.P,A.d("Active help: "+B.a.i(m.z),o,o,o,o,o,o,A.l(o,o,B.br.j(0.95),o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),B.L,o,o)],w))
if(u.length!==0)B.d.v(q,A.a([B.ar,A.d("This round: $"+B.k.ab(B.d.cI(u,0,new C.df6()),2),o,o,o,o,o,o,D.eoP,B.L,o,o)],w))
k.push(A.p(o,A.u(q,B.m,o,B.e,B.j,0,B.p),B.h,o,o,new A.o(B.fa,o,s,l,o,o,B.n),o,o,o,o,B.bC,o,o,o))
k.push(B.aO)
m=A.C(A.d("CONTRIBUTION HISTORY",o,o,o,o,o,o,A.l(o,o,B.bd.j(0.85),o,o,o,o,o,o,o,o,11,o,o,B.I,o,o,!0,o,1.4,o,o,o,o,o,o),o,o,o),1)
l=p.ay
k.push(A.A(A.a([m,A.AA(o,B.fa,A.V(D.bpl,l===D.a5j?B.bd.j(0.75):B.iC,o,o,o,20),new C.df7(p),B.J,p.CW,B.ah,"Filter history",x.E)],w),B.m,o,B.e,B.j,0,o,o))
k.push(B.P)
if(n.length===0){if(l===D.aMJ)m="No missed contributions for this member."
else m=l===D.aMI?"No recorded contributions for this member.":"No history yet for this member."
k.push(A.d(m,o,o,o,o,o,o,B.kd,o,o,o))}else B.d.v(k,new A.I(n,new C.df8(p,d),A.R(n).k("I<1,r>")))
k.push(B.aa)
k.push(A.bE(!1,D.aKK,o,o,!0,o,o,new C.df9(d),o,o))
return A.cL(k,p.c,o,o,o,B.ag,!1)},
arh(d,e){var w,v=null,u=A.a([],x.p),t=this.ay===e
if(t)u.push(D.bsV)
else u.push(B.nC)
u.push(B.ab)
w=t?B.iC:B.ak
u.push(A.d(d,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,v,v,v,t?B.I:B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.yB(A.A(u,B.m,v,B.e,B.j,0,v,v),48,e,x.E)},
bQR(d,e){var w,v,u,t,s,r,q,p,o=this,n=null
if(e instanceof C.NC){w=e.b
v=w.w.length!==0
if(v&&w.e.length!==0)u=w.e
else{t=o.d.z
u=t.length!==0&&v?t:w.d}v=A.m(12)
t=A.G(B.bd.j(0.22),B.r,1)
s=x.p
return A.p(n,A.A(A.a([D.bwW,B.aw,A.C(A.u(A.a([A.d(u,n,2,B.Z,n,n,n,D.aIX,n,n,n),B.dd,A.d(B.d.gI(w.f.bP().u(0).split(".")),n,n,n,n,n,n,D.a3Y,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1),B.ab,A.d("$"+B.k.ab(w.c,2),n,n,n,n,n,n,D.ewY,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(B.fa,n,t,v,n,n,B.n),n,n,n,B.cK,B.bk,n,n,n)}x.a.a(e)
v=A.m(16)
t=e.c
s=A.G(B.ik.j(t?0.35:0.5),B.r,1)
r=A.V(t?B.o7:B.cu,B.ik,n,n,n,18)
q=A.d(e.b,n,2,B.Z,n,n,n,D.aIX,n,n,n)
p=x.p
p=A.a([r,B.aw,A.C(A.u(A.a([q,B.dd,A.d(t?"Active help round":B.d.gI(e.a.bP().u(0).split(".")),n,n,n,n,n,n,D.a3Y,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
if(o.ch&&!t&&e.d.length!==0&&o.cx!=null)p.push(A.bE(!1,D.eGs,n,n,!0,n,n,new C.df2(o,d,e),n,A.fo(n,n,n,n,n,n,n,n,n,n,n,B.iC,n,n,n,B.as,n,B.fi,n,n,n,n,n,B.k2,n,n)))
else p.push(A.d(t?"PENDING":"MISSED",n,n,n,n,n,n,D.eqV,n,n,n))
return A.p(n,A.A(p,B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(B.fa,n,s,v,n,n,B.n),n,n,n,B.cK,B.bk,n,n,n)},
gd5(){return this.f}}
C.o3.prototype={
B(d){var w=null,v=A.m(26),u=A.G(B.bd.j(0.4),B.r,1.3),t=A.a([new A.a9(0,B.G,B.bd.j(0.22),B.J,28)],x.V)
return A.p(w,A.b1(new A.B(B.Vl,this.c,w),w,w,new C.NX(0.85,this.d,0,w),B.as),B.h,w,w,new A.o(B.bV,w,u,v,t,w,B.n),w,w,w,E.wk,w,w,w,w)}}
C.bcE.prototype={
gkg(d){return this.b},
gdh(d){return this.c}}
C.axT.prototype={
S(){var w=$.at()
return new C.axU(new A.ao(B.aq,w),new A.ao(B.aq,w),A.a([],x.i))}}
C.axU.prototype={
gat2(){var w,v=this.d
if(v===$){w=this.a.d
v=this.d=new A.ao(new A.bb(w,B.aZ,B.aL),$.at())}return v},
gaWL(){var w,v=this.a.c
v=A.a([new A.En(v.c,v.d)],x.S)
w=this.a.c.gE2()
B.d.v(v,new A.I(w,new C.d7A(),A.R(w).k("I<1,+email,name(n,n)>")))
w=x.K
v=A.z(new A.a4(v,new C.d7B(this),w),w.k("E.E"))
return v},
p(){var w=this,v=w.gat2(),u=v.R$=$.at()
v.O$=0
v=w.e
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.a2()},
bYB(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e.a.a,k=A.ad("\\D",!0,!1,!1,!1),j=A.aJ(l,k,"")
l=m.gat2()
k=B.a.fl(B.a.i(l.a.a),A.ad("\\s+",!0,!1,!1,!1))
if(new A.a4(k,new C.d7C(),A.R(k).k("a4<1>")).gG(0)<2){m.n(new C.d7D(m))
return}if(j.length<7){m.n(new C.d7E(m))
return}if(m.r.length===0){m.n(new C.d7F(m))
return}k=m.f
if(B.a.i(k.a.a).length<5){m.n(new C.d7G(m))
return}w=m.gaWL()
v=m.c
v.toString
l=B.a.i(l.a.a)
u=m.r
k=B.a.i(k.a.a)
t=A.a([],x.A)
for(s=m.x,r=s.length,q=x.N,p=0;p<s.length;s.length===r||(0,A.J)(s),++p){o=s[p]
n=o.a
if(n>=0&&n<w.length){n=w[n]
t.push(A.D(["relation",o.b,"name",n.b,"email",n.a],q,q))}}A.a7(v,!1).K(new C.bcE(l,j,u,k,t))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gaWL(),a0=new C.d7S(),a1=f.a.c
a1=C.aL0(B.uy,"The group owner, "+a1.d+", will see this and has to approve you.","Ask to join "+a1.e)
w=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),f.gat2(),e,e,e,e,e,2,a0.$1("Full name *"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.kb,e,e,e,e)
v=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),f.e,e,e,e,e,e,2,a0.$1("Phone number *"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,B.jp,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.am,e,e,e,e)
u=f.r
if(u.length===0)u=e
t=a0.$1("State you live in *")
s=x.t
r=A.a([],s)
for(q=x.Q,p=0;p<50;++p){o=B.jF[p]
r.push(new A.eq(o,new A.w(o,e,e,e,e,e,e,e,e,e,e,e),B.eR,e,q))}n=x.N
m=x.p
r=A.a([a1,B.az,w,B.T,v,B.T,A.mJ(t,B.fa,u,!0,r,e,new C.d7M(f),B.di,e,n),B.T,A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),f.f,e,e,e,e,e,2,a0.$1("Home address * (street, city)"),B.z,!0,e,!0,e,!1,e,B.ad,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.kb,e,e,e,e),B.aO,D.eMb,B.au,D.eOP,B.P],m)
if(d.length===0)r.push(D.eI9)
for(a1=f.x,w=x.G,v=x.c,u=x.u,l=0;l<a1.length;++l){t=a1[l]
k=a0.$1("Who")
j=A.a([],s)
for(p=0;p<6;++p){i=D.cZV[p]
j.push(new A.eq(i,new A.w(C.fYy(i),e,e,e,e,e,e,e,e,e,e,e),B.eR,e,q))}t=A.mJ(k,B.fa,t.b,!0,j,e,new C.d7N(f,l),B.tC,e,n)
k=a1[l].a
k=k<d.length?k:e
j=a0.$1("Person in group")
h=A.a([],u)
for(g=0;g<d.length;++g)h.push(new A.eq(g,new A.w(d[g].b,e,e,e,e,e,e,B.Z,e,e,e,e),B.eR,e,v))
r.push(new A.B(B.cK,new A.cD(B.aY,B.e,B.j,B.m,e,B.p,e,0,A.a([new A.a3(108,e,t,e),B.ab,new A.bG(1,B.bp,A.mJ(j,B.fa,k,!0,h,e,new C.d7O(f,l),B.tC,e,w),e),A.aF(e,e,e,e,B.Lo,e,e,e,new C.d7P(f,l),e,e,e,e,e,e)],m),e),e))}if(d.length!==0)r.push(new A.bF(B.a_,e,e,A.hg(D.bw5,D.eEw,new C.d7Q(f),e),e))
a1=f.w
if(a1!=null)r.push(new A.B(B.iW,A.d(a1,e,e,e,e,e,e,D.eAX,e,e,e),e))
r.push(B.aa)
r.push(A.dj(B.Yb,D.eKZ,f.gbYA(),A.bk(B.bd,e,e,e,B.x,B.on,e,e,new A.b5(A.m(16),B.W),e,e,e)))
r.push(A.bE(!1,B.de,e,e,!0,e,e,new C.d7R(a2),e,e))
return A.cg(A.u(r,B.af,e,B.e,B.j,0,B.p),B.q,e,B.z,e,e,e,e,B.ag)}}
C.aHY.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aHZ.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
C.aIx.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdB())
w.aX$=null
w.a2()}}
var z=a.updateTypes(["au<~>()","o3(Y,~(~()))","o3(Y,lI)","NC(pk)","Ig(rF)","H(vy,vy)","a92(Y,H)","~(lC)","~(B8)","al<oC<B8>>(Y)","r(vy)","o3(Y)","~()"])
C.c_P.prototype={
$1(d){return d.a===this.a},
$S:122}
C.c_R.prototype={
$1(d){return d.c===this.a},
$S:122}
C.c_Q.prototype={
$1(d){var w=this.a
return d.aja(w)&&d.c!==w},
$S:122}
C.c04.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:364}
C.c_L.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:364}
C.c_T.prototype={
$1(d){return d.a===this.a},
$S:122}
C.c_U.prototype={
$1(d){return d.e===this.a},
$S:122}
C.c_Y.prototype={
$1(d){return d.c===this.a},
$S:122}
C.c02.prototype={
$1(d){return d.aBT(this.a)},
$S:122}
C.c_W.prototype={
$1(d){var w=this.a
return d.aja(w)&&d.c!==w},
$S:122}
C.c_S.prototype={
$1(d){return d.e===this.a},
$S:122}
C.c_M.prototype={
$1(d){return d.a},
$S:458}
C.c_K.prototype={
$1(d){return d.a===this.a},
$S:122}
C.c00.prototype={
$1(d){return d.a===this.a},
$S:177}
C.c_N.prototype={
$1(d){return d.a===this.a&&d.e==="pending"},
$S:177}
C.c_Z.prototype={
$1(d){return d.a===this.a},
$S:177}
C.c0_.prototype={
$1(d){return d.a===this.a},
$S:177}
C.eXk.prototype={
$1(d){var w,v,u,t
if(d.b!==B.qA)return!1
w=d.d
if(B.a.i(w).toLowerCase()===this.a)return!0
v=this.b
u=v.length!==0
if(u&&d.x===v)return!0
if(u){t=this.c.ai6(w)
return t!=null&&B.a.i(t.toLowerCase())===v}return!1},
$S:223}
C.eXj.prototype={
$2(d,e){return d+e.c},
$S:148}
C.f16.prototype={
$1(d){return new C.NC(d,d.f)},
$S:z+3}
C.f17.prototype={
$1(d){return new C.Ig(d.e,!1,d.a,d.f)},
$S:z+4}
C.f18.prototype={
$2(d,e){return e.a.aI(0,d.a)},
$S:z+5}
C.dBV.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hK()},
$S:14}
C.dBL.prototype={
$0(){var w=this,v=w.a
v.w=w.b
v.x=w.c
v.z=w.d},
$S:0}
C.dBK.prototype={
$1(d){var w=null,v=A.m(22),u=B.bd.j(0.4),t=A.d("The owner of this group, ${found.ownerName}, has to approve you before you can enter. You will find the group under YOU JOINED as soon as you are approved.",w,w,w,w,w,w,B.Hd,w,w,w)
return A.ei(A.a([A.bE(!1,B.R6,w,w,!0,w,w,new C.dBJ(d),w,w)],x.p),w,w,B.fa,t,w,w,w,new A.b5(v,new A.ay(u,1,B.r,-1)),D.eOW,w)},
$S:19}
C.dBJ.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dBP.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=B.co.aq(0,t)
w=u.e
w===$&&A.c()
w=w.x
w===$&&A.c()
u=u.f
u===$&&A.c()
u=u.x
u===$&&A.c()
return A.b1(v,v,v,new C.aap(t,w,u,v),B.fj)},
$S:74}
C.dBR.prototype={
$0(){return A.iC(this.a,null)},
$S:0}
C.dBQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hl(u.b,new C.anx(s.c,s.d,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hK(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBS.prototype={
$1(d){var w,v=this.a,u=d.b,t=u.gvQ(),s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b0w(d.a,C.fTW(u.gak0().length,"",u,new C.dBO(v,this.b,d),w,s,"Owner \xb7 "+t+"/100 seats"))},
$S:576}
C.dBO.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hl(u.b,new C.Gy(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hK(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBT.prototype={
$0(){return this.a.F(x.q).f.P(D.ekf)},
$S:0}
C.dBU.prototype={
$1(d){var w,v=this.a,u=J.aa(v.w),t=d.b,s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b0w(d.a+u,C.fTW(0,"",t,new C.dBN(v,this.b,d),w,s,"Member \xb7 Owner "+t.d))},
$S:576}
C.dBN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hl(u.b,new C.Gy(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hK(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBM.prototype={
$2(d,e){var w,v=this.a.r
v===$&&A.c()
v=v.x
v===$&&A.c()
w=B.co.aq(0,B.k.D(v*1.4-this.b*0.08,0,1))
return A.d5(A.dO(this.c,new A.v(0,(1-w)*18)),w)},
$S:225}
C.dY8.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dY7.prototype={
$1(d){var w=A.a([d.b,d.e,d.d,d.c,d.a],x.s),v=d.r,u=A.R(v).k("I<1,n>")
B.d.v(w,new A.I(v,new C.dY5(),u))
B.d.v(w,new A.I(v,new C.dY6(),u))
return B.a.q(B.d.aF(w," ").toLowerCase(),this.a)},
$S:122}
C.dY5.prototype={
$1(d){return d.b},
$S:458}
C.dY6.prototype={
$1(d){return d.a},
$S:458}
C.dY4.prototype={
$1(d){var w=null,v=this.a,u=v.b
v=A.d('Permanently delete "'+(u.length===0?v.e:u)+'" ('+v.e+") owned by "+v.d+". This cannot be undone.",w,w,w,w,w,w,B.hj,w,w,w)
return A.ei(A.a([A.bE(!1,B.de,w,w,!0,w,w,new C.dY2(d),w,w),A.bJ(B.ve,new C.dY3(d),A.bk(B.bR,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fa,v,w,w,w,w,D.eXm,w)},
$S:19}
C.dY2.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dY3.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dYd.prototype={
$2(d,e){var w=null,v=this.a,u=v.d
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b1(w,w,w,new C.aap(1,u,v,w),B.fj)},
$S:74}
C.dYe.prototype={
$0(){return A.iC(this.a,null)},
$S:0}
C.dYf.prototype={
$0(){var w=this.a
w.n(new C.dYc(w))},
$S:0}
C.dYc.prototype={
$0(){var w=this.a,v=w.w
w.w=!v
if(v){w.f.bG(0,B.c_)
w.x=""}},
$S:0}
C.dYg.prototype={
$1(d){var w=this.a
return w.n(new C.dYb(w,d))},
$S:2}
C.dYb.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.dYh.prototype={
$2(d,e){var w=J.q(this.b,e),v=this.a
return new C.a92(w,new C.dY9(v,w),new C.dYa(v,w),null)},
$S:z+6}
C.dY9.prototype={
$0(){return this.a.Yc(this.b)},
$S:0}
C.dYa.prototype={
$0(){return this.a.Mk(this.b)},
$S:0}
C.d4T.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.e.x
o===$&&A.c()
w=A.m(14)
v=A.m(14)
u=p.r
t=u?B.K:B.bd.j(0.92)
s=A.G(B.bd.j(u?0.55+o*0.35:0.9),B.r,1.4)
o=u?q:A.a([new A.a9(0,B.G,B.bd.j(0.25+o*0.25),B.J,16)],x.V)
r=u?B.bd:B.bV
r=A.V(p.d,r,q,q,q,18)
return A.aD(!1,B.X,!0,q,A.aH(!1,w,!0,A.er(A.A(A.a([r,B.ab,A.d(p.c,q,q,q,q,q,q,A.l(q,q,u?B.eo:B.bV,q,q,q,q,q,q,q,q,13,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b5,B.j,0,q,q),q,new A.o(t,q,s,v,o,q,B.n),46,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p.f,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)},
$S:132}
C.d58.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.f.x
l===$&&A.c()
w=A.m(18)
v=m.r.x
v===$&&A.c()
u=A.m(18)
t=A.aq(B.fa,B.bd,0.06+l*0.05)
t.toString
t=A.a([t,B.fa.j(0.95)],x.O)
s=A.G(B.bd.j(0.28+l*0.25),B.r,1.2)
r=x.V
q=A.a([new A.a9(0,B.G,B.bd.j(0.08+l*0.12),B.J,18)],r)
p=x.p
p=A.a([A.p(n,D.byv,B.h,n,n,new A.o(B.bd.j(0.14),n,A.G(B.bd.j(0.55),B.r,1),n,A.a([new A.a9(0,B.G,B.bd.j(0.35),B.J,12)],r),n,B.a6),n,46,n,n,n,n,n,46),B.ba,A.C(A.u(A.a([A.d(m.c.e,n,n,n,n,n,n,D.erv,n,n,n),B.bw,A.d(m.d,n,n,n,n,n,n,B.i0,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
r=m.w
if(r>0){o=A.m(12)
p.push(A.p(n,A.d(""+r+" new",n,n,n,n,n,n,B.vb,n,n,n),B.h,n,n,new A.o(B.aH,n,n,o,n,n,B.n),n,n,n,B.ks,B.fw,n,n,n))}else if(m.x.length!==0)p.push(D.dLU)
p.push(A.V(B.ek,B.bd.j(0.7),n,n,n,n))
return A.aD(!1,B.X,!0,n,A.aH(!1,w,!0,A.b1(A.er(A.A(p,B.m,n,B.e,B.j,0,n,n),n,new A.o(n,n,s,u,q,new A.a8(B.ax,B.aE,B.w,t,n,n),B.n),n,B.bC,n),n,n,new C.NX(0.35+l*0.4,!0,v,n),B.as),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.e,n,n,n,n,n,n,n),B.h,B.K,0,n,n,n,n,n,B.ac)},
$S:132}
C.dBH.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hK()},
$S:14}
C.dBv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dBj.prototype={
$1(d){return new A.En(d.a,d.b)},
$S:459}
C.dBt.prototype={
$1(d){var w=null,v=A.d(this.a.b+" will not be added to the group. They can ask again later.",w,w,w,w,w,w,B.hj,w,w,w)
return A.ei(A.a([A.bE(!1,B.de,w,w,!0,w,w,new C.dBr(d),w,w),A.bJ(K.R8,new C.dBs(d),A.bk(B.aH,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fa,v,w,w,w,w,D.eMN,w)},
$S:19}
C.dBr.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dBs.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dBw.prototype={
$0(){return this.a.TW(this.b)},
$S:0}
C.dBx.prototype={
$0(){return this.a.Me(this.b)},
$S:0}
C.dBy.prototype={
$2(d,e){return d+e.c},
$S:148}
C.dBz.prototype={
$0(){var w=this,v=w.a.c
v.toString
return C.hAG(v,w.b,w.c,w.d,w.e,w.f)},
$S:0}
C.dBu.prototype={
$1(d){return this.bei(d)},
bei(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.b
t.b5C(d)
w=2
return A.b(C.GD(t),$async$$1)
case 2:w=3
return A.b(u.a.hK(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:92}
C.dBB.prototype={
$2(d,e){var w=null,v=this.a,u=v.e
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b1(w,w,w,new C.aap(1,u,v,w),B.fj)},
$S:74}
C.dBC.prototype={
$0(){return C.aK9(this.a,this.b.e)},
$S:0}
C.dBD.prototype={
$0(){return A.iC(this.a,null)},
$S:0}
C.dBE.prototype={
$0(){return this.a.BS(B.qA)},
$S:0}
C.dBF.prototype={
$0(){return this.a.BS(B.a0M)},
$S:0}
C.dBG.prototype={
$0(){var w=this.a
return w.n(new C.dBA(w,this.b))},
$S:0}
C.dBA.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
C.dBm.prototype={
$0(){var w=this.b
return this.a.Yk(w.c,w.f,w.d,"Owner")},
$S:0}
C.dBn.prototype={
$1(d){var w=this.a,v=w.grN()?new C.dBk(w,d):null
return w.aWR(this.b,d.b,d.a,"Member",d.c,v,new C.dBl(w,d))},
$S:1885}
C.dBl.prototype={
$0(){var w=this.b
return this.a.Yk(w.a,w.c,w.b,"Member")},
$S:0}
C.dBk.prototype={
$0(){var w=this.b
return this.a.P9(w.b,w.a)},
$S:0}
C.dBo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.c
r.toString
t=u.b
w=2
return A.b(C.alX(r,t.gvQ(),t.a,s.a.f,t.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBp.prototype={
$0(){var w=this.a.c
w.toString
return C.aK9(w,this.b.e)},
$S:0}
C.dBq.prototype={
$2(d,e){return d+e.c},
$S:148}
C.dBI.prototype={
$0(){return A.iC(this.a,null)},
$S:0}
C.d5q.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.c,r=s?1+d*0.12:1,q=s?"Help mode active":"Activate help mode",p=s?B.br.j(0.28+d*0.22):B.c.j(0.06),o=s?B.iC.j(0.85+d*0.15):B.bd.j(0.35)
o=A.G(o,B.r,s?2:1.1)
w=s?A.a([new A.a9(1+d*2,B.G,B.br.j(0.45+d*0.4),B.J,16+d*14),new A.a9(0,B.G,B.iC.j(0.25+d*0.35),B.J,8+d*6)],x.V):u
v=s?B.iC:B.bd.j(0.85)
return A.aF(u,u,u,u,A.e4(B.B,A.p(u,A.V(B.mG,v,u,u,s?A.a([new A.cI(B.br.j(0.95),B.J,10+d*8)],x.r):u,20),B.h,u,u,new A.o(p,u,o,u,w,u,B.a6),u,38,u,u,u,u,u,38),r,u,u),u,u,u,t.e,u,u,u,u,q,u)},
$S:151}
C.d5p.prototype={
$2(d,e){var w=this.a.d.x
w===$&&A.c()
return this.b.$1(w)},
$S:59}
C.d90.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.e.x
l===$&&A.c()
w=A.m(14)
v=m.d
u=v?0.55+l*0.35:0.25+l*0.15
t=m.f.x
t===$&&A.c()
s=A.m(14)
r=v?B.bd.j(0.12+l*0.06):B.fa.j(0.85)
l=A.G(v?B.bd.j(0.55+l*0.25):B.bd.j(0.18),B.r,1)
q=A.a([A.as(A.d(m.c,n,n,n,n,n,n,A.l(n,n,v?B.eo:B.c2,n,n,n,n,n,n,n,n,12,n,n,B.I,n,n,!0,n,0.6,n,n,n,n,n,n),n,n,n),n,n,n)],x.p)
v=m.w
if(v>0){p=A.m(11)
o=A.G(B.bV,B.r,1.5)
q.push(A.an(n,A.p(n,A.d(""+v,n,n,n,n,n,n,B.vb,B.L,n,n),B.h,n,D.aR_,new A.o(B.aH,n,o,p,n,n,B.n),n,n,n,n,B.nl,n,n,n),n,n,n,6,-6,n))}return A.aD(!1,B.X,!0,n,A.aH(!1,w,!0,A.b1(A.er(new A.am(B.V,n,B.a9,B.h,q,n),n,new A.o(r,n,l,s,n,n,B.n),40,n,n),n,n,new C.NX(u,!0,t,n),B.as),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.r,n,n,n,n,n,n,n),B.h,B.K,0,n,n,n,n,n,B.ac)},
$S:132}
C.d8Z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.d,f=g.x
f===$&&A.c()
w=0.35+f*0.45
f=h.e.x
f===$&&A.c()
v=f*3.141592653589793*2
u=A.m(24)
t=w*0.3
s=A.G(B.bd.j(0.35+t),B.r,1.3)
r=x.V
q=A.a([new A.a9(0,B.G,B.bd.j(0.12+w*0.15),B.J,24)],r)
p=h.c.x
p===$&&A.c()
o=x.p
n=A.a([],o)
for(t=0.55+t,m=0;m<3;++m){l=v+m*3.141592653589793*2/3
k=Math.cos(l)
l=Math.sin(l)
j=6+g.x*4
n.push(A.dO(A.p(i,i,B.h,i,i,new A.o(B.eo.j(t),i,i,i,A.a([new A.a9(0,B.G,B.bd.j(0.45),B.J,10)],r),i,B.a6),i,j,i,i,i,i,i,j),new A.v(38*k,28*l)))}t=A.a([B.bd.j(0.55),B.bd.j(0.08),B.K],x.O)
r=A.a([new A.a9(0,B.G,B.bd.j(0.45),B.J,28)],r)
n.push(A.p(i,A.V(B.he,B.eo,i,i,A.a([new A.cI(B.bd.j(0.9),B.J,22)],x.r),46),B.h,i,i,new A.o(i,i,i,i,r,new A.bS(B.B,0.5,B.w,i,0,t,i,i),B.a6),i,78,i,i,i,i,i,78))
return A.b1(A.p(i,A.u(A.a([A.e4(B.B,new A.am(B.B,i,B.a9,B.q,n,i),0.85+p*0.25,i,i),B.T,D.eDp,B.P,D.eLr,B.aO,A.A(A.a([A.C(new C.B4("Create group",B.hH,g,h.f,!1,i),1),B.aw,A.C(new C.B4("Join code",B.x8,g,h.r,!0,i),1)],o),B.m,i,B.e,B.j,0,i,i),B.T,new C.B4("Scan invite QR",B.iF,g,h.w,!0,i)],o),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.bV,i,s,u,q,i,B.n),i,i,i,i,D.bgK,i,i,i),i,i,new C.NX(0.55+w*0.35,!0,f,i),B.as)},
$S:74}
C.d9_.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.c.x
t===$&&A.c()
w=A.m(18)
return A.b1(A.p(v,u.d,B.h,v,v,new A.o(B.bV,v,A.G(B.bd.j(0.35),B.r,1),w,A.a([new A.a9(0,B.G,B.bd.j(0.12+t*0.1),B.J,16)],x.V),v,B.n),v,v,v,v,B.bC,v,v,v),v,v,new C.NX(0.4+t*0.35,!1,0,v),B.as)},
$S:74}
C.d8Y.prototype={
$3(d,e,f){var w,v=e?-1:1,u=f?-1:1,t=new A.b_($.a0().r,B.av,null,null,A.a([],x.v)),s=d.a,r=d.b
t.N(new A.bj(s,r))
w=r+14*u
t.N(new A.av(s+7*v,w))
t.N(new A.av(s-2*v,w))
t.N(new A.av(s+6*v,r+28*u))
r=A.U()
r.r=B.bd.j(0.35*this.a.b).gt(0)
r.b=B.aj
r.c=1.3
r.d=B.bZ
this.b.b4(t,r)},
$S:603}
C.f6l.prototype={
$1(d){return new A.B(new A.L(0,0,0,A.aG(d,B.en,x.w).w.f.d),new A.eh(new C.f6k(this.a,this.b),null),null)},
$S:60}
C.f6k.prototype={
$2(d,e){var w=null,v=C.aL0(B.he,"Pick your group code: 3 letters + 1\u20135 numbers (e.g. ABC123).","Create lightning group"),u=this.b,t=A.a([new C.bfA()],x.F),s=C.IP("ABC12345"),r=this.a,q=r.a,p=x.p
return new C.o3(A.u(A.a([v,B.aO,A.aK(w,B.U,!0,w,!0,B.q,w,A.aL(),u,w,w,w,w,w,2,s.b5W(q.length===0?w:q),B.z,!0,w,!0,w,!1,w,B.ad,w,w,t,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new C.f6h(r,e),w,w,w,!1,w,w,!1,w,!0,w,B.a8,w,w,w,w,w,w,w,w,w,w,w,D.euN,!0,B.a5,w,B.lA,w,w,w,w),B.P,D.eHl,B.bu,A.A(A.a([A.C(A.bE(!1,F.Hf,w,w,!0,w,w,new C.f6i(d),w,w),1),B.ab,A.C(A.bJ(D.eD5,new C.f6j(r,u,e,d),A.bk(B.bd,w,w,w,B.bV,w,B.c9,w,new A.b5(A.m(14),B.W),w,w,w)),2)],p),B.m,w,B.e,B.j,0,w,w)],p),B.af,w,B.e,B.R,0,B.p),!0,w)},
$S:z+1}
C.f6h.prototype={
$1(d){var w=this.a
if(w.a.length!==0)this.b.$1(new C.f6g(w))},
$S:2}
C.f6g.prototype={
$0(){return this.a.a=""},
$S:0}
C.f6i.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.f6j.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a).toUpperCase()
if(!C.h0h(v)){w.c.$1(new C.f6f(w.a))
return}A.a7(w.d,!1).K(v)},
$S:0}
C.f6f.prototype={
$0(){this.a.a="Use exactly 3 letters + 1\u20135 numbers (e.g. ABC123)."},
$S:0}
C.f6F.prototype={
$1(d){var w,v,u,t=this,s=null,r=A.aG(d,B.en,x.w).w,q=C.aL0(t.a,t.c,t.b),p=t.d,o=A.l(s,s,B.c,s,s,s,s,s,s,s,s,16,s,s,B.O,s,s,!0,s,t.f,s,s,s,s,s,s)
o=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),p,s,s,s,s,s,2,C.IP(t.r),B.z,!0,s,!0,s,!1,s,B.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f6C(d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,o,!0,B.a5,s,B.lA,s,s,s,s)
w=A.C(A.bE(!1,F.Hf,s,s,!0,s,s,new C.f6D(d),s,s),1)
v=A.bk(B.bd,s,s,s,B.bV,s,B.c9,s,new A.b5(A.m(14),B.W),s,s,s)
u=x.p
return new A.B(new A.L(0,0,0,r.f.d),new C.o3(A.u(A.a([q,B.aO,o,B.bu,A.A(A.a([w,B.ab,A.C(A.bJ(A.d(t.w,s,s,s,s,s,s,B.cq,s,s,s),new C.f6E(p,d),v),2)],u),B.m,s,B.e,B.j,0,s,s)],u),B.af,s,B.e,B.R,0,B.p),!0,s),s)},
$S:60}
C.f6C.prototype={
$1(d){var w=B.a.i(d)
if(w.length!==0)A.a7(this.a,!1).K(w)},
$S:2}
C.f6D.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.f6E.prototype={
$0(){var w=B.a.i(this.a.a.a)
if(w.length===0)return
A.a7(this.b,!1).K(w)},
$S:0}
C.f6B.prototype={
$1(d){return this.a&&this.b.q(0,d.b)},
$S:196}
C.f6y.prototype={
$1(d){return!this.a.$1(d)},
$S:196}
C.f6z.prototype={
$1(d){var w=this
return new A.B(new A.L(0,0,0,A.aG(d,B.en,x.w).w.f.d),new A.eh(new C.f6x(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y),null),null)},
$S:60}
C.f6x.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.b,a2=B.a.i(a1.a.a).toLowerCase(),a3=d.c
if(a2.length===0)w=a3
else{v=A.R(a3).k("a4<1>")
w=A.z(new A.a4(a3,new C.f6p(a2),v),v.k("E.E"))}v=d.d
u=A.R(w).k("a4<1>")
t=A.z(new A.a4(w,new C.f6q(v),u),u.k("E.E"))
u=d.a
if(!B.d.bd(t,new C.f6r(u)))u.a=t.length!==0?B.d.gI(t).b:""
s=x.p
r=A.a([],s)
q=d.e
if(q){p=u.b
o=A.p(a0,D.bBh,B.h,a0,a0,new A.o(B.bd.j(0.14),a0,A.G(B.bd.j(0.5),B.r,1),a0,A.a([new A.a9(0,B.G,B.bd.j(0.25),B.J,12)],x.V),a0,B.a6),a0,46,a0,a0,a0,a0,a0,46)
n=A.m(14)
m=p?B.bd.j(0.22):B.c.j(0.06)
l=A.G(p?B.bd:B.bd.j(0.35),B.r,1)
r.push(A.A(A.a([o,B.b6,A.aD(!1,B.X,!0,a0,A.aH(!1,n,!0,A.p(a0,A.V(B.fy,p?B.eo:B.bd,a0,a0,a0,a0),B.h,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,46,a0,a0,a0,a0,a0,46),a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f6s(u,a5),a0,a0,a0,a0,a0,a0,a0),B.h,B.K,0,a0,a0,a0,a0,a0,B.ac)],s),B.m,a0,B.e,B.j,0,a0,a0))}else r.push(C.aL0(B.un,"Log what left the group case.","Record spending"))
if(q){p=A.a([B.au,D.eSP,B.au,D.eRY],s)
o=d.f
if(o!=null&&B.a.i(o).length!==0){n=B.br.j(0.12)
m=A.m(12)
l=A.G(B.br.j(0.45),B.r,1)
B.d.v(p,A.a([B.T,A.p(a0,A.d("Help mode: "+B.a.i(o),a0,a0,a0,a0,a0,a0,N.a3J,B.L,a0,a0),B.h,a0,a0,new A.o(n,a0,l,m,a0,a0,B.n),a0,a0,a0,a0,B.bS,a0,a0,a0)],s))}B.d.v(r,p)}r.push(B.az)
if(q){p=A.a([],s)
if(u.b)B.d.v(p,A.a([A.aK(a0,B.U,!0,a0,!0,B.q,a0,A.aL(),a1,a0,a0,a0,a0,a0,2,C.IP("Search member\u2026"),B.z,!0,a0,!0,a0,!1,a0,B.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,new C.f6t(a5),a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.di,!0,B.a5,a0,B.am,a0,a0,a0,a0),B.T],s))
p.push(A.d("WHO CONTRIBUTED",a0,a0,a0,a0,a0,a0,A.l(a0,a0,B.bd.j(0.85),a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.I,a0,a0,!0,a0,1.4,a0,a0,a0,a0,a0,a0),a0,a0,a0))
p.push(B.P)
if(a3.length===0)p.push(D.eY2)
else if(d.r)p.push(D.eJB)
else if(w.length===0)p.push(D.eGJ)
else{a1=A.a([],s)
for(o=w.length,k=0;k<w.length;w.length===o||(0,A.J)(w),++k){j=w[k]
n=j.b
m=v.$1(j)?n+" \u2713 paid":n
l=u.a
i=v.$1(j)?a0:new C.f6u(u,a5,j)
h=B.dl.j(0.18)
g=B.c.j(0.06)
f=u.a===n
e=f?B.bV:B.ak
f=f?B.bd:B.bd.j(0.25)
a1.push(A.jO(a0,g,h,new A.w(m,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),new A.F(!0,e,a0,a0,a0,a0,a0,B.O,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),i,l===n,B.bd,a0,new A.ay(f,1,B.r,-1),a0))}p.push(new A.d3(D.aRd,A.cg(A.cd(B.bH,a1,B.by,8,8),B.q,a0,B.z,a0,a0,a0,a0,B.ag),a0))}B.d.v(r,p)}else B.d.v(r,A.a([A.aK(a0,B.U,!1,a0,!0,B.q,a0,A.aL(),d.w,a0,a0,a0,a0,a0,2,C.IP("What was spent"),B.z,!0,a0,!0,a0,!1,a0,B.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.di,!0,B.a5,a0,B.am,a0,a0,a0,a0)],s))
r.push(B.aa)
a1=d.x
r.push(A.aK(a0,B.U,!q,a0,!0,B.q,a0,A.aL(),a1,a0,a0,a0,a0,a0,2,C.IP("Amount ($)"),B.z,!0,a0,!0,a0,!1,a0,B.ad,a0,a0,a0,a0,a0,B.e_,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.QB,!0,B.a5,a0,B.am,a0,a0,a0,a0))
r.push(B.bu)
r.push(A.A(A.a([A.C(A.bE(!1,F.Hf,a0,a0,!0,a0,a0,new C.f6v(a4),a0,a0),1),B.ab,A.C(A.bJ(D.eXE,new C.f6w(u,a1,q,d.w,a3,d.y,a4),A.bk(B.bd,a0,a0,a0,B.bV,a0,B.c9,a0,new A.b5(A.m(14),B.W),a0,a0,a0)),2)],s),B.m,a0,B.e,B.j,0,a0,a0))
return new C.o3(A.u(r,B.af,a0,B.e,B.R,0,B.p),!0,a0)},
$S:z+1}
C.f6p.prototype={
$1(d){var w=this.a
return B.a.q(d.b.toLowerCase(),w)||B.a.q(d.a.toLowerCase(),w)},
$S:196}
C.f6q.prototype={
$1(d){return!this.a.$1(d)},
$S:196}
C.f6r.prototype={
$1(d){return d.b===this.a.a},
$S:196}
C.f6s.prototype={
$0(){return this.b.$1(new C.f6o(this.a))},
$S:0}
C.f6o.prototype={
$0(){var w=this.a
return w.b=!w.b},
$S:0}
C.f6t.prototype={
$1(d){return this.a.$1(new C.f6n())},
$S:2}
C.f6n.prototype={
$0(){},
$S:0}
C.f6u.prototype={
$1(d){return this.b.$1(new C.f6m(this.a,this.c))},
$S:8}
C.f6m.prototype={
$0(){return this.a.a=this.b.b},
$S:0}
C.f6v.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.f6w.prototype={
$0(){var w,v,u,t=this,s=A.d_(B.a.i(t.b.a.a))
if(s==null)s=0
w=t.c
if(w){v=B.a.i(t.a.a)
u=v.length===0?"\u2014":v}else{v=B.a.i(t.d.a.a)
u=v.length===0?"\u2014":v}v=!1
if(w)if(t.e.length!==0){w=t.a.a
w=B.a.i(w).length===0||t.f.q(0,w)}else w=v
else w=v
if(w)return
A.a7(t.r,!1).K(new C.bd8(u,s,""))},
$S:0}
C.f6A.prototype={
$0(){var w=this.a,v=w.R$=$.at()
w.O$=0
w=this.b
w.R$=v
w.O$=0
w=this.c
w.R$=v
w.O$=0},
$S:11}
C.f65.prototype={
$1(d){var w=null,v=x.p
return new A.B(E.wk,new C.o3(A.u(A.a([A.as(A.p(w,D.bxt,B.h,w,w,new A.o(B.fK.j(0.15),w,A.G(B.fK.j(0.55),B.r,1),w,A.a([new A.a9(0,B.G,B.fK.j(0.25),B.J,16)],x.V),w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.az,D.eOe,B.P,A.d(this.a,w,w,w,w,w,w,D.exX,B.L,w,w),B.au,A.d(this.b,w,w,w,w,w,w,B.i0,B.L,w,w),B.T,D.eIh,B.bu,A.A(A.a([A.C(A.bE(!1,D.eOz,w,w,!0,w,w,new C.f63(d),w,w),1),B.ab,A.C(A.bJ(D.eML,new C.f64(d),A.bk(B.fK,w,w,w,B.c,w,B.c9,w,new A.b5(A.m(14),B.W),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.af,w,B.e,B.R,0,B.p),!0,w),w)},
$S:60}
C.f63.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.f64.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.f5Y.prototype={
$2(d,e){return d+e.c},
$S:148}
C.f5Z.prototype={
$1(d){return d.w===this.a.ax},
$S:223}
C.f6_.prototype={
$1(d){var w=this
return new A.B(new A.L(12,0,12,A.aG(d,B.en,x.w).w.f.d),A.p7(new C.f5X(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),!0,0.72,0.92,0.45,!1,null),null)},
$S:60}
C.f5X.prototype={
$2(d,e){var w=this,v={}
v.a=D.a5j
return new A.eh(new C.f5W(v,e,w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),null)},
$S:1887}
C.f5W.prototype={
$2(d,e){var w=this,v=w.a,u=v.a,t=w.ay
t=t==null?null:new C.f5U(t,d,e)
return new C.o3(new C.be3(w.b,w.c,w.d,w.e,w.f,w.r,w.w,u,w.ax,new C.f5V(v,e),t,null),!1,null)},
$S:z+1}
C.f5V.prototype={
$1(d){return this.b.$1(new C.f5S(this.a,d))},
$S:z+8}
C.f5S.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f5U.prototype={
$1(d){return this.beU(d)},
beU(d){var w=0,v=A.j(x.H),u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a.$1(d),$async$$1)
case 2:if(u.b.e!=null)u.c.$1(new C.f5T())
return A.h(null,v)}})
return A.i($async$$1,v)},
$S:92}
C.f5T.prototype={
$0(){},
$S:0}
C.df3.prototype={
$2(d,e){return d+e.c},
$S:148}
C.df4.prototype={
$1(d){return d.w===this.a.d.ax},
$S:223}
C.df5.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a.x.x
r===$&&A.c()
w=B.bd.j(0.12+r*0.08)
v=A.G(B.bd.j(0.45+r*0.25),B.r,1)
r=A.a([new A.a9(0,B.G,B.bd.j(0.2+r*0.15),B.J,18)],x.V)
u=this.b
t=u?B.ob:B.he
return A.as(A.p(s,A.V(t,u?B.ik:B.bd,s,s,s,32),B.h,s,s,new A.o(w,s,v,s,r,s,B.a6),s,64,s,s,s,s,s,64),s,s,s)},
$S:228}
C.df6.prototype={
$2(d,e){return d+e.c},
$S:148}
C.df7.prototype={
$1(d){var w=this.a
return A.a([w.arh("All",D.a5j),w.arh("Contributions",D.aMI),w.arh("Missed",D.aMJ)],x.T)},
$S:z+9}
C.df8.prototype={
$1(d){return this.a.bQR(this.b,d)},
$S:z+10}
C.df9.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.df2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.c
w=4
return A.b(C.hAy(u.b,t.b),$async$$0)
case 4:w=e===!0?2:3
break
case 2:w=5
return A.b(u.a.cx.$1(t.d),$async$$0)
case 5:case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5z.prototype={
$1(d){var w=null,v=x.p
return new A.B(E.wk,new C.o3(A.u(A.a([A.as(A.p(w,D.bBK,B.h,w,w,new A.o(B.br.j(0.14),w,A.G(B.br.j(0.55),B.r,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.az,D.eDM,B.T,A.d(this.a,w,w,w,w,w,w,D.erd,B.L,w,w),B.T,D.eH5,B.bu,A.A(A.a([A.C(A.bE(!1,D.eCr,w,w,!0,w,w,new C.f5x(d),w,w),1),B.ab,A.C(A.bJ(D.eEE,new C.f5y(d),A.bk(B.br,w,w,w,B.bV,w,B.c9,w,new A.b5(A.m(14),B.W),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.af,w,B.e,B.R,0,B.p),!1,w),w)},
$S:60}
C.f5x.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.f5y.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.f5C.prototype={
$1(d){var w=null,v=x.p,u=A.a([A.as(A.p(w,D.bBA,B.h,w,w,new A.o(B.bd.j(0.14),w,A.G(B.bd.j(0.55),B.r,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.az,D.eXf,B.aa,C.fF0("Member",this.a),C.fF0("Amount","$"+B.k.ab(this.b,2))],v),t=this.c
if(t!=null&&B.a.i(t).length!==0)u.push(C.fF0("Help for",B.a.i(t)))
u.push(B.T)
u.push(D.eOb)
u.push(B.bu)
u.push(A.A(A.a([A.C(A.bE(!1,D.eQN,w,w,!0,w,w,new C.f5A(d),w,w),1),B.ab,A.C(A.bJ(D.eWl,new C.f5B(d),A.bk(B.bd,w,w,w,B.bV,w,B.c9,w,new A.b5(A.m(14),B.W),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w))
return new A.B(E.wk,new C.o3(A.u(u,B.af,w,B.e,B.R,0,B.p),!0,w),w)},
$S:60}
C.f5A.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.f5B.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.f5O.prototype={
$0(){var w=this,v=w.a,u=w.b.a.a,t=w.c.a.a,s=w.d.a.a,r=w.e.a.a
v.z=B.a.i(u)
v.Q=B.a.i(t)
v.as=B.a.i(s)
v.at=B.a.i(r)},
$S:0}
C.f5P.prototype={
$1(d){var w=this
return new A.B(new A.L(0,0,0,A.aG(d,B.en,x.w).w.f.d),A.p7(new C.f5N(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,d),!0,0.82,0.94,0.5,!1,null),null)},
$S:60}
C.f5N.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.b,q=C.fWN(r,t.a),p=A.d(r?"Help mode is live":"Set up group help mode",s,s,s,s,s,s,B.dP,B.L,s,s),o=x.p
p=A.a([q,B.P,p,B.ar,A.d(r?"Members see the green icon and your payment details. Turn off when the round ends.":"Fill in where members send money. These details stay saved for next time.",s,s,s,s,s,s,D.aJq,B.L,s,s),B.aO,A.d("HELP DETAILS",s,s,s,s,s,s,A.l(s,s,B.br.j(0.9),s,s,s,s,s,s,s,s,11,s,s,B.I,s,s,!0,s,1.4,s,s,s,s,s,s),s,s,s),B.T,A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),t.c,s,s,s,s,s,2,C.IP("What are you collecting for?"),B.z,!0,s,!0,s,!1,s,B.ad,s,s,s,s,s,s,s,s,s,2,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,B.di,!0,B.a5,s,B.am,s,s,s,s),B.T,A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),t.d,s,s,s,s,s,2,C.IP("Cash App"),B.z,!0,s,!0,s,!1,s,B.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,B.di,!0,B.a5,s,B.am,s,s,s,s),B.T,A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),t.e,s,s,s,s,s,2,C.IP("Zelle"),B.z,!0,s,!0,s,!1,s,B.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,B.di,!0,B.a5,s,B.am,s,s,s,s),B.T,A.aK(s,B.U,!1,s,!0,B.q,s,A.aL(),t.f,s,s,s,s,s,2,C.IP("Phone number \u2014 questions or confirm payment"),B.z,!0,s,!0,s,!1,s,B.ad,s,s,B.ZU,s,s,B.jp,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,B.di,!0,B.a5,s,B.am,s,s,s,s),B.bu],o)
q=t.r
w=t.w
v=t.x
if(r){r=A.bJ(D.eJC,new C.f5I(q,w,v),A.bk(B.fK,s,s,s,B.c,s,B.c9,s,new A.b5(A.m(14),B.W),s,s,s))
u=B.br.j(0.55)
B.d.v(p,A.a([r,B.P,A.dU(D.eJy,new C.f5J(q,v,w),A.d9(s,s,s,s,s,s,s,s,s,B.iC,s,s,B.c9,s,new A.b5(A.m(14),B.W),new A.ay(u,1,B.r,-1),s,s,s,s))],o))}else{r=B.bd.j(0.45)
B.d.v(p,A.a([A.dU(D.eCB,new C.f5K(q,v,w),A.d9(s,s,s,s,s,s,s,s,s,B.bd,s,s,B.c9,s,new A.b5(A.m(14),B.W),new A.ay(r,1,B.r,-1),s,s,s,s)),B.P,A.bJ(D.eVE,new C.f5L(q,w,v),A.bk(B.br,s,s,s,B.bV,s,B.c9,s,new A.b5(A.m(14),B.W),s,s,s))],o))}p.push(B.P)
p.push(A.bE(!1,F.Hf,s,s,!0,s,s,new C.f5M(v),s,s))
return new C.o3(A.cL(p,e,s,s,s,B.ag,!1),!0,s)},
$S:z+2}
C.f5I.prototype={
$0(){var w,v,u
this.a.$0()
w=this.b
v=B.a.i(w.ax)
u=w.z
if(v.length!==0&&!B.d.q(w.CW,v)){w.bV3(v,u)
B.d.H(w.CW,v)}w.y=!1
w.ax=""
w.ay=null
A.a7(this.c,!1).K(w)},
$S:0}
C.f5J.prototype={
$0(){this.a.$0()
A.a7(this.b,!1).K(this.c)},
$S:0}
C.f5K.prototype={
$0(){this.a.$0()
A.a7(this.b,!1).K(this.c)},
$S:0}
C.f5L.prototype={
$0(){var w,v=this
v.a.$0()
w=v.b
if(B.a.i(w.z).length===0){v.c.F(x.q).f.P(D.eil)
return}w.cuD()
A.a7(v.c,!1).K(w)},
$S:0}
C.f5M.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.f5Q.prototype={
$0(){var w=this,v=w.a,u=v.R$=$.at()
v.O$=0
v=w.b
v.R$=u
v.O$=0
v=w.c
v.R$=u
v.O$=0
v=w.d
v.R$=u
v.O$=0},
$S:11}
C.f5H.prototype={
$1(d){return new A.B(E.wk,A.p7(new C.f5G(this.a,this.b,d),!0,0.72,0.9,0.45,!1,null),null)},
$S:60}
C.f5G.prototype={
$2(d,e){var w=this,v=null,u=A.a([C.fWN(!0,w.a),B.T,D.eXW,B.ar,D.eNK,B.aO],x.p),t=w.b,s=B.a.i(t.z)
if(s.length!==0)u.push(C.eZd(w.c,B.lq,"COLLECTING FOR",v,v,s))
s=B.a.i(t.Q)
if(s.length!==0)u.push(C.eZd(w.c,B.hK,"CASH APP",new C.f5D(t),"Open Cash App",s))
s=B.a.i(t.as)
if(s.length!==0)u.push(C.eZd(w.c,B.je,"ZELLE",v,v,s))
s=t.at
if(B.a.i(s).length!==0)u.push(C.eZd(w.c,B.uz,"PHONE NUMBER",new C.f5E(t),"Call",A.mE(s)))
if(B.a.i(t.z).length===0&&B.a.i(t.Q).length===0&&B.a.i(t.as).length===0&&B.a.i(t.at).length===0)u.push(D.dM5)
u.push(B.aa)
u.push(A.bE(!1,D.aKK,v,v,!0,v,v,new C.f5F(w.c),v,v))
return new C.o3(A.cL(u,e,v,v,v,B.ag,!1),!1,v)},
$S:z+2}
C.f5D.prototype={
$0(){return C.bvL(this.a.Q)},
$S:0}
C.f5E.prototype={
$0(){return C.buM(this.a.at)},
$S:0}
C.f5F.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eZf.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a.x
q===$&&A.c()
w=this.b
v=w?B.br.j(0.22+q*0.18):B.bd.j(0.14)
u=w?B.iC.j(0.85+q*0.15):B.bd.j(0.5)
u=A.G(u,B.r,w?2:1)
t=w?A.a([new A.a9(1+q,B.G,B.br.j(0.4+q*0.35),B.J,18+q*10)],x.V):r
s=w?B.iC:B.bd
return A.as(A.p(r,A.V(B.mG,s,r,r,w?A.a([new A.cI(B.br.j(0.95),B.J,12+q*8)],x.r):r,r),B.h,r,r,new A.o(v,r,u,r,t,r,B.a6),r,56,r,r,r,r,r,56),r,r,r)},
$S:228}
C.eZe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fB(new A.fu(t.a)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.F(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Copied "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.f67.prototype={
$1(d){return new A.En(d.a,d.b)},
$S:459}
C.f68.prototype={
$1(d){var w=this.a
if(B.a.i(w.d).toLowerCase()!==B.a.i(d.b).toLowerCase()){w=w.x
w=w.length!==0&&w===B.a.i(d.a.toLowerCase())}else w=!0
return w},
$S:196}
C.f69.prototype={
$2(d,e){return d+e.c},
$S:148}
C.f6a.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="x in all \xb7 missed ",j=A.aG(a1,l,x.w).w,i=m.b,h=i.length,g=m.c.length,f=B.k.ab(m.d,2),e=m.e,d=e?" \xb7 round is open":"",a0=x.p
d=A.a([C.aL0(B.mG,""+h+" of "+g+" gave \xb7 total $"+f+d,m.a),B.aa,A.bu(A.m(8),A.mP(B.du,l,l,10,l,m.f,D.aO7),B.ap),B.aO,A.d("GAVE ("+i.length+")",l,l,l,l,l,l,D.etr,l,l,l),B.ar],a0)
if(i.length===0)d.push(D.eFQ)
for(h=i.length,g=m.r,w=0;w<i.length;i.length===h||(0,A.J)(i),++w){v=i[w]
f=new A.b3(12,12)
u=B.br.j(0.07)
t=new A.b3(12,12)
s=new A.ay(B.br.j(0.3),1,B.r,-1)
r=v.a
q=r.b
p=v.b
o=p.f.bP()
r=r.a
d.push(A.aH(!1,new A.bx(f,f,f,f),!0,A.p(l,new A.cD(B.aY,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bz8,B.aw,new A.bG(1,B.bp,A.u(A.a([new A.w(q,l,B.hi,l,l,l,l,l,l,l,l,l),new A.w(""+A.bB(o)+"/"+A.bL(o)+"/"+A.bv(o)+" \xb7 gave "+g.akL(q,r)+k+g.a2I(q,r)+" \xb7 tap for receipt",l,B.BD,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l),new A.w("$"+B.k.ab(p.c,2),l,D.evC,l,l,l,l,l,l,l,l,l)],a0),l),B.h,l,l,new A.o(u,l,new A.c2(s,s,s,s),new A.bx(t,t,t,t),l,l,B.n),l,l,l,B.fh,B.bS,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.f66(a1,g,v),l,l,l,l,l,l,l))}d.push(B.aa)
i=m.w
h=i.length
d.push(A.d(e?"NOT YET ("+h+")":"DID NOT GIVE ("+h+")",l,l,l,l,l,l,D.er2,l,l,l))
d.push(B.ar)
if(i.length===0)d.push(D.eLT)
for(h=i.length,w=0;w<i.length;i.length===h||(0,A.J)(i),++w){n=i[w]
f=B.ik.j(0.07)
e=new A.b3(12,12)
s=new A.ay(B.ik.j(0.3),1,B.r,-1)
u=n.b
t=n.a
d.push(A.p(l,new A.cD(B.aY,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bu5,B.aw,new A.bG(1,B.bp,A.u(A.a([new A.w(u,l,B.hi,l,l,l,l,l,l,l,l,l),new A.w("gave "+g.akL(u,t)+k+g.a2I(u,t),l,B.BD,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l)],a0),l),B.h,l,l,new A.o(f,l,new A.c2(s,s,s,s),new A.bx(e,e,e,e),l,l,B.n),l,l,l,B.fh,B.bS,l,l,l))}return new A.d3(new A.aV(0,1/0,0,j.a.b*0.88),new C.o3(A.cg(A.u(d,B.F,l,B.e,B.j,0,B.p),B.q,l,B.z,l,l,l,l,B.ag),!0,l),l)},
$S:1888}
C.f66.prototype={
$0(){return C.hAE(this.a,this.b,this.c.b)},
$S:0}
C.f62.prototype={
$2(d,e){var w=null
return new A.B(B.ua,A.A(A.a([new A.a3(96,w,A.d(d,w,w,w,w,w,w,B.BE,w,w,w),w),A.C(A.d(e,w,w,w,w,w,w,G.aJA,w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:131}
C.f61.prototype={
$1(d){var w=this,v=null,u=w.b,t=w.c,s=A.a([C.aL0(B.fR,w.a,"Receipt"),B.aa,u.$2("From",t.d),u.$2("For",w.d),u.$2("Amount","$"+B.k.ab(t.c,2)),u.$2("Date",w.e)],x.p),r=t.e
if(r.length!==0)s.push(u.$2("Note",r))
r=w.f
s.push(u.$2("Group",r.e+" \xb7 owner "+r.d))
t=t.r
s.push(u.$2("Recorded by",t.length===0?r.c:t))
s.push(B.aa)
s.push(A.dj(R.Ai,D.eTn,new C.f60(w.r,d),A.bk(B.bd,v,v,v,B.x,B.y6,v,v,v,v,v,v)))
return new C.o3(A.u(s,B.F,v,B.e,B.R,0,B.p),!0,v)},
$S:z+11}
C.f60.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fB(new A.fu(u.a)),$async$$0)
case 2:t=u.b
if(t.e!=null)t.F(x.q).f.P(D.eiF)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5R.prototype={
$1(d){var w=null,v=x.w
return new A.B(new A.L(0,0,0,A.aG(d,w,v).w.f.d),new A.d3(new A.aV(0,1/0,0,A.aG(d,w,v).w.a.b*0.92),new C.o3(new C.axT(this.a,this.b,this.c,w),!0,w),w),w)},
$S:60}
C.d7A.prototype={
$1(d){return new A.En(d.a,d.b)},
$S:459}
C.d7B.prototype={
$1(d){return d.a!==B.a.i(this.a.a.e.toLowerCase())},
$S:196}
C.d7C.prototype={
$1(d){return d.length!==0},
$S:3}
C.d7D.prototype={
$0(){return this.a.w="Write your first and last name."},
$S:0}
C.d7E.prototype={
$0(){return this.a.w="Your phone number is needed."},
$S:0}
C.d7F.prototype={
$0(){return this.a.w="Choose the state you live in."},
$S:0}
C.d7G.prototype={
$0(){return this.a.w="Your home address is needed."},
$S:0}
C.d7S.prototype={
$1(d){return C.IP(d)},
$S:273}
C.d7M.prototype={
$1(d){var w=this.a
return w.n(new C.d7L(w,d))},
$S:32}
C.d7L.prototype={
$0(){var w=this.b
if(w==null)w=""
return this.a.r=w},
$S:0}
C.d7N.prototype={
$1(d){var w=this.a
return w.n(new C.d7K(w,this.b,d))},
$S:32}
C.d7K.prototype={
$0(){var w=this.a.x,v=this.b,u=this.c
if(u==null)u="mother"
u=new A.abC(w[v].a,u)
w[v]=u
return u},
$S:0}
C.d7O.prototype={
$1(d){var w=this.a
return w.n(new C.d7J(w,this.b,d))},
$S:198}
C.d7J.prototype={
$0(){var w=this.a.x,v=this.b,u=w[v],t=this.c
if(t==null)t=-1
u=new A.abC(t,u.b)
w[v]=u
return u},
$S:0}
C.d7P.prototype={
$0(){var w=this.a
return w.n(new C.d7I(w,this.b))},
$S:0}
C.d7I.prototype={
$0(){return B.d.cu(this.a.x,this.b)},
$S:0}
C.d7Q.prototype={
$0(){var w=this.a
return w.n(new C.d7H(w))},
$S:0}
C.d7H.prototype={
$0(){return this.a.x.push(new A.abC(-1,"mother"))},
$S:0}
C.d7R.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0};(function aliases(){var w=C.aHY.prototype
w.boK=w.p
w=C.aHZ.prototype
w.boL=w.p
w=C.aIx.prototype
w.bpl=w.p})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=C.azH.prototype,"gbBR","yW",0)
w(u,"gbSF","W7",0)
w(u,"gbYz","X3",0)
w(u=C.azE.prototype,"gc4V","Oj",0)
w(u,"gbYw","aaG",0)
w(u,"gbFb","UY",0)
v(C.azG.prototype,"gbYx","bYy",7)
w(C.axU.prototype,"gbYA","bYB",12)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.i2,[C.c_P,C.c_R,C.c_Q,C.c_T,C.c_U,C.c_Y,C.c02,C.c_W,C.c_S,C.c_M,C.c_K,C.c00,C.c_N,C.c_Z,C.c0_,C.eXk,C.f16,C.f17,C.dBV,C.dBK,C.dBS,C.dBU,C.dY7,C.dY5,C.dY6,C.dY4,C.dYg,C.dBH,C.dBj,C.dBt,C.dBu,C.dBn,C.d5q,C.d8Y,C.f6l,C.f6h,C.f6F,C.f6C,C.f6B,C.f6y,C.f6z,C.f6p,C.f6q,C.f6r,C.f6t,C.f6u,C.f65,C.f5Z,C.f6_,C.f5V,C.f5U,C.df4,C.df7,C.df8,C.f5z,C.f5C,C.f5P,C.f5H,C.f67,C.f68,C.f6a,C.f61,C.f5R,C.d7A,C.d7B,C.d7C,C.d7S,C.d7M,C.d7N,C.d7O])
v(A.kw,[C.c04,C.c_L,C.eXj,C.f18,C.dBP,C.dBM,C.dYd,C.dYh,C.d4T,C.d58,C.dBy,C.dBB,C.dBq,C.d5p,C.d90,C.d8Z,C.d9_,C.f6k,C.f6x,C.f5Y,C.f5X,C.f5W,C.df3,C.df5,C.df6,C.f5N,C.f5G,C.eZf,C.f69,C.f62])
u(C.B8,A.mb)
v(A.aC,[C.vy,C.bd8,C.bcE])
v(C.vy,[C.NC,C.Ig])
v(A.ae,[C.alW,C.anx,C.Gy,C.azF,C.axT])
v(A.ag,[C.aHZ,C.aIx,C.aHY,C.azG,C.axU])
u(C.azH,C.aHZ)
v(A.jk,[C.dBL,C.dBJ,C.dBR,C.dBQ,C.dBO,C.dBT,C.dBN,C.dY8,C.dY2,C.dY3,C.dYe,C.dYf,C.dYc,C.dYb,C.dY9,C.dYa,C.dBv,C.dBr,C.dBs,C.dBw,C.dBx,C.dBz,C.dBC,C.dBD,C.dBE,C.dBF,C.dBG,C.dBA,C.dBm,C.dBl,C.dBk,C.dBo,C.dBp,C.dBI,C.f6g,C.f6i,C.f6j,C.f6f,C.f6D,C.f6E,C.f6s,C.f6o,C.f6n,C.f6m,C.f6v,C.f6w,C.f6A,C.f63,C.f64,C.f5S,C.f5T,C.df9,C.df2,C.f5x,C.f5y,C.f5A,C.f5B,C.f5O,C.f5I,C.f5J,C.f5K,C.f5L,C.f5M,C.f5Q,C.f5D,C.f5E,C.f5F,C.eZe,C.f66,C.f60,C.d7D,C.d7E,C.d7F,C.d7G,C.d7L,C.d7K,C.d7J,C.d7P,C.d7I,C.d7Q,C.d7H,C.d7R])
u(C.bfW,C.aIx)
v(A.ar,[C.a92,C.B4,C.axi,C.bdb,C.bbC,C.bda,C.bd7,C.bd9,C.be3,C.o3])
v(A.n4,[C.aap,C.NX])
u(C.azE,C.aHY)
u(C.bfA,A.j_)
w(C.aHY,A.eK)
w(C.aHZ,A.eK)
w(C.aIx,A.eK)})()
A.kd(b.typeUniverse,JSON.parse('{"NC":{"vy":[]},"Ig":{"vy":[]},"alW":{"ae":[],"r":[]},"anx":{"ae":[],"r":[]},"a92":{"ar":[],"r":[]},"Gy":{"ae":[],"r":[]},"azF":{"ae":[],"r":[]},"o3":{"ar":[],"r":[]},"axT":{"ae":[],"r":[]},"azH":{"ag":["alW"]},"bfW":{"ag":["anx"]},"B4":{"ar":[],"r":[]},"axi":{"ar":[],"r":[]},"aap":{"az":[]},"azE":{"ag":["Gy"]},"azG":{"ag":["azF"]},"bdb":{"ar":[],"r":[]},"bbC":{"ar":[],"r":[]},"bda":{"ar":[],"r":[]},"bd7":{"ar":[],"r":[]},"bd9":{"ar":[],"r":[]},"NX":{"az":[]},"bfA":{"j_":[]},"be3":{"ar":[],"r":[]},"axU":{"ag":["axT"]}}'))
var y={d:"That group code is already taken. Try another."}
var x=(function rtii(){var w=A.aA
return{Q:w("eq<n>"),c:w("eq<H>"),J:w("M<afP>"),V:w("M<a9>"),O:w("M<x>"),t:w("M<eq<n>>"),u:w("M<eq<H>>"),A:w("M<a1<n,n>>"),D:w("M<nb>"),x:w("M<pk>"),B:w("M<Hd>"),v:w("M<hx>"),T:w("M<oC<B8>>"),Z:w("M<+(+email,name(n,n),pk)>"),S:w("M<+email,name(n,n)>"),i:w("M<+person,relation(H,n)>"),r:w("M<cI>"),s:w("M<n>"),F:w("M<j_>"),p:w("M<r>"),U:w("M<az?>"),m:w("al<nb>"),P:w("a1<n,@>"),f:w("a1<@,@>"),w:w("iA"),L:w("nb"),Y:w("Hd"),N:w("n"),I:w("oH"),K:w("a4<+email,name(n,n)>"),C:w("e2<NC>"),o:w("e2<Ig>"),l:w("r"),n:w("bcE"),R:w("bd8"),E:w("B8"),W:w("vy"),a:w("Ig"),q:w("mx"),y:w("S"),z:w("@"),G:w("H"),_:w("a1<n,@>?"),h:w("nb?"),X:w("aC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aO7=new A.nE(B.br,A.aA("nE<x?>"))
D.aPC=new A.ay(B.bd,1,B.r,-1)
D.aPQ=new A.ay(B.cN,1,B.r,-1)
D.aR_=new A.aV(20,1/0,0,1/0)
D.aRd=new A.aV(0,1/0,0,150)
D.eEH=new A.w("Tap code to copy",null,B.BE,null,null,null,null,null,null,null,null,null)
D.aWP=new A.cw(B.B,null,null,D.eEH,null)
D.eF9=new A.w("No groups found.",null,B.kd,null,null,null,null,null,null,null,null,null)
D.aXd=new A.cw(B.B,null,null,D.eF9,null)
D.bfc=new A.L(14,12,6,12)
D.bfH=new A.L(16,10,16,8)
D.bg1=new A.L(16,4,16,36)
D.bgl=new A.L(18,10,18,36)
D.bgq=new A.L(18,12,18,4)
D.bgK=new A.L(18,22,18,18)
D.eHw=new A.w("Waiting to join",null,B.jq,null,null,null,null,null,null,null,null,null)
D.bkt=new A.bG(1,B.bp,D.eHw,null)
D.blc=new A.bG(1,B.bp,B.bF,null)
D.bpl=new A.a_(63323,"MaterialIcons",!1)
D.ah9=new A.a_(983761,"MaterialIcons",!1)
D.bsS=new A.ac(B.eq,null,B.eo,null,null,null)
D.bsU=new A.ac(B.he,22,B.bd,null,null,null)
D.bsV=new A.ac(B.hs,16,B.br,null,null,null)
D.btN=new A.ac(B.KH,22,B.eo,null,null,null)
D.bu5=new A.ac(B.Xy,20,B.ik,null,null,null)
D.buU=new A.ac(B.e4,22,B.cN,null,null,null)
D.bvm=new A.ac(B.DX,20,B.bd,null,null,null)
D.bw5=new A.ac(B.hH,null,B.bd,null,null,null)
D.bwW=new A.ac(B.uB,18,B.bd,null,null,null)
D.bx2=new A.ac(B.fy,18,B.bd,null,null,null)
D.bxt=new A.ac(B.bqg,null,B.fK,null,null,null)
D.byv=new A.ac(B.he,null,B.bd,null,null,null)
D.bz8=new A.ac(B.ej,20,B.br,null,null,null)
D.bBh=new A.ac(D.ah9,null,B.bd,null,null,null)
D.bBA=new A.ac(B.wQ,null,B.bd,null,null,null)
D.bBK=new A.ac(B.p1,null,B.br,null,null,null)
D.arG=w([],x.x)
D.cZV=w(["mother","father","spouse","child","brother","sister"],x.s)
D.dJa=new A.v(10,8)
D.by5=new A.ac(B.o7,20,B.ik,null,null,null)
D.dLU=new A.B(B.ks,D.by5,null)
D.eUu=new A.w("The group owner has not added payment details yet.",null,B.kd,null,B.L,null,null,null,null,null,null,null)
D.dM5=new A.B(B.eV,D.eUu,null)
D.dRh=new A.AD(null,B.dQ)
D.dRj=new A.AE(null,B.dQ)
D.dSx=new A.T(0,"Ledger")
D.dT0=new A.T(1,"People")
D.dTg=new A.T(2,"Invite")
D.eQM=new A.w("Your request is already waiting. The group owner has to approve you.",null,null,null,null,null,null,null,null,null,null,null)
D.eh0=new A.aY(D.eQM,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ePq=new A.w("Help mode is active but missing a campaign.",null,null,null,null,null,null,null,null,null,null,null)
D.ehM=new A.aY(D.ePq,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eEZ=new A.w("Activate help mode before recording a contribution.",null,null,null,null,null,null,null,null,null,null,null)
D.eii=new A.aY(D.eEZ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eUS=new A.w("Add what you are collecting for, then activate help mode.",null,null,null,null,null,null,null,null,null,null,null)
D.eil=new A.aY(D.eUS,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eUf=new A.w("This group is full (100 members). Ask the owner to unlock more seats.",null,null,null,null,null,null,null,null,null,null,null)
D.eio=new A.aY(D.eUf,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eM8=new A.w("Receipt copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eiF=new A.aY(D.eM8,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eLE=new A.w("Your request is waiting. The group owner has to approve you first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekf=new A.aY(D.eLE,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eFL=new A.w("No group found for that code.",null,null,null,null,null,null,null,null,null,null,null)
D.ekr=new A.aY(D.eFL,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eTs=new A.w("Could not send your request.",null,null,null,null,null,null,null,null,null,null,null)
D.ekz=new A.aY(D.eTs,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.aIX=new A.F(!0,B.c,null,null,null,null,15,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoH=new A.F(!0,B.aB,null,null,null,null,10,B.I,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoP=new A.F(!0,B.bd,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eq7=new A.F(!0,B.bd,null,null,null,null,22,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eqV=new A.F(!0,B.ik,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er2=new A.F(!0,B.ik,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erd=new A.F(!0,B.iC,null,null,null,null,16,B.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.erv=new A.F(!0,B.c,null,null,null,null,16,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3Y=new A.F(!0,B.c2,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJq=new A.F(!0,B.aB,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etr=new A.F(!0,B.br,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etA=new A.F(!0,B.bd,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euN=new A.F(!0,B.c,null,null,null,null,20,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evC=new A.F(!0,B.br,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ew2=new A.F(!0,B.eo,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewY=new A.F(!0,B.bd,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exw=new A.F(!0,B.bd,null,null,null,null,15,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exX=new A.F(!0,B.bd,null,null,null,null,16,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAX=new A.F(!0,B.fO,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCr=new A.w("Keep missed",null,B.l8,null,null,null,null,null,null,null,null,null)
D.eCB=new A.w("Save details for later",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eD5=new A.w("Create group",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eAJ=new A.F(!0,B.bd,null,null,null,null,12,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDp=new A.w("LIGHTNING CIRCLE",null,D.eAJ,null,null,null,null,null,null,null,null,null)
D.eDM=new A.w("Clear missed contribution?",null,B.dP,null,B.L,null,null,null,null,null,null,null)
D.eEq=new A.w("Share this code or QR so others can join from Lightning Groups.",null,B.BE,null,B.L,null,null,null,null,null,null,null)
D.ev8=new A.F(!0,B.bd,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEw=new A.w("Add a family member from the group",null,D.ev8,null,null,null,null,null,null,null,null,null)
D.eEE=new A.w("Yes, clear it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eFQ=new A.w("Nobody yet.",null,B.kd,null,null,null,null,null,null,null,null,null)
D.eG9=new A.w("No contributions or spending yet.",null,B.kd,null,null,null,null,null,null,null,null,null)
D.eGs=new A.w("Clear",null,B.QM,null,null,null,null,null,null,null,null,null)
D.aKk=new A.F(!0,B.aB,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGJ=new A.w("No member matches that search.",null,D.aKk,null,null,null,null,null,null,null,null,null)
D.QR=new A.F(!0,B.c2,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH5=new A.w("This removes the missed mark for this member. Only clear if they paid or you confirmed the contribution.",null,D.QR,null,B.L,null,null,null,null,null,null,null)
D.etv=new A.F(!0,B.c2,null,null,null,null,11,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHl=new A.w("Type letters or numbers in any order \u2014 code becomes 3 letters then numbers (e.g. ABC123).",null,D.etv,null,null,null,null,null,null,null,null,null)
D.eI9=new A.w("Nobody else is in this group yet.",null,B.kd,null,null,null,null,null,null,null,null,null)
D.eIh=new A.w("They will lose access to this group ledger and invite list.",null,D.QR,null,B.L,null,null,null,null,null,null,null)
D.eJy=new A.w("Save details",null,B.cb,null,null,null,null,null,null,null,null,null)
D.eqa=new A.F(!0,B.br,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJB=new A.w("Everyone has already contributed to this round.",null,D.eqa,null,null,null,null,null,null,null,null,null)
D.eJC=new A.w("Deactivate help mode",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eKZ=new A.w("Send my request",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eLr=new A.w("Your own civic circle \u2014 no states, no case wallet.\nInvite by code or QR. Owner tracks money in & out.",null,M.H8,null,B.L,null,null,null,null,null,null,null)
D.eLT=new A.w("Everyone gave. Wonderful!",null,B.kd,null,null,null,null,null,null,null,null,null)
D.eMb=new A.w("FAMILY IN THIS GROUP (optional)",null,Q.md,null,null,null,null,null,null,null,null,null)
D.aKK=new A.w("Close",null,B.l8,null,null,null,null,null,null,null,null,null)
D.eou=new A.F(!0,B.br,null,null,null,null,9.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMz=new A.w("OPEN",null,D.eou,null,null,null,null,null,null,null,null,null)
D.eML=new A.w("Remove",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eMN=new A.w("Decline this request?",null,B.kc,null,null,null,null,null,null,null,null,null)
D.eNK=new A.w("Send your contribution using the details below. Call if you have questions or to confirm payment was received.",null,D.aJq,null,B.L,null,null,null,null,null,null,null)
D.eOb=new A.w("Make sure this is correct before saving to the ledger.",null,D.QR,null,B.L,null,null,null,null,null,null,null)
D.eOe=new A.w("Remove member?",null,B.dP,null,B.L,null,null,null,null,null,null,null)
D.eOz=new A.w("Keep member",null,B.l8,null,null,null,null,null,null,null,null,null)
D.eOP=new A.w("Are your mother, father, spouse, children or brothers and sisters already here? Choose them.",null,D.QR,null,null,null,null,null,null,null,null,null)
D.eOW=new A.w("Request sent",null,B.kc,null,null,null,null,null,null,null,null,null)
D.eQN=new A.w("Go back",null,B.l8,null,null,null,null,null,null,null,null,null)
D.eRB=new A.w("Scan group QR",null,null,null,null,null,null,null,null,null,null,null)
D.eRY=new A.w("Tap who put money in \u2014 people who joined this group.",null,B.i0,null,B.L,null,null,null,null,null,null,null)
D.eSP=new A.w("Record contribution",null,B.fL,null,B.L,null,null,null,null,null,null,null)
D.eTn=new A.w("Copy receipt",null,null,null,null,null,null,null,null,null,null,null)
D.eVE=new A.w("Activate help mode",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eWl=new A.w("Confirm & save",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eXf=new A.w("Verify contribution",null,B.dP,null,B.L,null,null,null,null,null,null,null)
D.eXm=new A.w("Delete group?",null,B.di,null,null,null,null,null,null,null,null,null)
D.eXE=new A.w("Save",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eu7=new A.F(!0,B.iC,null,null,null,null,14,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXW=new A.w("HELP MODE ACTIVE",null,D.eu7,null,B.L,null,null,null,null,null,null,null)
D.eY2=new A.w("No members yet \u2014 invite people with your code first.",null,D.aKk,null,null,null,null,null,null,null,null,null)
D.a5j=new C.B8(0,"all")
D.aMI=new C.B8(1,"contributions")
D.aMJ=new C.B8(2,"missed")
D.f4a=new C.azF(null)})()};
(a=>{a["i1oPrJCINIDd4nY+bw/HhbqCm38="]=a.current})($__dart_deferred_initializers__);