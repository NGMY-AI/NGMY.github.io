((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hA5(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a34(d){var y,x,w,v
if(d==null){if(A.fGv()==null)$.hcM="en_US"
y=A.fGv()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hA5(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hi1(d,e,f){var y,x,w,v
if(d==null){if(A.fGv()==null)$.hcM="en_US"
y=A.fGv()
y.toString
return A.hi1(y,e,f)}if(e.$1(d))return d
x=[A.ij7(),A.ij9(),A.ij8(),new A.h4X(),new A.h4Y(),new A.h4Z()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifE(d)},
ifE(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hfc(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFy(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hA5(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h4X:function h4X(){},
h4Y:function h4Y(){},
h4Z:function h4Z(){},
fGv(){var y=B.aV($.bF.h(0,D.fmj))
return y==null?$.hcM:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4X.prototype={
$1(d){return A.hfc(A.hFy(d))},
$S:17}
A.h4Y.prototype={
$1(d){return A.hfc(A.a34(d))},
$S:17}
A.h4Z.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ij7","a34",1)
y(A,"ij8","hfc",0)
y(A,"ij9","hFy",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4X,A.h4Y,A.h4Z])})();(function constants(){D.fmj=new B.pH("Intl.locale")})();(function staticFields(){$.hcM=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDl","h5J",()=>48)})()};
(a=>{a["BE0easjMyfkBCGPDPN4l+dhsDuU="]=a.current})($__dart_deferred_initializers__);