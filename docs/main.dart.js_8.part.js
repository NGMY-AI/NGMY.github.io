((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fZd(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_t(d){var y,x,w,v
if(d==null){if(A.f9j()==null)$.fDv="en_US"
y=A.f9j()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fZd(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aU(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fI5(d,e,f){var y,x,w,v
if(d==null){if(A.f9j()==null)$.fDv="en_US"
y=A.f9j()
y.toString
return A.fI5(y,e,f)}if(e.$1(d))return d
x=[A.hET(),A.hEV(),A.hEU(),new A.fwa(),new A.fwb(),new A.fwc()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hBI(d)},
hBI(d){throw B.O(B.dD('Invalid locale "'+d+'"',null))},
fFB(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h31(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fZd(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fwa:function fwa(){},
fwb:function fwb(){},
fwc:function fwc(){},
f9j(){var y=B.aR($.bs.h(0,D.em8))
return y==null?$.fDv:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[231]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fwa.prototype={
$1(d){return A.fFB(A.h31(d))},
$S:17}
A.fwb.prototype={
$1(d){return A.fFB(A.a_t(d))},
$S:17}
A.fwc.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hET","a_t",1)
y(A,"hEU","fFB",0)
y(A,"hEV","h31",0)})();(function inheritance(){var y=a.inheritMany
y(B.i1,[A.fwa,A.fwb,A.fwc])})();(function constants(){D.em8=new B.oH("Intl.locale")})();(function staticFields(){$.fDv=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hXu","fwL",()=>48)})()};
(a=>{a["hks9/Own2ytwtAOujZ5W6TnQogY="]=a.current})($__dart_deferred_initializers__);