((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzz(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2Y(d){var y,x,w,v
if(d==null){if(A.fG8()==null)$.hcl="en_US"
y=A.fG8()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzz(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhC(d,e,f){var y,x,w,v
if(d==null){if(A.fG8()==null)$.hcl="en_US"
y=A.fG8()
y.toString
return A.hhC(y,e,f)}if(e.$1(d))return d
x=[A.iiD(),A.iiF(),A.iiE(),new A.h4u(),new A.h4v(),new A.h4w()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.if8(d)},
if8(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
heM(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hF1(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzz(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h4u:function h4u(){},
h4v:function h4v(){},
h4w:function h4w(){},
fG8(){var y=B.aS($.bE.h(0,D.flq))
return y==null?$.hcl:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[285]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4u.prototype={
$1(d){return A.heM(A.hF1(d))},
$S:17}
A.h4v.prototype={
$1(d){return A.heM(A.a2Y(d))},
$S:17}
A.h4w.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iiD","a2Y",1)
y(A,"iiE","heM",0)
y(A,"iiF","hF1",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4u,A.h4v,A.h4w])})();(function constants(){D.flq=new B.pD("Intl.locale")})();(function staticFields(){$.hcl=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCL","h5g",()=>48)})()};
(a=>{a["bii8gNGRyLZJoHmqa+jyWLAqU6U="]=a.current})($__dart_deferred_initializers__);