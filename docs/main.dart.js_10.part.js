((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzm(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2X(d){var y,x,w,v
if(d==null){if(A.fFV()==null)$.hca="en_US"
y=A.fFV()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzm(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhq(d,e,f){var y,x,w,v
if(d==null){if(A.fFV()==null)$.hca="en_US"
y=A.fFV()
y.toString
return A.hhq(y,e,f)}if(e.$1(d))return d
x=[A.iin(),A.iip(),A.iio(),new A.h4i(),new A.h4j(),new A.h4k()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ieU(d)},
ieU(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
heB(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hEO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzm(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h4i:function h4i(){},
h4j:function h4j(){},
h4k:function h4k(){},
fFV(){var y=B.aT($.bF.h(0,D.flu))
return y==null?$.hca:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[288]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4i.prototype={
$1(d){return A.heB(A.hEO(d))},
$S:17}
A.h4j.prototype={
$1(d){return A.heB(A.a2X(d))},
$S:17}
A.h4k.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iin","a2X",1)
y(A,"iio","heB",0)
y(A,"iip","hEO",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4i,A.h4j,A.h4k])})();(function constants(){D.flu=new B.pE("Intl.locale")})();(function staticFields(){$.hca=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCx","h54",()=>48)})()};
(a=>{a["2b30yhzn1IIu7eCGkOkdBzrcaa8="]=a.current})($__dart_deferred_initializers__);