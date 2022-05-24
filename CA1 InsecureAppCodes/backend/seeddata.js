const express = require("express");
const config = require('./src/config/config');




//Reference: https://cloudinary.com/documentation/node_integration
const cloudinary = require('cloudinary').v2;
const pool = require('./src/config/database')


cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
    upload_preset: 'upload_to_design'
});


async function preparemaryDataAndFiles() {
    try {
        let createUserResult = await createUser('mary', 'mary@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        console.log('Inspecting createUserResult variable\n', createUserResult)
        let index = 1;
        // 9 design data files have been prepared for the user mary
        // The code here need to create 1 user record, 9 images in cloudinary and 9 records in the file table
        for (index = 1; index <= 9; index++) {
            let designTitle = `mary design ${index}`;
            let designDescription = `mary design ${index} description text 1 text 2 text 3 text 4 ....`;
            try {
                let uploadResult = await uploadFileToCloudinary(`./mary_design_files/mary_${index}.png`);
                let imageURL = uploadResult.imageURL;
                let publicId = uploadResult.publicId;
                console.log('Checking uploadResult before calling createFileData in try block\n', uploadResult);
                try {
                    let createFileDataResult = await createFileData(imageURL, publicId, createUserResult.insertId, designTitle, designDescription);
                    if (createFileDataResult) {
                        console.log(`mary_design${index}.png is uploaded. 1 record created in file table.`)
                    }
                } catch (error) {
                    console.log(`mary_design${index}.png is not uploaded. Did not create 1 record in file table.`)
                    console.log(error);
                }
            } catch (error) {
                console.log('uploadFileToCloudinary has error\n', error);

            } //End of try .. catch for calling uploadFileToCloudinary
        } //End of for loop block

    } catch (error) {
        console.log('Create mary user record has error\n', error);
        return;
    } finally {
        console.log('Data seeding of mary record in user table, mary file record in file table and image files in cloud has completed.');
        return;
    }
} //End of function preparemaryDataAndFiles

async function prepareglenDataAndFiles() {
    try {
        let createUserResult = await createUser('glen', 'glen@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        console.log('Inspecting createUserResult variable\n', createUserResult)
        let index = 1;
        // 9 design data files have been prepared for the user glen.
        // The code here need to create 1 user record, 9 images in cloudinary and 9 records in the file table
        for (index = 1; index <= 9; index++) {
            let designTitle = `glen design ${index}`;
            let designDescription = `glen design ${index} description text 1 text 2 text 3 text 4 ....`;
            try {
                let uploadResult = await uploadFileToCloudinary(`./glen_design_files/glen_${index}.png`);
                let imageURL = uploadResult.imageURL;
                let publicId = uploadResult.publicId;
                console.log('Checking uploadResult before calling createFileData in try block\n', uploadResult);
                try {
                    let createFileDataResult = await createFileData(imageURL, publicId, createUserResult.insertId, designTitle, designDescription);
                    if (createFileDataResult) {
                        console.log(`glen_design${index}.png is uploaded. 1 record created in file table.`)
                    }
                } catch (error) {
                    console.log(`glen_design${index}.png is not uploaded. Did not create 1 record in file table.`)
                    console.log(error);
                }
            } catch (error) {
                console.log('uploadFileToCloudinary has error\n', error);

            } //End of try .. catch for calling uploadFileToCloudinary
        } //End of for loop block

    } catch (error) {
        console.log('Create glen user record has error\n', error);
        return;
    } finally {
        console.log('Data seeding of glen record in user table, glen file record in file table and image files in cloud has completed.');
        return;
    }
} //End of function prepareglenDataAndFiles

async function prepareboonyuenDataAndFiles() {
    try {
        let createUserResult = await createUser('boonyuen', 'boonyuen@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        console.log('Inspecting createUserResult variable\n', createUserResult)
        let index = 1;
        // 9 design data files have been prepared for the user boonyuen.
        // The code here need to create 1 user record, 9 images in cloudinary and 9 records in the file table
        for (index = 1; index <= 9; index++) {
            let designTitle = `Boon Yuen design ${index}`;
            let designDescription = `Boon Yuen design ${index} description text 1 text 2 text 3 text 4 ....`;
            try {
                let uploadResult = await uploadFileToCloudinary(`./boonyuen_design_files/boonyuen_${index}.png`);
                let imageURL = uploadResult.imageURL;
                let publicId = uploadResult.publicId;
                console.log('Checking uploadResult before calling createFileData in try block\n', uploadResult);
                try {
                    let createFileDataResult = await createFileData(imageURL, publicId, createUserResult.insertId, designTitle, designDescription);
                    if (createFileDataResult) {
                        console.log(`boonyuen_design${index}.png is uploaded. 1 record created in file table.`)
                    }
                } catch (error) {
                    console.log(`boonyuen_design${index}.png is not uploaded. Did not create 1 record in file table.`)
                    console.log(error);
                }
            } catch (error) {
                console.log('uploadFileToCloudinary has error\n', error);

            } //End of try .. catch for calling uploadFileToCloudinary
        } //End of for loop block

    } catch (error) {
        console.log('Create boonyuen user record has error\n', error);
        return;
    } finally {
        console.log('Data seeding of boonyuen record in user table, boonyuen file record in file table and image files in cloud has completed.');
        return;
    }
} //End of function prepareboonyuenDataAndFiles


async function preparedoraDataAndFiles() {
    try {
        let createUserResult = await createUser('dora', 'dora@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        console.log('Inspecting createUserResult variable\n', createUserResult)
        let index = 1;
        // 9 design data files have been prepared for the user dora.
        // The code here need to create 1 user record, 9 images in cloudinary and 9 records in the file table
        for (index = 1; index <= 9; index++) {
            let designTitle = `Dora design ${index}`;
            let designDescription = `Dora design ${index} description text 1 text 2 text 3 text 4 ....`;
            try {
                let uploadResult = await uploadFileToCloudinary(`./dora_design_files/dora_${index}.png`);
                let imageURL = uploadResult.imageURL;
                let publicId = uploadResult.publicId;
                console.log('Checking uploadResult before calling createFileData in try block\n', uploadResult);
                try {
                    let createFileDataResult = await createFileData(imageURL, publicId, createUserResult.insertId, designTitle, designDescription);
                    if (createFileDataResult) {
                        console.log(`dora_design${index}.png is uploaded. 1 record created in file table.`)
                    }
                } catch (error) {
                    console.log(`dora_design${index}.png is not uploaded. Did not create 1 record in file table.`)
                    console.log(error);
                }
            } catch (error) {
                console.log('uploadFileToCloudinary has error\n', error);

            } //End of try .. catch for calling uploadFileToCloudinary
        } //End of for loop block

    } catch (error) {
        console.log('Create dora user record has error\n', error);
        return;
    } finally {
        console.log('Data seeding of dora record in user table, dora file record in file table and image files in cloud has completed.');
        return;
    }
} //End of function preparedora22s1DataAndFiles

function createFileData(imageURL, publicId, userId, designTitle, designDescription) {
    return new Promise((resolve, reject) => {
        //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
        //to prepare the following code pattern which does not use callback technique (uses Promise technique)
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('Database connection error ', err);
                resolve(err);
            } else {
                let query = `INSERT INTO file ( cloudinary_file_id, cloudinary_url , 
                 design_title, design_description,created_by_id ) 
                 VALUES ('${publicId}','${imageURL}','${designTitle}','${designDescription}','${userId}') `;

                connection.query(query, [], (err, rows) => {
                    if (err) {
                        console.log('Error on query on creating record inside file table', err);
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    }); //End of new Promise object creation

} //End of createFileData

//roleId=1 for admin roleId=2 for user
function createUser(fullname, email, password, roleId) {

    return new Promise((resolve, reject) => {
        //I referred to https://www.codota.com/code/javascript/functions/mysql/Pool/getConnection
        //to prepare the following code pattern which does not use callback technique (uses Promise technique)
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('Database connection error ', err);
                resolve(err);
            } else {
                connection.query('INSERT INTO user ( fullname, email, user_password, role_id) VALUES (?,?,?,?) ', [fullname, email, password, roleId], (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    }); //End of new Promise object creation
} //End of createUser
function uploadFileToCloudinary(filePath) {
    return new Promise((resolve, reject) => {
        //The following code will upload image to cloudinary
        cloudinary.uploader.upload(filePath, { upload_preset: 'upload_to_design' })
            .then((result) => {
                //Inspect whether I can obtain the file storage id and the url from cloudinary
                //after a successful upload.
                //console.log({imageURL: result.url, publicId: result.public_id});
                let data = { imageURL: result.url, publicId: result.public_id, status: 'success' };
                resolve(data);

            }).catch((error) => {

                let message = 'fail';
                reject(error);

            }); //End of try..catch
    }); //End of Promise
} //End of uploadFileToCloudinary



async function prepareAdminLawrenceData() {
    try {
        let createUserResult = await createUser('Lawrence', 'Lawrence@admin.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 1);
        console.log('Inspecting createUserResult variable\n', createUserResult)
    } catch (error) {
        console.log('Create Lawrence user record has error\n', error);
        return;
    } finally {
        console.log('Data seeding of Lawrence record in user table has completed.');
        return;
    }
} //End of function prepareAdminLawrenceData 

async function prepareDesignerUserData() {
    try {
        let createUserResult = await createUser('alan', 'alan@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('christine', 'christine@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('janny', 'janny@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('jacob', 'jacob@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('eileen', 'eileen@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('becky', 'becky@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('dylan', 'dylan@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('helen', 'helen@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('elsie', 'elsie@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('manfred', 'manfred@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
        createUserResult = await createUser('hushien', 'hushien@designer.com', '$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6', 2);
       
        console.log('Data seeding of user records in user table has completed.');
    } catch (error) {
        console.log(error);
        return;
    } finally {
        return;
    }
} //End of function prepareDesignerUserData

//startSeedingData is the root function method which is called 
//to execute three other functions

async function startSeedingData(){
try{

await preparemaryDataAndFiles(); //Create records in user and file table to describe mary who has 9 file submissions.

await prepareglenDataAndFiles(); //Create records in user and file table to describe glen who has 9 file submissions.
await prepareboonyuenDataAndFiles(); //Create records in user and file table to describe boonyuen who has 9 file submissions.
await preparedoraDataAndFiles(); //Create records in user and file table to describe dora who has 9 file submissions.

await prepareAdminLawrenceData(); //Create admin role user.
await prepareDesignerUserData(); //Create additional user records.
}catch(error){

}finally{
    console.log('Data seeding operations has completed');
    process.exit();
}
};

startSeedingData();