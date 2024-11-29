const myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise Resolved");
      }, 1000);
    });
  };
  
  myPromise().then((fromResolve) => {
    console.log(fromResolve); 
  });



const url = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
};

const asyncPromise = doNetworkCall();
console.log(asyncPromise);