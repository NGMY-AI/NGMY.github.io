((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hiK(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1t(d){var y,x,w,v
if(d==null){if(A.fr9()==null)$.fX9="en_US"
y=A.fr9()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hiK(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h14(d,e,f){var y,x,w,v
if(d==null){if(A.fr9()==null)$.fX9="en_US"
y=A.fr9()
y.toString
return A.h14(y,e,f)}if(e.$1(d))return d
x=[A.i_N(),A.i_P(),A.i_O(),new A.fPv(),new A.fPw(),new A.fPx()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hXr(d)},
hXr(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
fZo(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hnO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hiK(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fPv:function fPv(){},
fPw:function fPw(){},
fPx:function fPx(){},
fr9(){var y=B.aU($.bz.h(0,D.f1f))
return y==null?$.fX9:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[260]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fPv.prototype={
$1(d){return A.fZo(A.hnO(d))},
$S:17}
A.fPw.prototype={
$1(d){return A.fZo(A.a1t(d))},
$S:17}
A.fPx.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_N","a1t",1)
y(A,"i_O","fZo",0)
y(A,"i_P","hnO",0)})();(function inheritance(){var y=a.inheritMany
y(B.hZ,[A.fPv,A.fPw,A.fPx])})();(function constants(){D.f1f=new B.pc("Intl.locale")})();(function staticFields(){$.fX9=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiR","fQc",()=>48)})()};
(a=>{a["oXjOSpMLAuTjNUoQBhKrc0Xpazo="]=a.current})($__dart_deferred_initializers__);