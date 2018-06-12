// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ChainInterface } from '@polkadot/client-chains/types';
import type { Config, Endpoint } from '../types';

const u8aToHex = require('@polkadot/util/u8a/toHex');
const u8aToU8a = require('@polkadot/util/u8a/toU8a');

const getStorage = ({ state: { db } }: ChainInterface): (params: Array<string>) => Promise<string> =>
  async ([key]: Array<string>): Promise<string> =>
    u8aToHex(
      db.get(u8aToU8a(key))
    );

module.exports = (config: Config, chain: ChainInterface): Endpoint => ({
  'state_getStorage': getStorage(chain)
});