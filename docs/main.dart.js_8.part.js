((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fZK(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_u(d){var y,x,w,v
if(d==null){if(A.f9O()==null)$.fE0="en_US"
y=A.f9O()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fZK(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fIB(d,e,f){var y,x,w,v
if(d==null){if(A.f9O()==null)$.fE0="en_US"
y=A.f9O()
y.toString
return A.fIB(y,e,f)}if(e.$1(d))return d
x=[A.hFr(),A.hFt(),A.hFs(),new A.fwF(),new A.fwG(),new A.fwH()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hCg(d)},
hCg(d){throw B.P(B.dF('Invalid locale "'+d+'"',null))},
fG6(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h3y(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fZK(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fwF:function fwF(){},
fwG:function fwG(){},
fwH:function fwH(){},
f9O(){var y=B.aR($.bs.h(0,D.etD))
return y==null?$.fE0:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fwF.prototype={
$1(d){return A.fG6(A.h3y(d))},
$S:17}
A.fwG.prototype={
$1(d){return A.fG6(A.a_u(d))},
$S:17}
A.fwH.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hFr","a_u",1)
y(A,"hFs","fG6",0)
y(A,"hFt","h3y",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fwF,A.fwG,A.fwH])})();(function constants(){D.etD=new B.oG("Intl.locale")})();(function staticFields(){$.fE0=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hY3","fxf",()=>48)})()};
(a=>{a["zdSjGbQuPqevORRg0Yfl0tR8mMs="]=a.current})($__dart_deferred_initializers__);