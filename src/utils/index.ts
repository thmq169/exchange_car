import image from "next/image";

async function mintNft() {
  if (!wallet.connected) return;
  if (!name || !description || !selectedImageUrl) {
    alert("Please fill in all fields: Name, Description, and Image URL.");
    return;
  }
  const txb = createMintNftTxnBlock(name, description, selectedImageUrl);
  try {
    // call the wallet to sign and execute the transaction
    const res = await wallet.signAndExecuteTransactionBlock({
      transactionBlock: txb,
    });
    console.log("nft minted successfully!", res);
  } catch (e) {
    console.error("nft mint failed", e);
  }
}

function createMintNftTxnBlock(
  name: string,
  description: string,
  image_url: string
) {
  // define a programmable transaction block
  const txb = new TransactionBlock();

  // note that this is a devnet contract address
  const contractAddress = "address_contract";
  const contractModule = "module_contract";
  const contractMethod = "method_contract";
  txb.moveCall({
    target: `${contractAddress}::${contractModule}::${contractMethod}`,
    arguments: [txb.pure(name), txb.pure(description), txb.pure(image_url)],
  });

  return txb;
}

const txb = new TransactionBlock();

const sender = account[0];
txb.setSender(sender.userAddr);

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const contractModule = CONTRACT_MODULE;
const contractMethod = CONTRACT_METHOD.CREATE_QUIZ;

txb.moveCall({
  target: `${contractAddress}::${contractModule}::${contractMethod}`,
  arguments: [
    txb.pure(name || "Minted NFT"),
    txb.pure(description || "description"),
    txb.pure(image),
  ],
});

const ephemeralKeyPair = keypairFromSecretKey(sender.ephemeralPrivateKey);
const { bytes, signature: userSignature } = await txb.sign({
  client: suiClient,
  signer: ephemeralKeyPair,
});

const zkLoginSignature: SerializedSignature = getZkLoginSignature({
  inputs: sender.zkLoginInput,
  maxEpoch: sender.maxEpoch,
  userSignature,
});

return suiClient.executeTransactionBlock({
  transactionBlock: bytes,
  signature: zkLoginSignature,
  options: {
    showEffects: true,
  },
});

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const {
  finalTranscript,
  listening,
  browserSupportsSpeechRecognition,
  resetTranscript,
} = useSpeechRecognition();

if (!browserSupportsSpeechRecognition) {
  return null;
}

const stopSpeaking = () => {
  SpeechRecognition.stopListening();
};

const startSpeaking = () => {
  resetTranscript();
  SpeechRecognition.startListening({ continuous: true, language: "en-US" });
};

const handleAddVoiceUserMessage = (finalTranscript: string) => {
  // handle voice user

  resetTranscript();
};
