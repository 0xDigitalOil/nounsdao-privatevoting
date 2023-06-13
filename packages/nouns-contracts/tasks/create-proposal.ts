import { utils } from 'ethers';
import { task, types } from 'hardhat/config';

task('create-proposal', 'Create a governance proposal')
  .addOptionalParam(
    'nounsDaoProxy',
    'The `NounsDAOProxy` contract address',
    '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82',
    types.string,
  )
  .setAction(async ({ nounsDaoProxy }, { ethers }) => {
    const nounsDaoFactory = await ethers.getContractFactory('NounsDAOLogicV2');
    const nounsDao = nounsDaoFactory.attach(nounsDaoProxy);

    const [deployer] = await ethers.getSigners();
    const oneETH = utils.parseEther('1');

    try {
      const receipt = await (
        await nounsDao.propose(
          [deployer.address],
          [oneETH],
          [''],
          ['0x'],
          '# Test Proposal\n## This is a **test**.',
        )
      );
      console.log('Proposal created');
    }
    catch (error) {
      console.error(error);
    }
    
  });
