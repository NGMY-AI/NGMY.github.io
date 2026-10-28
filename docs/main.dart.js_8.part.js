((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h8D(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0t(d){var y,x,w,v
if(d==null){if(A.fis()==null)$.fNw="en_US"
y=A.fis()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h8D(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fSe(d,e,f){var y,x,w,v
if(d==null){if(A.fis()==null)$.fNw="en_US"
y=A.fis()
y.toString
return A.fSe(y,e,f)}if(e.$1(d))return d
x=[A.hQ1(),A.hQ3(),A.hQ2(),new A.fGc(),new A.fGd(),new A.fGe()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hMK(d)},
hMK(d){throw B.S(B.dH('Invalid locale "'+d+'"',null))},
fPE(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hdv(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h8D(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fGc:function fGc(){},
fGd:function fGd(){},
fGe:function fGe(){},
fis(){var y=B.aT($.bw.h(0,D.eKZ))
return y==null?$.fNw:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[234]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fGc.prototype={
$1(d){return A.fPE(A.hdv(d))},
$S:17}
A.fGd.prototype={
$1(d){return A.fPE(A.a0t(d))},
$S:17}
A.fGe.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hQ1","a0t",1)
y(A,"hQ2","fPE",0)
y(A,"hQ3","hdv",0)})();(function inheritance(){var y=a.inheritMany
y(B.i7,[A.fGc,A.fGd,A.fGe])})();(function constants(){D.eKZ=new B.oW("Intl.locale")})();(function staticFields(){$.fNw=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i7T","fGO",()=>48)})()};
(a=>{a["XuGPEgbgx9VvhDTAmnUZz7EHMmM="]=a.current})($__dart_deferred_initializers__);