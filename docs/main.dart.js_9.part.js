((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hhP(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1k(d){var y,x,w,v
if(d==null){if(A.fqO()==null)$.fWo="en_US"
y=A.fqO()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hhP(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h0e(d,e,f){var y,x,w,v
if(d==null){if(A.fqO()==null)$.fWo="en_US"
y=A.fqO()
y.toString
return A.h0e(y,e,f)}if(e.$1(d))return d
x=[A.hZC(),A.hZE(),A.hZD(),new A.fOT(),new A.fOU(),new A.fOV()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hWi(d)},
hWi(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fYB(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hmK(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hhP(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fOT:function fOT(){},
fOU:function fOU(){},
fOV:function fOV(){},
fqO(){var y=B.aU($.bz.h(0,D.eWs))
return y==null?$.fWo:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fOT.prototype={
$1(d){return A.fYB(A.hmK(d))},
$S:17}
A.fOU.prototype={
$1(d){return A.fYB(A.a1k(d))},
$S:17}
A.fOV.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hZC","a1k",1)
y(A,"hZD","fYB",0)
y(A,"hZE","hmK",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fOT,A.fOU,A.fOV])})();(function constants(){D.eWs=new B.p9("Intl.locale")})();(function staticFields(){$.fWo=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ihC","fPy",()=>48)})()};
(a=>{a["+ZEJ5DGGgBCgDJ6knCfkhL0bVno="]=a.current})($__dart_deferred_initializers__);