const { ethers } = require("ethers");
const {
  abi: UniswapV3Factory,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");
require("dotenv").config();
const PROVIDER_TESTNET_URI = process.env.PROVIDER_TESTNET_URI;

const address0 = "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984";
const address1 = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
const factoryAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(PROVIDER_TESTNET_URI);

  const factoryContract = new ethers.Contract(
    factoryAddress,
    UniswapV3Factory,
    provider
  );

  const poolAddress = await factoryContract.getPool(address0, address1, 500);
  console.log("poolAddress", poolAddress);
}

main();
