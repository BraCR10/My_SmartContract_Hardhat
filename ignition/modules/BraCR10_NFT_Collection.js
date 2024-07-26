const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ADDRESS = '0xE3b3326b2c695e38BD3eF1F851A0974a78EC35BA';

module.exports = buildModule("AddressStorageModule", (m) => {
  const storage = m.contract("BraCR10_NFT_Collection", [ADDRESS]);

  return { storage };
});