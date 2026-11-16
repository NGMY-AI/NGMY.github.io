((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBf(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a39(d){var y,x,w,v
if(d==null){if(A.fHj()==null)$.hdQ="en_US"
y=A.fHj()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBf(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjd(d,e,f){var y,x,w,v
if(d==null){if(A.fHj()==null)$.hdQ="en_US"
y=A.fHj()
y.toString
return A.hjd(y,e,f)}if(e.$1(d))return d
x=[A.ikH(),A.ikJ(),A.ikI(),new A.h5Y(),new A.h5Z(),new A.h6_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ihd(d)},
ihd(d){throw B.W(B.dO('Invalid locale "'+d+'"',null))},
hgi(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hH1(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBf(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5Y:function h5Y(){},
h5Z:function h5Z(){},
h6_:function h6_(){},
fHj(){var y=B.aV($.bF.h(0,D.fpl))
return y==null?$.hdQ:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[288]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5Y.prototype={
$1(d){return A.hgi(A.hH1(d))},
$S:17}
A.h5Z.prototype={
$1(d){return A.hgi(A.a39(d))},
$S:17}
A.h6_.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ikH","a39",1)
y(A,"ikI","hgi",0)
y(A,"ikJ","hH1",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h5Y,A.h5Z,A.h6_])})();(function constants(){D.fpl=new B.pJ("Intl.locale")})();(function staticFields(){$.hdQ=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iEI","h6K",()=>48)})()};
(a=>{a["ktt1cFjnsdV3SbHXHB3JH5a1/9o="]=a.current})($__dart_deferred_initializers__);