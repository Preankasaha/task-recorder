export const taskfunc = async (data) => {
  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
  const res = await fetch(url, {
    method: "POST",
    body: data
  })
  const imgData = await res.json()
  return imgData
}