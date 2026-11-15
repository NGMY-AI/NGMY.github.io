((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzR(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a33(d){var y,x,w,v
if(d==null){if(A.fGk()==null)$.hcB="en_US"
y=A.fGk()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzR(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhR(d,e,f){var y,x,w,v
if(d==null){if(A.fGk()==null)$.hcB="en_US"
y=A.fGk()
y.toString
return A.hhR(y,e,f)}if(e.$1(d))return d
x=[A.iiT(),A.iiV(),A.iiU(),new A.h4M(),new A.h4N(),new A.h4O()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifp(d)},
ifp(d){throw B.W(B.dM('Invalid locale "'+d+'"',null))},
hf1(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFj(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzR(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h4M:function h4M(){},
h4N:function h4N(){},
h4O:function h4O(){},
fGk(){var y=B.aV($.bF.h(0,D.flL))
return y==null?$.hcB:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[287]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h4M.prototype={
$1(d){return A.hf1(A.hFj(d))},
$S:17}
A.h4N.prototype={
$1(d){return A.hf1(A.a33(d))},
$S:17}
A.h4O.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iiT","a33",1)
y(A,"iiU","hf1",0)
y(A,"iiV","hFj",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4M,A.h4N,A.h4O])})();(function constants(){D.flL=new B.pI("Intl.locale")})();(function staticFields(){$.hcB=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iD6","h5y",()=>48)})()};
(a=>{a["CeCeC4rR36V5Yts1HoolAf1NweE="]=a.current})($__dart_deferred_initializers__);