((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hh0(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1f(d){var y,x,w,v
if(d==null){if(A.fq6()==null)$.fVG="en_US"
y=A.fq6()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hh0(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h_t(d,e,f){var y,x,w,v
if(d==null){if(A.fq6()==null)$.fVG="en_US"
y=A.fq6()
y.toString
return A.h_t(y,e,f)}if(e.$1(d))return d
x=[A.hYJ(),A.hYL(),A.hYK(),new A.fO8(),new A.fO9(),new A.fOa()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hVq(d)},
hVq(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fXS(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hlV(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hh0(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fO8:function fO8(){},
fO9:function fO9(){},
fOa:function fOa(){},
fq6(){var y=B.aU($.by.h(0,D.eUf))
return y==null?$.fVG:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fO8.prototype={
$1(d){return A.fXS(A.hlV(d))},
$S:17}
A.fO9.prototype={
$1(d){return A.fXS(A.a1f(d))},
$S:17}
A.fOa.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hYJ","a1f",1)
y(A,"hYK","fXS",0)
y(A,"hYL","hlV",0)})();(function inheritance(){var y=a.inheritMany
y(B.hU,[A.fO8,A.fO9,A.fOa])})();(function constants(){D.eUf=new B.p7("Intl.locale")})();(function staticFields(){$.fVG=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"igI","fOO",()=>48)})()};
(a=>{a["BmkvkAFkDzmi/zeOXfh+/BARsoQ="]=a.current})($__dart_deferred_initializers__);