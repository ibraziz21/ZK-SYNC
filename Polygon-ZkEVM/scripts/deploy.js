const hre = require("hardhat");

async function main() {
    const deployedContract = await hre.ethers.deployContract("Counter");
    await deployedContract.deployed();
    console.log(
        `Counter contract deployed to https://explorer.public.zkevm-test.net/address/${deployedContract.address}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});