((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hNP(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a48(d){var y,x,w,v
if(d==null){if(A.fR0()==null)$.hpv="en_US"
y=A.fR0()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hNP(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hvc(d,e,f){var y,x,w,v
if(d==null){if(A.fR0()==null)$.hpv="en_US"
y=A.fR0()
y.toString
return A.hvc(y,e,f)}if(e.$1(d))return d
x=[A.iy7(),A.iy9(),A.iy8(),new A.hhx(),new A.hhy(),new A.hhz()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iuC(d)},
iuC(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hs8(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hTO(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hNP(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hhx:function hhx(){},
hhy:function hhy(){},
hhz:function hhz(){},
fR0(){var y=B.aV($.bG.h(0,D.fGw))
return y==null?$.hpv:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[321]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hhx.prototype={
$1(d){return A.hs8(A.hTO(d))},
$S:15}
A.hhy.prototype={
$1(d){return A.hs8(A.a48(d))},
$S:15}
A.hhz.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iy7","a48",1)
y(A,"iy8","hs8",0)
y(A,"iy9","hTO",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.hhx,A.hhy,A.hhz])})();(function constants(){D.fGw=new B.q1("Intl.locale")})();(function staticFields(){$.hpv=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iSp","hij",()=>48)})()};
(a=>{a["zPz7mkAkdmK5bqbZLNRBFiym1iU="]=a.current})($__dart_deferred_initializers__);