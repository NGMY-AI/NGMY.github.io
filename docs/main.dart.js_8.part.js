((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hc0(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a0M(d){var y,x,w,v
if(d==null){if(A.flE()==null)$.fQR="en_US"
y=A.flE()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hc0(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b0(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fVy(d,e,f){var y,x,w,v
if(d==null){if(A.flE()==null)$.fQR="en_US"
y=A.flE()
y.toString
return A.fVy(y,e,f)}if(e.$1(d))return d
x=[A.hTv(),A.hTx(),A.hTw(),new A.fJq(),new A.fJr(),new A.fJs()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hQc(d)},
hQc(d){throw B.U(B.dI('Invalid locale "'+d+'"',null))},
fT_(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hgU(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hc0(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fJq:function fJq(){},
fJr:function fJr(){},
fJs:function fJs(){},
flE(){var y=B.aU($.bx.h(0,D.ePg))
return y==null?$.fQR:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[257]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fJq.prototype={
$1(d){return A.fT_(A.hgU(d))},
$S:17}
A.fJr.prototype={
$1(d){return A.fT_(A.a0M(d))},
$S:17}
A.fJs.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hTv","a0M",1)
y(A,"hTw","fT_",0)
y(A,"hTx","hgU",0)})();(function inheritance(){var y=a.inheritMany
y(B.hT,[A.fJq,A.fJr,A.fJs])})();(function constants(){D.ePg=new B.p1("Intl.locale")})();(function staticFields(){$.fQR=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ibn","fK5",()=>48)})()};
(a=>{a["8IApx1XwCgU474ZUwRP6NduFO+4="]=a.current})($__dart_deferred_initializers__);