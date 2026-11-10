((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htQ(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fBl()==null)$.h74="en_US"
y=A.fBl()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htQ(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hc1(d,e,f){var y,x,w,v
if(d==null){if(A.fBl()==null)$.h74="en_US"
y=A.fBl()
y.toString
return A.hc1(y,e,f)}if(e.$1(d))return d
x=[A.ibu(),A.ibw(),A.ibv(),new A.h_j(),new A.h_k(),new A.h_l()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i82(d)},
i82(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h9l(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hz0(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htQ(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
h_j:function h_j(){},
h_k:function h_k(){},
h_l:function h_l(){},
fBl(){var y=B.aT($.bB.h(0,D.fff))
return y==null?$.h74:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h_j.prototype={
$1(d){return A.h9l(A.hz0(d))},
$S:17}
A.h_k.prototype={
$1(d){return A.h9l(A.a2f(d))},
$S:17}
A.h_l.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ibu","a2f",1)
y(A,"ibv","h9l",0)
y(A,"ibw","hz0",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h_j,A.h_k,A.h_l])})();(function constants(){D.fff=new B.pt("Intl.locale")})();(function staticFields(){$.h74=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iuJ","h02",()=>48)})()};
(a=>{a["ALIctQoKloeZHzEP8re/MJqdjq4="]=a.current})($__dart_deferred_initializers__);