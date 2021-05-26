const initial = {
    additional :[
        {
            time:'20 mins',
            Nutrition :'222 calories 6.2 g fat 7.2 g carbohydrates 28.6 g protein',
            tags:'Sweet, Lunch, Quick, Budget'
        }
    ]
}

const AddReducer = (state = initial ,action) => {
    switch (action.type) {
        case 'ADDITIONAL': {
            state.additional = [...state.additional,action.addtitle]
            return {...state}
        }   
    }
    return {...state}
}

export default AddReducer;