
const createtLeads = async (req,res) =>{
    try{
        const res= await Lead.create(req.body);
        res.staus(201).json({
            message:"Lead created sucessfully";
            res
        })

    }
    catch(err){
        res.status(500).json({
            message:error.message
        })

    }

}