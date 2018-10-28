/*
利用promise对象执行异步任务，发送ajax 请求
 */

function sendXml(url){
	let promise = new Promise((resolve, reject) => {
		//初始化状态pending
		//执行异步任务
		let xmlHttp = new XMLttpRequest();
		xmlHttp.open('GET', url);
		xmlHttp.send();
		xmlHttp.onReadyStatechange = function(){
			if(xmlHttp.readyState === 4){
				if(xmlHttp.status === 200){
					//异步执行成功，修改promise对象的状态为成功状态
					resolve(xmlHttp.responseText);
				}else{
					//执行异步任务失败
					reject('暂时没有新闻推送')
				}
			}
		}
		return promise;
		
	})
}	


sendXml('http://localhost:3000/news?id=2')
	.then((value) =>{
		console.log(value)
		let url = `http://localhost:3000${JSON.parse(value).commentsUrl}`;
		//再次发送请求
		return sendXml(url)
	},(error) => {console.log(error)})
	.then((value) => {
		console.log(value)
	}, (error) => {console.log(error)
	})
	
 
 
 
 
 
export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}

