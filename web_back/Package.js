//Package(包装)
var Package = {
    //parameter(参数)
    // 登录
    parameterIn: function(myName, myPassword, View) {
        $.post(management.methodIn, {
            "user_name": myName,
            "password": myPassword
        }, function(res) {
            View(res) //View(查看)
        })
    },
    //改变图片
    parameterInfo: function(View) {
        $.get(management.methodInfo, {}, function(res) {
            View(res)
        })
    },
    // 退出
    parameterOut: function(View) {
        $.post(management.methodOut, {}, function(res) {
            View(res)
        })
    },


    //文章类别搜索
    category_show: function(View) {
        $.get(category_show, {
            // 'id': id,
            // 'name': name,
            // "slug": slug
        }, function(res) {
            View(res)
        })
    },
    //删除文章类别
    category_del: function(id, View) {
        $.post(category_del, {
            'id': id,
            // 'name': name,
            // "slug": slug
        }, function(res) {
            View(res)
        })
    },
    //新增文章类别
    category_add: function(name, slug, View) {
        $.post(category_add, {
            // 'id': id,
            'name': name,
            "slug": slug
        }, function(res) {
            View(res)
        })
    },
    //编辑文章类别
    category_edit: function(id, name, slug, View) {
        $.post(category_edit, {
            'id': id,
            'name': name,
            "slug": slug
        }, function(res) {
            View(res)
        })
    }
}