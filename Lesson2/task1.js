const staff = {
    name: 'Alex',
    age: 20,
    skills: [
        {
            id: 1,
            value: 'html',
        },
        {
            id: 2,
            value: 'js',
        },
        {
            id: 3,
            value: 'css',
        },
    ],
    cost: undefined,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
    knowledge: [
        {
            label: 'React JS',
            score: 7,
        },
        {
            label: 'JS',
            score: 7,
        },
        {
            label: 'CSS',
            score: 9,
        },
        {
            label: 'HTML',
            score: 10,
        },
    ],
    avatar: null,
};

function deepCopyObject(staff) {
    let newStaff = {};

    for (let key in staff) {
        if (staff[key] != "object")
            newStaff[key] = staff[key];
        else {
            newStaff[key] = {};
            for (let key1 in staff) {
                newStaff[key][key1] = staff[key][key1]
            }
        }
    }
    return newStaff;
}





