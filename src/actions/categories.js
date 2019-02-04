export const ADD_CATEGORIE = 'ADD_CATEGORIE'
export const DELETE_CATEGORIE = 'DELETE_CATEGORIE'

export const addCategorie = item => ({
  type: ADD_CATEGORIE,
  categorie: item
})

export const deleteCategorie = id => ({
  type: DELETE_CATEGORIE,
  categorieId: id
})
