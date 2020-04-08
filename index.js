function createBuff() {
    const data = {};
    return {
        get: function(key) {
            return data[key];
        }
    };
}
