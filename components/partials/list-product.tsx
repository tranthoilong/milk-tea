import React from 'react';
import Image from "next/image";
import {cn} from "@/lib/utils";
import ProductItem from "@/components/product/product-item";


const ListProduct = () => {

    const products = {
        "products": [
            {
                "id":1,
                "name": "Trà Phúc Long Kem Silky (M)",
                "price": 45000,
                "size": "M",
                "image": "https://hcm.fstorage.vn/images/2024/01/silky-1--20240104031840.png",
                "description": ""
            },
            {
                "id":2,

                "name": "Sữa Chua Phúc Bồn Tử Đác Cam",
                "price": 70000,
                "size": "L",
                "image": "https://hcm.fstorage.vn/images/2022/65000072-sua-chua-phuc-bon-tu-dac-cam-phuc-long_23955f73-a6c0-4cca-b79c-b6342df26caf-og.png",
                "description": ""
            },
            {
                "id":3,

                "name": "Sữa Chua Xoài Đác Thơm",
                "price": 70000,
                "size": "L",
                "image": "https://hcm.fstorage.vn/images/2022/65000073-sua-chua-xoai-dac-thom-phuc-long_26595644-4b5d-4d95-a3ff-d0ccf06d6f1f-og.png",
                "description": ""
            },
            {
                "id":4,

                "name": "Trà Sữa Ô Long (M)",
                "price": 45000,
                "size": "M",
                "image": "https://hcm.fstorage.vn/images/2022/65000087-65000101-tra-o-long-sua_b2aa9ed3-4cc8-43e2-932b-802878bf314d-og.png",
                "description": ""
            },
            {
                "id":5,

                "name": "Trà Sữa Ô Long (L)",
                "price": 55000,
                "size": "L",
                "image": "https://hcm.fstorage.vn/images/2022/65000087-65000101-tra-o-long-sua_b2aa9ed3-4cc8-43e2-932b-802878bf314d-og.png",
                "description": ""
            },
            {
                "id":6,

                "name": "Hồng Trà Đào (M)",
                "price": 50000,
                "size": "M",
                "image": "https://hcm.fstorage.vn/images/2022/65000085-65000100-tra-dao-phuc-long_b57f8c46-3096-42be-b8bc-84185ea3ec02-og.png",
                "description": ""
            },
            {
                "id":7,

                "name": "Hồng Trà Đào (L)",
                "price": 60000,
                "size": "L",
                "image": "https://hcm.fstorage.vn/images/2022/65000085-65000100-tra-dao-phuc-long_b57f8c46-3096-42be-b8bc-84185ea3ec02-og.png",
                "description": ""
            },
            {
                "id":8,

                "name": "Hồng Trà Sữa (M)",
                "price": 50000,
                "size": "M",
                "image": "https://hcm.fstorage.vn/images/2022/65000082-65000099-hong-tra-sua_30c9a4d2-957e-4152-b377-33b68f4da0c5-og.png",
                "description": ""
            },
            {
                "id":9,

                "name": "Hồng Trà Sữa (L)",
                "price": 60000,
                "size": "L",
                "image": "https://hcm.fstorage.vn/images/2022/65000082-65000099-hong-tra-sua_30c9a4d2-957e-4152-b377-33b68f4da0c5-og.png",
                "description": ""
            },
            {
                "id":10,

                "name": "Trà Sữa Trân Châu Phúc Long (M)",
                "price": 55000,
                "size": "M",
                "image": "https://hcm.fstorage.vn/images/2022/65000084-65000098-tra-sua-tran-chau-phuc-long_d24af373-7799-453e-a5ff-68b6634b37a7-og.png",
                "description": ""
            },
            {
                "id":11,

                "name": "Trà Sữa Trân Châu Phúc Long (L)",
                "price": 65000,
                "size": "L",
                "image": "https://hcm.fstorage.vn/images/2022/65000084-65000098-tra-sua-tran-chau-phuc-long_d24af373-7799-453e-a5ff-68b6634b37a7-og.png",
                "description": ""
            }
        ]
    }
    return (
        <div className={cn('pt-20 pb-20 pr-28 pl-28')}>
            {/*desktop 4 columns,tablet 3 columns, mobile 2 columns, using grid layout*/}

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5">
                {products.products.map((product, index) => (
                    <ProductItem key={index} name={product.name} />
                    // <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white">
                    //     <div className={cn('w-full flex justify-center')}>
                    //         <Image
                    //             src={product.image}
                    //             alt={product.name}
                    //             width={200}
                    //             height={200}
                    //             className="object-cover"
                    //         />
                    //     </div>
                    //     <div className="text-center mt-4">
                    //         <p className="text-gray-700 text-lg font-semibold">{product.name}</p>
                    //         <p className="text-green-500 text-xl font-bold">{product.price} vnđ</p>
                    //         <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                    //             <i className="fas fa-shopping-cart"></i> Đặt mua
                    //         </button>
                    //     </div>
                    // </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;



// <div key={index} className="flex flex-col items-center justify-center m-2">
//     <Image src={product.image} alt={product.name} width={200} height={200}/>
//     <p>{product.name}</p>
//     <p>{product.price}</p>
// </div>






