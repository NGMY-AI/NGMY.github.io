((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hbC(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0L(d){var y,x,w,v
if(d==null){if(A.flm()==null)$.fQu="en_US"
y=A.flm()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hbC(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fVb(d,e,f){var y,x,w,v
if(d==null){if(A.flm()==null)$.fQu="en_US"
y=A.flm()
y.toString
return A.fVb(y,e,f)}if(e.$1(d))return d
x=[A.hT7(),A.hT9(),A.hT8(),new A.fJ7(),new A.fJ8(),new A.fJ9()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hPP(d)},
hPP(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fSD(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hgu(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hbC(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fJ7:function fJ7(){},
fJ8:function fJ8(){},
fJ9:function fJ9(){},
flm(){var y=B.aU($.bw.h(0,D.eOd))
return y==null?$.fQu:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[256]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fJ7.prototype={
$1(d){return A.fSD(A.hgu(d))},
$S:17}
A.fJ8.prototype={
$1(d){return A.fSD(A.a0L(d))},
$S:17}
A.fJ9.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hT7","a0L",1)
y(A,"hT8","fSD",0)
y(A,"hT9","hgu",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fJ7,A.fJ8,A.fJ9])})();(function constants(){D.eOd=new B.p1("Intl.locale")})();(function staticFields(){$.fQu=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ib_","fJJ",()=>48)})()};
(a=>{a["NWqmSvY7+gw2PocVY/0x7UEOhsQ="]=a.current})($__dart_deferred_initializers__);