export const selectTransactions = (state) => state.transactions.items;

export const selectIsLoading = (state) => state.transactions.loading;

export const selectError = (state) => state.transactions.error;
