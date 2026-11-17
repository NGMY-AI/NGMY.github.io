((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hBO(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a38(d){var y,x,w,v
if(d==null){if(A.fHE()==null)$.hef="en_US"
y=A.fHE()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hBO(d)
if(x===-1)return d
w=C.a.aA(d,0,x)
v=C.a.b4(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hjD(d,e,f){var y,x,w,v
if(d==null){if(A.fHE()==null)$.hef="en_US"
y=A.fHE()
y.toString
return A.hjD(y,e,f)}if(e.$1(d))return d
x=[A.ikC(),A.ikE(),A.ikD(),new A.h6o(),new A.h6p(),new A.h6q()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ihd(d)},
ihd(d){throw B.X(B.dO('Invalid locale "'+d+'"',null))},
hgG(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hHA(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hBO(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aA(d,0,x).toLowerCase()},
h6o:function h6o(){},
h6p:function h6p(){},
h6q:function h6q(){},
fHE(){var y=B.aV($.bE.h(0,D.fqI))
return y==null?$.hef:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[291]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h6o.prototype={
$1(d){return A.hgG(A.hHA(d))},
$S:16}
A.h6p.prototype={
$1(d){return A.hgG(A.a38(d))},
$S:16}
A.h6q.prototype={
$1(d){return"fallback"},
$S:16};(function installTearOffs(){var y=a._static_1
y(A,"ikC","a38",1)
y(A,"ikD","hgG",0)
y(A,"ikE","hHA",0)})();(function inheritance(){var y=a.inheritMany
y(B.hq,[A.h6o,A.h6p,A.h6q])})();(function constants(){D.fqI=new B.pI("Intl.locale")})();(function staticFields(){$.hef=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iE5","h7a",()=>48)})()};
(a=>{a["ffqF3FVt5is8vl7uTPWaAR8pTmk="]=a.current})($__dart_deferred_initializers__);