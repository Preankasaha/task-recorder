// export const taskfunc = async (data) => {
//   const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
//   const res = await fetch(url, {
//     method: "POST",
//     body: data
//   })
//   const imgData = await res.json()
//   return imgData
// }


export const updateCompleteTask = async (id) => {
  const url = `http://localhost:5000/updatetask/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      status: "completed"
    })
  })
  const data = await res.json();
  return data;

}
export const updateInCompleteTask = async (id) => {
  const url = `http://localhost:5000/updatetask/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      status: "incomplete"
    })
  })
  const data = await res.json();
  return data;

}

