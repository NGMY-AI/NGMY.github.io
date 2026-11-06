((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hiB(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1q(d){var y,x,w,v
if(d==null){if(A.fqZ()==null)$.fX0="en_US"
y=A.fqZ()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hiB(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h0V(d,e,f){var y,x,w,v
if(d==null){if(A.fqZ()==null)$.fX0="en_US"
y=A.fqZ()
y.toString
return A.h0V(y,e,f)}if(e.$1(d))return d
x=[A.i_H(),A.i_J(),A.i_I(),new A.fPk(),new A.fPl(),new A.fPm()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXh(d)},
hXh(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
fZe(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hnF(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hiB(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fPk:function fPk(){},
fPl:function fPl(){},
fPm:function fPm(){},
fqZ(){var y=B.aU($.bz.h(0,D.f1N))
return y==null?$.fX0:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[260]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fPk.prototype={
$1(d){return A.fZe(A.hnF(d))},
$S:17}
A.fPl.prototype={
$1(d){return A.fZe(A.a1q(d))},
$S:17}
A.fPm.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_H","a1q",1)
y(A,"i_I","fZe",0)
y(A,"i_J","hnF",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fPk,A.fPl,A.fPm])})();(function constants(){D.f1N=new B.pe("Intl.locale")})();(function staticFields(){$.fX0=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiK","fQ1",()=>48)})()};
(a=>{a["FMO5oRYdpQyezrKd6DZtsqTrNqY="]=a.current})($__dart_deferred_initializers__);