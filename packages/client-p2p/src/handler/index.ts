// Copyright 2017-2018 @polkadot/client-p2p authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { P2pState, MessageInterface, PeerInterface } from '../types';
import { Handler } from './types';

import blockAnnounce from './blockAnnounce';
import blockRequest from './blockRequest';
import blockResponse from './blockResponse';
import status from './status';

type Message = {
  peer: PeerInterface,
  message: MessageInterface
};

const HANDLERS: Array<Handler> = [
  blockAnnounce, blockRequest, blockResponse, status
];

export default function onPeerMessage (self: P2pState): void {
  self.peers.on('message', ({ peer, message }: Message): void => {
    const handler = HANDLERS.find((handler) => handler.TYPE === message.type);

    if (!handler) {
      self.l.error(`Unhandled message type=${message.type}`);
      return;
    }

    handler(self, peer, message);
  });
}