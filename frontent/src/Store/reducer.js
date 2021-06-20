const initialState = {
  efCategories: [],
  people: 1,
  electricity: 0,
  naturalGas: 0,
  lpg: 0,
  oil: 0,
  water: 0,
  waste: 0,
  comuteByCar: 0,
  comuteByBus: 0,
  redMeat: 0,
  whiteMeat: 0,
  dairy: 0,
  cereals: 0,
  vegetables: 0,
  fruits: 0,
  oils: 0,
  snacks: 0,
  drinks: 0,
  canSave: true
};

const fpStore = (state = initialState, action) => {
  switch (action.type) {
    case '@save': {
      const newState = {
        ...state,
        [action.payload.field]: action.payload.value
      };
      return newState;
    }
    default:
      return { ...state };
  }
};

export default fpStore;
