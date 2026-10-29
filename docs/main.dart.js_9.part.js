((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hiW(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1l(d){var y,x,w,v
if(d==null){if(A.frR()==null)$.fXs="en_US"
y=A.frR()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hiW(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h1j(d,e,f){var y,x,w,v
if(d==null){if(A.frR()==null)$.fXs="en_US"
y=A.frR()
y.toString
return A.h1j(y,e,f)}if(e.$1(d))return d
x=[A.i_I(),A.i_K(),A.i_J(),new A.fPW(),new A.fPX(),new A.fPY()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXm(d)},
hXm(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
fZF(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hnT(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hiW(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fPW:function fPW(){},
fPX:function fPX(){},
fPY:function fPY(){},
frR(){var y=B.aU($.bz.h(0,D.eXR))
return y==null?$.fXs:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fPW.prototype={
$1(d){return A.fZF(A.hnT(d))},
$S:17}
A.fPX.prototype={
$1(d){return A.fZF(A.a1l(d))},
$S:17}
A.fPY.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_I","a1l",1)
y(A,"i_J","fZF",0)
y(A,"i_K","hnT",0)})();(function inheritance(){var y=a.inheritMany
y(B.hU,[A.fPW,A.fPX,A.fPY])})();(function constants(){D.eXR=new B.pa("Intl.locale")})();(function staticFields(){$.fXs=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiJ","fQB",()=>48)})()};
(a=>{a["2gXnFXlQfP0cqMa4M/b+4nsW76Y="]=a.current})($__dart_deferred_initializers__);