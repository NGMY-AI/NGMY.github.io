((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hMy(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3Y(d){var y,x,w,v
if(d==null){if(A.fQm()==null)$.hof="en_US"
y=A.fQm()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hMy(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
htW(d,e,f){var y,x,w,v
if(d==null){if(A.fQm()==null)$.hof="en_US"
y=A.fQm()
y.toString
return A.htW(y,e,f)}if(e.$1(d))return d
x=[A.iwl(),A.iwn(),A.iwm(),new A.hgk(),new A.hgl(),new A.hgm()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.isS(d)},
isS(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hqS(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hSv(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hMy(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hgk:function hgk(){},
hgl:function hgl(){},
hgm:function hgm(){},
fQm(){var y=B.aV($.bG.h(0,D.fFs))
return y==null?$.hof:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[321]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hgk.prototype={
$1(d){return A.hqS(A.hSv(d))},
$S:15}
A.hgl.prototype={
$1(d){return A.hqS(A.a3Y(d))},
$S:15}
A.hgm.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iwl","a3Y",1)
y(A,"iwm","hqS",0)
y(A,"iwn","hSv",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.hgk,A.hgl,A.hgm])})();(function constants(){D.fFs=new B.pZ("Intl.locale")})();(function staticFields(){$.hof=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iQn","hh6",()=>48)})()};
(a=>{a["sUAqFeF/kYvU6IXRmL4OxFPPyzQ="]=a.current})($__dart_deferred_initializers__);