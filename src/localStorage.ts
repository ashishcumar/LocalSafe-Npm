import CryptoJS from "crypto-js";

// Get total size of local storage and warn if it is more than 50% full
const checkLocalStorageCapacity = () => {
  const totalSize = getTotalSize();
  const maxSize = 5 * 1024 * 1024; // 5MB - maximum size of local storage
  const currentPercentage = (totalSize / maxSize) * 100;

  if (currentPercentage > 50) {
    console.warn("LocalStorage is more than 50% full.");
  }

  const filledPercentage = Math.round(currentPercentage);
  const emptyPercentage = 100 - filledPercentage;

  console.log(
    `%cStorage filled: ${filledPercentage}%, Empty: ${emptyPercentage}%`,
    "color: red"
  );
};

// Encrypt and set a key-value pair in local storage
export const setEncryptedItem = (
  key: string,
  value: string,
  secret: string
) => {
  if (!key || !value || !secret)
    throw new Error("Key, value, and secret are required");
  if (
    typeof key !== "string" ||
    typeof value !== "string" ||
    typeof secret !== "string"
  )
    throw new TypeError("Key, value, and secret must be strings");
  checkLocalStorageCapacity();
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    secret
  ).toString();
  localStorage.setItem(key, encrypted);
};

// Decrypt and get a value from local storage by key
export const getDecryptedItem = (key: string, secret: string) => {
  if (!key || !secret) throw new Error("Key and secret are required");
  if (typeof key !== "string" || typeof secret !== "string")
    throw new TypeError("Key and secret must be strings");
  checkLocalStorageCapacity();
  const encrypted = localStorage.getItem(key);
  if (!encrypted) return null;

  const decrypted = CryptoJS.AES.decrypt(encrypted, secret).toString(
    CryptoJS.enc.Utf8
  );
  if (!decrypted) return null;

  return JSON.parse(decrypted);
};
// Remove an item from local storage by key
export const removeItem = (key: string) => {
  // Checking the arguments passed to the function for Null and Type Check
  if (!key) throw new Error("Key is required");
  if (typeof key !== "string") throw new TypeError("Key must be a string");

  // proceed with function
  localStorage.removeItem(key);
};

// Clear all items from local storage
export const clear = () => {
  localStorage.clear();
};

// Check if a key exists in local storage
export const hasItem = (key: string) => {
  checkLocalStorageCapacity();
  // Checking the arguments passed to the function for Null and Type Check
  if (!key) throw new Error("Key is required");
  if (typeof key !== "string") throw new TypeError("Key must be a string");

  // Proceed with functions
  return localStorage.getItem(key) !== null;
};

// Get all items from local storage
export const getAllItems = (secret: string) => {
  checkLocalStorageCapacity();
  const items: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== null) {
      items[key as keyof Record<string, string>] = getDecryptedItem(
        key,
        secret
      );
    }
  }
  return items;
};

export const getTotalSize = () => {
  let total = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key !== null) {
      const value = localStorage.getItem(key);
      if (value) {
        total += key.length + value.length * 2; // key length + value length in bytes (approximation)
      }
    }
  }
  return total;
};

// Get size of an item by key
export const getItemSize = (key: string) => {
  // Checking the arguments passed to the function for Null and Type Check
  if (!key) throw new Error("Key is required");
  if (typeof key !== "string") throw new TypeError("Key must be a string");

  const value = localStorage.getItem(key);
  return value ? `${key.length + value.length * 2} bytes` : 0; // key length + value length in bytes (approximation)
};

// Get remaining free space in local storage
export const getFreeSpace = () => {
  const totalSize = getTotalSize();
  const maxSize = 5 * 1024 * 1024; // 5MB - maximum size of local storage
  return `${maxSize - totalSize} bytes`;
};
