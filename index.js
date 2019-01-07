case types.SEARCH_CATEGORY_ID:

      var mapping = _.find(state.searchCategoryID, (u)=>{
        return u == action.searchCategoryID 
      })

      var evens=[]
      if(mapping){
        evens = _.filter(state.searchCategoryID, (u)=>{
          return u != action.searchCategoryID 
        })
        return {
          ...state,
          type: types.SEARCH_CATEGORY_ID,
          searchCategoryID: evens,
          status: action.status
      }

      } else {
        state.searchCategoryID.push(action.searchCategoryID)
        evens = _.filter(state.searchCategoryID, (u)=>{
          return u != undefined
        })
        return {
          ...state,
          type: types.SEARCH_CATEGORY_ID,
          searchCategoryID: evens,
          status: action.status
      }}
