((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hD4(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3h(d){var y,x,w,v
if(d==null){if(A.fIu()==null)$.hfh="en_US"
y=A.fIu()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hD4(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b1(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hkP(d,e,f){var y,x,w,v
if(d==null){if(A.fIu()==null)$.hfh="en_US"
y=A.fIu()
y.toString
return A.hkP(y,e,f)}if(e.$1(d))return d
x=[A.ilZ(),A.im0(),A.im_(),new A.h7r(),new A.h7s(),new A.h7t()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iiz(d)},
iiz(d){throw B.W(B.dO('Invalid locale "'+d+'"',null))},
hhQ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hIR(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hD4(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h7r:function h7r(){},
h7s:function h7s(){},
h7t:function h7t(){},
fIu(){var y=B.aV($.bF.h(0,D.fvu))
return y==null?$.hfh:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[56],A)
D=c[294]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h7r.prototype={
$1(d){return A.hhQ(A.hIR(d))},
$S:17}
A.h7s.prototype={
$1(d){return A.hhQ(A.a3h(d))},
$S:17}
A.h7t.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ilZ","a3h",1)
y(A,"im_","hhQ",0)
y(A,"im0","hIR",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h7r,A.h7s,A.h7t])})();(function constants(){D.fvu=new B.pO("Intl.locale")})();(function staticFields(){$.hfh=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iFz","h8d",()=>48)})()};
(a=>{a["CFkajrK8AnVvqYCcXzGJhZE4yWA="]=a.current})($__dart_deferred_initializers__);