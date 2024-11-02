# Artemis: A Decentralized Voting DApp

**Artemis** is a decentralized application (DApp) that leverages Ethereum blockchain technology to provide a secure and transparent voting system. Built with Solidity, Hardhat, and a React frontend, Artemis allows users to vote for candidates in a decentralized manner using their MetaMask wallets.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Compile Smart Contracts](#compile-smart-contracts)
  - [Deploy Smart Contracts](#deploy-smart-contracts)
  - [Run Tests](#run-tests)
  - [Launch React Frontend](#launch-react-frontend)
- [Application Overview](#application-overview)
  - [Voting Contract](#voting-contract)
  - [Frontend Components](#frontend-components)
  - [Screenshots](#screenshots)
- [Commands Summary](#commands-summary)
- [Future Enhancements](#future-enhancements)

## Introduction

Artemis provides a secure, transparent voting platform where each vote is recorded on the blockchain, ensuring integrity and immutability. The application is built to simulate real-world voting systems in a Web3 environment, using Solidity for the backend logic and a React frontend for an engaging user experience.

## Technologies Used
- **Solidity**: For implementing the voting logic as a smart contract on Ethereum.
- **Hardhat**: Ethereum development environment to compile, test, and deploy the contract.
- **Ganache**: Local blockchain for testing and development.
- **React**: Frontend framework for building the Web3 interface.
- **Ethers.js**: Ethereum JavaScript library for interacting with the blockchain.
- **Tailwind CSS**: Styling library for a responsive, modern UI.

## Features

- **Blockchain-Backed Voting**: Ensures secure and immutable records of votes.
- **MetaMask Wallet Authentication**: Users connect their MetaMask wallet to verify identity and cast votes.
- **Real-Time Voting Status**: Displays active voting session status and remaining time.
- **Vote Once Mechanism**: Each voter can cast only one vote per session, enforcing fairness.

## Prerequisites

- **Node.js** (v14 or later)
- **Hardhat** for contract development
- **Ganache** for local blockchain testing
- **MetaMask** for connecting to the Ethereum network via browser

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/Artemis.git
cd Artemis
npm install
```

## Configuration

1. **Environment Variables**: Create a `.env` file in the project root directory with the following:
   ```plaintext
   API_URL=http://127.0.0.1:7545
   PRIVATE_KEY=your_ganache_private_key
   ```
   
2. **Ganache Setup**: Start Ganache on `http://127.0.0.1:7545` and use one of its account private keys in the `.env` file.

## Usage

### Compile Smart Contracts
Generate the necessary ABI and bytecode by compiling the contracts:
```bash
npx hardhat compile
```

### Deploy Smart Contracts
Deploy the `Voting` contract to the local Ganache blockchain:
```bash
npx hardhat run scripts/deploy.js --network ganache
```

### Run Tests
To validate the functionality and accuracy of the smart contract:
```bash
npx hardhat test --network ganache
```

### Launch React Frontend
Start the React frontend to interact with the deployed contract:
```bash
npm start
```

## Application Overview

### Voting Contract

The Solidity-based voting contract defines core functionalities, including:
- **Candidate Management**: Initializes candidates and allows voting on them.
- **Vote Tracking**: Keeps track of individual votes and prevents multiple voting attempts per session.
- **Session Timing**: Limits voting to a specified duration, after which voting is closed and results can be viewed.

### Frontend Components

The React frontend facilitates user interactions and displays voting details. Key components include:

- **Login Component**: Enables users to connect their MetaMask wallet to access the application.
- **Connected Component**: Displays the main voting interface with candidate options, remaining time, and vote submission.
- **Finished Component**: Displays a message indicating the end of the voting session, thanking users for their participation.

Each component is styled with Tailwind CSS, providing a clean, responsive interface. The app uses React’s state and props to update in real-time as users connect their wallets, cast votes, and monitor session status.

### Screenshots

- **Login Screen**  
  Allows users to connect their MetaMask wallet to access the DApp.  
  ![Login Screen](./screenshots/login.png)

- **Voting Interface (Connected)**  
  Shows the candidate list, remaining time, and vote submission options.  
  ![Voting Interface](./screenshots/connected.png)

- **Voting Finished Screen**  
  Displays a thank-you message when the voting session concludes.  
  ![Finished Screen](./screenshots/finished.png)

> Add your screenshots to the `screenshots` folder for easy reference in the README.

## Commands Summary

| Command                                | Description                                    |
|----------------------------------------|------------------------------------------------|
| `npm install`                          | Install project dependencies                   |
| `npx hardhat compile`                  | Compile the smart contracts                    |
| `npx hardhat run scripts/deploy.js --network ganache` | Deploy contracts on Ganache        |
| `npx hardhat test --network ganache`   | Run contract tests on Ganache                  |
| `npm start`                            | Start the React frontend                       |

## Future Enhancements

- **Analytics and Visualization**: Add visual components for displaying vote counts and participation statistics.
- **Blockchain Explorer Integration**: Link votes and results to a blockchain explorer for greater transparency.
- **Enhanced Session Management**: Implement automated session management to close or restart voting sessions based on smart contract logic.

