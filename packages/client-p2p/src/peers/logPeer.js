// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { PeerInterface, PeersInterface$Events } from '../types';
import type { PeersState } from './types';

module.exports = function logPeer ({ l, emitter }: PeersState, event: PeersInterface$Events, peer: PeerInterface, withShort: boolean = true): void {
  l.log(withShort ? peer.shortId : peer.id, event);

  emitter.emit(event, peer);
};
