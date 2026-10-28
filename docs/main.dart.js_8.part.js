((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hby(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0L(d){var y,x,w,v
if(d==null){if(A.flj()==null)$.fQr="en_US"
y=A.flj()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hby(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fV8(d,e,f){var y,x,w,v
if(d==null){if(A.flj()==null)$.fQr="en_US"
y=A.flj()
y.toString
return A.fV8(y,e,f)}if(e.$1(d))return d
x=[A.hT3(),A.hT5(),A.hT4(),new A.fJ4(),new A.fJ5(),new A.fJ6()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hPL(d)},
hPL(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fSA(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hgq(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hby(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fJ4:function fJ4(){},
fJ5:function fJ5(){},
fJ6:function fJ6(){},
flj(){var y=B.aU($.bw.h(0,D.eOd))
return y==null?$.fQr:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[256]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fJ4.prototype={
$1(d){return A.fSA(A.hgq(d))},
$S:17}
A.fJ5.prototype={
$1(d){return A.fSA(A.a0L(d))},
$S:17}
A.fJ6.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hT3","a0L",1)
y(A,"hT4","fSA",0)
y(A,"hT5","hgq",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fJ4,A.fJ5,A.fJ6])})();(function constants(){D.eOd=new B.p0("Intl.locale")})();(function staticFields(){$.fQr=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iaW","fJG",()=>48)})()};
(a=>{a["MMK6a5WHqlRa4XVnYuuWsWQdquQ="]=a.current})($__dart_deferred_initializers__);