((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hhZ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1k(d){var y,x,w,v
if(d==null){if(A.fqX()==null)$.fWA="en_US"
y=A.fqX()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hhZ(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h0o(d,e,f){var y,x,w,v
if(d==null){if(A.fqX()==null)$.fWA="en_US"
y=A.fqX()
y.toString
return A.h0o(y,e,f)}if(e.$1(d))return d
x=[A.hZN(),A.hZP(),A.hZO(),new A.fP4(),new A.fP5(),new A.fP6()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hWt(d)},
hWt(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fYN(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hmU(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hhZ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fP4:function fP4(){},
fP5:function fP5(){},
fP6:function fP6(){},
fqX(){var y=B.aU($.bz.h(0,D.eWO))
return y==null?$.fWA:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fP4.prototype={
$1(d){return A.fYN(A.hmU(d))},
$S:17}
A.fP5.prototype={
$1(d){return A.fYN(A.a1k(d))},
$S:17}
A.fP6.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hZN","a1k",1)
y(A,"hZO","fYN",0)
y(A,"hZP","hmU",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fP4,A.fP5,A.fP6])})();(function constants(){D.eWO=new B.pa("Intl.locale")})();(function staticFields(){$.fWA=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ihN","fPK",()=>48)})()};
(a=>{a["sjyWT27qYzxAWtBlRQYJx80gUXs="]=a.current})($__dart_deferred_initializers__);