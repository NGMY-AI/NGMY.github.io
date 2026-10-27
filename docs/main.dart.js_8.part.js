((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h1K(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_R(d){var y,x,w,v
if(d==null){if(A.fcf()==null)$.fGP="en_US"
y=A.fcf()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h1K(d)
if(x===-1)return d
w=C.a.an(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fLr(d,e,f){var y,x,w,v
if(d==null){if(A.fcf()==null)$.fGP="en_US"
y=A.fcf()
y.toString
return A.fLr(y,e,f)}if(e.$1(d))return d
x=[A.hIU(),A.hIW(),A.hIV(),new A.fzx(),new A.fzy(),new A.fzz()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hFE(d)},
hFE(d){throw B.R(B.dF('Invalid locale "'+d+'"',null))},
fIV(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h6A(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h1K(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.an(d,0,x).toLowerCase()},
fzx:function fzx(){},
fzy:function fzy(){},
fzz:function fzz(){},
fcf(){var y=B.aS($.bu.h(0,D.eC_))
return y==null?$.fGP:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
D=c[233]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fzx.prototype={
$1(d){return A.fIV(A.h6A(d))},
$S:17}
A.fzy.prototype={
$1(d){return A.fIV(A.a_R(d))},
$S:17}
A.fzz.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hIU","a_R",1)
y(A,"hIV","fIV",0)
y(A,"hIW","h6A",0)})();(function inheritance(){var y=a.inheritMany
y(B.i4,[A.fzx,A.fzy,A.fzz])})();(function constants(){D.eC_=new B.oN("Intl.locale")})();(function staticFields(){$.fGP=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i0G","fA7",()=>48)})()};
(a=>{a["Tgmks5R2C6OlxWg0jzdLs/QwXio="]=a.current})($__dart_deferred_initializers__);