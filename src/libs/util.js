let util = {

};

util.title = function (title) {
    title = title || 'admin';
    window.document.title = title;
};

util.verifyAccess = function(access, name, router, next) {
    if (access.findIndex(item => { return item === name; }) > -1) {
        next();
    } else {
        router.replace({
            name: '404'
        });
    }
};

export default util;
