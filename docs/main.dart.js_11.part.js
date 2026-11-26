((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hMt(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a3X(d){var y,x,w,v
if(d==null){if(A.fQh()==null)$.hoa="en_US"
y=A.fQh()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hMt(d)
if(x===-1)return d
w=C.a.av(d,0,x)
v=C.a.aV(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
htR(d,e,f){var y,x,w,v
if(d==null){if(A.fQh()==null)$.hoa="en_US"
y=A.fQh()
y.toString
return A.htR(y,e,f)}if(e.$1(d))return d
x=[A.iwi(),A.iwk(),A.iwj(),new A.hgf(),new A.hgg(),new A.hgh()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.isP(d)},
isP(d){throw B.Y(B.dM('Invalid locale "'+d+'"',null))},
hqN(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hSq(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hMt(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.av(d,0,x).toLowerCase()},
hgf:function hgf(){},
hgg:function hgg(){},
hgh:function hgh(){},
fQh(){var y=B.aV($.bG.h(0,D.fFs))
return y==null?$.hoa:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[61],A)
D=c[321]
var z=a.updateTypes(["n(n)","n(n?)"])
A.hgf.prototype={
$1(d){return A.hqN(A.hSq(d))},
$S:15}
A.hgg.prototype={
$1(d){return A.hqN(A.a3X(d))},
$S:15}
A.hgh.prototype={
$1(d){return"fallback"},
$S:15};(function installTearOffs(){var y=a._static_1
y(A,"iwi","a3X",1)
y(A,"iwj","hqN",0)
y(A,"iwk","hSq",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.hgf,A.hgg,A.hgh])})();(function constants(){D.fFs=new B.pZ("Intl.locale")})();(function staticFields(){$.hoa=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iQm","hh1",()=>48)})()};
(a=>{a["ktazRebf35l8OwVMiNsReuneV1g="]=a.current})($__dart_deferred_initializers__);