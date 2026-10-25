((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fYg(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_q(d){var y,x,w,v
if(d==null){if(A.f8J()==null)$.fCI="en_US"
y=A.f8J()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fYg(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fHb(d,e,f){var y,x,w,v
if(d==null){if(A.f8J()==null)$.fCI="en_US"
y=A.f8J()
y.toString
return A.fHb(y,e,f)}if(e.$1(d))return d
x=[A.hDT(),A.hDV(),A.hDU(),new A.fvn(),new A.fvo(),new A.fvp()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hAH(d)},
hAH(d){throw B.O(B.dD('Invalid locale "'+d+'"',null))},
fEL(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h22(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fYg(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fvn:function fvn(){},
fvo:function fvo(){},
fvp:function fvp(){},
f8J(){var y=B.aR($.bs.h(0,D.ela))
return y==null?$.fCI:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[232]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fvn.prototype={
$1(d){return A.fEL(A.h22(d))},
$S:17}
A.fvo.prototype={
$1(d){return A.fEL(A.a_q(d))},
$S:17}
A.fvp.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hDT","a_q",1)
y(A,"hDU","fEL",0)
y(A,"hDV","h22",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fvn,A.fvo,A.fvp])})();(function constants(){D.ela=new B.oF("Intl.locale")})();(function staticFields(){$.fCI=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hWs","fvY",()=>48)})()};
(a=>{a["NSzWytEEi/2avtUKjnbxWB0x8Bo="]=a.current})($__dart_deferred_initializers__);