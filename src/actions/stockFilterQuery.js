export const UPDATE_FILTER_QUERY = '@stockFilterQuery/updateFilterQuery'

export const updateFilterQuery = (query = null) => ({
  type: UPDATE_FILTER_QUERY,
  payload: query,
});
