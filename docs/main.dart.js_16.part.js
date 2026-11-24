((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hJI(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3H(d){var y,x,w,v
if(d==null){if(A.fNY()==null)$.hlz="en_US"
y=A.fNY()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hJI(d)
if(x===-1)return d
w=C.a.aw(d,0,x)
v=C.a.aY(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hrb(d,e,f){var y,x,w,v
if(d==null){if(A.fNY()==null)$.hlz="en_US"
y=A.fNY()
y.toString
return A.hrb(y,e,f)}if(e.$1(d))return d
x=[A.itl(),A.itn(),A.itm(),new A.hdI(),new A.hdJ(),new A.hdK()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ipT(d)},
ipT(d){throw B.Y(B.dK('Invalid locale "'+d+'"',null))},
ho9(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hPz(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hJI(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aw(d,0,x).toLowerCase()},
hdI:function hdI(){},
hdJ:function hdJ(){},
hdK:function hdK(){},
fNY(){var y=B.aW($.bG.h(0,D.fB7))
return y==null?$.hlz:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[70],A)
D=c[384]
var z=a.updateTypes(["m(m)","m(m?)"])
A.hdI.prototype={
$1(d){return A.ho9(A.hPz(d))},
$S:15}
A.hdJ.prototype={
$1(d){return A.ho9(A.a3H(d))},
$S:15}
A.hdK.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"itl","a3H",1)
y(A,"itm","ho9",0)
y(A,"itn","hPz",0)})();(function inheritance(){var y=a.inheritMany
y(B.fR,[A.hdI,A.hdJ,A.hdK])})();(function constants(){D.fB7=new B.pW("Intl.locale")})();(function staticFields(){$.hlz=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iNi","hev",()=>48)})()};
(a=>{a["93F19aYW2gR1huOveKCvyW8PXE4="]=a.current})($__dart_deferred_initializers__);