((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fZY(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_x(d){var y,x,w,v
if(d==null){if(A.f9W()==null)$.fE8="en_US"
y=A.f9W()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fZY(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fIJ(d,e,f){var y,x,w,v
if(d==null){if(A.f9W()==null)$.fE8="en_US"
y=A.f9W()
y.toString
return A.fIJ(y,e,f)}if(e.$1(d))return d
x=[A.hFD(),A.hFF(),A.hFE(),new A.fwP(),new A.fwQ(),new A.fwR()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hCs(d)},
hCs(d){throw B.P(B.dF('Invalid locale "'+d+'"',null))},
fGe(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h3N(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fZY(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fwP:function fwP(){},
fwQ:function fwQ(){},
fwR:function fwR(){},
f9W(){var y=B.aR($.bs.h(0,D.eua))
return y==null?$.fE8:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fwP.prototype={
$1(d){return A.fGe(A.h3N(d))},
$S:17}
A.fwQ.prototype={
$1(d){return A.fGe(A.a_x(d))},
$S:17}
A.fwR.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hFD","a_x",1)
y(A,"hFE","fGe",0)
y(A,"hFF","h3N",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fwP,A.fwQ,A.fwR])})();(function constants(){D.eua=new B.oG("Intl.locale")})();(function staticFields(){$.fE8=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hYf","fxp",()=>48)})()};
(a=>{a["MvcAYIe8Maq4pGRmD0n7Zz1uVGI="]=a.current})($__dart_deferred_initializers__);