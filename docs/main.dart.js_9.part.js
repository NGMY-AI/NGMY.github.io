((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hlm(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1D(d){var y,x,w,v
if(d==null){if(A.ftV()==null)$.fZP="en_US"
y=A.ftV()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hlm(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3J(d,e,f){var y,x,w,v
if(d==null){if(A.ftV()==null)$.fZP="en_US"
y=A.ftV()
y.toString
return A.h3J(y,e,f)}if(e.$1(d))return d
x=[A.i2e(),A.i2g(),A.i2f(),new A.fSd(),new A.fSe(),new A.fSf()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZU(d)},
hZU(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h11(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hql(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hlm(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fSd:function fSd(){},
fSe:function fSe(){},
fSf:function fSf(){},
ftV(){var y=B.aU($.bz.h(0,D.f1G))
return y==null?$.fZP:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fSd.prototype={
$1(d){return A.h11(A.hql(d))},
$S:17}
A.fSe.prototype={
$1(d){return A.h11(A.a1D(d))},
$S:17}
A.fSf.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i2e","a1D",1)
y(A,"i2f","h11",0)
y(A,"i2g","hql",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fSd,A.fSe,A.fSf])})();(function constants(){D.f1G=new B.pg("Intl.locale")})();(function staticFields(){$.fZP=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ilh","fSU",()=>48)})()};
(a=>{a["BAv7Pr8oX69yTkxPgmkW5nGw5Z8="]=a.current})($__dart_deferred_initializers__);