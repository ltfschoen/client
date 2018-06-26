// Copyright 2017-2018 @polkadot/client-wasm authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ExecutorState } from '../types';

import call from './call';

export default function executeBlock (self: ExecutorState, block: Uint8Array): boolean {
  const start = Date.now();

  self.l.debug(() => 'Executing block');

  const result = call(self, 'execute_block')(block);

  self.l.debug(() => `Block execution completed (${Date.now() - start}ms)`);

  return result.bool;
}