// src/utils/auth.js

const ADMIN_USER = "mahathir";

// IMPORTANT: CHANGE THIS VALUE TO YOUR REAL PASSWORD'S HASH
// 1. Go to https://emn178.github.io/online-tools/sha256.html
// 2. Type your desired admin password (e.g. "mysecret123")
// 3. Copy the 64-character result
// 4. Paste it here between the quotes ↓↓↓
const ADMIN_PASS_HASH = "22a9577092b80236933948507432adce55611877d6e426b7ea703cbaee7f226a";

export async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

export async function checkAdmin(user, pass) {
  if (user !== ADMIN_USER) return false;
  const inputHash = await sha256(pass);
  return inputHash === ADMIN_PASS_HASH;
}