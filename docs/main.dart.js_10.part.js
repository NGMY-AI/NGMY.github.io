((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hxJ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2P(d){var y,x,w,v
if(d==null){if(A.fEE()==null)$.haE="en_US"
y=A.fEE()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hxJ(d)
if(x===-1)return d
w=C.a.aB(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hfQ(d,e,f){var y,x,w,v
if(d==null){if(A.fEE()==null)$.haE="en_US"
y=A.fEE()
y.toString
return A.hfQ(y,e,f)}if(e.$1(d))return d
x=[A.igc(),A.ige(),A.igd(),new A.h2O(),new A.h2P(),new A.h2Q()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.icP(d)},
icP(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
hd1(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hD8(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hxJ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aB(d,0,x).toLowerCase()},
h2O:function h2O(){},
h2P:function h2P(){},
h2Q:function h2Q(){},
fEE(){var y=B.aT($.bD.h(0,D.fk6))
return y==null?$.haE:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[54],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h2O.prototype={
$1(d){return A.hd1(A.hD8(d))},
$S:17}
A.h2P.prototype={
$1(d){return A.hd1(A.a2P(d))},
$S:17}
A.h2Q.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"igc","a2P",1)
y(A,"igd","hd1",0)
y(A,"ige","hD8",0)})();(function inheritance(){var y=a.inheritMany
y(B.hu,[A.h2O,A.h2P,A.h2Q])})();(function constants(){D.fk6=new B.pA("Intl.locale")})();(function staticFields(){$.haE=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"izH","h3A",()=>48)})()};
(a=>{a["/6XiM60He8DpWTqSN0UxJnoZR+k="]=a.current})($__dart_deferred_initializers__);