module.exports = {
    validateLocationReq: (req, res) => {
        const regex = /\w[\w\-]*/;
        if (
            !req.params.hasOwnProperty('name') ||
            typeof req.params.name !== 'string' ||
            req.params.name.match(regex) === null
        ) {
            return false;
        }

        for (let coord of ['x', 'y', 'z']) {
            if (!req.body.hasOwnProperty(coord) || isNaN(parseFloat(req.body[coord]))) {
                return false;
            }
        }

        return true;
    },
};
