class Department{
    constructor(deptID,deptName){
        this.deptId = deptID;
        this.deptName = deptName
    }
    getDepartment(){
        return 'department No :' + this.deptId + ' => '  + this.deptName
    }
}
export {Department};