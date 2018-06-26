// Copyright 2017-2018 @polkadot/client-p2p authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockRequestMessage$BlockAttribute, BlockRequestMessage$Direction } from '../types';

export type BlockRequestEncoded = {
  direction: BlockRequestMessage$Direction,
  fields: Array<BlockRequestMessage$BlockAttribute>,
  from: string,
  id: number,
  max: number,
  to?: string
};