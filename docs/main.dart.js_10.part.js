((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzB(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2Z(d){var y,x,w,v
if(d==null){if(A.fG5()==null)$.hco="en_US"
y=A.fG5()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzB(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhE(d,e,f){var y,x,w,v
if(d==null){if(A.fG5()==null)$.hco="en_US"
y=A.fG5()
y.toString
return A.hhE(y,e,f)}if(e.$1(d))return d
x=[A.iiC(),A.iiE(),A.iiD(),new A.h4x(),new A.h4y(),new A.h4z()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.if8(d)},
if8(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
heP(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hF3(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzB(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h4x:function h4x(){},
h4y:function h4y(){},
h4z:function h4z(){},
fG5(){var y=B.aW($.bE.h(0,D.flK))
return y==null?$.hco:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[287]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4x.prototype={
$1(d){return A.heP(A.hF3(d))},
$S:17}
A.h4y.prototype={
$1(d){return A.heP(A.a2Z(d))},
$S:17}
A.h4z.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iiC","a2Z",1)
y(A,"iiD","heP",0)
y(A,"iiE","hF3",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4x,A.h4y,A.h4z])})();(function constants(){D.flK=new B.pI("Intl.locale")})();(function staticFields(){$.hco=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCQ","h5j",()=>48)})()};
(a=>{a["1Bk/SGq5/vX0US5IeO+O2KtOk60="]=a.current})($__dart_deferred_initializers__);