import cloneDeep from 'lodash/cloneDeep';
import wesker from '../assets/images/Coaches/Wesker.png';
import hermanator from '../assets/images/Coaches/Hermanator.jpg';
import * as actionTypes from './actions.js';

const initialState = {
		packages: [			
		{ 	title: "Get to Rank 20",
			coach: "Albert Wesker",
			coachMugshot: wesker,
			price: 400,
			description: "Easily get to rank 20 with " +
			"championship techniques from Albert Wesker."
		},
		{ 	title: "Get to Rank 15",
			coach: "Albert Wesker",
			coachMugshot: wesker,
			price: 600,
			description: "Easily get to rank 15 with " +
			"championship techniques from Albert Wesker."
		},
		{ 	title: "Get to Rank 10",
			coach: "Albert Wesker",
			coachMugshot: wesker,
			price: 1000,
			description: "Easily get to rank 10 with " +
			"championship techniques from Albert Wesker."
		},
		{ 	title: "Get to Rank 5",
			coach: "Albert Wesker",
			coachMugshot: wesker,
			price: 1500,
			description: "Easily get to rank 5 with " +
			"championship techniques from Albert Wesker."
		},
		{ 	title: "Get to Legend",
			coach: "Albert Wesker",
			coachMugshot: wesker,
			price: 3000,
			description: "Easily get to Legend with " +
			"championship techniques from Albert Wesker."
		},
		{ 	title: "Get to Rank 25",
			coach: "Hermanator",
			coachMugshot: hermanator,
			price: 0,
			description: "Get coached by this bimbo named " +
			"the Hermanator as a proof that any ape can get " +
			"to rank 25 without anything between their ears."
		}
	],
	currentPackage: null
};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.GET_PACKAGE:
			const newArr = cloneDeep(state.packages);
			const foundIndex = newArr.findIndex((el) => el.title === action.title);		
			return {
				...state,
				currentPackage: newArr[foundIndex]
			}
		default: 
			return state;
	}
};

export default reducer;