// Copyright 2017-2018 @polkadot/client-runtime authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { RuntimeEnv$Heap, Pointer } from '../types';

export default function memmove (heap: RuntimeEnv$Heap, dst: Pointer, src: Pointer, num: number): Pointer {
  heap.set(
    dst,
    heap.dup(src, num)
  );

  return dst;
}
