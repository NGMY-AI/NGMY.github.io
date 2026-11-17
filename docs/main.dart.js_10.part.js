((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBH(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a36(d){var y,x,w,v
if(d==null){if(A.fHB()==null)$.he9="en_US"
y=A.fHB()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBH(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjx(d,e,f){var y,x,w,v
if(d==null){if(A.fHB()==null)$.he9="en_US"
y=A.fHB()
y.toString
return A.hjx(y,e,f)}if(e.$1(d))return d
x=[A.ikt(),A.ikv(),A.iku(),new A.h6i(),new A.h6j(),new A.h6k()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ih4(d)},
ih4(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hgA(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hHu(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBH(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h6i:function h6i(){},
h6j:function h6j(){},
h6k:function h6k(){},
fHB(){var y=B.aV($.bE.h(0,D.fqI))
return y==null?$.he9:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[291]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h6i.prototype={
$1(d){return A.hgA(A.hHu(d))},
$S:17}
A.h6j.prototype={
$1(d){return A.hgA(A.a36(d))},
$S:17}
A.h6k.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ikt","a36",1)
y(A,"iku","hgA",0)
y(A,"ikv","hHu",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.h6i,A.h6j,A.h6k])})();(function constants(){D.fqI=new B.pH("Intl.locale")})();(function staticFields(){$.he9=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDW","h74",()=>48)})()};
(a=>{a["YA05DBId9psHRjn/WcASPVvySGI="]=a.current})($__dart_deferred_initializers__);