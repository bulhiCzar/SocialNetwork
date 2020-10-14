import React from 'react'
import s from './Content.module.css'

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img src="https://skazkisameli.ru/media/k2/items/cache/1b15decb97a7e442d17245363ff90a02_XL.jpg" alt="img-header" />
            </div>
            <div>
                <div>
                    <img src="https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg" alt="ava"/>
                </div>
                <div>
                    <div>
                        <div>name</div>
                        <div>familia</div>
                    </div>
                    <div>age(born)</div>
                    <div>city</div>
                    <div>education</div>
                    <div>website</div>
                </div>
            </div>
            <div>new post</div>
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </main>
    )
}

export default Profile