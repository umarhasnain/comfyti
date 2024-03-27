import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';
import RadioButtonExample from '../../components/carousel/carousel'
import { Carousel } from 'antd';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [selectedOption, setSelectedOption] = useState('');
    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])



    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])







    const contentStyle = {
        height: '460px',
        width: '400px',
        marginTop: '30px',
        color: '#fff',
        float: 'left',
        lineHeight: '260px',
        textAlign: 'center',
        background: '#364d79',

    };
    const App = () => (
        <Carousel autoplay className='flex-col w-96 '>

            <div >
                <h3 style={contentStyle}>
                    <img
                        alt="Comfyti"
                        className="lg:w-1/1 w-full lg:h-auto  object-cover object-center rounded"
                        src={products.imageUrl}
                    />

                </h3>
            </div>

            <div>
                <h3 style={contentStyle}>  <img
                    alt="Comfyti"
                    className="lg:w-1/1 w-full lg:h-auto  object-cover object-center rounded"
                    src={products.imageUrl_1}
                /></h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        alt="Comfyti"
                        className="lg:w-1/1 w-full lg:h-auto  object-cover object-center rounded"
                        src={products.imageUrl}
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        alt="Comfyti"
                        className="lg:w-1/1 w-full lg:h-auto  object-cover object-center rounded"
                        src={products.imageUrl}
                    />
                </h3>
            </div>

        </Carousel>
    );


    return (
        <Layout>

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-3 py-10 mx-auto">
                    {products &&
                        <div className="lg:w-4/5 mx-auto flex flex-wrap gap-10">


                            <div className="" >
                                <App />



                            </div>





                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    Comfyti
                                </h2>
                                <h1 className="flex gap-30 text-gray-900 text-3xl title-font font-medium mb-1">
                                    {products.title} <span className='pl-4'></span>
                                </h1>
                                <h2 className="title-font ml-0  text-orange-500 font-medium text-2xl text-gray-900">
                                    Rs: {products.price}.00 PKR
                                </h2> 
                                <div>
                                    <RadioButtonExample />

                                </div>

                                {/* <div className='flex gap-2 flex-wrap'>
                                    <div>
                                        <label class="group relative w-24 h-10 gap-2 mt-4 mb-4 flex items-center justify-center rounded-xl border py-1 px-1 text-lr bg-white-200 font-medium uppercase hover:bg-orange-400 focus:outline-none sm:flex-1 sm:py-5 cursor-pointer bg-orange text-orange-900 shadow-sm">
                                            <input type="radio" name="option" value="Option 1" />
                                            S / M
                                        </label>
                                    </div>

                                    <div>
                                        <label class="group relative w-24 h-10 gap-2 mt-4 mb-4 flex items-center justify-center rounded-xl border py-1 px-1 text-lr bg-white-200 font-medium uppercase hover:bg-orange-400 focus:outline-none sm:flex-1 sm:py-5 cursor-pointer bg-orange text-orange-900 shadow-sm">
                                            <input type="radio" name="option" value="Option 2" />
                                            L
                                        </label>
                                    </div>
                                    <div>
                                        <label class="group relative w-24 h-10 gap-2 mt-4 mb-4 flex items-center justify-center rounded-xl border py-1 px-1 text-lr bg-white-200 font-medium uppercase hover:bg-orange-400 focus:outline-none sm:flex-1 sm:py-5 cursor-pointer bg-orange text-orange-900 shadow-sm">
                                            <input type="radio" name="option" value="Option 3" />
                                            XL
                                        </label>
                                    </div>
                                </div> */}

                                <div>
                                    <label htmlFor="">
                                        <input class="group relative w-40 pl-2 h-10 gap-2 mt-4 mb-4 text-xl flex items-center justify-center rounded-xl border py-1 px-1 text-lr bg-white-200 font-medium uppercase hover:bg-white-400 focus:outline-none sm:flex-1 sm:py-5 cursor-pointer bg-white text-white-900 shadow-sm"
                                            type="number" name="option" placeholder='Quantity' />
                                    </label>

                                </div>

                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span className="text-gray-600 ml-3">3 Reviews</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a href='https://www.facebook.com/profile.php?id=61556285529446' className="text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </a>
                                        <a className="text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a href='https://www.instagram.com/shop.comfity/' className="text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </a>
                                    </span>
                                </div>

                                <div className=" flex justify-center">
                                    <button className="w-full  bg-orange-600 py-2 text-center rounded-lg text-white font-bold h-12 mb-4"
                                        onClick={() => addCart(products)}>
                                        Add To Cart
                                    </button>
                                </div>
                                <div className=" flex justify-center ">
                                    <button className="w-full  bg-orange-600 py-2 text-center rounded-lg text-white font-bold h-12 mb-8"
                                        onClick={() => addCart(products, window.location.href = `/Cart`)} >
                                        Buy Now
                                    </button>
                                </div>








                                <div className=''>
                                    <h3 className='text-2xl mb-2 font-bold'>Discription</h3>
                                    <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                        {products.description}
                                    </p></div>


                            </div>

                        </div>}
                </div>
            </section>







        </Layout >
    )

}

export default ProductInfo