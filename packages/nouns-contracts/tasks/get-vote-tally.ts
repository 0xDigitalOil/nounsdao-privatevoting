import { utils } from 'ethers';
import { task, types } from 'hardhat/config';

task('get-vote-tally', 'Create a governance proposal')
  .addOptionalParam(
    'nounsDaoProxy',
    'The `NounsDAOProxy` contract address',
    '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82',
    types.string,
  )
  .setAction(async ({ nounsDaoProxy }, { ethers }) => {
    const nounsDaoFactory = await ethers.getContractFactory('NounsDAOLogicV2');
    const nounsDao = nounsDaoFactory.attach(nounsDaoProxy);

    try {
      const tally = await nounsDao.proposals(9);

      console.log(tally);
      console.log('tally obtained');
    }
    catch (error) {
      console.error(error);
    }
    
  });
