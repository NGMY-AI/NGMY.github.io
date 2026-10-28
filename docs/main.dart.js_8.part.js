((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h8o(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0u(d){var y,x,w,v
if(d==null){if(A.fie()==null)$.fNi="en_US"
y=A.fie()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h8o(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fS_(d,e,f){var y,x,w,v
if(d==null){if(A.fie()==null)$.fNi="en_US"
y=A.fie()
y.toString
return A.fS_(y,e,f)}if(e.$1(d))return d
x=[A.hPN(),A.hPP(),A.hPO(),new A.fFZ(),new A.fG_(),new A.fG0()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hMv(d)},
hMv(d){throw B.S(B.dH('Invalid locale "'+d+'"',null))},
fPq(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hdg(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h8o(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fFZ:function fFZ(){},
fG_:function fG_(){},
fG0:function fG0(){},
fie(){var y=B.aT($.bw.h(0,D.eK8))
return y==null?$.fNi:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
D=c[235]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fFZ.prototype={
$1(d){return A.fPq(A.hdg(d))},
$S:17}
A.fG_.prototype={
$1(d){return A.fPq(A.a0u(d))},
$S:17}
A.fG0.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hPN","a0u",1)
y(A,"hPO","fPq",0)
y(A,"hPP","hdg",0)})();(function inheritance(){var y=a.inheritMany
y(B.i7,[A.fFZ,A.fG_,A.fG0])})();(function constants(){D.eK8=new B.oV("Intl.locale")})();(function staticFields(){$.fNi=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i7D","fGA",()=>48)})()};
(a=>{a["PY6i9g+gAr+UR5m3/JDAtXhFylc="]=a.current})($__dart_deferred_initializers__);