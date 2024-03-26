

import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'



const products = [
    { id: 1, name: 'Product 1', category: 'Women Clothes', price: 3000 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 1500 },
    { id: 3, name: 'Product 3', category: 'Slick', price: 2500 },
    { id: 4, name: 'Product 4', category: 'Books', price: 9000 },
    { id: 5, name: 'Product 5', category: 'Girl Top', price: 6000 },
    // Add more products as needed
];

function Filter() {
    const context = useContext(myContext)
    const { mode, searchkey, setSearchkey, filterType, setFilterType,
        filterPrice, setFilterPrice, product } = context

    return (
        <div>
            <div className=' container mx-auto px-4 mt-5 '>
                <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
                    style={{
                        backgroundColor: mode === 'dark' ? '#282c34' : '',
                        color: mode === 'dark' ? 'white' : '',
                    }}>
                    <div className="relative">
                        <div className="absolute flex items-center ml-2 h-full">
                            <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="searchkey"
                            value={searchkey}
                            onChange={(e) => setSearchkey(e.target.value)}
                            id="searchkey"
                            placeholder="Search here"
                            className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }} />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-medium">
                            Filters
                        </p>
                        <button className="px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" style={{ color: mode === 'dark' ? 'white' : '' }}>
                            Reset Filter
                        </button>
                    </div>
                    <div className='flex gap-60'>
                        <div>
                            <p className="font-medium">
                                Category
                            </p>
                        </div>
                        <div><p className="font-medium">
                            Price
                        </p></div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                            <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>

                                {products.map((products, index) => {
                                    return (
                                        <option value={products.category}>{products.category}</option>
                                    )
                                })}
                            </select>
                            <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                {product.map((products, index) => {
                                    return (
                                        <option value={products.price}>{products.price}</option>
                                    )
                                })}
                            </select>
                            <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                {product.map((product) => {
                                    return (
                                        <option value={product.shipping}>{product.shipping}</option>
                                    )
                                })}
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter

// import React, { useState } from 'react';

// const products = [
//   { id: 1, name: 'Product 1', category: 'Electronics', price: 3000 },
//   { id: 2, name: 'Product 2', category: 'Clothing', price: 1500 },
//   { id: 3, name: 'Product 3', category: 'Electronics', price: 2500 },
//   { id: 4, name: 'Product 4', category: 'Books', price: 9000 },
//   // Add more products as needed
// ];

// function Filter() {
//   const [categoryFilter, setCategoryFilter] = useState('');
//   const [priceFilter, setPriceFilter] = useState('');

//   const filteredProducts = products.filter((product) =>
//     product.category.toLowerCase().includes(categoryFilter.toLowerCase()) &&
//     (priceFilter === '' || product.price <= parseFloat(priceFilter))
//   );

//   return (
//     <div className="App">
//       <h1>Product List</h1>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Filter by category"
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Filter by max price"
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(e.target.value)}
//         />
//       </div>
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Filter;