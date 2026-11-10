((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
htX(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2e(d){var y,x,w,v
if(d==null){if(A.fBq()==null)$.h79="en_US"
y=A.fBq()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.htX(d)
if(x===-1)return d
w=C.a.ar(d,0,x)
v=C.a.b5(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hc6(d,e,f){var y,x,w,v
if(d==null){if(A.fBq()==null)$.h79="en_US"
y=A.fBq()
y.toString
return A.hc6(y,e,f)}if(e.$1(d))return d
x=[A.ibC(),A.ibE(),A.ibD(),new A.h_o(),new A.h_p(),new A.h_q()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.i8a(d)},
i8a(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
h9q(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hz7(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.htX(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.ar(d,0,x).toLowerCase()},
h_o:function h_o(){},
h_p:function h_p(){},
h_q:function h_q(){},
fBq(){var y=B.aT($.bB.h(0,D.fff))
return y==null?$.h79:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[285]
var z=a.updateTypes(["m(m)","m(m?)"])
A.h_o.prototype={
$1(d){return A.h9q(A.hz7(d))},
$S:17}
A.h_p.prototype={
$1(d){return A.h9q(A.a2e(d))},
$S:17}
A.h_q.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"ibC","a2e",1)
y(A,"ibD","h9q",0)
y(A,"ibE","hz7",0)})();(function inheritance(){var y=a.inheritMany
y(B.hy,[A.h_o,A.h_p,A.h_q])})();(function constants(){D.fff=new B.pt("Intl.locale")})();(function staticFields(){$.h79=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iuR","h07",()=>48)})()};
(a=>{a["xgfL9S8SPELR+TbmkaBFwPDSyPA="]=a.current})($__dart_deferred_initializers__);