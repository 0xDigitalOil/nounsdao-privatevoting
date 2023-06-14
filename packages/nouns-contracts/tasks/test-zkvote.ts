import { task, types } from 'hardhat/config';
task("test-zkvote", "Reads the value of a public variable from nouns dao proxy")
.addOptionalParam(
  'nounsDaoProxy',
  'The `NounsDAOProxy` contract address',
  '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82',
  types.string,
)
  .setAction(async taskArgs => {
    // Initialize the Hardhat Runtime Environment
    const hre = require("hardhat");

    // Get a signer. This could be any account that you control.
    const signer = await hre.ethers.getSigner();

    // Get a contract instance
    const contract = await hre.ethers.getContractAt("NounsDAOProxyV2", taskArgs.nounsDaoProxy, signer);

    // Read the value of the public variable
    try {
      const variableValue = await contract.PRIVATE_VOTING();
      console.log(variableValue);
    } catch (error) {
      console.error(error);
    }
  });
