import React from "react";
// import { Box, Typography,Link, TextField, Button } from "@mui/material";
import { Box } from "@mui/material";
// import { motion } from "framer-motion";
// import { useState } from 'react';
// import {ethers, BigNumber} from "ethers";
// import BirbsNFT from '../../BirbsNFT.json'

//import AnimatedText from "./AnimatedText";

// import ThickSpin  from "../../assets/thick_spin.gif";
//import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

// const birbsNFTAddress = "0xBf94Ed728A25A612BC93a7a87894D24f5BeDE4BB";

const HeroSectionText = ({ accounts, setAccounts }) => {

  // const [mintAmount, setMintAmount] = useState(1);
  // const isConnected = Boolean(accounts[0]);

  // const container = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.025,
  //     },
  //   },
  // };

  // async function handleMint() {
  //     if (window.ethereum) {
  //         const provider = new ethers.providers.Web3Provider(window.ethereum);
  //         const signer = provider.getSigner();
  //         const contract = new ethers.Contract(birbsNFTAddress, BirbsNFT.abi, signer);

      
  //     try {
  //         const response = await contract.mint(BigNumber.from(mintAmount), {
  //             value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
  //         });
  //         console.log('response', response);
  //     } catch (error) {
  //         console.log("error: ",error);
  //     }
  //     }
  // }

  // const handleDecrement = () => {
  
  //     if (mintAmount <= 1) return;
  //     setMintAmount(mintAmount - 1);
  
  // }

  // const handleIncrement = () => {
  
  //     if (mintAmount >= 5) return;
  //     setMintAmount(mintAmount + 1);
  
  // }

  return (
  
    <Box display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh">
      <Box sx={root}
       display="flex"
       justifyContent="center"
       alignItems="center"
       minHeight="100vh"
      >
        <Box sx={textWrapper}
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="100vh"
        >
          {/* <motion.div
            className="App"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <div className="container">
            <Link href="#about">
                <img style={{ width: "14rem" }} alt="send-icon" src={ThickSpin} />
            </Link>
            
            </div>
          </motion.div> */}
{/* 
          <iframe
              title="mintFrame"
              src="https://gateway.ipfscdn.io/ipfs/QmQM4Njtt2o4cQ98Mi2kBD6rBsfH6LfeaRYBYLpR41nVFs/signature-drop.html?contract=0xdEB04F0c3a13954c6CDB7078E710d04c465eAb01&chainId=1&theme=dark&primaryColor=orange"
              width="600px"
              height="600px"
              style={{ maxWidth:"100%"}}
              frameBorder="0"
              ></iframe> */}
          <iframe
              title="mintFrame"
              src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xdEB04F0c3a13954c6CDB7078E710d04c465eAb01&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=9b1799ad085d88269e67f2404b6e944b&theme=dark&primaryColor=orange"
              width="600px"
              height="600px"
              style={{ maxWidth:"100%"}}
              frameborder="0"
              ></iframe>

          {/* {isConnected ? (
                <Box>
                    <Box >
                      <Button
                        sx={{ minWidth: "2rem" }}
                        // size={screenDownSm ? "small" : "medium"}
                        variant="contained"
                        onClick={handleDecrement}
                      >
                        <Typography variant="h2" color="tertiary.main">
                          -
                        </Typography>
                      </Button>
                      <TextField
                        // id="outlined-read-only-input"
                       
                        //variant="filled"
                        sx={{ input: { color: 'white', fontSize:"25px", textAlign:"center"} }}
                        value ={mintAmount}
                        InputProps={{
                         readOnly: true,
                        
                          }}
                          variant="filled"
                        />
                        <Button
                        sx={{ minWidth: "2rem" }}
                        // size={screenDownSm ? "small" : "medium"}
                        variant="contained"
                        onClick={handleIncrement}
                        >
                        <Typography variant="h2" color="tertiary.main">
                          +
                        </Typography>
                      </Button>
                    </Box>
                    
                    <Box  display="flex"
                          justifyContent="center"
                          alignItems="center">
                        <Button
                          sx={{ minWidth: "2rem", mt: "1rem" }}
                                variant="contained"
                                onClick={handleMint}
                        >
                          <Typography variant="h2" color="tertiary.main">
                            Mint
                          </Typography>
                        </Button>
                    </Box>
                </Box>
                ) : (
                  
                  <Box >
                    <Typography
                        marginTop="70px"
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"          
                        color="#32CD32"
                        textAlign="center"
                        >
                        You must connect your wallet to mint.
                        (on mobile use MetaMask or any wallet browser to connect)
                    </Typography>
                  </Box>
                )} */}
          
        </Box>

      </Box>
    </Box>
  );
}

export default HeroSectionText;

// const root = {
//   dispaly: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
//   width: "100%",
// };

const root = {
  width: "100%",
  backgroundColor: "secondary.main",
  background: `url(${require("../../assets/night_waterfall.webp")})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  gap: { md: "350px", xs: "60px" },
  alignItems: "center",
  justifyContent: "space-between",
};

const textWrapper = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: { md: "750px", sm: "500px", xs: "400px" },
};
