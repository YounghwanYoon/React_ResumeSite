export function selectPage(elm){
    console.log("elm");
    console.log(selectedList);
};

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};