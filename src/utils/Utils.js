// formate date to be like "Dec 31,2024"
//input: date string ie "yyyy/mm/dd" = "2021/02/31" or "mm/dd/yyyy" = "02/12/2023"
export const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

// filter array input data by id 

export function filterById(data, id) {
    return data.filter(function (el) {
        return el.id == id;
    });
}

// pass the value of id

export const handleSetMail = (id) => {
    return id;
}
