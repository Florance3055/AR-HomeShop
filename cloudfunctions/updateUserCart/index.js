// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: "ar-shop-2x8tv"
})

const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  //获取对应openid的用户所有的数据
  let cart_record = await db.collection('user_cart').where({
    _openid: wxContext.OPENID
  }).get()

  let lenth = cart_record.data.length;

  // for (let key in cart_record) {
  //   cart_record.data[key + 1].index = key;
  // }

  for (let i = 0; i < lenth - 1; i++) {
    cart_record.data[i].index = i;
  }

  return cart_record


}