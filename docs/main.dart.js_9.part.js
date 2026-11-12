((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
hzI(d){var y,x=d.length
if(x<3)return-1
y=d[2]
if(y==="-"||y==="_")return 2
if(x<4)return-1
x=d[3]
if(x==="-"||x==="_")return 3
return-1},
a2Z(d){var y,x,w,v
if(d==null){if(A.fGf()==null)$.hcu="en_US"
y=A.fGf()
y.toString
return y}if(d==="C")return"en_ISO"
if(d.length<5)return d
x=A.hzI(d)
if(x===-1)return d
w=C.a.aC(d,0,x)
v=C.a.b2(d,x+1)
if(v.length<=3)v=v.toUpperCase()
return w+"_"+v},
hhL(d,e,f){var y,x,w,v
if(d==null){if(A.fGf()==null)$.hcu="en_US"
y=A.fGf()
y.toString
return A.hhL(y,e,f)}if(e.$1(d))return d
x=[A.iiN(),A.iiP(),A.iiO(),new A.h4D(),new A.h4E(),new A.h4F()]
for(w=0;w<6;++w){v=x[w].$1(d)
if(e.$1(v))return v}return A.ifi(d)},
ifi(d){throw B.W(B.dL('Invalid locale "'+d+'"',null))},
heV(d){switch(d){case"iw":return"he"
case"he":return"iw"
case"fil":return"tl"
case"tl":return"fil"
case"id":return"in"
case"in":return"id"
case"no":return"nb"
case"nb":return"no"}return d},
hFb(d){var y,x
if(d==="invalid")return"in"
y=d.length
if(y<2)return d
x=A.hzI(d)
if(x===-1)if(y<4)return d.toLowerCase()
else return d
return C.a.aC(d,0,x).toLowerCase()},
h4D:function h4D(){},
h4E:function h4E(){},
h4F:function h4F(){},
fGf(){var y=B.aS($.bE.h(0,D.flH))
return y==null?$.hcu:y}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[55],A)
D=c[285]
var z=a.updateTypes(["n(n)","n(n?)"])
A.h4D.prototype={
$1(d){return A.heV(A.hFb(d))},
$S:17}
A.h4E.prototype={
$1(d){return A.heV(A.a2Z(d))},
$S:17}
A.h4F.prototype={
$1(d){return"fallback"},
$S:17};(function installTearOffs(){var y=a._static_1
y(A,"iiN","a2Z",1)
y(A,"iiO","heV",0)
y(A,"iiP","hFb",0)})();(function inheritance(){var y=a.inheritMany
y(B.ht,[A.h4D,A.h4E,A.h4F])})();(function constants(){D.flH=new B.pE("Intl.locale")})();(function staticFields(){$.hcu=null})();(function lazyInitializers(){var y=a.lazyFinal
y($,"iCW","h5p",()=>48)})()};
(a=>{a["uHzTkDywdw1oXASXEQ9CDhLZlRY="]=a.current})($__dart_deferred_initializers__);