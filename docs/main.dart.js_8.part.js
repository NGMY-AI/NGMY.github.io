((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
h0N(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_N(d){var y,x,w,v
if(d==null){if(A.fbx()==null)$.fFU="en_US"
y=A.fbx()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.h0N(d)
if(x===-1)return d
w=C.a.am(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fKv(d,e,f){var y,x,w,v
if(d==null){if(A.fbx()==null)$.fFU="en_US"
y=A.fbx()
y.toString
return A.fKv(y,e,f)}if(e.$1(d))return d
x=[A.hHU(),A.hHW(),A.hHV(),new A.fyB(),new A.fyC(),new A.fyD()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hEF(d)},
hEF(d){throw B.R(B.dF('Invalid locale "'+d+'"',null))},
fI_(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h5E(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.h0N(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.am(d,0,x).toLowerCase()},
fyB:function fyB(){},
fyC:function fyC(){},
fyD:function fyD(){},
fbx(){var y=B.aS($.bt.h(0,D.eAj))
return y==null?$.fFU:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
D=c[235]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fyB.prototype={
$1(d){return A.fI_(A.h5E(d))},
$S:17}
A.fyC.prototype={
$1(d){return A.fI_(A.a_N(d))},
$S:17}
A.fyD.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hHU","a_N",1)
y(A,"hHV","fI_",0)
y(A,"hHW","h5E",0)})();(function inheritance(){var y=a.inheritMany
y(B.i3,[A.fyB,A.fyC,A.fyD])})();(function constants(){D.eAj=new B.oJ("Intl.locale")})();(function staticFields(){$.fFU=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i_F","fzb",()=>48)})()};
(a=>{a["V7A9XsZ7kdRWTYRN2X9i3s+7iRM="]=a.current})($__dart_deferred_initializers__);