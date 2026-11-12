((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hyP(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2V(d){var y,x,w,v
if(d==null){if(A.fFt()==null)$.hbC="en_US"
y=A.fFt()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hyP(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hgS(d,e,f){var y,x,w,v
if(d==null){if(A.fFt()==null)$.hbC="en_US"
y=A.fFt()
y.toString
return A.hgS(y,e,f)}if(e.$1(d))return d
x=[A.ihP(),A.ihR(),A.ihQ(),new A.h3L(),new A.h3M(),new A.h3N()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.iel(d)},
iel(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
he2(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hEg(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hyP(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h3L:function h3L(){},
h3M:function h3M(){},
h3N:function h3N(){},
fFt(){var y=B.aT($.bE.h(0,D.flb))
return y==null?$.hbC:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[288]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h3L.prototype={
$1(d){return A.he2(A.hEg(d))},
$S:17}
A.h3M.prototype={
$1(d){return A.he2(A.a2V(d))},
$S:17}
A.h3N.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ihP","a2V",1)
y(A,"ihQ","he2",0)
y(A,"ihR","hEg",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h3L,A.h3M,A.h3N])})();(function constants(){D.flb=new B.pE("Intl.locale")})();(function staticFields(){$.hbC=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iBW","h4x",()=>48)})()};
(a=>{a["0SyV0kmd49V+ZWgc8L9HObG1QIU="]=a.current})($__dart_deferred_initializers__);