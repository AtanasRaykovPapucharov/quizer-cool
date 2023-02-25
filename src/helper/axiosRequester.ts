import axios from 'axios'

axios.defaults.withCredentials = false

export const getData = async (url: string, headers?: {}): Promise<object> => {
  try {
    const resp = await axios.get(url, {...headers})
    return await resp.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err = axios.AxiosError.ERR_BAD_REQUEST
      console.log('unexpected error: ', err)
      throw new Error('Axios error')
    } else {
      console.log('unexpected error: ', error)
      throw new Error('Unexpected error')
    }
  }
}

export const postData = async (url: string, newPost: any, headers?: {}) => {
  try {
    return await axios.post(url, newPost, {...headers})
  } 
  catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message)
      return error.message
    } 
    else {
      console.log('unexpected error: ', error)
      return 'An unexpected error occurred'
    }
  }
}
