import moment from 'moment';

export const convertTimestamp = timestamp => moment(timestamp).format("DD-MM-YYYY HH:mm:ss");