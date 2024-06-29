export const baseURL = "http://localhost:4000"

export const sleep = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(true)
      }, 2000)
   })
}
