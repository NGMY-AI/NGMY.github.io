((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hbl(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0K(d){var y,x,w,v
if(d==null){if(A.fl5()==null)$.fQe="en_US"
y=A.fl5()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hbl(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b_(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fUW(d,e,f){var y,x,w,v
if(d==null){if(A.fl5()==null)$.fQe="en_US"
y=A.fl5()
y.toString
return A.fUW(y,e,f)}if(e.$1(d))return d
x=[A.hSP(),A.hSR(),A.hSQ(),new A.fIR(),new A.fIS(),new A.fIT()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hPw(d)},
hPw(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fSn(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hgd(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hbl(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fIR:function fIR(){},
fIS:function fIS(){},
fIT:function fIT(){},
fl5(){var y=B.aU($.bw.h(0,D.eO0))
return y==null?$.fQe:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[256]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fIR.prototype={
$1(d){return A.fSn(A.hgd(d))},
$S:17}
A.fIS.prototype={
$1(d){return A.fSn(A.a0K(d))},
$S:17}
A.fIT.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hSP","a0K",1)
y(A,"hSQ","fSn",0)
y(A,"hSR","hgd",0)})();(function inheritance(){var y=a.inheritMany
y(B.hS,[A.fIR,A.fIS,A.fIT])})();(function constants(){D.eO0=new B.p0("Intl.locale")})();(function staticFields(){$.fQe=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iaH","fJs",()=>48)})()};
(a=>{a["cxFmi12Fum10ejWdxiYkdvsN5Co="]=a.current})($__dart_deferred_initializers__);