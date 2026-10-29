((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hkW(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a1w(d){var y,x,w,v
if(d==null){if(A.ftx()==null)$.fZq="en_US"
y=A.ftx()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hkW(d)
if(x===-1)return d
w=C.a.ap(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
h3j(d,e,f){var y,x,w,v
if(d==null){if(A.ftx()==null)$.fZq="en_US"
y=A.ftx()
y.toString
return A.h3j(y,e,f)}if(e.$1(d))return d
x=[A.i1O(),A.i1Q(),A.i1P(),new A.fRQ(),new A.fRR(),new A.fRS()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.hZt(d)},
hZt(d){throw B.V(B.dK('Invalid locale "'+d+'"',null))},
h0D(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hpV(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hkW(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ap(d,0,x).toLowerCase()},
fRQ:function fRQ(){},
fRR:function fRR(){},
fRS:function fRS(){},
ftx(){var y=B.aU($.bz.h(0,D.f1t))
return y==null?$.fZq:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[50],A)
D=c[262]
var z=a.updateTypes(["m(m)","m(m?)"])
A.fRQ.prototype={
$1(d){return A.h0D(A.hpV(d))},
$S:17}
A.fRR.prototype={
$1(d){return A.h0D(A.a1w(d))},
$S:17}
A.fRS.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"i1O","a1w",1)
y(A,"i1P","h0D",0)
y(A,"i1Q","hpV",0)})();(function inheritance(){var y=a.inheritMany
y(B.hY,[A.fRQ,A.fRR,A.fRS])})();(function constants(){D.f1t=new B.pf("Intl.locale")})();(function staticFields(){$.fZq=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"ikR","fSw",()=>48)})()};
(a=>{a["w8Pgg4lrAN1mn8DdIicrtga5jIk="]=a.current})($__dart_deferred_initializers__);