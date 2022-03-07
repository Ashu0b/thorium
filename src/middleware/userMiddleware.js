const res = require("express/lib/response");

const checkheader=(req,res,next)=>{
    if(req.headers.isfreeappuser != undefined){
    next ();
}
else {
    res.send({
        'msg':'The request is missing a mandatory header'

    });
}
}
module.exports.checkheader=checkheader