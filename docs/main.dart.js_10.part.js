((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hAH(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a35(d){var y,x,w,v
if(d==null){if(A.fGX()==null)$.hdo="en_US"
y=A.fGX()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hAH(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hiF(d,e,f){var y,x,w,v
if(d==null){if(A.fGX()==null)$.hdo="en_US"
y=A.fGX()
y.toString
return A.hiF(y,e,f)}if(e.$1(d))return d
x=[A.ijO(),A.ijQ(),A.ijP(),new A.h5x(),new A.h5y(),new A.h5z()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igk(d)},
igk(d){throw B.W(B.dN('Invalid locale "'+d+'"',null))},
hfQ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hGb(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hAH(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5x:function h5x(){},
h5y:function h5y(){},
h5z:function h5z(){},
fGX(){var y=B.aU($.bF.h(0,D.fnx))
return y==null?$.hdo:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[289]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5x.prototype={
$1(d){return A.hfQ(A.hGb(d))},
$S:17}
A.h5y.prototype={
$1(d){return A.hfQ(A.a35(d))},
$S:17}
A.h5z.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ijO","a35",1)
y(A,"ijP","hfQ",0)
y(A,"ijQ","hGb",0)})();(function inheritance(){var y=a.inheritMany
y(B.hv,[A.h5x,A.h5y,A.h5z])})();(function constants(){D.fnx=new B.pH("Intl.locale")})();(function staticFields(){$.hdo=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iE3","h6j",()=>48)})()};
(a=>{a["3bA5Pde3p6ENYTavvKZ8vFt5lK4="]=a.current})($__dart_deferred_initializers__);