// Copyright 2017-2018 @polkadot/client-db-chain authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';
import u8aToHex from '@polkadot/util/u8a/toHex';
import testingPairs from '@polkadot/util-keyring/testingPairs';

import db from './index';

const keyring = testingPairs();

describe('accountIndexOf', () => {
  let system;

  beforeEach(() => {
    const store = {
      '0x3ee0a63dc85a046557a2b3092a723d76': hexToU8a('0x0100000000000000')
    };

    system = db({
      get: (key) => {
        console.log('retrieving', u8aToHex(key));

        return store[u8aToHex(key)] || new Uint8Array([]);
      },
      put: (key, value) => {
        console.log('setting', u8aToHex(key), value);

        store[u8aToHex(key)] = value;
      }
    }).system;
  });

  describe('get', () => {
    it('returns nonce', () => {
      expect(
        system.accountIndexOf.get(keyring.one.publicKey()).toNumber()
      ).toEqual(1);
    });

    it('returns zero nonces', () => {
      expect(
        system.accountIndexOf.get(keyring.alice.publicKey()).toNumber()
      ).toEqual(0);
    });
  });

  describe('set', () => {
    it('sets a nonce', () => {
      system.accountIndexOf.set(666, keyring.alice.publicKey());

      expect(
        system.accountIndexOf.get(keyring.alice.publicKey()).toNumber()
      ).toEqual(666);
    });
  });
});
