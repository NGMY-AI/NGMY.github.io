((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hMA(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3Y(d){var y,x,w,v
if(d==null){if(A.fQo()==null)$.hoi="en_US"
y=A.fQo()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hMA(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
htY(d,e,f){var y,x,w,v
if(d==null){if(A.fQo()==null)$.hoi="en_US"
y=A.fQo()
y.toString
return A.htY(y,e,f)}if(e.$1(d))return d
x=[A.iwr(),A.iwt(),A.iws(),new A.hgn(),new A.hgo(),new A.hgp()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.isY(d)},
isY(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hqV(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hSx(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hMA(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hgn:function hgn(){},
hgo:function hgo(){},
hgp:function hgp(){},
fQo(){var y=B.aV($.bG.h(0,D.fFt))
return y==null?$.hoi:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[321]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hgn.prototype={
$1(d){return A.hqV(A.hSx(d))},
$S:15}
A.hgo.prototype={
$1(d){return A.hqV(A.a3Y(d))},
$S:15}
A.hgp.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iwr","a3Y",1)
y(A,"iws","hqV",0)
y(A,"iwt","hSx",0)})();(function inheritance(){var y=a.inheritMany
y(B.hp,[A.hgn,A.hgo,A.hgp])})();(function constants(){D.fFt=new B.pZ("Intl.locale")})();(function staticFields(){$.hoi=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iQx","hh9",()=>48)})()};
(a=>{a["4ywvD5qe1SXa9rti3XfiNtfzwmo="]=a.current})($__dart_deferred_initializers__);