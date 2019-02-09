export const EDIT = 'EDIT'

export const edit = (item) => dispatch => {
  console.log(item)
  dispatch({
    type: EDIT,
    item: item
  })
}
