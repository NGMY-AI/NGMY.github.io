((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBZ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a39(d){var y,x,w,v
if(d==null){if(A.fHP()==null)$.heq="en_US"
y=A.fHP()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBZ(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjP(d,e,f){var y,x,w,v
if(d==null){if(A.fHP()==null)$.heq="en_US"
y=A.fHP()
y.toString
return A.hjP(y,e,f)}if(e.$1(d))return d
x=[A.ikO(),A.ikQ(),A.ikP(),new A.h6z(),new A.h6A(),new A.h6B()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ihp(d)},
ihp(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hgR(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hHL(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBZ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h6z:function h6z(){},
h6A:function h6A(){},
h6B:function h6B(){},
fHP(){var y=B.aV($.bE.h(0,D.fqT))
return y==null?$.heq:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[291]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h6z.prototype={
$1(d){return A.hgR(A.hHL(d))},
$S:17}
A.h6A.prototype={
$1(d){return A.hgR(A.a39(d))},
$S:17}
A.h6B.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ikO","a39",1)
y(A,"ikP","hgR",0)
y(A,"ikQ","hHL",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.h6z,A.h6A,A.h6B])})();(function constants(){D.fqT=new B.pJ("Intl.locale")})();(function staticFields(){$.heq=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iEh","h7l",()=>48)})()};
(a=>{a["XGcjFFd00ts5vNCATyS0pGTVSmY="]=a.current})($__dart_deferred_initializers__);