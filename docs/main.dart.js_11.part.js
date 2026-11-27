((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hON(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a4c(d){var y,x,w,v
if(d==null){if(A.fRH()==null)$.hqn="en_US"
y=A.fRH()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hON(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hw9(d,e,f){var y,x,w,v
if(d==null){if(A.fRH()==null)$.hqn="en_US"
y=A.fRH()
y.toString
return A.hw9(y,e,f)}if(e.$1(d))return d
x=[A.izd(),A.izf(),A.ize(),new A.hip(),new A.hiq(),new A.hir()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ivI(d)},
ivI(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
ht1(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hUP(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hON(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hip:function hip(){},
hiq:function hiq(){},
hir:function hir(){},
fRH(){var y=B.aV($.bG.h(0,D.fIl))
return y==null?$.hqn:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[323]
var z=a.updateTypes(["o(o)","o(o?)"])
A.hip.prototype={
$1(d){return A.ht1(A.hUP(d))},
$S:15}
A.hiq.prototype={
$1(d){return A.ht1(A.a4c(d))},
$S:15}
A.hir.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"izd","a4c",1)
y(A,"ize","ht1",0)
y(A,"izf","hUP",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.hip,A.hiq,A.hir])})();(function constants(){D.fIl=new B.q2("Intl.locale")})();(function staticFields(){$.hqn=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iTE","hjb",()=>48)})()};
(a=>{a["EO6eb2/t8IidVT2nK+krlHSSdHk="]=a.current})($__dart_deferred_initializers__);