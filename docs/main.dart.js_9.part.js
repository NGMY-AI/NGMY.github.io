((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hjQ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1s(d){var y,x,w,v
if(d==null){if(A.fsJ()==null)$.fYn="en_US"
y=A.fsJ()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hjQ(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h2e(d,e,f){var y,x,w,v
if(d==null){if(A.fsJ()==null)$.fYn="en_US"
y=A.fsJ()
y.toString
return A.h2e(y,e,f)}if(e.$1(d))return d
x=[A.i0E(),A.i0G(),A.i0F(),new A.fQQ(),new A.fQR(),new A.fQS()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hYi(d)},
hYi(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
h_A(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hoN(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hjQ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fQQ:function fQQ(){},
fQR:function fQR(){},
fQS:function fQS(){},
fsJ(){var y=B.aU($.bz.h(0,D.eYX))
return y==null?$.fYn:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fQQ.prototype={
$1(d){return A.h_A(A.hoN(d))},
$S:17}
A.fQR.prototype={
$1(d){return A.h_A(A.a1s(d))},
$S:17}
A.fQS.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i0E","a1s",1)
y(A,"i0F","h_A",0)
y(A,"i0G","hoN",0)})();(function inheritance(){var y=a.inheritMany
y(B.hW,[A.fQQ,A.fQR,A.fQS])})();(function constants(){D.eYX=new B.pb("Intl.locale")})();(function staticFields(){$.fYn=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ijF","fRv",()=>48)})()};
(a=>{a["pwHxgdV3RelogoMVyDso5Q0yS9Q="]=a.current})($__dart_deferred_initializers__);