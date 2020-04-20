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
  let info_record = await db.collection('user_basic_info').where({
    _openid: wxContext.OPENID
  }).get()

  return info_record.data[info_record.data.length-1]

}