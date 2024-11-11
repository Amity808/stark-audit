use starknet::ContractAddress;


#[starknet::interface]
pub trait IStarkAudit<TContractState> {
    fn storeAuditContract(ref self: TContractState, contractResponse: felt252, contract: felt252, owner: ContractAddress);
    fn get_auditresponse(self: @TContractState, contractResponse: felt252) -> felt252;
    fn get_contract(self: @TContractState, contract: felt252) -> felt252;
    fn get_owner(self: @TContractState) -> ContractAddress;
}

#[starknet::contract]
mod HelloStarknet {

    use starknet::ContractAddress;

    #[storage]
    struct Storage {
        contractResponse: felt252, 
        contract: felt252,
        owner: ContractAddress
    }

    #[abi(embed_v0)]
    impl StarkAuditImpl of super::IStarkAudit<ContractState> {
        fn storeAuditContract(ref self: ContractState, contractResponse: felt252, contract: felt252, owner: ContractAddress) {
            self.contractResponse.write!(contractResponse);
            self.contract.write(contract)
        } 

        fn get_balance(self: @ContractState) -> felt252 {
            self.balance.read()
        }
    }
}
