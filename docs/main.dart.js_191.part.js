((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,H,K,I,L,C={
hg9(d){var w=B.a.i(d),v=A.af("^[A-Z]{3}[0-9]{1,5}$",!0,!1,!1,!1)
return v.b.test(w.toUpperCase())},
fOj(){var w=$.a5L
if(w==null)w=B.cu
return A.x_(w,x.L)},
c3W(d){var w,v,u=$.a5L
if(u==null)return null
try{w=J.fLX(u,new C.c3X(d))
return w}catch(v){return null}},
hwm(d){var w=B.a.i(d.toLowerCase()),v=C.fOj(),u=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.c3Z(w),u),u.k("J.E"))
return v},
hwl(d){var w=B.a.i(d.toLowerCase()),v=C.fOj(),u=A.U(v).k("a2<1>")
v=A.B(new A.a2(v,new C.c3Y(w),u),u.k("J.E"))
return v},
c4b(){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m
var $async$c4b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=$.a5L
if(o!=null&&o.length!==0){w=1
break}n=A
m=J
w=3
return A.b(A.az(),$async$c4b)
case 3:t=n.aT(m.q(e.a,"ngmy_civic_user_groups_v1"))
if(t==null||t.length===0){w=1
break}try{s=B.R.aG(0,t,null)
if(x.f.b(s)){r=A.ME(A.a1(s,x.N,x.z))
o=r
q=A.a3(o).k("bc<2>")
o=A.B(new A.bc(o,q),q.k("J.E"))
B.d.b_(o,new C.c4c())
$.a5L=o}}catch(l){}case 1:return A.h(u,v)}})
return A.i($async$c4b,v)},
aXD(d){var w=0,v=A.j(x._),u,t,s,r,q,p,o,n
var $async$aXD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=x.N
q=x.z
w=3
return A.b(A.kH(A.F(["action","civicUserGroupsPersist","value",d],r,q),!1,!1,null),$async$aXD)
case 3:p=f
o=p==null
n=!o
if(n){t=J.a5(p)
t=J.z(t.h(p,"ok"),!0)&&x.f.b(t.h(p,"value"))}else t=!1
if(t){u=A.a1(x.f.a(J.q(p,"value")),r,q)
w=1
break}r=o?null:J.q(p,"error")
s=B.a.i(J.k(r==null?"":r))
if(n&&J.z(J.q(p,"ok"),!1)&&B.a.t(s,"already taken"))throw A.V(A.bd(s))
w=4
return A.b(A.nj("civic_user_groups_v1",d,null),$async$aXD)
case 4:u=f?d:null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXD,v)},
HM(d){return C.hwj(d)},
hwj(d){var w=0,v=A.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$HM=A.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:J.aF(d,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
w=2
return A.b(A.az(),$async$HM)
case 2:q=f
w=3
return A.b(q.ar("String","ngmy_civic_user_groups_v1",B.R.ao(d,null)),$async$HM)
case 3:s=null
u=5
w=8
return A.b(C.aXD(d),$async$HM)
case 8:s=f
u=1
w=7
break
case 5:u=4
i=t.pop()
o=A.a9(i)
if(o instanceof A.lD){r=o
if(B.a.t(r.a,"already taken"))throw i}else throw i
w=7
break
case 4:w=1
break
case 7:o=s
n=A.ME(o==null?d:o)
if(n.a===0)throw A.V(A.bd("Could not sync this group to the cloud. Check your connection and try again."))
o=new A.dt(n,n.r,n.e)
case 9:if(!o.C()){w=10
break}w=11
return A.b(A.anF(o.d),$async$HM)
case 11:w=9
break
case 10:m=s
if(m==null)m=d
o=A.T(x.N,x.P)
for(l=A.a3(n),k=new A.cJ(n,l.k("cJ<1,2>")).gaf(0);k.C();){r=k.d
o.n(0,r.a,r.b.ae())}J.aF(m,"groups",o)
w=12
return A.b(q.ar("String","ngmy_civic_user_groups_v1",B.R.ao(m,null)),$async$HM)
case 12:o=l.k("bc<2>")
j=A.B(new A.bc(n,o),o.k("J.E"))
B.d.b_(j,new C.c3T())
$.a5L=j
return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$HM,v)},
anG(d){return C.hwn(d)},
hwn(d){var w=0,v=A.j(x.h),u,t,s,r
var $async$anG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HN(),$async$anG)
case 3:r=f
try{t=J.fLX(r,new C.c40(d))
u=t
w=1
break}catch(q){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$anG,v)},
TO(d){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m,l
var $async$TO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:m=A.fyi(d)
l=m==null?B.a.i(d).toUpperCase():m
if(J.ad(l)===0){u=null
w=1
break}w=3
return A.b(A.aXB(l),$async$TO)
case 3:s=f
if(s!=null){u=s
w=1
break}r=x.N
q=x.z
w=4
return A.b(A.kH(A.F(["action","civicUserGroupsFind","code",l],r,q),!1,!1,null),$async$TO)
case 4:p=f
if(p!=null){o=J.dj(p)
o=o.ah(p,"group")&&x.f.b(o.h(p,"group"))}else o=!1
if(o){u=A.fOh(A.a1(x.f.a(J.q(p,"group")),r,q))
w=1
break}w=5
return A.b(A.HN(),$async$TO)
case 5:t=f
try{r=J.fLX(t,new C.c41(l))
u=r
w=1
break}catch(k){u=null
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$TO,v)},
aXG(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$aXG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.HN(),$async$aXG)
case 3:s=r.dH(f,new C.c45(t))
s=A.B(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXG,v)},
c49(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c49=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.HN(),$async$c49)
case 3:s=r.dH(f,new C.c4a(t))
s=A.B(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c49,v)},
c42(d){var w=0,v=A.j(x.m),u,t,s,r
var $async$c42=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=B.a.i(d.toLowerCase())
r=J
w=3
return A.b(A.HN(),$async$c42)
case 3:s=r.dH(f,new C.c43(t))
s=A.B(s,s.$ti.k("J.E"))
u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c42,v)},
a5M(d,e,f){var w=0,v=A.j(x.L),u,t,s,r,q,p,o,n,m,l,k
var $async$a5M=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:k=B.a.i(d).toUpperCase()
if(!C.hg9(k))throw A.V(A.dI("Group code must be 3 letters + 1\u20135 numbers (e.g. ABC123).",null))
w=3
return A.b(A.HL(),$async$a5M)
case 3:t=h
s=A.ME(t)
r=A.a3(s)
if(new A.bc(s,r.k("bc<2>")).b7(0,new C.c4_(k)))throw A.V(A.bd(y.d))
w=4
return A.b(C.TO(k),$async$a5M)
case 4:if(h!=null)throw A.V(A.bd(y.d))
q=Date.now()
p=B.cI.aB(1048576)
o=B.a.i(e.toLowerCase())
n=B.a.i(f)
if(n.length===0)n="Owner"
m=A.h3b(new A.S(Date.now(),0,!1).a6(),null,"",null,"",!1,"","","","cug_"+q+"_"+p,k,null,null,null,k,null,o,0,n)
n=m.a
s.n(0,n,m)
o=A.T(x.N,x.P)
for(r=new A.cJ(s,r.k("cJ<1,2>")).gaf(0);r.C();){l=r.d
o.n(0,l.a,l.b.ae())}J.aF(t,"groups",o)
w=5
return A.b(C.HM(t),$async$a5M)
case 5:r=C.c3W(n)
w=6
return A.b(A.anF(r==null?m:r),$async$a5M)
case 6:r=C.c3W(n)
u=r==null?m:r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$a5M,v)},
HO(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$HO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.HL(),$async$HO)
case 2:s=f
r=A.ME(s)
q=d.a
r.n(0,q,C.hwk(d,r.h(0,q)))
q=A.T(x.N,x.P)
for(u=new A.cJ(r,A.a3(r).k("cJ<1,2>")).gaf(0);u.C();){t=u.d
q.n(0,t.a,t.b.ae())}J.aF(s,"groups",q)
w=3
return A.b(C.HM(s),$async$HO)
case 3:return A.h(null,v)}})
return A.i($async$HO,v)},
hwk(d,e){var w,v,u,t,s,r
if(e==null)return d
w=d.r
v=new A.K(w,new C.c3U(),A.U(w).k("K<1,n>")).fI(0)
for(u=e.r,t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s){r=u[s]
if(!v.t(0,r.a))B.d.L(w,r)}return d},
hwi(d){var w=$.a5L
if(w!=null)B.d.bm(w,new C.c3S(d))},
aXF(d){var w=0,v=A.j(x.H),u,t,s,r,q
var $async$aXF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(A.HL(),$async$aXF)
case 2:r=f
q=A.ME(r)
q.W(0,d)
u=A.T(x.N,x.P)
for(t=new A.cJ(q,A.a3(q).k("cJ<1,2>")).gaf(0);t.C();){s=t.d
u.n(0,s.a,s.b.ae())}J.aF(r,"groups",u)
w=3
return A.b(C.HM(r),$async$aXF)
case 3:C.hwi(d)
return A.h(null,v)}})
return A.i($async$aXF,v)},
aXH(d,e,f,g,h,i,j){var w=0,v=A.j(x.h),u,t,s,r,q,p,o,n,m
var $async$aXH=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:m=A.fyi(g)
if(m==null)m=B.a.i(g).toUpperCase()
if(m.length===0){u=null
w=1
break}w=3
return A.b(C.TO(m),$async$aXH)
case 3:t=l
if(t==null){u=null
w=1
break}s=B.a.i(e.toLowerCase())
if(t.alm(s)||t.aEG(s)){u=t
w=1
break}r=t.r
B.d.bm(r,new C.c48(s))
q=B.a.i(h)
if(q.length===0)q=B.d.gK(s.split("@"))
p=new A.S(Date.now(),0,!1).a6()
o=B.a.i(i)
n=B.a.i(j)
B.d.L(r,A.h3c(B.a.i(d),s,f,p,0,q,o,new A.S(Date.now(),0,!1).a6(),n,"pending"))
w=4
return A.b(C.HO(t),$async$aXH)
case 4:n=C.c3W(t.a)
u=n==null?t:n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXH,v)},
aXE(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aXE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anG(d),$async$aXE)
case 3:q=g
if(q==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
s=q.r
r=B.d.ba(s,new C.c3V(t))
if(r<0){u=!1
w=1
break}s[r].e="active"
w=4
return A.b(C.HO(q),$async$aXE)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXE,v)},
anH(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$anH=A.e(function(i,a0){if(i===1)return A.f(a0,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anG(d),$async$anH)
case 3:k=a0
if(k==null){u=!1
w=1
break}t=B.a.i(e.toLowerCase())
if(k.a4c(t)){u=!1
w=1
break}s=B.a.i(f==null?"":f)
if(J.ad(s)===0)try{s=B.a.i(B.d.iC(k.r,new C.c46(t)).b)}catch(j){s=J.eZ(t,"@")?B.d.gK(J.ln(t,"@")):t}if(J.ad(s)===0)s="Member"
q=k.r.length
B.d.bm(k.r,new C.c47(t))
if(k.r.length===q){u=!1
w=1
break}p=k.x
o=Date.now()
n=B.cI.aB(1048576)
m=s
l=new A.S(Date.now(),0,!1).a6()
B.d.ck(p,0,new A.pD("cug_"+o+"_"+n,B.a3C,0,m,g,l,B.a.i(h.toLowerCase()),"",t,""))
w=4
return A.b(C.HO(k),$async$anH)
case 4:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anH,v)},
c3X:function c3X(d){this.a=d},
c3Z:function c3Z(d){this.a=d},
c3Y:function c3Y(d){this.a=d},
c4c:function c4c(){},
c3T:function c3T(){},
c40:function c40(d){this.a=d},
c41:function c41(d){this.a=d},
c45:function c45(d){this.a=d},
c4a:function c4a(d){this.a=d},
c43:function c43(d){this.a=d},
c4_:function c4_(d){this.a=d},
c3U:function c3U(){},
c3S:function c3S(d){this.a=d},
c48:function c48(d){this.a=d},
c3V:function c3V(d){this.a=d},
c46:function c46(d){this.a=d},
c47:function c47(d){this.a=d},
aMg(d,e){var w=0,v=A.j(x.H),u
var $async$aMg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fI(new A.fC(e)),$async$aMg)
case 3:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+e,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$aMg,v)},
bxB(d,e,f){var w=d.x,v=A.U(w).k("a2<1>")
w=A.B(new A.a2(w,new C.f8O(B.a.i(e).toLowerCase(),B.a.i(f.toLowerCase()),d),v),v.k("J.E"))
return w},
hJW(d,e,f){return B.d.cI(C.bxB(d,e,f),0,new C.f8N())},
hNc(d,e,f){var w,v,u=C.bxB(d,e,f)
u=A.B(new A.K(u,new C.fdP(),A.U(u).k("K<1,w8>")),x.W)
w=d.cMY(e,f)
B.d.v(u,new A.K(w,new C.fdQ(),A.U(w).k("K<1,w8>")))
if(d.y){w=d.ax
w=w.length!==0&&!d.S4(e,w)}else w=!1
if(w){w=d.ay
if(w==null)w=new A.S(Date.now(),0,!1).a6()
v=B.a.i(d.z)
u.push(new C.Jv(v.length===0?"Help round":v,!0,"",w))}B.d.b_(u,new C.fdR())
return u},
byx(d){var w=0,v=A.j(x.H),u,t,s
var $async$byx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){w=1
break}t=A.cw("https://cash.app/$"+(B.a.a0(s,"$")?B.a.b0(s,1):s),0,null)
w=5
return A.b(A.pe(t),$async$byx)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iP(t,B.fk,null),$async$byx)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$byx,v)},
bxx(d){var w=0,v=A.j(x.H),u,t,s,r
var $async$bxx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=A.af("[^\\d+]",!0,!1,!1,!1)
r=A.aK(d,s,"")
if(r.length===0){w=1
break}t=A.cw("tel:"+r,0,null)
w=5
return A.b(A.pe(t),$async$bxx)
case 5:w=f?3:4
break
case 3:w=6
return A.b(A.iP(t,B.fk,null),$async$bxx)
case 6:case 4:case 1:return A.h(u,v)}})
return A.i($async$bxx,v)},
hii(d,e,f,g){C.c4b()
return A.hv(d,new C.anC(f,g,e,null),!1,null,x.X)},
h8z(d,e,f,g,h,i,j){return new C.azb(f,j,g,i,h,d,e,null)},
fRD(d,e,f,g,h,i,j,k,l){return new C.bfH(k,g,d,h,j,e,f,i,l,null)},
hRc(d){var w={},v=new A.ar(B.as,$.aw())
w.a=""
return A.bX(B.K,null,new C.fjo(w,v),d,!0,!0,!0,null,!1,!1,x.N).fb(v.gf3())},
hRe(d,e,f,g,h,i,j,k){var w=new A.ar(B.as,$.aw())
return A.bX(B.K,null,new C.fjI(h,k,j,w,!0,i,g,f),d,!0,!0,!0,null,!1,!1,x.N).fb(w.gf3())},
hRd(d,e,f,g,h){var w,v,u,t={},s=g===B.rg,r=$.aw(),q=new A.ar(B.as,r),p=new A.ar(B.as,r),o=new A.ar(B.as,r)
r=new C.fjE(s,e)
w=A.U(h).k("a2<1>")
v=A.B(new A.a2(h,new C.fjB(r),w),w.k("J.E"))
u=s&&h.length!==0&&v.length===0
t.a=v.length!==0?B.d.gK(v).b:""
t.b=!1
return A.bX(B.K,null,new C.fjC(t,o,h,r,s,f,u,p,q,e),d,!0,!0,!0,null,!1,!1,x.R).fb(new C.fjD(q,p,o))},
hRa(d,e,f){return A.bX(B.K,null,new C.fj8(f,e),d,!0,!0,!1,null,!1,!1,x.y)},
hR8(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=C.bxB(f,i,e),r=B.d.cI(s,0,new C.fj0()),q=f.a4t(i,e)
if(f.y){w=f.ax
v=w.length!==0&&!f.S4(i,w)}else v=!1
if(f.ax.length===0)u=D.avS
else{w=A.U(s).k("a2<1>")
u=A.B(new A.a2(s,new C.fj1(f),w),w.k("J.E"))}if(!v)t=q>0&&r<=0
else t=!0
return A.bX(B.K,null,new C.fj2(f,i,e,l,h,k,s,r,q,v,u,t,g,j),d,!0,!0,!0,null,!1,!1,x.H)},
hR3(d,e){return A.bX(B.K,null,new C.fiC(e),d,!0,!0,!1,null,!1,!1,x.y)},
hR4(d,e,f,g){return A.bX(B.K,null,new C.fiF(g,e,f),d,!0,!0,!1,null,!1,!1,x.y)},
fUg(d,e){var w=null
return new A.C(B.v6,A.A(A.a([A.d(d,w,w,w,w,w,w,B.CU,w,w,w),B.b4,new A.dm(1,B.ci,A.d(e,w,w,w,w,w,w,B.mB,B.dL,w,w),w)],x.p),B.m,w,B.e,B.j,0,w,w),w)},
hR6(d,e,f,g){var w,v,u,t,s,r
if(!f)return C.hR5(d,e,g)
w=e.z
v=$.aw()
u=new A.ar(new A.bb(w,B.b3,B.aN),v)
w=e.Q
t=new A.ar(new A.bb(w,B.b3,B.aN),v)
w=e.as
s=new A.ar(new A.bb(w,B.b3,B.aN),v)
w=e.at
r=new A.ar(new A.bb(w,B.b3,B.aN),v)
return A.bX(B.K,null,new C.fiS(g,e.y,u,t,s,r,new C.fiR(e,u,t,s,r),e),d,!0,!0,!0,null,!1,!1,x.L).fb(new C.fiT(u,t,s,r))},
hR5(d,e,f){return A.bX(B.K,null,new C.fiK(f,e),d,!0,!0,!0,null,!1,!1,x.L)},
hbw(d,e){return A.c6(e,new C.faP(e,d),null)},
faN(d,e,f,g,h,i){var w,v=null,u=A.m(18),t=A.I(B.b8.j(0.35),B.q,1),s=A.W(e,B.b8,v,v,v,20),r=A.d(f,v,v,v,v,v,v,A.l(v,v,B.b8.j(0.85),v,v,v,v,v,v,v,v,10,v,v,B.H,v,v,!0,v,1.1,v,v,v,v,v,v),v,v,v),q=g==null,p=!q,o=p?B.iR:B.c,n=p?B.mA:v,m=x.p
n=A.a([r,B.at,A.d(i,v,v,v,v,v,v,A.l(v,v,o,v,n,B.b8.j(0.6),v,v,v,v,v,14,v,v,B.O,v,1.3,!0,v,v,v,v,v,v,v,v),v,v,v)],m)
if(p&&h!=null)B.d.v(n,A.a([B.at,A.d("Tap to "+h,v,v,v,v,v,v,A.l(v,v,B.b8.j(0.75),v,v,v,v,v,v,v,v,10,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],m))
w=A.p(v,A.A(A.a([s,B.av,A.D(A.v(n,B.F,v,B.e,B.j,0,B.p),1),A.aH(v,v,v,v,A.W(B.fK,B.b8.j(0.9),v,v,v,18),v,v,v,new C.faO(i,d,f),v,v,v,v,"Copy",v)],m),B.F,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.fn,v,t,u,v,v,B.n),v,v,v,B.dc,B.eP,v,v,v)
if(q)return w
return A.aG(!1,B.a1,!0,v,A.aL(!1,A.m(18),!0,w,v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)},
aNa(d,e,f){var w=null,v=B.b1.j(0.16),u=A.I(B.b1.j(0.55),B.q,1),t=A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,14)],x.V),s=x.p
return A.A(A.a([A.p(w,A.W(d,B.b1,w,w,w,w),B.f,w,w,new A.o(v,w,u,w,t,w,B.a6),w,46,w,w,w,w,w,46),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,B.kX,w,w,w),B.at,A.d(e,w,w,w,w,w,w,I.aOu,w,w,w)],s),B.F,w,B.e,B.j,0,B.p),1)],s),B.F,w,B.e,B.j,0,w,w)},
K2(d){var w=null,v=B.c.j(0.05)
return A.br(w,w,w,B.bC,w,w,w,w,!0,new A.b4(4,A.m(14),new A.aA(B.b1.j(0.25),1,B.q,-1)),w,w,w,w,w,v,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9r),w,w,w,w,w,w,w,w,B.kw,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
hQw(d,e){var w,v,u,t,s,r,q=A.a([],x.x)
for(w=d.x,v=w.length,u=e==="other",t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.b===B.rg){r=s.w
r=u?r.length===0:r===e}else r=!1
if(r)q.push(s)}return q},
hQx(d,e,f){var w,v,u,t
for(w=f.length,v=0;v<w;++v){u=B.a.i(f[v].y)
if(u.length!==0)return u}u=e==="other"
if(!u&&e===d.ax&&B.a.i(d.z).length!==0)return B.a.i(d.z)
if(u)return"Other contributions"
if(w!==0){t=B.d.gal(f).f.bS()
return"Contribution round \xb7 "+A.bG(t)+"/"+A.bQ(t)+"/"+A.by(t)}return"Contribution round"},
hdk(d){var w,v=d.toLowerCase()
A:{if("mother"===v){w="Mother"
break A}if("father"===v){w="Father"
break A}if("spouse"===v){w="Spouse"
break A}if("child"===v){w="Child"
break A}if("brother"===v){w="Brother"
break A}if("sister"===v){w="Sister"
break A}w=d.length===0?"Family":d
break A}return w},
hRb(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n,m,l=x.S,k=A.a([new A.Fp(e.c,e.d)],l),j=e.gEX()
B.d.v(k,new A.K(j,new C.fja(),A.U(j).k("K<1,+email,name(n,n)>")))
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
if(!B.d.b7(k,new C.fjb(o)))w.push(new A.y(new A.Fp(o.x,o.d),o))}m=B.d.cI(h,0,new C.fjc())
l=k.length
return A.bX(B.K,null,new C.fjd(g,w,k,m,i,l===0?0:B.k.D(w.length/l,0,1),e,v),d,!0,!0,!0,null,!1,!1,x.H)},
hR9(d,e,f){var w,v,u,t,s,r,q,p=B.a.i(f.y)
if(!(p.length!==0))p=f.w===e.ax&&B.a.i(e.z).length!==0?B.a.i(e.z):"Group contribution"
w=e.e
v=A.af("[^0-9]",!0,!1,!1,!1)
u="LG-"+w+"-"+B.a.ap(B.a.aT(A.aK(f.a,v,""),6,"0"),0,6)
t=f.f.bS()
s=""+A.bG(t)+"/"+A.bQ(t)+"/"+A.by(t)+" "+B.a.aT(B.o.u(A.dh(t)),2,"0")+":"+B.a.aT(B.o.u(A.fY(t)),2,"0")
v=B.k.aa(f.c,2)
r=f.e
r=r.length!==0?"\nNote: "+r:""
q=f.r
if(q.length===0)q=e.c
return A.bX(B.K,null,new C.fj4(u,new C.fj5(),f,p,s,e,"RECEIPT "+u+"\nGroup: "+w+" ("+e.d+")\nFrom: "+f.d+"\nFor: "+p+"\nAmount: $"+v+"\nDate: "+s+r+"\nRecorded by: "+q),d,!0,!0,!0,null,!1,!1,x.H)},
hR7(d,e,f,g){return A.bX(B.K,null,new C.fiU(e,f,g),d,!0,!0,!0,null,!1,!1,x.n)},
f8O:function f8O(d,e,f){this.a=d
this.b=e
this.c=f},
f8N:function f8N(){},
C2:function C2(d,e){this.a=d
this.b=e},
w8:function w8(){},
OX:function OX(d,e){this.b=d
this.a=e},
Jv:function Jv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fdP:function fdP(){},
fdQ:function fdQ(){},
fdR:function fdR(){},
anC:function anC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBD:function aBD(d,e,f,g,h){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=e
_.y=null
_.z=f
_.cS$=g
_.b2$=h
_.c=_.a=null},
dI7:function dI7(d){this.a=d},
dHY:function dHY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHX:function dHX(){},
dHW:function dHW(d){this.a=d},
dI1:function dI1(d){this.a=d},
dI3:function dI3(d){this.a=d},
dI2:function dI2(d,e){this.a=d
this.b=e},
dI4:function dI4(d,e){this.a=d
this.b=e},
dI0:function dI0(d,e,f){this.a=d
this.b=e
this.c=f},
dI5:function dI5(d){this.a=d},
dI6:function dI6(d,e){this.a=d
this.b=e},
dI_:function dI_(d,e,f){this.a=d
this.b=e
this.c=f},
dHZ:function dHZ(d,e,f){this.a=d
this.b=e
this.c=f},
ape:function ape(d,e,f){this.c=d
this.d=e
this.a=f},
biv:function biv(d,e,f,g){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=!1
_.x=""
_.cS$=f
_.b2$=g
_.c=_.a=null},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6w:function e6w(d){this.a=d},
e6u:function e6u(){},
e6v:function e6v(){},
e6t:function e6t(d){this.a=d},
e6r:function e6r(d){this.a=d},
e6s:function e6s(d){this.a=d},
e6C:function e6C(d){this.a=d},
e6D:function e6D(d){this.a=d},
e6E:function e6E(d){this.a=d},
e6B:function e6B(d){this.a=d},
e6F:function e6F(d){this.a=d},
e6A:function e6A(d,e){this.a=d
this.b=e},
e6G:function e6G(d,e){this.a=d
this.b=e},
e6y:function e6y(d,e){this.a=d
this.b=e},
e6z:function e6z(d,e){this.a=d
this.b=e},
aaD:function aaD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
BZ:function BZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
daH:function daH(d){this.a=d},
azb:function azb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
daX:function daX(d){this.a=d},
ac0:function ac0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
HJ:function HJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBA:function aBA(d,e){var _=this
_.d=null
_.f=_.e=$
_.r=null
_.w=0
_.cS$=d
_.b2$=e
_.c=_.a=null},
dHU:function dHU(d){this.a=d},
dHI:function dHI(d,e){this.a=d
this.b=e},
dHw:function dHw(){},
dHG:function dHG(d){this.a=d},
dHE:function dHE(d){this.a=d},
dHF:function dHF(d){this.a=d},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHK:function dHK(d,e){this.a=d
this.b=e},
dHL:function dHL(){},
dHM:function dHM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
dHH:function dHH(d,e){this.a=d
this.b=e},
dHO:function dHO(d){this.a=d},
dHP:function dHP(d,e){this.a=d
this.b=e},
dHQ:function dHQ(d){this.a=d},
dHR:function dHR(d){this.a=d},
dHS:function dHS(d){this.a=d},
dHT:function dHT(d,e){this.a=d
this.b=e},
dHN:function dHN(d,e){this.a=d
this.b=e},
dHz:function dHz(d,e){this.a=d
this.b=e},
dHA:function dHA(d,e){this.a=d
this.b=e},
dHy:function dHy(d,e){this.a=d
this.b=e},
dHx:function dHx(d,e){this.a=d
this.b=e},
dHB:function dHB(d,e){this.a=d
this.b=e},
dHC:function dHC(d,e){this.a=d
this.b=e},
dHD:function dHD(){},
aBB:function aBB(d){this.a=d},
aBC:function aBC(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dHV:function dHV(d){this.a=d},
bfH:function bfH(d,e,f,g,h,i,j,k,l,m){var _=this
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
be6:function be6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dbe:function dbe(d){this.a=d},
dbd:function dbd(d,e){this.a=d
this.b=e},
bfG:function bfG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
df6:function df6(d){this.a=d},
bfD:function bfD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
df4:function df4(d){this.a=d},
bfF:function bfF(d,e,f){this.c=d
this.d=e
this.a=f},
df5:function df5(d){this.a=d},
Pg:function Pg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
df3:function df3(d,e){this.a=d
this.b=e},
bfE:function bfE(d,e,f){this.a=d
this.b=e
this.c=f},
bi9:function bi9(){},
fjo:function fjo(d,e){this.a=d
this.b=e},
fjn:function fjn(d,e){this.a=d
this.b=e},
fjk:function fjk(d,e){this.a=d
this.b=e},
fjj:function fjj(d){this.a=d},
fjl:function fjl(d){this.a=d},
fjm:function fjm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fji:function fji(d){this.a=d},
fjI:function fjI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fjF:function fjF(d){this.a=d},
fjG:function fjG(d){this.a=d},
fjH:function fjH(d,e){this.a=d
this.b=e},
fjE:function fjE(d,e){this.a=d
this.b=e},
fjB:function fjB(d){this.a=d},
fjC:function fjC(d,e,f,g,h,i,j,k,l,m){var _=this
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
fjA:function fjA(d,e,f,g,h,i,j,k,l,m){var _=this
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
fjs:function fjs(d){this.a=d},
fjt:function fjt(d){this.a=d},
fju:function fju(d){this.a=d},
fjv:function fjv(d,e){this.a=d
this.b=e},
fjr:function fjr(d){this.a=d},
fjw:function fjw(d){this.a=d},
fjq:function fjq(){},
fjx:function fjx(d,e,f){this.a=d
this.b=e
this.c=f},
fjp:function fjp(d,e){this.a=d
this.b=e},
fjy:function fjy(d){this.a=d},
fjz:function fjz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fjD:function fjD(d,e,f){this.a=d
this.b=e
this.c=f},
fj8:function fj8(d,e){this.a=d
this.b=e},
fj6:function fj6(d){this.a=d},
fj7:function fj7(d){this.a=d},
fj0:function fj0(){},
fj1:function fj1(d){this.a=d},
fj2:function fj2(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fj_:function fj_(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fiZ:function fiZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
fiY:function fiY(d,e){this.a=d
this.b=e},
fiV:function fiV(d,e){this.a=d
this.b=e},
fiX:function fiX(d,e,f){this.a=d
this.b=e
this.c=f},
fiW:function fiW(){},
bgz:function bgz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
dld:function dld(){},
dle:function dle(d){this.a=d},
dlf:function dlf(d,e){this.a=d
this.b=e},
dlg:function dlg(){},
dlh:function dlh(d){this.a=d},
dli:function dli(d,e){this.a=d
this.b=e},
dlj:function dlj(d){this.a=d},
dlc:function dlc(d,e,f){this.a=d
this.b=e
this.c=f},
fiC:function fiC(d){this.a=d},
fiA:function fiA(d){this.a=d},
fiB:function fiB(d){this.a=d},
fiF:function fiF(d,e,f){this.a=d
this.b=e
this.c=f},
fiD:function fiD(d){this.a=d},
fiE:function fiE(d){this.a=d},
fiR:function fiR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiS:function fiS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fiQ:function fiQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
fiL:function fiL(d,e,f){this.a=d
this.b=e
this.c=f},
fiM:function fiM(d,e,f){this.a=d
this.b=e
this.c=f},
fiN:function fiN(d,e,f){this.a=d
this.b=e
this.c=f},
fiO:function fiO(d,e,f){this.a=d
this.b=e
this.c=f},
fiP:function fiP(d){this.a=d},
fiT:function fiT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiK:function fiK(d,e){this.a=d
this.b=e},
fiJ:function fiJ(d,e,f){this.a=d
this.b=e
this.c=f},
fiG:function fiG(d){this.a=d},
fiH:function fiH(d){this.a=d},
fiI:function fiI(d){this.a=d},
faP:function faP(d,e){this.a=d
this.b=e},
faO:function faO(d,e,f){this.a=d
this.b=e
this.c=f},
on:function on(d,e,f){this.c=d
this.d=e
this.a=f},
fja:function fja(){},
fjb:function fjb(d){this.a=d},
fjc:function fjc(){},
fjd:function fjd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fj9:function fj9(d,e,f){this.a=d
this.b=e
this.c=f},
fj5:function fj5(){},
fj4:function fj4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fj3:function fj3(d,e){this.a=d
this.b=e},
bf9:function bf9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiU:function fiU(d,e,f){this.a=d
this.b=e
this.c=f},
azO:function azO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azP:function azP(d,e,f){var _=this
_.d=$
_.e=d
_.f=e
_.r=""
_.w=null
_.x=f
_.c=_.a=null},
ddG:function ddG(){},
ddH:function ddH(d){this.a=d},
ddI:function ddI(){},
ddJ:function ddJ(d){this.a=d},
ddK:function ddK(d){this.a=d},
ddL:function ddL(d){this.a=d},
ddM:function ddM(d){this.a=d},
ddY:function ddY(){},
ddS:function ddS(d){this.a=d},
ddR:function ddR(d,e){this.a=d
this.b=e},
ddT:function ddT(d,e){this.a=d
this.b=e},
ddQ:function ddQ(d,e,f){this.a=d
this.b=e
this.c=f},
ddU:function ddU(d,e){this.a=d
this.b=e},
ddP:function ddP(d,e,f){this.a=d
this.b=e
this.c=f},
ddV:function ddV(d,e){this.a=d
this.b=e},
ddO:function ddO(d,e){this.a=d
this.b=e},
ddW:function ddW(d){this.a=d},
ddN:function ddN(d){this.a=d},
ddX:function ddX(d){this.a=d},
aK1:function aK1(){},
aK2:function aK2(){},
aKC:function aKC(){},
fOi(d,e){var w=0,v=A.j(x.y),u
var $async$fOi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}u=A.lc(d,B.Cn)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOi,v)},
c3P(d,e,f){var w=0,v=A.j(x.y),u
var $async$c3P=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}w=3
return A.b(A.aqi(d,B.yV,e),$async$c3P)
case 3:if(h){u=!0
w=1
break}u=A.lc(d,B.yV)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c3P,v)},
aXA(d,e){var w=0,v=A.j(x.y),u,t
var $async$aXA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(e){u=!0
w=1
break}t=J
w=3
return A.b(C.aXG(d),$async$aXA)
case 3:if(t.ad(g)<1){u=!0
w=1
break}u=C.fOi(d,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXA,v)},
anE(d,e,f){var w=0,v=A.j(x.y),u,t
var $async$anE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aXA(e,f),$async$anE)
case 3:if(h){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.kP(!1,d,e,f,"Your free group slot is used. Subscribe to create another lightning group ("+A.cd1(B.Cn)+" / "+A.ccX(B.Cn)+").",B.Cn,"Create another group"),$async$anE)
case 6:t=h
if(t){w=4
break}else h=t
w=5
break
case 4:w=7
return A.b(C.aXA(e,f),$async$anE)
case 7:case 5:u=h
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anE,v)},
aXz(d,e,f,g){var w=0,v=A.j(x.y),u
var $async$aXz=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}if(d<100){u=!0
w=1
break}u=C.c3P(g,e,!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aXz,v)},
anD(d,e,f,g,h){var w=0,v=A.j(x.y),u,t
var $async$anD=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aXz(e,f,g,h),$async$anD)
case 3:if(j){u=!0
w=1
break}if(d.e==null){u=!1
w=1
break}w=6
return A.b(A.z8(d,h,g,"This group is at the free 100-member limit. Unlock more seats for "+A.cd1(B.yV)+" / "+A.ccX(B.yV)+".",B.yV,f,"Unlock 100+ members"),$async$anD)
case 6:t=j
if(t){w=4
break}else j=t
w=5
break
case 4:w=7
return A.b(C.aXz(e,f,g,h),$async$anD)
case 7:case 5:u=j
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anD,v)}},D,E,F,G,M,N,O,P,Q,R
J=c[1]
A=c[0]
B=c[2]
H=c[77]
K=c[81]
I=c[75]
L=c[86]
C=a.updateHolder(c[8],C)
D=c[74]
E=c[76]
F=c[82]
G=c[78]
M=c[83]
N=c[79]
O=c[84]
P=c[80]
Q=c[87]
R=c[85]
C.C2.prototype={
a4(){return"_MemberHistoryFilter."+this.b}}
C.w8.prototype={}
C.OX.prototype={}
C.Jv.prototype={}
C.anC.prototype={
T(){var w=x.D
return new C.aBD(A.a([],w),A.a([],w),A.a([],w),null,null)},
gdX(){return this.c}}
C.aBD.prototype={
a_(){var w,v=this,u=null
v.a1()
v.w=C.hwm(v.a.c)
v.x=C.hwl(v.a.c)
v.y=A.dA(B.hH,new C.dI7(v))
w=A.bj(u,B.xd,u,1,u,v)
w.cq(0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,B.px,u,1,u,v)
w.f9(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.jT,u,1,u,v)
w.cH(0)
v.f!==$&&A.aO()
v.f=w
w=A.bj(u,B.i9,u,1,u,v)
w.cq(0)
v.r!==$&&A.aO()
v.r=w
v.hV()},
q(){var w=this,v=w.y
if(v!=null)v.a8(0)
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
w.bt_()},
hV(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$hV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aXG(t.a.c),$async$hV)
case 3:s=e
w=4
return A.b(C.c42(t.a.c),$async$hV)
case 4:r=e
w=5
return A.b(C.c49(t.a.c),$async$hV)
case 5:q=e
if(t.c==null){w=1
break}t.m(new C.dHY(t,s,r,q))
case 1:return A.h(u,v)}})
return A.i($async$hV,v)},
zD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
m=r.a
w=3
return A.b(C.anE(j,m.c,m.e),$async$zD)
case 3:if(!e||r.c==null){w=1
break}j=r.c
j.toString
w=4
return A.b(C.hRc(j),$async$zD)
case 4:q=e
if(q==null||r.c==null){w=1
break}t=6
j=r.a
w=9
return A.b(C.a5M(q,j.c,j.d),$async$zD)
case 9:p=e
w=10
return A.b(r.hV(),$async$zD)
case 10:j=r.c
if(j==null){w=1
break}m=p.a
l=r.a
w=11
return A.b(A.hv(j,new C.HJ(m,l.c,l.d,l.e,null),!1,null,x.X),$async$zD)
case 11:w=12
return A.b(r.hV(),$async$zD)
case 12:t=2
w=8
break
case 6:t=5
i=s.pop()
j=A.a9(i)
if(j instanceof A.lD){o=j
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}else{n=j
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$zD,v)},
XA(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hRe(r,!0,"Join group","ABC12345",B.y9,1.6,"Enter the group code from the owner (3 letters + numbers).","Join with code"),$async$XA)
case 3:s=e
if(s==null||t.c==null){w=1
break}w=4
return A.b(t.tl(s),$async$XA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XA,v)},
tl(d){return this.bXx(d)},
bXx(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$tl=A.e(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:w=3
return A.b(C.TO(d),$async$tl)
case 3:g=a0
if(g==null){m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(D.ePy)
w=1
break}w=g.alm(r.a.c)?4:5
break
case 4:m=r.c
if(m==null){w=1
break}l=g.a
k=r.a
w=6
return A.b(A.hv(m,new C.HJ(l,k.c,k.d,k.e,null),!1,null,x.X),$async$tl)
case 6:w=7
return A.b(r.hV(),$async$tl)
case 7:w=1
break
case 5:if(g.aEG(r.a.c)){m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(D.eM7)
w=1
break}m=g.c
l=g.a
w=8
return A.b(C.aXz(g.gwq(),l,!1,m),$async$tl)
case 8:if(!a0){m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(D.eNv)
w=1
break}m=r.c
m.toString
l=r.a
w=9
return A.b(C.hR7(m,g,l.d,l.c),$async$tl)
case 9:q=a0
if(q==null||r.c==null){w=1
break}t=11
m=g.e
l=r.a.c
k=q.a
j=q.b
i=q.c
w=14
return A.b(C.aXH(q.d,l,q.e,m,k,j,i),$async$tl)
case 14:p=a0
if(p==null){m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(D.ePG)
w=1
break}t=2
w=13
break
case 11:t=10
f=s.pop()
m=A.a9(f)
if(m instanceof A.lD){o=m
m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{n=m
m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not send your request. "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=13
break
case 10:w=2
break
case 13:if(r.c==null){w=1
break}w=15
return A.b(r.hV(),$async$tl)
case 15:m=r.c
if(m==null){w=1
break}w=16
return A.b(A.ca(null,null,!0,null,new C.dHX(),m,null,!0,!0,x.H),$async$tl)
case 16:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$tl,v)},
Yx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.hv(r,D.fMT,!1,null,x.N),$async$Yx)
case 3:s=e
if(s==null||s.length===0||t.c==null){w=1
break}w=4
return A.b(t.tl(s),$async$Yx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yx,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
m===$&&A.c()
w=o.e
w===$&&A.c()
v=o.f
v===$&&A.c()
u=A.c6(new A.h3(A.a([m,w,v],x.U)),new C.dI1(o),n)
t=o.a.e?A.aH(n,n,n,n,D.bFN,n,n,n,new C.dI2(o,d),n,n,n,n,"All groups (admin)",n):n
t=C.fRD(n,!1,n,new C.dI3(d),n,n,!1,"LIGHTNING GROUPS",t)
s=x.p
m=A.a([new C.bfD(m,w,v,o.gbGu(),o.gbXw(),o.gc2x(),n),B.e1,o.ayv("YOU OWN")],s)
if(J.cl(o.w))m.push(new A.C(B.e3,A.d("Create your free group \u2014 one free owned group.",n,n,n,n,n,n,I.Iw,n,n,n),n))
else{r=J.fYD(o.w)
B.d.v(m,r.gdK(r).dt(0,new C.dI4(o,d),x.l))}if(J.cy(o.z)){r=A.a([B.bx,o.ayv("WAITING FOR APPROVAL")],s)
for(q=J.aV(o.z);q.C();){p=q.gU(q)
r.push(new C.azb(p,"Request sent \xb7 "+p.d+" has to approve you",new C.dI5(d),w,v,0,"...",n))}B.d.v(m,r)}m.push(B.bx)
m.push(o.ayv("YOU JOINED"))
if(J.cl(o.x))m.push(new A.C(B.e3,A.d("Join with a code or QR from a friend.",n,n,n,n,n,n,I.Iw,n,n,n),n))
else{w=J.fYD(o.x)
B.d.v(m,w.gdK(w).dt(0,new C.dI6(o,d),x.l))}return A.yl(A.c8(n,B.bX,new A.an(B.W,n,B.aa,B.r,A.a([u,A.bm(!0,A.v(A.a([new A.C(E.LA,t,n),A.D(A.cB(m,n,D.bqy,n,n,B.ah,!1),1)],s),B.aj,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],s),n),n,!1,!1,n,n),B.Sw,x.I)},
b4c(d,e){var w=this.r
w===$&&A.c()
return A.c6(w,new C.dHZ(this,d,e),null)},
ayv(d){var w=null
return new A.C(B.cH,A.d(d,w,w,w,w,w,w,A.l(w,w,B.b1.j(0.85),w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w),w)}}
C.ape.prototype={
T(){return new C.biv(new A.ar(B.as,$.aw()),A.a([],x.D),null,null)},
gdX(){return this.c}}
C.biv.prototype={
a_(){var w,v=this,u=null
v.a1()
v.r=A.bl(C.fOj(),!0,x.L)
w=A.bj(u,B.px,u,1,u,v)
w.f9(0,!0)
v.d!==$&&A.aO()
v.d=w
w=A.bj(u,B.jT,u,1,u,v)
w.cH(0)
v.e!==$&&A.aO()
v.e=w
v.hV()},
q(){var w=this,v=w.d
v===$&&A.c()
v.q()
v=w.e
v===$&&A.c()
v.q()
v=w.f
v.S$=$.aw()
v.P$=0
w.btB()},
hV(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HN(),$async$hV)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.e6x(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hV,v)},
gbMn(){var w,v=B.a.i(this.x).toLowerCase()
if(v.length===0)return this.r
w=J.dH(this.r,new C.e6w(v))
w=A.B(w,w.$ti.k("J.E"))
return w},
ZO(d){return this.caE(d)},
caE(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$ZO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return A.b(A.hv(s,new C.HJ(d.a,t.c,t.d,!0,null),!1,null,x.X),$async$ZO)
case 2:w=3
return A.b(u.hV(),$async$ZO)
case 3:return A.h(null,v)}})
return A.i($async$ZO,v)},
Nt(d){return this.bIo(d)},
bIo(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.e6t(d),s,null,!0,!0,x.y),$async$Nt)
case 3:if(f!==!0){w=1
break}w=4
return A.b(C.aXF(d.a),$async$Nt)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted "+d.e,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=5
return A.b(t.hV(),$async$Nt)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Nt,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=q.gbMn(),n=q.d
n===$&&A.c()
w=q.e
w===$&&A.c()
w=A.c6(new A.h3(A.a([n,w],x.U)),new C.e6C(q),p)
n=q.w
v=n?"Close search":"Search groups"
u=x.p
v=A.a([new A.C(E.LA,C.fRD(p,!1,p,new C.e6D(d),p,p,!1,"ALL GROUPS",A.aH(p,p,p,p,A.W(n?B.cA:B.fa,B.et,p,p,p,20),p,p,p,new C.e6E(q),p,p,p,p,v,p)),p)],u)
if(q.w)v.push(new A.C(B.xn,A.aM(p,B.T,!0,p,!0,B.r,p,A.aN(),q.f,B.b1,p,p,p,p,2,A.br(p,new A.b4(4,A.m(14),new A.aA(B.b1.j(0.3),1,B.q,-1)),p,B.eh,p,p,p,p,!0,new A.b4(4,A.m(14),new A.aA(B.b1.j(0.25),1,B.q,-1)),p,p,p,p,p,B.fn,!0,p,p,p,p,new A.b4(4,A.m(14),D.aWH),p,p,p,p,p,p,p,p,B.kw,"Search name, code, owner\u2026",p,p,p,p,p,!0,p,p,p,!0,!0,!1,p,D.bJ3,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ai,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.e6F(q),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dl,!0,B.a5,p,B.am,p,p,p,p),p))
n=J.a5(o)
t=n.gM(o)
s=n.gM(o)===1?"":"s"
r=B.a.i(q.x).length===0?"":" matching"
v.push(new A.C(D.bqD,A.d(""+t+" group"+s+r,p,p,p,p,p,p,A.l(p,p,B.b1.j(0.85),p,p,p,p,p,p,p,p,11,p,p,B.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p),p))
v.push(A.D(n.gam(o)?D.b3H:A.k2(!0,p,p,new C.e6G(q,o),n.gM(o),p,D.bqe,p,p,!1,!1),1))
return A.yl(A.c8(p,B.bX,new A.an(B.W,p,B.aa,B.r,A.a([w,A.bm(!0,A.v(v,B.aj,p,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],u),p),p,!1,!1,p,p),B.Sw,x.I)}}
C.aaD.prototype={
B(d){var w=null,v=A.m(16),u=A.m(16),t=A.I(B.b1.j(0.28),B.q,1),s=this.c,r=x.p
return new A.C(B.dc,A.aG(!1,B.a1,!0,w,A.aL(!1,v,!0,A.ez(A.A(A.a([A.p(w,D.bEV,B.f,w,w,new A.o(B.b1.j(0.12),w,A.I(B.b1.j(0.5),B.q,1),w,w,w,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(s.e,w,w,w,w,w,w,D.f29,w,w,w),B.bA,A.d("Owner "+s.d+" \xb7 "+s.gwq()+" people",w,1,B.a2,w,w,w,B.hp,w,w,w),A.d(s.c,w,1,B.a2,w,w,w,H.CW,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1),A.aH(w,w,w,w,D.bGT,w,w,w,this.e,w,w,w,w,"Delete group",w),G.am0],r),B.m,w,B.e,B.j,0,w,w),w,new A.o(B.fn,w,t,u,w,w,B.n),w,D.bpp,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),w)}}
C.BZ.prototype={
B(d){return A.c6(this.e,new C.daH(this),null)}}
C.azb.prototype={
B(d){return new A.C(B.e3,A.c6(new A.h3(A.a([this.f,this.r],x.U)),new C.daX(this),null),null)}}
C.ac0.prototype={
a5(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=0+a7,b0=0+a8,b1=$.X(),b2=A.M()
b2.r=B.bX.gp(0)
b3.aY(new A.aa(0,0,a9,b0),b2)
w=A.M()
b2=a7*0.5
v=this.c
w.sau(A.aTL(new A.u(b2,a8*0.48),a7*0.38,A.a([B.b1.j(0.07+v*0.06),B.K],x.O),a6,B.x,a6,a6,0))
b3.aY(new A.aa(0,0,a9,b0),w)
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
k.z=B.lj
j=k.H()
q.drawCircle(m,l,p,j)
j.delete()}i=A.M()
i.r=B.et.j(0.18+v*0.12).gp(0)
i.b=B.ae
i.c=2
i.z=B.jk
a9=x.v
r=A.a([],a9)
h=new A.aQ(b1.r,B.ap,a6,a6,r)
for(b1=s*1.6,o=0;o<=48;++o){g=o/48*3.141592653589793*1.4+b1
f=b2+Math.cos(g)*t*0.92
e=u+Math.sin(g)*t*0.42
if(o===0){p=new A.b5(f,e)
r.push(p)
k=h.f
if(k!=null)p.bx(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}else{p=new A.ap(f,e)
r.push(p)
k=h.f
if(k!=null)p.bx(k)
p=h.e
if(p!=null)p.a.delete()
h.e=null}}b3.aP(h,i)
d=new A.aQ($.X().r,B.ap,a6,a6,A.a([],a9))
d.E(new A.b5(b2+14,u-52))
b1=u-4
d.E(new A.ap(b2-16,b1))
d.E(new A.ap(b2+2,b1))
d.E(new A.ap(b2-20,u+54))
a0=A.M()
a0.r=B.b1.j(0.1+v*0.08).gp(0)
a0.b=B.ae
a0.c=10
a0.z=B.yI
a1=A.M()
b2=this.b
a1.r=B.b1.j(0.32+b2*0.4).gp(0)
a1.b=B.ae
a1.c=2.4
a1.d=B.bO
a1.e=B.fz
for(b1=A.wO(d),r=A.a([],x.J),p=new A.vk(b1,!1,r),k=b1.a;p.C();){a2=p.c
if(a2===0||p.f)A.ba(A.jR('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--a2
p.jj()
a3=r[a2].b
a3===$&&A.c()
a3=a3.a.length()
a4=new A.aQ(k,b1.b,a6,new A.cL([new A.GX(p,a2),0,a3*b2,!0]),A.a([],a9))
j=a0.H()
a2=a4.gbJ().a.snapshot()
q.drawPath((a4.e=new A.cF(a2)).a,j)
j.delete()
j=a1.H()
a2=a4.e
q.drawPath((a2==null?a4.e=new A.cF(a4.gbJ().a.snapshot()):a2).a,j)
j.delete()}$.X()
a5=A.M()
a5.r=B.et.j(0.14+v*0.2).gp(0)
for(a9=b0*4,b0=v*3,v=1.2+v*1.2,o=0;o<14;++o){b1=Math.sin(o*1.9+a9)
b2=Math.cos(o*2.3+b0)
j=a5.H()
q.drawCircle((b1*0.35+0.5)*a7,(b2*0.22+0.46)*a8,v,j)
j.delete()}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.HJ.prototype={
T(){return new C.aBA(null,null)},
gdX(){return this.d}}
C.aBA.prototype={
gtk(){var w=this.d
if(w!=null)w=w.a4c(this.a.d)||this.a.f
else w=!1
return w},
a_(){var w,v=this,u=null
v.a1()
v.d=C.c3W(v.a.c)
w=A.bj(u,B.to,u,1,u,v)
w.f9(0,!0)
v.e!==$&&A.aO()
v.e=w
w=A.bj(u,B.jT,u,1,u,v)
w.cH(0)
v.f!==$&&A.aO()
v.f=w
v.r=A.dA(B.hH,new C.dHU(v))
v.hV()},
q(){var w=this,v=w.r
if(v!=null)v.a8(0)
v=w.e
v===$&&A.c()
v.q()
v=w.f
v===$&&A.c()
v.q()
w.bsZ()},
hV(){var w=0,v=A.j(x.H),u,t=this,s
var $async$hV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.anG(t.a.c),$async$hV)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dHI(t,s))
case 1:return A.h(u,v)}})
return A.i($async$hV,v)},
CF(d){return this.bxo(d)},
bxo(a6){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
var $async$CF=A.e(function(a7,a8){if(a7===1){s.push(a8)
w=t}for(;;)switch(w){case 0:if(!r.gtk()||r.d==null){w=1
break}o=a6===B.rg
if(o&&!r.d.y){r.c.I(x.q).f.R(D.eNp)
w=1
break}if(o){n=r.d
n=n.y&&B.a.i(n.ax).length===0}else n=!1
if(n){r.c.I(x.q).f.R(D.eMT)
w=1
break}n=r.d
m=n.d
m=A.a([new A.Fp(n.c,m)],x.S)
n=r.d.gEX()
B.d.v(m,new A.K(n,new C.dHw(),A.U(n).k("K<1,+email,name(n,n)>")))
n=r.d
l=n.y?B.a.i(n.ax):""
n=A.aX(x.N)
if(o&&l.length!==0)for(k=m.length,j=0;j<m.length;m.length===k||(0,A.L)(m),++j){i=m[j]
h=i.b
if(r.d.aCc(h,l,i.a))n.L(0,h)}k=r.c
k.toString
w=3
return A.b(C.hRd(k,n,o&&r.d.y?r.d.z:null,a6,m),$async$CF)
case 3:g=a8
if(g==null||r.c==null){w=1
break}n=g.b
if(n<=0){r.c.I(x.q).f.R(B.Sr)
w=1
break}m=!1
if(o)if(l.length!==0){m=r.d
k=g.a
h=m.aki(k)
m=m.aCc(k,l,h==null?"":h)}if(m){r.c.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(g.a+" already contributed to this round.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=o?4:5
break
case 4:m=r.c
m.toString
k=g.a
h=r.d
w=6
return A.b(C.hR4(m,n,h.y?h.z:null,k),$async$CF)
case 6:if(a8!==!0||r.c==null){w=1
break}case 5:m=r.d.x
k=Date.now()
h=g.a
f=g.c
e=new A.S(Date.now(),0,!1).a6()
d=r.a.d
a0=o&&r.d.y?r.d.ax:""
a1=o&&r.d.y?B.a.i(r.d.z):""
a2=r.d.aki(h)
if(a2==null)a2=""
B.d.ck(m,0,new A.pD("led_"+k,a6,n,h,f,e,d,a0,a2,a1))
if(o){o=r.d
o=o.y&&o.ax.length!==0}else o=!1
if(o){a3=r.d.aki(h)
if(a3!=null){o=r.d
o.cCO(o.ax,a3,h)}}t=8
o=r.d
o.toString
w=11
return A.b(C.HO(o),$async$CF)
case 11:t=2
w=10
break
case 8:t=7
a5=s.pop()
o=A.a9(a5)
if(o instanceof A.lD){q=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save ledger. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=10
break
case 7:w=2
break
case 10:w=12
return A.b(r.hV(),$async$CF)
case 12:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$CF,v)},
Vi(d){return this.bzq(d)},
bzq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Vi=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=r.d
if(l==null){w=1
break}t=4
w=7
return A.b(C.aXE(l.a,d.a),$async$Vi)
case 7:q=f
o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
n=d.b
o.R(A.b2(null,null,null,null,null,B.r,null,A.d(q?n+" is in the group now.":"Could not approve "+n+".",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
k=s.pop()
p=A.a9(k)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not approve. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:w=8
return A.b(r.hV(),$async$Vi)
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Vi,v)},
Nn(d){return this.bHm(d)},
bHm(d){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Nn=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=r.d
if(n==null){w=1
break}p=r.c
p.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dHG(d),p,null,!0,!0,x.y),$async$Nn)
case 3:if(f!==!0){w=1
break}t=5
w=8
return A.b(C.anH(n.a,d.a,null,"Join request declined",r.a.d),$async$Nn)
case 8:t=2
w=7
break
case 5:t=4
m=s.pop()
q=A.a9(m)
p=r.c
if(p==null){w=1
break}p.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not decline. "+A.t(q),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:w=9
return A.b(r.hV(),$async$Nn)
case 9:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Nn,v)},
clt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.gamg(),i=B.ay.j(0.07),h=A.m(16),g=A.I(B.ay.j(0.4),B.q,1),f=A.m(12),e=x.p
f=A.a([A.A(A.a([A.p(k,A.d(""+j.length,k,k,k,k,k,k,B.rB,k,k,k),B.f,k,k,new A.o(B.ay,k,k,f,k,k,B.n),k,k,k,k,B.fJ,k,k,k),B.ab,D.buR],e),B.m,k,B.e,B.j,0,k,k),B.P],e)
for(w=j.length,v=0;v<j.length;j.length===w||(0,A.L)(j),++v){u=j[v]
t=new A.aW(14,14)
s=new A.aA(B.b1.j(0.25),1,B.q,-1)
r=A.a([new A.x(u.b,k,B.i3,k,k,k,k,k,k,k,k,k),B.at,new A.C(B.v5,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.W(B.tF,B.c_,k,k,k,14),B.bp,new A.bD(1,B.bi,new A.x(u.a,k,B.w6,k,k,k,k,k,k,k,k,k),k)],e),k),k)],e)
q=u.f
if(q.length!==0){q=A.n0(q)
r.push(new A.C(B.v5,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.W(B.iA,B.c_,k,k,k,14),B.bp,new A.bD(1,B.bi,new A.x(q,k,B.w6,k,k,k,k,k,k,k,k,k),k)],e),k),k))}q=u.r
if(q.length!==0)r.push(new A.C(B.v5,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.W(B.kK,B.c_,k,k,k,14),B.bp,new A.bD(1,B.bi,new A.x(q,k,B.w6,k,k,k,k,k,k,k,k,k),k)],e),k),k))
q=u.w
if(q.length!==0)r.push(new A.C(B.v5,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.W(B.lK,B.c_,k,k,k,14),B.bp,new A.bD(1,B.bi,new A.x(q,k,B.w6,k,k,k,k,k,k,k,k,k),k)],e),k),k))
for(q=u.x,p=q.length,o=0;o<q.length;q.length===p||(0,A.L)(q),++o){n=q[o]
m=J.a5(n)
l=m.h(n,"relation")
l=C.hdk(l==null?"":l)
m=m.h(n,"name")
if(m==null)m=""
r.push(new A.C(B.v5,new A.cm(B.aO,B.e,B.j,B.F,k,B.p,k,0,A.a([A.W(B.xQ,B.c_,k,k,k,14),B.bp,new A.bD(1,B.bi,new A.x(l+": "+m,k,B.w6,k,k,k,k,k,k,k,k,k),k)],e),k),k))}r.push(B.S)
r.push(new A.cm(B.aO,B.e,B.j,B.m,k,B.p,k,0,A.a([new A.bD(1,B.bi,A.dq(N.a04,B.D7,new C.dHJ(this,u),A.bk(B.bo,k,k,k,B.c,k,k,k,k,k,k,k)),k),B.ab,new A.bD(1,B.bi,A.eB(B.a_N,B.IR,new C.dHK(this,u),A.de(k,k,k,k,k,k,k,k,k,B.cj,k,k,k,k,k,D.aWV,k,k,k,k)),k)],e),k))
f.push(A.p(k,A.v(r,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(B.fn,k,new A.bP(s,s,s,s),new A.bq(t,t,t,t),k,k,B.n),k,k,k,B.kh,B.bk,k,k,k))}return A.p(k,A.v(f,B.F,k,B.e,B.j,0,B.p),B.f,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.kH,B.bk,k,k,k)},
bY3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=x.p,i=A.a([],j),h=A.aX(x.N)
for(w=d.x,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=t.b
if(s===B.rg){r=t.w
if(r.length===0)r="other"
if(!h.L(0,r))continue
i.push(this.cmD(d,r))
continue}q=s===B.a3C
p=q?B.cj:B.iC
s=new A.aW(12,12)
o=new A.aA(p.j(0.25),1,B.q,-1)
n=A.W(q?B.akw:B.tN,p,k,k,k,18)
if(q){m=t.d
m=A.dp(t.e,"declined",0)?m+": request declined":m+" removed"}else m="Spending: "+t.d
m=A.a([new A.x(m,k,B.iG,k,k,k,k,k,k,k,k,k)],j)
l=t.e
if(l.length!==0&&!q)m.push(new A.x(l,k,B.hp,k,k,k,k,k,k,k,k,k))
m=A.v(m,B.F,k,B.e,B.j,0,B.p)
l=q?"":"-$"+B.k.aa(t.c,2)
i.push(A.p(k,new A.cm(B.aO,B.e,B.j,B.m,k,B.p,k,0,A.a([n,B.av,new A.bD(1,B.bi,m,k),new A.x(l,k,new A.G(!0,p,k,k,k,k,k,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k)],j),k),B.f,k,k,new A.o(B.fn,k,new A.bP(o,o,o,o),new A.bq(s,s,s,s),k,k,B.n),k,k,k,B.cH,B.bk,k,k,k))}return i},
cmD(d,e){var w,v,u=null,t=C.hQw(d,e),s=C.hQx(d,e,t),r=B.d.cI(t,0,new C.dHL()),q=e!=="other"&&d.y&&d.ax===e,p=d.gwq(),o=A.m(14),n=A.I((q?B.b8:B.b1).j(0.35),B.q,1),m=A.m(14),l=A.m(14),k=(q?B.b8:B.b1).j(0.14),j=A.I((q?B.b8:B.b1).j(0.5),B.q,1)
k=A.p(u,A.W(B.mn,q?B.b8:B.b1,u,u,u,20),B.f,u,u,new A.o(k,u,j,u,u,u,B.a6),u,40,u,u,u,u,u,40)
j=x.p
w=A.a([new A.dm(1,B.ci,A.d(s,u,2,B.a2,u,u,u,P.SU,u,u,u),u)],j)
if(q)B.d.v(w,A.a([B.bp,A.p(u,D.fi1,B.f,u,u,new A.o(B.b8.j(0.2),u,u,A.m(8),u,u,B.n),u,u,u,u,B.n6,u,u,u)],j))
w=A.D(A.v(A.a([A.A(w,B.m,u,B.e,B.j,0,u,u),B.cX,A.d(""+t.length+" of "+p+" gave \xb7 tap to see who",u,u,u,u,u,u,B.hp,u,u,u)],j),B.F,u,B.e,B.j,0,B.p),1)
v=B.k.aa(r,2)
return A.p(u,A.aG(!1,B.a1,!0,m,A.aL(!1,l,!0,new A.C(B.bk,A.A(A.a([k,B.av,w,A.d("+$"+v,u,u,u,u,u,u,A.l(u,u,q?B.b8:B.b1,u,u,u,u,u,u,u,u,u,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.d8,A.W(B.ex,B.b1.j(0.6),u,u,u,u)],j),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.dHM(this,d,e,s,t,q),u,u,u,u,u,u,u),B.f,B.fn,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(u,u,n,o,u,u,B.n),u,u,u,B.cH,u,u,u,u)},
Px(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Px=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:k=r.d
if(k==null){w=1
break}if(!r.gtk()&&!k.y){w=1
break}o=r.c
o.toString
n=r.e
n===$&&A.c()
w=3
return A.b(C.hR6(o,k,r.gtk(),n),$async$Px)
case 3:m=e
if(m==null||r.c==null){w=1
break}w=r.gtk()?4:5
break
case 4:r.d=m
t=7
w=10
return A.b(C.HO(m),$async$Px)
case 10:t=2
w=9
break
case 7:t=6
j=s.pop()
o=A.a9(j)
if(o instanceof A.lD){q=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(q.a,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}else{p=o
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save help mode. "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}w=9
break
case 6:w=2
break
case 9:w=11
return A.b(r.hV(),$async$Px)
case 11:case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Px,v)},
Qn(d,e){return this.cl2(d,e)},
cl2(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(!t.gtk()||t.d==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.hRa(s,e,d),$async$Qn)
case 3:if(g!==!0){w=1
break}w=4
return A.b(C.anH(t.d.a,e,d,"Removed from group",t.a.d),$async$Qn)
case 4:w=5
return A.b(t.hV(),$async$Qn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qn,v)},
ZW(d,e,f,g){return this.cb2(d,e,f,g)},
cb2(d,e,f,g){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$ZW=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:p=t.d
if(p==null){w=1
break}s=t.c
s.toString
r=t.e
r===$&&A.c()
q=t.gtk()
w=3
return A.b(C.hR8(s,d,p,q,e,f,t.gtk()?new C.dHH(t,p):null,r,g),$async$ZW)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
acz(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.d
if(r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(C.aMg(s,r.e),$async$acz)
case 3:case 1:return A.h(u,v)}})
return A.i($async$acz,v)},
Wm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Wm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=r.d
if(i==null){w=1
break}t=4
m=B.a.i(i.e)
l=new A.a8w(-1,1,!0,null,null,D.e9s,D.e9q,null,new A.b1c(A.a([],x.B),A.T(x.N,x.Y)),null,null)
k=A.h6l("NGMY-GROUP:"+m.toUpperCase(),1,-1)
if(k.a!==B.RJ){m=k.c
m.toString
A.ba(m)}m=k.b
l.x=m
l.z=m.a
l.aU3()
q=l
w=7
return A.b(q.an4(720),$async$Wm)
case 7:p=e
if(p==null||r.c==null){w=1
break}w=8
return A.b(A.rH(J.fb(B.dz.gaO(p)),"ngmy_group_"+i.e+".png"),$async$Wm)
case 8:o=e
m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
h=s.pop()
n=A.a9(h)
m=r.c
if(m==null){w=1
break}m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not save QR: "+A.t(n),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Wm,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.d,e=h.e
e===$&&A.c()
w=h.f
w===$&&A.c()
v=A.c6(new A.h3(A.a([e,w],x.U)),new C.dHO(h),g)
u=f==null
t=u?g:f.e
s=u?g:new C.dHP(d,f)
r=u?g:f.y
if(!h.gtk()){q=u?g:f.y
q=q===!0}else q=!0
p=x.p
q=A.a([new A.C(E.LA,C.fRD(t,r===!0,e,new C.dHQ(d),s,h.gcaF(),q,"GROUP",g),g)],p)
if(!u){u=A.a([new A.C(D.bpV,new C.bfF(e,A.A(A.a([h.azn("In",f.gaH5()),h.azn("Out",f.gwC()),h.azn("Balance",f.gaH5()-f.gwC()),h.b4r("People",f.gwq(),!1)],p),B.m,g,B.e,B.j,0,g,g),g),g)],p)
if(h.gtk())u.push(new A.C(B.fI,A.A(A.a([A.D(new C.BZ("Contribution",D.al8,e,new C.dHR(h),!1,g),1),B.ab,A.D(new C.BZ("Spending",B.vl,e,new C.dHS(h),!0,g),1)],p),B.m,g,B.e,B.j,0,g,g),g))
u.push(B.S)
t=A.a([],p)
for(s=[D.eaY,D.ebD,D.ecb],o=0;o<3;++o){n=s[o]
r=n.a
m=r===2?0:6
l=h.w
k=!1
if(r===1){j=h.d
if(j!=null){k=h.a
i=k.d
k=B.a.i(j.c.toLowerCase())===B.a.i(i.toLowerCase())||k.f}}k=k?f.gamg().length:0
t.push(new A.bD(1,B.bi,new A.C(new A.Q(0,0,m,0),new C.bfG(n.b,l===r,e,w,new C.dHT(h,n),k,g),g),g))}u.push(new A.C(B.fT,A.A(t,B.m,g,B.e,B.j,0,g,g),g))
u.push(A.D(h.bBN(f),1))
B.d.v(q,u)}else q.push(D.bvD)
return A.yl(A.c8(g,B.bX,new A.an(B.W,g,B.aa,B.r,A.a([v,A.bm(!0,A.v(q,B.m,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],p),g),g,!1,!1,g,g),B.Sw,x.I)},
b4r(d,e,f){var w=null,v=A.d(d,w,w,w,w,w,w,D.a6O,w,w,w)
return A.D(A.v(A.a([v,B.bA,A.d(f?"$"+B.k.aa(e,2):B.o.u(B.k.N(e)),w,w,w,w,w,w,D.f0C,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),1)},
azn(d,e){return this.b4r(d,e,!0)},
bBN(d){var w,v,u,t,s,r,q=this,p=null
switch(q.w){case 1:w=A.a([q.cf4(d,d.d,d.c,"Owner",d.f,new C.dHz(q,d))],x.p)
if(q.gtk()&&d.gamg().length!==0)w.push(q.clt(d))
v=d.gEX()
B.d.v(w,new A.K(v,new C.dHA(q,d),A.U(v).k("K<1,r>")))
if(d.gwq()>=100&&q.gtk()){v=q.e
v===$&&A.c()
w.push(new A.C(B.AE,new C.BZ("Unlock 100+ members",B.pK,v,new C.dHB(q,d),!1,p),p))}return A.cB(w,p,B.tx,p,p,B.ah,!1)
case 2:w=A.m(16)
v=A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,24)],x.V)
u=d.e
v=A.av(A.p(p,A.Ev(B.c,"NGMY-GROUP:"+B.a.i(u).toUpperCase(),B.a55,1,p,B.a56,!0,B.bS,200,-1),B.f,p,p,new A.o(B.c,p,p,w,v,p,B.n),p,p,p,p,B.bC,p,p,p),p,p,p)
w=x.p
u=A.av(A.aE(p,A.A(A.a([A.d(u,p,p,p,p,p,p,D.eVs,p,p,p)],w),B.m,p,B.e,B.Q,0,p,p),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dHC(q,d),p,p,p,p,p,p,!1,B.a8),p,p,p)
t=q.e
t===$&&A.c()
return A.cB(A.a([v,B.aP,u,B.P,D.b3h,B.aA,new C.BZ("Copy invite code",B.fK,t,q.gc2u(),!1,p),B.S,new C.BZ("Download QR",B.hz,t,q.gbJT(),!0,p),B.ac,D.f9l],w),p,B.tx,p,p,B.ah,!1)
default:w=q.a
s=C.bxB(d,w.e,w.d)
r=B.d.cI(s,0,new C.dHD())
w=A.m(12)
v=A.I(B.b1.j(0.28),B.q,1)
u=x.p
u=A.a([A.p(p,A.A(A.a([D.bHm,B.av,A.D(A.v(A.a([A.d(s.length===0?"Your contributions: none yet":"Your contributions: $"+B.k.aa(r,2)+" ("+s.length+")",p,p,p,p,p,p,B.mB,p,p,p),B.at,A.d("Group spending: $"+B.k.aa(d.gwC(),2)+" \xb7 Balance $"+B.k.aa(d.gaH5()-d.gwC(),2),p,p,p,p,p,p,B.hp,p,p,p)],u),B.F,p,B.e,B.j,0,B.p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(B.fn,p,v,w,p,p,B.n),p,p,p,B.e3,B.bk,p,p,p)],u)
if(d.x.length===0)u.push(D.fbd)
else B.d.v(u,q.bY3(d))
return A.cB(u,p,B.tx,p,p,B.ah,!1)}},
b_p(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=C.hJW(d,e,f),j=k>0,i=d.a4t(e,f)
if(d.y){w=d.ax
v=w.length!==0&&!d.S4(e,w)}else v=!1
w=A.m(14)
u=A.I(B.b1.j(0.2),B.q,1)
t=A.m(14)
s=A.m(14)
r=B.b1.j(0.12)
q=A.I(B.b1.j(0.4),B.q,1)
if(v)p=B.oG
else p=j?B.h8:B.na
if(v)o=B.iC
else o=j?B.b1:B.c_
q=A.p(l,A.W(p,o,l,l,l,20),B.f,l,l,new A.o(r,l,q,l,l,l,B.a6),l,40,l,l,l,l,l,40)
r=A.d(e,l,l,l,l,l,l,B.iG,l,l,l)
o=A.d(g+" \xb7 "+f,l,l,l,l,l,l,H.CW,l,l,l)
if(v)p="Has not given this round \xb7 gave "+d.an1(e,f)+"x \xb7 missed "+i
else{p=""+i
p=j?"Gave "+d.an1(e,f)+"x ($"+B.k.aa(k,2)+") \xb7 missed "+p:"Has not given yet \xb7 missed "+p}if(v)n=B.iC.j(0.9)
else if(j)n=B.b1.j(0.85)
else n=i>0?B.iC.j(0.85):B.iC.j(0.85)
m=x.p
m=A.a([q,B.av,A.D(A.v(A.a([r,o,B.bA,A.d(p,l,l,l,l,l,l,A.l(l,l,n,l,l,l,l,l,l,l,l,10,l,l,B.a4,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],m),B.F,l,B.e,B.j,0,B.p),1)],m)
if(a0!=null)m.push(A.aH(l,l,l,l,A.W(B.aji,B.fY.j(0.85),l,l,l,l),l,l,l,a0,l,l,l,l,"Remove member",l))
else m.push(A.W(B.ex,B.b1.j(0.6),l,l,l,l))
return A.p(l,A.aG(!1,B.a1,!0,t,A.aL(!1,s,!0,new A.C(B.bk,A.A(m,B.m,l,B.e,B.j,0,l,l),l),l,!0,l,l,l,l,l,l,l,l,l,l,l,a1,l,l,l,l,l,l,l),B.f,B.fn,0,l,l,l,l,l,B.ag),B.f,l,l,new A.o(l,l,u,w,l,l,B.n),l,l,l,B.cH,l,l,l,l)},
cf4(d,e,f,g,h,i){return this.b_p(d,e,f,g,h,null,i)}}
C.aBB.prototype={
T(){return new C.aBC(A.yP(B.X5,B.nx,B.tY))}}
C.aBC.prototype={
c2w(d){var w,v,u,t,s,r
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=A.fyi(t==null?"":t)
if(s!=null){this.e=!0
this.c.toString
r=$.rK().gbe()
if(r!=null&&r.c!=null&&r.pj())r.O(s)
return}}},
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eF(w,w,w,!0,!0,B.w,w,1,w,w,w,!1,w,!1,w,w,A.aH(w,w,w,w,B.No,w,w,w,new C.dHV(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fnj,w,w,w,1,w,!0),B.w,A.yO(this.d,B.bQ,this.gc2v()),w,!1,!1,w,w)}}
C.bfH.prototype={
B(d){var w=this,v=null,u=A.m(28),t=A.I(B.b1.j(0.22),B.q,1.1),s=A.a([new A.ac(0,B.G,B.w.j(0.35),B.cJ,14)],x.V),r=A.aH(v,v,v,v,D.bET,v,v,v,w.d,v,v,v,v,"Back",v),q=w.e,p=q!=null&&q.length!==0,o=w.c
r=A.a([r,A.D(p?A.v(A.a([A.d(o,v,v,v,v,v,v,D.eTW,B.L,v,v),B.bA,A.aG(!1,B.a1,!0,v,A.aL(!1,A.m(8),!0,new A.C(B.eF,A.d(q,v,1,B.a2,v,v,v,D.eZ0,B.L,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)],x.p),B.m,v,B.e,B.Q,0,B.p):A.d(o,v,1,B.a2,v,v,v,E.aPv,B.L,v,v),1)],x.p)
q=w.z
if(q!=null)r.push(q)
else if(w.r)r.push(new C.be6(w.w,w.x,w.y,v))
else r.push(B.zb)
return A.p(v,A.A(r,B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(B.bX,v,t,u,s,v,B.n),v,v,v,v,B.Yf,v,v,v)}}
C.be6.prototype={
B(d){var w=this,v=new C.dbe(w),u=w.d
if(u==null||!w.c)return v.$1(0)
return A.c6(u,new C.dbd(w,v),null)}}
C.bfG.prototype={
B(d){return A.c6(new A.h3(A.a([this.e,this.f],x.U)),new C.df6(this),null)}}
C.bfD.prototype={
B(d){var w=this
return A.c6(new A.h3(A.a([w.c,w.d,w.e],x.U)),new C.df4(w),null)}}
C.bfF.prototype={
B(d){return A.c6(this.c,new C.df5(this),null)}}
C.Pg.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a,n=e.b,m=A.bA(new A.aa(0,0,0+o,0+n),B.k2)
$.X()
w=A.M()
v=p.b
w.r=B.b1.j(0.06*v).gp(0)
w.b=B.ae
w.c=2
w.z=B.rc
d.aD(m,w)
u=A.M()
u.r=B.et.j(0.35+0.45*v).gp(0)
u.z=B.jk
t=o+n
s=2*t
r=B.k.F(p.d*s,s)
if(r<o)q=new A.u(r,0)
else if(r<t)q=new A.u(o,r-o)
else{t=2*o+n
q=r<t?new A.u(t-r,n):new A.u(0,s-r)}d.ai(q,3.5+v*2,u)
v=A.M()
v.r=B.et.j(0.9).gp(0)
d.ai(q,1.5,v)
if(!p.c)return
v=new C.df3(p,d)
v.$3(E.aFk,!1,!1)
o-=10
v.$3(new A.u(o,8),!0,!1)
n-=8
v.$3(new A.u(10,n),!1,!0)
v.$3(new A.u(o,n),!0,!0)},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bfE.prototype={}
C.bi9.prototype={
oj(d,e){var w,v,u,t,s,r,q=A.af("[^A-Z0-9]",!0,!1,!1,!1),p=A.aK(e.a.toUpperCase(),q,"")
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
return new A.bb(r,A.h8(B.bu,r.length),B.aN)}}
C.bgz.prototype={
gbMo(){var w,v=this,u=C.hNc(v.d,v.e,v.f)
switch(v.ay.a){case 0:w=u
break
case 1:w=x.C
w=A.B(new A.e8(u,w),w.k("J.E"))
break
case 2:w=x.o
w=A.B(new A.e8(u,w),w.k("J.E"))
break
default:w=null}return w},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.gbMo(),m=p.d,l=p.e,k=p.f,j=C.bxB(m,l,k),i=B.d.cI(j,0,new C.dld()),h=m.a4t(l,k)
if(m.y){w=m.ax
v=w.length!==0&&!m.S4(l,w)}else v=!1
if(m.ax.length===0)u=D.avS
else{w=A.U(j).k("a2<1>")
u=A.B(new A.a2(j,new C.dle(p),w),w.k("J.E"))}if(!v)t=h>0&&i<=0
else t=!0
w=x.p
k=A.a([A.c6(p.x,new C.dlf(p,t),o),B.ac,A.d(l,o,o,o,o,o,o,B.hq,B.L,o,o),A.d(p.r+" \xb7 "+k,o,o,o,o,o,o,B.hp,B.L,o,o)],w)
B.d.v(k,A.a([B.at,A.d("Joined "+B.d.gK(p.w.bS().u(0).split(" ")),o,o,o,o,o,o,H.CW,B.L,o,o)],w))
k.push(B.aP)
l=A.m(14)
s=A.I((t?B.iC:B.b1).j(0.35),B.q,1)
if(v)r="MISSED THIS HELP ROUND"
else r=h>0?"MISSED CONTRIBUTIONS":"CONTRIBUTION STATUS"
r=A.d(r,o,o,o,o,o,o,A.l(o,o,t?B.iC:B.b1.j(0.9),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.2,o,o,o,o,o,o),o,o,o)
if(v)q='Not recorded for "'+B.a.i(m.z)+'". They will be marked missed when help mode ends.'
else if(h>0){q=h===1?"":"s"
q=""+h+" missed contribution"+q+" total \xb7 $"+B.k.aa(i,2)+" contributed overall"}else q="Total contributed: $"+B.k.aa(i,2)
q=A.a([r,B.P,A.d(q,o,o,o,o,o,o,K.SI,B.L,o,o)],w)
if(m.y&&B.a.i(m.z).length!==0)B.d.v(q,A.a([B.P,A.d("Active help: "+B.a.i(m.z),o,o,o,o,o,o,A.l(o,o,B.b8.j(0.95),o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),B.L,o,o)],w))
if(u.length!==0)B.d.v(q,A.a([B.an,A.d("This round: $"+B.k.aa(B.d.cI(u,0,new C.dlg()),2),o,o,o,o,o,o,D.eU5,B.L,o,o)],w))
k.push(A.p(o,A.v(q,B.m,o,B.e,B.j,0,B.p),B.f,o,o,new A.o(B.fn,o,s,l,o,o,B.n),o,o,o,o,B.bC,o,o,o))
k.push(B.aP)
m=A.D(A.d("CONTRIBUTION HISTORY",o,o,o,o,o,o,A.l(o,o,B.b1.j(0.85),o,o,o,o,o,o,o,o,11,o,o,B.H,o,o,!0,o,1.4,o,o,o,o,o,o),o,o,o),1)
l=p.ay
k.push(A.A(A.a([m,A.Br(o,B.fn,A.W(D.bBq,l===D.a8h?B.b1.j(0.75):B.iR,o,o,o,20),new C.dlh(p),B.J,p.CW,B.af,"Filter history",x.E)],w),B.m,o,B.e,B.j,0,o,o))
k.push(B.P)
if(n.length===0){if(l===D.aTb)m="No missed contributions for this member."
else m=l===D.aTa?"No recorded contributions for this member.":"No history yet for this member."
k.push(A.d(m,o,o,o,o,o,o,B.kw,o,o,o))}else B.d.v(k,new A.K(n,new C.dli(p,d),A.U(n).k("K<1,r>")))
k.push(B.ac)
k.push(A.bK(!1,D.aPT,o,o,!0,o,o,new C.dlj(d),o,o))
return A.cB(k,p.c,o,o,o,B.ah,!1)},
atD(d,e){var w,v=null,u=A.a([],x.p),t=this.ay===e
if(t)u.push(D.bEW)
else u.push(B.o8)
u.push(B.ab)
w=t?B.iR:B.ad
u.push(A.d(d,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,v,v,v,t?B.H:B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
return A.zi(A.A(u,B.m,v,B.e,B.j,0,v,v),48,e,x.E)},
bVG(d,e){var w,v,u,t,s,r,q,p,o=this,n=null
if(e instanceof C.OX){w=e.b
v=w.w.length!==0
if(v&&w.e.length!==0)u=w.e
else{t=o.d.z
u=t.length!==0&&v?t:w.d}v=A.m(12)
t=A.I(B.b1.j(0.22),B.q,1)
s=x.p
return A.p(n,A.A(A.a([D.bIX,B.av,A.D(A.v(A.a([A.d(u,n,2,B.a2,n,n,n,D.aO0,n,n,n),B.cX,A.d(B.d.gK(w.f.bS().u(0).split(".")),n,n,n,n,n,n,D.a6O,n,n,n)],s),B.F,n,B.e,B.j,0,B.p),1),B.ab,A.d("$"+B.k.aa(w.c,2),n,n,n,n,n,n,D.f1z,n,n,n)],s),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fn,n,t,v,n,n,B.n),n,n,n,B.cH,B.bk,n,n,n)}x.a.a(e)
v=A.m(16)
t=e.c
s=A.I(B.iC.j(t?0.35:0.5),B.q,1)
r=A.W(t?B.oC:B.cA,B.iC,n,n,n,18)
q=A.d(e.b,n,2,B.a2,n,n,n,D.aO0,n,n,n)
p=x.p
p=A.a([r,B.av,A.D(A.v(A.a([q,B.cX,A.d(t?"Active help round":B.d.gK(e.a.bS().u(0).split(".")),n,n,n,n,n,n,D.a6O,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
if(o.ch&&!t&&e.d.length!==0&&o.cx!=null)p.push(A.bK(!1,D.fbw,n,n,!0,n,n,new C.dlc(o,d,e),n,A.fv(n,n,n,n,n,n,n,n,n,n,n,B.iR,n,n,n,B.au,n,B.fo,n,n,n,n,n,B.km,n,n)))
else p.push(A.d(t?"PENDING":"MISSED",n,n,n,n,n,n,D.eWe,n,n,n))
return A.p(n,A.A(p,B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(B.fn,n,s,v,n,n,B.n),n,n,n,B.cH,B.bk,n,n,n)},
gdc(){return this.f}}
C.on.prototype={
B(d){var w=null,v=A.m(26),u=A.I(B.b1.j(0.4),B.q,1.3),t=A.a([new A.ac(0,B.G,B.b1.j(0.22),B.J,28)],x.V)
return A.p(w,A.b3(new A.C(B.XX,this.c,w),w,w,new C.Pg(0.85,this.d,0,w),B.au),B.f,w,w,new A.o(B.bX,w,u,v,t,w,B.n),w,w,w,F.xj,w,w,w,w)}}
C.bf9.prototype={
gkn(d){return this.b},
gda(d){return this.c}}
C.azO.prototype={
T(){var w=$.aw()
return new C.azP(new A.ar(B.as,w),new A.ar(B.as,w),A.a([],x.i))}}
C.azP.prototype={
gavt(){var w,v=this.d
if(v===$){w=this.a.d
v=this.d=new A.ar(new A.bb(w,B.b3,B.aN),$.aw())}return v},
gb_j(){var w,v=this.a.c
v=A.a([new A.Fp(v.c,v.d)],x.S)
w=this.a.c.gEX()
B.d.v(v,new A.K(w,new C.ddG(),A.U(w).k("K<1,+email,name(n,n)>")))
w=x.K
v=A.B(new A.a2(v,new C.ddH(this),w),w.k("J.E"))
return v},
q(){var w=this,v=w.gavt(),u=v.S$=$.aw()
v.P$=0
v=w.e
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.a2()},
c2z(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.e.a.a,k=A.af("\\D",!0,!1,!1,!1),j=A.aK(l,k,"")
l=m.gavt()
k=B.a.fz(B.a.i(l.a.a),A.af("\\s+",!0,!1,!1,!1))
if(new A.a2(k,new C.ddI(),A.U(k).k("a2<1>")).gM(0)<2){m.m(new C.ddJ(m))
return}if(j.length<7){m.m(new C.ddK(m))
return}if(m.r.length===0){m.m(new C.ddL(m))
return}k=m.f
if(B.a.i(k.a.a).length<5){m.m(new C.ddM(m))
return}w=m.gb_j()
v=m.c
v.toString
l=B.a.i(l.a.a)
u=m.r
k=B.a.i(k.a.a)
t=A.a([],x.A)
for(s=m.x,r=s.length,q=x.N,p=0;p<s.length;s.length===r||(0,A.L)(s),++p){o=s[p]
n=o.a
if(n>=0&&n<w.length){n=w[n]
t.push(A.F(["relation",o.b,"name",n.b,"email",n.a],q,q))}}A.a6(v,!1).O(new C.bf9(l,j,u,k,t))},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gb_j(),a0=new C.ddY(),a1=f.a.c
a1=C.aNa(B.vu,"The group owner, "+a1.d+", will see this and has to approve you.","Ask to join "+a1.e)
w=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.gavt(),e,e,e,e,e,2,a0.$1("Full name *"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.ku,e,e,e,e)
v=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.e,e,e,e,e,e,2,a0.$1("Phone number *"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,B.jm,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
u=f.r
if(u.length===0)u=e
t=a0.$1("State you live in *")
s=x.t
r=A.a([],s)
for(q=x.Q,p=0;p<50;++p){o=B.jY[p]
r.push(new A.eR(o,new A.x(o,e,e,e,e,e,e,e,e,e,e,e),B.f1,e,q))}n=x.N
m=x.p
r=A.a([a1,B.aA,w,B.S,v,B.S,A.nq(t,B.fn,u,!0,r,e,new C.ddS(f),B.dl,e,n),B.S,A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),f.f,e,e,e,e,e,2,a0.$1("Home address * (street, city)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,e,e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.ku,e,e,e,e),B.aP,D.fhC,B.at,D.fkp,B.P],m)
if(d.length===0)r.push(D.fdh)
for(a1=f.x,w=x.G,v=x.c,u=x.u,l=0;l<a1.length;++l){t=a1[l]
k=a0.$1("Who")
j=A.a([],s)
for(p=0;p<6;++p){i=D.dej[p]
j.push(new A.eR(i,new A.x(C.hdk(i),e,e,e,e,e,e,e,e,e,e,e),B.f1,e,q))}t=A.nq(k,B.fn,t.b,!0,j,e,new C.ddT(f,l),B.rz,e,n)
k=a1[l].a
k=k<d.length?k:e
j=a0.$1("Person in group")
h=A.a([],u)
for(g=0;g<d.length;++g)h.push(new A.eR(g,new A.x(d[g].b,e,e,e,e,e,e,B.a2,e,e,e,e),B.f1,e,v))
r.push(new A.C(B.cH,new A.cm(B.aO,B.e,B.j,B.m,e,B.p,e,0,A.a([new A.a7(108,e,t,e),B.ab,new A.bD(1,B.bi,A.nq(j,B.fn,k,!0,h,e,new C.ddU(f,l),B.rz,e,w),e),A.aH(e,e,e,e,B.Nl,e,e,e,new C.ddV(f,l),e,e,e,e,e,e)],m),e),e))}if(d.length!==0)r.push(new A.bH(B.a3,e,e,A.hc(D.bI6,D.f9r,new C.ddW(f),e),e))
a1=f.w
if(a1!=null)r.push(new A.C(B.ia,A.d(a1,e,e,e,e,e,e,D.f5E,e,e,e),e))
r.push(B.ac)
r.push(A.dq(B.a_Q,D.fgj,f.gc2y(),A.bk(B.b1,e,e,e,B.w,B.o7,e,e,new A.b7(A.m(16),B.Y),e,e,e)))
r.push(A.bK(!1,B.de,e,e,!0,e,e,new C.ddX(a2),e,e))
return A.cd(A.v(r,B.aj,e,B.e,B.j,0,B.p),B.r,e,B.y,e,e,e,e,B.ah)}}
C.aK1.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aK2.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aKC.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
var z=a.updateTypes(["ay<~>()","on(Y,~(~()))","on(Y,m1)","OX(pD)","Jv(t7)","H(w8,w8)","aaD(Y,H)","~(lT)","~(C2)","aj<oZ<C2>>(Y)","r(w8)","on(Y)","~()"])
C.c3X.prototype={
$1(d){return d.a===this.a},
$S:123}
C.c3Z.prototype={
$1(d){return d.c===this.a},
$S:123}
C.c3Y.prototype={
$1(d){var w=this.a
return d.alm(w)&&d.c!==w},
$S:123}
C.c4c.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:392}
C.c3T.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:392}
C.c40.prototype={
$1(d){return d.a===this.a},
$S:123}
C.c41.prototype={
$1(d){return d.e===this.a},
$S:123}
C.c45.prototype={
$1(d){return d.c===this.a},
$S:123}
C.c4a.prototype={
$1(d){return d.aEG(this.a)},
$S:123}
C.c43.prototype={
$1(d){var w=this.a
return d.alm(w)&&d.c!==w},
$S:123}
C.c4_.prototype={
$1(d){return d.e===this.a},
$S:123}
C.c3U.prototype={
$1(d){return d.a},
$S:348}
C.c3S.prototype={
$1(d){return d.a===this.a},
$S:123}
C.c48.prototype={
$1(d){return d.a===this.a},
$S:180}
C.c3V.prototype={
$1(d){return d.a===this.a&&d.e==="pending"},
$S:180}
C.c46.prototype={
$1(d){return d.a===this.a},
$S:180}
C.c47.prototype={
$1(d){return d.a===this.a},
$S:180}
C.f8O.prototype={
$1(d){var w,v,u,t
if(d.b!==B.rg)return!1
w=d.d
if(B.a.i(w).toLowerCase()===this.a)return!0
v=this.b
u=v.length!==0
if(u&&d.x===v)return!0
if(u){t=this.c.aki(w)
return t!=null&&B.a.i(t.toLowerCase())===v}return!1},
$S:210}
C.f8N.prototype={
$2(d,e){return d+e.c},
$S:146}
C.fdP.prototype={
$1(d){return new C.OX(d,d.f)},
$S:z+3}
C.fdQ.prototype={
$1(d){return new C.Jv(d.e,!1,d.a,d.f)},
$S:z+4}
C.fdR.prototype={
$2(d,e){return e.a.aL(0,d.a)},
$S:z+5}
C.dI7.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hV()},
$S:12}
C.dHY.prototype={
$0(){var w=this,v=w.a
v.w=w.b
v.x=w.c
v.z=w.d},
$S:0}
C.dHX.prototype={
$1(d){var w=null,v=A.m(22),u=B.b1.j(0.4),t=A.d("The owner of this group, ${found.ownerName}, has to approve you before you can enter. You will find the group under YOU JOINED as soon as you are approved.",w,w,w,w,w,w,B.zl,w,w,w)
return A.ej(A.a([A.bK(!1,B.Ti,w,w,!0,w,w,new C.dHW(d),w,w)],x.p),w,w,B.fn,t,w,w,w,new A.b7(v,new A.aA(u,1,B.q,-1)),D.fkw,w)},
$S:19}
C.dHW.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dI1.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.d
t===$&&A.c()
t=t.x
t===$&&A.c()
t=B.cr.av(0,t)
w=u.e
w===$&&A.c()
w=w.x
w===$&&A.c()
u=u.f
u===$&&A.c()
u=u.x
u===$&&A.c()
return A.b3(v,v,v,new C.ac0(t,w,u,v),B.f0)},
$S:67}
C.dI3.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.dI2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hv(u.b,new C.ape(s.c,s.d,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hV(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dI4.prototype={
$1(d){var w,v=this.a,u=d.b,t=u.gwq(),s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b4c(d.a,C.h8z(u.gamg().length,"",u,new C.dI0(v,this.b,d),w,s,"Owner \xb7 "+t+"/100 seats"))},
$S:743}
C.dI0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hv(u.b,new C.HJ(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hV(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dI5.prototype={
$0(){return this.a.I(x.q).f.R(D.ePm)},
$S:0}
C.dI6.prototype={
$1(d){var w,v=this.a,u=J.ad(v.w),t=d.b,s=v.e
s===$&&A.c()
w=v.f
w===$&&A.c()
return v.b4c(d.a+u,C.h8z(0,"",t,new C.dI_(v,this.b,d),w,s,"Member \xb7 Owner "+t.d))},
$S:743}
C.dI_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.hv(u.b,new C.HJ(u.c.b.a,s.c,s.d,s.e,null),!1,null,x.X),$async$$0)
case 2:w=3
return A.b(t.hV(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dHZ.prototype={
$2(d,e){var w,v=this.a.r
v===$&&A.c()
v=v.x
v===$&&A.c()
w=B.cr.av(0,B.k.D(v*1.4-this.b*0.08,0,1))
return A.db(A.dW(this.c,new A.u(0,(1-w)*18)),w)},
$S:216}
C.e6x.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e6w.prototype={
$1(d){var w=A.a([d.b,d.e,d.d,d.c,d.a],x.s),v=d.r,u=A.U(v).k("K<1,n>")
B.d.v(w,new A.K(v,new C.e6u(),u))
B.d.v(w,new A.K(v,new C.e6v(),u))
return B.a.t(B.d.aI(w," ").toLowerCase(),this.a)},
$S:123}
C.e6u.prototype={
$1(d){return d.b},
$S:348}
C.e6v.prototype={
$1(d){return d.a},
$S:348}
C.e6t.prototype={
$1(d){var w=null,v=this.a,u=v.b
v=A.d('Permanently delete "'+(u.length===0?v.e:u)+'" ('+v.e+") owned by "+v.d+". This cannot be undone.",w,w,w,w,w,w,B.hB,w,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.e6r(d),w,w),A.bJ(B.w8,new C.e6s(d),A.bk(B.bI,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fn,v,w,w,w,w,D.ftq,w)},
$S:19}
C.e6r.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e6s.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e6C.prototype={
$2(d,e){var w=null,v=this.a,u=v.d
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.ac0(1,u,v,w),B.f0)},
$S:67}
C.e6D.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.e6E.prototype={
$0(){var w=this.a
w.m(new C.e6B(w))},
$S:0}
C.e6B.prototype={
$0(){var w=this.a,v=w.w
w.w=!v
if(v){w.f.bN(0,B.c3)
w.x=""}},
$S:0}
C.e6F.prototype={
$1(d){var w=this.a
return w.m(new C.e6A(w,d))},
$S:2}
C.e6A.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e6G.prototype={
$2(d,e){var w=J.q(this.b,e),v=this.a
return new C.aaD(w,new C.e6y(v,w),new C.e6z(v,w),null)},
$S:z+6}
C.e6y.prototype={
$0(){return this.a.ZO(this.b)},
$S:0}
C.e6z.prototype={
$0(){return this.a.Nt(this.b)},
$S:0}
C.daH.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.e.x
o===$&&A.c()
w=A.m(14)
v=A.m(14)
u=p.r
t=u?B.K:B.b1.j(0.92)
s=A.I(B.b1.j(u?0.55+o*0.35:0.9),B.q,1.4)
o=u?q:A.a([new A.ac(0,B.G,B.b1.j(0.25+o*0.25),B.J,16)],x.V)
r=u?B.b1:B.bX
r=A.W(p.d,r,q,q,q,18)
return A.aG(!1,B.a1,!0,q,A.aL(!1,w,!0,A.ez(A.A(A.a([r,B.ab,A.d(p.c,q,q,q,q,q,q,A.l(q,q,u?B.et:B.bX,q,q,q,q,q,q,q,q,13,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.m,q,B.bb,B.j,0,q,q),q,new A.o(t,q,s,v,o,q,B.n),46,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p.f,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)},
$S:132}
C.daX.prototype={
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
p=A.a([A.p(n,D.bKy,B.f,n,n,new A.o(B.b1.j(0.14),n,A.I(B.b1.j(0.55),B.q,1),n,A.a([new A.ac(0,B.G,B.b1.j(0.35),B.J,12)],r),n,B.a6),n,46,n,n,n,n,n,46),B.bf,A.D(A.v(A.a([A.d(m.c.e,n,n,n,n,n,n,D.eWP,n,n,n),B.bA,A.d(m.d,n,n,n,n,n,n,B.hp,n,n,n)],p),B.F,n,B.e,B.j,0,B.p),1)],p)
r=m.w
if(r>0){o=A.m(12)
p.push(A.p(n,A.d(""+r+" new",n,n,n,n,n,n,B.uw,n,n,n),B.f,n,n,new A.o(B.ay,n,n,o,n,n,B.n),n,n,n,B.jc,B.fJ,n,n,n))}else if(m.x.length!==0)p.push(D.e2J)
p.push(A.W(B.ex,B.b1.j(0.7),n,n,n,n))
return A.aG(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.ez(A.A(p,B.m,n,B.e,B.j,0,n,n),n,new A.o(n,n,s,u,q,new A.a8(B.ax,B.aC,B.x,t,n,n),B.n),n,B.bC,n),n,n,new C.Pg(0.35+l*0.4,!0,v,n),B.au),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.e,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ag)},
$S:132}
C.dHU.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.hV()},
$S:12}
C.dHI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dHw.prototype={
$1(d){return new A.Fp(d.a,d.b)},
$S:415}
C.dHG.prototype={
$1(d){var w=null,v=A.d(this.a.b+" will not be added to the group. They can ask again later.",w,w,w,w,w,w,B.hB,w,w,w)
return A.ej(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dHE(d),w,w),A.bJ(B.IR,new C.dHF(d),A.bk(B.ay,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,B.fn,v,w,w,w,w,D.fig,w)},
$S:19}
C.dHE.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dHF.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dHJ.prototype={
$0(){return this.a.Vi(this.b)},
$S:0}
C.dHK.prototype={
$0(){return this.a.Nn(this.b)},
$S:0}
C.dHL.prototype={
$2(d,e){return d+e.c},
$S:146}
C.dHM.prototype={
$0(){var w=this,v=w.a.c
v.toString
return C.hRb(v,w.b,w.c,w.d,w.e,w.f)},
$S:0}
C.dHH.prototype={
$1(d){return this.bir(d)},
bir(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.b
t.b9n(d)
w=2
return A.b(C.HO(t),$async$$1)
case 2:w=3
return A.b(u.a.hV(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:94}
C.dHO.prototype={
$2(d,e){var w=null,v=this.a,u=v.e
u===$&&A.c()
u=u.x
u===$&&A.c()
v=v.f
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(w,w,w,new C.ac0(1,u,v,w),B.f0)},
$S:67}
C.dHP.prototype={
$0(){return C.aMg(this.a,this.b.e)},
$S:0}
C.dHQ.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.dHR.prototype={
$0(){return this.a.CF(B.rg)},
$S:0}
C.dHS.prototype={
$0(){return this.a.CF(B.a3B)},
$S:0}
C.dHT.prototype={
$0(){var w=this.a
return w.m(new C.dHN(w,this.b))},
$S:0}
C.dHN.prototype={
$0(){return this.a.w=this.b.a},
$S:0}
C.dHz.prototype={
$0(){var w=this.b
return this.a.ZW(w.c,w.f,w.d,"Owner")},
$S:0}
C.dHA.prototype={
$1(d){var w=this.a,v=w.gtk()?new C.dHx(w,d):null
return w.b_p(this.b,d.b,d.a,"Member",d.c,v,new C.dHy(w,d))},
$S:1925}
C.dHy.prototype={
$0(){var w=this.b
return this.a.ZW(w.a,w.c,w.b,"Member")},
$S:0}
C.dHx.prototype={
$0(){var w=this.b
return this.a.Qn(w.b,w.a)},
$S:0}
C.dHB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.c
r.toString
t=u.b
w=2
return A.b(C.anD(r,t.gwq(),t.a,s.a.f,t.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dHC.prototype={
$0(){var w=this.a.c
w.toString
return C.aMg(w,this.b.e)},
$S:0}
C.dHD.prototype={
$2(d,e){return d+e.c},
$S:146}
C.dHV.prototype={
$0(){return A.iL(this.a,null)},
$S:0}
C.dbe.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.c,r=s?1+d*0.12:1,q=s?"Help mode active":"Activate help mode",p=s?B.b8.j(0.28+d*0.22):B.c.j(0.06),o=s?B.iR.j(0.85+d*0.15):B.b1.j(0.35)
o=A.I(o,B.q,s?2:1.1)
w=s?A.a([new A.ac(1+d*2,B.G,B.b8.j(0.45+d*0.4),B.J,16+d*14),new A.ac(0,B.G,B.iR.j(0.25+d*0.35),B.J,8+d*6)],x.V):u
v=s?B.iR:B.b1.j(0.85)
return A.aH(u,u,u,u,A.eb(B.A,A.p(u,A.W(B.mn,v,u,u,s?A.a([new A.cP(B.b8.j(0.95),B.J,10+d*8)],x.r):u,20),B.f,u,u,new A.o(p,u,o,u,w,u,B.a6),u,38,u,u,u,u,u,38),r,u,u),u,u,u,t.e,u,u,u,u,q,u)},
$S:147}
C.dbd.prototype={
$2(d,e){var w=this.a.d.x
w===$&&A.c()
return this.b.$1(w)},
$S:60}
C.df6.prototype={
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
q=A.a([A.av(A.d(m.c,n,n,n,n,n,n,A.l(n,n,v?B.et:B.c_,n,n,n,n,n,n,n,n,12,n,n,B.H,n,n,!0,n,0.6,n,n,n,n,n,n),n,n,n),n,n,n)],x.p)
v=m.w
if(v>0){p=A.m(11)
o=A.I(B.bX,B.q,1.5)
q.push(A.ao(n,A.p(n,A.d(""+v,n,n,n,n,n,n,B.uw,B.L,n,n),B.f,n,D.aYa,new A.o(B.ay,n,o,p,n,n,B.n),n,n,n,n,B.n6,n,n,n),n,n,n,6,-6,n))}return A.aG(!1,B.a1,!0,n,A.aL(!1,w,!0,A.b3(A.ez(new A.an(B.W,n,B.aa,B.f,q,n),n,new A.o(r,n,l,s,n,n,B.n),40,n,n),n,n,new C.Pg(u,!0,t,n),B.au),n,!0,n,n,n,n,n,n,n,n,n,n,n,m.r,n,n,n,n,n,n,n),B.f,B.K,0,n,n,n,n,n,B.ag)},
$S:132}
C.df4.prototype={
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
n.push(A.dW(A.p(i,i,B.f,i,i,new A.o(B.et.j(t),i,i,i,A.a([new A.ac(0,B.G,B.b1.j(0.45),B.J,10)],r),i,B.a6),i,j,i,i,i,i,i,j),new A.u(38*k,28*l)))}t=A.a([B.b1.j(0.55),B.b1.j(0.08),B.K],x.O)
r=A.a([new A.ac(0,B.G,B.b1.j(0.45),B.J,28)],r)
n.push(A.p(i,A.W(B.h8,B.et,i,i,A.a([new A.cP(B.b1.j(0.9),B.J,22)],x.r),46),B.f,i,i,new A.o(i,i,i,i,r,new A.bT(B.A,0.5,B.x,i,0,t,i,i),B.a6),i,78,i,i,i,i,i,78))
return A.b3(A.p(i,A.v(A.a([A.eb(B.A,new A.an(B.A,i,B.aa,B.r,n,i),0.85+p*0.25,i,i),B.S,D.f8k,B.P,D.fgP,B.aP,A.A(A.a([A.D(new C.BZ("Create group",B.hx,g,h.f,!1,i),1),B.av,A.D(new C.BZ("Join code",B.y9,g,h.r,!0,i),1)],o),B.m,i,B.e,B.j,0,i,i),B.S,new C.BZ("Scan invite QR",B.iU,g,h.w,!0,i)],o),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.bX,i,s,u,q,i,B.n),i,i,i,i,D.bqX,i,i,i),i,i,new C.Pg(0.55+w*0.35,!0,f,i),B.au)},
$S:67}
C.df5.prototype={
$2(d,e){var w,v=null,u=this.a,t=u.c.x
t===$&&A.c()
w=A.m(18)
return A.b3(A.p(v,u.d,B.f,v,v,new A.o(B.bX,v,A.I(B.b1.j(0.35),B.q,1),w,A.a([new A.ac(0,B.G,B.b1.j(0.12+t*0.1),B.J,16)],x.V),v,B.n),v,v,v,v,B.bC,v,v,v),v,v,new C.Pg(0.4+t*0.35,!1,0,v),B.au)},
$S:67}
C.df3.prototype={
$3(d,e,f){var w,v=e?-1:1,u=f?-1:1,t=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v)),s=d.a,r=d.b
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
this.b.aP(t,r)},
$S:568}
C.fjo.prototype={
$1(d){return new A.C(new A.Q(0,0,0,A.aI(d,B.eD,x.w).w.f.d),new A.e0(new C.fjn(this.a,this.b),null),null)},
$S:58}
C.fjn.prototype={
$2(d,e){var w=null,v=C.aNa(B.h8,"Pick your group code: 3 letters + 1\u20135 numbers (e.g. ABC123).","Create lightning group"),u=this.b,t=A.a([new C.bi9()],x.F),s=C.K2("ABC12345"),r=this.a,q=r.a,p=x.p
return new C.on(A.v(A.a([v,B.aP,A.aM(w,B.T,!0,w,!0,B.r,w,A.aN(),u,w,w,w,w,w,2,s.b9H(q.length===0?w:q),B.y,!0,w,!0,w,!1,w,B.ai,w,w,t,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new C.fjk(r,e),w,w,w,!1,w,w,!1,w,!0,w,B.a9,w,w,w,w,w,w,w,w,w,w,w,D.f_h,!0,B.a5,w,B.lX,w,w,w,w),B.P,D.fcp,B.bx,A.A(A.a([A.D(A.bK(!1,G.IN,w,w,!0,w,w,new C.fjl(d),w,w),1),B.ab,A.D(A.bJ(D.f8_,new C.fjm(r,u,e,d),A.bk(B.b1,w,w,w,B.bX,w,B.cf,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],p),B.m,w,B.e,B.j,0,w,w)],p),B.aj,w,B.e,B.Q,0,B.p),!0,w)},
$S:z+1}
C.fjk.prototype={
$1(d){var w=this.a
if(w.a.length!==0)this.b.$1(new C.fjj(w))},
$S:2}
C.fjj.prototype={
$0(){return this.a.a=""},
$S:0}
C.fjl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fjm.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a).toUpperCase()
if(!C.hg9(v)){w.c.$1(new C.fji(w.a))
return}A.a6(w.d,!1).O(v)},
$S:0}
C.fji.prototype={
$0(){this.a.a="Use exactly 3 letters + 1\u20135 numbers (e.g. ABC123)."},
$S:0}
C.fjI.prototype={
$1(d){var w,v,u,t=this,s=null,r=A.aI(d,B.eD,x.w).w,q=C.aNa(t.a,t.c,t.b),p=t.d,o=A.l(s,s,B.c,s,s,s,s,s,s,s,s,16,s,s,B.O,s,s,!0,s,t.f,s,s,s,s,s,s)
o=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),p,s,s,s,s,s,2,C.K2(t.r),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fjF(d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,o,!0,B.a5,s,B.lX,s,s,s,s)
w=A.D(A.bK(!1,G.IN,s,s,!0,s,s,new C.fjG(d),s,s),1)
v=A.bk(B.b1,s,s,s,B.bX,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)
u=x.p
return new A.C(new A.Q(0,0,0,r.f.d),new C.on(A.v(A.a([q,B.aP,o,B.bx,A.A(A.a([w,B.ab,A.D(A.bJ(A.d(t.w,s,s,s,s,s,s,B.cx,s,s,s),new C.fjH(p,d),v),2)],u),B.m,s,B.e,B.j,0,s,s)],u),B.aj,s,B.e,B.Q,0,B.p),!0,s),s)},
$S:58}
C.fjF.prototype={
$1(d){var w=B.a.i(d)
if(w.length!==0)A.a6(this.a,!1).O(w)},
$S:2}
C.fjG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fjH.prototype={
$0(){var w=B.a.i(this.a.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.fjE.prototype={
$1(d){return this.a&&this.b.t(0,d.b)},
$S:199}
C.fjB.prototype={
$1(d){return!this.a.$1(d)},
$S:199}
C.fjC.prototype={
$1(d){var w=this
return new A.C(new A.Q(0,0,0,A.aI(d,B.eD,x.w).w.f.d),new A.e0(new C.fjA(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y),null),null)},
$S:58}
C.fjA.prototype={
$2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.b,a2=B.a.i(a1.a.a).toLowerCase(),a3=d.c
if(a2.length===0)w=a3
else{v=A.U(a3).k("a2<1>")
w=A.B(new A.a2(a3,new C.fjs(a2),v),v.k("J.E"))}v=d.d
u=A.U(w).k("a2<1>")
t=A.B(new A.a2(w,new C.fjt(v),u),u.k("J.E"))
u=d.a
if(!B.d.b7(t,new C.fju(u)))u.a=t.length!==0?B.d.gK(t).b:""
s=x.p
r=A.a([],s)
q=d.e
if(q){p=u.b
o=A.p(a0,D.bNo,B.f,a0,a0,new A.o(B.b1.j(0.14),a0,A.I(B.b1.j(0.5),B.q,1),a0,A.a([new A.ac(0,B.G,B.b1.j(0.25),B.J,12)],x.V),a0,B.a6),a0,46,a0,a0,a0,a0,a0,46)
n=A.m(14)
m=p?B.b1.j(0.22):B.c.j(0.06)
l=A.I(p?B.b1:B.b1.j(0.35),B.q,1)
r.push(A.A(A.a([o,B.b4,A.aG(!1,B.a1,!0,a0,A.aL(!1,n,!0,A.p(a0,A.W(B.fa,p?B.et:B.b1,a0,a0,a0,a0),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,46,a0,a0,a0,a0,a0,46),a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fjv(u,a5),a0,a0,a0,a0,a0,a0,a0),B.f,B.K,0,a0,a0,a0,a0,a0,B.ag)],s),B.m,a0,B.e,B.j,0,a0,a0))}else r.push(C.aNa(B.vl,"Log what left the group case.","Record spending"))
if(q){p=A.a([B.at,D.foD,B.at,D.fnI],s)
o=d.f
if(o!=null&&B.a.i(o).length!==0){n=B.b8.j(0.12)
m=A.m(12)
l=A.I(B.b8.j(0.45),B.q,1)
B.d.v(p,A.a([B.S,A.p(a0,A.d("Help mode: "+B.a.i(o),a0,a0,a0,a0,a0,a0,M.a6B,B.L,a0,a0),B.f,a0,a0,new A.o(n,a0,l,m,a0,a0,B.n),a0,a0,a0,a0,B.bS,a0,a0,a0)],s))}B.d.v(r,p)}r.push(B.aA)
if(q){p=A.a([],s)
if(u.b)B.d.v(p,A.a([A.aM(a0,B.T,!0,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.K2("Search member\u2026"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,new C.fjw(a5),a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dl,!0,B.a5,a0,B.am,a0,a0,a0,a0),B.S],s))
p.push(A.d("WHO CONTRIBUTED",a0,a0,a0,a0,a0,a0,A.l(a0,a0,B.b1.j(0.85),a0,a0,a0,a0,a0,a0,a0,a0,11,a0,a0,B.H,a0,a0,!0,a0,1.4,a0,a0,a0,a0,a0,a0),a0,a0,a0))
p.push(B.P)
if(a3.length===0)p.push(D.fuc)
else if(d.r)p.push(D.feN)
else if(w.length===0)p.push(D.fbN)
else{a1=A.a([],s)
for(o=w.length,k=0;k<w.length;w.length===o||(0,A.L)(w),++k){j=w[k]
n=j.b
m=v.$1(j)?n+" \u2713 paid":n
l=u.a
i=v.$1(j)?a0:new C.fjx(u,a5,j)
h=B.d_.j(0.18)
g=B.c.j(0.06)
f=u.a===n
e=f?B.bX:B.ad
f=f?B.b1:B.b1.j(0.25)
a1.push(A.jI(a0,g,h,new A.x(m,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),new A.G(!0,e,a0,a0,a0,a0,a0,B.O,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),i,l===n,B.b1,a0,new A.aA(f,1,B.q,-1),a0))}p.push(new A.cU(D.aYn,A.cd(A.bZ(B.bB,a1,B.bs,8,8),B.r,a0,B.y,a0,a0,a0,a0,B.ah),a0))}B.d.v(r,p)}else B.d.v(r,A.a([A.aM(a0,B.T,!1,a0,!0,B.r,a0,A.aN(),d.w,a0,a0,a0,a0,a0,2,C.K2("What was spent"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,a0,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.dl,!0,B.a5,a0,B.am,a0,a0,a0,a0)],s))
r.push(B.ac)
a1=d.x
r.push(A.aM(a0,B.T,!q,a0,!0,B.r,a0,A.aN(),a1,a0,a0,a0,a0,a0,2,C.K2("Amount ($)"),B.y,!0,a0,!0,a0,!1,a0,B.ai,a0,a0,a0,a0,a0,B.dU,a0,a0,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,B.a9,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.SK,!0,B.a5,a0,B.am,a0,a0,a0,a0))
r.push(B.bx)
r.push(A.A(A.a([A.D(A.bK(!1,G.IN,a0,a0,!0,a0,a0,new C.fjy(a4),a0,a0),1),B.ab,A.D(A.bJ(D.ftK,new C.fjz(u,a1,q,d.w,a3,d.y,a4),A.bk(B.b1,a0,a0,a0,B.bX,a0,B.cf,a0,new A.b7(A.m(14),B.Y),a0,a0,a0)),2)],s),B.m,a0,B.e,B.j,0,a0,a0))
return new C.on(A.v(r,B.aj,a0,B.e,B.Q,0,B.p),!0,a0)},
$S:z+1}
C.fjs.prototype={
$1(d){var w=this.a
return B.a.t(d.b.toLowerCase(),w)||B.a.t(d.a.toLowerCase(),w)},
$S:199}
C.fjt.prototype={
$1(d){return!this.a.$1(d)},
$S:199}
C.fju.prototype={
$1(d){return d.b===this.a.a},
$S:199}
C.fjv.prototype={
$0(){return this.b.$1(new C.fjr(this.a))},
$S:0}
C.fjr.prototype={
$0(){var w=this.a
return w.b=!w.b},
$S:0}
C.fjw.prototype={
$1(d){return this.a.$1(new C.fjq())},
$S:2}
C.fjq.prototype={
$0(){},
$S:0}
C.fjx.prototype={
$1(d){return this.b.$1(new C.fjp(this.a,this.c))},
$S:9}
C.fjp.prototype={
$0(){return this.a.a=this.b.b},
$S:0}
C.fjy.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fjz.prototype={
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
A.a6(t.r,!1).O(new C.bfE(u,s,""))},
$S:0}
C.fjD.prototype={
$0(){var w=this.a,v=w.S$=$.aw()
w.P$=0
w=this.b
w.S$=v
w.P$=0
w=this.c
w.S$=v
w.P$=0},
$S:11}
C.fj8.prototype={
$1(d){var w=null,v=x.p
return new A.C(F.xj,new C.on(A.v(A.a([A.av(A.p(w,D.bJu,B.f,w,w,new A.o(B.fY.j(0.15),w,A.I(B.fY.j(0.55),B.q,1),w,A.a([new A.ac(0,B.G,B.fY.j(0.25),B.J,16)],x.V),w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aA,D.fjM,B.P,A.d(this.a,w,w,w,w,w,w,D.f2z,B.L,w,w),B.at,A.d(this.b,w,w,w,w,w,w,B.hp,B.L,w,w),B.S,D.fdp,B.bx,A.A(A.a([A.D(A.bK(!1,D.fk8,w,w,!0,w,w,new C.fj6(d),w,w),1),B.ab,A.D(A.bJ(D.fie,new C.fj7(d),A.bk(B.fY,w,w,w,B.c,w,B.cf,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.aj,w,B.e,B.Q,0,B.p),!0,w),w)},
$S:58}
C.fj6.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fj7.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fj0.prototype={
$2(d,e){return d+e.c},
$S:146}
C.fj1.prototype={
$1(d){return d.w===this.a.ax},
$S:210}
C.fj2.prototype={
$1(d){var w=this
return new A.C(new A.Q(12,0,12,A.aI(d,B.eD,x.w).w.f.d),A.oH(new C.fj_(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),!0,0.72,0.92,0.45,!1,null),null)},
$S:58}
C.fj_.prototype={
$2(d,e){var w=this,v={}
v.a=D.a8h
return new A.e0(new C.fiZ(v,e,w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at),null)},
$S:1927}
C.fiZ.prototype={
$2(d,e){var w=this,v=w.a,u=v.a,t=w.ay
t=t==null?null:new C.fiX(t,d,e)
return new C.on(new C.bgz(w.b,w.c,w.d,w.e,w.f,w.r,w.w,u,w.ax,new C.fiY(v,e),t,null),!1,null)},
$S:z+1}
C.fiY.prototype={
$1(d){return this.b.$1(new C.fiV(this.a,d))},
$S:z+8}
C.fiV.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fiX.prototype={
$1(d){return this.bj2(d)},
bj2(d){var w=0,v=A.j(x.H),u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.a.$1(d),$async$$1)
case 2:if(u.b.e!=null)u.c.$1(new C.fiW())
return A.h(null,v)}})
return A.i($async$$1,v)},
$S:94}
C.fiW.prototype={
$0(){},
$S:0}
C.dld.prototype={
$2(d,e){return d+e.c},
$S:146}
C.dle.prototype={
$1(d){return d.w===this.a.d.ax},
$S:210}
C.dlf.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a.x.x
r===$&&A.c()
w=B.b1.j(0.12+r*0.08)
v=A.I(B.b1.j(0.45+r*0.25),B.q,1)
r=A.a([new A.ac(0,B.G,B.b1.j(0.2+r*0.15),B.J,18)],x.V)
u=this.b
t=u?B.oG:B.h8
return A.av(A.p(s,A.W(t,u?B.iC:B.b1,s,s,s,32),B.f,s,s,new A.o(w,s,v,s,r,s,B.a6),s,64,s,s,s,s,s,64),s,s,s)},
$S:224}
C.dlg.prototype={
$2(d,e){return d+e.c},
$S:146}
C.dlh.prototype={
$1(d){var w=this.a
return A.a([w.atD("All",D.a8h),w.atD("Contributions",D.aTa),w.atD("Missed",D.aTb)],x.T)},
$S:z+9}
C.dli.prototype={
$1(d){return this.a.bVG(this.b,d)},
$S:z+10}
C.dlj.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dlc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.c
w=4
return A.b(C.hR3(u.b,t.b),$async$$0)
case 4:w=e===!0?2:3
break
case 2:w=5
return A.b(u.a.cx.$1(t.d),$async$$0)
case 5:case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fiC.prototype={
$1(d){var w=null,v=x.p
return new A.C(F.xj,new C.on(A.v(A.a([A.av(A.p(w,D.bNS,B.f,w,w,new A.o(B.b8.j(0.14),w,A.I(B.b8.j(0.55),B.q,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aA,D.f8F,B.S,A.d(this.a,w,w,w,w,w,w,D.eWw,B.L,w,w),B.S,D.fc9,B.bx,A.A(A.a([A.D(A.bK(!1,D.f7h,w,w,!0,w,w,new C.fiA(d),w,w),1),B.ab,A.D(A.bJ(D.f9z,new C.fiB(d),A.bk(B.b8,w,w,w,B.bX,w,B.cf,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w)],v),B.aj,w,B.e,B.Q,0,B.p),!1,w),w)},
$S:58}
C.fiA.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fiB.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fiF.prototype={
$1(d){var w=null,v=x.p,u=A.a([A.av(A.p(w,D.bNG,B.f,w,w,new A.o(B.b1.j(0.14),w,A.I(B.b1.j(0.55),B.q,1),w,w,w,B.a6),w,56,w,w,w,w,w,56),w,w,w),B.aA,D.ftj,B.ac,C.fUg("Member",this.a),C.fUg("Amount","$"+B.k.aa(this.b,2))],v),t=this.c
if(t!=null&&B.a.i(t).length!==0)u.push(C.fUg("Help for",B.a.i(t)))
u.push(B.S)
u.push(D.fjJ)
u.push(B.bx)
u.push(A.A(A.a([A.D(A.bK(!1,D.fms,w,w,!0,w,w,new C.fiD(d),w,w),1),B.ab,A.D(A.bJ(D.fsj,new C.fiE(d),A.bk(B.b1,w,w,w,B.bX,w,B.cf,w,new A.b7(A.m(14),B.Y),w,w,w)),2)],v),B.m,w,B.e,B.j,0,w,w))
return new A.C(F.xj,new C.on(A.v(u,B.aj,w,B.e,B.Q,0,B.p),!0,w),w)},
$S:58}
C.fiD.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fiE.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fiR.prototype={
$0(){var w=this,v=w.a,u=w.b.a.a,t=w.c.a.a,s=w.d.a.a,r=w.e.a.a
v.z=B.a.i(u)
v.Q=B.a.i(t)
v.as=B.a.i(s)
v.at=B.a.i(r)},
$S:0}
C.fiS.prototype={
$1(d){var w=this
return new A.C(new A.Q(0,0,0,A.aI(d,B.eD,x.w).w.f.d),A.oH(new C.fiQ(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,d),!0,0.82,0.94,0.5,!1,null),null)},
$S:58}
C.fiQ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.b,q=C.hbw(r,t.a),p=A.d(r?"Help mode is live":"Set up group help mode",s,s,s,s,s,s,B.du,B.L,s,s),o=x.p
p=A.a([q,B.P,p,B.an,A.d(r?"Members see the green icon and your payment details. Turn off when the round ends.":"Fill in where members send money. These details stay saved for next time.",s,s,s,s,s,s,D.aOv,B.L,s,s),B.aP,A.d("HELP DETAILS",s,s,s,s,s,s,A.l(s,s,B.b8.j(0.9),s,s,s,s,s,s,s,s,11,s,s,B.H,s,s,!0,s,1.4,s,s,s,s,s,s),s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.c,s,s,s,s,s,2,C.K2("What are you collecting for?"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,2,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dl,!0,B.a5,s,B.am,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.d,s,s,s,s,s,2,C.K2("Cash App"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dl,!0,B.a5,s,B.am,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.e,s,s,s,s,s,2,C.K2("Zelle"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dl,!0,B.a5,s,B.am,s,s,s,s),B.S,A.aM(s,B.T,!1,s,!0,B.r,s,A.aN(),t.f,s,s,s,s,s,2,C.K2("Phone number \u2014 questions or confirm payment"),B.y,!0,s,!0,s,!1,s,B.ai,s,s,B.a1D,s,s,B.jm,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,B.dl,!0,B.a5,s,B.am,s,s,s,s),B.bx],o)
q=t.r
w=t.w
v=t.x
if(r){r=A.bJ(D.feO,new C.fiL(q,w,v),A.bk(B.fY,s,s,s,B.c,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s))
u=B.b8.j(0.55)
B.d.v(p,A.a([r,B.P,A.dV(D.feK,new C.fiM(q,v,w),A.de(s,s,s,s,s,s,s,s,s,B.iR,s,s,B.cf,s,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.q,-1),s,s,s,s))],o))}else{r=B.b1.j(0.45)
B.d.v(p,A.a([A.dV(D.f7s,new C.fiN(q,v,w),A.de(s,s,s,s,s,s,s,s,s,B.b1,s,s,B.cf,s,new A.b7(A.m(14),B.Y),new A.aA(r,1,B.q,-1),s,s,s,s)),B.P,A.bJ(D.frD,new C.fiO(q,w,v),A.bk(B.b8,s,s,s,B.bX,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s))],o))}p.push(B.P)
p.push(A.bK(!1,G.IN,s,s,!0,s,s,new C.fiP(v),s,s))
return new C.on(A.cB(p,e,s,s,s,B.ah,!1),!0,s)},
$S:z+2}
C.fiL.prototype={
$0(){var w,v,u
this.a.$0()
w=this.b
v=B.a.i(w.ax)
u=w.z
if(v.length!==0&&!B.d.t(w.CW,v)){w.c__(v,u)
B.d.L(w.CW,v)}w.y=!1
w.ax=""
w.ay=null
A.a6(this.c,!1).O(w)},
$S:0}
C.fiM.prototype={
$0(){this.a.$0()
A.a6(this.b,!1).O(this.c)},
$S:0}
C.fiN.prototype={
$0(){this.a.$0()
A.a6(this.b,!1).O(this.c)},
$S:0}
C.fiO.prototype={
$0(){var w,v=this
v.a.$0()
w=v.b
if(B.a.i(w.z).length===0){v.c.I(x.q).f.R(D.eNs)
return}w.cB4()
A.a6(v.c,!1).O(w)},
$S:0}
C.fiP.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fiT.prototype={
$0(){var w=this,v=w.a,u=v.S$=$.aw()
v.P$=0
v=w.b
v.S$=u
v.P$=0
v=w.c
v.S$=u
v.P$=0
v=w.d
v.S$=u
v.P$=0},
$S:11}
C.fiK.prototype={
$1(d){return new A.C(F.xj,A.oH(new C.fiJ(this.a,this.b,d),!0,0.72,0.9,0.45,!1,null),null)},
$S:58}
C.fiJ.prototype={
$2(d,e){var w=this,v=null,u=A.a([C.hbw(!0,w.a),B.S,D.fu5,B.an,D.fjf,B.aP],x.p),t=w.b,s=B.a.i(t.z)
if(s.length!==0)u.push(C.faN(w.c,B.lb,"COLLECTING FOR",v,v,s))
s=B.a.i(t.Q)
if(s.length!==0)u.push(C.faN(w.c,B.hK,"CASH APP",new C.fiG(t),"Open Cash App",s))
s=B.a.i(t.as)
if(s.length!==0)u.push(C.faN(w.c,B.jW,"ZELLE",v,v,s))
s=t.at
if(B.a.i(s).length!==0)u.push(C.faN(w.c,B.vv,"PHONE NUMBER",new C.fiH(t),"Call",A.n0(s)))
if(B.a.i(t.z).length===0&&B.a.i(t.Q).length===0&&B.a.i(t.as).length===0&&B.a.i(t.at).length===0)u.push(D.e2V)
u.push(B.ac)
u.push(A.bK(!1,D.aPT,v,v,!0,v,v,new C.fiI(w.c),v,v))
return new C.on(A.cB(u,e,v,v,v,B.ah,!1),!1,v)},
$S:z+2}
C.fiG.prototype={
$0(){return C.byx(this.a.Q)},
$S:0}
C.fiH.prototype={
$0(){return C.bxx(this.a.at)},
$S:0}
C.fiI.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.faP.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a.x
q===$&&A.c()
w=this.b
v=w?B.b8.j(0.22+q*0.18):B.b1.j(0.14)
u=w?B.iR.j(0.85+q*0.15):B.b1.j(0.5)
u=A.I(u,B.q,w?2:1)
t=w?A.a([new A.ac(1+q,B.G,B.b8.j(0.4+q*0.35),B.J,18+q*10)],x.V):r
s=w?B.iR:B.b1
return A.av(A.p(r,A.W(B.mn,s,r,r,w?A.a([new A.cP(B.b8.j(0.95),B.J,12+q*8)],x.r):r,r),B.f,r,r,new A.o(v,r,u,r,t,r,B.a6),r,56,r,r,r,r,r,56),r,r,r)},
$S:224}
C.faO.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.fI(new A.fC(t.a)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Copied "+t.c,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fja.prototype={
$1(d){return new A.Fp(d.a,d.b)},
$S:415}
C.fjb.prototype={
$1(d){var w=this.a
if(B.a.i(w.d).toLowerCase()!==B.a.i(d.b).toLowerCase()){w=w.x
w=w.length!==0&&w===B.a.i(d.a.toLowerCase())}else w=!0
return w},
$S:199}
C.fjc.prototype={
$2(d,e){return d+e.c},
$S:146}
C.fjd.prototype={
$1(a1){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="x in all \xb7 missed ",j=A.aI(a1,l,x.w).w,i=m.b,h=i.length,g=m.c.length,f=B.k.aa(m.d,2),e=m.e,d=e?" \xb7 round is open":"",a0=x.p
d=A.a([C.aNa(B.mn,""+h+" of "+g+" gave \xb7 total $"+f+d,m.a),B.ac,A.bw(A.m(8),A.lY(B.dp,l,l,10,l,m.f,D.aVc),B.aq),B.aP,A.d("GAVE ("+i.length+")",l,l,l,l,l,l,D.eYR,l,l,l),B.an],a0)
if(i.length===0)d.push(D.faS)
for(h=i.length,g=m.r,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){v=i[w]
f=new A.aW(12,12)
u=B.b8.j(0.07)
t=new A.aW(12,12)
s=new A.aA(B.b8.j(0.3),1,B.q,-1)
r=v.a
q=r.b
p=v.b
o=p.f.bS()
r=r.a
d.push(A.aL(!1,new A.bq(f,f,f,f),!0,A.p(l,new A.cm(B.aO,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bLc,B.av,new A.bD(1,B.bi,A.v(A.a([new A.x(q,l,B.ho,l,l,l,l,l,l,l,l,l),new A.x(""+A.bG(o)+"/"+A.bQ(o)+"/"+A.by(o)+" \xb7 gave "+g.an1(q,r)+k+g.a4t(q,r)+" \xb7 tap for receipt",l,B.CT,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l),new A.x("$"+B.k.aa(p.c,2),l,O.T1,l,l,l,l,l,l,l,l,l)],a0),l),B.f,l,l,new A.o(u,l,new A.bP(s,s,s,s),new A.bq(t,t,t,t),l,l,B.n),l,l,l,B.eO,B.bS,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.fj9(a1,g,v),l,l,l,l,l,l,l))}d.push(B.ac)
i=m.w
h=i.length
d.push(A.d(e?"NOT YET ("+h+")":"DID NOT GIVE ("+h+")",l,l,l,l,l,l,D.eWm,l,l,l))
d.push(B.an)
if(i.length===0)d.push(D.fhi)
for(h=i.length,w=0;w<i.length;i.length===h||(0,A.L)(i),++w){n=i[w]
f=B.iC.j(0.07)
e=new A.aW(12,12)
s=new A.aA(B.iC.j(0.3),1,B.q,-1)
u=n.b
t=n.a
d.push(A.p(l,new A.cm(B.aO,B.e,B.j,B.m,l,B.p,l,0,A.a([D.bG4,B.av,new A.bD(1,B.bi,A.v(A.a([new A.x(u,l,B.ho,l,l,l,l,l,l,l,l,l),new A.x("gave "+g.an1(u,t)+k+g.a4t(u,t),l,B.CT,l,l,l,l,l,l,l,l,l)],a0),B.F,l,B.e,B.j,0,B.p),l)],a0),l),B.f,l,l,new A.o(f,l,new A.bP(s,s,s,s),new A.bq(e,e,e,e),l,l,B.n),l,l,l,B.eO,B.bS,l,l,l))}return new A.cU(new A.aY(0,1/0,0,j.a.b*0.88),new C.on(A.cd(A.v(d,B.F,l,B.e,B.j,0,B.p),B.r,l,B.y,l,l,l,l,B.ah),!0,l),l)},
$S:1928}
C.fj9.prototype={
$0(){return C.hR9(this.a,this.b,this.c.b)},
$S:0}
C.fj5.prototype={
$2(d,e){var w=null
return new A.C(B.v7,A.A(A.a([new A.a7(96,w,A.d(d,w,w,w,w,w,w,B.CU,w,w,w),w),A.D(A.d(e,w,w,w,w,w,w,B.a6X,w,w,w),1)],x.p),B.F,w,B.e,B.j,0,w,w),w)},
$S:138}
C.fj4.prototype={
$1(d){var w=this,v=null,u=w.b,t=w.c,s=A.a([C.aNa(B.h9,w.a,"Receipt"),B.ac,u.$2("From",t.d),u.$2("For",w.d),u.$2("Amount","$"+B.k.aa(t.c,2)),u.$2("Date",w.e)],x.p),r=t.e
if(r.length!==0)s.push(u.$2("Note",r))
r=w.f
s.push(u.$2("Group",r.e+" \xb7 owner "+r.d))
t=t.r
s.push(u.$2("Recorded by",t.length===0?r.c:t))
s.push(B.ac)
s.push(A.dq(R.Bw,D.fpe,new C.fj3(w.r,d),A.bk(B.b1,v,v,v,B.w,B.za,v,v,v,v,v,v)))
return new C.on(A.v(s,B.F,v,B.e,B.Q,0,B.p),!0,v)},
$S:z+11}
C.fj3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.fI(new A.fC(u.a)),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.eNM)
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fiU.prototype={
$1(d){var w=null,v=x.w
return new A.C(new A.Q(0,0,0,A.aI(d,w,v).w.f.d),new A.cU(new A.aY(0,1/0,0,A.aI(d,w,v).w.a.b*0.92),new C.on(new C.azO(this.a,this.b,this.c,w),!0,w),w),w)},
$S:58}
C.ddG.prototype={
$1(d){return new A.Fp(d.a,d.b)},
$S:415}
C.ddH.prototype={
$1(d){return d.a!==B.a.i(this.a.a.e.toLowerCase())},
$S:199}
C.ddI.prototype={
$1(d){return d.length!==0},
$S:3}
C.ddJ.prototype={
$0(){return this.a.w="Write your first and last name."},
$S:0}
C.ddK.prototype={
$0(){return this.a.w="Your phone number is needed."},
$S:0}
C.ddL.prototype={
$0(){return this.a.w="Choose the state you live in."},
$S:0}
C.ddM.prototype={
$0(){return this.a.w="Your home address is needed."},
$S:0}
C.ddY.prototype={
$1(d){return C.K2(d)},
$S:272}
C.ddS.prototype={
$1(d){var w=this.a
return w.m(new C.ddR(w,d))},
$S:34}
C.ddR.prototype={
$0(){var w=this.b
if(w==null)w=""
return this.a.r=w},
$S:0}
C.ddT.prototype={
$1(d){var w=this.a
return w.m(new C.ddQ(w,this.b,d))},
$S:34}
C.ddQ.prototype={
$0(){var w=this.a.x,v=this.b,u=this.c
if(u==null)u="mother"
u=new A.add(w[v].a,u)
w[v]=u
return u},
$S:0}
C.ddU.prototype={
$1(d){var w=this.a
return w.m(new C.ddP(w,this.b,d))},
$S:259}
C.ddP.prototype={
$0(){var w=this.a.x,v=this.b,u=w[v],t=this.c
if(t==null)t=-1
u=new A.add(t,u.b)
w[v]=u
return u},
$S:0}
C.ddV.prototype={
$0(){var w=this.a
return w.m(new C.ddO(w,this.b))},
$S:0}
C.ddO.prototype={
$0(){return B.d.cA(this.a.x,this.b)},
$S:0}
C.ddW.prototype={
$0(){var w=this.a
return w.m(new C.ddN(w))},
$S:0}
C.ddN.prototype={
$0(){return this.a.x.push(new A.add(-1,"mother"))},
$S:0}
C.ddX.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0};(function aliases(){var w=C.aK1.prototype
w.bsZ=w.q
w=C.aK2.prototype
w.bt_=w.q
w=C.aKC.prototype
w.btB=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u
var u
w(u=C.aBD.prototype,"gbGu","zD",0)
w(u,"gbXw","XA",0)
w(u,"gc2x","Yx",0)
w(u=C.aBA.prototype,"gcaF","Px",0)
w(u,"gc2u","acz",0)
w(u,"gbJT","Wm",0)
v(C.aBC.prototype,"gc2v","c2w",7)
w(C.azP.prototype,"gc2y","c2z",12)})();(function inheritance(){var w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.hT,[C.c3X,C.c3Z,C.c3Y,C.c40,C.c41,C.c45,C.c4a,C.c43,C.c4_,C.c3U,C.c3S,C.c48,C.c3V,C.c46,C.c47,C.f8O,C.fdP,C.fdQ,C.dI7,C.dHX,C.dI4,C.dI6,C.e6w,C.e6u,C.e6v,C.e6t,C.e6F,C.dHU,C.dHw,C.dHG,C.dHH,C.dHA,C.dbe,C.df3,C.fjo,C.fjk,C.fjI,C.fjF,C.fjE,C.fjB,C.fjC,C.fjs,C.fjt,C.fju,C.fjw,C.fjx,C.fj8,C.fj1,C.fj2,C.fiY,C.fiX,C.dle,C.dlh,C.dli,C.fiC,C.fiF,C.fiS,C.fiK,C.fja,C.fjb,C.fjd,C.fj4,C.fiU,C.ddG,C.ddH,C.ddI,C.ddY,C.ddS,C.ddT,C.ddU])
v(A.ke,[C.c4c,C.c3T,C.f8N,C.fdR,C.dI1,C.dHZ,C.e6C,C.e6G,C.daH,C.daX,C.dHL,C.dHO,C.dHD,C.dbd,C.df6,C.df4,C.df5,C.fjn,C.fjA,C.fj0,C.fj_,C.fiZ,C.dld,C.dlf,C.dlg,C.fiQ,C.fiJ,C.faP,C.fjc,C.fj5])
u(C.C2,A.m4)
v(A.aC,[C.w8,C.bfE,C.bf9])
v(C.w8,[C.OX,C.Jv])
v(A.ag,[C.anC,C.ape,C.HJ,C.aBB,C.azO])
v(A.ah,[C.aK2,C.aKC,C.aK1,C.aBC,C.azP])
u(C.aBD,C.aK2)
v(A.j3,[C.dHY,C.dHW,C.dI3,C.dI2,C.dI0,C.dI5,C.dI_,C.e6x,C.e6r,C.e6s,C.e6D,C.e6E,C.e6B,C.e6A,C.e6y,C.e6z,C.dHI,C.dHE,C.dHF,C.dHJ,C.dHK,C.dHM,C.dHP,C.dHQ,C.dHR,C.dHS,C.dHT,C.dHN,C.dHz,C.dHy,C.dHx,C.dHB,C.dHC,C.dHV,C.fjj,C.fjl,C.fjm,C.fji,C.fjG,C.fjH,C.fjv,C.fjr,C.fjq,C.fjp,C.fjy,C.fjz,C.fjD,C.fj6,C.fj7,C.fiV,C.fiW,C.dlj,C.dlc,C.fiA,C.fiB,C.fiD,C.fiE,C.fiR,C.fiL,C.fiM,C.fiN,C.fiO,C.fiP,C.fiT,C.fiG,C.fiH,C.fiI,C.faO,C.fj9,C.fj3,C.ddJ,C.ddK,C.ddL,C.ddM,C.ddR,C.ddQ,C.ddP,C.ddV,C.ddO,C.ddW,C.ddN,C.ddX])
u(C.biv,C.aKC)
v(A.au,[C.aaD,C.BZ,C.azb,C.bfH,C.be6,C.bfG,C.bfD,C.bfF,C.bgz,C.on])
v(A.mH,[C.ac0,C.Pg])
u(C.aBA,C.aK1)
u(C.bi9,A.iO)
w(C.aK1,A.eU)
w(C.aK2,A.eU)
w(C.aKC,A.eU)})()
A.jT(b.typeUniverse,JSON.parse('{"OX":{"w8":[]},"Jv":{"w8":[]},"anC":{"ag":[],"r":[]},"ape":{"ag":[],"r":[]},"aaD":{"au":[],"r":[]},"HJ":{"ag":[],"r":[]},"aBB":{"ag":[],"r":[]},"on":{"au":[],"r":[]},"azO":{"ag":[],"r":[]},"aBD":{"ah":["anC"]},"biv":{"ah":["ape"]},"BZ":{"au":[],"r":[]},"azb":{"au":[],"r":[]},"ac0":{"aB":[]},"aBA":{"ah":["HJ"]},"aBC":{"ah":["aBB"]},"bfH":{"au":[],"r":[]},"be6":{"au":[],"r":[]},"bfG":{"au":[],"r":[]},"bfD":{"au":[],"r":[]},"bfF":{"au":[],"r":[]},"Pg":{"aB":[]},"bi9":{"iO":[]},"bgz":{"au":[],"r":[]},"azP":{"ah":["azO"]}}'))
var y={d:"That group code is already taken. Try another."}
var x=(function rtii(){var w=A.ax
return{Q:w("eR<n>"),c:w("eR<H>"),J:w("O<a2h>"),V:w("O<ac>"),O:w("O<w>"),t:w("O<eR<n>>"),u:w("O<eR<H>>"),A:w("O<a4<n,n>>"),D:w("O<nx>"),x:w("O<pD>"),B:w("O<uw>"),v:w("O<hn>"),T:w("O<oZ<C2>>"),Z:w("O<+(+email,name(n,n),pD)>"),S:w("O<+email,name(n,n)>"),i:w("O<+person,relation(H,n)>"),r:w("O<cP>"),s:w("O<n>"),F:w("O<iO>"),p:w("O<r>"),U:w("O<aB?>"),m:w("aj<nx>"),P:w("a4<n,@>"),f:w("a4<@,@>"),w:w("iz"),L:w("nx"),Y:w("uw"),N:w("n"),I:w("p3"),K:w("a2<+email,name(n,n)>"),C:w("e8<OX>"),o:w("e8<Jv>"),l:w("r"),n:w("bf9"),R:w("bfE"),E:w("C2"),W:w("w8"),a:w("Jv"),q:w("mV"),y:w("R"),z:w("@"),G:w("H"),_:w("a4<n,@>?"),h:w("nx?"),X:w("aC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVc=new A.lR(B.b8,A.ax("lR<w?>"))
D.aWH=new A.aA(B.b1,1,B.q,-1)
D.aWV=new A.aA(B.cj,1,B.q,-1)
D.aYa=new A.aY(20,1/0,0,1/0)
D.aYn=new A.aY(0,1/0,0,150)
D.f9D=new A.x("Tap code to copy",null,B.CU,null,null,null,null,null,null,null,null,null)
D.b3h=new A.cq(B.A,null,null,D.f9D,null)
D.fa9=new A.x("No groups found.",null,B.kw,null,null,null,null,null,null,null,null,null)
D.b3H=new A.cq(B.A,null,null,D.fa9,null)
D.bpp=new A.Q(14,12,6,12)
D.bpV=new A.Q(16,10,16,8)
D.bqe=new A.Q(16,4,16,36)
D.bqy=new A.Q(18,10,18,36)
D.bqD=new A.Q(18,12,18,4)
D.bqX=new A.Q(18,22,18,18)
D.fcB=new A.x("Waiting to join",null,B.i3,null,null,null,null,null,null,null,null,null)
D.buR=new A.bD(1,B.bi,D.fcB,null)
D.bvD=new A.bD(1,B.bi,B.bH,null)
D.bBq=new A.a0(63323,"MaterialIcons",!1)
D.al8=new A.a0(983761,"MaterialIcons",!1)
D.bET=new A.ae(B.eA,null,B.et,null,null,null)
D.bEV=new A.ae(B.h8,22,B.b1,null,null,null)
D.bEW=new A.ae(B.hy,16,B.b8,null,null,null)
D.bFN=new A.ae(B.MF,22,B.et,null,null,null)
D.bG4=new A.ae(B.a_c,20,B.iC,null,null,null)
D.bGT=new A.ae(B.e4,22,B.cj,null,null,null)
D.bHm=new A.ae(B.Ft,20,B.b1,null,null,null)
D.bI6=new A.ae(B.hx,null,B.b1,null,null,null)
D.bIX=new A.ae(B.vx,18,B.b1,null,null,null)
D.bJ3=new A.ae(B.fa,18,B.b1,null,null,null)
D.bJu=new A.ae(B.bCj,null,B.fY,null,null,null)
D.bKy=new A.ae(B.h8,null,B.b1,null,null,null)
D.bLc=new A.ae(B.ee,20,B.b8,null,null,null)
D.bNo=new A.ae(D.al8,null,B.b1,null,null,null)
D.bNG=new A.ae(B.xP,null,B.b1,null,null,null)
D.bNS=new A.ae(B.pH,null,B.b8,null,null,null)
D.avS=w([],x.x)
D.dej=w(["mother","father","spouse","child","brother","sister"],x.s)
D.bK8=new A.ae(B.oC,20,B.iC,null,null,null)
D.e2J=new A.C(B.jc,D.bK8,null)
D.fqp=new A.x("The group owner has not added payment details yet.",null,B.kw,null,B.L,null,null,null,null,null,null,null)
D.e2V=new A.C(B.eZ,D.fqp,null)
D.e9q=new A.Bv(null,B.dK)
D.e9s=new A.Bw(null,B.dK)
D.eaY=new A.y(0,"Ledger")
D.ebD=new A.y(1,"People")
D.ecb=new A.y(2,"Invite")
D.fmq=new A.x("Your request is already waiting. The group owner has to approve you.",null,null,null,null,null,null,null,null,null,null,null)
D.eM7=new A.b1(D.fmq,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fl0=new A.x("Help mode is active but missing a campaign.",null,null,null,null,null,null,null,null,null,null,null)
D.eMT=new A.b1(D.fl0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f9X=new A.x("Activate help mode before recording a contribution.",null,null,null,null,null,null,null,null,null,null,null)
D.eNp=new A.b1(D.f9X,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fqO=new A.x("Add what you are collecting for, then activate help mode.",null,null,null,null,null,null,null,null,null,null,null)
D.eNs=new A.b1(D.fqO,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fq9=new A.x("This group is full (100 members). Ask the owner to unlock more seats.",null,null,null,null,null,null,null,null,null,null,null)
D.eNv=new A.b1(D.fq9,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fhz=new A.x("Receipt copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eNM=new A.b1(D.fhz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fh1=new A.x("Your request is waiting. The group owner has to approve you first.",null,null,null,null,null,null,null,null,null,null,null)
D.ePm=new A.b1(D.fh1,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.faN=new A.x("No group found for that code.",null,null,null,null,null,null,null,null,null,null,null)
D.ePy=new A.b1(D.faN,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fpj=new A.x("Could not send your request.",null,null,null,null,null,null,null,null,null,null,null)
D.ePG=new A.b1(D.fpj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.aO0=new A.G(!0,B.c,null,null,null,null,15,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTW=new A.G(!0,B.az,null,null,null,null,10,B.H,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU5=new A.G(!0,B.b1,null,null,null,null,12,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVs=new A.G(!0,B.b1,null,null,null,null,22,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWe=new A.G(!0,B.iC,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWm=new A.G(!0,B.iC,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWw=new A.G(!0,B.iR,null,null,null,null,16,B.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWP=new A.G(!0,B.c,null,null,null,null,16,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6O=new A.G(!0,B.c_,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOv=new A.G(!0,B.az,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYR=new A.G(!0,B.b8,null,null,null,null,11,B.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ0=new A.G(!0,B.b1,null,null,null,null,17,B.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new A.G(!0,B.c,null,null,null,null,20,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new A.G(!0,B.et,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1z=new A.G(!0,B.b1,null,null,null,null,14,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f29=new A.G(!0,B.b1,null,null,null,null,15,B.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2z=new A.G(!0,B.b1,null,null,null,null,16,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5E=new A.G(!0,B.f3,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7h=new A.x("Keep missed",null,B.lp,null,null,null,null,null,null,null,null,null)
D.f7s=new A.x("Save details for later",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f8_=new A.x("Create group",null,B.cx,null,null,null,null,null,null,null,null,null)
D.f5p=new A.G(!0,B.b1,null,null,null,null,12,B.u,null,2.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8k=new A.x("LIGHTNING CIRCLE",null,D.f5p,null,null,null,null,null,null,null,null,null)
D.f8F=new A.x("Clear missed contribution?",null,B.du,null,B.L,null,null,null,null,null,null,null)
D.f9l=new A.x("Share this code or QR so others can join from Lightning Groups.",null,B.CU,null,B.L,null,null,null,null,null,null,null)
D.f_H=new A.G(!0,B.b1,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9r=new A.x("Add a family member from the group",null,D.f_H,null,null,null,null,null,null,null,null,null)
D.f9z=new A.x("Yes, clear it",null,B.cx,null,null,null,null,null,null,null,null,null)
D.faS=new A.x("Nobody yet.",null,B.kw,null,null,null,null,null,null,null,null,null)
D.fbd=new A.x("No contributions or spending yet.",null,B.kw,null,null,null,null,null,null,null,null,null)
D.fbw=new A.x("Clear",null,B.SZ,null,null,null,null,null,null,null,null,null)
D.aPu=new A.G(!0,B.az,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbN=new A.x("No member matches that search.",null,D.aPu,null,null,null,null,null,null,null,null,null)
D.T5=new A.G(!0,B.c_,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc9=new A.x("This removes the missed mark for this member. Only clear if they paid or you confirmed the contribution.",null,D.T5,null,B.L,null,null,null,null,null,null,null)
D.eYV=new A.G(!0,B.c_,null,null,null,null,11,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcp=new A.x("Type letters or numbers in any order \u2014 code becomes 3 letters then numbers (e.g. ABC123).",null,D.eYV,null,null,null,null,null,null,null,null,null)
D.fdh=new A.x("Nobody else is in this group yet.",null,B.kw,null,null,null,null,null,null,null,null,null)
D.fdp=new A.x("They will lose access to this group ledger and invite list.",null,D.T5,null,B.L,null,null,null,null,null,null,null)
D.feK=new A.x("Save details",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eVw=new A.G(!0,B.b8,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feN=new A.x("Everyone has already contributed to this round.",null,D.eVw,null,null,null,null,null,null,null,null,null)
D.feO=new A.x("Deactivate help mode",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fgj=new A.x("Send my request",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fgP=new A.x("Your own civic circle \u2014 no states, no case wallet.\nInvite by code or QR. Owner tracks money in & out.",null,L.IF,null,B.L,null,null,null,null,null,null,null)
D.fhi=new A.x("Everyone gave. Wonderful!",null,B.kw,null,null,null,null,null,null,null,null,null)
D.fhC=new A.x("FAMILY IN THIS GROUP (optional)",null,Q.mC,null,null,null,null,null,null,null,null,null)
D.aPT=new A.x("Close",null,B.lp,null,null,null,null,null,null,null,null,null)
D.eTJ=new A.G(!0,B.b8,null,null,null,null,9.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.x("OPEN",null,D.eTJ,null,null,null,null,null,null,null,null,null)
D.fie=new A.x("Remove",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fig=new A.x("Decline this request?",null,B.kv,null,null,null,null,null,null,null,null,null)
D.fjf=new A.x("Send your contribution using the details below. Call if you have questions or to confirm payment was received.",null,D.aOv,null,B.L,null,null,null,null,null,null,null)
D.fjJ=new A.x("Make sure this is correct before saving to the ledger.",null,D.T5,null,B.L,null,null,null,null,null,null,null)
D.fjM=new A.x("Remove member?",null,B.du,null,B.L,null,null,null,null,null,null,null)
D.fk8=new A.x("Keep member",null,B.lp,null,null,null,null,null,null,null,null,null)
D.fkp=new A.x("Are your mother, father, spouse, children or brothers and sisters already here? Choose them.",null,D.T5,null,null,null,null,null,null,null,null,null)
D.fkw=new A.x("Request sent",null,B.kv,null,null,null,null,null,null,null,null,null)
D.fms=new A.x("Go back",null,B.lp,null,null,null,null,null,null,null,null,null)
D.fnj=new A.x("Scan group QR",null,null,null,null,null,null,null,null,null,null,null)
D.fnI=new A.x("Tap who put money in \u2014 people who joined this group.",null,B.hp,null,B.L,null,null,null,null,null,null,null)
D.foD=new A.x("Record contribution",null,B.fN,null,B.L,null,null,null,null,null,null,null)
D.fpe=new A.x("Copy receipt",null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.x("Activate help mode",null,B.cx,null,null,null,null,null,null,null,null,null)
D.fsj=new A.x("Confirm & save",null,B.cx,null,null,null,null,null,null,null,null,null)
D.ftj=new A.x("Verify contribution",null,B.du,null,B.L,null,null,null,null,null,null,null)
D.ftq=new A.x("Delete group?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.ftK=new A.x("Save",null,B.cx,null,null,null,null,null,null,null,null,null)
D.eZy=new A.G(!0,B.iR,null,null,null,null,14,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu5=new A.x("HELP MODE ACTIVE",null,D.eZy,null,B.L,null,null,null,null,null,null,null)
D.fuc=new A.x("No members yet \u2014 invite people with your code first.",null,D.aPu,null,null,null,null,null,null,null,null,null)
D.a8h=new C.C2(0,"all")
D.aTa=new C.C2(1,"contributions")
D.aTb=new C.C2(2,"missed")
D.fMT=new C.aBB(null)})()};
(a=>{a["ehf3rQ/wOQ+xYcaSHJ+FtneVnZs="]=a.current})($__dart_deferred_initializers__);