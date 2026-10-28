((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hdG(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1_(d){var y,x,w,v
if(d==null){if(A.fn9()==null)$.fSs="en_US"
y=A.fn9()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hdG(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fXa(d,e,f){var y,x,w,v
if(d==null){if(A.fn9()==null)$.fSs="en_US"
y=A.fn9()
y.toString
return A.fXa(y,e,f)}if(e.$1(d))return d
x=[A.hVh(),A.hVj(),A.hVi(),new A.fKY(),new A.fKZ(),new A.fL_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hRZ(d)},
hRZ(d){throw B.V(B.dI('Invalid locale "'+d+'"',null))},
fUB(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hiz(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hdG(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fKY:function fKY(){},
fKZ:function fKZ(){},
fL_:function fL_(){},
fn9(){var y=B.aT($.bx.h(0,D.eRa))
return y==null?$.fSs:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[258]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fKY.prototype={
$1(d){return A.fUB(A.hiz(d))},
$S:17}
A.fKZ.prototype={
$1(d){return A.fUB(A.a1_(d))},
$S:17}
A.fL_.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hVh","a1_",1)
y(A,"hVi","fUB",0)
y(A,"hVj","hiz",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fKY,A.fKZ,A.fL_])})();(function constants(){D.eRa=new B.p2("Intl.locale")})();(function staticFields(){$.fSs=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"id9","fLD",()=>48)})()};
(a=>{a["UwP5TOW5pF9VQdHjZMqsqes8b9s="]=a.current})($__dart_deferred_initializers__);