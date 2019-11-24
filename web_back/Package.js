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

    //————————————————————————————————————————————————————————————————————————————
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
    },

    //——————————————————————————————————————————————————————————————————————————————
    // 作用：获取第curPage页，类型是tpype,状态是state 的数据 
    articleShow: function(curPage, type, state, callback) {
        // 根据接口的定义，要请哪一页的数据，就传对应的值给page
        $.get(APIURLS.article_show, {
                page: curPage,
                type: type,
                state: state
            },
            function(res) {
                callback(res)
            })
    },
    // 删除文章
    articleDel: function(id, callback) {
        $.get(APIURLS.article_del, { 'id': id }, function(res) {
            callback(res)
        })
    },
    // 添加文章
    // 参数是formData对象
    articleAdd: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_add,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: function(res) {
                callback(res)
            }
        })
    },
    // 编辑文章
    articleEdit: function(fd, callback) {
        $.ajax({
            url: APIURLS.article_edit,
            type: 'post',
            data: fd,
            processData: false, // 不要让jquery去处理formdata数据
            contentType: false, // 不要使用默认的请求头
            success: function(res) {
                callback(res)
            }
        })
    },
    // 获取文章的详情
    getDetail: function(id, callback) {
        $.get(APIURLS.article_show, {
                "id": id
            },
            function(res) {
                callback(res)
            }
        )
    },
    getMonthCount: function(callback) {
        $.get(APIURLS.article_month_count, function(res) {
            callback(res)
        })
    }


}