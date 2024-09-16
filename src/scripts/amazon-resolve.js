const ProductAdvertisingAPIv1 = require('paapi5-nodejs-sdk')
const defaultClient = ProductAdvertisingAPIv1.ApiClient.instance
const api = new ProductAdvertisingAPIv1.DefaultApi()
const getItemsRequest = new ProductAdvertisingAPIv1.GetItemsRequest()

defaultClient.accessKey = 'AKIAITFKYN6NSK4WBZ2A'
defaultClient.secretKey = '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'
defaultClient.host = 'webservices.amazon.co.jp'
defaultClient.region = 'us-west-2'
getItemsRequest['PartnerTag'] = 'ctc-22'
getItemsRequest['PartnerType'] = 'Associates'

// 取得したい商品のASINを指定。配列によって、複数の指定が可能に。
const ASIN = ['B000AQSCGS']

// 取得したい製品情報の一例。
// その他は以下のリファレンスを参照
// https://webservices.amazon.com/paapi5/documentation/get-items.html
getItemsRequest['Resources'] = [
  'ItemInfo.Title',
  'Images.Primary.Large',
  'ItemInfo.Features',
]

getItemsRequest['ItemIds'] = ASIN

api.getItems(getItemsRequest, (error, data, response) => {
  if (error) {
    // エラー時の処理
    console.log('PA-API 5の呼び出しエラー')
    console.log(
      'Printing Full Error Object:\n' + JSON.stringify(error, null, 1),
    )
    console.log('Status Code: ' + error['status'])
    if (
      error['response'] !== undefined &&
      error['response']['text'] !== undefined
    ) {
      console.log(
        'Error Object: ' + JSON.stringify(error['response']['text'], null, 1),
      )
    }
  } else {
    // 取得成功時の処理
    let res = ProductAdvertisingAPIv1.GetItemsResponse.constructFromObject(data)
    console.log('Complete Response: \n' + JSON.stringify(res, null, 1))
    // 取得後の処理例は後述
  }
})
