((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
fXn(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a_m(d){var y,x,w,v
if(d==null){if(A.f83()==null)$.fBO="en_US"
y=A.f83()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.fXn(d)
if(x===-1)return d
w=C.a.al(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
fGj(d,e,f){var y,x,w,v
if(d==null){if(A.f83()==null)$.fBO="en_US"
y=A.f83()
y.toString
return A.fGj(y,e,f)}if(e.$1(d))return d
x=[A.hCY(),A.hD_(),A.hCZ(),new A.fuu(),new A.fuv(),new A.fuw()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hzL(d)},
hzL(d){throw B.O(B.dC('Invalid locale "'+d+'"',null))},
fDR(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
h18(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.fXn(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.al(d,0,x).toLowerCase()},
fuu:function fuu(){},
fuv:function fuv(){},
fuw:function fuw(){},
f83(){var y=B.aR($.bs.h(0,D.ekc))
return y==null?$.fBO:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[48],A)
D=c[231]
var z=a.updateTypes(["n(n)","n(n?)"])
A.fuu.prototype={
$1(d){return A.fDR(A.h18(d))},
$S:17}
A.fuv.prototype={
$1(d){return A.fDR(A.a_m(d))},
$S:17}
A.fuw.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"hCY","a_m",1)
y(A,"hCZ","fDR",0)
y(A,"hD_","h18",0)})();(function inheritance(){var y=a.inheritMany
y(B.i2,[A.fuu,A.fuv,A.fuw])})();(function constants(){D.ekc=new B.oE("Intl.locale")})();(function staticFields(){$.fBO=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"hVr","fv4",()=>48)})()};
(a=>{a["v71IRQNWuRoHw1sEVE8/Wc8afpE="]=a.current})($__dart_deferred_initializers__);