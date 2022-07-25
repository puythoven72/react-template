
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import axios from 'axios';
import giphyAPI from './services/giphyUrl';
import giphyStickerAPI from './services/giphyStickerUrl';
import GiphyDisplay from './components/GiphyDisplay';

import { useState, useEffect } from 'react';

function App() {

  let [gifList, setGifList] = useState([]);
  let [searchItem, setSearchItem] = useState("");
  let [searchNum, setSearchNum] = useState(0);
  let [searchUrl, setSearhUrl] = useState("");
  let [selectedOption, setSelectedOption] = useState("Gif");

  // useEffect(
  //   function () {
  //     if (gifList.length !== 0) {
  //       console.log(gifList)
  //       // gifList.data.map(

  //       //   function (gifData, index) {
  //       //     console.log(gifData);
  //       //   }


  //       // )
  //     }

  //   }



  //   , [gifList]);





  function displayGifs() {

    console.log(gifList);
    if (gifList.length !== 0) {
      console.log(gifList.data)
      gifList.data.map(

        function (gifData, index) {
          console.log(gifData);
        }


      )
    }
  };


  function updateSearchUrl() {
    let updatedURL = "";
    if (selectedOption === "Gif") {
      updatedURL = giphyAPI.replace("SEARCH-IMAGE", searchItem);

    } else {

      updatedURL = giphyStickerAPI.replace("SEARCH-IMAGE", searchItem);
    }

    updatedURL = updatedURL.replace("NUM-RETURN", searchNum);
    setSearhUrl(updatedURL);
    return updatedURL;
  }


  let getResponseData = async function (url) {
    console.log(url);
    try {
      let data = await axios.get(url);
      // console.log(data.data.data);
      setGifList(data.data.data);

    } catch {
      console.log("error")
    }

  };

  function handleSearch() {
    //this works
     getResponseData(updateSearchUrl());

     //This is behind
     
    // updateSearchUrl();
    // console.log(searchUrl + " Is updated url")

    // if (searchUrl !== "") {
    //   getResponseData(searchUrl);
    // };

  };

  function getSearchInputData(e) {
    setSearchItem(e.target.value);

  };

  function getSearchNumData(e) {
    setSearchNum(e.target.value);

  };

  function getSelectedOption(e) {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  }




  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch} handleSearchInput={getSearchInputData} handleOption={getSelectedOption} handleSearchAmt={getSearchNumData} />
      <GiphyDisplay gifData={gifList} />
    </div>
  );
}

export default App;
