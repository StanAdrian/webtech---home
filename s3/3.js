
String.prototype.format = function (format) {
    let modified = this;
    for(let prop in format){
        if(modified.indexOf('{' + prop + '}') !== -1) {
            modified = modified.replace('{' + prop + '}', format[prop])
        }
    }
    return modified;
}


console.log('{name} is a {job}'.format( {name: 'andrei', job: 'teacher' } ))
