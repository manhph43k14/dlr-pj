var initialState =[
    {
        id : 1,
        slug :'nhamct',
        name : "Cao Thi Nham",
        mail : "nhamct@gmail.com",
        status: true,
    },
    {
        id : 2,
        slug :'thuynt',
        name : "Nguyen Thanh Thuy",
        mail : "thuynt@gmail.com",
        status: true,
    },
    {
        id : 3,
        slug :'gioilt',
        name : "Le The Gioi",
        mail : "gioilt@gmail.com",
        status: true,
    }
];

const lecturers = ( state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}

export default lecturers;