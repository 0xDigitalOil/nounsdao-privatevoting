// SPDX-License-Identifier: GPL-3.0
/// @title Interface for NounsDAOProxy

pragma solidity ^0.8.6;

interface IDAOProxy {
  function receiveVoteTally(uint256 proposalId, uint256 forVotes, uint256 againstVotes, uint256 abstainVotes) external;
}