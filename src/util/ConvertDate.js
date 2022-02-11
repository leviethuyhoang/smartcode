import moment from "moment";

const ConvertDate = {
    getDateNomal : (dateUTC) => {
        if(dateUTC){
            const date = moment(dateUTC).subtract(7,'hours').toDate();

            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year} -  ${hours < 10 ? `0${hours}` : hours}h${minutes < 10 ? `0${minutes}` : minutes}`
        } else {
            return null;
        }
    },
    getDateTimeLocalInput : (dateUTC) => {
        const timeParse = moment(dateUTC).utc().add(0, 'hours').toISOString();
        const time = timeParse.split(':').slice(0,2).join(':');
        return time;
    }

}

export default ConvertDate;