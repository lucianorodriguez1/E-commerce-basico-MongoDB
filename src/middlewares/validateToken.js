export function authRequired(req,res,next){
    console.log("Validate Token")
    next();
}