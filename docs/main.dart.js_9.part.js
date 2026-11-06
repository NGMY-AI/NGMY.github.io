((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
his(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1q(d){var y,x,w,v
if(d==null){if(A.fqR()==null)$.fWS="en_US"
y=A.fqR()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.his(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h0M(d,e,f){var y,x,w,v
if(d==null){if(A.fqR()==null)$.fWS="en_US"
y=A.fqR()
y.toString
return A.h0M(y,e,f)}if(e.$1(d))return d
x=[A.i_y(),A.i_A(),A.i_z(),new A.fPc(),new A.fPd(),new A.fPe()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hX8(d)},
hX8(d){throw B.V(B.dH('Invalid locale "'+d+'"',null))},
fZ5(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hnw(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.his(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fPc:function fPc(){},
fPd:function fPd(){},
fPe:function fPe(){},
fqR(){var y=B.aU($.bz.h(0,D.f1M))
return y==null?$.fWS:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[260]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fPc.prototype={
$1(d){return A.fZ5(A.hnw(d))},
$S:17}
A.fPd.prototype={
$1(d){return A.fZ5(A.a1q(d))},
$S:17}
A.fPe.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i_y","a1q",1)
y(A,"i_z","fZ5",0)
y(A,"i_A","hnw",0)})();(function inheritance(){var y=a.inheritMany
y(B.i_,[A.fPc,A.fPd,A.fPe])})();(function constants(){D.f1M=new B.pe("Intl.locale")})();(function staticFields(){$.fWS=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iiB","fPU",()=>48)})()};
(a=>{a["40nREEcOXYlGCYyjxZY8V49F8A8="]=a.current})($__dart_deferred_initializers__);