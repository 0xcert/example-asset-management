import { MetamaskProvider } from "@0xcert/ethereum-metamask-provider";
import { config } from "./config";
import {
  AssetLedger,
  AssetLedgerCapability
} from "@0xcert/ethereum-asset-ledger";

// We create a new instance of metamask provider.
const provider = new MetamaskProvider(config.providerConfig);

export async function enableMetamask() {
  // We first check if metamask is already enabled.
  if (!(await provider.isEnabled())) {
    // If metamask is not enabled, we enable it.
    await provider.enable();
  }
}
export async function deployAssetLedger() {
  await enableMetamask();
  const mutation = await AssetLedger.deploy(provider, {
    name: "Math Course Certificate",
    symbol: "MCC",
    uriPrefix: "https://0xcert.org/assets/",
    uriPostfix: ".json",
    schemaId:
      "3f4a0870cd6039e6c987b067b0d28de54efea17449175d7a8cd6ec10ab23cc5d", // base asset schemaId
    capabilities: [AssetLedgerCapability.REVOKE_ASSET]
  }).catch(e => {
    console.log(e);
    throw e;
  });
  mutation.complete().then(m => {
    config.assetLedgerSource = m.receiverId; // Address of the created smart contract.
  });
  return mutation;
}

export async function getAssetLedgerInfo() {
  await enableMetamask();
  const assetLedger = AssetLedger.getInstance(
    provider,
    config.assetLedgerSource
  );
  return assetLedger.getInfo();
}

export async function getAssetOwner() {
  await enableMetamask();
  const assetLedger = AssetLedger.getInstance(
    provider,
    config.assetLedgerSource
  );
  return assetLedger.getAssetAccount("100");
}

export async function createNewAsset() {
  await enableMetamask();
  const assetLedger = AssetLedger.getInstance(
    provider,
    config.assetLedgerSource
  );
  return assetLedger.createAsset({
    receiverId: provider.accountId,
    imprint: "aa431acea5ded5d83ea45f1caf39da9783775c8c8c65d30795f41ed6eff45e1b",
    id: "100"
  });
}

export async function transferAsset() {
  await enableMetamask();
  const assetLedger = AssetLedger.getInstance(
    provider,
    config.assetLedgerSource
  );
  return assetLedger.transferAsset({
    receiverId: "0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa", // Change with your address otherwise it will be sent to us. :)
    id: "100"
  });
}
