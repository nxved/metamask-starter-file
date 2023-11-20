document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("accountList")
    .addEventListener("click", changeAccount);

  document.getElementById("userAddress").addEventListener("click", copyAddress);

  document.getElementById("transferFunds").addEventListener("click", handler);

  document
    .getElementById("header_network")
    .addEventListener("click", getOpenNetwork);

  document
    .getElementById("network_item")
    .addEventListener("click", getSelectedNetwork);

  document.getElementById("add_network").addEventListener("click", setNetwork);

  document.getElementById("loginAccount").addEventListener("click", loginUser);

  document
    .getElementById("accountCreate")
    .addEventListener("click", createUser);

  document.getElementById("openCreate").addEventListener("click", openCreate);

  document.getElementById("sign_up").addEventListener("click", signUp);

  document.getElementById("login_up").addEventListener("click", login);

  document.getElementById("logout").addEventListener("click", logout);

  document
    .getElementById("open_Transfer")
    .addEventListener("click", openTransfer);

  document.getElementById("goBack").addEventListener("click", goBack);

  document.getElementById("open_Import").addEventListener("click", openImport);

  document.getElementById("open_assets").addEventListener("click", openAssets);

  document
    .getElementById("open_activity")
    .addEventListener("click", openActiviy);

  document.getElementById("goHomePage").addEventListener("click", goHomePage);

  document
    .getElementById("openAccountImport")
    .addEventListener("click", openImportModel);

  document
    .getElementById("close_import_account")
    .addEventListener("click", closeImportModel);

  document
    .getElementById("add_new_account")
    .addEventListener("click", addAccount);
});

let providerURL = "https://data-seed-prebsc-1-s1.binance.org:8545/";
// let provider;
let privateKey;
let address;

function handler() {
  document.getElementById("transfer_center").style.display = "flex";

  const amount = document.getElementById("amount").value;
  const address = document.getElementById("address").value;

  const private_key =
    " ced111bed48aaddbe7714a177e5fe2440791ca67ea8f820830fa740abbe55020";
  const testAccount = "0x4C8146d4B0235f15a53E0f025497B8616F21D1f2";

  const provider = new ethers.providers.JsonRpcProvider(providerURL);

  let wallet = new ethers.Wallet(privateKey, provider);

  const tx = {
    to: address,
    value: ethers.utils.parseEther(amount),
  };

  let a = document.getElementById("link");
  a.href = "somelink url";

  wallet.sendTransaction(tx).then((txObj) => {
    console.log("txHash:", txObj.hash);

    document.getElementById("transfer_centre").style.display = "none";

    const a = document.getElementById("link");

    document.getElementById("link").style.display = "block";
  });
}

function checkBlance(address) {
  const provider = new ethers.providers.JsonRpcProvider(providerURL);

  provider.getBalance(address).then((balance) => {
    const balanceInEth = ethers.utils.formatEther(balance);

    document.getElementById("accountBalance").innerHTML = `${balanceInEth} BNB`;
  });

  document.getElementById("userAddress").innerHTML = `${address.slice(
    0,
    15
  )}....`;
}

function getOpenNetwork() {}

function getSelectedNetwork() {}

function setNetwork() {}

function loginUser() {}

function createUser() {}

function openCreate() {}

function signUp() {}

function login() {}

function logout() {}

function openTransfer() {}

function goBack() {}

function openImport() {}

function importGoBack() {}

function openActiviy() {}

function openAssets() {}

function goHomePage() {}

function openImportModel() {}

function closeImportModel() {}

function addToken() {}

function addAccount() {}

function myFunction() {}

function copyAddress() {}

function changeAccount() {}
