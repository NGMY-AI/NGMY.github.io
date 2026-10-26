((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fZo(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_t(d){var y,x,w,v
if(d==null){if(A.f9t()==null)$.fDF="en_US"
y=A.f9t()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fZo(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aU(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fIf(d,e,f){var y,x,w,v
if(d==null){if(A.f9t()==null)$.fDF="en_US"
y=A.f9t()
y.toString
return A.fIf(y,e,f)}if(e.$1(d))return d
x=[A.hF2(),A.hF4(),A.hF3(),new A.fwk(),new A.fwl(),new A.fwm()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hBS(d)},
hBS(d){throw B.O(B.dE('Invalid locale "'+d+'"',null))},
fFL(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h3c(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fZo(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fwk:function fwk(){},
fwl:function fwl(){},
fwm:function fwm(){},
f9t(){var y=B.aR($.bs.h(0,D.em8))
return y==null?$.fDF:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[231]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fwk.prototype={
$1(d){return A.fFL(A.h3c(d))},
$S:17}
A.fwl.prototype={
$1(d){return A.fFL(A.a_t(d))},
$S:17}
A.fwm.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hF2","a_t",1)
y(A,"hF3","fFL",0)
y(A,"hF4","h3c",0)})();(function inheritance(){var y=a.inheritMany
y(B.i1,[A.fwk,A.fwl,A.fwm])})();(function constants(){D.em8=new B.oH("Intl.locale")})();(function staticFields(){$.fDF=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hXE","fwV",()=>48)})()};
(a=>{a["oh6jWrrhlD4U/yjWXzl9+G6UVBA="]=a.current})($__dart_deferred_initializers__);