((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hIV(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3E(d){var y,x,w,v
if(d==null){if(A.fNa()==null)$.hkM="en_US"
y=A.fNa()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hIV(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hqo(d,e,f){var y,x,w,v
if(d==null){if(A.fNa()==null)$.hkM="en_US"
y=A.fNa()
y.toString
return A.hqo(y,e,f)}if(e.$1(d))return d
x=[A.isx(),A.isz(),A.isy(),new A.hcV(),new A.hcW(),new A.hcX()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ip4(d)},
ip4(d){throw B.Y(B.dJ('Invalid locale "'+d+'"',null))},
hnm(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hOL(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hIV(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hcV:function hcV(){},
hcW:function hcW(){},
hcX:function hcX(){},
fNa(){var y=B.aW($.bG.h(0,D.fB5))
return y==null?$.hkM:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[383]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hcV.prototype={
$1(d){return A.hnm(A.hOL(d))},
$S:15}
A.hcW.prototype={
$1(d){return A.hnm(A.a3E(d))},
$S:15}
A.hcX.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"isx","a3E",1)
y(A,"isy","hnm",0)
y(A,"isz","hOL",0)})();(function inheritance(){var y=a.inheritMany
y(B.fN,[A.hcV,A.hcW,A.hcX])})();(function constants(){D.fB5=new B.pW("Intl.locale")})();(function staticFields(){$.hkM=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iMu","hdI",()=>48)})()};
(a=>{a["qtKUuYosuQsuWdCWRebvw9HdqY0="]=a.current})($__dart_deferred_initializers__);