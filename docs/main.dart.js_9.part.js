((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hkx(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1u(d){var y,x,w,v
if(d==null){if(A.ftn()==null)$.fZ1="en_US"
y=A.ftn()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hkx(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h2U(d,e,f){var y,x,w,v
if(d==null){if(A.ftn()==null)$.fZ1="en_US"
y=A.ftn()
y.toString
return A.h2U(y,e,f)}if(e.$1(d))return d
x=[A.i1n(),A.i1p(),A.i1o(),new A.fRu(),new A.fRv(),new A.fRw()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZ2(d)},
hZ2(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
h0e(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hpw(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hkx(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fRu:function fRu(){},
fRv:function fRv(){},
fRw:function fRw(){},
ftn(){var y=B.aU($.bz.h(0,D.f_w))
return y==null?$.fZ1:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fRu.prototype={
$1(d){return A.h0e(A.hpw(d))},
$S:17}
A.fRv.prototype={
$1(d){return A.h0e(A.a1u(d))},
$S:17}
A.fRw.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i1n","a1u",1)
y(A,"i1o","h0e",0)
y(A,"i1p","hpw",0)})();(function inheritance(){var y=a.inheritMany
y(B.hX,[A.fRu,A.fRv,A.fRw])})();(function constants(){D.f_w=new B.pc("Intl.locale")})();(function staticFields(){$.fZ1=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ikq","fS9",()=>48)})()};
(a=>{a["HMbhW/AJZ1pKLUV+zr+3btSEwfc="]=a.current})($__dart_deferred_initializers__);