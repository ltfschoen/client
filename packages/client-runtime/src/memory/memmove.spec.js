// Copyright 2017-2018 @polkadot/client-runtime authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import env from '../environment';
import index from './index';

describe('memmove', () => {
  let runtime;
  let memmove;

  beforeEach(() => {
    runtime = env();
    runtime.heap.setWasmMemory({ buffer: new Uint8Array([1, 2, 3, 4, 5]) });
    memmove = index(runtime).memmove;
  });

  it('copys the src to dst', () => {
    memmove(0, 2, 2);

    expect(
      runtime.heap.get(0, 5).toString()
    ).toEqual('3,4,3,4,5');
  });
});
