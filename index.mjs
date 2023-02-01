// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";function g(e,t){return!h(e)||u(e)?new TypeError(a("invalid argument. First argument must be a number and not NaN. Value: `%s`.",e)):j(t)?null:new TypeError(a("0P67T",t))}function c(e,t,s){return t-s*f(-f(e()))}function b(){var h,j,u,f,b,v;if(0===arguments.length)u=m();else if(1===arguments.length){if(!n(j=arguments[0]))throw new TypeError(a("0P62h",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0P67M","prng",j.prng));u=j.prng}else u=m(j)}else{if(b=g(v=arguments[0],h=arguments[1]))throw b;if(arguments.length>2){if(!n(j=arguments[2]))throw new TypeError(a("0P62h",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(a("0P67M","prng",j.prng));u=j.prng}else u=m(j)}else u=m()}return e(f=void 0===v?M:T,"NAME","gumbel"),j&&j.prng?(e(f,"seed",null),e(f,"seedLength",null),s(f,"state",o(null),d),e(f,"stateLength",null),e(f,"byteLength",null),e(f,"toJSON",o(null)),e(f,"PRNG",u)):(t(f,"seed",x),t(f,"seedLength",y),s(f,"state",L,P),t(f,"stateLength",w),t(f,"byteLength",N),e(f,"toJSON",E),e(f,"PRNG",u),u=u.normalized),f;function x(){return u.seed}function y(){return u.seedLength}function w(){return u.stateLength}function N(){return u.byteLength}function L(){return u.state}function P(e){u.state=e}function E(){var e={type:"PRNG"};return e.name=f.NAME,e.state=p(u.state),e.params=void 0===v?[]:[v,h],e}function T(){return c(u,v,h)}function M(e,t){return l(e)||l(t)||t<=0?NaN:c(u,e,t)}}var v=b();e(v,"factory",b);export{v as default,b as factory};
//# sourceMappingURL=index.mjs.map
