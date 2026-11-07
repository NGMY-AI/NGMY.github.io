((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bzj(d){return B.hU0(d)},
hU0(d){var x=0,w=A.j(y.v),v,u,t,s
var $async$bzj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=y.v,t=0
case 3:if(!(t<4)){x=5
break}x=6
return A.b(A.bN(new A.bb(1000*(280+t*220)),null,u),$async$bzj)
case 6:try{d.focus()}catch(r){}try{d.print()
x=1
break}catch(r){}case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$bzj,w)},
bAp(d,e){return B.hYW(d,e)},
hYW(d,e){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n
var $async$bAp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
if(d.length===0){v=!1
x=1
break}s=A.hR([d],"application/pdf")
p=y.b
r=A.aUh(A.a([s],y.h),e,A.G(["type","application/pdf"],p,p))
q=A.cz(A.G(["files",A.a([r],y.w),"title",e],y.x,y.E))
p=window.navigator
p.toString
x=7
return A.b(A.ei(A.k2(p,"share",[q]),y.v),$async$bAp)
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
return A.i($async$bAp,w)},
aO9(d){var x=0,w=A.j(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$aO9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}p=(self.URL||self.webkitURL).createObjectURL(A.hR([d],"application/pdf"))
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
C.c2.eH(n,C.c2.ec(n,"opacity"),"0","")
n=o.style
n.toString
C.c2.eH(n,C.c2.ec(n,"pointer-events"),"none","")
o.setAttribute("aria-hidden","true")
o.src=s
r=o
p=p.body
if(p!=null)p.appendChild(r).toString
u=4
u=8
x=11
return A.b(new A.q8(r,"load",!1,y.c).gH(0).d9(0,C.ek),$async$aO9)
case 11:u=4
x=10
break
case 8:u=7
l=t.pop()
x=10
break
case 7:x=4
break
case 10:q=A.byT(r.contentWindow)
if(q==null){v=!1
x=1
break}x=12
return A.b(B.bzj(q),$async$aO9)
case 12:A.cL(C.pU,new B.fm3(r,s))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
k=t.pop()
try{J.m1(r)}catch(j){}try{(self.URL||self.webkitURL).revokeObjectURL(s)}catch(j){}v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aO9,w)},
fkj(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$fkj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=(self.URL||self.webkitURL).createObjectURL(A.hR([d],"application/pdf"))
u.toString
t=window
t.toString
s=C.lJ.qQ(t,u,"_blank")
A.cL(C.aho,new B.fkk(s))
A.bN(C.pZ,new B.fkl(u),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fkj,w)},
GF(d,e,f){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$GF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){v=!1
x=1
break}u=A.hl1(e)
x=f?3:4
break
case 3:x=5
return A.b(B.aO9(d),$async$GF)
case 5:if(h){v=!0
x=1
break}x=6
return A.b(B.fkj(d,u),$async$GF)
case 6:if(h){v=!0
x=1
break}x=7
return A.b(B.bAp(d,u),$async$GF)
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
return A.b(B.bAp(d,u),$async$GF)
case 10:case 9:if(h){v=!0
x=1
break}x=11
return A.b(B.aO9(d),$async$GF)
case 11:if(h){v=!0
x=1
break}x=12
return A.b(B.fkj(d,u),$async$GF)
case 12:if(h){v=!0
x=1
break}s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],"application/pdf"))
s.toString
r=window
r.toString
C.lJ.qQ(r,s,"_blank")
A.bN(C.pZ,new B.fCM(s),y.v)
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GF,w)},
fm3:function fm3(d,e){this.a=d
this.b=e},
fkk:function fkk(d){this.a=d},
fkl:function fkl(d){this.a=d},
fCM:function fCM(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[39],B)
D=c[223]
var z=a.updateTypes([])
B.fm3.prototype={
$0(){var x
try{C.a_K.fj(this.a)}catch(x){}try{(self.URL||self.webkitURL).revokeObjectURL(this.b)}catch(x){}},
$S:0}
B.fkk.prototype={
$0(){B.bzj(this.a)},
$S:0}
B.fkl.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11}
B.fCM.prototype={
$0(){var x
try{(self.URL||self.webkitURL).revokeObjectURL(this.a)}catch(x){}},
$S:11};(function inheritance(){var x=a.inheritMany
x(A.j0,[B.fm3,B.fkk,B.fkl,B.fCM])})()
var y={w:A.av("O<lD>"),h:A.av("O<aD>"),E:A.av("aD"),x:A.av("n"),c:A.av("q8<dW>"),e:A.av("R"),b:A.av("@"),v:A.av("~")};(function constants(){D.agF=new A.v(1,0.058823529411764705,0.10588235294117647,0.2,C.t)})()};
(a=>{a["EOwLSvhcBgrmOFNr9kq8khg1J9I="]=a.current})($__dart_deferred_initializers__);