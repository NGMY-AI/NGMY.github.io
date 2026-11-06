((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hnz(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1L(d){var y,x,w,v
if(d==null){if(A.fvX()==null)$.h0Z="en_US"
y=A.fvX()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hnz(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b6(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h5V(d,e,f){var y,x,w,v
if(d==null){if(A.fvX()==null)$.h0Z="en_US"
y=A.fvX()
y.toString
return A.h5V(y,e,f)}if(e.$1(d))return d
x=[A.i4E(),A.i4G(),A.i4F(),new A.fUj(),new A.fUk(),new A.fUl()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i1h(d)},
i1h(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h3d(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hsE(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hnz(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fUj:function fUj(){},
fUk:function fUk(){},
fUl:function fUl(){},
fvX(){var y=B.aU($.bz.h(0,D.f3m))
return y==null?$.h0Z:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fUj.prototype={
$1(d){return A.h3d(A.hsE(d))},
$S:17}
A.fUk.prototype={
$1(d){return A.h3d(A.a1L(d))},
$S:17}
A.fUl.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i4E","a1L",1)
y(A,"i4F","h3d",0)
y(A,"i4G","hsE",0)})();(function inheritance(){var y=a.inheritMany
y(B.i0,[A.fUj,A.fUk,A.fUl])})();(function constants(){D.f3m=new B.ph("Intl.locale")})();(function staticFields(){$.h0Z=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"inJ","fV0",()=>48)})()};
(a=>{a["TuIC57Qk4SKssP4J2RlMyNETDR0="]=a.current})($__dart_deferred_initializers__);