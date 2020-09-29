
const getDate = () => {
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    }
    return today.toLocaleDateString('en-us', options);
};

const getDay = () => {
    const today = new Date();
    const options = {
        weekday: 'long',
    }
    return today.toLocaleDateString('en-us', options);
};

exports.getDay = getDay;
exports.getDate = getDate;