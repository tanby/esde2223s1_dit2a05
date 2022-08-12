const fs = require('fs');

// read the content of "temp" directory
fs.readdir("./temp", 
    {withFileTypes:true}, //-- return file types in result
    (err, files)=>{
        if(err){
            console.log(err);
        }
        else{
            //console.log(files);
            
            for(var i = 0; i<files.length; i++){
                // print file or folder name
                console.log(files[i].name);
                // check if file or folder
                console.log(files[i].isDirectory());
            }
        }
    }
)