((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxb(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2J(d){var y,x,w,v
if(d==null){if(A.fEe()==null)$.haa="en_US"
y=A.fEe()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxb(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hfl(d,e,f){var y,x,w,v
if(d==null){if(A.fEe()==null)$.haa="en_US"
y=A.fEe()
y.toString
return A.hfl(y,e,f)}if(e.$1(d))return d
x=[A.ifz(),A.ifB(),A.ifA(),new A.h2l(),new A.h2m(),new A.h2n()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icb(d)},
icb(d){throw B.W(B.dK('Invalid locale "'+d+'"',null))},
hcy(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hCz(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxb(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h2l:function h2l(){},
h2m:function h2m(){},
h2n:function h2n(){},
fEe(){var y=B.aT($.bD.h(0,D.fk0))
return y==null?$.haa:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2l.prototype={
$1(d){return A.hcy(A.hCz(d))},
$S:17}
A.h2m.prototype={
$1(d){return A.hcy(A.a2J(d))},
$S:17}
A.h2n.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ifz","a2J",1)
y(A,"ifA","hcy",0)
y(A,"ifB","hCz",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h2l,A.h2m,A.h2n])})();(function constants(){D.fk0=new B.pz("Intl.locale")})();(function staticFields(){$.haa=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iz2","h36",()=>48)})()};
(a=>{a["qhCEzHwugB05cAir0vzgSu3sqTI="]=a.current})($__dart_deferred_initializers__);