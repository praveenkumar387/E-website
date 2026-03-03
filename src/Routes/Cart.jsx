import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromCart } from '../redux/slice'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const items = useSelector((state) => state.search.items)

  return (
    <div className="min-h-screen bg-gray-50">
      <button onClick={() => navigate("/home")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">back</button>
      <h1 className='text-4xl bg-red-500 font-bold text-center mt-10 py-6 text-white shadow-lg'>
        Your Cart
      </h1>

      <div className="max-w-6xl mx-auto p-8">
        {
          items.length === 0 ? (
            <p className="text-center text-xl text-gray-500 mt-20">Cart is Empty</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="overflow-hidden h-64 bg-gray-200">
                    <img className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' src={item.image} alt={item.name} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                    <button onClick={()=>dispatch(removeFromCart(item.id))} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">remove</button>
                    <p className="text-sm text-gray-600 mb-3">Cuisine: <span className="font-medium">{item.cuisine}</span></p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Quantity</p>
                        <p className="text-xl font-bold text-red-500">{item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-2xl font-bold text-red-600">${item.price}</p>
                        
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">RATING</p>
                        <p className="text-2xl font-bold text-red-600">{item.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart