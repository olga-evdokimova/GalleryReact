import m from "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <a href="" className="header__logo"><h1 className="header__title">Evdokimov Kirill</h1></a>


                <nav className="nav" title="">
                    <ul className="nav__list">
                        <li><a href="#">рубрика1</a></li>
                        <li><a href="#">рубрика2</a></li>
                        <li><a href="#">рубрика3</a></li>
                    </ul>
                </nav>
                <footer className="footer">
                    © Evdokimov Kirill 2022
                </footer>
                <div className="cocial">
                    <a href="#" className="cocial__insta">
                        <svg viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12ZM10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16Z"
                            fill="#333333" />
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M10.5 5.5C7.73858 5.5 5.5 7.73858 5.5 10.5V21.5C5.5 24.2614 7.73858 26.5 10.5 26.5H21.5C24.2614 26.5 26.5 24.2614 26.5 21.5V10.5C26.5 7.73858 24.2614 5.5 21.5 5.5H10.5ZM3.5 10.5C3.5 6.63401 6.63401 3.5 10.5 3.5H21.5C25.366 3.5 28.5 6.63401 28.5 10.5V21.5C28.5 25.366 25.366 28.5 21.5 28.5H10.5C6.63401 28.5 3.5 25.366 3.5 21.5V10.5Z"
                            fill="#333333" />
                        <path
                            d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z"
                            fill="#333333" />
                    </svg>
                    </a>
                    <a href="#" className="cocial__telegram">
                        <svg viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 16.859L22.2397 26.7499C22.3697 26.8644 22.5272 26.9431 22.6969 26.9783C22.8665 27.0136 23.0423 27.0041 23.2072 26.951C23.3721 26.8978 23.5203 26.8027 23.6374 26.675C23.7544 26.5474 23.8363 26.3915 23.875 26.2226L28.5767 5.70604C28.6174 5.52865 28.6089 5.34354 28.5521 5.17064C28.4953 4.99774 28.3924 4.84361 28.2545 4.72487C28.1166 4.60613 27.9489 4.52727 27.7695 4.49679C27.5901 4.46631 27.4057 4.48537 27.2363 4.55191L4.16674 13.615C3.96568 13.694 3.79561 13.8359 3.68197 14.0196C3.56832 14.2033 3.51722 14.4189 3.53631 14.6341C3.55539 14.8492 3.64364 15.0525 3.78784 15.2133C3.93205 15.3741 4.12446 15.4839 4.33628 15.5263L11 16.859Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 16.8591L28.014 4.57117" stroke="black" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                        <path
                            d="M16.6134 21.7988L12.7071 25.7051C12.5673 25.8449 12.3891 25.9402 12.1951 25.9787C12.0011 26.0173 11.8 25.9975 11.6173 25.9218C11.4346 25.8461 11.2784 25.718 11.1685 25.5535C11.0587 25.3891 11 25.1957 11 24.998V16.859"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </a>
                </div>
            </div>

        </header>
    );
}
export default Header;