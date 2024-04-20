# localsafe

# Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Function Details](#function-details)
   - [setEncryptedItem](#setencrypteditemkey-string-value-string-secret-string-void)
   - [getDecryptedItem](#getdecrypteditemkey-string-secret-string-any--null)
   - [removeItem](#removeitemkey-string-void)
   - [clear](#clear-void)
   - [hasItem](#hasitemkey-string-boolean)
   - [getAllItems](#getallitemssecret-string-recordstring-string)
   - [getTotalSize](#gettotalsize-number)
   - [getItemSize](#getitemsizekey-string-number--null)
   - [getFreeSpace](#getfreespace-number)
5. [Security Considerations](#security-considerations)
6. [License](#license)

## Secure and Easy Local Storage Management for JavaScript

**Localsafe**: 🔒 Your Browser's Secure Storage Solution!
Localsafe ensures your data stays safe and encrypted in browser local storage. With seamless data storage and retrieval, plus tools to check available space and optimize usage, Localsafe makes managing local storage a breeze.<br>
The real game-changer? Localsafe's compression technology lets you store large datasets exceeding the 5 MB limit, without sacrificing speed or security.<br>
Experience hassle-free, secure local storage management with Localsafe. Try it now and revolutionize your development workflow! 🚀",


### Features

- 🛡️ **AES Encryption:** Encrypts data using Advanced Encryption Standard (AES) encryption for enhanced security.
- 🗝️ **Secret Key Management:** Supports secure management of secret keys for encryption and decryption.
- 📦 **Simple API:** Provides a simple and intuitive API for easy integration and usage.
- 🌐 **Browser Compatibility:** Works seamlessly across major web browsers.
- 📈 **Storage Metrics:** Allows calculation of storage size and free space for efficient storage management.
- ♻️ **Clear Function:** Includes a function to clear all data from local storage, ensuring data privacy.
- ⚙️ **Flexible Configuration:** Supports customization through environment variables and configuration options.
- 📄 **Detailed Documentation:** Comprehensive documentation with examples and usage guidelines.
- 🌟 **Active Development:** Continuously updated with new features and improvements.


### Installation

You can install **localsafe** via npm:
```bash
npm install localsafe
```

```bash
import { setEncryptedItem, getDecryptedItem, removeItem,  hasItem, getAllItems, getTotalSize, getItemSize getFreeSpace, } from "localsafe";
```

## Function Details

### setEncryptedItem(key: string, value: string, secret: string): void

Encrypts and stores a key-value pair in local storage using AES encryption.

**Parameters:**
- `key`: The key under which the encrypted value will be stored.
- `value`: The value to be encrypted and stored.
- `secret`: The secret key used for encryption.

---

### getDecryptedItem(key: string, secret: string): any | null

Retrieves and decrypts a value from local storage based on the key.

**Parameters:**
- `key`: The key of the item to retrieve and decrypt.
- `secret`: The secret key used for decryption.

**Returns:**
The decrypted value if found, or `null` if the key is not found or decryption fails.

---

### removeItem(key: string): void

Removes an item from local storage based on the provided key.

**Parameters:**
- `key`: The key of the item to remove.

---

### clear(): void

Removes all items from local storage, effectively clearing the entire storage space.

**Note:** This action is irreversible and will remove all data stored in local storage.

---

### hasItem(key: string): boolean

Checks if an item exists in local storage based on the provided key.

**Parameters:**
- `key`: The key of the item to check.

**Returns:**
`true` if the item exists, `false` otherwise.

---

### getAllItems(secret: string): Record<string, string>

Retrieves all key-value pairs from local storage as an object.

**Returns:**
An object containing all key-value pairs stored in local storage.

---

### getTotalSize(): number

Calculates and returns the total size of data stored in local storage in bytes.

**Returns:**
The total size of data in local storage.

---

### getItemSize(key: string): number | null

Calculates and returns the size of a specific item stored in local storage in bytes.

**Parameters:**
- `key`: The key of the item to check.

**Returns:**
The size of the item if found, or `null` if the item does not exist.

---

### getFreeSpace(): number

Calculates and returns the available free space in local storage in bytes.

**Returns:**
The available free space in local storage.

---

## Security Considerations

- **Encryption:** All data stored using **localsafe** is encrypted using AES encryption, enhancing data security.

- **Secret Key:** Ensure that you use a strong and secure secret key for encryption and decryption to prevent unauthorized access. Store your secret keys securely in `.env` files.

