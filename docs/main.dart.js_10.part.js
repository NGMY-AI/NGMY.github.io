((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hA0(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a34(d){var y,x,w,v
if(d==null){if(A.fGr()==null)$.hcI="en_US"
y=A.fGr()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hA0(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhY(d,e,f){var y,x,w,v
if(d==null){if(A.fGr()==null)$.hcI="en_US"
y=A.fGr()
y.toString
return A.hhY(y,e,f)}if(e.$1(d))return d
x=[A.ij2(),A.ij4(),A.ij3(),new A.h4T(),new A.h4U(),new A.h4V()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifz(d)},
ifz(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hf8(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFt(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hA0(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h4T:function h4T(){},
h4U:function h4U(){},
h4V:function h4V(){},
fGr(){var y=B.aV($.bF.h(0,D.fm5))
return y==null?$.hcI:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h4T.prototype={
$1(d){return A.hf8(A.hFt(d))},
$S:17}
A.h4U.prototype={
$1(d){return A.hf8(A.a34(d))},
$S:17}
A.h4V.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ij2","a34",1)
y(A,"ij3","hf8",0)
y(A,"ij4","hFt",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4T,A.h4U,A.h4V])})();(function constants(){D.fm5=new B.pI("Intl.locale")})();(function staticFields(){$.hcI=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDg","h5F",()=>48)})()};
(a=>{a["UzG1nZ7FfBlcu/qq16oyL0sOydA="]=a.current})($__dart_deferred_initializers__);