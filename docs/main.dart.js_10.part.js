((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hAL(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a35(d){var y,x,w,v
if(d==null){if(A.fH0()==null)$.hds="en_US"
y=A.fH0()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hAL(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hiJ(d,e,f){var y,x,w,v
if(d==null){if(A.fH0()==null)$.hds="en_US"
y=A.fH0()
y.toString
return A.hiJ(y,e,f)}if(e.$1(d))return d
x=[A.ijS(),A.ijU(),A.ijT(),new A.h5B(),new A.h5C(),new A.h5D()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.igo(d)},
igo(d){throw B.W(B.dN('Invalid locale "'+d+'"',null))},
hfU(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hGf(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hAL(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h5B:function h5B(){},
h5C:function h5C(){},
h5D:function h5D(){},
fH0(){var y=B.aU($.bF.h(0,D.fnO))
return y==null?$.hds:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[289]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h5B.prototype={
$1(d){return A.hfU(A.hGf(d))},
$S:17}
A.h5C.prototype={
$1(d){return A.hfU(A.a35(d))},
$S:17}
A.h5D.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ijS","a35",1)
y(A,"ijT","hfU",0)
y(A,"ijU","hGf",0)})();(function inheritance(){var y=a.inheritMany
y(B.hv,[A.h5B,A.h5C,A.h5D])})();(function constants(){D.fnO=new B.pH("Intl.locale")})();(function staticFields(){$.hds=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iE7","h6n",()=>48)})()};
(a=>{a["XThOB8B3qa7FStyJY+UKdIcV/xQ="]=a.current})($__dart_deferred_initializers__);