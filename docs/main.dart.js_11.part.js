((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hRq(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4s(d){var y,x,w,v
if(d==null){if(A.fTL()==null)$.hsG="en_US"
y=A.fTL()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hRq(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hyx(d,e,f){var y,x,w,v
if(d==null){if(A.fTL()==null)$.hsG="en_US"
y=A.fTL()
y.toString
return A.hyx(y,e,f)}if(e.$1(d))return d
x=[A.iCb(),A.iCd(),A.iCc(),new A.hkG(),new A.hkH(),new A.hkI()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iyC(d)},
iyC(d){throw B.Y(B.dN('Invalid locale "'+d+'"',null))},
hvl(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hXu(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hRq(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hkG:function hkG(){},
hkH:function hkH(){},
hkI:function hkI(){},
fTL(){var y=B.aW($.bH.h(0,D.fKF))
return y==null?$.hsG:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[324]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hkG.prototype={
$1(d){return A.hvl(A.hXu(d))},
$S:15}
A.hkH.prototype={
$1(d){return A.hvl(A.a4s(d))},
$S:15}
A.hkI.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iCb","a4s",1)
y(A,"iCc","hvl",0)
y(A,"iCd","hXu",0)})();(function inheritance(){var y=a.inheritMany
y(B.hs,[A.hkG,A.hkH,A.hkI])})();(function constants(){D.fKF=new B.q5("Intl.locale")})();(function staticFields(){$.hsG=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iWQ","hls",()=>48)})()};
(a=>{a["Bp8cLCMthFEReK5uAMTIUt4pSsE="]=a.current})($__dart_deferred_initializers__);