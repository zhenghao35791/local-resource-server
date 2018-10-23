var hello = {
    name: 'org-name',
    getName(){
        return this.name;
    },
    setName(newName) {
        this.name = newName;
    }
}
module.exports = hello;