((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hnm(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1K(d){var y,x,w,v
if(d==null){if(A.fvL()==null)$.h0M="en_US"
y=A.fvL()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hnm(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b6(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h5I(d,e,f){var y,x,w,v
if(d==null){if(A.fvL()==null)$.h0M="en_US"
y=A.fvL()
y.toString
return A.h5I(y,e,f)}if(e.$1(d))return d
x=[A.i4p(),A.i4r(),A.i4q(),new A.fU6(),new A.fU7(),new A.fU8()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i12(d)},
i12(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h30(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hsp(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hnm(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fU6:function fU6(){},
fU7:function fU7(){},
fU8:function fU8(){},
fvL(){var y=B.aU($.bz.h(0,D.f2X))
return y==null?$.h0M:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[259]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fU6.prototype={
$1(d){return A.h30(A.hsp(d))},
$S:17}
A.fU7.prototype={
$1(d){return A.h30(A.a1K(d))},
$S:17}
A.fU8.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i4p","a1K",1)
y(A,"i4q","h30",0)
y(A,"i4r","hsp",0)})();(function inheritance(){var y=a.inheritMany
y(B.i0,[A.fU6,A.fU7,A.fU8])})();(function constants(){D.f2X=new B.ph("Intl.locale")})();(function staticFields(){$.h0M=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"int","fUO",()=>48)})()};
(a=>{a["Ja0ko+1lG6zj1uqNg0VyMS/VFgI="]=a.current})($__dart_deferred_initializers__);