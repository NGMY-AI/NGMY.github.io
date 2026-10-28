((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hh1(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1f(d){var y,x,w,v
if(d==null){if(A.fq7()==null)$.fVH="en_US"
y=A.fq7()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hh1(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h_u(d,e,f){var y,x,w,v
if(d==null){if(A.fq7()==null)$.fVH="en_US"
y=A.fq7()
y.toString
return A.h_u(y,e,f)}if(e.$1(d))return d
x=[A.hYK(),A.hYM(),A.hYL(),new A.fO9(),new A.fOa(),new A.fOb()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hVr(d)},
hVr(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fXT(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hlW(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hh1(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fO9:function fO9(){},
fOa:function fOa(){},
fOb:function fOb(){},
fq7(){var y=B.aU($.by.h(0,D.eUj))
return y==null?$.fVH:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fO9.prototype={
$1(d){return A.fXT(A.hlW(d))},
$S:17}
A.fOa.prototype={
$1(d){return A.fXT(A.a1f(d))},
$S:17}
A.fOb.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hYK","a1f",1)
y(A,"hYL","fXT",0)
y(A,"hYM","hlW",0)})();(function inheritance(){var y=a.inheritMany
y(B.hU,[A.fO9,A.fOa,A.fOb])})();(function constants(){D.eUj=new B.p7("Intl.locale")})();(function staticFields(){$.fVH=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"igJ","fOP",()=>48)})()};
(a=>{a["RLfVECflxLFX2Sxodh8VHT34K2U="]=a.current})($__dart_deferred_initializers__);