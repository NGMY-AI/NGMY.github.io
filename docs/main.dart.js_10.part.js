((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hD1(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3g(d){var y,x,w,v
if(d==null){if(A.fIr()==null)$.hfe="en_US"
y=A.fIr()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hD1(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hkM(d,e,f){var y,x,w,v
if(d==null){if(A.fIr()==null)$.hfe="en_US"
y=A.fIr()
y.toString
return A.hkM(y,e,f)}if(e.$1(d))return d
x=[A.ilW(),A.ilY(),A.ilX(),new A.h7o(),new A.h7p(),new A.h7q()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iiw(d)},
iiw(d){throw B.W(B.dO('Invalid locale "'+d+'"',null))},
hhN(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hIO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hD1(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h7o:function h7o(){},
h7p:function h7p(){},
h7q:function h7q(){},
fIr(){var y=B.aV($.bF.h(0,D.fty))
return y==null?$.hfe:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
D=c[294]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h7o.prototype={
$1(d){return A.hhN(A.hIO(d))},
$S:17}
A.h7p.prototype={
$1(d){return A.hhN(A.a3g(d))},
$S:17}
A.h7q.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ilW","a3g",1)
y(A,"ilX","hhN",0)
y(A,"ilY","hIO",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h7o,A.h7p,A.h7q])})();(function constants(){D.fty=new B.pO("Intl.locale")})();(function staticFields(){$.hfe=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iFw","h8a",()=>48)})()};
(a=>{a["6WioNddPU0cCnOemjhYar4nIbh8="]=a.current})($__dart_deferred_initializers__);