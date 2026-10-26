((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bvs(d){return B.hwE(d)},
hwE(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bvs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bK(new A.b7(1000*(280+t*220)),null,u),$async$bvs)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bvs,w)},
bwy(d,e){return B.hBk(d,e)},
hBk(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bwy=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hB([d],"application/pdf")
p=y.b
r=A.aQS(A.a([s],y.h),e,A.E(["type","application/pdf"],p,p))
q=A.ct(A.E(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ea(A.jJ(p,"share",[q]),y.v),$async$bwy)
case 7:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$bwy,w)},
aKY(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aKY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hB([d],"application/pdf"))
p.toString
s=p
p=document
o=p.createElement("iframe")
n=o.style
n.position="fixed"
n=o.style
n.left="-10000px"
n=o.style
n.top="0"
n=o.style
n.width="900px"
n=o.style
n.height="1200px"
n=o.style
n.border="0"
n=o.style
n.toString
C.bW.er(n,C.bW.e_(n,"opacity"),"0","")
n=o.style
n.toString
C.bW.er(n,C.bW.e_(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.pv(r,"load",!1,y.c).gI(0).cJ(0,C.ea),$async$aKY)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.bv1(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bvs(q),$async$aKY)
case 12:A.cV(C.nf,new B.f4g(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.lC(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKY,w)},
f3q(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$f3q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hB([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.l9.tT(t,u,"_blank")
A.cV(C.abz,new B.f3r(s))
A.bK(C.oV,new B.f3s(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f3q,w)},
F3(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$F3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.fZE(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aKY(d),$async$F3)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.f3q(d,u),$async$F3)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bwy(d,u),$async$F3)
case 7:if(h){v=!0
x=1
break}v=!1
x=1
break
case 4:t=window.navigator.userAgent.toLowerCase()
s=!0
if(!C.a.q(t,"iphone"))if(!C.a.q(t,"ipad"))if(!C.a.q(t,"ipod"))s=C.a.q(t,"macintosh")&&C.a.q(t,"mobile")
q=s
if(q){x=8
break}else h=q
x=9
break
case 8:x=10
return A.b(B.bwy(d,u),$async$F3)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aKY(d),$async$F3)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.f3q(d,u),$async$F3)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hB([d],"application/pdf"))
s.toString
r=window
r.toString
C.l9.tT(r,s,"_blank")
A.bK(C.oV,new B.fiG(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$F3,w)},
f4g:function f4g(d,e){this.a=d
this.b=e},
f3r:function f3r(d){this.a=d},
f3s:function f3s(d){this.a=d},
fiG:function fiG(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[35],B)
D=c[192]
var z=a.updateTypes([])
B.f4g.prototype={
$0(){var x
try{C.Wr.f1(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.f3r.prototype={
$0(){B.bvs(this.a)},
$S:0}
B.f3s.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fiG.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.jk,[B.f4g,B.f3r,B.f3s,B.fiG])})()
var y={w:A.aA("N<lf>"),h:A.aA("N<aB>"),E:A.aA("aB"),x:A.aA("n"),c:A.aA("pv<dQ>"),e:A.aA("S"),b:A.aA("@"),v:A.aA("~")};(function constants(){D.ab_=new A.x(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["Zr/u+7DOWphVI0K2PThEVWuKBm4="]=a.current})($__dart_deferred_initializers__);