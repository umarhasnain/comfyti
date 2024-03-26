import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    height: '260px',
    width: '800px',
    marginLeft: '100px',
    marginTop: '50px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const App = () => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle}>
                <img
                    alt="ecommerce"
                    className="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
                    src={products.imageUrl}
                />

            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);
export default App;