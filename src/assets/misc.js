const _sodium = require("libsodium-wrappers")
const base64url = require('base64url')
var Buffer = require('buffer/').Buffer

const convert = (from, to) => (str) => Buffer.from(str, from).toString(to)
const utf8ToHex = convert("utf8", "hex")

async function encrypt(stringMessage) {
  await _sodium.ready
  const sodium = _sodium
  const keyPair = sodium.crypto_box_keypair()
  const publicKey = keyPair.publicKey
  const cipherText = sodium.crypto_box_seal(
    sodium.from_hex(utf8ToHex(stringMessage)),
    publicKey
  )
  const cipherHex = base64url(Buffer.from(cipherText).toString('base64'))
  return cipherHex
}
function toArrayBuffer(buffer) {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  )
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

function getWordListArray(text) {
  const newList = []
  const totalWordList = text.split("\n")
  totalWordList.pop()
  totalWordList.pop()
  for (let i = 0; i < totalWordList.length; i++) {
    const tempString = totalWordList[i]
    newList[i] = tempString.split(" ")[2]
    newList[i] = newList[i].replace(/\s/g, "")
  }
  return newList
}
exports.encrypt =  encrypt
exports.getWordListArray = getWordListArray
exports.decrypt = decrypt
