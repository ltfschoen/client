// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ChainInterface } from '@polkadot/client-chains/types';
import type { Sockets, Subscriptions } from './types';

const decodeHeader = require('@polkadot/primitives-codec/header/decode');
const jsonHeader = require('@polkadot/primitives-json/header/encode');

const send = require('./send');

const updateAll = (subscriptions: Subscriptions, sockets: Sockets, method: string, value: mixed): void => {
  if (subscriptions[method] === undefined) {
    subscriptions[method] = {
      value,
      subscriptions: []
    };
  } else {
    subscriptions[method].value = value;
  }

  subscriptions[method].subscriptions.forEach((subId) => {
    const socket = sockets[subId];

    if (socket) {
      send(socket, method, subId, value);
    }
  });
};

module.exports = function update ({ blocks }: ChainInterface, subscriptions: Subscriptions, sockets: Sockets): void {
  blocks.block.onUpdate((header: Uint8Array): void =>
    updateAll(subscriptions, sockets, 'chain_newHead', jsonHeader(decodeHeader(header)))
  );
};