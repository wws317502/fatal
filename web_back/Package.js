var address = 'http://localhost:8000/'; //address(地址)
//Package(包装)
var Package = {
    //parameter(参数)
    parameter1: function(myName, myPassword, View) {
        $.post(address + 'admin/login', {
            "user_name": myName,
            "password": myPassword
        }, function(res) {
            View(res) //View(查看)
        })
    },
    parameter2: function(View) {
        $.get(address + 'admin/getuser', {}, function(res) {
            View(res)
        })
    },
    parameter3: function(View) {
        $.post(address + 'admin/logout', {}, function(res) {
            View(res)
        })
    }



}