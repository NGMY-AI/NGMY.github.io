((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hws(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2t(d){var y,x,w,v
if(d==null){if(A.fDO()==null)$.h9D="en_US"
y=A.fDO()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hws(d)
if(x===-1)return d
w=C.a.au(d,0,x)
v=C.a.b3(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
heC(d,e,f){var y,x,w,v
if(d==null){if(A.fDO()==null)$.h9D="en_US"
y=A.fDO()
y.toString
return A.heC(y,e,f)}if(e.$1(d))return d
x=[A.iev(),A.iex(),A.iew(),new A.h1Q(),new A.h1R(),new A.h1S()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ib0(d)},
ib0(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hbV(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hBP(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hws(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.au(d,0,x).toLowerCase()},
h1Q:function h1Q(){},
h1R:function h1R(){},
h1S:function h1S(){},
fDO(){var y=B.aS($.bB.h(0,D.fio))
return y==null?$.h9D:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h1Q.prototype={
$1(d){return A.hbV(A.hBP(d))},
$S:17}
A.h1R.prototype={
$1(d){return A.hbV(A.a2t(d))},
$S:17}
A.h1S.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iev","a2t",1)
y(A,"iew","hbV",0)
y(A,"iex","hBP",0)})();(function inheritance(){var y=a.inheritMany
y(B.hz,[A.h1Q,A.h1R,A.h1S])})();(function constants(){D.fio=new B.py("Intl.locale")})();(function staticFields(){$.h9D=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ixL","h2A",()=>48)})()};
(a=>{a["60jcBmvZA9oHskL4jt+y5kS8DLM="]=a.current})($__dart_deferred_initializers__);