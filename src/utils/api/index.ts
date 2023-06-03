import axios from 'axios'

const baseURL: string = 'http://127.0.0.1:8000'
// const baseURL: string = 'http://124.222.162.185'
const timeout: number = 1000
const Instance = axios.create({
  baseURL,
  timeout
})

type queryParams = {
  pageSize: number
  pageCount: number
}

//文章查询接口（全量）
const GetAllArticles = async (params: queryParams) => {
  let result = await Instance.get('/article/list', { params })
  return result
}

const GetArticle = async (id: number) => {
  let result = await Instance.post('/article/details', { id })
  return result
}

export { GetAllArticles, GetArticle }
