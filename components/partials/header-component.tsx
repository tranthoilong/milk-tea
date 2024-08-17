import React from 'react';
import {cn} from "@/lib/utils";

const HeaderComponent = () => {
    const buttons = [
        {
            label: 'Trang chủ',
            path: '/',
        },
        {
            label: 'Cà phê',
            path: '/coffee',
        },
        {
            label: 'Trà sữa',
            path: '/milk-tea',
        },
        {
            label: 'Sản phẩm',
            path: '/products',
        }
    ]

    const buttonAuthor = [
        {
            label: 'Đăng nhập',
            path: '/Login',
        },
        {
            label: 'Đăng ký',
            path: '/Register',
        }
    ]

    return (
        <>
            <div className={cn('h-[45px] bg-[#000000] text-white flex w-full items-center justify-between')}>
                <div className={cn('pl-12')}>MILK TEA🧃</div>
                <div className={cn('pr-12')}>
                    {
                        buttonAuthor.map(({label, path}, index) => (
                            <a key={index} href={path} className={cn('ml-4 text-sm hover:text-[#B8621B]')}>
                                {label}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className={cn('h-[35px] bg-[#262A56] text-white flex items-center justify-around pr-12')}>
                <div>
                    {
                        buttons.map(({label, path}, index) => (
                            <a key={index} href={path} className={cn('ml-4 text-sm hover:text-[#B8621B]')}>
                                {label}
                            </a>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;