var address = 'http://localhost:8000/'; //address(地址)
// management(管理)
var management = {
    //method(方法)
    methodIn: address + 'admin/login', // 登录
    methodInfo: address + 'admin/getuser', //改变图片
    methodOut: address + 'admin/logout', // 用户退出

    //------------------------------------------------------------
    show: address + 'admin/category_search', //文章类别搜索
    del: address + 'admin/category_delete', //删除文章类别
    add: address + 'admin/category_add', //新增文章类别
    edit: address + 'admin/category_edit', //编辑文章类别

    //------------------------------------------------------------
    article_show: address + 'admin/search', //文章搜索
    article_del: address + 'admin/article_delete', //删除文章
    article_add: address + 'admin/article_publish', //发布文章
    article_edit: address + 'admin/article_edit', //文章编辑
    article_month_count: address + 'admin/month_article_count' // 获取月新增文章数量

    //-------------------------------------------------------------



}