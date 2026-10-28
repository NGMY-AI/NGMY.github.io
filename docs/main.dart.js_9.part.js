((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hgN(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1f(d){var y,x,w,v
if(d==null){if(A.fpT()==null)$.fVt="en_US"
y=A.fpT()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hgN(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h_f(d,e,f){var y,x,w,v
if(d==null){if(A.fpT()==null)$.fVt="en_US"
y=A.fpT()
y.toString
return A.h_f(y,e,f)}if(e.$1(d))return d
x=[A.hYv(),A.hYx(),A.hYw(),new A.fNW(),new A.fNX(),new A.fNY()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hVc(d)},
hVc(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fXF(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hlH(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hgN(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fNW:function fNW(){},
fNX:function fNX(){},
fNY:function fNY(){},
fpT(){var y=B.aU($.by.h(0,D.eU9))
return y==null?$.fVt:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fNW.prototype={
$1(d){return A.fXF(A.hlH(d))},
$S:17}
A.fNX.prototype={
$1(d){return A.fXF(A.a1f(d))},
$S:17}
A.fNY.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hYv","a1f",1)
y(A,"hYw","fXF",0)
y(A,"hYx","hlH",0)})();(function inheritance(){var y=a.inheritMany
y(B.hU,[A.fNW,A.fNX,A.fNY])})();(function constants(){D.eU9=new B.p7("Intl.locale")})();(function staticFields(){$.fVt=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"igu","fOB",()=>48)})()};
(a=>{a["WRLj1VJj7+qn1iayr+YRmu23A/Y="]=a.current})($__dart_deferred_initializers__);