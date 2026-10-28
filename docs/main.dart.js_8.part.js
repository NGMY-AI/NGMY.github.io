((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h8z(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0t(d){var y,x,w,v
if(d==null){if(A.fio()==null)$.fNs="en_US"
y=A.fio()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h8z(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fSa(d,e,f){var y,x,w,v
if(d==null){if(A.fio()==null)$.fNs="en_US"
y=A.fio()
y.toString
return A.fSa(y,e,f)}if(e.$1(d))return d
x=[A.hPY(),A.hQ_(),A.hPZ(),new A.fG8(),new A.fG9(),new A.fGa()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hMG(d)},
hMG(d){throw B.S(B.dH('Invalid locale "'+d+'"',null))},
fPA(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hdr(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h8z(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fG8:function fG8(){},
fG9:function fG9(){},
fGa:function fGa(){},
fio(){var y=B.aT($.bw.h(0,D.eKX))
return y==null?$.fNs:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[234]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fG8.prototype={
$1(d){return A.fPA(A.hdr(d))},
$S:17}
A.fG9.prototype={
$1(d){return A.fPA(A.a0t(d))},
$S:17}
A.fGa.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hPY","a0t",1)
y(A,"hPZ","fPA",0)
y(A,"hQ_","hdr",0)})();(function inheritance(){var y=a.inheritMany
y(B.i7,[A.fG8,A.fG9,A.fGa])})();(function constants(){D.eKX=new B.oW("Intl.locale")})();(function staticFields(){$.fNs=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i7P","fGK",()=>48)})()};
(a=>{a["1rHQy8pZ8ykXP5WSzxyyr7etogg="]=a.current})($__dart_deferred_initializers__);