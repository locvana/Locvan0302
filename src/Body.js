import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Avatar from './assets/avatar.png';
import Loc from './assets/loc.png';
import UiUx from './assets/bg-uiux.png';
import Branding from './assets/bg-branding.png';
import Socialpost from './assets/bg-socialpost.png';
import Photography from './assets/bg-photography.png';
import Film from './assets/bg-film.png';

import SectionItems from './SectionItems';

function Body() {

    const section = ['1' ,'2', '3', '4', '5'];
    const menuItem = [
        ['Trang chủ', '1'], 
        ['Giới thiệu', '4'],
        ['Dự án', '2'],
        ['Góc nhìn', '1'],
        ['Liên hệ', '5']
    ];
    const listTitle = {
        0: [UiUx, '-5%', 'UI - UX'],
        1: [Branding, '-30%', 'Branding'],
        2: [Socialpost, '-50%', 'Social Post'],
        3: [Photography, '-70%', 'Photography'],
        4: [Film, '-90%', 'Film/VIdeo']
    };
    const skills = ['website Ui/Ux', 'Mobile App Ui/Ux', 'Dashboard Ui/ux', 'nhận diện thương hiệu', 'Visual thương hiệu',
                    'hình ảnh social', 'xử lý hình ảnh', 'ấn phẩm / bao bì', 'chụp ảnh sản phẩm', 'chỉnh sửa Video'];
    const socials = [
        ['behance', ''],
        ['Linkedin', 'https://vn.linkedin.com/in/truong-pham-20876b264 '],
        ['Facebook', 'https://www.facebook.com/duytruong.pham.522?mibextid=LQQJ4d'],
        ['whatsapp', '']
    ];
    
    const [menu, setMenu] = useState(false);
    const [changeSection, setChangeSection] = useState(1);
    const [currentSection, setCurrentSection] = useState(1);
    const [scrollDirection, setScrollDirection] = useState('');
    const [backgroundImage, setBackGroundImage] = useState(UiUx);
    const [item, setItem] = useState(0);
    const [clickItem, setClickItem] = useState(0);
    
    const ScrollTitles = (e) => {
        if (e.deltaY < 0) {
            if(scrollDirection !== 'up') {
                setScrollDirection('up');
                if(item > 0) {
                    setItem(item - 1);
                }
            }
        }
        if (e.deltaY > 0) {
            if(scrollDirection !== 'down') {
                setScrollDirection('down');
                if(item < 4) {
                    setItem(item + 1);
                }
            }
        }
    }

    const Submit = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_wpqf4ci", "template_joybvlo", "#form", "-qgeR4-gRFHRUkK10")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        document.querySelector('#form input[name="from_name"]').value = "";
        document.querySelector('#form input[name="from_email"]').value = " ";
        document.querySelector('#form textarea[name="message"]').value = " ";
    }

    useEffect(() => {

        const main = document.querySelector('#main');
        const scrollItems = document.querySelector('#scrollItems');

        if(currentSection > changeSection) {
            document.querySelector(`#section${changeSection}`).style.display = 'flex';
            main.scrollBy(window.innerWidth, 0);
            main.scrollBy({
                left: -window.innerWidth,
                behavior: "smooth"
            });
        } else {
            document.querySelector(`#section${changeSection}`).style.display = 'flex';
            main.scrollBy({
                left: window.innerWidth,
                behavior: "smooth"
            });
        }
        setCurrentSection(changeSection);
        setTimeout(() => {
            section.filter(s => !s.includes(changeSection)).map(e => document.querySelector(`#section${e}`).style.display = 'none');
        }, 800);

        scrollItems.style.transform = `translateY(${listTitle[item][1]})`;
        setBackGroundImage(listTitle[item][0]);
        setTimeout(() => {setScrollDirection()}, 1500);
        
    }, [changeSection, item, backgroundImage, clickItem]);

    return(
        <>
            {/* Header */}
            <div className='cursor-default fixed flex justify-between items-center w-full px-6 py-5 z-10 lg:px-24 lg:py-8'>
                <div onClick={() => setChangeSection(1)} className="font-['Poppins'] font-bold text-lg text-white cursor-pointer lg:text-3xl">
                    VanLoc
                    <span className="text-[#F1875E]">.</span>
                </div>
                <div className="flex items-center gap-4 lg:gap-8">
                    <div className="flex items-center gap-2 lg:gap-4">
                        <svg className='w-5 lg:w-8' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_16_84)">
                                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F0F0F0"/>
                                <path d="M3.30752 6.25891C2.05071 7.8941 1.10302 9.77879 0.551208 11.8262H8.87483L3.30752 6.25891Z" fill="#0052B4"/>
                                <path d="M31.4488 11.8262C30.897 9.77885 29.9492 7.89416 28.6925 6.25897L23.1253 11.8262H31.4488Z" fill="#0052B4"/>
                                <path d="M0.551208 20.174C1.10308 22.2214 2.05077 24.1061 3.30752 25.7412L8.87465 20.174H0.551208Z" fill="#0052B4"/>
                                <path d="M25.7411 3.30758C24.106 2.05077 22.2213 1.10308 20.1739 0.551208V8.87477L25.7411 3.30758Z" fill="#0052B4"/>
                                <path d="M6.25891 28.6924C7.8941 29.9492 9.77879 30.8969 11.8262 31.4488V23.1253L6.25891 28.6924Z" fill="#0052B4"/>
                                <path d="M11.8261 0.551208C9.77872 1.10308 7.89404 2.05077 6.25891 3.30752L11.8261 8.87471V0.551208Z" fill="#0052B4"/>
                                <path d="M20.174 31.4488C22.2213 30.8969 24.106 29.9492 25.7411 28.6925L20.174 23.1253V31.4488Z" fill="#0052B4"/>
                                <path d="M23.1253 20.174L28.6925 25.7413C29.9492 24.1061 30.897 22.2214 31.4488 20.174H23.1253Z" fill="#0052B4"/>
                                <path d="M31.8646 13.9131H18.0871H18.087V0.135438C17.4038 0.0465 16.7073 0 16 0C15.2926 0 14.5962 0.0465 13.9131 0.135438V13.9129V13.913H0.135438C0.0465 14.5962 0 15.2927 0 16C0 16.7074 0.0465 17.4038 0.135438 18.0869H13.9129H13.913V31.8646C14.5962 31.9535 15.2926 32 16 32C16.7073 32 17.4038 31.9536 18.0869 31.8646V18.0871V18.087H31.8646C31.9535 17.4038 32 16.7074 32 16C32 15.2927 31.9535 14.5962 31.8646 13.9131Z" fill="#D80027"/>
                                <path d="M20.174 20.174L27.3137 27.3138C27.6421 26.9855 27.9553 26.6423 28.2542 26.2866L22.1416 20.174H20.174V20.174Z" fill="#D80027"/>
                                <path d="M11.8261 20.174H11.826L4.68628 27.3137C5.01453 27.6421 5.35772 27.9553 5.71347 28.2542L11.8261 22.1414V20.174Z" fill="#D80027"/>
                                <path d="M11.826 11.8262V11.8261L4.68629 4.68628C4.35791 5.01453 4.04466 5.35772 3.74579 5.71347L9.85848 11.8262L11.826 11.8262Z" fill="#D80027"/>
                                <path d="M20.174 11.8262L27.3138 4.68629C26.9855 4.35791 26.6423 4.04466 26.2866 3.74585L20.174 9.85854V11.8262Z" fill="#D80027"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_84">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg className='w-5 lg:w-8' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_16_101)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 0C24.8356 0 32 7.16444 32 16C32 24.8356 24.8356 32 16 32C7.16444 32 0 24.8356 0 16C0 7.16444 7.16444 0 16 0Z" fill="#DA251D"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.88892 14L13.2836 17.1929L11.6054 22.3591L16 19.1671L20.3947 22.36L18.7147 17.1938L23.1111 14H17.6605L16 8.88892L14.3396 14H8.88892Z" fill="#FFFF00"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_101">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div onClick={() => setMenu(!menu)}>
                    {menu ? 
                        (
                            <>
                                <svg className='cursor-pointer w-6 lg:w-9' width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <line y1="-2" x2="34.4031" y2="-2" transform="matrix(0.70501 0.709197 -0.70501 0.709197 5 3.60139)" stroke="white" strokeWidth="4"/>
                                        <path d="M6.74536 26.3986L30.9999 2" stroke="white" strokeWidth="4"/>
                                    </g>
                                </svg>
                                <div className='fixed left-0 bottom-0 w-full h-full bg-[#082723] flex flex-col justify-center gap-5 capitalize text-white text-3xl font-medium px-6 pt-14 z-[-1] 
                                                lg:gap-10 lg:px-24 lg:text-4xl 2xl:text-6xl'>
                                    {menuItem.map((x, index) => (
                                        <div key={index} className='w-fit relative transition-all duration-500 hover:text-[#F6AA50]
                                            after:content-[""] after:absolute after:left-0 after:-bottom-3 after:w-0 after:border-0 after:border-solid after:border-[#F6AA50] after:transition-all after:duration-500
                                            after:hover:w-full after:hover:border cursor-pointer' onClick={() => setChangeSection(x[1])}>{x[0]}</div>
                                    ))}
                                    <div className='absolute bottom-0 pb-8 pr-6 capitalize text-base font-normal lg:right-0 lg:px-24'>Tất cả dự án mới nhất sẽ được cập nhật tại <a className='underline text-[#F6AA50]'>Behance</a></div>
                                </div>
                            </>
                        ) : (
                            <svg className='cursor-pointer w-6 lg:w-9' width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <line y1="2" x2="36" y2="2" stroke="white" strokeWidth="4"/>
                                    <line y1="13.55" x2="36" y2="13.55" stroke="white" strokeWidth="4"/>
                                    <path d="M0 25H36" stroke="white" strokeWidth="4"/>
                                </g>
                            </svg>

                        )
                    }
                    </div>
                </div>
            </div>

            <div className='h-screen flex overflow-hidden' id='main'>
                {/* Section 1 */}
                <div className='h-full flex flex-[0_0_100vw] justify-center items-center relative px-6 py-14 overflow-y-hidden lg:px-36' id='section1'>
                    <div className="h-full flex flex-col items-center justify-center fixed px-6 lg:relative lg:px-0">
                        <svg className="w-full" xmlns="http://www.w3.org/2000/svg" width="1618" height="390" viewBox="0 0 1618 390" fill="none">
                            <path d="M227.695 160.65C227.695 185.96 222.388 208.258 211.774 227.542C201.161 246.827 185.723 261.893 165.46 272.74C145.439 283.347 121.559 288.65 93.8187 288.65H3V33.3729H93.8187C121.559 33.3729 145.439 38.6761 165.46 49.2825C185.723 59.6478 201.161 74.4727 211.774 93.7571C222.388 112.8 227.695 135.098 227.695 160.65ZM89.4767 243.09C116.976 243.09 138.203 235.859 153.158 221.395C168.355 206.932 175.953 186.684 175.953 160.65C175.953 134.375 168.355 114.006 153.158 99.5424C138.203 85.0791 116.976 77.8475 89.4767 77.8475H54.0177V243.09H89.4767Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M454.402 180.898C454.402 185.96 453.799 191.746 452.593 198.254H305.691C306.415 216.092 311.239 229.23 320.164 237.667C329.089 246.104 340.185 250.322 353.452 250.322C365.272 250.322 375.041 247.429 382.76 241.644C390.721 235.859 395.786 228.024 397.957 218.141H451.869C449.216 232.122 443.547 244.657 434.864 255.746C426.18 266.834 414.963 275.512 401.214 281.78C387.705 288.047 372.629 291.181 355.985 291.181C336.446 291.181 319.079 287.083 303.882 278.887C288.685 270.45 276.866 258.518 268.423 243.09C259.98 227.663 255.759 209.463 255.759 188.492C255.759 167.52 259.98 149.32 268.423 133.893C276.866 118.224 288.685 106.292 303.882 98.096C319.079 89.9002 336.446 85.8022 355.985 85.8022C375.765 85.8022 393.012 89.9002 407.726 98.096C422.682 106.292 434.14 117.621 442.1 132.085C450.301 146.307 454.402 162.578 454.402 180.898ZM403.023 175.836C403.746 159.444 399.404 147.03 389.997 138.593C380.831 130.156 369.493 125.938 355.985 125.938C342.236 125.938 330.657 130.156 321.25 138.593C311.842 147.03 306.656 159.444 305.691 175.836H403.023Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M559.728 85.8022C584.091 85.8022 603.63 91.9491 618.344 104.243C633.058 116.537 642.224 132.928 645.843 153.418H598.082C596.152 143.776 591.81 136.062 585.056 130.277C578.302 124.492 569.497 121.599 558.642 121.599C549.958 121.599 543.204 123.648 538.38 127.746C533.556 131.844 531.143 137.388 531.143 144.379C531.143 149.923 533.073 154.382 536.933 157.757C540.792 161.132 545.617 163.783 551.406 165.712C557.195 167.64 565.517 169.93 576.372 172.582C591.569 175.957 603.871 179.573 613.278 183.429C622.927 187.045 631.128 192.951 637.883 201.147C644.878 209.102 648.376 219.949 648.376 233.689C648.376 250.804 641.621 264.665 628.113 275.271C614.846 285.878 596.875 291.181 574.201 291.181C548.149 291.181 527.284 285.395 511.605 273.825C495.926 262.013 486.397 245.26 483.02 223.565H531.867C533.073 233.448 537.415 241.282 544.893 247.068C552.371 252.612 562.14 255.384 574.201 255.384C582.885 255.384 589.518 253.335 594.101 249.237C598.685 244.898 600.976 239.354 600.976 232.605C600.976 226.819 598.926 222.119 594.825 218.503C590.966 214.887 586.021 212.115 579.99 210.186C574.201 208.258 565.879 205.968 555.024 203.316C540.069 199.942 527.887 196.567 518.48 193.192C509.313 189.576 501.353 183.911 494.599 176.198C488.086 168.484 484.83 157.878 484.83 144.379C484.83 127.023 491.463 112.921 504.73 102.073C517.997 91.226 536.33 85.8022 559.728 85.8022Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M680.584 30.8418C680.584 22.6459 683.478 16.0169 689.268 10.9548C695.057 5.6516 702.655 3 712.063 3C721.47 3 729.069 5.6516 734.858 10.9548C740.647 16.0169 743.542 22.6459 743.542 30.8418C743.542 38.7966 740.647 45.4256 734.858 50.7288C729.069 55.791 721.47 58.322 712.063 58.322C702.655 58.322 695.057 55.791 689.268 50.7288C683.478 45.4256 680.584 38.7966 680.584 30.8418ZM737.391 88.3333V288.65H686.373V88.3333H737.391Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M862.06 85.8022C878.945 85.8022 893.418 89.7797 905.479 97.7345C917.54 105.689 926.103 116.416 931.169 129.915V88.3333H981.825V289.373C981.825 307.934 978.086 324.567 970.608 339.271C963.372 354.217 952.396 365.908 937.682 374.345C923.209 382.782 905.6 387 884.855 387C855.909 387 832.511 380.13 814.661 366.39C796.81 352.65 785.956 333.968 782.096 310.345H832.39C835.285 320.469 840.833 328.303 849.034 333.847C857.477 339.633 868.211 342.525 881.237 342.525C896.192 342.525 908.253 338.066 917.42 329.147C926.586 320.469 931.169 307.211 931.169 289.373V246.706C926.103 260.205 917.54 271.053 905.479 279.249C893.418 287.203 878.945 291.181 862.06 291.181C845.175 291.181 829.978 287.083 816.47 278.887C802.962 270.691 792.348 258.879 784.629 243.452C777.151 227.783 773.412 209.463 773.412 188.492C773.412 167.52 777.151 149.32 784.629 133.893C792.348 118.224 802.962 106.292 816.47 98.096C829.978 89.9002 845.175 85.8022 862.06 85.8022ZM877.98 130.277C862.06 130.277 849.275 135.46 839.627 145.825C829.978 156.19 825.154 170.412 825.154 188.492C825.154 206.571 829.978 220.793 839.627 231.158C849.275 241.282 862.06 246.345 877.98 246.345C893.418 246.345 906.082 241.162 915.972 230.797C926.103 220.19 931.169 206.089 931.169 188.492C931.169 170.653 926.103 156.552 915.972 146.186C906.082 135.58 893.418 130.277 877.98 130.277Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M1147.46 85.4407C1170.62 85.4407 1189.07 93.0339 1202.82 108.22C1216.57 123.407 1223.45 144.74 1223.45 172.22V288.65H1172.79V178.006C1172.79 162.096 1168.69 149.802 1160.49 141.124C1152.29 132.205 1141.07 127.746 1126.84 127.746C1112.37 127.746 1100.79 132.446 1092.1 141.847C1083.42 151.249 1079.08 164.748 1079.08 182.345V288.65H1028.06V88.3333H1079.08V128.469C1084.38 114.97 1093.07 104.484 1105.13 97.0113C1117.43 89.2975 1131.54 85.4407 1147.46 85.4407Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M1456.85 180.898C1456.85 185.96 1456.24 191.746 1455.04 198.254H1308.14C1308.86 216.092 1313.68 229.23 1322.61 237.667C1331.53 246.104 1342.63 250.322 1355.9 250.322C1367.72 250.322 1377.49 247.429 1385.21 241.644C1393.17 235.859 1398.23 228.024 1400.4 218.141H1454.31C1451.66 232.122 1445.99 244.657 1437.31 255.746C1428.63 266.834 1417.41 275.512 1403.66 281.78C1390.15 288.047 1375.07 291.181 1358.43 291.181C1338.89 291.181 1321.52 287.083 1306.33 278.887C1291.13 270.45 1279.31 258.518 1270.87 243.09C1262.43 227.663 1258.2 209.463 1258.2 188.492C1258.2 167.52 1262.43 149.32 1270.87 133.893C1279.31 118.224 1291.13 106.292 1306.33 98.096C1321.52 89.9002 1338.89 85.8022 1358.43 85.8022C1378.21 85.8022 1395.46 89.9002 1410.17 98.096C1425.13 106.292 1436.59 117.621 1444.55 132.085C1452.75 146.307 1456.85 162.578 1456.85 180.898ZM1405.47 175.836C1406.19 159.444 1401.85 147.03 1392.44 138.593C1383.28 130.156 1371.94 125.938 1358.43 125.938C1344.68 125.938 1333.1 130.156 1323.7 138.593C1314.29 147.03 1309.1 159.444 1308.14 175.836H1405.47Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                            <path d="M1544.08 126.661C1551.56 113.885 1561.45 103.881 1573.75 96.6497C1586.05 89.177 1599.8 85.4407 1615 85.4407V140.04H1600.17C1562.78 140.04 1544.08 157.395 1544.08 192.107V288.65H1493.06V88.3333H1544.08V126.661Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                        </svg>
                        <svg className="w-1/6 absolute right-[10%] bottom-0 lg:bottom-[20%]" xmlns="http://www.w3.org/2000/svg" width="118" height="110" viewBox="0 0 118 110" fill="none">
                            <path d="M96.5998 17.0335L72.6114 31.4265L73.044 5.04098L73.0856 2.5H70.5443H46.7468H44.2263L44.2469 5.02049L44.4635 31.4487L20.4381 17.0335L18.2711 15.7332L16.9944 17.9143L4.84246 38.6738L3.54573 40.889L5.79443 42.1268L29.3772 55.1081L5.80994 67.8647L3.53653 69.0953L4.84246 71.3262L16.9944 92.0857L18.2711 94.2668L20.4381 92.9665L44.4635 78.5513L44.2469 104.98L44.2263 107.5H46.7468H70.5443H73.086L73.044 104.959L72.6114 78.7916L96.6142 92.9751L98.756 94.2407L100.032 92.1052L112.437 71.3457L113.775 69.1065L111.481 67.8647L87.914 55.1081L111.497 42.1268L113.766 40.8778L112.437 38.6543L100.032 17.8948L98.7474 15.7449L96.5998 17.0335Z" stroke="white" strokeOpacity="0.05" strokeWidth="5"/>
                        </svg>
                    </div>
                    <img className='h-[95%] absolute bottom-0 hidden lg:block' src={Loc} alt='Loc'/>
                    <div className='absolute top-0 w-full h-full px-6 pt-16 text-white flex items-end lg:px-24 lg:bottom-0'>
                        <div className='w-full h-full pb-8 flex flex-col gap-4 items-center overflow-y-scroll 
                                        lg:flex-row lg:items-end lg:justify-between lg:items-start lg:overflow-y-hidden'>
                            <div className='w-full flex flex-col gap-3 lg:w-[650px] lg:gap-8'>
                                <p className='text-4xl font-semibold lg:text-6xl 2xl:text-8xl'>Xin chào, <br/>mình là Lộc</p>
                                <div className='flex flex-wrap gap-2.5 lg:gap-5'>
                                    {Object.values(listTitle).map((x, index) => ( 
                                        <a onClick={() => {setChangeSection(3); setClickItem(index)}} key={index} className='bg-[#F6AA50] rounded-[50px] text-xs font-semibold uppercase px-5 py-2 cursor-pointer lg:text-sm 2xl:text-lg lg:px-10 lg:py-3.5'>{x[2]}</a> 
                                    ))}
                                </div>
                            </div>
                            <img className='block lg:hidden' src={Loc} alt='Loc'/>
                            <div className='flex flex-col items-start gap-4 text-base font-normal lg:w-[430px] lg:gap-12 2xl:text-lg lg:font-semibold lg:items-end'>
                                <p>Là một người sáng tạo đa nhiệm, trên con đường trở thành UI/UX Designer và 2D Graphics Designer thực thụ, đem đến cho dự án của mình sự độc đáo và chất lượng. Mình không chỉ đơn thuần là người thiết kế, mà còn là người nhiệt huyết, luôn tìm kiếm cơ hội để làm mới bản thân trong ngành.</p>
                                <a className='group cursor-pointer capitalize font-normal py-3 px-5 border-2 border-solid border-transparent rounded-[50px] bg-gradient-to-r from-[#F6AA50] to-[#FFFFFF] bg-origin-border shadow-[inset_0_100vw_#082723] transition-all duration-500
                                    hover:to-[#F6AA50] hover:shadow-[#F6AA50] hover:font-bold lg:py-4 lg:px-6'
                                    onClick={() => setChangeSection(2)}>
                                    Các dự án của mình ở đây!
                                    <span className='relative inline-block h-0.5 w-6 bg-white rounded-full ml-2 bottom-1 transition-all duration-500 group-hover:w-7
                                        before:content-[""] before:absolute before:bg-white before:rounded-full before:h-0.5 before:w-3 before:-rotate-45 before:-right-px before:-bottom-1
                                        after:content-[""] after:absolute after:bg-white after:rounded-full after:h-0.5 after:w-3 after:rotate-45 after:-right-px after:bottom-1'></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Section 2 */}
                <div className='relative flex-[0_0_100vw] items-center px-6 py-14 text-white bg-cover bg-center transition-all duration-500 hidden lg:px-24 lg:py-36
                                before:content-[""] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#082723] before:from-40% before:to-transparent before:to-100%' 
                    style={{backgroundImage: `url(${backgroundImage})`}} id='section2'>
                    <div className='w-full h-full overflow-hidden' onWheel={ScrollTitles}>
                        <div className='flex flex-col items-start gap-28 relative top-1/2 -translate-y-[5%] transition duration-500' id='scrollItems'>
                        {Object.values(listTitle).map((x, index) => ( 
                            <div key={index} className={`w-full cursor-pointer ${item != index && 'opacity-60'}`} onClick={() => {if(item === index && item !== 4){setClickItem(index);setChangeSection(3);}else{window.open('https://www.behance.net/VanLoc-Designer', '_blank')}}}>
                                <div className='group/item w-fit pb-2 border-b-2 border-solid flex items-center lg:pb-8'>
                                    <div className='flex items-baseline gap-4 lg:gap-20'>
                                        <span className='text-xl font-normal lg:text-3xl'>{index + 1}.</span>
                                        <div className='capitalize text-4xl font-medium lg:text-6xl 2xl:text-7xl'>{x[2]}</div>
                                    </div>
                                    <div className={`overflow-hidden w-0 ${item == index && 'lg:group-hover/item:w-[325px] lg:group-hover/item:pl-11'} transition-all duration-500 cursor-pointer`}>
                                        <div className='group w-[280px] bg-[#F6AB52] flex gap-3.5 items-baseline rounded-[50px] py-4 px-6 text-lg font-bold capitalize' id={index}>
                                            <span>Xem tất cả các dự án</span>
                                            <span className='relative inline-block h-0.5 w-6 bg-white rounded-full ml-2 bottom-1 transition-all duration-500 group-hover:w-7
                                                before:content-[""] before:absolute before:bg-white before:rounded-full before:h-0.5 before:w-3 before:-rotate-45 before:-right-px before:-bottom-1
                                                after:content-[""] after:absolute after:bg-white after:rounded-full after:h-0.5 after:w-3 after:rotate-45 after:-right-px after:bottom-1'></span>
                                        </div>
                                    </div>
                                    <span className={`relative ml-3 bg-[#F6AB52] h-1 rounded-full lg:hidden ${item == index && 'w-10 before:w-5 after:w-5'}
                                                    before:content-[""] before:absolute before:bg-[#F6AB52] before:rounded-full before:h-1 before:-rotate-45 before:-right-0.5 before:-bottom-[7px]
                                                    after:content-[""] after:absolute after:bg-[#F6AB52] after:rounded-full after:h-1 after:rotate-45 after:-right-0.5 after:bottom-[7px]`}>
                                        
                                    </span>
                                </div>
                            </div> 
                        ))}
                        </div>
                    </div>
                    <div className='absolute bottom-0 pb-8 pr-6 capitalize text-base font-normal hidden lg:block lg:right-0 lg:px-24'>Tất cả dự án mới nhất sẽ được cập nhật tại <a href='https://www.behance.net/VanLoc-Designer' target='_blank' className='underline text-[#F6AA50]'>Behance</a></div>
                </div>
                
                {/* Section 3 */}
                <div className='flex-col gap-8 flex-[0_0_100vw] justify-center px-6 pt-14 text-white bg-cover hidden lg:py-20 lg:px-24' id='section3'>
                    <SectionItems name={listTitle[clickItem][2]} back={(e) => {setChangeSection(e)}} item={clickItem}/>
                    <div className='absolute bottom-0 pb-8 pr-6 capitalize text-base font-normal hidden lg:block lg:right-0 lg:px-24'>Tất cả dự án mới nhất sẽ được cập nhật tại <a href='https://www.behance.net/VanLoc-Designer' target='_blank' className='underline text-[#F6AA50]'>Behance</a></div>
                </div>     

                {/* Section 4 */}  
                <div className='flex-[0_0_100vw] pt-14 px-6 text-white hidden lg:pt-24 lg:pl-24 lg:pr-12' id='section4'>
                    <div className='h-full overflow-y-scroll flex flex-col gap-8 pb-14 lg:pb-24 lg:pr-12 lg:gap-20 2xl:gap-28' id='scroll-y'>
                        <div className='flex flex-col items-center gap-5 lg:gap-14 2xl:gap-36 lg:flex-row '>
                            <div className='flex flex-col items-center gap-6 lg:w-1/3 lg:gap-14'>
                                <img loading="lazy" src={Avatar}/>
                                <div className='relative flex flex-col items-center text-center lg:gap-4'>
                                    <p className="absolute font-['UTM-Yen-Tu'] text-5xl left-0 -top-20 -rotate-6">Loc Chiem</p>
                                    <p className='uppercase text-[#FFB147] text-3xl font-bold lg:text-5xl'>Chiem Van Loc</p>
                                    <p className='capitalize text-xl font-bold lg:text-3xl'>Ui/Ux - Graphic Designer</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8 lg:w-2/3 lg:gap-20'>
                                <div className='flex flex-col justify-between items-center gap-2 border-b border-white/20 pb-5 lg:pb-8 lg:flex-row lg:gap-14 lg:items-start'>
                                    <div className='flex gap-3 items-center text-base 2xl:text-lg'>
                                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20.0488" cy="20" r="20" fill="white" fillOpacity="0.05"/>
                                            <g clipPath="url(#clip0_165_737)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8668 13.182C14.6242 11.4246 17.4734 11.4246 19.2308 13.182C20.9882 14.9393 20.9882 17.7886 19.2308 19.5459C18.5767 20.2001 17.7713 20.6107 16.9272 20.7779L19.4131 23.2637C19.5802 22.4197 19.9909 21.6143 20.645 20.9602C22.4024 19.2028 25.2516 19.2028 27.009 20.9602C28.7663 22.7175 28.7663 25.5668 27.009 27.3241C25.3711 28.962 22.7848 29.0733 21.018 27.6582L20.9986 27.6777L20.645 27.3241L12.8668 19.5459L12.5133 19.1924L12.5327 19.173C11.1176 17.4061 11.229 14.8198 12.8668 13.182ZM22.0592 25.9099C23.0355 26.8862 24.6185 26.8862 25.5948 25.9099C26.5711 24.9336 26.5711 23.3507 25.5948 22.3744C24.6185 21.3981 23.0355 21.3981 22.0592 22.3744C21.0829 23.3507 21.0829 24.9336 22.0592 25.9099ZM17.8166 18.1317C16.8403 19.108 15.2574 19.108 14.2811 18.1317C13.3048 17.1554 13.3048 15.5725 14.2811 14.5962C15.2574 13.6199 16.8403 13.6199 17.8166 14.5962C18.7929 15.5725 18.7929 17.1554 17.8166 18.1317Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_165_737">
                                                    <rect width="20" height="20" fill="white" transform="translate(10.0488 10)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        0933-348-018
                                    </div>
                                    <div className='flex gap-3 items-center text-base 2xl:text-lg'>
                                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20.0488" cy="20" r="20" fill="white" fillOpacity="0.05"/>
                                            <g clipPath="url(#clip0_165_749)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.0488 12C11.392 12 10.0488 13.3431 10.0488 15V25C10.0488 26.6569 11.392 28 13.0488 28H27.0488C28.7057 28 30.0488 26.6569 30.0488 25V15C30.0488 13.3431 28.7057 12 27.0488 12H13.0488ZM12.1401 14.5819C12.2984 14.2384 12.6458 14 13.0488 14H27.0488C27.4519 14 27.7992 14.2384 27.9575 14.5819L20.6628 20.2556C20.3017 20.5365 19.796 20.5365 19.4349 20.2556L12.1401 14.5819ZM12.0488 17.0446V22.865L15.6614 19.8544L12.0488 17.0446ZM12.1317 25.3993C12.2859 25.7529 12.6385 26 13.0488 26H27.0488C27.4592 26 27.8118 25.7529 27.9659 25.3993L22.8203 21.1113L21.8906 21.8343C20.8073 22.6769 19.2903 22.6769 18.207 21.8343L17.2774 21.1113L12.1317 25.3993ZM28.0488 22.865V17.0446L24.4362 19.8544L28.0488 22.865Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_165_749">
                                                    <rect width="20" height="20" fill="white" transform="translate(10.0488 10)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        chiemloc020203@gmail.com
                                    </div>
                                    <div className='flex gap-3 items-center text-base 2xl:text-lg'>
                                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20.0488" cy="20" r="20" fill="white" fillOpacity="0.05"/>
                                            <g clipPath="url(#clip0_165_755)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.3501 19.8553L20.0488 26.9501L15.7476 19.8553C13.6613 16.4141 16.0853 11.9709 20.0488 11.9709C24.0124 11.9709 26.4363 16.4141 24.3501 19.8553ZM14.1064 20.8927C11.2241 16.1385 14.5729 10 20.0488 10C25.5247 10 28.8735 16.1385 25.9913 20.8927L20.6915 29.6344C20.396 30.1219 19.7016 30.1219 19.4061 29.6344L14.1064 20.8927ZM20.049 14.9273C18.983 14.9273 18.1188 15.8097 18.1188 16.8982C18.1188 17.9867 18.983 18.8691 20.049 18.8691C21.115 18.8691 21.9792 17.9867 21.9792 16.8982C21.9792 15.8097 21.115 14.9273 20.049 14.9273Z" fill="white"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_165_755">
                                                <rect width="20" height="20" fill="white" transform="translate(10.0488 10)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Hồ Chí Minh, Việt Nam
                                    </div>
                                </div>
                                <div className='flex flex-col gap-8 lg:flex-row lg:gap-14'>
                                    <div className='flex flex-col gap-3 lg:w-1/2'>
                                        <p className='capitalize italic text-3xl font-bold 2xl:text-4xl'>Tóm tắt về mình</p>
                                        <p className='text-base font-normal 2xl:text-lg'>Xin chào, mình là Ui/Ux Designer và Graphic Designer, mình đam mê sáng tạo, không ngừng tìm hiểu và phát triển. Với kinh nghiệm tham gia nhiều dự án, mình mang đến giải pháp sáng tạo và tối ưu, đồng thời xem mỗi dự án như cơ hội học hỏi và trải nghiệm mới. Sự đa nhiệm và khả năng làm việc nhóm của mình đã giúp tôi góp phần tích cực vào mỗi dự án, mang lại giá trị đặc biệt qua từng ý tưởng thiết kế.</p>
                                    </div>
                                    <div className='flex flex-col gap-3 lg:w-1/2'>
                                        <p className='capitalize italic text-3xl font-bold 2xl:text-4xl'><span className='not-italic text-[#FFB147]'>20+</span> dự án đã thực hiện</p>
                                        <p className='text-base font-normal 2xl:text-lg'>Với hơn 20 dự án đã thực hiện. Bao gồm ấn phẩm, branding, đến thiết kế Ui/Ux như: website, dashboard và mobile app, tôi đã có cơ hội chứng minh khả năng đa dạng và sáng tạo trong nhiều lĩnh vực thiết kế. Từ đó đáp ứng được nhu cầu của từng khách hàng, mang lại giá trị và lợi ích mà họ mong muốn.</p>
                                    </div>
                                </div>
                                <div className='flex gap-3 px-4 py-3.5 lg:w-4/5 2xl:w-3/5 lg:px-10 lg:py-6 lg:bg-[#142C29]'>
                                    <svg className='min-w-16' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                                        <path d="M12.2704 46.1894C9.5237 43.272 8.04903 40 8.04904 34.696C8.04904 25.3627 14.601 16.9974 24.129 12.8614L26.5104 16.536C17.617 21.3467 15.8784 27.5894 15.185 31.5254C16.617 30.784 18.4917 30.5254 20.329 30.696C25.1397 31.1414 28.9317 35.0907 28.9317 40C28.9317 42.4754 27.9484 44.8494 26.198 46.5997C24.4477 48.35 22.0737 49.3334 19.5984 49.3334C16.737 49.3334 14.001 48.0267 12.2704 46.1894ZM38.937 46.1894C36.1904 43.272 34.7157 40 34.7157 34.696C34.7157 25.3627 41.2677 16.9974 50.7957 12.8614L53.177 16.536C44.2837 21.3467 42.545 27.5894 41.8517 31.5254C43.2837 30.784 45.1584 30.5254 46.9957 30.696C51.8064 31.1414 55.5957 35.0907 55.5957 40C55.5957 42.4754 54.6124 44.8494 52.862 46.5997C51.1117 48.35 48.7377 49.3334 46.2624 49.3334C43.401 49.3334 40.665 48.0267 38.9344 46.1894L38.937 46.1894Z" fill="#FFB147"/>
                                    </svg>
                                    <p className='italic text-lg font-bold 2xl:text-xl lg:font-semibold'>“Sự hoàn hảo của thiết kế không chỉ nằm trong sự hấp dẫn hình thức mà còn phản ánh ở khả năng làm việc mượt mà và hiệu quả.” <span className='text-[#CACACA]'>- James Dyso</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#142C29] py-8 px-6 flex flex-col gap-5 lg:flex-row lg:py-16 2xl:px-24 lg:gap-24 2xl:gap-28'>
                            <div className='text-base lg:w-1/3 2xl:text-lg'>
                                <p className='italic font-semibold pb-1 2xl:pb-4'>Chuyên môn</p>
                                <p className='uppercase text-3xl font-bold pb-3 lg:pb-6 2xl:text-4xl'>chuyên môn - kĩ năng</p>
                                <p className='font-normal'>Với khả năng đa nhiệm độc đáo trong thiết kế, mình không chỉ tập trung vào Ui/Ux và Graphic mà còn tích hợp nhiều kỹ năng khác nhau. Sự kết hợp này giúp mình mang lại những giải pháp sáng tạo và hiệu quả trong mọi dự án.</p>
                            </div>
                            <div className='grid gap-y-5 gap-x-14 lg:w-2/3 lg:grid-cols-2 lg:gap-y-8'>
                                {skills.map((x, index) => (
                                    <p key={index} className='capitalize text-2xl font-bold border-b border-solid border-white/20 pb-2 2xl:text-3xl lg:pb-5'>{x}</p>
                                ))}
                            </div>
                        </div>
                        <div className='bg-[#142C29] py-8 px-6 flex flex-col gap-9 lg:flex-row lg:py-16 2xl:px-24 2xl:gap-28'>
                            <div className='text-base lg:w-1/3 2xl:text-lg'>
                                <p className='italic font-semibold pb-1 2xl:pb-4'>Kinh nghiệm</p>
                                <p className='uppercase text-3xl font-bold pb-3 lg:pb-6 2xl:text-4xl'>Kinh nghiệm làm việc</p>
                                <p className='font-normal'>Mình luôn dành sự quan tâm và tập trung cao vào công việc, không ngừng trau dồi kiến thức và phát triển bản thân. Đối với mình, công việc không chỉ là nhiệm vụ hàng ngày mà còn là cơ hội để không ngừng học hỏi và đặt ra những thách thức mới, nhằm trở thành phiên bản tốt nhất cho chính mình và đồng nghiệp.</p>
                            </div>
                            <div className='flex flex-col justify-between gap-9 lg:w-2/3 lg:flex-row 2xl:gap-28'>
                                <div className='flex flex-col gap-8 lg:w-7/12'>
                                    <Job time='9/2022 - 1/2024' place='Tech-One.io Agency' title='Graphic Designer'
                                        description={[
                                            "Thiết kế giao diện và nghiên cứu trải nghiệm người dùng trên trang web và bảng điều khiển.",
                                            "Thiết kế các trang đích khác nhau.",
                                            "Thảo luận và hợp tác với các nhóm khác nhau để đề xuất các giải pháp, giải quyết vấn đề và tối ưu hóa trang web nội bộ và trang web phục vụ khách hàng.",
                                            "Thiết kế và xử lý hình ảnh cho các khách hàng của công ty.",
                                            "Thiết kế thương hiệu và các tài liệu in ấn.",
                                            "Chụp ảnh sản phẩm và tạo video cho các nền tảng sản phẩm.",
                                            "Sản xuất, quay và chỉnh sửa video."]}/>
                                    <Job time='8/2023 - 1/2024' place='Atseeds Agency' title='freelancer Ui/Ux Designer'
                                        description={[
                                            "Thiết kế giao diện và trải nghiệm người dùng cho trang web.",
                                            "Thiết kế giao diện và trải nghiệm người dùng cho ứng dụng di động như Ứng dụng Pomodoro, Ứng dụng Podcast và các ứng dụng khác.",
                                            "Hợp tác và phối hợp với nhóm phát triển để đề xuất các giải pháp và giải quyết các vấn đề trong quá trình thiết kế ứng dụng.",
                                            "Thiết kế và xử lý hình ảnh cho các trang mạng xã hội."]}/>
                                    <Job time='5/2022 - Hiện Tại' place='' title='freelancer 2D Graphic'
                                        description={[
                                            "Thiết kế giao diện và trải nghiệm người dùng cho cả trang web và ứng dụng.",
                                            "Thiết kế hệ thống nhận diện thương hiệu.",
                                            "Thiết kế và xử lý hình ảnh cho các mạng xã hội."]}/>
                                </div>
                                <div className='flex items-end'>
                                    <a className='group cursor-pointer capitalize font-normal text-base py-4 px-6 border-2 border-solid border-transparent rounded-[50px] bg-gradient-to-r from-[#F6AA50] to-[#FFFFFF] bg-origin-border shadow-[inset_0_100vw_#082723] transition-all duration-500 2xl:text-lg
                                        hover:to-[#F6AA50] hover:shadow-[#F6AA50] hover:font-bold' onClick={() => setChangeSection(5)}>
                                        Liên hệ công việc ở đây
                                        <span className='relative inline-block h-0.5 w-6 bg-white rounded-full ml-2 bottom-1 transition-all duration-500 group-hover:w-7
                                            before:content-[""] before:absolute before:bg-white before:rounded-full before:h-0.5 before:w-3 before:-rotate-45 before:-right-px before:-bottom-1
                                            after:content-[""] after:absolute after:bg-white after:rounded-full after:h-0.5 after:w-3 after:rotate-45 after:-right-px after:bottom-1'></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div className='flex justify-between flex-[0_0_100vw] text-white px-6 pt-24 pb-6 overflow-y-hidden hidden lg:px-24' id='section5'>
                    <div className='w-full flex flex-col gap-14 justify-between overflow-y-scroll lg:gap-24 lg:flex-row lg:items-stretch lg:overflow-y-hidden'>
                        <div className='h-full flex gap-5 flex-col lg:justify-between lg:w-2/5'>
                            <div className='flex flex-col gap-2 lg:gap-4'>
                                <p className='capitalize italic text-base font-semibold lg:text-lg'>Kết nối</p>
                                <p className='capitalize text-3xl font-bold lg:text-5xl'>Liên hệ mình</p>
                            </div>
                            <div className='flex flex-col gap-5 lg:gap-20'>
                                <div className='flex flex-col gap-1 lg:gap-5'>
                                    <a href='tel:+84703788949' className='text-lg font-bold lg:text-3xl'>(+84) 703 788 949</a>
                                    <a href='mailto:chiemloc020203@gmail.com' className='text-lg font-bold lg:text-3xl'>chiemloc020203@gmail.com</a>
                                </div>
                                <div className='flex flex-wrap gap-4 uppercase text-sm font-medium lg:text-lg lg:gap-6'>
                                    {socials.map((e, index) => (
                                        <a key={index} href={e[1]} target='_blank'>{e[0]}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <form className='bg-[#142C29] flex flex-col justify-center items-start px-5 py-7 gap-8 2xl:gap-14 lg:w-3/5 lg:px-10 lg:py-20 2xl:p-20' id='form'>
                            <p className='capitalize text-3xl font-bold lg:text-4xl'>Vấn đề của bạn là gì?</p>
                            <div className='w-full flex flex-col gap-8 lg:gap-12 lg:flex-row'>
                                <div className='flex flex-col text-base lg:text-lg lg:w-1/2'>
                                    <label className='uppercase font-medium text-white/80'>Tên</label>
                                    <input name="from_name" type='text' className='bg-transparent outline-0 border-b border-solid' />
                                </div>
                                <div className='flex flex-col text-base lg:text-lg lg:w-1/2'>
                                    <label className='uppercase font-medium text-white/80'>email</label>
                                    <input name="from_email" type='email' className='bg-transparent outline-0 border-b border-solid' />
                                </div>
                            </div>
                            <div className='w-full flex text-base lg:text-lg flex-col'>
                                <label className='uppercase font-medium text-white/80'>Nội dung</label>
                                <textarea name="message" rows="5" className='bg-transparent outline-0 border border-solid rounded-lg'></textarea>
                            </div>
                            <span onClick={Submit} className='group cursor-pointer capitalize font-normal text-base py-4 px-6 rounded-[50px] bg-[#F6AB52] transition-all duration-500 lg:text-lg hover:font-bold'>
                                Gửi Ngay
                                <span className='relative inline-block h-0.5 w-6 bg-white rounded-full ml-2 bottom-1 transition-all duration-500 group-hover:w-7
                                    before:content-[""] before:absolute before:bg-white before:rounded-full before:h-0.5 before:w-3 before:-rotate-45 before:-right-px before:-bottom-1
                                    after:content-[""] after:absolute after:bg-white after:rounded-full after:h-0.5 after:w-3 after:rotate-45 after:-right-px after:bottom-1'></span>
                            </span>
                        </form>
                    </div>
                </div>
            </div> 
        </>
    )
}

function Job(props) {

    const [expanse, setExpanse] = useState(false);
    const description = useRef();

    useEffect(() => {

        var d = description.current.scrollHeight;

        if(expanse) {
            description.current.style.height = d + 15 + 'px';
        } else {
            description.current.style.height = '0px';
        }

    }, [description, expanse]);

    return(
        <div className='flex flex-col gap-3 border-b border-solid border-white/20 cursor-pointer lg:pb-5' onClick={() => setExpanse(!expanse)}>
            <div className='flex justify-between italic text-base font-medium 2xl:text-lg 2xl:font-bold'>
                <p>{props.time}</p>
                <p>{props.place}</p>
            </div>
            <div className='flex justify-between items-center capitalize text-2xl font-bold 2xl:text-3xl'>
                <p>{props.title}</p>
                <svg className={`transition-all duration-500 ${expanse && 'rotate-45'}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M11.9996 6.40039V8.96039H20.4348L5.59961 23.7956L7.40441 25.6004L22.2396 10.7652V19.2004H24.7996V6.40039H11.9996Z" fill="white"/>
                </svg>
            </div>
            <ul className='list-disc text-base pl-5 overflow-hidden transition-all duration-500 2xl:text-lg' ref={description}>
                {props.description.map((e, index) => (
                    <li key={index}>{e}</li>
                ))}
            </ul>
        </div>
    )
}

export default Body