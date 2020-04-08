function createBuff() {
    const data = {};
    return {
        get: function(key) {
            return data[key];
        },

        set: function (key, value) {
            data[key] = value;
        }
    };
}
