((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fZi(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_t(d){var y,x,w,v
if(d==null){if(A.f9o()==null)$.fDA="en_US"
y=A.f9o()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fZi(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aU(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fIa(d,e,f){var y,x,w,v
if(d==null){if(A.f9o()==null)$.fDA="en_US"
y=A.f9o()
y.toString
return A.fIa(y,e,f)}if(e.$1(d))return d
x=[A.hEY(),A.hF_(),A.hEZ(),new A.fwf(),new A.fwg(),new A.fwh()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hBN(d)},
hBN(d){throw B.O(B.dE('Invalid locale "'+d+'"',null))},
fFG(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h36(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fZi(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fwf:function fwf(){},
fwg:function fwg(){},
fwh:function fwh(){},
f9o(){var y=B.aR($.bs.h(0,D.em8))
return y==null?$.fDA:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[231]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fwf.prototype={
$1(d){return A.fFG(A.h36(d))},
$S:17}
A.fwg.prototype={
$1(d){return A.fFG(A.a_t(d))},
$S:17}
A.fwh.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hEY","a_t",1)
y(A,"hEZ","fFG",0)
y(A,"hF_","h36",0)})();(function inheritance(){var y=a.inheritMany
y(B.i1,[A.fwf,A.fwg,A.fwh])})();(function constants(){D.em8=new B.oH("Intl.locale")})();(function staticFields(){$.fDA=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hXz","fwQ",()=>48)})()};
(a=>{a["iEGBjOyGa32LP2/rG04copC34Ow="]=a.current})($__dart_deferred_initializers__);