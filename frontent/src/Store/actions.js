export const save = (field, value) => ({
  type: '@save',
  payload: {
    field,
    value
  }
});
