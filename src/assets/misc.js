const _sodium = require("libsodium-wrappers")
// const base64url = require('base64url')
const words = require('./bip39Wordlist.txt')
var Buffer = require('buffer/').Buffer

const convert = (from, to) => (str) => Buffer.from(str, from).toString(to)
const utf8ToHex = convert("utf8", "hex")

async function encrypt(stringMessage) {
  await _sodium.ready
  const sodium = _sodium
  // const keyPair = sodium.crypto_box_keypair()
  // const publicKey = keyPair.publicKey
  const publicKeySoduim = sodium.from_base64('ymZFfmZghikHnPJIkFld3AkiTlr0OiWvK6aJXBUUwSM')
  const cipherText = sodium.crypto_box_seal(
    sodium.from_string(stringMessage),
    publicKeySoduim
  )
  const cipherHex = sodium.to_base64(cipherText)
  return cipherHex
}

async function getRandomInt (exclusiveMax) {
  await _sodium.ready
  const sodium = _sodium
  // The min is 0 (inclusive) and the max is exclusive
  return sodium.randombytes_uniform(exclusiveMax)
}
function toArrayBuffer(buffer) {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  )
}
function numberArrayToWordArray (numberArray) {
  const wordList = words.split(/\r?\n|\r|\n/g)
  const wordArray = []
  for (var i=0;i<6; i++) {
    wordArray.push(wordList[numberArray[i]])
  }
  return wordArray
}
async function decrypt(hexNonceAndCiphertext, stringKey) {
  await _sodium.ready
  const sodium = _sodium
  const cipherText = Buffer.from(hexNonceAndCiphertext, "hex")
  const uInt8Cipher = new Uint8Array(toArrayBuffer(cipherText))
  const keyHashed = sodium.crypto_generichash(
    sodium.crypto_secretbox_KEYBYTES,
    sodium.from_hex(utf8ToHex(stringKey))
  )
  const nonce = uInt8Cipher.slice(0, sodium.crypto_secretbox_NONCEBYTES)
  const ciphertext = uInt8Cipher.slice(sodium.crypto_secretbox_NONCEBYTES)
  const resultsUint8 = sodium.crypto_secretbox_open_easy(
    ciphertext,
    nonce,
    keyHashed
  )
  return Buffer.from(resultsUint8).toString("utf-8")
}

exports.encrypt =  encrypt
exports.decrypt = decrypt
exports.getRandomInt = getRandomInt
exports.numberArrayToWordArray = numberArrayToWordArray
