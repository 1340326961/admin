let Mock = require('mockjs');
Mock.mock('/login', function (data) {
  console.log(JSON.parse(data.body))
  return Mock.mock({
    success: true,
    msg: '登录成功',
    data: {
      "token": "123456"
    }
  })
});
Mock.mock('/getMenu', function () {
  return Mock.mock({
    success: true,
    msg: '请求成功',
    data: [{
      name: `demo`,
      path: `/demo`,
      children: [
        {
          name: `pageBox`,
          path: `/pageBox`,
          children: [
            {
              name: `page1`,
              path: `/page1`,
              children:[]
            }
          ]
        }, {
          name: `page2`,
          path: `/page2`,
          children: []
        }
      ]
    }]
  })
});