// scripts/deploy.js
async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  // Deploy the contract with sample candidates and a voting duration
  const votingContract = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 90);
  await votingContract.deployed();

  console.log("Voting contract deployed to address:", votingContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
