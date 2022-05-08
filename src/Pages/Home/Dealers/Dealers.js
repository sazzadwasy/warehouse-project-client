import React from 'react';
import member1 from '../../../images/member1.jpg'
import member2 from '../../../images/member2.jpg'
import member3 from '../../../images/member3.jpg'
const Dealers = () => {
    return (
        <div className='container mt-4 mb-4'>
            <h1 className='text-center mb-4'>Our Honorable Dealership members</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={member1} class="w-75 mx-auto card-img-top rounded-circle" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Mr Nahin</h4>
                            <p class="card-text">I'm Nahin I have taken the suzuki dealership three years ago.First year of my startup I had no idea how to run this business.First two year i obeserved the customers potential.Now i'm running my business with a well growth.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={member2} class="w-75 mx-auto card-img-top rounded-circle" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">MH Sunny</h4>
                            <p class="card-text">I'm Sunny I have taken the suzuki dealership three years ago.First year of my startup I had no idea how to run this business.First two year i obeserved the customers potential.Now i'm running my business with a well growth.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={member3} class="w-75 mx-auto card-img-top rounded-circle" alt="..." />
                        <div class="card-body">
                            <h4 class="card-title">Rony</h4>
                            <p class="card-text">I'm Rony I have taken the suzuki dealership three years ago.First year of my startup I had no idea how to run this business.First two year i obeserved the customers potential.Now i'm running my business with a well growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dealers;