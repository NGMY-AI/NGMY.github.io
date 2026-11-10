((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hpS(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a27(d){var y,x,w,v
if(d==null){if(A.fxx()==null)$.h37="en_US"
y=A.fxx()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hpS(d)
if(x===-1)return d
w=C.a.aq(d,0,x)
v=C.a.b7(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h83(d,e,f){var y,x,w,v
if(d==null){if(A.fxx()==null)$.h37="en_US"
y=A.fxx()
y.toString
return A.h83(y,e,f)}if(e.$1(d))return d
x=[A.i7n(),A.i7p(),A.i7o(),new A.fWm(),new A.fWn(),new A.fWo()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i3Y(d)},
i3Y(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h5n(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hv1(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hpS(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aq(d,0,x).toLowerCase()},
fWm:function fWm(){},
fWn:function fWn(){},
fWo:function fWo(){},
fxx(){var y=B.aU($.bB.h(0,D.fcf))
return y==null?$.h37:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[53],A)
D=c[264]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fWm.prototype={
$1(d){return A.h5n(A.hv1(d))},
$S:17}
A.fWn.prototype={
$1(d){return A.h5n(A.a27(d))},
$S:17}
A.fWo.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i7n","a27",1)
y(A,"i7o","h5n",0)
y(A,"i7p","hv1",0)})();(function inheritance(){var y=a.inheritMany
y(B.hL,[A.fWm,A.fWn,A.fWo])})();(function constants(){D.fcf=new B.pl("Intl.locale")})();(function staticFields(){$.h37=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iqC","fX5",()=>48)})()};
(a=>{a["YHf1mdOyi+syDI491/AvaN2NS44="]=a.current})($__dart_deferred_initializers__);