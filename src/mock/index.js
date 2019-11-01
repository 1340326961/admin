let Mock = require('mockjs');
Mock.mock('/login', function (data) {
  console.log(JSON.parse(data.body))
  return Mock.mock({
      success: true,
      msg: '登录成功',
      data: {
          "token":"123456"
      }
  })
});
Mock.mock('/getMenu', function () {
  return Mock.mock({
      success: true,
      msg: '请求成功',
      data: [{
        name:`demo`,
        path:`/demo`,
        children:[
          {
            name:`cache`,
            path:`/cache`,
            children:[]
          },{
            name:`wxdownload`,
            path:`/wxdownload`,
            children:[]
          }
        ]
      }]
  })
});