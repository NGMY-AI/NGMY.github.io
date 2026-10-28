((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hae(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0D(d){var y,x,w,v
if(d==null){if(A.fjZ()==null)$.fP3="en_US"
y=A.fjZ()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hae(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fTP(d,e,f){var y,x,w,v
if(d==null){if(A.fjZ()==null)$.fP3="en_US"
y=A.fjZ()
y.toString
return A.fTP(y,e,f)}if(e.$1(d))return d
x=[A.hRH(),A.hRJ(),A.hRI(),new A.fHI(),new A.fHJ(),new A.fHK()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hOo(d)},
hOo(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fRd(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hf7(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hae(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fHI:function fHI(){},
fHJ:function fHJ(){},
fHK:function fHK(){},
fjZ(){var y=B.aU($.bw.h(0,D.eNF))
return y==null?$.fP3:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[49],A)
D=c[255]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fHI.prototype={
$1(d){return A.fRd(A.hf7(d))},
$S:17}
A.fHJ.prototype={
$1(d){return A.fRd(A.a0D(d))},
$S:17}
A.fHK.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hRH","a0D",1)
y(A,"hRI","fRd",0)
y(A,"hRJ","hf7",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fHI,A.fHJ,A.fHK])})();(function constants(){D.eNF=new B.p_("Intl.locale")})();(function staticFields(){$.fP3=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"i9y","fIj",()=>48)})()};
(a=>{a["f+kjaW/A4BbEpyJndYiNLSyb8bc="]=a.current})($__dart_deferred_initializers__);