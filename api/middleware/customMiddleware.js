module.exports = (req, res, next) => {
    let arr = req.body.name.split('');
    arr[0] = arr[0].toUpperCase();
    req.body.name = arr.join('');
    next();
}