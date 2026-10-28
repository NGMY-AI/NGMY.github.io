((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hdj(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0W(d){var y,x,w,v
if(d==null){if(A.fmR()==null)$.fS7="en_US"
y=A.fmR()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hdj(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fWQ(d,e,f){var y,x,w,v
if(d==null){if(A.fmR()==null)$.fS7="en_US"
y=A.fmR()
y.toString
return A.fWQ(y,e,f)}if(e.$1(d))return d
x=[A.hUS(),A.hUU(),A.hUT(),new A.fKG(),new A.fKH(),new A.fKI()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hRz(d)},
hRz(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fUg(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hic(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hdj(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fKG:function fKG(){},
fKH:function fKH(){},
fKI:function fKI(){},
fmR(){var y=B.aU($.bx.h(0,D.eRb))
return y==null?$.fS7:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[258]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fKG.prototype={
$1(d){return A.fUg(A.hic(d))},
$S:17}
A.fKH.prototype={
$1(d){return A.fUg(A.a0W(d))},
$S:17}
A.fKI.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hUS","a0W",1)
y(A,"hUT","fUg",0)
y(A,"hUU","hic",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fKG,A.fKH,A.fKI])})();(function constants(){D.eRb=new B.p2("Intl.locale")})();(function staticFields(){$.fS7=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"icK","fLl",()=>48)})()};
(a=>{a["aIGTJNHeuLmwM9rFYk2yR2xVv0c="]=a.current})($__dart_deferred_initializers__);