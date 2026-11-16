((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hA6(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a34(d){var y,x,w,v
if(d==null){if(A.fGw()==null)$.hcN="en_US"
y=A.fGw()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hA6(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hi3(d,e,f){var y,x,w,v
if(d==null){if(A.fGw()==null)$.hcN="en_US"
y=A.fGw()
y.toString
return A.hi3(y,e,f)}if(e.$1(d))return d
x=[A.ij8(),A.ija(),A.ij9(),new A.h4Y(),new A.h4Z(),new A.h5_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifF(d)},
ifF(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hfe(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFz(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hA6(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h4Y:function h4Y(){},
h4Z:function h4Z(){},
h5_:function h5_(){},
fGw(){var y=B.aV($.bF.h(0,D.fml))
return y==null?$.hcN:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[287]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4Y.prototype={
$1(d){return A.hfe(A.hFz(d))},
$S:17}
A.h4Z.prototype={
$1(d){return A.hfe(A.a34(d))},
$S:17}
A.h5_.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ij8","a34",1)
y(A,"ij9","hfe",0)
y(A,"ija","hFz",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4Y,A.h4Z,A.h5_])})();(function constants(){D.fml=new B.pH("Intl.locale")})();(function staticFields(){$.hcN=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDm","h5K",()=>48)})()};
(a=>{a["t6m82AQ6Wyx/oNVLLPJJcoNlvnA="]=a.current})($__dart_deferred_initializers__);