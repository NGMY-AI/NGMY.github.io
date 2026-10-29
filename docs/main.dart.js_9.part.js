((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hj9(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1n(d){var y,x,w,v
if(d==null){if(A.fs4()==null)$.fXG="en_US"
y=A.fs4()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hj9(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h1x(d,e,f){var y,x,w,v
if(d==null){if(A.fs4()==null)$.fXG="en_US"
y=A.fs4()
y.toString
return A.h1x(y,e,f)}if(e.$1(d))return d
x=[A.i_X(),A.i_Z(),A.i_Y(),new A.fQ9(),new A.fQa(),new A.fQb()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXB(d)},
hXB(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
fZT(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
ho6(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hj9(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fQ9:function fQ9(){},
fQa:function fQa(){},
fQb:function fQb(){},
fs4(){var y=B.aU($.bz.h(0,D.eYk))
return y==null?$.fXG:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fQ9.prototype={
$1(d){return A.fZT(A.ho6(d))},
$S:17}
A.fQa.prototype={
$1(d){return A.fZT(A.a1n(d))},
$S:17}
A.fQb.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_X","a1n",1)
y(A,"i_Y","fZT",0)
y(A,"i_Z","ho6",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fQ9,A.fQa,A.fQb])})();(function constants(){D.eYk=new B.pa("Intl.locale")})();(function staticFields(){$.fXG=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiY","fQP",()=>48)})()};
(a=>{a["xGMHevfq0fiamz3tL6sNkRvVjCg="]=a.current})($__dart_deferred_initializers__);