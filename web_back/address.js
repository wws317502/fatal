var address = 'http://localhost:8000/'; //address(地址)
// management(管理)
var management = {
    //method(方法)
    methodIn: address + 'admin/login', // 登录
    methodInfo: address + 'admin/getuser', //改变图片
    methodOut: address + 'admin/logout', // 用户退出

    category_show: address + 'admin/category_search', //文章类别搜索
    category_del: address + 'admin/category_delete', //删除文章类别
    category_add: address + 'admin/category_add', //新增文章类别
    category_edit: address + 'admin/category_edit' //编辑文章类别



}