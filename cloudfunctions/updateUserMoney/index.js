// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: "ar-shop-2x8tv"
})

const db = cloud.database()

exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()

  //获取对应openid的用户所有的数据
  let money_record = await db.collection('user_money').where({
    _openid: wxContext.OPENID
  }).get()

  let length = money_record.data.length;

  let all_money = 0;

  if (money_record.data == '') {
    return 0
  } else {
    if (length >= 2) {
      for (let key in money_record.data) {
        if (money_record.data[key].money) {
          all_money += parseInt(money_record.data[key].money);
        }
      }
      return all_money
    } else {
      return money_record.data[length - 1].money
    }
  }




}