((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hJ4(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3E(d){var y,x,w,v
if(d==null){if(A.fNi()==null)$.hkV="en_US"
y=A.fNi()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hJ4(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hqx(d,e,f){var y,x,w,v
if(d==null){if(A.fNi()==null)$.hkV="en_US"
y=A.fNi()
y.toString
return A.hqx(y,e,f)}if(e.$1(d))return d
x=[A.isH(),A.isJ(),A.isI(),new A.hd2(),new A.hd3(),new A.hd4()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ipe(d)},
ipe(d){throw B.Y(B.dJ('Invalid locale "'+d+'"',null))},
hnv(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hOV(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hJ4(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hd2:function hd2(){},
hd3:function hd3(){},
hd4:function hd4(){},
fNi(){var y=B.aW($.bG.h(0,D.fB5))
return y==null?$.hkV:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[384]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hd2.prototype={
$1(d){return A.hnv(A.hOV(d))},
$S:15}
A.hd3.prototype={
$1(d){return A.hnv(A.a3E(d))},
$S:15}
A.hd4.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"isH","a3E",1)
y(A,"isI","hnv",0)
y(A,"isJ","hOV",0)})();(function inheritance(){var y=a.inheritMany
y(B.fO,[A.hd2,A.hd3,A.hd4])})();(function constants(){D.fB5=new B.pW("Intl.locale")})();(function staticFields(){$.hkV=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iME","hdQ",()=>48)})()};
(a=>{a["IPZFSzozM2FCwXPt94ZBQCnv+j4="]=a.current})($__dart_deferred_initializers__);