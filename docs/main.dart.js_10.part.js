((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzv(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2Y(d){var y,x,w,v
if(d==null){if(A.fG_()==null)$.hcj="en_US"
y=A.fG_()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzv(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhz(d,e,f){var y,x,w,v
if(d==null){if(A.fG_()==null)$.hcj="en_US"
y=A.fG_()
y.toString
return A.hhz(y,e,f)}if(e.$1(d))return d
x=[A.iix(),A.iiz(),A.iiy(),new A.h4r(),new A.h4s(),new A.h4t()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.if3(d)},
if3(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
heK(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hEY(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzv(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h4r:function h4r(){},
h4s:function h4s(){},
h4t:function h4t(){},
fG_(){var y=B.aS($.bF.h(0,D.flD))
return y==null?$.hcj:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[287]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4r.prototype={
$1(d){return A.heK(A.hEY(d))},
$S:17}
A.h4s.prototype={
$1(d){return A.heK(A.a2Y(d))},
$S:17}
A.h4t.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iix","a2Y",1)
y(A,"iiy","heK",0)
y(A,"iiz","hEY",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4r,A.h4s,A.h4t])})();(function constants(){D.flD=new B.pF("Intl.locale")})();(function staticFields(){$.hcj=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCI","h5d",()=>48)})()};
(a=>{a["ul1xkNG3SZ5glo+esSFC8zV7xt0="]=a.current})($__dart_deferred_initializers__);