// Copyright 2017-2018 @polkadot/client-p2p authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { BlockRequestMessage$Fields, BlockResponseMessage$BlockData } from '../message/types';
import { P2pState } from '../types';

import decodeBlock from '@polkadot/primitives/codec/block/decodeRaw';

export default function getBlockData (self: P2pState, fields: BlockRequestMessage$Fields, hash: Uint8Array): BlockResponseMessage$BlockData {
  const { body, header } = decodeBlock(
    self.chain.blocks.block.get(hash)
  );
  const data: BlockResponseMessage$BlockData = {
    hash
  };

  if (fields.includes('body')) {
    data.body = body;
  }

  if (fields.includes('header')) {
    data.header = header;
  }

  return data;
}
