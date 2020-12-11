export async function deleteProduct(id){
  try{
    let response = await fetch(`http://localhost:3001/products/${id}`,
    {
      method: "DELETE"
    })
    if(response.ok){
      alert("post successfully deleted");
    }else{
      alert("an error accurred")
    }
  }catch(err){
    console.log(err);
  }
}


export async function deleteReview(id){
  try{
    let response = await fetch(`http://localhost:3001/reviews/${id}`,
    {
      method: "DELETE"
    })
    if(response.ok){
      alert("review successfully deleted");
    }else{
      alert("an error accurred")
    }
  }catch(err){
    console.log(err);
  }
}


export async function fetchProducts(){
  try{
    let response = await fetch(`http://localhost:3001/products/`)
    if(response.ok){
      let data= await response.json()
      return data
    }else{
      alert("an error accurred")
    }
  }catch(err){
    console.log(err);
  }
}

export async function getReviews(id){
  try{
    let response = await fetch(`http://localhost:3001/reviews/${id}`)
    if(response.ok){
      let data= await response.json()
      return data
    }else{
      alert("an error accurred")
    }
  }catch(err){
    console.log(err);
  }
}