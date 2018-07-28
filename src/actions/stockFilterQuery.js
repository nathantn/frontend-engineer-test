export const UPDATE_FILTER_QUERY = '@stockFilterQuery/updateStockFilterQuery'

export const updateStockFilterQuery = (query = null) => ({
  type: UPDATE_FILTER_QUERY,
  payload: query,
});
