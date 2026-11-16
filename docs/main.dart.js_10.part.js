((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hAB(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a35(d){var y,x,w,v
if(d==null){if(A.fGS()==null)$.hdj="en_US"
y=A.fGS()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hAB(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hiA(d,e,f){var y,x,w,v
if(d==null){if(A.fGS()==null)$.hdj="en_US"
y=A.fGS()
y.toString
return A.hiA(y,e,f)}if(e.$1(d))return d
x=[A.ijG(),A.ijI(),A.ijH(),new A.h5s(),new A.h5t(),new A.h5u()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igc(d)},
igc(d){throw B.W(B.dN('Invalid locale "'+d+'"',null))},
hfL(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hG5(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hAB(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5s:function h5s(){},
h5t:function h5t(){},
h5u:function h5u(){},
fGS(){var y=B.aU($.bF.h(0,D.fmZ))
return y==null?$.hdj:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[289]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5s.prototype={
$1(d){return A.hfL(A.hG5(d))},
$S:17}
A.h5t.prototype={
$1(d){return A.hfL(A.a35(d))},
$S:17}
A.h5u.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ijG","a35",1)
y(A,"ijH","hfL",0)
y(A,"ijI","hG5",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h5s,A.h5t,A.h5u])})();(function constants(){D.fmZ=new B.pH("Intl.locale")})();(function staticFields(){$.hdj=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDW","h6e",()=>48)})()};
(a=>{a["Pm6ZxzE6WCsAWuNZCCbPXmOCbEU="]=a.current})($__dart_deferred_initializers__);