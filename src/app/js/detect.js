export const detectBrowser = () => {
    let result = 'Other';
    if (navigator.userAgent.indexOf('YaBrowser') !== -1) {
        result = 'Yandex Browser';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
        result = 'Mozilla Firefox';
    } else if (navigator.userAgent.indexOf('MSIE') !== -1) {
        result = 'Internet Exploder';
    } else if (navigator.userAgent.indexOf('Edge') !== -1) {
        result = 'Microsoft Edge';
    } else if (navigator.userAgent.indexOf('Safari') !== -1) {
        result = 'Safari';
    } else if (navigator.userAgent.indexOf('Opera') !== -1) {
        result = 'Opera';
    } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
        result = 'Google Chrome';
    }
    return result;
};
