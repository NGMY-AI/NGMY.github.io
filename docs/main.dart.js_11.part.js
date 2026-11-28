((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hQZ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4n(d){var y,x,w,v
if(d==null){if(A.fTl()==null)$.hsg="en_US"
y=A.fTl()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hQZ(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hy7(d,e,f){var y,x,w,v
if(d==null){if(A.fTl()==null)$.hsg="en_US"
y=A.fTl()
y.toString
return A.hy7(y,e,f)}if(e.$1(d))return d
x=[A.iBJ(),A.iBL(),A.iBK(),new A.hkh(),new A.hki(),new A.hkj()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iy9(d)},
iy9(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
huW(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hX2(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hQZ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hkh:function hkh(){},
hki:function hki(){},
hkj:function hkj(){},
fTl(){var y=B.aW($.bG.h(0,D.fKY))
return y==null?$.hsg:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[324]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hkh.prototype={
$1(d){return A.huW(A.hX2(d))},
$S:15}
A.hki.prototype={
$1(d){return A.huW(A.a4n(d))},
$S:15}
A.hkj.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iBJ","a4n",1)
y(A,"iBK","huW",0)
y(A,"iBL","hX2",0)})();(function inheritance(){var y=a.inheritMany
y(B.hs,[A.hkh,A.hki,A.hkj])})();(function constants(){D.fKY=new B.q2("Intl.locale")})();(function staticFields(){$.hsg=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iWn","hl3",()=>48)})()};
(a=>{a["l0niBKnsQsNY7w0hd6yDJmQT2Fs="]=a.current})($__dart_deferred_initializers__);