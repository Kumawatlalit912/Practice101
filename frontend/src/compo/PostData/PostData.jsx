import mongoose from "mongoose";
import { useState } from "react";
import './PostData.css'
const PostData = () => {
  const [formData, setFormData] = useState({
    _id: new mongoose.Types.ObjectId(),
    name: '',
    category: '',
    imageUrl: '',
    inStock: '',
    price: '',
    description: '',
    brand: '',
    colors: [],
    sizes: [],
    rating: ''
  });

  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  // const mongoConnectUri="mongodb://products:product123@cluster0.ywhm9fa.mongodb.net/newProducts"
  const handleSubmit = event => {
    event.preventDefault()
    fetch('/products', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="styleForm">
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Enter name of The product you want to upload" required/>
      </label>
      <label>
        Category:
        <input type="text" name="category" onChange={handleChange} value={formData.category} placeholder="Enter the Category(Male/Female)" required/>
      </label>
              
              <label>
          Image URL:
          <input type="text" name="imageUrl" onChange={handleChange} value={formData.imageUrl} placeholder="Enter the url of the product image" required/>
        </label>
        <label>
          In Stock:
          <input type="text" name="inStock" onChange={handleChange} value={formData.inStock} placeholder="write if its,in stock or out of stock" required/>
        </label>
        <label>
          Price:
          <input type="number" name="price" onChange={handleChange} value={formData.price} placeholder="Enter the Price" required/>
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={handleChange} value={formData.description} placeholder="write some description about the product"  required/>
        </label>
        <label>
          Brand:
          <input type="text" name="brand" onChange={handleChange} value={formData.brand} placeholder="Enter The Brand Name" required/>
        </label>
        <label>
          Colors:
          <input type="text" name="colors" onChange={handleChange} value={formData.colors} placeholder="Enter all the colors,(seperate by comma )" required/>
        </label>
        <label>
          Sizes:
          <input type="text" name="sizes" onChange={handleChange} value={formData.sizes} placeholder="Enter all the sizes ,seperate by comma" required/>
        </label>
        <label>
          Rating:
          <input type="number" name="rating" onChange={handleChange} value={formData.rating} placeholder="rate the product" required/>
        </label>

      <button type="submit">Save</button>
    </form>
    </div>
  )
}
export default PostData;
