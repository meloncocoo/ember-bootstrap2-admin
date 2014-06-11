module.exports = function(server) {

    // Create an API namespace, so that the root does not
    // have to be repeated for each end point.
    server.namespace('/api', function() {

        // Return fixture data for '/api/posts/:id'
        server.get('/posts/:id', function(req, res) {
            var post = {
                "post": {
                    "id": 1,
                    "title": "Rails is omakase",
                    "comments": ["1", "2"],
                    "user" : "dhh"
                },

                "comments": [{
                    "id": "1",
                    "body": "Rails is unagi"
                }, {
                    "id": "2",
                    "body": "Omakase O_o"
                }]
            };

            res.send(post);
        });

        // Get Application Menus
        server.get('/menus', function(req, res) {
            var data = {
                'menus': [
                    { id: 1, title: "我的工作台", style: "fa-dashboard", level: 1, active: true },
                    { id: 2, title: "系统管理", style: "fa-cogs", level: 1, children: [21] },
                        { id: 21, title: "系统日志管理", style: "fa-cogs", level: 2 },
                    { id: 3, title: "员工档案管理", style: "fa-tasks", level: 1 },
                    { id: 4, title: "员工薪酬管理", style: "fa-th", level: 1 },
                    { id: 5, title: "员工岗位管理", style: "fa-fire", level: 1 },
                    { id: 6, title: "员工考评管理", style: "fa-trophy", level: 1 },
                    { id: 7, title: "外包集费用管理", style: "fa-map-marker", level: 1 },
                    { id: 8, title: "员工考勤管理", style: "fa-file-o", level: 1 },
                    { id: 9, title: "综合事务管理", style: "fa-glass", level: 1 },
                    { id: 10, title: "积分管理", style: "fa-user", level: 1 },
                    { id: 10, title: "信息发布", style: "fa-book", level: 1 }
                ]
            };
            res.send(data);
        });

        server.get('/users/:id', function(req, res) {
            var data = {
                'user': {
                    id: 1,
                    userName: 'user1',
                    password: 'password1'
                }
            };
            res.send(data);
        })

        server.get('/users', function(req, res) {
            var data = {
                'users': [
                    { id: 1, userName: 'user1', password: 'password1', errors: ["用户名不能为空", "用户名称重复"] },
                    { id: 2, userName: 'user1', password: 'password1', errors: ["用户名不能为空", "用户名称重复"] },
                    { id: 3, userName: 'user1', password: 'password1', errors: ["用户名不能为空", "用户名称重复"] },
                    { id: 4, userName: 'user1', password: 'password1', errors: ["用户名不能为空", "用户名称重复"] }
                ]
            };
            res.send(data);
        })

        server.get('/users/:id', function(req, res) {
            var data = {
                'user': { id: 1, userName: 'user1', password: 'password1' }
            };
            res.send(data);
        });
    });
};
