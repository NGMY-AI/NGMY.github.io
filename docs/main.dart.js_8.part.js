((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fXj(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_n(d){var y,x,w,v
if(d==null){if(A.f82()==null)$.fBK="en_US"
y=A.f82()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fXj(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fGf(d,e,f){var y,x,w,v
if(d==null){if(A.f82()==null)$.fBK="en_US"
y=A.f82()
y.toString
return A.fGf(y,e,f)}if(e.$1(d))return d
x=[A.hCU(),A.hCW(),A.hCV(),new A.fur(),new A.fus(),new A.fut()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hzH(d)},
hzH(d){throw B.O(B.dC('Invalid locale "'+d+'"',null))},
fDN(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h14(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fXj(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fur:function fur(){},
fus:function fus(){},
fut:function fut(){},
f82(){var y=B.aR($.bs.h(0,D.ekb))
return y==null?$.fBK:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[231]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fur.prototype={
$1(d){return A.fDN(A.h14(d))},
$S:17}
A.fus.prototype={
$1(d){return A.fDN(A.a_n(d))},
$S:17}
A.fut.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hCU","a_n",1)
y(A,"hCV","fDN",0)
y(A,"hCW","h14",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fur,A.fus,A.fut])})();(function constants(){D.ekb=new B.oE("Intl.locale")})();(function staticFields(){$.fBK=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hVn","fv1",()=>48)})()};
(a=>{a["+mR6+THbkwRvshATYE0sdrZSeDI="]=a.current})($__dart_deferred_initializers__);