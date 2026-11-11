((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hwl(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2s(d){var y,x,w,v
if(d==null){if(A.fDH()==null)$.h9w="en_US"
y=A.fDH()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hwl(d)
if(x===-1)return d
w=C.a.au(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hev(d,e,f){var y,x,w,v
if(d==null){if(A.fDH()==null)$.h9w="en_US"
y=A.fDH()
y.toString
return A.hev(y,e,f)}if(e.$1(d))return d
x=[A.ieo(),A.ieq(),A.iep(),new A.h1J(),new A.h1K(),new A.h1L()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iaU(d)},
iaU(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hbO(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hBI(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hwl(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.au(d,0,x).toLowerCase()},
h1J:function h1J(){},
h1K:function h1K(){},
h1L:function h1L(){},
fDH(){var y=B.aS($.bB.h(0,D.fi0))
return y==null?$.h9w:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h1J.prototype={
$1(d){return A.hbO(A.hBI(d))},
$S:17}
A.h1K.prototype={
$1(d){return A.hbO(A.a2s(d))},
$S:17}
A.h1L.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ieo","a2s",1)
y(A,"iep","hbO",0)
y(A,"ieq","hBI",0)})();(function inheritance(){var y=a.inheritMany
y(B.hz,[A.h1J,A.h1K,A.h1L])})();(function constants(){D.fi0=new B.py("Intl.locale")})();(function staticFields(){$.h9w=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ixE","h2t",()=>48)})()};
(a=>{a["IC/ocyQrcEi7hxKZW0iRNiR/+KI="]=a.current})($__dart_deferred_initializers__);