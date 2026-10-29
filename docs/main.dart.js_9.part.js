((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hj1(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1n(d){var y,x,w,v
if(d==null){if(A.frX()==null)$.fXy="en_US"
y=A.frX()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hj1(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h1p(d,e,f){var y,x,w,v
if(d==null){if(A.frX()==null)$.fXy="en_US"
y=A.frX()
y.toString
return A.h1p(y,e,f)}if(e.$1(d))return d
x=[A.i_O(),A.i_Q(),A.i_P(),new A.fQ1(),new A.fQ2(),new A.fQ3()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXs(d)},
hXs(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
fZL(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hnZ(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hj1(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fQ1:function fQ1(){},
fQ2:function fQ2(){},
fQ3:function fQ3(){},
frX(){var y=B.aU($.bz.h(0,D.eXS))
return y==null?$.fXy:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fQ1.prototype={
$1(d){return A.fZL(A.hnZ(d))},
$S:17}
A.fQ2.prototype={
$1(d){return A.fZL(A.a1n(d))},
$S:17}
A.fQ3.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_O","a1n",1)
y(A,"i_P","fZL",0)
y(A,"i_Q","hnZ",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fQ1,A.fQ2,A.fQ3])})();(function constants(){D.eXS=new B.pa("Intl.locale")})();(function staticFields(){$.fXy=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiP","fQH",()=>48)})()};
(a=>{a["fBwWzdXAlp/DawCNXWLSKp8sE88="]=a.current})($__dart_deferred_initializers__);