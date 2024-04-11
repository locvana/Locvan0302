import ItemUIUX1 from '../assets/item-uiux-1.jpg';
import ItemUIUX2 from '../assets/item-uiux-2.jpg';
import ItemUIUX3 from '../assets/item-uiux-3.jpg';
import ItemUIUX4 from '../assets/item-uiux-4.jpg';
import ItemUIUX5 from '../assets/item-uiux-5.jpg';
import ItemUIUX6 from '../assets/item-uiux-6.jpg';
import ItemUIUX7 from '../assets/item-uiux-7.jpg';
import ItemUIUX8 from '../assets/item-uiux-8.jpg';
import ItemUIUX9 from '../assets/item-uiux-9.jpg';

import ItemBranding1 from '../assets/item-branding-1.jpg';
import ItemBranding2 from '../assets/item-branding-2.jpg';
import ItemBranding3 from '../assets/item-branding-3.jpg';
import ItemBranding4 from '../assets/item-branding-4.jpg';
import ItemBranding5 from '../assets/item-branding-5.jpg';
import ItemBranding6 from '../assets/item-branding-6.jpg';
import ItemBranding7 from '../assets/item-branding-7.jpg';
import ItemBranding8 from '../assets/item-branding-8.jpg';

import ItemSocialPost1 from '../assets/item-socialpost-1.jpg';
import ItemSocialPost2 from '../assets/item-socialpost-2.jpg';
import ItemSocialPost3 from '../assets/item-socialpost-3.jpg';
import ItemSocialPost4 from '../assets/item-socialpost-4.jpg';
import ItemSocialPost5 from '../assets/item-socialpost-5.jpg';
import ItemSocialPost6 from '../assets/item-socialpost-6.jpg';
import ItemSocialPost7 from '../assets/item-socialpost-7.jpg';
import ItemSocialPost8 from '../assets/item-socialpost-8.jpg';
import ItemSocialPost9 from '../assets/item-socialpost-9.jpg';

import ItemPhotography1 from '../assets/item-photography-1.jpg';
import ItemPhotography2 from '../assets/item-photography-2.jpg';
import ItemPhotography3 from '../assets/item-photography-3.jpg';
import ItemPhotography4 from '../assets/item-photography-4.jpg';

function Carousel(props) {

    const itemCarousel = [
        [
            [ItemUIUX1, 'staarlabs', 'E-Commerce website', 'https://www.behance.net/gallery/192181793/Staar-Labs-_-Ecommerce-website'],
            [ItemUIUX2, 'Ươm app', 'Ứng dụng hộ trợ chăm sóc cây trồng', 'https://www.behance.net/gallery/168387749/UOM-ng-dng-h-tr-cham-soc-cay-trng'],
            [ItemUIUX3, 'Bandy Constructor', 'Business Website', 'https://www.behance.net/gallery/190111391/Bandy-Constructors'],
            [ItemUIUX4, 'Pomodoro app', 'Ứng dụng quản lý thời gian', 'https://www.behance.net/gallery/190111567/Pomodoro-app'],
            [ItemUIUX5, 'luật thắng lợi', 'Business Website', 'https://www.behance.net/gallery/190111649/lut-thng-li'],
            [ItemUIUX6, 'Dragonship App', 'Ứng dụng vận chuyển cho doanh nghiệp', 'https://www.behance.net/gallery/190111769/Dragonship-App'],
            [ItemUIUX7, 'Affiliate Tool', 'Công cụ quản lý đơn hàng Affiliate', 'https://www.behance.net/gallery/190111915/Affiliate-Tool'],
            [ItemUIUX8, 'all landing pages', 'Business Website', 'https://www.behance.net/gallery/190111975/Landing-pages-_-Case-study-Seo-Brand'],
            [ItemUIUX9, 'Meditation App', 'Ứng dụng chữa lành tâm hồn', 'https://www.behance.net/gallery/190112241/Meditation-App']
        ], [
            [ItemBranding1, 'INHERE', 'branding identity', 'https://www.behance.net/gallery/152502821/INHERE'],
            [ItemBranding2, 'aPao', 'branding identity', 'https://www.behance.net/gallery/161925681/aPao'],
            [ItemBranding3, 'Vchosi', 'branding identity', 'https://www.behance.net/gallery/190112341/Vchosi'],
            [ItemBranding4, 'Mơ Bistro', 'branding identity', 'https://www.behance.net/gallery/190112441/Mo-Bistro'],
            [ItemBranding5, '20Q Reminder', 'branding identity', 'https://www.behance.net/gallery/190112561/20Q-Reminder'],
            [ItemBranding6, 'Nghĩa Ân - Bò Khô', 'branding identity', 'https://www.behance.net/gallery/190112611/Ngha-An-Bo-Kho'],
            [ItemBranding7, 'Clara - Vải lụa tơ sen', 'branding identity', 'https://www.behance.net/gallery/146205075/Clara'],
            [ItemBranding8, 'Sblazer', 'branding identity', 'https://www.behance.net/gallery/157261901/sblazer']
        ], [
            [ItemSocialPost1, 'Coffee Day', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost2, 'Chuyện ngày xuân', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost3, 'lotus Fabric', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost4, 'Skin Detective app', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost5, 'GetGo App', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost6, 'CocoNala', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost7, 'Combo Smokio cassper', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost8, 'Combo Saffron', 'Social image', 'https://www.behance.net/VanLoc-Designer'],
            [ItemSocialPost9, 'Vnfs', 'Social image', 'https://www.behance.net/VanLoc-Designer']
        ], [
            [ItemPhotography1, 'tạp chí môi trường', 'Photography', 'https://www.behance.net/VanLoc-Designer'],
            [ItemPhotography2, 'tạp chí môi trường', 'Photography', 'https://www.behance.net/VanLoc-Designer'],
            [ItemPhotography3, 'Trà hoa việt - Hương sen', 'Photography', 'https://www.behance.net/VanLoc-Designer'],
            [ItemPhotography4, 'INHERE - SAFFRON', 'Photography', 'https://www.behance.net/VanLoc-Designer']
        ]
    ];

    return(
        <>
            {itemCarousel[props.item].map((x, index) => (
                <div key={index} className='group flex flex-col gap-6 flex-[0_0_90%] snap-center snap-always lg:flex-[0_0_20%]'>
                    <img className='w-full transition-all duration-500 group-hover:rounded-[32px]' src={x[0]} onClick={() => {props.clicked && window.open(x[3], '_blank')}}/>
                    <div className='relative h-32 lg:h-[155px]'>
                        <div className='absolute flex flex-col gap-3'>
                            <div className='flex flex-col text-white/80'>
                                <p className='uppercase text-2xl font-bold 2xl:text-3xl'>{x[1]}</p>
                                <p className='text-base font-normal lg:text-lg 2xl:text-xl'>{x[2]}</p>
                            </div>
                            <div className='h-[28px]'>
                                <div className='flex gap-2 items-center text-[#F6AA50] text-base font-medium overflow-hidden h-0 group-hover:h-full transition-all duration-500 lg:text-lg'
                                        onClick={() => window.open(x[3], '_blank')}>
                                    Xem trên Behance
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.1665 9.99996H15.8332M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333" stroke="#F6AA50" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Carousel