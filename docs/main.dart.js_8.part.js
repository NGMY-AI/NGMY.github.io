((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fZc(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_t(d){var y,x,w,v
if(d==null){if(A.f9i()==null)$.fDu="en_US"
y=A.f9i()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fZc(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aU(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fI4(d,e,f){var y,x,w,v
if(d==null){if(A.f9i()==null)$.fDu="en_US"
y=A.f9i()
y.toString
return A.fI4(y,e,f)}if(e.$1(d))return d
x=[A.hES(),A.hEU(),A.hET(),new A.fw9(),new A.fwa(),new A.fwb()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hBH(d)},
hBH(d){throw B.O(B.dD('Invalid locale "'+d+'"',null))},
fFA(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h30(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fZc(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fw9:function fw9(){},
fwa:function fwa(){},
fwb:function fwb(){},
f9i(){var y=B.aR($.bs.h(0,D.em8))
return y==null?$.fDu:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[231]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fw9.prototype={
$1(d){return A.fFA(A.h30(d))},
$S:17}
A.fwa.prototype={
$1(d){return A.fFA(A.a_t(d))},
$S:17}
A.fwb.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hES","a_t",1)
y(A,"hET","fFA",0)
y(A,"hEU","h30",0)})();(function inheritance(){var y=a.inheritMany
y(B.i1,[A.fw9,A.fwa,A.fwb])})();(function constants(){D.em8=new B.oH("Intl.locale")})();(function staticFields(){$.fDu=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hXt","fwK",()=>48)})()};
(a=>{a["eDBmM0jgP/OfGsZxoJAFt+SjKLk="]=a.current})($__dart_deferred_initializers__);