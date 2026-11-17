((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBt(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a35(d){var y,x,w,v
if(d==null){if(A.fHq()==null)$.hdZ="en_US"
y=A.fHq()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBt(d)
if(x===-1)return d
w=C.a.az(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjn(d,e,f){var y,x,w,v
if(d==null){if(A.fHq()==null)$.hdZ="en_US"
y=A.fHq()
y.toString
return A.hjn(y,e,f)}if(e.$1(d))return d
x=[A.ikg(),A.iki(),A.ikh(),new A.h67(),new A.h68(),new A.h69()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igS(d)},
igS(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hgq(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hHh(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBt(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.az(d,0,x).toLowerCase()},
h67:function h67(){},
h68:function h68(){},
h69:function h69(){},
fHq(){var y=B.aV($.bE.h(0,D.fqa))
return y==null?$.hdZ:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[289]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h67.prototype={
$1(d){return A.hgq(A.hHh(d))},
$S:16}
A.h68.prototype={
$1(d){return A.hgq(A.a35(d))},
$S:16}
A.h69.prototype={
$1(d){return"fallback"},
$S:16};(function installTearOffs(){var y=a._static_1
y(A,"ikg","a35",1)
y(A,"ikh","hgq",0)
y(A,"iki","hHh",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.h67,A.h68,A.h69])})();(function constants(){D.fqa=new B.pI("Intl.locale")})();(function staticFields(){$.hdZ=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDJ","h6U",()=>48)})()};
(a=>{a["2qiuhfzId2S26uEqQi5sK4n43Zk="]=a.current})($__dart_deferred_initializers__);