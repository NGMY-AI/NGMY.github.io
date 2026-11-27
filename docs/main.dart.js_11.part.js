((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hPR(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4g(d){var y,x,w,v
if(d==null){if(A.fSD()==null)$.hrk="en_US"
y=A.fSD()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hPR(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hx6(d,e,f){var y,x,w,v
if(d==null){if(A.fSD()==null)$.hrk="en_US"
y=A.fSD()
y.toString
return A.hx6(y,e,f)}if(e.$1(d))return d
x=[A.iAu(),A.iAw(),A.iAv(),new A.hjm(),new A.hjn(),new A.hjo()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iwW(d)},
iwW(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hu_(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hVT(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hPR(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hjm:function hjm(){},
hjn:function hjn(){},
hjo:function hjo(){},
fSD(){var y=B.aV($.bG.h(0,D.fJq))
return y==null?$.hrk:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[323]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hjm.prototype={
$1(d){return A.hu_(A.hVT(d))},
$S:15}
A.hjn.prototype={
$1(d){return A.hu_(A.a4g(d))},
$S:15}
A.hjo.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iAu","a4g",1)
y(A,"iAv","hu_",0)
y(A,"iAw","hVT",0)})();(function inheritance(){var y=a.inheritMany
y(B.hr,[A.hjm,A.hjn,A.hjo])})();(function constants(){D.fJq=new B.q2("Intl.locale")})();(function staticFields(){$.hrk=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iUX","hk8",()=>48)})()};
(a=>{a["K74ByD/HkM27ByhgPCH3j2DWca4="]=a.current})($__dart_deferred_initializers__);