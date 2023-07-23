module.exports.userLogout = function(req, res){
    res.cookie('token','').json('ok')
}