((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hIZ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3E(d){var y,x,w,v
if(d==null){if(A.fNd()==null)$.hkP="en_US"
y=A.fNd()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hIZ(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hqr(d,e,f){var y,x,w,v
if(d==null){if(A.fNd()==null)$.hkP="en_US"
y=A.fNd()
y.toString
return A.hqr(y,e,f)}if(e.$1(d))return d
x=[A.isB(),A.isD(),A.isC(),new A.hcY(),new A.hcZ(),new A.hd_()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ip8(d)},
ip8(d){throw B.Y(B.dJ('Invalid locale "'+d+'"',null))},
hnp(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hOP(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hIZ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hcY:function hcY(){},
hcZ:function hcZ(){},
hd_:function hd_(){},
fNd(){var y=B.aW($.bG.h(0,D.fB2))
return y==null?$.hkP:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[383]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hcY.prototype={
$1(d){return A.hnp(A.hOP(d))},
$S:15}
A.hcZ.prototype={
$1(d){return A.hnp(A.a3E(d))},
$S:15}
A.hd_.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"isB","a3E",1)
y(A,"isC","hnp",0)
y(A,"isD","hOP",0)})();(function inheritance(){var y=a.inheritMany
y(B.fO,[A.hcY,A.hcZ,A.hd_])})();(function constants(){D.fB2=new B.pW("Intl.locale")})();(function staticFields(){$.hkP=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iMy","hdL",()=>48)})()};
(a=>{a["4bVd9rkRh3zuVxM/ccQMWm6a28I="]=a.current})($__dart_deferred_initializers__);