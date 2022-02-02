/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import * as random from '@stdlib/types/random';

/**
* Interface defining `factory` options.
*/
interface Options {
	/**
	* Pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
	*/
	prng?: random.PRNG;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state.
	*/
	copy?: boolean;
}

/**
* Interface for PRNG properties and methods.
*/
interface PRNG {
	/**
	* Generator name.
	*/
	readonly NAME: string;

	/**
	* Underlying pseudorandom number generator.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number;

	/**
	* Serializes the pseudorandom number generator as a JSON object.
	*
	* @returns JSON representation
	*/
	toJSON(): string;
}

/**
* Interface for generating pseudorandom numbers from a Gumbel distribution with pre-specified parameter values.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a Gumbel distribution.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating pseudorandom numbers from a Gumbel distribution without pre-specified parameter values.
*/
interface BinaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a Gumbel distribution.
	*
	* @param mu - mean
	* @param beta - scale parameter
	* @returns pseudorandom number
	*/
	( mu: number, beta: number ): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a Gumbel distribution.
*/
interface Random extends PRNG {
	/**
	* Returns pseudorandom number drawn from a Gumbel distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `beta` is `NaN` or `beta <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param beta - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = gumbel( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = gumbel( 0.0, -1.0 );
	* // returns NaN
	*/
	( mu: number, beta: number ): number;

	/**
	* Returns a pseudorandom number generator for generating random numbers from a Gumbel distribution.
	*
	* ## Notes
	*
	* -   When provided `mu` and `beta`, the returned PRNG returns random variates drawn from the specified distribution.
	*
	* @param mu - mean parameter
	* @param beta - scale parameter
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws `beta` must be a positive number
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var mygumbel = gumbel.factory( 0.0, 1.0 );
	* var v = mygumbel();
	* // returns <number>
	*
	* @example
	* var mygumbel = gumbel.factory( -3.0, 0.5, {
	*     'seed': 297
	* });
	* var v = mygumbel();
	* // returns <number>
	*/
	factory( mu: number, beta: number, options?: Options ): NullaryFunction;

	/**
	* Returns a pseudorandom number generator for generating random numbers from a Gumbel distribution.
	*
	* ## Notes
	*
	* -   When not provided `mu` and `beta`, the returned PRNG requires that both `mu` and `beta` be provided at each invocation.
	*
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var mygumbel = gumbel.factory();
	* var v = mygumbel( 0.0, 1.0 );
	* // returns <number>
	*
	* @example
	* var mygumbel = gumbel.factory({
	*     'seed': 297
	* });
	* var v = mygumbel( -3.0, 0.5 );
	* // returns <number>
	*/
	factory( options?: Options ): BinaryFunction;
}

/**
* Returns pseudorandom number drawn from a Gumbel distribution.
*
* ## Notes
*
* -   If `mu` or `beta` is `NaN` or `beta <= 0`, the function returns `NaN`.
*
* @param mu - mean
* @param beta - scale parameter
* @returns pseudorandom number
*
* @example
* var v = gumbel( 0.0, 2.0 );
* // returns <number>
*
* @example
* var v = gumbel( 0.0, -1.0 );
* // returns NaN
*/
declare var gumbel: Random;


// EXPORTS //

export = gumbel;
