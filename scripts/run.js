async function main(){
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract's address: ", waveContract.address);

  let count = await waveContract.getTotalWaves();
  console.log(count.toNumber());
  
  let waveTxn = await waveContract.wave("This is a message");
  await waveTxn.wait();

  waveTxn = await waveContract.wave("This is another message");
  await waveTxn.wait();

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
}



main()
  .then(() => process.exit(0))
  .catch((err)=>{
    console.error(err);
    process.exit(1);
  });