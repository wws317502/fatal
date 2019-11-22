//Package(包装)
var Package = {
    //parameter(参数)
    // 登录
    In: function(myName, myPassword, View) {
        $.post(management.methodIn, {
            "user_name": myName,
            "password": myPassword
        }, function(res) {
            View(res) //View(查看)
        })
    },
    //改变图片
    Info: function(View) {
        $.get(management.methodInfo, {}, function(res) {
            View(res)
        })
    },
    // 退出
    Out: function(View) {
        $.post(management.methodOut, {}, function(res) {
            View(res)
        })
    },


    //文章类别搜索
    show: function(View) {
        $.get(management.show, {
            // 'id': id,
            // 'name': name,
            // "slug": slug
        }, function(res) {
            View(res)
        })
    },
    //删除文章类别
    del: function(id, View) {
        $.post(management.del, {
            'id': id,
            // 'name': name,
            // "slug": slug
        }, function(res) {
            View(res)
        })
    },
    //新增文章类别
    add: function(name, slug, View) {
        $.post(management.add, {
            // 'id': id,
            'name': name,
            "slug": slug
        }, function(res) {
            View(res)
        })
    },
    //编辑文章类别
    edit: function(id, name, slug, View) {
        $.post(management.edit, {
            'id': id,
            'name': name,
            "slug": slug
        }, function(res) {
            View(res)
        })
    }
}