((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hMm(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3X(d){var y,x,w,v
if(d==null){if(A.fQc()==null)$.ho4="en_US"
y=A.fQc()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hMm(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
htL(d,e,f){var y,x,w,v
if(d==null){if(A.fQc()==null)$.ho4="en_US"
y=A.fQc()
y.toString
return A.htL(y,e,f)}if(e.$1(d))return d
x=[A.iw9(),A.iwb(),A.iwa(),new A.hg9(),new A.hga(),new A.hgb()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.isG(d)},
isG(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hqH(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hSj(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hMm(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hg9:function hg9(){},
hga:function hga(){},
hgb:function hgb(){},
fQc(){var y=B.aV($.bG.h(0,D.fFr))
return y==null?$.ho4:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[321]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hg9.prototype={
$1(d){return A.hqH(A.hSj(d))},
$S:15}
A.hga.prototype={
$1(d){return A.hqH(A.a3X(d))},
$S:15}
A.hgb.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iw9","a3X",1)
y(A,"iwa","hqH",0)
y(A,"iwb","hSj",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.hg9,A.hga,A.hgb])})();(function constants(){D.fFr=new B.pZ("Intl.locale")})();(function staticFields(){$.ho4=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iQa","hgW",()=>48)})()};
(a=>{a["W4Vt85/hp7k2emfq7qrfsl1unWM="]=a.current})($__dart_deferred_initializers__);