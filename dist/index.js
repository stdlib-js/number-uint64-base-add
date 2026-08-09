"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw r=0,s}}};var d=q(function(k,g){"use strict";function U(e,r,s,a,t,u,n){var v;return e>>>=0,r>>>=0,s>>>=0,a>>>=0,t[n+u]=r+a>>>0,v=(t[n+u]<r)>>>0,t[n]=e+s+v>>>0,t}g.exports=U});var x=q(function(z,p){"use strict";var W=require("@stdlib/array-uint32"),f=require("@stdlib/number-uint64-base-to-words").assign,m=require("@stdlib/number-uint64-ctor"),w=d(),i=new W(6);function C(e,r){return f(e,i,1,0),f(r,i,1,2),w(i[0],i[1],i[2],i[3],i,1,4),m.of(i[4],i[5])}p.exports=C});var A=q(function(B,y){"use strict";var E=d();function K(e,r,s,a,t,u,n,v,R){return E(e[s],e[s+r],a[u],a[u+t],n,v,R),n}y.exports=K});var O=require("@stdlib/utils-define-nonenumerable-read-only-property"),c=x(),P=d(),S=A();O(c,"assign",P);O(c,"strided",S);module.exports=c;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
