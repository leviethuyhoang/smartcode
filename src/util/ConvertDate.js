const ConvertDate = {
    getDateNomal : (dateUTC) => {
        const date = new Date(dateUTC.toString());

        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}   ${hours < 10 ? `0${hours}` : hours}h${minutes < 10 ? `0${minutes}` : minutes}`
    },
    getDateTimeLocalInput : (dateUTC) => {
        return dateUTC.split(':').slice(0,2).join(':');
    }

}

export default ConvertDate;