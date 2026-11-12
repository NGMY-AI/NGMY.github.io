((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzs(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2Y(d){var y,x,w,v
if(d==null){if(A.fG2()==null)$.hcf="en_US"
y=A.fG2()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzs(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhv(d,e,f){var y,x,w,v
if(d==null){if(A.fG2()==null)$.hcf="en_US"
y=A.fG2()
y.toString
return A.hhv(y,e,f)}if(e.$1(d))return d
x=[A.iiu(),A.iiw(),A.iiv(),new A.h4o(),new A.h4p(),new A.h4q()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.if0(d)},
if0(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
heG(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hEV(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzs(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h4o:function h4o(){},
h4p:function h4p(){},
h4q:function h4q(){},
fG2(){var y=B.aS($.bE.h(0,D.fl8))
return y==null?$.hcf:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[285]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4o.prototype={
$1(d){return A.heG(A.hEV(d))},
$S:17}
A.h4p.prototype={
$1(d){return A.heG(A.a2Y(d))},
$S:17}
A.h4q.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iiu","a2Y",1)
y(A,"iiv","heG",0)
y(A,"iiw","hEV",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4o,A.h4p,A.h4q])})();(function constants(){D.fl8=new B.pD("Intl.locale")})();(function staticFields(){$.hcf=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCC","h5a",()=>48)})()};
(a=>{a["xfttAc/tapQHk8BJr2Uzdy2/e7U="]=a.current})($__dart_deferred_initializers__);