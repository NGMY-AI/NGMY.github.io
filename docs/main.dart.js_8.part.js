((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h1y(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_R(d){var y,x,w,v
if(d==null){if(A.fch()==null)$.fGD="en_US"
y=A.fch()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h1y(d)
if(x===-1)return d
w=C.a.an(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fLf(d,e,f){var y,x,w,v
if(d==null){if(A.fch()==null)$.fGD="en_US"
y=A.fch()
y.toString
return A.fLf(y,e,f)}if(e.$1(d))return d
x=[A.hII(),A.hIK(),A.hIJ(),new A.fzl(),new A.fzm(),new A.fzn()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hFs(d)},
hFs(d){throw B.R(B.dF('Invalid locale "'+d+'"',null))},
fIJ(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h6o(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h1y(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.an(d,0,x).toLowerCase()},
fzl:function fzl(){},
fzm:function fzm(){},
fzn:function fzn(){},
fch(){var y=B.aS($.bu.h(0,D.eBJ))
return y==null?$.fGD:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fzl.prototype={
$1(d){return A.fIJ(A.h6o(d))},
$S:17}
A.fzm.prototype={
$1(d){return A.fIJ(A.a_R(d))},
$S:17}
A.fzn.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hII","a_R",1)
y(A,"hIJ","fIJ",0)
y(A,"hIK","h6o",0)})();(function inheritance(){var y=a.inheritMany
y(B.i4,[A.fzl,A.fzm,A.fzn])})();(function constants(){D.eBJ=new B.oL("Intl.locale")})();(function staticFields(){$.fGD=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i0u","fzW",()=>48)})()};
(a=>{a["rNuAKMGVGAMCHEJOnazQlE+bn94="]=a.current})($__dart_deferred_initializers__);