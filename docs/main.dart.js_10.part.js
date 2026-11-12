((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxA(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2K(d){var y,x,w,v
if(d==null){if(A.fEx()==null)$.hax="en_US"
y=A.fEx()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxA(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hfJ(d,e,f){var y,x,w,v
if(d==null){if(A.fEx()==null)$.hax="en_US"
y=A.fEx()
y.toString
return A.hfJ(y,e,f)}if(e.$1(d))return d
x=[A.ifZ(),A.ig0(),A.ig_(),new A.h2H(),new A.h2I(),new A.h2J()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icB(d)},
icB(d){throw B.W(B.dK('Invalid locale "'+d+'"',null))},
hcV(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hD_(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxA(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h2H:function h2H(){},
h2I:function h2I(){},
h2J:function h2J(){},
fEx(){var y=B.aT($.bD.h(0,D.fk6))
return y==null?$.hax:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2H.prototype={
$1(d){return A.hcV(A.hD_(d))},
$S:17}
A.h2I.prototype={
$1(d){return A.hcV(A.a2K(d))},
$S:17}
A.h2J.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ifZ","a2K",1)
y(A,"ig_","hcV",0)
y(A,"ig0","hD_",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h2H,A.h2I,A.h2J])})();(function constants(){D.fk6=new B.pA("Intl.locale")})();(function staticFields(){$.hax=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"izt","h3t",()=>48)})()};
(a=>{a["0NKZhAKhBleOdzIw7ZITi9+Euek="]=a.current})($__dart_deferred_initializers__);