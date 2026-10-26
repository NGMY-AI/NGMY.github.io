((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fYU(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_u(d){var y,x,w,v
if(d==null){if(A.f9k()==null)$.fDf="en_US"
y=A.f9k()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fYU(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fHN(d,e,f){var y,x,w,v
if(d==null){if(A.f9k()==null)$.fDf="en_US"
y=A.f9k()
y.toString
return A.fHN(y,e,f)}if(e.$1(d))return d
x=[A.hEy(),A.hEA(),A.hEz(),new A.fvV(),new A.fvW(),new A.fvX()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hBn(d)},
hBn(d){throw B.O(B.dD('Invalid locale "'+d+'"',null))},
fFk(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h2H(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fYU(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fvV:function fvV(){},
fvW:function fvW(){},
fvX:function fvX(){},
f9k(){var y=B.aR($.bs.h(0,D.em3))
return y==null?$.fDf:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[232]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fvV.prototype={
$1(d){return A.fFk(A.h2H(d))},
$S:17}
A.fvW.prototype={
$1(d){return A.fFk(A.a_u(d))},
$S:17}
A.fvX.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hEy","a_u",1)
y(A,"hEz","fFk",0)
y(A,"hEA","h2H",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fvV,A.fvW,A.fvX])})();(function constants(){D.em3=new B.oG("Intl.locale")})();(function staticFields(){$.fDf=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hX7","fwv",()=>48)})()};
(a=>{a["7F/XEX19s8VHVDDfEhZm+TZRxrA="]=a.current})($__dart_deferred_initializers__);