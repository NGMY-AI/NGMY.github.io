((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBz(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a36(d){var y,x,w,v
if(d==null){if(A.fHw()==null)$.he4="en_US"
y=A.fHw()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBz(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjt(d,e,f){var y,x,w,v
if(d==null){if(A.fHw()==null)$.he4="en_US"
y=A.fHw()
y.toString
return A.hjt(y,e,f)}if(e.$1(d))return d
x=[A.ikl(),A.ikn(),A.ikm(),new A.h6d(),new A.h6e(),new A.h6f()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igX(d)},
igX(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hgw(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hHm(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBz(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h6d:function h6d(){},
h6e:function h6e(){},
h6f:function h6f(){},
fHw(){var y=B.aV($.bE.h(0,D.fqI))
return y==null?$.he4:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[291]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h6d.prototype={
$1(d){return A.hgw(A.hHm(d))},
$S:17}
A.h6e.prototype={
$1(d){return A.hgw(A.a36(d))},
$S:17}
A.h6f.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ikl","a36",1)
y(A,"ikm","hgw",0)
y(A,"ikn","hHm",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.h6d,A.h6e,A.h6f])})();(function constants(){D.fqI=new B.pI("Intl.locale")})();(function staticFields(){$.he4=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDO","h7_",()=>48)})()};
(a=>{a["QUXNdCM6oZgy5H4SVoqIW8FkY4U="]=a.current})($__dart_deferred_initializers__);