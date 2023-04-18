const { fetchEthPrice, getUniswapV2Price } = require("./helpers");

exports.getPrice = async (args) => {
  const {
    inputTokenSymbol,
    inputTokenAddress,
    outputTokenSymbol,
    outputTokenAddress,
    inputAmount,
  } = args;
  const price = await getUniswapV2Price(
    { symbol: inputTokenSymbol, address: inputTokenAddress },
    { symbol: outputTokenSymbol, address: outputTokenAddress }
  );

  // TODO: deal with decimals
  console.log(price, "ETH");
  const ethPrice = await fetchEthPrice();
  console.log((price * ethPrice).toString(), "$");
  return price * ethPrice;
};
