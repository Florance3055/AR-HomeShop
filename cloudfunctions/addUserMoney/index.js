// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: "ar-shop-2x8tv"
})

const DB = cloud.database().collection('user_money');

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return await DB.add({
    data: {
      _openid: wxContext.OPENID,
      money: event.newprice
    },
    success(res) {
      console.log("添加成功", res)

    },
    fail(res) {
      console("添加失败", res)
    }
  })
}