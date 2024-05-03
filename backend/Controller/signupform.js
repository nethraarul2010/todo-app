import connection from "../sequlize.js";

export const get= async (req,res)=>{

    try{
        await connection.authenticate;
        res.send(200);
    }
    catch(err){
        res.send(500);
    }
};