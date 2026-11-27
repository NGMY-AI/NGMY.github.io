((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hMT(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a40(d){var y,x,w,v
if(d==null){if(A.fQH()==null)$.hoB="en_US"
y=A.fQH()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hMT(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hug(d,e,f){var y,x,w,v
if(d==null){if(A.fQH()==null)$.hoB="en_US"
y=A.fQH()
y.toString
return A.hug(y,e,f)}if(e.$1(d))return d
x=[A.iwN(),A.iwP(),A.iwO(),new A.hgG(),new A.hgH(),new A.hgI()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.itj(d)},
itj(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hrd(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hSQ(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hMT(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hgG:function hgG(){},
hgH:function hgH(){},
hgI:function hgI(){},
fQH(){var y=B.aV($.bG.h(0,D.fFw))
return y==null?$.hoB:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[320]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hgG.prototype={
$1(d){return A.hrd(A.hSQ(d))},
$S:15}
A.hgH.prototype={
$1(d){return A.hrd(A.a40(d))},
$S:15}
A.hgI.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iwN","a40",1)
y(A,"iwO","hrd",0)
y(A,"iwP","hSQ",0)})();(function inheritance(){var y=a.inheritMany
y(B.hp,[A.hgG,A.hgH,A.hgI])})();(function constants(){D.fFw=new B.pZ("Intl.locale")})();(function staticFields(){$.hoB=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iQV","hhs",()=>48)})()};
(a=>{a["a6K1ByY8glQvl7eG1ImoZYDFzJw="]=a.current})($__dart_deferred_initializers__);