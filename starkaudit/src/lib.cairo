use starknet::ContractAddress;


#[starknet::interface]
pub trait IStarkAudit<TContractState> {
    fn storeAuditContract(ref self: TContractState, contractResponse: felt252, contract: felt252, owner: ContractAddress);
    fn get_auditresponse(self: @TContractState, contractResponse: felt252) -> felt252;
    fn get_contract(self: @TContractState, contract: felt252) -> felt252;
    fn get_owner(self: @TContractState) -> ContractAddress;
    fn get_balance(self: @TContractState) -> felt252;
}

#[starknet::contract]
mod HelloStarknet {

    use starknet::ContractAddress;

    #[storage]
    struct Storage {
        contractResponse: felt252, 
        contract: felt252,
        owner: ContractAddress,
        balance: felt252
    }

    #[abi(embed_v0)]
    impl StarkAuditImpl of super::IStarkAudit<ContractState> {
        fn storeAuditContract(ref self: ContractState, contractResponse: felt252, contract: felt252, owner: ContractAddress) {
            self.contractResponse.write(contractResponse);
            self.contract.write(contract)
        } 

        fn get_auditresponse(self: @ContractState, contractResponse: felt252) -> felt252 {
                self.contractResponse.read()
        }

        fn get_contract(self: @ContractState, contract: felt252) -> felt252 {
            self.contract.read()
        }

        fn get_owner(self: @ContractState) -> ContractAddress {
            self.owner.read()
        }

        fn get_balance(self: @ContractState) -> felt252 {
            self.balance.read()
        }
    }
}
