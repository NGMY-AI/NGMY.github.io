((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hhT(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1k(d){var y,x,w,v
if(d==null){if(A.fqR()==null)$.fWs="en_US"
y=A.fqR()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hhT(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h0i(d,e,f){var y,x,w,v
if(d==null){if(A.fqR()==null)$.fWs="en_US"
y=A.fqR()
y.toString
return A.h0i(y,e,f)}if(e.$1(d))return d
x=[A.hZG(),A.hZI(),A.hZH(),new A.fOX(),new A.fOY(),new A.fOZ()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hWm(d)},
hWm(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fYF(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hmO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hhT(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fOX:function fOX(){},
fOY:function fOY(){},
fOZ:function fOZ(){},
fqR(){var y=B.aU($.bz.h(0,D.eWz))
return y==null?$.fWs:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[261]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fOX.prototype={
$1(d){return A.fYF(A.hmO(d))},
$S:17}
A.fOY.prototype={
$1(d){return A.fYF(A.a1k(d))},
$S:17}
A.fOZ.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hZG","a1k",1)
y(A,"hZH","fYF",0)
y(A,"hZI","hmO",0)})();(function inheritance(){var y=a.inheritMany
y(B.hV,[A.fOX,A.fOY,A.fOZ])})();(function constants(){D.eWz=new B.p9("Intl.locale")})();(function staticFields(){$.fWs=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ihG","fPC",()=>48)})()};
(a=>{a["2kCxQtzNFVgQ2EMFaROYl1qRWYw="]=a.current})($__dart_deferred_initializers__);