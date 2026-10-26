((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fYX(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_u(d){var y,x,w,v
if(d==null){if(A.f9n()==null)$.fDi="en_US"
y=A.f9n()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fYX(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aU(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fHQ(d,e,f){var y,x,w,v
if(d==null){if(A.f9n()==null)$.fDi="en_US"
y=A.f9n()
y.toString
return A.fHQ(y,e,f)}if(e.$1(d))return d
x=[A.hEB(),A.hED(),A.hEC(),new A.fvY(),new A.fvZ(),new A.fw_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hBq(d)},
hBq(d){throw B.O(B.dD('Invalid locale "'+d+'"',null))},
fFn(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h2K(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fYX(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fvY:function fvY(){},
fvZ:function fvZ(){},
fw_:function fw_(){},
f9n(){var y=B.aR($.bs.h(0,D.em3))
return y==null?$.fDi:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[232]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fvY.prototype={
$1(d){return A.fFn(A.h2K(d))},
$S:17}
A.fvZ.prototype={
$1(d){return A.fFn(A.a_u(d))},
$S:17}
A.fw_.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hEB","a_u",1)
y(A,"hEC","fFn",0)
y(A,"hED","h2K",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fvY,A.fvZ,A.fw_])})();(function constants(){D.em3=new B.oG("Intl.locale")})();(function staticFields(){$.fDi=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hXa","fwy",()=>48)})()};
(a=>{a["9ax5/xZfkWQb8W2Q18c5dLPaqKA="]=a.current})($__dart_deferred_initializers__);