((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hA_(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a34(d){var y,x,w,v
if(d==null){if(A.fGq()==null)$.hcH="en_US"
y=A.fGq()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hA_(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhX(d,e,f){var y,x,w,v
if(d==null){if(A.fGq()==null)$.hcH="en_US"
y=A.fGq()
y.toString
return A.hhX(y,e,f)}if(e.$1(d))return d
x=[A.ij1(),A.ij3(),A.ij2(),new A.h4S(),new A.h4T(),new A.h4U()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ify(d)},
ify(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hf7(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFs(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hA_(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h4S:function h4S(){},
h4T:function h4T(){},
h4U:function h4U(){},
fGq(){var y=B.aV($.bF.h(0,D.flY))
return y==null?$.hcH:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4S.prototype={
$1(d){return A.hf7(A.hFs(d))},
$S:17}
A.h4T.prototype={
$1(d){return A.hf7(A.a34(d))},
$S:17}
A.h4U.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ij1","a34",1)
y(A,"ij2","hf7",0)
y(A,"ij3","hFs",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4S,A.h4T,A.h4U])})();(function constants(){D.flY=new B.pH("Intl.locale")})();(function staticFields(){$.hcH=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iDf","h5E",()=>48)})()};
(a=>{a["zpECSPQQQTqZ72gBd5+isLvHsA0="]=a.current})($__dart_deferred_initializers__);