import axios from 'axios'
export default function (url, data={}, method='GET') {
  return new Promise((resolve,reject)=>{
    let result = null;
    if (method === 'GET'){
      let params = '';
      for (let key in data) {
        params += `${key}=${data[key]}&`;
      }
      if (params){
        params = '?' + params;
      }
      url = url + params;
      result = axios.get(url)
    }else{
      result = axios.post(url, data)
    }
    result
      .then( res => {
        resolve(res.data)
      })
      .catch( err => {
        reject(err)
      })
  })

}
