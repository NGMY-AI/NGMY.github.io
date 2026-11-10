((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htN(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2f(d){var y,x,w,v
if(d==null){if(A.fBi()==null)$.h71="en_US"
y=A.fBi()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htN(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hbZ(d,e,f){var y,x,w,v
if(d==null){if(A.fBi()==null)$.h71="en_US"
y=A.fBi()
y.toString
return A.hbZ(y,e,f)}if(e.$1(d))return d
x=[A.ibr(),A.ibt(),A.ibs(),new A.h_g(),new A.h_h(),new A.h_i()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i8_(d)},
i8_(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h9i(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hyY(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htN(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
h_g:function h_g(){},
h_h:function h_h(){},
h_i:function h_i(){},
fBi(){var y=B.aT($.bB.h(0,D.fff))
return y==null?$.h71:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[286]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h_g.prototype={
$1(d){return A.h9i(A.hyY(d))},
$S:17}
A.h_h.prototype={
$1(d){return A.h9i(A.a2f(d))},
$S:17}
A.h_i.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ibr","a2f",1)
y(A,"ibs","h9i",0)
y(A,"ibt","hyY",0)})();(function inheritance(){var y=a.inheritMany
y(B.hx,[A.h_g,A.h_h,A.h_i])})();(function constants(){D.fff=new B.pt("Intl.locale")})();(function staticFields(){$.h71=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iuG","h0_",()=>48)})()};
(a=>{a["rq2WH57sX7Ch70suOL9C4XUlpxs="]=a.current})($__dart_deferred_initializers__);