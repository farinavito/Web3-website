
const abi_lex1 = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"agreementId","type":"uint256"},{"indexed":false,"internalType":"address","name":"agreementSender","type":"address"},{"indexed":false,"internalType":"address","name":"agreementReceiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"agreementAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"agreementTransactionCreated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"agreementDeposit","type":"uint256"},{"indexed":false,"internalType":"string","name":"agreementStatus","type":"string"},{"indexed":false,"internalType":"uint256","name":"agreementStartDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"agreementTimePeriods","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"agreementPositionPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"agreementTimeDuration","type":"uint256"}],"name":"AgreementInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NotifyUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"Terminated","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"_receiver","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_everyTimeUnit","type":"uint256"},{"internalType":"uint256","name":"_howLong","type":"uint256"},{"internalType":"uint256","name":"_startOfTheAgreement","type":"uint256"}],"name":"createAgreement","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"exactAgreement","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"address payable","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"transactionCreated","type":"uint256"},{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"string","name":"status","type":"string"},{"internalType":"uint256","name":"agreementStartDate","type":"uint256"},{"internalType":"uint256","name":"everyTimeUnit","type":"uint256"},{"internalType":"uint256","name":"positionPeriod","type":"uint256"},{"internalType":"uint256","name":"howLong","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWithdrawalReceiver","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWithdrawalSender","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"myReceiverAgreements","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"mySenderAgreements","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"sendPayment","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalDepositSent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEtherCommited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"wasContractBreached","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAsTheReceiver","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdrawAsTheSender","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]

const contractLex = web3 => {
    return new web3.eth.Contract(abi_lex1, "0x66C099fC1075fE96EdBE1D89120A5e27D71A1DE4")
}

export default contractLex