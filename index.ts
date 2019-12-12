import {
  deployAssetLedger,
  getAssetLedgerInfo,
  createNewAsset,
  getAssetOwner,
  transferAsset
} from "./src/example";
import { config } from "./src/config";

const btnDeployAssetLedger = document.getElementById("btnDeployAssetLedger");
const btnGetAssetLedgerInfo = document.getElementById("btnGetAssetLedgerInfo");
const btnCreateNewAsset = document.getElementById("btnCreateNewAsset");
const btnTransferAsset = document.getElementById("btnTransferAsset");
const btnGetAssetOwner = document.getElementById("btnGetAssetOwner");
const console = document.getElementById("console");

btnDeployAssetLedger.addEventListener("click", async () => {
  printMessage("Starting asset ledger deploy");
  const mutation = await deployAssetLedger().catch(e => {
    printError(e);
  });
  if (mutation) {
    printMessage("Asset ledger deploy in progress: " + mutation.id);
    printMessage("This may take a while.");
    await mutation.complete();
    printMessage("Asset ledger deploy completed");
    printMessage("AssetLedger address: " + mutation.receiverId);
  }
});

btnGetAssetLedgerInfo.addEventListener("click", async () => {
  if (config.assetLedgerSource === "") {
    printWarning(
      "No assetLedgerSource defined. Either deploy a new asset ledger or set asset ledger source in src/config.ts file."
    );
  } else {
    const info = await getAssetLedgerInfo().catch(e => {
      printError(e);
    });
    if (info) {
      printMessage(info);
    }
  }
});

btnCreateNewAsset.addEventListener("click", async () => {
  if (config.assetLedgerSource === "") {
    printWarning(
      "No assetLedgerSource defined. Either deploy a new asset ledger or set asset ledger source in src/config.ts file."
    );
  } else {
    printMessage("Starting asset creation");
    const mutation = await createNewAsset().catch(e => {
      printError(e);
    });
    if (mutation) {
      printMessage("Asset creation in progress: " + mutation.id);
      printMessage("This may take a while.");
      await mutation.complete();
      printMessage("Asset created.");
    }
  }
});

btnGetAssetOwner.addEventListener("click", async () => {
  if (config.assetLedgerSource === "") {
    printWarning(
      "No assetLedgerSource defined. Either deploy a new asset ledger or set asset ledger source in src/config.ts file."
    );
  } else {
    const owner = await getAssetOwner().catch(e => {
      printError(e);
    });
    if (owner) {
      printMessage(owner);
    } else {
      printError("Asset does not exist.");
    }
  }
});

btnTransferAsset.addEventListener("click", async () => {
  if (config.assetLedgerSource === "") {
    printWarning(
      "No assetLedgerSource defined. Either deploy a new asset ledger or set asset ledger source in src/config.ts file."
    );
  } else {
    printMessage("Starting asset transfer");
    const mutation = await transferAsset().catch(e => {
      printError(e);
    });
    if (mutation) {
      printMessage("Asset transfer in progress: " + mutation.id);
      printMessage("This may take a while.");
      await mutation.complete();
      printMessage("Asset transfered.");
    }
  }
});

function printError(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = "Error: " + message;
  div.className = "error";
  console.prepend(div);
}

function printWarning(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = "Warning: " + message;
  div.className = "warning";
  console.prepend(div);
}

function printMessage(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = message;
  console.prepend(div);
}
