const fs = require('fs');

fs.readdir("./temp", {withFileTypes:true}, (err, files)=>{
    if(err){
        console.log(err);
    }
    else{
        //console.log(files);

        for(var i = 0; i<files.length; i++){
            console.log(files[i].name);
            console.log(files[i].isDirectory());
        }
    }

})