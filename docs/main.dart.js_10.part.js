((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxM(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2P(d){var y,x,w,v
if(d==null){if(A.fEH()==null)$.haH="en_US"
y=A.fEH()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxM(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hfT(d,e,f){var y,x,w,v
if(d==null){if(A.fEH()==null)$.haH="en_US"
y=A.fEH()
y.toString
return A.hfT(y,e,f)}if(e.$1(d))return d
x=[A.igf(),A.igh(),A.igg(),new A.h2R(),new A.h2S(),new A.h2T()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icS(d)},
icS(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hd4(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hDb(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxM(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h2R:function h2R(){},
h2S:function h2S(){},
h2T:function h2T(){},
fEH(){var y=B.aT($.bD.h(0,D.fk6))
return y==null?$.haH:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2R.prototype={
$1(d){return A.hd4(A.hDb(d))},
$S:17}
A.h2S.prototype={
$1(d){return A.hd4(A.a2P(d))},
$S:17}
A.h2T.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"igf","a2P",1)
y(A,"igg","hd4",0)
y(A,"igh","hDb",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h2R,A.h2S,A.h2T])})();(function constants(){D.fk6=new B.pA("Intl.locale")})();(function staticFields(){$.haH=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"izK","h3D",()=>48)})()};
(a=>{a["WpEcJbyt1QMsYKrGMz5+n/GFohE="]=a.current})($__dart_deferred_initializers__);