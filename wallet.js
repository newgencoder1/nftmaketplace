document.getElementById('walletconnect').addEventListener('click', event => {
    let account;
    let button = event.target;
    ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        account = accounts[0];
        console.log(account);
        button.textContent = account;

        ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
            console.log(result);
            let wei = parseInt(result, 16);
            let balance = wei / (10 ** 18);
            console.log(balance + " ETH");
        });
    });
});

// document.getElementById('walletconnect').addEventListener('click', event => {
//     let account;
//     let button = event.target;
//     let accountInfoElement = document.getElementById('account-info'); // Update to the actual ID of the element

//     ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
//         account = accounts[0];
//         console.log(account);

//         // Update the button text if necessary
//         // button.textContent = "Connected"; 

//         // Update another element to display the account information
//         if (accountInfoElement) {
//             accountInfoElement.textContent = `Connected Account: ${account}`;
//         }

//         ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
//             console.log(result);
//             let wei = parseInt(result, 16);
//             let balance = wei / (10 ** 18);
//             console.log(balance + " ETH");
//         });
//     });
// });
