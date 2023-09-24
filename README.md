<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Gumbel Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gumbel][gumbel] distributed pseudorandom numbers.



<section class="usage">

## Usage

```javascript
import gumbel from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gumbel@v0.1.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gumbel@v0.1.0-deno/mod.js';
```

#### gumbel( mu, beta )

Returns a pseudorandom number drawn from a [Gumbel][gumbel] distribution with parameters `mu` (mean) and `beta` (scale parameter).

```javascript
var r = gumbel( 2.0, 5.0 );
// returns <number>
```

If `mu` or `beta` is `NaN` or `beta <= 0`, the function returns `NaN`.

```javascript
var r = gumbel( 2.0, -2.0 );
// returns NaN

r = gumbel( NaN, 5.0 );
// returns NaN

r = gumbel( 2.0, NaN );
// returns NaN
```

#### gumbel.factory( \[mu, beta, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [Gumbel][gumbel] distribution.

```javascript
var rand = gumbel.factory();

var r = rand( 0.1, 1.5 );
// returns <number>
```

If provided `mu` and `beta`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = gumbel.factory( 10.0, 2.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `mu` and `beta`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = gumbel.factory();

var r = rand( 0.0, 1.0 );
// returns <number>

r = rand( -2.0, 2.0 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@deno/mod.js';

var rand = gumbel.factory({
    'prng': minstd.normalized
});

var r = rand( 1.0, 2.0 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = gumbel.factory({
    'seed': 12345
});

var r1 = rand1( 1.0, 2.0 );
// returns <number>

var rand2 = gumbel.factory( 1.0, 2.0, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = gumbel( 1.0, 2.0 );
}

// Create a new PRNG initialized to the current state of `gumbel`:
rand = gumbel.factory({
    'state': gumbel.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 1.0, 2.0 ) === gumbel( 1.0, 2.0 ) );
// returns true
```

#### gumbel.NAME

The generator name.

```javascript
var str = gumbel.NAME;
// returns 'gumbel'
```

#### gumbel.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = gumbel.PRNG;
// returns <Function>
```

#### gumbel.seed

The value used to seed `gumbel()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = gumbel( 2.0, 2.0 );
}

// Generate the same pseudorandom values...
rand = gumbel.factory( 2.0, 2.0, {
    'seed': gumbel.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### gumbel.seedLength

Length of generator seed.

```javascript
var len = gumbel.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### gumbel.state

Writable property for getting and setting the generator state.

```javascript
var r = gumbel( 2.0, 5.0 );
// returns <number>

r = gumbel( 2.0, 5.0 );
// returns <number>

// ...

// Get a copy of the current state:
var state = gumbel.state;
// returns <Uint32Array>

r = gumbel( 2.0, 5.0 );
// returns <number>

r = gumbel( 2.0, 5.0 );
// returns <number>

// Reset the state:
gumbel.state = state;

// Replay the last two pseudorandom numbers:
r = gumbel( 2.0, 5.0 );
// returns <number>

r = gumbel( 2.0, 5.0 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### gumbel.stateLength

Length of generator state.

```javascript
var len = gumbel.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### gumbel.byteLength

Size (in bytes) of generator state.

```javascript
var sz = gumbel.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### gumbel.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = gumbel.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = gumbel.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import gumbel from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gumbel@v0.1.0-deno/mod.js';

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( gumbel( 0.0, 1.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = gumbel.factory( 5.0, 2.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = gumbel.factory( 0.0, 1.0, {
    'seed': gumbel.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-gumbel.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-gumbel

[test-image]: https://github.com/stdlib-js/random-base-gumbel/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/random-base-gumbel/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-gumbel/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-gumbel?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-gumbel.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-gumbel/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-gumbel/tree/deno
[umd-url]: https://github.com/stdlib-js/random-base-gumbel/tree/umd
[esm-url]: https://github.com/stdlib-js/random-base-gumbel/tree/esm
[branches-url]: https://github.com/stdlib-js/random-base-gumbel/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-gumbel/main/LICENSE

[gumbel]: https://en.wikipedia.org/wiki/Gumbel_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/deno

</section>

<!-- /.links -->
