// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var f=p.isPrimitive,g=u.isPrimitive,c=h;var b=function(e,t){return!f(e)||c(e)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+e+"`."):g(t)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+t+"`.")},v=j;var y=function(e,t,n){return t-n*v(-v(e()))},x=e,w=t,N=n,L=s,E=r,O=i,T=o,P=m,V=d.factory,G=a,R=l,A=b,J=y;var M=function(){var e,t,n,s,r,i;if(0===arguments.length)n=V();else if(1===arguments.length){if(!L(t=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(O(t,"prng")){if(!E(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else n=V(t)}else{if(r=A(i=arguments[0],e=arguments[1]))throw r;if(arguments.length>2){if(!L(t=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(O(t,"prng")){if(!E(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else n=V(t)}else n=V()}return x(s=void 0===i?j:h,"NAME","gumbel"),t&&t.prng?(x(s,"seed",null),x(s,"seedLength",null),N(s,"state",T(null),P),x(s,"stateLength",null),x(s,"byteLength",null),x(s,"toJSON",T(null)),x(s,"PRNG",n)):(w(s,"seed",o),w(s,"seedLength",m),N(s,"state",l,p),w(s,"stateLength",d),w(s,"byteLength",a),x(s,"toJSON",u),x(s,"PRNG",n),n=n.normalized),s;function o(){return n.seed}function m(){return n.seedLength}function d(){return n.stateLength}function a(){return n.byteLength}function l(){return n.state}function p(e){n.state=e}function u(){var t={type:"PRNG"};return t.name=s.NAME,t.state=R(n.state),t.params=void 0===i?[]:[i,e],t}function h(){return J(n,i,e)}function j(e,t){return G(e)||G(t)||t<=0?NaN:J(n,e,t)}},S=M(),z=M;e(S,"factory",z);var k=S;export{k as default,z as factory};
//# sourceMappingURL=index.mjs.map
