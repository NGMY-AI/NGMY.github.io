((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,L,I,M,C={
hx4(d){var w=B.a.i(d),v=A.ag("^[A-Z]{3}[0-9]{1,5}$",!0,!1,!1,!1)
return v.b.test(w.toUpperCase())},
h3k(){var w=$.a7_
if(w==null)w=B.cv
return A.xF(w,x.L)},
cav(d){var w,v,u=$.a7_
if(u==null)return null
try{w=J.h0V(u,new C.caw(d))
return w}catch(v){return null}},
hNG(d){var w=B.a.i(d.toLowerCase()),v=C.h3k(),u=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.cay(w),u),u.k("M.E"))
return v},
hNF(d){var w=B.a.i(d.toLowerCase()),v=C.h3k(),u=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.cax(w),u),u.k("M.E"))
return v},
caL(){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$caL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=$.a7_
if(o!=null&&o.length!==0){w=1
break}n=A
m=J
w=3
return A.b(A.az(),$async$caL)
case 3:t=n.aS(m.r(e.a,"ngmy_civic_user_groups_v1"))
if(t==null||t.length===0){w=1
break}try{s=B.X.aM(0,t,null)
if(x.f.b(s)){r=A.NA(A.a2(s,x.N,x.z))
o=r
q=A.a7(o).k("bd<2>")
o=A.C(new A.bd(o,q),q.k("M.E"))
B.d.aZ(o,new C.caM())
$.a7_=o}}catch(l){}case 1:return A.h(u,v)}})
return A.i($async$caL,v)},
b_o(d){var w=0,v=A.j(x._),u,t,s,r,q,p,o,n
var $async$b_o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=x.N
q=x.z
w=3
return A.b(A.kY(A.H(["action","civicUserGroupsPersist","value",d],r,q),!1,!1,null),$async$b_o)
case 3:p=f
o=p==null
n=!o
if(n){t=J.a6(p)
t=J.A(t.h(p,"ok"),!0)&&x.f.b(t.h(p,"value"))}else t=!1
if(t){u=A.a2(x.f.a(J.r(p,"value")),r,q)
w=1
break}r=o?null:J.r(p,"error")
s=B.a.i(J.k(r==null?"":r))
if(n&&J.A(J.r(p,"ok"),!1)&&B.a.t(s,"already taken"))throw A.W(A.be(s))
w=4
return A.b(A.nC("civic_user_groups_v1",d,null),$async$b_o)
case 4:u=f?d:null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_o,v)},
IF(d){return C.hND(d)},
hND(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$IF=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:J.aJ(d,"updatedAt",new A.V(Date.now(),0,!1).a9().ae())
w=2
return A.b(A.az(),$async$IF)
case 2:q=f
w=3
return A.b(q.ar("String","ngmy_civic_user_groups_v1",B.X.aq(d,null)),$async$IF)
case 3:s=null
u=5
w=8
return A.b(C.b_o(d),$async$IF)
case 8:s=f
u=1
w=7
break
case 5:u=4
i=t.pop()
o=A.ab(i)
if(o instanceof A.lY){r=o
if(B.a.t(r.a,"already taken"))throw i}else throw i
w=7
break
case 4:w=1
break
case 7:o=s
n=A.NA(o==null?d:o)
if(n.a===0)throw A.W(A.be("Could not sync this group to the cloud. Check your connection and try again."))
o=new A.du(n,n.r,n.e)
case 9:if(!o.C()){w=10
break}w=11
return A.b(A.apz(o.d),$async$IF)
case 11:w=9
break
case 10:m=s
if(m==null)m=d
o=A.U(x.N,x.P)
for(l=A.a7(n),k=new A.cD(n,l.k("cD<1,2>")).gaf(0);k.C();){r=k.d
o.n(0,r.a,r.b.ah())}J.aJ(m,"groups",o)
w=12
return A.b(q.ar("String","ngmy_civic_user_groups_v1",B.X.aq(m,null)),$async$IF)
case 12:o=l.k("bd<2>")
j=A.C(new A.bd(n,o),o.k("M.E"))
B.d.aZ(j,new C.cas())
$.a7_=j
return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$IF,v)},
apA(d){return C.hNH(d)},
hNH(d){var w=0,v=A.j(x.h),u,t,s,r
var $async$apA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.IG(),$async$apA)
case 3:r=f
try{t=J.h0V(r,new C.caA(d))
u=t
w=1
break}catch(q){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$apA,v)},
V1(d){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m,l
var $async$V1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m=A.fNz(d)
l=m==null?B.a.i(d).toUpperCase():m
if(J.ad(l)===0){u=null
w=1
break}w=3
return A.b(A.b_m(l),$async$V1)
case 3:s=f
if(s!=null){u=s
w=1
break}r=x.N
q=x.z
w=4
return A.b(A.kY(A.H(["action","civicUserGroupsFind","code",l],r,q),!1,!1,null),$async$V1)
case 4:p=f
if(p!=null){o=J.dn(p)
o=o.aj(p,"group")&&x.f.b(o.h(p,"group"))}else o=!1
if(o){u=A.h3i(A.a2(x.f.a(J.r(p,"group")),r,q))
w=1
break}w=5
return A.b(A.IG(),$async$V1)
case 5:t=f
try{r=J.h0V(t,new C.caB(l))
u=r
w=1
break}catch(k){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$V1,v)},
b_r(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$b_r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.IG(),$async$b_r)
case 3:s=r.dJ(f,new C.caF(t))
s=A.C(s,s.$ti.k("M.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_r,v)},
caJ(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$caJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.IG(),$async$caJ)
case 3:s=r.dJ(f,new C.caK(t))
s=A.C(s,s.$ti.k("M.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caJ,v)},
caC(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$caC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.IG(),$async$caC)
case 3:s=r.dJ(f,new C.caD(t))
s=A.C(s,s.$ti.k("M.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caC,v)},
a70(d,e,f){var w=0,v=A.j(x.L),u,t,s,r,q,p,o,n,m,l,k
var $async$a70=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:k=B.a.i(d).toUpperCase()
if(!C.hx4(k))throw A.W(A.dM("Group code must be 3 letters + 1\u20135 numbers (e.g. ABC123).",null))
w=3
return A.b(A.IE(),$async$a70)
case 3:t=h
s=A.NA(t)
r=A.a7(s)
if(new A.bd(s,r.k("bd<2>")).b3(0,new C.caz(k)))throw A.W(A.be(y.d))
w=4
return A.b(C.V1(k),$async$a70)
case 4:if(h!=null)throw A.W(A.be(y.d))
q=Date.now()
p=B.cL.ap(1048576)
o=B.a.i(e.toLowerCase())
n=B.a.i(f)
if(n.length===0)n="Owner"
m=A.hjQ(new A.V(Date.now(),0,!1).a9(),null,"",null,"",!1,"","","","cug_"+q+"_"+p,k,null,null,null,k,null,o,0,n)
n=m.a
s.n(0,n,m)
o=A.U(x.N,x.P)
for(r=new A.cD(s,r.k("cD<1,2>")).gaf(0);r.C();){l=r.d
o.n(0,l.a,l.b.ah())}J.aJ(t,"groups",o)
w=5
return A.b(C.IF(t),$async$a70)
case 5:r=C.cav(n)
w=6
return A.b(A.apz(r==null?m:r),$async$a70)
case 6:r=C.cav(n)
u=r==null?m:r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a70,v)},
IH(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$IH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.IE(),$async$IH)
case 2:s=f
r=A.NA(s)
q=d.a
r.n(0,q,C.hNE(d,r.h(0,q)))
q=A.U(x.N,x.P)
for(u=new A.cD(r,A.a7(r).k("cD<1,2>")).gaf(0);u.C();){t=u.d
q.n(0,t.a,t.b.ah())}J.aJ(s,"groups",q)
w=3
return A.b(C.IF(s),$async$IH)
case 3:return A.h(null,v)}})
return A.i($async$IH,v)},
hNE(d,e){var w,v,u,t,s,r
if(e==null)return d
w=d.r
v=new A.N(w,new C.cat(),A.T(w).k("N<1,n>")).fK(0)
for(u=e.r,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
if(!v.t(0,r.a))B.d.M(w,r)}return d},
hNC(d){var w=$.a7_
if(w!=null)B.d.bs(w,new C.car(d))},
b_q(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$b_q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.IE(),$async$b_q)
case 2:r=f
q=A.NA(r)
q.W(0,d)
u=A.U(x.N,x.P)
for(t=new A.cD(q,A.a7(q).k("cD<1,2>")).gaf(0);t.C();){s=t.d
u.n(0,s.a,s.b.ah())}J.aJ(r,"groups",u)
w=3
return A.b(C.IF(r),$async$b_q)
case 3:C.hNC(d)
return A.h(null,v)}})
return A.i($async$b_q,v)},
b_s(d,e,f,g,h,i,j){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m
var $async$b_s=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:m=A.fNz(g)
if(m==null)m=B.a.i(g).toUpperCase()
if(m.length===0){u=null
w=1
break}w=3
return A.b(C.V1(m),$async$b_s)
case 3:t=l
if(t==null){u=null
w=1
break}s=B.a.i(e.toLowerCase())
if(t.anm(s)||t.aHl(s)){u=t
w=1
break}r=t.r
B.d.bs(r,new C.caI(s))
q=B.a.i(h)
if(q.length===0)q=B.d.gI(s.split("@"))
p=new A.V(Date.now(),0,!1).a9()
o=B.a.i(i)
n=B.a.i(j)
B.d.M(r,A.hjR(B.a.i(d),s,f,p,0,q,o,new A.V(Date.now(),0,!1).a9(),n,"pending"))
w=4
return A.b(C.IH(t),$async$b_s)
case 4:n=C.cav(t.a)
u=n==null?t:n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_s,v)},
b_p(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b_p=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.apA(d),$async$b_p)
case 3:q=g
if(q==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
s=q.r
r=B.d.bh(s,new C.cau(t))
if(r<0){u=!1
w=1
break}s[r].e="active"
w=4
return A.b(C.IH(q),$async$b_p)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_p,v)},
apB(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$apB=A.e(function(i,a0){if(i===1)return A.f(a0,v)
for(;;)switch(w){case 0:w=3
return A.b(C.apA(d),$async$apB)
case 3:k=a0
if(k==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
if(k.a5R(t)){u=!1
w=1
break}s=B.a.i(f==null?"":f)
if(J.ad(s)===0)try{s=B.a.i(B.d.fZ(k.r,new C.caG(t)).b)}catch(j){s=J.f1(t,"@")?B.d.gI(J.lG(t,"@")):t}if(J.ad(s)===0)s="Member"
q=k.r.length
B.d.bs(k.r,new C.caH(t))
if(k.r.length===q){u=!1
w=1
break}p=k.x
o=Date.now()
n=B.cL.ap(1048576)
m=s
l=new A.V(Date.now(),0,!1).a9()
B.d.c6(p,0,new A.q4("cug_"+o+"_"+n,B.a6F,0,m,g,l,B.a.i(h.toLowerCase()),"",t,""))
w=4
return A.b(C.IH(k),$async$apB)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apB,v)},
caw:function caw(d){this.a=d},
cay:function cay(d){this.a=d},
cax:function cax(d){this.a=d},
caM:function caM(){},
cas:function cas(){},
caA:function caA(d){this.a=d},
caB:function caB(d){this.a=d},
caF:function caF(d){this.a=d},
caK:function caK(d){this.a=d},
caD:function caD(d){this.a=d},
caz:function caz(d){this.a=d},
cat:function cat(){},
car:function car(d){this.a=d},
caI:function caI(d){this.a=d},
cau:function cau(d){this.a=d},
caG:function caG(d){this.a=d},
caH:function caH(d){this.a=d},
aOK(d,e){var w=0,v=A.j(x.H),u
var $async$aOK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(new A.fD(e)),$async$aOK)
case 3:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Copied "+e,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aOK,v)},
bB4(d,e,f){var w=d.x,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.flN(B.a.i(e).toLowerCase(),B.a.i(f.toLowerCase()),d),v),v.k("M.E"))
return w},
i0k(d,e,f){return B.d.cI(C.bB4(d,e,f),0,new C.flM())},
i3P(d,e,f){var w,v,u=C.bB4(d,e,f)
u=A.C(new A.N(u,new C.fqJ(),A.T(u).k("N<1,wJ>")),x.W)
w=d.cU2(e,f)
B.d.v(u,new A.N(w,new C.fqK(),A.T(w).k("N<1,wJ>")))
if(d.y){w=d.ax
w=w.length!==0&&!d.Te(e,w)}else w=!1
if(w){w=d.ay
if(w==null)w=new A.V(Date.now(),0,!1).a9()
v=B.a.i(d.z)
u.push(new C.Ko(v.length===0?"Help round":v,!0,"",w))}B.d.aZ(u,new C.fqL())
return u},
bBY(d){var w=0,v=A.j(x.H),u,t,s
var $async$bBY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){w=1
break}t=A.cI("https://cash.app/$"+(B.a.a0(s,"$")?B.a.b5(s,1):s),0,null)
w=5
return A.b(A.pI(t),$async$bBY)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.j1(t,B.fw,null),$async$bBY)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bBY,v)},
bB1(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$bB1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=A.ag("[^\\d+]",!0,!1,!1,!1)
r=A.aL(d,s,"")
if(r.length===0){w=1
break}t=A.cI("tel:"+r,0,null)
w=5
return A.b(A.pI(t),$async$bB1)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.j1(t,B.fw,null),$async$bB1)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bB1,v)},
hzg(d,e,f,g){C.caL()
return A.hH(d,new C.apw(f,g,e,null),!1,null,x.X)},
hpc(d,e,f,g,h,i,j){return new C.aBB(f,j,g,i,h,d,e,null)},
h6M(d,e,f,g,h,i,j,k,l){return new C.biO(k,g,d,h,j,e,f,i,l,null)},
i7X(d){var w={},v=new A.au(B.at,$.ax())
w.a=""
return A.bV(B.L,null,new C.fxk(w,v),d,!0,!0,!0,null,!1,!1,x.N).fp(v.gfh())},
i7Z(d,e,f,g,h,i,j,k){var w=new A.au(B.at,$.ax())
return A.bV(B.L,null,new C.fxE(h,k,j,w,!0,i,g,f),d,!0,!0,!0,null,!1,!1,x.N).fp(w.gfh())},
i7Y(d,e,f,g,h){var w,v,u,t={},s=g===B.t_,r=$.ax(),q=new A.au(B.at,r),p=new A.au(B.at,r),o=new A.au(B.at,r)
r=new C.fxA(s,e)
w=A.T(h).k("Z<1>")
v=A.C(new A.Z(h,new C.fxx(r),w),w.k("M.E"))
u=s&&h.length!==0&&v.length===0
t.a=v.length!==0?B.d.gI(v).b:""
t.b=!1
return A.bV(B.L,null,new C.fxy(t,o,h,r,s,f,u,p,q,e),d,!0,!0,!0,null,!1,!1,x.R).fp(new C.fxz(q,p,o))},
i7V(d,e,f){return A.bV(B.L,null,new C.fx4(f,e),d,!0,!0,!1,null,!1,!1,x.y)},
i7T(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=C.bB4(f,i,e),r=B.d.cI(s,0,new C.fwX()),q=f.a65(i,e)
if(f.y){w=f.ax
v=w.length!==0&&!f.Te(i,w)}else v=!1
if(f.ax.length===0)u=D.aAC
else{w=A.T(s).k("Z<1>")
u=A.C(new A.Z(s,new C.fwY(f),w),w.k("M.E"))}if(!v)t=q>0&&r<=0
else t=!0
return A.bV(B.L,null,new C.fwZ(f,i,e,l,h,k,s,r,q,v,u,t,g,j),d,!0,!0,!0,null,!1,!1,x.H)},
i7O(d,e){return A.bV(B.L,null,new C.fwy(e),d,!0,!0,!1,null,!1,!1,x.y)},
i7P(d,e,f,g){return A.bV(B.L,null,new C.fwB(g,e,f),d,!0,!0,!1,null,!1,!1,x.y)},
h9z(d,e){var w=null
return new A.D(B.w3,A.B(A.a([A.d(d,w,w,w,w,w,w,B.vo,w,w,w),B.b2,new A.dr(1,B.cn,A.d(e,w,w,w,w,w,w,B.lq,B.dV,w,w),w)],x.p),B.m,w,B.e,B.i,0,w,w),w)},
i7R(d,e,f,g){var w,v,u,t,s,r
if(!f)return C.i7Q(d,e,g)
w=e.z
v=$.ax()
u=new A.au(new A.ba(w,B.b4,B.aO),v)
w=e.Q
t=new A.au(new A.ba(w,B.b4,B.aO),v)
w=e.as
s=new A.au(new A.ba(w,B.b4,B.aO),v)
w=e.at
r=new A.au(new A.ba(w,B.b4,B.aO),v)
return A.bV(B.L,null,new C.fwO(g,e.y,u,t,s,r,new C.fwN(e,u,t,s,r),e),d,!0,!0,!0,null,!1,!1,x.L).fp(new C.fwP(u,t,s,r))},
i7Q(d,e,f){return A.bV(B.L,null,new C.fwG(f,e),d,!0,!0,!0,null,!1,!1,x.L)},
hsd(d,e){return A.cb(e,new C.fnS(e,d),null)},
fnQ(d,e,f,g,h,i){var w,v=null,u=A.m(18),t=A.J(B.be.j(0.35),B.r,1),s=A.X(e,B.be,v,v,v,20),r=A.d(f,v,v,v,v,v,v,A.l(v,v,B.be.j(0.85),v,v,v,v,v,v,v,v,10,v,v,B.H,v,v,!0,v,1.1,v,v,v,v,v,v),v,v,v),q=g==null,p=!q,o=p?B.ip:B.c,n=p?B.n0:v,m=x.p
n=A.a([r,B.au,A.d(i,v,v,v,v,v,v,A.l(v,v,o,v,n,B.be.j(0.6),v,v,v,v,v,14,v,v,B.U,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v)],m)
if(p&&h!=null)B.d.v(n,A.a([B.au,A.d("Tap to "+h,v,v,v,v,v,v,A.l(v,v,B.be.j(0.75),v,v,v,v,v,v,v,v,10,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],m))
w=A.p(v,A.B(A.a([s,B.as,A.E(A.x(n,B.E,v,B.e,B.i,0,B.p),1),A.aH(v,v,v,v,A.X(B.fQ,B.be.j(0.9),v,v,v,18),v,v,v,new C.fnR(i,d,f),v,v,v,v,"Copy",v)],m),B.E,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(B.fA,v,t,u,v,v,B.n),v,v,v,B.d1,B.eS,v,v,v)
if(q)return w
return A.aI(!1,B.a2,!0,v,A.aO(!1,A.m(18),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)},
aPG(d,e,f){var w=null,v=B.b_.j(0.16),u=A.J(B.b_.j(0.55),B.r,1),t=A.a([new A.ac(0,B.G,B.b_.j(0.35),B.I,14)],x.V),s=x.p
return A.B(A.a([A.p(w,A.X(d,B.b_,w,w,w,w),B.f,w,w,new A.o(v,w,u,w,t,w,B.a6),w,46,w,w,w,w,w,46),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,B.k8,w,w,w),B.au,A.d(e,w,w,w,w,w,w,I.a9Y,w,w,w)],s),B.E,w,B.e,B.i,0,B.p),1)],s),B.E,w,B.e,B.i,0,w,w)},
KW(d){var w=null,v=B.c.j(0.05)
return A.bs(w,w,w,B.bD,w,w,w,w,!0,new A.b5(4,A.m(14),new A.ay(B.b_.j(0.25),1,B.r,-1)),w,w,w,w,w,v,!0,w,w,w,w,new A.b5(4,A.m(14),B.acV),w,w,w,w,w,w,w,w,B.kx,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
i7f(d,e){var w,v,u,t,s,r,q=A.a([],x.x)
for(w=d.x,v=w.length,u=e==="other",t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.b===B.t_){r=s.w
r=u?r.length===0:r===e}else r=!1
if(r)q.push(s)}return q},
i7g(d,e,f){var w,v,u,t
for(w=f.length,v=0;v<w;++v){u=B.a.i(f[v].y)
if(u.length!==0)return u}u=e==="other"
if(!u&&e===d.ax&&B.a.i(d.z).length!==0)return B.a.i(d.z)
if(u)return"Other contributions"
if(w!==0){t=B.d.gak(f).f.bU()
return"Contribution round \xb7 "+A.bL(t)+"/"+A.bW(t)+"/"+A.bC(t)}return"Contribution round"},
hu5(d){var w,v=d.toLowerCase()
A:{if("mother"===v){w="Mother"
break A}if("father"===v){w="Father"
break A}if("spouse"===v){w="Spouse"
break A}if("child"===v){w="Child"
break A}if("brother"===v){w="Brother"
break A}if("sister"===v){w="Sister"
break A}w=d.length===0?"Family":d
break A}return w},
i7W(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l=x.S,k=A.a([new A.Gi(e.c,e.d)],l),j=e.gFD()
B.d.v(k,new A.N(j,new C.fx6(),A.T(j).k("N<1,+email,name(n,n)>")))
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
if(!B.d.b3(k,new C.fx7(o)))w.push(new A.z(new A.Gi(o.x,o.d),o))}m=B.d.cI(h,0,new C.fx8())
l=k.length
return A.bV(B.L,null,new C.fx9(g,w,k,m,i,l===0?0:B.k.E(w.length/l,0,1),e,v),d,!0,!0,!0,null,!1,!1,x.H)},
i7U(d,e,f){var w,v,u,t,s,r,q,p=B.a.i(f.y)
if(!(p.length!==0))p=f.w===e.ax&&B.a.i(e.z).length!==0?B.a.i(e.z):"Group contribution"
w=e.e
v=A.ag("[^0-9]",!0,!1,!1,!1)
u="LG-"+w+"-"+B.a.au(B.a.aX(A.aL(f.a,v,""),6,"0"),0,6)
t=f.f.bU()
s=""+A.bL(t)+"/"+A.bW(t)+"/"+A.bC(t)+" "+B.a.aX(B.o.u(A.dg(t)),2,"0")+":"+B.a.aX(B.o.u(A.fR(t)),2,"0")
v=B.k.ac(f.c,2)
r=f.e
r=r.length!==0?"\nNote: "+r:""
q=f.r
if(q.length===0)q=e.c
return A.bV(B.L,null,new C.fx0(u,new C.fx1(),f,p,s,e,"RECEIPT "+u+"\nGroup: "+w+" ("+e.d+")\nFrom: "+f.d+"\nFor: "+p+"\nAmount: $"+v+"\nDate: "+s+r+"\nRecorded by: "+q),d,!0,!0,!0,null,!1,!1,x.H)},
i7S(d,e,f,g){return A.bV(B.L,null,new C.fwQ(e,f,g),d,!0,!0,!0,null,!1,!1,x.n)},
flN:function flN(d,e,f){this.a=d
this.b=e
this.c=f},
flM:function flM(){},
CP:function CP(d,e){this.a=d
this.b=e},
wJ:function wJ(){},
PX:function PX(d,e){this.b=d
this.a=e},
Ko:function Ko(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fqJ:function fqJ(){},
fqK:function fqK(){},
fqL:function fqL(){},
apw:function apw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aE0:function aE0(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=e
_.y=null
_.z=f
_.cN$=g
_.b7$=h
_.c=_.a=null},
dQQ:function dQQ(d){this.a=d},
dQG:function dQG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQF:function dQF(){},
dQE:function dQE(d){this.a=d},
dQK:function dQK(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d,e,f){this.a=d
this.b=e
this.c=f},
dQO:function dQO(d){this.a=d},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
ard:function ard(d,e,f){this.c=d
this.d=e
this.a=f},
blF:function blF(d,e,f,g){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=!1
_.x=""
_.cN$=f
_.b7$=g
_.c=_.a=null},
eis:function eis(d,e){this.a=d
this.b=e},
eir:function eir(d){this.a=d},
eip:function eip(){},
eiq:function eiq(){},
eio:function eio(d){this.a=d},
eim:function eim(d){this.a=d},
ein:function ein(d){this.a=d},
eix:function eix(d){this.a=d},
eiy:function eiy(d){this.a=d},
eiz:function eiz(d){this.a=d},
eiw:function eiw(d){this.a=d},
eiA:function eiA(d){this.a=d},
eiv:function eiv(d,e){this.a=d
this.b=e},
eiB:function eiB(d,e){this.a=d
this.b=e},
eit:function eit(d,e){this.a=d
this.b=e},
eiu:function eiu(d,e){this.a=d
this.b=e},
abY:function abY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
CL:function CL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
djR:function djR(d){this.a=d},
aBB:function aBB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
dk9:function dk9(d){this.a=d},
adm:function adm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
IC:function IC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDY:function aDY(d,e){var _=this
_.d=null
_.f=_.e=$
_.r=null
_.w=0
_.cN$=d
_.b7$=e
_.c=_.a=null},
dQC:function dQC(d){this.a=d},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQe:function dQe(){},
dQo:function dQo(d){this.a=d},
dQm:function dQm(d){this.a=d},
dQn:function dQn(d){this.a=d},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQt:function dQt(){},
dQu:function dQu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQw:function dQw(d){this.a=d},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQy:function dQy(d){this.a=d},
dQz:function dQz(d){this.a=d},
dQA:function dQA(d){this.a=d},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQg:function dQg(d,e){this.a=d
this.b=e},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQk:function dQk(d,e){this.a=d
this.b=e},
dQl:function dQl(){},
aDZ:function aDZ(d){this.a=d},
aE_:function aE_(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dQD:function dQD(d){this.a=d},
biO:function biO(d,e,f,g,h,i,j,k,l,m){var _=this
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
bha:function bha(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dks:function dks(d){this.a=d},
dkr:function dkr(d,e){this.a=d
this.b=e},
biN:function biN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dog:function dog(d){this.a=d},
biK:function biK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
doe:function doe(d){this.a=d},
biM:function biM(d,e,f){this.c=d
this.d=e
this.a=f},
dof:function dof(d){this.a=d},
Qh:function Qh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
dod:function dod(d,e){this.a=d
this.b=e},
biL:function biL(d,e,f){this.a=d
this.b=e
this.c=f},
blj:function blj(){},
fxk:function fxk(d,e){this.a=d
this.b=e},
fxj:function fxj(d,e){this.a=d
this.b=e},
fxg:function fxg(d,e){this.a=d
this.b=e},
fxf:function fxf(d){this.a=d},
fxh:function fxh(d){this.a=d},
fxi:function fxi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fxe:function fxe(d){this.a=d},
fxE:function fxE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fxB:function fxB(d){this.a=d},
fxC:function fxC(d){this.a=d},
fxD:function fxD(d,e){this.a=d
this.b=e},
fxA:function fxA(d,e){this.a=d
this.b=e},
fxx:function fxx(d){this.a=d},
fxy:function fxy(d,e,f,g,h,i,j,k,l,m){var _=this
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
fxw:function fxw(d,e,f,g,h,i,j,k,l,m){var _=this
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
fxo:function fxo(d){this.a=d},
fxp:function fxp(d){this.a=d},
fxq:function fxq(d){this.a=d},
fxr:function fxr(d,e){this.a=d
this.b=e},
fxn:function fxn(d){this.a=d},
fxs:function fxs(d){this.a=d},
fxm:function fxm(){},
fxt:function fxt(d,e,f){this.a=d
this.b=e
this.c=f},
fxl:function fxl(d,e){this.a=d
this.b=e},
fxu:function fxu(d){this.a=d},
fxv:function fxv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fxz:function fxz(d,e,f){this.a=d
this.b=e
this.c=f},
fx4:function fx4(d,e){this.a=d
this.b=e},
fx2:function fx2(d){this.a=d},
fx3:function fx3(d){this.a=d},
fwX:function fwX(){},
fwY:function fwY(d){this.a=d},
fwZ:function fwZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fwW:function fwW(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fwV:function fwV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
fwU:function fwU(d,e){this.a=d
this.b=e},
fwR:function fwR(d,e){this.a=d
this.b=e},
fwT:function fwT(d,e,f){this.a=d
this.b=e
this.c=f},
fwS:function fwS(){},
bjI:function bjI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
duo:function duo(){},
dup:function dup(d){this.a=d},
duq:function duq(d,e){this.a=d
this.b=e},
dur:function dur(){},
dus:function dus(d){this.a=d},
dut:function dut(d,e){this.a=d
this.b=e},
duu:function duu(d){this.a=d},
dun:function dun(d,e,f){this.a=d
this.b=e
this.c=f},
fwy:function fwy(d){this.a=d},
fww:function fww(d){this.a=d},
fwx:function fwx(d){this.a=d},
fwB:function fwB(d,e,f){this.a=d
this.b=e
this.c=f},
fwz:function fwz(d){this.a=d},
fwA:function fwA(d){this.a=d},
fwN:function fwN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fwO:function fwO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fwM:function fwM(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fwH:function fwH(d,e,f){this.a=d
this.b=e
this.c=f},
fwI:function fwI(d,e,f){this.a=d
this.b=e
this.c=f},
fwJ:function fwJ(d,e,f){this.a=d
this.b=e
this.c=f},
fwK:function fwK(d,e,f){this.a=d
this.b=e
this.c=f},
fwL:function fwL(d){this.a=d},
fwP:function fwP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwG:function fwG(d,e){this.a=d
this.b=e},
fwF:function fwF(d,e,f){this.a=d
this.b=e
this.c=f},
fwC:function fwC(d){this.a=d},
fwD:function fwD(d){this.a=d},
fwE:function fwE(d){this.a=d},
fnS:function fnS(d,e){this.a=d
this.b=e},
fnR:function fnR(d,e,f){this.a=d
this.b=e
this.c=f},
oK:function oK(d,e,f){this.c=d
this.d=e
this.a=f},
fx6:function fx6(){},
fx7:function fx7(d){this.a=d},
fx8:function fx8(){},
fx9:function fx9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fx5:function fx5(d,e,f){this.a=d
this.b=e
this.c=f},
fx1:function fx1(){},
fx0:function fx0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fx_:function fx_(d,e){this.a=d
this.b=e},
bie:function bie(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fwQ:function fwQ(d,e,f){this.a=d
this.b=e
this.c=f},
aCd:function aCd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCe:function aCe(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=""
_.w=null
_.x=f
_.c=_.a=null},
dmU:function dmU(){},
dmV:function dmV(d){this.a=d},
dmW:function dmW(){},
dmX:function dmX(d){this.a=d},
dmY:function dmY(d){this.a=d},
dmZ:function dmZ(d){this.a=d},
dn_:function dn_(d){this.a=d},
dnb:function dnb(){},
dn5:function dn5(d){this.a=d},
dn4:function dn4(d,e){this.a=d
this.b=e},
dn6:function dn6(d,e){this.a=d
this.b=e},
dn3:function dn3(d,e,f){this.a=d
this.b=e
this.c=f},
dn7:function dn7(d,e){this.a=d
this.b=e},
dn2:function dn2(d,e,f){this.a=d
this.b=e
this.c=f},
dn8:function dn8(d,e){this.a=d
this.b=e},
dn1:function dn1(d,e){this.a=d
this.b=e},
dn9:function dn9(d){this.a=d},
dn0:function dn0(d){this.a=d},
dna:function dna(d){this.a=d},
aMx:function aMx(){},
aMy:function aMy(){},
aN6:function aN6(){},
h3j(d,e){var w=0,v=A.j(x.y),u
var $async$h3j=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}u=A.lu(d,B.DI)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h3j,v)},
cao(d,e,f){var w=0,v=A.j(x.y),u
var $async$cao=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}w=3
return A.b(A.ask(d,B.zY,e),$async$cao)
case 3:if(h){u=!0
w=1
break}u=A.lu(d,B.zY)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cao,v)},
b_l(d,e){var w=0,v=A.j(x.y),u,t
var $async$b_l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}t=J
w=3
return A.b(C.b_r(d),$async$b_l)
case 3:if(t.ad(g)<1){u=!0
w=1
break}u=C.h3j(d,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_l,v)},
apy(d,e,f){var w=0,v=A.j(x.y),u,t
var $async$apy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b_l(e,f),$async$apy)
case 3:if(h){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.l7(!1,d,e,f,"Your free group slot is used. Subscribe to create another lightning group ("+A.cjJ(B.DI)+" / "+A.cjF(B.DI)+").",B.DI,"Create another group"),$async$apy)
case 6:t=h
if(t){w=4
break}else h=t
w=5
break
case 4:w=7
return A.b(C.b_l(e,f),$async$apy)
case 7:case 5:u=h
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apy,v)},
b_k(d,e,f,g){var w=0,v=A.j(x.y),u
var $async$b_k=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}if(d<100){u=!0
w=1
break}u=C.cao(g,e,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_k,v)},
apx(d,e,f,g,h){var w=0,v=A.j(x.y),u,t
var $async$apx=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b_k(e,f,g,h),$async$apx)
case 3:if(j){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.zU(d,h,g,"This group is at the free 100-member limit. Unlock more seats for "+A.cjJ(B.zY)+" / "+A.cjF(B.zY)+".",B.zY,f,"Unlock 100+ members"),$async$apx)
case 6:t=j
if(t){w=4
break}else j=t
w=5
break
case 4:w=7
return A.b(C.b_k(e,f,g,h),$async$apx)
case 7:case 5:u=j
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apx,v)}},D,E,F,H,G,K,N,O,P,Q
J=c[1]
A=c[0]
B=c[2]
L=c[88]
I=c[83]
M=c[94]
C=a.updateHolder(c[9],C)
D=c[82]
E=c[84]
F=c[89]
H=c[90]
G=c[92]
K=c[91]
N=c[86]
O=c[87]
P=c[85]
Q=c[93]
C.CP.prototype={
a6(){return"_MemberHistoryFilter."+this.b}}
C.wJ.prototype={}
C.PX.prototype={}
C.Ko.prototype={}
C.apw.prototype={
R(){var w=x.D
return new C.aE0(A.a([],w),A.a([],w),A.a([],w),null,null)},
ge2(){return this.c}}
C.aE0.prototype={
Z(){var w,v=this,u=null
v.a2()
v.w=C.hNG(v.a.c)
v.x=C.hNF(v.a.c)
v.y=A.dh(B.i3,new C.dQQ(v))
w=A.bm(u,B.yg,u,1,u,v)
w.cq(0)
v.d!==$&&A.aQ()
v.d=w
w=A.bm(u,B.qd,u,1,u,v)
w.fn(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bm(u,B.jU,u,1,u,v)
w.cL(0)
v.f!==$&&A.aQ()
v.f=w
w=A.bm(u,B.hy,u,1,u,v)
w.cq(0)
v.r!==$&&A.aQ()
v.r=w
v.ia()},
q(){var w=this,v=w.y
if(v!=null)v.a4(0)
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
w.bxi()},
ia(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.b_r(t.a.c),$async$ia)
case 3:s=e
w=4
return A.b(C.caC(t.a.c),$async$ia)
case 4:r=e
w=5
return A.b(C.caJ(t.a.c),$async$ia)
case 5:q=e
if(t.c==null){w=1
break}t.m(new C.dQG(t,s,r,q))
case 1:return A.h(u,v)}})
return A.i($async$ia,v)},
Aa(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Aa=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
m=r.a
w=3
return A.b(C.apy(j,m.c,m.e),$async$Aa)
case 3:if(!e||r.c==null){w=1
break}j=r.c
j.toString
w=4
return A.b(C.i7X(j),$async$Aa)
case 4:q=e
if(q==null||r.c==null){w=1
break}t=6
j=r.a
w=9
return A.b(C.a70(q,j.c,j.d),$async$Aa)
case 9:p=e
w=10
return A.b(r.ia(),$async$Aa)
case 10:j=r.c
if(j==null){w=1
break}m=p.a
l=r.a
w=11
return A.b(A.hH(j,new C.IC(m,l.c,l.d,l.e,null),!1,null,x.X),$async$Aa)
case 11:w=12
return A.b(r.ia(),$async$Aa)
case 12:t=2
w=8
break
case 6:t=5
i=s.pop()
j=A.ab(i)
if(j instanceof A.lY){o=j
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}else{n=j
j=r.c
if(j==null){w=1
break}j.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(A.w(n),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Aa,v)},
YX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i7Z(r,!0,"Join group","ABC12345",B.CG,1.6,"Enter the group code from the owner (3 letters + numbers).","Join with code"),$async$YX)
case 3:s=e
if(s==null||t.c==null){w=1
break}w=4
return A.b(t.u1(s),$async$YX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
u1(d){return this.c1G(d)},
c1G(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$u1=A.e(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(C.V1(d),$async$u1)
case 3:g=a0
if(g==null){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.feL)
w=1
break}w=g.anm(r.a.c)?4:5
break
case 4:m=r.c
if(m==null){w=1
break}l=g.a
k=r.a
w=6
return A.b(A.hH(m,new C.IC(l,k.c,k.d,k.e,null),!1,null,x.X),$async$u1)
case 6:w=7
return A.b(r.ia(),$async$u1)
case 7:w=1
break
case 5:if(g.aHl(r.a.c)){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.fbg)
w=1
break}m=g.c
l=g.a
w=8
return A.b(C.b_k(g.gx0(),l,!1,m),$async$u1)
case 8:if(!a0){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.fcG)
w=1
break}m=r.c
m.toString
l=r.a
w=9
return A.b(C.i7S(m,g,l.d,l.c),$async$u1)
case 9:q=a0
if(q==null||r.c==null){w=1
break}t=11
m=g.e
l=r.a.c
k=q.a
j=q.b
i=q.c
w=14
return A.b(C.b_s(q.d,l,q.e,m,k,j,i),$async$u1)
case 14:p=a0
if(p==null){m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(D.feT)
w=1
break}t=2
w=13
break
case 11:t=10
f=s.pop()
m=A.ab(f)
if(m instanceof A.lY){o=m
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{n=m
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not send your request. "+A.w(n),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=13
break
case 10:w=2
break
case 13:if(r.c==null){w=1
break}w=15
return A.b(r.ia(),$async$u1)
case 15:m=r.c
if(m==null){w=1
break}w=16
return A.b(A.ck(null,null,!0,null,new C.dQF(),m,null,!0,!0,x.H),$async$u1)
case 16:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$u1,v)},
ZZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.hH(r,D.hpF,!1,null,x.N),$async$ZZ)
case 3:s=e
if(s==null||s.length===0||t.c==null){w=1
break}w=4
return A.b(t.u1(s),$async$ZZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZZ,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
m===$&&A.c()
w=o.e
w===$&&A.c()
v=o.f
v===$&&A.c()
u=A.cb(new A.h8(A.a([m,w,v],x.U)),new C.dQK(o),n)
t=o.a.e?A.aH(n,n,n,n,D.bS0,n,n,n,new C.dQL(o,d),n,n,n,n,"All groups (admin)",n):n
t=C.h6M(n,!1,n,new C.dQM(d),n,n,!1,"LIGHTNING GROUPS",t)
s=x.p
m=A.a([new C.biK(m,w,v,o.gbKZ(),o.gc1F(),o.gc84(),n),B.dT,o.aAW("YOU OWN")],s)
if(J.ct(o.w))m.push(new A.D(B.ed,A.d("Create your free group \u2014 one free owned group.",n,n,n,n,n,n,I.Eh,n,n,n),n))
else{r=J.he7(o.w)
B.d.v(m,r.gdW(r).dH(0,new C.dQN(o,d),x.l))}if(J.cL(o.z)){r=A.a([B.bx,o.aAW("WAITING FOR APPROVAL")],s)
for(q=J.aW(o.z);q.C();){p=q.gS(q)
r.push(new C.aBB(p,"Request sent \xb7 "+p.d+" has to approve you",new C.dQO(d),w,v,0,"...",n))}B.d.v(m,r)}m.push(B.bx)
m.push(o.aAW("YOU JOINED"))
if(J.ct(o.x))m.push(new A.D(B.ed,A.d("Join with a code or QR from a friend.",n,n,n,n,n,n,I.Eh,n,n,n),n))
else{w=J.he7(o.x)
B.d.v(m,w.gdW(w).dH(0,new C.dQP(o,d),x.l))}return A.z2(A.c6(n,B.c2,new A.an(B.a_,n,B.ab,B.t,A.a([u,A.bn(!0,A.x(A.a([new A.D(E.Ns,t,n),A.E(A.cl(m,n,n,D.bBo,n,n,B.ah,!1),1)],s),B.ak,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],s),n),n,!1,!1,n,n),B.UA,x.I)},
b7E(d,e){var w=this.r
w===$&&A.c()
return A.cb(w,new C.dQH(this,d,e),null)},
aAW(d){var w=null
return new A.D(B.ct,A.d(d,w,w,w,w,w,w,A.l(w,w,B.b_.j(0.85),w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w),w)}}
C.ard.prototype={
R(){return new C.blF(new A.au(B.at,$.ax()),A.a([],x.D),null,null)},
ge2(){return this.c}}
C.blF.prototype={
Z(){var w,v=this,u=null
v.a2()
v.r=A.bp(C.h3k(),!0,x.L)
w=A.bm(u,B.qd,u,1,u,v)
w.fn(0,!0)
v.d!==$&&A.aQ()
v.d=w
w=A.bm(u,B.jU,u,1,u,v)
w.cL(0)
v.e!==$&&A.aQ()
v.e=w
v.ia()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v.T$=$.ax()
v.P$=0
w.bxT()},
ia(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.IG(),$async$ia)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eis(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ia,v)},
gbRh(){var w,v=B.a.i(this.x).toLowerCase()
if(v.length===0)return this.r
w=J.dJ(this.r,new C.eir(v))
w=A.C(w,w.$ti.k("M.E"))
return w},
a0f(d){return this.cgt(d)},
cgt(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return A.b(A.hH(s,new C.IC(d.a,t.c,t.d,!0,null),!1,null,x.X),$async$a0f)
case 2:w=3
return A.b(u.ia(),$async$a0f)
case 3:return A.h(null,v)}})
return A.i($async$a0f,v)},
Or(d){return this.bMW(d)},
bMW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.eio(d),s,null,!0,!0,x.y),$async$Or)
case 3:if(f!==!0){w=1
break}w=4
return A.b(C.b_q(d.a),$async$Or)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted "+d.e,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=5
return A.b(t.ia(),$async$Or)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.gbRh(),n=q.d
n===$&&A.c()
w=q.e
w===$&&A.c()
w=A.cb(new A.h8(A.a([n,w],x.U)),new C.eix(q),p)
n=q.w
v=n?"Close search":"Search groups"
u=x.p
v=A.a([new A.D(E.Ns,C.h6M(p,!1,p,new C.eiy(d),p,p,!1,"ALL GROUPS",A.aH(p,p,p,p,A.X(n?B.cx:B.fa,B.eA,p,p,p,20),p,p,p,new C.eiz(q),p,p,p,p,v,p)),p)],u)
if(q.w)v.push(new A.D(B.ys,A.aM(p,B.Y,!0,p,!0,B.t,p,A.aN(),q.f,B.b_,p,p,p,p,2,A.bs(p,new A.b5(4,A.m(14),new A.ay(B.b_.j(0.3),1,B.r,-1)),p,B.eB,p,p,p,p,!0,new A.b5(4,A.m(14),new A.ay(B.b_.j(0.25),1,B.r,-1)),p,p,p,p,p,B.fA,!0,p,p,p,p,new A.b5(4,A.m(14),D.b2Y),p,p,p,p,p,p,p,p,B.kx,"Search name, code, owner\u2026",p,p,p,p,p,!0,p,p,p,!0,!0,!1,p,D.bVq,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.eiA(q),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),p))
n=J.a6(o)
t=n.gL(o)
s=n.gL(o)===1?"":"s"
r=B.a.i(q.x).length===0?"":" matching"
v.push(new A.D(D.bBv,A.d(""+t+" group"+s+r,p,p,p,p,p,p,A.l(p,p,B.b_.j(0.85),p,p,p,p,p,p,p,p,11,p,p,B.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p),p))
v.push(A.E(n.gan(o)?D.bba:A.kk(!0,p,p,new C.eiB(q,o),n.gL(o),p,D.bB4,p,p,!1,!1),1))
return A.z2(A.c6(p,B.c2,new A.an(B.a_,p,B.ab,B.t,A.a([w,A.bn(!0,A.x(v,B.ak,p,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],u),p),p,!1,!1,p,p),B.UA,x.I)}}
C.abY.prototype={
B(d){var w=null,v=A.m(16),u=A.m(16),t=A.J(B.b_.j(0.28),B.r,1),s=this.c,r=x.p
return new A.D(B.d1,A.aI(!1,B.a2,!0,w,A.aO(!1,v,!0,A.eK(A.B(A.a([A.p(w,D.bR9,B.f,w,w,new A.o(B.b_.j(0.12),w,A.J(B.b_.j(0.5),B.r,1),w,w,w,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(s.e,w,w,w,w,w,w,D.ftn,w,w,w),B.bF,A.d("Owner "+s.d+" \xb7 "+s.gx0()+" people",w,1,B.a1,w,w,w,B.hs,w,w,w),A.d(s.c,w,1,B.a1,w,w,w,B.Ao,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1),A.aH(w,w,w,w,D.bT7,w,w,w,this.e,w,w,w,w,"Delete group",w),P.Pc],r),B.m,w,B.e,B.i,0,w,w),w,new A.o(B.fA,w,t,u,w,w,B.n),w,D.bAc,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),w)}}
C.CL.prototype={
B(d){return A.cb(this.e,new C.djR(this),null)}}
C.aBB.prototype={
B(d){return new A.D(B.ed,A.cb(new A.h8(A.a([this.f,this.r],x.U)),new C.dk9(this),null),null)}}
C.adm.prototype={
a3(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=0+a7,b0=0+a8,b1=$.S(),b2=A.I()
b2.r=B.c2.gp(0)
b3.aP(new A.a3(0,0,a9,b0),b2)
w=A.I()
b2=a7*0.5
v=this.c
w.sam(A.tt(new A.t(b2,a8*0.48),a7*0.38,A.a([B.b_.j(0.07+v*0.06),B.L],x.O),a6,B.x,a6,a6,0))
b3.aP(new A.a3(0,0,a9,b0),w)
u=a8*0.44
t=a7*0.28
b0=this.d*3.141592653589793
s=b0*2
for(a9=3+v*2,r=0.35+v*0.25,q=b3.a,p=8+v*4,o=0;o<3;++o){n=s+o*3.141592653589793*2/3
m=b2+Math.cos(n)*t
l=u+Math.sin(n)*t*0.55
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.b_.j(r).gp(0)
j=k.G()
q.drawCircle(m,l,a9,j)
j.delete()
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.b_.j(0.12).gp(0)
k.z=B.mU
j=k.G()
q.drawCircle(m,l,p,j)
j.delete()}i=A.I()
i.r=B.eA.j(0.18+v*0.12).gp(0)
i.b=B.a9
i.c=2
i.z=B.kQ
a9=x.v
r=A.a([],a9)
h=new A.aF(b1.r,B.ag,a6,a6,r)
for(b1=s*1.6,o=0;o<=48;++o){g=o/48*3.141592653589793*1.4+b1
f=b2+Math.cos(g)*t*0.92
e=u+Math.sin(g)*t*0.42
if(o===0){p=new A.aY(f,e)
r.push(p)
k=h.f
if(k!=null)p.bx(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}else{p=new A.aq(f,e)
r.push(p)
k=h.f
if(k!=null)p.bx(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}}b3.aI(h,i)
d=new A.aF($.S().r,B.ag,a6,a6,A.a([],a9))
d.D(new A.aY(b2+14,u-52))
b1=u-4
d.D(new A.aq(b2-16,b1))
d.D(new A.aq(b2+2,b1))
d.D(new A.aq(b2-20,u+54))
a0=A.I()
a0.r=B.b_.j(0.1+v*0.08).gp(0)
a0.b=B.a9
a0.c=10
a0.z=B.zL
a1=A.I()
b2=this.b
a1.r=B.b_.j(0.32+b2*0.4).gp(0)
a1.b=B.a9
a1.c=2.4
a1.d=B.by
a1.e=B.dQ
for(b1=A.xu(d),r=A.a([],x.J),p=new A.rm(b1,!1,r),k=b1.a;p.C();){a2=p.c
if(a2===0||p.f)A.b9(A.jD('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--a2
p.ie()
a3=r[a2].b
a3===$&&A.c()
a3=a3.a.length()
a4=new A.aF(k,b1.b,a6,new A.cw([new A.Bu(p,a2),0,a3*b2,!0]),A.a([],a9))
j=a0.G()
a2=a4.gbu().a.snapshot()
q.drawPath((a4.e=new A.cd(a2)).a,j)
j.delete()
j=a1.G()
a2=a4.e
q.drawPath((a2==null?a4.e=new A.cd(a4.gbu().a.snapshot()):a2).a,j)
j.delete()}$.S()
a5=A.I()
a5.r=B.eA.j(0.14+v*0.2).gp(0)
for(a9=b0*4,b0=v*3,v=1.2+v*1.2,o=0;o<14;++o){b1=Math.sin(o*1.9+a9)
b2=Math.cos(o*2.3+b0)
j=a5.G()
q.drawCircle((b1*0.35+0.5)*a7,(b2*0.22+0.46)*a8,v,j)
j.delete()}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.IC.prototype={
R(){return new C.aDY(null,null)},
ge2(){return this.d}}
C.aDY.prototype={
gu0(){var w=this.d
if(w!=null)w=w.a5R(this.a.d)||this.a.f
else w=!1
return w},
Z(){var w,v=this,u=null
v.a2()
v.d=C.cav(v.a.c)
w=A.bm(u,B.u9,u,1,u,v)
w.fn(0,!0)
v.e!==$&&A.aQ()
v.e=w
w=A.bm(u,B.jU,u,1,u,v)
w.cL(0)
v.f!==$&&A.aQ()
v.f=w
v.r=A.dh(B.i3,new C.dQC(v))
v.ia()},
q(){var w=this,v=w.r
if(v!=null)v.a4(0)
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bxh()},
ia(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.apA(t.a.c),$async$ia)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQq(t,s))
case 1:return A.h(u,v)}})
return A.i($async$ia,v)},
Dj(d){return this.bBL(d)},
bBL(a6){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$Dj=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:if(!r.gu0()||r.d==null){w=1
break}o=a6===B.t_
if(o&&!r.d.y){r.c.K(x.q).f.U(D.fcA)
w=1
break}if(o){n=r.d
n=n.y&&B.a.i(n.ax).length===0}else n=!1
if(n){r.c.K(x.q).f.U(D.fc1)
w=1
break}n=r.d
m=n.d
m=A.a([new A.Gi(n.c,m)],x.S)
n=r.d.gFD()
B.d.v(m,new A.N(n,new C.dQe(),A.T(n).k("N<1,+email,name(n,n)>")))
n=r.d
l=n.y?B.a.i(n.ax):""
n=A.aX(x.N)
if(o&&l.length!==0)for(k=m.length,j=0;j<m.length;m.length===k||(0,A.L)(m),++j){i=m[j]
h=i.b
if(r.d.aEN(h,l,i.a))n.M(0,h)}k=r.c
k.toString
w=3
return A.b(C.i7Y(k,n,o&&r.d.y?r.d.z:null,a6,m),$async$Dj)
case 3:g=a8
if(g==null||r.c==null){w=1
break}n=g.b
if(n<=0){r.c.K(x.q).f.U(B.Uv)
w=1
break}m=!1
if(o)if(l.length!==0){m=r.d
k=g.a
h=m.amg(k)
m=m.aEN(k,l,h==null?"":h)}if(m){r.c.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(g.a+" already contributed to this round.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=o?4:5
break
case 4:m=r.c
m.toString
k=g.a
h=r.d
w=6
return A.b(C.i7P(m,n,h.y?h.z:null,k),$async$Dj)
case 6:if(a8!==!0||r.c==null){w=1
break}case 5:m=r.d.x
k=Date.now()
h=g.a
f=g.c
e=new A.V(Date.now(),0,!1).a9()
d=r.a.d
a0=o&&r.d.y?r.d.ax:""
a1=o&&r.d.y?B.a.i(r.d.z):""
a2=r.d.amg(h)
if(a2==null)a2=""
B.d.c6(m,0,new A.q4("led_"+k,a6,n,h,f,e,d,a0,a2,a1))
if(o){o=r.d
o=o.y&&o.ax.length!==0}else o=!1
if(o){a3=r.d.amg(h)
if(a3!=null){o=r.d
o.cJC(o.ax,a3,h)}}t=8
o=r.d
o.toString
w=11
return A.b(C.IH(o),$async$Dj)
case 11:t=2
w=10
break
case 8:t=7
a5=s.pop()
o=A.ab(a5)
if(o instanceof A.lY){q=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not save ledger. "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=10
break
case 7:w=2
break
case 10:w=12
return A.b(r.ia(),$async$Dj)
case 12:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Dj,v)},
Wz(d){return this.bDM(d)},
bDM(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Wz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=r.d
if(l==null){w=1
break}t=4
w=7
return A.b(C.b_p(l.a,d.a),$async$Wz)
case 7:q=f
o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
n=d.b
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(q?n+" is in the group now.":"Could not approve "+n+".",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.ab(k)
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not approve. "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:w=8
return A.b(r.ia(),$async$Wz)
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Wz,v)},
Om(d){return this.bLR(d)},
bLR(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Om=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=r.d
if(n==null){w=1
break}p=r.c
p.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dQo(d),p,null,!0,!0,x.y),$async$Om)
case 3:if(f!==!0){w=1
break}t=5
w=8
return A.b(C.apB(n.a,d.a,null,"Join request declined",r.a.d),$async$Om)
case 8:t=2
w=7
break
case 5:t=4
m=s.pop()
q=A.ab(m)
p=r.c
if(p==null){w=1
break}p.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not decline. "+A.w(q),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:w=9
return A.b(r.ia(),$async$Om)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Om,v)},
cru(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.gaoj(),i=B.ax.j(0.07),h=A.m(16),g=A.J(B.ax.j(0.4),B.r,1),f=A.m(12),e=x.p
f=A.a([A.B(A.a([A.p(k,A.d(""+j.length,k,k,k,k,k,k,B.to,k,k,k),B.f,k,k,new A.o(B.ax,k,k,f,k,k,B.n),k,k,k,k,B.fP,k,k,k),B.ad,D.bFS],e),B.m,k,B.e,B.i,0,k,k),B.Q],e)
for(w=j.length,v=0;v<j.length;j.length===w||(0,A.L)(j),++v){u=j[v]
t=new A.aP(14,14)
s=new A.ay(B.b_.j(0.25),1,B.r,-1)
r=A.a([new A.y(u.b,k,B.ht,k,k,k,k,k,k,k,k,k),B.au,new A.D(B.ud,new A.ca(B.aM,B.e,B.i,B.E,k,B.p,k,0,A.a([A.X(B.uq,B.bU,k,k,k,14),B.bm,new A.by(1,B.ba,new A.y(u.a,k,B.tn,k,k,k,k,k,k,k,k,k),k)],e),k),k)],e)
q=u.f
if(q.length!==0){q=A.nj(q)
r.push(new A.D(B.ud,new A.ca(B.aM,B.e,B.i,B.E,k,B.p,k,0,A.a([A.X(B.j0,B.bU,k,k,k,14),B.bm,new A.by(1,B.ba,new A.y(q,k,B.tn,k,k,k,k,k,k,k,k,k),k)],e),k),k))}q=u.r
if(q.length!==0)r.push(new A.D(B.ud,new A.ca(B.aM,B.e,B.i,B.E,k,B.p,k,0,A.a([A.X(B.la,B.bU,k,k,k,14),B.bm,new A.by(1,B.ba,new A.y(q,k,B.tn,k,k,k,k,k,k,k,k,k),k)],e),k),k))
q=u.w
if(q.length!==0)r.push(new A.D(B.ud,new A.ca(B.aM,B.e,B.i,B.E,k,B.p,k,0,A.a([A.X(B.lI,B.bU,k,k,k,14),B.bm,new A.by(1,B.ba,new A.y(q,k,B.tn,k,k,k,k,k,k,k,k,k),k)],e),k),k))
for(q=u.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.L)(q),++o){n=q[o]
m=J.a6(n)
l=m.h(n,"relation")
l=C.hu5(l==null?"":l)
m=m.h(n,"name")
if(m==null)m=""
r.push(new A.D(B.ud,new A.ca(B.aM,B.e,B.i,B.E,k,B.p,k,0,A.a([A.X(B.yW,B.bU,k,k,k,14),B.bm,new A.by(1,B.ba,new A.y(l+": "+m,k,B.tn,k,k,k,k,k,k,k,k,k),k)],e),k),k))}r.push(B.W)
r.push(new A.ca(B.aM,B.e,B.i,B.m,k,B.p,k,0,A.a([new A.by(1,B.ba,A.di(N.a2V,B.Et,new C.dQr(this,u),A.bo(B.bf,k,k,k,B.c,k,k,k,k,k,k,k)),k),B.ad,new A.by(1,B.ba,A.ex(B.a2C,B.Kz,new C.dQs(this,u),A.dj(k,k,k,k,k,k,k,k,k,B.c0,k,k,k,k,k,D.b3b,k,k,k,k)),k)],e),k))
f.push(A.p(k,A.x(r,B.E,k,B.e,B.i,0,B.p),B.f,k,k,new A.o(B.fA,k,new A.bH(s,s,s,s),new A.bh(t,t,t,t),k,k,B.n),k,k,k,B.jz,B.bg,k,k,k))}return A.p(k,A.x(f,B.E,k,B.e,B.i,0,B.p),B.f,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.kK,B.bg,k,k,k)},
c2e(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=x.p,i=A.a([],j),h=A.aX(x.N)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=t.b
if(s===B.t_){r=t.w
if(r.length===0)r="other"
if(!h.M(0,r))continue
i.push(this.csH(d,r))
continue}q=s===B.a6F
p=q?B.c0:B.j2
s=new A.aP(12,12)
o=new A.ay(p.j(0.25),1,B.r,-1)
n=A.X(q?B.ap3:B.uB,p,k,k,k,18)
if(q){m=t.d
m=A.cU(t.e,"declined",0)?m+": request declined":m+" removed"}else m="Spending: "+t.d
m=A.a([new A.y(m,k,B.jp,k,k,k,k,k,k,k,k,k)],j)
l=t.e
if(l.length!==0&&!q)m.push(new A.y(l,k,B.hs,k,k,k,k,k,k,k,k,k))
m=A.x(m,B.E,k,B.e,B.i,0,B.p)
l=q?"":"-$"+B.k.ac(t.c,2)
i.push(A.p(k,new A.ca(B.aM,B.e,B.i,B.m,k,B.p,k,0,A.a([n,B.as,new A.by(1,B.ba,m,k),new A.y(l,k,new A.F(!0,p,k,k,k,k,k,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],j),k),B.f,k,k,new A.o(B.fA,k,new A.bH(o,o,o,o),new A.bh(s,s,s,s),k,k,B.n),k,k,k,B.ct,B.bg,k,k,k))}return i},
csH(d,e){var w,v,u=null,t=C.i7f(d,e),s=C.i7g(d,e,t),r=B.d.cI(t,0,new C.dQt()),q=e!=="other"&&d.y&&d.ax===e,p=d.gx0(),o=A.m(14),n=A.J((q?B.be:B.b_).j(0.35),B.r,1),m=A.m(14),l=A.m(14),k=(q?B.be:B.b_).j(0.14),j=A.J((q?B.be:B.b_).j(0.5),B.r,1)
k=A.p(u,A.X(B.mQ,q?B.be:B.b_,u,u,u,20),B.f,u,u,new A.o(k,u,j,u,u,u,B.a6),u,40,u,u,u,u,u,40)
j=x.p
w=A.a([new A.dr(1,B.cn,A.d(s,u,2,B.a1,u,u,u,O.Kg,u,u,u),u)],j)
if(q)B.d.v(w,A.a([B.bm,A.p(u,D.fKj,B.f,u,u,new A.o(B.be.j(0.2),u,u,A.m(8),u,u,B.n),u,u,u,u,B.mL,u,u,u)],j))
w=A.E(A.x(A.a([A.B(w,B.m,u,B.e,B.i,0,u,u),B.cS,A.d(""+t.length+" of "+p+" gave \xb7 tap to see who",u,u,u,u,u,u,B.hs,u,u,u)],j),B.E,u,B.e,B.i,0,B.p),1)
v=B.k.ac(r,2)
return A.p(u,A.aI(!1,B.a2,!0,m,A.aO(!1,l,!0,new A.D(B.bg,A.B(A.a([k,B.as,w,A.d("+$"+v,u,u,u,u,u,u,A.l(u,u,q?B.be:B.b_,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.db,A.X(B.eE,B.b_.j(0.6),u,u,u,u)],j),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.dQu(this,d,e,s,t,q),u,u,u,u,u,u,u),B.f,B.fA,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(u,u,n,o,u,u,B.n),u,u,u,B.ct,u,u,u,u)},
QE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$QE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.d
if(k==null){w=1
break}if(!r.gu0()&&!k.y){w=1
break}o=r.c
o.toString
n=r.e
n===$&&A.c()
w=3
return A.b(C.i7R(o,k,r.gu0(),n),$async$QE)
case 3:m=e
if(m==null||r.c==null){w=1
break}w=r.gu0()?4:5
break
case 4:r.d=m
t=7
w=10
return A.b(C.IH(m),$async$QE)
case 10:t=2
w=9
break
case 7:t=6
j=s.pop()
o=A.ab(j)
if(o instanceof A.lY){q=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not save help mode. "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=9
break
case 6:w=2
break
case 9:w=11
return A.b(r.ia(),$async$QE)
case 11:case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QE,v)},
Rw(d,e){return this.cr5(d,e)},
cr5(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(!t.gu0()||t.d==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.i7V(s,e,d),$async$Rw)
case 3:if(g!==!0){w=1
break}w=4
return A.b(C.apB(t.d.a,e,d,"Removed from group",t.a.d),$async$Rw)
case 4:w=5
return A.b(t.ia(),$async$Rw)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Rw,v)},
a0n(d,e,f,g){return this.cgS(d,e,f,g)},
cgS(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$a0n=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:p=t.d
if(p==null){w=1
break}s=t.c
s.toString
r=t.e
r===$&&A.c()
q=t.gu0()
w=3
return A.b(C.i7T(s,d,p,q,e,f,t.gu0()?new C.dQp(t,p):null,r,g),$async$a0n)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a0n,v)},
aes(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aes=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.aOK(s,r.e),$async$aes)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aes,v)},
XH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$XH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.d
if(i==null){w=1
break}t=4
m=B.a.i(i.e)
l=new A.a9M(-1,1,!0,null,null,D.euo,D.eum,null,new A.b40(A.a([],x.B),A.U(x.N,x.Y)),null,null)
k=A.hn2("NGMY-GROUP:"+m.toUpperCase(),1,-1)
if(k.a!==B.TI){m=k.c
m.toString
A.b9(m)}m=k.b
l.x=m
l.z=m.a
l.aX5()
q=l
w=7
return A.b(q.ape(720),$async$XH)
case 7:p=e
if(p==null||r.c==null){w=1
break}w=8
return A.b(A.tb(J.eS(B.dK.gaS(p)),"ngmy_group_"+i.e+".png"),$async$XH)
case 8:o=e
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
h=s.pop()
n=A.ab(h)
m=r.c
if(m==null){w=1
break}m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not save QR: "+A.w(n),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$XH,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d,e=h.e
e===$&&A.c()
w=h.f
w===$&&A.c()
v=A.cb(new A.h8(A.a([e,w],x.U)),new C.dQw(h),g)
u=f==null
t=u?g:f.e
s=u?g:new C.dQx(d,f)
r=u?g:f.y
if(!h.gu0()){q=u?g:f.y
q=q===!0}else q=!0
p=x.p
q=A.a([new A.D(E.Ns,C.h6M(t,r===!0,e,new C.dQy(d),s,h.gcgu(),q,"GROUP",g),g)],p)
if(!u){u=A.a([new A.D(D.bAL,new C.biM(e,A.B(A.a([h.aBO("In",f.gaJK()),h.aBO("Out",f.gxg()),h.aBO("Balance",f.gaJK()-f.gxg()),h.b8_("People",f.gx0(),!1)],p),B.m,g,B.e,B.i,0,g,g),g),g)],p)
if(h.gu0())u.push(new A.D(B.fZ,A.B(A.a([A.E(new C.CL("Contribution",D.apB,e,new C.dQz(h),!1,g),1),B.ad,A.E(new C.CL("Spending",B.wk,e,new C.dQA(h),!0,g),1)],p),B.m,g,B.e,B.i,0,g,g),g))
u.push(B.W)
t=A.a([],p)
for(s=[D.evY,D.ewS,D.exv],o=0;o<3;++o){n=s[o]
r=n.a
m=r===2?0:6
l=h.w
k=!1
if(r===1){j=h.d
if(j!=null){k=h.a
i=k.d
k=B.a.i(j.c.toLowerCase())===B.a.i(i.toLowerCase())||k.f}}k=k?f.gaoj().length:0
t.push(new A.by(1,B.ba,new A.D(new A.P(0,0,m,0),new C.biN(n.b,l===r,e,w,new C.dQB(h,n),k,g),g),g))}u.push(new A.D(B.eZ,A.B(t,B.m,g,B.e,B.i,0,g,g),g))
u.push(A.E(h.bGf(f),1))
B.d.v(q,u)}else q.push(D.bGK)
return A.z2(A.c6(g,B.c2,new A.an(B.a_,g,B.ab,B.t,A.a([v,A.bn(!0,A.x(q,B.m,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],p),g),g,!1,!1,g,g),B.UA,x.I)},
b8_(d,e,f){var w=null,v=A.d(d,w,w,w,w,w,w,D.a9W,w,w,w)
return A.E(A.x(A.a([v,B.bF,A.d(f?"$"+B.k.ac(e,2):B.o.u(B.k.N(e)),w,w,w,w,w,w,D.frG,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),1)},
aBO(d,e){return this.b8_(d,e,!0)},
bGf(d){var w,v,u,t,s,r,q=this,p=null
switch(q.w){case 1:w=A.a([q.ckX(d,d.d,d.c,"Owner",d.f,new C.dQh(q,d))],x.p)
if(q.gu0()&&d.gaoj().length!==0)w.push(q.cru(d))
v=d.gFD()
B.d.v(w,new A.N(v,new C.dQi(q,d),A.T(v).k("N<1,v>")))
if(d.gx0()>=100&&q.gu0()){v=q.e
v===$&&A.c()
w.push(new A.D(B.BO,new C.CL("Unlock 100+ members",B.qy,v,new C.dQj(q,d),!1,p),p))}return A.cl(w,p,p,B.uh,p,p,B.ah,!1)
case 2:w=A.m(16)
v=A.a([new A.ac(0,B.G,B.b_.j(0.35),B.I,24)],x.V)
u=d.e
v=A.as(A.p(p,A.Ck(B.c,"NGMY-GROUP:"+B.a.i(u).toUpperCase(),B.TE,1,p,B.TH,!0,B.bT,200,-1),B.f,p,p,new A.o(B.c,p,p,w,v,p,B.n),p,p,p,p,B.bD,p,p,p),p,p,p)
w=x.p
u=A.as(A.aA(p,A.B(A.a([A.d(u,p,p,p,p,p,p,D.fl9,p,p,p)],w),B.m,p,B.e,B.P,0,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dQk(q,d),p,p,p,p,p,p,!1,B.a3),p,p,p)
t=q.e
t===$&&A.c()
return A.cl(A.a([v,B.aQ,u,B.Q,D.baJ,B.aB,new C.CL("Copy invite code",B.fQ,t,q.gc81(),!1,p),B.W,new C.CL("Download QR",B.hR,t,q.gbOs(),!0,p),B.ae,D.fB5],w),p,p,B.uh,p,p,B.ah,!1)
default:w=q.a
s=C.bB4(d,w.e,w.d)
r=B.d.cI(s,0,new C.dQl())
w=A.m(12)
v=A.J(B.b_.j(0.28),B.r,1)
u=x.p
u=A.a([A.p(p,A.B(A.a([D.bTC,B.as,A.E(A.x(A.a([A.d(s.length===0?"Your contributions: none yet":"Your contributions: $"+B.k.ac(r,2)+" ("+s.length+")",p,p,p,p,p,p,B.lq,p,p,p),B.au,A.d("Group spending: $"+B.k.ac(d.gxg(),2)+" \xb7 Balance $"+B.k.ac(d.gaJK()-d.gxg(),2),p,p,p,p,p,p,B.hs,p,p,p)],u),B.E,p,B.e,B.i,0,B.p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(B.fA,p,v,w,p,p,B.n),p,p,p,B.ed,B.bg,p,p,p)],u)
if(d.x.length===0)u.push(D.fD3)
else B.d.v(u,q.c2e(d))
return A.cl(u,p,p,B.uh,p,p,B.ah,!1)}},
b2Q(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.i0k(d,e,f),j=k>0,i=d.a65(e,f)
if(d.y){w=d.ax
v=w.length!==0&&!d.Te(e,w)}else v=!1
w=A.m(14)
u=A.J(B.b_.j(0.2),B.r,1)
t=A.m(14)
s=A.m(14)
r=B.b_.j(0.12)
q=A.J(B.b_.j(0.4),B.r,1)
if(v)p=B.pk
else p=j?B.hm:B.ny
if(v)o=B.j2
else o=j?B.b_:B.bU
q=A.p(l,A.X(p,o,l,l,l,20),B.f,l,l,new A.o(r,l,q,l,l,l,B.a6),l,40,l,l,l,l,l,40)
r=A.d(e,l,l,l,l,l,l,B.jp,l,l,l)
o=A.d(g+" \xb7 "+f,l,l,l,l,l,l,B.Ao,l,l,l)
if(v)p="Has not given this round \xb7 gave "+d.apb(e,f)+"x \xb7 missed "+i
else{p=""+i
p=j?"Gave "+d.apb(e,f)+"x ($"+B.k.ac(k,2)+") \xb7 missed "+p:"Has not given yet \xb7 missed "+p}if(v)n=B.j2.j(0.9)
else if(j)n=B.b_.j(0.85)
else n=i>0?B.j2.j(0.85):B.j2.j(0.85)
m=x.p
m=A.a([q,B.as,A.E(A.x(A.a([r,o,B.bF,A.d(p,l,l,l,l,l,l,A.l(l,l,n,l,l,l,l,l,l,l,l,10,l,l,B.a7,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],m),B.E,l,B.e,B.i,0,B.p),1)],m)
if(a0!=null)m.push(A.aH(l,l,l,l,A.X(B.anO,B.fb.j(0.85),l,l,l,l),l,l,l,a0,l,l,l,l,"Remove member",l))
else m.push(A.X(B.eE,B.b_.j(0.6),l,l,l,l))
return A.p(l,A.aI(!1,B.a2,!0,t,A.aO(!1,s,!0,new A.D(B.bg,A.B(m,B.m,l,B.e,B.i,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,a1,l,l,l,l,l,l,l),B.f,B.fA,0,l,l,l,l,l,B.ai),B.f,l,l,new A.o(l,l,u,w,l,l,B.n),l,l,l,B.ct,l,l,l,l)},
ckX(d,e,f,g,h,i){return this.b2Q(d,e,f,g,h,null,i)}}
C.aDZ.prototype={
R(){return new C.aE_(A.zA(B.ZK,B.nU,B.uP))}}
C.aE_.prototype={
c83(d){var w,v,u,t,s,r
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=A.fNz(t==null?"":t)
if(s!=null){this.e=!0
this.c.toString
r=$.te().gbl()
if(r!=null&&r.c!=null&&r.pP())r.O(s)
return}}},
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c6(A.eI(w,w,w,!0,!0,B.w,w,1,w,w,w,!1,w,!1,w,w,A.aH(w,w,w,w,B.Pd,w,w,w,new C.dQD(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fPV,w,w,w,1,w,!0),B.w,A.zz(this.d,B.bY,this.gc82()),w,!1,!1,w,w)}}
C.biO.prototype={
B(d){var w=this,v=null,u=A.m(28),t=A.J(B.b_.j(0.22),B.r,1.1),s=A.a([new A.ac(0,B.G,B.w.j(0.35),B.cH,14)],x.V),r=A.aH(v,v,v,v,D.bR7,v,v,v,w.d,v,v,v,v,"Back",v),q=w.e,p=q!=null&&q.length!==0,o=w.c
r=A.a([r,A.E(p?A.x(A.a([A.d(o,v,v,v,v,v,v,D.fjq,B.K,v,v),B.bF,A.aI(!1,B.a2,!0,v,A.aO(!1,A.m(8),!0,new A.D(B.eJ,A.d(q,v,1,B.a1,v,v,v,D.foX,B.K,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)],x.p),B.m,v,B.e,B.P,0,B.p):A.d(o,v,1,B.a1,v,v,v,E.aV1,B.K,v,v),1)],x.p)
q=w.z
if(q!=null)r.push(q)
else if(w.r)r.push(new C.bha(w.w,w.x,w.y,v))
else r.push(B.Ag)
return A.p(v,A.B(r,B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(B.c2,v,t,u,s,v,B.n),v,v,v,v,B.a_X,v,v,v)}}
C.bha.prototype={
B(d){var w=this,v=new C.dks(w),u=w.d
if(u==null||!w.c)return v.$1(0)
return A.cb(u,new C.dkr(w,v),null)}}
C.biN.prototype={
B(d){return A.cb(new A.h8(A.a([this.e,this.f],x.U)),new C.dog(this),null)}}
C.biK.prototype={
B(d){var w=this
return A.cb(new A.h8(A.a([w.c,w.d,w.e],x.U)),new C.doe(w),null)}}
C.biM.prototype={
B(d){return A.cb(this.c,new C.dof(this),null)}}
C.Qh.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a,n=e.b,m=A.br(new A.a3(0,0,0+o,0+n),B.id)
$.S()
w=A.I()
v=p.b
w.r=B.b_.j(0.06*v).gp(0)
w.b=B.a9
w.c=2
w.z=B.uW
d.az(m,w)
u=A.I()
u.r=B.eA.j(0.35+0.45*v).gp(0)
u.z=B.kQ
t=o+n
s=2*t
r=B.k.F(p.d*s,s)
if(r<o)q=new A.t(r,0)
else if(r<t)q=new A.t(o,r-o)
else{t=2*o+n
q=r<t?new A.t(t-r,n):new A.t(0,s-r)}d.ad(q,3.5+v*2,u)
v=A.I()
v.r=B.eA.j(0.9).gp(0)
d.ad(q,1.5,v)
if(!p.c)return
v=new C.dod(p,d)
v.$3(E.aKo,!1,!1)
o-=10
v.$3(new A.t(o,8),!0,!1)
n-=8
v.$3(new A.t(10,n),!1,!0)
v.$3(new A.t(o,n),!0,!0)},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.biL.prototype={}
C.blj.prototype={
oN(d,e){var w,v,u,t,s,r,q=A.ag("[^A-Z0-9]",!0,!1,!1,!1),p=A.aL(e.a.toUpperCase(),q,"")
q=p.length
if(q===0)return B.at
w=new A.fi("")
v=new A.fi("")
for(u=0;u<q;++u){t=p[u]
s=A.ag("[A-Z]",!0,!1,!1,!1)
if(s.b.test(t)&&w.a.length<3)w.a+=t
else{s=A.ag("[0-9]",!0,!1,!1,!1)
if(s.b.test(t)&&v.a.length<5)v.a+=t}}q=w.a
s=v.a
r=(q.charCodeAt(0)==0?q:q)+(s.charCodeAt(0)==0?s:s)
return new A.ba(r,A.hl(B.bA,r.length),B.aO)}}
C.bjI.prototype={
gbRi(){var w,v=this,u=C.i3P(v.d,v.e,v.f)
switch(v.ay.a){case 0:w=u
break
case 1:w=x.C
w=A.C(new A.ef(u,w),w.k("M.E"))
break
case 2:w=x.o
w=A.C(new A.ef(u,w),w.k("M.E"))
break
default:w=null}return w},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.gbRi(),m=p.d,l=p.e,k=p.f,j=C.bB4(m,l,k),i=B.d.cI(j,0,new C.duo()),h=m.a65(l,k)
if(m.y){w=m.ax
v=w.length!==0&&!m.Te(l,w)}else v=!1
if(m.ax.length===0)u=D.aAC
else{w=A.T(j).k("Z<1>")
u=A.C(new A.Z(j,new C.dup(p),w),w.k("M.E"))}if(!v)t=h>0&&i<=0
else t=!0
w=x.p
k=A.a([A.cb(p.x,new C.duq(p,t),o),B.ae,A.d(l,o,o,o,o,o,o,B.fx,B.K,o,o),A.d(p.r+" \xb7 "+k,o,o,o,o,o,o,B.hs,B.K,o,o)],w)
B.d.v(k,A.a([B.au,A.d("Joined "+B.d.gI(p.w.bU().u(0).split(" ")),o,o,o,o,o,o,B.Ao,B.K,o,o)],w))
k.push(B.aQ)
l=A.m(14)
s=A.J((t?B.j2:B.b_).j(0.35),B.r,1)
if(v)r="MISSED THIS HELP ROUND"
else r=h>0?"MISSED CONTRIBUTIONS":"CONTRIBUTION STATUS"
r=A.d(r,o,o,o,o,o,o,A.l(o,o,t?B.j2:B.b_.j(0.9),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.2,o,o,o,o,o,o),o,o,o)
if(v)q='Not recorded for "'+B.a.i(m.z)+'". They will be marked missed when help mode ends.'
else if(h>0){q=h===1?"":"s"
q=""+h+" missed contribution"+q+" total \xb7 $"+B.k.ac(i,2)+" contributed overall"}else q="Total contributed: $"+B.k.ac(i,2)
q=A.a([r,B.Q,A.d(q,o,o,o,o,o,o,L.UO,B.K,o,o)],w)
if(m.y&&B.a.i(m.z).length!==0)B.d.v(q,A.a([B.Q,A.d("Active help: "+B.a.i(m.z),o,o,o,o,o,o,A.l(o,o,B.be.j(0.95),o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),B.K,o,o)],w))
if(u.length!==0)B.d.v(q,A.a([B.am,A.d("This round: $"+B.k.ac(B.d.cI(u,0,new C.dur()),2),o,o,o,o,o,o,D.fjC,B.K,o,o)],w))
k.push(A.p(o,A.x(q,B.m,o,B.e,B.i,0,B.p),B.f,o,o,new A.o(B.fA,o,s,l,o,o,B.n),o,o,o,o,B.bD,o,o,o))
k.push(B.aQ)
m=A.E(A.d("CONTRIBUTION HISTORY",o,o,o,o,o,o,A.l(o,o,B.b_.j(0.85),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.4,o,o,o,o,o,o),o,o,o),1)
l=p.ay
k.push(A.B(A.a([m,A.Cf(o,B.fA,A.X(D.bNA,l===D.abG?B.b_.j(0.75):B.ip,o,o,o,20),new C.dus(p),B.I,p.CW,B.af,"Filter history",x.E)],w),B.m,o,B.e,B.i,0,o,o))
k.push(B.Q)
if(n.length===0){if(l===D.aZH)m="No missed contributions for this member."
else m=l===D.aZG?"No recorded contributions for this member.":"No history yet for this member."
k.push(A.d(m,o,o,o,o,o,o,B.kx,o,o,o))}else B.d.v(k,new A.N(n,new C.dut(p,d),A.T(n).k("N<1,v>")))
k.push(B.ae)
k.push(A.bN(!1,D.aVt,o,o,!0,o,o,o,new C.duu(d),o,o))
return A.cl(k,p.c,o,o,o,o,B.ah,!1)},
avZ(d,e){var w,v=null,u=A.a([],x.p),t=this.ay===e
if(t)u.push(D.bRa)
else u.push(B.oL)
u.push(B.ad)
w=t?B.ip:B.ac
u.push(A.d(d,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,v,v,v,t?B.H:B.cA,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.A3(A.B(u,B.m,v,B.e,B.i,0,v,v),48,e,x.E)},
c_N(d,e){var w,v,u,t,s,r,q,p,o=this,n=null
if(e instanceof C.PX){w=e.b
v=w.w.length!==0
if(v&&w.e.length!==0)u=w.e
else{t=o.d.z
u=t.length!==0&&v?t:w.d}v=A.m(12)
t=A.J(B.b_.j(0.22),B.r,1)
s=x.p
return A.p(n,A.B(A.a([D.bVj,B.as,A.E(A.x(A.a([A.d(u,n,2,B.a1,n,n,n,D.aTt,n,n,n),B.cS,A.d(B.d.gI(w.f.bU().u(0).split(".")),n,n,n,n,n,n,D.a9W,n,n,n)],s),B.E,n,B.e,B.i,0,B.p),1),B.ad,A.d("$"+B.k.ac(w.c,2),n,n,n,n,n,n,D.fsJ,n,n,n)],s),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(B.fA,n,t,v,n,n,B.n),n,n,n,B.ct,B.bg,n,n,n)}x.a.a(e)
v=A.m(16)
t=e.c
s=A.J(B.j2.j(t?0.35:0.5),B.r,1)
r=A.X(t?B.pg:B.cx,B.j2,n,n,n,18)
q=A.d(e.b,n,2,B.a1,n,n,n,D.aTt,n,n,n)
p=x.p
p=A.a([r,B.as,A.E(A.x(A.a([q,B.cS,A.d(t?"Active help round":B.d.gI(e.a.bU().u(0).split(".")),n,n,n,n,n,n,D.a9W,n,n,n)],p),B.E,n,B.e,B.i,0,B.p),1)],p)
if(o.ch&&!t&&e.d.length!==0&&o.cx!=null)p.push(A.bN(!1,D.fDm,n,n,!0,n,n,n,new C.dun(o,d,e),n,A.fx(n,n,n,n,n,n,n,n,n,n,n,B.ip,n,n,n,B.aw,n,B.fC,n,n,n,n,n,B.kr,n,n)))
else p.push(A.d(t?"PENDING":"MISSED",n,n,n,n,n,n,D.flZ,n,n,n))
return A.p(n,A.B(p,B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(B.fA,n,s,v,n,n,B.n),n,n,n,B.ct,B.bg,n,n,n)},
gcZ(){return this.f}}
C.oK.prototype={
B(d){var w=null,v=A.m(26),u=A.J(B.b_.j(0.4),B.r,1.3),t=A.a([new A.ac(0,B.G,B.b_.j(0.22),B.I,28)],x.V)
return A.p(w,A.b4(new A.D(B.a_D,this.c,w),w,w,new C.Qh(0.85,this.d,0,w),B.aw),B.f,w,w,new A.o(B.c2,w,u,v,t,w,B.n),w,w,w,F.yn,w,w,w,w)}}
C.bie.prototype={
giU(d){return this.b},
gda(d){return this.c}}
C.aCd.prototype={
R(){var w=$.ax()
return new C.aCe(new A.au(B.at,w),new A.au(B.at,w),A.a([],x.i))}}
C.aCe.prototype={
gaxQ(){var w,v=this.d
if(v===$){w=this.a.d
v=this.d=new A.au(new A.ba(w,B.b4,B.aO),$.ax())}return v},
gb2K(){var w,v=this.a.c
v=A.a([new A.Gi(v.c,v.d)],x.S)
w=this.a.c.gFD()
B.d.v(v,new A.N(w,new C.dmU(),A.T(w).k("N<1,+email,name(n,n)>")))
w=x.K
v=A.C(new A.Z(v,new C.dmV(this),w),w.k("M.E"))
return v},
q(){var w=this,v=w.gaxQ(),u=v.T$=$.ax()
v.P$=0
v=w.e
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.a1()},
c86(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e.a.a,k=A.ag("\\D",!0,!1,!1,!1),j=A.aL(l,k,"")
l=m.gaxQ()
k=B.a.fq(B.a.i(l.a.a),A.ag("\\s+",!0,!1,!1,!1))
if(new A.Z(k,new C.dmW(),A.T(k).k("Z<1>")).gL(0)<2){m.m(new C.dmX(m))
return}if(j.length<7){m.m(new C.dmY(m))
return}if(m.r.length===0){m.m(new C.dmZ(m))
return}k=m.f
if(B.a.i(k.a.a).length<5){m.m(new C.dn_(m))
return}w=m.gb2K()
v=m.c
v.toString
l=B.a.i(l.a.a)
u=m.r
k=B.a.i(k.a.a)
t=A.a([],x.A)
for(s=m.x,r=s.length,q=x.N,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
n=o.a
if(n>=0&&n<w.length){n=w[n]
t.push(A.H(["relation",o.b,"name",n.b,"email",n.a],q,q))}}A.a5(v,!1).O(new C.bie(l,j,u,k,t))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gb2K(),a0=new C.dnb(),a1=f.a.c
a1=C.aPG(B.wt,"The group owner, "+a1.d+", will see this and has to approve you.","Ask to join "+a1.e)
w=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),f.gaxQ(),e,e,e,e,e,2,a0.$1("Full name *"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.kW,e,e,e,e)
v=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),f.e,e,e,e,e,e,2,a0.$1("Phone number *"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,B.jJ,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
u=f.r
if(u.length===0)u=e
t=a0.$1("State you live in *")
s=x.t
r=A.a([],s)
for(q=x.Q,p=0;p<50;++p){o=B.ko[p]
r.push(new A.eJ(o,new A.y(o,e,e,e,e,e,e,e,e,e,e,e),B.f6,e,q))}n=x.N
m=x.p
r=A.a([a1,B.aB,w,B.W,v,B.W,A.np(t,B.fA,u,!0,r,e,new C.dn5(f),B.df,e,n),B.W,A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),f.f,e,e,e,e,e,2,a0.$1("Home address * (street, city)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.kW,e,e,e,e),B.aQ,D.fJU,B.au,D.fMN,B.Q],m)
if(d.length===0)r.push(D.fFj)
for(a1=f.x,w=x.G,v=x.c,u=x.u,l=0;l<a1.length;++l){t=a1[l]
k=a0.$1("Who")
j=A.a([],s)
for(p=0;p<6;++p){i=D.dwi[p]
j.push(new A.eJ(i,new A.y(C.hu5(i),e,e,e,e,e,e,e,e,e,e,e),B.f6,e,q))}t=A.np(k,B.fA,t.b,!0,j,e,new C.dn6(f,l),B.pE,e,n)
k=a1[l].a
k=k<d.length?k:e
j=a0.$1("Person in group")
h=A.a([],u)
for(g=0;g<d.length;++g)h.push(new A.eJ(g,new A.y(d[g].b,e,e,e,e,e,e,B.a1,e,e,e,e),B.f6,e,v))
r.push(new A.D(B.ct,new A.ca(B.aM,B.e,B.i,B.m,e,B.p,e,0,A.a([new A.a4(108,e,t,e),B.ad,new A.by(1,B.ba,A.np(j,B.fA,k,!0,h,e,new C.dn7(f,l),B.pE,e,w),e),A.aH(e,e,e,e,B.rP,e,e,e,new C.dn8(f,l),e,e,e,e,e,e)],m),e),e))}if(d.length!==0)r.push(new A.bM(B.a5,e,e,A.hs(D.bUp,D.fBb,new C.dn9(f),e),e))
a1=f.w
if(a1!=null)r.push(new A.D(B.i4,A.d(a1,e,e,e,e,e,e,D.fx5,e,e,e),e))
r.push(B.ae)
r.push(A.di(B.a2G,D.fIw,f.gc85(),A.bo(B.b_,e,e,e,B.w,B.oK,e,e,new A.b8(A.m(16),B.a0),e,e,e)))
r.push(A.bN(!1,B.di,e,e,!0,e,e,e,new C.dna(a2),e,e))
return A.ch(A.x(r,B.ak,e,B.e,B.i,0,B.p),B.t,e,B.y,e,e,e,e,B.ah)}}
C.aMx.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.aMy.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.aN6.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
var z=a.updateTypes(["aB<~>()","oK(Y,~(~()))","oK(Y,mo)","PX(q4)","Ko(tE)","G(wJ,wJ)","abY(Y,G)","~(md)","~(CP)","ai<pq<CP>>(Y)","v(wJ)","oK(Y)","~()"])
C.caw.prototype={
$1(d){return d.a===this.a},
$S:124}
C.cay.prototype={
$1(d){return d.c===this.a},
$S:124}
C.cax.prototype={
$1(d){var w=this.a
return d.anm(w)&&d.c!==w},
$S:124}
C.caM.prototype={
$2(d,e){return e.f.aN(0,d.f)},
$S:415}
C.cas.prototype={
$2(d,e){return e.f.aN(0,d.f)},
$S:415}
C.caA.prototype={
$1(d){return d.a===this.a},
$S:124}
C.caB.prototype={
$1(d){return d.e===this.a},
$S:124}
C.caF.prototype={
$1(d){return d.c===this.a},
$S:124}
C.caK.prototype={
$1(d){return d.aHl(this.a)},
$S:124}
C.caD.prototype={
$1(d){var w=this.a
return d.anm(w)&&d.c!==w},
$S:124}
C.caz.prototype={
$1(d){return d.e===this.a},
$S:124}
C.cat.prototype={
$1(d){return d.a},
$S:439}
C.car.prototype={
$1(d){return d.a===this.a},
$S:124}
C.caI.prototype={
$1(d){return d.a===this.a},
$S:188}
C.cau.prototype={
$1(d){return d.a===this.a&&d.e==="pending"},
$S:188}
C.caG.prototype={
$1(d){return d.a===this.a},
$S:188}
C.caH.prototype={
$1(d){return d.a===this.a},
$S:188}
C.flN.prototype={
$1(d){var w,v,u,t
if(d.b!==B.t_)return!1
w=d.d
if(B.a.i(w).toLowerCase()===this.a)return!0
v=this.b
u=v.length!==0
if(u&&d.x===v)return!0
if(u){t=this.c.amg(w)
return t!=null&&B.a.i(t.toLowerCase())===v}return!1},
$S:226}
C.flM.prototype={
$2(d,e){return d+e.c},
$S:147}
C.fqJ.prototype={
$1(d){return new C.PX(d,d.f)},
$S:z+3}
C.fqK.prototype={
$1(d){return new C.Ko(d.e,!1,d.a,d.f)},
$S:z+4}
C.fqL.prototype={
$2(d,e){return e.a.aN(0,d.a)},
$S:z+5}
C.dQQ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ia()},
$S:11}
C.dQG.prototype={
$0(){var w=this,v=w.a
v.w=w.b
v.x=w.c
v.z=w.d},
$S:0}
C.dQF.prototype={
$1(d){var w=null,v=A.m(22),u=B.b_.j(0.4),t=A.d("The owner of this group, ${found.ownerName}, has to approve you before you can enter. You will find the group under YOU JOINED as soon as you are approved.",w,w,w,w,w,w,B.x8,w,w,w)
return A.ep(A.a([A.bN(!1,B.Vl,w,w,!0,w,w,w,new C.dQE(d),w,w)],x.p),w,w,B.fA,t,w,w,w,new A.b8(v,new A.ay(u,1,B.r,-1)),D.fMU,w)},
$S:19}
C.dQE.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dQK.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=B.cu.aw(0,t)
w=u.e
w===$&&A.c()
w=w.x
w===$&&A.c()
u=u.f
u===$&&A.c()
u=u.x
u===$&&A.c()
return A.b4(v,v,v,new C.adm(t,w,u,v),B.fF)},
$S:59}
C.dQM.prototype={
$0(){return A.iX(this.a,null)},
$S:0}
C.dQL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hH(u.b,new C.ard(s.c,s.d,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.ia(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQN.prototype={
$1(d){var w,v=this.a,u=d.b,t=u.gx0(),s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b7E(d.a,C.hpc(u.gaoj().length,"",u,new C.dQJ(v,this.b,d),w,s,"Owner \xb7 "+t+"/100 seats"))},
$S:752}
C.dQJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hH(u.b,new C.IC(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.ia(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQO.prototype={
$0(){return this.a.K(x.q).f.U(D.fez)},
$S:0}
C.dQP.prototype={
$1(d){var w,v=this.a,u=J.ad(v.w),t=d.b,s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b7E(d.a+u,C.hpc(0,"",t,new C.dQI(v,this.b,d),w,s,"Member \xb7 Owner "+t.d))},
$S:752}
C.dQI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hH(u.b,new C.IC(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.ia(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQH.prototype={
$2(d,e){var w,v=this.a.r
v===$&&A.c()
v=v.x
v===$&&A.c()
w=B.cu.aw(0,B.k.E(v*1.4-this.b*0.08,0,1))
return A.db(A.dR(this.c,new A.t(0,(1-w)*18)),w)},
$S:230}
C.eis.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eir.prototype={
$1(d){var w=A.a([d.b,d.e,d.d,d.c,d.a],x.s),v=d.r,u=A.T(v).k("N<1,n>")
B.d.v(w,new A.N(v,new C.eip(),u))
B.d.v(w,new A.N(v,new C.eiq(),u))
return B.a.t(B.d.aG(w," ").toLowerCase(),this.a)},
$S:124}
C.eip.prototype={
$1(d){return d.b},
$S:439}
C.eiq.prototype={
$1(d){return d.a},
$S:439}
C.eio.prototype={
$1(d){var w=null,v=this.a,u=v.b
v=A.d('Permanently delete "'+(u.length===0?v.e:u)+'" ('+v.e+") owned by "+v.d+". This cannot be undone.",w,w,w,w,w,w,B.hc,w,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.eim(d),w,w),A.bI(B.xa,w,new C.ein(d),A.bo(B.bB,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fA,v,w,w,w,w,D.fWl,w)},
$S:19}
C.eim.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.ein.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eix.prototype={
$2(d,e){var w=null,v=this.a,u=v.d
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(w,w,w,new C.adm(1,u,v,w),B.fF)},
$S:59}
C.eiy.prototype={
$0(){return A.iX(this.a,null)},
$S:0}
C.eiz.prototype={
$0(){var w=this.a
w.m(new C.eiw(w))},
$S:0}
C.eiw.prototype={
$0(){var w=this.a,v=w.w
w.w=!v
if(v){w.f.bP(0,B.cb)
w.x=""}},
$S:0}
C.eiA.prototype={
$1(d){var w=this.a
return w.m(new C.eiv(w,d))},
$S:2}
C.eiv.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eiB.prototype={
$2(d,e){var w=J.r(this.b,e),v=this.a
return new C.abY(w,new C.eit(v,w),new C.eiu(v,w),null)},
$S:z+6}
C.eit.prototype={
$0(){return this.a.a0f(this.b)},
$S:0}
C.eiu.prototype={
$0(){return this.a.Or(this.b)},
$S:0}
C.djR.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.e.x
o===$&&A.c()
w=A.m(14)
v=A.m(14)
u=p.r
t=u?B.L:B.b_.j(0.92)
s=A.J(B.b_.j(u?0.55+o*0.35:0.9),B.r,1.4)
o=u?q:A.a([new A.ac(0,B.G,B.b_.j(0.25+o*0.25),B.I,16)],x.V)
r=u?B.b_:B.c2
r=A.X(p.d,r,q,q,q,18)
return A.aI(!1,B.a2,!0,q,A.aO(!1,w,!0,A.eK(A.B(A.a([r,B.ad,A.d(p.c,q,q,q,q,q,q,A.l(q,q,u?B.eA:B.c2,q,q,q,q,q,q,q,q,13,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.b9,B.i,0,q,q),q,new A.o(t,q,s,v,o,q,B.n),46,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p.f,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)},
$S:139}
C.dk9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.f.x
l===$&&A.c()
w=A.m(18)
v=m.r.x
v===$&&A.c()
u=A.m(18)
t=A.ar(B.fA,B.b_,0.06+l*0.05)
t.toString
t=A.a([t,B.fA.j(0.95)],x.O)
s=A.J(B.b_.j(0.28+l*0.25),B.r,1.2)
r=x.V
q=A.a([new A.ac(0,B.G,B.b_.j(0.08+l*0.12),B.I,18)],r)
p=x.p
p=A.a([A.p(n,D.bX_,B.f,n,n,new A.o(B.b_.j(0.14),n,A.J(B.b_.j(0.55),B.r,1),n,A.a([new A.ac(0,B.G,B.b_.j(0.35),B.I,12)],r),n,B.a6),n,46,n,n,n,n,n,46),B.bc,A.E(A.x(A.a([A.d(m.c.e,n,n,n,n,n,n,D.fmC,n,n,n),B.bF,A.d(m.d,n,n,n,n,n,n,B.hs,n,n,n)],p),B.E,n,B.e,B.i,0,B.p),1)],p)
r=m.w
if(r>0){o=A.m(12)
p.push(A.p(n,A.d(""+r+" new",n,n,n,n,n,n,B.vr,n,n,n),B.f,n,n,new A.o(B.ax,n,n,o,n,n,B.n),n,n,n,B.iG,B.fP,n,n,n))}else if(m.x.length!==0)p.push(D.emW)
p.push(A.X(B.eE,B.b_.j(0.7),n,n,n,n))
return A.aI(!1,B.a2,!0,n,A.aO(!1,w,!0,A.b4(A.eK(A.B(p,B.m,n,B.e,B.i,0,n,n),n,new A.o(n,n,s,u,q,new A.a9(B.ay,B.aE,B.x,t,n,n),B.n),n,B.bD,n),n,n,new C.Qh(0.35+l*0.4,!0,v,n),B.aw),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.e,n,n,n,n,n,n,n),B.f,B.L,0,n,n,n,n,n,B.ai)},
$S:139}
C.dQC.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ia()},
$S:11}
C.dQq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQe.prototype={
$1(d){return new A.Gi(d.a,d.b)},
$S:418}
C.dQo.prototype={
$1(d){var w=null,v=A.d(this.a.b+" will not be added to the group. They can ask again later.",w,w,w,w,w,w,B.hc,w,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dQm(d),w,w),A.bI(B.Kz,w,new C.dQn(d),A.bo(B.ax,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fA,v,w,w,w,w,D.fKz,w)},
$S:19}
C.dQm.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dQn.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dQr.prototype={
$0(){return this.a.Wz(this.b)},
$S:0}
C.dQs.prototype={
$0(){return this.a.Om(this.b)},
$S:0}
C.dQt.prototype={
$2(d,e){return d+e.c},
$S:147}
C.dQu.prototype={
$0(){var w=this,v=w.a.c
v.toString
return C.i7W(v,w.b,w.c,w.d,w.e,w.f)},
$S:0}
C.dQp.prototype={
$1(d){return this.bmc(d)},
bmc(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.b
t.bd3(d)
w=2
return A.b(C.IH(t),$async$$1)
case 2:w=3
return A.b(u.a.ia(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:94}
C.dQw.prototype={
$2(d,e){var w=null,v=this.a,u=v.e
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(w,w,w,new C.adm(1,u,v,w),B.fF)},
$S:59}
C.dQx.prototype={
$0(){return C.aOK(this.a,this.b.e)},
$S:0}
C.dQy.prototype={
$0(){return A.iX(this.a,null)},
$S:0}
C.dQz.prototype={
$0(){return this.a.Dj(B.t_)},
$S:0}
C.dQA.prototype={
$0(){return this.a.Dj(B.a6E)},
$S:0}
C.dQB.prototype={
$0(){var w=this.a
return w.m(new C.dQv(w,this.b))},
$S:0}
C.dQv.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
C.dQh.prototype={
$0(){var w=this.b
return this.a.a0n(w.c,w.f,w.d,"Owner")},
$S:0}
C.dQi.prototype={
$1(d){var w=this.a,v=w.gu0()?new C.dQf(w,d):null
return w.b2Q(this.b,d.b,d.a,"Member",d.c,v,new C.dQg(w,d))},
$S:1968}
C.dQg.prototype={
$0(){var w=this.b
return this.a.a0n(w.a,w.c,w.b,"Member")},
$S:0}
C.dQf.prototype={
$0(){var w=this.b
return this.a.Rw(w.b,w.a)},
$S:0}
C.dQj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.c
r.toString
t=u.b
w=2
return A.b(C.apx(r,t.gx0(),t.a,s.a.f,t.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQk.prototype={
$0(){var w=this.a.c
w.toString
return C.aOK(w,this.b.e)},
$S:0}
C.dQl.prototype={
$2(d,e){return d+e.c},
$S:147}
C.dQD.prototype={
$0(){return A.iX(this.a,null)},
$S:0}
C.dks.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.c,r=s?1+d*0.12:1,q=s?"Help mode active":"Activate help mode",p=s?B.be.j(0.28+d*0.22):B.c.j(0.06),o=s?B.ip.j(0.85+d*0.15):B.b_.j(0.35)
o=A.J(o,B.r,s?2:1.1)
w=s?A.a([new A.ac(1+d*2,B.G,B.be.j(0.45+d*0.4),B.I,16+d*14),new A.ac(0,B.G,B.ip.j(0.25+d*0.35),B.I,8+d*6)],x.V):u
v=s?B.ip:B.b_.j(0.85)
return A.aH(u,u,u,u,A.ee(B.A,A.p(u,A.X(B.mQ,v,u,u,s?A.a([new A.cW(B.be.j(0.95),B.I,10+d*8)],x.r):u,20),B.f,u,u,new A.o(p,u,o,u,w,u,B.a6),u,38,u,u,u,u,u,38),r,u,u),u,u,u,t.e,u,u,u,u,q,u)},
$S:157}
C.dkr.prototype={
$2(d,e){var w=this.a.d.x
w===$&&A.c()
return this.b.$1(w)},
$S:62}
C.dog.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=this.a,l=m.e.x
l===$&&A.c()
w=A.m(14)
v=m.d
u=v?0.55+l*0.35:0.25+l*0.15
t=m.f.x
t===$&&A.c()
s=A.m(14)
r=v?B.b_.j(0.12+l*0.06):B.fA.j(0.85)
l=A.J(v?B.b_.j(0.55+l*0.25):B.b_.j(0.18),B.r,1)
q=A.a([A.as(A.d(m.c,n,n,n,n,n,n,A.l(n,n,v?B.eA:B.bU,n,n,n,n,n,n,n,n,12,n,n,B.H,n,n,!0,n,0.6,n,n,n,n,n,n),n,n,n),n,n,n)],x.p)
v=m.w
if(v>0){p=A.m(11)
o=A.J(B.c2,B.r,1.5)
q.push(A.ap(n,A.p(n,A.d(""+v,n,n,n,n,n,n,B.vr,B.K,n,n),B.f,n,D.b4q,new A.o(B.ax,n,o,p,n,n,B.n),n,n,n,n,B.mL,n,n,n),n,n,n,6,-6,n))}return A.aI(!1,B.a2,!0,n,A.aO(!1,w,!0,A.b4(A.eK(new A.an(B.a_,n,B.ab,B.f,q,n),n,new A.o(r,n,l,s,n,n,B.n),40,n,n),n,n,new C.Qh(u,!0,t,n),B.aw),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.r,n,n,n,n,n,n,n),B.f,B.L,0,n,n,n,n,n,B.ai)},
$S:139}
C.doe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=this.a,g=h.d,f=g.x
f===$&&A.c()
w=0.35+f*0.45
f=h.e.x
f===$&&A.c()
v=f*3.141592653589793*2
u=A.m(24)
t=w*0.3
s=A.J(B.b_.j(0.35+t),B.r,1.3)
r=x.V
q=A.a([new A.ac(0,B.G,B.b_.j(0.12+w*0.15),B.I,24)],r)
p=h.c.x
p===$&&A.c()
o=x.p
n=A.a([],o)
for(t=0.55+t,m=0;m<3;++m){l=v+m*3.141592653589793*2/3
k=Math.cos(l)
l=Math.sin(l)
j=6+g.x*4
n.push(A.dR(A.p(i,i,B.f,i,i,new A.o(B.eA.j(t),i,i,i,A.a([new A.ac(0,B.G,B.b_.j(0.45),B.I,10)],r),i,B.a6),i,j,i,i,i,i,i,j),new A.t(38*k,28*l)))}t=A.a([B.b_.j(0.55),B.b_.j(0.08),B.L],x.O)
r=A.a([new A.ac(0,B.G,B.b_.j(0.45),B.I,28)],r)
n.push(A.p(i,A.X(B.hm,B.eA,i,i,A.a([new A.cW(B.b_.j(0.9),B.I,22)],x.r),46),B.f,i,i,new A.o(i,i,i,i,r,new A.c_(B.A,0.5,B.x,i,0,t,i,i),B.a6),i,78,i,i,i,i,i,78))
return A.b4(A.p(i,A.x(A.a([A.ee(B.A,new A.an(B.A,i,B.ab,B.t,n,i),0.85+p*0.25,i,i),B.W,D.fA1,B.Q,D.fJ1,B.aQ,A.B(A.a([A.E(new C.CL("Create group",B.hQ,g,h.f,!1,i),1),B.as,A.E(new C.CL("Join code",B.CG,g,h.r,!0,i),1)],o),B.m,i,B.e,B.i,0,i,i),B.W,new C.CL("Scan invite QR",B.jj,g,h.w,!0,i)],o),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c2,i,s,u,q,i,B.n),i,i,i,i,D.bBQ,i,i,i),i,i,new C.Qh(0.55+w*0.35,!0,f,i),B.aw)},
$S:59}
C.dof.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.c.x
t===$&&A.c()
w=A.m(18)
return A.b4(A.p(v,u.d,B.f,v,v,new A.o(B.c2,v,A.J(B.b_.j(0.35),B.r,1),w,A.a([new A.ac(0,B.G,B.b_.j(0.12+t*0.1),B.I,16)],x.V),v,B.n),v,v,v,v,B.bD,v,v,v),v,v,new C.Qh(0.4+t*0.35,!1,0,v),B.aw)},
$S:59}
C.dod.prototype={
$3(d,e,f){var w,v=e?-1:1,u=f?-1:1,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v)),s=d.a,r=d.b
t.D(new A.aY(s,r))
w=r+14*u
t.D(new A.aq(s+7*v,w))
t.D(new A.aq(s-2*v,w))
t.D(new A.aq(s+6*v,r+28*u))
r=A.I()
r.r=B.b_.j(0.35*this.a.b).gp(0)
r.b=B.a9
r.c=1.3
r.d=B.by
this.b.aI(t,r)},
$S:612}
C.fxk.prototype={
$1(d){return new A.D(new A.P(0,0,0,A.aG(d,B.eN,x.w).w.f.d),new A.e2(new C.fxj(this.a,this.b),null),null)},
$S:61}
C.fxj.prototype={
$2(d,e){var w=null,v=C.aPG(B.hm,"Pick your group code: 3 letters + 1\u20135 numbers (e.g. ABC123).","Create lightning group"),u=this.b,t=A.a([new C.blj()],x.F),s=C.KW("ABC12345"),r=this.a,q=r.a,p=x.p
return new C.oK(A.x(A.a([v,B.aQ,A.aM(w,B.Y,!0,w,!0,B.t,w,A.aN(),u,w,w,w,w,w,2,s.bdn(q.length===0?w:q),B.y,!0,w,!0,w,!1,w,B.aj,w,w,t,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new C.fxg(r,e),w,w,w,!1,w,w,!1,w,!0,w,B.aa,w,w,w,w,w,w,w,w,w,w,w,D.fqk,!0,B.a4,w,B.mn,w,w,w,w),B.Q,D.fEl,B.bx,A.B(A.a([A.E(A.bN(!1,H.Kw,w,w,!0,w,w,w,new C.fxh(d),w,w),1),B.ad,A.E(A.bI(D.fzG,w,new C.fxi(r,u,e,d),A.bo(B.b_,w,w,w,B.c2,w,B.cm,w,new A.b8(A.m(14),B.a0),w,w,w)),2)],p),B.m,w,B.e,B.i,0,w,w)],p),B.ak,w,B.e,B.P,0,B.p),!0,w)},
$S:z+1}
C.fxg.prototype={
$1(d){var w=this.a
if(w.a.length!==0)this.b.$1(new C.fxf(w))},
$S:2}
C.fxf.prototype={
$0(){return this.a.a=""},
$S:0}
C.fxh.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fxi.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a).toUpperCase()
if(!C.hx4(v)){w.c.$1(new C.fxe(w.a))
return}A.a5(w.d,!1).O(v)},
$S:0}
C.fxe.prototype={
$0(){this.a.a="Use exactly 3 letters + 1\u20135 numbers (e.g. ABC123)."},
$S:0}
C.fxE.prototype={
$1(d){var w,v,u,t=this,s=null,r=A.aG(d,B.eN,x.w).w,q=C.aPG(t.a,t.c,t.b),p=t.d,o=A.l(s,s,B.c,s,s,s,s,s,s,s,s,16,s,s,B.U,s,s,!0,s,t.f,s,s,s,s,s,s)
o=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),p,s,s,s,s,s,2,C.KW(t.r),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fxB(d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,o,!0,B.a4,s,B.mn,s,s,s,s)
w=A.E(A.bN(!1,H.Kw,s,s,!0,s,s,s,new C.fxC(d),s,s),1)
v=A.bo(B.b_,s,s,s,B.c2,s,B.cm,s,new A.b8(A.m(14),B.a0),s,s,s)
u=x.p
return new A.D(new A.P(0,0,0,r.f.d),new C.oK(A.x(A.a([q,B.aQ,o,B.bx,A.B(A.a([w,B.ad,A.E(A.bI(A.d(t.w,s,s,s,s,s,s,B.cz,s,s,s),s,new C.fxD(p,d),v),2)],u),B.m,s,B.e,B.i,0,s,s)],u),B.ak,s,B.e,B.P,0,B.p),!0,s),s)},
$S:61}
C.fxB.prototype={
$1(d){var w=B.a.i(d)
if(w.length!==0)A.a5(this.a,!1).O(w)},
$S:2}
C.fxC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fxD.prototype={
$0(){var w=B.a.i(this.a.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fxA.prototype={
$1(d){return this.a&&this.b.t(0,d.b)},
$S:183}
C.fxx.prototype={
$1(d){return!this.a.$1(d)},
$S:183}
C.fxy.prototype={
$1(d){var w=this
return new A.D(new A.P(0,0,0,A.aG(d,B.eN,x.w).w.f.d),new A.e2(new C.fxw(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y),null),null)},
$S:61}
C.fxw.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.b,a2=B.a.i(a1.a.a).toLowerCase(),a3=d.c
if(a2.length===0)w=a3
else{v=A.T(a3).k("Z<1>")
w=A.C(new A.Z(a3,new C.fxo(a2),v),v.k("M.E"))}v=d.d
u=A.T(w).k("Z<1>")
t=A.C(new A.Z(w,new C.fxp(v),u),u.k("M.E"))
u=d.a
if(!B.d.b3(t,new C.fxq(u)))u.a=t.length!==0?B.d.gI(t).b:""
s=x.p
r=A.a([],s)
q=d.e
if(q){p=u.b
o=A.p(a0,D.bZV,B.f,a0,a0,new A.o(B.b_.j(0.14),a0,A.J(B.b_.j(0.5),B.r,1),a0,A.a([new A.ac(0,B.G,B.b_.j(0.25),B.I,12)],x.V),a0,B.a6),a0,46,a0,a0,a0,a0,a0,46)
n=A.m(14)
m=p?B.b_.j(0.22):B.c.j(0.06)
l=A.J(p?B.b_:B.b_.j(0.35),B.r,1)
r.push(A.B(A.a([o,B.b2,A.aI(!1,B.a2,!0,a0,A.aO(!1,n,!0,A.p(a0,A.X(B.fa,p?B.eA:B.b_,a0,a0,a0,a0),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,46,a0,a0,a0,a0,a0,46),a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fxr(u,a5),a0,a0,a0,a0,a0,a0,a0),B.f,B.L,0,a0,a0,a0,a0,a0,B.ai)],s),B.m,a0,B.e,B.i,0,a0,a0))}else r.push(C.aPG(B.wk,"Log what left the group case.","Record spending"))
if(q){p=A.a([B.au,D.fRg,B.au,D.fQl],s)
o=d.f
if(o!=null&&B.a.i(o).length!==0){n=B.be.j(0.12)
m=A.m(12)
l=A.J(B.be.j(0.45),B.r,1)
B.d.v(p,A.a([B.W,A.p(a0,A.d("Help mode: "+B.a.i(o),a0,a0,a0,a0,a0,a0,B.UL,B.K,a0,a0),B.f,a0,a0,new A.o(n,a0,l,m,a0,a0,B.n),a0,a0,a0,a0,B.bT,a0,a0,a0)],s))}B.d.v(r,p)}r.push(B.aB)
if(q){p=A.a([],s)
if(u.b)B.d.v(p,A.a([A.aM(a0,B.Y,!0,a0,!0,B.t,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.KW("Search member\u2026"),B.y,!0,a0,!0,a0,!1,a0,B.aj,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,new C.fxs(a5),a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.aa,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.df,!0,B.a4,a0,B.an,a0,a0,a0,a0),B.W],s))
p.push(A.d("WHO CONTRIBUTED",a0,a0,a0,a0,a0,a0,A.l(a0,a0,B.b_.j(0.85),a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.H,a0,a0,!0,a0,1.4,a0,a0,a0,a0,a0,a0),a0,a0,a0))
p.push(B.Q)
if(a3.length===0)p.push(D.fXe)
else if(d.r)p.push(D.fGW)
else if(w.length===0)p.push(D.fDD)
else{a1=A.a([],s)
for(o=w.length,k=0;k<w.length;w.length===o||(0,A.L)(w),++k){j=w[k]
n=j.b
m=v.$1(j)?n+" \u2713 paid":n
l=u.a
i=v.$1(j)?a0:new C.fxt(u,a5,j)
h=B.cT.j(0.18)
g=B.c.j(0.06)
f=u.a===n
e=f?B.c2:B.ac
f=f?B.b_:B.b_.j(0.25)
a1.push(A.ju(a0,g,h,new A.y(m,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),new A.F(!0,e,a0,a0,a0,a0,a0,B.U,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),i,l===n,B.b_,a0,new A.ay(f,1,B.r,-1),a0))}p.push(new A.cT(D.b4C,A.ch(A.bY(B.bG,a1,B.br,a0,8,8),B.t,a0,B.y,a0,a0,a0,a0,B.ah),a0))}B.d.v(r,p)}else B.d.v(r,A.a([A.aM(a0,B.Y,!1,a0,!0,B.t,a0,A.aN(),d.w,a0,a0,a0,a0,a0,2,C.KW("What was spent"),B.y,!0,a0,!0,a0,!1,a0,B.aj,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.aa,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.df,!0,B.a4,a0,B.an,a0,a0,a0,a0)],s))
r.push(B.ae)
a1=d.x
r.push(A.aM(a0,B.Y,!q,a0,!0,B.t,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.KW("Amount ($)"),B.y,!0,a0,!0,a0,!1,a0,B.aj,a0,a0,a0,a0,a0,B.e1,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.aa,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.UQ,!0,B.a4,a0,B.an,a0,a0,a0,a0))
r.push(B.bx)
r.push(A.B(A.a([A.E(A.bN(!1,H.Kw,a0,a0,!0,a0,a0,a0,new C.fxu(a4),a0,a0),1),B.ad,A.E(A.bI(K.aVO,a0,new C.fxv(u,a1,q,d.w,a3,d.y,a4),A.bo(B.b_,a0,a0,a0,B.c2,a0,B.cm,a0,new A.b8(A.m(14),B.a0),a0,a0,a0)),2)],s),B.m,a0,B.e,B.i,0,a0,a0))
return new C.oK(A.x(r,B.ak,a0,B.e,B.P,0,B.p),!0,a0)},
$S:z+1}
C.fxo.prototype={
$1(d){var w=this.a
return B.a.t(d.b.toLowerCase(),w)||B.a.t(d.a.toLowerCase(),w)},
$S:183}
C.fxp.prototype={
$1(d){return!this.a.$1(d)},
$S:183}
C.fxq.prototype={
$1(d){return d.b===this.a.a},
$S:183}
C.fxr.prototype={
$0(){return this.b.$1(new C.fxn(this.a))},
$S:0}
C.fxn.prototype={
$0(){var w=this.a
return w.b=!w.b},
$S:0}
C.fxs.prototype={
$1(d){return this.a.$1(new C.fxm())},
$S:2}
C.fxm.prototype={
$0(){},
$S:0}
C.fxt.prototype={
$1(d){return this.b.$1(new C.fxl(this.a,this.c))},
$S:9}
C.fxl.prototype={
$0(){return this.a.a=this.b.b},
$S:0}
C.fxu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fxv.prototype={
$0(){var w,v,u,t=this,s=A.d4(B.a.i(t.b.a.a))
if(s==null)s=0
w=t.c
if(w){v=B.a.i(t.a.a)
u=v.length===0?"\u2014":v}else{v=B.a.i(t.d.a.a)
u=v.length===0?"\u2014":v}v=!1
if(w)if(t.e.length!==0){w=t.a.a
w=B.a.i(w).length===0||t.f.t(0,w)}else w=v
else w=v
if(w)return
A.a5(t.r,!1).O(new C.biL(u,s,""))},
$S:0}
C.fxz.prototype={
$0(){var w=this.a,v=w.T$=$.ax()
w.P$=0
w=this.b
w.T$=v
w.P$=0
w=this.c
w.T$=v
w.P$=0},
$S:12}
C.fx4.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.yn,new C.oK(A.x(A.a([A.as(A.p(w,D.bVT,B.f,w,w,new A.o(B.fb.j(0.15),w,A.J(B.fb.j(0.55),B.r,1),w,A.a([new A.ac(0,B.G,B.fb.j(0.25),B.I,16)],x.V),w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fM6,B.Q,A.d(this.a,w,w,w,w,w,w,D.ftR,B.K,w,w),B.au,A.d(this.b,w,w,w,w,w,w,B.hs,B.K,w,w),B.W,D.fFu,B.bx,A.B(A.a([A.E(A.bN(!1,D.fMu,w,w,!0,w,w,w,new C.fx2(d),w,w),1),B.ad,A.E(A.bI(D.fKx,w,new C.fx3(d),A.bo(B.fb,w,w,w,B.c,w,B.cm,w,new A.b8(A.m(14),B.a0),w,w,w)),2)],v),B.m,w,B.e,B.i,0,w,w)],v),B.ak,w,B.e,B.P,0,B.p),!0,w),w)},
$S:61}
C.fx2.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fx3.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fwX.prototype={
$2(d,e){return d+e.c},
$S:147}
C.fwY.prototype={
$1(d){return d.w===this.a.ax},
$S:226}
C.fwZ.prototype={
$1(d){var w=this
return new A.D(new A.P(12,0,12,A.aG(d,B.eN,x.w).w.f.d),A.p5(new C.fwW(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),!0,0.72,0.92,0.45,!1,null),null)},
$S:61}
C.fwW.prototype={
$2(d,e){var w=this,v={}
v.a=D.abG
return new A.e2(new C.fwV(v,e,w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),null)},
$S:1970}
C.fwV.prototype={
$2(d,e){var w=this,v=w.a,u=v.a,t=w.ay
t=t==null?null:new C.fwT(t,d,e)
return new C.oK(new C.bjI(w.b,w.c,w.d,w.e,w.f,w.r,w.w,u,w.ax,new C.fwU(v,e),t,null),!1,null)},
$S:z+1}
C.fwU.prototype={
$1(d){return this.b.$1(new C.fwR(this.a,d))},
$S:z+8}
C.fwR.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fwT.prototype={
$1(d){return this.bmP(d)},
bmP(d){var w=0,v=A.j(x.H),u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a.$1(d),$async$$1)
case 2:if(u.b.e!=null)u.c.$1(new C.fwS())
return A.h(null,v)}})
return A.i($async$$1,v)},
$S:94}
C.fwS.prototype={
$0(){},
$S:0}
C.duo.prototype={
$2(d,e){return d+e.c},
$S:147}
C.dup.prototype={
$1(d){return d.w===this.a.d.ax},
$S:226}
C.duq.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a.x.x
r===$&&A.c()
w=B.b_.j(0.12+r*0.08)
v=A.J(B.b_.j(0.45+r*0.25),B.r,1)
r=A.a([new A.ac(0,B.G,B.b_.j(0.2+r*0.15),B.I,18)],x.V)
u=this.b
t=u?B.pk:B.hm
return A.as(A.p(s,A.X(t,u?B.j2:B.b_,s,s,s,32),B.f,s,s,new A.o(w,s,v,s,r,s,B.a6),s,64,s,s,s,s,s,64),s,s,s)},
$S:235}
C.dur.prototype={
$2(d,e){return d+e.c},
$S:147}
C.dus.prototype={
$1(d){var w=this.a
return A.a([w.avZ("All",D.abG),w.avZ("Contributions",D.aZG),w.avZ("Missed",D.aZH)],x.T)},
$S:z+9}
C.dut.prototype={
$1(d){return this.a.c_N(this.b,d)},
$S:z+10}
C.duu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dun.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.c
w=4
return A.b(C.i7O(u.b,t.b),$async$$0)
case 4:w=e===!0?2:3
break
case 2:w=5
return A.b(u.a.cx.$1(t.d),$async$$0)
case 5:case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fwy.prototype={
$1(d){var w=null,v=x.p
return new A.D(F.yn,new C.oK(A.x(A.a([A.as(A.p(w,D.c_p,B.f,w,w,new A.o(B.be.j(0.14),w,A.J(B.be.j(0.55),B.r,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fAo,B.W,A.d(this.a,w,w,w,w,w,w,D.fmi,B.K,w,w),B.W,D.fE3,B.bx,A.B(A.a([A.E(A.bN(!1,D.fyS,w,w,!0,w,w,w,new C.fww(d),w,w),1),B.ad,A.E(A.bI(D.fBi,w,new C.fwx(d),A.bo(B.be,w,w,w,B.c2,w,B.cm,w,new A.b8(A.m(14),B.a0),w,w,w)),2)],v),B.m,w,B.e,B.i,0,w,w)],v),B.ak,w,B.e,B.P,0,B.p),!1,w),w)},
$S:61}
C.fww.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fwx.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fwB.prototype={
$1(d){var w=null,v=x.p,u=A.a([A.as(A.p(w,D.c_c,B.f,w,w,new A.o(B.b_.j(0.14),w,A.J(B.b_.j(0.55),B.r,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aB,D.fWe,B.ae,C.h9z("Member",this.a),C.h9z("Amount","$"+B.k.ac(this.b,2))],v),t=this.c
if(t!=null&&B.a.i(t).length!==0)u.push(C.h9z("Help for",B.a.i(t)))
u.push(B.W)
u.push(D.fM3)
u.push(B.bx)
u.push(A.B(A.a([A.E(A.bN(!1,D.fOZ,w,w,!0,w,w,w,new C.fwz(d),w,w),1),B.ad,A.E(A.bI(D.fVb,w,new C.fwA(d),A.bo(B.b_,w,w,w,B.c2,w,B.cm,w,new A.b8(A.m(14),B.a0),w,w,w)),2)],v),B.m,w,B.e,B.i,0,w,w))
return new A.D(F.yn,new C.oK(A.x(u,B.ak,w,B.e,B.P,0,B.p),!0,w),w)},
$S:61}
C.fwz.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fwA.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fwN.prototype={
$0(){var w=this,v=w.a,u=w.b.a.a,t=w.c.a.a,s=w.d.a.a,r=w.e.a.a
v.z=B.a.i(u)
v.Q=B.a.i(t)
v.as=B.a.i(s)
v.at=B.a.i(r)},
$S:0}
C.fwO.prototype={
$1(d){var w=this
return new A.D(new A.P(0,0,0,A.aG(d,B.eN,x.w).w.f.d),A.p5(new C.fwM(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,d),!0,0.82,0.94,0.5,!1,null),null)},
$S:61}
C.fwM.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.b,q=C.hsd(r,t.a),p=A.d(r?"Help mode is live":"Set up group help mode",s,s,s,s,s,s,B.de,B.K,s,s),o=x.p
p=A.a([q,B.Q,p,B.am,A.d(r?"Members see the green icon and your payment details. Turn off when the round ends.":"Fill in where members send money. These details stay saved for next time.",s,s,s,s,s,s,G.a9Z,B.K,s,s),B.aQ,A.d("HELP DETAILS",s,s,s,s,s,s,A.l(s,s,B.be.j(0.9),s,s,s,s,s,s,s,s,11,s,s,B.H,s,s,!0,s,1.4,s,s,s,s,s,s),s,s,s),B.W,A.aM(s,B.Y,!1,s,!0,B.t,s,A.aN(),t.c,s,s,s,s,s,2,C.KW("What are you collecting for?"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,2,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,B.df,!0,B.a4,s,B.an,s,s,s,s),B.W,A.aM(s,B.Y,!1,s,!0,B.t,s,A.aN(),t.d,s,s,s,s,s,2,C.KW("Cash App"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,B.df,!0,B.a4,s,B.an,s,s,s,s),B.W,A.aM(s,B.Y,!1,s,!0,B.t,s,A.aN(),t.e,s,s,s,s,s,2,C.KW("Zelle"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,B.df,!0,B.a4,s,B.an,s,s,s,s),B.W,A.aM(s,B.Y,!1,s,!0,B.t,s,A.aN(),t.f,s,s,s,s,s,2,C.KW("Phone number \u2014 questions or confirm payment"),B.y,!0,s,!0,s,!1,s,B.aj,s,s,B.a4z,s,s,B.jJ,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,B.df,!0,B.a4,s,B.an,s,s,s,s),B.bx],o)
q=t.r
w=t.w
v=t.x
if(r){r=A.bI(D.fGX,s,new C.fwH(q,w,v),A.bo(B.fb,s,s,s,B.c,s,B.cm,s,new A.b8(A.m(14),B.a0),s,s,s))
u=B.be.j(0.55)
B.d.v(p,A.a([r,B.Q,A.dT(D.fGT,new C.fwI(q,v,w),A.dj(s,s,s,s,s,s,s,s,s,B.ip,s,s,B.cm,s,new A.b8(A.m(14),B.a0),new A.ay(u,1,B.r,-1),s,s,s,s))],o))}else{r=B.b_.j(0.45)
B.d.v(p,A.a([A.dT(D.fz4,new C.fwJ(q,v,w),A.dj(s,s,s,s,s,s,s,s,s,B.b_,s,s,B.cm,s,new A.b8(A.m(14),B.a0),new A.ay(r,1,B.r,-1),s,s,s,s)),B.Q,A.bI(D.fUr,s,new C.fwK(q,w,v),A.bo(B.be,s,s,s,B.c2,s,B.cm,s,new A.b8(A.m(14),B.a0),s,s,s))],o))}p.push(B.Q)
p.push(A.bN(!1,H.Kw,s,s,!0,s,s,s,new C.fwL(v),s,s))
return new C.oK(A.cl(p,e,s,s,s,s,B.ah,!1),!0,s)},
$S:z+2}
C.fwH.prototype={
$0(){var w,v,u
this.a.$0()
w=this.b
v=B.a.i(w.ax)
u=w.z
if(v.length!==0&&!B.d.t(w.CW,v)){w.c4k(v,u)
B.d.M(w.CW,v)}w.y=!1
w.ax=""
w.ay=null
A.a5(this.c,!1).O(w)},
$S:0}
C.fwI.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.fwJ.prototype={
$0(){this.a.$0()
A.a5(this.b,!1).O(this.c)},
$S:0}
C.fwK.prototype={
$0(){var w,v=this
v.a.$0()
w=v.b
if(B.a.i(w.z).length===0){v.c.K(x.q).f.U(D.fcD)
return}w.cHG()
A.a5(v.c,!1).O(w)},
$S:0}
C.fwL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fwP.prototype={
$0(){var w=this,v=w.a,u=v.T$=$.ax()
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
$S:12}
C.fwG.prototype={
$1(d){return new A.D(F.yn,A.p5(new C.fwF(this.a,this.b,d),!0,0.72,0.9,0.45,!1,null),null)},
$S:61}
C.fwF.prototype={
$2(d,e){var w=this,v=null,u=A.a([C.hsd(!0,w.a),B.W,D.fX6,B.am,D.fLy,B.aQ],x.p),t=w.b,s=B.a.i(t.z)
if(s.length!==0)u.push(C.fnQ(w.c,B.lH,"COLLECTING FOR",v,v,s))
s=B.a.i(t.Q)
if(s.length!==0)u.push(C.fnQ(w.c,B.i6,"CASH APP",new C.fwC(t),"Open Cash App",s))
s=B.a.i(t.as)
if(s.length!==0)u.push(C.fnQ(w.c,B.kl,"ZELLE",v,v,s))
s=t.at
if(B.a.i(s).length!==0)u.push(C.fnQ(w.c,B.wu,"PHONE NUMBER",new C.fwD(t),"Call",A.nj(s)))
if(B.a.i(t.z).length===0&&B.a.i(t.Q).length===0&&B.a.i(t.as).length===0&&B.a.i(t.at).length===0)u.push(D.en9)
u.push(B.ae)
u.push(A.bN(!1,D.aVt,v,v,!0,v,v,v,new C.fwE(w.c),v,v))
return new C.oK(A.cl(u,e,v,v,v,v,B.ah,!1),!1,v)},
$S:z+2}
C.fwC.prototype={
$0(){return C.bBY(this.a.Q)},
$S:0}
C.fwD.prototype={
$0(){return C.bB1(this.a.at)},
$S:0}
C.fwE.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fnS.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a.x
q===$&&A.c()
w=this.b
v=w?B.be.j(0.22+q*0.18):B.b_.j(0.14)
u=w?B.ip.j(0.85+q*0.15):B.b_.j(0.5)
u=A.J(u,B.r,w?2:1)
t=w?A.a([new A.ac(1+q,B.G,B.be.j(0.4+q*0.35),B.I,18+q*10)],x.V):r
s=w?B.ip:B.b_
return A.as(A.p(r,A.X(B.mQ,s,r,r,w?A.a([new A.cW(B.be.j(0.95),B.I,12+q*8)],x.r):r,r),B.f,r,r,new A.o(v,r,u,r,t,r,B.a6),r,56,r,r,r,r,r,56),r,r,r)},
$S:235}
C.fnR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fJ(new A.fD(t.a)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Copied "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fx6.prototype={
$1(d){return new A.Gi(d.a,d.b)},
$S:418}
C.fx7.prototype={
$1(d){var w=this.a
if(B.a.i(w.d).toLowerCase()!==B.a.i(d.b).toLowerCase()){w=w.x
w=w.length!==0&&w===B.a.i(d.a.toLowerCase())}else w=!0
return w},
$S:183}
C.fx8.prototype={
$2(d,e){return d+e.c},
$S:147}
C.fx9.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="x in all \xb7 missed ",j=A.aG(a1,l,x.w).w,i=m.b,h=i.length,g=m.c.length,f=B.k.ac(m.d,2),e=m.e,d=e?" \xb7 round is open":"",a0=x.p
d=A.a([C.aPG(B.mQ,""+h+" of "+g+" gave \xb7 total $"+f+d,m.a),B.ae,A.bx(A.m(8),A.kj(B.dr,l,l,10,l,m.f,D.b0M),B.ap),B.aQ,A.d("GAVE ("+i.length+")",l,l,l,l,l,l,D.foO,l,l,l),B.am],a0)
if(i.length===0)d.push(D.fCF)
for(h=i.length,g=m.r,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){v=i[w]
f=new A.aP(12,12)
u=B.be.j(0.07)
t=new A.aP(12,12)
s=new A.ay(B.be.j(0.3),1,B.r,-1)
r=v.a
q=r.b
p=v.b
o=p.f.bU()
r=r.a
d.push(A.aO(!1,new A.bh(f,f,f,f),!0,A.p(l,new A.ca(B.aM,B.e,B.i,B.m,l,B.p,l,0,A.a([D.bXH,B.as,new A.by(1,B.ba,A.x(A.a([new A.y(q,l,B.fS,l,l,l,l,l,l,l,l,l),new A.y(""+A.bL(o)+"/"+A.bW(o)+"/"+A.bC(o)+" \xb7 gave "+g.apb(q,r)+k+g.a65(q,r)+" \xb7 tap for receipt",l,B.Eg,l,l,l,l,l,l,l,l,l)],a0),B.E,l,B.e,B.i,0,B.p),l),new A.y("$"+B.k.ac(p.c,2),l,G.Km,l,l,l,l,l,l,l,l,l)],a0),l),B.f,l,l,new A.o(u,l,new A.bH(s,s,s,s),new A.bh(t,t,t,t),l,l,B.n),l,l,l,B.eI,B.bT,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.fx5(a1,g,v),l,l,l,l,l,l,l))}d.push(B.ae)
i=m.w
h=i.length
d.push(A.d(e?"NOT YET ("+h+")":"DID NOT GIVE ("+h+")",l,l,l,l,l,l,D.fm7,l,l,l))
d.push(B.am)
if(i.length===0)d.push(D.fJv)
for(h=i.length,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){n=i[w]
f=B.j2.j(0.07)
e=new A.aP(12,12)
s=new A.ay(B.j2.j(0.3),1,B.r,-1)
u=n.b
t=n.a
d.push(A.p(l,new A.ca(B.aM,B.e,B.i,B.m,l,B.p,l,0,A.a([D.bSi,B.as,new A.by(1,B.ba,A.x(A.a([new A.y(u,l,B.fS,l,l,l,l,l,l,l,l,l),new A.y("gave "+g.apb(u,t)+k+g.a65(u,t),l,B.Eg,l,l,l,l,l,l,l,l,l)],a0),B.E,l,B.e,B.i,0,B.p),l)],a0),l),B.f,l,l,new A.o(f,l,new A.bH(s,s,s,s),new A.bh(e,e,e,e),l,l,B.n),l,l,l,B.eI,B.bT,l,l,l))}return new A.cT(new A.aZ(0,1/0,0,j.a.b*0.88),new C.oK(A.ch(A.x(d,B.E,l,B.e,B.i,0,B.p),B.t,l,B.y,l,l,l,l,B.ah),!0,l),l)},
$S:1971}
C.fx5.prototype={
$0(){return C.i7U(this.a,this.b,this.c.b)},
$S:0}
C.fx1.prototype={
$2(d,e){var w=null
return new A.D(B.w4,A.B(A.a([new A.a4(96,w,A.d(d,w,w,w,w,w,w,B.vo,w,w,w),w),A.E(A.d(e,w,w,w,w,w,w,B.V_,w,w,w),1)],x.p),B.E,w,B.e,B.i,0,w,w),w)},
$S:127}
C.fx0.prototype={
$1(d){var w=this,v=null,u=w.b,t=w.c,s=A.a([C.aPG(B.ho,w.a,"Receipt"),B.ae,u.$2("From",t.d),u.$2("For",w.d),u.$2("Amount","$"+B.k.ac(t.c,2)),u.$2("Date",w.e)],x.p),r=t.e
if(r.length!==0)s.push(u.$2("Note",r))
r=w.f
s.push(u.$2("Group",r.e+" \xb7 owner "+r.d))
t=t.r
s.push(u.$2("Recorded by",t.length===0?r.c:t))
s.push(B.ae)
s.push(A.di(Q.CJ,D.fRZ,new C.fx_(w.r,d),A.bo(B.b_,v,v,v,B.w,B.Af,v,v,v,v,v,v)))
return new C.oK(A.x(s,B.E,v,B.e,B.P,0,B.p),!0,v)},
$S:z+11}
C.fx_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fJ(new A.fD(u.a)),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.fcY)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fwQ.prototype={
$1(d){var w=null,v=x.w
return new A.D(new A.P(0,0,0,A.aG(d,w,v).w.f.d),new A.cT(new A.aZ(0,1/0,0,A.aG(d,w,v).w.a.b*0.92),new C.oK(new C.aCd(this.a,this.b,this.c,w),!0,w),w),w)},
$S:61}
C.dmU.prototype={
$1(d){return new A.Gi(d.a,d.b)},
$S:418}
C.dmV.prototype={
$1(d){return d.a!==B.a.i(this.a.a.e.toLowerCase())},
$S:183}
C.dmW.prototype={
$1(d){return d.length!==0},
$S:3}
C.dmX.prototype={
$0(){return this.a.w="Write your first and last name."},
$S:0}
C.dmY.prototype={
$0(){return this.a.w="Your phone number is needed."},
$S:0}
C.dmZ.prototype={
$0(){return this.a.w="Choose the state you live in."},
$S:0}
C.dn_.prototype={
$0(){return this.a.w="Your home address is needed."},
$S:0}
C.dnb.prototype={
$1(d){return C.KW(d)},
$S:251}
C.dn5.prototype={
$1(d){var w=this.a
return w.m(new C.dn4(w,d))},
$S:35}
C.dn4.prototype={
$0(){var w=this.b
if(w==null)w=""
return this.a.r=w},
$S:0}
C.dn6.prototype={
$1(d){var w=this.a
return w.m(new C.dn3(w,this.b,d))},
$S:35}
C.dn3.prototype={
$0(){var w=this.a.x,v=this.b,u=this.c
if(u==null)u="mother"
u=new A.aex(w[v].a,u)
w[v]=u
return u},
$S:0}
C.dn7.prototype={
$1(d){var w=this.a
return w.m(new C.dn2(w,this.b,d))},
$S:159}
C.dn2.prototype={
$0(){var w=this.a.x,v=this.b,u=w[v],t=this.c
if(t==null)t=-1
u=new A.aex(t,u.b)
w[v]=u
return u},
$S:0}
C.dn8.prototype={
$0(){var w=this.a
return w.m(new C.dn1(w,this.b))},
$S:0}
C.dn1.prototype={
$0(){return B.d.cz(this.a.x,this.b)},
$S:0}
C.dn9.prototype={
$0(){var w=this.a
return w.m(new C.dn0(w))},
$S:0}
C.dn0.prototype={
$0(){return this.a.x.push(new A.aex(-1,"mother"))},
$S:0}
C.dna.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0};(function aliases(){var w=C.aMx.prototype
w.bxh=w.q
w=C.aMy.prototype
w.bxi=w.q
w=C.aN6.prototype
w.bxT=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=C.aE0.prototype,"gbKZ","Aa",0)
w(u,"gc1F","YX",0)
w(u,"gc84","ZZ",0)
w(u=C.aDY.prototype,"gcgu","QE",0)
w(u,"gc81","aes",0)
w(u,"gbOs","XH",0)
v(C.aE_.prototype,"gc82","c83",7)
w(C.aCe.prototype,"gc85","c86",12)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.hy,[C.caw,C.cay,C.cax,C.caA,C.caB,C.caF,C.caK,C.caD,C.caz,C.cat,C.car,C.caI,C.cau,C.caG,C.caH,C.flN,C.fqJ,C.fqK,C.dQQ,C.dQF,C.dQN,C.dQP,C.eir,C.eip,C.eiq,C.eio,C.eiA,C.dQC,C.dQe,C.dQo,C.dQp,C.dQi,C.dks,C.dod,C.fxk,C.fxg,C.fxE,C.fxB,C.fxA,C.fxx,C.fxy,C.fxo,C.fxp,C.fxq,C.fxs,C.fxt,C.fx4,C.fwY,C.fwZ,C.fwU,C.fwT,C.dup,C.dus,C.dut,C.fwy,C.fwB,C.fwO,C.fwG,C.fx6,C.fx7,C.fx9,C.fx0,C.fwQ,C.dmU,C.dmV,C.dmW,C.dnb,C.dn5,C.dn6,C.dn7])
v(A.jv,[C.caM,C.cas,C.flM,C.fqL,C.dQK,C.dQH,C.eix,C.eiB,C.djR,C.dk9,C.dQt,C.dQw,C.dQl,C.dkr,C.dog,C.doe,C.dof,C.fxj,C.fxw,C.fwX,C.fwW,C.fwV,C.duo,C.duq,C.dur,C.fwM,C.fwF,C.fnS,C.fx8,C.fx1])
u(C.CP,A.lA)
v(A.aD,[C.wJ,C.biL,C.bie])
v(C.wJ,[C.PX,C.Ko])
v(A.af,[C.apw,C.ard,C.IC,C.aDZ,C.aCd])
v(A.ah,[C.aMy,C.aN6,C.aMx,C.aE_,C.aCe])
u(C.aE0,C.aMy)
v(A.iH,[C.dQG,C.dQE,C.dQM,C.dQL,C.dQJ,C.dQO,C.dQI,C.eis,C.eim,C.ein,C.eiy,C.eiz,C.eiw,C.eiv,C.eit,C.eiu,C.dQq,C.dQm,C.dQn,C.dQr,C.dQs,C.dQu,C.dQx,C.dQy,C.dQz,C.dQA,C.dQB,C.dQv,C.dQh,C.dQg,C.dQf,C.dQj,C.dQk,C.dQD,C.fxf,C.fxh,C.fxi,C.fxe,C.fxC,C.fxD,C.fxr,C.fxn,C.fxm,C.fxl,C.fxu,C.fxv,C.fxz,C.fx2,C.fx3,C.fwR,C.fwS,C.duu,C.dun,C.fww,C.fwx,C.fwz,C.fwA,C.fwN,C.fwH,C.fwI,C.fwJ,C.fwK,C.fwL,C.fwP,C.fwC,C.fwD,C.fwE,C.fnR,C.fx5,C.fx_,C.dmX,C.dmY,C.dmZ,C.dn_,C.dn4,C.dn3,C.dn2,C.dn8,C.dn1,C.dn9,C.dn0,C.dna])
u(C.blF,C.aN6)
v(A.aw,[C.abY,C.CL,C.aBB,C.biO,C.bha,C.biN,C.biK,C.biM,C.bjI,C.oK])
v(A.mf,[C.adm,C.Qh])
u(C.aDY,C.aMx)
u(C.blj,A.j_)
w(C.aMx,A.eQ)
w(C.aMy,A.eQ)
w(C.aN6,A.eQ)})()
A.j0(b.typeUniverse,JSON.parse('{"PX":{"wJ":[]},"Ko":{"wJ":[]},"apw":{"af":[],"v":[]},"ard":{"af":[],"v":[]},"abY":{"aw":[],"v":[]},"IC":{"af":[],"v":[]},"aDZ":{"af":[],"v":[]},"oK":{"aw":[],"v":[]},"aCd":{"af":[],"v":[]},"aE0":{"ah":["apw"]},"blF":{"ah":["ard"]},"CL":{"aw":[],"v":[]},"aBB":{"aw":[],"v":[]},"adm":{"aC":[]},"aDY":{"ah":["IC"]},"aE_":{"ah":["aDZ"]},"biO":{"aw":[],"v":[]},"bha":{"aw":[],"v":[]},"biN":{"aw":[],"v":[]},"biK":{"aw":[],"v":[]},"biM":{"aw":[],"v":[]},"Qh":{"aC":[]},"blj":{"j_":[]},"bjI":{"aw":[],"v":[]},"aCe":{"ah":["aCd"]}}'))
var y={d:"That group code is already taken. Try another."}
var x=(function rtii(){var w=A.at
return{Q:w("eJ<n>"),c:w("eJ<G>"),J:w("O<Sl>"),V:w("O<ac>"),O:w("O<u>"),t:w("O<eJ<n>>"),u:w("O<eJ<G>>"),A:w("O<a8<n,n>>"),D:w("O<nT>"),x:w("O<q4>"),B:w("O<v4>"),v:w("O<fV>"),T:w("O<pq<CP>>"),Z:w("O<+(+email,name(n,n),q4)>"),S:w("O<+email,name(n,n)>"),i:w("O<+person,relation(G,n)>"),r:w("O<cW>"),s:w("O<n>"),F:w("O<j_>"),p:w("O<v>"),U:w("O<aC?>"),m:w("ai<nT>"),P:w("a8<n,@>"),f:w("a8<@,@>"),w:w("iB"),L:w("nT"),Y:w("v4"),N:w("n"),I:w("pv"),K:w("Z<+email,name(n,n)>"),C:w("ef<PX>"),o:w("ef<Ko>"),l:w("v"),n:w("bie"),R:w("biL"),E:w("CP"),W:w("wJ"),a:w("Ko"),q:w("mt"),y:w("R"),z:w("@"),G:w("G"),_:w("a8<n,@>?"),h:w("nT?"),X:w("aD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b0M=new A.lH(B.be,A.at("lH<u?>"))
D.b2Y=new A.ay(B.b_,1,B.r,-1)
D.b3b=new A.ay(B.c0,1,B.r,-1)
D.b4q=new A.aZ(20,1/0,0,1/0)
D.b4C=new A.aZ(0,1/0,0,150)
D.fBn=new A.y("Tap code to copy",null,B.vo,null,null,null,null,null,null,null,null,null)
D.baJ=new A.cf(B.A,null,null,D.fBn,null)
D.fBU=new A.y("No groups found.",null,B.kx,null,null,null,null,null,null,null,null,null)
D.bba=new A.cf(B.A,null,null,D.fBU,null)
D.bAc=new A.P(14,12,6,12)
D.bAL=new A.P(16,10,16,8)
D.bB4=new A.P(16,4,16,36)
D.bBo=new A.P(18,10,18,36)
D.bBv=new A.P(18,12,18,4)
D.bBQ=new A.P(18,22,18,18)
D.fEz=new A.y("Waiting to join",null,B.ht,null,null,null,null,null,null,null,null,null)
D.bFS=new A.by(1,B.ba,D.fEz,null)
D.bGK=new A.by(1,B.ba,B.bJ,null)
D.bNA=new A.a0(63323,"MaterialIcons",!1)
D.apB=new A.a0(983761,"MaterialIcons",!1)
D.bR7=new A.ae(B.eK,null,B.eA,null,null,null)
D.bR9=new A.ae(B.hm,22,B.b_,null,null,null)
D.bRa=new A.ae(B.hA,16,B.be,null,null,null)
D.bS0=new A.ae(B.Ox,22,B.eA,null,null,null)
D.bSi=new A.ae(B.a1X,20,B.j2,null,null,null)
D.bT7=new A.ae(B.eb,22,B.c0,null,null,null)
D.bTC=new A.ae(B.GV,20,B.b_,null,null,null)
D.bUp=new A.ae(B.hQ,null,B.b_,null,null,null)
D.bVj=new A.ae(B.wy,18,B.b_,null,null,null)
D.bVq=new A.ae(B.fa,18,B.b_,null,null,null)
D.bVT=new A.ae(B.bOv,null,B.fb,null,null,null)
D.bX_=new A.ae(B.hm,null,B.b_,null,null,null)
D.bXH=new A.ae(B.e6,20,B.be,null,null,null)
D.bZV=new A.ae(D.apB,null,B.b_,null,null,null)
D.c_c=new A.ae(B.qv,null,B.b_,null,null,null)
D.c_p=new A.ae(B.qt,null,B.be,null,null,null)
D.aAC=w([],x.x)
D.dwi=w(["mother","father","spouse","child","brother","sister"],x.s)
D.bWx=new A.ae(B.pg,20,B.j2,null,null,null)
D.emW=new A.D(B.iG,D.bWx,null)
D.fTd=new A.y("The group owner has not added payment details yet.",null,B.kx,null,B.K,null,null,null,null,null,null,null)
D.en9=new A.D(B.fg,D.fTd,null)
D.eum=new A.Ci(null,B.dG)
D.euo=new A.Cj(null,B.dG)
D.evY=new A.z(0,"Ledger")
D.ewS=new A.z(1,"People")
D.exv=new A.z(2,"Invite")
D.fOY=new A.y("Your request is already waiting. The group owner has to approve you.",null,null,null,null,null,null,null,null,null,null,null)
D.fbg=new A.b2(D.fOY,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNr=new A.y("Help mode is active but missing a campaign.",null,null,null,null,null,null,null,null,null,null,null)
D.fc1=new A.b2(D.fNr,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fBG=new A.y("Activate help mode before recording a contribution.",null,null,null,null,null,null,null,null,null,null,null)
D.fcA=new A.b2(D.fBG,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fTC=new A.y("Add what you are collecting for, then activate help mode.",null,null,null,null,null,null,null,null,null,null,null)
D.fcD=new A.b2(D.fTC,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fSY=new A.y("This group is full (100 members). Ask the owner to unlock more seats.",null,null,null,null,null,null,null,null,null,null,null)
D.fcG=new A.b2(D.fSY,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJQ=new A.y("Receipt copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fcY=new A.b2(D.fJQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJe=new A.y("Your request is waiting. The group owner has to approve you first.",null,null,null,null,null,null,null,null,null,null,null)
D.fez=new A.b2(D.fJe,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCA=new A.y("No group found for that code.",null,null,null,null,null,null,null,null,null,null,null)
D.feL=new A.b2(D.fCA,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fS3=new A.y("Could not send your request.",null,null,null,null,null,null,null,null,null,null,null)
D.feT=new A.b2(D.fS3,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.aTt=new A.F(!0,B.c,null,null,null,null,15,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjq=new A.F(!0,B.aC,null,null,null,null,10,B.H,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjC=new A.F(!0,B.b_,null,null,null,null,12,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl9=new A.F(!0,B.b_,null,null,null,null,22,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flZ=new A.F(!0,B.j2,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new A.F(!0,B.j2,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new A.F(!0,B.ip,null,null,null,null,16,B.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmC=new A.F(!0,B.c,null,null,null,null,16,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9W=new A.F(!0,B.bU,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foO=new A.F(!0,B.be,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foX=new A.F(!0,B.b_,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqk=new A.F(!0,B.c,null,null,null,null,20,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frG=new A.F(!0,B.eA,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsJ=new A.F(!0,B.b_,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftn=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftR=new A.F(!0,B.b_,null,null,null,null,16,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx5=new A.F(!0,B.eO,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyS=new A.y("Keep missed",null,B.mp,null,null,null,null,null,null,null,null,null)
D.fz4=new A.y("Save details for later",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fzG=new A.y("Create group",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fwR=new A.F(!0,B.b_,null,null,null,null,12,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA1=new A.y("LIGHTNING CIRCLE",null,D.fwR,null,null,null,null,null,null,null,null,null)
D.fAo=new A.y("Clear missed contribution?",null,B.de,null,B.K,null,null,null,null,null,null,null)
D.fB5=new A.y("Share this code or QR so others can join from Lightning Groups.",null,B.vo,null,B.K,null,null,null,null,null,null,null)
D.fqK=new A.F(!0,B.b_,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBb=new A.y("Add a family member from the group",null,D.fqK,null,null,null,null,null,null,null,null,null)
D.fBi=new A.y("Yes, clear it",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fCF=new A.y("Nobody yet.",null,B.kx,null,null,null,null,null,null,null,null,null)
D.fD3=new A.y("No contributions or spending yet.",null,B.kx,null,null,null,null,null,null,null,null,null)
D.fDm=new A.y("Clear",null,B.V1,null,null,null,null,null,null,null,null,null)
D.fDD=new A.y("No member matches that search.",null,G.aao,null,null,null,null,null,null,null,null,null)
D.V7=new A.F(!0,B.bU,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE3=new A.y("This removes the missed mark for this member. Only clear if they paid or you confirmed the contribution.",null,D.V7,null,B.K,null,null,null,null,null,null,null)
D.foS=new A.F(!0,B.bU,null,null,null,null,11,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new A.y("Type letters or numbers in any order \u2014 code becomes 3 letters then numbers (e.g. ABC123).",null,D.foS,null,null,null,null,null,null,null,null,null)
D.fFj=new A.y("Nobody else is in this group yet.",null,B.kx,null,null,null,null,null,null,null,null,null)
D.fFu=new A.y("They will lose access to this group ledger and invite list.",null,D.V7,null,B.K,null,null,null,null,null,null,null)
D.fGT=new A.y("Save details",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fld=new A.F(!0,B.be,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGW=new A.y("Everyone has already contributed to this round.",null,D.fld,null,null,null,null,null,null,null,null,null)
D.fGX=new A.y("Deactivate help mode",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fIw=new A.y("Send my request",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fJ1=new A.y("Your own civic circle \u2014 no states, no case wallet.\nInvite by code or QR. Owner tracks money in & out.",null,M.Kj,null,B.K,null,null,null,null,null,null,null)
D.fJv=new A.y("Everyone gave. Wonderful!",null,B.kx,null,null,null,null,null,null,null,null,null)
D.fJU=new A.y("FAMILY IN THIS GROUP (optional)",null,K.vs,null,null,null,null,null,null,null,null,null)
D.aVt=new A.y("Close",null,B.mp,null,null,null,null,null,null,null,null,null)
D.fjd=new A.F(!0,B.be,null,null,null,null,9.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKj=new A.y("OPEN",null,D.fjd,null,null,null,null,null,null,null,null,null)
D.fKx=new A.y("Remove",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fKz=new A.y("Decline this request?",null,B.iu,null,null,null,null,null,null,null,null,null)
D.fLy=new A.y("Send your contribution using the details below. Call if you have questions or to confirm payment was received.",null,G.a9Z,null,B.K,null,null,null,null,null,null,null)
D.fM3=new A.y("Make sure this is correct before saving to the ledger.",null,D.V7,null,B.K,null,null,null,null,null,null,null)
D.fM6=new A.y("Remove member?",null,B.de,null,B.K,null,null,null,null,null,null,null)
D.fMu=new A.y("Keep member",null,B.mp,null,null,null,null,null,null,null,null,null)
D.fMN=new A.y("Are your mother, father, spouse, children or brothers and sisters already here? Choose them.",null,D.V7,null,null,null,null,null,null,null,null,null)
D.fMU=new A.y("Request sent",null,B.iu,null,null,null,null,null,null,null,null,null)
D.fOZ=new A.y("Go back",null,B.mp,null,null,null,null,null,null,null,null,null)
D.fPV=new A.y("Scan group QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQl=new A.y("Tap who put money in \u2014 people who joined this group.",null,B.hs,null,B.K,null,null,null,null,null,null,null)
D.fRg=new A.y("Record contribution",null,B.fy,null,B.K,null,null,null,null,null,null,null)
D.fRZ=new A.y("Copy receipt",null,null,null,null,null,null,null,null,null,null,null)
D.fUr=new A.y("Activate help mode",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fVb=new A.y("Confirm & save",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fWe=new A.y("Verify contribution",null,B.de,null,B.K,null,null,null,null,null,null,null)
D.fWl=new A.y("Delete group?",null,B.df,null,null,null,null,null,null,null,null,null)
D.fpw=new A.F(!0,B.ip,null,null,null,null,14,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX6=new A.y("HELP MODE ACTIVE",null,D.fpw,null,B.K,null,null,null,null,null,null,null)
D.fXe=new A.y("No members yet \u2014 invite people with your code first.",null,G.aao,null,null,null,null,null,null,null,null,null)
D.abG=new C.CP(0,"all")
D.aZG=new C.CP(1,"contributions")
D.aZH=new C.CP(2,"missed")
D.hpF=new C.aDZ(null)})()};
(a=>{a["dyz3xGK9t86OEHffqCeh2DsHOTs="]=a.current})($__dart_deferred_initializers__);