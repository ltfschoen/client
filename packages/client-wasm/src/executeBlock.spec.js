// Copyright 2017-2018 @polkadot/client-wasm authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import HashDb from '@polkadot/client-db/Hash';
import MemoryDb from '@polkadot/client-db/Memory';

import Chain from '@polkadot/client-chains';

describe('executeBlock', () => {
  const TEST = new Uint8Array([
    13, 85, 34, 171, 245, 12, 16, 73, 197, 106, 231, 219, 139, 87, 173, 252, 126, 2, 55, 165, 8, 237, 221, 136, 95, 19, 249, 60, 247, 193, 8, 201, 1, 0, 0, 0, 0, 0, 0, 0, 53, 191, 210, 221, 53, 61, 234, 160, 144, 39, 96, 152, 79, 190, 91, 192, 213, 233, 171, 197, 218, 227, 106, 28, 9, 97, 23, 209, 147, 202, 199, 90, 82, 250, 106, 206, 108, 205, 179, 210, 104, 223, 123, 158, 106, 186, 241, 242, 204, 147, 149, 97, 153, 160, 218, 130, 117, 134, 64, 169, 59, 137, 16, 146, 0, 0, 0, 0, 2, 0, 0, 0, 111, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 239, 129, 56, 91, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  const config = {
    chain: 'dev',
    wasm: {}
  };

  const memory = new MemoryDb();
  const chain = new Chain(config, memory, new HashDb());

  it('executes an actual block', () => {
    expect(
      chain.executor.executeBlock(TEST)
    ).toEqual(true);
  });

  it('terminates', () => {
    return memory.terminate();
  });
});
