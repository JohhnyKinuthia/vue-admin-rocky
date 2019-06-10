import axios from 'axios'

var data = { 'Surname': 'Isaac' }
function getData() {
  axios.get('http://localhost:9000/rider').then(response => { data = response.data }).catch(err => console.log(err))
}
console.log(data)
getData()
export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
