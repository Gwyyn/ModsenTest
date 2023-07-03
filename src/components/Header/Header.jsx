import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/Logo.svg";
import searchBtnOff from "../../assets/buttons/searchBtn/searchBtnOff.svg";
import favoritesBtnOn from "../../assets/buttons/favoritesBtn/favoritesBtnOn.svg";
import login from "../../assets/login.svg"
import "./Header.css";
import searchBtnOn from "../../assets/buttons/searchBtn/searchBtnOn.svg";
import favoritesBtnOff from "../../assets/buttons/favoritesBtn/favoritesBtnOff.svg";
import {getAuth, setPersistence, signInWithPopup, signOut} from "firebase/auth";
import {app, browserSession, googleAuthProvider} from "../utilItems/firebase";


const Header = ({searchBtnActive, favoritesBtnActive, onToggleSearchSideBar, onToggleFavoritesSideBar}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [hovered, setHovered] = useState(false); // Добавлено состояние для отслеживания наведения на аватар

    const auth = getAuth(app);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((maybeUser) => {
            if (maybeUser != null) {
                setUser(maybeUser);
                setIsAuth(true);
            } else {
                setUser(null);
                setIsAuth(false);
            }
        });

        return unsub;
    }, [auth]);

    useEffect(() => {
        setPersistence(auth, browserSession)
            .then(() => {
            })
            .catch((error) => {
                console.error(error);
            });
    }, [auth]);

    const handleAuth = () => {
        if (isAuth) {
            signOut(auth)
                .then(() => {
                    setIsAuth(false);
                    setUser(null);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            signInWithPopup(auth, googleAuthProvider)
                .then((credentials) => {
                    setUser(credentials.user);
                    setIsAuth(true);
                })
                .catch((e) => console.error(e));
        }
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='row col-lg-1 col-md-1 col-sm-2 col-2'>
            <div
                className='min-vh-100 bg-light border border-start-2 d-flex flex-column align-items-center padding-left-0'>
                <a href='' className='mt-3 d-flex justify-content-center'>
                    <img src={Logo} alt=''/>
                </a>
                <div className='nav-link pointer px-1 mt-4 cursor-pointer' onClick={onToggleSearchSideBar}>
                    {searchBtnActive
                        ?
                        <img src={searchBtnOn} alt=''/>
                        :
                        <img className='btn' src={searchBtnOff} alt=''/>}
                </div>
                <div className='nav-link px-1 mt-2 cursor-pointer' onClick={onToggleFavoritesSideBar}>
                    {favoritesBtnActive ? <img src={favoritesBtnOn} alt=''/> :
                        <img className='btn' src={favoritesBtnOff} alt=''/>}
                </div>
                <div
                    onClick={handleAuth}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='nav-link px-1 position-absolute bottom-0 mb-4 cursor-pointer'
                >
                    {user != null
                        ?
                        <img src={user.photoURL} alt='avatar' className="avatar"/>
                        :
                        <img src={login} alt='Login'/>
                    }
                    {hovered && user != null && (
                        <img src={login} alt='Logout' className='img-login' onClick={handleAuth}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;