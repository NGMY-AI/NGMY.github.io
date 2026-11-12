((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxN(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2P(d){var y,x,w,v
if(d==null){if(A.fEH()==null)$.haI="en_US"
y=A.fEH()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxN(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hfU(d,e,f){var y,x,w,v
if(d==null){if(A.fEH()==null)$.haI="en_US"
y=A.fEH()
y.toString
return A.hfU(y,e,f)}if(e.$1(d))return d
x=[A.igh(),A.igj(),A.igi(),new A.h2S(),new A.h2T(),new A.h2U()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icT(d)},
icT(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hd5(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hDc(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxN(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h2S:function h2S(){},
h2T:function h2T(){},
h2U:function h2U(){},
fEH(){var y=B.aT($.bD.h(0,D.fk5))
return y==null?$.haI:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2S.prototype={
$1(d){return A.hd5(A.hDc(d))},
$S:17}
A.h2T.prototype={
$1(d){return A.hd5(A.a2P(d))},
$S:17}
A.h2U.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"igh","a2P",1)
y(A,"igi","hd5",0)
y(A,"igj","hDc",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h2S,A.h2T,A.h2U])})();(function constants(){D.fk5=new B.pA("Intl.locale")})();(function staticFields(){$.haI=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"izM","h3E",()=>48)})()};
(a=>{a["tIDh5748lUire3p/7RNuT/vzZWo="]=a.current})($__dart_deferred_initializers__);