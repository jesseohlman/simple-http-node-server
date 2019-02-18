const fs = require('file-system');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) =>{
            return `${acc} ${file}`;
        }, '');
      console.log(filesToString);  
    });
};

module.exports.touch = (name) => {
    if(typeof name == 'string'){
        fs.writeFile(name, 'stuff', (err) => {
            if(err) throw err;

            console.log('a new file has been created.');
    });
} else {console.log('the file name must be a string')};
};


module.exports.mkdir = (name) => {
    if(typeof name == 'string'){
        fs.mkdir(name, {recursive: true}, (err) => {
            if(err) throw err;

            console.log('A new directory has been created.');
        });

} else {console.log('the file name must be a string')};

};